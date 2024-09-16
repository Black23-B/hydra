"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7715],{15680:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>u});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m=a.createContext({}),u=function(e){return function(r){var n=c(r.components);return a.createElement(e,i({},r,{components:n}))}},c=function(e){var r=a.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},p=function(e){var r=c(e.components);return a.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=t,g=u["".concat(o,".").concat(p)]||u[p]||s[p]||i;return n?a.createElement(g,d(d({ref:r},m),{},{components:n})):a.createElement(g,d({ref:r},m))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=g;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49595:(e,r,n)=>{n.d(r,{A:()=>l,C:()=>m});var a=n(58168),t=n(96540),i=n(75489),o=n(44586),d=n(74098);function l(e){return t.createElement(i.default,(0,a.A)({},e,{to:(r=e.to,l=(0,d.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+r),target:"_blank"}));var r,n,l}function m(e){var r,n=null!=(r=e.text)?r:"Example (Click Here)";return t.createElement(l,e,t.createElement("span",null,"\xa0"),t.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},31465:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>m,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(58168),t=n(98587),i=(n(96540),n(15680)),o=n(49595),d=["components"],l={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},m=void 0,u={unversionedId:"configure_hydra/workdir",id:"version-1.2/configure_hydra/workdir",title:"Customizing working directory pattern",description:"Hydra automatically creates an output directory used to store log files and",source:"@site/versioned_docs/version-1.2/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/1.2/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/configure_hydra/workdir.md",tags:[],version:"1.2",lastUpdatedBy:"Sanjay Ganeshan",lastUpdatedAt:1726508026,formattedLastUpdatedAt:"9/16/2024",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"docs",previous:{title:"Customizing logging",permalink:"/docs/1.2/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/1.2/configure_hydra/app_help"}},c=[{value:"Configuration for run",id:"configuration-for-run",children:[],level:3},{value:"Configuration for multirun",id:"configuration-for-multirun",children:[],level:3},{value:"Using <code>hydra.job.override_dirname</code>",id:"using-hydrajoboverride_dirname",children:[],level:3}],p={toc:c};function s(e){var r=e.components,n=(0,t.A)(e,d);return(0,i.mdx)("wrapper",(0,a.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{text:"Example application",to:"examples/configure_hydra/workdir",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Hydra automatically creates an output directory used to store log files and\nsave yaml configs. This directory can be configured by setting ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.run.dir"),"\n(for single hydra runs) or ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.dir"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.subdir")," (for multirun\nsweeps). At runtime, the path of the output directory can be\n",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.2/configure_hydra/intro#accessing-the-hydra-config"},"accessed")," via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.runtime.output_dir")," variable.\nBelow are a few examples of customizing output directory patterns."),(0,i.mdx)("h3",{id:"configuration-for-run"},"Configuration for run"),(0,i.mdx)("p",null,"Run output directory grouped by date:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,i.mdx)("p",null,"Run output directory grouped by job name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,i.mdx)("p",null,"Run output directory can contain user configuration variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n")),(0,i.mdx)("h3",{id:"configuration-for-multirun"},"Configuration for multirun"),(0,i.mdx)("p",null,"We will run the application with same command but different configurations:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun a=a1,a2,a3 \n")),(0,i.mdx)("p",null,"Default multirun dir configurations:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--8"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.mdx)("p",null,"Similar configuration patterns in run can be applied to config multirun dir as well."),(0,i.mdx)("p",null,"For example, multirun output directory grouped by job name, and sub dir by job num:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: ${hydra.job.name}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.mdx)("h3",{id:"using-hydrajoboverride_dirname"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h3"},"hydra.job.override_dirname")),(0,i.mdx)(o.C,{text:"Example application",to:"examples/configure_hydra/job_override_dirname",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern. It is meant to be used along with the configuration for working dir, especially\nin ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.subdir"),"."),(0,i.mdx)("p",null,"If we run the example application with the following commandline overrides and configs:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun batch_size=32 learning_rate=0.1,0.01\n")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun\n    subdir: ${hydra.job.override_dirname}\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="working dir created"',title:'"working',dir:!0,'created"':!0},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n")))),(0,i.mdx)("p",null,"You can further customized the output dir creation by configuring",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),(0,i.mdx)("p",null,"In particular, the separator char ",(0,i.mdx)("inlineCode",{parentName:"p"},"=")," and the item separator char ",(0,i.mdx)("inlineCode",{parentName:"p"},",")," can be modified by overriding\n",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.kv_sep")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.item_sep"),".\nCommand line override keys can also be automatically excluded from the generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"override_dirname"),"."),(0,i.mdx)("p",null,"An example of a case where the exclude is useful is a random seed."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),(0,i.mdx)("p",null,"With this configuration, running"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --multirun  batch_size=32 learning_rate=0.1,0.01 seed=1,2\n")),(0,i.mdx)("p",null,"Would result in a directory structure like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2502\xa0\xa0 \u251c\u2500\u2500 seed=1\n\u2502\xa0\xa0 \u2514\u2500\u2500 seed=2\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n    \u251c\u2500\u2500 seed=1\n    \u2514\u2500\u2500 seed=2\n")))}s.isMDXComponent=!0}}]);