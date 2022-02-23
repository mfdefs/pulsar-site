"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6014],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes",original_id:"deploy-kubernetes"},u=void 0,l={unversionedId:"deploy-kubernetes",id:"version-2.9.1/deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",description:"To get up and running with these charts as fast as possible, in a non-production use case, we provide a quick start guide for Proof of Concept (PoC) deployments.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.9.1/deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/zh-CN/docs/deploy-kubernetes",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/deploy-kubernetes.md",tags:[],version:"2.9.1",frontMatter:{id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes",original_id:"deploy-kubernetes"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Amazon Web Services",permalink:"/zh-CN/docs/deploy-aws"},next:{title:"Bare metal",permalink:"/zh-CN/docs/deploy-bare-metal"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get up and running with these charts as fast as possible, in a ",(0,a.kt)("strong",{parentName:"p"},"non-production")," use case, we provide a ",(0,a.kt)("a",{parentName:"p",href:"getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,a.kt)("p",null,"To configure and install a Pulsar cluster on Kubernetes for production usage, follow the complete ",(0,a.kt)("a",{parentName:"p",href:"helm-install"},"Installation Guide"),"."))}d.isMDXComponent=!0}}]);