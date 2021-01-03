(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=m(n),f=r,b=l["".concat(i,".").concat(f)]||l[f]||s[f]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),o=(n(0),n(182)),i={id:"from-value",title:"FromValue",sidebar_label:"FromValue"},c={unversionedId:"usages/mapping-configuration/for-member/from-value",id:"usages/mapping-configuration/for-member/from-value",isDocsHomePage:!1,title:"FromValue",description:"fromValue() takes in a raw value to map to destination.. Please take note that if you pass in an object to fromValue(), that object will be mapped without consideration for any Mapping",source:"@site/docs/usages/mapping-configuration/for-member/from-value.md",slug:"/usages/mapping-configuration/for-member/from-value",permalink:"/docs/next/usages/mapping-configuration/for-member/from-value",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/docs/usages/mapping-configuration/for-member/from-value.md",version:"current",sidebar_label:"FromValue",sidebar:"docs",previous:{title:"Condition",permalink:"/docs/next/usages/mapping-configuration/for-member/condition"},next:{title:"MapWith",permalink:"/docs/next/usages/mapping-configuration/for-member/map-with"}},p=[],u={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"fromValue()")," takes in a raw value to map to ",Object(o.b)("inlineCode",{parentName:"p"},"destination.<some_member>"),". Please take note that if you pass in an object to ",Object(o.b)("inlineCode",{parentName:"p"},"fromValue()"),", that object will be mapped without consideration for any ",Object(o.b)("inlineCode",{parentName:"p"},"Mapping")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm).forMember(\n  dest => dest.fullName,\n  fromValue('Some raw value')\n);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"fromValue()")," will set the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/guides/basic-concept#mappingtransformation"}),"TransformationType")," to ",Object(o.b)("inlineCode",{parentName:"p"},"FromValue"),"."))}m.isMDXComponent=!0}}]);