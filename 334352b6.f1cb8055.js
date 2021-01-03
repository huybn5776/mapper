(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{182:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,p(p({ref:t},s),{},{components:a})):r.a.createElement(m,p({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(182)),i={id:"javascript-support",title:"JavaScript Support",sidebar_label:"JavaScript Support"},p={unversionedId:"usages/features/javascript-support",id:"version-7.0.0/usages/features/javascript-support",isDocsHomePage:!1,title:"JavaScript Support",description:"@nartc/automapper v6 brings basic JavaScript support by exposing a method called createMapMetadata(). @nartc/automapper works based on metadata of the properties on a given class.",source:"@site/versioned_docs/version-7.0.0/usages/features/javascript-support.md",slug:"/usages/features/javascript-support",permalink:"/docs/usages/features/javascript-support",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-7.0.0/usages/features/javascript-support.md",version:"7.0.0",sidebar_label:"JavaScript Support",sidebar:"version-7.0.0/docs",previous:{title:"Map Callbacks",permalink:"/docs/usages/features/callbacks"},next:{title:"Circular Dependencies",permalink:"/docs/usages/avoids/circular-dependency"}},c=[{value:"API",id:"api",children:[]},{value:"Array",id:"array",children:[]},{value:"Other note",id:"other-note",children:[]}],s={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," v6 brings basic ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript")," support by exposing a method called ",Object(o.b)("inlineCode",{parentName:"p"},"createMapMetadata()"),". ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," works based on ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," of the properties on a given class.\nIn ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," is provided by ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator and/or the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugin"}),"Transformer Plugin"),"."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript"),", it might be hard (or simple depends on your environment) to support ",Object(o.b)("inlineCode",{parentName:"p"},"decorators"),". Hence, ",Object(o.b)("inlineCode",{parentName:"p"},"createMapMetadata()")," is exposed for you to provide the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," for ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),".\nTake a look at the following class in ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export class User {\n  @AutoMap()\n  firstName!: string;\n  @AutoMap()\n  lastName!: string;\n  @AutoMap()\n  age!: number;\n  @AutoMap()\n  birthday!: Date;\n  @AutoMap()\n  isAdult!: boolean;\n  @AutoMap()\n  addresses!: string[];\n  @AutoMap(() => Profile)\n  profile!: Profile;\n}\n")),Object(o.b)("p",null,"Well, in ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript"),", this is probably what you have"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"export class User {}\n")),Object(o.b)("p",null,"...or you might not have a class at all. However, ",Object(o.b)("strong",{parentName:"p"},"Object-Oriented Programming")," is something ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript")," supports out of the box and if you deem ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," can be useful to you,\nyou might want to start creating some empty classes. These empty classes can always have ",Object(o.b)("strong",{parentName:"p"},"instance methods")," because ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," will return the true ",Object(o.b)("strong",{parentName:"p"},"instance")," instead of a ",Object(o.b)("strong",{parentName:"p"},"plain")," Object.\nWhen you have your class ready, call ",Object(o.b)("inlineCode",{parentName:"p"},"createMapMetadata()")," as follow"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"export class User {}\n\ncreateMapMetadata(User, {\n  firstName: String,\n  lastName: String,\n  isAdult: Boolean,\n  birthday: Date,\n  age: Number,\n  addresses: [],\n  profile: Profile,\n});\n")),Object(o.b)("p",null,"And voila, now you can use ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," because the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," of ",Object(o.b)("inlineCode",{parentName:"p"},"User")," has been stored."),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("p",null,"The API is fairly simple. ",Object(o.b)("inlineCode",{parentName:"p"},"createMapMetadata(Class, options)")," where ",Object(o.b)("inlineCode",{parentName:"p"},"Class")," is a ",Object(o.b)("inlineCode",{parentName:"p"},"Constructible")," which is the ",Object(o.b)("inlineCode",{parentName:"p"},"Class")," itself, not an ",Object(o.b)("strong",{parentName:"p"},"instance")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"options")," is an object with ",Object(o.b)("inlineCode",{parentName:"p"},"keys")," as ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," on this class and ",Object(o.b)("inlineCode",{parentName:"p"},"values")," as ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," of the properties."),Object(o.b)("p",null,"Pay attention that the ",Object(o.b)("inlineCode",{parentName:"p"},"values")," are provided as ",Object(o.b)("inlineCode",{parentName:"p"},"constructors")," like ",Object(o.b)("inlineCode",{parentName:"p"},"String"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Number")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),", ",Object(o.b)("inlineCode",{parentName:"p"},"number"),".\nFor nested models, just provide the ",Object(o.b)("inlineCode",{parentName:"p"},"Constructible<Class>")," (eg: ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),")."),Object(o.b)("h3",{id:"array"},"Array"),Object(o.b)("p",null,"Array is a little bit tricky. If you have an array of ",Object(o.b)("inlineCode",{parentName:"p"},"primitives")," like ",Object(o.b)("inlineCode",{parentName:"p"},"Array<string>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Array<boolean>"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"Array<number>")," then all you need to provide is ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," as the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata"),".\nIf you have an ",Object(o.b)("inlineCode",{parentName:"p"},"Array<NestedModel>"),", provide the ",Object(o.b)("inlineCode",{parentName:"p"},"NestedModel")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"[NestedModel]"),". ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," only needs to store the actual model. The ",Object(o.b)("inlineCode",{parentName:"p"},"sourceObject"),", when ",Object(o.b)("inlineCode",{parentName:"p"},"map()"),", will\ndetermine whether ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," should map to an array instead."),Object(o.b)("h3",{id:"other-note"},"Other note"),Object(o.b)("p",null,"You can always use ",Object(o.b)("inlineCode",{parentName:"p"},"createMapMetadata()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")," and if you do, you will have intellisense for which ",Object(o.b)("inlineCode",{parentName:"p"},"properties")," are available based on the ",Object(o.b)("inlineCode",{parentName:"p"},"Class")," you provide."))}l.isMDXComponent=!0}}]);