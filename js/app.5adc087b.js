(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0514ccb0":"f779f356","chunk-333a5119":"161283c3","chunk-45e0c17f":"b33e8c32","chunk-4d3b9024":"7211b903","chunk-542c0111":"767b8c22","chunk-62c57d4e":"5a96f30d","chunk-64778765":"b782962d","chunk-6b15fbc2":"cfd24f99","chunk-e180ae24":"2aaa0e22"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0514ccb0":1,"chunk-333a5119":1,"chunk-45e0c17f":1,"chunk-4d3b9024":1,"chunk-542c0111":1,"chunk-62c57d4e":1,"chunk-64778765":1,"chunk-6b15fbc2":1,"chunk-e180ae24":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0514ccb0":"13779626","chunk-333a5119":"450dddab","chunk-45e0c17f":"accced86","chunk-4d3b9024":"afc787c0","chunk-542c0111":"56b4fca7","chunk-62c57d4e":"416e90e2","chunk-64778765":"1cb015d1","chunk-6b15fbc2":"0d9d9f09","chunk-e180ae24":"fd2b4c00"}[e]+".css",r=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[e],f.parentNode.removeChild(f),n(s)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/emfolio/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1adc":function(e,t,n){},"39c3":function(e,t,n){},"4f20":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("NavBar",{staticClass:"menu"}),t("full-page",{ref:"fullpage",attrs:{id:"fullpage",options:e.options}},[t("div",{staticClass:"section"},[t("IntroPage",{attrs:{id:"home"}})],1),t("div",{staticClass:"section",attrs:{id:"section"}},[t("div",[t("About",{attrs:{id:"about"}})],1)]),t("div",{staticClass:"section"},[t("div",{staticClass:"slide"},[t("div",[t("Skills",{attrs:{id:"skills"}})],1)]),t("div",{staticClass:"slide"},[t("div",[t("SoftSkills")],1)])]),t("div",{staticClass:"section"},[t("div",[t("Education",{attrs:{id:"education"}})],1)]),t("div",{staticClass:"section"},[t("div",{staticClass:"slide"},[t("div",[t("Templates",{attrs:{id:"templates"}})],1)]),t("div",{staticClass:"slide"},[t("div",[t("Experience",{attrs:{id:"experience"}})],1)])]),t("div",{staticClass:"section"},[t("div",[t("Hobby",{attrs:{id:"hobby"}})],1)]),t("div",{staticClass:"section"},[t("div",[t("References",{attrs:{id:"references"}})],1)]),t("div",{staticClass:"section"},[t("div",[t("Contact",{attrs:{id:"contact"}})],1)])]),t("SmallScreen",{attrs:{id:"small-screen"}})],1)},r=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"anime-container-background"},[t("div",{ref:"vantaElement",staticClass:"vanta"}),e._m(0)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"center-card"},[t("h1",{staticClass:"transition-text"},[e._v(" Hello friend, "),t("br"),e._v(" my name is Martin ")]),t("h3",{staticClass:"subtitle"},[e._v("frontend developer and graphic designer")])])}],c=n("5a89"),l=n("0b13"),u=n.n(l),d=n("cffa"),f={name:"IntroPage",data(){return{vantaEffect:null,options:{mouseControls:!0,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,baseColor:2705040,backgroundColor:0,amplitudeFactor:.8,xOffset:-.26,size:.5}}},methods:{setVanta(){console.log("Initializing Vanta...");try{!this.$refs.vantaElement&&this.vantaEffect||(this.vantaEffect=u()({el:this.$refs.vantaElement,THREE:c,...this.options,onRender:()=>console.log("Vanta is rendering...")}))}catch(e){console.error("Error initializing Vanta:",e)}},updateSize(){this.options.minHeight=window.innerHeight,this.options.minWidth=window.innerWidth,this.vantaEffect&&this.vantaEffect.resize()}},mounted(){this.setVanta(),d["a"].from(".transition-text",{duration:2,opacity:0,x:-1e3,ease:"back"}),window.addEventListener("resize",this.updateSize)},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy(),window.removeEventListener("resize",this.updateSize)}},h=f,p=(n("75e0"),n("2877")),v=Object(p["a"])(h,s,o,!1,null,"1c7c9103",null),b=v.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navBanner"},[e._l(e.anchors,(function(n,a){return t("a",{key:a,staticClass:"gsapAnime",attrs:{href:"#slide"+e.countIndex(a)},on:{click:e.animeNav}},[e._v(e._s(n))])})),t("div",{staticClass:"border-top"})],2)},g=[],k=n("2f62"),y={name:"NavBar",computed:{...Object(k["b"])(["anchors"])},mounted(){d["a"].from(".gsapAnime",{duration:3,opacity:0,scale:0,stagger:{each:.2}})},methods:{countIndex(e){return e+1},animeNav(){d["a"].fromTo(".navBanner",{duration:.5,y:-100},{duration:.5,delay:.5,y:0})}}},C=y,_=(n("94bb"),Object(p["a"])(C,m,g,!1,null,"0710420a",null)),w=_.exports,E=function(){var e=this;e._self._c;return e._m(0)},S=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-block"},[t("h1",{staticClass:"title"},[e._v("Oops!")]),t("p",[e._v('It looks like your screen is too small for this "masterpiece". '),t("br")]),t("p",[t("br"),e._v(" But... I've got 2 solutions for you to fix this problem. ")]),t("h3",{staticClass:"color-burlywood"},[e._v("First")]),t("p",[e._v("Buy a bigger screen")]),t("h3",{staticClass:"color-burlywood"},[e._v("or")]),t("p",[e._v(" Try to accept the fact that the site is fully interactive and needs a mouse to work properly. I am sorry for this limitation. But now go and buy that screen, computer, laptop, whatever. Don't be deprived of this experience. It's worth it. See you on the other side :-) ")])])}],x={},O=x,j=(n("9c43"),Object(p["a"])(O,E,S,!1,null,"06190147",null)),P=j.exports,T={components:{Experience:()=>n.e("chunk-6b15fbc2").then(n.bind(null,"63d8")),IntroPage:b,About:()=>n.e("chunk-0514ccb0").then(n.bind(null,"06ff")),Skills:()=>n.e("chunk-542c0111").then(n.bind(null,"6dcc")),Education:()=>n.e("chunk-62c57d4e").then(n.bind(null,"00d1")),NavBar:w,SoftSkills:()=>n.e("chunk-e180ae24").then(n.bind(null,"81bf")),Hobby:()=>n.e("chunk-4d3b9024").then(n.bind(null,"a7ae")),References:()=>n.e("chunk-333a5119").then(n.bind(null,"3c2e")),Contact:()=>n.e("chunk-64778765").then(n.bind(null,"929f")),Templates:()=>n.e("chunk-45e0c17f").then(n.bind(null,"11ed")),SmallScreen:P},data(){return{options:{slidesNavigation:!0,navigation:!0,scrollBar:!1,anchors:["slide1","slide2","slide3","slide4","slide5","slide6","slide7","slide8"]}}}},B=T,I=(n("ecb2"),Object(p["a"])(B,i,r,!1,null,null,null)),N=I.exports,A=n("8c4f");a["a"].use(A["a"]);const z=[{path:"/",name:"intro",component:b}],H=new A["a"]({mode:"history",routes:z});var L=H;a["a"].use(k["a"]);var M=new k["a"].Store({state:{anchors:["home","about","skills","education","experience","hobby","references","contact"]},mutations:{},actions:{},modules:{}}),V=n("3048"),D=n("94ed"),R=n("a45e"),F=n.n(R),W=(n("a0a0"),n("3b88"),n("77ed"),n("e956")),$=n.n(W);a["a"].use($.a),a["a"].use(F.a),a["a"].use(V["a"],{icons:D}),a["a"].config.productionTip=!1,new a["a"]({router:L,store:M,render:e=>e(N)}).$mount("#app")},"75e0":function(e,t,n){"use strict";n("8935")},8935:function(e,t,n){},"94bb":function(e,t,n){"use strict";n("39c3")},"9c43":function(e,t,n){"use strict";n("1adc")},ecb2:function(e,t,n){"use strict";n("4f20")}});