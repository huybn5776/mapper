(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{182:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),m=i,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var i=t(2),a=t(6),r=(t(0),t(182)),o={id:"initialize",title:"Initialize",sidebar_label:"Initialize (deprecated in v6)"},c={unversionedId:"usages/init/initialize",id:"version-6.0.0/usages/init/initialize",isDocsHomePage:!1,title:"Initialize",description:"deprecated",source:"@site/versioned_docs/version-6.0.0/usages/init/initialize.md",slug:"/usages/init/initialize",permalink:"/docs/6.0.0/usages/init/initialize",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/usages/init/initialize.md",version:"6.0.0",sidebar_label:"Initialize (deprecated in v6)",sidebar:"version-6.0.0/docs",previous:{title:"Global Settings",permalink:"/docs/6.0.0/usages/init/with-global-settings"},next:{title:"ForMember Basic",permalink:"/docs/6.0.0/usages/mapping-configuration/for-member/basic"}},p=[{value:"<code>withGlobalSettings</code>",id:"withglobalsettings",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"deprecated")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"AutoMapper")," exposes an instance method ",Object(r.b)("inlineCode",{parentName:"p"},"initialize()")," to configure your ",Object(r.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance the same way as ",Object(r.b)("inlineCode",{parentName:"p"},"createMap()")," combined with ",Object(r.b)("inlineCode",{parentName:"p"},"addProfile()"),".\n",Object(r.b)("inlineCode",{parentName:"p"},"initialize()")," expects a ",Object(r.b)("inlineCode",{parentName:"p"},"callback (config: Configuration) => void")," as its only argument. ",Object(r.b)("inlineCode",{parentName:"p"},"Configuration")," has the same ",Object(r.b)("inlineCode",{parentName:"p"},"addProfile()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"createMap()")," as the ",Object(r.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.initialize(config => {\n  config.addProfile(SourceProfile);\n  config.createMap(OtherSource, OtherDestination);\n});\n")),Object(r.b)("h3",{id:"withglobalsettings"},Object(r.b)("inlineCode",{parentName:"h3"},"withGlobalSettings")),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"initialize()"),", you can also configure some ",Object(r.b)("strong",{parentName:"p"},"global settings")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance. At the moment, only ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/6.0.0/usages/features/naming-convention"}),"NamingConvention")," is the only ",Object(r.b)("strong",{parentName:"p"},"global setting"),".\nTo configure the ",Object(r.b)("strong",{parentName:"p"},"global settings"),", call ",Object(r.b)("inlineCode",{parentName:"p"},"withGlobalSettings()")," on the ",Object(r.b)("inlineCode",{parentName:"p"},"Configuration"),". ",Object(r.b)("inlineCode",{parentName:"p"},"withGlobalSettings()")," expects a ",Object(r.b)("inlineCode",{parentName:"p"},"AutoMapperGlobalSettings")," as its argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.initialize(config => {\n  config.withGlobalSettings({ sourceNamingConvention: ..., destinationNamingConvention: ... });\n});\n")),Object(r.b)("p",null,"These ",Object(r.b)("strong",{parentName:"p"},"global settings")," will be applied to ALL ",Object(r.b)("inlineCode",{parentName:"p"},"Mappings")," on the ",Object(r.b)("inlineCode",{parentName:"p"},"AutoMapper")," instance. By default, both ",Object(r.b)("inlineCode",{parentName:"p"},"sourceNamingConvention")," and ",Object(r.b)("inlineCode",{parentName:"p"},"destinationNamingConvention")," are ",Object(r.b)("inlineCode",{parentName:"p"},"CamelCaseNamingConvention"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"interface AutoMapperGlobalSettings {\n  sourceNamingConvention?: Constructible<NamingConvention>;\n  destinationNamingConvention?: Constructible<NamingConvention>;\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We will learn more about ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/6.0.0/usages/features/naming-convention"}),"NamingConvention")," in a later section.")))}s.isMDXComponent=!0}}]);