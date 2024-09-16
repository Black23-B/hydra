"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3369],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){return function(n){var t=m(n.components);return r.createElement(e,o({},n,{components:t}))}},m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(t),s=a,f=d["".concat(i,".").concat(s)]||d[s]||u[s]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17273:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=t(58168),a=t(98587),o=(t(96540),t(15680)),i=["components"],l={id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},c=void 0,p={unversionedId:"tutorial/config_file",id:"version-0.11/tutorial/config_file",title:"Configuration file",description:"It can get tedious to type all those command line arguments every time.",source:"@site/versioned_docs/version-0.11/tutorial/2_config_file.md",sourceDirName:"tutorial",slug:"/tutorial/config_file",permalink:"/docs/0.11/tutorial/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/2_config_file.md",tags:[],version:"0.11",lastUpdatedBy:"Sanjay Ganeshan",lastUpdatedAt:1726508026,formattedLastUpdatedAt:"9/16/2024",sidebarPosition:2,frontMatter:{id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},sidebar:"version-0.11/docs",previous:{title:"Simple command line application",permalink:"/docs/0.11/tutorial/simple_cli"},next:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"}},d=[{value:"Strict mode",id:"strict-mode",children:[],level:3}],m={toc:d};function s(e){var n=e.components,t=(0,a.A)(e,i);return(0,o.mdx)("wrapper",(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"It can get tedious to type all those command line arguments every time.\nFix it by creating a configuration file:"),(0,o.mdx)("p",null,"Configuration file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),(0,o.mdx)("p",null,"Specify the config file by passing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")," parameter to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nThe location of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")," is relative to your Python file."),(0,o.mdx)("p",null,"Python file: ",(0,o.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,o.mdx)("p",null,"You can override values in the loaded config from the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),(0,o.mdx)("h3",{id:"strict-mode"},"Strict mode"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Strict mode")," is useful for catching mistakes in both the command line overrides and in the code early.\nStrict mode is on by default when you specify a configuration file for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"config_path")," argument in ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main")," decorator.\nIt can be turned on or off via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"strict")," argument in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    driver = cfg.db.driver # Okay\n    user = cfg.db.user # Okay\n    password = cfg.db.password # Not okay, there is no password field in db!\n                               # This will result in a KeyError\n")),(0,o.mdx)("p",null,"Strict mode will also catch command line override mistakes:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py db.port=3306\nTraceback (most recent call last):\n...\nKeyError: 'Accessing unknown key in a struct : db.port\n")),(0,o.mdx)("p",null,"With strict mode off, accessing unknown keys in the config is permitted and both the above override and the example\nbelow would run."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml', strict=False)\ndef my_app(cfg):\n    cfg.db.port = 3306 # Okay\n")))}s.isMDXComponent=!0}}]);