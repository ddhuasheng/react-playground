var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function p(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var r=function o(){return this instanceof o?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};r.prototype=s.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var u=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,u.get?u:{enumerable:!0,get:function(){return t[o]}})}),r}var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var s={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var f=arguments[n];f&&(e=u(e,o(f)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var f in e)s.call(e,f)&&e[f]&&(n=u(n,f));return n}function u(e,n){return n?e?e+" "+n:e+n:e}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(i);var c=i.exports;const d=a(c);export{l as a,p as b,d as c,a as g};
