(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[71],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,a){return o()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),l=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||l(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),a=r(7316),i=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),f=r(4983).mdx,p=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=a(e,i),s=p(t),d=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:f},s),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return u.createElement(d,c({},l))}},765:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),o=r(1597),l=function(e){e.siteTitle;return n.createElement("header",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"auto",boxShadow:"1px 1px 15px 0px #ccc",position:"relative",zIndex:"5"}},n.createElement("div",{style:{flexBasis:1,flexGrow:1}},n.createElement(o.Link,{to:"/",style:{fontSize:"1.5em",textDecoration:"none",float:"right",paddingRight:".5em"}},"Rho Lall DOCS")),n.createElement("div",{style:{flexBasis:4,flexGrow:4,borderRight:"1px dotted grey",borderLeft:"1px dotted grey",padding:"1em"}},"Resource Guide for Faculty & Parents of Students with ADHD"),n.createElement("div",{style:{flexBasis:1,flexGrow:1,paddingLeft:".5em"}},"🔍  Search . . ."))};l.defaultProps={siteTitle:""};var a=l,i=function(){var e=(0,o.useStaticQuery)("2940230738");return n.createElement("div",{style:{paddingTop:"2em",backgroundColor:"#F5F7F9"}},n.createElement("ul",null,e.allMdx.nodes.map((function(e){return n.createElement("li",{key:e.id,style:{listStyleType:"none",font:"var(--font-sx)"}},n.createElement(o.Link,{to:"/accomodations-for-adhd/"+e.slug,style:{textDecoration:"none"}},e.frontmatter.title))}))))},s=function(e){var t,r=e.children,l=(0,o.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(a,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},n.createElement("nav",{style:{flexBasis:1,flexGrow:1,backgroundColor:"#F5F7F9"}},n.createElement(i,null)),n.createElement("main",{style:{flexBasis:5,flexGrow:5,padding:"2em",display:"flex"}},r)),n.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)",display:"flex",justifyContent:"end",paddingRight:"2em"}},"© ",(new Date).getFullYear()," · Rho Lall"))}},6090:function(e,t,r){"use strict";r.r(t);var n=r(1597),o=r(7294),l=r(765),a=r(2102);t.default=function(e){var t=e.data;return o.createElement(l.Z,null,o.createElement("div",{style:{flexBasis:5,flexGrow:5}},o.createElement("h1",null,t.mdx.frontmatter.title),o.createElement(a.MDXRenderer,null,t.mdx.body)),o.createElement("aside",{style:{flexBasis:1,flexGrow:1,marginTop:"2em",padding:".5em",borderLeft:"1px dotted grey",alignSelf:"flex-start"}},o.createElement("ul",{style:{}},o.createElement("li",{style:{listStyleType:"none"}},o.createElement("img",{src:"https://img.icons8.com/material-sharp/24/undefined/export-pdf.png"})," Export as PDF"),o.createElement("li",{style:{listStyleType:"none"}},o.createElement("img",{src:"https://img.icons8.com/ios-filled/25/undefined/copy-link.png"})," Copy Link")),o.createElement("p",{style:{paddingLeft:"1.5em"}},"Table of Contents"),o.createElement("ul",{style:{}},t.mdx.tableOfContents.items.map((function(e){return o.createElement("li",{key:e.title,style:{listStyleType:"none"}},o.createElement(n.Link,{to:""+e.url,style:{textDecoration:"none"}},e.title))})))))}}}]);
//# sourceMappingURL=component---src-pages-accomodations-for-adhd-mdx-slug-js-50def8286046e1854ed3.js.map