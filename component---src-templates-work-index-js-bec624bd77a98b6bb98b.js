(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{160:function(e,t,a){"use strict";a.r(t);a(18),a(77);var n=a(75),i=a.n(n),l=a(171),r=a(0),c=a.n(r),s=a(166),o=a(165),m=(s.c.div.withConfig({displayName:"styles__Slide",componentId:"sc-1qip3tv-0"})(["position:relative;img{max-width:100%;}"]),s.c.img.withConfig({displayName:"styles__Thumb",componentId:"sc-1qip3tv-1"})(["margin:0 10px;max-width:100px;transition:all 0.3s ease-in-out;&.tns-nav-active{border:2px solid red;max-width:105px;}"]),s.c.div.withConfig({displayName:"styles__Images",componentId:"sc-1qip3tv-2"})(["height:70vh;overflow:hidden;.content{align-items:flex-start;box-sizing:content-box;display:flex;height:inherit;overflow-x:auto;padding:0 0 ",";width:100%;&.draggable{cursor:move;cursor:grab;&:active{cursor:grabbing;}}}.image{margin:0 ",";max-height:100%;max-width:100%;width:auto;&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"],Object(o.e)(20),Object(o.g)(.5))),d=s.c.div.withConfig({displayName:"styles__ByAuthor",componentId:"sc-1qip3tv-3"})(["display:block;margin:0 0 ",";&::before{color:",";content:'\0d7';display:inline-block;font-size:",";margin:0 "," 0 0;vertical-align:middle;}"],Object(o.g)(),o.f.colors.neutro500,Object(o.d)(-.5),Object(o.g)(.25)),g=(s.c.div.withConfig({displayName:"styles__Info",componentId:"sc-1qip3tv-4"})(["padding:0 "," 0 0;"],Object(o.g)()),a(182)),p=a(161),u=s.c.span.withConfig({displayName:"ArrowLabel__Arrow",componentId:"iiw1lz-0"})(["color:",";display:inline-block;font-size:",";margin:0 "," 0 0;text-transform:uppercase;span{font-size:",";}"],o.f.colors.neutro500,Object(o.d)(-1),Object(o.g)(.25),Object(o.d)(0)),h=Object(p.c)()(function(e){var t=e.t,a=e.prev;return c.a.createElement(u,null,c.a.createElement("span",{"aria-hidden":"true"},a?"←":"→")," ",t("commons."+(a?"previous":"next")))}),b=a(167),y=a(163),f=a(162),v=a(173),E=a.n(v);a.d(t,"query",function(){return w});var w="2499590952";t.default=Object(p.c)()(function(e){var t,a=e.t,n=i()(e,["t"]);Object(r.useEffect)(function(){Object(g.c)()});var s=n.pageContext.locale,o=n.pageContext.page,u=o.work,v=o.previous,w=o.next,j=o.artist,O=Object(g.a)([j.name,j.preposition,j.lastname]," "),k=Object(l.a)("/assets/img/"+j.key+"/"+u.images[0]),x={"@context":"http://schema.org","@type":"VisualArtwork",name:u.title,alternateName:u.title,image:E.a.siteMetadata.siteUrl+k,description:Object(g.a)(u.description," "),creator:[{"@type":"Person",name:O,sameAs:E.a.siteMetadata.siteUrl+"/"+s+"/"+j.key}]};return u.width&&(x=Object.assign({},x,{width:[{"@type":"Distance",name:u.width}]})),u.height&&(x=Object.assign({},x,{height:[{"@type":"Distance",name:u.height}]})),u.depth&&(x=Object.assign({},x,{depth:[{"@type":"Distance",name:u.depth}]})),u.medium&&(x=Object.assign({},x,{artMedium:u.medium})),u.surface&&(x=Object.assign({},x,{artworkSurface:u.surface})),c.a.createElement(b.a,Object.assign(((t={url:"/"+s+"/"+j.key+"/"+u.key,title:u.title+" | "+j.name,image:Object(l.a)("/img/"+u.images[0]),description:Object(g.a)(u.description," ")}).image=k,t.schema=[x],t),n),c.a.createElement(f.p,null,c.a.createElement(f.g,null,c.a.createElement(f.j,null,c.a.createElement("h1",{className:"t-h2"},u.title),c.a.createElement(f.i,null,u.date),c.a.createElement(d,null,c.a.createElement(p.a,{to:"/"+j.key},O)),c.a.createElement(y.a,{lines:u.description})),c.a.createElement(f.l,null,v&&c.a.createElement("li",null,c.a.createElement(h,{prev:!0}),c.a.createElement(p.a,{to:"/"+j.key+"/"+v.key},v.title)),w&&c.a.createElement("li",null,c.a.createElement(h,null),c.a.createElement(p.a,{to:"/"+j.key+"/"+w.key},w.title)),(v||w)&&c.a.createElement("li",{className:"divider"}),c.a.createElement("li",null,c.a.createElement(p.a,{to:"/"+j.key},a("commons.backToAuthor")," "+O)),c.a.createElement("li",null,c.a.createElement(p.a,{to:"/"+a("routes.artists")},a("commons.backToAuthors"))))),c.a.createElement(f.b,null,c.a.createElement(m,null,c.a.createElement("div",{className:"content "+(u.images.length>1?"draggable":"")},u.images.map(function(e,t){return c.a.createElement("img",{key:j.key+"_"+t,src:Object(l.a)("/assets/img/"+j.key+"/"+e),alt:u.title,className:"image"})}))))))})},163:function(e,t,a){"use strict";var n=a(0),i=a.n(n);a(164);t.a=function(e){var t=e.components,a=e.lines,n=e.margin,l=-1;return i.a.createElement(i.a.Fragment,null,a.map(function(e,a){return""===e?i.a.createElement("br",null):"[slot]"===e?t[l+=1]:i.a.createElement("p",{key:a,className:n?"":"no-margin",dangerouslySetInnerHTML:{__html:e}})}))}}}]);
//# sourceMappingURL=component---src-templates-work-index-js-bec624bd77a98b6bb98b.js.map