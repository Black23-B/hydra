"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6438],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},c=void 0,u={unversionedId:"development/style_guide",id:"development/style_guide",title:"Style Guide",description:"The code need to pass verification by the following tools:",source:"@site/docs/development/style_guide.md",sourceDirName:"development",slug:"/development/style_guide",permalink:"/docs/next/development/style_guide",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/development/style_guide.md",tags:[],version:"current",lastUpdatedBy:"Dmitry Vinnik",lastUpdatedAt:1646353205,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/next/development/testing"},next:{title:"Documentation",permalink:"/docs/next/development/documentation"}},d=[],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The code need to pass verification by the following tools:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"yamllint .")," : Ensures that yaml files are syntactically correct and properly indented.")),(0,o.mdx)("p",null,"The easiest way to run the required verifications is: "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"nox -s lint")," : for the Hydra core"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"nox -s lint_plugins")," : for the included plugins")),(0,o.mdx)("p",null,"isort is a bit tricky to run for plugins. the best way to get it to sort the plugins imports is with the FIX environment\nvariable:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"$ FIX=1 nox -s lint_plugins\n")),(0,o.mdx)("p",null,"It is also recommended that you install pre-commit hooks (use ",(0,o.mdx)("inlineCode",{parentName:"p"},"pre-commit install"),").\npre-commit will execute some of the above tests when you commit your code locally.\nYou can disable it by appending ",(0,o.mdx)("inlineCode",{parentName:"p"},"-n")," to your commit command: ",(0,o.mdx)("inlineCode",{parentName:"p"},"git commit -m wip -n")),(0,o.mdx)("p",null,"Pull requests that do not lint will fail the automated testing."))}m.isMDXComponent=!0}}]);