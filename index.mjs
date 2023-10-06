// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";function a(e,t){return s(t)?n(t,"duration")&&(e.duration=t.duration,!m(t.duration))?new TypeError(r("0tD3P,Fv","duration",t.duration)):n(t,"period")&&(e.period=t.period,!m(t.period))?new TypeError(r("0tD3P,Fv","period",t.period)):n(t,"amplitude")&&(e.amplitude=t.amplitude,!o(t.amplitude))?new TypeError(r("0tD4D,Gu","amplitude",t.amplitude)):n(t,"offset")&&(e.offset=t.offset,!d(t.offset))?new TypeError(r("0tD8M,JG","offset",t.offset)):n(t,"iter")&&(e.iter=t.iter,!p(t.iter))?new TypeError(r("0tD2t,G9","iter",t.iter)):null:new TypeError(r("0tD2V,FD",t))}function u(s){var n,o,d,m,p,l,f;if(n={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(m=a(n,s)))throw m;if(-1===n.duration&&(n.duration=n.period),n.duration>n.period)throw new RangeError(r("0tD8K,JE","duration",n.duration));if(n.duration<=2)throw new RangeError(r("0tD8L,JF","duration",n.duration));return(p=(n.period-n.offset)%n.period)<0&&(p+=n.period),l=2/(n.duration-1),p-=1,f=0,e(o={},"next",j),e(o,"return",v),t&&e(o,t,h),o;function j(){return f+=1,d||f>n.iter?{done:!0}:{value:(p=(p+1)%n.period)<n.duration?n.amplitude*(1-i(l*p-1)):0,done:!1}}function v(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return u(n)}}export{u as default};
//# sourceMappingURL=index.mjs.map
