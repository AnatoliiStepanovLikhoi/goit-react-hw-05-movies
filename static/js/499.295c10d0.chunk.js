"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[499],{8418:function(t,n,r){r.d(n,{Pg:function(){return p},Pt:function(){return x},tx:function(){return d},yE:function(){return s},zv:function(){return l}});var e=r(5861),u=r(4687),a=r.n(u),c=r(3263),i="19011014b9b53c4fd496d37c25f2b619";function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/week?api_key=".concat(i));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t,n){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(a().mark((function t(n,r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&page=").concat(r,"&include_adult=false"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},8170:function(t,n,r){r.r(n),r.d(n,{default:function(){return x}});var e,u,a,c=r(9439),i=r(2791),s=r(8418),o=r(7689),p=r(168),f=r(7402),l=f.Z.ul(e||(e=(0,p.Z)(["\n  padding: 12px;\n"]))),h=f.Z.li(u||(u=(0,p.Z)(["\n  border: 1px solid #eb8596;\n  padding: 8px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),d=f.Z.h3(a||(a=(0,p.Z)(["\n  margin-bottom: 8px;\n"]))),v=r(184);function x(){var t=(0,o.UO)().movieId,n=(0,i.useState)(null),r=(0,c.Z)(n,2),e=r[0],u=r[1];return(0,i.useEffect)((function(){(0,s.tx)(t).then((function(t){var n=t.results;return u(n)}))}),[t]),console.log(e),e?e.length>0?(0,v.jsx)(l,{children:e.map((function(t){return(0,v.jsxs)(h,{children:[(0,v.jsxs)(d,{children:["Author: ",t.author]}),(0,v.jsx)("p",{children:t.content})]},t.id)}))}):(0,v.jsx)("h3",{children:"Sorry, we don`t have any reviews for this movie"}):null}}}]);
//# sourceMappingURL=499.295c10d0.chunk.js.map