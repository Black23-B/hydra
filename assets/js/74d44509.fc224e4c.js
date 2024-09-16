"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5170],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>f,withMDXComponents:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){return function(t){var n=f(t.components);return r.createElement(e,i({},t,{components:n}))}},f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49595:(e,t,n)=>{n.d(t,{A:()=>s,C:()=>l});var r=n(58168),a=n(96540),i=n(75489),o=n(44586),c=n(74098);function s(e){return a.createElement(i.default,(0,r.A)({},e,{to:(t=e.to,s=(0,c.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},39919:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var r=n(58168),a=n(98587),i=(n(96540),n(15680)),o=n(49595),c=["components"],s={id:"hierarchical_static_config",title:"A hierarchical static configuration"},l=void 0,u={unversionedId:"tutorials/structured_config/hierarchical_static_config",id:"tutorials/structured_config/hierarchical_static_config",title:"A hierarchical static configuration",description:"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked.",source:"@site/docs/tutorials/structured_config/2_hierarchical_static_config.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/hierarchical_static_config",permalink:"/docs/tutorials/structured_config/hierarchical_static_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/structured_config/2_hierarchical_static_config.md",tags:[],version:"current",lastUpdatedBy:"Sanjay Ganeshan",lastUpdatedAt:1726508026,formattedLastUpdatedAt:"9/16/2024",sidebarPosition:2,frontMatter:{id:"hierarchical_static_config",title:"A hierarchical static configuration"},sidebar:"docs",previous:{title:"Minimal example",permalink:"/docs/tutorials/structured_config/minimal_example"},next:{title:"Config Groups",permalink:"/docs/tutorials/structured_config/config_groups"}},f=[],p={toc:f};function d(e){var t=e.components,n=(0,a.A)(e,c);return(0,i.mdx)("wrapper",(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{to:"examples/tutorials/structured_configs/2_static_complex",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass UserInterface:\n    title: str = "My app"\n    width: int = 1024\n    height: int = 768\n\n@dataclass\nclass MyConfig:\n    db: MySQLConfig = field(default_factory=MySQLConfig)\n    ui: UserInterface = field(default_factory=UserInterface)\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=MyConfig)\n\n@hydra.main(version_base=None, config_name="config")\ndef my_app(cfg: MyConfig) -> None:\n    print(f"Title={cfg.ui.title}, size={cfg.ui.width}x{cfg.ui.height} pixels")\n\nif __name__ == "__main__":\n    my_app()\n')))}d.isMDXComponent=!0}}]);