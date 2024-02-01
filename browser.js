// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):f.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function O(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,_=isNaN,T=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,s,f,l,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",f=1,l=0;l<e.length;l++)if(c(n=e[l]))s+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function V(e){var r,t,n;if(!A(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,R=N.__defineSetter__,B=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var L=F;function M(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Object.prototype.hasOwnProperty;function W(e,r){return null!=e&&Z.call(e,r)}var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U&&"symbol"==typeof U("foo")&&W(U,"iterator")&&"symbol"==typeof U.iterator?Symbol.iterator:null;function Y(e){return Math.abs(e)}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return q&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,H="function"==typeof U?U.toStringTag:"",J=z()?function(e){var r,t,n;if(null==e)return D.call(e);t=e[H],r=W(e,H);try{e[H]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[H]=t:delete e[H],n}:function(e){return D.call(e)},K=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)},Q=/./;function ee(e){return"boolean"==typeof e}var re=Boolean,te=Boolean.prototype.toString,ne=z();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function oe(e){return ee(e)||ie(e)}function ae(){return new Function("return this;")()}M(oe,"isPrimitive",ee),M(oe,"isObject",ie);var ue="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,fe=function(e){if(arguments.length){if(!ee(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(se)return se;if(ue)return ue;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),le=fe.document&&fe.document.childNodes,pe=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;function be(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(de,"REGEXP",ge),M(be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!K(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be));var ve="function"==typeof Q||"object"==typeof pe||"function"==typeof le?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ye(e).toLowerCase():r};function he(e){return"function"===ve(e)}var me,we=Object,je=Object.getPrototypeOf;me=he(Object.getPrototypeOf)?je:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===J(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Oe=me,Ee=Object.prototype;function _e(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!K(e)}(e)&&(r=function(e){return null==e?null:(e=we(e),Oe(e))}(e),!r||!W(e,"constructor")&&W(r,"constructor")&&he(r.constructor)&&"[object Function]"===J(r.constructor)&&W(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===Ee||function(e){var r;for(r in e)if(!W(e,r))return!1;return!0}(e)))}function Te(e){return"number"==typeof e}var Se=Number,xe=Se.prototype.toString,ke=z();function Pe(e){return"object"==typeof e&&(e instanceof Se||(ke?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function Ie(e){return Te(e)||Pe(e)}function Ae(e){return Te(e)&&e>0}function Ve(e){return Pe(e)&&e.valueOf()>0}function Fe(e){return Ae(e)||Ve(e)}M(Ie,"isPrimitive",Te),M(Ie,"isObject",Pe),M(Fe,"isPrimitive",Ae),M(Fe,"isObject",Ve);var Ne=Number.POSITIVE_INFINITY,$e=Se.NEGATIVE_INFINITY,Ce=Math.floor;function Re(e){return e<Ne&&e>$e&&Ce(r=e)===r;var r}function Be(e){return Te(e)&&Re(e)}function Ge(e){return Pe(e)&&Re(e.valueOf())}function Le(e){return Be(e)||Ge(e)}function Me(e){return Be(e)&&e>0}function Ze(e){return Ge(e)&&e.valueOf()>0}function We(e){return Me(e)||Ze(e)}function Ue(e){return Be(e)&&e>=0}function Xe(e){return Ge(e)&&e.valueOf()>=0}function Ye(e){return Ue(e)||Xe(e)}function qe(e,r){return _e(r)?W(r,"duration")&&(e.duration=r.duration,!Me(r.duration))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",r.duration)):W(r,"period")&&(e.period=r.period,!Me(r.period))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",r.period)):W(r,"amplitude")&&(e.amplitude=r.amplitude,!Ae(r.amplitude))?new TypeError(V("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",r.amplitude)):W(r,"offset")&&(e.offset=r.offset,!Be(r.offset))?new TypeError(V("invalid option. `%s` option must be an integer. Option: `%s`.","offset",r.offset)):W(r,"iter")&&(e.iter=r.iter,!Ue(r.iter))?new TypeError(V("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}return M(Le,"isPrimitive",Be),M(Le,"isObject",Ge),M(We,"isPrimitive",Me),M(We,"isObject",Ze),M(Ye,"isPrimitive",Ue),M(Ye,"isObject",Xe),function e(r){var t,n,i,o,a,u,c;if(t={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=qe(t,r)))throw o;if(-1===t.duration&&(t.duration=t.period),t.duration>t.period)throw new RangeError(V("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",t.duration));if(t.duration<=2)throw new RangeError(V("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",t.duration));return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),u=2/(t.duration-1),a-=1,c=0,M(n={},"next",s),M(n,"return",f),X&&M(n,X,l),n;function s(){return c+=1,i||c>t.iter?{done:!0}:{value:(a=(a+1)%t.period)<t.duration?t.amplitude*(1-Y(u*a-1)):0,done:!1}}function f(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(t)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterBartlettPulse=r();
//# sourceMappingURL=browser.js.map
