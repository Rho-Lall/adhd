(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[225],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},6945:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=p;var n=l(r(7294)),o=r(1597),a=l(r(5697)),i=r(2284);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=e.to,r=e.title,a=e.children,l=e.className,c=e.stripHash,u=void 0!==c&&c,p=e.gatsbyLinkProps,f=void 0===p?{}:p,d=e.onAnchorLinkClick,m=u?i.handleStrippedLinkClick:i.handleLinkClick,y=s(s({},f),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,d)}});return r&&(y.title=r),l&&(y.className=l),n.default.createElement(o.Link,y,a||r)}p.propTypes={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,gatsbyLinkProps:a.default.object,onAnchorLinkClick:a.default.func,children:a.default.node}},3089:function(e,t,r){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return n.AnchorLink}});var n=r(6945)},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),i=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,l),c=f(t),d=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(d,s({},a))}},4273:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(8916),a=r(2102),i=r(3089),l=r(9357),c=r(7059),s=r(5414),u=r(1597);t.default=function(e){var t=e.data,r=(0,c.c)("../../blog/media/advocacy.png");return n.createElement(o.Z,null,n.createElement(l.Z,{title:t.mdx.frontmatter.title}),n.createElement(s.q,null,n.createElement("meta",{name:"description",content:t.mdx.frontmatter.short}),n.createElement("meta",{name:"keywords",content:t.mdx.frontmatter.keywords}),n.createElement("meta",{name:"author",content:"Rho Lall"}),n.createElement("meta",{property:"og:title",content:t.mdx.frontmatter.title}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:description",content:t.mdx.frontmatter.short}),n.createElement("meta",{property:"og:image",content:r}),n.createElement("meta",{property:"og:image:alt",content:t.mdx.frontmatter.title}),n.createElement("meta",{property:"og:locale",content:"en_US"}),n.createElement("meta",{property:"og:url",content:"https://rho-lall.github.io/adhd"}),n.createElement("link",{rel:"canonical",href:"https://rho-lall.github.io./adhd"})),n.createElement("div",{style:{flexBasis:5,flexGrow:5,paddingRight:"2em"}},n.createElement("h1",null,t.mdx.frontmatter.title),n.createElement(a.MDXRenderer,null,t.mdx.body),n.createElement("h3",null,"A Note on Terms and References."),n.createElement("p",null,"Reference sources such as the ",n.createElement(u.Link,{to:"https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400"},"Individuals with Disabilities Education Act")," & Section 504 of the Rehabilitation Act of 1973 and the Americans with Disabilities Act speak about “individuals with disabilities” generally but also make specific mention of ADHD in the language of the law."),n.createElement("p",null,"This resource is written specifically for ADHD elementary students and discusses specific accomodations for students with ADHD. When the law mentions “individuals with disabilities” generally I may use these terms interchangeably: accomodations for ADHD, accomodations for students with ADHD, ADHD elementary students."),n.createElement("p",null,"When the language of a law addresses ADHD directly I provide ",n.createElement(u.Link,{to:"https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400"},"a reference to the source material."))),n.createElement("aside",{style:{width:"240px",marginTop:"2em",padding:".5em",borderLeft:"1px dotted grey",alignSelf:"flex-start"},className:"hideOnMobile"},n.createElement("ul",{style:{}},n.createElement("li",{style:{listStyleType:"none"}},n.createElement("img",{src:"https://img.icons8.com/material-sharp/24/undefined/export-pdf.png",alt:"export PDF"})," Export as PDF"),n.createElement("li",{style:{listStyleType:"none"}},n.createElement("img",{src:"https://img.icons8.com/ios-filled/25/undefined/copy-link.png",alt:"copy link"})," Copy Link")),n.createElement("p",{style:{paddingLeft:"1.5em"}},"Table of Contents"),n.createElement("ul",{style:{}},t.mdx.tableOfContents.items.map((function(e){return n.createElement("li",{key:e.title,style:{listStyleType:"none",textAlign:"left"}},n.createElement(i.P,{to:""+e.url},e.title))})))))}}}]);
//# sourceMappingURL=component---src-pages-accomodations-for-students-with-adhd-mdx-slug-js-c97371150294aa8897df.js.map