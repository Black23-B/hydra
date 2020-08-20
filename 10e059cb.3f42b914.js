(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(7),r=(n(0),n(167)),l={id:"basic",hide_title:!0,sidebar_label:"Basic Override syntax"},o={unversionedId:"advanced/override_grammar/basic",id:"advanced/override_grammar/basic",isDocsHomePage:!1,title:"basic",description:"Basic Override syntax",source:"@site/docs/advanced/override_grammar/basic.md",permalink:"/docs/next/advanced/override_grammar/basic",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/override_grammar/basic.md",version:"next",lastUpdatedBy:"Olivier Delalleau",lastUpdatedAt:1597958948,sidebar_label:"Basic Override syntax",sidebar:"docs",previous:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"},next:{title:"extended",permalink:"/docs/next/advanced/override_grammar/extended"}},c=[{value:"Basic Override syntax",id:"basic-override-syntax",children:[]},{value:"Basic examples",id:"basic-examples",children:[{value:"Modifying the Config Object",id:"modifying-the-config-object",children:[]},{value:"Modifying the Defaults List",id:"modifying-the-defaults-list",children:[]}]},{value:"Grammar",id:"grammar",children:[]},{value:"Elements",id:"elements",children:[{value:"Key",id:"key",children:[]},{value:"Quoted values",id:"quoted-values",children:[]},{value:"Whitespaces in unquoted values",id:"whitespaces-in-unquoted-values",children:[]},{value:"Primitives",id:"primitives",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Sweeper syntax",id:"sweeper-syntax",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Working with your shell",id:"working-with-your-shell",children:[{value:"Bash",id:"bash",children:[]},{value:"Other shells",id:"other-shells",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basic-override-syntax"},"Basic Override syntax"),Object(r.b)("p",null,"You can manipulate your configuration with overrides (via the command line or the Compose API). This includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Modifying the the ",Object(r.b)("inlineCode",{parentName:"li"},"Defaults List")),Object(r.b)("li",{parentName:"ul"},"Modifying the config object")),Object(r.b)("p",null,"Overrides matching a config group are modifying the ",Object(r.b)("inlineCode",{parentName:"p"},"Defaults List"),";\nThe rest are manipulating the config object."),Object(r.b)("h2",{id:"basic-examples"},"Basic examples"),Object(r.b)("h3",{id:"modifying-the-config-object"},"Modifying the Config Object"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Appending a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"+foo.bar=value")),Object(r.b)("li",{parentName:"ul"},"Removing a config value : ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~foo.bar=value"))),Object(r.b)("h3",{id:"modifying-the-defaults-list"},"Modifying the Defaults List"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overriding selected Option: ",Object(r.b)("inlineCode",{parentName:"li"},"db=mysql")),Object(r.b)("li",{parentName:"ul"},"Changing a package: ",Object(r.b)("inlineCode",{parentName:"li"},"db@src_pkg:dst_pkg")),Object(r.b)("li",{parentName:"ul"},"Overriding selected Option and changing the package: ",Object(r.b)("inlineCode",{parentName:"li"},"db@src_pkg:dst_pkg=mysql")),Object(r.b)("li",{parentName:"ul"},"Appending to defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"+db=mysql")),Object(r.b)("li",{parentName:"ul"},"Deleting from defaults: ",Object(r.b)("inlineCode",{parentName:"li"},"~db"),", ",Object(r.b)("inlineCode",{parentName:"li"},"~db=mysql"))),Object(r.b)("h2",{id:"grammar"},"Grammar"),Object(r.b)("p",null,"Hydra supports a rich ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Domain-specific_language"}),"DSL")," in the command line.\nBelow are the parser rules from grammar.\nYou can see the full grammar on GitHub\n(",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/hydra/grammar/OverrideLexer.g4"}),"lexer")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/hydra/grammar/OverrideParser.g4"}),"parser"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-antlr4",metastring:'title="OverrideParser.g4"',title:'"OverrideParser.g4"'}),"override: (\n      key EQUAL value?                           // key=value, key= (for empty value)\n    | TILDE key (EQUAL value?)?                  // ~key | ~key=value\n    | PLUS key EQUAL value?                      // +key= | +key=value\n) EOF;\n\nkey :\n    packageOrGroup                               // key\n    | packageOrGroup AT package (COLON package)? // group@pkg | group@pkg1:pkg2\n    | packageOrGroup ATCOLON package             // group@:pkg2\n;\n\npackageOrGroup: package | ID (SLASH ID)+;        // db, hydra/launcher\npackage: (ID | DOT_PATH);                        // db, hydra.launcher\n\nvalue: element | simpleChoiceSweep;\n\nelement:\n      primitive\n    | listValue\n    | dictValue\n    | function\n;\n\nargName: ID EQUAL;\nfunction: ID POPEN (argName? element (COMMA argName? element )* )? PCLOSE;\n\nsimpleChoiceSweep:\n      element (COMMA element)+                   // value1,value2,value3\n;\n\nprimitive:\n      QUOTED_VALUE                               // 'hello world', \"hello world\"\n    | (   ID                                     // foo_10\n        | NULL                                   // null, NULL\n        | INT                                    // 0, 10, -20, 1_000_000\n        | FLOAT                                  // 3.14, -20.0, 1e-1, -10e3\n        | BOOL                                   // true, TrUe, false, False\n        | DOT_PATH                               // foo.bar\n        | INTERPOLATION                          // ${foo.bar}, ${env:USER,me}\n        | UNQUOTED_CHAR                          // /, -, \\, +, ., $, *\n        | COLON                                  // :\n        | WS                                     // whitespaces\n    )+;\n\nlistValue: BRACKET_OPEN                          // [], [1,2,3], [a,b,[1,2]]\n    (element(COMMA element)*)?\nBRACKET_CLOSE;\n\ndictValue: BRACE_OPEN\n    (ID COLON element (COMMA ID COLON element)*)?  // {}, {a:10,b:20}\nBRACE_CLOSE;\n")),Object(r.b)("h2",{id:"elements"},"Elements"),Object(r.b)("h3",{id:"key"},"Key"),Object(r.b)("p",null,"Key is the component before the =. A few examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"foo.bar           # A config key\nhydra/launcher    # A config group\ngroup@pkg         # A config group assigned to the package pkg\ngroup@pkg1:pkg2   # A config group changing the package from pkg1 to pkg2\n")),Object(r.b)("h3",{id:"quoted-values"},"Quoted values"),Object(r.b)("p",null,"Hydra supports both double quotes and single quoted values.\nQuoted strings can accept any value between the quotes.\nTo include a single quote in a single quoted string escape it : ",Object(r.b)("inlineCode",{parentName:"p"},"\\'"),". Same for double quote in a double quoted string."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Double quotes"',title:'"Double','quotes"':!0}),'"hello there"\n"escaped \\"double quote\\""\n"1,2,3"\n"{a:10} ${xyz}"\n"\'single quoted string\'"\n'))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Single quotes"',title:'"Single','quotes"':!0}),"'hello there'\n'escaped \\'single quote\\''\n'1,2,3'\n'{a:10} ${xyz}'\n'\"double quoted string\"'\n")))),Object(r.b)("h3",{id:"whitespaces-in-unquoted-values"},"Whitespaces in unquoted values"),Object(r.b)("p",null,"Unquoted Override values can contain non leading or trailing whitespaces.\nFor example, ",Object(r.b)("inlineCode",{parentName:"p"},"msg=hello world")," is a legal override (key is ",Object(r.b)("inlineCode",{parentName:"p"},"msg")," and value is the string ",Object(r.b)("inlineCode",{parentName:"p"},"hello world"),").\nNormally, your shell will interpret values with whitespaces as being multiple parameters (",Object(r.b)("inlineCode",{parentName:"p"},"key=a b")," would be interpreted as ",Object(r.b)("inlineCode",{parentName:"p"},"key=a")," and ",Object(r.b)("inlineCode",{parentName:"p"},"b"),").\nTo prevent this you can quote them with a single quote. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ python my_app.py 'msg=hello world'\n")),Object(r.b)("p",null,"Note that trailing and leading whitespace are ignored, the above is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ python my_app.py 'msg=    hello world    '\n")),Object(r.b)("h3",{id:"primitives"},"Primitives"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," : oompa10, loompa_12"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"null"),": null"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"int"),": 10, -20, 0, 1_000_000."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float"),": 3.14, -10e6, inf, -inf, nan."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bool"),": true, false"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dot_path"),": foo.bar"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interpolation"),": ${foo.bar}, ${env:USER,me}")),Object(r.b)("p",null,"Constants (null, true, false, inf, nan) are case insensitive."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT")," Always single-quote interpolations in the shell."),Object(r.b)("h3",{id:"lists"},"Lists"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"foo=[1,2,3]\nnested=[a,[b,[c]]]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT")," Always single-quote overrides that contains lists in the shell."),Object(r.b)("h3",{id:"dictionaries"},"Dictionaries"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"foo={a:10,b:20}\nnested={a:10,b:{c:30,d:40}}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT")," Always single-quote overrides that contains dicts in the shell."),Object(r.b)("h3",{id:"sweeper-syntax"},"Sweeper syntax"),Object(r.b)("p",null,"A choice sweep is comma separated list with two or more elements:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'key=a,b                       # Simple sweep: ChoiceSweep(a, b)\nkey="a,b","c,d"               # Elements can be quoted strings, ChoiceSweep("a,b", "c,d")\nkey=[a,b],[c,d]               # Elements can be real lists, ChoiceSweep([a,b], [c,d])\nkey={a:10, b:20},{c:30,d:40}  # and even dictionaries: ChoiceSweep([a,b], [c,d]){a,b}}\n')),Object(r.b)("p",null,"More sweeping options are described in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"extended"}),"Extended Grammar page"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT")," You may need to quote your choice sweep in the shell"),Object(r.b)("h3",{id:"functions"},"Functions"),Object(r.b)("p",null,"Hydra supports several functions in the command line.\nSee the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"extended"}),"Extended Grammar page")," for more information."),Object(r.b)("h2",{id:"working-with-your-shell"},"Working with your shell"),Object(r.b)("p",null,"All shells interprets command line inputs and may change what is passed to the process.\nA good way to determine what the shell is doing to your command is to ",Object(r.b)("inlineCode",{parentName:"p"},"echo")," it."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"# bash output\n$ echo foo_{a:10,b:20} ${HOME} [b,c]*\nfoo_a:10 foo_b:20 /home/omry build_helpers\n$ echo 'foo_{a:10,b:20}' '${HOME}' '[b,c]*'\nfoo_{a:10,b:20} ${HOME} [b,c]*\n")),Object(r.b)("p",null,"If in doubt, quote a command line element with a ",Object(r.b)("strong",{parentName:"p"},"single quote")," (",Object(r.b)("inlineCode",{parentName:"p"},"'"),")."),Object(r.b)("p",null,"If you want to pass quotes to Hydra in a shell quoted string, it's best to pass double quotes."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ echo \'"hello world"\'\n"hello world"\n')),Object(r.b)("p",null,"You can use some shell specific commands to change their behavior, but the cost will be that their behavior will change."),Object(r.b)("h3",{id:"bash"},"Bash"),Object(r.b)("p",null,"You can disable braces expansion, filename generation (globing) and hist expansion. Please note that this will change\nyour shell behavior for the current session."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ set +o braceexpand -o noglob +o histexpand\n$ echo key1={a:10,b:20} key2=${HOME} key=[b]*\nkey1={a:10,b:20} key2=/home/omry key=[b]*\n# does not help with () though:\n$  echo key=choice(a,b,c)\nbash: syntax error near unexpected token '('\n$ echo 'key=choice(a,b,c)'\nkey=choice(a,b,c)\n")),Object(r.b)("h3",{id:"other-shells"},"Other shells"),Object(r.b)("p",null,"Send a PR to add information about your favorite shell here."))}b.isMDXComponent=!0}}]);