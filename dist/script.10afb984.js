parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wmmr":[function(require,module,exports) {

},{}],"MO7r":[function(require,module,exports) {
"use strict";require("../../public/css/style.scss");var e,t,n,d=document.querySelector(".col-1"),c=document.querySelector(".col-2");fetch("https://api.punkapi.com/v2/beers?page=2&per_page=60").then(function(e){return e.json()}).then(function(n){console.log(n),n.forEach(function(n){var i=document.createElement("h1"),r=document.createElement("p"),a=document.createElement("p"),l=document.createElement("img"),o=document.createElement("button");n.id%2==1?((e=document.createElement("div")).setAttribute("class","beer_div"),d.appendChild(e),(t=document.createElement("div")).setAttribute("class","odd-info"),e.appendChild(t)):((e=document.createElement("div")).classList.add("beer_div"),c.appendChild(e),(t=document.createElement("div")).classList.add("odd-info"),e.appendChild(t)),t.appendChild(i),t.appendChild(r),t.appendChild(a),t.appendChild(o),e.appendChild(l),i.innerHTML=n.name,r.innerHTML=n.tagline,a.innerHTML="First brewed on ".concat(n.first_brewed),l.setAttribute("src",n.image_url),o.innerHTML="See more...",o.setAttribute("class","see-more-btn")})});
},{"../../public/css/style.scss":"wmmr"}]},{},["MO7r"], null)
//# sourceMappingURL=/script.10afb984.js.map