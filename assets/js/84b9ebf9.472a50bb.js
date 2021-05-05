(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),o=(n(0),n(295)),i={id:"optimize",title:"@graphql-tools/optimize",sidebar_label:"optimize"},p={unversionedId:"api/modules/optimize",id:"api/modules/optimize",isDocsHomePage:!1,title:"@graphql-tools/optimize",description:"- DocumentOptimizer",source:"@site/docs/api/modules/optimize_src.md",slug:"/api/modules/optimize",permalink:"/docs/api/modules/optimize",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/optimize_src.md",version:"current",sidebar_label:"optimize",sidebar:"someSidebar",previous:{title:"@graphql-tools/node-require",permalink:"/docs/api/modules/node-require"},next:{title:"@graphql-tools/relay-operation-optimizer",permalink:"/docs/api/modules/relay-operation-optimizer"}},b=[{value:"Functions",id:"functions",children:[]},{value:"Type aliases",id:"type-aliases",children:[{value:"DocumentOptimizer",id:"documentoptimizer",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"optimizeDocumentNode",id:"optimizedocumentnode",children:[]},{value:"removeDescriptions",id:"removedescriptions",children:[]},{value:"removeEmptyNodes",id:"removeemptynodes",children:[]},{value:"removeLoc",id:"removeloc",children:[]}]}],c={toc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/modules/optimize#documentoptimizer"},"DocumentOptimizer"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/modules/optimize#optimizedocumentnode"},"optimizeDocumentNode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/modules/optimize#removedescriptions"},"removeDescriptions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/modules/optimize#removeemptynodes"},"removeEmptyNodes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/api/modules/optimize#removeloc"},"removeLoc"))),Object(o.b)("h2",{id:"type-aliases"},"Type aliases"),Object(o.b)("h3",{id:"documentoptimizer"},"DocumentOptimizer"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"DocumentOptimizer"),": (",Object(o.b)("inlineCode",{parentName:"p"},"input"),": DocumentNode) =",">"," DocumentNode"),Object(o.b)("h4",{id:"type-declaration"},"Type declaration"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"input"),": DocumentNode): DocumentNode"),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"input")),Object(o.b)("td",{parentName:"tr",align:"left"},"DocumentNode")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/optimize/src/types.ts#L3"},"packages/optimize/src/types.ts:3")),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"optimizedocumentnode"},"optimizeDocumentNode"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"optimizeDocumentNode"),"(",Object(o.b)("inlineCode",{parentName:"p"},"node"),": DocumentNode, ",Object(o.b)("inlineCode",{parentName:"p"},"optimizers?"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/optimize#documentoptimizer"},Object(o.b)("em",{parentName:"a"},"DocumentOptimizer")),"[]): DocumentNode"),Object(o.b)("p",null,"This method accept a DocumentNode and applies the optimizations you wish to use.\nYou can override the default ones or provide you own optimizers if you wish."),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"node")),Object(o.b)("td",{parentName:"tr",align:"left"},"DocumentNode"),Object(o.b)("td",{parentName:"tr",align:"left"},"document to optimize")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"optimizers")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/docs/api/modules/optimize#documentoptimizer"},Object(o.b)("em",{parentName:"a"},"DocumentOptimizer")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"optional, list of optimizer to use")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/optimize/src/optimize.ts#L16"},"packages/optimize/src/optimize.ts:16")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removedescriptions"},"removeDescriptions"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"removeDescriptions"),"(",Object(o.b)("inlineCode",{parentName:"p"},"input"),": DocumentNode): DocumentNode"),Object(o.b)("p",null,'This optimizer removes "description" field from schema AST definitions.'),Object(o.b)("h4",{id:"parameters-2"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"input")),Object(o.b)("td",{parentName:"tr",align:"left"},"DocumentNode")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/optimize/src/optimizers/remove-description.ts#L8"},"packages/optimize/src/optimizers/remove-description.ts:8")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeemptynodes"},"removeEmptyNodes"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"removeEmptyNodes"),"(",Object(o.b)("inlineCode",{parentName:"p"},"input"),": DocumentNode): DocumentNode"),Object(o.b)("p",null,"This optimizer removes empty nodes/arrays (directives/argument/variableDefinitions) from a given DocumentNode of operation/fragment."),Object(o.b)("h4",{id:"parameters-3"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"input")),Object(o.b)("td",{parentName:"tr",align:"left"},"DocumentNode")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/optimize/src/optimizers/remove-empty-nodes.ts#L8"},"packages/optimize/src/optimizers/remove-empty-nodes.ts:8")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeloc"},"removeLoc"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"removeLoc"),"(",Object(o.b)("inlineCode",{parentName:"p"},"input"),": DocumentNode): DocumentNode"),Object(o.b)("p",null,'This optimizer removes "loc" fields'),Object(o.b)("h4",{id:"parameters-4"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"input")),Object(o.b)("td",{parentName:"tr",align:"left"},"DocumentNode")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," DocumentNode"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/optimize/src/optimizers/remove-loc.ts#L8"},"packages/optimize/src/optimizers/remove-loc.ts:8")))}m.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),l=m(n),s=a,u=l["".concat(i,".").concat(s)]||l[s]||d[s]||o;return n?r.a.createElement(u,p(p({ref:t},c),{},{components:n})):r.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);