"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[547],{547:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(861),a=n(439),c=n(757),i=n.n(c),u=n(791),s=n(689),o=n(257),p=n(184),f=function(e){var t=e.character,n=e.profile_path,r=e.name;return(0,p.jsxs)("li",{children:[n&&(0,p.jsx)("img",{src:"".concat(o.H.secure_base_url).concat(o.H.profile_sizes,"/").concat(n),alt:""}),(0,p.jsx)("h4",{children:r}),(0,p.jsx)("p",{children:t})]})},l=function(e){var t=e.items;return(0,p.jsx)("ul",{children:t.map((function(e){var t=e.cast_id,n=e.character,r=e.profile_path,a=e.name;return(0,p.jsx)(f,{character:n,profile_path:r,name:a},t)}))})},d=n(570),h=n(258),v=n(130),m=n(124),g=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],o=(0,u.useState)(v.Q_.idle),f=(0,a.Z)(o,2),g=f[0],x=f[1],_=(0,u.useState)(null),w=(0,a.Z)(_,2),b=w[0],y=w[1],k=(0,s.UO)().movieId;(0,u.useEffect)((function(){if(k){var e=new AbortController,t=e.signal;try{!function(){n.apply(this,arguments)}()}catch(b){x(v.Q_.rejected),y(b)}return function(){e.abort()}}function n(){return(n=(0,r.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(v.Q_.pending),e.next=3,(0,m.zv)(k,t);case 3:n=e.sent,r=n.cast,c(r),x(v.Q_.resolved);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[k]);var j=g===v.Q_.resolved&&n.length>0,Z=g===v.Q_.resolved&&!n.length,Q=g===v.Q_.pending,$=g===v.Q_.rejected;return(0,p.jsxs)(p.Fragment,{children:[j&&(0,p.jsx)(l,{items:n}),Z&&(0,p.jsx)(d.X,{$infotype:v.$9.notification,children:"No items found!"}),Q&&(0,p.jsx)(h.a,{}),$&&(0,p.jsx)(d.X,{$infotype:v.$9.error,children:"Oops, something went wrong! ".concat(b.message)})]})}},570:function(e,t,n){n.d(t,{X:function(){return u}});var r,a=n(168),c=n(924),i=n(130),u=c.ZP.p(r||(r=(0,a.Z)(["\n  text-align: center;\n  color: ",";\n"])),(function(e){var t="";switch(e.$infotype){case i.$9.error:t="red";break;case i.$9.notification:t="#3f51b5";break;default:t="black"}return t}))},130:function(e,t,n){n.d(t,{$9:function(){return a},Q_:function(){return r}});var r={idle:"idle",pending:"pending",resolved:"resolved",rejected:"rejected"},a={error:"error",notification:"notification"}},257:function(e,t,n){n.d(t,{H:function(){return r}});var r={secure_base_url:"https://image.tmdb.org/t/p/",poster_sizes:"w500",profile_sizes:"w185"}},124:function(e,t,n){n.d(t,{Hg:function(){return u},Nr:function(){return o},Pg:function(){return f},tx:function(){return v},zv:function(){return d}});var r=n(861),a=n(757),c=n.n(a),i=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"aa5059789a38bc93f2c5a690047de290"}});function u(e,t){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(t,n){var r,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={page:t},e.next=3,i.get("trending/movie/day",{params:r,signal:n});case 3:return a=e.sent,u=a.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t,n,r){var a,u,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:t,page:n},e.next=3,i.get("search/movie",{params:a,signal:r});case 3:return u=e.sent,s=u.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t),{signal:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"),{signal:n});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t,n,r){var a,u,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={page:n},e.next=3,i.get("movie/".concat(t,"/reviews"),{params:a,signal:r});case 3:return u=e.sent,s=u.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=547.7e926b9f.chunk.js.map