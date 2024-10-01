"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8540],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){return function(t){var n=s(t.components);return a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(i,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(u,c(c({ref:t},p),{},{components:n})):a.createElement(u,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80557:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=n(58168),r=n(98587),o=(n(96540),n(15680)),i=["components"],c={id:"config_path_changes",title:"Config path changes",hide_title:!0},l=void 0,p={unversionedId:"upgrades/0.11_to_1.0/config_path_changes",id:"upgrades/0.11_to_1.0/config_path_changes",title:"Config path changes",description:"Config path changes",source:"@site/docs/upgrades/0.11_to_1.0/config_path_changes.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/config_path_changes",permalink:"/docs/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/0.11_to_1.0/config_path_changes.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1727796611,formattedLastUpdatedAt:"10/1/2024",frontMatter:{id:"config_path_changes",title:"Config path changes",hide_title:!0},sidebar:"docs",previous:{title:"Automatic schema-matching",permalink:"/docs/upgrades/1.0_to_1.1/automatic_schema_matching"},next:{title:"Adding an @package directive",permalink:"/docs/upgrades/0.11_to_1.0/adding_a_package_directive"}},d=[{value:"Config path changes",id:"config-path-changes",children:[],level:2},{value:"Migration examples",id:"migration-examples",children:[],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,r.A)(e,i);return(0,o.mdx)("wrapper",(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"config-path-changes"},"Config path changes"),(0,o.mdx)("p",null,"Hydra 1.0 adds a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path"),".\nPreviously, ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Search path relative to the declaring python file."),(0,o.mdx)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),(0,o.mdx)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," or just the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")),(0,o.mdx)("p",null,"A second change is that the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",(0,o.mdx)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),(0,o.mdx)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),(0,o.mdx)("h2",{id:"migration-examples"},"Migration examples"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="config.yaml")\n')),(0,o.mdx)("p",null,"Becomes: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_name="config")\n')),(0,o.mdx)("p",null,"And"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="conf/config.yaml")\n')),(0,o.mdx)("p",null,"Becomes:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_path="conf", config_name="config")\n')))}m.isMDXComponent=!0}}]);