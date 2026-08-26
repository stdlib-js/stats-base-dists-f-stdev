"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=a(function(f,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist'),v=require('@stdlib/constants-float64-sqrt-two/dist');function q(e,r){var t;return i(e)||e<=0||i(r)||r<=4?NaN:(t=v*(r/(r-2)),t*=n((e+r-2)/(e*(r-4))),t)}u.exports=q
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
