"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5794],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38806:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"release",title:"Release process",sidebar_label:"Release process"},c=void 0,u={unversionedId:"development/release",id:"development/release",title:"Release process",description:"The release process may be automated in the future.",source:"@site/docs/development/release.md",sourceDirName:"development",slug:"/development/release",permalink:"/docs/next/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/development/release.md",tags:[],version:"current",lastUpdatedBy:"dominicgkerr",lastUpdatedAt:1659105507,formattedLastUpdatedAt:"7/29/2022",frontMatter:{id:"release",title:"Release process",sidebar_label:"Release process"},sidebar:"docs",previous:{title:"Documentation",permalink:"/docs/next/development/documentation"},next:{title:"Introduction",permalink:"/docs/next/upgrades/intro"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"The release process may be automated in the future."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Checkout main"),(0,a.mdx)("li",{parentName:"ul"},"Update the Hydra version in ",(0,a.mdx)("inlineCode",{parentName:"li"},"hydra/__init__.py")),(0,a.mdx)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),(0,a.mdx)("li",{parentName:"ul"},"Create a wheel and source dist for hydra-core: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python -m build")),(0,a.mdx)("li",{parentName:"ul"},"Upload pip package: ",(0,a.mdx)("inlineCode",{parentName:"li"},"python -m twine upload dist/*")),(0,a.mdx)("li",{parentName:"ul"},"Update the link to the latest stable release in ",(0,a.mdx)("inlineCode",{parentName:"li"},"website/docs/intro.md")),(0,a.mdx)("li",{parentName:"ul"},"If you are creating a new release branch:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://docusaurus.io/docs/versioning#tagging-a-new-version"},"tag a new versioned copy of the docs using docusaurus")),(0,a.mdx)("li",{parentName:"ul"},"update ",(0,a.mdx)("inlineCode",{parentName:"li"},"website/docusaurus.config.js")," with a pointer to the new release branch on github")))))}d.isMDXComponent=!0}}]);