"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{713:function(e,t,n){n.d(t,{DD:function(){return u},PY:function(){return i},Up:function(){return o},oO:function(){return p},y:function(){return s}});var r=n(294),a="https://api.themoviedb.org/3/movie/",c="9347350ba2bb7631373e3da2add3bd27",i=function(){var e=new URLSearchParams({api_key:c,language:"en-US",page:"1",include_adult:!1,per_page:"20"});return r.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?").concat(e))},u=function(e){var t=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"?").concat(t))},o=function(e){var t=new URLSearchParams({api_key:c,language:"en-US",include_adult:!1,query:e,page:"1"});return r.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(t))},s=function(e){var t=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"/credits?").concat(t))},p=function(e){var t=new URLSearchParams({api_key:c});return r.Z.get("".concat(a,"/").concat(e,"/reviews?").concat(t))}},628:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),o=n(689),s=n(713),p=n(184),h=function(e){var t=e.item;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/original/".concat(t.profile_path):"",alt:"",width:"80",height:"80"}),(0,p.jsx)("h3",{children:t.name}),(0,p.jsx)("p",{children:t.character})]})},l=function(e){var t=e.items.map((function(e){return(0,p.jsx)(h,{item:e},e.id)}));return(0,p.jsx)("ul",{children:t})},d=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,u.useState)(!1),d=(0,a.Z)(h,2),f=d[0],m=d[1],v=(0,u.useState)(null),g=(0,a.Z)(v,2),k=g[0],x=g[1],_=(0,o.UO)().movieId;(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,m(!0),e.next=6,(0,s.y)(_);case 6:t=e.sent,n=t.data,c(null!==n&&void 0!==n&&n.cast?n.cast:[]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),x(e.t0.message);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var b=Boolean(n.length);return console.log(n),(0,p.jsxs)(p.Fragment,{children:[f&&(0,p.jsx)("p",{children:"Loading..."}),k&&(0,p.jsx)("p",{children:k}),b&&(0,p.jsx)(l,{items:n})]})}}}]);
//# sourceMappingURL=727.911f1c1a.chunk.js.map