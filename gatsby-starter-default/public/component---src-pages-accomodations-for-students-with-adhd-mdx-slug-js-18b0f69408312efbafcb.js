(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[225],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,i){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},6945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=p;var r=l(n(7294)),o=n(1597),a=l(n(5697)),i=n(2284);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=e.to,n=e.title,a=e.children,l=e.className,c=e.stripHash,u=void 0!==c&&c,p=e.gatsbyLinkProps,d=void 0===p?{}:p,f=e.onAnchorLinkClick,m=u?i.handleStrippedLinkClick:i.handleLinkClick,y=s(s({},d),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,f)}});return n&&(y.title=n),l&&(y.className=l),r.default.createElement(o.Link,y,a||n)}p.propTypes={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,gatsbyLinkProps:a.default.object,onAnchorLinkClick:a.default.func,children:a.default.node}},3089:function(e,t,n){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(6945)},2102:function(e,t,n){var r=n(2632);e.exports={MDXRenderer:r}},2632:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),i=n(7316),l=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(7294),p=n(4983).mdx,d=n(6948).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,l),c=d(t),f=u.useMemo((function(){if(!n)return null;var e=s({React:u,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return u.createElement(f,s({},a))}},4273:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(8916),a=n(2102),i=n(3089),l=n(9357),c=n(7059),s=n(5414),u=n(1597);t.default=function(e){var t=e.data,n=(0,c.c)("../../blog/media/advocacy.png");return r.createElement(o.Z,null,r.createElement(l.Z,{title:t.mdx.frontmatter.title}),r.createElement(s.q,null,r.createElement("meta",{name:"description",content:t.mdx.frontmatter.short}),r.createElement("meta",{name:"keywords",content:t.mdx.frontmatter.keywords}),r.createElement("meta",{name:"author",content:"Rho Lall"}),r.createElement("meta",{property:"og:title",content:t.mdx.frontmatter.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:description",content:t.mdx.frontmatter.short}),r.createElement("meta",{property:"og:image",content:n}),r.createElement("meta",{property:"og:image:alt",content:t.mdx.frontmatter.title}),r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{property:"og:url",content:"https://rho-lall.github.io/adhd"}),r.createElement("link",{rel:"canonical",href:"https://rho-lall.github.io./adhd"})),r.createElement("div",{style:{flexBasis:5,flexGrow:5,paddingRight:"2em"}},r.createElement("h1",null,t.mdx.frontmatter.title),r.createElement(a.MDXRenderer,null,t.mdx.body),r.createElement("br",null),r.createElement("h3",null,"A Note on Terms and References."),r.createElement("p",null,"When the language of a law addresses ADHD directly I provide ",r.createElement(u.Link,{to:"https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400"},"a reference to the source material.")),r.createElement("p",null,"Reference sources such as the ",r.createElement(u.Link,{to:"https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400"},"Individuals with Disabilities Education Act")," & Section 504 of the Rehabilitation Act of 1973 and the Americans with Disabilities Act speak about “individuals with disabilities” generally but also make specific mention of ADHD in the language of the law."),r.createElement("p",null,"This is written specifically for parents looking for help getting specialized education and ",r.createElement(u.Link,{to:"/accomodations-for-students-with-adhd/accommodations-for-adhd"},"accommodations for ADHD")," and discusses specific ",r.createElement(u.Link,{to:"/accomodations-for-students-with-adhd/accommodations-for-adhd"},"accomodations for students with ADHD"),". When the law makes general mention of “individuals with disabilities” I may use any of these terms interchangeably: accomodations for ADHD, accomodations for students with ADHD, ADHD elementary students.")),r.createElement("aside",{style:{width:"240px",marginTop:"2em",padding:".5em",borderLeft:"1px dotted grey",alignSelf:"flex-start"},className:"hideOnMobile"},r.createElement("ul",{style:{}},r.createElement("li",{style:{listStyleType:"none"}},r.createElement("img",{src:"https://img.icons8.com/material-sharp/20/undefined/export-pdf.png",alt:"export PDF"})," Export as PDF"),r.createElement("li",{style:{listStyleType:"none"}},r.createElement("img",{src:"https://img.icons8.com/ios-filled/20/undefined/copy-link.png",alt:"copy"})," Copy Link")),r.createElement("p",{style:{paddingLeft:"1.5em"}},r.createElement("img",{src:"https://img.icons8.com/ios-filled/15/undefined/align-right.png",alt:"TOC Link"})," Table of Contents"),r.createElement("ul",{style:{}},t.mdx.tableOfContents.items.map((function(e){return r.createElement("li",{key:e.title,style:{listStyleType:"none",textAlign:"left"}},r.createElement(i.P,{to:""+e.url},e.title))})))))}}}]);
//# sourceMappingURL=component---src-pages-accomodations-for-students-with-adhd-mdx-slug-js-18b0f69408312efbafcb.js.map