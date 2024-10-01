"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4980],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>l,C:()=>m});var r=n(58168),a=n(96540),o=n(75489),i=n(44586),s=n(74098);function l(e){return a.createElement(o.default,(0,r.A)({},e,{to:(t=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function m(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},63058:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),i=n(49595),s=["components"],l={id:"composition",title:"Putting it all together"},m=void 0,c={unversionedId:"tutorials/basic/your_first_app/composition",id:"version-1.0/tutorials/basic/your_first_app/composition",title:"Putting it all together",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/6_composition.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/composition",permalink:"/docs/1.0/tutorials/basic/your_first_app/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/6_composition.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1727796611,formattedLastUpdatedAt:"10/1/2024",sidebarPosition:6,frontMatter:{id:"composition",title:"Putting it all together"},sidebar:"version-1.0/docs",previous:{title:"Selecting defaults for config groups",permalink:"/docs/1.0/tutorials/basic/your_first_app/defaults"},next:{title:"Multi-run",permalink:"/docs/1.0/tutorials/basic/running_your_app/multi-run"}},p=[{value:"Summary",id:"summary",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,a.A)(e,s);return(0,o.mdx)("wrapper",(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{to:"examples/tutorials/basic/your_first_hydra_app/6_composition",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),(0,o.mdx)("p",null,"To do this in Hydra, we first add a ",(0,o.mdx)("inlineCode",{parentName:"p"},"schema")," and a ",(0,o.mdx)("inlineCode",{parentName:"p"},"ui")," config group:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Directory layout"',title:'"Directory','layout"':!0},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,o.mdx)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",(0,o.mdx)("inlineCode",{parentName:"p"},"db.user")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),(0,o.mdx)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),(0,o.mdx)("p",null,"The resulting configuration would be a composition of ",(0,o.mdx)("inlineCode",{parentName:"p"},"mysql"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"full")," ui and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\nui:\n  windows:\n    create_db: true\n    view: true\nschema:\n  database: school\n  tables:\n  - name: students\n    fields:\n    - name: string\n    - class: int\n  - name: exams\n    fields:\n    - profession: string\n    - time: data\n    - class: int\n")),(0,o.mdx)("h3",{id:"summary"},"Summary"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The addition of each new db, schema, or ui only requires a single file"),(0,o.mdx)("li",{parentName:"ul"},"Each config group can have a default specified in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"defaults")," list"),(0,o.mdx)("li",{parentName:"ul"},"Any combination can be composed by selecting the desired option from each config group in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"defaults")," list or the command line.")),(0,o.mdx)("p",null,"Stay tuned to see how to run all of the combinations automatically (",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/multi-run"},"Multi-run"),")."))}d.isMDXComponent=!0}}]);