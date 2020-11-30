(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,f=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(22),a=n(109);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},109:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(105)),o=n(107),l={id:"what_is_fiwl",title:"What is FIWL?",hide_title:!0,slug:"/"},s={unversionedId:"what_is_fiwl",id:"what_is_fiwl",isDocsHomePage:!1,title:"What is FIWL?",description:"Why FIWL exist?",source:"@site/docs/what_is_fiwl.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/fiwl-js/fiwl-js.github.io/edit/master/docs/what_is_fiwl.md",version:"current",sidebar:"docs",next:{title:"How to install?",permalink:"/docs/how_to_install"}},c=[{value:"Why FIWL exist?",id:"why-fiwl-exist",children:[]},{value:"How FIWL different from HTML?",id:"how-fiwl-different-from-html",children:[{value:"With HTML:",id:"with-html",children:[]},{value:"With FIWL:",id:"with-fiwl",children:[]}]},{value:"...so what is FIWL?",id:"so-what-is-fiwl",children:[]}],d={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"why-fiwl-exist"},"Why FIWL exist?"),Object(r.a)("object",{type:"image/svg+xml",data:Object(o.a)("img/docs/intro/what_is_fiwl-1.svg")}),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"Layouting System"),Object(r.a)("br",null),' Imagine a word document, it is designed to arrange words and things like pictures from top to bottom. Overriding the layout is also possible by set the "element" position as absolute. This the same with HTML but with interaction ability. However, it is actually not optimized for building UI. Meanwhile, Android XML layout is a perfect fit for making UI Layout. In FIWL, we reuse that concept to building UI for web with a few adjustment.')),Object(r.a)("object",{type:"image/svg+xml",data:Object(o.a)("img/docs/intro/what_is_fiwl-2.svg")}),Object(r.a)("ol",{start:2},Object(r.a)("li",{parentName:"ol"},Object(r.a)("strong",{parentName:"li"},"Straightforwardness"),Object(r.a)("br",null)," We currently use HTML for almost anything including Web App front-end development. HTML itself mainly purposed for making interactive document. To make an app, we need some fancy tools like Bootstrap, SASS, web framework, jQuery, and a lot of dependencies. Nothing wrong with that, except complexity that will overwhelm in some cases. Beside of layouting system, FIWL also provides ready-to-use environment. Moreover, FIWL also facilitate interactivity (reactivity between widgets, you don't have to code for maintaining ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://responsivedesign.is/"}),"responsive")," & ",Object(r.a)("a",Object(i.a)({parentName:"li"},{href:"https://www.interaction-design.org/literature/topics/adaptive-design"}),"adaptive")," design).")),Object(r.a)("h2",{id:"how-fiwl-different-from-html"},"How FIWL different from HTML?"),Object(r.a)("p",null,"As example, let's make a login screen:"),Object(r.a)("img",{src:Object(o.a)("img/docs/intro/what_is_fiwl-3.jpg"),alt:"a simple login screen with a title, couple of input fields, and a button."}),Object(r.a)("h3",{id:"with-html"},"With HTML:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Login | Demo</title>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <style>\n      html,\n      body {\n        margin: 0;\n        padding: 0;\n        width: 100vw;\n        height: 100vh;\n        box-sizing: border-box;\n      }\n      #bg_image {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n      #card {\n        width: 75%;\n        height: 75%;\n        background-color: white;\n        position: absolute;\n        top: 12.5%;\n        left: 12.5%;\n        border-radius: 16px;\n        box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.32);\n        padding: 16px;\n        box-sizing: border-box;\n      }\n      #title {\n        width: 100%;\n        text-align: left;\n        margin-bottom: 16px;\n      }\n      .full-width {\n        width: 100%;\n      }\n    </style>\n    \x3c!-- Styling for input text --\x3e\n    <link rel="stylesheet" href="/style/textfield.css" />\n    \x3c!-- Bootstrap CSS --\x3e\n    <link\n      rel="stylesheet"\n      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"\n      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"\n      crossorigin="anonymous"\n    />\n  </head>\n  <body>\n    <img id="bg_image" class="fullsize" src="/img/login/bg.jpg" />\n    <div\n      id="card"\n      class="d-flex flex-column justify-content-center align-items-center"\n    >\n      <h1 id="title">Welcome to Demo!</h1>\n      <form\n        class="full-width d-flex flex-column"\n        method="POST"\n        action="/auth/login"\n      >\n        <div class="group full-width">\n          <input type="text" class="full-width" id="username" required />\n          <span class="highlight full-width"></span>\n          <span class="bar full-width"></span>\n          <label>Email or Phone</label>\n        </div>\n        <div class="group full-width">\n          <input type="password" class="full-width" id="password" required />\n          <span class="highlight full-width"></span>\n          <span class="bar full-width"></span>\n          <label>Password</label>\n        </div>\n        <button class="btn btn-success align-self-end">Login</button>\n      </form>\n    </div>\n  </body>\n</html>\n')),Object(r.a)("h3",{id:"with-fiwl"},"With FIWL:"),Object(r.a)("pre",null,Object(r.a)("code",Object(i.a)({parentName:"pre"},{className:"language-xml"}),'<stage title="Login | Demo">\n  <Layout alignContents="center">\n    \x3c!-- No full resource URL required, explained on "Resource" page at Guide section. --\x3e\n    <Picture\n      from="bg"\n      width="container"\n      height="container" />\n    <FormLayout\n      sendTo="/auth/login"\n      method="POST"\n      width="75%"\n      height="75%"\n      backgroundColor="@color/white"\n      cornerRadius="16dp"\n      elevation="8dp">\n      <Label\n        bold="true"\n        textSize="@style/titleTextSize"\n        text="Welcome to Demo!" />\n      <Textfield\n        name="username"\n        label="Email or Phone" />\n      <Textfield\n        name="password"\n        label="Password"\n        type="text|secret" />\n      <Button\n        id="submit"\n        alignSelf="right" />\n    </FormLayout>\n  </Layout>\n</stage>\n')),Object(r.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.a)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.a)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.a)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.a)("p",{parentName:"div"},"FormLayout, Textfield, and Picture widgets are in development, so they won't work for now. See ",Object(r.a)("a",Object(i.a)({parentName:"p"},{href:"/docs/dev_checklist/pre_alpha"}),"Development Checklist")))),Object(r.a)("h2",{id:"so-what-is-fiwl"},"...so what is FIWL?"),Object(r.a)("p",null,"FIWL (Flexible Interactive Web Layout) extends XML standard, mainly purposed for arranging web app layout as efficient as possible."))}u.isMDXComponent=!0}}]);