(function(t){function e(e){for(var n,s,o=e[0],l=e[1],u=e[2],c=0,d=[];c<o.length;c++)s=o[c],i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-videojs7/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},3:function(t,e){},3735:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],s=(a("7c55"),a("2877")),o={},l=Object(s["a"])(o,i,r,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,p=a("8c4f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player"},[a("h3",[t._v("Using Vue with html5 to play m3u8 media file with video.js 7 player")]),t._m(0),a("div",[a("button",{on:{click:t.switchPlayer}},[t._v("Play")]),t._v("  \n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.src,expression:"src"}],staticStyle:{width:"500px"},attrs:{type:"text"},domProps:{value:t.src},on:{input:function(e){e.target.composing||(t.src=e.target.value)}}})]),a("br"),a("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions},on:{play:function(e){t.onPlayerPlay(e)},ready:function(e){t.onPlayerReady(e)}}}),a("h3",{staticStyle:{"text-align":"center"}},[t._v("Thanks for your support")]),a("adsense",{attrs:{"root-class":"wrapper","data-ad-client":"ca-pub-1893384651266286","data-ad-slot":"7727965566"}}),a("Ribbon",{attrs:{text:"Vue videojs7",url:"https://github.com/alterhu2020/vue-videojs7",color:"#ff7600",position:"right-top"}})],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Free m3u8 player demo test resource: "),a("a",{attrs:{href:"https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/"}},[t._v("https://bitmovin.com/mpeg-dash-hls-examples-sample-streams/")])])}],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.reseted?a("div",[a("video",{ref:"video",staticClass:"video-js"},[t._l(t.trackList,function(t,e){return a("track",{key:e,attrs:{kind:t.kind,label:t.label,src:t.src,srcLang:t.srcLang,default:t.default}})}),t._m(0)],2)]):t._e()},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"vjs-no-js"},[t._v("\n      To view this video please enable JavaScript, and consider upgrading to a web browser that\n      "),a("a",{attrs:{href:"https://videojs.com/html5-video-support/",target:"_blank"}},[t._v("supports HTML5 video")])])}],h=a("a322"),v=(a("f751"),a("fda2"),a("f0e2")),g=window.videojs||v["a"],m={name:"videoplayer",props:{crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{autoplay:!0,controls:!0,language:"zh",inactivityTimeout:0,preload:"auto",fluid:!1,techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}},trackList:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},methods:{initialize:function(){var t=this,e=this,a=this.$refs.video,n=Object.assign({},this.globalOptions,this.options);this.playsinline&&(a.setAttribute("playsinline",this.playsinline),a.setAttribute("webkit-playsinline",this.playsinline),a.setAttribute("x5-playsinline",this.playsinline),a.setAttribute("x5-video-player-type","h5"),a.setAttribute("x5-video-player-fullscreen",!1)),""!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin,a.setAttribute("crossOrigin",this.crossOrigin)),n.plugins&&delete n.plugins.__ob__;var i=function(e,a){e&&t.$emit(e,t.player),a&&t.$emit(t.customEventName,Object(h["a"])({},e,a))};this.player=g(a,n,function(){for(var t=this,a=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],n=a.concat(e.events).concat(e.globalEvents),r={},s=0;s<n.length;s++)"string"===typeof n[s]&&void 0===r[n[s]]&&function(e){r[e]=null,t.on(e,function(){i(e,!0)})}(n[s]);e.$emit("ready",this)})},dispose:function(t){var e=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick(function(){e.reseted=!1,e.$nextTick(function(){e.reseted=!0,e.$nextTick(function(){t&&t()})})}))}},watch:{options:{deep:!0,handler:function(t,e){var a=this;this.dispose(function(){t&&t.sources&&t.sources.length&&a.initialize()})}}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()}},b=m,_=(a("f8b3"),Object(s["a"])(b,f,y,!1,null,"bf3b1aa2",null));_.options.__file="VideoPlayer.vue";var w=_.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.rootClass},[a("script2",{attrs:{type:"text/javascript",async:"true",src:t.ADS_SCRIPT}}),a("ins",{staticClass:"adsbygoogle",class:t.insClass,staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":t.dataAdFormat,"data-ad-client":t.dataAdClient,"data-ad-slot":t.dataAdSlot,"data-full-width-responsive":t.dataFullWidthResponsive}}),t.isNonPersonalizedAds?a("script2",{attrs:{type:"text/javascript"}},[t._v("(adsbygoogle = window.adsbygoogle || []).push({}).requestNonPersonalizedAds = 1;")]):t._e(),a("script2",{attrs:{type:"text/javascript"}},[t._v("(adsbygoogle = window.adsbygoogle || []).push({});")])],1)},A=[],O={ADS_SCRIPT:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},S={rootClass:{type:String,default:"adswrapper"},insClass:{type:String,default:""},isNonPersonalizedAds:{type:Boolean,default:!1},dataAdClient:{type:String,default:"ca-pub-1893384651266286"},dataAdSlot:{type:String,default:"1627649589"},dataAdLayoutKey:{type:String,default:"-6t+ed+2i-1n-4w"},dataAdTest:{type:String,default:"off"},dataAdFormat:{type:String,default:"auto"},dataFullWidthResponsive:{type:Boolean,default:!0}},x={__assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r])}return a}},P={name:"InArticleAdsense",props:x.__assign(S,{dataAdFormat:{type:String,default:"fluid"}}),data:function(){return{ADS_SCRIPT:O.ADS_SCRIPT}}},k=P,C=Object(s["a"])(k,j,A,!1,null,null,null);C.options.__file="InArticleAdsense.vue";var T=C.exports,$=a("a5bc"),E={name:"home",components:{VideoPlayer:w,Adsense:T,Ribbon:$["a"]},data:function(){return{src:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",playerOptions:{autoplay:!0,controls:!0,controlBar:{timeDivider:!1,durationDisplay:!1}}}},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(t){console.log("player play!",t)},onPlayerReady:function(t){console.log("player ready!",t),this.player.play()},playVideo:function(t){var e={withCredentials:!1,type:"application/x-mpegurl",src:t};this.player.reset(),this.player.src(e),this.player.play()},switchPlayer:function(){this.playVideo(this.src)}},mounted:function(){var t="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";this.playVideo(t)}},R=E,z=(a("748a"),Object(s["a"])(R,c,d,!1,null,"7594c35b",null));z.options.__file="Home.vue";var D=z.exports;n["a"].use(p["a"]);var F=new p["a"]({mode:"history",base:"/vue-videojs7/",routes:[{path:"/",name:"home",component:D}]}),I=a("2f62");n["a"].use(I["a"]);var N=new I["a"].Store({state:{},mutations:{},actions:{}});n["a"].use(a("395c")),n["a"].config.productionTip=!1,new n["a"]({router:F,store:N,render:function(t){return t(u)}}).$mount("#app")},"748a":function(t,e,a){"use strict";var n=a("3735"),i=a.n(n);i.a},"7c55":function(t,e,a){"use strict";var n=a("d3dd"),i=a.n(n);i.a},"938b":function(t,e,a){},d3dd:function(t,e,a){},f8b3:function(t,e,a){"use strict";var n=a("938b"),i=a.n(n);i.a}});
//# sourceMappingURL=app.d1f90945.js.map