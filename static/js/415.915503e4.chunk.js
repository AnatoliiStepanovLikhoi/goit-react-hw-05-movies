"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{8418:function(t,n,e){e.d(n,{Pg:function(){return p},Pt:function(){return x},tx:function(){return v},yE:function(){return s},zv:function(){return l}});var r=e(5861),a=e(4687),u=e.n(a),c=e(3263),i="19011014b9b53c4fd496d37c25f2b619";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/week?api_key=".concat(i));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t,n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&page=").concat(e,"&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},5321:function(t,n,e){e.d(n,{W:function(){return u}});var r,a=e(168),u=e(7402).Z.div(r||(r=(0,a.Z)(["\n  padding: 24px;\n"])))},5545:function(t,n,e){e.d(n,{O:function(){return x}});var r,a,u,c=e(2007),i=e.n(c),s=e(168),o=e(7402),p=e(1087),f=o.Z.ul(r||(r=(0,s.Z)(["\n  margin-top: 16px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),l=o.Z.li(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n\n  gap: 4px;\n"]))),d=(0,o.Z)(p.OL)(u||(u=(0,s.Z)(["\n  padding: 4px;\n\n  &:hover,\n  &:focus {\n    color: #eb8596;\n  }\n"]))),v=e(9e3),h=e(184),x=function(t){var n=t.moviesList,e=t.state;return(0,h.jsx)(f,{children:n.map((function(t){return(0,h.jsxs)(l,{children:[(0,h.jsx)(v.$kb,{}),(0,h.jsx)(d,{to:"/movies/".concat(t.id),state:e,children:t.original_title})]},t.id)}))})};x.propType={moviesList:i().array.isRequired}},5415:function(t,n,e){e.r(n);var r=e(9439),a=e(2791),u=e(8418),c=e(854),i=e(5321),s=e(5545),o=e(7689),p=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],l=(0,a.useState)("idle"),d=(0,r.Z)(l,2),v=d[0],h=d[1],x=(0,o.TH)();return(0,a.useEffect)((function(){h("pending"),(0,u.yE)().then((function(t){f(t),h("resolved")})).catch((function(){return h("rejected")}))}),[]),(0,p.jsxs)(i.W,{children:[(0,p.jsx)("h2",{children:"Trending today"}),"pending"===v&&(0,p.jsx)(c.a,{}),"rejected"===v&&(0,p.jsx)("p",{children:"Error"}),"resolved"===v&&(0,p.jsx)(s.O,{moviesList:e,state:{from:x}})]})}}}]);
//# sourceMappingURL=415.915503e4.chunk.js.map