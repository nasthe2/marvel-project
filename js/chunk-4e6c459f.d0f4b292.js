(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e6c459f"],{"7a2f":function(a,t,r){},"9d01":function(a,t,r){"use strict";r("7a2f")},e5a5:function(a,t,r){"use strict";r.r(t);var c=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"character"},[r("router-link",{staticClass:"back-icon",attrs:{to:"/",title:"Вернуться к списку персонажей"}},[r("svg",{attrs:{width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M35.8081 18.0928C35.8081 27.4668 28.209 35.0659 18.835 35.0659C9.46045 35.0659 1.86133 27.4668 1.86133 18.0928C1.86133 8.71826 9.46045 1.11914 18.835 1.11914C28.209 1.11914 35.8081 8.71826 35.8081 18.0928ZM36.8081 18.0928C36.8081 28.019 28.7612 36.0659 18.835 36.0659C8.9082 36.0659 0.861328 28.019 0.861328 18.0928C0.861328 8.16602 8.9082 0.119141 18.835 0.119141C28.7612 0.119141 36.8081 8.16602 36.8081 18.0928ZM13.8252 18.7197C13.6299 18.5244 13.6299 18.208 13.8252 18.0127L14.418 17.4199L19.3257 12.5122C19.521 12.3169 19.8374 12.3169 20.0327 12.5122L20.6255 13.105C20.8208 13.3003 20.8208 13.6167 20.6255 13.812L16.0713 18.3662L20.6255 22.9204C20.8208 23.1157 20.8208 23.4321 20.6255 23.6274L20.0327 24.2202C19.8374 24.4155 19.521 24.4155 19.3257 24.2202L14.418 19.3125L13.8252 18.7197Z",fill:"#A5ACB2"}})])]),a.character?r("div",{staticClass:"character__info"},[r("div",{staticClass:"character__info__img"},[r("img",{attrs:{src:a.url,alt:"Изображение персонажа"}})]),r("div",{staticClass:"character__info__tx"},[r("h3",[a._v(a._s(a.character.name))]),r("p",[a._v(a._s(a.character.description?a.character.description:"Хмм... Кажется, у этого персонажа отсутствует описание 🤔"))])])]):a._e(),!a.isLoading&&a.error?r("div",{staticClass:"character__error"},[r("div",[a._v("Произошла ошибка :(")]),r("div",[a._v("Пожалуйста, попробуйте обновить страницу")])]):a._e(),a.isLoading?r("dot-loader",{attrs:{loading:a.isLoading,color:"#fc3903",size:"26px"}}):a._e()],1)},e=[],i=(r("99af"),r("8a5d")),s=r("4730"),n=r("bc3a"),o=r.n(n),l={name:"Character",components:{DotLoader:i["a"]},data:function(){return{isLoading:!0,error:!1,character:null,url:"",size:"standard_large.jpg"}},created:function(){this.getCharacter()},methods:{getCharacter:function(){var a=this;this.error=!1,this.isLoading=!0;var t=this.$route.params.id;o.a.get("http://gateway.marvel.com/v1/public/characters/".concat(t,"?apikey=").concat(s["a"])).then((function(t){a.isLoading=!1,a.error=!1,a.character=t.data.data.results[0],a.url="".concat(a.character.thumbnail.path,"/").concat(a.size)})).catch((function(t){a.isLoading=!1,a.error=!0,console.log(t)}))}}},d=l,h=(r("9d01"),r("2877")),u=Object(h["a"])(d,c,e,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4e6c459f.d0f4b292.js.map