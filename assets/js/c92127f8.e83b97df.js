"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1496],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),m=function(e){return function(n){var t=u(n.components);return i.createElement(e,o({},n,{components:t}))}},u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,h=m["".concat(a,".").concat(p)]||m[p]||c[p]||o;return t?i.createElement(h,l(l({ref:n},s),{},{components:t})):i.createElement(h,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},60311:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},d=void 0,s={unversionedId:"development/contributing",id:"version-0.11/development/contributing",title:"Contributing",description:"This guide assumes you have forked and checked-out the repository.",source:"@site/versioned_docs/version-0.11/development/contributing.md",sourceDirName:"development",slug:"/development/contributing",permalink:"/docs/0.11/development/contributing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/development/contributing.md",tags:[],version:"0.11",lastUpdatedBy:"Dmitry Vinnik",lastUpdatedAt:1646353205,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"version-0.11/docs",previous:{title:"Ray example",permalink:"/docs/0.11/advanced/ray_example"},next:{title:"Release process",permalink:"/docs/0.11/development/release"}},m=[{value:"Environment setup",id:"environment-setup",children:[],level:3},{value:"Nox",id:"nox",children:[],level:2},{value:"Code style guide",id:"code-style-guide",children:[],level:2},{value:"Testing",id:"testing",children:[{value:"With pytest",id:"with-pytest",children:[],level:3},{value:"With nox",id:"with-nox",children:[],level:3}],level:2},{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[],level:3}],level:2}],u={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.mdx)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This guide assumes you have forked and checked-out the repository.\nIt is recommended that you install Hydra in a virtual environment like conda or virtualenv."),(0,o.mdx)("h3",{id:"environment-setup"},"Environment setup"),(0,o.mdx)("p",null,"Install ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -y\n")),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},(0,o.mdx)("strong",null,"NOTE"),": The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on supported version of Python."),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"Activate the environment:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"conda activate hydra38\n")),(0,o.mdx)("p",null,"From the source tree, install Hydra in development mode with the following command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'pip install -e ".[dev]" -e .\n')),(0,o.mdx)("h2",{id:"nox"},"Nox"),(0,o.mdx)("p",null,"Hydra is using a test automation tool called ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/theacodes/nox"},"nox")," to manage tests, linting, code coverage etc.\n",(0,o.mdx)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. You can see the full list of nox sessions with ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -l")," and run specific sessions\nwith ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),(0,o.mdx)("h2",{id:"code-style-guide"},"Code style guide"),(0,o.mdx)("p",null,"The code need to pass verification by the following tools:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking")),(0,o.mdx)("p",null,"The easiest way to run all the required verifications is with ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -s lint"),"."),(0,o.mdx)("p",null,"It is also recommended that you install pre-commit hooks (use ",(0,o.mdx)("inlineCode",{parentName:"p"},"pre-commit install"),"), this will ensure that those tests\nare ran just before you commit your code."),(0,o.mdx)("p",null,"Any pull request that does not pass the linting will fail the automated testing."),(0,o.mdx)("h2",{id:"testing"},"Testing"),(0,o.mdx)("h3",{id:"with-pytest"},"With pytest"),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"pytest plugins/NAME"),"."),(0,o.mdx)("div",{class:"alert alert--info",role:"alert"},(0,o.mdx)("strong",null,"NOTE"),": Some plugins supports fewer versions of Python than the Hydra core."),(0,o.mdx)("h3",{id:"with-nox"},"With nox"),(0,o.mdx)("p",null,"See ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'nox -s "test_core-3.6(pip install)"')," : Test on Python 3.6 with ",(0,o.mdx)("inlineCode",{parentName:"li"},"pip install")," as installation method"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8(pip install -e)"')," : Test plugins on Python 3.8 with ",(0,o.mdx)("inlineCode",{parentName:"li"},"pip install -e")," as installation method  ")),(0,o.mdx)("h2",{id:"news-entries"},"NEWS Entries"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"NEWS.md")," file is managed using ",(0,o.mdx)("inlineCode",{parentName:"p"},"towncrier")," and all non trivial changes\nmust be accompanied by a news entry."),(0,o.mdx)("p",null,"To add an entry to the news file, first you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",(0,o.mdx)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),(0,o.mdx)("p",null,"Once you have an issue or pull request, you take the number and you create a\nfile inside of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"news/")," directory named after that issue number with one of the following extensions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"removal")," : Removal or deprecation of a feature"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"feature")," : New feature"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"bugfix")," : Bug fix"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"plugin")," : New plugin, or an update to an existing plugin"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure of Hydra"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"docs")," : Major addition or updates to documentation")),(0,o.mdx)("p",null,"If your issue or PR number is ",(0,o.mdx)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, then you would\ncreate a file ",(0,o.mdx)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",(0,o.mdx)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",(0,o.mdx)("inlineCode",{parentName:"p"},"news/NNNN.removal"),"). Likewise if a PR touches multiple issues/PRs you may\ncreate a file for each of them with the exact same contents and Towncrier will\ndeduplicate them."),(0,o.mdx)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),(0,o.mdx)("p",null,"The contents of this file is markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),(0,o.mdx)("p",null,"In order to maintain a consistent style in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'))}p.isMDXComponent=!0}}]);