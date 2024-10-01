"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2729],{15680:(e,r,o)=>{o.r(r),o.d(r,{MDXContext:()=>c,MDXProvider:()=>g,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>s});var t=o(96540);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a.apply(this,arguments)}function l(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?l(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),s=function(e){return function(r){var o=d(r.components);return t.createElement(e,a({},r,{components:o}))}},d=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},g=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(o),g=n,u=s["".concat(l,".").concat(g)]||s[g]||m[g]||a;return o?t.createElement(u,i(i({ref:r},c),{},{components:o})):t.createElement(u,i({ref:r},c))}));function h(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},325:(e,r,o)=>{o.r(r),o.d(r,{contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=o(58168),n=o(98587),a=(o(96540),o(15680)),l=["components"],i={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},p=void 0,c={unversionedId:"plugins/colorlog",id:"version-1.0/plugins/colorlog",title:"Colorlog plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/1.0/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/plugins/colorlog.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1727796611,formattedLastUpdatedAt:"10/1/2024",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"version-1.0/docs",previous:{title:"Customizing Application's help",permalink:"/docs/1.0/configure_hydra/app_help"},next:{title:"Joblib Launcher plugin",permalink:"/docs/1.0/plugins/joblib_launcher"}},s=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],d={toc:s};function g(e){var r=e.components,i=(0,n.A)(e,l);return(0,a.mdx)("wrapper",(0,t.A)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-colorlog/"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-colorlog",alt:"PyPI"})),"\n",(0,a.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-colorlog",alt:"PyPI - License"}),"\n",(0,a.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-colorlog",alt:"PyPI - Python Version"}),"\n",(0,a.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-colorlog"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-colorlog.svg",alt:"PyPI - Downloads"})),"\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,a.mdx)("p",null,"Adds ",(0,a.mdx)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,a.mdx)("h3",{id:"installation"},"Installation"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra_colorlog --upgrade\n")),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"Override ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),(0,a.mdx)("p",null,"See included ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_colorlog/example"},"example"),"."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Colored log output",src:o(69674).A})))}g.isMDXComponent=!0},69674:(e,r,o)=>{o.d(r,{A:()=>t});const t=o.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);