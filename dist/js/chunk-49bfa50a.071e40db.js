(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49bfa50a"],{b000:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("Movies Page")]),a("div",{staticClass:"card-container"},e._l(e.MovieData,function(t){return a("div",{key:t.id,staticClass:"card-item"},[a("img",{attrs:{src:t.poster_path,alt:""}}),a("p",[e._v(e._s(t.title))])])}))])},i=[],n=a("d4ec");function r(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}var s=a("99de"),u=a("7e84"),l=a("262e"),v=(a("cadf"),a("551c"),a("097d"),a("9ab4")),p=a("60a3"),f=a("bc3a"),d=a.n(f),b=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.MovieData=[],e.MovieConfig={},e}return Object(l["a"])(t,e),c(t,[{key:"created",value:function(){this.getMovie()}},{key:"getMovie",value:function(){var e=this,t={api_key:"22dbd915ba93d8eab2121edf01a8382d"};d.a.get("/discover/movie",{params:t}).then(function(t){if(console.log("getMovie",t),t){var a=t.data,o=a.page,i=a.total_results,n=a.total_pages,r=a.results;e.MovieData=r,e.MovieData.map(function(e){return e.poster_path="https://image.tmdb.org/t/p/w500".concat(e.poster_path)}),e.MovieConfig={page:o,total_results:i,total_pages:n}}console.log("getMovie",e.MovieData,"\n",e.MovieConfig)}).catch(function(e){return console.log("getMovie err",e)})}}]),t}(p["c"]);b=v["a"]([Object(p["a"])({})],b);var g=b,h=g,_=(a("e705"),a("2877")),M=Object(_["a"])(h,o,i,!1,null,null,null);M.options.__file="Movie-page.vue";t["default"]=M.exports},bde6:function(e,t,a){},e705:function(e,t,a){"use strict";var o=a("bde6"),i=a.n(o);i.a}}]);
//# sourceMappingURL=chunk-49bfa50a.071e40db.js.map