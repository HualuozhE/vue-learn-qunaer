(function(t){function e(e){for(var s,a,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],i[a]&&d.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-02a7b6e6":"3160b526","chunk-747e1826":"7efd5520","chunk-7483bd67":"e49a6c86","chunk-77317cd4":"e76115f6"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-02a7b6e6":1,"chunk-747e1826":1,"chunk-7483bd67":1,"chunk-77317cd4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var s="css/"+({}[t]||t)+"."+{"chunk-02a7b6e6":"986a73c3","chunk-747e1826":"f158c67f","chunk-7483bd67":"091f1ae2","chunk-77317cd4":"23d90689"}[t]+".css",i=o.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise(function(e,n){s=i[t]=[e,n]});e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+a+")");r.type=s,r.request=a,n[1](r)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b34":function(t,e,n){},2177:function(t,e,n){},"2feb":function(t,e,n){"use strict";var s=n("99e7"),a=n.n(s);a.a},"3b08":function(t,e,n){"use strict";var s=n("2177"),a=n.n(s);a.a},"4c05":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("7212"),i=n.n(a),r=n("2f62");s["a"].use(r["a"]);var c=new r["a"].Store({strict:!1,state:{city:"北京"},mutations:{changeCity:function(t,e){var n=t;n.city=e}}}),o=c,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},u=[],d=n("2877"),f={},p=Object(d["a"])(f,l,u,!1,null,null,null),v=p.exports,m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("qunar-error",{attrs:{show:t.errorStatus}}),n("qunar-loading",{attrs:{show:t.loadingStatus}}),n("qunar-header"),n("qunar-swiper",{attrs:{list:t.carousel}}),n("qunar-icon",{attrs:{list:t.icons}}),n("qunar-pos-list"),n("qunar-hot-list",{attrs:{list:t.hotList}}),n("qunar-like-list",{attrs:{list:t.likeList}}),n("qunar-weekend",{attrs:{list:t.weekend}})],1)},_=[],b=n("bc3a"),g=n.n(b),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"qunar-error-msg",on:{click:t.reloadHandle}},[t._m(0)]):t._e()},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-box"},[t._v("\n    网络错误, 数据加载失败!\n    "),n("p",{staticClass:"prompt"},[t._v("点我刷新页面")])])}],y={name:"qunarError",props:{show:Boolean},methods:{reloadHandle:function(){window.location.reload()}}},k=y,q=(n("2feb"),Object(d["a"])(k,C,w,!1,null,"b95df280",null)),E=q.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"qunar-loading-msg"},[n("div",{staticClass:"msg-box"},[t._v("\n    正在加载数据......\n  ")])]):t._e()},j=[],x={name:"qunarLoading",props:{show:Boolean}},L=x,S=(n("fce4"),Object(d["a"])(L,O,j,!1,null,"46d4ea32",null)),$=S.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),t._m(1),n("router-link",{staticClass:"header-right",attrs:{to:"/city",tag:"div"}},[t._v("\n    "+t._s(t.city)+"\n    "),n("span",{staticClass:"iconfont"},[t._v("")])])],1)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("span",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-middle"},[n("span",{staticClass:"iconfont"},[t._v("")]),n("input",{staticClass:"search-box",attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}})])}],H=n("cebc"),T={name:"qunaerHeader",computed:Object(H["a"])({},Object(r["b"])(["city"]))},U=T,B=(n("c1e6"),Object(d["a"])(U,P,A,!1,null,"65e96902",null)),M=B.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showSwiper?n("div",{staticClass:"swiper"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return n("swiper-slide",{key:t.id},[n("img",{staticClass:"ele-img",attrs:{src:t.imgUrl}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1):t._e()},z=[],D={name:"qunarSwiper",props:{list:Array},data:function(){return{swiperOption:{loop:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"},width:window.innerWidth}}},computed:{showSwiper:function(){return this.list.length>0}}},I=D,W=(n("e327"),Object(d["a"])(I,N,z,!1,null,"028cdb1d",null)),J=W.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.viewData,function(e,s){return n("swiper-slide",{key:s},t._l(e,function(e){return n("div",{key:e.id,staticClass:"icon"},[n("a",{attrs:{href:"#"}},[n("div",{staticClass:"icon-img"},[n("img",{attrs:{src:e.imgUrl}})]),n("p",{staticClass:"description"},[t._v(t._s(e.title))])])])}),0)}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},K=[],G=(n("673e"),n("ac6a"),{name:"qunarIcon",props:{list:Array},data:function(){return{swiperOption:{width:window.innerWidth,pagination:{el:".swiper-pagination"}}}},computed:{viewData:function(){var t=[];return t=[],this.list.forEach(function(e,n){var s=Math.floor(n/8);t[s]||t.push([]),t[s].push(e)}),t}}}),Q=G,R=(n("c237"),Object(d["a"])(Q,F,K,!1,null,"258cde28",null)),V=R.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"pos-item"},[n("p",{staticClass:"content"},[n("span",{staticClass:"iconfont"},[t._v("")]),n("span",[t._v("定位失败")])])]),n("div",{staticClass:"pos-item"},[n("a",{attrs:{href:"#"}},[n("p",{staticClass:"content"},[n("span",{staticClass:"iconfont"},[t._v("")]),n("span",[t._v("必游榜单")])])])])])}],Z={name:"qunarPosList"},tt=Z,et=(n("3b08"),Object(d["a"])(tt,X,Y,!1,null,"f54edf36",null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"item-list"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"item"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.imgUrl}})]),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"comment"},[n("span",{staticClass:"star iconfont"},[t._v("")]),t._v("\n              \n            "),n("span",{staticClass:"comment-info"},[n("span",{staticClass:"comment-num"},[t._v(t._s(e.comment))]),t._v("条评论\n            ")])]),n("div",{staticClass:"info"},[n("span",{staticClass:"price"},[t._v("¥")]),n("span",{staticClass:"money"},[t._v(t._s(e.money))]),t._v("起\n            "),n("span",{staticClass:"city"},[t._v("东城区")])]),e.tip?n("div",{staticClass:"hot-msg"},[t._v(t._s(e.tip))]):t._e()])])}),0)])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("h3",[n("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"}}),t._v("猜你喜欢")])])])}],it={name:"qunarLikeList",props:{list:Array}},rt=it,ct=(n("e9e1"),Object(d["a"])(rt,st,at,!1,null,"fdcdaada",null)),ot=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"item-list"},[n("ul",{staticClass:"item-container"},t._l(t.list,function(e){return n("li",{key:e.id,staticClass:"item"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.imgUrl}})]),n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"money"},[n("span",[t._v("￥")]),n("span",{staticClass:"text-money"},[t._v(t._s(e.money))]),t._v("起\n          ")])])}),0)])])},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("h3",[n("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"}}),t._v("本周热门榜单")])]),n("div",{staticClass:"info"},[n("a",{attrs:{href:"#"}},[n("span",[t._v("全部榜单")]),n("span",{staticClass:"iconfont"},[t._v("")])])])])}],dt={name:"qunarHotList",props:{list:Array}},ft=dt,pt=(n("f12c"),Object(d["a"])(ft,lt,ut,!1,null,"5ed2c443",null)),vt=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"item-list"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"item"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.imgUrl}})]),n("div",{staticClass:"content"},[n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"info"},[t._v(t._s(e.info))])])])}),0)])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h3",[t._v("周末去哪儿")])])}],_t={name:"qunarWeekend",props:{list:Array}},bt=_t,gt=(n("78d3"),Object(d["a"])(bt,mt,ht,!1,null,"6e7d14b7",null)),Ct=gt.exports,wt={name:"Home",components:{qunarHeader:M,qunarError:E,qunarLoading:$,qunarSwiper:J,qunarIcon:V,qunarPosList:nt,qunarHotList:vt,qunarLikeList:ot,qunarWeekend:Ct},data:function(){return{errorStatus:!1,loadingStatus:!0,carousel:[],icons:[],hotList:[],likeList:[],weekend:[]}},mounted:function(){var t=this;g.a.get("/api/index.json").then(function(t){if(!t||200!==t.status)return Promise.reject(new Error("网络错误"));var e=t.data;return e.ret&&e.data?e.data:Promise.reject(new Error("网络错误"))}).then(function(e){t.carousel=e.carousel,t.icons=e.icons,t.hotList=e.hotList,t.likeList=e.likeList,t.weekend=e.weekend,t.loadingStatus=!1}).catch(function(){t.errorStatus=!0})}},yt=wt,kt=Object(d["a"])(yt,h,_,!1,null,"1796be16",null),qt=kt.exports;s["a"].use(m["a"]);var Et=new m["a"]({mode:"history",base:"/dist/",routes:[{path:"/",name:"home",component:qt},{path:"/city",name:"city",component:function(){return n.e("chunk-02a7b6e6").then(n.bind(null,"b6e9"))}}]});s["a"].config.productionTip=!1,n.e("chunk-747e1826").then(n.t.bind(null,"3db4",7)),n.e("chunk-7483bd67").then(n.t.bind(null,"5414",7)),n.e("chunk-77317cd4").then(n.t.bind(null,"dfa4",7)),s["a"].use(i.a),new s["a"]({router:Et,store:o,render:function(t){return t(v)}}).$mount("#app")},"77fd":function(t,e,n){},"78d3":function(t,e,n){"use strict";var s=n("e519"),a=n.n(s);a.a},"7c94":function(t,e,n){},"87aa":function(t,e,n){},"99e7":function(t,e,n){},c1e6:function(t,e,n){"use strict";var s=n("87aa"),a=n.n(s);a.a},c237:function(t,e,n){"use strict";var s=n("4c05"),a=n.n(s);a.a},cf30:function(t,e,n){},e327:function(t,e,n){"use strict";var s=n("77fd"),a=n.n(s);a.a},e519:function(t,e,n){},e9e1:function(t,e,n){"use strict";var s=n("1b34"),a=n.n(s);a.a},f12c:function(t,e,n){"use strict";var s=n("cf30"),a=n.n(s);a.a},fce4:function(t,e,n){"use strict";var s=n("7c94"),a=n.n(s);a.a}});
//# sourceMappingURL=app.1ace6c61.js.map