"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5815],{15680:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>s});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),s=function(e){return function(a){var t=c(a.components);return r.createElement(e,o({},a,{components:t}))}},c=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(t),p=n,g=s["".concat(i,".").concat(p)]||s[p]||u[p]||o;return t?r.createElement(g,d(d({ref:a},m),{},{components:t})):r.createElement(g,d({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var d={};for(var l in a)hasOwnProperty.call(a,l)&&(d[l]=a[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},98051:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var r=t(58168),n=t(98587),o=(t(96540),t(15680)),i=["components"],d={id:"changes_to_package_header",title:"Changes to Package Header"},l=void 0,m={unversionedId:"upgrades/1.0_to_1.1/changes_to_package_header",id:"version-1.1/upgrades/1.0_to_1.1/changes_to_package_header",title:"Changes to Package Header",description:"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_package_header.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_package_header",permalink:"/docs/1.1/upgrades/1.0_to_1.1/changes_to_package_header",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_package_header.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1727796611,formattedLastUpdatedAt:"10/1/2024",frontMatter:{id:"changes_to_package_header",title:"Changes to Package Header"},sidebar:"version-1.1/docs",previous:{title:"Defaults List interpolation",permalink:"/docs/1.1/upgrades/1.0_to_1.1/defaults_list_interpolation"},next:{title:"Automatic schema-matching",permalink:"/docs/1.1/upgrades/1.0_to_1.1/automatic_schema_matching"}},s=[{value:"Migration",id:"migration",children:[],level:3},{value:"Compatibility with both Hydra 1.0 and 1.1",id:"compatibility-with-both-hydra-10-and-11",children:[],level:3}],c={toc:s};function p(e){var a=e.components,t=(0,n.A)(e,i);return(0,o.mdx)("wrapper",(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.\nThis was done to facilitate a transition from a model where the packages are global\nto a model where - by default - package are derived from the config group."),(0,o.mdx)("p",null,"e.g: Change of the default package for ",(0,o.mdx)("inlineCode",{parentName:"p"},"server/db/mysql.yaml")," from ",(0,o.mdx)("inlineCode",{parentName:"p"},"_global_")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"server.db"),"."),(0,o.mdx)("p",null,"Hydra 1.1 completes this transition. "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If a package header is not specified, the config will have the default package as described above."),(0,o.mdx)("li",{parentName:"ul"},"_","group","_"," and ","_","name","_"," in package header are deprecated (You can still use a literal package header).")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Another important change in Hydra 1.1 is the\n",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.1/upgrades/1.0_to_1.1/default_composition_order"},"Changes to default composition order"),"."))),(0,o.mdx)("h3",{id:"migration"},"Migration"),(0,o.mdx)("p",null,"If your header is ",(0,o.mdx)("inlineCode",{parentName:"p"},"# @package _group_"),", remove the header."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),(0,o.mdx)("div",{className:"col  col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"host: localhost\n\n")))),(0,o.mdx)("p",null,"If your header is using ",(0,o.mdx)("inlineCode",{parentName:"p"},"_group_")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"_name_")," to specify a package other than the default package,\nSpecify the literal package:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_._name_\nhost: localhost\n"))),(0,o.mdx)("div",{className:"col  col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db.mysql\nhost: localhost\n")))),(0,o.mdx)("h3",{id:"compatibility-with-both-hydra-10-and-11"},"Compatibility with both Hydra 1.0 and 1.1"),(0,o.mdx)("p",null,"If your configs should be compatible with both Hydra 1.0 and Hydra 1.1, use literal package headers."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),(0,o.mdx)("div",{className:"col  col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db\nhost: localhost\n")))))}p.isMDXComponent=!0}}]);