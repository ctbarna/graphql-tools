import { GraphQLSchema, FieldNode } from 'graphql';

import DataLoader from 'dataloader';

import { SubschemaConfig, Transformer, DelegationContext, validateRequest, getExecutor } from '@graphql-tools/delegate';
import { ExecutionRequest, ExecutionResult } from '@graphql-tools/utils';

import { BatchDelegateOptions } from './types';

const cache1: WeakMap<
  ReadonlyArray<FieldNode>,
  WeakMap<GraphQLSchema | SubschemaConfig, Record<string, DataLoader<any, any>>>
> = new WeakMap();

function createBatchFn<K = any>(
  options: BatchDelegateOptions,
  request: ExecutionRequest,
  delegationContext: DelegationContext
) {
  const argsFromKeys = options.argsFromKeys ?? ((keys: ReadonlyArray<K>) => ({ ids: keys }));

  const { validateRequest: shouldValidateRequest } = options;

  const { fieldName, context, info } = delegationContext;

  return async (keys: ReadonlyArray<K>) => {
    const transformer = new Transformer({
      ...delegationContext,
      args: argsFromKeys(keys),
    });

    const processedRequest = transformer.transformRequest(request);

    if (shouldValidateRequest) {
      validateRequest(delegationContext, processedRequest.document);
    }

    const executor = getExecutor(delegationContext);

    const batchResult = (await executor({
      ...processedRequest,
      context,
      info,
    })) as ExecutionResult;

    return splitResult(transformer.transformResult(batchResult), fieldName, keys.length);
  };
}

export function getLoader<K = any, C = K>(
  options: BatchDelegateOptions<any>,
  request: ExecutionRequest,
  delegationContext: DelegationContext<any>
): DataLoader<K, ExecutionResult, C> {
  const fieldName = options.fieldName ?? options.info.fieldName;

  let cache2 = cache1.get(options.info.fieldNodes);

  if (cache2 === undefined) {
    cache2 = new WeakMap();
    cache1.set(options.info.fieldNodes, cache2);
    const loaders = Object.create(null);
    cache2.set(options.schema, loaders);
    const batchFn = createBatchFn(options, request, delegationContext);
    const loader = new DataLoader<K, ExecutionResult, C>(keys => batchFn(keys), options.dataLoaderOptions);
    loaders[fieldName] = loader;
    return loader;
  }

  const loaders = cache2.get(options.schema);

  if (loaders === undefined) {
    const newLoaders = Object.create(null);
    cache2.set(options.schema, newLoaders);
    const batchFn = createBatchFn(options, request, delegationContext);
    const loader = new DataLoader<K, ExecutionResult, C>(keys => batchFn(keys), options.dataLoaderOptions);
    newLoaders[fieldName] = loader;
    return loader;
  }

  let loader = loaders[fieldName];

  if (loader === undefined) {
    const batchFn = createBatchFn(options, request, delegationContext);
    loader = new DataLoader<K, ExecutionResult, C>(keys => batchFn(keys), options.dataLoaderOptions);
    loaders[fieldName] = loader;
  }

  return loader;
}

function splitResult(result: ExecutionResult, fieldName: string, numItems: number): Array<ExecutionResult> {
  const { data, errors } = result;
  const fieldData = data?.[fieldName];

  if (fieldData === undefined) {
    if (errors === undefined) {
      return Array(numItems).fill({});
    }

    return Array(numItems).fill({ errors });
  }

  return fieldData.map((value: any) => ({
    data: {
      [fieldName]: value,
    },
    errors,
  }));
}
