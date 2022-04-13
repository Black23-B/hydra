"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9280],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,f=s["".concat(i,".").concat(u)]||s[u]||c[u]||o;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27469:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=(t(44996),t(39960),["components"]),l={id:"intro",title:"Getting started",sidebar_label:"Getting started"},m=void 0,d={unversionedId:"intro",id:"version-0.11/intro",title:"Getting started",description:"Introduction",source:"@site/versioned_docs/version-0.11/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/0.11/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/intro.md",tags:[],version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1649884206,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"intro",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-0.11/docs",next:{title:"Simple command line application",permalink:"/docs/0.11/tutorial/simple_cli"}},s=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[],level:3}],level:2},{value:"Versions",id:"versions",children:[],level:2},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Basic example",id:"basic-example",children:[],level:3},{value:"Composition example",id:"composition-example",children:[],level:3},{value:"Multirun",id:"multirun",children:[],level:3}],level:2},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[],level:3},{value:"Citing Hydra",id:"citing-hydra",children:[],level:3}],level:2}],p={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),(0,o.mdx)("h3",{id:"key-features"},"Key features:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),(0,o.mdx)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),(0,o.mdx)("li",{parentName:"ul"},"Dynamic command line tab completion"),(0,o.mdx)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),(0,o.mdx)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),(0,o.mdx)("h2",{id:"versions"},"Versions"),(0,o.mdx)("p",null,"Hydra supports Linux, Mac and Windows.",(0,o.mdx)("br",{parentName:"p"}),"\n","Use the version switcher in the top bar to switch between documentation versions."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null}),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"),(0,o.mdx)("th",{parentName:"tr",align:null},"Release notes"),(0,o.mdx)("th",{parentName:"tr",align:null},"Python Versions"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},"1.1 (Stable)"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/v1.1.0"},"Release notes")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},"3.6 - 3.9"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},"1.0"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/v1.0.0rc1"},"Release notes")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},"3.6 - 3.8"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"\u25ba"),(0,o.mdx)("td",{parentName:"tr",align:null},"0.11"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"},"Release notes")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},"2.7, 3.5 - 3.8"))))),(0,o.mdx)("h2",{id:"quick-start-guide"},"Quick start guide"),(0,o.mdx)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/0.11/tutorial/simple_cli"},"tutorial")," to gain a deeper understanding."),(0,o.mdx)("h3",{id:"installation"},"Installation"),(0,o.mdx)("p",null,"Install Hydra 0.11 with ",(0,o.mdx)("inlineCode",{parentName:"p"},"pip install hydra-core --upgrade"),"."),(0,o.mdx)("h3",{id:"basic-example"},"Basic example"),(0,o.mdx)("p",null,"Configuration file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),(0,o.mdx)("p",null,"Python file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{4-6}","{4-6}":!0},'import hydra\nfrom omegaconf import DictConfig\n\n@hydra.main(config_path="config.yaml")\ndef my_app(cfg : DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,o.mdx)("p",null,"You can learn more about OmegaConf ",(0,o.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"},"here")," later."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,o.mdx)("p",null,"You can override values in the loaded config from the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),(0,o.mdx)("h3",{id:"composition-example"},"Composition example"),(0,o.mdx)("p",null,"You may want to alternate between two different databases. To support this create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,o.mdx)("p",null,"Here is the new ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n# some other config options in your config file.\nwebsite:\n  domain: example.com\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,o.mdx)("p",null,"You can now choose which database configuration to use from the and override values from the command line: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\nwebsite:\n    domain: example.com\n")),(0,o.mdx)("p",null,"You can have as many config groups as you need."),(0,o.mdx)("h3",{id:"multirun"},"Multirun"),(0,o.mdx)("p",null,"You can run your function multiple times with different configuration easily with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nwebsite:\n    domain: example.com\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\nwebsite:\n    domain: example.com\n")),(0,o.mdx)("p",null,"There is a whole lot more to Hydra. Read the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/0.11/tutorial/simple_cli"},"tutorial")," to learn more."),(0,o.mdx)("h2",{id:"other-stuff"},"Other stuff"),(0,o.mdx)("h3",{id:"community"},"Community"),(0,o.mdx)("p",null,"Ask questions on github or StackOverflow (Use the tag #fb-hydra):"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/discussions"},"github")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/fb-hydra"},"StackOverflow"))),(0,o.mdx)("p",null,"Follow Hydra on Twitter and Facebook:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.facebook.com/Hydra-Framework-109364473802509/"},"Facebook page")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://twitter.com/Hydra_Framework"},"Twitter"))),(0,o.mdx)("h3",{id:"citing-hydra"},"Citing Hydra"),(0,o.mdx)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"@Misc{Yadan2019Hydra,\n  author =       {Omry Yadan},\n  title =        {Hydra - A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}u.isMDXComponent=!0}}]);