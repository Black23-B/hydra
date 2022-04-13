"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[750],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){return function(t){var n=m(t.components);return r.createElement(e,a({},t,{components:n}))}},m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(n),u=i,f=s["".concat(o,".").concat(u)]||s[u]||p[u]||a;return n?r.createElement(f,d(d({ref:t},l),{},{components:n})):r.createElement(f,d({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],d={id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation",hide_title:!0},c=void 0,l={unversionedId:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",id:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",title:"strict flag mode deprecation",description:"strict flag mode deprecation",source:"@site/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",permalink:"/docs/next/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1649884206,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation",hide_title:!0},sidebar:"docs",previous:{title:"Adding an @package directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive"},next:{title:"Object instantiation changes",permalink:"/docs/next/upgrades/0.11_to_1.0/object_instantiation_changes"}},s=[{value:"strict flag mode deprecation",id:"strict-flag-mode-deprecation",children:[],level:2},{value:"Alternatives to <code>strict=False</code>",id:"alternatives-to-strictfalse",children:[{value:"Adding config fields through the command line",id:"adding-config-fields-through-the-command-line",children:[],level:3},{value:"Adding fields at runtime",id:"adding-fields-at-runtime",children:[],level:3},{value:"Field existence check",id:"field-existence-check",children:[],level:3}],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"strict-flag-mode-deprecation"},"strict flag mode deprecation"),(0,a.mdx)("p",null,"The strict mode is a flag added to ",(0,a.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," to enable two features:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Command line error detection (overriding a field not in the config)"),(0,a.mdx)("li",{parentName:"ul"},"Runtime config access error detection (accessing/setting a field not in the config)")),(0,a.mdx)("p",null,"This flag is now deprecated, and the ability to turn it off will be removed in Hydra 1.1."),(0,a.mdx)("h2",{id:"alternatives-to-strictfalse"},"Alternatives to ",(0,a.mdx)("inlineCode",{parentName:"h2"},"strict=False")),(0,a.mdx)("p",null,"Below are a few common reasons for people disabling strict mode along with recommended alternatives."),(0,a.mdx)("h3",{id:"adding-config-fields-through-the-command-line"},"Adding config fields through the command line"),(0,a.mdx)("p",null,"With strict mode disabled; you can add fields not specified in config file through the command line.\nHydra 1.0 introduces the + prefix to command line overrides, enabling the addition of fields not in the config file."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db:\n  driver: mysql\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{1,6}","{1,6}":!0},"$ python my_app.py +db.host=localhost\ndb:\n  driver: mysql\n  host: localhost\n")),(0,a.mdx)("h3",{id:"adding-fields-at-runtime"},"Adding fields at runtime"),(0,a.mdx)("p",null,"When strict mode is disabled, you can add fields to your config at runtime.\nStrict mode is implemented by setting the OmegaConf ",(0,a.mdx)("inlineCode",{parentName:"p"},"struct")," flag to True on the root of the config."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"You can disable the struct flag a specific context using ",(0,a.mdx)("inlineCode",{parentName:"li"},"open_dict"),"."),(0,a.mdx)("li",{parentName:"ul"},"You can disable the struct flag permanently for your config using ",(0,a.mdx)("inlineCode",{parentName:"li"},"OmegaConf.set_struct(cfg, False)"),".")),(0,a.mdx)("p",null,"Learn more about OmegaConf struct flag ",(0,a.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#struct-flag",target:"_blank"},"here"),"."),(0,a.mdx)("h3",{id:"field-existence-check"},"Field existence check"),(0,a.mdx)("p",null,"With strict mode disabled, you can check if a field is in the config by comparing it to None:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"if cfg.host is None:\n    # host is not in the config\n")),(0,a.mdx)("p",null,"This will no longer work because an exception will be thrown when the ",(0,a.mdx)("inlineCode",{parentName:"p"},"host")," field is accessed.",(0,a.mdx)("br",{parentName:"p"}),"\n","Use ",(0,a.mdx)("inlineCode",{parentName:"p"},"in")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"hasattr")," instead:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'if "host" not in cfg:\n    # host is not in the config\n\nif not hasattr(cfg, "host"):\n    # host is not in the config\n')))}u.isMDXComponent=!0}}]);