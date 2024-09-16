"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8678],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>m,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){return function(t){var n=p(t.components);return a.createElement(e,l({},t,{components:n}))}},p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,u=c["".concat(o,".").concat(d)]||c[d]||g[d]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>s,C:()=>m});var a=n(58168),r=n(96540),l=n(75489),o=n(44586),i=n(74098);function s(e){return r.createElement(l.default,(0,a.A)({},e,{to:(t=e.to,s=(0,i.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function m(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},88123:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(58168),r=n(98587),l=(n(96540),n(15680)),o=n(49595),i=["components"],s={id:"select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group"},m=void 0,c={unversionedId:"patterns/select_multiple_configs_from_config_group",id:"version-1.1/patterns/select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group",description:"Problem",source:"@site/versioned_docs/version-1.1/patterns/select_multiple_configs_from_config_group.md",sourceDirName:"patterns",slug:"/patterns/select_multiple_configs_from_config_group",permalink:"/docs/1.1/patterns/select_multiple_configs_from_config_group",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/patterns/select_multiple_configs_from_config_group.md",tags:[],version:"1.1",lastUpdatedBy:"Sanjay Ganeshan",lastUpdatedAt:1726508026,formattedLastUpdatedAt:"9/16/2024",frontMatter:{id:"select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group"},sidebar:"version-1.1/docs",previous:{title:"Configuring Plugins",permalink:"/docs/1.1/patterns/configuring_plugins"},next:{title:"Specializing configuration",permalink:"/docs/1.1/patterns/specializing_config"}},p=[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Overriding packages",id:"overriding-packages",children:[],level:3},{value:"Implementation considerations",id:"implementation-considerations",children:[],level:3}],d={toc:p};function g(e){var t=e.components,n=(0,r.A)(e,i);return(0,l.mdx)("wrapper",(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(o.C,{text:"Example application",to:"examples/patterns/multi-select",mdxType:"ExampleGithubLink"}),(0,l.mdx)("h3",{id:"problem"},"Problem"),(0,l.mdx)("p",null,"In some scenarios, one may need to select multiple configs from the same Config Group."),(0,l.mdx)("h3",{id:"solution"},"Solution"),(0,l.mdx)("p",null,"Use a list of config names as the value of the config group in the Defaults List or in the command line."),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("p",null,"In this example, we configure a server. The server can host multiple websites at the same time."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 server\n    \u251c\u2500\u2500 apache.yaml\n    \u2514\u2500\u2500 site\n        \u251c\u2500\u2500 amazon.yaml\n        \u251c\u2500\u2500 fb.yaml\n        \u2514\u2500\u2500 google.yaml\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\n\n\n\n\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n\nhost: localhost\nport: 443\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml"',title:'"server/site/amazon.yaml"'},"amazon:\n  domain: amazon.com\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/fb.yaml"',title:'"server/site/fb.yaml"'},"fb:\n  domain: facebook.com\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/google.yaml"',title:'"server/site/google.yaml"'},"google:\n  domain: google.com\n")))),(0,l.mdx)("p",null,"Output:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {3,5}',title:'"$',python:!0,'my_app.py"':!0,"{3,5}":!0},"server:\n  site:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n  host: localhost\n  port: 443\n")),(0,l.mdx)("p",null,"Override the selected sites from the command line by passing a list. e.g:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"title=\"$ python my_app.py 'server/site=[google,amazon]'\" {3,5}",title:'"$',python:!0,"my_app.py":!0,"'server/site":"[google,amazon]'\"","{3,5}":!0},"server:\n  site:\n    google:\n      domain: google.com\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),(0,l.mdx)("h3",{id:"overriding-packages"},"Overriding packages"),(0,l.mdx)("p",null,"You can relocate the package of all the configs in the list. e.g:"),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {2}',title:'"server/apache.yaml"',"{2}":!0},"defaults:\n  - site@https:\n    - fb\n    - google\n\n\n"))),(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {2}',title:'"$',python:!0,'my_app.py"':!0,"{2}":!0},"server:\n  https:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n")))),(0,l.mdx)("p",null,"When overriding the selected configs of config groups with overridden packages you need to use the package. e.g:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py server/site@server.https=amazon"',title:'"$',python:!0,"my_app.py":!0,"server/site@server.https":'amazon"'},"server:\n  https:\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),(0,l.mdx)("h3",{id:"implementation-considerations"},"Implementation considerations"),(0,l.mdx)("p",null,"A nested list in the Defaults List is interpreted as a list of non-overridable configs:"),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n"))),(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Equivalent to" {2,3}',title:'"Equivalent','to"':!0,"{2,3}":!0},"defaults:\n  - site/fb\n  - site/google\n\n")))),(0,l.mdx)("p",null,"All default package for all the configs in ",(0,l.mdx)("inlineCode",{parentName:"p"},"server/site")," is ",(0,l.mdx)("inlineCode",{parentName:"p"},"server.site"),".\nThis example uses an explicit nesting level inside each of the website configs to prevent them stepping over one another:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml" {1}',title:'"server/site/amazon.yaml"',"{1}":!0},"amazon:\n  ...\n")))}g.isMDXComponent=!0}}]);