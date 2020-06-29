(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{200:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(10),o=(t(0),t(246)),i={id:"config_path_changes",title:"Config path changes"},c={id:"upgrades/0.11_to_1.0/config_path_changes",isDocsHomePage:!1,title:"Config path changes",description:"Overview",source:"@site/docs/upgrades/0.11_to_1.0/config_path_changes.md",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/config_path_changes.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590358483,sidebar:"docs",previous:{title:"Release process",permalink:"/docs/next/development/release"},next:{title:"Adding an @package directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive"},latestVersionMainDocPermalink:"/docs/intro"},l=[{value:"Overview",id:"overview",children:[]},{value:"Migration examples",id:"migration-examples",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Hydra 1.0 changes a new ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," parameter to ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path"),".",Object(o.b)("br",{parentName:"p"}),"\n","Previously, ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Search path relative to the declaring python file."),Object(o.b)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),Object(o.b)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," or just the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")),Object(o.b)("p",null,"A second change is that the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",Object(o.b)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),Object(o.b)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),Object(o.b)("h2",{id:"migration-examples"},"Migration examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# old\n@hydra.main(config_path="config.yaml")\n')),Object(o.b)("p",null,"Becomes: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# new\n@hydra.main(config_name="config")\n')),Object(o.b)("p",null,"And"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# old\n@hydra.main(config_path="conf/config.yaml")\n')),Object(o.b)("p",null,"Becomes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# new\n@hydra.main(config_path="conf", config_name="config")\n')))}s.isMDXComponent=!0},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);