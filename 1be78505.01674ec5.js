(window.webpackJsonp=window.webpackJsonp||[]).push([[22,186],{479:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(484),i=a(497),r=a(119),o=a(561),s=a(556),u=a(562),m=a(82),b=a(588),d=a(536),f=a(640),h=a(643),v=a(644),p=a(645),k=a(642),E=a(532),O=a(555),j=a(352),g=a.n(j);var C=function e(t,a){return"link"===t.type?(n=t.href,l=a,(c=function(e){return e.endsWith("/")?e:"".concat(e,"/")})(n)===c(l)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,l,c};function _(e){var t,a,c=e.item,i=e.onItemClick,r=e.collapsible,o=e.activePath,f=Object(b.a)(e,["item","onItemClick","collapsible","activePath"]),h=c.items,v=c.label,p=C(c,o),k=(t=p,a=Object(n.useRef)(t),Object(n.useEffect)((function(){a.current=t}),[t]),a.current),E=Object(n.useState)((function(){return!!r&&(!p&&c.collapsed)})),O=Object(m.a)(E,2),j=O[0],_=O[1];Object(n.useEffect)((function(){p&&!k&&j&&_(!1)}),[p,k,j]);var N=Object(n.useCallback)((function(e){e.preventDefault(),_((function(e){return!e}))}),[_]);return 0===h.length?null:l.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":j}),key:v},l.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",Object(u.a)({"menu__link--sublist":r,"menu__link--active":r&&p},g.a.menuLinkText,!r)),onClick:r?N:void 0,href:r?"#!":void 0},f),v),l.a.createElement("ul",{className:"menu__list"},h.map((function(e){return l.a.createElement(w,{tabIndex:j?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:r,activePath:o})}))))}function N(e){var t=e.item,a=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(b.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,r=t.label,o=C(t,n);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(E.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":o}),to:i},Object(O.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function w(e){switch(e.item.type){case"category":return l.a.createElement(_,e);case"link":default:return l.a.createElement(N,e)}}var y=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.a)(),b=o.siteConfig,O=(b=void 0===b?{}:b).themeConfig.navbar,j=(O=void 0===O?{}:O).title,C=O.hideOnScroll,_=void 0!==C&&C,N=o.isClient,y=Object(p.a)(),M=y.logoLink,I=y.logoLinkProps,P=y.logoImageUrl,S=y.logoAlt,x=Object(f.a)().isAnnouncementBarClosed,L=Object(k.a)().scrollY,W=e.docsSidebars,A=e.path,B=e.sidebar,F=e.sidebarCollapsible;Object(h.a)(c);var J=Object(v.a)();if(Object(n.useEffect)((function(){J===v.b.desktop&&r(!1)}),[J]),!B)return null;var R=W[B];if(!R)throw new Error('Cannot find the sidebar "'.concat(B,'" in the sidebar config!'));return l.a.createElement("div",{className:Object(d.a)(g.a.sidebar,Object(u.a)({},g.a.sidebarWithHideableNavbar,_))},_&&l.a.createElement(E.a,Object(s.a)({tabIndex:"-1",className:g.a.sidebarLogo,to:M},I),null!=P&&l.a.createElement("img",{key:N,src:P,alt:S}),null!=j&&l.a.createElement("strong",null,j)),l.a.createElement("div",{className:Object(d.a)("menu","menu--responsive",g.a.menu,Object(u.a)({"menu--show":c},g.a.menuWithAnnouncementBar,!x&&0===L))},l.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!c)}},c?l.a.createElement("span",{className:Object(d.a)(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},R.map((function(e){return l.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),r(!1)},collapsible:F,activePath:A})})))))},M=a(595),I=a(637),P=a(641),S=a(358),x=a.n(S);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(P.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,b=a.version,d=u[s.path],f=Object(i.a)(),h=f.siteConfig,v=(h=void 0===h?{}:h).themeConfig,p=void 0===v?{}:v,k=f.isClient,E=p.sidebarCollapsible,O=void 0===E||E;return 0===Object.keys(s).length?l.a.createElement(I.default,e):l.a.createElement(o.a,{version:b,key:k},l.a.createElement("div",{className:x.a.docPage},d&&l.a.createElement("div",{className:x.a.docSidebarContainer,role:"complementary"},l.a.createElement(y,{docsSidebars:m,path:s.path,sidebar:d,sidebarCollapsible:O})),l.a.createElement("main",{className:x.a.docMainContainer},l.a.createElement(c.a,{components:M.a},Object(r.a)(t.routes)))))}},637:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(561);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);