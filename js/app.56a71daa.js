(function(t){function e(e){for(var n,a,s=e[0],i=e[1],l=e[2],u=0,h=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(h.length)h.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-4e6c459f":"d0f4b292"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-4e6c459f":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-4e6c459f":"fda1ba85"}[t]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],f.parentNode.removeChild(f),r(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,r[1](h)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/marvel-project/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var f=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"236a":function(t,e,r){"use strict";r("e00b")},4730:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="f45176009d104a3e5226c0810d91e505"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"app__logo"},[r("svg",{attrs:{width:"130",height:"52",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{fill:"#EC1D24",width:"100%",height:"100%"}}),r("path",{attrs:{fill:"#FEFEFE",d:"M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"}}),r("path",{attrs:{fill:"#EC1D24",d:"M0 0h30v52H0z"}}),r("path",{attrs:{fill:"#FEFEFE",d:"M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"}})])]),r("div",{staticClass:"content"},[r("router-view")],1)])},o=[],c=(r("cf25"),r("2877")),s={},i=Object(c["a"])(s,a,o,!1,null,null,null),l=i.exports,u=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("CharactersList")],1)},f=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-wrapper"},[t.characters.length?r("ul",{staticClass:"characters-list"},t._l(t.characters,(function(e,n){return r("li",{key:n,staticClass:"characters-list__item",attrs:{title:"Узнать подробнее"}},[r("router-link",{attrs:{to:{name:"Character",params:{id:e.id}}}},[t._v(t._s(e.name))])],1)})),0):t._e(),!t.isLoading&&t.error?r("div",{staticClass:"characters-list__error"},[r("div",[t._v("Произошла ошибка :(")]),r("div",[t._v("Пожалуйста, попробуйте повторить запрос позже")])]):t._e(),t.isLoading?r("dot-loader",{attrs:{loading:t.isLoading,color:"#fc3903",size:"26px"}}):t._e(),r("button",{staticClass:"more-characters-btn",attrs:{title:"Загрузить больше персонажей"},on:{click:t.getCharacters}},[t._v(" Показать еще ")])],1)},p=[],v=r("5530"),m=(r("99af"),r("159b"),r("8a5d")),g=r("2f62"),b=r("4730"),y=r("bc3a"),C=r.n(y),_={name:"CharactersList",components:{DotLoader:m["a"]},data:function(){return{isLoading:!1,error:!1}},computed:Object(v["a"])({},Object(g["b"])({characters:function(t){return t.characters}})),created:function(){this.characters.length||this.getCharacters()},updated:function(){this.isLoading||this.scrollToLast()},methods:{getCharacters:function(){var t=this;this.error=!1,this.isLoading=!0,this.characters.length&&this.scrollToLast(),C.a.get("http://gateway.marvel.com/v1/public/characters?apikey=".concat(b["a"],"&offset=").concat(this.characters.length,"&limit=10")).then((function(e){t.isLoading=!1,t.error=!1;var r=e.data.data.results,n=[];r.forEach((function(t){n.push(t)})),t.$store.commit("SET_CHARACTERS",n)})).catch((function(e){t.isLoading=!1,t.error=!0,console.log(e)}))},scrollToLast:function(){this.$el.querySelector(".characters-list")&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}}},w=_,E=(r("236a"),Object(c["a"])(w,d,p,!1,null,null,null)),L=E.exports,T={name:"Home",components:{CharactersList:L}},S=T,j=Object(c["a"])(S,h,f,!1,null,null,null),O=j.exports;n["a"].use(u["a"]);var k=[{path:"/",name:"Home",component:O},{path:"/character/:id",name:"Character",component:function(){return r.e("chunk-4e6c459f").then(r.bind(null,"e5a5"))}}],H=new u["a"]({mode:"history",base:"/marvel-project/",routes:k}),A=H;n["a"].use(g["a"]);var x=new g["a"].Store({state:{characters:[]},mutations:{SET_CHARACTERS:function(t,e){t.characters=t.characters.concat(e)}},actions:{SET_CHARACTERS:function(t,e){var r=t.commit;return r("SET_CHARACTERS",e)}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:A,store:x,render:function(t){return t(l)}}).$mount("#app")},cf25:function(t,e,r){"use strict";r("fea6")},e00b:function(t,e,r){},fea6:function(t,e,r){}});
//# sourceMappingURL=app.56a71daa.js.map