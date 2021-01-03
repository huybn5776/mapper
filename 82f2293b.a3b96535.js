(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{117:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),i=(t(0),t(182)),o={id:"basic",title:"Reverse Map",sidebar_label:"Basic"},p={unversionedId:"usages/mapping-configuration/reverse-map/basic",id:"version-7.0.0/usages/mapping-configuration/reverse-map/basic",isDocsHomePage:!1,title:"Reverse Map",description:"@nartc/automapper supports Reverse Mapping by chaining reverseMap() after createMap(). This will create a reversed Mapping for the two models that were passed in createMap()",source:"@site/versioned_docs/version-7.0.0/usages/mapping-configuration/reverse-map/basic.md",slug:"/usages/mapping-configuration/reverse-map/basic",permalink:"/docs/usages/mapping-configuration/reverse-map/basic",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-7.0.0/usages/mapping-configuration/reverse-map/basic.md",version:"7.0.0",sidebar_label:"Basic",sidebar:"version-7.0.0/docs",previous:{title:"Ignore",permalink:"/docs/usages/mapping-configuration/for-member/ignore"},next:{title:"ForPath",permalink:"/docs/usages/mapping-configuration/reverse-map/for-path"}},c=[],s={rightToc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," supports ",Object(i.b)("strong",{parentName:"p"},"Reverse Mapping")," by chaining ",Object(i.b)("inlineCode",{parentName:"p"},"reverseMap()")," after ",Object(i.b)("inlineCode",{parentName:"p"},"createMap()"),". This will create a reversed ",Object(i.b)("inlineCode",{parentName:"p"},"Mapping")," for the two models that were passed in ",Object(i.b)("inlineCode",{parentName:"p"},"createMap()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(Source, Destination) // <-- create `Mapping<Source, Destination>`\n  .reverseMap(); // <-- create `Mapping<Destination, Source>`\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"reverseMap()")," returns a ",Object(i.b)("inlineCode",{parentName:"p"},"CreateReversedMapFluentFunctions")," which will allow you to chain ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/usages/features/callbacks"}),"Callbacks")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"for-path"}),"ForPath"),"."))}u.isMDXComponent=!0},182:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,f=l["".concat(o,".").concat(m)]||l[m]||b[m]||i;return t?a.a.createElement(f,p(p({ref:r},s),{},{components:t})):a.a.createElement(f,p({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);