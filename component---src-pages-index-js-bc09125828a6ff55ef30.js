(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),c=(a(162),a(163)),s=a(146);a(149);var o=function(e){e.children;return r.a.createElement(s.a,{query:"2234229499",render:function(e){return r.a.createElement("div",{className:"cards"},e.site.siteMetadata.projects.map(function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"top"})),r.a.createElement("div",{onClick:function(){return t=e.url,void console.log("url :: ",t);var t},className:"card"},e.name))}))},data:c})},l=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement(o,null))}},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=(a(33),a(145),r.a.createContext({})),o=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"My projects"}}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(56),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(153),l=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"My projects",description:"",author:"@chetan_raj"}}}}},152:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(146),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"content"},i.a.createElement("h1",null,t)))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(149),function(e){var t=e.children;return i.a.createElement(o.a,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d},162:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},163:function(e){e.exports={data:{site:{siteMetadata:{projects:[{name:"Javascript Essentials",url:"http://javascriptessentials.netlify.com"},{name:"Javascript Essentials [Instagram]",url:"https://www.instagram.com/javascriptessentials/"},{name:"Snpt",url:"https://snpt.netlify.com/"},{name:"Blog",url:"https://chetanraj.in/blog/"}]}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-bc09125828a6ff55ef30.js.map