function nf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();function af(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hd={exports:{}},yo={},pd={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),of=Symbol.for("react.portal"),sf=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),df=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.memo"),ff=Symbol.for("react.lazy"),cc=Symbol.iterator;function gf(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fd=Object.assign,gd={};function Hn(e,t,r){this.props=e,this.context=t,this.refs=gd,this.updater=r||md}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=Hn.prototype;function Hl(e,t,r){this.props=e,this.context=t,this.refs=gd,this.updater=r||md}var Wl=Hl.prototype=new yd;Wl.constructor=Hl;fd(Wl,Hn.prototype);Wl.isPureReactComponent=!0;var uc=Array.isArray,vd=Object.prototype.hasOwnProperty,Gl={current:null},bd={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,r){var n,a={},i=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)vd.call(t,n)&&!bd.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:Fa,type:e,key:i,ref:o,props:a,_owner:Gl.current}}function yf(e,t){return{$$typeof:Fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa}function vf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var dc=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vf(""+e.key):t.toString(36)}function Ai(e,t,r,n,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Fa:case of:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+Uo(o,0):n,uc(a)?(r="",e!=null&&(r=e.replace(dc,"$&/")+"/"),Ai(a,t,r,"",function(d){return d})):a!=null&&(Ul(a)&&(a=yf(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(dc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",uc(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+Uo(i,s);o+=Ai(i,t,r,l,a)}else if(l=gf(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+Uo(i,s++),o+=Ai(i,t,r,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(e,t,r){if(e==null)return e;var n=[],a=0;return Ai(e,n,"","",function(i){return t.call(r,i,a++)}),n}function bf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Ti={transition:null},wf={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Gl};function xd(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Xa,forEach:function(e,t,r){Xa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Xa(e,function(){t++}),t},toArray:function(e){return Xa(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Hn;te.Fragment=sf;te.Profiler=cf;te.PureComponent=Hl;te.StrictMode=lf;te.Suspense=pf;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wf;te.act=xd;te.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=fd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Gl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vd.call(t,l)&&!bd.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:Fa,type:e.type,key:a,ref:i,props:n,_owner:o}};te.createContext=function(e){return e={$$typeof:df,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uf,_context:e},e.Consumer=e};te.createElement=wd;te.createFactory=function(e){var t=wd.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:hf,render:e}};te.isValidElement=Ul;te.lazy=function(e){return{$$typeof:ff,_payload:{_status:-1,_result:e},_init:bf}};te.memo=function(e,t){return{$$typeof:mf,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};te.unstable_act=xd;te.useCallback=function(e,t){return Ue.current.useCallback(e,t)};te.useContext=function(e){return Ue.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ue.current.useEffect(e,t)};te.useId=function(){return Ue.current.useId()};te.useImperativeHandle=function(e,t,r){return Ue.current.useImperativeHandle(e,t,r)};te.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ue.current.useMemo(e,t)};te.useReducer=function(e,t,r){return Ue.current.useReducer(e,t,r)};te.useRef=function(e){return Ue.current.useRef(e)};te.useState=function(e){return Ue.current.useState(e)};te.useSyncExternalStore=function(e,t,r){return Ue.current.useSyncExternalStore(e,t,r)};te.useTransition=function(){return Ue.current.useTransition()};te.version="18.3.1";pd.exports=te;var D=pd.exports;const hn=af(D),xf=nf({__proto__:null,default:hn},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=D,Sf=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),Tf=Object.prototype.hasOwnProperty,Cf=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nf={key:!0,ref:!0,__self:!0,__source:!0};function kd(e,t,r){var n,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Tf.call(t,n)&&!Nf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Sf,type:e,key:i,ref:o,props:a,_owner:Cf.current}}yo.Fragment=Af;yo.jsx=kd;yo.jsxs=kd;hd.exports=yo;var h=hd.exports,_s={},Sd={exports:{}},ct={},Ad={exports:{}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,Q){var K=O.length;O.push(Q);e:for(;0<K;){var oe=K-1>>>1,ie=O[oe];if(0<a(ie,Q))O[oe]=Q,O[K]=ie,K=oe;else break e}}function r(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var Q=O[0],K=O.pop();if(K!==Q){O[0]=K;e:for(var oe=0,ie=O.length,_t=ie>>>1;oe<_t;){var kt=2*(oe+1)-1,It=O[kt],Rt=kt+1,St=O[Rt];if(0>a(It,K))Rt<ie&&0>a(St,It)?(O[oe]=St,O[Rt]=K,oe=Rt):(O[oe]=It,O[kt]=K,oe=kt);else if(Rt<ie&&0>a(St,K))O[oe]=St,O[Rt]=K,oe=Rt;else break e}}return Q}function a(O,Q){var K=O.sortIndex-Q.sortIndex;return K!==0?K:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],p=1,f=null,y=3,x=!1,T=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(O){for(var Q=r(d);Q!==null;){if(Q.callback===null)n(d);else if(Q.startTime<=O)n(d),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=r(d)}}function N(O){if(A=!1,w(O),!T)if(r(l)!==null)T=!0,ht(P);else{var Q=r(d);Q!==null&&zt(N,Q.startTime-O)}}function P(O,Q){T=!1,A&&(A=!1,b(R),R=-1),x=!0;var K=y;try{for(w(Q),f=r(l);f!==null&&(!(f.expirationTime>Q)||O&&!J());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,y=f.priorityLevel;var ie=oe(f.expirationTime<=Q);Q=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===r(l)&&n(l),w(Q)}else n(l);f=r(l)}if(f!==null)var _t=!0;else{var kt=r(d);kt!==null&&zt(N,kt.startTime-Q),_t=!1}return _t}finally{f=null,y=K,x=!1}}var z=!1,_=null,R=-1,H=5,G=-1;function J(){return!(e.unstable_now()-G<H)}function X(){if(_!==null){var O=e.unstable_now();G=O;var Q=!0;try{Q=_(!0,O)}finally{Q?ce():(z=!1,_=null)}}else z=!1}var ce;if(typeof v=="function")ce=function(){v(X)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,rt=me.port2;me.port1.onmessage=X,ce=function(){rt.postMessage(null)}}else ce=function(){M(X,0)};function ht(O){_=O,z||(z=!0,ce())}function zt(O,Q){R=M(function(){O(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){T||x||(T=!0,ht(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var K=y;y=Q;try{return O()}finally{y=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=y;y=O;try{return Q()}finally{y=K}},e.unstable_scheduleCallback=function(O,Q,K){var oe=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=K+ie,O={id:p++,callback:Q,priorityLevel:O,startTime:K,expirationTime:ie,sortIndex:-1},K>oe?(O.sortIndex=K,t(d,O),r(l)===null&&O===r(d)&&(A?(b(R),R=-1):A=!0,zt(N,K-oe))):(O.sortIndex=ie,t(l,O),T||x||(T=!0,ht(P))),O},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(O){var Q=y;return function(){var K=y;y=Q;try{return O.apply(this,arguments)}finally{y=K}}}})(Td);Ad.exports=Td;var Mf=Ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=D,lt=Mf;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cd=new Set,va={};function an(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(va[e]=t,e=0;e<t.length;e++)Cd.add(t[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},pc={};function Df(e){return Is.call(pc,e)?!0:Is.call(hc,e)?!1:Pf.test(e)?pc[e]=!0:(hc[e]=!0,!1)}function zf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _f(e,t,r,n){if(t===null||typeof t>"u"||zf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,r,n,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function $l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,$l);Be[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,$l);Be[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,$l);Be[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,t,r,n){var a=Be.hasOwnProperty(t)?Be[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_f(t,r,a,n)&&(r=null),n||a===null?Df(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var cr=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Kl=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Ed=Symbol.for("react.offscreen"),mc=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Vo;function ra(e){if(Vo===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var $o=!1;function Yo(e,t){if(!e||$o)return"";$o=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=n.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ra(e):""}function If(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Rs:return"Profiler";case Kl:return"StrictMode";case Bs:return"Suspense";case js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Nd:return(e._context.displayName||"Context")+".Provider";case Ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:Ls(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Ls(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ls(t);case 8:return t===Kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bf(e){var t=Pd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Bf(e))}function Dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Pd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var r=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function fc(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zd(e,t){t=t.checked,t!=null&&Yl(e,"checked",t,!1)}function qs(e,t){zd(e,t);var r=zr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,r):t.hasOwnProperty("defaultValue")&&Os(e,t.type,zr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Os(e,t,r){(t!=="number"||Li(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var na=Array.isArray;function Tn(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(L(92));if(na(r)){if(1<r.length)throw Error(L(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zr(r)}}function _d(e,t){var r=zr(t.value),n=zr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,Rd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(e){jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),la[t]=la[e]})});function Bd(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}function jd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Bd(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var Lf=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(Lf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Cn=null,Nn=null;function bc(e){if(e=Ha(e)){if(typeof $s!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ko(t),$s(e.stateNode,e.type,t))}}function Ld(e){Cn?Nn?Nn.push(e):Nn=[e]:Cn=e}function Fd(){if(Cn){var e=Cn,t=Nn;if(Nn=Cn=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function qd(e,t){return e(t)}function Od(){}var Ko=!1;function Hd(e,t,r){if(Ko)return e(t,r);Ko=!0;try{return qd(e,t,r)}finally{Ko=!1,(Cn!==null||Nn!==null)&&(Od(),Fd())}}function wa(e,t){var r=e.stateNode;if(r===null)return null;var n=ko(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(L(231,t,typeof r));return r}var Ys=!1;if(rr)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ys=!1}function Ff(e,t,r,n,a,i,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var ca=!1,Fi=null,qi=!1,Ks=null,qf={onError:function(e){ca=!0,Fi=e}};function Of(e,t,r,n,a,i,o,s,l){ca=!1,Fi=null,Ff.apply(qf,arguments)}function Hf(e,t,r,n,a,i,o,s,l){if(Of.apply(this,arguments),ca){if(ca){var d=Fi;ca=!1,Fi=null}else throw Error(L(198));qi||(qi=!0,Ks=d)}}function on(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(on(e)!==e)throw Error(L(188))}function Wf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(L(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return wc(a),e;if(i===n)return wc(a),t;i=i.sibling}throw Error(L(188))}if(r.return!==n.return)r=a,n=i;else{for(var o=!1,s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o)throw Error(L(189))}}if(r.alternate!==n)throw Error(L(190))}if(r.tag!==3)throw Error(L(188));return r.stateNode.current===r?e:t}function Gd(e){return e=Wf(e),e!==null?Ud(e):null}function Ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ud(e);if(t!==null)return t;e=e.sibling}return null}var Vd=lt.unstable_scheduleCallback,xc=lt.unstable_cancelCallback,Gf=lt.unstable_shouldYield,Uf=lt.unstable_requestPaint,Te=lt.unstable_now,Vf=lt.unstable_getCurrentPriorityLevel,Zl=lt.unstable_ImmediatePriority,$d=lt.unstable_UserBlockingPriority,Oi=lt.unstable_NormalPriority,$f=lt.unstable_LowPriority,Yd=lt.unstable_IdlePriority,vo=null,Ht=null;function Yf(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Jf,Kf=Math.log,Qf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Kf(e)/Qf|0)|0}var ri=64,ni=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~a;s!==0?n=aa(s):(i&=o,i!==0&&(n=aa(i)))}else o=r&~a,o!==0?n=aa(o):i!==0&&(n=aa(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Et(t),a=1<<r,n|=e[r],t&=~a;return n}function Xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Et(i),s=1<<o,l=a[o];l===-1?(!(s&r)||s&n)&&(a[o]=Xf(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kd(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Qo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=r}function e1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Et(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}function e0(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Et(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var se=0;function Qd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jd,t0,Xd,Zd,eh,Js=!1,ai=[],Sr=null,Ar=null,Tr=null,xa=new Map,ka=new Map,yr=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kc(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function Qn(e,t,r,n,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ha(t),t!==null&&t0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function r1(e,t,r,n,a){switch(t){case"focusin":return Sr=Qn(Sr,e,t,r,n,a),!0;case"dragenter":return Ar=Qn(Ar,e,t,r,n,a),!0;case"mouseover":return Tr=Qn(Tr,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return xa.set(i,Qn(xa.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,ka.set(i,Qn(ka.get(i)||null,e,t,r,n,a)),!0}return!1}function th(e){var t=$r(e.target);if(t!==null){var r=on(t);if(r!==null){if(t=r.tag,t===13){if(t=Wd(r),t!==null){e.blockedOn=t,eh(e.priority,function(){Xd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Vs=n,r.target.dispatchEvent(n),Vs=null}else return t=Ha(r),t!==null&&t0(t),e.blockedOn=r,!1;t.shift()}return!0}function Sc(e,t,r){Ci(e)&&r.delete(t)}function n1(){Js=!1,Sr!==null&&Ci(Sr)&&(Sr=null),Ar!==null&&Ci(Ar)&&(Ar=null),Tr!==null&&Ci(Tr)&&(Tr=null),xa.forEach(Sc),ka.forEach(Sc)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,n1)))}function Sa(e){function t(a){return Jn(a,e)}if(0<ai.length){Jn(ai[0],e);for(var r=1;r<ai.length;r++){var n=ai[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Sr!==null&&Jn(Sr,e),Ar!==null&&Jn(Ar,e),Tr!==null&&Jn(Tr,e),xa.forEach(t),ka.forEach(t),r=0;r<yr.length;r++)n=yr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<yr.length&&(r=yr[0],r.blockedOn===null);)th(r),r.blockedOn===null&&yr.shift()}var Mn=cr.ReactCurrentBatchConfig,Wi=!0;function a1(e,t,r,n){var a=se,i=Mn.transition;Mn.transition=null;try{se=1,r0(e,t,r,n)}finally{se=a,Mn.transition=i}}function i1(e,t,r,n){var a=se,i=Mn.transition;Mn.transition=null;try{se=4,r0(e,t,r,n)}finally{se=a,Mn.transition=i}}function r0(e,t,r,n){if(Wi){var a=Xs(e,t,r,n);if(a===null)os(e,t,n,Gi,r),kc(e,n);else if(r1(a,e,t,r,n))n.stopPropagation();else if(kc(e,n),t&4&&-1<t1.indexOf(e)){for(;a!==null;){var i=Ha(a);if(i!==null&&Jd(i),i=Xs(e,t,r,n),i===null&&os(e,t,n,Gi,r),i===a)break;a=i}a!==null&&n.stopPropagation()}else os(e,t,n,null,r)}}var Gi=null;function Xs(e,t,r,n){if(Gi=null,e=Xl(n),e=$r(e),e!==null)if(t=on(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Wd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vf()){case Zl:return 1;case $d:return 4;case Oi:case $f:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var br=null,n0=null,Ni=null;function nh(){if(Ni)return Ni;var e,t=n0,r=t.length,n,a="value"in br?br.value:br.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[i-n];n++);return Ni=a.slice(e,1<n?1-n:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Ac(){return!1}function ut(e){function t(r,n,a,i,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Ac,this.isPropagationStopped=Ac,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},a0=ut(Wn),Oa=xe({},Wn,{view:0,detail:0}),o1=ut(Oa),Jo,Xo,Xn,bo=xe({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:i0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Jo=e.screenX-Xn.screenX,Xo=e.screenY-Xn.screenY):Xo=Jo=0,Xn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Tc=ut(bo),s1=xe({},bo,{dataTransfer:0}),l1=ut(s1),c1=xe({},Oa,{relatedTarget:0}),Zo=ut(c1),u1=xe({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),d1=ut(u1),h1=xe({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p1=ut(h1),m1=xe({},Wn,{data:0}),Cc=ut(m1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y1[e])?!!t[e]:!1}function i0(){return v1}var b1=xe({},Oa,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:i0,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w1=ut(b1),x1=xe({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=ut(x1),k1=xe({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:i0}),S1=ut(k1),A1=xe({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=ut(A1),C1=xe({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=ut(C1),M1=[9,13,27,32],o0=rr&&"CompositionEvent"in window,ua=null;rr&&"documentMode"in document&&(ua=document.documentMode);var E1=rr&&"TextEvent"in window&&!ua,ah=rr&&(!o0||ua&&8<ua&&11>=ua),Mc=" ",Ec=!1;function ih(e,t){switch(e){case"keyup":return M1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function P1(e,t){switch(e){case"compositionend":return oh(t);case"keypress":return t.which!==32?null:(Ec=!0,Mc);case"textInput":return e=t.data,e===Mc&&Ec?null:e;default:return null}}function D1(e,t){if(fn)return e==="compositionend"||!o0&&ih(e,t)?(e=nh(),Ni=n0=br=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!z1[e.type]:t==="textarea"}function sh(e,t,r,n){Ld(n),t=Ui(t,"onChange"),0<t.length&&(r=new a0("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var da=null,Aa=null;function _1(e){vh(e,0)}function wo(e){var t=vn(e);if(Dd(t))return e}function I1(e,t){if(e==="change")return t}var lh=!1;if(rr){var es;if(rr){var ts="oninput"in document;if(!ts){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),ts=typeof Dc.oninput=="function"}es=ts}else es=!1;lh=es&&(!document.documentMode||9<document.documentMode)}function zc(){da&&(da.detachEvent("onpropertychange",ch),Aa=da=null)}function ch(e){if(e.propertyName==="value"&&wo(Aa)){var t=[];sh(t,Aa,e,Xl(e)),Hd(_1,t)}}function R1(e,t,r){e==="focusin"?(zc(),da=t,Aa=r,da.attachEvent("onpropertychange",ch)):e==="focusout"&&zc()}function B1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Aa)}function j1(e,t){if(e==="click")return wo(t)}function L1(e,t){if(e==="input"||e==="change")return wo(t)}function F1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:F1;function Ta(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Is.call(t,a)||!Dt(e[a],t[a]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var r=_c(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_c(r)}}function uh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Li(e.document)}return t}function s0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q1(e){var t=dh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&uh(r.ownerDocument.documentElement,r)){if(n!==null&&s0(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=n.end===void 0?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=Ic(r,i);var o=Ic(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O1=rr&&"documentMode"in document&&11>=document.documentMode,gn=null,Zs=null,ha=null,el=!1;function Rc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;el||gn==null||gn!==Li(n)||(n=gn,"selectionStart"in n&&s0(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ha&&Ta(ha,n)||(ha=n,n=Ui(Zs,"onSelect"),0<n.length&&(t=new a0("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function oi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yn={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionend:oi("Transition","TransitionEnd")},rs={},hh={};rr&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function xo(e){if(rs[e])return rs[e];if(!yn[e])return e;var t=yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in hh)return rs[e]=t[r];return e}var ph=xo("animationend"),mh=xo("animationiteration"),fh=xo("animationstart"),gh=xo("transitionend"),yh=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){yh.set(e,t),an(t,[e])}for(var ns=0;ns<Bc.length;ns++){var as=Bc[ns],H1=as.toLowerCase(),W1=as[0].toUpperCase()+as.slice(1);jr(H1,"on"+W1)}jr(ph,"onAnimationEnd");jr(mh,"onAnimationIteration");jr(fh,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(gh,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function jc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Hf(n,t,void 0,e),e.currentTarget=null}function vh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;jc(a,s,d),i=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;jc(a,s,d),i=l}}}if(qi)throw e=Ks,qi=!1,Ks=null,e}function he(e,t){var r=t[il];r===void 0&&(r=t[il]=new Set);var n=e+"__bubble";r.has(n)||(bh(t,e,2,!1),r.add(n))}function is(e,t,r){var n=0;t&&(n|=4),bh(r,e,n,t)}var si="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[si]){e[si]=!0,Cd.forEach(function(r){r!=="selectionchange"&&(G1.has(r)||is(r,!1,e),is(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[si]||(t[si]=!0,is("selectionchange",!1,t))}}function bh(e,t,r,n){switch(rh(t)){case 1:var a=a1;break;case 4:a=i1;break;default:a=r0}r=a.bind(null,t,r,e),a=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function os(e,t,r,n,a){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=$r(s),o===null)return;if(l=o.tag,l===5||l===6){n=i=o;continue e}s=s.parentNode}}n=n.return}Hd(function(){var d=i,p=Xl(r),f=[];e:{var y=yh.get(e);if(y!==void 0){var x=a0,T=e;switch(e){case"keypress":if(Mi(r)===0)break e;case"keydown":case"keyup":x=w1;break;case"focusin":T="focus",x=Zo;break;case"focusout":T="blur",x=Zo;break;case"beforeblur":case"afterblur":x=Zo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=S1;break;case ph:case mh:case fh:x=d1;break;case gh:x=T1;break;case"scroll":x=o1;break;case"wheel":x=N1;break;case"copy":case"cut":case"paste":x=p1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Nc}var A=(t&4)!==0,M=!A&&e==="scroll",b=A?y!==null?y+"Capture":null:y;A=[];for(var v=d,w;v!==null;){w=v;var N=w.stateNode;if(w.tag===5&&N!==null&&(w=N,b!==null&&(N=wa(v,b),N!=null&&A.push(Na(v,N,w)))),M)break;v=v.return}0<A.length&&(y=new x(y,T,null,r,p),f.push({event:y,listeners:A}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&r!==Vs&&(T=r.relatedTarget||r.fromElement)&&($r(T)||T[nr]))break e;if((x||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,x?(T=r.relatedTarget||r.toElement,x=d,T=T?$r(T):null,T!==null&&(M=on(T),T!==M||T.tag!==5&&T.tag!==6)&&(T=null)):(x=null,T=d),x!==T)){if(A=Tc,N="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(A=Nc,N="onPointerLeave",b="onPointerEnter",v="pointer"),M=x==null?y:vn(x),w=T==null?y:vn(T),y=new A(N,v+"leave",x,r,p),y.target=M,y.relatedTarget=w,N=null,$r(p)===d&&(A=new A(b,v+"enter",T,r,p),A.target=w,A.relatedTarget=M,N=A),M=N,x&&T)t:{for(A=x,b=T,v=0,w=A;w;w=cn(w))v++;for(w=0,N=b;N;N=cn(N))w++;for(;0<v-w;)A=cn(A),v--;for(;0<w-v;)b=cn(b),w--;for(;v--;){if(A===b||b!==null&&A===b.alternate)break t;A=cn(A),b=cn(b)}A=null}else A=null;x!==null&&Lc(f,y,x,A,!1),T!==null&&M!==null&&Lc(f,M,T,A,!0)}}e:{if(y=d?vn(d):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var P=I1;else if(Pc(y))if(lh)P=L1;else{P=B1;var z=R1}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(P=j1);if(P&&(P=P(e,d))){sh(f,P,r,p);break e}z&&z(e,y,d),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Os(y,"number",y.value)}switch(z=d?vn(d):window,e){case"focusin":(Pc(z)||z.contentEditable==="true")&&(gn=z,Zs=d,ha=null);break;case"focusout":ha=Zs=gn=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Rc(f,r,p);break;case"selectionchange":if(O1)break;case"keydown":case"keyup":Rc(f,r,p)}var _;if(o0)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fn?ih(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(ah&&r.locale!=="ko"&&(fn||R!=="onCompositionStart"?R==="onCompositionEnd"&&fn&&(_=nh()):(br=p,n0="value"in br?br.value:br.textContent,fn=!0)),z=Ui(d,R),0<z.length&&(R=new Cc(R,e,null,r,p),f.push({event:R,listeners:z}),_?R.data=_:(_=oh(r),_!==null&&(R.data=_)))),(_=E1?P1(e,r):D1(e,r))&&(d=Ui(d,"onBeforeInput"),0<d.length&&(p=new Cc("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:d}),p.data=_))}vh(f,t)})}function Na(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ui(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=wa(e,r),i!=null&&n.unshift(Na(e,i,a)),i=wa(e,t),i!=null&&n.push(Na(e,i,a))),e=e.return}return n}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,r,n,a){for(var i=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,d=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&d!==null&&(s=d,a?(l=wa(r,i),l!=null&&o.unshift(Na(r,l,s))):a||(l=wa(r,i),l!=null&&o.push(Na(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var U1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(U1,`
`).replace(V1,"")}function li(e,t,r){if(t=Fc(t),Fc(e)!==t&&r)throw Error(L(425))}function Vi(){}var tl=null,rl=null;function nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,$1=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,Y1=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(K1)}:al;function K1(e){setTimeout(function(){throw e})}function ss(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sa(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Gn,Ma="__reactProps$"+Gn,nr="__reactContainer$"+Gn,il="__reactEvents$"+Gn,Q1="__reactListeners$"+Gn,J1="__reactHandles$"+Gn;function $r(e){var t=e[Ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nr]||r[Ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Oc(e);e!==null;){if(r=e[Ft])return r;e=Oc(e)}return t}e=r,r=e.parentNode}return null}function Ha(e){return e=e[Ft]||e[nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ko(e){return e[Ma]||null}var ol=[],bn=-1;function Lr(e){return{current:e}}function pe(e){0>bn||(e.current=ol[bn],ol[bn]=null,bn--)}function ue(e,t){bn++,ol[bn]=e.current,e.current=t}var _r={},qe=Lr(_r),Xe=Lr(!1),Zr=_r;function In(e,t){var r=e.type.contextTypes;if(!r)return _r;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function $i(){pe(Xe),pe(qe)}function Hc(e,t,r){if(qe.current!==_r)throw Error(L(168));ue(qe,t),ue(Xe,r)}function wh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(L(108,Rf(e)||"Unknown",a));return xe({},r,n)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_r,Zr=qe.current,ue(qe,e),ue(Xe,Xe.current),!0}function Wc(e,t,r){var n=e.stateNode;if(!n)throw Error(L(169));r?(e=wh(e,t,Zr),n.__reactInternalMemoizedMergedChildContext=e,pe(Xe),pe(qe),ue(qe,e)):pe(Xe),ue(Xe,r)}var Kt=null,So=!1,ls=!1;function xh(e){Kt===null?Kt=[e]:Kt.push(e)}function X1(e){So=!0,xh(e)}function Fr(){if(!ls&&Kt!==null){ls=!0;var e=0,t=se;try{var r=Kt;for(se=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Kt=null,So=!1}catch(a){throw Kt!==null&&(Kt=Kt.slice(e+1)),Vd(Zl,Fr),a}finally{se=t,ls=!1}}return null}var wn=[],xn=0,Ki=null,Qi=0,pt=[],mt=0,en=null,Jt=1,Xt="";function Ur(e,t){wn[xn++]=Qi,wn[xn++]=Ki,Ki=e,Qi=t}function kh(e,t,r){pt[mt++]=Jt,pt[mt++]=Xt,pt[mt++]=en,en=e;var n=Jt;e=Xt;var a=32-Et(n)-1;n&=~(1<<a),r+=1;var i=32-Et(t)+a;if(30<i){var o=a-a%5;i=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Jt=1<<32-Et(t)+a|r<<a|n,Xt=i+e}else Jt=1<<i|r<<a|n,Xt=e}function l0(e){e.return!==null&&(Ur(e,1),kh(e,1,0))}function c0(e){for(;e===Ki;)Ki=wn[--xn],wn[xn]=null,Qi=wn[--xn],wn[xn]=null;for(;e===en;)en=pt[--mt],pt[mt]=null,Xt=pt[--mt],pt[mt]=null,Jt=pt[--mt],pt[mt]=null}var ot=null,it=null,fe=!1,Mt=null;function Sh(e,t){var r=ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=en!==null?{id:Jt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ot=e,it=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(fe){var t=it;if(t){var r=t;if(!Gc(e,t)){if(sl(e))throw Error(L(418));t=Cr(r.nextSibling);var n=ot;t&&Gc(e,t)?Sh(n,r):(e.flags=e.flags&-4097|2,fe=!1,ot=e)}}else{if(sl(e))throw Error(L(418));e.flags=e.flags&-4097|2,fe=!1,ot=e}}}function Uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function ci(e){if(e!==ot)return!1;if(!fe)return Uc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nl(e.type,e.memoizedProps)),t&&(t=it)){if(sl(e))throw Ah(),Error(L(418));for(;t;)Sh(e,t),t=Cr(t.nextSibling)}if(Uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){it=Cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?Cr(e.stateNode.nextSibling):null;return!0}function Ah(){for(var e=it;e;)e=Cr(e.nextSibling)}function Rn(){it=ot=null,fe=!1}function u0(e){Mt===null?Mt=[e]:Mt.push(e)}var Z1=cr.ReactCurrentBatchConfig;function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(L(309));var n=r.stateNode}if(!n)throw Error(L(147,e));var a=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!r._owner)throw Error(L(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function Th(e){function t(b,v){if(e){var w=b.deletions;w===null?(b.deletions=[v],b.flags|=16):w.push(v)}}function r(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function n(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function a(b,v){return b=Pr(b,v),b.index=0,b.sibling=null,b}function i(b,v,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<v?(b.flags|=2,v):w):(b.flags|=2,v)):(b.flags|=1048576,v)}function o(b){return e&&b.alternate===null&&(b.flags|=2),b}function s(b,v,w,N){return v===null||v.tag!==6?(v=fs(w,b.mode,N),v.return=b,v):(v=a(v,w),v.return=b,v)}function l(b,v,w,N){var P=w.type;return P===mn?p(b,v,w.props.children,N,w.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fr&&Vc(P)===v.type)?(N=a(v,w.props),N.ref=Zn(b,v,w),N.return=b,N):(N=Ri(w.type,w.key,w.props,null,b.mode,N),N.ref=Zn(b,v,w),N.return=b,N)}function d(b,v,w,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=gs(w,b.mode,N),v.return=b,v):(v=a(v,w.children||[]),v.return=b,v)}function p(b,v,w,N,P){return v===null||v.tag!==7?(v=Jr(w,b.mode,N,P),v.return=b,v):(v=a(v,w),v.return=b,v)}function f(b,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fs(""+v,b.mode,w),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return w=Ri(v.type,v.key,v.props,null,b.mode,w),w.ref=Zn(b,null,v),w.return=b,w;case pn:return v=gs(v,b.mode,w),v.return=b,v;case fr:var N=v._init;return f(b,N(v._payload),w)}if(na(v)||Yn(v))return v=Jr(v,b.mode,w,null),v.return=b,v;ui(b,v)}return null}function y(b,v,w,N){var P=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return P!==null?null:s(b,v,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:return w.key===P?l(b,v,w,N):null;case pn:return w.key===P?d(b,v,w,N):null;case fr:return P=w._init,y(b,v,P(w._payload),N)}if(na(w)||Yn(w))return P!==null?null:p(b,v,w,N,null);ui(b,w)}return null}function x(b,v,w,N,P){if(typeof N=="string"&&N!==""||typeof N=="number")return b=b.get(w)||null,s(v,b,""+N,P);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Za:return b=b.get(N.key===null?w:N.key)||null,l(v,b,N,P);case pn:return b=b.get(N.key===null?w:N.key)||null,d(v,b,N,P);case fr:var z=N._init;return x(b,v,w,z(N._payload),P)}if(na(N)||Yn(N))return b=b.get(w)||null,p(v,b,N,P,null);ui(v,N)}return null}function T(b,v,w,N){for(var P=null,z=null,_=v,R=v=0,H=null;_!==null&&R<w.length;R++){_.index>R?(H=_,_=null):H=_.sibling;var G=y(b,_,w[R],N);if(G===null){_===null&&(_=H);break}e&&_&&G.alternate===null&&t(b,_),v=i(G,v,R),z===null?P=G:z.sibling=G,z=G,_=H}if(R===w.length)return r(b,_),fe&&Ur(b,R),P;if(_===null){for(;R<w.length;R++)_=f(b,w[R],N),_!==null&&(v=i(_,v,R),z===null?P=_:z.sibling=_,z=_);return fe&&Ur(b,R),P}for(_=n(b,_);R<w.length;R++)H=x(_,b,R,w[R],N),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?R:H.key),v=i(H,v,R),z===null?P=H:z.sibling=H,z=H);return e&&_.forEach(function(J){return t(b,J)}),fe&&Ur(b,R),P}function A(b,v,w,N){var P=Yn(w);if(typeof P!="function")throw Error(L(150));if(w=P.call(w),w==null)throw Error(L(151));for(var z=P=null,_=v,R=v=0,H=null,G=w.next();_!==null&&!G.done;R++,G=w.next()){_.index>R?(H=_,_=null):H=_.sibling;var J=y(b,_,G.value,N);if(J===null){_===null&&(_=H);break}e&&_&&J.alternate===null&&t(b,_),v=i(J,v,R),z===null?P=J:z.sibling=J,z=J,_=H}if(G.done)return r(b,_),fe&&Ur(b,R),P;if(_===null){for(;!G.done;R++,G=w.next())G=f(b,G.value,N),G!==null&&(v=i(G,v,R),z===null?P=G:z.sibling=G,z=G);return fe&&Ur(b,R),P}for(_=n(b,_);!G.done;R++,G=w.next())G=x(_,b,R,G.value,N),G!==null&&(e&&G.alternate!==null&&_.delete(G.key===null?R:G.key),v=i(G,v,R),z===null?P=G:z.sibling=G,z=G);return e&&_.forEach(function(X){return t(b,X)}),fe&&Ur(b,R),P}function M(b,v,w,N){if(typeof w=="object"&&w!==null&&w.type===mn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:e:{for(var P=w.key,z=v;z!==null;){if(z.key===P){if(P=w.type,P===mn){if(z.tag===7){r(b,z.sibling),v=a(z,w.props.children),v.return=b,b=v;break e}}else if(z.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fr&&Vc(P)===z.type){r(b,z.sibling),v=a(z,w.props),v.ref=Zn(b,z,w),v.return=b,b=v;break e}r(b,z);break}else t(b,z);z=z.sibling}w.type===mn?(v=Jr(w.props.children,b.mode,N,w.key),v.return=b,b=v):(N=Ri(w.type,w.key,w.props,null,b.mode,N),N.ref=Zn(b,v,w),N.return=b,b=N)}return o(b);case pn:e:{for(z=w.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){r(b,v.sibling),v=a(v,w.children||[]),v.return=b,b=v;break e}else{r(b,v);break}else t(b,v);v=v.sibling}v=gs(w,b.mode,N),v.return=b,b=v}return o(b);case fr:return z=w._init,M(b,v,z(w._payload),N)}if(na(w))return T(b,v,w,N);if(Yn(w))return A(b,v,w,N);ui(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(r(b,v.sibling),v=a(v,w),v.return=b,b=v):(r(b,v),v=fs(w,b.mode,N),v.return=b,b=v),o(b)):r(b,v)}return M}var Bn=Th(!0),Ch=Th(!1),Ji=Lr(null),Xi=null,kn=null,d0=null;function h0(){d0=kn=Xi=null}function p0(e){var t=Ji.current;pe(Ji),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function En(e,t){Xi=e,d0=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(d0!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Xi===null)throw Error(L(308));kn=e,Xi.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Yr=null;function m0(e){Yr===null?Yr=[e]:Yr.push(e)}function Nh(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,m0(t)):(r.next=a.next,a.next=r),t.interleaved=r,ar(e,n)}function ar(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gr=!1;function f0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,re&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,ar(e,r)}return a=n.interleaved,a===null?(t.next=t,m0(n)):(t.next=a.next,a.next=t),n.interleaved=t,ar(e,r)}function Ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,e0(e,r)}}function $c(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Zi(e,t,r,n){var a=e.updateQueue;gr=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=l))}if(i!==null){var f=a.baseState;o=0,p=d=l=null,s=i;do{var y=s.lane,x=s.eventTime;if((n&y)===y){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,A=s;switch(y=t,x=r,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(x,f,y);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,y=typeof T=="function"?T.call(x,f,y):T,y==null)break e;f=xe({},f,y);break e;case 2:gr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[s]:y.push(s))}else x={eventTime:x,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=x,l=f):p=p.next=x,o|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);if(p===null&&(l=f),a.baseState=l,a.firstBaseUpdate=d,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=f}}function Yc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(L(191,a));a.call(n)}}}var Wa={},Wt=Lr(Wa),Ea=Lr(Wa),Pa=Lr(Wa);function Kr(e){if(e===Wa)throw Error(L(174));return e}function g0(e,t){switch(ue(Pa,t),ue(Ea,e),ue(Wt,Wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}pe(Wt),ue(Wt,t)}function jn(){pe(Wt),pe(Ea),pe(Pa)}function Eh(e){Kr(Pa.current);var t=Kr(Wt.current),r=Ws(t,e.type);t!==r&&(ue(Ea,e),ue(Wt,r))}function y0(e){Ea.current===e&&(pe(Wt),pe(Ea))}var ve=Lr(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function v0(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Pi=cr.ReactCurrentDispatcher,us=cr.ReactCurrentBatchConfig,tn=0,we=null,Ee=null,ze=null,to=!1,pa=!1,Da=0,eg=0;function je(){throw Error(L(321))}function b0(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Dt(e[r],t[r]))return!1;return!0}function w0(e,t,r,n,a,i){if(tn=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?ag:ig,e=r(n,a),pa){i=0;do{if(pa=!1,Da=0,25<=i)throw Error(L(301));i+=1,ze=Ee=null,t.updateQueue=null,Pi.current=og,e=r(n,a)}while(pa)}if(Pi.current=ro,t=Ee!==null&&Ee.next!==null,tn=0,ze=Ee=we=null,to=!1,t)throw Error(L(300));return e}function x0(){var e=Da!==0;return Da=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?we.memoizedState=ze=e:ze=ze.next=e,ze}function bt(){if(Ee===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ze===null?we.memoizedState:ze.next;if(t!==null)ze=t,Ee=e;else{if(e===null)throw Error(L(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ze===null?we.memoizedState=ze=e:ze=ze.next=e}return ze}function za(e,t){return typeof t=="function"?t(e):t}function ds(e){var t=bt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var n=Ee,a=n.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}n.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,n=n.baseState;var s=o=null,l=null,d=i;do{var p=d.lane;if((tn&p)===p)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=n):l=l.next=f,we.lanes|=p,rn|=p}d=d.next}while(d!==null&&d!==i);l===null?o=n:l.next=s,Dt(n,t.memoizedState)||(Je=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do i=a.lane,we.lanes|=i,rn|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hs(e){var t=bt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Dt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Ph(){}function Dh(e,t){var r=we,n=bt(),a=t(),i=!Dt(n.memoizedState,a);if(i&&(n.memoizedState=a,Je=!0),n=n.queue,k0(Ih.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,_a(9,_h.bind(null,r,n,a,t),void 0,null),_e===null)throw Error(L(349));tn&30||zh(r,t,a)}return a}function zh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function _h(e,t,r,n){t.value=r,t.getSnapshot=n,Rh(t)&&Bh(e)}function Ih(e,t,r){return r(function(){Rh(t)&&Bh(e)})}function Rh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Dt(e,r)}catch{return!0}}function Bh(e){var t=ar(e,1);t!==null&&Pt(t,e,1,-1)}function Kc(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t.queue=e,e=e.dispatch=ng.bind(null,we,e),[t.memoizedState,e]}function _a(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function jh(){return bt().memoizedState}function Di(e,t,r,n){var a=jt();we.flags|=e,a.memoizedState=_a(1|t,r,void 0,n===void 0?null:n)}function Ao(e,t,r,n){var a=bt();n=n===void 0?null:n;var i=void 0;if(Ee!==null){var o=Ee.memoizedState;if(i=o.destroy,n!==null&&b0(n,o.deps)){a.memoizedState=_a(t,r,i,n);return}}we.flags|=e,a.memoizedState=_a(1|t,r,i,n)}function Qc(e,t){return Di(8390656,8,e,t)}function k0(e,t){return Ao(2048,8,e,t)}function Lh(e,t){return Ao(4,2,e,t)}function Fh(e,t){return Ao(4,4,e,t)}function qh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oh(e,t,r){return r=r!=null?r.concat([e]):null,Ao(4,4,qh.bind(null,t,e),r)}function S0(){}function Hh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&b0(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Wh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&b0(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Gh(e,t,r){return tn&21?(Dt(r,t)||(r=Kd(),we.lanes|=r,rn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=r)}function tg(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var n=us.transition;us.transition={};try{e(!1),t()}finally{se=r,us.transition=n}}function Uh(){return bt().memoizedState}function rg(e,t,r){var n=Er(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Vh(e))$h(t,r);else if(r=Nh(e,t,r,n),r!==null){var a=Ge();Pt(r,e,n,a),Yh(r,t,n)}}function ng(e,t,r){var n=Er(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vh(e))$h(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,r);if(a.hasEagerState=!0,a.eagerState=s,Dt(s,o)){var l=t.interleaved;l===null?(a.next=a,m0(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Nh(e,t,a,n),r!==null&&(a=Ge(),Pt(r,e,n,a),Yh(r,t,n))}}function Vh(e){var t=e.alternate;return e===we||t!==null&&t===we}function $h(e,t){pa=to=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Yh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,e0(e,r)}}var ro={readContext:vt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},ag={readContext:vt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Qc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Di(4194308,4,qh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){return Di(4,2,e,t)},useMemo:function(e,t){var r=jt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=jt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=rg.bind(null,we,e),[n.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:S0,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=tg.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=we,a=jt();if(fe){if(r===void 0)throw Error(L(407));r=r()}else{if(r=t(),_e===null)throw Error(L(349));tn&30||zh(n,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Qc(Ih.bind(null,n,i,e),[e]),n.flags|=2048,_a(9,_h.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=jt(),t=_e.identifierPrefix;if(fe){var r=Xt,n=Jt;r=(n&~(1<<32-Et(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Da++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=eg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:vt,useCallback:Hh,useContext:vt,useEffect:k0,useImperativeHandle:Oh,useInsertionEffect:Lh,useLayoutEffect:Fh,useMemo:Wh,useReducer:ds,useRef:jh,useState:function(){return ds(za)},useDebugValue:S0,useDeferredValue:function(e){var t=bt();return Gh(t,Ee.memoizedState,e)},useTransition:function(){var e=ds(za)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Dh,useId:Uh,unstable_isNewReconciler:!1},og={readContext:vt,useCallback:Hh,useContext:vt,useEffect:k0,useImperativeHandle:Oh,useInsertionEffect:Lh,useLayoutEffect:Fh,useMemo:Wh,useReducer:hs,useRef:jh,useState:function(){return hs(za)},useDebugValue:S0,useDeferredValue:function(e){var t=bt();return Ee===null?t.memoizedState=e:Gh(t,Ee.memoizedState,e)},useTransition:function(){var e=hs(za)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Ph,useSyncExternalStore:Dh,useId:Uh,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ul(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:xe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var To={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ge(),a=Er(e),i=Zt(n,a);i.payload=t,r!=null&&(i.callback=r),t=Nr(e,i,a),t!==null&&(Pt(t,e,a,n),Ei(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ge(),a=Er(e),i=Zt(n,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Nr(e,i,a),t!==null&&(Pt(t,e,a,n),Ei(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ge(),n=Er(e),a=Zt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Nr(e,a,n),t!==null&&(Pt(t,e,n,r),Ei(t,e,n))}};function Jc(e,t,r,n,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ta(r,n)||!Ta(a,i):!0}function Kh(e,t,r){var n=!1,a=_r,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(a=Ze(t)?Zr:qe.current,n=t.contextTypes,i=(n=n!=null)?In(e,a):_r),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function dl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},f0(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=vt(i):(i=Ze(t)?Zr:qe.current,a.context=In(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ul(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&To.enqueueReplaceState(a,a.state,null),Zi(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var r="",n=t;do r+=If(n),n=n.return;while(n);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ps(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function Qh(e,t,r){r=Zt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ao||(ao=!0,kl=n),hl(e,t)},r}function Jh(e,t,r){r=Zt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){hl(e,t),typeof n!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Zc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new sg;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=xg.bind(null,e,t,r),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Zt(-1,1),t.tag=2,Nr(r,t,1))),r.lanes|=1),e)}var lg=cr.ReactCurrentOwner,Je=!1;function He(e,t,r,n){t.child=e===null?Ch(t,null,r,n):Bn(t,e.child,r,n)}function ru(e,t,r,n,a){r=r.render;var i=t.ref;return En(t,a),n=w0(e,t,r,n,i,a),r=x0(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ir(e,t,a)):(fe&&r&&l0(t),t.flags|=1,He(e,t,n,a),t.child)}function nu(e,t,r,n,a){if(e===null){var i=r.type;return typeof i=="function"&&!D0(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Xh(e,t,i,n,a)):(e=Ri(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ta,r(o,n)&&e.ref===t.ref)return ir(e,t,a)}return t.flags|=1,e=Pr(i,n),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,r,n,a){if(e!==null){var i=e.memoizedProps;if(Ta(i,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=i,(e.lanes&a)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,ir(e,t,a)}return pl(e,t,r,n,a)}function Zh(e,t,r){var n=t.pendingProps,a=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(An,nt),nt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(An,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,ue(An,nt),nt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,ue(An,nt),nt|=n;return He(e,t,a,r),t.child}function ep(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,r,n,a){var i=Ze(r)?Zr:qe.current;return i=In(t,i),En(t,a),r=w0(e,t,r,n,i,a),n=x0(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ir(e,t,a)):(fe&&n&&l0(t),t.flags|=1,He(e,t,r,a),t.child)}function au(e,t,r,n,a){if(Ze(r)){var i=!0;Yi(t)}else i=!1;if(En(t,a),t.stateNode===null)zi(e,t),Kh(t,r,n),dl(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=vt(d):(d=Ze(r)?Zr:qe.current,d=In(t,d));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==d)&&Xc(t,o,n,d),gr=!1;var y=t.memoizedState;o.state=y,Zi(t,n,o,a),l=t.memoizedState,s!==n||y!==l||Xe.current||gr?(typeof p=="function"&&(ul(t,r,p,n),l=t.memoizedState),(s=gr||Jc(t,r,s,n,y,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=d,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Mh(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Tt(t.type,s),o.props=d,f=t.pendingProps,y=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Ze(r)?Zr:qe.current,l=In(t,l));var x=r.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||y!==l)&&Xc(t,o,n,l),gr=!1,y=t.memoizedState,o.state=y,Zi(t,n,o,a);var T=t.memoizedState;s!==f||y!==T||Xe.current||gr?(typeof x=="function"&&(ul(t,r,x,n),T=t.memoizedState),(d=gr||Jc(t,r,d,n,y,T,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,T,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),o.props=n,o.state=T,o.context=l,n=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return ml(e,t,r,n,i,a)}function ml(e,t,r,n,a,i){ep(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&Wc(t,r,!1),ir(e,t,i);n=t.stateNode,lg.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Bn(t,e.child,null,i),t.child=Bn(t,null,s,i)):He(e,t,s,i),t.memoizedState=n.state,a&&Wc(t,r,!0),t.child}function tp(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),g0(e,t.containerInfo)}function iu(e,t,r,n,a){return Rn(),u0(a),t.flags|=256,He(e,t,r,n),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rp(e,t,r){var n=t.pendingProps,a=ve.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ue(ve,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,i?(n=t.mode,i=t.child,o={mode:"hidden",children:o},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Mo(o,n,0,null),e=Jr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gl(r),t.memoizedState=fl,e):A0(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return cg(e,t,o,n,s,a,r);if(i){i=n.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Pr(a,l),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Pr(s,i):(i=Jr(i,o,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,o=e.child.memoizedState,o=o===null?gl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=fl,n}return i=e.child,e=i.sibling,n=Pr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function A0(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,r,n){return n!==null&&u0(n),Bn(t,e.child,null,r),e=A0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cg(e,t,r,n,a,i,o){if(r)return t.flags&256?(t.flags&=-257,n=ps(Error(L(422))),di(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,a=t.mode,n=Mo({mode:"visible",children:n.children},a,0,null),i=Jr(i,a,o,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Bn(t,e.child,null,o),t.child.memoizedState=gl(o),t.memoizedState=fl,i);if(!(t.mode&1))return di(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(L(419)),n=ps(i,n,void 0),di(e,t,o,n)}if(s=(o&e.childLanes)!==0,Je||s){if(n=_e,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,ar(e,a),Pt(n,e,a,-1))}return P0(),n=ps(Error(L(421))),di(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,it=Cr(a.nextSibling),ot=t,fe=!0,Mt=null,e!==null&&(pt[mt++]=Jt,pt[mt++]=Xt,pt[mt++]=en,Jt=e.id,Xt=e.overflow,en=t),t=A0(t,n.children),t.flags|=4096,t)}function ou(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cl(e.return,t,r)}function ms(e,t,r,n,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function np(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(He(e,t,n.children,r),n=ve.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,r,t);else if(e.tag===19)ou(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ue(ve,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&eo(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ms(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&eo(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ms(t,!0,r,null,i);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ir(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,r=Pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ug(e,t,r){switch(t.tag){case 3:tp(t),Rn();break;case 5:Eh(t);break;case 1:Ze(t.type)&&Yi(t);break;case 4:g0(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ue(Ji,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ue(ve,ve.current&1),t.flags|=128,null):r&t.child.childLanes?rp(e,t,r):(ue(ve,ve.current&1),e=ir(e,t,r),e!==null?e.sibling:null);ue(ve,ve.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return np(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(ve,ve.current),n)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,r)}return ir(e,t,r)}var ap,yl,ip,op;ap=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};yl=function(){};ip=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Kr(Wt.current);var i=null;switch(r){case"input":a=Fs(e,a),n=Fs(e,n),i=[];break;case"select":a=xe({},a,{value:void 0}),n=xe({},n,{value:void 0}),i=[];break;case"textarea":a=Hs(e,a),n=Hs(e,n),i=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Vi)}Gs(r,n);var o;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(va.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var l=n[d];if(s=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(i||(i=[]),i.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(va.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&he("scroll",e),i||s===l||(i=[])):(i=i||[]).push(d,l))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};op=function(e,t,r,n){r!==n&&(t.flags|=4)};function ea(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function dg(e,t,r){var n=t.pendingProps;switch(c0(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ze(t.type)&&$i(),Le(t),null;case 3:return n=t.stateNode,jn(),pe(Xe),pe(qe),v0(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Tl(Mt),Mt=null))),yl(e,t),Le(t),null;case 5:y0(t);var a=Kr(Pa.current);if(r=t.type,e!==null&&t.stateNode!=null)ip(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(L(166));return Le(t),null}if(e=Kr(Wt.current),ci(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Ft]=t,n[Ma]=i,e=(t.mode&1)!==0,r){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<ia.length;a++)he(ia[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":fc(n,i),he("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},he("invalid",n);break;case"textarea":yc(n,i),he("invalid",n)}Gs(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&li(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&li(n.textContent,s,e),a=["children",""+s]):va.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",n)}switch(r){case"input":ei(n),gc(n,i,!0);break;case"textarea":ei(n),vc(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Vi)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Ft]=t,e[Ma]=n,ap(e,t,!1,!1),t.stateNode=e;e:{switch(o=Us(r,n),r){case"dialog":he("cancel",e),he("close",e),a=n;break;case"iframe":case"object":case"embed":he("load",e),a=n;break;case"video":case"audio":for(a=0;a<ia.length;a++)he(ia[a],e);a=n;break;case"source":he("error",e),a=n;break;case"img":case"image":case"link":he("error",e),he("load",e),a=n;break;case"details":he("toggle",e),a=n;break;case"input":fc(e,n),a=Fs(e,n),he("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=xe({},n,{value:void 0}),he("invalid",e);break;case"textarea":yc(e,n),a=Hs(e,n),he("invalid",e);break;default:a=n}Gs(r,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?jd(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rd(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ba(e,l):typeof l=="number"&&ba(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(va.hasOwnProperty(i)?l!=null&&i==="onScroll"&&he("scroll",e):l!=null&&Yl(e,i,l,o))}switch(r){case"input":ei(e),gc(e,n,!1);break;case"textarea":ei(e),vc(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Tn(e,!!n.multiple,i,!1):n.defaultValue!=null&&Tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)op(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(L(166));if(r=Kr(Pa.current),Kr(Wt.current),ci(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ft]=t,(i=n.nodeValue!==r)&&(e=ot,e!==null))switch(e.tag){case 3:li(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ft]=t,t.stateNode=n}return Le(t),null;case 13:if(pe(ve),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&it!==null&&t.mode&1&&!(t.flags&128))Ah(),Rn(),t.flags|=98560,i=!1;else if(i=ci(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Ft]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else Mt!==null&&(Tl(Mt),Mt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Pe===0&&(Pe=3):P0())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return jn(),yl(e,t),e===null&&Ca(t.stateNode.containerInfo),Le(t),null;case 10:return p0(t.type._context),Le(t),null;case 17:return Ze(t.type)&&$i(),Le(t),null;case 19:if(pe(ve),i=t.memoizedState,i===null)return Le(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)ea(i,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,ea(i,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ue(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Te()>Fn&&(t.flags|=128,n=!0,ea(i,!1),t.lanes=4194304)}else{if(!n)if(e=eo(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!fe)return Le(t),null}else 2*Te()-i.renderingStartTime>Fn&&r!==1073741824&&(t.flags|=128,n=!0,ea(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Te(),t.sibling=null,r=ve.current,ue(ve,n?r&1|2:r&1),t):(Le(t),null);case 22:case 23:return E0(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?nt&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function hg(e,t){switch(c0(t),t.tag){case 1:return Ze(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),pe(Xe),pe(qe),v0(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return y0(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return jn(),null;case 10:return p0(t.type._context),null;case 22:case 23:return E0(),null;case 24:return null;default:return null}}var hi=!1,Fe=!1,pg=typeof WeakSet=="function"?WeakSet:Set,U=null;function Sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Se(e,t,n)}else r.current=null}function vl(e,t,r){try{r()}catch(n){Se(e,t,n)}}var su=!1;function mg(e,t){if(tl=Wi,e=dh(),s0(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,d=0,p=0,f=e,y=null;t:for(;;){for(var x;f!==r||a!==0&&f.nodeType!==3||(s=o+a),f!==i||n!==0&&f.nodeType!==3||(l=o+n),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)y=f,f=x;for(;;){if(f===e)break t;if(y===r&&++d===a&&(s=o),y===i&&++p===n&&(l=o),(x=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=x}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(rl={focusedElem:e,selectionRange:r},Wi=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,M=T.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?A:Tt(t.type,A),M);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(N){Se(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return T=su,su=!1,T}function ma(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&vl(t,r,i)}a=a.next}while(a!==n)}}function Co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sp(e){var t=e.alternate;t!==null&&(e.alternate=null,sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Ma],delete t[il],delete t[Q1],delete t[J1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lp(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Vi));else if(n!==4&&(e=e.child,e!==null))for(wl(e,t,r),e=e.sibling;e!==null;)wl(e,t,r),e=e.sibling}function xl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}var Ie=null,Ct=!1;function hr(e,t,r){for(r=r.child;r!==null;)cp(e,t,r),r=r.sibling}function cp(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(vo,r)}catch{}switch(r.tag){case 5:Fe||Sn(r,t);case 6:var n=Ie,a=Ct;Ie=null,hr(e,t,r),Ie=n,Ct=a,Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ie.removeChild(r.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?ss(e.parentNode,r):e.nodeType===1&&ss(e,r),Sa(e)):ss(Ie,r.stateNode));break;case 4:n=Ie,a=Ct,Ie=r.stateNode.containerInfo,Ct=!0,hr(e,t,r),Ie=n,Ct=a;break;case 0:case 11:case 14:case 15:if(!Fe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&vl(r,t,o),a=a.next}while(a!==n)}hr(e,t,r);break;case 1:if(!Fe&&(Sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Se(r,t,s)}hr(e,t,r);break;case 21:hr(e,t,r);break;case 22:r.mode&1?(Fe=(n=Fe)||r.memoizedState!==null,hr(e,t,r),Fe=n):hr(e,t,r);break;default:hr(e,t,r)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new pg),t.forEach(function(n){var a=Sg.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function At(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,Ct=!1;break e;case 3:Ie=s.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=s.stateNode.containerInfo,Ct=!0;break e}s=s.return}if(Ie===null)throw Error(L(160));cp(i,o,a),Ie=null,Ct=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(d){Se(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Bt(e),n&4){try{ma(3,e,e.return),Co(3,e)}catch(A){Se(e,e.return,A)}try{ma(5,e,e.return)}catch(A){Se(e,e.return,A)}}break;case 1:At(t,e),Bt(e),n&512&&r!==null&&Sn(r,r.return);break;case 5:if(At(t,e),Bt(e),n&512&&r!==null&&Sn(r,r.return),e.flags&32){var a=e.stateNode;try{ba(a,"")}catch(A){Se(e,e.return,A)}}if(n&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&zd(a,i),Us(s,o);var d=Us(s,i);for(o=0;o<l.length;o+=2){var p=l[o],f=l[o+1];p==="style"?jd(a,f):p==="dangerouslySetInnerHTML"?Rd(a,f):p==="children"?ba(a,f):Yl(a,p,f,d)}switch(s){case"input":qs(a,i);break;case"textarea":_d(a,i);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Tn(a,!!i.multiple,x,!1):y!==!!i.multiple&&(i.defaultValue!=null?Tn(a,!!i.multiple,i.defaultValue,!0):Tn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ma]=i}catch(A){Se(e,e.return,A)}}break;case 6:if(At(t,e),Bt(e),n&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(A){Se(e,e.return,A)}}break;case 3:if(At(t,e),Bt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(A){Se(e,e.return,A)}break;case 4:At(t,e),Bt(e);break;case 13:At(t,e),Bt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(N0=Te())),n&4&&cu(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(Fe=(d=Fe)||p,At(t,e),Fe=d):At(t,e),Bt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(U=e,p=e.child;p!==null;){for(f=U=p;U!==null;){switch(y=U,x=y.child,y.tag){case 0:case 11:case 14:case 15:ma(4,y,y.return);break;case 1:Sn(y,y.return);var T=y.stateNode;if(typeof T.componentWillUnmount=="function"){n=y,r=y.return;try{t=n,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(A){Se(n,r,A)}}break;case 5:Sn(y,y.return);break;case 22:if(y.memoizedState!==null){du(f);continue}}x!==null?(x.return=y,U=x):du(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{a=f.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Bd("display",o))}catch(A){Se(e,e.return,A)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(A){Se(e,e.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:At(t,e),Bt(e),n&4&&cu(e);break;case 21:break;default:At(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lp(r)){var n=r;break e}r=r.return}throw Error(L(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ba(a,""),n.flags&=-33);var i=lu(e);xl(e,i,a);break;case 3:case 4:var o=n.stateNode.containerInfo,s=lu(e);wl(e,s,o);break;default:throw Error(L(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fg(e,t,r){U=e,dp(e)}function dp(e,t,r){for(var n=(e.mode&1)!==0;U!==null;){var a=U,i=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||hi;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Fe;s=hi;var d=Fe;if(hi=o,(Fe=l)&&!d)for(U=a;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?hu(a):l!==null?(l.return=o,U=l):hu(a);for(;i!==null;)U=i,dp(i),i=i.sibling;U=a,hi=s,Fe=d}uu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,U=i):uu(e)}}function uu(e){for(;U!==null;){var t=U;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||Co(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Fe)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yc(t,i,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yc(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Fe||t.flags&512&&bl(t)}catch(y){Se(t,t.return,y)}}if(t===e){U=null;break}if(r=t.sibling,r!==null){r.return=t.return,U=r;break}U=t.return}}function du(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var r=t.sibling;if(r!==null){r.return=t.return,U=r;break}U=t.return}}function hu(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Co(4,t)}catch(l){Se(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Se(t,a,l)}}var i=t.return;try{bl(t)}catch(l){Se(t,i,l)}break;case 5:var o=t.return;try{bl(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var gg=Math.ceil,no=cr.ReactCurrentDispatcher,T0=cr.ReactCurrentOwner,yt=cr.ReactCurrentBatchConfig,re=0,_e=null,Ne=null,Re=0,nt=0,An=Lr(0),Pe=0,Ia=null,rn=0,No=0,C0=0,fa=null,Qe=null,N0=0,Fn=1/0,Yt=null,ao=!1,kl=null,Mr=null,pi=!1,wr=null,io=0,ga=0,Sl=null,_i=-1,Ii=0;function Ge(){return re&6?Te():_i!==-1?_i:_i=Te()}function Er(e){return e.mode&1?re&2&&Re!==0?Re&-Re:Z1.transition!==null?(Ii===0&&(Ii=Kd()),Ii):(e=se,e!==0||(e=window.event,e=e===void 0?16:rh(e.type)),e):1}function Pt(e,t,r,n){if(50<ga)throw ga=0,Sl=null,Error(L(185));qa(e,r,n),(!(re&2)||e!==_e)&&(e===_e&&(!(re&2)&&(No|=r),Pe===4&&vr(e,Re)),et(e,n),r===1&&re===0&&!(t.mode&1)&&(Fn=Te()+500,So&&Fr()))}function et(e,t){var r=e.callbackNode;Zf(e,t);var n=Hi(e,e===_e?Re:0);if(n===0)r!==null&&xc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&xc(r),t===1)e.tag===0?X1(pu.bind(null,e)):xh(pu.bind(null,e)),Y1(function(){!(re&6)&&Fr()}),r=null;else{switch(Qd(n)){case 1:r=Zl;break;case 4:r=$d;break;case 16:r=Oi;break;case 536870912:r=Yd;break;default:r=Oi}r=bp(r,hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function hp(e,t){if(_i=-1,Ii=0,re&6)throw Error(L(327));var r=e.callbackNode;if(Pn()&&e.callbackNode!==r)return null;var n=Hi(e,e===_e?Re:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=oo(e,n);else{t=n;var a=re;re|=2;var i=mp();(_e!==e||Re!==t)&&(Yt=null,Fn=Te()+500,Qr(e,t));do try{bg();break}catch(s){pp(e,s)}while(!0);h0(),no.current=i,re=a,Ne!==null?t=0:(_e=null,Re=0,t=Pe)}if(t!==0){if(t===2&&(a=Qs(e),a!==0&&(n=a,t=Al(e,a))),t===1)throw r=Ia,Qr(e,0),vr(e,n),et(e,Te()),r;if(t===6)vr(e,n);else{if(a=e.current.alternate,!(n&30)&&!yg(a)&&(t=oo(e,n),t===2&&(i=Qs(e),i!==0&&(n=i,t=Al(e,i))),t===1))throw r=Ia,Qr(e,0),vr(e,n),et(e,Te()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(L(345));case 2:Vr(e,Qe,Yt);break;case 3:if(vr(e,n),(n&130023424)===n&&(t=N0+500-Te(),10<t)){if(Hi(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ge(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=al(Vr.bind(null,e,Qe,Yt),t);break}Vr(e,Qe,Yt);break;case 4:if(vr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-Et(n);i=1<<o,o=t[o],o>a&&(a=o),n&=~i}if(n=a,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*gg(n/1960))-n,10<n){e.timeoutHandle=al(Vr.bind(null,e,Qe,Yt),n);break}Vr(e,Qe,Yt);break;case 5:Vr(e,Qe,Yt);break;default:throw Error(L(329))}}}return et(e,Te()),e.callbackNode===r?hp.bind(null,e):null}function Al(e,t){var r=fa;return e.current.memoizedState.isDehydrated&&(Qr(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Qe,Qe=r,t!==null&&Tl(t)),e}function Tl(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!Dt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~C0,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Et(t),n=1<<r;e[r]=-1,t&=~n}}function pu(e){if(re&6)throw Error(L(327));Pn();var t=Hi(e,0);if(!(t&1))return et(e,Te()),null;var r=oo(e,t);if(e.tag!==0&&r===2){var n=Qs(e);n!==0&&(t=n,r=Al(e,n))}if(r===1)throw r=Ia,Qr(e,0),vr(e,t),et(e,Te()),r;if(r===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,Qe,Yt),et(e,Te()),null}function M0(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(Fn=Te()+500,So&&Fr())}}function nn(e){wr!==null&&wr.tag===0&&!(re&6)&&Pn();var t=re;re|=1;var r=yt.transition,n=se;try{if(yt.transition=null,se=1,e)return e()}finally{se=n,yt.transition=r,re=t,!(re&6)&&Fr()}}function E0(){nt=An.current,pe(An)}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$1(r)),Ne!==null)for(r=Ne.return;r!==null;){var n=r;switch(c0(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&$i();break;case 3:jn(),pe(Xe),pe(qe),v0();break;case 5:y0(n);break;case 4:jn();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:p0(n.type._context);break;case 22:case 23:E0()}r=r.return}if(_e=e,Ne=e=Pr(e.current,null),Re=nt=t,Pe=0,Ia=null,C0=No=rn=0,Qe=fa=null,Yr!==null){for(t=0;t<Yr.length;t++)if(r=Yr[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,n.next=o}r.pending=n}Yr=null}return e}function pp(e,t){do{var r=Ne;try{if(h0(),Pi.current=ro,to){for(var n=we.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}to=!1}if(tn=0,ze=Ee=we=null,pa=!1,Da=0,T0.current=null,r===null||r.return===null){Pe=1,Ia=t,Ne=null;break}e:{var i=e,o=r.return,s=r,l=t;if(t=Re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,p=s,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=eu(o);if(x!==null){x.flags&=-257,tu(x,o,s,i,t),x.mode&1&&Zc(i,d,t),t=x,l=d;var T=t.updateQueue;if(T===null){var A=new Set;A.add(l),t.updateQueue=A}else T.add(l);break e}else{if(!(t&1)){Zc(i,d,t),P0();break e}l=Error(L(426))}}else if(fe&&s.mode&1){var M=eu(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),tu(M,o,s,i,t),u0(Ln(l,s));break e}}i=l=Ln(l,s),Pe!==4&&(Pe=2),fa===null?fa=[i]:fa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=Qh(i,l,t);$c(i,b);break e;case 1:s=l;var v=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Mr===null||!Mr.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Jh(i,s,t);$c(i,N);break e}}i=i.return}while(i!==null)}gp(r)}catch(P){t=P,Ne===r&&r!==null&&(Ne=r=r.return);continue}break}while(!0)}function mp(){var e=no.current;return no.current=ro,e===null?ro:e}function P0(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),_e===null||!(rn&268435455)&&!(No&268435455)||vr(_e,Re)}function oo(e,t){var r=re;re|=2;var n=mp();(_e!==e||Re!==t)&&(Yt=null,Qr(e,t));do try{vg();break}catch(a){pp(e,a)}while(!0);if(h0(),re=r,no.current=n,Ne!==null)throw Error(L(261));return _e=null,Re=0,Pe}function vg(){for(;Ne!==null;)fp(Ne)}function bg(){for(;Ne!==null&&!Gf();)fp(Ne)}function fp(e){var t=vp(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?gp(e):Ne=t,T0.current=null}function gp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=hg(r,t),r!==null){r.flags&=32767,Ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ne=null;return}}else if(r=dg(r,t,nt),r!==null){Ne=r;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Pe===0&&(Pe=5)}function Vr(e,t,r){var n=se,a=yt.transition;try{yt.transition=null,se=1,wg(e,t,r,n)}finally{yt.transition=a,se=n}return null}function wg(e,t,r,n){do Pn();while(wr!==null);if(re&6)throw Error(L(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(e1(e,i),e===_e&&(Ne=_e=null,Re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||pi||(pi=!0,bp(Oi,function(){return Pn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var o=se;se=1;var s=re;re|=4,T0.current=null,mg(e,r),up(r,e),q1(rl),Wi=!!tl,rl=tl=null,e.current=r,fg(r),Uf(),re=s,se=o,yt.transition=i}else e.current=r;if(pi&&(pi=!1,wr=e,io=a),i=e.pendingLanes,i===0&&(Mr=null),Yf(r.stateNode),et(e,Te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(ao)throw ao=!1,e=kl,kl=null,e;return io&1&&e.tag!==0&&Pn(),i=e.pendingLanes,i&1?e===Sl?ga++:(ga=0,Sl=e):ga=0,Fr(),null}function Pn(){if(wr!==null){var e=Qd(io),t=yt.transition,r=se;try{if(yt.transition=null,se=16>e?16:e,wr===null)var n=!1;else{if(e=wr,wr=null,io=0,re&6)throw Error(L(331));var a=re;for(re|=4,U=e.current;U!==null;){var i=U,o=i.child;if(U.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(U=d;U!==null;){var p=U;switch(p.tag){case 0:case 11:case 15:ma(8,p,i)}var f=p.child;if(f!==null)f.return=p,U=f;else for(;U!==null;){p=U;var y=p.sibling,x=p.return;if(sp(p),p===d){U=null;break}if(y!==null){y.return=x,U=y;break}U=x}}}var T=i.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var M=A.sibling;A.sibling=null,A=M}while(A!==null)}}U=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,U=o;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ma(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,U=b;break e}U=i.return}}var v=e.current;for(U=v;U!==null;){o=U;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,U=w;else e:for(o=v;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Co(9,s)}}catch(P){Se(s,s.return,P)}if(s===o){U=null;break e}var N=s.sibling;if(N!==null){N.return=s.return,U=N;break e}U=s.return}}if(re=a,Fr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(vo,e)}catch{}n=!0}return n}finally{se=r,yt.transition=t}}return!1}function mu(e,t,r){t=Ln(r,t),t=Qh(e,t,1),e=Nr(e,t,1),t=Ge(),e!==null&&(qa(e,1,t),et(e,t))}function Se(e,t,r){if(e.tag===3)mu(e,e,r);else for(;t!==null;){if(t.tag===3){mu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Mr===null||!Mr.has(n))){e=Ln(r,e),e=Jh(t,e,1),t=Nr(t,e,1),e=Ge(),t!==null&&(qa(t,1,e),et(t,e));break}}t=t.return}}function xg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&r,_e===e&&(Re&r)===r&&(Pe===4||Pe===3&&(Re&130023424)===Re&&500>Te()-N0?Qr(e,0):C0|=r),et(e,t)}function yp(e,t){t===0&&(e.mode&1?(t=ni,ni<<=1,!(ni&130023424)&&(ni=4194304)):t=1);var r=Ge();e=ar(e,t),e!==null&&(qa(e,t,r),et(e,r))}function kg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),yp(e,r)}function Sg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(L(314))}n!==null&&n.delete(t),yp(e,r)}var vp;vp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Je=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Je=!1,ug(e,t,r);Je=!!(e.flags&131072)}else Je=!1,fe&&t.flags&1048576&&kh(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;zi(e,t),e=t.pendingProps;var a=In(t,qe.current);En(t,r),a=w0(null,t,n,e,a,r);var i=x0();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(n)?(i=!0,Yi(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,f0(t),a.updater=To,t.stateNode=a,a._reactInternals=t,dl(t,n,e,r),t=ml(null,t,n,!0,i,r)):(t.tag=0,fe&&i&&l0(t),He(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Tg(n),e=Tt(n,e),a){case 0:t=pl(null,t,n,e,r);break e;case 1:t=au(null,t,n,e,r);break e;case 11:t=ru(null,t,n,e,r);break e;case 14:t=nu(null,t,n,Tt(n.type,e),r);break e}throw Error(L(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),pl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),au(e,t,n,a,r);case 3:e:{if(tp(t),e===null)throw Error(L(387));n=t.pendingProps,i=t.memoizedState,a=i.element,Mh(e,t),Zi(t,n,null,r);var o=t.memoizedState;if(n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Ln(Error(L(423)),t),t=iu(e,t,n,r,a);break e}else if(n!==a){a=Ln(Error(L(424)),t),t=iu(e,t,n,r,a);break e}else for(it=Cr(t.stateNode.containerInfo.firstChild),ot=t,fe=!0,Mt=null,r=Ch(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rn(),n===a){t=ir(e,t,r);break e}He(e,t,n,r)}t=t.child}return t;case 5:return Eh(t),e===null&&ll(t),n=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,nl(n,a)?o=null:i!==null&&nl(n,i)&&(t.flags|=32),ep(e,t),He(e,t,o,r),t.child;case 6:return e===null&&ll(t),null;case 13:return rp(e,t,r);case 4:return g0(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Bn(t,null,n,r):He(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),ru(e,t,n,a,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ue(Ji,n._currentValue),n._currentValue=o,i!==null)if(Dt(i.value,o)){if(i.children===a.children&&!Xe.current){t=ir(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Zt(-1,r&-r),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?l.next=l:(l.next=p.next,p.next=l),d.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),cl(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),cl(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}He(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,En(t,r),a=vt(a),n=n(a),t.flags|=1,He(e,t,n,r),t.child;case 14:return n=t.type,a=Tt(n,t.pendingProps),a=Tt(n.type,a),nu(e,t,n,a,r);case 15:return Xh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),zi(e,t),t.tag=1,Ze(n)?(e=!0,Yi(t)):e=!1,En(t,r),Kh(t,n,a),dl(t,n,a,r),ml(null,t,n,!0,e,r);case 19:return np(e,t,r);case 22:return Zh(e,t,r)}throw Error(L(156,t.tag))};function bp(e,t){return Vd(e,t)}function Ag(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,r,n){return new Ag(e,t,r,n)}function D0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tg(e){if(typeof e=="function")return D0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Jl)return 14}return 2}function Pr(e,t){var r=e.alternate;return r===null?(r=ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ri(e,t,r,n,a,i){var o=2;if(n=e,typeof e=="function")D0(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mn:return Jr(r.children,a,i,t);case Kl:o=8,a|=8;break;case Rs:return e=ft(12,r,t,a|2),e.elementType=Rs,e.lanes=i,e;case Bs:return e=ft(13,r,t,a),e.elementType=Bs,e.lanes=i,e;case js:return e=ft(19,r,t,a),e.elementType=js,e.lanes=i,e;case Ed:return Mo(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nd:o=10;break e;case Md:o=9;break e;case Ql:o=11;break e;case Jl:o=14;break e;case fr:o=16,n=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ft(o,r,t,a),t.elementType=e,t.type=n,t.lanes=i,t}function Jr(e,t,r,n){return e=ft(7,e,n,t),e.lanes=r,e}function Mo(e,t,r,n){return e=ft(22,e,n,t),e.elementType=Ed,e.lanes=r,e.stateNode={isHidden:!1},e}function fs(e,t,r){return e=ft(6,e,null,t),e.lanes=r,e}function gs(e,t,r){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cg(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function z0(e,t,r,n,a,i,o,s,l){return e=new Cg(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},f0(i),e}function Ng(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function wp(e){if(!e)return _r;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var r=e.type;if(Ze(r))return wh(e,r,t)}return t}function xp(e,t,r,n,a,i,o,s,l){return e=z0(r,n,!0,e,a,i,o,s,l),e.context=wp(null),r=e.current,n=Ge(),a=Er(r),i=Zt(n,a),i.callback=t??null,Nr(r,i,a),e.current.lanes=a,qa(e,a,n),et(e,n),e}function Eo(e,t,r,n){var a=t.current,i=Ge(),o=Er(a);return r=wp(r),t.context===null?t.context=r:t.pendingContext=r,t=Zt(i,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Nr(a,t,o),e!==null&&(Pt(e,a,o,i),Ei(e,a,o)),o}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _0(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function Mg(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function I0(e){this._internalRoot=e}Po.prototype.render=I0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Eo(e,t,null,null)};Po.prototype.unmount=I0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Eo(null,e,null,null)}),t[nr]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yr.length&&t!==0&&t<yr[r].priority;r++);yr.splice(r,0,e),r===0&&th(e)}};function R0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function Eg(e,t,r,n,a){if(a){if(typeof n=="function"){var i=n;n=function(){var d=so(o);i.call(d)}}var o=xp(t,n,e,0,null,!1,!1,"",gu);return e._reactRootContainer=o,e[nr]=o.current,Ca(e.nodeType===8?e.parentNode:e),nn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var d=so(l);s.call(d)}}var l=z0(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=l,e[nr]=l.current,Ca(e.nodeType===8?e.parentNode:e),nn(function(){Eo(t,l,r,n)}),l}function zo(e,t,r,n,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=so(o);s.call(l)}}Eo(t,o,e,a)}else o=Eg(r,t,e,a,n);return so(o)}Jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=aa(t.pendingLanes);r!==0&&(e0(t,r|1),et(t,Te()),!(re&6)&&(Fn=Te()+500,Fr()))}break;case 13:nn(function(){var n=ar(e,1);if(n!==null){var a=Ge();Pt(n,e,1,a)}}),_0(e,1)}};t0=function(e){if(e.tag===13){var t=ar(e,134217728);if(t!==null){var r=Ge();Pt(t,e,134217728,r)}_0(e,134217728)}};Xd=function(e){if(e.tag===13){var t=Er(e),r=ar(e,t);if(r!==null){var n=Ge();Pt(r,e,t,n)}_0(e,t)}};Zd=function(){return se};eh=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};$s=function(e,t,r){switch(t){case"input":if(qs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=ko(n);if(!a)throw Error(L(90));Dd(n),qs(n,a)}}}break;case"textarea":_d(e,r);break;case"select":t=r.value,t!=null&&Tn(e,!!r.multiple,t,!1)}};qd=M0;Od=nn;var Pg={usingClientEntryPoint:!1,Events:[Ha,vn,ko,Ld,Fd,M0]},ta={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||Mg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{vo=mi.inject(Dg),Ht=mi}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R0(t))throw Error(L(200));return Ng(e,t,null,r)};ct.createRoot=function(e,t){if(!R0(e))throw Error(L(299));var r=!1,n="",a=kp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=z0(e,1,!1,null,null,r,!1,n,a),e[nr]=t.current,Ca(e.nodeType===8?e.parentNode:e),new I0(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Gd(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return nn(e)};ct.hydrate=function(e,t,r){if(!Do(t))throw Error(L(200));return zo(null,e,t,!0,r)};ct.hydrateRoot=function(e,t,r){if(!R0(e))throw Error(L(405));var n=r!=null&&r.hydratedSources||null,a=!1,i="",o=kp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=xp(t,null,e,1,r??null,a,!1,i,o),e[nr]=t.current,Ca(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Po(t)};ct.render=function(e,t,r){if(!Do(t))throw Error(L(200));return zo(null,e,t,!1,r)};ct.unmountComponentAtNode=function(e){if(!Do(e))throw Error(L(40));return e._reactRootContainer?(nn(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[nr]=null})}),!0):!1};ct.unstable_batchedUpdates=M0;ct.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Do(r))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return zo(e,t,r,!1,n)};ct.version="18.3.1-next-f1338f8080-20240426";function Sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp)}catch(e){console.error(e)}}Sp(),Sd.exports=ct;var oa=Sd.exports,yu=oa;_s.createRoot=yu.createRoot,_s.hydrateRoot=yu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ra.apply(this,arguments)}var xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xr||(xr={}));const vu="popstate";function zg(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:o,hash:s}=n.location;return Cl("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:lo(a)}return Ig(t,r,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function B0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _g(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,r,n){return r===void 0&&(r=null),Ra({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Un(t):t,{state:r,key:t&&t.key||n||_g()})}function lo(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Un(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ig(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,s=xr.Pop,l=null,d=p();d==null&&(d=0,o.replaceState(Ra({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function f(){s=xr.Pop;let M=p(),b=M==null?null:M-d;d=M,l&&l({action:s,location:A.location,delta:b})}function y(M,b){s=xr.Push;let v=Cl(A.location,M,b);d=p()+1;let w=bu(v,d),N=A.createHref(v);try{o.pushState(w,"",N)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(N)}i&&l&&l({action:s,location:A.location,delta:1})}function x(M,b){s=xr.Replace;let v=Cl(A.location,M,b);d=p();let w=bu(v,d),N=A.createHref(v);o.replaceState(w,"",N),i&&l&&l({action:s,location:A.location,delta:0})}function T(M){let b=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof M=="string"?M:lo(M);return v=v.replace(/ $/,"%20"),Ae(b,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,b)}let A={get action(){return s},get location(){return e(a,o)},listen(M){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(vu,f),l=M,()=>{a.removeEventListener(vu,f),l=null}},createHref(M){return t(a,M)},createURL:T,encodeLocation(M){let b=T(M);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:y,replace:x,go(M){return o.go(M)}};return A}var wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wu||(wu={}));function Rg(e,t,r){return r===void 0&&(r="/"),Bg(e,t,r)}function Bg(e,t,r,n){let a=typeof t=="string"?Un(t):t,i=qn(a.pathname||"/",r);if(i==null)return null;let o=Ap(e);jg(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=Yg(i);s=Vg(o[l],d)}return s}function Ap(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let d=Dr([n,l.relativePath]),p=r.concat(l);i.children&&i.children.length>0&&(Ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ap(i.children,t,p,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Gg(d,i.index),routesMeta:p})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of Tp(i.path))a(i,o,l)}),t}function Tp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return a?[i,""]:[i];let o=Tp(n.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function jg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ug(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Lg=/^:[\w-]+$/,Fg=3,qg=2,Og=1,Hg=10,Wg=-2,xu=e=>e==="*";function Gg(e,t){let r=e.split("/"),n=r.length;return r.some(xu)&&(n+=Wg),t&&(n+=qg),r.filter(a=>!xu(a)).reduce((a,i)=>a+(Lg.test(i)?Fg:i===""?Og:Hg),n)}function Ug(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Vg(e,t,r){let{routesMeta:n}=e,a={},i="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],d=s===n.length-1,p=i==="/"?t:t.slice(i.length)||"/",f=Nl({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},p),y=l.route;if(!f)return null;Object.assign(a,f.params),o.push({params:a,pathname:Dr([i,f.pathname]),pathnameBase:Zg(Dr([i,f.pathnameBase])),route:y}),f.pathnameBase!=="/"&&(i=Dr([i,f.pathnameBase]))}return o}function Nl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=$g(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((d,p,f)=>{let{paramName:y,isOptional:x}=p;if(y==="*"){let A=s[f]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const T=s[f];return x&&!T?d[y]=void 0:d[y]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function $g(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),B0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(n.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Yg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return B0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qg=e=>Kg.test(e);function Jg(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Un(e):e,i;if(r)if(Qg(r))i=r;else{if(r.includes("//")){let o=r;r=r.replace(/\/\/+/g,"/"),B0(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?i=ku(r.substring(1),"/"):i=ku(r,t)}else i=t;return{pathname:i,search:e4(n),hash:t4(a)}}function ku(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ys(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Cp(e,t){let r=Xg(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Np(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Un(e):(a=Ra({},e),Ae(!a.pathname||!a.pathname.includes("?"),ys("?","pathname","search",a)),Ae(!a.pathname||!a.pathname.includes("#"),ys("#","pathname","hash",a)),Ae(!a.search||!a.search.includes("#"),ys("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=r;else{let f=t.length-1;if(!n&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),f-=1;a.pathname=y.join("/")}s=f>=0?t[f]:"/"}let l=Jg(a,s),d=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||p)&&(l.pathname+="/"),l}const Dr=e=>e.join("/").replace(/\/\/+/g,"/"),Zg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),e4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,t4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function r4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mp=["post","put","patch","delete"];new Set(Mp);const n4=["get",...Mp];new Set(n4);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ba.apply(this,arguments)}const _o=D.createContext(null),Ep=D.createContext(null),qr=D.createContext(null),Io=D.createContext(null),ur=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Pp=D.createContext(null);function a4(e,t){let{relative:r}=t===void 0?{}:t;Ga()||Ae(!1);let{basename:n,navigator:a}=D.useContext(qr),{hash:i,pathname:o,search:s}=Ro(e,{relative:r}),l=o;return n!=="/"&&(l=o==="/"?n:Dr([n,o])),a.createHref({pathname:l,search:s,hash:i})}function Ga(){return D.useContext(Io)!=null}function Or(){return Ga()||Ae(!1),D.useContext(Io).location}function Dp(e){D.useContext(qr).static||D.useLayoutEffect(e)}function j0(){let{isDataRoute:e}=D.useContext(ur);return e?b4():i4()}function i4(){Ga()||Ae(!1);let e=D.useContext(_o),{basename:t,future:r,navigator:n}=D.useContext(qr),{matches:a}=D.useContext(ur),{pathname:i}=Or(),o=JSON.stringify(Cp(a,r.v7_relativeSplatPath)),s=D.useRef(!1);return Dp(()=>{s.current=!0}),D.useCallback(function(d,p){if(p===void 0&&(p={}),!s.current)return;if(typeof d=="number"){n.go(d);return}let f=Np(d,JSON.parse(o),i,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Dr([t,f.pathname])),(p.replace?n.replace:n.push)(f,p.state,p)},[t,n,o,i,e])}const zp=D.createContext(null);function _p(){return D.useContext(zp)}function o4(e){let t=D.useContext(ur).outlet;return t&&D.createElement(zp.Provider,{value:e},t)}function s4(){let{matches:e}=D.useContext(ur),t=e[e.length-1];return t?t.params:{}}function Ro(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=D.useContext(qr),{matches:a}=D.useContext(ur),{pathname:i}=Or(),o=JSON.stringify(Cp(a,n.v7_relativeSplatPath));return D.useMemo(()=>Np(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}function l4(e,t){return c4(e,t)}function c4(e,t,r,n){Ga()||Ae(!1);let{navigator:a}=D.useContext(qr),{matches:i}=D.useContext(ur),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Or(),p;if(t){var f;let M=typeof t=="string"?Un(t):t;l==="/"||(f=M.pathname)!=null&&f.startsWith(l)||Ae(!1),p=M}else p=d;let y=p.pathname||"/",x=y;if(l!=="/"){let M=l.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=Rg(e,{pathname:x}),A=m4(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},s,M.params),pathname:Dr([l,a.encodeLocation?a.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?l:Dr([l,a.encodeLocation?a.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),i,r,n);return t&&A?D.createElement(Io.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:xr.Pop}},A):A}function u4(){let e=v4(),t=r4(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),r?D.createElement("pre",{style:a},r):null,null)}const d4=D.createElement(u4,null);class h4 extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?D.createElement(ur.Provider,{value:this.props.routeContext},D.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p4(e){let{routeContext:t,match:r,children:n}=e,a=D.useContext(_o);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),D.createElement(ur.Provider,{value:t},n)}function m4(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=(a=r)==null?void 0:a.errors;if(s!=null){let p=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);p>=0||Ae(!1),o=o.slice(0,Math.min(o.length,p+1))}let l=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<o.length;p++){let f=o[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:y,errors:x}=r,T=f.route.loader&&y[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||T){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,f,y)=>{let x,T=!1,A=null,M=null;r&&(x=s&&f.route.id?s[f.route.id]:void 0,A=f.route.errorElement||d4,l&&(d<0&&y===0?(w4("route-fallback"),T=!0,M=null):d===y&&(T=!0,M=f.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,y+1)),v=()=>{let w;return x?w=A:T?w=M:f.route.Component?w=D.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=p,D.createElement(p4,{match:f,routeContext:{outlet:p,matches:b,isDataRoute:r!=null},children:w})};return r&&(f.route.ErrorBoundary||f.route.errorElement||y===0)?D.createElement(h4,{location:r.location,revalidation:r.revalidation,component:A,error:x,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):v()},null)}var Ip=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ip||{}),Rp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rp||{});function f4(e){let t=D.useContext(_o);return t||Ae(!1),t}function g4(e){let t=D.useContext(Ep);return t||Ae(!1),t}function y4(e){let t=D.useContext(ur);return t||Ae(!1),t}function Bp(e){let t=y4(),r=t.matches[t.matches.length-1];return r.route.id||Ae(!1),r.route.id}function v4(){var e;let t=D.useContext(Pp),r=g4(),n=Bp();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function b4(){let{router:e}=f4(Ip.UseNavigateStable),t=Bp(Rp.UseNavigateStable),r=D.useRef(!1);return Dp(()=>{r.current=!0}),D.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ba({fromRouteId:t},i)))},[e,t])}const Su={};function w4(e,t,r){Su[e]||(Su[e]=!0)}function x4(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function k4(e){return o4(e.context)}function dn(e){Ae(!1)}function S4(e){let{basename:t="/",children:r=null,location:n,navigationType:a=xr.Pop,navigator:i,static:o=!1,future:s}=e;Ga()&&Ae(!1);let l=t.replace(/^\/*/,"/"),d=D.useMemo(()=>({basename:l,navigator:i,static:o,future:Ba({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof n=="string"&&(n=Un(n));let{pathname:p="/",search:f="",hash:y="",state:x=null,key:T="default"}=n,A=D.useMemo(()=>{let M=qn(p,l);return M==null?null:{location:{pathname:M,search:f,hash:y,state:x,key:T},navigationType:a}},[l,p,f,y,x,T,a]);return A==null?null:D.createElement(qr.Provider,{value:d},D.createElement(Io.Provider,{children:r,value:A}))}function A4(e){let{children:t,location:r}=e;return l4(Ml(t),r)}new Promise(()=>{});function Ml(e,t){t===void 0&&(t=[]);let r=[];return D.Children.forEach(e,(n,a)=>{if(!D.isValidElement(n))return;let i=[...t,a];if(n.type===D.Fragment){r.push.apply(r,Ml(n.props.children,i));return}n.type!==dn&&Ae(!1),!n.props.index||!n.props.children||Ae(!1);let o={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Ml(n.props.children,i)),r.push(o)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},co.apply(this,arguments)}function jp(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function T4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C4(e,t){return e.button===0&&(!t||t==="_self")&&!T4(e)}function El(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function N4(e,t){let r=El(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}const M4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],E4=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],P4="6";try{window.__reactRouterVersion=P4}catch{}const D4=D.createContext({isTransitioning:!1}),z4="startTransition",Au=xf[z4];function _4(e){let{basename:t,children:r,future:n,window:a}=e,i=D.useRef();i.current==null&&(i.current=zg({window:a,v5Compat:!0}));let o=i.current,[s,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:d}=n||{},p=D.useCallback(f=>{d&&Au?Au(()=>l(f)):l(f)},[l,d]);return D.useLayoutEffect(()=>o.listen(p),[o,p]),D.useEffect(()=>x4(n),[n]),D.createElement(S4,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}const I4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lp=D.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:d,preventScrollReset:p,viewTransition:f}=t,y=jp(t,M4),{basename:x}=D.useContext(qr),T,A=!1;if(typeof d=="string"&&R4.test(d)&&(T=d,I4))try{let w=new URL(window.location.href),N=d.startsWith("//")?new URL(w.protocol+d):new URL(d),P=qn(N.pathname,x);N.origin===w.origin&&P!=null?d=P+N.search+N.hash:A=!0}catch{}let M=a4(d,{relative:a}),b=j4(d,{replace:o,state:s,target:l,preventScrollReset:p,relative:a,viewTransition:f});function v(w){n&&n(w),w.defaultPrevented||b(w)}return D.createElement("a",co({},y,{href:T||M,onClick:A||i?n:v,ref:r,target:l}))}),Dn=D.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:i="",end:o=!1,style:s,to:l,viewTransition:d,children:p}=t,f=jp(t,E4),y=Ro(l,{relative:f.relative}),x=Or(),T=D.useContext(Ep),{navigator:A,basename:M}=D.useContext(qr),b=T!=null&&F4(y)&&d===!0,v=A.encodeLocation?A.encodeLocation(y).pathname:y.pathname,w=x.pathname,N=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(w=w.toLowerCase(),N=N?N.toLowerCase():null,v=v.toLowerCase()),N&&M&&(N=qn(N,M)||N);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=w===v||!o&&w.startsWith(v)&&w.charAt(P)==="/",_=N!=null&&(N===v||!o&&N.startsWith(v)&&N.charAt(v.length)==="/"),R={isActive:z,isPending:_,isTransitioning:b},H=z?n:void 0,G;typeof i=="function"?G=i(R):G=[i,z?"active":null,_?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let J=typeof s=="function"?s(R):s;return D.createElement(Lp,co({},f,{"aria-current":H,className:G,ref:r,style:J,to:l,viewTransition:d}),typeof p=="function"?p(R):p)});var Pl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pl||(Pl={}));var Tu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tu||(Tu={}));function B4(e){let t=D.useContext(_o);return t||Ae(!1),t}function j4(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t,l=j0(),d=Or(),p=Ro(e,{relative:o});return D.useCallback(f=>{if(C4(f,r)){f.preventDefault();let y=n!==void 0?n:lo(d)===lo(p);l(e,{replace:y,state:a,preventScrollReset:i,relative:o,viewTransition:s})}},[d,l,p,n,a,r,e,i,o,s])}function L4(e){let t=D.useRef(El(e)),r=D.useRef(!1),n=Or(),a=D.useMemo(()=>N4(n.search,r.current?null:t.current),[n.search]),i=j0(),o=D.useCallback((s,l)=>{const d=El(typeof s=="function"?s(a):s);r.current=!0,i("?"+d,l)},[i,a]);return[a,o]}function F4(e,t){t===void 0&&(t={});let r=D.useContext(D4);r==null&&Ae(!1);let{basename:n}=B4(Pl.useViewTransitionState),a=Ro(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=qn(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=qn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Nl(a.pathname,o)!=null||Nl(a.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(e,t)=>{const r=D.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:l,...d},p)=>D.createElement("svg",{ref:p,...q4,width:a,height:a,stroke:n,strokeWidth:o?Number(i)*24/Number(a):i,className:["lucide",`lucide-${O4(e)}`,s].join(" "),...d},[...t.map(([f,y])=>D.createElement(f,y)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=Z("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=Z("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=Z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=Z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=Z("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=Z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=Z("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=Z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=Z("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=Z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=Z("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=Z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=Z("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=Z("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=Z("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=Z("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Z("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=Z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=Z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Z("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=Z("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=Z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Z("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=Z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Z("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=Z("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Z("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=Z("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Xr=["prose-sm","prose-base","prose-lg","prose-xl","prose-2xl"],Jp="/notes_computers_in_biology/assets/rk_logo-CWNyNbai.svg",p2=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isCollapsed:a,toggleCollapse:i,isArticlePage:o})=>{const s=({isActive:d})=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap
      ${d?"bg-ink text-paper border-ink dark:bg-crt-green dark:text-black dark:border-crt-green shadow-retro":"border-transparent hover:border-gray-400 dark:text-crt-green dark:hover:border-crt-green"}
      ${a?"justify-center":"justify-start"}`,l=(d=!1)=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap bg-white dark:bg-black/50
      ${d?"opacity-50 cursor-not-allowed border-transparent":"border-gray-200 dark:border-crt-dim hover:border-ink dark:hover:border-crt-green cursor-pointer"}
      ${a?"justify-center":"justify-start"}`;return h.jsxs("nav",{className:`hidden lg:flex border-r-2 border-ink dark:border-crt-green bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative
          ${a?"w-20":"w-64"}`,children:[h.jsx("button",{onClick:i,className:"absolute -right-3 top-20 w-6 h-6 bg-paper dark:bg-black border-2 border-ink dark:border-crt-green rounded-full flex items-center justify-center text-ink dark:text-crt-green hover:scale-110 transition-transform z-30",title:a?"Expand Sidebar":"Collapse Sidebar",children:a?h.jsx(Op,{size:14}):h.jsx(Y4,{size:14})}),h.jsx("div",{className:"p-4 border-b-2 border-ink dark:border-crt-green shrink-0",children:h.jsxs("div",{className:`border-4 border-ink dark:border-crt-green transition-all duration-300 bg-paper dark:bg-black flex items-center justify-center overflow-hidden
            ${a?"p-1 w-10 h-10 mx-auto rounded-full":"p-2 w-full h-auto rounded-none"}`,children:[h.jsx("img",{src:Jp,alt:"Lab Logo",className:"object-contain dark:invert transition-all duration-300 w-8 h-8"}),h.jsx("h1",{className:`font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green ml-2 transition-opacity duration-200
              ${a?"opacity-0 w-0 hidden":"opacity-100 block"}`,children:"Lab_Note"})]})}),h.jsxs("div",{className:"flex-1 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden",children:[o&&h.jsxs("div",{className:"mb-4 pb-4 border-b border-gray-300 dark:border-crt-dim mx-2 space-y-2",children:[h.jsx("div",{className:`font-mono text-[10px] uppercase text-pencil dark:text-crt-green/50 mb-2 transition-opacity ${a?"text-center":"px-3"}`,children:a?"Tool":"Reader Tools"}),h.jsxs("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:l(r===Xr.length-1),title:"Increase Font",children:[h.jsx($p,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_IN"})]}),h.jsxs("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:l(r===0),title:"Decrease Font",children:[h.jsx(Up,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_OUT"})]}),h.jsxs("button",{className:l(),onClick:()=>window.print(),title:"Print",children:[h.jsx(Yp,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PRINT_JOB"})]})]}),h.jsxs(Dn,{to:"/",className:s,title:"Library",children:[h.jsx(Gp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"LIBRARY"})]}),h.jsx("div",{className:"h-px bg-gray-300 dark:bg-crt-dim mx-4 my-2 shrink-0"}),h.jsxs(Dn,{to:"/media",className:s,title:"Media Logs",children:[h.jsx(Vp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"MEDIA_LOGS"})]}),h.jsxs(Dn,{to:"/about",className:s,title:"Personnel File",children:[h.jsx(Qp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PERSONNEL"})]})]}),h.jsxs("div",{className:"p-2 border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black shrink-0",children:[h.jsxs("button",{onClick:t,className:`w-full flex items-center p-2 font-mono text-xs border border-pencil dark:border-crt-green hover:bg-gray-200 dark:hover:bg-crt-dim dark:text-crt-green transition-colors
              ${a?"justify-center":"justify-start gap-4"}`,title:"Toggle Theme",children:[e?h.jsx(uo,{size:20,className:"shrink-0"}):h.jsx(q0,{size:20,className:"shrink-0"}),h.jsx("span",{className:`block whitespace-nowrap transition-opacity duration-200 ${a?"opacity-0 w-0 hidden":"opacity-100"}`,children:e?"DAY_SHIFT":"DARK_MODE"})]}),h.jsxs("div",{className:`mt-4 font-mono text-[10px] text-center text-pencil dark:text-crt-green/50 transition-opacity duration-200 ${a?"opacity-0 hidden":"opacity-100 block"}`,children:["v.3.1.0-dock",h.jsx("br",{}),"ReactOS_Shell"]})]})]})},m2=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isOpen:a,toggleOpen:i,setIsOpen:o,isArticlePage:s})=>{const l=p=>`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out backdrop-blur-md shadow-lg border-2
      ${p?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green scale-110 -translate-y-2":"bg-white/80 text-ink/80 border-transparent dark:bg-black/60 dark:text-crt-green dark:border-crt-green/30 hover:scale-105"}`,d="flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-crt-green/50 text-ink dark:text-crt-green shadow-sm active:scale-95 disabled:opacity-50";return h.jsxs("div",{className:"lg:hidden fixed bottom-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-end px-4",children:[h.jsxs("div",{className:`flex flex-col items-center p-3 mb-3 rounded-2xl bg-white/30 dark:bg-black/80 border border-white/40 dark:border-crt-green/40 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-bottom
            ${a?"opacity-100 scale-100 translate-y-0 visible pointer-events-auto":"opacity-0 scale-90 translate-y-10 invisible pointer-events-none"}`,children:[s&&h.jsxs("div",{className:"flex items-center gap-3 mb-4 pb-4 border-b border-gray-400/30 dark:border-crt-green/30 w-full justify-center",children:[h.jsx("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:d,children:h.jsx(Up,{size:16})}),h.jsxs("span",{className:"font-mono text-xs font-bold min-w-[30px] text-center dark:text-crt-green",children:["A",r+1]}),h.jsx("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:d,children:h.jsx($p,{size:16})}),h.jsx("div",{className:"w-px h-6 bg-gray-400/50 dark:bg-crt-green/50 mx-1"}),h.jsx("button",{className:d,onClick:()=>window.print(),children:h.jsx(Yp,{size:16})}),h.jsx("button",{className:d,children:h.jsx(L0,{size:16})})]}),h.jsxs("div",{className:"flex items-end gap-3",children:[h.jsx(Dn,{to:"/",className:({isActive:p})=>l(p),onClick:()=>o(!1),children:h.jsx(Gp,{size:20})}),h.jsx(Dn,{to:"/media",className:({isActive:p})=>l(p),onClick:()=>o(!1),children:h.jsx(Vp,{size:20})}),h.jsx(Dn,{to:"/about",className:({isActive:p})=>l(p),onClick:()=>o(!1),children:h.jsx(Qp,{size:20})}),h.jsx("div",{className:"w-px h-8 bg-ink/20 dark:bg-crt-green/20 mx-1"}),h.jsx("button",{onClick:()=>{t(),o(!1)},className:"flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-paper dark:bg-crt-dim dark:text-crt-green hover:scale-105 transition-transform",children:e?h.jsx(uo,{size:20}):h.jsx(q0,{size:20})})]})]}),h.jsx("button",{onClick:i,className:`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md shadow-lg border-2 transition-all duration-300 active:scale-90
            ${a?"bg-red-500 text-white border-red-600 rotate-180":"bg-ink/90 text-white border-white/20 dark:bg-crt-green/90 dark:text-black dark:border-crt-green animate-bounce"}`,"aria-label":a?"Close Dock":"Open Dock",children:a?h.jsx(qp,{size:24}):h.jsx(Hp,{size:24})})]})},f2=e=>{const t=Or(),[r,n]=D.useState(!1),[a,i]=D.useState(!1),o=t.pathname.startsWith("/articles/");D.useEffect(()=>{n(!!o),i(!1)},[t.pathname,o]);const s=()=>n(d=>!d),l=()=>i(d=>!d);return h.jsxs(h.Fragment,{children:[h.jsx(p2,{...e,isCollapsed:r,toggleCollapse:s,isArticlePage:o}),h.jsx(m2,{...e,isOpen:a,toggleOpen:l,setIsOpen:i,isArticlePage:o})]})},g2=({isDarkMode:e,toggleTheme:t})=>{const r=D.useRef(null),n=Or(),[a,i]=D.useState(2),o=n.pathname.startsWith("/articles/");return h.jsxs("div",{className:`h-screen w-screen flex flex-col lg:flex-row overflow-hidden transition-colors duration-300 ${e?"bg-crt-bg text-crt-green":"bg-paper text-ink"}`,children:[h.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10",style:{backgroundImage:e?"linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)":"radial-gradient(#666 1px, transparent 1px)",backgroundSize:e?"4px 4px":"20px 20px"}}),e&&h.jsx("div",{className:"fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"}),h.jsx("header",{className:`lg:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-black z-30 relative shrink-0 ${o?"hidden":"flex"}`,children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:Jp,alt:"Logo",className:"w-8 h-8 object-contain dark:invert"}),h.jsx("h1",{className:"font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green",children:"Lab_Note"})]})}),h.jsx(f2,{isDarkMode:e,toggleTheme:t,fontSizeIdx:a,setFontSizeIdx:i}),h.jsx("main",{className:"flex-1 relative overflow-hidden z-10 flex flex-col h-full",children:h.jsx("div",{ref:r,className:"flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto pb-24 lg:pb-0",children:h.jsx(k4,{context:{fontSizeIdx:a,setFontSizeIdx:i}})})})]})},y2={id:"RK-2025-002",title:"Syllabus",date:"2026-07-05",tags:["#syllabus","#topics","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"",content:`
  <article>

<h2>Unit-I Fundamentals of Computer Operations & Data Tools</h2>

  
  <h3>Computer Architecture & Data Integrity:</h3>
  <ul>
  <li>Core hardware components (CPU, RAM, storage mediums, etc.)&#10004;</li> 
  <li>the role of computers in the pharmaceutical industry (ELNs, LIMS)&#10004;;</li>
  <li>introduction to data integrity and ALCOA+ principles.&#10004;</li>
  </ul>
  
  <h3>Operating Systems & Linux Basics:&#10004;</h3> 
  <ul>
  <li>Navigating operating systems (Windows vs. Linux);&#10004;</li> 
  <li>utilizing the Linux Command Line Interface (CLI) for directory navigation (cd, ls, mkdir)&#10004;</li>
  <li>basic text processing (cat, head, grep) for handling large biological text files.&#10004;</li>
  </ul>

  
    <h3>Spreadsheet Competency for Lab Data:</h3>
  <ul>
    <li>Advanced data entry, &#10004;</li>
    <li>formatting tables,&#10004; </li>
    <li>using basic statistical formulas (mean, standard deviation), </li>
    <li>absolute cell referencing, creating standard plots (bar, scatter, line), </li>
    <li>data sorting/filtering mechanisms.&#10004;</li>
  </ul>

    <h3>Python Programming Basics:</h3>
  <ul>
    <li>Introduction to Python syntax and IDEs &#10004;; </li>
    <li>core data types (strings &#10004;, integers &#10004;, floats) &#10004;</li>
    <li>basic data structures (lists &#10004;, dictionaries); </li>
    <li>implementing control flow (if statements, for loops); </li>
    <li>writing scripts to open and parse simple text or data files.</li>
  </ul>

  <h3>Introduction to R for Biostatistics:</h3> 
  <ul>
  <li>R syntax basics; </li>
  <li>understanding vectors and data frames. </li>
  </ul>

<h2>Unit-II Foundations of Bioinformatics & Structure Databases</h2>
<h3>Introduction to Bioinformatics:</h3> 
<ul>
  <li>Definition, scope, and computational handling of biological data </li>
  <li>representation of nucleic acid and protein sequences (FASTA format).</li>
</ul>

<h3>Biological Databases (NCBI, EBI, DDBJ):</h3> 
<ul>
  <li>Introduction to primary nucleotide databases (GenBank, EMBL, DDBJ) </li>
  <li>protein sequence databases (UniProt, Swiss-Prot) </li>
  <li>search syntax, accession numbers, and filtering search results</li>
</ul>

<h3>Sequence Alignment Basics:</h3> 
<ul>
  <li>Concept of homology, orthology, and paralogy </li>
  <li>understanding local vs. global alignment </li>
  <li>practical execution of Pairwise Sequence Alignment using BLAST (BLASTn, BLASTp) </li>
  <li>interpretation of E-values and bit scores</li>
</ul>

<h3>Structural Bioinformatics Basics:</h3>  
<ul>
  <li>Introduction to the Protein Data Bank (PDB); </li>
  <li>anatomy of a PDB file; </li>
  <li>introduction to basic standalone or web-based molecular visualization software (e.g., PyMOL, Chimera, or Jmol) for viewing three-dimensional macromolecular structures.</li>
</ul>
  </article>
  `},v2=Object.freeze(Object.defineProperty({__proto__:null,default:y2},Symbol.toStringTag,{value:"Module"})),Nu="/notes_computers_in_biology/assets/f003_001-lN8lni_J.png",Mu="/notes_computers_in_biology/assets/f003_002-CRV5YUe7.png",Eu="/notes_computers_in_biology/assets/f003_003-Dn47taTF.png",Pu="/notes_computers_in_biology/assets/f003_004-dAwYEpxX.png",b2={id:"RK-2026-003",title:"Computer Hardware: CPU, RAM, and Storage",date:"2026-07-06",tags:["#Hardware, #CPU, #RAM, #Storage"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>
  <h2><strong>1. Introduction</strong></h2>

  <section>
    <p> Today’s breakthroughs in drug discovery, genomics, and molecular modeling happen just as often <dfn><em>in silico</em></dfn> (computational simulations performed on a computer) as they do <dfn><em>in vitro</em></dfn> (experiments conducted in a test tube or controlled environment). Whether you are running molecular dynamics simulations in software like GROMACS, analyzing genomic sequences, or processing gigabytes of mass spectrometry data, your computer is your most heavily used piece of lab equipment.</p>

    <p>However, many life science students treat their computers as mysterious black boxes. Understanding core hardware components, cables, and ports is no longer just for IT professionals—it is a critical skill for optimizing your research workflows, protecting your data, and communicating effectively with your university's <abbr title="High-Performance Computing">HPC</abbr> admins.</p>

  </section>

  <section>
    <h2><strong>2. CPU, RAM, and Storage</strong></h2>
    <p>Think of these three components as the central dogma of your computer’s biology. Just as DNA is transcribed to RNA and translated to proteins, data moves from Storage, into <abbr title="Random Access Memory">RAM</abbr>, and is processed by the <abbr title="Central Processing Unit">CPU</abbr>.</p>

  
    <section>
      <h3><strong>2.1. The CPU (Central Processing Unit): The Master Enzyme</strong></h3>
      <p>The <abbr title="Central Processing Unit">CPU</abbr> is the brain of the computer, acting much like a catalyst or enzyme in a biochemical reaction. It dictates how fast computational "reactions" occur.</p>

      <p>To understand how hardware affects your calculations, think of core count and clock speed like a team of workers: the core count represents the number of workers available, while the clock speed determines how quickly each individual worker completes their tasks. [i.e. (Figure 1) if i have 6 cores then assume we have 6 workers that can perform the tasks at 3.0 GHz speed] </p>

    <figure class="science-figure" data-id="Figure: 1" data-clean-src="${Nu}"> 
            <img src="${Nu}" alt="CPU consumer grade" />
            <figcaption>Windows Task Manager performance tab displaying an AMD Ryzen 5 4600H CPU with 6 cores, 12 logical processors (threads), and a current speed of 3.0 GHz. </figcaption> 
          </figure>
      
      <ul>
      <li><strong>Clock Speed (The Turnover Number):</strong> This dictates how fast a single CPU core can perform a task, operating exactly like an enzyme's "k_cat". Just as one incredibly efficient catalase molecule can rapidly process 40 million hydrogen peroxide molecules a second, a high clock speed allows a single CPU core to execute billions of instructions per second. This raw processing speed is vital for intensive, single-threaded tasks—like running specific statistical scripts in R or Python—where the "reaction rate" of a single core is the main bottleneck.
      </li>
      <li>
      <strong>Core Count (The Enzyme Concentration):</strong> Modern CPUs are built with multiple processing cores. Think of this as increasing your total enzyme concentration. While clock speed measures how fast one CPU core (enzyme) works, your core count determines how many cores (enzymes) are working side-by-side. Increasing your core count allows your computer to process multiple<b> independent</b> tasks simultaneously, just as a higher concentration of catalase allows a cell to tackle a massive influx of toxins across multiple locations all at once. Higher core count allows CPU to tackle multiple tasks at once.</li>
      </ul>

      <p>Because of heat and power limitations, the physical trade-off for adding more cores is typically having to lower the overall clock speed. CPU manufacturers design different chips to cater to either extreme parallel density or high-speed sequential needs.</p>

      <p><strong>2.1.1. Parallel Computations (Rely on Core Count)</strong></p>
      <p>In highly parallel workloads, tasks can be divided up and executed simultaneously by multiple "CPU cores".</p>
      <ul>
        <li><strong>Parallel Processing:</strong> Imagine you have a stack of 1,000 multiple-choice exams to grade. Grading one student's exam doesn't depend on the results of any other student; they are completely independent tasks. If one teacher (a single core) takes 1,000 minutes to grade the stack, hiring 10 teachers (multiple cores) to split the pile allows them to work simultaneously, finishing the exact same job in just 100 minutes. In computing, when tasks don't depend on each other, having more cores drastically reduces the time it takes to process the data. Basically parallel processing allows you to get more done in less time by utilizing multiple cpu cores at once.</li>
      </ul>

      <p><strong>2.1.2. Sequential Computations (Rely on Clock Speed)</strong></p>
      <p>In sequential workloads, each step of the calculation relies on the result of the previous step, meaning tasks must be done one after another. Here, you cpu cannot benefit from additional cores.</p>
      <ul>
        <li> In particle simulations (common in structural mechanics or molecular dynamics), calculating a particle's new position affects all subsequent calculations. This sequential dependency means you cannot simply add more cores to speed up the job—the extra cores will just sit idle. Instead, higher clock speeds directly reduce the time it takes to complete each consecutive step, accelerating the entire workflow.</li>
      </ul>

      <p><strong>2.1.3 Real-World Application: Choosing the Right CPU</strong></p>
      <p>Here is a real comparison of two modern processors from the 5th Generation AMD EPYC server lineup that illustrates this divide:</p>
      <ul>
        <li><strong>The High Core Count Option (AMD EPYC 9965):</strong> This processor features a staggering 192 physical cores and 384 threads, but it operates at a lower 2.25 GHz base clock speed (boosting up to 3.70 GHz). It is built for maximum compute density. You would choose this processor for running massive virtualization clusters, cloud platforms, or heavily parallel AI training where you need as many "workers" as possible.</li>
        <li><strong>The High Clock Speed Option (AMD EPYC 9575F):</strong> The "F" designates a high-frequency model. This processor reduces the core count to 64 cores, but significantly increases the clock speeds to a 3.30 GHz base and a massive 5.00 GHz maximum boost. You would choose this processor for sequential engineering simulations, high-frequency databases, or as a host for GPU-native workloads where the CPU cores need to feed data to graphics cards as fast as physically possible without bottlenecking.</li>
      </ul>
    </section>

    <section>
      <h3><strong>2. RAM (Random Access Memory): Your Laboratory Workbench</strong></h3>
      <p><abbr title="Random Access Memory">RAM</abbr> is your system's volatile, short-term memory.</p>
      <p><strong>The Workbench:</strong> </p>
      <p>Imagine your physical lab bench. If you have a tiny bench (low RAM), you can only keep a few reagents out at a time. If you need something else, you have to walk down the hall to the storage room (the hard drive), which drastically slows down your experiment. High RAM (32GB, 64GB, or even 192GB in servers) gives you a massive workbench, allowing you to load entire genome sequences or large chemical libraries into active memory for instantaneous access.</p>
        <p><strong>The Volatility Catch (Data Loss):</p></strong> <p>RAM is strictly temporary workspace. It requires continuous electrical power to hold data. If your computer crashes or the power goes out in the building, the "workbench" is instantly wiped clean. Any structural models, simulation frames, or statistical scripts not yet saved to your permanent storage (your SSD/HDD) will be permanently lost.</p>
        <p><strong>ECC RAM (Error-Correcting Code):</p></strong> <p>For pharmacology and clinical research, data integrity is paramount. Enterprise workstations and servers use <abbr title="Error-Correcting Code">ECC</abbr> RAM, which actively detects and corrects single-bit memory errors. Without it, "silent data corruption" can alter a sequence or a decimal point in a data files without you ever knowing.</p>
 
    </section>

    <section>
      <h3><strong>3. Storage Mediums (SSD vs. HDD): The Cold Storage</strong></h3>
      <p>Storage is where your data lives permanently when the power is off.</p>
      <ul>
        <li><strong>HDD (Hard Disk Drive):</strong> The -80°C freezer of computing. HDDs use spinning magnetic platters. They are cheap and offer massive capacities, making them perfect for archiving terabytes of raw, unanalyzed sequencing data or past experiments that you don't need to access daily.</li>
        <li><strong>SSD (Solid State Drive):</strong> The 4°C fridge right next to your bench. SSDs (especially modern NVMe PCIe SSDs) use flash memory and have no moving parts, making them exponentially faster than HDDs. When you are actively querying large databases or booting up heavy software like MATLAB, an SSD is essential to prevent bottlenecking your workflow.</li>
      </ul>
    </section>
  </section>



  <section>
    <h2><strong>3. Essential Cables and Ports</strong></h2>
    <p>A powerful workstation is useless if you can't connect it to your displays, external databases, or specialized lab equipment. Recognizing your ports ensures you don't bottleneck your data transfer.</p>

    <section>
      <h3><strong>3.1 Data and Peripheral Ports</strong></h3>
      <ul>
        <li><strong>USB Type-A:</strong> The classic, rectangular port. Useful for basic peripherals like mice, keyboards, or older flash drives. Looks like type c but internally it has white colored pins instead of blue.</li>
            <figure class="science-figure" data-id="Figure: 2" data-clean-src="${Mu}"> 
            <img src="${Mu}" alt="USB ports" />
            <figcaption>Various ports found in modern computers. <a href="https://www.usbmemorydirect.com/blog/thunderbolt-3-vs-us-c/" target="_blank">Source</a> </figcaption> 
          </figure>
      
        <li><strong>USB Type-C &amp; Thunderbolt:</strong> The modern, oval-shaped port. Thunderbolt ports are critical for biologists. They transfer data at lightning speeds (up to 40 Gbps), which is exactly what you need when migrating a 500GB dataset from a sequencer to your local machine. They can also act as docking station hubs, delivering power, video, and data through a single cable.</li>
      </ul>
    </section>

      
<section>
  <h3><strong>3.2 Video Display Ports</strong></h3>
  <p>Pharmacology and structural biology require immense screen real estate. You will often need one screen for reading a research paper, another for your data spreadsheet, and a third for a 3D molecular viewer.</p>
            <figure class="science-figure" data-id="Figure: 3" data-clean-src="${Eu}"> 
            <img src="${Eu}" alt="" />
            <figcaption>Comparison of common video display ports and cable connectors, from older analog standards (VGA) to modern digital multi-purpose interfaces (USB-C). <a href="https://lanberg.eu/news/how-to-pick-the-right-standard-to-fully-unlock-your-monitor-console-tv-or-laptop" target="_blank">Source</a></figcaption> 
          </figure>
   
      
  <ul>
    <li><strong>VGA:</strong> An older, legacy analog standard typically featuring a blue connector. While largely obsolete for modern, high-resolution screens, you may still encounter it on older laboratory equipment or legacy projectors.</li>
    <li><strong>DVI:</strong> A bulky connector that served as a transition between analog and digital standards. It is less common today but still frequently found on older monitors used for standard office setups.</li>
    <li><strong>HDMI:</strong> The standard for most basic monitors. Good for everyday tasks, but can be limited in refresh rates at very high resolutions.</li>
    <li><strong>DisplayPort (DP):</strong> The preferred standard for high-end, high-resolution monitors. If you are scrutinizing the electron density map of a protein structure in sharp 4K resolution, DisplayPort ensures you get the most accurate visual fidelity.</li>
    <li><strong>USB-C:</strong> A modern, compact, and highly versatile connector. It is increasingly popular for laptops because it can simultaneously carry high-resolution video (via DisplayPort Alt Mode), transfer data, and deliver power, significantly reducing cable clutter on your workbench.</li>
  </ul>
</section>
    <section>
      <h3><strong>3.3 Networking Infrastructure</strong></h3>
      <p>When working with large datasets, Wi-Fi is often too slow and unstable. You will need a hardwired connection to access your university's shared servers or High-Performance Computing (<abbr title="High-Performance Computing">HPC</abbr>) clusters.</p>
      <ul>
      <figure class="science-figure" data-id="Figure: 3" data-clean-src="${Pu}"> 
            <img src="${Pu}" alt="Ethernet Connection" />
            <figcaption>RJ45 (Ethernet) port and cable. <a href="https://techterms.com/definition/ethernet" target="_blank">Source</a></figcaption> 
          </figure>
        <li><strong>RJ45 (Ethernet):</strong> The standard networking port. You should pair this with a <strong>Cat6 or Cat6a cable</strong> (which supports up to 10 Gigabit speeds). This is the "artery" that connects your local machine to the institutions main data centers and internet.</li>
      </ul>
    </section>
  </section>



</article>



  `},w2=Object.freeze(Object.defineProperty({__proto__:null,default:b2},Symbol.toStringTag,{value:"Module"})),x2={id:"RK-2026-004",title:"Operating systems: Windows, vs Linux",date:"2026-07-07",tags:["#OperatingSystems","#Windows","#Linux"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`
<article>
  <h2>1. Introduction </h2>
  <h3>1.1 What is an Operating System?</h3>
  <p>An operating system is a master control program that manages a computer's hardware components and provides a standardized environment for application software to run. It acts as an essential intermediary. A computer relies on the OS to govern hardware interaction seamlessly.</p>
  <p>At its core, the operating system abstracts the complex, low-level realities of physical circuits, memory chips, and storage drives. It transforms raw computing power into predictable resources (like files, windows, and network connections) that software developers can easily build upon and users can intuitively interact with.</p>

 
  <h3>1.2 The Core Functions of an Operating System</h3>
  <p>To keep a computing system stable, efficient, and secure, the operating system continuously performs several fundamental coordination tasks:</p>
  
  <h4>1.2.1 Processor Management (CPU Scheduling)</h4>
  <p>The OS decides which applications get access to the central processing unit (CPU), when, and for how long. Through a process called time-slicing, the OS rapidly switches between different tasks—such as updating a graphical interface, executing a background calculation, and listening to network traffic—creating the illusion that multiple programs are running simultaneously.</p>

  <h4>1.2.2 Memory Management</h4>
  <p>Every active program requires space in the system's Random Access Memory (RAM). The OS allocates specific memory blocks to applications when they launch and reclaims that space when they close. Crucially, it enforces isolation: it prevents one program from accidentally or maliciously reading or overwriting the memory space allocated to another program. If physical RAM runs low, the OS utilizes "virtual memory," temporarily swapping data to the hard drive to keep the system running.</p>

  <h4>1.2.3 File System Management</h4>
  <p>Data on a physical storage drive is just a massive sequence of binary ones and zeros. The operating system organizes this raw data into a logical structure of files and directories. It tracks where data is physically stored, manages read/write permissions, and ensures data integrity when files are created, modified, or deleted.</p>

  <h4>1.2.4 Device and Input/Output (I/O) Management</h4>
  <p>Computers must interact with an array of external hardware, including keyboards, mice, printers, network cards, and specialized laboratory sensors. The OS uses specialized software modules called device drivers to translate universal system commands into the specific hardware language required by each device.</p>

  <h4>1.2.5 Security and Access Control</h4>
  <p>Modern operating systems are inherently multi-user and multi-tasking. The OS enforces authentication (passwords, biometrics) and maintains strict authorization matrices to ensure that users and background applications can only access the specific resources, files, and hardware components they are explicitly permitted to use.</p>


  <h2>2. Famous Operating Systems</h2>
  <p>While hundreds of specialized operating systems exist, the global technology landscape is heavily dominated by a few major platforms:</p>
  
  <ul>
    <li><strong>Microsoft Windows:</strong> Mostly found in personal and corporate desktop computing, known for its massive software compatibility and user-friendly interface.</li>
    <li><strong>macOS:</strong> Apple's proprietary desktop operating system, known for its tight integration with custom hardware, robust creative software ecosystem, and Unix-based stability.</li>
    <li><strong>Linux:</strong> An <b>open-source</b> family of operating systems built on the Linux kernel. It is available in various distributions (such as <a href="https://ubuntu.com/" target="_blank">Ubuntu</a>, <a href="https://fedoraproject.org/" target="_blank">Fedora</a>, and <a href="https://www.debian.org/" target="_blank">Debian</a>) and dominates servers, supercomputers, and embedded systems.</li>
    <li><strong>Android:</strong> Developed by Google and based on a modified Linux kernel, <a href="https://source.android.com/docs" target="_blank">Android</a> is the most widely deployed operating system in the world, powering billions of smartphones and tablets.</li>
    <li><strong>iOS:</strong> Apple's proprietary mobile operating system, engineered exclusively for iPhones, prioritizing high optimization, smooth performance, and tight security controls.</li>
  </ul>


  <h2>3. The Open Source vs. Closed Source Debate</h2>
  <p>The philosophical and structural divide in the operating system world centers around how the underlying code is licensed and distributed:</p>

  <h3>3.1 Closed Source (Proprietary)</h3>
  <p>In a closed-source model (e.g., Windows, macOS), the source code is a closely guarded corporate secret. Users buy a license to use the compiled, runnable software, but they cannot view, modify, or redistribute the internal engineering. <strong>Advantages</strong> include highly predictable user experiences, centralized corporate accountability, and dedicated customer support. <strong>Disadvantages</strong> include licensing costs, lack of customization, and complete reliance on the vendor to fix security flaws or bugs.</p>

  <h3>3.2 Open Source</h3>
  <p>In an open-source model (e.g., Linux), the source code is publicly accessible to anyone. Users are free to inspect the code, modify it to suit their specific requirements, and share their improvements with the world. <strong>Advantages</strong> include complete transparency, zero licensing costs, freedom from vendor lock-in, and rapid security patching driven by a massive global community. <strong>Disadvantages</strong> can include a steeper learning curve and a lack of centralized commercial support for mainstream users.</p>


  <h2>4. Windows vs. Linux</h2>
  <p>The choice between Windows and Linux often depends on the specific demands of the workload and the technical environment:</p>

  <table class="science-table" data-id="os-comparison">
    <caption>Table 1: Key architectural and functional differences between Windows and Linux.</caption>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Microsoft Windows</th>
        <th>Linux</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Core Philosophy</strong></td>
        <td>Commercial product focused on ease of use, backward compatibility, and desktop productivity.</td>
        <td>Modular, customizable environment engineered for stability, control, and efficiency.</td>
      </tr>
      <tr>
        <td><strong>File System Structure</strong></td>
        <td>Uses drive letters (C:, D:) with the NTFS file system format. Case-insensitive.</td>
        <td>Unified tree structure starting from a root directory (/). Case-sensitive.</td>
      </tr>
      <tr>
        <td><strong>User Interface</strong></td>
        <td>Tightly integrated Graphical User Interface (GUI). Command line (PowerShell/CMD) is secondary.</td>
        <td>The Command Line Interface (CLI) is primary and highly powerful. GUIs are modular and interchangeable.</td>
      </tr>
      <tr>
        <td><strong>Hardware Efficiency</strong></td>
        <td>Higher overhead; requires significant system resources just to run the base desktop environment.</td>
        <td>Highly lightweight; can be stripped down to run without a GUI, maximizing hardware power for data processing.</td>
      </tr>
    </tbody>
  </table>


  <h2>5. How Linux is Used Everywhere—and Why</h2>
  <p>While Windows rules the personal desktop, Linux quietly runs the rest of modern civilization. It powers the vast majority of web servers, cloud computing networks (like AWS and Azure), financial stock exchanges, smart home appliances, connected automobiles, and 100% of the world's top 500 fastest supercomputers.</p>
  <p>Linux achieved this complete ubiquity due to several distinct architectural advantages:</p>

  <h3>5.1. Modular Scalability</h3>
  <p>Linux is uniquely modular. A developer can strip the operating system down to a few megabytes to fit onto a tiny internet-of-things (IoT) smart thermostat, or scale it up to manage thousands of high-performance CPU cores and petabytes of RAM in a massive server farm. This flexibility is unmatched by proprietary operating systems.</p>

  <h3>5.2. Extreme Stability and Uptime</h3>
  <p>Linux systems are engineered to run indefinitely without needing a reboot. System updates, driver modifications, and configuration changes can almost always be applied while the system remains live. In environments where a few minutes of downtime can mean millions of dollars in lost revenue, Linux's bulletproof stability is critical.</p>

  <h3>5.3. The Foundation of Cloud and Containerization</h3>
  <p>Modern cloud infrastructure relies heavily on isolation technologies like Docker containers and Kubernetes orchestration. These technologies are built directly on native features of the Linux kernel (such as namespaces and cgroups). Because Linux can spin up lightweight, isolated virtual environments in milliseconds, it has become the default language of modern web architecture and automated data pipelines.</p>
</article>



  `},k2=Object.freeze(Object.defineProperty({__proto__:null,default:x2},Symbol.toStringTag,{value:"Module"})),S2={id:"RK-2026-005",title:"Application of linux and its basic commands",date:"2026-07-08",tags:["#Linux","#CommandLine","#Terminal"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>

<h2>Practical exercise</h2>
<h3>Introduction</h3>
<p>wsl2 installation guide is here: 
<p><a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank">Installation Guide</a></p></p>
<iframe width="600" height="400" src="https://www.youtube.com/embed/JzSZhdptuTs" title="How to Install WSL2 on Windows 11 (Windows Subsystem for Linux) (2026)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<p>The best way to master the Linux terminal is to use it. In this practical, we will build a real "notes" file. The trick? The content you are typing into the file will be the definitions of the exact commands you are actively using to create it.</p>

<p>Open your WSL2 terminal and follow these steps sequentially.</p>


<h3>The Practical Exercise</h3>

<b>Step 1: Check Your Location</b>
<p>Before creating a folder for your notes, check exactly where you are currently located in the system.</p>
<pre>pwd</pre>

<b>Step 2: Create a Study Folder</b>
<p>Let's create a dedicated, organized folder for your Linux notes and move inside it.</p>
<pre>mkdir linux_study_guide</pre>
<pre>cd linux_study_guide</pre>

<b>Step 3: Create the Notes File and a Practice File</b>
<p>We will create an empty file to hold your notes, and a second dummy file just so we have something to practice deleting later.</p>
<pre>touch command_notes.txt</pre>
<pre>touch practice_file.txt</pre>

<b>Step 4: Verify File Creation</b>
<p>List the files in a detailed format to ensure both empty files were successfully created.</p>
<pre>ls -l</pre>

<b>Step 5: Write Your First Notes</b>
<p>Now, let's use the "cat" command to write notes about the commands we just executed. Type the command below, write the lines of text, and press <b>Ctrl + D</b> when you are finished to save and exit.</p>
<pre>cat > command_notes.txt</pre>
<p>Type this exact text:</p>
<p>"pwd: prints the absolute path of the current working directory."</p>
<p>"mkdir: makes a new directory."</p>
<p>"cd: changes the current directory."</p>
<p>"touch: creates a new, empty file."</p>

<b>Step 6: Append More Notes</b>
<p>Let's add the definitions for "ls" and "cat" to the bottom of the file without erasing the valuable notes we just wrote.</p>
<pre>cat >> command_notes.txt</pre>
<p>Type this text, then press <b>Ctrl + D</b>:</p>
<p>"ls: lists files and folders."</p>
<p>"cat: creates, views, and concatenates text files."</p>

<b>Step 7: Read Your Notes</b>
<p>Let's read the study guide you just wrote. Use "more" to see the text printed in the terminal, and then use "less" to open it in the scrolling viewer (remember to press <b>q</b> to exit "less").</p>
<pre>more command_notes.txt</pre>
<pre>less command_notes.txt</pre>

<b>Step 8: Backup Your Notes</b>
<p>Your notes are valuable, so let's practice backing them up. Create a backup folder and copy your notes file into it.</p>
<pre>mkdir backups</pre>
<pre>cp command_notes.txt backups/</pre>

<b>Step 9: Rename Your File</b>
<p>Let's rename your working notes file to something more official using the move command.</p>
<pre>mv command_notes.txt official_linux_guide.txt</pre>

<b>Step 10: Clean Up the Workspace</b>
<p>Remember that "practice_file.txt" we made in step 3? Let's practice permanently removing it.</p>
<pre>rm practice_file.txt</pre>
<p>Now, let's say you want to save space and no longer need the backup folder. Delete the directory and everything inside it recursively.</p>
<pre>rm -r backups</pre>

<b>Step 11: Append the Final Commands</b>
<p>You just learned how to move and remove files! Let's quickly append those definitions to your newly renamed guide.</p>
<pre>cat >> official_linux_guide.txt</pre>
<p>Type this text, then press <b>Ctrl + D</b>:</p>
<p>"cp: copies files or directories."</p>
<p>"mv: moves or renames files."</p>
<p>"rm: permanently removes files or directories."</p>

<b>Step 12: Review Your History</b>
<p>Finally, print out the log of every command you just typed to accomplish this entirely terminal-based workflow.</p>
<pre>history</pre>

<b>step 13: save your history in hist.txt</b>
<p>use the > to redirect stdin to a file:</p>
<pre>history > hist.txt</pre>
<p>use the "less" and "more" commands to view file and edit it using "nano":</p>
<pre>less hist.txt</pre>
<pre>nano hist.txt</pre>
</article>



  `},A2=Object.freeze(Object.defineProperty({__proto__:null,default:S2},Symbol.toStringTag,{value:"Module"})),T2={id:"RK-2026-006",title:"Linux and its basic commands",date:"2026-07-08",tags:["#Linux","#CommandLine","#Terminal"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>
<h2>pwd</h2>
<h3>Introduction</h3>
<p>The "pwd" command stands for "print working directory". It outputs the absolute, full path of the current directory you are currently in. This is highly useful when navigating complex file systems so you always know exactly where you are.</p>

<h3>How to use</h3>
<p>Simply type the command in your terminal and press Enter:</p>
<pre>pwd</pre>
<p>Your terminal will return a path that looks something like <code>/home/username/basic_linux_commands</code>.</p>

<hr>

<h2>ls</h2>
<h3>Introduction</h3>
<p>The "ls" command is used to list the files and directories within your current working directory. It is the best way to see the contents of a folder.</p>

<h3>How to use</h3>
<p>To list the standard files and folders in your current location:</p>
<pre>ls</pre>
<p>To see a more detailed list that includes file permissions, ownership, size, and modification date, use the <code>-l</code> (long format) flag:</p>
<pre>ls -l</pre>

<hr>

<h2>mkdir</h2>
<h3>Introduction</h3>
<p>The "mkdir" (make directory) command allows you to create new folders in your Linux file system. You used this earlier to create your <code>basic_linux_commands</code> folder.</p>

<h3>How to use</h3>
<p>Provide the name of the directory you want to create directly after the command:</p>
<pre>mkdir my_new_folder</pre>

<hr>

<h2>touch</h2>
<h3>Introduction</h3>
<p>While originally designed to update the timestamp (access and modification times) of a file, the "touch" command is most commonly used by beginners to quickly create a brand new, empty file without opening a text editor.</p>

<h3>How to use</h3>
<p>To create a blank text file:</p>
<pre>touch empty_file.txt</pre>

<hr>

<h2>cp</h2>
<h3>Introduction</h3>
<p>The "cp" command stands for copy. It is used to copy files or entire directories from one location to another, leaving the original file intact.</p>

<h3>How to use</h3>
<p>To copy a single file, type the source file name followed by the new destination/name:</p>
<pre>cp empty_file.txt backup_file.txt</pre>
<p>To copy a directory and all of its contents, you must add the <code>-r</code> (recursive) flag:</p>
<pre>cp -r my_new_folder backup_folder</pre>

<hr>

<h2>mv</h2>
<h3>Introduction</h3>
<p>The "mv" (move) command serves two distinct purposes: moving a file or directory from one location to another, and renaming files or directories.</p>

<h3>How to use</h3>
<p>To rename a file, simply move it to the same location with a new name:</p>
<pre>mv backup_file.txt renamed_file.txt</pre>
<p>To move a file into a specific directory:</p>
<pre>mv renamed_file.txt backup_folder/</pre>

<hr>

<h2>rm</h2>
<h3>Introduction</h3>
<p>The "rm" (remove) command is used to permanently delete files and directories. <strong>Warning:</strong> Linux does not have a "Recycle Bin" by default on the command line; once you remove a file using <code>rm</code>, it is gone permanently.</p>

<h3>How to use</h3>
<p>To delete a single file:</p>
<pre>rm empty_file.txt</pre>
<p>To delete a directory and all of the files inside of it, you must use the recursive flag (<code>-r</code>):</p>
<pre>rm -r backup_folder</pre>

<h2>Cat</h2>
<h3>Introduction</h3>
<p>The "cat" command (short for concatenate) is one of the most frequently used commands in Linux and Unix-like operating systems. While its original purpose was to link multiple files together, it is most commonly used today to quickly read, create, and append text files directly from the command line.</p>

<p>Since you are using WSL2 (Windows Subsystem for Linux), you have a full Linux environment running right inside Windows. The "cat" command works exactly the same here as it would on a native Linux machine.</p>

<h3>How to use</h3>
<b>Step 1: Open Your WSL2 Terminal</b>
<p>Launch your WSL2 distribution by opening the Ubuntu app or opening Windows Terminal.</p>

<p>To open linux in windows terminal type:</p>
<pre>bash</pre>


<b>Step 2: Create a New Folder</b>

<p> Type the following command and press Enter:</p>

<p>You can use "mkdir" to create a folder and store your practical attempt there.</p>
<pre>mkdir basic_linux_commands</pre>

<p> enter the folder.</p>
<pre>cd basic_linux_commands</pre>

<b>Step 3: Create a New File</b>

<p>To create a new text file, you can use the "cat" command followed by the ">" operator and the desired filename. For example:</p>
<pre>cat > Navigation_commands.txt</pre>

<p>The cursor will drop to next line where you can type your text. Here, we will type one of the previously learned command and it's use case.</p>
<p>"cd: to navigate between directories"</p>

<b>Step 4: verify if the file was created</b>
<p>cat command can let you view the file. Such use does not require ">" operator otherwise the command is same as previous one.</p>
<p>To view the contents of the file you just created, type:</p>
<pre>cat Navigation_commands.txt</pre>
<p>If file is created the text written inside will be printed on the terminal.</p>

<b>step 5: Append to the File</b>
<p></p>To add more content to the existing file, you can use the "cat" command with the ">>" operator. For example:</p>
<pre>cat >> Navigation_commands.txt</pre>
<p>Now you can add more commands and their use cases. For example, let's add the "ls" command:</p>
<p>"ls: to list files and directories"</p>

<b>Step 6: Verify the Changes</b>
<p>To view the updated contents of the file, type:</p>
<pre>cat Navigation_commands.txt</pre>
<p>You should see both the "cd" and "ls" commands along with their descriptions.</p>

<h2>less</h2>
<h3>Introduction</h3>
<p>The "less" command is a terminal pager program used to view the contents of a text file one screen at a time. It is highly efficient for reading large files because it does not need to load the entire file into memory before displaying it. Unlike reading a file with "cat", "less" allows you to scroll both forwards and backwards through the document.</p>

<h3>How to use</h3>
<p>To open a file with less, type the command followed by the file name:</p>
<pre>less Navigation_commands.txt</pre>
<p>Once the file is open, you can use the up and down arrow keys to scroll through the text line by line, or the Spacebar to move down a full page. When you are finished reading, press the <code>q</code> key to quit and return to your standard terminal prompt.</p>

<hr>

<h2>more</h2>
<h3>Introduction</h3>
<p>The "more" command is an older, simpler pager utility that is very similar to "less". It also allows you to view text files one page at a time so that the text doesn't rush past your screen. However, it is more limited because it primarily only allows you to scroll forward through the document.</p>

<h3>How to use</h3>
<p>To view a file using more, type:</p>
<pre>more Navigation_commands.txt</pre>
<p>Press the Spacebar to jump forward to the next page of text, or the Enter key to move forward one line at a time. Press the <code>q</code> key to quit the viewer.</p>

<hr>

<h2>history</h2>
<h3>Introduction</h3>
<p>The "history" command is used to display the list of commands you have previously executed in your terminal. It is an incredibly helpful tool when you need to remember a complex command you typed earlier, figure out what actions you took in the past, or quickly rerun previous instructions.</p>

<h3>How to use</h3>
<p>To view your command history, simply type:</p>
<pre>history</pre>
<p>Your terminal will output a numbered list of your past commands. To quickly rerun a specific command from that list without retyping it, you can use an exclamation mark (<code>!</code>) immediately followed by the command's number. For example, to run the 15th command in your history, type:</p>
<pre>!15</pre>

</article>



  `},C2=Object.freeze(Object.defineProperty({__proto__:null,default:T2},Symbol.toStringTag,{value:"Module"})),N2={id:"RK-2026-007",title:"Data and data types",date:"2026-07-09",tags:["#data","#datatypes"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>
<h2>Introduction</h2> 

<p>In our modern world, we frequently hear that "data is the new oil." But beneath the buzzwords and the server farms, what exactly is data? At its most fundamental level, data is simply a collection of raw, unprocessed facts, observations, symbols, or measurements. On its own, a piece of data—like the number "120" or the word "red"—lacks meaning. It is only when data is organized, contextualized, and analyzed that it transforms into valuable information.</p>

<h2>Types of Data</h2>

<p>While data is often broadly categorized simply as structured (easily organized in databases) or unstructured (free-form text, audio, images), professionals across scientific, technical, and regulatory disciplines categorize data based on its physical properties, its state in the data lifecycle, and its format. Here are the specific types of data commonly encountered:</p>

<h3>Fundamental Data Types</h3>

<p>At the most foundational level across pharmacy and pharmaceutical manufacturing, data is divided into quantitative (numerical) and qualitative (categorical) forms. However, these break down further into specific mathematical sub-types that dictate how they can be analyzed for drug safety and efficacy.</p>

 <h4>Quantitative Data (Numerical)</h4> 
 <p>
   This data represents measurable quantities. It is mathematically operable (allowing for statistical analyses, standard deviations, and out-of-specification checks) and splits into two distinct types:
   
 </p> 
 
   <p><b>Continuous Data:</b></p> <p> Measurements that can take on any value within a range, including infinitely small decimals and fractions. </p>    
    <p>The precise concentration of an Active Pharmaceutical Ingredient (API) in a solution (e.g., 99.85%), the weight of a compressed tablet (e.g., 505.2 mg), or the specific pH level of a liquid suspension.</p>
   <p>
     <p><b>Discrete Data:</b></p>
     <p> Whole numbers that represent countable items; they cannot realistically be broken down into fractions.</p>  
     <p>The exact number of defective vials identified on a packaging line, the pill count in a blister pack, or the number of reported adverse events during a Phase III clinical trial.</p>  
 <h4>Qualitative Data (Categorical)</h4> 
 <p>This comprises descriptive, non-numerical observations crucial for quality assurance and clinical feedback. Like numerical data, it has universal sub-types:</p>  
   <p><b>Nominal Data:</b></p>
   <p> Categories with no inherent order, ranking, or hierarchy.</p>  
   <p>The route of administration for a drug (oral, intravenous, topical), formulation type (capsule, tablet, ointment), or the definitive outcome of a microbiological sterility test (Pass/Fail).  </p>
   <p><b>Ordinal Data:</b> </p>
   <p>Categories that have a logical, defined order or ranking, though the exact mathematical difference between ranks is unquantifiable.</p>  
    <p>Visual inspection grades for tablet coating defects (none, minor, major, critical), patient-reported pain scales in a clinical trial (mild, moderate, severe), or the staging of a disease being treated.</p>

<h3>Raw vs. Processed</h3>

 <p><b>Raw Data (Original Data):</b> </p>
 <p> This is the absolute "first capture" of an observation or measurement before any manipulation, filtering, or calculation has occurred. In regulated environments (like pharmaceutical manufacturing), preserving the original raw data—such as the direct electrical output from a sensor or the first entry into an Electronic Lab Notebook (ELN)—is a strict legal requirement to prove data integrity.</p>
   
   <p><b>Processed (or Analyzed) Data:</b></p> 
   
   <p>Once raw data undergoes systematic transformation—such as a chemist performing blank area subtraction, total impurities calculations, or signal-to-noise ratio enhancements—it becomes processed data. This data is refined to deliver clear scientific conclusions or prove product safety.</p>


<h3>Metadata (Data About Data)</h3>

 <p>Often overlooked but crucially important is metadata. Metadata provides the essential context required to make primary data meaningful, reproducible, and compliant with regulatory standards (such as ALCOA+ principles). Metadata includes timestamps, the specific ID of the instrument used, calibration records, the identity and electronic signature of the scientist who ran the test, and detailed audit trails showing exactly who created, modified, or reviewed the data.</p>

<h2>How Context Changes Data</h2>

Data is rarely absolute in its meaning; it is highly contextual. The exact same data point—or the exact same pattern of data—can mean entirely different things depending on the professional looking at it. Let's look at how different fields interpret data.

 <h3>1. The Chemist</h3>

<p>For an analytical chemist, data is often a measure of physical properties and chemical behaviors. It is the absorbance intensity of a spectrophotometer or the peak area of a chromatogram.</p>

<p>A chemist looks at signals and noise. A sudden "spike" on a graph usually represents the detection of a specific molecule or an impurity in a sample. To the chemist, data is a pathway to understanding molecular structures, ensuring product safety (like in pharmaceuticals), and confirming the purity of a substance.</p>

 <h3>2. The Biologist</h3>

<p>For a biologist, data represents the messy, complex reality of living systems. It might look like a spreadsheet of DNA sequences, the migration coordinates of a flock of birds, or the replication rate of cells in a petri dish.</p>

<p> A biologist views data through the lens of life cycles and evolution. A "spike" on a graph to a biologist might mean a sudden population boom of an invasive species, or a rapid mutation rate in a virus. Data is the key to understanding how organisms interact with each other and their environments.</p>

<h3>3. The Physician (Doctor)</h3>

<p>To a physician, data is deeply personal and clinically urgent. It takes the form of vital signs (heart rate, blood pressure), laboratory results (cholesterol levels, white blood cell counts), and diagnostic imaging (X-rays, MRIs).</p>

<p> A doctor uses data to diagnose illnesses and save lives. While a chemist sees a graph spike as a molecular signal, a physician looking at a spike on an ECG monitor sees a dangerous heart arrhythmia. For the doctor, data must be interpreted rapidly to make critical decisions about patient care and treatment plans.</p>

<h3>4. The Mobile Company</h3>  

<p>For a telecommunications or mobile tech company, data is the lifeblood of commerce and infrastructure. It includes user location pings, network bandwidth usage, app engagement time, and call drop rates.</p>

<p> A mobile company views data in terms of network optimization and user behavior. A "spike" on their graphs represents a surge in network traffic—perhaps due to a major news event or a viral trend. To them, data dictates where to build new cell towers, how to price subscription plans, and how to deliver targeted advertising.</p>

<h3>Conclusion</h3>

<p>Ultimately, data is a universal language, but one with many distinct dialects. Whether it is a string of genetic code, an electrical signal from an analytical instrument, a patient's heartbeat, or a smartphone's GPS ping, data is the raw material of truth. Its true power is unlocked only by the specific questions we ask of it, the context we preserve through metadata, and the unique perspectives we bring to its analysis.</p>
</article>



  `},M2=Object.freeze(Object.defineProperty({__proto__:null,default:N2},Symbol.toStringTag,{value:"Module"})),E2={id:"RK-2026-008",title:"Data integrity and ALCOA+ principles",date:"2026-07-13",tags:["#data integrity","#data","#ALCOA+"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>
  <h2>1. Introduction to Data Integrity</h2>
  <p>In scientific research, pharmaceutical manufacturing, and analytical chemistry, data accuracy is of great importance. <strong>Data integrity</strong> refers to the overall completeness, accuracy, and consistency of data over its <b>entire lifecycle</b>. It means that the data accurately represents the actual events that occurred, completely <b>unaltered</b> and secure from<b> unauthorized access</b>, <b>falsification</b>, or <b>accidental deletion</b>.</p>
  
  <h2>2. How to Maintain Data Integrity</h2>
  <p>Maintaining data integrity requires a combination of strong <b>organizational culture</b> [Discipline], rigorous processes, and secure technological systems.</p>
  
    <h3>2.1 Implement Robust Systems</h3>
    <p>Utilize Laboratory Information Management Systems (LIMS), Electronic Lab Notebooks (ELN), and Chromatography Data Systems (CDS) that are engineered specifically for <b>regulatory compliance</b> [Standards and rules decided by various regulatory bodies such as government agencies and private organizations].</p>

    <p>Example: When selecting a CDS, a laboratory must choose a system that natively supports <a href="https://simplerqms.com/21-cfr-part-11-vs-eu-annex-11/" target="_blank">FDA 21 CFR Part 11 or EudraLex Annex 11 requirements</a>. This means the software inherently <b>prevents the permanent deletion of raw data</b>, seamlessly <b>links metadata (like instrument ID and calibration status)</b> to the final results, and enforces <b>electronic signature requirements</b> for document approval.</p>

    <h3>2.2 Enforce Strict Access Controls</h3>
    <p>Ensure that users have <b>unique logins</b> and only the <b>permissions</b> necessary for their <b>specific roles</b>. <b>Shared passwords</b> must be strictly <b>prohibited</b> to maintain<b> traceability</b>.</p>
    <p>Example: In a LIMS, a standard <strong>Laboratory Analyst</strong> should have the <em>permissions</em> required <em>to run tests</em> and <em>input raw data</em>. However, the system should actively <b>block them from approving their own results</b> or <b>altering testing parameters</b>. Only personnel with a <strong>"QA Manager"</strong> role would be granted the cryptographic <b>permissions to perform final approvals</b>, ensuring a clear segregation of duties.</p>

    <h3>2.3 Utilize Automated Audit Trails</h3>
    <p>Every electronic system must have a <b><em>secure</em>, <em>computer-generated</em>, <em>time-stamped</em></b> audit trail that records the date, time, user, and exact nature of any creation, modification, or deletion of data.</p>

    <p>Example: If a lab technician accidentally enters a sample weight as "1.05g" instead of "1.50g" and later corrects it, the audit trail will invisibly <b>record both the original entry and the corrected entry</b>. Furthermore, a compliant system will force the user to<b> select a reason code for the change</b> (e.g., "Typographical Error") and append a timestamp and the user's unique ID to the event, creating a transparent history for auditors.</p>

    <h3>2.4 Validate Systems</h3>
    <p>Software and analytical instruments must undergo rigorous <b>validation</b> to prove they consistently do exactly what they are designed to do without corrupting the outputs.[<b>calibration</b>]</p>

    <p>Example: Before a new version of an ELN is deployed to the production environment, the IT and Quality teams must perform <b>Installation Qualification</b> (IQ), <b>Operational Qualification</b> (OQ), and <b>Performance Qualification</b> (PQ). As part of PQ, a tester might purposefully attempt to input out-of-specification data or bypass an electronic signature to prove that the system's guardrails successfully trigger the appropriate alarms and block the non-compliant actions.</p>

  
  
  <h2>3. What Are the ALCOA+ Principles?</h2>
  <p><a href="https://www.eurotherm.com/in/life-sciences-cpg/data-integrity-life-sciences/alcoa/" target="_blank">ALCOA+</a> is a foundational framework established by regulatory agencies (such as the FDA, EMA, and MHRA) to ensure data integrity, particularly in Good Manufacturing Practice (GMP) and Good Laboratory Practice (GLP) environments. Implementing <a href="https://www.eurotherm.com/in/life-sciences-cpg/data-integrity-life-sciences/alcoa/" target="_blank">ALCOA+</a> transforms raw data into legally defensible scientific evidence.</p>

  <h3>3.1 The Original ALCOA</h3>
  <dl>
    <dt> Attributable</dt>  
    <dd>It must be perfectly clear <b>who</b> observed and recorded the data, <b>What</b> was the observation and<b> when</b> it was done. Every action must trace back to a specific individual (e.g., via secure electronic signatures). Modern Electronic Lab Notebooks (ELNs) enforce this via secure, individualized credentials (e.g., biometric logins or 2FA) and cryptographic electronic signatures (compliant with 21 CFR Part 11). Generic user accounts (like "LabAdmin1") are strictly forbidden.</dd>
    <dt>Legible</dt>
    <dd>Data must be readable and understandable for the duration of its lifecycle. This applies to human-readable text as well as the ability to open electronic files years later. For electronic records, this means <b>avoiding proprietary</b>, closed file formats that might become obsolete. Systems should export to <b>standardized archival formats (like PDF/A or XML)</b> to ensure long-term readability without requiring the original legacy software.</dd>
    <dt> Contemporaneous</dt>
    <dd>Data must be <b>recorded</b> at the precise <b>moment the work is performed</b>. Jotting results on a scrap of paper to enter into a system later violates this principle. Integrated instruments <b>automatically push data directly to a LIMS</b> at the moment of capture, applying an unalterable system timestamp. This completely <b>eliminates the risk of backdating or human delay</b>.</dd>
    <dt> Original</dt>
    <dd>The <b>data must be the very first capture of the information</b>. If a weight is printed on a thermal slip, that slip (or a certified digital scan of it) is the original data, not a transcribed number in a notebook. In chromatography, the "original" data is the raw electronic signal (the raw data file) generated by the detector, not the printed PDF report of the chromatogram. Auditors will demand to see the raw electronic files to ensure peaks were not manually reintegrated to hide failing results.</dd>
    <dt>Accurate</dt>
    <dd>The data must be error-free, complete, and exactly reflect the observation or calculation. Regular calibration of instruments is vital here. Digital integrations (e.g., connecting a LIMS directly to a Chromatography Data System like <a href="https://www.waters.com/nextgen/in/en/products/informatics-and-software/chromatography-software/empower-software-solutions/empower-cds.html?xcid=ppc-ppc_00882">Empower</a>) prevent manual transcription errors—which account for thousands of lab deviations annually—by allowing systems to communicate results machine-to-machine.</dd>
  </dl>

  <h3>3.2 The "+" (Plus) Principles:</h3>
  <dl>
    <dt>Complete</dt>
    <dd>All data, including repeat analyses, metadata, and even failed test runs, must be retained. Analysts cannot "cherry-pick" only the favorable results. Audit trails must capture "<b>orphaned data</b>"—test runs that were started, completed, but never officially attached to a final batch report. Reviewers must investigate why a test was run but discarded.</dd>
    <dt>Consistent</dt>
    <dd>Data should be arranged chronologically and logically, following expected sequences of events. Time-syncing across all lab servers is critical. If an ELN records a sample preparation at 10:05 AM, but the analytical instrument records the test starting at 09:55 AM due to a misconfigured server clock, the data consistency is broken, triggering regulatory suspicion.</dd>
    <dt>Enduring</dt>
    <dd>Data must be stored on media that will last for the <b>required retention period</b> (e.g., relying solely on fading thermal paper is not enduring). Laboratories must utilize enterprise-grade IT infrastructure, employing secure cloud storage, automated daily backups, and rigorous disaster recovery protocols to ensure data survives server crashes or <b>physical localized disasters</b>.</dd>
    <dt>Available</dt>
    <dd>Data must be readily accessible for review, audits, or regulatory inspections at any time over its required lifetime. A Scientific Data Management System (SDMS) centrally indexes metadata, allowing a QA manager or FDA auditor to query a specific batch number and instantly retrieve all associated raw data, calibration records, and analyst training logs within minutes, rather than spending days digging through physical archives.</dd>
  </dl>


  <h2>4. How ALCOA+ Helps Maintain Data Integrity</h2>
  <p>The <a href="https://www.eurotherm.com/in/life-sciences-cpg/data-integrity-life-sciences/alcoa/" target="_blank">ALCOA+</a> principles serve as a <b>universal blueprint for building resilient data architectures</b>. By evaluating every step of the data lifecycle—from initial collection on a laboratory instrument to long-term archival—against ALCOA+, organizations can systematically identify vulnerabilities. </p>
  <p>When these principles are coded directly into laboratory software (such as enforcing contemporaneous entries by permanently locking a time-stamp, or ensuring attribution via biometric logins), human error and intentional fraud are virtually engineered out of the process. Ultimately, ALCOA+ transforms raw, vulnerable data into a reliable, unshakeable foundation for scientific truth.</p>

  <h2>5. The Harms of Compromised Data Integrity</h2>
  <p>When data integrity is not maintained, the consequences extend far beyond simple administrative errors—they can be catastrophic for public health, corporate survival, and scientific advancement.</p>
  
  <h3>5.1 Patient Safety Risks and Historical Scandals</h3>
  <p>In pharmaceutical settings, falsified or inaccurate data can lead to the approval and release of ineffective or toxic drugs. When data integrity fails, the very foundation of quality control is broken, directly endangering patients. Two landmark cases illustrate these catastrophic failures:</p>
  
    <h4>5.1.1 The Able Laboratories Scandal (2005)</h4> 
    <p>Able Laboratories suffered a complete corporate shutdown after a whistleblower revealed systemic, intentional data manipulation. Quality control analysts were found to be routinely ignoring "Out of Specification" (OOS) results for manufactured drugs. Instead of investigating failing batches, analysts manipulated Chromatography Data Systems (CDS) by copy-pasting passing chromatograms over failing ones and repeatedly altering peak integration parameters until the data falsely indicated a passing result.</p> 
    <p><em>Data Integrity Violation:</em> This egregiously violated the ALCOA+ principles of being <strong>Accurate</strong>, <strong>Original</strong>, and <strong>Complete</strong>. By deleting and hiding failed test runs, the resulting data was no longer a complete or original representation of the actual chemical analysis, leading to the release of improperly dosed medications.</p>
    <p><a href="https://www.chromatographyonline.com/view/able-laboratories-fraud-case-what-have-we-learnt-" target="blank">Source</a></p>
    

<h4>5.1.2 The Ranbaxy Laboratories Case (2013)</h4>    
    <p>Ranbaxy pleaded guilty to federal felony charges and paid $500 million in fines for systemic data fraud and manufacturing violations. The company systematically falsified stability data—the critical data that proves a drug remains safe and effective over its stated shelf life. Employees were found testing drugs months or even years late, and then fraudulently backdating the paperwork to make it appear as though the testing occurred on the mandated schedule.</p> 
    <p><em>Data Integrity Violation:</em> This was a massive failure of the <strong>Contemporaneous</strong> principle (as data was backdated rather than recorded at the exact time the work was performed) and the <strong>Accurate</strong> principle. Because the dates and storage conditions were falsified, regulatory bodies and patients had no actual proof that the drugs would remain stable and safe over time.</p>
  <p><a href="https://www.aims-international.org/aims15/15ACD/PDF/A228-Final.pdf" target="_blank">Source</a></p>

    <ul>
      <li><strong>Regulatory Penalties and Shutdowns:</strong> Regulatory bodies like the FDA rigorously enforce data integrity, often under frameworks like 21 CFR Part 11. Violations result in warning letters, import alerts, massive fines, and the complete shutdown of manufacturing facilities.</li>
      <li><strong>Loss of Scientific Truth:</strong> In research environments, compromised data leads to false conclusions. If instrumental noise is manipulated to look like a valid signal, subsequent studies built on that foundation will inevitably fail, wasting years of effort and funding.</li>
    </ul>

    <h2>6. Not Always Human Error</h2>
    <iframe width="360" height="260" src="https://www.youtube.com/embed/ksn5yrsC3Wg" title="The Crystal That Could Destroy All Medicine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>The video illustrates that the absence of expected scientific results isn't always the result of human error or flawed methodologies. As seen in the case of the HIV drug Ritonavir, perfectly executed manufacturing processes suddenly failed when the medicine turned into a cloudy, unusable paste [01:05]. Despite rigorous quality control and double-checking every ingredient and temperature setting, researchers were completely stumped because no human mistakes had been made [01:37]. Instead, the failure was caused by a rare and unpredictable chemical phenomenon known as a "disappearing polymorph" [27:25]. Spontaneous molecular transformations like this can be triggered by something as minuscule and unavoidable as a random dust particle or a microscopic scratch acting as a seed crystal [28:21]. As the lead scientists noted during their investigation, these occurrences are simply unpredictable mysteries of nature—much like a hurricane—proving that scientific failures are sometimes just a matter of sheer bad luck rather than a flaw in human execution [29:55].</p>

</article>



  `},P2=Object.freeze(Object.defineProperty({__proto__:null,default:E2},Symbol.toStringTag,{value:"Module"})),D2={id:"RK-2026-009",title:"Data and ELNs, LIMS",date:"2026-07-14",tags:["#LIMS","#data","#ELNs"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>
  <h2>The Digital Laboratory: Understanding ELNs and LIMS</h2>
  <p>As modern scientific research and manufacturing generate increasingly massive datasets, the traditional paper-and-pen approach is no longer viable. Electronic Lab Notebooks (ELNs) and Laboratory Information Management Systems (LIMS) are the foundational software platforms used to digitize, manage, and secure laboratory data.</p>
  
  <h2>What Are ELNs and LIMS, and How Do They Work?</h2>
  <p>While often used together, ELNs and LIMS serve distinct operational purposes within a laboratory environment.</p>
  
  <h3>Electronic Lab Notebooks (ELNs)</h3>
  <p>An ELN is essentially the digital evolution of the traditional paper lab notebook. It is designed primarily for Research and Development (R&D) environments where workflows are dynamic and data is often unstructured or semi-structured.</p>
  <ul>
    <li><strong>How it works:</strong> Scientists use ELNs to document hypotheses, drag-and-drop protocol templates, record daily observational notes, and collaborate with peers in real-time. ELNs provide a flexible canvas that can handle rich text, images, chemical structures, and file attachments. They allow researchers to link their narrative notes directly to the data files generated by their experiments.</li>
  </ul>

  <h3>Laboratory Information Management Systems (LIMS)</h3>
  <p>A LIMS is a highly structured, rigid database system designed primarily for high-throughput, routine testing environments like Quality Assurance/Quality Control (QA/QC), clinical diagnostics, and manufacturing.</p>
  <ul>
    <li><strong>How it works:</strong> When a physical sample enters the lab, the LIMS assigns it a unique digital identifier (usually a barcode). As the sample moves through preparation, instrumental analysis, and final reporting, the LIMS tracks its exact location, the chain of custody (who handled it), and the analytical results. LIMS are heavily rules-based, ensuring that standard operating procedures (SOPs) are strictly enforced step-by-step.</li>
  </ul>

  <hr />

  <h2>Famous Examples in the Industry</h2>
  <p>The market for laboratory informatics is vast, but a few key platforms dominate different scientific sectors:</p>
  
  <h3>Prominent ELNs:</h3>
  <ul>
    <li><strong>Benchling:</strong> Extremely popular in modern biotech, synthetic biology, and genomics for its cloud-native, collaborative interface and built-in DNA/protein sequence design tools.</li>
    <li><strong>Dotmatics:</strong> Widely used in chemistry and pharmaceutical drug discovery.</li>
    <li><strong>SciNote:</strong> A well-known open-source and commercial ELN favored by academic institutions and smaller research labs.</li>
  </ul>

  <h3>Prominent LIMS:</h3>
  <ul>
    <li><strong>LabWare LIMS:</strong> One of the most widely deployed enterprise systems globally, heavily entrenched in highly regulated pharmaceutical, forensic, and clinical environments.</li>
    <li><strong>Thermo Fisher SampleManager:</strong> A robust, enterprise-level LIMS deeply integrated with analytical instrumentation and manufacturing execution systems (MES).</li>
    <li><strong>StarLIMS (Abbott):</strong> Known for comprehensive informatics solutions utilized heavily in public health, life sciences, and manufacturing sectors.</li>
  </ul>

  <hr />

  <h2>How They Champion Data Integrity Management</h2>
  <p>In a regulated scientific environment, the rule is: <em>if you didn't document it securely, it didn't happen</em>. ELNs and LIMS enforce data integrity through systemic, unbypassable controls:</p>
  <ul>
    <li><strong>Elimination of Transcription Errors:</strong> By integrating directly with laboratory instruments (like analytical balances, pH meters, or gas chromatographs), these systems pull data automatically. This eliminates the human error of misreading an instrument screen or typing the wrong number into a spreadsheet.</li>
    <li><strong>Automated Audit Trails:</strong> Every keystroke, deletion, or modification is permanently recorded in a secure background database. The system automatically logs <em>who</em> made the change, <em>what</em> the old and new values were, <em>when</em> it happened, and forces the user to input a reason for <em>why</em> the change was made.</li>
    <li><strong>Role-Based Access Control (RBAC):</strong> They ensure strict segregation of duties. An analyst can run a test and submit data, but only a senior manager can approve or invalidate that data. The software prevents unauthorized users from manipulating data outside their specific job function.</li>
  </ul>

  <hr />

  <h2>Enforcing the ALCOA+ Principles</h2>
  <p>ELNs and LIMS are practically purpose-built to map directly onto the ALCOA+ regulatory framework. By removing human discipline from the equation and replacing it with software architecture, compliance is engineered directly into the daily workflow.</p>

  <table class="science-table" data-id="alcoa-informatics">
    <caption>Table 1: How ELN and LIMS software systematically enforce ALCOA+ principles.</caption>
    <thead>
      <tr>
        <th>ALCOA+ Principle</th>
        <th>How ELNs/LIMS Enforce It</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Attributable</strong></td>
        <td>Enforces unique biometric or password-protected logins. Applies FDA 21 CFR Part 11 compliant Electronic Signatures (e-signatures) to permanently link an action to a specific human.</td>
      </tr>
      <tr>
        <td><strong>Legible</strong></td>
        <td>Completely eliminates issues with illegible handwriting. Data is stored in standardized digital formats that remain readable, searchable, and uniformly formatted indefinitely.</td>
      </tr>
      <tr>
        <td><strong>Contemporaneous</strong></td>
        <td>The system applies rigid, unalterable server-side timestamps the exact millisecond data is manually entered or an instrument completes an analytical run. Backdating is impossible.</td>
      </tr>
      <tr>
        <td><strong>Original</strong></td>
        <td>Captures raw, primary data directly from the analytical instrument via API or secure file parsing, preserving the true source before any data processing or manipulation occurs.</td>
      </tr>
      <tr>
        <td><strong>Accurate</strong></td>
        <td>Performs automated, validated calculations (e.g., standard curves, assay dilutions) natively within the software, eliminating manual math errors on scratchpads or unvalidated spreadsheets.</td>
      </tr>
      <tr>
        <td><strong>Plus (+) Principles</strong></td>
        <td>Ensures data is <strong>Complete</strong> by preventing the deletion of failed test runs; <strong>Enduring</strong> through secure, redundant server backups; and immediately <strong>Available</strong> for regulatory audits via database queries.</td>
      </tr>
    </tbody>
  </table>
</article>


  `},z2=Object.freeze(Object.defineProperty({__proto__:null,default:D2},Symbol.toStringTag,{value:"Module"})),_2={id:"RK-2026-010",title:"Advanced Data Entry",date:"2026-07-15",tags:["#Entry","#data","#"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>

    <h2>1. "Tidy Data" & Best Practices</h2>
    <p>Before diving into specific software features, we need to establish the ground rules for biological data entry. When dealing with experimental results, how you structure your spreadsheet is just as important as the data itself. A poorly formatted spreadsheet can make downstream analysis incredibly painful, breaking scripts when you try to import your data into bioinformatics pipelines or statistical software.</p>

    <h3>1.1 Observations in Rows, Variables in Columns</h3>
    <p>Think of a row as a single experimental event or biological sample—like one patient in a clinical trial, one mouse, or one specific well in a 96-well plate. The columns represent the different variables or traits you measured for that specific sample, such as pH, drug concentration, and temperature.</p>

    <table class="science-table" data-id="table-1">
        <caption>Table 1: Example of Tidy Data Structure in a Lab Setting.</caption> 
        <thead> 
            <tr> 
                <th>Sample_ID</th>
                <th>Treatment_Group</th>
                <th>pH_Level</th>
                <th>Concentration_mM</th>
            </tr>
        </thead>
        <tbody> 
            <tr>
                <td>Sample_001</td>
                <td>Control</td>
                <td>7.2</td>
                <td>0.0</td>
            </tr>
            <tr>
                <td>Sample_002</td>
                <td>Drug_A</td>
                <td>7.4</td>
                <td>15.5</td>
            </tr>
        </tbody>
    </table>

  <h3>1.2 Data Entry Mistakes & Universal File Formats</h3>
    <p>It is very tempting to make spreadsheets look visually appealing for lab meetings, but optimizing for human eyes often ruins machine readability. To prevent this, you must separate your workflow into two concepts: the <strong>data management sheet</strong> and the <strong>data analysis sheet</strong>.</p>
    
    <p>Data management is typically handled with standard workbook files (like .xlsx), which support multiple tabs, formulas, and visual formatting. However, downstream analysis tools—whether it is a Python script, an R package, or an online bioinformatics pipeline—expect raw, flat text files. These are universally expected to be <strong>CSV (Comma-Separated Values)</strong> or <strong>TSV (Tab-Separated Values)</strong> files.</p>

    <p>To understand why visual formatting is lost, look at the raw structure of these files. Here is what your tidy biological data looks like when exported as a CSV file. Notice how every column is separated strictly by a comma, and there is absolutely no underlying code to store colors, bold text, or merged cells:</p>

    <pre><code>Sample_ID,Treatment_Group,pH_Level,Concentration_mM,Experiment_Status
Sample_001,Control,7.2,0.0,Passed
Sample_002,Drug_A,7.4,15.5,Passed
Sample_003,Drug_B,NA,30.0,Failed</code></pre>

    <p>Similarly, here is the exact same experimental data exported as a TSV file. Instead of commas, the software uses an invisible tab character to separate the variables. This is highly preferred in bioinformatics (especially for genomic sequencing data) because biological annotations frequently contain commas in their text, which can accidentally break a CSV file.</p>

    <pre><code>Sample_ID	Treatment_Group	pH_Level	Concentration_mM	Experiment_Status
Sample_001	Control	7.2	0.0	Passed
Sample_002	Drug_A	7.4	15.5	Passed
Sample_003	Drug_B	NA	30.0	Failed</code></pre>
    
    <p>CSV and TSV files are incredibly simple and widely accepted formats for data exchange. They consist strictly of plain text with values separated by commas or tabs. Because they are plain text, <strong>they strip away all visual formatting upon export</strong>. Knowing that your data must eventually end up in this stripped-down format, you should avoid the following habits at all costs:</p>
    
    <ul>
        <li><strong>Merged cells:</strong> Avoid them completely. When you export a workbook to a CSV, merged cells are forced back into individual cells. This often shifts your data out of alignment and causes immediate errors in statistical software.</li>
        <li><strong>Color-coding as data:</strong> Do not highlight a cell red to indicate a failed PCR or an outlier. Because CSV/TSV files cannot save colors, that crucial information is instantly lost upon export. Instead, add a new variable column named "Experiment_Status" and explicitly type "Failed" or "Passed."</li>
        <li><strong>Multiple tables on one sheet:</strong> Keep different datasets on entirely separate tabs or files. A script parsing a CSV reads continuously from top to bottom; if it hits a second, differently formatted table halfway down, it will crash or corrupt your analysis.</li>
    </ul>

<h3>1.3 Handling Missing Data</h3>
    <p>In biology, missing a reading—due to a dropped test tube, a dead culture, or a sensor failure—is a common reality. You must establish a strict standard in your analysis workflow for dealing with this missing information. Use a consistent text flag like "NA" (Not Available) or "Null".</p> 
    
    <p><strong>Never leave cells completely blank</strong>, and absolutely <strong>do not use a zero</strong> to represent missing data. To a human, zero might mean "nothing" or "absent," but to analytical software, zero is a valid numerical measurement. If you use zero for a dead sample, statistical software will mistakenly calculate that zero into your biological averages, drastically skewing your statistical findings (e.g., falsely lowering your average enzyme activity).</p>

    <h4>1.3.1 Quickly Finding Missing Data in Excel</h4>
    <p>Before exporting your workbook to a plain text format, you need to ensure no cells were accidentally left empty. While we will cover advanced programmatic ways to do this later in the course (using Python or R), here is how you can quickly audit your sheets using standard Excel tools:</p>

    <ul>
        <li><strong>Using the "Go To Special" Tool (Best for True Blanks):</strong> If you suspect cells were left entirely empty, highlight your dataset, press <code>Ctrl + G</code> (or <code>Cmd + G</code> on Mac), click "Special...", and select "Blanks". Excel will instantly highlight every truly empty cell in your dataset so you can accurately fill them with "NA".</li>
        <li><strong>Using Data Filters (Best for Text & Numbers):</strong> Highlight your header row and turn on the "Filter" tool. Click the dropdown arrow on any column (whether it contains numerical data like optical density readings or text-based data like species names). Uncheck "Select All" and scroll to the very bottom to check for "(Blanks)" or inconsistently typed missing values (like "n/a", "N/A", or a random hyphen "-").</li>
        <li><strong>Using Formulas:</strong> You can create a temporary column next to your experimental data to flag missing values mathematically.</li>
    </ul>

    <pre><code>=ISBLANK(A2)</code></pre>
    <p>This function will explicitly return "TRUE" if the cell is completely empty. It is a highly effective way to hunt down missing data across thousands of rows before it breaks your downstream analysis.</p>
  
  <h2>2. Data Validation & Error Prevention</h2>
    <p>This is where advanced data entry connects directly back to data integrity. You can force your spreadsheet to act as a gatekeeper, rejecting bad or impossible data before it even gets saved to the file.</p>

 <h3>2.1 Creating Dropdown Lists</h3>
    <p>To prevent typos in species names or treatment groups, restrict specific cells to a dropdown list of inputs. For example, setting a dropdown for <i>E. coli</i>, <i>S. aureus</i>, and <i>P. aeruginosa</i> ensures exact consistency. Without this, one lab tech might type "E.coli", another "E. coli", and a third "Escherichia coli"—which downstream analysis software would incorrectly treat as three entirely different biological organisms.</p>

    <h4>How to set this up in Excel:</h4>
    <ol>
        <li>Highlight the exact cells or the entire column where you want the dropdown menus to appear (for instance, the "Organism_Name" column).</li>
        <li>On the Excel ribbon at the top, click on the <strong>Data</strong> tab.</li>
        <li>In the "Data Tools" group, click <strong>Data Validation</strong>. A dialogue box will open.</li>
        <li>Under the <strong>Settings</strong> tab, look for the "Allow:" dropdown menu and change it from "Any value" to <strong>List</strong>.</li>
        <li>In the <strong>Source:</strong> box, you have two options. You can either type your approved names separated by commas (e.g., <i>E. coli, S. aureus, P. aeruginosa</i>) or click the small arrow to highlight a pre-typed list of approved names hidden on another sheet.</li>
        <li>Click <strong>OK</strong>. Now, clicking those cells will reveal a rigid dropdown menu.</li>
    </ol>
    

    <h3>2.2 Restricting Data Types</h3>
    <p>You can set logical biological boundaries for your data entry. If you are recording pH for a media preparation, you can set a rule that the cell will only accept decimal numbers between 1 and 14. If someone accidentally types "15" or text like "highly acidic," the spreadsheet will actively reject the input.</p>

    <h4>How to set this up in Excel:</h4>
    <ol>
        <li>Highlight the column where your numerical data will be entered (e.g., a "Concentration" or "pH" column).</li>
        <li>Go to the <strong>Data</strong> tab and click <strong>Data Validation</strong>.</li>
        <li>Under the <strong>Settings</strong> tab, change the "Allow:" dropdown. If you are measuring whole colony-forming units (CFUs), choose <strong>Whole number</strong>. If you are measuring exact concentrations, choose <strong>Decimal</strong>.</li>
        <li>Set the "Data:" dropdown to <strong>between</strong>.</li>
        <li>Enter your strict biological limits in the <strong>Minimum</strong> and <strong>Maximum</strong> boxes. For example, if you are logging percentage yields of ethanol from Gas Chromatography (GC) analysis, your minimum should be <strong>0</strong> (negative yield is impossible) and your maximum should be <strong>100</strong>.</li>
        <li>Click <strong>OK</strong>.</li>
    </ol>


    <h3>2.3 Custom Alert Messages</h3>
    <p>Spreadsheets allow you to set up custom input messages that pop up when a user clicks on a cell (e.g., "Reminder: Enter concentration in micrograms per milliliter, not milligrams"). You can also create custom error alerts that explain exactly why invalid data was blocked, acting as a built-in training tool for your lab members.</p>

    <h4>How to set this up in Excel:</h4>
    <p>This feature lives inside the exact same Data Validation menu we used above, acting as the communication layer for your rules.</p>
    <ol>
        <li>Select your restricted cells, open <strong>Data Validation</strong>, and look at the top tabs.</li>
        <li><strong>To guide the user BEFORE they type:</strong> Click the <strong>Input Message</strong> tab. Check the box that says "Show input message when cell is selected". Give it a clear title (e.g., <i>"Unit Check"</i>) and a message (e.g., <i>"Please enter the peak area exactly as it appears on the GC printout."</i>). This acts as a sticky note that floats next to the cell.</li>
        <li><strong>To correct the user AFTER a mistake:</strong> Click the <strong>Error Alert</strong> tab. Choose the "Style" of the alert. A "Stop" style completely prevents them from entering the bad data. A "Warning" style flags the data but lets them proceed if they click yes (useful for rare but possible biological outliers).</li>
        <li>Type a helpful Error Message, such as: <i>"Invalid entry. Remember, pH cannot exceed 14. Please check your meter calibration."</i></li>
        <li>Click <strong>OK</strong>.</li>
    </ol>

<h2>3. Efficiency Tools for Bulk Data in Excel</h2>
    <p>Lab experiments often generate massive amounts of repetitive data. Automating your data entry in Excel reduces human error and saves hours of manual typing at the bench, especially when dealing with high-throughput assays.</p>

    <h3>3.1 AutoFill and Custom Sequences</h3>
    <p>If you need to generate a long list of sequential sample identifiers, you do not need to type each one manually. Excel's AutoFill feature understands numerical patterns and can project them down a column.</p>

    <h4>How to use AutoFill:</h4>
    <ol>
        <li>Type the first identifier in a cell (e.g., <code>Flask_001_Prodigiosin</code>).</li>
        <li>Type the next logical identifier in the cell directly below it (e.g., <code>Flask_002_Prodigiosin</code>) to establish the mathematical pattern.</li>
        <li>Highlight both cells.</li>
        <li>Hover your mouse over the bottom-right corner of the highlighted box until the cursor turns into a solid black cross (this is the <strong>Fill Handle</strong>).</li>
        <li>Click and drag the handle down the column. Excel will automatically generate <code>Flask_003</code>, <code>Flask_004</code>, and so on.</li>
    </ol>


    <h3>3.2 Flash Fill</h3>
    <p>Flash Fill is an incredibly powerful Excel-specific tool that uses pattern recognition to extract, combine, or reformat data on the fly without requiring you to write complex spreadsheet formulas.</p>

    <h4>How to use Flash Fill:</h4>
    <p>Imagine you have a column of full biological names (like <i>Cordyceps militaris</i>) and you need only the specific epithet isolated in the next column for a database search.</p>
    <ol>
        <li>Ensure you have a blank column directly next to your raw data.</li>
        <li>In the top cell of the blank column, manually type the exact output you want for the first row (e.g., type <code>militaris</code>).</li>
        <li>Press <strong>Enter</strong> to move to the cell directly below it.</li>
        <li>Press <strong>Ctrl + E</strong> (or <strong>Cmd + E</strong> on Mac).</li>
        <li>Excel will instantly recognize your extraction pattern and isolate the second word for all remaining rows automatically.</li>
    </ol>

    <h3>3.3 Text-to-Columns</h3>
    <p>This is a critical skill for daily lab work. When you export raw data from lab instruments—such as retention times and peak areas from a Gas Chromatography (GC) run measuring ethanol production—it often exports as a messy, single-column text file (.csv or .txt). The Text-to-Columns feature allows you to import this raw data and parse it into neat, usable columns by identifying delimiters (the characters separating the data elements, such as commas, tabs, or spaces).</p>

    <h4>How to split raw data using Text-to-Columns:</h4>
    <ol>
        <li>Highlight the entire column containing the messy, bundled text.</li>
        <li>On the Excel ribbon, click the <strong>Data</strong> tab.</li>
        <li>Click <strong>Text to Columns</strong> in the Data Tools group.</li>
        <li>In the wizard that pops up, select <strong>Delimited</strong> and click <strong>Next</strong>.</li>
        <li>Check the box for the specific character separating your data (for GC instrument outputs, this is usually a <strong>Comma</strong> or <strong>Space</strong>). The Data preview window will immediately show you how the columns will split.</li>
        <li>Click <strong>Finish</strong>. Your raw output is now neatly organized into separate cells, ready for graphing and analysis.</li>
    </ol>

<h2>4. Basic Data Cleaning Functions</h2>
    <p>Sometimes you inherit messy data exported from older lab equipment, or you have to compile spreadsheets typed by multiple different researchers. Cleaning this up manually across thousands of rows is a recipe for disaster. Here is how to programmatically sanitize your data.</p>

    <h3>4.1 Cleaning Whitespace</h3>
    <p>Accidental spaces at the beginning or end of a cell (e.g., typing " Sample " instead of "Sample") are invisible to the naked eye. However, if you are running a script to search for that sample or querying a bioinformatics database, the computer will read the space as a literal character and fail to find a match.</p>

    <pre><code>=TRIM(A1)</code></pre>
    <p>This function instantly removes accidental leading or trailing spaces from your text, ensuring clean data strings. It will keep single spaces *between* words (like "<i>Bacillus subtilis</i>") but strip away everything else.</p>

    <h3>4.2 Standardizing Text Casing</h3>
    <pre><code>=PROPER(A1)</code></pre>
    <pre><code>=UPPER(A1)</code></pre>
    <pre><code>=LOWER(A1)</code></pre>
    <p>These functions standardize text casing. <code>UPPER</code> makes everything capital, <code>LOWER</code> makes everything lowercase, and <code>PROPER</code> capitalizes the first letter of each word. This is incredibly useful for standardizing genetic markers, protein abbreviations, or gene symbols, which are strictly case-sensitive in biological databases (e.g., distinguishing between a human gene and a murine homolog).</p>

    <h4>How to apply these cleaning formulas:</h4>
    <ol>
        <li>Create a new, blank column right next to your messy data.</li>
        <li>Type your formula (e.g., <code>=TRIM(A2)</code>) and press Enter.</li>
        <li>Use the <strong>AutoFill</strong> handle (discussed in Section 3) to drag the formula down to the bottom of your dataset.</li>
        <li><strong>Crucial Step:</strong> Highlight the new clean column, copy it (Ctrl + C), right-click the original messy column, and select <strong>Paste as Values</strong>. This overwrites the messy data with the clean text, allowing you to delete the formula column.</li>
    </ol>


    <h3>4.3 Removing Duplicates</h3>
    <p>High-throughput screening or compiling datasets from multiple collaborators often results in overlapping or redundant data. The "Remove Duplicates" function safely identifies and deletes identical sample entries that might have been logged twice by mistake. However, you must be careful not to accidentally delete biological replicates (e.g., three separate wells testing the same drug concentration).</p>

    <h4>How to safely remove duplicates in Excel:</h4>
    <ol>
        <li>Click anywhere inside your data table.</li>
        <li>On the ribbon, go to the <strong>Data</strong> tab and click <strong>Remove Duplicates</strong>.</li>
        <li>A dialog box will appear listing all your columns. By default, they are all checked.</li>
        <li>To delete an entire row, Excel needs to know which columns must be identical to count as a "duplicate." <strong>Pro-Tip:</strong> Uncheck everything except your unique identifier column (like <code>Sample_ID</code> or <code>Tube_Barcode</code>). This ensures Excel only deletes rows where the exact same physical sample was entered twice, preserving valid experimental replicates.</li>
        <li>Click <strong>OK</strong>. Excel will delete the duplicate rows and give you a summary report of how many values were removed.</li>
    </ol>
    
    <h2>5. Security and Version Control</h2>
    <p>Managing biological data professionally requires strict security protocols. In the pharmaceutical and biotech industries, this is governed by the <strong>ALCOA+</strong> principle. This FDA-recognized industry standard dictates that data must be:</p>
    <ul>
        <li><strong>A</strong>ttributable: Who recorded or changed the data?</li>
        <li><strong>L</strong>egible: Can it be easily read and understood by a machine or human?</li>
        <li><strong>C</strong>ontemporaneous: Was it recorded exactly when the experiment happened?</li>
        <li><strong>O</strong>riginal: Is this the primary record, or a copy?</li>
        <li><strong>A</strong>ccurate: Is the data completely free from errors?</li>
    </ul>
    <p>While standard spreadsheets are not full-fledged Electronic Lab Notebooks (ELNs), here is how you can use their built-in tools to support these strict scientific standards.</p>

    <h3>5.1 Protecting Sheets and Cells</h3>
    <p>Imagine you have built a complex template that automatically calculates ethanol concentrations from Gas Chromatography (GC) peak areas. You want your lab technicians or visiting undergraduate students to enter their raw data, but you do not want them to accidentally delete your calculations or break the template's structure. You can solve this by locking specific cells.</p>

    <h4>How to protect a template in Excel:</h4>
    <p>By default, Excel considers every cell "locked," but this lock does not actually do anything until you explicitly protect the sheet. The trick is to "unlock" the safe zones first.</p>
    <ol>
        <li>Highlight the specific cells where raw data entry is allowed (e.g., the blank cells under your "Raw Peak Area" column).</li>
        <li>Right-click the highlighted cells and select <strong>Format Cells</strong>.</li>
        <li>Go to the <strong>Protection</strong> tab and <strong>uncheck</strong> the box that says "Locked". Click OK.</li>
        <li>Now, go to the <strong>Review</strong> tab on the main ribbon and click <strong>Protect Sheet</strong>.</li>
        <li>A prompt will ask for a password. Once you apply this, users will only be able to type in the specific cells you unlocked in Step 3. If they try to type over your header rows or math formulas, Excel will block them with an error message.</li>
    </ol>

    <h3>5.2 Tracking Changes & Version History</h3>
    <p>Disasters happen. Someone might accidentally delete a week's worth of bacterial growth data and hit "Save." Modern cloud-based spreadsheets (like Microsoft Office 365 or Google Workspace) automatically track the file's version history to prevent catastrophic data loss.</p>
    
    <p>This feature acts as a basic audit trail, heavily mimicking what you would find in an enterprise ELN. It allows the Principal Investigator (PI) to see exactly who made a change, what specific cell they altered, and the exact timestamp of the edit. This is vital for both ensuring reproducibility and protecting scientific integrity.</p>

    <h4>How to access Version History:</h4>
    <ul>
        <li><strong>In Excel (Office 365):</strong> Click on the file name at the very top center of the window and select <strong>Version History</strong>, or go to <strong>File &gt; Info &gt; Version History</strong>. A panel will open on the right showing every saved version of the document. You can click on a past date to view or restore the data exactly as it was.</li>
        <li><strong>In Google Sheets:</strong> Go to <strong>File &gt; Version history &gt; See version history</strong> (or press Ctrl+Alt+Shift+H). You can name specific versions (e.g., "Pre-Analysis Raw Data") so you can easily revert to the original, untampered dataset if an analysis goes wrong.</li>
    </ul>

    <h2>6. Interactive Practice: Applying the Rules</h2>
    <p>To truly master these data management skills, you need hands-on experience. Below is a custom-built dataset formatted as <strong>TSV (Tab-Separated Values)</strong>. Because it uses invisible tab characters instead of commas, you can simply highlight the text block below, copy it, click on cell <strong>A1</strong> in a blank Excel workbook, and paste it. Excel will automatically distribute the biological data perfectly into columns.</p>

    <p>I have intentionally hidden common lab errors, duplicate entries, and blank cells inside this dataset so you can practice every single technique we discussed from Step 1 to Step 5.</p>

    <h3>6.1 The Raw Practice Dataset</h3>
    <pre><code>
    Sample_ID	Full_Organism_Name	Target_Genus	Treatment_Group	Genetic_Marker	pH_Reading	Status	GC_Raw_Data
Flask_001	Serratia marcescens		 Wild_Type 	proA	7.2	Passed	Peak:450;RT:1.4
Flask_002	Serratia marcescens		 Adapted_Strain	proa	7.4	Passed	Peak:510;RT:1.45
Flask_003	Escherichia coli		Control  	PROA	6.8	Failed	Peak:120;RT:1.1
Flask_004	Pseudomonas aeruginosa		 Wild_Type	proA		NA	Peak:0;RT:0
Flask_005	Cordyceps militaris		Adapted_Strain 	ProA	6.5	Passed	Peak:600;RT:2.1
Flask_006	Bacillus subtilis		  Control	proa	7.1	Passed	Peak:310;RT:1.8
Flask_007	Serratia marcescens		 Wild_Type 	proA	7.2	Passed	Peak:450;RT:1.4
Flask_007	Serratia marcescens		 Wild_Type 	proA	7.2	Passed	Peak:450;RT:1.4
Flask_008	Escherichia coli		Adapted_Strain	PROA	7.0	Passed	Peak:550;RT:1.5
Flask_009	Pseudomonas aeruginosa		Control	proa	15.5	Failed	Peak:20;RT:1.1
Flask_010	Cordyceps militaris		Wild_Type	ProA	6.8	Passed	Peak:580;RT:2.0
Flask_011	Bacillus subtilis		Adapted_Strain	proA	7.0	Passed	Peak:400;RT:1.9
Flask_012	Serratia marcescens		Control	proA	7.2	Passed	Peak:150;RT:1.3
	Escherichia coli		Wild_Type	PROA	7.1	Passed	Peak:480;RT:1.4
	Bacillus subtilis		Adapted_Strain	proA	7.0	Passed	Peak:420;RT:1.9
	Cordyceps militaris		Control	proa	6.9	Passed	Peak:200;RT:1.2</code></pre>


    <h3>6.2 Your Practice Mission </h3>
    <p>Once you have pasted the data into Excel, try executing these steps to clean and secure your biological data:</p>

    <h4>6.2.1. Tidy Data & Missing Data </h4>
    <ul>
        <li><strong>The Problem:</strong> Look closely at the <code>pH_Reading</code> column. There is a blank cell hiding there representing a missed measurement.</li>
        <li><strong>The Task:</strong> Highlight the <code>pH_Reading</code> column, press <code>Ctrl + G</code>, click <strong>Special...</strong>, and select <strong>Blanks</strong>. When Excel highlights the blank cell for Flask_004, type <code>NA</code> to standardize the missing data.</li>
    </ul>

    <h4>6.2.2. Data Validation & Error Catching </h4>
    <ul>
        <li><strong>The Problem:</strong> Someone recorded a biologically impossible pH.</li>
        <li><strong>The Task:</strong> Highlight the <code>pH_Reading</code> column. Go to <strong>Data &gt; Data Validation</strong>. Set it to allow a <strong>Decimal</strong> between <strong>1 and 14</strong>.</li>
        <li><strong>The Catch:</strong> Once you apply this rule, go to <strong>Data Validation &gt; Circle Invalid Data</strong>. You will see Excel draw a red circle around Flask_009, which has an impossible pH of 15.5. Change it to 7.5 to fix the error.</li>
    </ul>

    <h4>6.2.3. Efficiency Tools </h4>
    <ul>
        <li><strong>AutoFill:</strong> Notice that the last three rows are missing their <code>Sample_ID</code> identifiers. Highlight <code>Flask_011</code> and <code>Flask_012</code>, grab the fill handle in the bottom right corner, and drag down to automatically generate <code>Flask_013</code>, <code>Flask_014</code>, and <code>Flask_015</code>.</li>
        <li><strong>Flash Fill:</strong> You need to extract just the Genus for a database query. In cell <strong>C2</strong> (under the blank <code>Target_Genus</code> header), type <code>Serratia</code> and hit Enter. Press <code>Ctrl + E</code>. Excel will instantly extract "Escherichia", "Pseudomonas", "Cordyceps", etc., for the entire column.</li>
        <li><strong>Text-to-Columns:</strong> Your Gas Chromatography data is a mess in the <code>GC_Raw_Data</code> column. Highlight that column, go to <strong>Data &gt; Text to Columns</strong>. Choose <strong>Delimited</strong>, and check the boxes for both <strong>Semicolon</strong> and <strong>Colon</strong> to split the peaks and retention times (RT) into their own distinct, analyzable columns.</li>
    </ul>

    <h4>6.2.4. Data Cleaning </h4>
    <ul>
        <li><strong>Whitespace:</strong> Look at the <code>Treatment_Group</code> column—the text alignment is jagged because of invisible spaces. In a blank column to the right, type <code>=TRIM(D2)</code> and drag it down. Copy those clean results and use <strong>Paste as Values</strong> back over the original messy column.</li>
        <li><strong>Casing:</strong> The <code>Genetic_Marker</code> column has messy casing (<code>proA</code>, <code>PROA</code>, <code>proa</code>). In a blank column, use <code>=UPPER(E2)</code> to standardize everything to <code>PROA</code> so bioinformatics tools can read it uniformly.</li>
        <li><strong>Remove Duplicates:</strong> Click anywhere in the table, go to <strong>Data &gt; Remove Duplicates</strong>. Check all the boxes. Excel will find and safely delete the duplicate entry for <code>Flask_007</code> that was accidentally entered twice by a lab member.</li>
    </ul>

    <h4>6.2.5. Security</h4>
    <ul>
        <li><strong>The Problem:</strong> You want to calculate data without letting others break your formulas.</li>
        <li><strong>The Task:</strong> Create a new column called <code>Mock_Calculation</code> and type a simple formula like <code>=F2*10</code> (multiplying the pH by 10). Highlight the raw data columns, unlock them (Right Click &gt; Format Cells &gt; Protection &gt; uncheck Locked). Then go to <strong>Review &gt; Protect Sheet</strong>. Try to type over your calculation formula—Excel will block you, proving your template is safe!</li>
    </ul>
</article>

  `},I2=Object.freeze(Object.defineProperty({__proto__:null,default:_2},Symbol.toStringTag,{value:"Module"})),R2={id:"RK-2026-011",title:"Package and environment management in WSL",date:"2026-07-17",tags:["#Basics","#PackageManagement","#Programming"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>

    <h2>1. The Shared Bench Dilemma: Why Environments Matter</h2>
    <p>As you transition into bioinformatics and pharmacoinformatics, you will start using dozens of different computational tools. You might use one software to simulate how a drug binds to a protein, and another software to analyze RNA sequencing data. Here is the hidden trap: these tools are built by different scientists, at different times, using different underlying building blocks.</p>

    <p>Imagine you have a single, shared lab workbench. Project A requires the room temperature to be strictly 37°C for an enzyme assay. Project B requires the room to be 20°C for protein crystallization. You cannot run both projects on the same bench at the same time. If you try to change the temperature for Project B, you will instantly ruin Project A.</p>

    <p>In computer science, this catastrophe is called <strong>Dependency Hell</strong>. If you install every piece of bioinformatics software globally onto your main computer system (your "shared bench"), eventually, one tool will demand an older version of Python, overwriting the newer version that your other tool relies on. Suddenly, software that worked perfectly yesterday is completely broken today. </p>

    <h3>1.1 The Solution: Virtual Environments</h3>
    <p>An <strong>Environment Manager</strong> solves this by creating invisible, isolated "rooms" inside your computer. You can create a dedicated room for your drug discovery project with its specific tools, and a totally separate room for your genomic data analysis. What happens in one environment does not affect the others.</p>
    
    <h3>1.2 Local vs. Global Installations: Protecting the Operating System</h3>
    <p>Understanding "Dependency Hell" brings us to another critical concept: the difference between global and local software installations.</p>

    <p>A <strong>Global Installation</strong> is like modifying the central heating and ventilation system for an entire research building just because your specific experiment needs a colder room. When you install a Python package globally (often requiring administrator passwords or the <code>sudo</code> command), it becomes the default version for the entire computer. This is highly dangerous. Your WSL Linux system actually relies on a built-in, global version of Python to run its own background operating system tasks. If you forcefully upgrade or overwrite those global packages to satisfy a new bioinformatics tool, you risk crashing your entire Linux operating system.</p>

    <p>A <strong>Local Installation</strong>, on the other hand, is the equivalent of buying a standalone, self-contained incubator for your specific workbench. The temperature inside the incubator can be customized perfectly for your assay, but the rest of the building remains completely unaffected.</p>

    <p>This is exactly how Environment Managers like Mamba resolve the conflict. When you create and activate a Mamba environment, it installs your Python versions and packages <em>locally</em>—inside a safe, isolated folder dedicated strictly to that project. When the environment is active, Mamba intercepts your commands and temporarily tricks your computer into looking only at your local "incubator" rather than the global "building system." This allows you to install, delete, and experiment with complex pharmacoinformatics software safely, without ever needing administrator privileges and without risking damage to your computer's core OS.</p>

    <h2>2. What is a Package Manager?</h2>
    <p>In programming, nobody writes software from scratch. If you want to draw a graph, you do not write the math to draw pixels; you download a pre-built tool called a "package" or "library" that does it for you. <strong>Packages</strong> are just bundles of code written by other scientists that you plug into your own workflow.</p>

    <p>A <strong>Package Manager</strong> is like an incredibly efficient laboratory manager [here, software version manager]. When you tell it, <i>"I want to install Pandas for data analysis,"</i> the package manager goes to the internet, finds Pandas, checks exactly what other secondary software Pandas needs to function (its dependencies), downloads all of them, and installs them in the correct order. </p>

    <p>For Python and bioinformatics, the industry standard package manager used to be <a href="https://anaconda.org/channels/anaconda/packages/conda/overview" target="_blank">Conda</a>. However, we are going to use <strong><a href="https://github.com/mamba-org/mamba" target="_blank">Mamba</a></strong>. Mamba is a modern, dramatically faster drop-in replacement for Conda. While Conda might take 15 minutes to calculate how to install a complex pharmacoinformatics tool, Mamba does it in seconds.</p>

    <h2>3. Setting Up Mamba in WSL (Windows Subsystem for Linux)</h2>
    <p>Because most high-end bioinformatics tools are built for Linux, using WSL is the best way to run them on a Windows machine. Here is how to install the Mamba package manager directly into your WSL terminal.</p>

<h3>3.1: Download the Installer</h3>
    <p>Open your WSL terminal (like Ubuntu) and use the <code>wget</code> command to pull the Mambaforge installation [<a href="https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html" target="_blank">detailed guide on mamba</a>] script directly from the internet.</p>
    <pre><code>wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh"</code></pre>

    <h4>Understanding the Tool: What is <code>wget</code>?</h4>
    <p>If you are new to the command line, <code>wget</code> (which stands for "web get") is a built-in Linux utility used to download files directly from the internet. Think of it like ordering lab reagents directly to your bench from a catalog, completely bypassing a physical storefront.</p> 
    
    <p>Because your WSL terminal is a text-based environment without a graphical web browser (like Google Chrome or Microsoft Edge), you cannot simply click a "Download" button. Instead, <code>wget</code> allows you to fetch software installers, massive genomic datasets, or remote CSV files silently in the background just by providing the exact web link.</p>
    
    <p><strong>Basic Usage:</strong></p>
    <pre><code>wget [insert_direct_link_here]</code></pre>
    
    <h3>3.2: Run the Installer</h3>
    <p>Next, execute the script you just downloaded. The <code>bash</code> command tells Linux to run the file.</p>
    <pre><code>bash Miniforge3-Linux-x86_64.sh</code></pre>

    <p>As the installer runs, press <strong>Enter</strong> to scroll through the license agreement, type <strong>yes</strong> to accept it, and press <strong>Enter</strong> to confirm the default installation location. At the very end, it will ask if you want to initialize <a href="https://github.com/conda-forge/miniforge" target="_blank">Miniforge3</a>. Type <strong>yes</strong>—this is critical, as it connects Mamba to your terminal.</p>

    <h3>3.3: Restart Your Terminal</h3>
    <p>For the changes to take effect, close your WSL terminal window completely and open a fresh one. You should now see <code>(base)</code> typed on the left side of your command prompt. This means your base environment is active and Mamba is ready.</p>


    <h2>4. Creating and Managing Your First Environment</h2>
    <p>Now that our lab manager (Mamba) is hired, let us build a dedicated, isolated environment for basic data analysis and install Python into it.</p>

    <h3>Creating the Environment</h3>
    <p>To create a new environment, we use the <code>mamba create</code> command. We use the <code>-n</code> flag to name the environment, and then we tell Mamba exactly which version of Python we want installed in this specific room.</p>
    <pre><code>mamba create -n data_analysis_env python=3.10</code></pre>
    <p>Mamba will list the packages it plans to download. Type <strong>y</strong> and press Enter to proceed.</p>

    <h3>Entering the Environment</h3>
    <p>To enter this isolated workspace, you must "activate" it.</p>
    <pre><code>mamba activate data_analysis_env</code></pre>
    <p>Notice that your terminal prompt has changed from <code>(base)</code> to <code>(data_analysis_env)</code>. Everything you install now is safely trapped inside this specific environment.</p>

    <h3>Leaving the Environment</h3>
    <p>When you are done working and want to go back to your main system, simply deactivate it.</p>
    <pre><code>mamba deactivate</code></pre>

    <hr>

    <h2>5. Adding Packages and Checking Versions</h2>
    <p>Let us go back into our environment and add the tools we need for computational biology workflows.</p>

    <h3>Installing Data Analysis Packages</h3>
    <p>Make sure your environment is activated. Then, instruct Mamba to install Pandas (for spreadsheet manipulation) and SciPy (for advanced statistical and scientific equations).</p>
    <pre><code>mamba install pandas scipy</code></pre>
    <p>Mamba will automatically resolve all the dependencies. It knows exactly which version of SciPy works with the Python 3.10 we installed earlier.</p>

    <h3>Checking Your Python Version</h3>
    <p>It is good practice to verify what tools you are using, especially when writing the methods section of a research paper. To ask your environment what version of Python is currently active, type:</p>
    <pre><code>python --version</code></pre>
    <p>The terminal will output something like <code>Python 3.10.13</code>.</p>

    <h3>Auditing Your Environment</h3>
    <p>If you return to a project after three months and forget what you installed, you can ask Mamba to print a comprehensive inventory of every package in the current environment, along with their exact version numbers.</p>
    <pre><code>mamba list</code></pre>
    <p>This will output a neat table. If a collaborator asks how you achieved your results, you can share this exact list so they can recreate an identical environment on their own computer, guaranteeing total scientific reproducibility.</p>
    </article>

  `},B2=Object.freeze(Object.defineProperty({__proto__:null,default:R2},Symbol.toStringTag,{value:"Module"})),j2={id:"RK-2026-012",title:"python basics",date:"2026-07-22",tags:["#Basics","#Pyhton","#Programming"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
`,content:`

<article>

    <h2>1. What is Python and Why Use It?</h2>
    <p>Python is a <b>general-purpose programming language</b>, as it has a wide range of applications in many fields. In a wet lab, you wouldn't manually pipette 10,000 samples if a robotic liquid handler was available. Python is that robotic handler for your data specially when data is large-scale or repetitive and can not be managed effectively with traditional tools like excel, or google sheets.</p>
    
    <p>Most biologists start their data journey using spreadsheet software like Microsoft Excel. Excel is a <strong>Graphical User Interface (GUI)</strong> tool—you interact with your data by pointing, clicking, dragging, and highlighting. Python, on the other hand, is a <strong>script-based</strong> tool. Instead of clicking on cells, you write clear, English-like text commands to tell the computer exactly how to manipulate the data.</p>
    
    <p>You do not need to abandon spreadsheets entirely. Python does not replace Excel; rather, it takes over precisely at the point where Excel reaches its limits in speed, scale, and reproducibility.</p>

    <h2>2. Variables: Labeled Test Tubes for Your Data</h2>
    <p>The most foundational concept in Python is the <strong>variable</strong>. Think of a variable exactly like a labeled test tube or an empty box. You put a piece of data inside it, and you stick a label on the outside so the computer knows how to find it later.</p>

    <pre><code>organism_name = "Escherichia coli"
colony_count = 250
ph_level = 7.2</code></pre>

    <p>In the example above, <code>organism_name</code>, <code>colony_count</code>, and <code>ph_level</code> are the labels on our test tubes. Now, whenever we type <code>ph_level</code> later in our script, Python automatically knows we mean the number 7.2. This allows you to write formulas using words rather than trying to remember specific numbers.</p>

Below is a compact revision that adds only the most important good and bad practices for each data type.

<h2>3. Data Types: The Building Blocks</h2>
<p>Just as a lab freezer has different racks for RNA, proteins, and chemical reagents, Python categorizes data into different <strong>types</strong> so it knows how to handle them. Mixing them up causes errors, just like running a protein gel protocol on a DNA sample.</p>

<h3>Strings (Text)</h3>
<p>A <strong>string</strong> stores text. In Python, strings are written inside quotation marks so the computer can distinguish text from variable names or commands.</p>

<pre><code>dna_sequence = "ATGCGTAC"
sample_name = "Control_01"</code></pre>

<p><strong>Good practice:</strong> Use strings for labels, sample names, DNA sequences, treatment names, and other text-based information. Keep quotation marks consistent and use clear variable names.</p>

<p><strong>Common mistakes:</strong> Forgetting quotation marks is one of the most common beginner errors.</p>

<pre><code># Good
organism = "Escherichia coli"

# Bad - Python thinks Escherichia is a variable
organism = Escherichia coli</code></pre>

<p>Another common problem is inconsistent capitalization or accidental spaces. For example, <code>"Control"</code>, <code>"control"</code>, and <code>" Control "</code> are treated as different strings. This becomes important when grouping or filtering biological samples.</p>

<h3>Integers and Floats (Numbers)</h3>
<p>Python distinguishes between whole numbers and decimal numbers.</p>

<ul>
    <li><strong>Integers (<code>int</code>):</strong> Whole numbers used for counting discrete quantities, such as the number of samples, colonies, patients, or experimental days. Example: <code>45</code>.</li>
    <li><strong>Floats (<code>float</code>):</strong> Numbers containing decimal values, commonly used for measurements such as optical density, concentration, pH, temperature, or mass. Example: <code>1.45</code>.</li>
</ul>

<pre><code>sample_count = 45
optical_density = 1.45
temperature = 37.0</code></pre>

<p><strong>Good practice:</strong> Store measurements as numbers when you intend to perform calculations, comparisons, averages, or statistical analysis.</p>

<p><strong>Common mistakes:</strong> Do not place numerical measurements inside quotation marks unless they are intentionally being stored as text.</p>

<pre><code># Good
ph_value = 7.2

# Bad for mathematical analysis
ph_value = "7.2"</code></pre>

<p>The second value looks like a number to a human, but Python treats it as text. This can cause errors when calculating means, performing comparisons, or creating statistical summaries.</p>

<h3>Lists (Collections of Data)</h3>
<p>A <strong>list</strong> stores multiple values inside a single variable. Lists are enclosed in square brackets, and individual elements are separated by commas.</p>

<pre><code>treatment_groups = ["Control", "Drug_A", "Drug_B"]

temperature_readings = [37.0, 37.5, 38.2, 39.0]</code></pre>

<p><strong>Good practice:</strong> Use lists when several related values need to be stored together, such as replicate measurements, sample identifiers, treatment groups, gene names, or experimental time points.</p>

<p><strong>Common mistakes:</strong> Remember to separate individual elements with commas.</p>

<pre><code># Good
samples = ["S1", "S2", "S3"]

# Bad - commas are missing
samples = ["S1" "S2" "S3"]</code></pre>

<p>Another common mistake is using the wrong position when retrieving an item. Python starts counting list positions from <code>0</code>, not <code>1</code>.</p>

<pre><code>samples = ["S1", "S2", "S3"]

print(samples[0])
# Output: S1

print(samples[1])
# Output: S2</code></pre>

<p>This zero-based indexing is important when selecting samples, genes, measurements, or other ordered data later in a Python analysis.</p>

    

    <h2>4. Functions: Standard Operating Procedures (SOPs)</h2>
    <p>A <strong>function</strong> is a pre-packaged set of instructions that does a specific job—much like a Standard Operating Procedure (SOP) in a lab. You provide the input (the raw material), the function does the work behind the scenes, and then it hands you the output.</p>

    <p>Python comes with many built-in functions. For example, the <code>len()</code> function calculates the length of whatever you put inside its parentheses.</p>

    <pre><code>sequence = "ATGC"
sequence_length = len(sequence)
print(sequence_length)</code></pre>

    <p>In this script, the <code>len()</code> function counts the characters in the DNA sequence and outputs the number 4. The <code>print()</code> function then displays that number on your screen.</p>

    

    <h2>5. How Python Connects to Data Analysis: Pandas vs. Excel</h2>
    <p>While assigning single variables is foundational, in a real bioinformatics workflow, you will be assigning massive datasets containing millions of rows to a single variable. This is done using an incredibly powerful Python add-on library called <strong>Pandas</strong>.</p>

    <h3>Pandas: The "Excel of Python"</h3>
    <p>If you understand how Excel works, you already understand the core logic of Pandas. In Excel, you have worksheets with rows and columns. In Pandas, that exact same row-and-column structure is called a <strong>DataFrame</strong>. The difference is solely in how you interact with it: Excel uses a mouse; Pandas uses code.</p>
    
    <pre><code>import pandas as pd

# This is the Python equivalent of double-clicking a CSV file to open it
experiment_data = pd.read_csv("raw_spectrophotometer_readings.csv")

# This is the equivalent of using the "Remove Duplicates" button
clean_data = experiment_data.drop_duplicates()</code></pre>

    <h3>When Excel is Perfectly Fine</h3>
    <p>You do not need to write a Python script for everything. Excel remains the superior tool for specific tasks:</p>
    <ul>
        <li><strong>Data Entry:</strong> Excel is excellent for manually typing in daily observations, like colony morphologies or simple pH readings at the bench.</li>
        <li><strong>Small Datasets:</strong> If your dataset is only a few hundred rows, Excel will load instantly and let you scroll through it visually.</li>
        <li><strong>Quick Formatting and Sharing:</strong> If you need to highlight a few specific cells for a quick presentation to your Principal Investigator, Excel is the fastest way to get it done.</li>
    </ul>

    <h3>When You MUST Switch to Python and Pandas</h3>
    <p>Excel breaks down when biology scales up. You should transition your workflow to Python when you encounter the following scenarios:</p>
    <ul>
        <li><strong>Breaking the Size Limit:</strong> Excel has a hard limit of 1,048,576 rows. If you open a transcriptomics dataset (RNA-Seq) or molecular dynamics simulation output with 2 million rows, Excel will simply delete half your data without warning. Python can handle tens of millions of rows effortlessly on a standard laptop.</li>
        <li><strong>Repetitive Cleaning:</strong> If your GC instrument spits out 50 separate CSV files that all need the exact same whitespace removal and Text-to-Columns splitting, doing it manually in Excel takes hours. In Python, you write a "For Loop" once, and it cleans all 50 files in 3 seconds.</li>
        <li><strong>Merging Massive Files:</strong> Trying to run a <code>VLOOKUP</code> formula in Excel across 100,000 rows will freeze your computer. Pandas can merge and cross-reference two massive biological databases instantly.</li>
        <li><strong>Strict Reproducibility:</strong> When you point and click in Excel, there is no record of the steps you took to get from raw data to your final graph. In Python, your script <em>is</em> your audit trail. Anyone can read your code and see exactly how you handled missing values and outliers, which is increasingly required by top-tier scientific journals.</li>
    </ul>

</article>

  `},L2=Object.freeze(Object.defineProperty({__proto__:null,default:j2},Symbol.toStringTag,{value:"Module"})),F2={id:"RK-2026-013",title:"Data Cleaning & Manipulation in Python",date:"2026-07-29",tags:["#Data","#Python","#manipulation","#pandas"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
A beginner-friendly introduction to cleaning, validating, and restructuring biological datasets with pandas, followed by a guided practical exercise containing controlled data-quality problems.
`,content:`
<article>

<h2>1. Setting Up Your Python Lab: Scripts and IPython</h2>
<p>Before cleaning experimental data, it helps to understand the two places where beginners commonly work with Python: a <strong>script</strong> and an <strong>interactive console</strong>. A script is useful when you want to preserve a complete analysis workflow, while an interactive console is useful when you want to test one command at a time and immediately inspect the result.</p>

<h3>1.1 What is a Python Script?</h3>
<p>A Python script is a plain-text file ending in <code>.py</code>, for example <code>clean_data.py</code>. Instead of clicking buttons to sort, filter, or transform a spreadsheet, you write the instructions as Python code. Python reads the script from top to bottom and performs the commands in sequence.</p>

<p><strong>Why this matters in biological research:</strong> a script becomes a reproducible record of how raw measurements were transformed into an analysis-ready dataset. If the same cleaning procedure must later be applied to another sequencing run, fermentation experiment, plate-reader export, or replicate batch, the script can be reused instead of repeating manual spreadsheet operations.</p>

<h3>1.2 Introduction to IPython</h3>
<p>When learning data analysis, it is often easier to execute one command at a time and inspect the result before continuing. <strong>IPython</strong> is an interactive Python shell designed for this type of exploratory work. You enter a Python command, press Enter, and immediately see the output.</p>

<p><strong>Install pandas and IPython:</strong></p>
<pre><code># Run this command in Terminal, PowerShell, or Command Prompt
python -m pip install pandas ipython

# Start an interactive IPython session
ipython
</code></pre>

<p>If your operating system uses <code>python3</code> instead of <code>python</code>, use <code>python3 -m pip install pandas ipython</code>. After IPython starts, you will see a prompt such as <code>In [1]:</code>. This means Python is ready to receive commands.</p>

<p><strong>Where IPython is useful:</strong> use it while learning a new pandas function, checking whether a column loaded correctly, testing a filter, or examining a suspicious row. Once the commands work as expected, they can be copied into a <code>.py</code> script to create a permanent workflow.</p>

<hr />

<h2>2. "Tidy Data" &amp; Best Practices in Python</h2>
<p>How experimental data is arranged strongly affects how easily it can be analyzed. A useful starting rule is the idea of <strong>tidy data</strong>: each row represents one observation, each column represents one variable, and each cell contains one value.</p>

<p>Python's <strong>pandas</strong> library stores tabular data in an object called a <strong>DataFrame</strong>. A DataFrame can be thought of as a programmable table. Unlike a spreadsheet, the operations performed on it can be recorded exactly as code.</p>

<h3>2.1 Observations in Rows, Variables in Columns</h3>
<p>In a microbiology experiment, one row might represent one flask, colony, isolate, well, or time point. Columns then describe properties of that observation, such as treatment group, pH, optical density, gene marker, metabolite concentration, or instrument status.</p>

<table class="science-table" data-id="table-1">
    <caption>Table 1: Example of a tidy data structure in a laboratory experiment.</caption>
    <thead>
        <tr>
            <th>Sample_ID</th>
            <th>Treatment_Group</th>
            <th>pH_Level</th>
            <th>Concentration_mM</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Flask_001</td>
            <td>Control</td>
            <td>7.2</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>Flask_002</td>
            <td>Adapted_Strain</td>
            <td>7.4</td>
            <td>15.5</td>
        </tr>
    </tbody>
</table>

<p><strong>Where this structure is useful:</strong> tidy data makes it much easier to calculate group means, compare treatments, generate plots, fit statistical models, merge sample metadata with omics results, or select subsets of samples using reproducible rules.</p>

<h3>2.2 Reading CSV and TSV Files</h3>
<p>Many laboratory programs export data as <strong>CSV</strong> (Comma-Separated Values) or <strong>TSV</strong> (Tab-Separated Values). These formats are useful because they are plain text and can be read by many analysis programs.</p>

<pre><code># Import pandas and give it the common short name "pd"
import pandas as pd

# Read a TSV file. The separator is a tab character.
df = pd.read_csv("experiment_data.tsv", sep="&#92;t")

# Display the first five rows
print(df.head())

# Display the number of rows and columns
print(df.shape)

# Display the column names
print(df.columns.tolist())
</code></pre>

<p>The variable <code>df</code> now refers to the DataFrame stored in memory. The original file has not been changed simply by reading it.</p>

<p><strong>Important beginner note:</strong> do not use <code>sep=r"&#92;s+"</code> for the practice dataset in this article. That separator treats any run of whitespace as a column boundary. Biological names such as <code>Serratia marcescens</code> contain a space and would therefore be split incorrectly. Use the separator that actually belongs to the file: a tab for TSV and a comma for CSV.</p>

<p><strong>Where file inspection is useful:</strong> commands such as <code>head()</code>, <code>shape</code>, and <code>columns</code> are simple quality-control checks. They help confirm that the file was parsed into the number of columns you expected before any cleaning begins.</p>

<hr />

<h2>3. The Detective Work: Locating and Correcting Mistakes</h2>
<p>Real laboratory data often contains missing values, typing errors, inconsistent labels, duplicate records, or rows that have shifted into the wrong columns. A safe cleaning workflow follows the same general pattern: <strong>detect the problem, inspect the affected rows, correct only what can be justified, and verify the result</strong>.</p>

<h3>3.1 Missing or Empty Data (NaNs)</h3>
<p>A blank measurement may occur because an instrument failed, a sample was lost, a measurement was below detection, or a value was never recorded. pandas commonly represents missing values as <code>NaN</code>.</p>

<pre><code># Count missing values in every column
print(df.isna().sum())

# Display every row containing at least one missing value
missing_rows = df[df.isna().any(axis=1)]
print(missing_rows)
</code></pre>

<p>The expression <code>df.isna()</code> creates a table of <code>True</code> and <code>False</code> values. <code>True</code> means that a value is missing. Adding <code>.sum()</code> counts how many <code>True</code> values occur in each column.</p>

<p><strong>How missing data should be corrected:</strong> there is no universal command that is scientifically correct for every dataset. If a measurement is genuinely unknown, keeping it as <code>NaN</code> may be more defensible than inventing a replacement. A row should only be removed or a value imputed when the experimental design or analysis plan justifies that decision.</p>

<pre><code># Example: remove samples only when pH is required for the planned analysis
df_without_missing_ph = df.dropna(subset=["pH_Reading"])

# Example: replace missing descriptive text with a clear label
df["Comment"] = df["Comment"].fillna("Not_recorded")
</code></pre>

<p><strong>Where this is useful:</strong> missing-value checks are essential before calculating means, running statistical tests, fitting machine-learning models, or comparing experimental groups because many methods treat missing values differently.</p>

<h3>3.2 Shifted or Misaligned Data</h3>
<p>A shifted row occurs when one expected field is absent and the remaining values appear under the wrong headers. For example, if a row is missing <code>Sample_ID</code>, the organism name may appear in the <code>Sample_ID</code> column, and the word <code>Passed</code> may eventually appear in a column that should contain a numeric pH value.</p>

<p>A useful way to detect this problem is to ask whether each column contains the <strong>type of information</strong> expected for that variable. A pH column should normally be numeric. If text appears in it, the row deserves inspection.</p>

<pre><code># Try to interpret pH_Reading as numbers.
# Any non-numeric text is converted to NaN in this temporary Series.
numeric_ph = pd.to_numeric(df["pH_Reading"], errors="coerce")

# A shifted row is suspected when conversion fails,
# but the original cell was not actually empty.
shifted_mask = numeric_ph.isna() &amp; df["pH_Reading"].notna()
shifted_rows = df.loc[shifted_mask]

print(shifted_rows)
</code></pre>

<p><code>errors="coerce"</code> is useful for diagnosis because pandas does not stop with an error when it encounters text. Instead, values that cannot be converted become temporary <code>NaN</code> values. The second condition, <code>df["pH_Reading"].notna()</code>, prevents a genuinely missing pH measurement from being mistaken for a shifted row.</p>

<p><strong>Do not automatically invent missing identifiers.</strong> In real research data, a missing sample ID should be recovered from the laboratory notebook, instrument run sheet, barcode record, or another authoritative source. The practical exercise later in this article provides the correct IDs explicitly so that students can safely practice the mechanics of repairing a shift.</p>

<p><strong>Where this is useful:</strong> type-based checks can identify columns displaced during copy-and-paste operations, malformed instrument exports, or manual data entry errors. The same logic can be applied to dates, integer counts, concentrations, categorical labels, and genomic coordinates.</p>

<h3>3.3 Out-of-Range Biological Values</h3>
<p>A value can be numerically valid to Python but still be unsuitable for the experiment. For example, a recorded pH of <code>15.5</code> is outside the accepted range defined for the biological culture dataset used in this exercise.</p>

<pre><code># Convert the column to numbers after structural problems have been repaired
df["pH_Reading"] = pd.to_numeric(df["pH_Reading"], errors="coerce")

# For this exercise, flag non-missing pH values outside 0 to 14
invalid_ph = df[
    df["pH_Reading"].notna()
    &amp; ~df["pH_Reading"].between(0, 14)
]

print(invalid_ph)
</code></pre>

<p>The <code>between(0, 14)</code> method returns <code>True</code> for values inside the accepted interval. The symbol <code>~</code> reverses the result, allowing us to locate values outside that interval.</p>

<p><strong>Scientific caution:</strong> validation boundaries should come from the experimental protocol, instrument specification, or biological expectations. In many real culture experiments, the acceptable pH interval would be much narrower than 0–14. The purpose of this exercise is to demonstrate the logic of range checking.</p>

<p><strong>Where this is useful:</strong> the same method can flag impossible cell counts, negative concentrations, optical-density values outside an instrument range, temperatures outside an incubation protocol, or sequence lengths inconsistent with an assay design.</p>

<h3>3.4 Duplicate Entries</h3>
<p>Duplicate records can appear when a row is copied twice, a file is concatenated incorrectly, or the same instrument result is imported more than once. However, repeated biological measurements are not automatically mistakes. Technical and biological replicates may legitimately resemble one another.</p>

<pre><code># Show every row that shares the same Sample_ID with another row
possible_duplicates = df[
    df.duplicated(subset=["Sample_ID"], keep=False)
]

print(possible_duplicates)
</code></pre>

<p><code>keep=False</code> displays every member of a duplicate group so that the records can be compared before anything is deleted.</p>

<pre><code># Use this only after confirming that the repeated Sample_ID is accidental
df = df.drop_duplicates(subset=["Sample_ID"], keep="first").copy()
</code></pre>

<p><strong>Where this is useful:</strong> duplicate detection is particularly important after combining sample sheets, merging sequencing metadata, joining plate-reader runs, or appending results from repeated instrument exports.</p>

<h3>3.5 Inconsistent Text Formatting</h3>
<p>Text values can differ because of capitalization or accidental spaces. For example, <code>proA</code>, <code>PROA</code>, <code>ProA</code>, and <code> proa </code> look similar to a person but are different strings to a computer.</p>

<pre><code># Inspect the current labels and how often each one appears
print(df["Genetic_Marker"].value_counts(dropna=False))

# Remove leading/trailing spaces and convert the labels to uppercase
df["Genetic_Marker"] = (
    df["Genetic_Marker"]
    .astype("string")
    .str.strip()
    .str.upper()
)

# Confirm the standardized values
print(df["Genetic_Marker"].unique())
</code></pre>

<p>The chained operations are applied from top to bottom. <code>.str.strip()</code> removes unwanted spaces at the beginning and end of a string, while <code>.str.upper()</code> converts letters to uppercase.</p>

<p><strong>Where this is useful:</strong> standardization prevents the same biological category from being split into several groups during counting, plotting, statistical testing, or merging. It is frequently useful for gene symbols, treatment labels, species codes, sample classes, and phenotype names.</p>

<hr />

<h2>4. Parsing Complex Instrument Outputs</h2>
<p>Laboratory instruments sometimes export several measurements inside one text field. For example, <code>Peak:450;RT:1.4</code> contains a peak value and a retention time in the same cell. These values are difficult to analyze numerically until they are separated.</p>

<pre><code># Split each string once at the semicolon
# expand=True returns the pieces as separate columns
gc_split = df["GC_Raw_Data"].str.split(";", n=1, expand=True)

# Remove the text labels and safely convert the remaining text to numbers
df["GC_Peak"] = pd.to_numeric(
    gc_split[0].str.replace("Peak:", "", regex=False),
    errors="coerce"
)

df["GC_RT"] = pd.to_numeric(
    gc_split[1].str.replace("RT:", "", regex=False),
    errors="coerce"
)

# Inspect the raw and parsed values together before deleting anything
print(df[["GC_Raw_Data", "GC_Peak", "GC_RT"]].head())
</code></pre>

<p><code>str.split()</code> separates the original text, <code>str.replace()</code> removes labels that are not part of the numeric measurement, and <code>pd.to_numeric()</code> converts the cleaned text into numbers that can be used for calculations.</p>

<p><strong>Why the raw column is retained at first:</strong> keeping <code>GC_Raw_Data</code> beside the parsed columns makes it easy to verify that the extraction worked correctly. After the parsed values have been checked, the raw field may be removed from a derived analysis table if there is a clear reason to do so. The original input file should still remain unchanged.</p>

<p><strong>Where this is useful:</strong> the same approach can separate instrument fields containing peak area, retention time, quality flags, genomic coordinates, plate positions, dilution labels, or compound identifiers.</p>

<hr />

<h2>5. Data Integrity and Version Control in Python</h2>
<p>Professional handling of biological data requires a clear distinction between <strong>raw data</strong> and <strong>derived data</strong>. The ALCOA+ data-integrity framework emphasizes records that are attributable, legible, contemporaneous, original, accurate, complete, consistent, enduring, and available.</p>

<h3>5.1 Protecting the Raw File</h3>
<p>Python does not automatically make a raw file immutable. A script can overwrite a file if it is instructed to do so. The safe practice is therefore deliberate: read the raw file, perform transformations in memory, and save the cleaned result under a different filename.</p>

<pre><code># Read the original file
raw_df = pd.read_csv("experiment_data.tsv", sep="&#92;t")

# Work on a copy so the purpose is explicit
clean_df = raw_df.copy()

# ...cleaning steps are performed on clean_df...

# Save a new derived file rather than overwriting the input
clean_df.to_csv(
    "experiment_data_CLEANED.tsv",
    sep="&#92;t",
    index=False
)
</code></pre>

<p><code>index=False</code> prevents pandas from adding the DataFrame's row index as an extra output column. The filename clearly distinguishes the derived file from the raw input.</p>

<p><strong>Where this is useful:</strong> retaining the original file makes it possible to repeat the analysis, audit a correction, compare pipeline versions, or explain exactly how a final result was produced.</p>

<hr />

<h2>6. Interactive Practice: Applying the Rules</h2>
<p>This practical combines the ideas introduced above into one controlled cleaning exercise. The dataset contains several intentional problems, but the problems are arranged so that each one can be detected using a method already explained in the article.</p>

<p>The dataset contains <strong>16 records and 8 columns when first loaded</strong>. Three records are missing their <code>Sample_ID</code>, one pH measurement is genuinely missing, one sample is duplicated, one pH value is outside the accepted exercise range, genetic-marker labels use inconsistent capitalization, and the GC measurements are stored as compound text.</p>

<p><strong>Do not repair the raw text manually before loading it.</strong> The purpose of the exercise is to practice detecting and correcting the problems with pandas. Copy the dataset exactly as shown into a plain-text file named <code>practice.tsv</code>.</p>

<h3>6.1 The Raw Practice Dataset</h3>
<pre><code>Sample_ID	Full_Organism_Name	Target_Genus	Treatment_Group	Genetic_Marker	pH_Reading	Status	GC_Raw_Data
Flask_001	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_002	Serratia marcescens	Serratia	Adapted_Strain	proa	7.4	Passed	Peak:510;RT:1.45
Flask_003	Escherichia coli	Escherichia	Control	PROA	6.8	Failed	Peak:120;RT:1.1
Flask_004	Pseudomonas aeruginosa	Pseudomonas	Wild_Type	proA	NA	Failed	Peak:0;RT:0
Flask_005	Cordyceps militaris	Cordyceps	Adapted_Strain	ProA	6.5	Passed	Peak:600;RT:2.1
Flask_006	Bacillus subtilis	Bacillus	Control	proa	7.1	Passed	Peak:310;RT:1.8
Flask_007	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_007	Serratia marcescens	Serratia	Wild_Type	proA	7.2	Passed	Peak:450;RT:1.4
Flask_008	Escherichia coli	Escherichia	Adapted_Strain	PROA	7.0	Passed	Peak:550;RT:1.5
Flask_009	Pseudomonas aeruginosa	Pseudomonas	Control	proa	15.5	Failed	Peak:20;RT:1.1
Flask_010	Cordyceps militaris	Cordyceps	Wild_Type	ProA	6.8	Passed	Peak:580;RT:2.0
Flask_011	Bacillus subtilis	Bacillus	Adapted_Strain	proA	7.0	Passed	Peak:400;RT:1.9
Flask_012	Serratia marcescens	Serratia	Control	proA	7.2	Passed	Peak:150;RT:1.3
Escherichia coli	Escherichia	Wild_Type	PROA	7.1	Passed	Peak:480;RT:1.4
Bacillus subtilis	Bacillus	Adapted_Strain	proA	7.0	Passed	Peak:420;RT:1.9
Cordyceps militaris	Cordyceps	Control	proa	6.9	Passed	Peak:200;RT:1.2
</code></pre>

<h3>6.2 Your Practice Mission</h3>
<p>Work through the following steps in order. The order matters because some problems should be repaired before later checks are performed. In particular, repair the shifted rows before converting <code>pH_Reading</code> permanently to numeric values.</p>

<h4>6.2.1 Load the Dataset and Confirm Its Structure</h4>
<p>Start a new IPython session in the folder containing <code>practice.tsv</code>, then run:</p>

<pre><code>import pandas as pd

df = pd.read_csv("practice.tsv", sep="&#92;t")

print(df.head())
print(df.shape)
print(df.columns.tolist())
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>df.shape</code> should report <code>(16, 8)</code>. This means pandas found 16 rows and 8 columns. If you see a different number of columns, first check that the file was saved with real tab separators and that the header was copied correctly.</p>

<p><strong>What you learned:</strong> always inspect the basic structure immediately after import. This simple habit can reveal a wrong delimiter, missing header, extra separator, or malformed export before more complicated analysis begins.</p>

<h4>6.2.2 Inspect Missing Values Before Changing Anything</h4>
<pre><code>print(df.isna().sum())

rows_with_missing_values = df[df.isna().any(axis=1)]
print(rows_with_missing_values)
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>pH_Reading</code> should contain one missing value because <code>Flask_004</code> has <code>NA</code>. <code>GC_Raw_Data</code> should contain three missing values. Those three missing GC fields are an important clue that the final three rows may be structurally shifted.</p>

<p>Notice that the missing <code>Sample_ID</code> values do <em>not</em> appear as missing in the <code>Sample_ID</code> column. This is because the organism names have moved into that column. A structural error can therefore hide a missing field rather than simply producing an obvious blank cell.</p>

<p><strong>What you learned:</strong> missing-value counts are a diagnostic tool, not just a cleanup command. Unexpected patterns of missingness can reveal formatting problems in laboratory exports.</p>

<h4>6.2.3 Detect the Three Shifted Rows</h4>
<p>The pH column should contain numbers. In the shifted rows, however, the value <code>Passed</code> has moved into <code>pH_Reading</code>. We can use this biological and data-type expectation to identify the affected records.</p>

<pre><code>numeric_ph = pd.to_numeric(df["pH_Reading"], errors="coerce")

shifted_mask = numeric_ph.isna() &amp; df["pH_Reading"].notna()
shifted_rows = df.loc[shifted_mask]

print(shifted_rows)
print("Number of shifted rows:", shifted_mask.sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> the number of shifted rows should be <code>3</code>. The temporary conversion turns the text <code>Passed</code> into <code>NaN</code>, but the genuinely missing pH value for <code>Flask_004</code> is excluded because its original value is already missing.</p>

<p><strong>What you learned:</strong> a temporary conversion with <code>errors="coerce"</code> is a powerful way to locate values that violate the expected data type without stopping the program.</p>

<h4>6.2.4 Repair the Shifted Rows</h4>
<p>For the three detected rows, every value needs to move one column to the right. The exercise also tells us that the missing sample identifiers are <code>Flask_013</code>, <code>Flask_014</code>, and <code>Flask_015</code>. In a real experiment, these IDs would need to come from an authoritative laboratory record.</p>

<pre><code># Move columns 1 through 7 one position to the right
# using columns 0 through 6 as the source values.
df.loc[shifted_mask, df.columns[1:]] = (
    df.loc[shifted_mask, df.columns[:-1]].to_numpy()
)

# Insert the known IDs supplied for this exercise
df.loc[shifted_mask, "Sample_ID"] = [
    "Flask_013",
    "Flask_014",
    "Flask_015"
]

# Verify the repaired records
print(df.loc[shifted_mask])
</code></pre>

<p><strong>Expected checkpoint:</strong> the three repaired rows should now have proper sample IDs, organism names under <code>Full_Organism_Name</code>, numeric-looking pH values, <code>Passed</code> under <code>Status</code>, and the peak/retention-time string under <code>GC_Raw_Data</code>.</p>

<p><strong>What you learned:</strong> <code>df.loc[rows, columns]</code> lets you modify only a precisely selected part of a DataFrame. This is useful when a data-quality problem affects a known subset of samples rather than the entire dataset.</p>

<h4>6.2.5 Convert pH to Numeric and Re-check Missing Values</h4>
<p>Now that the structural problem has been repaired, the pH column can safely be converted to numeric form.</p>

<pre><code>df["pH_Reading"] = pd.to_numeric(
    df["pH_Reading"],
    errors="coerce"
)

missing_ph = df[df["pH_Reading"].isna()]
print(missing_ph[["Sample_ID", "Full_Organism_Name", "pH_Reading"]])
</code></pre>

<p><strong>Expected checkpoint:</strong> only <code>Flask_004</code> should have a missing pH value. Leave this value as <code>NaN</code> for the exercise because no evidence has been provided for what the missing measurement should be.</p>

<p><strong>What you learned:</strong> missing data should not automatically be replaced with a convenient number. In biological research, the reason for missingness should be considered before dropping or imputing a value.</p>

<h4>6.2.6 Standardize the Genetic Marker Labels</h4>
<p>Inspect the current marker labels before cleaning them:</p>

<pre><code>print(df["Genetic_Marker"].value_counts())
</code></pre>

<p>You should see several spellings of the same marker, including <code>proA</code>, <code>proa</code>, <code>PROA</code>, and <code>ProA</code>. Standardize the complete column:</p>

<pre><code>df["Genetic_Marker"] = (
    df["Genetic_Marker"]
    .astype("string")
    .str.strip()
    .str.upper()
)

print(df["Genetic_Marker"].unique())
</code></pre>

<p><strong>Expected checkpoint:</strong> the unique marker list should now contain only <code>PROA</code>.</p>

<p><strong>What you learned:</strong> text standardization prevents one biological category from being accidentally analyzed as several different groups.</p>

<h4>6.2.7 Find and Remove the Accidental Duplicate</h4>
<p>First display every record that shares a duplicate <code>Sample_ID</code>:</p>

<pre><code>duplicate_rows = df[
    df.duplicated(subset=["Sample_ID"], keep=False)
]

print(duplicate_rows)
</code></pre>

<p><strong>Expected checkpoint:</strong> two identical rows for <code>Flask_007</code> should be displayed. After inspecting them, remove the repeated entry:</p>

<pre><code>df = df.drop_duplicates(
    subset=["Sample_ID"],
    keep="first"
).copy()

print(df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the DataFrame should now contain <code>15</code> rows.</p>

<p><strong>What you learned:</strong> duplicates should be inspected before removal. In biological datasets, repeated measurements may represent real replicates, so matching values or identifiers should not be deleted blindly.</p>

<h4>6.2.8 Validate the pH Range</h4>
<p>For this exercise, accepted pH values are defined as 0 through 14. Missing values are allowed to remain missing because they represent a different data-quality problem.</p>

<pre><code>invalid_ph = df[
    df["pH_Reading"].notna()
    &amp; ~df["pH_Reading"].between(0, 14)
]

print(invalid_ph[["Sample_ID", "pH_Reading"]])
</code></pre>

<p><strong>Expected checkpoint:</strong> <code>Flask_009</code> should be the only flagged record, with a pH value of <code>15.5</code>.</p>

<p>For this training dataset, remove records outside the accepted range while preserving genuinely missing pH values:</p>

<pre><code>df = df[
    df["pH_Reading"].between(0, 14)
    | df["pH_Reading"].isna()
].copy()

print(df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the DataFrame should now contain <code>14</code> rows.</p>

<p><strong>What you learned:</strong> Boolean filtering converts a scientific rule into a reproducible data-validation rule. The same approach can be used for acceptable temperature ranges, concentration limits, read-depth thresholds, colony counts, or other study-specific criteria.</p>

<h4>6.2.9 Parse the GC Instrument Output</h4>
<p>The <code>GC_Raw_Data</code> column contains two measurements in one string. Split them and convert them into numeric columns:</p>

<pre><code>gc_split = df["GC_Raw_Data"].str.split(
    ";",
    n=1,
    expand=True
)

df["GC_Peak"] = pd.to_numeric(
    gc_split[0].str.replace("Peak:", "", regex=False),
    errors="coerce"
)

df["GC_RT"] = pd.to_numeric(
    gc_split[1].str.replace("RT:", "", regex=False),
    errors="coerce"
)

print(df[["GC_Raw_Data", "GC_Peak", "GC_RT"]].head())
print(df[["GC_Peak", "GC_RT"]].isna().sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> both parsed columns should contain numeric values, and their missing-value counts should be zero.</p>

<p><strong>What you learned:</strong> text parsing converts instrument-specific strings into separate variables that can be summarized, plotted, compared between treatments, or included in statistical models.</p>

<h4>6.2.10 Run Final Quality-Control Checks</h4>
<p>Before saving the cleaned file, confirm that the important assumptions are now satisfied:</p>

<pre><code>print("Final shape:", df.shape)
print("Sample IDs are unique:", df["Sample_ID"].is_unique)
print("Marker labels:", df["Genetic_Marker"].unique())
print(
    "All recorded pH values are valid:",
    df["pH_Reading"].dropna().between(0, 14).all()
)
print(df.isna().sum())
</code></pre>

<p><strong>Expected checkpoint:</strong> the final shape should be <code>(14, 10)</code>, sample IDs should be unique, the genetic marker should be standardized to <code>PROA</code>, all recorded pH values should fall inside the accepted range, and the only remaining missing value should be the intentionally unknown pH for <code>Flask_004</code>.</p>

<p><strong>What you learned:</strong> cleaning is not complete when the code finishes without an error. A good pipeline ends with explicit checks showing that the cleaned data now satisfies the assumptions required for analysis.</p>

<h4>6.2.11 Export and Reload the Cleaned Dataset</h4>
<p>Save the cleaned data under a new filename so that <code>practice.tsv</code> remains unchanged:</p>

<pre><code>df.to_csv(
    "practice_CLEANED.tsv",
    sep="&#92;t",
    index=False
)
</code></pre>

<p>As a final check, reload the exported file:</p>

<pre><code>check_df = pd.read_csv(
    "practice_CLEANED.tsv",
    sep="&#92;t"
)

print(check_df.head())
print(check_df.shape)
</code></pre>

<p><strong>Expected checkpoint:</strong> the reloaded file should contain <code>14</code> rows and <code>10</code> columns.</p>

<p><strong>What you learned:</strong> reloading an exported file is a simple but valuable quality-control step. It confirms that the saved file can be read successfully and that the output structure matches what you intended to produce.</p>

<h3>6.3 What This Practical Has Taught You</h3>
<p>This exercise follows the same reasoning used in larger biological data-cleaning pipelines. You first inspected the file structure, then used missing-value patterns and expected data types to detect structural errors. After repairing the table, you standardized categorical text, reviewed duplicates, applied a biological validation rule, parsed instrument output, and verified the final dataset before export.</p>

<p>These methods scale beyond the small practice table. The same pandas operations can be used when preparing microbial growth data, sample metadata for sequencing projects, metabolomics or chromatography exports, phenotype tables, plate-reader measurements, environmental monitoring data, or intermediate files used in bioinformatics workflows.</p>

<p>The most important habit is to treat cleaning as a sequence of <strong>inspect → detect → correct → verify</strong>. This reduces the chance of silently changing valid observations while still producing a reproducible record of every justified transformation.</p>

</article>

  `},q2=Object.freeze(Object.defineProperty({__proto__:null,default:F2},Symbol.toStringTag,{value:"Module"})),O2={id:"RK-2026-014",title:"Python Syntax and IDEs",date:"2026-08-07",tags:["#Python","#IDEs","#Jupyter"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
Learn the basic syntax of Python and understand how Python code can be written and executed using common development environments such as Visual Studio Code and Jupyter Notebook. The article focuses especially on Jupyter Notebook as an interactive environment for learning Python and performing biological data analysis.
`,content:`
<article>

<h2>1. Introduction to Python Syntax and Development Environments</h2>

<p>Learning Python involves two closely related skills. First, you need to understand <strong>Python syntax</strong>, which means the rules used to write valid Python instructions. Second, you need a suitable environment in which those instructions can be written, executed, tested, and corrected.</p>

<p>Python code can be written using several different tools. Simple scripts can be written in a text editor, larger projects are often developed using an <strong>Integrated Development Environment (IDE)</strong> or code editor such as <strong>Visual Studio Code</strong>, and interactive analysis is frequently performed using <strong>Jupyter Notebook</strong>.</p>

<p>For biological data analysis, Jupyter Notebook is particularly useful because individual pieces of code can be executed separately. You can therefore load a dataset, inspect it, clean it, calculate statistics, and visualize results one step at a time without repeatedly running an entire program.</p>


<h2>2. What Is Python Syntax?</h2>

<p><strong>Syntax</strong> refers to the rules that determine how Python instructions must be written. Just as biological nomenclature follows conventions, programming languages also expect commands to follow a particular structure.</p>

<p>For example, the following is valid Python code:</p>

<pre><code>sample_name = "Control_01"
temperature = 37.0

print(sample_name)
print(temperature)</code></pre>

<p>Python reads these instructions from top to bottom. The first two lines create variables, while the final two lines display their values.</p>

<p>A small syntax mistake can prevent a command from running. For example:</p>

<pre><code># Correct
organism = "Escherichia coli"

# Incorrect
organism = "Escherichia coli</code></pre>

<p>The second instruction is missing the closing quotation mark. Python cannot determine where the text ends, so it produces a syntax error.</p>

<p>Learning Python therefore involves developing the habit of noticing small structural details such as quotation marks, brackets, parentheses, commas, indentation, and capitalization.</p>


<h2>3. Basic Python Syntax You Will Use Frequently</h2>

<h3>3.1 Variables</h3>

<p>A <strong>variable</strong> is a name used to store a value. Variables allow us to give meaningful names to information that will be used later in an analysis.</p>

<pre><code>organism = "Bacillus subtilis"
incubation_temperature = 37
optical_density = 0.82</code></pre>

<p>Here, <code>organism</code>, <code>incubation_temperature</code>, and <code>optical_density</code> are variables.</p>

<p>Variables are extremely useful in biological analysis because they allow values to be referred to using meaningful names rather than repeatedly typing the original information.</p>

<p><strong>Good practice:</strong> Use descriptive variable names.</p>

<pre><code># Good
incubation_temperature = 37

# Less informative
x = 37</code></pre>

<p>Short names such as <code>x</code> may be acceptable for temporary mathematical calculations, but descriptive names make scientific scripts much easier to understand later.</p>

<h3>3.2 Python Is Case-Sensitive</h3>

<p>Python distinguishes between uppercase and lowercase letters. Therefore, the following variable names are considered different:</p>

<pre><code>sample = "Control"
Sample = "Treatment"</code></pre>

<p>This is important when working with scientific datasets because accidentally changing capitalization can result in a <code>NameError</code> or cause you to refer to the wrong variable.</p>

<pre><code>sample_name = "Control_01"

print(sample_name)</code></pre>

<p>The following would not work:</p>

<pre><code>print(Sample_Name)</code></pre>

<p>Python does not consider <code>sample_name</code> and <code>Sample_Name</code> to be the same variable.</p>

<h3>3.3 Comments</h3>

<p>A comment is explanatory text written inside a Python program that Python does not execute. A comment begins with the <code>#</code> symbol.</p>

<pre><code># Store the incubation temperature in degrees Celsius
temperature = 37

# Store the measured optical density
od600 = 0.82</code></pre>

<p>Comments are particularly useful in biological research because they allow you to record why a particular operation was performed.</p>

<pre><code># Remove samples with missing treatment information
# before comparing treatment groups</code></pre>

<p>This makes scripts easier to understand when they are reviewed weeks or months later.</p>

<p><strong>Good practice:</strong> Comments should explain the purpose of an important step rather than simply repeating the command.</p>

<h3>3.4 Indentation</h3>

<p>Python uses <strong>indentation</strong>, or spaces at the beginning of a line, to identify groups of related instructions.</p>

<p>Consider the following example:</p>

<pre><code>temperature = 37

if temperature == 37:
    print("Optimal incubation temperature")</code></pre>

<p>The indented <code>print()</code> command belongs to the <code>if</code> statement. It runs only when the condition is true.</p>

<p>Incorrect indentation can produce an error or change the behaviour of a program.</p>

<pre><code># Incorrect indentation
if temperature == 37:
print("Optimal incubation temperature")</code></pre>

<p>Modern editors such as Visual Studio Code and Jupyter Notebook automatically help with indentation, but students should still understand why it matters.</p>

<h3>3.5 Parentheses, Brackets, and Quotation Marks</h3>

<p>Different symbols have different purposes in Python.</p>

<table class="science-table" data-id="table-1">
<caption>Table 1: Common symbols encountered in basic Python syntax.</caption>
<thead>
<tr>
<th>Symbol</th>
<th>Common use</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>()</code></td>
<td>Calling functions</td>
<td><code>print("Hello")</code></td>
</tr>
<tr>
<td><code>[]</code></td>
<td>Creating or accessing lists</td>
<td><code>samples[0]</code></td>
</tr>
<tr>
<td><code>{}</code></td>
<td>Creating dictionaries</td>
<td><code>{"sample": "S01"}</code></td>
</tr>
<tr>
<td><code>" "</code> or <code>' '</code></td>
<td>Defining strings</td>
<td><code>"Control"</code></td>
</tr>
</tbody>
</table>

<p>A frequent beginner mistake is forgetting to close one of these symbols.</p>

<pre><code># Correct
print("Control")

# Incorrect
print("Control"</code></pre>


<h2>4. What Is an IDE?</h2>

<p>An <strong>Integrated Development Environment (IDE)</strong> is software designed to make programming easier. It generally provides an editor for writing code, tools for running programs, syntax highlighting, error detection, file management, and debugging features.</p>

<p>Modern Python users may work with full IDEs or advanced code editors that provide similar functionality through extensions.</p>

<p>Some commonly encountered Python development environments include:</p>

<ul>
<li><strong>Visual Studio Code</strong> – widely used for Python scripts, data science projects, software development, and multi-file projects.</li>
<li><strong>PyCharm</strong> – a Python-focused development environment commonly used for larger software projects.</li>
<li><strong>Jupyter Notebook</strong> – an interactive environment particularly useful for data analysis, teaching, visualization, and exploratory research.</li>
<li><strong>JupyterLab</strong> – a more complete browser-based workspace built around Jupyter notebooks.</li>
</ul>

<p>For beginners working with biological datasets, both <strong>Visual Studio Code</strong> and <strong>Jupyter Notebook</strong> are useful, but they serve somewhat different purposes.</p>


<h2>5. Visual Studio Code for Python</h2>

<p><strong>Visual Studio Code</strong>, commonly called <strong>VS Code</strong>, is a widely used code editor. It can be extended to support Python, Jupyter notebooks, Git version control, remote computing, and many other research-related workflows.</p>

<p>VS Code is particularly useful when you begin creating longer Python programs containing many related steps.</p>

<h3>5.1 Python Script Files</h3>

<p>A normal Python program is commonly stored in a file ending with <code>.py</code>.</p>

<p>For example:</p>

<pre><code>analysis.py</code></pre>

<p>A simple script might contain:</p>

<pre><code>sample_name = "Control_01"
temperature = 37
od600 = 0.82

print(sample_name)
print(temperature)
print(od600)</code></pre>

<p>When this script is executed, Python runs the instructions sequentially from the beginning of the file to the end.</p>

<h3>5.2 Why VS Code Is Useful</h3>

<p>VS Code becomes valuable when an analysis grows beyond a few commands. For example, you might eventually have separate Python files for importing sequencing data, performing quality control, calculating statistics, and generating plots.</p>

<p>The file explorer in VS Code makes these files easier to organize, while syntax highlighting makes different parts of the Python code visually distinguishable.</p>

<p>VS Code can also identify certain syntax problems before the program is executed.</p>

<h3>5.3 A Typical Biological Project</h3>

<p>A simple project folder might eventually look like this:</p>

<pre><code>growth_experiment/
│
├── data/
│   └── growth_data.csv
│
├── analysis.py
│
└── results/</code></pre>

<p>Here, the raw dataset is kept inside the <code>data</code> directory, the analysis instructions are stored in <code>analysis.py</code>, and generated outputs can be saved inside <code>results</code>.</p>

<p>This type of organization becomes increasingly useful when analyses need to be repeated or shared with other researchers.</p>

<hr />

<h2>6. Jupyter Notebook: An Interactive Python Environment</h2>

<p>Although Python scripts are essential, beginners often learn data analysis more comfortably using <strong>Jupyter Notebook</strong>.</p>

<p>A Jupyter Notebook divides a Python analysis into small sections called <strong>cells</strong>. Each cell can be executed independently, allowing you to immediately inspect its output.</p>

<p>This interactive structure is particularly suitable for biological data analysis because scientific workflows are often exploratory. You may want to load a dataset, inspect several rows, test a filtering command, calculate a statistic, and visualize the result before deciding what to do next.</p>

<h2>7. Installing Jupyter Notebook</h2>

<p>If Python and <code>pip</code> are already installed, Jupyter Notebook can be installed from a terminal or command prompt.</p>

<pre><code>pip install notebook</code></pre>

<p>For biological data analysis, you will commonly also need packages such as pandas, NumPy, and Matplotlib.</p>

<pre><code>pip install notebook pandas numpy matplotlib</code></pre>

<p>After installation, Jupyter Notebook can be started using:</p>

<pre><code>jupyter notebook</code></pre>

<p>Your web browser will normally open automatically and display the Jupyter file browser.</p>

<p>From there, you can navigate to your working directory and create a new notebook.</p>

<h2>8. Understanding a Jupyter Notebook</h2>

<h3>8.1 Notebook Files</h3>

<p>A Jupyter Notebook is normally saved using the <code>.ipynb</code> extension.</p>

<pre><code>growth_analysis.ipynb</code></pre>

<p>Unlike a conventional <code>.py</code> script, a notebook can contain executable Python code, formatted explanatory text, equations, tables, plots, and output from previous calculations.</p>

<p>This makes notebooks particularly useful for teaching and scientific analysis because the explanation and analysis can remain together in a single document.</p>

<h3>8.2 Code Cells</h3>

<p>A <strong>code cell</strong> contains Python instructions.</p>

<p>For example, enter the following into a code cell:</p>

<pre><code>sample_name = "Control_01"
temperature = 37

print(sample_name)
print(temperature)</code></pre>

<p>Run the cell and Jupyter immediately displays the result below it.</p>

<pre><code>Control_01
37</code></pre>

<p>This immediate feedback is one of the main reasons Jupyter is useful for beginners.</p>

<h3>8.3 Markdown Cells</h3>

<p>Jupyter also contains <strong>Markdown cells</strong>. These cells are used for explanation rather than Python execution.</p>

<p>For example, a Markdown cell could contain:</p>

<pre><code>## Growth Experiment

The following analysis compares bacterial growth between the control and treatment groups.</code></pre>

<p>Using Markdown cells allows researchers to document the reasoning behind an analysis directly beside the code.</p>

<hr />

<h2>9. Running Python Code in Jupyter</h2>

<p>Consider a small bacterial growth experiment. We can enter each analytical step into a separate Jupyter cell.</p>

<h3>9.1 Cell 1: Store Experimental Information</h3>

<pre><code>organism = "Escherichia coli"
temperature = 37
incubation_hours = 24</code></pre>

<p>Running this cell stores the three values in memory.</p>

<h3>9.2 Cell 2: Display the Information</h3>

<pre><code>print(organism)
print(temperature)
print(incubation_hours)</code></pre>

<p>The output should be:</p>

<pre><code>Escherichia coli
37
24</code></pre>

<p>Notice that the second cell can use variables created in the first cell. This happens because Jupyter keeps previously created variables in the active Python session.</p>

<h3>9.3 Cell 3: Perform a Calculation</h3>

<pre><code>initial_cells = 1000
final_cells = 8000

fold_change = final_cells / initial_cells

print(fold_change)</code></pre>

<p>The result is:</p>

<pre><code>8.0</code></pre>

<p>This tells us that the final cell count is eight times the initial count.</p>

<p>This simple example demonstrates the major advantage of Jupyter: each stage of an analysis can be developed and inspected separately.</p>


<h2>10. Understanding the Jupyter Kernel</h2>

<p>A Jupyter Notebook runs Python through a process called the <strong>kernel</strong>. The kernel is the active Python session that remembers variables, imported libraries, functions, and results while you work.</p>

<p>For example, suppose you run:</p>

<pre><code>sample_count = 25</code></pre>

<p>Then, in another cell, you run:</p>

<pre><code>print(sample_count)</code></pre>

<p>The second cell works because the kernel remembers that <code>sample_count</code> was previously assigned the value <code>25</code>.</p>

<p>However, restarting the kernel clears this temporary memory.</p>

<p>If the kernel is restarted and you immediately run:</p>

<pre><code>print(sample_count)</code></pre>

<p>Python will produce a <code>NameError</code> unless the cell that creates <code>sample_count</code> has been executed again.</p>

<p>This is one of the most important concepts for beginners to understand when working with notebooks.</p>


<h2>11. Cell Execution Order Matters</h2>

<p>Jupyter allows cells to be executed in almost any order. This flexibility is useful during exploration, but it can also create confusing results.</p>

<p>Imagine the first cell contains:</p>

<pre><code>temperature = 25</code></pre>

<p>A later cell contains:</p>

<pre><code>temperature = 37</code></pre>

<p>If you execute the second cell most recently, the current value of <code>temperature</code> becomes <code>37</code>, even if the first cell appears above it in the notebook.</p>

<p><strong>Good practice:</strong> When checking whether a notebook is reproducible, restart the kernel and run all cells from top to bottom.</p>

<p>If the notebook works correctly from a fresh restart, another researcher is much more likely to obtain the same result.</p>


<h2>12. Importing Python Libraries in Jupyter</h2>

<p>Scientific Python relies heavily on reusable software packages called <strong>libraries</strong>.</p>

<p>For biological data analysis, one of the most frequently used libraries is <strong>pandas</strong>, which provides tools for working with tabular data.</p>

<pre><code>import pandas as pd</code></pre>

<p>The command has three parts:</p>

<ul>
<li><code>import</code> tells Python that we want to load a library.</li>
<li><code>pandas</code> is the library being loaded.</li>
<li><code>as pd</code> assigns it the short name <code>pd</code>.</li>
</ul>

<p>After importing pandas, we can use functions belonging to it.</p>

<pre><code>df = pd.read_csv("experiment.csv")</code></pre>

<p>This instruction reads a CSV file and stores the resulting table in a variable named <code>df</code>.</p>

<p>A good notebook normally places important library imports near the beginning so readers can easily identify which packages are required.</p>

<pre><code>import pandas as pd
import numpy as np
import matplotlib.pyplot as plt</code></pre>


<h2>13. A Small Jupyter Practice Exercise</h2>

<p>The following exercise demonstrates how a beginner can build a simple analysis incrementally.</p>

<h3>13.1 Step 1: Create Biological Measurements</h3>

<pre><code>od_readings = [0.12, 0.28, 0.55, 0.91]</code></pre>

<p>This list could represent optical-density measurements collected at four experimental time points.</p>

<h3>13.2 Step 2: Inspect the Measurements</h3>

<pre><code>print(od_readings)</code></pre>

<p>Expected output:</p>

<pre><code>[0.12, 0.28, 0.55, 0.91]</code></pre>

<h3>13.3 Step 3: Select One Measurement</h3>

<pre><code>print(od_readings[0])</code></pre>

<p>Expected output:</p>

<pre><code>0.12</code></pre>

<p>Python starts counting positions from <code>0</code>. Therefore, index <code>0</code> retrieves the first measurement.</p>

<h3>13.4 Step 4: Calculate the Mean</h3>

<pre><code>mean_od = sum(od_readings) / len(od_readings)

print(mean_od)</code></pre>

<p>The <code>sum()</code> function adds all measurements, while <code>len()</code> returns the number of measurements.</p>

<p>This pattern introduces an important programming idea: once biological observations are stored in appropriate Python data structures, they can be processed mathematically without manually calculating each value.</p>

<hr />

<h2>14. Common Beginner Errors in Jupyter Notebook</h2>

<h3>14.1 Running Cells in the Wrong Order</h3>

<p>A student may attempt to use a variable before running the cell that creates it.</p>

<pre><code>print(sample_name)</code></pre>

<p>If <code>sample_name</code> has not yet been defined, Python returns a <code>NameError</code>.</p>

<p><strong>Solution:</strong> Run the earlier cell that creates the variable, or restart the kernel and execute the notebook from top to bottom.</p>

<h3>14.2 Forgetting to Import a Library</h3>

<p>The following command will fail if pandas has not already been imported:</p>

<pre><code>df = pd.read_csv("experiment.csv")</code></pre>

<p>Before using <code>pd</code>, run:</p>

<pre><code>import pandas as pd</code></pre>

<h3>14.3 Using Text Without Quotation Marks</h3>

<pre><code># Correct
treatment = "Control"

# Incorrect
treatment = Control</code></pre>

<p>Without quotation marks, Python assumes that <code>Control</code> is the name of a variable.</p>

<h3>14.4 Incorrect Capitalization</h3>

<pre><code>sample = "S01"

print(Sample)</code></pre>

<p>This produces an error because <code>sample</code> and <code>Sample</code> are different names.</p>

<h3>14.5 Forgetting to Close Brackets or Parentheses</h3>

<pre><code># Correct
samples = ["S01", "S02", "S03"]

# Incorrect
samples = ["S01", "S02", "S03"</code></pre>

<p>When Python reports a syntax error, inspect the current line and nearby lines for missing quotation marks, commas, brackets, or parentheses.</p>

<hr />

<h2>15. Jupyter Notebook Versus Python Scripts</h2>

<p>Jupyter notebooks and conventional Python scripts are not competitors. They are useful at different stages of scientific work.</p>

<table class="science-table" data-id="table-2">
<caption>Table 2: General comparison between Jupyter Notebook and Python scripts.</caption>
<thead>
<tr>
<th>Feature</th>
<th>Jupyter Notebook</th>
<th>Python Script</th>
</tr>
</thead>
<tbody>
<tr>
<td>File extension</td>
<td><code>.ipynb</code></td>
<td><code>.py</code></td>
</tr>
<tr>
<td>Execution</td>
<td>Individual cells</td>
<td>Normally top to bottom</td>
</tr>
<tr>
<td>Immediate output</td>
<td>Yes</td>
<td>Usually displayed in terminal or output window</td>
</tr>
<tr>
<td>Explanatory text</td>
<td>Easy using Markdown cells</td>
<td>Usually written as comments or separate documentation</td>
</tr>
<tr>
<td>Exploratory analysis</td>
<td>Excellent</td>
<td>Possible, but less interactive</td>
</tr>
<tr>
<td>Large reusable programs</td>
<td>Less suitable</td>
<td>Highly suitable</td>
</tr>
</tbody>
</table>

<p>A common scientific workflow is to begin exploring a dataset in Jupyter Notebook. Once the analytical procedure becomes stable, important parts of the workflow may be transferred into reusable Python scripts.</p>

<hr />

<h2>16. Using Jupyter Inside Visual Studio Code</h2>

<p>Jupyter notebooks do not necessarily have to be used only through a browser. Visual Studio Code can also open and execute <code>.ipynb</code> notebooks when the appropriate Python and Jupyter support is installed.</p>

<p>This provides a useful combination for students. You can work interactively with notebook cells while also using VS Code's file explorer, integrated terminal, project folders, and code-editing tools.</p>

<p>For example, the same project might contain both notebooks and scripts:</p>

<pre><code>bacterial_growth_project/
│
├── data/
│   └── growth_data.csv
│
├── notebooks/
│   └── exploratory_analysis.ipynb
│
├── scripts/
│   └── clean_data.py
│
└── results/</code></pre>

<p>The notebook can be used to explore the data and test ideas, while the Python script can contain the final reusable cleaning procedure.</p>

<hr />

<h2>17. Good Practices When Learning Python with Jupyter</h2>

<p><strong>Keep one logical operation in each cell.</strong> For example, use one cell for importing packages, another for loading data, another for inspecting it, and another for cleaning it. This makes errors easier to identify.</p>

<p><strong>Use descriptive variable names.</strong> A variable such as <code>control_od</code> communicates more biological meaning than <code>x</code>.</p>

<p><strong>Add Markdown explanations.</strong> Briefly document what an analytical step is doing and why it is scientifically necessary.</p>

<p><strong>Do not depend on a confusing execution order.</strong> Before considering an analysis complete, restart the kernel and execute all cells sequentially.</p>

<p><strong>Do not overwrite original biological data unnecessarily.</strong> Load raw files for analysis and save processed results using a different filename.</p>

<pre><code>raw_data = pd.read_csv("experiment_raw.csv")

# Later, save processed data separately
clean_data.to_csv("experiment_cleaned.csv", index=False)</code></pre>

<p><strong>Inspect intermediate results.</strong> Do not write twenty cleaning commands and assume that every step worked. Display the data after important transformations.</p>

<pre><code>print(df.head())</code></pre>

<p>This habit is particularly valuable in bioinformatics because technically valid code can still produce biologically incorrect results if the wrong columns, samples, or filtering rules are used.</p>

<hr />

<h2>18. A Recommended Beginner Workflow</h2>

<p>When starting a new Python-based biological analysis, a simple notebook workflow can be followed.</p>

<pre><code># Step 1: Import required libraries
import pandas as pd

# Step 2: Load the dataset
df = pd.read_csv("experiment.csv")

# Step 3: Inspect the first few rows
print(df.head())

# Step 4: Inspect the dimensions
print(df.shape)

# Step 5: Inspect column names
print(df.columns)

# Step 6: Perform cleaning or analysis
# Add analytical commands here

# Step 7: Inspect the result
print(df.head())

# Step 8: Save processed data separately
df.to_csv("experiment_processed.csv", index=False)</code></pre>

<p>This pattern introduces an important scientific programming habit: <strong>perform one step, inspect the result, and then continue</strong>.</p>

<p>Following this approach makes mistakes easier to detect and helps students understand how each command changes the dataset.</p>

<hr />

<h2>19. From Jupyter Notebook to Reproducible Analysis</h2>

<p>Jupyter Notebook is valuable because it makes programming interactive, but the long-term objective is not simply to make code run. The objective is to create an analysis that can be understood and repeated.</p>

<p>A well-organized notebook should therefore tell a clear analytical story:</p>

<pre><code>Import libraries
        ↓
Load biological data
        ↓
Inspect the dataset
        ↓
Identify problems
        ↓
Clean or transform data
        ↓
Perform calculations
        ↓
Visualize results
        ↓
Validate the output
        ↓
Export final results</code></pre>

<p>This sequence will appear repeatedly in biological data science. Whether you are analysing microbial growth measurements, gene-expression data, metabolite concentrations, sequencing metadata, or phenotypic measurements, the basic computational logic remains similar.</p>

<hr />

<h2>20. Summary</h2>

<p>Python syntax defines how instructions must be written, while development environments provide the tools needed to write and execute those instructions. Beginners should become familiar with basic syntax rules involving variables, capitalization, quotation marks, brackets, parentheses, comments, and indentation.</p>

<p>Visual Studio Code is useful for writing Python scripts and organizing larger projects. Jupyter Notebook is especially valuable for learning and scientific data analysis because code can be divided into independently executable cells and the output can be inspected immediately.</p>

<p>For students beginning biological data analysis, Jupyter provides a practical environment for developing the habit of running one analytical step at a time, checking the result, identifying mistakes, and documenting why each operation was performed. These habits form the foundation for later work with pandas, NumPy, visualization libraries, statistical analysis, bioinformatics pipelines, and reproducible research.</p>

</article>
  `},H2=Object.freeze(Object.defineProperty({__proto__:null,default:O2},Symbol.toStringTag,{value:"Module"})),W2={id:"RK-2026-015",title:"Question Bank: short questions",date:"2026-08-11",tags:["#Questions","#SQs"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
`,content:`
<article>

<h2>Question Bank: Computers in Biology</h2>

<h3>Topic 1. Computer Hardware: CPU, RAM and Storage</h3>
<ol>
    <li>What is the Central Processing Unit (CPU), and what is its primary function in a computer?</li>
    <li>Differentiate between CPU, RAM and storage.</li>
    <li>What is meant by CPU clock speed?</li>
    <li>What are CPU cores?</li>
    <li>What is RAM?</li>
    <li>Why is RAM described as volatile memory?</li>
    <li>What is ECC RAM, and why can it be important in scientific computing?</li>
    <li>Differentiate between HDD and SSD.</li>
    <li>What is an RJ45 port?</li>
    <li>What is the purpose of USB-C/Thunderbolt connectivity?</li>
    <li>Explain why SSD storage is advantageous when repeatedly reading and writing large biological datasets.</li>
    <li>Why might ECC memory be preferable in a scientific workstation used for long computational analyses?</li>
    <li>Explain the role of Ethernet connectivity when accessing institutional HPC facilities.</li>
    <li>A workstation has a powerful CPU but very little RAM. Explain how this configuration could affect large-scale data analysis.</li>
</ol>

<h3>Topic 2. Operating Systems: Windows versus Linux</h3>
<ol>
    <li>Define an operating system.</li>
    <li>Why is an operating system considered an intermediary between hardware and application software?</li>
    <li>What is CPU scheduling?</li>
    <li>What is memory management?</li>
    <li>What is virtual memory?</li>
    <li>What is a filesystem?</li>
    <li>What are device drivers?</li>
    <li>Name any four commonly used operating systems.</li>
    <li>What is meant by an open-source operating system?</li>
    <li>Why is Linux extensively used in scientific and bioinformatics computing?</li>
    <li>Distinguish between GUI-based and command-line-based interaction with an operating system.</li>
    <li>Why might a biologist working primarily on Windows still need familiarity with Linux?</li>
    <li>A bioinformatics package is available only for Linux, whereas the researcher uses Windows. What approaches could enable the researcher to use the program?</li>
</ol>

<h3>Topic 3. Application of Linux and Its Basic Commands — Practical</h3>
<ol>
    <li>Write the Linux command used to display the present working directory.</li>
    <li>Write a command to create a directory named <code>biology_notes</code>.</li>
    <li>How would you move into the <code>biology_notes</code> directory?</li>
    <li>Which command creates an empty file?</li>
    <li>How would you display files using the long-list format?</li>
    <li>Which command can be used to display the contents of a text file?</li>
    <li>How can <code>cat</code> be used to create a text file?</li>
    <li>Differentiate between <code>&gt;</code> and <code>&gt;&gt;</code>.</li>
    <li>Write a command to copy a file called <code>results.txt</code>.</li>
    <li>Write a command to rename <code>old.txt</code> as <code>new.txt</code>.</li>
    <li>Which command permanently removes a file?</li>
    <li>How do you remove a directory recursively?</li>
    <li>Which command displays previously executed terminal commands?</li>
    <li>How would you save Linux command history into a file named <code>hist.txt</code>?</li>
    <li>Name two commands that can be used for viewing long text files.</li>
    <li>Which terminal text editor is by default available in linux?</li>
    <li>Write the sequence of Linux commands required to create a folder named <code>genomics</code>, enter it and create an empty file named <code>samples.txt</code>.</li>
    <li>Create a text file from the terminal, enter three sample names and subsequently append another sample without deleting the original content.</li>
    <li>Write the commands required to make a backup copy of <code>experiment.txt</code> and rename that backup as <code>experiment_archive.txt</code>.</li>
    <li>How would you save all commands used during a laboratory practical into <code>command_history.txt</code>?</li>
    <li>Explain how command history can contribute to reproducibility of a computational practical.</li>
    <li>Construct a short Linux command workflow for creating, editing, backing up and finally viewing a laboratory notes file.</li>
</ol>

<h3>Topic 4. Linux and Its Basic Commands</h3>
<ol>
    <li>Expand <code>pwd</code>.</li>
    <li>What is an absolute path?</li>
    <li>What information is displayed by <code>ls</code>?</li>
    <li>What additional information can <code>ls -l</code> provide?</li>
    <li>What is the purpose of <code>mkdir</code>?</li>
    <li>What is the function of <code>touch</code>?</li>
    <li>Differentiate between <code>cp</code> and <code>mv</code>.</li>
    <li>Why is the <code>-r</code> option needed when copying or deleting directories?</li>
    <li>What is the function of <code>rm</code>?</li>
    <li>Why should <code>rm</code> be used carefully?</li>
    <li>Explain the three major uses of <code>cat</code> discussed in the article.</li>
    <li>Differentiate between <code>less</code> and <code>more</code>.</li>
    <li>What does the <code>history</code> command display?</li>
    <li>What does <code>!15</code> mean when used with shell command history?</li>
    <li>Differentiate between creating a new file using <code>&gt;</code> and appending data using <code>&gt;&gt;</code>.</li>
    <li>Explain why <code>less</code> may be preferable to <code>cat</code> for a very large output file.</li>
    <li>Why is the command line particularly useful when manipulating many biological files?</li>
    <li>Explain the difference between renaming a file and copying a file.</li>
    <li>What could happen if <code>rm -r</code> is executed on an incorrect directory?</li>
    <li>Describe how <code>history</code> can help troubleshoot a computational analysis.</li>
    <li>Write commands to create the following structure:
<pre><code class="language-text">project/
    data/
    results/</code></pre>
    </li>
    <li>Create the file <code>sample1.csv</code> and rename as <code>control.csv</code>.</li>
    <li>Display a large file named <code>alignment.txt</code> one screen at a time.</li>
</ol>

<h3>Topic 5. Data and Data Types</h3>
<p>The article defines data as raw observations that acquire meaning through context and analysis. It distinguishes quantitative and qualitative data, continuous/discrete and nominal/ordinal forms, raw and processed data, and emphasizes metadata as an essential part of scientific interpretation.</p>
<ol>
    <li>Define data.</li>
    <li>How does data differ from information?</li>
    <li>What is structured data?</li>
    <li>What is unstructured data?</li>
    <li>Define quantitative data.</li>
    <li>Define qualitative data.</li>
    <li>Differentiate between continuous and discrete data.</li>
    <li>Differentiate between nominal and ordinal data.</li>
    <li>What is raw data?</li>
    <li>What is processed data?</li>
    <li>Define metadata.</li>
    <li>Classify each of the following as continuous or discrete:
        <ul>
            <li>body temperature</li>
            <li>colony count</li>
            <li>pH</li>
            <li>number of patients</li>
            <li>enzyme concentration</li>
        </ul>
    </li>
    <li>Classify each of the following as nominal or ordinal:
        <ul>
            <li>bacterial species</li>
            <li>treatment group</li>
            <li>disease severity</li>
            <li>sample colour</li>
            <li>toxicity grade</li>
        </ul>
    </li>
    <li>Explain how the same raw observation can acquire different meaning when interpreted by a biologist, clinician or analytical scientist.</li>
    <li>Why is metadata indispensable for the interpretation of scientific data?</li>
    <li>Explain why an instrument reading without information about sample identity, date and instrument conditions may have limited scientific value.</li>
</ol>

<h3>Topic 6. Data Integrity and ALCOA+ Principles</h3>
<ol>
    <li>Define data integrity.</li>
    <li>Why must data integrity be maintained throughout the entire data lifecycle?</li>
    <li>Expand ALCOA.</li>
    <li>What does <strong>Attributable</strong> mean?</li>
    <li>What does <strong>Legible</strong> mean?</li>
    <li>What does <strong>Contemporaneous</strong> mean?</li>
    <li>What does <strong>Original</strong> mean?</li>
    <li>What does <strong>Accurate</strong> mean?</li>
    <li>State the additional principles represented by the “+” in ALCOA+.</li>
    <li>Define an audit trail.</li>
    <li>What is role-based access control?</li>
    <li>What is system validation?</li>
    <li>What do IQ, OQ and PQ represent in a validation context?</li>
    <li>Explain why a result that cannot be attributed to a specific analyst has poor data integrity. Which principle is being violated here?</li>
    <li>Why should observations be documented at the time an activity is performed?</li>
    <li>Why should failed experimental runs normally remain traceable rather than simply being deleted?</li>
    <li>Explain the importance of retaining original raw instrument data.</li>
    <li>How can electronic signatures support data integrity?</li>
    <li>How can unauthorized access compromise scientific reliability?</li>
    <li>Explain how LIMS, ELNs or chromatography data systems can support ALCOA+.</li>
    <li>An analyst records experimental results at the end of the week from memory. Which ALCOA principle is primarily compromised?</li>
    <li>A researcher replaces an original instrument file with an edited spreadsheet. Which data-integrity principles may be affected?</li>
    <li>A shared laboratory computer uses a single login for every researcher. Which ALCOA principle is threatened, and why?</li>
    <li>An analytical record contains all values but cannot be read clearly. Which principle is violated?</li>
    <li>Explain the potential consequences of poor data integrity for scientific conclusions, pharmaceutical quality and patient safety.</li>
</ol>

<h3>Topic 8. Advanced Data Entry and Spreadsheet Management</h3>
<ol>
    <li>Define tidy data.</li>
    <li>What should each row represent in a tidy biological dataset?</li>
    <li>What should each column represent?</li>
    <li>What should each spreadsheet cell contain?</li>
    <li>Why should multiple independent tables generally not be placed inside one analysis sheet?</li>
    <li>Why can merged cells create problems for downstream analysis?</li>
    <li>Why should colour not be used as the only method of encoding experimental categories?</li>
    <li>Differentiate between CSV and TSV.</li>
    <li>Why may TSV be convenient when text annotations contain commas?</li>
    <li>Why should missing observations not simply be entered as zero?</li>
    <li>What is Data Validation?</li>
    <li>How can a drop-down list improve consistency in treatment-group entry?</li>
    <li>Explain the difference between a validation <strong>Stop</strong> message and a <strong>Warning</strong>.</li>
    <li>What is AutoFill?</li>
    <li>What is Flash Fill?</li>
    <li>What is Text-to-Columns?</li>
    <li>What is the purpose of the <code>TRIM</code> function?</li>
    <li>Differentiate <code>UPPER</code>, <code>LOWER</code> and <code>PROPER</code>.</li>
    <li>What is the purpose of the Remove Duplicates feature?</li>
    <li>Why should duplicate records be inspected before deletion?</li>
    <li>Explain why <code>Control</code>, <code>control</code>, <code>CONTROL</code> and <code>Control </code> may be interpreted as different categories by analysis software.</li>
    <li>Why should biological replicates not automatically be removed as duplicates?</li>
    <li>Why should formulas sometimes be protected from accidental editing in laboratory templates?</li>
    <li>Why is maintaining an unchanged raw-data file good scientific practice?</li>
    <li>Design a data-validation rule for a column containing only three permitted treatment groups: <code>Control</code>, <code>Drug_A</code>, and <code>Drug_B</code>.</li>
    <li>A column contains <code> proA</code>, <code>PROA </code>, <code>ProA</code>, and <code>proa</code>. Explain a spreadsheet-based strategy for standardizing these entries.</li>
    <li>A GC instrument exports <code>Peak:450;RT:1.4</code> in one column. Which spreadsheet feature could be used to separate the two measurements?</li>
    <li>A laboratory spreadsheet contains two apparently identical <code>Flask_007</code> records. Describe the checks that should be made before deleting one.</li>
    <li>Explain how you would protect calculated cells while allowing researchers to continue entering raw measurements.</li>
</ol>

<h3>Topic 9. Package and Environment Management in WSL</h3>
<ol>
    <li>What is a software package?</li>
    <li>What is a dependency?</li>
    <li>What is a package manager?</li>
    <li>What is meant by “dependency hell”?</li>
    <li>What is a virtual or isolated software environment?</li>
    <li>Why is installing every research package globally undesirable?</li>
    <li>What is Mamba?</li>
    <li>How is Mamba related conceptually to Conda?</li>
    <li>What is WSL?</li>
    <li>Why is WSL useful to a Windows-based bioinformatics student?</li>
    <li>Write the command used in the article to create an environment called <code>data_analysis_env</code> with Python 3.10.</li>
    <li>Write the command used to activate an environment.</li>
    <li>What is the purpose of deactivating an environment?</li>
    <li>Write a command for installing <code>pandas</code> and <code>scipy</code> using Mamba.</li>
    <li>Which command checks the active Python version?</li>
    <li>Which command lists packages and their versions in a Mamba environment?</li>
    <li>Two bioinformatics programs require incompatible versions of Python. Explain how environments solve the problem.</li>
    <li>Why is recording package versions important for reproducibility?</li>
    <li>How might an analysis work today but fail six months later if software versions are not documented?</li>
    <li>Explain why separate environments may be useful for genomics, molecular docking and statistical-analysis projects.</li>
    <li>A collaborator wants to reproduce your analysis. What environment information should you provide?</li>
</ol>

<h3>Topic 10. Python Basics</h3>
<ol>
    <li>What is Python?</li>
    <li>Why is Python called a general-purpose programming language?</li>
    <li>How does a script-based workflow differ from a GUI-based spreadsheet workflow?</li>
    <li>What is a variable?</li>
    <li>What is a string?</li>
    <li>What is an integer?</li>
    <li>What is a floating-point number?</li>
    <li>What is a Python list?</li>
    <li>What is list indexing?</li>
    <li>From which number does Python begin indexing a list?</li>
    <li>What is a function?</li>
    <li>What does <code>print()</code> do?</li>
    <li>What does <code>len()</code> return?</li>
    <li>What is pandas?</li>
    <li>What is a DataFrame?</li>
</ol>

<p>Consider:</p>
<pre><code class="language-python">organism_name = "Escherichia coli"
colony_count = 250
ph_level = 7.2</code></pre>
<ol start="16">
    <li>Identify the data type represented by each variable.</li>
    <li>Which variable contains a string?</li>
    <li>Which variable contains an integer?</li>
    <li>Which variable contains a floating-point value?</li>
</ol>

<p>Consider:</p>
<pre><code class="language-python">isolates = ["E. coli", "S. aureus", "P. aeruginosa"]</code></pre>
<ol start="20">
    <li>What will <code>isolates[0]</code> return?</li>
    <li>What will <code>len(isolates)</code> return?</li>
    <li>Why would <code>isolates[3]</code> not retrieve the third element?</li>
</ol>

<h4>C. Analytical questions</h4>
<ol start="23">
    <li>Why is Python preferable to manual spreadsheet operations when the same cleaning operation must be performed on many files?</li>
    <li>Under what circumstances is Excel still entirely appropriate?</li>
    <li>At what stage should a biological researcher consider shifting from a spreadsheet to pandas?</li>
    <li>Compare Excel and Python with respect to manual data entry, scalability, repetitive processing and reproducibility.</li>
</ol>

<h3>Topic 11. Data Cleaning and Manipulation in Python Using pandas</h3>
<ol>
    <li>What is a Python script?</li>
    <li>What file extension is normally used for Python scripts?</li>
    <li>What is ipynb?</li>
    <li>Differentiate between a Python script and an interactive ipynb file.</li>
    <li>Define a pandas DataFrame.</li>
    <li>Differentiate CSV and TSV files.</li>
    <li>What does <code>pd.read_csv()</code> do?</li>
    <li>What information is returned by <code>df.shape</code>?</li>
    <li>What does <code>df.head()</code> display?</li>
    <li>How can column names be inspected in pandas?</li>
    <li>Why should missing biological measurements not automatically be replaced by zero?</li>
</ol>

<h3>Topic 12. Python Syntax, IDEs and Jupyter Notebook</h3>
<ol>
    <li>Define Python syntax.</li>
    <li>What is a variable?</li>
    <li>Why are descriptive variable names preferable in scientific programming?</li>
    <li>Is Python case-sensitive?</li>
    <li>Why <code>sample</code> and <code>Sample</code> are not equal in python?</li>
    <li>What symbol begins a Python comment?</li>
    <li>What is the purpose of comments in scientific code?</li>
    <li>What is indentation?</li>
    <li>Why is indentation syntactically important in Python?</li>
    <li>What are parentheses <code>()</code> commonly used for?</li>
    <li>What are square brackets <code>[]</code> commonly used for?</li>
    <li>Why are quotation marks needed around text strings?</li>
    <li>Identify the error:
<pre><code class="language-python">organism = "Escherichia coli</code></pre>
    </li>
    <li>Explain what is wrong with:
<pre><code class="language-python">if temperature == 37:
print("Optimal")</code></pre>
    </li>
    <li>Why will the following usually fail?
<pre><code class="language-python">treatment = Control</code></pre>
    </li>
    <li>Explain the error:
<pre><code class="language-python">sample = "S01"
print(Sample)</code></pre>
    </li>
    <li>Identify the syntax error:
<pre><code class="language-python">samples = ["S01", "S02", "S03"</code></pre>
    </li>
    <li>A student receives <code>NameError</code>. State two possible causes discussed in the article.</li>
    <li>Expand IDE.</li>
    <li>What is an Integrated Development Environment?</li>
    <li>State four features normally provided by an IDE or advanced code editor.</li>
    <li>What is Visual Studio Code?</li>
    <li>Why is VS Code useful for multi-file scientific projects?</li>
    <li>What is syntax highlighting?</li>
    <li>How can organizing raw data, scripts and results into separate folders improve reproducibility?</li>
    <li>What is Jupyter Notebook?</li>
    <li>What is a notebook cell?</li>
    <li>Differentiate between a code cell and a Markdown cell.</li>
    <li>What is the usual file extension of a Jupyter notebook?</li>
    <li>What types of content can a <code>.ipynb</code> file contain?</li>
    <li>Why is Jupyter particularly useful for exploratory biological data analysis?</li>
    <li>What is a Jupyter kernel?</li>
    <li>What information does the kernel retain during an active session?</li>
    <li>What happens to temporary variables when the kernel is restarted?</li>
    <li>What is a Python library?</li>
    <li>Explain each component of:
<pre><code class="language-python">import pandas as pd</code></pre>
    </li>
    <li>Why are important library imports generally placed near the beginning of a notebook?</li>
    <li>What is the role of pandas in biological data analysis?</li>
    <li>What are NumPy and Matplotlib generally used for in a scientific Python environment?</li>
</ol>

<p>Given:</p>
<pre><code class="language-python">od_readings = [0.12, 0.28, 0.55, 0.91]</code></pre>
<ol start="40">
    <li>How many measurements are present?</li>
    <li>What value is returned by <code>od_readings[0]</code>?</li>
    <li>Compare <code>.ipynb</code> and <code>.py</code> files.</li>
    <li>Why is Jupyter preferable during exploratory analysis?</li>
</ol>
</article>
  `},G2=Object.freeze(Object.defineProperty({__proto__:null,default:W2},Symbol.toStringTag,{value:"Module"})),U2={id:"RK-2026-016",title:"Nucleic Acid and Protein Sequences in FASTA Format",date:"2026-08-31",tags:["#FASTA","#SequenceFormats","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"FASTA is one of the simplest and most widely used text formats for representing DNA, RNA, and protein sequences in bioinformatics. This article explains how FASTA records are structured, how nucleotide and amino-acid alphabets are represented, how ambiguity and multi-FASTA records are handled, and why identifiers and metadata matter in real analysis workflows. It also distinguishes FASTA from richer annotation formats and from FASTQ, helping researchers choose and prepare sequence files correctly for downstream tools.",content:`
<article>

<section>
  <h2>1. Why Biological Sequences Need a Digital Representation</h2>

  <p>DNA, RNA, and proteins are <strong>physical biological molecules</strong>, but bioinformatics programs work with <strong>digital representations</strong>. Each nucleotide or amino-acid residue is represented by a character, preserving the <em>order of residues</em> along the molecule. A short DNA sequence may therefore appear as <code>ATGCGTAC</code>, while a protein sequence may appear as <code>MKTLLV</code>.</p>

  <p>This conversion from molecule to text is what makes sequence analysis possible. Once represented digitally, sequences can be <strong>searched, aligned, translated, assembled, annotated, compared, and supplied to prediction tools</strong>. In other words, the text sequence becomes the computational form of the biological molecule.</p>

  <p>One of the most widely used representations is <strong>FASTA</strong>. NCBI describes FASTA-formatted sequence as a <strong>definition line beginning with <code>&gt;</code></strong>, followed by one or more lines containing sequence data.<sup><a href="#ref2">2</a></sup> EMBL-EBI uses the same core structure when accepting or returning biological sequences.<sup><a href="#ref3">3</a></sup></p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DNA_sequence.jpg/960px-DNA_sequence.jpg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DNA_sequence.jpg/960px-DNA_sequence.jpg" alt="Large DNA nucleotide letters displayed as a linear sequence" />
    <figcaption> Biological sequence information can be represented as an ordered series of residue symbols. Image: MIKI Yoshihito, <a href="https://commons.wikimedia.org/wiki/File:DNA_sequence.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, CC BY 2.0.</figcaption>
  </figure>

  <h3>1.1 Where the Name FASTA Comes From</h3>

  <p>The name is historically associated with the <strong>FASTA sequence-comparison program</strong> developed by William Pearson and David Lipman. Their 1988 paper described FASTA as a tool for comparing protein and DNA sequences.<sup><a href="#ref1">1</a></sup> The simple sequence-file convention associated with FASTA subsequently became widely used as an exchange format across bioinformatics software.</p>

  <blockquote>
    <strong>Key principle:</strong> FASTA is primarily a <strong>sequence representation and exchange format</strong>. It does not, by itself, preserve the full biological annotation associated with a sequence.
  </blockquote>

  <p><strong>Takeaway:</strong> FASTA converts a biological sequence into a <strong>simple, portable text representation</strong> that computational tools can read.</p>
</section>

<section>
  <h2>2. The Basic Anatomy of a FASTA Record</h2>

  <p>A FASTA record has two essential parts: the <strong>header or definition line</strong> and the <strong>sequence body</strong>.<sup><a href="#ref2">2</a></sup></p>

  <pre><code>&gt;sequence_identifier optional description
ATGCGTACGTTAGCTAGCTAGCTAGCTAGCTA</code></pre>

  <h3>2.1 The Header Line</h3>

  <p>The header starts with the greater-than symbol <code>&gt;</code>. The text following it identifies the sequence and can also provide a description. EMBL-EBI notes that the <strong>first word is commonly treated as the sequence name</strong>, while the remaining text is a description.<sup><a href="#ref3">3</a></sup></p>

  <pre><code>&gt;geneA Escherichia_coli hypothetical_gene
ATGAAACCGTTAGCGTAA</code></pre>

  <p>Here, <code>geneA</code> is the identifier. The rest of the line provides additional context. For researcher-created files, a practical strategy is to keep the first identifier <strong>short, unique, stable, and free of spaces</strong>. NCBI explicitly recommends short sequence IDs without spaces for GenBank submissions.<sup><a href="#ref2">2</a></sup></p>

  <p><strong>Important:</strong> the header itself should remain on <strong>one line</strong>. NCBI definition-line modifiers, for example, must not be broken across hard returns.<sup><a href="#ref2">2</a></sup></p>

  <h3>2.2 The Sequence Body</h3>

  <p>All lines after a header belong to that record until the next line beginning with <code>&gt;</code>. Sequence lines may be wrapped for readability.</p>

  <pre><code>&gt;seq1
ATGCGTACGT
TAGCTAGCTA
GCTAGCTA</code></pre>

  <p>The biological sequence above is continuous: <code>ATGCGTACGTTAGCTAGCTAGCTAGCTA</code>. The line breaks are formatting; they do not represent biological interruptions.</p>

  <h3>2.3 FASTA at a Glance</h3>

  <table class="science-table" data-id="fasta-record-components">
    <caption>Table 1: FASTA record components and their meaning</caption>
    <thead>
      <tr>
        <th>Component</th>
        <th>Example</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Record marker</strong></td>
        <td><code>&gt;</code></td>
        <td>Marks the beginning of a new FASTA record.</td>
      </tr>
      <tr>
        <td><strong>Identifier</strong></td>
        <td><code>geneA</code></td>
        <td>Provides a name used by software and researchers to track the sequence.</td>
      </tr>
      <tr>
        <td><strong>Description</strong></td>
        <td><code>DNA_gyrase_subunit_A</code></td>
        <td>Optional human-readable context.</td>
      </tr>
      <tr>
        <td><strong>Sequence body</strong></td>
        <td><code>ATGCGT...</code> or <code>MKKIG...</code></td>
        <td>Stores the ordered nucleotide or amino-acid residues.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Takeaway:</strong> when scanning a FASTA file, identify <strong><code>&gt;</code> → identifier → description → sequence</strong>.</p>
</section>

<section>
  <h2>3. Representation of Nucleic Acid Sequences</h2>

  <p>Nucleic-acid sequences are written using <strong>one-letter nucleotide symbols</strong>. The canonical DNA symbols are <code>A</code>, <code>C</code>, <code>G</code>, and <code>T</code>. Importantly, the FASTA structure itself does <em>not</em> declare that a record is DNA or RNA; molecule type must come from the sequence source, accompanying metadata, or the receiving tool.</p>

  <p>INSDC uses the IUPAC nucleotide code system and notes that <code>T</code> represents <strong>thymine in DNA and uracil in RNA</strong> in its nucleotide sequence standard.<sup><a href="#ref4">4</a></sup> Therefore, an RNA-derived database sequence is not guaranteed to contain the letter <code>U</code>. User-created RNA files may use <code>U</code>, but researchers should always check the convention required by the destination software.</p>

  <h3>3.1 Sequence Direction Matters</h3>

  <p>Nucleotide sequences are conventionally interpreted in the <strong>5′ → 3′ direction</strong>. FASTA stores the character string but does not independently tell you whether a sequence represents the forward genomic strand, its reverse complement, an mRNA, an amplicon, or another derived molecule. That biological orientation must come from <strong>provenance and annotation</strong>.</p>

  <h3>3.2 Example: DNA Sequence in FASTA</h3>

  <pre><code>&gt;EC01_16S partial_16S_rRNA_gene
AGAGTTTGATCCTGGCTCAG
GATGAACGCTGGCGGCAGGC</code></pre>

  <p>The text is easy to read, but the file alone does not establish whether this sequence is experimentally determined, assembled, predicted, complete, partial, or taxonomically verified. <strong>FASTA preserves sequence; provenance preserves meaning.</strong></p>

  <h3>3.3 IUPAC Ambiguity Codes</h3>

  <p>Real sequence data may contain uncertain positions. The IUPAC nucleotide alphabet represents these possibilities explicitly rather than forcing an incorrect single-base call.<sup><a href="#ref4">4</a></sup></p>

  <table class="science-table" data-id="iupac-nucleotide-symbols">
    <caption>Table 2: IUPAC nucleotide symbols commonly encountered in sequence files</caption>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Possible Bases</th>
        <th>Interpretation</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>A</code></td><td>A</td><td>Adenine</td></tr>
      <tr><td><code>C</code></td><td>C</td><td>Cytosine</td></tr>
      <tr><td><code>G</code></td><td>G</td><td>Guanine</td></tr>
      <tr><td><code>T</code></td><td>T</td><td>Thymine in DNA; uracil in RNA in the INSDC convention</td></tr>
      <tr><td><code>M</code></td><td>A or C</td><td>Amino</td></tr>
      <tr><td><code>R</code></td><td>A or G</td><td>Purine</td></tr>
      <tr><td><code>W</code></td><td>A or T</td><td>Weak interaction</td></tr>
      <tr><td><code>S</code></td><td>C or G</td><td>Strong interaction</td></tr>
      <tr><td><code>Y</code></td><td>C or T</td><td>Pyrimidine</td></tr>
      <tr><td><code>K</code></td><td>G or T</td><td>Keto</td></tr>
      <tr><td><code>V</code></td><td>A, C, or G</td><td>Not T</td></tr>
      <tr><td><code>H</code></td><td>A, C, or T</td><td>Not G</td></tr>
      <tr><td><code>D</code></td><td>A, G, or T</td><td>Not C</td></tr>
      <tr><td><code>B</code></td><td>C, G, or T</td><td>Not A</td></tr>
      <tr><td><code>N</code></td><td>A, C, G, or T</td><td>Any/unspecified base</td></tr>
    </tbody>
  </table>

  <pre><code>&gt;sequence_with_ambiguity
ATGCRYNNATGCT</code></pre>

  <p><strong>Do not automatically delete ambiguity codes.</strong> An <code>N</code>, <code>R</code>, or <code>Y</code> can carry information about uncertainty, consensus sequence construction, polymorphism, or unresolved sequencing. Whether such symbols are acceptable depends on the downstream analysis.</p>

  <p><strong>Takeaway:</strong> a nucleotide FASTA sequence is an <strong>ordered 5′ → 3′ residue string</strong>; ambiguity symbols are part of the biological representation, not necessarily formatting errors.</p>
</section>

<section>
  <h2>4. Representation of Protein Sequences</h2>

  <p>Protein FASTA uses the <strong>same header-plus-sequence structure</strong>, but its sequence body contains <strong>one-letter amino-acid codes</strong>. The INSDC feature-table standard uses IUPAC one-letter amino-acid abbreviations for translated protein sequence.<sup><a href="#ref4">4</a></sup></p>

  <pre><code>&gt;proteinA hypothetical_enzyme
MKKIGYSAPRQTKEAIEAGADVVVVATGGTGIGLA</code></pre>

  <p>Protein sequences are written from the <strong>amino terminus (N-terminus) toward the carboxyl terminus (C-terminus)</strong>. As with nucleotides, FASTA preserves residue order but does not by itself establish protein function, experimental evidence, domain boundaries, post-translational modifications, or biological activity.</p>

  <h3>4.1 Standard One-Letter Amino-Acid Codes</h3>

  <table class="science-table" data-id="amino-acid-one-letter-codes">
    <caption>Table 3: Standard and commonly encountered one-letter amino-acid codes</caption>
    <thead>
      <tr>
        <th>Code</th>
        <th>Amino Acid</th>
        <th>Code</th>
        <th>Amino Acid</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>A</code></td><td>Alanine</td><td><code>R</code></td><td>Arginine</td></tr>
      <tr><td><code>N</code></td><td>Asparagine</td><td><code>D</code></td><td>Aspartate</td></tr>
      <tr><td><code>C</code></td><td>Cysteine</td><td><code>Q</code></td><td>Glutamine</td></tr>
      <tr><td><code>E</code></td><td>Glutamate</td><td><code>G</code></td><td>Glycine</td></tr>
      <tr><td><code>H</code></td><td>Histidine</td><td><code>I</code></td><td>Isoleucine</td></tr>
      <tr><td><code>L</code></td><td>Leucine</td><td><code>K</code></td><td>Lysine</td></tr>
      <tr><td><code>M</code></td><td>Methionine</td><td><code>F</code></td><td>Phenylalanine</td></tr>
      <tr><td><code>P</code></td><td>Proline</td><td><code>S</code></td><td>Serine</td></tr>
      <tr><td><code>T</code></td><td>Threonine</td><td><code>W</code></td><td>Tryptophan</td></tr>
      <tr><td><code>Y</code></td><td>Tyrosine</td><td><code>V</code></td><td>Valine</td></tr>
      <tr><td><code>U</code></td><td>Selenocysteine</td><td><code>O</code></td><td>Pyrrolysine</td></tr>
      <tr><td><code>B</code></td><td>Aspartate or asparagine</td><td><code>Z</code></td><td>Glutamate or glutamine</td></tr>
      <tr><td><code>J</code></td><td>Leucine or isoleucine</td><td><code>X</code></td><td>Any/unknown amino acid</td></tr>
    </tbody>
  </table>

  <h3>4.2 Unknown Residues and Stop Symbols</h3>

  <p><code>X</code> commonly represents an <strong>unknown or unspecified amino acid</strong>.<sup><a href="#ref4">4</a></sup> A terminal <code>*</code> may be produced by some translation programs to indicate a stop codon, but software differs in whether it accepts this character in protein input. Check the destination tool before retaining or removing it.</p>

  <p><strong>Note:</strong> do not classify a short FASTA record as nucleotide or protein from its letters alone. Protein sequences can contain letters such as <code>A</code>, <code>C</code>, <code>G</code>, and <code>T</code>. For short sequences in particular, <strong>alphabet inspection alone can be ambiguous</strong>.</p>

  <p><strong>Takeaway:</strong> protein FASTA represents the <strong>N → C amino-acid sequence</strong>; it does not prove the protein's function or experimental existence.</p>
</section>

<section>
  <h2>5. Single FASTA, Multi-FASTA, and Aligned FASTA</h2>

  <h3>5.1 Multi-FASTA: Many Records in One File</h3>

  <p>A FASTA file can contain a single record or many records. When several records are placed consecutively in one file, the file is commonly called a <strong>multi-FASTA</strong>.</p>

  <pre><code>&gt;isolate_A
ATGCGTACGTAGCTAGC
&gt;isolate_B
ATGCGTACGTGGCTAGC
&gt;isolate_C
ATGCGTACGTAGTTAGC</code></pre>

  <p>This is common in microbiology and genomics. A multi-FASTA file may contain <strong>all genome contigs, all predicted proteins, multiple isolates, orthologous genes, marker genes, or reference sequences</strong>. NCBI submission workflows likewise accept multiple sequences in a single FASTA file, with a separate definition line for each record.<sup><a href="#ref2">2</a></sup> Each record requires its own header, and identifiers should be unique because downstream tools commonly use them to label results.</p>

  <h3>5.2 FASTA Is Not an Alignment Method</h3>

  <p>A FASTA file may also be used to store sequences that have already been aligned. Such files can contain gap characters such as <code>-</code>. The presence of gaps does <strong>not</strong> mean FASTA itself performed the alignment; it only stores the resulting aligned strings.</p>

  <pre><code>&gt;isolate_A
ATGCGTACGTAGC
&gt;isolate_B
ATGCGTA-GTAGC</code></pre>

  <p>For an <strong>unaligned raw sequence</strong>, gap characters should not be inserted simply to make sequences look similar. Gaps should appear only when they have a defined meaning, such as an alignment output or a representation explicitly required by a workflow.</p>

  <p><strong>Takeaway:</strong> <strong>multi-FASTA means multiple records</strong>; aligned FASTA means the same record structure is being used to store an alignment.</p>
</section>

<section>
  <h2>6. FASTA Headers Are Not Universally Identical</h2>

  <p>The structural rule <code>&gt;header</code> is simple, but the information after <code>&gt;</code> is <strong>not governed by one universal biological header schema</strong>. EMBL-EBI explicitly notes that different data sources can return different, yet valid, FASTA header conventions.<sup><a href="#ref3">3</a></sup></p>

  <h3>6.1 A Simple Local Header</h3>

  <pre><code>&gt;ECOLI_K12_gyrA DNA_gyrase_subunit_A</code></pre>

  <p>This works well for many local analyses because the first token is a stable machine-readable identifier and the remaining text is descriptive.</p>

  <h3>6.2 NCBI Definition-Line Information</h3>

  <p>For sequence submission, NCBI can encode biological source information in bracketed definition-line modifiers such as <code>[organism=...]</code>, <code>[strain=...]</code>, or <code>[plasmid-name=...]</code>.<sup><a href="#ref2">2</a></sup></p>

  <pre><code>&gt;contig02 [organism=Clostridium difficile] [strain=ABDC] [plasmid-name=pABDC1]</code></pre>

  <h3>6.3 UniProt Protein Headers</h3>

  <p><a href="https://www.uniprot.org/help/fasta-headers" target="_blank" rel="noopener noreferrer">UniProt</a> uses a structured protein header that may include the database class, accession, entry name, protein name, organism, taxonomy identifier, gene, evidence level, and sequence version.<sup><a href="#ref5">5</a></sup></p>

  <pre><code>&gt;sp|P12345|AATM_RABIT Aspartate aminotransferase, mitochondrial ...</code></pre>

  <p><strong>Do not write a parser based on assumptions from one database.</strong> A script that expects every header to contain pipe-separated UniProt fields may fail on an NCBI, ENA, or locally generated FASTA file.</p>

  <p><strong>Takeaway:</strong> the <strong>FASTA record structure is stable; header semantics are source-dependent</strong>.</p>
</section>

<section>
  <h2>7. FASTA Is Not the Same as an Annotated Database Record</h2>

  <p>A common beginner mistake is assuming that exporting a sequence as FASTA preserves everything shown on the database page. It does not. Rich records from <a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noopener noreferrer">GenBank</a>, <a href="https://www.ebi.ac.uk/ena/browser/home" target="_blank" rel="noopener noreferrer">ENA</a>, and <a href="https://www.uniprot.org/" target="_blank" rel="noopener noreferrer">UniProt</a> can contain extensive annotation that is not represented in the sequence body.<sup><a href="#ref3">3</a></sup><sup><a href="#ref5">5</a></sup></p>

  <table class="science-table" data-id="fasta-vs-annotated-record">
    <caption>Table 4: FASTA compared with a richly annotated biological record</caption>
    <thead>
      <tr>
        <th>Information</th>
        <th>FASTA</th>
        <th>Annotated Record</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Sequence</strong></td><td>Yes</td><td>Yes</td></tr>
      <tr><td><strong>Identifier</strong></td><td>Usually</td><td>Yes</td></tr>
      <tr><td><strong>Short description</strong></td><td>Possible</td><td>Usually</td></tr>
      <tr><td><strong>Gene/CDS coordinates</strong></td><td>Not inherently</td><td>Usually represented</td></tr>
      <tr><td><strong>Feature annotations</strong></td><td>Not inherently</td><td>Often extensive</td></tr>
      <tr><td><strong>Literature references</strong></td><td>Normally absent</td><td>Often present</td></tr>
      <tr><td><strong>Evidence/provenance</strong></td><td>Very limited</td><td>Can be extensive</td></tr>
      <tr><td><strong>Database cross-references</strong></td><td>Normally absent</td><td>Often present</td></tr>
    </tbody>
  </table>

  <blockquote>
    <strong>Note:</strong> use FASTA when the <strong>sequence itself</strong> is the required input. Preserve the original database record, accession/version, and associated annotation when <strong>biological context</strong> is required.
  </blockquote>

  <p><strong>Takeaway:</strong> FASTA is <strong>sequence-rich but annotation-poor</strong>.</p>
</section>

<section>
  <h2>8. FASTA vs. FASTQ: Sequence Representation vs. Sequencing Evidence</h2>

  <p>FASTA and FASTQ both contain biological sequence text, but they answer different questions. <strong>FASTA stores the sequence</strong>; FASTQ stores the sequence together with <strong>per-base quality scores</strong>. The FASTQ structure and the historical Sanger/Solexa/Illumina variants were described in detail by Cock and colleagues.<sup><a href="#ref7">7</a></sup> NCBI SRA documentation likewise describes FASTQ as a read identifier, base calls, a second definition line, and a quality string.<sup><a href="#ref6">6</a></sup></p>

  <table class="science-table" data-id="fasta-vs-fastq">
    <caption>Table 5: Practical distinction between FASTA and FASTQ</caption>
    <thead>
      <tr>
        <th>Question</th>
        <th>FASTA</th>
        <th>FASTQ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Stores sequence?</strong></td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><strong>Stores per-base quality?</strong></td>
        <td>No</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><strong>Typical use</strong></td>
        <td>Reference sequences, assemblies, proteins, alignments, database queries</td>
        <td>Raw or processed sequencing reads with quality information</td>
      </tr>
    </tbody>
  </table>

  <p>A useful memory shortcut is: <strong>FASTA = what sequence?</strong> FASTQ = <strong>what sequence + how confident were the base calls?</strong></p>

  <p><strong>Takeaway:</strong> do not discard FASTQ quality information early if your analysis still depends on sequencing confidence.</p>
</section>

<section>
  <h2>9. Common FASTA Filename Extensions</h2>

  <p>The FASTA syntax does not require one universal file extension. Extensions are mainly <strong>workflow conventions</strong>, so the file contents and provenance remain more important than the filename. NCBI genome-submission workflows, for example, use <code>.fsa</code> for FASTA sequence files.<sup><a href="#ref2">2</a></sup></p>

  <table class="science-table" data-id="fasta-file-extensions">
    <caption>Table 6: Common extensions used for FASTA-formatted sequence files</caption>
    <thead>
      <tr>
        <th>Extension</th>
        <th>Common Usage</th>
        <th>Interpretation</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>.fasta</code></td><td>General FASTA file</td><td>May contain nucleotide or protein sequence.</td></tr>
      <tr><td><code>.fa</code></td><td>Short general extension</td><td>Sequence type must be determined from context.</td></tr>
      <tr><td><code>.fna</code></td><td>Often nucleotide FASTA</td><td>Convention, not a different syntax.</td></tr>
      <tr><td><code>.faa</code></td><td>Often amino-acid FASTA</td><td>Frequently used for protein collections.</td></tr>
      <tr><td><code>.fsa</code></td><td>Used in several NCBI submission workflows</td><td>Still FASTA-formatted sequence.</td></tr>
    </tbody>
  </table>

  <p><strong>Do not trust the extension alone.</strong> A mislabeled file can still be syntactically valid, and many tools inspect the sequence rather than the filename.</p>

  <p><strong>Takeaway:</strong> the <strong>content defines the FASTA record</strong>; extensions are convenience labels.</p>
</section>

<section>
  <h2>10. Practical Quality Checks Before Using a FASTA File</h2>

  <p>Many FASTA failures are caused by <strong>file hygiene rather than complex biology</strong>. A brief inspection before analysis can prevent mislabeled sequences, duplicate output labels, invalid characters, and lost provenance. NCBI submission guidance emphasizes unique sequence IDs and valid definition-line structure, while INSDC standards define the accepted nucleotide and amino-acid alphabets.<sup><a href="#ref2">2</a></sup><sup><a href="#ref4">4</a></sup></p>

  <ol>
    <li><strong>Confirm the biological sequence type.</strong> Is the input DNA, RNA, protein, or an aligned sequence set?</li>
    <li><strong>Check record boundaries.</strong> Every record must begin with <code>&gt;</code>.</li>
    <li><strong>Check identifiers.</strong> Keep IDs unique when downstream tools use them as labels.</li>
    <li><strong>Inspect the alphabet.</strong> Distinguish valid ambiguity codes from accidental characters.</li>
    <li><strong>Check orientation.</strong> For nucleotide sequences, know whether the sequence is forward, reverse-complemented, transcript-derived, or otherwise transformed.</li>
    <li><strong>Check for unintended gaps.</strong> A <code>-</code> may be appropriate in an alignment but suspicious in a raw sequence.</li>
    <li><strong>Remove copied formatting.</strong> Page numbers, commas, rich-text characters, and word-processor markup do not belong in the sequence body.</li>
    <li><strong>Record provenance.</strong> Keep the database name, accession, accession version, sample identifier, or analysis step that produced the sequence.</li>
    <li><strong>Preserve metadata separately.</strong> FASTA alone usually cannot preserve feature coordinates, experimental conditions, or full sample metadata.</li>
    <li><strong>Check the destination tool.</strong> Different tools may differ in accepted ambiguity codes, gap symbols, stop characters, and header conventions.</li>
  </ol>

  <h3>10.1 Poor Identifier Practice</h3>

  <pre><code>&gt;sequence 1 final new corrected copy
ATGCGT...</code></pre>

  <p>The text is understandable to its creator today but is difficult to track reproducibly later.</p>

  <h3>10.2 Improved Identifier Practice</h3>

  <pre><code>&gt;EC01_16S isolate_EC01_16S_rRNA
AGAGTT...</code></pre>

  <p>The improved version has a <strong>stable machine-readable identifier</strong> plus a concise biological description.</p>

  <p><strong>Takeaway:</strong> before analysis, verify <strong>type, IDs, alphabet, orientation, gaps, and provenance</strong>.</p>
</section>

<section>
  <h2>11. FASTA in Real Bioinformatics Workflows</h2>

  <p>FASTA is best understood as a <strong>common interface between databases and analytical tools</strong>. The same basic representation can move from sequence retrieval to alignment, similarity searching, annotation, and prediction.</p>

  <p>A typical workflow may be summarized as:</p>

  <p><strong>Biological sample → sequencing/assembly → sequence record → FASTA export → computational analysis → biological interpretation.</strong></p>

  <h3>11.1 Sequence Similarity Searching</h3>

  <p>A nucleotide or protein sequence can be pasted or uploaded to <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank" rel="noopener noreferrer">NCBI BLAST</a>. BLAST accepts nucleotide and protein queries and compares them with sequence databases.<sup><a href="#ref8">8</a></sup> FASTA is therefore often the bridge between a locally stored sequence and database similarity searching.</p>

  <h3>11.2 Multiple Sequence Alignment</h3>

  <p>A multi-FASTA collection of related sequences can be supplied to tools such as <a href="https://www.ebi.ac.uk/jdispatcher/msa/clustalo" target="_blank" rel="noopener noreferrer">Clustal Omega</a> for multiple sequence alignment. The input file identifies each sequence; the alignment program determines how residues should be arranged relative to one another.</p>

  <h3>11.3 Protein Family and Domain Analysis</h3>

  <p>A protein FASTA sequence can be supplied to <a href="https://www.ebi.ac.uk/interpro/search/sequence/" target="_blank" rel="noopener noreferrer">InterPro</a> or InterProScan to search protein family, domain, site, and repeat signatures. The resulting annotations are <strong>predictions or database-supported classifications</strong>, not experimental proof of function.</p>

  <h3>11.4 Genome and Metagenome Workflows</h3>

  <p>Genome assemblies are commonly represented as multi-FASTA files containing contigs or scaffolds, while predicted proteomes are commonly represented as protein FASTA files. The same dataset may therefore move through several FASTA representations during a project: <strong>assembled DNA → predicted coding sequences → translated proteins</strong>.</p>

  <p><strong>Takeaway:</strong> FASTA is not the analysis itself; it is often the <strong>input/output language connecting analytical steps</strong>.</p>
</section>

<section>
  <h2>12. Common Misinterpretations to Avoid</h2>

  <dl>
    <dt><strong>"The file ends in .fasta, so I know what molecule it contains."</strong></dt>
    <dd>No. The extension identifies a likely format, not necessarily whether the sequence is DNA, RNA, protein, aligned, predicted, or experimentally determined.</dd>

    <dt><strong>"The header contains a gene name, therefore the sequence must be that gene."</strong></dt>
    <dd>No. A FASTA header is metadata supplied by a database, program, or user. Its correctness depends on the source and annotation process.</dd>

    <dt><strong>"An N in a DNA sequence is an error that should be deleted."</strong></dt>
    <dd>No. <code>N</code> is a valid IUPAC symbol representing an unspecified nucleotide. Removing it changes sequence length and positional relationships.</dd>

    <dt><strong>"A protein FASTA hit proves the protein has that function."</strong></dt>
    <dd>No. Sequence similarity or domain annotation can support a functional hypothesis, but <strong>prediction is not experimental validation</strong>.</dd>

    <dt><strong>"FASTA preserves everything from GenBank or UniProt."</strong></dt>
    <dd>No. FASTA intentionally reduces the record to a header and sequence; much of the structured biological annotation is lost.</dd>
  </dl>

  <p><strong>Takeaway:</strong> FASTA tells you <strong>what sequence string was supplied</strong>; correct biological interpretation still depends on source, metadata, analysis, and validation.<sup><a href="#ref2">2</a></sup><sup><a href="#ref4">4</a></sup><sup><a href="#ref5">5</a></sup></p>
</section>

<section>
  <h2>13. Conclusion</h2>

  <p>FASTA is simple enough to learn quickly, but correct use requires more than recognizing the <code>&gt;</code> symbol. A FASTA record combines an <strong>identifier/description</strong> with an <strong>ordered nucleotide or amino-acid sequence</strong>. The same representation can describe one sequence, thousands of sequences, or even sequences that have already been aligned.</p>

  <p>The most important distinction is that FASTA is a <strong>representation format, not an annotation system</strong>. It normally does not preserve gene coordinates, detailed feature tables, experimental evidence, quality scores, or the full provenance found in biological databases. Those details must be retained separately when they matter to interpretation.</p>

  <p>For reliable use, remember the short checklist: <strong>identify the molecule → inspect the header → verify the alphabet → preserve orientation and provenance → check tool requirements</strong>. With these habits, FASTA becomes a dependable interface for sequence searching, alignment, annotation, genomics, proteomics, and many other bioinformatics workflows.<sup><a href="#ref2">2</a></sup><sup><a href="#ref3">3</a></sup></p>
</section>

<section id="references">
  <h2>References</h2>
  <ol>
    <li id="ref1">Pearson WR, Lipman DJ. Improved tools for biological sequence comparison. <em>Proceedings of the National Academy of Sciences</em>. 1988;85(8):2444–2448. DOI: <a href="https://doi.org/10.1073/pnas.85.8.2444" target="_blank" rel="noopener noreferrer">10.1073/pnas.85.8.2444</a>. <a href="https://pubmed.ncbi.nlm.nih.gov/3162770/" target="_blank" rel="noopener noreferrer">PubMed</a>.</li>

    <li id="ref2">National Center for Biotechnology Information (NCBI). FASTA-formatted sequences and GenBank submission guidance. <a href="https://submit.ncbi.nlm.nih.gov/about/genbank/" target="_blank" rel="noopener noreferrer">GenBank submission guidance</a>; <a href="https://www.ncbi.nlm.nih.gov/genbank/genomesubmit/" target="_blank" rel="noopener noreferrer">Genome submission FASTA guidance</a>; <a href="https://www.ncbi.nlm.nih.gov/genbank/mods_fastadefline/" target="_blank" rel="noopener noreferrer">Modifiers for FASTA definition lines</a>.</li>

    <li id="ref3">EMBL-EBI. Sequence formats and Dbfetch FASTA documentation. <a href="https://www.ebi.ac.uk/jdispatcher/docs/formats/" target="_blank" rel="noopener noreferrer">Example sequence formats</a>; <a href="https://www.ebi.ac.uk/Tools/dbfetch/faq.jsp" target="_blank" rel="noopener noreferrer">Dbfetch FASTA header conventions</a>.</li>

    <li id="ref4">International Nucleotide Sequence Database Collaboration (INSDC). Feature Table Definition: controlled vocabularies for <strong>IUPAC nucleotide base codes</strong> and <strong>amino-acid abbreviations</strong>. <a href="https://www.insdc.org/submitting-standards/feature-table/" target="_blank" rel="noopener noreferrer">INSDC Feature Table</a>.</li>

    <li id="ref5">UniProt Consortium. FASTA header conventions for UniProtKB, UniRef, UniParc, and related sequence sets. <a href="https://www.uniprot.org/help/fasta-headers" target="_blank" rel="noopener noreferrer">UniProt FASTA headers</a>.</li>

    <li id="ref6">National Center for Biotechnology Information (NCBI), Sequence Read Archive. File Format Guide: FASTQ files. <a href="https://www.ncbi.nlm.nih.gov/sra/docs/submitformats/" target="_blank" rel="noopener noreferrer">SRA file format guide</a>.</li>

    <li id="ref7">Cock PJA, Fields CJ, Goto N, Heuer ML, Rice PM. The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants. <em>Nucleic Acids Research</em>. 2010;38(6):1767–1771. DOI: <a href="https://doi.org/10.1093/nar/gkp1137" target="_blank" rel="noopener noreferrer">10.1093/nar/gkp1137</a>.</li>

    <li id="ref8">National Center for Biotechnology Information (NCBI). Basic Local Alignment Search Tool (BLAST). <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank" rel="noopener noreferrer">NCBI BLAST</a>.</li>
  </ol>
</section>

</article>
  `},V2=Object.freeze(Object.defineProperty({__proto__:null,default:U2},Symbol.toStringTag,{value:"Module"})),$2={id:"RK-2026-017",title:"Introduction to Primary Nucleotide Databases: GenBank, ENA and DDBJ",date:"2026-08-31",tags:["#GenBank","#NucleotideDatabases","#bioinformatics"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Primary nucleotide databases are the archival layer of sequence bioinformatics: they preserve nucleotide sequences submitted by researchers and assign stable identifiers that allow those records to be found and cited. This introductory article uses GenBank as the main example, then shows how the European Nucleotide Archive (ENA) and DNA Data Bank of Japan (DDBJ) participate in the same international data-sharing system. The emphasis is on the few ideas a first-time user needs to understand before searching, opening, interpreting, and downloading a nucleotide record.",content:`
<article>

<section>
  <h2>1. Why Do We Need a Nucleotide Database?</h2>

  <p>A DNA sequence produced in one laboratory becomes much more useful when other researchers can <strong>find it, identify it unambiguously, inspect its biological context, and reuse it</strong>. A nucleotide database provides the infrastructure needed to make that possible.</p>

  <p>Imagine that a laboratory sequences a bacterial gene and publishes a paper stating only that the sequence was obtained. Another researcher would still need the actual sequence before it could be compared with an isolate, used in an alignment, or examined for mutations. Public nucleotide archives solve this problem by giving sequence data a <strong>permanent public record</strong> and an identifier that can be cited in a publication.<sup><a href="#ref1">1</a></sup></p>

  <p>The three names students most often encounter are <strong>GenBank</strong>, the <strong>European Nucleotide Archive (ENA)</strong>, and the <strong>DNA Data Bank of Japan (DDBJ)</strong>. They are not isolated competitors holding completely different collections. They cooperate through an international system discussed later in this article.<sup><a href="#ref2">2</a></sup></p>

  <p><strong>Takeaway:</strong> A primary nucleotide database is part of the scientific record. Its first job is to make sequence data <strong>identifiable, retrievable, shareable, and preservable</strong>.</p>
</section>

<section>
  <h2>2. What Is a Primary Biological Database?</h2>

  <p>A <strong>primary database</strong> is an archival resource that receives biological data from researchers or data-producing projects and preserves those submitted records for the scientific community. In nucleotide bioinformatics, the important idea is <strong>provenance</strong>: the database is close to the point where the sequence data enter the public scientific record.</p>

  <p>GenBank, for example, states that an important source of new records is <strong>direct submission from researchers</strong>. Submitted records then undergo automated and manual processing for integrity and quality before public release.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Important:</strong> “Primary” does <em>not</em> mean “no quality checking” or “no annotation.” It describes the database's role as an <strong>archive of submitted sequence records</strong>.
  </blockquote>

  <h3>2.1 Primary vs. Secondary vs. Composite Resources</h3>

  <p>These categories become easier if we ask <strong>where the information comes from and what the resource is trying to do</strong>.</p>

  <table class="science-table" data-id="database-levels-intro">
    <caption>Table 1: A beginner-level distinction between primary, secondary, and composite biological resources</caption>
    <thead>
      <tr>
        <th>Type</th>
        <th>Core Role</th>
        <th>Think of It As</th>
        <th>Typical Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Primary</strong></td>
        <td>Archives submitted biological data and associated annotation/metadata.</td>
        <td>The <em>record of deposited data</em>.</td>
        <td>GenBank, ENA, DDBJ</td>
      </tr>
      <tr>
        <td><strong>Secondary</strong></td>
        <td>Derives, curates, classifies, or interprets information using existing data and literature.</td>
        <td>The <em>interpretation layer</em>.</td>
        <td>Resources for protein families, domains, pathways, or curated biological knowledge</td>
      </tr>
      <tr>
        <td><strong>Composite / integrated</strong></td>
        <td>Brings information from multiple underlying sources into one searchable or connected interface.</td>
        <td>The <em>integration layer</em>.</td>
        <td>A portal that searches or links several sequence and annotation resources together</td>
      </tr>
    </tbody>
  </table>

  <p>The distinction is useful but should not be treated as an absolute law. Modern biological resources are interconnected, and a single website can provide archival data, links, analysis tools, and derived information together. What matters for a beginner is recognizing the <strong>main role of the resource being used</strong>.</p>

  <p>For example, NCBI's <strong>Nucleotide</strong> search system can retrieve sequences from several sources, including GenBank. Therefore, the webpage through which you search may be an integrated retrieval interface even though the underlying GenBank record belongs to a primary archive.<sup><a href="#ref3">3</a></sup></p>

  <p><strong>Takeaway:</strong> Ask: <em>“Am I looking at deposited sequence data, interpreted knowledge, or an interface that integrates several sources?”</em></p>
</section>

<section>
  <h2>3. GenBank: The Best Place to Learn the Basic Idea</h2>

  <p><a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noopener noreferrer"><strong>GenBank</strong></a> is the NIH public nucleotide sequence repository operated through the <strong>National Center for Biotechnology Information (NCBI)</strong>. NCBI describes it as an annotated collection of publicly available DNA sequences.<sup><a href="#ref1">1</a></sup></p>

  <p>For a first-time user, do not try to learn every GenBank division, submission category, or identifier type. Start with one simple mental model:</p>

  <p><strong>Researcher generates sequence → sequence is submitted → a database record is created → an accession is assigned → other researchers can search and retrieve that record.</strong></p>

  <h3>3.1 What Can a GenBank Record Represent?</h3>

  <p>A record can represent many kinds of nucleotide sequence, such as a <strong>gene, transcript, genomic region, plasmid sequence, organelle sequence, viral sequence, or assembled genomic sequence</strong>. The exact content depends on what was sequenced and submitted.</p>

  <p>This is important because a GenBank record is <strong>not automatically equivalent to “one gene.”</strong> One record might contain a single gene, while another may contain many genes or a much larger genomic region.</p>

  <p><strong>Takeaway:</strong> GenBank is a <strong>sequence-record archive</strong>, not simply a list of gene names.</p>
</section>

<section>
  <h2>4. The Most Important Idea: The Accession Number</h2>

  <p>When you first learn GenBank, the single most useful concept is the <strong>accession number</strong>. It is a stable identifier assigned to a sequence record.<sup><a href="#ref4">4</a></sup></p>

  <p>An accession may look like:</p>

  <pre><code>U49845</code></pre>

  <p>The accession is far more useful than trying to remember the full record title. NCBI specifically recommends searching by the actual accession because accession numbers are stable identifiers for records.<sup><a href="#ref5">5</a></sup></p>

  <h3>4.1 Accession vs. Accession.Version</h3>

  <p>You may also see:</p>

  <pre><code>U49845.1</code></pre>

  <p>Here:</p>

  <ul>
    <li><code>U49845</code> = the <strong>accession</strong>, identifying the record;</li>
    <li><code>.1</code> = the <strong>sequence version</strong>.</li>
  </ul>

  <p>If the actual nucleotide sequence changes, even by a single base, the version suffix is incremented while the accession portion is retained. A record could therefore progress from <code>U12345.1</code> to <code>U12345.2</code> after a sequence correction.<sup><a href="#ref5">5</a></sup></p>

  <blockquote>
    <strong>Practical rule:</strong> When reproducibility matters, record the <strong>accession.version</strong>, because it identifies the particular sequence version you used.
  </blockquote>

  <h3>4.2 Do Not Memorize Accession Formats Yet</h3>

  <p>INSDC accession formats vary between categories and historical periods. You will encounter different combinations of letters and numbers.<sup><a href="#ref6">6</a></sup> At this stage, the important idea is not the pattern. It is that the accession functions as a <strong>persistent lookup key</strong>.</p>

  <p><strong>Takeaway:</strong> If someone gives you a nucleotide accession, your first instinct should be: <em>“I can use this identifier to retrieve the corresponding sequence record.”</em></p>
</section>

<section>
  <h2>5. Your First GenBank Record: What Should You Look At?</h2>

  <p>GenBank records contain much more information than FASTA. NCBI provides an annotated sample record using accession <a href="https://www.ncbi.nlm.nih.gov/nucleotide/U49845" target="_blank" rel="noopener noreferrer"><code>U49845</code></a>.<sup><a href="#ref4">4</a></sup> A beginner does not need to interpret every line. On the first visit, concentrate on only a few fields.</p>

  <table class="science-table" data-id="first-genbank-fields">
    <caption>Table 2: The first GenBank record fields a beginner should recognize</caption>
    <thead>
      <tr>
        <th>Field</th>
        <th>What It Tells You</th>
        <th>Beginner Question</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>DEFINITION</strong></td>
        <td>A short description of the sequence record.</td>
        <td>What is this record broadly about?</td>
      </tr>
      <tr>
        <td><strong>ACCESSION</strong></td>
        <td>The stable record identifier.</td>
        <td>How do I find or cite this record?</td>
      </tr>
      <tr>
        <td><strong>VERSION</strong></td>
        <td>The accession plus the current sequence version.</td>
        <td>Which exact sequence version am I using?</td>
      </tr>
      <tr>
        <td><strong>SOURCE / ORGANISM</strong></td>
        <td>The biological source and taxonomic identity.</td>
        <td>Which organism did this sequence come from?</td>
      </tr>
      <tr>
        <td><strong>FEATURES</strong></td>
        <td>Annotated biological features and their positions.</td>
        <td>Where are genes, coding sequences, or other annotated regions?</td>
      </tr>
      <tr>
        <td><strong>ORIGIN</strong></td>
        <td>The nucleotide sequence itself begins below this field.</td>
        <td>Where is the actual sequence?</td>
      </tr>
    </tbody>
  </table>

  <p>The <strong>FEATURES</strong> section is especially important because it connects sequence coordinates with biological interpretation. It can describe features such as a <code>gene</code> or <code>CDS</code> and attach qualifiers describing the organism, product, protein identifier, or other properties. GenBank, ENA, and DDBJ use shared feature-table standards so that these annotations can be exchanged consistently.<sup><a href="#ref7">7</a></sup></p>

  <p><strong>Do not try to memorize the complete feature-table vocabulary now.</strong> At this stage, simply recognize that a GenBank record is more than a nucleotide string: it contains <strong>sequence + identifiers + biological annotation + provenance</strong>.</p>

  <p><strong>Takeaway:</strong> On your first GenBank visit, locate <strong>accession, organism, features, and sequence</strong>. That is enough.</p>
</section>

<section>
  <h2>6. FASTA and GenBank Format Are Different Views of the Same Sequence</h2>

  <p>The previous topic introduced FASTA as a simple sequence representation. GenBank records demonstrate why FASTA and a database record should not be confused.</p>

  <p>A FASTA view may look roughly like:</p>

  <pre><code>&gt;U49845.1 Saccharomyces cerevisiae sequence
ATG...</code></pre>

  <p>The corresponding GenBank record can additionally contain <strong>references, source organism, taxonomy, feature coordinates, coding sequences, products, protein identifiers, and other annotations</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p>This gives a useful workflow distinction:</p>

  <ul>
    <li><strong>Open the database record</strong> when you want to understand what the sequence represents.</li>
    <li><strong>Download FASTA</strong> when a sequence-analysis tool needs the nucleotide sequence as input.</li>
  </ul>

  <p>NCBI allows GenBank records to be viewed or downloaded in FASTA form. The sequence has not become a different biological sequence; only its <strong>representation has changed</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p><strong>Takeaway:</strong> <strong>GenBank format carries context; FASTA emphasizes the sequence.</strong></p>
</section>

<section>
  <h2>7. GenBank Is Part of a Global Collaboration: INSDC</h2>

  <p>The most important organizational concept is the <strong>International Nucleotide Sequence Database Collaboration (INSDC)</strong>. It links three major nucleotide data partners:</p>

  <ul>
    <li><strong>GenBank</strong> at NCBI in the United States;</li>
    <li><strong>European Nucleotide Archive (ENA)</strong> at EMBL-EBI in Europe;</li>
    <li><strong>DNA Data Bank of Japan (DDBJ)</strong> at the National Institute of Genetics in Japan.</li>
  </ul>

  <p>The partners exchange sequence data and maintain shared standards so that public nucleotide information submitted through one partner becomes available through the collaboration.<sup><a href="#ref2">2</a></sup></p>

  <p>A useful beginner analogy is <strong>three major entry gates into a coordinated international archive</strong>. The websites, interfaces, and local services differ, but the underlying collaboration prevents researchers from having to treat GenBank, ENA, and DDBJ as three unrelated worlds.</p>

  <table class="science-table" data-id="insdc-beginner-comparison">
    <caption>Table 3: The three INSDC partners at introductory level</caption>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Organization / Region</th>
        <th>What to Remember Now</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GenBank</strong></td>
        <td>NCBI, United States</td>
        <td>Use it as the main learning example for nucleotide sequence records and accessions.</td>
      </tr>
      <tr>
        <td><strong>ENA</strong></td>
        <td>EMBL-EBI, Europe</td>
        <td>European partner providing access to nucleotide sequencing information from raw data through assembled and annotated sequences.</td>
      </tr>
      <tr>
        <td><strong>DDBJ</strong></td>
        <td>NIG, Japan</td>
        <td>Japanese partner accepting and distributing nucleotide sequence data under shared INSDC standards.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Takeaway:</strong> Do not memorize three separate databases. First remember one system: <strong>INSDC = GenBank + ENA + DDBJ collaboration</strong>.</p>
</section>

<section>
  <h2>8. What Does “EMBL” Mean in Older Books?</h2>

  <p>Students often encounter the syllabus wording <strong>“GenBank, EMBL, DDBJ.”</strong> The European resource has changed names and expanded over time. The historical <strong>EMBL Nucleotide Sequence Data Library / EMBL-Bank</strong> became part of what is now the <a href="https://www.ebi.ac.uk/ena/browser/home" target="_blank" rel="noopener noreferrer"><strong>European Nucleotide Archive (ENA)</strong></a> at EMBL-EBI.<sup><a href="#ref8">8</a></sup></p>

  <p>ENA now provides access across the sequencing-data lifecycle, including raw reads, assemblies, and annotated sequence information.<sup><a href="#ref9">9</a></sup></p>

  <p>Therefore, when an older textbook or syllabus says <strong>EMBL database</strong>, connect that historical term with the modern European nucleotide archive at <strong>EMBL-EBI: ENA</strong>.</p>

  <p><strong>Takeaway:</strong> <strong>“EMBL” in older sequence-database teaching usually points to the historical lineage of today's ENA.</strong></p>
</section>

<section>
  <h2>9. DDBJ: The Same Core Idea from the Japanese Partner</h2>

  <p><a href="https://www.ddbj.nig.ac.jp/index-e.html" target="_blank" rel="noopener noreferrer"><strong>DDBJ</strong></a> is the Japanese INSDC partner. For its assembled/annotated nucleotide sequence archive, DDBJ accepts experimentally determined nucleotide sequence data submitted by researchers and distributes records according to INSDC standards.<sup><a href="#ref10">10</a></sup></p>

  <p>At this introductory stage, there is little value in learning a second set of record fields immediately after learning GenBank. Instead, carry the same conceptual framework with you:</p>

  <p><strong>sequence submission → archival record → accession → shared standards → international retrieval.</strong></p>

  <p>The common accession system is particularly important. INSDC accessions are internationally recognized identifiers, and the partner databases coordinate their sequence records.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> DDBJ is not a different biological concept to memorize. It is another major <strong>INSDC archival partner</strong>.</p>
</section>

<section>
  <h2>10. Your First Practical Visit to GenBank</h2>

  <p>The best way to understand a nucleotide database is to open one record rather than reading dozens of definitions.</p>

  <h3>10.1 Exercise A: Search by Accession</h3>

  <ol>
    <li>Open <a href="https://www.ncbi.nlm.nih.gov/nucleotide/" target="_blank" rel="noopener noreferrer"><strong>NCBI Nucleotide</strong></a>.</li>
    <li>Search for <code>U49845</code>, NCBI's annotated sample GenBank record.</li>
    <li>Find the <strong>accession and version</strong>.</li>
    <li>Identify the <strong>source organism</strong>.</li>
    <li>Locate the <strong>FEATURES</strong> section.</li>
    <li>Locate the nucleotide sequence.</li>
  </ol>

  <p>Do not attempt to interpret every field. The objective is only to connect <strong>identifier → biological record → sequence</strong>.</p>

  <h3>10.2 Exercise B: Change the Display to FASTA</h3>

  <p>Display or download the same record as FASTA. Compare what remains with what disappears.</p>

  <p>You should notice that FASTA makes the sequence convenient for analysis, whereas the full database record contains much richer contextual information.<sup><a href="#ref4">4</a></sup></p>

  <h3>10.3 Exercise C: Search by Biology Instead of Accession</h3>

  <p>Now try a biological query such as an organism name plus a gene name. Text searching is useful when the accession is unknown, but terminology can vary between submitted records. NCBI notes that definition lines are not based on a single controlled vocabulary, so synonyms and alternative wording may sometimes be required.<sup><a href="#ref4">4</a></sup></p>

  <p><strong>Takeaway:</strong> Learn two retrieval modes first: <strong>accession search when you know the ID; biological text search when you do not.</strong></p>
</section>

<section>
  <h2>11. What Should You Expect to Find—and What Should You Not Assume?</h2>

  <p>A primary nucleotide database is powerful, but a retrieved record must still be interpreted carefully.</p>

  <h3>11.1 Sequence Presence Is Not Experimental Proof of Every Annotation</h3>

  <p>A record may contain experimentally supported information, submitter-provided annotation, computationally inferred features, or later updates. <strong>Database presence should not automatically be treated as proof of biological function.</strong> Read the relevant evidence and linked literature when the scientific conclusion matters.</p>

  <h3>11.2 A Record Is Not Necessarily a Complete Genome</h3>

  <p>The record may correspond to a short sequence, one gene, a transcript, a plasmid, a contig, a chromosome, or another sequence unit. Always check what the record actually represents.</p>

  <h3>11.3 GenBank and RefSeq Are Not the Same Thing</h3>

  <p>NCBI also provides <strong>RefSeq</strong>, which has its own accession patterns such as <code>NC_</code>, <code>NM_</code>, and <code>NP_</code>. NCBI explicitly distinguishes RefSeq from GenBank even though the resources are cross-linked.<sup><a href="#ref4">4</a></sup></p>

  <p>You do not need to master RefSeq yet. For now, simply avoid assuming that <strong>every record visible in NCBI Nucleotide is a GenBank submission</strong>.</p>

  <h3>11.4 Do Not Judge a Record Only by Its Title</h3>

  <p>Look at the <strong>accession, organism, sequence length, features, and provenance</strong>. The database record is the evidence container; the title is only a convenient summary.</p>

  <p><strong>Takeaway:</strong> Retrieve first, then inspect what the record actually represents before using it biologically.</p>
</section>

<section>
  <h2>12. A Minimal Workflow to Remember</h2>

  <p>For most beginner exercises, the following sequence is enough:</p>

  <ol>
    <li><strong>Define the biological target:</strong> organism, gene, region, or known accession.</li>
    <li><strong>Search the nucleotide resource.</strong></li>
    <li><strong>Open the record.</strong></li>
    <li><strong>Verify the organism and record description.</strong></li>
    <li><strong>Record the accession.version.</strong></li>
    <li><strong>Inspect important FEATURES when needed.</strong></li>
    <li><strong>Download FASTA</strong> if the next analysis requires only the sequence.</li>
    <li><strong>Preserve the accession</strong> so the source can be traced later.</li>
  </ol>

  <p>This workflow is more valuable than memorizing the layout of every database webpage because interfaces change while the core logic remains stable.</p>

  <blockquote>
    <strong>Core idea:</strong> A good bioinformatics workflow should always let you answer, <em>“Which exact sequence did I use, where did it come from, and how can another researcher retrieve it?”</em>
  </blockquote>

  <p><strong>Takeaway:</strong> <strong>Search → verify → record the identifier → retrieve the sequence → preserve provenance.</strong></p>
</section>

<section>
  <h2>13. What to Learn Next</h2>

  <p>After this introduction, the next useful topics are not the obscure details of GenBank syntax. They are the practical concepts that build naturally from the record:</p>

  <ul>
    <li>how to search NCBI Nucleotide efficiently;</li>
    <li>how to interpret common <strong>GenBank FEATURES</strong> such as <code>gene</code> and <code>CDS</code>;</li>
    <li>how GenBank differs from <strong>RefSeq</strong>;</li>
    <li>how to retrieve sequence in <strong>FASTA</strong>;</li>
    <li>how to use an accession in <strong>BLAST</strong> and other sequence-analysis workflows;</li>
    <li>how raw sequencing reads, genome assemblies, BioProjects, and BioSamples connect to nucleotide records.</li>
  </ul>

  <p>Those topics are easier once the foundation is clear: <strong>GenBank, ENA, and DDBJ preserve publicly shared nucleotide sequence records through the INSDC collaboration, and accession numbers provide the durable handles used to retrieve those records.</strong></p>
</section>

<section id="references">
  <h2>References</h2>
  <ol>
    <li id="ref1">
      National Center for Biotechnology Information (NCBI). 
      <a href="https://www.ncbi.nlm.nih.gov/genbank/" target="_blank" rel="noopener noreferrer">GenBank Overview</a>. 
      NCBI, U.S. National Library of Medicine. Accessed 31 August 2026.
    </li>
    <li id="ref2">
      International Nucleotide Sequence Database Collaboration (INSDC). 
      <a href="https://www.insdc.org/about-insdc/" target="_blank" rel="noopener noreferrer">About INSDC</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref3">
      National Center for Biotechnology Information (NCBI). 
      <a href="https://www.ncbi.nlm.nih.gov/genbank/about/" target="_blank" rel="noopener noreferrer">About GenBank: Access to GenBank</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref4">
      National Center for Biotechnology Information (NCBI). 
      <a href="https://www.ncbi.nlm.nih.gov/genbank/samplerecord/" target="_blank" rel="noopener noreferrer">Sample GenBank Record: U49845</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref5">
      National Center for Biotechnology Information (NCBI). 
      <a href="https://www.ncbi.nlm.nih.gov/genbank/sequenceids/" target="_blank" rel="noopener noreferrer">GenBank Sequence Identifiers</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref6">
      DNA Data Bank of Japan (DDBJ). 
      <a href="https://www.ddbj.nig.ac.jp/insdc/accessions-e.html" target="_blank" rel="noopener noreferrer">Accession Number Assigned by INSD</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref7">
      International Nucleotide Sequence Database Collaboration (INSDC). 
      <a href="https://www.insdc.org/submitting-standards/feature-table/" target="_blank" rel="noopener noreferrer">The DDBJ/ENA/GenBank Feature Table Definition, Version 11.4</a>. 
      April 2026.
    </li>
    <li id="ref8">
      European Molecular Biology Laboratory-European Bioinformatics Institute (EMBL-EBI). 
      <a href="https://www.ebi.ac.uk/about/our-story" target="_blank" rel="noopener noreferrer">Our Story</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref9">
      EMBL-EBI Training. 
      <a href="https://www.ebi.ac.uk/training/online/courses/ena-quick-tour/what-is-ena/" target="_blank" rel="noopener noreferrer">What is ENA?</a>. 
      Accessed 31 August 2026.
    </li>
    <li id="ref10">
      DNA Data Bank of Japan (DDBJ). 
      <a href="https://www.ddbj.nig.ac.jp/ddbj/sequence-e.html" target="_blank" rel="noopener noreferrer">Nucleotide Sequences: Introduction</a>. 
      Accessed 31 August 2026.
    </li>
  </ol>
</section>

</article>
  `},Y2=Object.freeze(Object.defineProperty({__proto__:null,default:$2},Symbol.toStringTag,{value:"Module"})),K2={id:"RK-2026-018",title:"Core Pharmacology Databases: Connecting Chemicals, Targets and Drug Response",date:"2026-08-31",tags:["#Pharmacology","#DrugDatabases","#DrugDiscovery"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Pharmacology sits at the interface between chemistry and biology: a chemical has a structure, interacts with biological targets, produces measurable activity, and may ultimately become a medicine whose effects vary between patients. This introductory article presents the small set of databases that are most useful for following that chain, including PubChem, ChEMBL, DrugBank, the IUPHAR/BPS Guide to PHARMACOLOGY, BindingDB, DrugCentral, and ClinPGx. The aim is not to memorize databases, but to learn which resource answers which pharmacological question.",content:`
<article>

<section>
  <h2>1. Pharmacology Needs Both Chemical and Biological Information</h2>

  <p>A pharmacologist rarely asks only, <em>“What is this chemical?”</em> The more useful questions are usually: <strong>What is its structure? Which target does it act on? How strongly does it act? Is it an agonist, antagonist, inhibitor, or activator? Is it an approved drug? What adverse effects or interactions are known? Does genetic variation change the patient's response?</strong></p>

  <p>No single database answers all of these questions equally well. Pharmacology therefore depends on a group of connected resources that describe different parts of the same story.</p>

  <p>A useful way to visualize the information flow is:</p>

  <p><strong>chemical identity → molecular structure → biological target → measured activity → mechanism of action → therapeutic use → patient-specific response</strong></p>

  <p>This article focuses only on databases that directly support this <strong>chemical–biology interface</strong>. General nucleotide, protein-sequence, and protein-structure databases are intentionally left for their own articles.</p>

  <blockquote>
    <strong>Core idea:</strong> Do not memorize a list of database names. Learn <strong>which pharmacological question each database is designed to answer</strong>.
  </blockquote>
</section>

<section>
  <h2>2. The Core Database Map</h2>

  <p>For an introductory pharmacology course, seven resources cover most of the concepts worth learning first. They overlap, but each has a particularly useful role.</p>

  <table class="science-table" data-id="pharmacology-core-database-map">
    <caption>Table 1: Core databases for connecting chemical and biological information in pharmacology</caption>
    <thead>
      <tr>
        <th>Database</th>
        <th>Best First Question</th>
        <th>Main Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>PubChem</strong></td>
        <td>What chemical is this?</td>
        <td>Structures, identifiers, properties, substances, biological assays, safety links.</td>
      </tr>
      <tr>
        <td><strong>ChEMBL</strong></td>
        <td>What biological activity has been measured for this compound?</td>
        <td>Curated compounds, targets, assays, potency/activity measurements, ADMET-related data.</td>
      </tr>
      <tr>
        <td><strong>DrugBank</strong></td>
        <td>What is known about this drug as a medicine?</td>
        <td>Drug identity, targets, mechanism, indications, interactions, metabolism and related pharmaceutical information.</td>
      </tr>
      <tr>
        <td><strong>IUPHAR/BPS Guide to PHARMACOLOGY</strong></td>
        <td>What is the accepted pharmacology of this ligand–target pair?</td>
        <td>Expert-curated targets, ligands, pharmacological action and quantitative activity.</td>
      </tr>
      <tr>
        <td><strong>BindingDB</strong></td>
        <td>How strongly does this small molecule bind to this target?</td>
        <td>Experimentally measured protein–ligand binding affinities.</td>
      </tr>
      <tr>
        <td><strong>DrugCentral</strong></td>
        <td>What approved-drug, indication and mechanism information is available?</td>
        <td>Active ingredients, approvals, indications, mode of action, pharmacologic action and target relationships.</td>
      </tr>
      <tr>
        <td><strong>ClinPGx</strong><br><em>(formerly PharmGKB)</em></td>
        <td>Can genetics alter the response to this drug?</td>
        <td>Gene–drug relationships, pharmacogenomic annotations, drug labels and genotype-guided prescribing information.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Takeaway:</strong> The databases overlap, but their <strong>center of gravity</strong> differs: PubChem begins with the chemical, ChEMBL and BindingDB emphasize measured activity, DrugBank and DrugCentral emphasize drugs, Guide to PHARMACOLOGY emphasizes established ligand–target pharmacology, and ClinPGx emphasizes patient variation.</p>
</section>

<section>
  <h2>3. PubChem: Start With the Chemical</h2>

  <p><a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer"><strong>PubChem</strong></a>, maintained by the U.S. National Institutes of Health, is an open chemistry resource containing chemical structures, identifiers, physicochemical properties, biological activities, safety information and links to many contributing sources.<sup><a href="#ref1">1</a></sup></p>

  <p>For a pharmacology student, PubChem is often the best <strong>first stop when the starting point is a compound name</strong>. Searching a familiar drug such as aspirin can quickly connect the common name with its standardized chemical structure, formula, molecular weight, synonyms and external records.</p>

  <h3>3.1 Three PubChem IDs Worth Recognizing</h3>

  <p>PubChem separates submitted information from standardized chemical structures. The distinction is useful because the same molecule may be supplied by many different organizations.<sup><a href="#ref2">2</a></sup></p>

  <ul>
    <li><strong>SID — Substance ID:</strong> identifies a substance description submitted by a particular data source.</li>
    <li><strong>CID — Compound ID:</strong> identifies a standardized chemical structure derived from contributed substance records.</li>
    <li><strong>AID — Assay ID:</strong> identifies a biological assay record in PubChem BioAssay.</li>
  </ul>

  <p>This immediately teaches an important pharmacological lesson: <strong>a chemical structure and an experimental sample record are related concepts, but they are not identical data objects</strong>.</p>

  <h3>3.2 PubChem BioAssay Adds the Biology</h3>

  <p><a href="https://pubchem.ncbi.nlm.nih.gov/docs/bioassays" target="_blank" rel="noopener noreferrer">PubChem BioAssay</a> stores contributed biological screening and activity data. A record may indicate whether a substance was active or inactive in an experiment and can include measurements such as <strong>IC<sub>50</sub>, percentage inhibition, or assay signals</strong>.<sup><a href="#ref3">3</a></sup></p>

  <p><strong>Note:</strong> A PubChem Compound page aggregates information from many sources. <strong>Presence on a compound page does not mean every statement was independently experimentally verified by PubChem.</strong> Follow the source links when the evidence matters.</p>

  <p><strong>Takeaway:</strong> Use PubChem to establish <strong>chemical identity, structure and basic context</strong>, then follow links to the experimental or pharmacological evidence.</p>
</section>

<section>
  <h2>4. ChEMBL and BindingDB: From a Molecule to Quantitative Activity</h2>

  <p>Once the compound is identified, pharmacology moves from <em>“What is it?”</em> to <em>“What does it do, against which biological system, and at what concentration?”</em></p>

  <h3>4.1 ChEMBL: Bioactivity in Drug Discovery</h3>

  <p><a href="https://www.ebi.ac.uk/chembl/" target="_blank" rel="noopener noreferrer"><strong>ChEMBL</strong></a> is a manually curated database of bioactive molecules with drug-like properties. It brings together <strong>chemical, bioactivity and genomic information</strong> for drug-discovery research.<sup><a href="#ref4">4</a></sup></p>

  <p>ChEMBL is especially useful when a student encounters measurements such as <strong>IC<sub>50</sub>, EC<sub>50</sub>, K<sub>i</sub>, K<sub>d</sub>, potency, inhibition or activity in a cellular assay</strong>. These values should always be interpreted together with the assay conditions and target information.</p>

  <p>A lower numerical concentration does not automatically mean a “better drug.” The number may describe <strong>binding, enzyme inhibition, receptor activation, a cellular response, or another assay endpoint</strong>. Different assays are not automatically interchangeable.</p>

  <h3>4.2 BindingDB: Focus on Binding Affinity</h3>

  <p><a href="https://www.bindingdb.org/" target="_blank" rel="noopener noreferrer"><strong>BindingDB</strong></a> focuses more specifically on <strong>experimentally measured binding affinities between proteins and small, drug-like molecules</strong>.<sup><a href="#ref5">5</a></sup></p>

  <p>It becomes useful when the question is narrow: <em>“What experimental binding measurements have been reported between this ligand and this target?”</em></p>

  <blockquote>
    <strong>Important:</strong> <strong>Binding is not the same as functional effect.</strong> A molecule may bind a receptor without producing the same cellular consequence as another ligand. Pharmacology requires both <strong>affinity and functional context</strong>.
  </blockquote>

  <p><strong>Takeaway:</strong> ChEMBL provides broad <strong>bioactivity context</strong>; BindingDB is particularly useful for <strong>measured molecular binding</strong>.</p>
</section>

<section>
  <h2>5. DrugBank, Guide to PHARMACOLOGY and DrugCentral: From Activity to Drug Action</h2>

  <p>Experimental potency is only one layer of pharmacology. Students also need to connect a compound to its <strong>mechanism, target, therapeutic role and approved-drug context</strong>.</p>

  <h3>5.1 DrugBank: A Drug-Centered Knowledge Resource</h3>

  <p><a href="https://go.drugbank.com/" target="_blank" rel="noopener noreferrer"><strong>DrugBank</strong></a> integrates detailed information about drugs with information about their biological targets and related pharmaceutical properties. Its content includes drug–target relationships, mechanisms, indications, interactions, metabolism and other drug-centered information.<sup><a href="#ref6">6</a></sup></p>

  <p>For a student, DrugBank is useful when the starting question is <strong>“Tell me the pharmacological story of this drug.”</strong></p>

  <p><strong>Note:</strong> DrugBank has specific access and licensing conditions. Always check the current terms before assuming that data can be downloaded or redistributed freely.</p>

  <h3>5.2 IUPHAR/BPS Guide to PHARMACOLOGY: Pharmacological Authority</h3>

  <p><a href="https://www.guidetopharmacology.org/" target="_blank" rel="noopener noreferrer"><strong>IUPHAR/BPS Guide to PHARMACOLOGY (GtoPdb)</strong></a> is an expert-curated resource focused on <strong>ligand–activity–target relationships</strong>. It is designed specifically for pharmacology and drug-discovery users and provides quantitative information on drug targets and the ligands that act on them.<sup><a href="#ref7">7</a></sup></p>

  <p>This is particularly valuable when learning <strong>receptor pharmacology, ion channels, enzymes, transporters, nuclear receptors, agonists, antagonists, inhibitors and selective experimental ligands</strong>.</p>

  <p>When a lecture asks, <em>“What are the important ligands for this receptor, and how do they act?”</em>, this resource is often more directly pharmacological than a general chemistry database.</p>

  <h3>5.3 DrugCentral: Approved Drugs, Indications and Mode of Action</h3>

  <p><a href="https://drugcentral.org/" target="_blank" rel="noopener noreferrer"><strong>DrugCentral</strong></a> is an online drug information resource that connects active ingredients with pharmaceutical products, <strong>mode of action, indications, pharmacologic action and biological targets</strong>. Its maintainers monitor major regulatory agencies for new drug approvals.<sup><a href="#ref8">8</a></sup></p>

  <p>It is useful as an additional drug-centered resource when asking how a compound connects to <strong>approved therapeutic use and mechanism-of-action targets</strong>.</p>

  <p><strong>Takeaway:</strong> Use these resources after experimental activity has been established to understand <strong>what the compound means pharmacologically as a drug or ligand</strong>.</p>
</section>

<section>
  <h2>6. ClinPGx: Why the Same Drug Does Not Affect Every Patient the Same Way</h2>

  <p>Pharmacology does not end at the drug–target interaction. Differences in <strong>drug-metabolizing enzymes, transporters, receptors and other genes</strong> can alter efficacy or toxicity between patients.</p>

  <p><a href="https://www.clinpgx.org/" target="_blank" rel="noopener noreferrer"><strong>ClinPGx</strong></a> is the current home of the resource formerly known as <strong>PharmGKB</strong>. The transition brought PharmGKB content together with clinical pharmacogenomics resources such as CPIC, while retaining curated information about how genetic variation affects drug response.<sup><a href="#ref9">9</a></sup></p>

  <p>Students may therefore encounter both names:</p>

  <p><strong>older literature/textbooks: PharmGKB → current resource: ClinPGx</strong></p>

  <p>Its information connects <strong>chemicals/drugs → genes and variants → altered drug response → clinical annotations or prescribing guidance</strong>.</p>

  <p>This is the database layer that helps answer questions such as:</p>

  <ul>
    <li>Can a genetic variant alter metabolism of this drug?</li>
    <li>Is a gene–drug relationship supported by pharmacogenomic evidence?</li>
    <li>Does an established guideline recommend changing therapy according to genotype?</li>
  </ul>

  <blockquote>
    <strong>Important:</strong> A gene–drug association is not automatically a prescribing recommendation. Distinguish <strong>research evidence</strong> from <strong>clinically actionable guidance</strong>.
  </blockquote>

  <p><strong>Takeaway:</strong> ClinPGx extends pharmacology from <strong>“What does the drug do?”</strong> to <strong>“How might patient genetics change what the drug does?”</strong></p>
</section>

<section>
  <h2>7. How to Use the Databases Together</h2>

  <p>The most useful skill is not knowing every field in every database. It is knowing <strong>where to go next when a question changes</strong>.</p>

  <table class="science-table" data-id="pharmacology-question-to-database">
    <caption>Table 2: Choosing a database from the pharmacological question</caption>
    <thead>
      <tr>
        <th>Your Question</th>
        <th>Good Starting Resource</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>What is the correct chemical structure and identifier?</td>
        <td><strong>PubChem</strong></td>
      </tr>
      <tr>
        <td>What activity values have been measured against biological targets?</td>
        <td><strong>ChEMBL</strong></td>
      </tr>
      <tr>
        <td>What binding affinity measurements exist for a protein–ligand pair?</td>
        <td><strong>BindingDB</strong></td>
      </tr>
      <tr>
        <td>What is the drug's mechanism, target and pharmaceutical context?</td>
        <td><strong>DrugBank</strong> / <strong>DrugCentral</strong></td>
      </tr>
      <tr>
        <td>What is the accepted pharmacology of this target and its ligands?</td>
        <td><strong>IUPHAR/BPS Guide to PHARMACOLOGY</strong></td>
      </tr>
      <tr>
        <td>Can genetic variation alter response to the drug?</td>
        <td><strong>ClinPGx</strong></td>
      </tr>
    </tbody>
  </table>

  <h3>7.1 A Simple Workflow</h3>

  <p>Suppose you are given an unfamiliar candidate molecule. A sensible investigation might proceed as follows:</p>

  <ol>
    <li><strong>PubChem:</strong> establish chemical identity and structure.</li>
    <li><strong>ChEMBL:</strong> inspect reported assays and activity measurements.</li>
    <li><strong>BindingDB:</strong> examine measured binding where target-affinity data are relevant.</li>
    <li><strong>Guide to PHARMACOLOGY:</strong> determine whether the ligand–target relationship has established pharmacological interpretation.</li>
    <li><strong>DrugBank or DrugCentral:</strong> check whether the molecule is an established drug and inspect mechanism, indication and related drug information.</li>
    <li><strong>ClinPGx:</strong> determine whether important pharmacogenomic relationships are known.</li>
  </ol>

  <p>This workflow is not mandatory. It simply demonstrates that <strong>different databases answer successive parts of one pharmacological problem</strong>.</p>
</section>

<section>
  <h2>8. The Most Important Rules for Reading Pharmacology Databases</h2>

  <ol>
    <li><strong>Do not treat database presence as proof.</strong> Follow the underlying experiment, publication, label or curated evidence.</li>
    <li><strong>Do not confuse chemical identity with biological activity.</strong> A structure record tells you what the molecule is, not necessarily what it does.</li>
    <li><strong>Do not compare potency numbers without checking the assay.</strong> IC<sub>50</sub>, EC<sub>50</sub>, K<sub>i</sub> and K<sub>d</sub> describe different experimental concepts.</li>
    <li><strong>Binding does not automatically imply agonism, antagonism or therapeutic efficacy.</strong></li>
    <li><strong>Distinguish target from mechanism of action.</strong> A compound may interact with several proteins, while only some interactions explain its clinically relevant action.</li>
    <li><strong>Check whether the information describes an approved drug, an investigational compound, or an experimental ligand.</strong></li>
    <li><strong>Preserve identifiers.</strong> Names and synonyms vary; database identifiers and chemical structures make records easier to trace.</li>
    <li><strong>Use more than one source for important conclusions.</strong> The databases complement rather than replace one another.</li>
  </ol>

  <p>The central lesson is therefore simple:</p>

  <blockquote>
    <strong>Pharmacology databases are bridges.</strong> PubChem connects names to structures; ChEMBL and BindingDB connect structures to experimental activity; Guide to PHARMACOLOGY connects ligands to established target pharmacology; DrugBank and DrugCentral connect molecules to medicines; ClinPGx connects medicines to patient genetic variation.
  </blockquote>
</section>

<section id="references">
  <h2>9. References</h2>
  <ol>
    <li id="ref1">
      National Center for Biotechnology Information. 
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/about" target="_blank" rel="noopener noreferrer">About PubChem</a>. 
      National Library of Medicine, NIH. Accessed 31 August 2026.
    </li>
    <li id="ref2">
      National Center for Biotechnology Information. 
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/compound-vs-substance" target="_blank" rel="noopener noreferrer">What is the difference between a substance and a compound in PubChem?</a>. 
      PubChem documentation.
    </li>
    <li id="ref3">
      National Center for Biotechnology Information. 
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/bioassays" target="_blank" rel="noopener noreferrer">PubChem BioAssays</a>. 
      PubChem documentation. Accessed 31 August 2026.
    </li>
    <li id="ref4">
      Zdrazil B, Felix E, Hunter F, et al. 
      <a href="https://www.ebi.ac.uk/chembl/" target="_blank" rel="noopener noreferrer">The ChEMBL Database in 2023: a drug discovery platform spanning multiple bioactivity data types and time periods</a>. 
      <em>Nucleic Acids Research</em>. 2024;52(D1):D1180-D1192. doi:10.1093/nar/gkad1004.
    </li>
    <li id="ref5">
      Gilson MK, Liu T, Baitaluk M, Nicola G, Hwang L, Chong J. 
      <a href="https://www.bindingdb.org/" target="_blank" rel="noopener noreferrer">BindingDB in 2024: a FAIR knowledgebase of protein-small molecule binding data</a>. 
      <em>Nucleic Acids Research</em>. 2024. doi:10.1093/nar/gkae1075.
    </li>
    <li id="ref6">
      Knox C, Wilson M, Klinger CM, et al. 
      <a href="https://academic.oup.com/nar/article/52/D1/D1265/7416367" target="_blank" rel="noopener noreferrer">DrugBank 6.0: the DrugBank Knowledgebase for 2024</a>. 
      <em>Nucleic Acids Research</em>. 2024;52(D1):D1265-D1275. doi:10.1093/nar/gkad976.
    </li>
    <li id="ref7">
      Harding SD, Armstrong JF, Faccenda E, et al. 
      <a href="https://academic.oup.com/nar/article/54/D1/D1446/8306131" target="_blank" rel="noopener noreferrer">The IUPHAR/BPS Guide to PHARMACOLOGY in 2026</a>. 
      <em>Nucleic Acids Research</em>. 2026;54(D1):D1446-D1456. doi:10.1093/nar/gkaf1067.
    </li>
    <li id="ref8">
      DrugCentral. 
      <a href="https://drugcentral.org/about" target="_blank" rel="noopener noreferrer">About DrugCentral</a>. 
      Division of Translational Informatics, University of New Mexico. Accessed 31 August 2026.
    </li>
    <li id="ref9">
      Whirl-Carrillo M. 
      <a href="https://blog.clinpgx.org/pharmgkb-is-now-clinpgx/" target="_blank" rel="noopener noreferrer">Announcing ClinPGx</a>. 
      ClinPGx, 29 July 2025. See also the current <a href="https://www.clinpgx.org/" target="_blank" rel="noopener noreferrer">ClinPGx resource</a>.
    </li>
  </ol>
</section>

</article>
  `},Q2=Object.freeze(Object.defineProperty({__proto__:null,default:K2},Symbol.toStringTag,{value:"Module"})),J2=Object.assign({"./articles/rk-2025-002.ts":v2,"./articles/rk-2026-003.ts":w2,"./articles/rk-2026-004.ts":k2,"./articles/rk-2026-005.ts":A2,"./articles/rk-2026-006.ts":C2,"./articles/rk-2026-007.ts":M2,"./articles/rk-2026-008.ts":P2,"./articles/rk-2026-009.ts":z2,"./articles/rk-2026-010.ts":I2,"./articles/rk-2026-011.ts":B2,"./articles/rk-2026-012.ts":L2,"./articles/rk-2026-013.ts":q2,"./articles/rk-2026-014.ts":H2,"./articles/rk-2026-015.ts":G2,"./articles/rk-2026-016.ts":V2,"./articles/rk-2026-017.ts":Y2,"./articles/rk-2026-18.ts":Q2}),X2=Object.assign({}),Dl=Object.entries(J2).map(([e,t])=>{const r=t.default,n=e.replace(/\.ts$/,".bib"),a=X2[n];return r?(a&&(r.bibTexContent=a),r):null}).filter(e=>!!e&&!!e.id).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),Z2=({article:e})=>h.jsxs("div",{className:`group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b-2 border-ink dark:border-crt-green 
      text-ink dark:text-crt-green
      md:hover:bg-ink md:hover:text-paper active:bg-ink active:text-paper
      dark:md:hover:bg-crt-green dark:md:hover:text-black dark:active:bg-crt-green dark:active:text-black
      transition-all cursor-pointer`,children:[h.jsx("div",{className:"font-mono text-sm w-32 shrink-0 opacity-70 group-hover:opacity-100 group-hover:font-bold",children:e.date}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight md:group-hover:translate-x-2 transition-transform duration-300",children:e.title}),h.jsx("div",{className:"md:hidden mt-2 flex flex-wrap gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-[10px] font-mono border border-current px-2 rounded-full opacity-60",children:t},t))})]}),h.jsxs("div",{className:"hidden md:flex items-center gap-4 shrink-0",children:[h.jsx("div",{className:"flex gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-xs font-mono border border-pencil dark:border-crt-green/50 group-hover:border-paper dark:group-hover:border-black px-2 py-1 rounded-full transition-colors",children:t},t))}),h.jsx(Op,{className:"opacity-0 group-hover:opacity-100 transition-opacity",size:16})]})]}),ey=()=>{const[e,t]=D.useState(""),r=Dl.filter(n=>n.title.toLowerCase().includes(e.toLowerCase())||n.tags.some(a=>a.toLowerCase().includes(e.toLowerCase())));return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-6xl mx-auto",children:[h.jsxs("header",{className:"mb-12 border-b-4 border-ink dark:border-crt-green pb-4",children:[h.jsx("h1",{className:"font-mono text-xl md:text-3xl font-bold tracking-tighter uppercase text-ink dark:text-crt-green",children:"INDEX_REGISTRY // ARCHIVES"}),h.jsx("p",{className:"font-mono text-xs text-pencil dark:text-crt-green/60 mt-2",children:"Select a record to view details."})]}),h.jsx("div",{className:"mb-12 relative max-w-2xl",children:h.jsxs("div",{className:"flex items-center gap-4 text-ink dark:text-crt-green font-mono text-lg border-b-2 border-transparent focus-within:border-ink dark:focus-within:border-crt-green transition-colors pb-2",children:[h.jsx("span",{className:"animate-pulse",children:h.jsx(Kp,{size:20})}),h.jsx("span",{className:"text-pencil dark:text-crt-green/50 select-none",children:">"}),h.jsx("input",{type:"text",value:e,onChange:n=>t(n.target.value),placeholder:"Search logs...",className:"bg-transparent border-none outline-none w-full placeholder-gray-400 dark:placeholder-crt-dim/50",autoFocus:!0})]})}),h.jsx("div",{className:"space-y-0",children:r.length>0?r.map(n=>h.jsx(Lp,{to:`/articles/${n.id}`,className:"block",children:h.jsx(Z2,{article:n})},n.id)):h.jsx("div",{className:"py-12 text-center font-mono text-pencil dark:text-crt-dim border-2 border-dashed border-gray-300 dark:border-crt-dim",children:h.jsxs("p",{children:['Error: No records found matching query "',e,'"']})})}),h.jsxs("div",{className:"mt-8 font-mono text-xs text-right text-pencil dark:text-crt-green/50",children:["Total_Records: ",Dl.length," // Visible: ",r.length]})]})},ty=e=>{const[t,r]=D.useState([]),[n,a]=D.useState(!0),[i,o]=D.useState(null);return D.useEffect(()=>{let s=!0;const l=new AbortController;return(async()=>{try{const p=await fetch(`https://pub.orcid.org/v3.0/${e}/works`,{headers:{Accept:"application/json"},signal:l.signal});if(!p.ok)throw new Error(`Failed to connect to ORCID (Status: ${p.status})`);const f=await p.json();if(s){const y=f.group.map(x=>{var N,P,z,_,R,H,G,J,X,ce,me;const T=x["work-summary"][0],A=((P=(N=T.title)==null?void 0:N.title)==null?void 0:P.value)||"Untitled Work",M=((z=T["journal-title"])==null?void 0:z.value)||"Unknown Journal",b=((R=(_=T["publication-date"])==null?void 0:_.year)==null?void 0:R.value)||"N/A",v=((H=T.url)==null?void 0:H.value)||((ce=(X=(J=(G=T["external-ids"])==null?void 0:G["external-id"])==null?void 0:J[0])==null?void 0:X["external-id-url"])==null?void 0:ce.value)||"#",w=((me=T.type)==null?void 0:me.replace(/_/g," "))||"publication";return{title:A,journal:M,year:b,url:v,type:w}});r(y),a(!1)}}catch(p){s&&p.name!=="AbortError"&&(console.error("ORCID Fetch Error:",p),o("Error synchronizing with ORCID registry."),a(!1))}})(),()=>{s=!1,l.abort()}},[e]),{publications:t,loading:n,error:i}},ry="/notes_computers_in_biology/assets/RK-BtUTJjuG.jpg",ny=()=>{const{publications:e,loading:t,error:r}=ty("0000-0002-7077-4218");return h.jsx("div",{className:"min-h-full p-6 md:p-12 relative",children:h.jsxs("div",{className:"max-w-4xl mx-auto bg-white dark:bg-black border border-ink dark:border-crt-green shadow-paper dark:shadow-crt p-8 md:p-12 relative",children:[h.jsx("div",{className:"absolute top-4 right-4 border-2 border-red-700 dark:border-crt-amber text-red-700 dark:text-crt-amber px-2 py-1 font-mono text-xs font-bold -rotate-12 opacity-80 uppercase tracking-widest",children:"Personnel_File"}),h.jsxs("header",{className:"flex flex-col md:flex-row gap-8 mb-12 border-b-2 border-ink dark:border-crt-green pb-8",children:[h.jsxs("div",{className:"shrink-0 relative group",children:[h.jsxs("div",{className:"w-48 h-48 bg-gray-200 dark:bg-crt-dim border-4 border-ink dark:border-crt-green overflow-hidden relative",children:[h.jsx("img",{src:ry,alt:"Profile",className:"w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500",onError:n=>{n.target.src="https://ui-avatars.com/api/?name=Rohit+Patel&background=random&size=200"}}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,rgba(0,0,0,0)_50%)] bg-[length:100%_4px] pointer-events-none"})]}),h.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 dark:bg-crt-dim/80 rotate-3 shadow-sm z-10"})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold text-ink dark:text-crt-green mb-2",children:"Patel Rohit K."}),h.jsx("div",{className:"font-mono text-sm md:text-base bg-ink text-paper dark:bg-crt-green dark:text-black inline-block px-2 py-1 mb-6 uppercase tracking-wider",children:"Microbiologist & Bioinformatician"}),h.jsx("p",{className:"font-serif text-lg leading-relaxed text-ink dark:text-crt-green/90 mb-6 border-l-4 border-gray-300 dark:border-crt-dim pl-4 italic",children:'"A dedicated microbiology and bioinformatics researcher passionate about bridging the gap between computational technology and life sciences. My mission is to translate complex computational methods and tools into accessible, actionable knowledge for biologists."'}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs",children:[h.jsxs("a",{href:"mailto:rohitmicrobiologist@gmail.com",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(r2,{size:14})," rohitmicrobiologist@gmail.com"]}),h.jsxs("a",{href:"https://github.com/RKPatel-1996",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(Z4,{size:14})," github.com/RKPatel-1996"]}),h.jsxs("a",{href:"https://scholar.google.co.in/citations?user=kvgCFB4AAAAJ",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(Cu,{size:14})," Google Scholar"]}),h.jsxs("a",{href:"https://www.researchgate.net/profile/Rohit-Patel-7",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(V4,{size:14})," ResearchGate"]}),h.jsxs("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors col-span-full",children:[h.jsx("div",{className:"w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px] font-bold",children:"iD"})," ","ORCID: 0000-0002-7077-4218"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[h.jsxs("div",{className:"lg:col-span-1 space-y-12",children:[h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(Cu,{size:16})," Education_History"]}),h.jsxs("div",{className:"space-y-6 font-serif text-sm relative border-l border-dashed border-gray-400 dark:border-crt-dim ml-2 pl-6",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-ink dark:bg-crt-green rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"Ph.D. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (Pursuing)"}),h.jsx("p",{className:"text-xs italic leading-tight",children:"Exploring bacterial secondary metabolites as phytohormone analogues."})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"M.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (2020)"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"B.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat Arts & Science College (2018)"})]})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx($4,{size:16})," Research_Exp"]}),h.jsxs("div",{className:"font-serif text-sm",children:[h.jsx("div",{className:"mb-2 font-bold text-ink dark:text-crt-green",children:"Senior Research Fellow (SRF)"}),h.jsx("div",{className:"text-xs text-pencil dark:text-crt-green/70 mb-2",children:"Gujarat University"}),h.jsx("p",{className:"text-xs leading-relaxed border-l-2 border-gray-200 dark:border-crt-dim pl-2",children:"Project: Network program on Antimicrobial Resistance, Superbugs and One Health (Human health care node)."})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(l2,{size:16})," Skill_Matrix"]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:["Molecular Docking","MD Simulation","WGS","Metagenomics","AMR Workflows","Web-App Dev","Plant-Microbe Interaction"].map(n=>h.jsx("span",{className:"font-mono text-[10px] bg-gray-100 dark:bg-crt-dim border border-gray-300 dark:border-crt-green px-2 py-1 text-ink dark:text-crt-green hover:bg-ink hover:text-white dark:hover:bg-crt-green dark:hover:text-black transition-colors cursor-default",children:n},n))})]})]}),h.jsxs("div",{className:"lg:col-span-2",children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-6 pb-1 flex items-center gap-2",children:[h.jsx(U4,{size:16})," Publications_DB (Live Sync)"]}),t&&h.jsxs("div",{className:"flex flex-col items-center justify-center h-48 font-mono text-xs text-pencil dark:text-crt-green animate-pulse",children:[h.jsx(t2,{className:"animate-spin mb-4"}),h.jsx("span",{children:"ESTABLISHING_CONNECTION_TO_ORCID..."})]}),r&&h.jsxs("div",{className:"p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs text-center",children:["ERROR: ",r]}),!t&&!r&&h.jsx("div",{className:"space-y-4",children:e.length===0?h.jsx("div",{className:"text-center font-mono text-xs text-pencil py-8",children:"No public records found."}):e.map((n,a)=>h.jsxs("div",{className:"group relative border border-gray-200 dark:border-crt-dim p-4 hover:border-ink dark:hover:border-crt-green transition-colors bg-gray-50 dark:bg-transparent",children:[h.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-crt-dim group-hover:bg-accent dark:group-hover:bg-crt-amber transition-colors"}),h.jsxs("div",{className:"pl-3",children:[h.jsxs("div",{className:"flex justify-between items-start mb-1",children:[h.jsx("span",{className:"font-mono text-[10px] uppercase text-pencil dark:text-crt-green/60 border border-gray-300 dark:border-crt-dim px-1 rounded",children:n.year}),h.jsx("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"text-pencil hover:text-accent dark:text-crt-green/70 dark:hover:text-crt-amber",children:h.jsx(F0,{size:14})})]}),h.jsx("h4",{className:"font-serif font-bold text-ink dark:text-crt-green text-lg leading-tight mb-2 group-hover:text-accent dark:group-hover:text-crt-amber transition-colors",children:n.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80",children:n.journal})]})]},a))}),h.jsx("div",{className:"mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-crt-dim text-center",children:h.jsx("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-accent dark:text-crt-green hover:underline",children:"VIEW_FULL_RECORD_ON_ORCID [external_link]"})})]})]})]})})},ay=({heroVideo:e})=>h.jsxs("div",{className:"mb-12",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 opacity-80",children:[h.jsx(a2,{size:16,className:"text-red-600 dark:text-crt-amber animate-pulse"}),h.jsx("h2",{className:"font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_A: Transmission_Source"}),h.jsx("div",{className:"h-px bg-ink/20 dark:bg-crt-green/20 flex-1 ml-2"})]}),h.jsxs("div",{className:"border-2 border-ink dark:border-crt-green shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt bg-gray-100 dark:bg-black max-w-4xl mx-auto",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),h.jsx("span",{children:"broadcast_deck.exe - [MAIN_FEED]"})]}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full bg-black border-b-2 border-ink dark:border-crt-green",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsx("div",{className:"p-4 bg-gray-200 dark:bg-crt-dim/10",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start justify-between",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"font-mono text-[10px] text-accent dark:text-crt-amber mb-1 uppercase font-bold flex items-center gap-2",children:[h.jsx("span",{children:"Latest_Upload"}),h.jsx("span",{className:"opacity-50",children:"//"}),h.jsx("span",{children:e.dateAdded})]}),h.jsx("h1",{className:"font-serif text-xl md:text-2xl font-bold leading-tight text-ink dark:text-crt-green mb-2",children:e.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80 border-l-2 border-ink dark:border-crt-green pl-3 py-1",children:e.commentary})]}),h.jsx("div",{className:"shrink-0 pt-1",children:h.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-ink dark:bg-crt-green text-paper dark:text-black font-mono text-xs font-bold uppercase hover:translate-y-px hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all border border-transparent",children:[h.jsx("span",{children:"Visit_Channel"}),h.jsx(F0,{size:12})]})})]})})]})]}),iy=({video:e})=>{const[t,r]=D.useState(!1);return h.jsxs("div",{className:"flex flex-col border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt bg-gray-100 dark:bg-black h-fit transition-all duration-300",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none shrink-0",children:[h.jsx("span",{className:"truncate max-w-[200px]",children:"media_player.exe"}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-accent dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full border-b-2 border-ink dark:border-crt-green bg-black group shrink-0",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsxs("div",{className:"p-3 bg-gray-200 dark:bg-crt-dim/10 flex flex-col gap-3",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight text-ink dark:text-crt-green mb-1 line-clamp-2",children:e.title}),h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-pencil dark:text-crt-green/70",children:[h.jsx(h2,{size:12}),h.jsx("span",{className:"uppercase tracking-wide",children:e.channelName})]})]}),h.jsxs("div",{className:"flex justify-between items-center border-t border-gray-300 dark:border-crt-green/30 pt-2",children:[h.jsxs("span",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/50",children:["ID: ",e.id]}),h.jsxs("button",{onClick:()=>r(!t),className:"flex items-center gap-1 px-3 py-1 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-sm hover:translate-y-px active:shadow-none active:translate-y-1 transition-all font-mono text-xs font-bold uppercase text-ink dark:text-crt-green group",children:[t?"Close_Log":"Read_Notes",t?h.jsx(Hp,{size:12}):h.jsx(qp,{size:12,className:"group-hover:translate-y-0.5 transition-transform"})]})]})]}),t&&h.jsxs("div",{className:"border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black p-4 animate-in slide-in-from-top-2 duration-200",children:[h.jsxs("div",{className:"flex gap-3 mb-4",children:[h.jsx("div",{className:"shrink-0 w-1 bg-accent dark:bg-crt-amber self-stretch"}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1 font-mono text-[10px] uppercase text-accent dark:text-crt-amber font-bold",children:[h.jsx(n2,{size:12})," Curator_Commentary"]}),h.jsxs("p",{className:"font-serif italic text-sm text-ink/90 dark:text-crt-green/90 leading-relaxed",children:['"',e.commentary,'"']})]})]}),h.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-dashed border-gray-300 dark:border-crt-dim",children:e.tags.map(n=>h.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-mono uppercase bg-gray-100 dark:bg-crt-dim/30 border border-gray-300 dark:border-crt-green/30 px-2 py-1 text-pencil dark:text-crt-green rounded-sm",children:[h.jsx(s2,{size:10}),n]},n))})]})]})},oy={id:"v392lEyM29A",title:"Linux course for beginners | Full tutorial",channelName:"Boot dev",tags:["Linux","Basic","Course"],commentary:"Learn the basics and foundational commands of linux.",dateAdded:"2025-02-18"},Du=[{id:"d86ws7mQYIg",title:"Computer hardware and basic operations explained",channelName:"Branch Education",tags:["computer","Hardware","Inner working"],commentary:"A clear and concise explanation of how computers work at a fundamental level. This video is a great resource for anyone looking to understand the inner workings of computer hardware and basic operations.",dateAdded:"2023-03-22"}],sy=()=>{const[e,t]=D.useState(""),[r,n]=D.useState(null),a=Array.from(new Set(Du.flatMap(o=>o.tags))),i=D.useMemo(()=>Du.filter(o=>{const s=e.toLowerCase(),l=o.title.toLowerCase().includes(s)||o.channelName.toLowerCase().includes(s)||o.commentary.toLowerCase().includes(s)||o.tags.some(p=>p.toLowerCase().includes(s)),d=r?o.tags.includes(r):!0;return l&&d}),[e,r]);return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-7xl mx-auto",children:[h.jsx(ay,{heroVideo:oy}),h.jsxs("section",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[h.jsx("div",{className:"w-4 h-4 bg-accent dark:bg-crt-amber rotate-45"}),h.jsx("h2",{className:"font-mono text-xl font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_B: Curated_Vault"})]}),h.jsx("div",{className:"bg-gray-100 dark:bg-crt-dim/20 border-2 border-ink dark:border-crt-green p-4 mb-8 shadow-sm",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[h.jsxs("div",{className:"flex-1 relative",children:[h.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none text-pencil dark:text-crt-green/50",children:h.jsx(Kp,{size:18})}),h.jsx("input",{type:"text",placeholder:"Search titles, channels, or my notes...",value:e,onChange:o=>t(o.target.value),className:"w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-crt-green/30 text-ink dark:text-crt-green font-mono text-sm focus:outline-none focus:border-accent dark:focus:border-crt-amber transition-colors"})]}),h.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide",children:[h.jsx(X4,{size:18,className:"text-pencil dark:text-crt-green/50 shrink-0"}),h.jsxs("div",{className:"flex gap-2",children:[r&&h.jsxs("button",{onClick:()=>n(null),className:"flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800 text-xs font-mono uppercase font-bold rounded-sm whitespace-nowrap hover:bg-red-200 transition-colors",children:[h.jsx(d2,{size:12})," Clear"]}),a.map(o=>h.jsxs("button",{onClick:()=>n(r===o?null:o),className:`px-3 py-1 border text-xs font-mono uppercase rounded-sm whitespace-nowrap transition-colors
                                    ${r===o?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green":"bg-white dark:bg-black text-pencil dark:text-crt-green/70 border-gray-300 dark:border-crt-green/30 hover:border-ink dark:hover:border-crt-green"}`,children:["#",o]},o))]})]})]})}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.length>0?i.map(o=>h.jsx(iy,{video:o},o.id)):h.jsxs("div",{className:"col-span-full py-12 text-center border-2 border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("p",{className:"font-mono text-pencil dark:text-crt-green/50",children:['No records match query "',e,'" with filter [',r||"ALL","]."]}),h.jsx("button",{onClick:()=>{t(""),n(null)},className:"mt-4 text-accent dark:text-crt-amber font-mono text-sm hover:underline",children:"RESET_SEARCH_PARAMETERS"})]})})]})]})},ly=e=>{const t={};if(!e)return t;const r=e.replace(/\r\n/g,`
`);let n=0;for(;n<r.length;){const a=r.indexOf("@",n);if(a===-1)break;const i=r.indexOf("{",a);if(i===-1)break;const o=r.substring(a+1,i).trim().toLowerCase(),s=r.indexOf(",",i);if(s===-1){n=i+1;continue}const l=r.substring(i+1,s).trim();let d=s+1,p=!1;const f={};for(;!p&&d<r.length;){for(;d<r.length&&/\s/.test(r[d]);)d++;if(r[d]==="}"){p=!0,n=d+1;break}const y=r.indexOf("=",d);if(y===-1){p=!0;break}const x=r.indexOf("}",d);if(x!==-1&&x<y){p=!0,n=x+1;break}const T=r.substring(d,y).trim().toLowerCase();for(d=y+1;d<r.length&&/\s/.test(r[d]);)d++;let A="";const M=r[d];if(M==="{"){let b=0,v=d+1,w=!1;for(let N=d;N<r.length;N++)if(r[N]==="{"&&b++,r[N]==="}"&&b--,b===0){A=r.substring(v,N),d=N+1,w=!0;break}if(!w){p=!0;break}}else if(M==='"'){const b=r.indexOf('"',d+1);if(b!==-1)A=r.substring(d+1,b),d=b+1;else{p=!0;break}}else{let b=d;for(;b<r.length&&r[b]!==","&&r[b]!=="}";)b++;A=r.substring(d,b).trim(),d=b}for(A=A.replace(/[\r\n\t]+/g," ").replace(/\s+/g," ").trim(),f[T]=A;d<r.length&&/\s/.test(r[d]);)d++;r[d]===","&&d++}t[l]={citationKey:l,entryType:o,...f},n<=a&&(n=a+1)}return t},Xp=e=>e?e.split(" and ").map(r=>{let n=r.trim();if(n.startsWith("{")&&n.endsWith("}")&&(n=n.substring(1,n.length-1)),n.includes(","))return n.split(",")[0].trim();{const a=n.split(" ");return a[a.length-1]}}):["Unknown"],cy=e=>{if(!e)return"Unknown Author";const r=e.split(" and ").map(i=>{let o=i.trim();return o.startsWith("{")&&o.endsWith("}")&&(o=o.substring(1,o.length-1)),o});if(r.length<=5)return r.join(", ");const n=r.slice(0,3).join(", "),a=r[r.length-1];return`${n}, ... ${a}`},uy=e=>{const t=Xp(e.author),r=e.year||"n.d.";let n="";return t.length===1?n=t[0]:t.length===2?n=`${t[0]} & ${t[1]}`:n=`${t[0]} et al.`,`${n}, ${r}`},dy=e=>{const t=Xp(e.author),r=e.year||"0000";return`${t[0].toLowerCase()}_${r}`},Zp=(e,t)=>D.useMemo(()=>{let r=e.replace(/\$\$([\s\S]*?)\$\$/g,(d,p)=>`<span class="science-math-marker" data-tex="${p.trim().replace(/"/g,"&quot;")}" data-display="true"></span>`);if(r=r.replace(/\\\(([\s\S]*?)\\\)/g,(d,p)=>`<span class="science-math-marker" data-tex="${p.trim().replace(/"/g,"&quot;")}" data-display="false"></span>`),!t)return{processedHTML:r,references:[],citationMap:new Map};const n=ly(t),a=/@([a-zA-Z0-9_-]+)/g,i=Array.from(r.matchAll(a)),o=new Set;i.forEach(d=>{const p=d[1];n[p]&&o.add(p)});const s=Array.from(o).map(d=>{const p=n[d];return{entry:p,sortKey:dy(p),label:uy(p)}}).sort((d,p)=>d.sortKey.localeCompare(p.sortKey)).map(({entry:d,label:p})=>({entry:d,label:p})),l=new Map;return s.forEach(d=>l.set(d.entry.citationKey,d)),r=r.replace(a,(d,p)=>n[p]?`<span class="citation-mount-point" data-key="${p}"></span>`:d),{processedHTML:r,references:s,citationMap:l}},[e,t]),em=(e,t)=>{const[r,n]=D.useState([]),[a,i]=D.useState(!1);return D.useLayoutEffect(()=>{if(!e.current)return;const o=e.current;Array.from(o.querySelectorAll("figure.science-figure")).forEach(A=>{const M=A.querySelector("img"),b=A.querySelector("figcaption");if(M){const v=document.createElement("div");v.className="science-figure-marker",v.setAttribute("data-src",M.getAttribute("src")||""),v.setAttribute("data-alt",M.getAttribute("alt")||""),v.setAttribute("data-id",A.getAttribute("data-id")||""),v.setAttribute("data-clean-src",A.getAttribute("data-clean-src")||""),b&&v.setAttribute("data-caption",b.innerHTML),A.replaceWith(v)}}),Array.from(o.querySelectorAll("table.science-table")).forEach(A=>{var P;const M=[],b=[];A.querySelectorAll("thead th").forEach(z=>M.push(z.textContent||"")),A.querySelectorAll("tbody tr").forEach(z=>{const _=[];z.querySelectorAll("td").forEach(R=>_.push(R.textContent||"")),b.push(_)});const v=(P=A.querySelector("caption"))==null?void 0:P.textContent,w=A.getAttribute("data-id")||`tbl-${Math.random().toString(36).substr(2,5)}`,N=document.createElement("div");N.className="science-table-marker",N.setAttribute("data-id",w),N.setAttribute("data-headers",JSON.stringify(M)),N.setAttribute("data-rows",JSON.stringify(b)),v&&N.setAttribute("data-caption",v),A.replaceWith(N)});const d=Array.from(o.querySelectorAll("h1, h2, h3")),p=[];d.forEach((A,M)=>{const b=A.textContent||`Section ${M+1}`,v=b.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),w=`sec-${M}-${v}`;A.id=w,A.classList.add("scroll-mt-24"),A.classList.add("cursor-pointer","hover:text-accent","dark:hover:text-crt-amber","transition-colors"),A.title="Click text to return to Table of Contents",A.addEventListener("click",N=>{N.preventDefault(),N.stopPropagation();const P=document.getElementById("table-of-contents");P&&P.scrollIntoView({behavior:"smooth"})}),p.push({id:w,text:b,level:parseInt(A.tagName[1])})}),n(p);const f=Array.from(o.childNodes),y=document.createDocumentFragment();let x=null,T=null;f.forEach(A=>{if(A.nodeName.match(/^H[1-3]$/)){x&&y.appendChild(x),x=document.createElement("details"),x.open=!0,x.className="group/details mb-4";const b=document.createElement("summary");b.className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center";const v=A,w=document.createElement("span");w.className="mr-2 text-pencil dark:text-crt-green transition-transform duration-200 group-open/details:rotate-90 inline-flex items-center justify-center shrink-0",w.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',b.appendChild(w),b.appendChild(v),x.appendChild(b),T=document.createElement("div"),T.className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-crt-dim/30 ml-2",x.appendChild(T)}else T?T.appendChild(A):y.appendChild(A)}),x&&y.appendChild(x),f.length>0&&(o.innerHTML="",o.appendChild(y)),i(!0)},[t]),{toc:r,isDomReady:a}},hy=({label:e,entry:t,citationKey:r})=>{const n=a=>{a.preventDefault();const i=document.getElementById(`ref-${r}`);i&&(i.scrollIntoView({behavior:"smooth",block:"center"}),i.classList.add("bg-yellow-100","dark:bg-crt-dim"),setTimeout(()=>i.classList.remove("bg-yellow-100","dark:bg-crt-dim"),2e3))};return t?h.jsxs("span",{className:"group relative inline-block align-baseline ml-1",children:[h.jsxs("button",{onClick:n,className:"text-base text-accent dark:text-crt-amber hover:underline select-none","aria-label":`Cite: ${e}`,children:["(",e,")"]}),h.jsxs("div",{className:"invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 z-50 pointer-events-none group-hover:pointer-events-auto",children:[h.jsxs("div",{className:"bg-white dark:bg-black border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt p-3 text-left font-serif text-ink dark:text-crt-green",children:[h.jsxs("div",{className:"border-b border-gray-200 dark:border-crt-dim pb-2 mb-2",children:[h.jsx("p",{className:"font-bold text-sm leading-tight mb-1",children:t.title}),h.jsx("p",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70 line-clamp-2",children:t.author})]}),h.jsxs("div",{className:"flex justify-between items-end",children:[h.jsxs("div",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70",children:[t.journal," ",t.year]}),(t.doi||t.url)&&h.jsxs("a",{href:t.doi?`https://doi.org/${t.doi}`:t.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 font-mono text-[10px] bg-ink text-paper dark:bg-crt-green dark:text-black px-2 py-1 hover:bg-accent transition-colors",onClick:a=>a.stopPropagation(),children:["SOURCE ",h.jsx(F0,{size:8})]})]})]}),h.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ink dark:border-t-crt-green"})]})]}):h.jsxs("span",{className:"text-red-500 font-bold select-none cursor-not-allowed",children:["[",r,"?]"]})},py=({src:e,alt:t,caption:r,id:n,cleanSrc:a})=>{const[i,o]=D.useState(!1),[s,l]=D.useState(100),[d,p]=D.useState(100),[f,y]=D.useState(!0),x=!f&&a?a:e,T=()=>{o(!1),l(100),p(100),y(!0)},A=()=>{if(n){const M=`Figure ${n}`;navigator.clipboard.writeText(M),alert(`Copied to clipboard: ${M}`)}};return h.jsxs("div",{className:"print-scientific-figure my-8 border-2 border-ink dark:border-crt-green bg-white dark:bg-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)]",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2 p-2 bg-gray-100 dark:bg-crt-dim/20 border-b border-gray-200 dark:border-crt-dim",children:[h.jsxs("div",{className:"flex items-center gap-1 border-r border-gray-300 dark:border-crt-dim pr-2 mr-2",children:[h.jsx("button",{onClick:()=>o(!i),className:`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${i?"bg-ink text-white dark:bg-crt-green dark:text-black":"text-pencil dark:text-crt-green"}`,title:"Invert Colors",children:i?h.jsx(uo,{size:14}):h.jsx(q0,{size:14})}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(uo,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:s,onChange:M=>l(Number(M.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Brightness"})]}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(K4,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:d,onChange:M=>p(Number(M.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Contrast"})]}),h.jsx("button",{onClick:T,title:"Reset View",className:"p-1.5 text-pencil hover:text-ink dark:text-crt-green/50 dark:hover:text-crt-green",children:h.jsx(i2,{size:12})})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-1 justify-end",children:[a&&h.jsxs("button",{onClick:()=>y(!f),className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Toggle Annotations",children:[f?h.jsx(Wp,{size:12}):h.jsx(J4,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Layers"})]}),h.jsxs("a",{href:e,download:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Download Original",children:[h.jsx(L0,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"RAW"})]}),n&&h.jsxs("button",{onClick:A,className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Copy Citation",children:[h.jsx(Q4,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Ref"})]})]})]}),h.jsx("div",{className:"relative overflow-hidden bg-gray-100 dark:bg-black/50 flex justify-center items-center min-h-[200px]",children:h.jsx("img",{src:x,alt:t||"Scientific Figure",className:"max-w-full h-auto object-contain transition-all duration-200",style:{filter:`invert(${i?1:0}) brightness(${s}%) contrast(${d}%)`}})}),r&&h.jsx("div",{className:"mt-0 p-3 bg-paper dark:bg-black border-t border-gray-200 dark:border-crt-dim",children:h.jsxs("figcaption",{className:"font-mono text-xs text-gray-700 dark:text-crt-green flex gap-2",children:[n&&h.jsxs("strong",{className:"uppercase shrink-0",children:[n,":"]}),h.jsx("span",{dangerouslySetInnerHTML:{__html:r}})]})})]})},my=({id:e,initialData:t,initialHeaders:r})=>{const[n,a]=L4(),i=n.get(`${e}_sort`),o=n.get(`${e}_order`),s=n.get(`${e}_filter`)||"",[l,d]=D.useState(i?parseInt(i):null),[p,f]=D.useState(o!=="desc"),[y,x]=D.useState(s),[T,A]=D.useState(new Set),[M,b]=D.useState(!1);D.useEffect(()=>{const z=new URLSearchParams(n);l!==null?(z.set(`${e}_sort`,l.toString()),z.set(`${e}_order`,p?"asc":"desc")):(z.delete(`${e}_sort`),z.delete(`${e}_order`)),y?z.set(`${e}_filter`,y):z.delete(`${e}_filter`),a(z,{replace:!0})},[l,p,y,e,a,n]);const v=z=>{const _=t.map(ce=>parseFloat(ce[z])).filter(ce=>!isNaN(ce));if(_.length===0)return null;_.sort((ce,me)=>ce-me);const H=_.reduce((ce,me)=>ce+me,0)/_.length,G=_[0],J=_[_.length-1],X=_[Math.floor(_.length/2)];return{mean:H,min:G,max:J,median:X}},w=D.useMemo(()=>{let z=[...t];if(y){const _=y.toLowerCase();z=z.filter(R=>R.some(H=>H.toLowerCase().includes(_)))}return l!==null&&z.sort((_,R)=>{const H=_[l],G=R[l],J=parseFloat(H),X=parseFloat(G);return!isNaN(J)&&!isNaN(X)?p?J-X:X-J:p?H.localeCompare(G):G.localeCompare(H)}),z},[t,l,p,y]);return{sortCol:l,setSortCol:d,sortAsc:p,setSortAsc:f,filterText:y,setFilterText:x,hiddenCols:T,setHiddenCols:A,heatmapMode:M,setHeatmapMode:b,processedData:w,getStats:v,getCellColor:(z,_)=>{if(!M)return;const R=parseFloat(z);if(isNaN(R))return;const H=v(_);if(!H)return;const G=H.max-H.min;if(G===0)return;const J=(R-H.min)/G,X=Math.floor(255*(1-J));return`rgba(255, ${X}, ${X}, 0.5)`},downloadCSV:()=>{const _=[r.filter((J,X)=>!T.has(X)).join(","),...w.map(J=>J.filter((X,ce)=>!T.has(ce)).map(X=>`"${X.replace(/"/g,'""')}"`).join(","))].join(`
`),R=new Blob([_],{type:"text/csv;charset=utf-8;"}),H=URL.createObjectURL(R),G=document.createElement("a");G.href=H,G.setAttribute("download",`${e}_data.csv`),document.body.appendChild(G),G.click(),document.body.removeChild(G)}}},fy=({id:e,initialHeaders:t,initialData:r,caption:n})=>{const{sortCol:a,setSortCol:i,sortAsc:o,setSortAsc:s,filterText:l,setFilterText:d,hiddenCols:p,setHiddenCols:f,heatmapMode:y,setHeatmapMode:x,processedData:T,getStats:A,getCellColor:M,downloadCSV:b}=my({id:e,initialData:r,initialHeaders:t});return h.jsxs("div",{className:"print-scientific-table my-8 border-2 border-ink dark:border-crt-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)] bg-white dark:bg-black overflow-hidden flex flex-col",children:[h.jsxs("div",{className:"p-2 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-crt-dim/20 flex flex-wrap items-center justify-between gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h4",{className:"font-mono text-xs font-bold uppercase px-2",children:e}),h.jsx("div",{className:"h-4 w-px bg-gray-400 dark:bg-crt-green/50 mx-1"}),h.jsx("input",{type:"text",placeholder:"Filter data...",value:l,onChange:v=>d(v.target.value),className:"text-xs font-mono p-1 border border-gray-300 dark:border-crt-green/30 bg-white dark:bg-black text-ink dark:text-crt-green rounded focus:outline-none focus:border-accent dark:focus:border-crt-green"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>x(!y),className:`p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${y?"text-red-600 dark:text-red-400 font-bold":"text-pencil dark:text-crt-green"}`,title:"Toggle Heatmap",children:h.jsx(c2,{size:16})}),h.jsxs("div",{className:"relative group",children:[h.jsx("button",{className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Columns",children:h.jsx(Wp,{size:16})}),h.jsxs("div",{className:"absolute right-0 top-full mt-1 w-40 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-lg z-50 hidden group-hover:block p-2",children:[h.jsx("div",{className:"font-mono text-[10px] uppercase border-b mb-1 pb-1 dark:text-crt-green",children:"Visible Cols"}),t.map((v,w)=>h.jsxs("label",{className:"flex items-center gap-2 text-xs p-1 hover:bg-gray-100 dark:hover:bg-crt-dim cursor-pointer dark:text-crt-green",children:[h.jsx("input",{type:"checkbox",checked:!p.has(w),onChange:()=>{const N=new Set(p);N.has(w)?N.delete(w):N.add(w),f(N)}}),v]},w))]})]}),h.jsx("button",{onClick:b,className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Export CSV",children:h.jsx(L0,{size:16})})]})]}),h.jsx("div",{className:"overflow-auto max-h-[500px]",children:h.jsxs("table",{className:"w-full text-left border-collapse text-sm font-mono text-ink dark:text-crt-green",children:[h.jsx("thead",{className:"bg-gray-100 dark:bg-crt-dim/50 sticky top-0 z-10 shadow-sm",children:h.jsx("tr",{children:t.map((v,w)=>{if(p.has(w))return null;const N=A(w);return h.jsxs("th",{className:`
                                    p-2 border-b-2 border-gray-300 dark:border-crt-green/50 whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-crt-dim/80 select-none relative group
                                    ${w===0?"sticky left-0 bg-gray-100 dark:bg-crt-dim/90 z-20 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                `,onClick:()=>{a===w?s(!o):(i(w),s(!0))},children:[h.jsxs("div",{className:"flex items-center gap-1 justify-between",children:[h.jsx("span",{children:v}),a===w&&(o?h.jsx(G4,{size:12}):h.jsx(W4,{size:12}))]}),N&&h.jsxs("div",{className:"absolute left-0 top-full mt-1 w-48 bg-black text-white p-2 text-[10px] rounded shadow-xl hidden group-hover:block z-50 pointer-events-none",children:[h.jsxs("div",{className:"font-bold border-b border-gray-700 pb-1 mb-1 flex items-center gap-1",children:[h.jsx(H4,{size:10})," Column Stats"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-x-2",children:[h.jsx("span",{children:"Mean:"})," ",h.jsx("span",{className:"text-right",children:N.mean.toFixed(2)}),h.jsx("span",{children:"Median:"})," ",h.jsx("span",{className:"text-right",children:N.median.toFixed(2)}),h.jsx("span",{children:"Min:"})," ",h.jsx("span",{className:"text-right",children:N.min}),h.jsx("span",{children:"Max:"})," ",h.jsx("span",{className:"text-right",children:N.max})]})]})]},w)})})}),h.jsx("tbody",{children:T.map((v,w)=>h.jsx("tr",{className:"border-b border-gray-200 dark:border-crt-dim/30 hover:bg-yellow-50 dark:hover:bg-crt-dim/20 transition-colors",children:v.map((N,P)=>p.has(P)?null:h.jsx("td",{className:`
                                        p-2 border-r border-gray-100 dark:border-crt-dim/20 
                                        ${P===0?"sticky left-0 bg-white dark:bg-black font-bold z-10 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                    `,style:{backgroundColor:P!==0?M(N,P):void 0},children:N},P))},w))})]})}),n&&h.jsx("div",{className:"p-2 text-[10px] font-mono border-t border-gray-200 dark:border-crt-dim bg-gray-50 dark:bg-black text-center text-gray-500 dark:text-crt-green/60",children:n})]})};class Ke{constructor(t,r,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=n}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Ke(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class st{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new st(r,Ke.range(this,t))}}class j{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var n="KaTeX parse error: "+t,a,i,o=r&&r.loc;if(o&&o.start<=o.end){var s=o.lexer.input;a=o.start,i=o.end,a===s.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var l=s.slice(a,i).replace(/[^]/g,"$&̲"),d;a>15?d="…"+s.slice(a-15,a):d=s.slice(0,a);var p;i+15<s.length?p=s.slice(i,i+15)+"…":p=s.slice(i),n+=d+l+p}var f=new Error(n);return f.name="ParseError",f.__proto__=j.prototype,f.position=a,a!=null&&i!=null&&(f.length=i-a),f.rawMessage=t,f}}j.prototype.__proto__=Error.prototype;var gy=function(t,r){return t===void 0?r:t},yy=/([A-Z])/g,vy=function(t){return t.replace(yy,"-$1").toLowerCase()},by={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},wy=/[&><"']/g;function xy(e){return String(e).replace(wy,t=>by[t])}var tm=function e(t){return t.type==="ordgroup"||t.type==="color"?t.body.length===1?e(t.body[0]):t:t.type==="font"?e(t.body):t},ky=function(t){var r=tm(t);return r.type==="mathord"||r.type==="textord"||r.type==="atom"},Sy=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t},Ay=function(t){var r=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);return r?r[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r[1])?null:r[1].toLowerCase():"_relative"},ae={deflt:gy,escape:xy,hyphenate:vy,getBaseElem:tm,isCharacterBox:ky,protocolFromUrl:Ay},Bi={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function Ty(e){if(e.default)return e.default;var t=e.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class O0{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in Bi)if(Bi.hasOwnProperty(r)){var n=Bi[r];this[r]=t[r]!==void 0?n.processor?n.processor(t[r]):t[r]:Ty(n)}}reportNonstrict(t,r,n){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,n)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new j("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),n);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,n){var a=this.strict;if(typeof a=="function")try{a=a(t,r,n)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=ae.protocolFromUrl(t.url);if(r==null)return!1;t.protocol=r}var n=typeof this.trust=="function"?this.trust(t):this.trust;return!!n}}class pr{constructor(t,r,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=n}sup(){return Lt[Cy[this.id]]}sub(){return Lt[Ny[this.id]]}fracNum(){return Lt[My[this.id]]}fracDen(){return Lt[Ey[this.id]]}cramp(){return Lt[Py[this.id]]}text(){return Lt[Dy[this.id]]}isTight(){return this.size>=2}}var H0=0,ho=1,zn=2,er=3,ja=4,gt=5,On=6,We=7,Lt=[new pr(H0,0,!1),new pr(ho,0,!0),new pr(zn,1,!1),new pr(er,1,!0),new pr(ja,2,!1),new pr(gt,2,!0),new pr(On,3,!1),new pr(We,3,!0)],Cy=[ja,gt,ja,gt,On,We,On,We],Ny=[gt,gt,gt,gt,We,We,We,We],My=[zn,er,ja,gt,On,We,On,We],Ey=[er,er,gt,gt,We,We,We,We],Py=[ho,ho,er,er,gt,gt,We,We],Dy=[H0,ho,zn,er,zn,er,zn,er],$={DISPLAY:Lt[H0],TEXT:Lt[zn],SCRIPT:Lt[ja],SCRIPTSCRIPT:Lt[On]},zl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function zy(e){for(var t=0;t<zl.length;t++)for(var r=zl[t],n=0;n<r.blocks.length;n++){var a=r.blocks[n];if(e>=a[0]&&e<=a[1])return r.name}return null}var ji=[];zl.forEach(e=>e.blocks.forEach(t=>ji.push(...t)));function rm(e){for(var t=0;t<ji.length;t+=2)if(e>=ji[t]&&e<=ji[t+1])return!0;return!1}var un=80,_y=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Iy=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Ry=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},By=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},jy=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},Ly=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},Fy=function(t,r,n){var a=n-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},qy=function(t,r,n){r=1e3*r;var a="";switch(t){case"sqrtMain":a=_y(r,un);break;case"sqrtSize1":a=Iy(r,un);break;case"sqrtSize2":a=Ry(r,un);break;case"sqrtSize3":a=By(r,un);break;case"sqrtSize4":a=jy(r,un);break;case"sqrtTall":a=Fy(r,un,n)}return a},Oy=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},zu={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Hy=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Ua{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var qt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},fi={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},_u={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Wy(e,t){qt[e]=t}function W0(e,t,r){if(!qt[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0),a=qt[t][n];if(!a&&e[0]in _u&&(n=_u[e[0]].charCodeAt(0),a=qt[t][n]),!a&&r==="text"&&rm(n)&&(a=qt[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var vs={};function Gy(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!vs[t]){var r=vs[t]={cssEmPerMu:fi.quad[t]/18};for(var n in fi)fi.hasOwnProperty(n)&&(r[n]=fi[n][t])}return vs[t]}var Uy=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Iu=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Ru=function(t,r){return r.size<2?t:Uy[t-1][r.size-1]};class Qt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Qt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=Iu[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return new Qt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Ru(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:Iu[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=Ru(Qt.BASESIZE,t);return this.size===r&&this.textSize===Qt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Qt.BASESIZE?["sizing","reset-size"+this.size,"size"+Qt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Gy(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Qt.BASESIZE=6;var _l={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Vy={ex:!0,em:!0,mu:!0},nm=function(t){return typeof t!="string"&&(t=t.unit),t in _l||t in Vy||t==="ex"},be=function(t,r){var n;if(t.unit in _l)n=_l[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")n=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")n=a.fontMetrics().xHeight;else if(t.unit==="em")n=a.fontMetrics().quad;else throw new j("Invalid unit: '"+t.unit+"'");a!==r&&(n*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*n,r.maxSize)},F=function(t){return+t.toFixed(4)+"em"},Ir=function(t){return t.filter(r=>r).join(" ")},am=function(t,r,n){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},im=function(t){var r=document.createElement(t);r.className=Ir(this.classes);for(var n in this.style)this.style.hasOwnProperty(n)&&(r.style[n]=this.style[n]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var i=0;i<this.children.length;i++)r.appendChild(this.children[i].toNode());return r},$y=/[\s"'>/=\x00-\x1f]/,om=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+ae.escape(Ir(this.classes))+'"');var n="";for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(r+=' style="'+ae.escape(n)+'"');for(var i in this.attributes)if(this.attributes.hasOwnProperty(i)){if($y.test(i))throw new j("Invalid attribute name '"+i+"'");r+=" "+i+'="'+ae.escape(this.attributes[i])+'"'}r+=">";for(var o=0;o<this.children.length;o++)r+=this.children[o].toMarkup();return r+="</"+t+">",r};class Va{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,am.call(this,t,n,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return im.call(this,"span")}toMarkup(){return om.call(this,"span")}}class G0{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,am.call(this,r,a),this.children=n||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return im.call(this,"a")}toMarkup(){return om.call(this,"a")}}class Yy{constructor(t,r,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=n}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+ae.escape(this.src)+'"'+(' alt="'+ae.escape(this.alt)+'"'),r="";for(var n in this.style)this.style.hasOwnProperty(n)&&(r+=ae.hyphenate(n)+":"+this.style[n]+";");return r&&(t+=' style="'+ae.escape(r)+'"'),t+="'/>",t}}var Ky={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class wt{constructor(t,r,n,a,i,o,s,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=n||0,this.italic=a||0,this.skew=i||0,this.width=o||0,this.classes=s||[],this.style=l||{},this.maxFontSize=0;var d=zy(this.text.charCodeAt(0));d&&this.classes.push(d+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Ky[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=F(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Ir(this.classes));for(var n in this.style)this.style.hasOwnProperty(n)&&(r=r||document.createElement("span"),r.style[n]=this.style[n]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=ae.escape(Ir(this.classes)),r+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(t=!0,r+=' style="'+ae.escape(n)+'"');var i=ae.escape(this.text);return t?(r+=">",r+=i,r+="</span>",r):i}}class or{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</svg>",t}}class Rr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",zu[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+ae.escape(this.alternate)+'"/>':'<path d="'+ae.escape(zu[this.pathName])+'"/>'}}class Il{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');return t+="/>",t}}function Bu(e){if(e instanceof wt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function Qy(e){if(e instanceof Va)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var Jy={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Xy={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},de={math:{},text:{}};function c(e,t,r,n,a,i){de[e][a]={font:t,group:r,replace:n},i&&n&&(de[e][n]=de[e][a])}var u="math",I="text",m="main",k="ams",ge="accent-token",W="bin",$e="close",Vn="inner",V="mathord",Me="op-token",dt="open",Bo="punct",S="rel",dr="spacing",C="textord";c(u,m,S,"≡","\\equiv",!0);c(u,m,S,"≺","\\prec",!0);c(u,m,S,"≻","\\succ",!0);c(u,m,S,"∼","\\sim",!0);c(u,m,S,"⊥","\\perp");c(u,m,S,"⪯","\\preceq",!0);c(u,m,S,"⪰","\\succeq",!0);c(u,m,S,"≃","\\simeq",!0);c(u,m,S,"∣","\\mid",!0);c(u,m,S,"≪","\\ll",!0);c(u,m,S,"≫","\\gg",!0);c(u,m,S,"≍","\\asymp",!0);c(u,m,S,"∥","\\parallel");c(u,m,S,"⋈","\\bowtie",!0);c(u,m,S,"⌣","\\smile",!0);c(u,m,S,"⊑","\\sqsubseteq",!0);c(u,m,S,"⊒","\\sqsupseteq",!0);c(u,m,S,"≐","\\doteq",!0);c(u,m,S,"⌢","\\frown",!0);c(u,m,S,"∋","\\ni",!0);c(u,m,S,"∝","\\propto",!0);c(u,m,S,"⊢","\\vdash",!0);c(u,m,S,"⊣","\\dashv",!0);c(u,m,S,"∋","\\owns");c(u,m,Bo,".","\\ldotp");c(u,m,Bo,"⋅","\\cdotp");c(u,m,C,"#","\\#");c(I,m,C,"#","\\#");c(u,m,C,"&","\\&");c(I,m,C,"&","\\&");c(u,m,C,"ℵ","\\aleph",!0);c(u,m,C,"∀","\\forall",!0);c(u,m,C,"ℏ","\\hbar",!0);c(u,m,C,"∃","\\exists",!0);c(u,m,C,"∇","\\nabla",!0);c(u,m,C,"♭","\\flat",!0);c(u,m,C,"ℓ","\\ell",!0);c(u,m,C,"♮","\\natural",!0);c(u,m,C,"♣","\\clubsuit",!0);c(u,m,C,"℘","\\wp",!0);c(u,m,C,"♯","\\sharp",!0);c(u,m,C,"♢","\\diamondsuit",!0);c(u,m,C,"ℜ","\\Re",!0);c(u,m,C,"♡","\\heartsuit",!0);c(u,m,C,"ℑ","\\Im",!0);c(u,m,C,"♠","\\spadesuit",!0);c(u,m,C,"§","\\S",!0);c(I,m,C,"§","\\S");c(u,m,C,"¶","\\P",!0);c(I,m,C,"¶","\\P");c(u,m,C,"†","\\dag");c(I,m,C,"†","\\dag");c(I,m,C,"†","\\textdagger");c(u,m,C,"‡","\\ddag");c(I,m,C,"‡","\\ddag");c(I,m,C,"‡","\\textdaggerdbl");c(u,m,$e,"⎱","\\rmoustache",!0);c(u,m,dt,"⎰","\\lmoustache",!0);c(u,m,$e,"⟯","\\rgroup",!0);c(u,m,dt,"⟮","\\lgroup",!0);c(u,m,W,"∓","\\mp",!0);c(u,m,W,"⊖","\\ominus",!0);c(u,m,W,"⊎","\\uplus",!0);c(u,m,W,"⊓","\\sqcap",!0);c(u,m,W,"∗","\\ast");c(u,m,W,"⊔","\\sqcup",!0);c(u,m,W,"◯","\\bigcirc",!0);c(u,m,W,"∙","\\bullet",!0);c(u,m,W,"‡","\\ddagger");c(u,m,W,"≀","\\wr",!0);c(u,m,W,"⨿","\\amalg");c(u,m,W,"&","\\And");c(u,m,S,"⟵","\\longleftarrow",!0);c(u,m,S,"⇐","\\Leftarrow",!0);c(u,m,S,"⟸","\\Longleftarrow",!0);c(u,m,S,"⟶","\\longrightarrow",!0);c(u,m,S,"⇒","\\Rightarrow",!0);c(u,m,S,"⟹","\\Longrightarrow",!0);c(u,m,S,"↔","\\leftrightarrow",!0);c(u,m,S,"⟷","\\longleftrightarrow",!0);c(u,m,S,"⇔","\\Leftrightarrow",!0);c(u,m,S,"⟺","\\Longleftrightarrow",!0);c(u,m,S,"↦","\\mapsto",!0);c(u,m,S,"⟼","\\longmapsto",!0);c(u,m,S,"↗","\\nearrow",!0);c(u,m,S,"↩","\\hookleftarrow",!0);c(u,m,S,"↪","\\hookrightarrow",!0);c(u,m,S,"↘","\\searrow",!0);c(u,m,S,"↼","\\leftharpoonup",!0);c(u,m,S,"⇀","\\rightharpoonup",!0);c(u,m,S,"↙","\\swarrow",!0);c(u,m,S,"↽","\\leftharpoondown",!0);c(u,m,S,"⇁","\\rightharpoondown",!0);c(u,m,S,"↖","\\nwarrow",!0);c(u,m,S,"⇌","\\rightleftharpoons",!0);c(u,k,S,"≮","\\nless",!0);c(u,k,S,"","\\@nleqslant");c(u,k,S,"","\\@nleqq");c(u,k,S,"⪇","\\lneq",!0);c(u,k,S,"≨","\\lneqq",!0);c(u,k,S,"","\\@lvertneqq");c(u,k,S,"⋦","\\lnsim",!0);c(u,k,S,"⪉","\\lnapprox",!0);c(u,k,S,"⊀","\\nprec",!0);c(u,k,S,"⋠","\\npreceq",!0);c(u,k,S,"⋨","\\precnsim",!0);c(u,k,S,"⪹","\\precnapprox",!0);c(u,k,S,"≁","\\nsim",!0);c(u,k,S,"","\\@nshortmid");c(u,k,S,"∤","\\nmid",!0);c(u,k,S,"⊬","\\nvdash",!0);c(u,k,S,"⊭","\\nvDash",!0);c(u,k,S,"⋪","\\ntriangleleft");c(u,k,S,"⋬","\\ntrianglelefteq",!0);c(u,k,S,"⊊","\\subsetneq",!0);c(u,k,S,"","\\@varsubsetneq");c(u,k,S,"⫋","\\subsetneqq",!0);c(u,k,S,"","\\@varsubsetneqq");c(u,k,S,"≯","\\ngtr",!0);c(u,k,S,"","\\@ngeqslant");c(u,k,S,"","\\@ngeqq");c(u,k,S,"⪈","\\gneq",!0);c(u,k,S,"≩","\\gneqq",!0);c(u,k,S,"","\\@gvertneqq");c(u,k,S,"⋧","\\gnsim",!0);c(u,k,S,"⪊","\\gnapprox",!0);c(u,k,S,"⊁","\\nsucc",!0);c(u,k,S,"⋡","\\nsucceq",!0);c(u,k,S,"⋩","\\succnsim",!0);c(u,k,S,"⪺","\\succnapprox",!0);c(u,k,S,"≆","\\ncong",!0);c(u,k,S,"","\\@nshortparallel");c(u,k,S,"∦","\\nparallel",!0);c(u,k,S,"⊯","\\nVDash",!0);c(u,k,S,"⋫","\\ntriangleright");c(u,k,S,"⋭","\\ntrianglerighteq",!0);c(u,k,S,"","\\@nsupseteqq");c(u,k,S,"⊋","\\supsetneq",!0);c(u,k,S,"","\\@varsupsetneq");c(u,k,S,"⫌","\\supsetneqq",!0);c(u,k,S,"","\\@varsupsetneqq");c(u,k,S,"⊮","\\nVdash",!0);c(u,k,S,"⪵","\\precneqq",!0);c(u,k,S,"⪶","\\succneqq",!0);c(u,k,S,"","\\@nsubseteqq");c(u,k,W,"⊴","\\unlhd");c(u,k,W,"⊵","\\unrhd");c(u,k,S,"↚","\\nleftarrow",!0);c(u,k,S,"↛","\\nrightarrow",!0);c(u,k,S,"⇍","\\nLeftarrow",!0);c(u,k,S,"⇏","\\nRightarrow",!0);c(u,k,S,"↮","\\nleftrightarrow",!0);c(u,k,S,"⇎","\\nLeftrightarrow",!0);c(u,k,S,"△","\\vartriangle");c(u,k,C,"ℏ","\\hslash");c(u,k,C,"▽","\\triangledown");c(u,k,C,"◊","\\lozenge");c(u,k,C,"Ⓢ","\\circledS");c(u,k,C,"®","\\circledR");c(I,k,C,"®","\\circledR");c(u,k,C,"∡","\\measuredangle",!0);c(u,k,C,"∄","\\nexists");c(u,k,C,"℧","\\mho");c(u,k,C,"Ⅎ","\\Finv",!0);c(u,k,C,"⅁","\\Game",!0);c(u,k,C,"‵","\\backprime");c(u,k,C,"▲","\\blacktriangle");c(u,k,C,"▼","\\blacktriangledown");c(u,k,C,"■","\\blacksquare");c(u,k,C,"⧫","\\blacklozenge");c(u,k,C,"★","\\bigstar");c(u,k,C,"∢","\\sphericalangle",!0);c(u,k,C,"∁","\\complement",!0);c(u,k,C,"ð","\\eth",!0);c(I,m,C,"ð","ð");c(u,k,C,"╱","\\diagup");c(u,k,C,"╲","\\diagdown");c(u,k,C,"□","\\square");c(u,k,C,"□","\\Box");c(u,k,C,"◊","\\Diamond");c(u,k,C,"¥","\\yen",!0);c(I,k,C,"¥","\\yen",!0);c(u,k,C,"✓","\\checkmark",!0);c(I,k,C,"✓","\\checkmark");c(u,k,C,"ℶ","\\beth",!0);c(u,k,C,"ℸ","\\daleth",!0);c(u,k,C,"ℷ","\\gimel",!0);c(u,k,C,"ϝ","\\digamma",!0);c(u,k,C,"ϰ","\\varkappa");c(u,k,dt,"┌","\\@ulcorner",!0);c(u,k,$e,"┐","\\@urcorner",!0);c(u,k,dt,"└","\\@llcorner",!0);c(u,k,$e,"┘","\\@lrcorner",!0);c(u,k,S,"≦","\\leqq",!0);c(u,k,S,"⩽","\\leqslant",!0);c(u,k,S,"⪕","\\eqslantless",!0);c(u,k,S,"≲","\\lesssim",!0);c(u,k,S,"⪅","\\lessapprox",!0);c(u,k,S,"≊","\\approxeq",!0);c(u,k,W,"⋖","\\lessdot");c(u,k,S,"⋘","\\lll",!0);c(u,k,S,"≶","\\lessgtr",!0);c(u,k,S,"⋚","\\lesseqgtr",!0);c(u,k,S,"⪋","\\lesseqqgtr",!0);c(u,k,S,"≑","\\doteqdot");c(u,k,S,"≓","\\risingdotseq",!0);c(u,k,S,"≒","\\fallingdotseq",!0);c(u,k,S,"∽","\\backsim",!0);c(u,k,S,"⋍","\\backsimeq",!0);c(u,k,S,"⫅","\\subseteqq",!0);c(u,k,S,"⋐","\\Subset",!0);c(u,k,S,"⊏","\\sqsubset",!0);c(u,k,S,"≼","\\preccurlyeq",!0);c(u,k,S,"⋞","\\curlyeqprec",!0);c(u,k,S,"≾","\\precsim",!0);c(u,k,S,"⪷","\\precapprox",!0);c(u,k,S,"⊲","\\vartriangleleft");c(u,k,S,"⊴","\\trianglelefteq");c(u,k,S,"⊨","\\vDash",!0);c(u,k,S,"⊪","\\Vvdash",!0);c(u,k,S,"⌣","\\smallsmile");c(u,k,S,"⌢","\\smallfrown");c(u,k,S,"≏","\\bumpeq",!0);c(u,k,S,"≎","\\Bumpeq",!0);c(u,k,S,"≧","\\geqq",!0);c(u,k,S,"⩾","\\geqslant",!0);c(u,k,S,"⪖","\\eqslantgtr",!0);c(u,k,S,"≳","\\gtrsim",!0);c(u,k,S,"⪆","\\gtrapprox",!0);c(u,k,W,"⋗","\\gtrdot");c(u,k,S,"⋙","\\ggg",!0);c(u,k,S,"≷","\\gtrless",!0);c(u,k,S,"⋛","\\gtreqless",!0);c(u,k,S,"⪌","\\gtreqqless",!0);c(u,k,S,"≖","\\eqcirc",!0);c(u,k,S,"≗","\\circeq",!0);c(u,k,S,"≜","\\triangleq",!0);c(u,k,S,"∼","\\thicksim");c(u,k,S,"≈","\\thickapprox");c(u,k,S,"⫆","\\supseteqq",!0);c(u,k,S,"⋑","\\Supset",!0);c(u,k,S,"⊐","\\sqsupset",!0);c(u,k,S,"≽","\\succcurlyeq",!0);c(u,k,S,"⋟","\\curlyeqsucc",!0);c(u,k,S,"≿","\\succsim",!0);c(u,k,S,"⪸","\\succapprox",!0);c(u,k,S,"⊳","\\vartriangleright");c(u,k,S,"⊵","\\trianglerighteq");c(u,k,S,"⊩","\\Vdash",!0);c(u,k,S,"∣","\\shortmid");c(u,k,S,"∥","\\shortparallel");c(u,k,S,"≬","\\between",!0);c(u,k,S,"⋔","\\pitchfork",!0);c(u,k,S,"∝","\\varpropto");c(u,k,S,"◀","\\blacktriangleleft");c(u,k,S,"∴","\\therefore",!0);c(u,k,S,"∍","\\backepsilon");c(u,k,S,"▶","\\blacktriangleright");c(u,k,S,"∵","\\because",!0);c(u,k,S,"⋘","\\llless");c(u,k,S,"⋙","\\gggtr");c(u,k,W,"⊲","\\lhd");c(u,k,W,"⊳","\\rhd");c(u,k,S,"≂","\\eqsim",!0);c(u,m,S,"⋈","\\Join");c(u,k,S,"≑","\\Doteq",!0);c(u,k,W,"∔","\\dotplus",!0);c(u,k,W,"∖","\\smallsetminus");c(u,k,W,"⋒","\\Cap",!0);c(u,k,W,"⋓","\\Cup",!0);c(u,k,W,"⩞","\\doublebarwedge",!0);c(u,k,W,"⊟","\\boxminus",!0);c(u,k,W,"⊞","\\boxplus",!0);c(u,k,W,"⋇","\\divideontimes",!0);c(u,k,W,"⋉","\\ltimes",!0);c(u,k,W,"⋊","\\rtimes",!0);c(u,k,W,"⋋","\\leftthreetimes",!0);c(u,k,W,"⋌","\\rightthreetimes",!0);c(u,k,W,"⋏","\\curlywedge",!0);c(u,k,W,"⋎","\\curlyvee",!0);c(u,k,W,"⊝","\\circleddash",!0);c(u,k,W,"⊛","\\circledast",!0);c(u,k,W,"⋅","\\centerdot");c(u,k,W,"⊺","\\intercal",!0);c(u,k,W,"⋒","\\doublecap");c(u,k,W,"⋓","\\doublecup");c(u,k,W,"⊠","\\boxtimes",!0);c(u,k,S,"⇢","\\dashrightarrow",!0);c(u,k,S,"⇠","\\dashleftarrow",!0);c(u,k,S,"⇇","\\leftleftarrows",!0);c(u,k,S,"⇆","\\leftrightarrows",!0);c(u,k,S,"⇚","\\Lleftarrow",!0);c(u,k,S,"↞","\\twoheadleftarrow",!0);c(u,k,S,"↢","\\leftarrowtail",!0);c(u,k,S,"↫","\\looparrowleft",!0);c(u,k,S,"⇋","\\leftrightharpoons",!0);c(u,k,S,"↶","\\curvearrowleft",!0);c(u,k,S,"↺","\\circlearrowleft",!0);c(u,k,S,"↰","\\Lsh",!0);c(u,k,S,"⇈","\\upuparrows",!0);c(u,k,S,"↿","\\upharpoonleft",!0);c(u,k,S,"⇃","\\downharpoonleft",!0);c(u,m,S,"⊶","\\origof",!0);c(u,m,S,"⊷","\\imageof",!0);c(u,k,S,"⊸","\\multimap",!0);c(u,k,S,"↭","\\leftrightsquigarrow",!0);c(u,k,S,"⇉","\\rightrightarrows",!0);c(u,k,S,"⇄","\\rightleftarrows",!0);c(u,k,S,"↠","\\twoheadrightarrow",!0);c(u,k,S,"↣","\\rightarrowtail",!0);c(u,k,S,"↬","\\looparrowright",!0);c(u,k,S,"↷","\\curvearrowright",!0);c(u,k,S,"↻","\\circlearrowright",!0);c(u,k,S,"↱","\\Rsh",!0);c(u,k,S,"⇊","\\downdownarrows",!0);c(u,k,S,"↾","\\upharpoonright",!0);c(u,k,S,"⇂","\\downharpoonright",!0);c(u,k,S,"⇝","\\rightsquigarrow",!0);c(u,k,S,"⇝","\\leadsto");c(u,k,S,"⇛","\\Rrightarrow",!0);c(u,k,S,"↾","\\restriction");c(u,m,C,"‘","`");c(u,m,C,"$","\\$");c(I,m,C,"$","\\$");c(I,m,C,"$","\\textdollar");c(u,m,C,"%","\\%");c(I,m,C,"%","\\%");c(u,m,C,"_","\\_");c(I,m,C,"_","\\_");c(I,m,C,"_","\\textunderscore");c(u,m,C,"∠","\\angle",!0);c(u,m,C,"∞","\\infty",!0);c(u,m,C,"′","\\prime");c(u,m,C,"△","\\triangle");c(u,m,C,"Γ","\\Gamma",!0);c(u,m,C,"Δ","\\Delta",!0);c(u,m,C,"Θ","\\Theta",!0);c(u,m,C,"Λ","\\Lambda",!0);c(u,m,C,"Ξ","\\Xi",!0);c(u,m,C,"Π","\\Pi",!0);c(u,m,C,"Σ","\\Sigma",!0);c(u,m,C,"Υ","\\Upsilon",!0);c(u,m,C,"Φ","\\Phi",!0);c(u,m,C,"Ψ","\\Psi",!0);c(u,m,C,"Ω","\\Omega",!0);c(u,m,C,"A","Α");c(u,m,C,"B","Β");c(u,m,C,"E","Ε");c(u,m,C,"Z","Ζ");c(u,m,C,"H","Η");c(u,m,C,"I","Ι");c(u,m,C,"K","Κ");c(u,m,C,"M","Μ");c(u,m,C,"N","Ν");c(u,m,C,"O","Ο");c(u,m,C,"P","Ρ");c(u,m,C,"T","Τ");c(u,m,C,"X","Χ");c(u,m,C,"¬","\\neg",!0);c(u,m,C,"¬","\\lnot");c(u,m,C,"⊤","\\top");c(u,m,C,"⊥","\\bot");c(u,m,C,"∅","\\emptyset");c(u,k,C,"∅","\\varnothing");c(u,m,V,"α","\\alpha",!0);c(u,m,V,"β","\\beta",!0);c(u,m,V,"γ","\\gamma",!0);c(u,m,V,"δ","\\delta",!0);c(u,m,V,"ϵ","\\epsilon",!0);c(u,m,V,"ζ","\\zeta",!0);c(u,m,V,"η","\\eta",!0);c(u,m,V,"θ","\\theta",!0);c(u,m,V,"ι","\\iota",!0);c(u,m,V,"κ","\\kappa",!0);c(u,m,V,"λ","\\lambda",!0);c(u,m,V,"μ","\\mu",!0);c(u,m,V,"ν","\\nu",!0);c(u,m,V,"ξ","\\xi",!0);c(u,m,V,"ο","\\omicron",!0);c(u,m,V,"π","\\pi",!0);c(u,m,V,"ρ","\\rho",!0);c(u,m,V,"σ","\\sigma",!0);c(u,m,V,"τ","\\tau",!0);c(u,m,V,"υ","\\upsilon",!0);c(u,m,V,"ϕ","\\phi",!0);c(u,m,V,"χ","\\chi",!0);c(u,m,V,"ψ","\\psi",!0);c(u,m,V,"ω","\\omega",!0);c(u,m,V,"ε","\\varepsilon",!0);c(u,m,V,"ϑ","\\vartheta",!0);c(u,m,V,"ϖ","\\varpi",!0);c(u,m,V,"ϱ","\\varrho",!0);c(u,m,V,"ς","\\varsigma",!0);c(u,m,V,"φ","\\varphi",!0);c(u,m,W,"∗","*",!0);c(u,m,W,"+","+");c(u,m,W,"−","-",!0);c(u,m,W,"⋅","\\cdot",!0);c(u,m,W,"∘","\\circ",!0);c(u,m,W,"÷","\\div",!0);c(u,m,W,"±","\\pm",!0);c(u,m,W,"×","\\times",!0);c(u,m,W,"∩","\\cap",!0);c(u,m,W,"∪","\\cup",!0);c(u,m,W,"∖","\\setminus",!0);c(u,m,W,"∧","\\land");c(u,m,W,"∨","\\lor");c(u,m,W,"∧","\\wedge",!0);c(u,m,W,"∨","\\vee",!0);c(u,m,C,"√","\\surd");c(u,m,dt,"⟨","\\langle",!0);c(u,m,dt,"∣","\\lvert");c(u,m,dt,"∥","\\lVert");c(u,m,$e,"?","?");c(u,m,$e,"!","!");c(u,m,$e,"⟩","\\rangle",!0);c(u,m,$e,"∣","\\rvert");c(u,m,$e,"∥","\\rVert");c(u,m,S,"=","=");c(u,m,S,":",":");c(u,m,S,"≈","\\approx",!0);c(u,m,S,"≅","\\cong",!0);c(u,m,S,"≥","\\ge");c(u,m,S,"≥","\\geq",!0);c(u,m,S,"←","\\gets");c(u,m,S,">","\\gt",!0);c(u,m,S,"∈","\\in",!0);c(u,m,S,"","\\@not");c(u,m,S,"⊂","\\subset",!0);c(u,m,S,"⊃","\\supset",!0);c(u,m,S,"⊆","\\subseteq",!0);c(u,m,S,"⊇","\\supseteq",!0);c(u,k,S,"⊈","\\nsubseteq",!0);c(u,k,S,"⊉","\\nsupseteq",!0);c(u,m,S,"⊨","\\models");c(u,m,S,"←","\\leftarrow",!0);c(u,m,S,"≤","\\le");c(u,m,S,"≤","\\leq",!0);c(u,m,S,"<","\\lt",!0);c(u,m,S,"→","\\rightarrow",!0);c(u,m,S,"→","\\to");c(u,k,S,"≱","\\ngeq",!0);c(u,k,S,"≰","\\nleq",!0);c(u,m,dr," ","\\ ");c(u,m,dr," ","\\space");c(u,m,dr," ","\\nobreakspace");c(I,m,dr," ","\\ ");c(I,m,dr," "," ");c(I,m,dr," ","\\space");c(I,m,dr," ","\\nobreakspace");c(u,m,dr,null,"\\nobreak");c(u,m,dr,null,"\\allowbreak");c(u,m,Bo,",",",");c(u,m,Bo,";",";");c(u,k,W,"⊼","\\barwedge",!0);c(u,k,W,"⊻","\\veebar",!0);c(u,m,W,"⊙","\\odot",!0);c(u,m,W,"⊕","\\oplus",!0);c(u,m,W,"⊗","\\otimes",!0);c(u,m,C,"∂","\\partial",!0);c(u,m,W,"⊘","\\oslash",!0);c(u,k,W,"⊚","\\circledcirc",!0);c(u,k,W,"⊡","\\boxdot",!0);c(u,m,W,"△","\\bigtriangleup");c(u,m,W,"▽","\\bigtriangledown");c(u,m,W,"†","\\dagger");c(u,m,W,"⋄","\\diamond");c(u,m,W,"⋆","\\star");c(u,m,W,"◃","\\triangleleft");c(u,m,W,"▹","\\triangleright");c(u,m,dt,"{","\\{");c(I,m,C,"{","\\{");c(I,m,C,"{","\\textbraceleft");c(u,m,$e,"}","\\}");c(I,m,C,"}","\\}");c(I,m,C,"}","\\textbraceright");c(u,m,dt,"{","\\lbrace");c(u,m,$e,"}","\\rbrace");c(u,m,dt,"[","\\lbrack",!0);c(I,m,C,"[","\\lbrack",!0);c(u,m,$e,"]","\\rbrack",!0);c(I,m,C,"]","\\rbrack",!0);c(u,m,dt,"(","\\lparen",!0);c(u,m,$e,")","\\rparen",!0);c(I,m,C,"<","\\textless",!0);c(I,m,C,">","\\textgreater",!0);c(u,m,dt,"⌊","\\lfloor",!0);c(u,m,$e,"⌋","\\rfloor",!0);c(u,m,dt,"⌈","\\lceil",!0);c(u,m,$e,"⌉","\\rceil",!0);c(u,m,C,"\\","\\backslash");c(u,m,C,"∣","|");c(u,m,C,"∣","\\vert");c(I,m,C,"|","\\textbar",!0);c(u,m,C,"∥","\\|");c(u,m,C,"∥","\\Vert");c(I,m,C,"∥","\\textbardbl");c(I,m,C,"~","\\textasciitilde");c(I,m,C,"\\","\\textbackslash");c(I,m,C,"^","\\textasciicircum");c(u,m,S,"↑","\\uparrow",!0);c(u,m,S,"⇑","\\Uparrow",!0);c(u,m,S,"↓","\\downarrow",!0);c(u,m,S,"⇓","\\Downarrow",!0);c(u,m,S,"↕","\\updownarrow",!0);c(u,m,S,"⇕","\\Updownarrow",!0);c(u,m,Me,"∐","\\coprod");c(u,m,Me,"⋁","\\bigvee");c(u,m,Me,"⋀","\\bigwedge");c(u,m,Me,"⨄","\\biguplus");c(u,m,Me,"⋂","\\bigcap");c(u,m,Me,"⋃","\\bigcup");c(u,m,Me,"∫","\\int");c(u,m,Me,"∫","\\intop");c(u,m,Me,"∬","\\iint");c(u,m,Me,"∭","\\iiint");c(u,m,Me,"∏","\\prod");c(u,m,Me,"∑","\\sum");c(u,m,Me,"⨂","\\bigotimes");c(u,m,Me,"⨁","\\bigoplus");c(u,m,Me,"⨀","\\bigodot");c(u,m,Me,"∮","\\oint");c(u,m,Me,"∯","\\oiint");c(u,m,Me,"∰","\\oiiint");c(u,m,Me,"⨆","\\bigsqcup");c(u,m,Me,"∫","\\smallint");c(I,m,Vn,"…","\\textellipsis");c(u,m,Vn,"…","\\mathellipsis");c(I,m,Vn,"…","\\ldots",!0);c(u,m,Vn,"…","\\ldots",!0);c(u,m,Vn,"⋯","\\@cdots",!0);c(u,m,Vn,"⋱","\\ddots",!0);c(u,m,C,"⋮","\\varvdots");c(I,m,C,"⋮","\\varvdots");c(u,m,ge,"ˊ","\\acute");c(u,m,ge,"ˋ","\\grave");c(u,m,ge,"¨","\\ddot");c(u,m,ge,"~","\\tilde");c(u,m,ge,"ˉ","\\bar");c(u,m,ge,"˘","\\breve");c(u,m,ge,"ˇ","\\check");c(u,m,ge,"^","\\hat");c(u,m,ge,"⃗","\\vec");c(u,m,ge,"˙","\\dot");c(u,m,ge,"˚","\\mathring");c(u,m,V,"","\\@imath");c(u,m,V,"","\\@jmath");c(u,m,C,"ı","ı");c(u,m,C,"ȷ","ȷ");c(I,m,C,"ı","\\i",!0);c(I,m,C,"ȷ","\\j",!0);c(I,m,C,"ß","\\ss",!0);c(I,m,C,"æ","\\ae",!0);c(I,m,C,"œ","\\oe",!0);c(I,m,C,"ø","\\o",!0);c(I,m,C,"Æ","\\AE",!0);c(I,m,C,"Œ","\\OE",!0);c(I,m,C,"Ø","\\O",!0);c(I,m,ge,"ˊ","\\'");c(I,m,ge,"ˋ","\\`");c(I,m,ge,"ˆ","\\^");c(I,m,ge,"˜","\\~");c(I,m,ge,"ˉ","\\=");c(I,m,ge,"˘","\\u");c(I,m,ge,"˙","\\.");c(I,m,ge,"¸","\\c");c(I,m,ge,"˚","\\r");c(I,m,ge,"ˇ","\\v");c(I,m,ge,"¨",'\\"');c(I,m,ge,"˝","\\H");c(I,m,ge,"◯","\\textcircled");var sm={"--":!0,"---":!0,"``":!0,"''":!0};c(I,m,C,"–","--",!0);c(I,m,C,"–","\\textendash");c(I,m,C,"—","---",!0);c(I,m,C,"—","\\textemdash");c(I,m,C,"‘","`",!0);c(I,m,C,"‘","\\textquoteleft");c(I,m,C,"’","'",!0);c(I,m,C,"’","\\textquoteright");c(I,m,C,"“","``",!0);c(I,m,C,"“","\\textquotedblleft");c(I,m,C,"”","''",!0);c(I,m,C,"”","\\textquotedblright");c(u,m,C,"°","\\degree",!0);c(I,m,C,"°","\\degree");c(I,m,C,"°","\\textdegree",!0);c(u,m,C,"£","\\pounds");c(u,m,C,"£","\\mathsterling",!0);c(I,m,C,"£","\\pounds");c(I,m,C,"£","\\textsterling",!0);c(u,k,C,"✠","\\maltese");c(I,k,C,"✠","\\maltese");var ju='0123456789/@."';for(var bs=0;bs<ju.length;bs++){var Lu=ju.charAt(bs);c(u,m,C,Lu,Lu)}var Fu='0123456789!@*()-=+";:?/.,';for(var ws=0;ws<Fu.length;ws++){var qu=Fu.charAt(ws);c(I,m,C,qu,qu)}var po="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var xs=0;xs<po.length;xs++){var gi=po.charAt(xs);c(u,m,V,gi,gi),c(I,m,C,gi,gi)}c(u,k,C,"C","ℂ");c(I,k,C,"C","ℂ");c(u,k,C,"H","ℍ");c(I,k,C,"H","ℍ");c(u,k,C,"N","ℕ");c(I,k,C,"N","ℕ");c(u,k,C,"P","ℙ");c(I,k,C,"P","ℙ");c(u,k,C,"Q","ℚ");c(I,k,C,"Q","ℚ");c(u,k,C,"R","ℝ");c(I,k,C,"R","ℝ");c(u,k,C,"Z","ℤ");c(I,k,C,"Z","ℤ");c(u,m,V,"h","ℎ");c(I,m,V,"h","ℎ");var Y="";for(var Oe=0;Oe<po.length;Oe++){var ke=po.charAt(Oe);Y=String.fromCharCode(55349,56320+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56372+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56424+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56580+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56684+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56736+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56788+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56840+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56944+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Oe<26&&(Y=String.fromCharCode(55349,56632+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56476+Oe),c(u,m,V,ke,Y),c(I,m,C,ke,Y))}Y="𝕜";c(u,m,V,"k",Y);c(I,m,C,"k",Y);for(var Wr=0;Wr<10;Wr++){var mr=Wr.toString();Y=String.fromCharCode(55349,57294+Wr),c(u,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57314+Wr),c(u,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57324+Wr),c(u,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57334+Wr),c(u,m,V,mr,Y),c(I,m,C,mr,Y)}var Rl="ÐÞþ";for(var ks=0;ks<Rl.length;ks++){var yi=Rl.charAt(ks);c(u,m,V,yi,yi),c(I,m,C,yi,yi)}var vi=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Ou=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Zy=function(t,r){var n=t.charCodeAt(0),a=t.charCodeAt(1),i=(n-55296)*1024+(a-56320)+65536,o=r==="math"?0:1;if(119808<=i&&i<120484){var s=Math.floor((i-119808)/26);return[vi[s][2],vi[s][o]]}else if(120782<=i&&i<=120831){var l=Math.floor((i-120782)/10);return[Ou[l][2],Ou[l][o]]}else{if(i===120485||i===120486)return[vi[0][2],vi[0][o]];if(120486<i&&i<120782)return["",""];throw new j("Unsupported character: "+t)}},jo=function(t,r,n){return de[n][t]&&de[n][t].replace&&(t=de[n][t].replace),{value:t,metrics:W0(t,r,n)}},Nt=function(t,r,n,a,i){var o=jo(t,r,n),s=o.metrics;t=o.value;var l;if(s){var d=s.italic;(n==="text"||a&&a.font==="mathit")&&(d=0),l=new wt(t,s.height,s.depth,d,s.skew,s.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+n+"'")),l=new wt(t,0,0,0,0,0,i);if(a){l.maxFontSize=a.sizeMultiplier,a.style.isTight()&&l.classes.push("mtight");var p=a.getColor();p&&(l.style.color=p)}return l},e3=function(t,r,n,a){return a===void 0&&(a=[]),n.font==="boldsymbol"&&jo(t,"Main-Bold",r).metrics?Nt(t,"Main-Bold",r,n,a.concat(["mathbf"])):t==="\\"||de[r][t].font==="main"?Nt(t,"Main-Regular",r,n,a):Nt(t,"AMS-Regular",r,n,a.concat(["amsrm"]))},t3=function(t,r,n,a,i){return i!=="textord"&&jo(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},r3=function(t,r,n){var a=t.mode,i=t.text,o=["mord"],s=a==="math"||a==="text"&&r.font,l=s?r.font:r.fontFamily,d="",p="";if(i.charCodeAt(0)===55349&&([d,p]=Zy(i,a)),d.length>0)return Nt(i,d,a,r,o.concat(p));if(l){var f,y;if(l==="boldsymbol"){var x=t3(i,a,r,o,n);f=x.fontName,y=[x.fontClass]}else s?(f=um[l].fontName,y=[l]):(f=bi(l,r.fontWeight,r.fontShape),y=[l,r.fontWeight,r.fontShape]);if(jo(i,f,a).metrics)return Nt(i,f,a,r,o.concat(y));if(sm.hasOwnProperty(i)&&f.slice(0,10)==="Typewriter"){for(var T=[],A=0;A<i.length;A++)T.push(Nt(i[A],f,a,r,o.concat(y)));return cm(T)}}if(n==="mathord")return Nt(i,"Math-Italic",a,r,o.concat(["mathnormal"]));if(n==="textord"){var M=de[a][i]&&de[a][i].font;if(M==="ams"){var b=bi("amsrm",r.fontWeight,r.fontShape);return Nt(i,b,a,r,o.concat("amsrm",r.fontWeight,r.fontShape))}else if(M==="main"||!M){var v=bi("textrm",r.fontWeight,r.fontShape);return Nt(i,v,a,r,o.concat(r.fontWeight,r.fontShape))}else{var w=bi(M,r.fontWeight,r.fontShape);return Nt(i,w,a,r,o.concat(w,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},n3=(e,t)=>{if(Ir(e.classes)!==Ir(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var n in e.style)if(e.style.hasOwnProperty(n)&&e.style[n]!==t.style[n])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&e.style[a]!==t.style[a])return!1;return!0},a3=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof wt&&n instanceof wt&&n3(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e},U0=function(t){for(var r=0,n=0,a=0,i=0;i<t.children.length;i++){var o=t.children[i];o.height>r&&(r=o.height),o.depth>n&&(n=o.depth),o.maxFontSize>a&&(a=o.maxFontSize)}t.height=r,t.depth=n,t.maxFontSize=a},Ye=function(t,r,n,a){var i=new Va(t,r,n,a);return U0(i),i},lm=(e,t,r,n)=>new Va(e,t,r,n),i3=function(t,r,n){var a=Ye([t],[],r);return a.height=Math.max(n||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=F(a.height),a.maxFontSize=1,a},o3=function(t,r,n,a){var i=new G0(t,r,n,a);return U0(i),i},cm=function(t){var r=new Ua(t);return U0(r),r},s3=function(t,r){return t instanceof Ua?Ye([],[t],r):t},l3=function(t){if(t.positionType==="individualShift"){for(var r=t.children,n=[r[0]],a=-r[0].shift-r[0].elem.depth,i=a,o=1;o<r.length;o++){var s=-r[o].shift-i-r[o].elem.depth,l=s-(r[o-1].elem.height+r[o-1].elem.depth);i=i+s,n.push({type:"kern",size:l}),n.push(r[o])}return{children:n,depth:a}}var d;if(t.positionType==="top"){for(var p=t.positionData,f=0;f<t.children.length;f++){var y=t.children[f];p-=y.type==="kern"?y.size:y.elem.height+y.elem.depth}d=p}else if(t.positionType==="bottom")d=-t.positionData;else{var x=t.children[0];if(x.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")d=-x.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")d=-x.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:d}},c3=function(t,r){for(var{children:n,depth:a}=l3(t),i=0,o=0;o<n.length;o++){var s=n[o];if(s.type==="elem"){var l=s.elem;i=Math.max(i,l.maxFontSize,l.height)}}i+=2;var d=Ye(["pstrut"],[]);d.style.height=F(i);for(var p=[],f=a,y=a,x=a,T=0;T<n.length;T++){var A=n[T];if(A.type==="kern")x+=A.size;else{var M=A.elem,b=A.wrapperClasses||[],v=A.wrapperStyle||{},w=Ye(b,[d,M],void 0,v);w.style.top=F(-i-x-M.depth),A.marginLeft&&(w.style.marginLeft=A.marginLeft),A.marginRight&&(w.style.marginRight=A.marginRight),p.push(w),x+=M.height+M.depth}f=Math.min(f,x),y=Math.max(y,x)}var N=Ye(["vlist"],p);N.style.height=F(y);var P;if(f<0){var z=Ye([],[]),_=Ye(["vlist"],[z]);_.style.height=F(-f);var R=Ye(["vlist-s"],[new wt("​")]);P=[Ye(["vlist-r"],[N,R]),Ye(["vlist-r"],[_])]}else P=[Ye(["vlist-r"],[N])];var H=Ye(["vlist-t"],P);return P.length===2&&H.classes.push("vlist-t2"),H.height=y,H.depth=-f,H},u3=(e,t)=>{var r=Ye(["mspace"],[],t),n=be(e,t);return r.style.marginRight=F(n),r},bi=function(t,r,n){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var i;return r==="textbf"&&n==="textit"?i="BoldItalic":r==="textbf"?i="Bold":r==="textit"?i="Italic":i="Regular",a+"-"+i},um={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},dm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},d3=function(t,r){var[n,a,i]=dm[t],o=new Rr(n),s=new or([o],{width:F(a),height:F(i),style:"width:"+F(a),viewBox:"0 0 "+1e3*a+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),l=lm(["overlay"],[s],r);return l.height=i,l.style.height=F(i),l.style.width=F(a),l},E={fontMap:um,makeSymbol:Nt,mathsym:e3,makeSpan:Ye,makeSvgSpan:lm,makeLineSpan:i3,makeAnchor:o3,makeFragment:cm,wrapFragment:s3,makeVList:c3,makeOrd:r3,makeGlue:u3,staticSvg:d3,svgData:dm,tryCombineChars:a3},ye={number:3,unit:"mu"},Gr={number:4,unit:"mu"},$t={number:5,unit:"mu"},h3={mord:{mop:ye,mbin:Gr,mrel:$t,minner:ye},mop:{mord:ye,mop:ye,mrel:$t,minner:ye},mbin:{mord:Gr,mop:Gr,mopen:Gr,minner:Gr},mrel:{mord:$t,mop:$t,mopen:$t,minner:$t},mopen:{},mclose:{mop:ye,mbin:Gr,mrel:$t,minner:ye},mpunct:{mord:ye,mop:ye,mrel:$t,mopen:ye,mclose:ye,mpunct:ye,minner:ye},minner:{mord:ye,mop:ye,mbin:Gr,mrel:$t,mopen:ye,mpunct:ye,minner:ye}},p3={mord:{mop:ye},mop:{mord:ye,mop:ye},mbin:{},mrel:{},mopen:{},mclose:{mop:ye},mpunct:{},minner:{mop:ye}},hm={},mo={},fo={};function q(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=e,s={type:t,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:a},l=0;l<r.length;++l)hm[r[l]]=s;t&&(i&&(mo[t]=i),o&&(fo[t]=o))}function sn(e){var{type:t,htmlBuilder:r,mathmlBuilder:n}=e;q({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:n})}var go=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ce=function(t){return t.type==="ordgroup"?t.body:[t]},sr=E.makeSpan,m3=["leftmost","mbin","mopen","mrel","mop","mpunct"],f3=["rightmost","mrel","mclose","mpunct"],g3={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT},y3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},De=function(t,r,n,a){a===void 0&&(a=[null,null]);for(var i=[],o=0;o<t.length;o++){var s=ne(t[o],r);if(s instanceof Ua){var l=s.children;i.push(...l)}else i.push(s)}if(E.tryCombineChars(i),!n)return i;var d=r;if(t.length===1){var p=t[0];p.type==="sizing"?d=r.havingSize(p.size):p.type==="styling"&&(d=r.havingStyle(g3[p.style]))}var f=sr([a[0]||"leftmost"],[],r),y=sr([a[1]||"rightmost"],[],r),x=n==="root";return Hu(i,(T,A)=>{var M=A.classes[0],b=T.classes[0];M==="mbin"&&f3.includes(b)?A.classes[0]="mord":b==="mbin"&&m3.includes(M)&&(T.classes[0]="mord")},{node:f},y,x),Hu(i,(T,A)=>{var M=Bl(A),b=Bl(T),v=M&&b?T.hasClass("mtight")?p3[M][b]:h3[M][b]:null;if(v)return E.makeGlue(v,d)},{node:f},y,x),i},Hu=function e(t,r,n,a,i){a&&t.push(a);for(var o=0;o<t.length;o++){var s=t[o],l=pm(s);if(l){e(l.children,r,n,null,i);continue}var d=!s.hasClass("mspace");if(d){var p=r(s,n.node);p&&(n.insertAfter?n.insertAfter(p):(t.unshift(p),o++))}d?n.node=s:i&&s.hasClass("newline")&&(n.node=sr(["leftmost"])),n.insertAfter=(f=>y=>{t.splice(f+1,0,y),o++})(o)}a&&t.pop()},pm=function(t){return t instanceof Ua||t instanceof G0||t instanceof Va&&t.hasClass("enclosing")?t:null},v3=function e(t,r){var n=pm(t);if(n){var a=n.children;if(a.length){if(r==="right")return e(a[a.length-1],"right");if(r==="left")return e(a[0],"left")}}return t},Bl=function(t,r){return t?(r&&(t=v3(t,r)),y3[t.classes[0]]||null):null},La=function(t,r){var n=["nulldelimiter"].concat(t.baseSizingClasses());return sr(r.concat(n))},ne=function(t,r,n){if(!t)return sr();if(mo[t.type]){var a=mo[t.type](t,r);if(n&&r.size!==n.size){a=sr(r.sizingClasses(n),[a],r);var i=r.sizeMultiplier/n.sizeMultiplier;a.height*=i,a.depth*=i}return a}else throw new j("Got group of unknown type: '"+t.type+"'")};function wi(e,t){var r=sr(["base"],e,t),n=sr(["strut"]);return n.style.height=F(r.height+r.depth),r.depth&&(n.style.verticalAlign=F(-r.depth)),r.children.unshift(n),r}function jl(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var n=De(e,t,"root"),a;n.length===2&&n[1].hasClass("tag")&&(a=n.pop());for(var i=[],o=[],s=0;s<n.length;s++)if(o.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var l=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,o.push(n[s]),n[s].hasClass("nobreak")&&(l=!0);l||(i.push(wi(o,t)),o=[])}else n[s].hasClass("newline")&&(o.pop(),o.length>0&&(i.push(wi(o,t)),o=[]),i.push(n[s]));o.length>0&&i.push(wi(o,t));var d;r?(d=wi(De(r,t,!0)),d.classes=["tag"],i.push(d)):a&&i.push(a);var p=sr(["katex-html"],i);if(p.setAttribute("aria-hidden","true"),d){var f=d.children[0];f.style.height=F(p.height+p.depth),p.depth&&(f.style.verticalAlign=F(-p.depth))}return p}function mm(e){return new Ua(e)}class at{constructor(t,r,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=n||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Ir(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Ot&&this.children[n+1]instanceof Ot){for(var a=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Ot;)a+=this.children[++n].toText();t.appendChild(new Ot(a).toNode())}else t.appendChild(this.children[n].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=ae.escape(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+ae.escape(Ir(this.classes))+'"'),t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class Ot{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return ae.escape(this.toText())}toText(){return this.text}}class b3{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",F(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+F(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var B={MathNode:at,TextNode:Ot,SpaceNode:b3,newDocumentFragment:mm},xt=function(t,r,n){return de[r][t]&&de[r][t].replace&&t.charCodeAt(0)!==55349&&!(sm.hasOwnProperty(t)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(t=de[r][t].replace),new B.TextNode(t)},V0=function(t){return t.length===1?t[0]:new B.MathNode("mrow",t)},$0=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var n=r.font;if(!n||n==="mathnormal")return null;var a=t.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathsfit")return"sans-serif-italic";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var i=t.text;if(["\\imath","\\jmath"].includes(i))return null;de[a][i]&&de[a][i].replace&&(i=de[a][i].replace);var o=E.fontMap[n].fontName;return W0(i,o,a)?E.fontMap[n].variant:null};function Ss(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof Ot&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof Ot&&r.text===","}else return!1}var tt=function(t,r,n){if(t.length===1){var a=le(t[0],r);return n&&a instanceof at&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var i=[],o,s=0;s<t.length;s++){var l=le(t[s],r);if(l instanceof at&&o instanceof at){if(l.type==="mtext"&&o.type==="mtext"&&l.getAttribute("mathvariant")===o.getAttribute("mathvariant")){o.children.push(...l.children);continue}else if(l.type==="mn"&&o.type==="mn"){o.children.push(...l.children);continue}else if(Ss(l)&&o.type==="mn"){o.children.push(...l.children);continue}else if(l.type==="mn"&&Ss(o))l.children=[...o.children,...l.children],i.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(o.type==="mn"||Ss(o))){var d=l.children[0];d instanceof at&&d.type==="mn"&&(d.children=[...o.children,...d.children],i.pop())}else if(o.type==="mi"&&o.children.length===1){var p=o.children[0];if(p instanceof Ot&&p.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var f=l.children[0];f instanceof Ot&&f.text.length>0&&(f.text=f.text.slice(0,1)+"̸"+f.text.slice(1),i.pop())}}}i.push(l),o=l}return i},Br=function(t,r,n){return V0(tt(t,r,n))},le=function(t,r){if(!t)return new B.MathNode("mrow");if(fo[t.type]){var n=fo[t.type](t,r);return n}else throw new j("Got group of unknown type: '"+t.type+"'")};function Wu(e,t,r,n,a){var i=tt(e,r),o;i.length===1&&i[0]instanceof at&&["mrow","mtable"].includes(i[0].type)?o=i[0]:o=new B.MathNode("mrow",i);var s=new B.MathNode("annotation",[new B.TextNode(t)]);s.setAttribute("encoding","application/x-tex");var l=new B.MathNode("semantics",[o,s]),d=new B.MathNode("math",[l]);d.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&d.setAttribute("display","block");var p=a?"katex":"katex-mathml";return E.makeSpan([p],[d])}var fm=function(t){return new Qt({style:t.displayMode?$.DISPLAY:$.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},gm=function(t,r){if(r.displayMode){var n=["katex-display"];r.leqno&&n.push("leqno"),r.fleqn&&n.push("fleqn"),t=E.makeSpan(n,[t])}return t},w3=function(t,r,n){var a=fm(n),i;if(n.output==="mathml")return Wu(t,r,a,n.displayMode,!0);if(n.output==="html"){var o=jl(t,a);i=E.makeSpan(["katex"],[o])}else{var s=Wu(t,r,a,n.displayMode,!1),l=jl(t,a);i=E.makeSpan(["katex"],[s,l])}return gm(i,n)},x3=function(t,r,n){var a=fm(n),i=jl(t,a),o=E.makeSpan(["katex"],[i]);return gm(o,n)},k3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},S3=function(t){var r=new B.MathNode("mo",[new B.TextNode(k3[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},A3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},T3=function(t){return t.type==="ordgroup"?t.body.length:1},C3=function(t,r){function n(){var s=4e5,l=t.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var d=t,p=T3(d.base),f,y,x;if(p>5)l==="widehat"||l==="widecheck"?(f=420,s=2364,x=.42,y=l+"4"):(f=312,s=2340,x=.34,y="tilde4");else{var T=[1,1,2,2,3,3][p];l==="widehat"||l==="widecheck"?(s=[0,1062,2364,2364,2364][T],f=[0,239,300,360,420][T],x=[0,.24,.3,.3,.36,.42][T],y=l+T):(s=[0,600,1033,2339,2340][T],f=[0,260,286,306,312][T],x=[0,.26,.286,.3,.306,.34][T],y="tilde"+T)}var A=new Rr(y),M=new or([A],{width:"100%",height:F(x),viewBox:"0 0 "+s+" "+f,preserveAspectRatio:"none"});return{span:E.makeSvgSpan([],[M],r),minWidth:0,height:x}}else{var b=[],v=A3[l],[w,N,P]=v,z=P/1e3,_=w.length,R,H;if(_===1){var G=v[3];R=["hide-tail"],H=[G]}else if(_===2)R=["halfarrow-left","halfarrow-right"],H=["xMinYMin","xMaxYMin"];else if(_===3)R=["brace-left","brace-center","brace-right"],H=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+_+" children.");for(var J=0;J<_;J++){var X=new Rr(w[J]),ce=new or([X],{width:"400em",height:F(z),viewBox:"0 0 "+s+" "+P,preserveAspectRatio:H[J]+" slice"}),me=E.makeSvgSpan([R[J]],[ce],r);if(_===1)return{span:me,minWidth:N,height:z};me.style.height=F(z),b.push(me)}return{span:E.makeSpan(["stretchy"],b,r),minWidth:N,height:z}}}var{span:a,minWidth:i,height:o}=n();return a.height=o,a.style.height=F(o),i>0&&(a.style.minWidth=F(i)),a},N3=function(t,r,n,a,i){var o,s=t.height+t.depth+n+a;if(/fbox|color|angl/.test(r)){if(o=E.makeSpan(["stretchy",r],[],i),r==="fbox"){var l=i.color&&i.getColor();l&&(o.style.borderColor=l)}}else{var d=[];/^[bx]cancel$/.test(r)&&d.push(new Il({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&d.push(new Il({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var p=new or(d,{width:"100%",height:F(s)});o=E.makeSvgSpan([],[p],i)}return o.height=s,o.style.height=F(s),o},lr={encloseSpan:N3,mathMLnode:S3,svgSpan:C3};function ee(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function Y0(e){var t=Lo(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function Lo(e){return e&&(e.type==="atom"||Xy.hasOwnProperty(e.type))?e:null}var K0=(e,t)=>{var r,n,a;e&&e.type==="supsub"?(n=ee(e.base,"accent"),r=n.base,e.base=r,a=Qy(ne(e,t)),e.base=n):(n=ee(e,"accent"),r=n.base);var i=ne(r,t.havingCrampedStyle()),o=n.isShifty&&ae.isCharacterBox(r),s=0;if(o){var l=ae.getBaseElem(r),d=ne(l,t.havingCrampedStyle());s=Bu(d).skew}var p=n.label==="\\c",f=p?i.height+i.depth:Math.min(i.height,t.fontMetrics().xHeight),y;if(n.isStretchy)y=lr.svgSpan(n,t),y=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:y,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+F(2*s)+")",marginLeft:F(2*s)}:void 0}]},t);else{var x,T;n.label==="\\vec"?(x=E.staticSvg("vec",t),T=E.svgData.vec[1]):(x=E.makeOrd({mode:n.mode,text:n.label},t,"textord"),x=Bu(x),x.italic=0,T=x.width,p&&(f+=x.depth)),y=E.makeSpan(["accent-body"],[x]);var A=n.label==="\\textcircled";A&&(y.classes.push("accent-full"),f=i.height);var M=s;A||(M-=T/2),y.style.left=F(M),n.label==="\\textcircled"&&(y.style.top=".2em"),y=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-f},{type:"elem",elem:y}]},t)}var b=E.makeSpan(["mord","accent"],[y],t);return a?(a.children[0]=b,a.height=Math.max(b.height,a.height),a.classes[0]="mord",a):b},ym=(e,t)=>{var r=e.isStretchy?lr.mathMLnode(e.label):new B.MathNode("mo",[xt(e.label,e.mode)]),n=new B.MathNode("mover",[le(e.base,t),r]);return n.setAttribute("accent","true"),n},M3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));q({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=go(t[0]),n=!M3.test(e.funcName),a=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:a,base:r}},htmlBuilder:K0,mathmlBuilder:ym});q({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:K0,mathmlBuilder:ym});q({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:a}},htmlBuilder:(e,t)=>{var r=ne(e.base,t),n=lr.svgSpan(e,t),a=e.label==="\\utilde"?.12:0,i=E.makeVList({positionType:"top",positionData:r.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]},t);return E.makeSpan(["mord","accentunder"],[i],t)},mathmlBuilder:(e,t)=>{var r=lr.mathMLnode(e.label),n=new B.MathNode("munder",[le(e.base,t),r]);return n.setAttribute("accentunder","true"),n}});var xi=e=>{var t=new B.MathNode("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};q({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n,funcName:a}=e;return{type:"xArrow",mode:n.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,n=t.havingStyle(r.sup()),a=E.wrapFragment(ne(e.body,n,t),t),i=e.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(i+"-arrow-pad");var o;e.below&&(n=t.havingStyle(r.sub()),o=E.wrapFragment(ne(e.below,n,t),t),o.classes.push(i+"-arrow-pad"));var s=lr.svgSpan(e,t),l=-t.fontMetrics().axisHeight+.5*s.height,d=-t.fontMetrics().axisHeight-.5*s.height-.111;(a.depth>.25||e.label==="\\xleftequilibrium")&&(d-=a.depth);var p;if(o){var f=-t.fontMetrics().axisHeight+o.height+.5*s.height+.111;p=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:s,shift:l},{type:"elem",elem:o,shift:f}]},t)}else p=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:d},{type:"elem",elem:s,shift:l}]},t);return p.children[0].children[0].children[1].classes.push("svg-align"),E.makeSpan(["mrel","x-arrow"],[p],t)},mathmlBuilder(e,t){var r=lr.mathMLnode(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var a=xi(le(e.body,t));if(e.below){var i=xi(le(e.below,t));n=new B.MathNode("munderover",[r,i,a])}else n=new B.MathNode("mover",[r,a])}else if(e.below){var o=xi(le(e.below,t));n=new B.MathNode("munder",[r,o])}else n=xi(),n=new B.MathNode("mover",[r,n]);return n}});var E3=E.makeSpan;function vm(e,t){var r=De(e.body,t,!0);return E3([e.mclass],r,t)}function bm(e,t){var r,n=tt(e.body,t);return e.mclass==="minner"?r=new B.MathNode("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(r=n[0],r.type="mi"):r=new B.MathNode("mi",n):(e.isCharacterBox?(r=n[0],r.type="mo"):r=new B.MathNode("mo",n),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}q({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.slice(5),body:Ce(a),isCharacterBox:ae.isCharacterBox(a)}},htmlBuilder:vm,mathmlBuilder:bm});var Fo=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};q({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:Fo(t[0]),body:Ce(t[1]),isCharacterBox:ae.isCharacterBox(t[1])}}});q({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:n}=e,a=t[1],i=t[0],o;n!=="\\stackrel"?o=Fo(a):o="mrel";var s={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Ce(a)},l={type:"supsub",mode:i.mode,base:s,sup:n==="\\underset"?null:i,sub:n==="\\underset"?i:null};return{type:"mclass",mode:r.mode,mclass:o,body:[l],isCharacterBox:ae.isCharacterBox(l)}},htmlBuilder:vm,mathmlBuilder:bm});q({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:Fo(t[0]),body:Ce(t[0])}},htmlBuilder(e,t){var r=De(e.body,t,!0),n=E.makeSpan([e.mclass],r,t);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,t){var r=tt(e.body,t),n=new B.MathNode("mstyle",r);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var P3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Gu=()=>({type:"styling",body:[],mode:"math",style:"display"}),Uu=e=>e.type==="textord"&&e.text==="@",D3=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function z3(e,t,r){var n=P3[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(n,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),i={type:"atom",text:n,mode:"math",family:"rel"},o=r.callFunction("\\Big",[i],[]),s=r.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[a,o,s]};return r.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var d={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[d],[])}default:return{type:"textord",text:" ",mode:"math"}}}function _3(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new j("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],a=[n],i=0;i<t.length;i++){for(var o=t[i],s=Gu(),l=0;l<o.length;l++)if(!Uu(o[l]))s.body.push(o[l]);else{n.push(s),l+=1;var d=Y0(o[l]).text,p=new Array(2);if(p[0]={type:"ordgroup",mode:"math",body:[]},p[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(d)>-1))if("<>AV".indexOf(d)>-1)for(var f=0;f<2;f++){for(var y=!0,x=l+1;x<o.length;x++){if(D3(o[x],d)){y=!1,l=x;break}if(Uu(o[x]))throw new j("Missing a "+d+" character to complete a CD arrow.",o[x]);p[f].body.push(o[x])}if(y)throw new j("Missing a "+d+" character to complete a CD arrow.",o[l])}else throw new j('Expected one of "<>AV=|." after @',o[l]);var T=z3(d,p,e),A={type:"styling",body:[T],mode:"math",style:"display"};n.push(A),s=Gu()}i%2===0?n.push(s):n.shift(),n=[],a.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var M=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:M,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}q({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"cdlabel",mode:r.mode,side:n.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),n=E.wrapFragment(ne(e.label,r,t),t);return n.classes.push("cd-label-"+e.side),n.style.bottom=F(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,t){var r=new B.MathNode("mrow",[le(e.label,t)]);return r=new B.MathNode("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new B.MathNode("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});q({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=E.wrapFragment(ne(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new B.MathNode("mrow",[le(e.fragment,t)])}});q({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,n=ee(t[0],"ordgroup"),a=n.body,i="",o=0;o<a.length;o++){var s=ee(a[o],"textord");i+=s.text}var l=parseInt(i),d;if(isNaN(l))throw new j("\\@char has non-numeric argument "+i);if(l<0||l>=1114111)throw new j("\\@char with invalid code point "+i);return l<=65535?d=String.fromCharCode(l):(l-=65536,d=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:r.mode,text:d}}});var wm=(e,t)=>{var r=De(e.body,t.withColor(e.color),!1);return E.makeFragment(r)},xm=(e,t)=>{var r=tt(e.body,t.withColor(e.color)),n=new B.MathNode("mstyle",r);return n.setAttribute("mathcolor",e.color),n};q({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,n=ee(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:n,body:Ce(a)}},htmlBuilder:wm,mathmlBuilder:xm});q({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:n}=e,a=ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var i=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:a,body:i}},htmlBuilder:wm,mathmlBuilder:xm});q({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:n}=e,a=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,i=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:i,size:a&&ee(a,"size").value}},htmlBuilder(e,t){var r=E.makeSpan(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=F(be(e.size,t)))),r},mathmlBuilder(e,t){var r=new B.MathNode("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",F(be(e.size,t)))),r}});var Ll={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},km=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new j("Expected a control sequence",e);return t},I3=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},Sm=(e,t,r,n)=>{var a=e.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,a,n)};q({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var n=t.fetch();if(Ll[n.text])return(r==="\\global"||r==="\\\\globallong")&&(n.text=Ll[n.text]),ee(t.parseFunction(),"internal");throw new j("Invalid token after macro prefix",n)}});q({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=t.gullet.popToken(),a=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new j("Expected a control sequence",n);for(var i=0,o,s=[[]];t.gullet.future().text!=="{";)if(n=t.gullet.popToken(),n.text==="#"){if(t.gullet.future().text==="{"){o=t.gullet.future(),s[i].push("{");break}if(n=t.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new j('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==i+1)throw new j('Argument number "'+n.text+'" out of order');i++,s.push([])}else{if(n.text==="EOF")throw new j("Expected a macro definition");s[i].push(n.text)}var{tokens:l}=t.gullet.consumeArg();return o&&l.unshift(o),(r==="\\edef"||r==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(a,{tokens:l,numArgs:i,delimiters:s},r===Ll[r]),{type:"internal",mode:t.mode}}});q({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=km(t.gullet.popToken());t.gullet.consumeSpaces();var a=I3(t);return Sm(t,n,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});q({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=km(t.gullet.popToken()),a=t.gullet.popToken(),i=t.gullet.popToken();return Sm(t,n,i,r==="\\\\globalfuture"),t.gullet.pushToken(i),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var sa=function(t,r,n){var a=de.math[t]&&de.math[t].replace,i=W0(a||t,r,n);if(!i)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return i},Q0=function(t,r,n,a){var i=n.havingBaseStyle(r),o=E.makeSpan(a.concat(i.sizingClasses(n)),[t],n),s=i.sizeMultiplier/n.sizeMultiplier;return o.height*=s,o.depth*=s,o.maxFontSize=i.sizeMultiplier,o},Am=function(t,r,n){var a=r.havingBaseStyle(n),i=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=F(i),t.height-=i,t.depth+=i},R3=function(t,r,n,a,i,o){var s=E.makeSymbol(t,"Main-Regular",i,a),l=Q0(s,r,a,o);return n&&Am(l,a,r),l},B3=function(t,r,n,a){return E.makeSymbol(t,"Size"+r+"-Regular",n,a)},Tm=function(t,r,n,a,i,o){var s=B3(t,r,i,a),l=Q0(E.makeSpan(["delimsizing","size"+r],[s],a),$.TEXT,a,o);return n&&Am(l,a,$.TEXT),l},As=function(t,r,n){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var i=E.makeSpan(["delimsizinginner",a],[E.makeSpan([],[E.makeSymbol(t,r,n)])]);return{type:"elem",elem:i}},Ts=function(t,r,n){var a=qt["Size4-Regular"][t.charCodeAt(0)]?qt["Size4-Regular"][t.charCodeAt(0)][4]:qt["Size1-Regular"][t.charCodeAt(0)][4],i=new Rr("inner",Oy(t,Math.round(1e3*r))),o=new or([i],{width:F(a),height:F(r),style:"width:"+F(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),s=E.makeSvgSpan([],[o],n);return s.height=r,s.style.height=F(r),s.style.width=F(a),{type:"elem",elem:s}},Fl=.008,ki={type:"kern",size:-1*Fl},j3=["|","\\lvert","\\rvert","\\vert"],L3=["\\|","\\lVert","\\rVert","\\Vert"],Cm=function(t,r,n,a,i,o){var s,l,d,p,f="",y=0;s=d=p=t,l=null;var x="Size1-Regular";t==="\\uparrow"?d=p="⏐":t==="\\Uparrow"?d=p="‖":t==="\\downarrow"?s=d="⏐":t==="\\Downarrow"?s=d="‖":t==="\\updownarrow"?(s="\\uparrow",d="⏐",p="\\downarrow"):t==="\\Updownarrow"?(s="\\Uparrow",d="‖",p="\\Downarrow"):j3.includes(t)?(d="∣",f="vert",y=333):L3.includes(t)?(d="∥",f="doublevert",y=556):t==="["||t==="\\lbrack"?(s="⎡",d="⎢",p="⎣",x="Size4-Regular",f="lbrack",y=667):t==="]"||t==="\\rbrack"?(s="⎤",d="⎥",p="⎦",x="Size4-Regular",f="rbrack",y=667):t==="\\lfloor"||t==="⌊"?(d=s="⎢",p="⎣",x="Size4-Regular",f="lfloor",y=667):t==="\\lceil"||t==="⌈"?(s="⎡",d=p="⎢",x="Size4-Regular",f="lceil",y=667):t==="\\rfloor"||t==="⌋"?(d=s="⎥",p="⎦",x="Size4-Regular",f="rfloor",y=667):t==="\\rceil"||t==="⌉"?(s="⎤",d=p="⎥",x="Size4-Regular",f="rceil",y=667):t==="("||t==="\\lparen"?(s="⎛",d="⎜",p="⎝",x="Size4-Regular",f="lparen",y=875):t===")"||t==="\\rparen"?(s="⎞",d="⎟",p="⎠",x="Size4-Regular",f="rparen",y=875):t==="\\{"||t==="\\lbrace"?(s="⎧",l="⎨",p="⎩",d="⎪",x="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(s="⎫",l="⎬",p="⎭",d="⎪",x="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(s="⎧",p="⎩",d="⎪",x="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(s="⎫",p="⎭",d="⎪",x="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(s="⎧",p="⎭",d="⎪",x="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(s="⎫",p="⎩",d="⎪",x="Size4-Regular");var T=sa(s,x,i),A=T.height+T.depth,M=sa(d,x,i),b=M.height+M.depth,v=sa(p,x,i),w=v.height+v.depth,N=0,P=1;if(l!==null){var z=sa(l,x,i);N=z.height+z.depth,P=2}var _=A+w+N,R=Math.max(0,Math.ceil((r-_)/(P*b))),H=_+R*P*b,G=a.fontMetrics().axisHeight;n&&(G*=a.sizeMultiplier);var J=H/2-G,X=[];if(f.length>0){var ce=H-A-w,me=Math.round(H*1e3),rt=Hy(f,Math.round(ce*1e3)),ht=new Rr(f,rt),zt=(y/1e3).toFixed(3)+"em",O=(me/1e3).toFixed(3)+"em",Q=new or([ht],{width:zt,height:O,viewBox:"0 0 "+y+" "+me}),K=E.makeSvgSpan([],[Q],a);K.height=me/1e3,K.style.width=zt,K.style.height=O,X.push({type:"elem",elem:K})}else{if(X.push(As(p,x,i)),X.push(ki),l===null){var oe=H-A-w+2*Fl;X.push(Ts(d,oe,a))}else{var ie=(H-A-w-N)/2+2*Fl;X.push(Ts(d,ie,a)),X.push(ki),X.push(As(l,x,i)),X.push(ki),X.push(Ts(d,ie,a))}X.push(ki),X.push(As(s,x,i))}var _t=a.havingBaseStyle($.TEXT),kt=E.makeVList({positionType:"bottom",positionData:J,children:X},_t);return Q0(E.makeSpan(["delimsizing","mult"],[kt],_t),$.TEXT,a,o)},Cs=80,Ns=.08,Ms=function(t,r,n,a,i){var o=qy(t,a,n),s=new Rr(t,o),l=new or([s],{width:"400em",height:F(r),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return E.makeSvgSpan(["hide-tail"],[l],i)},F3=function(t,r){var n=r.havingBaseSizing(),a=Pm("\\surd",t*n.sizeMultiplier,Em,n),i=n.sizeMultiplier,o=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),s,l=0,d=0,p=0,f;return a.type==="small"?(p=1e3+1e3*o+Cs,t<1?i=1:t<1.4&&(i=.7),l=(1+o+Ns)/i,d=(1+o)/i,s=Ms("sqrtMain",l,p,o,r),s.style.minWidth="0.853em",f=.833/i):a.type==="large"?(p=(1e3+Cs)*ya[a.size],d=(ya[a.size]+o)/i,l=(ya[a.size]+o+Ns)/i,s=Ms("sqrtSize"+a.size,l,p,o,r),s.style.minWidth="1.02em",f=1/i):(l=t+o+Ns,d=t+o,p=Math.floor(1e3*t+o)+Cs,s=Ms("sqrtTall",l,p,o,r),s.style.minWidth="0.742em",f=1.056),s.height=d,s.style.height=F(l),{span:s,advanceWidth:f,ruleWidth:(r.fontMetrics().sqrtRuleThickness+o)*i}},Nm=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],q3=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],Mm=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],ya=[0,1.2,1.8,2.4,3],O3=function(t,r,n,a,i){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Nm.includes(t)||Mm.includes(t))return Tm(t,r,!1,n,a,i);if(q3.includes(t))return Cm(t,ya[r],!1,n,a,i);throw new j("Illegal delimiter: '"+t+"'")},H3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],W3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"stack"}],Em=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],G3=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Pm=function(t,r,n,a){for(var i=Math.min(2,3-a.style.size),o=i;o<n.length&&n[o].type!=="stack";o++){var s=sa(t,G3(n[o]),"math"),l=s.height+s.depth;if(n[o].type==="small"){var d=a.havingBaseStyle(n[o].style);l*=d.sizeMultiplier}if(l>r)return n[o]}return n[n.length-1]},Dm=function(t,r,n,a,i,o){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var s;Mm.includes(t)?s=H3:Nm.includes(t)?s=Em:s=W3;var l=Pm(t,r,s,a);return l.type==="small"?R3(t,l.style,n,a,i,o):l.type==="large"?Tm(t,l.size,n,a,i,o):Cm(t,r,n,a,i,o)},U3=function(t,r,n,a,i,o){var s=a.fontMetrics().axisHeight*a.sizeMultiplier,l=901,d=5/a.fontMetrics().ptPerEm,p=Math.max(r-s,n+s),f=Math.max(p/500*l,2*p-d);return Dm(t,f,!0,a,i,o)},tr={sqrtImage:F3,sizedDelim:O3,sizeToMaxHeight:ya,customSizedDelim:Dm,leftRightDelim:U3},Vu={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},V3=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function qo(e,t){var r=Lo(e);if(r&&V3.includes(r.text))return r;throw r?new j("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new j("Invalid delimiter type '"+e.type+"'",e)}q({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=qo(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Vu[e.funcName].size,mclass:Vu[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?E.makeSpan([e.mclass]):tr.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(xt(e.delim,e.mode));var r=new B.MathNode("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var n=F(tr.sizeToMaxHeight[e.size]);return r.setAttribute("minsize",n),r.setAttribute("maxsize",n),r}});function $u(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}q({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new j("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:qo(t[0],e).text,color:r}}});q({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=qo(t[0],e),n=e.parser;++n.leftrightDepth;var a=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var i=ee(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:a,left:r.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,t)=>{$u(e);for(var r=De(e.body,t,!0,["mopen","mclose"]),n=0,a=0,i=!1,o=0;o<r.length;o++)r[o].isMiddle?i=!0:(n=Math.max(r[o].height,n),a=Math.max(r[o].depth,a));n*=t.sizeMultiplier,a*=t.sizeMultiplier;var s;if(e.left==="."?s=La(t,["mopen"]):s=tr.leftRightDelim(e.left,n,a,t,e.mode,["mopen"]),r.unshift(s),i)for(var l=1;l<r.length;l++){var d=r[l],p=d.isMiddle;p&&(r[l]=tr.leftRightDelim(p.delim,n,a,p.options,e.mode,[]))}var f;if(e.right===".")f=La(t,["mclose"]);else{var y=e.rightColor?t.withColor(e.rightColor):t;f=tr.leftRightDelim(e.right,n,a,y,e.mode,["mclose"])}return r.push(f),E.makeSpan(["minner"],r,t)},mathmlBuilder:(e,t)=>{$u(e);var r=tt(e.body,t);if(e.left!=="."){var n=new B.MathNode("mo",[xt(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if(e.right!=="."){var a=new B.MathNode("mo",[xt(e.right,e.mode)]);a.setAttribute("fence","true"),e.rightColor&&a.setAttribute("mathcolor",e.rightColor),r.push(a)}return V0(r)}});q({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=qo(t[0],e);if(!e.parser.leftrightDepth)throw new j("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;if(e.delim===".")r=La(t,[]);else{r=tr.sizedDelim(e.delim,1,t,e.mode,[]);var n={delim:e.delim,options:t};r.isMiddle=n}return r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?xt("|","text"):xt(e.delim,e.mode),n=new B.MathNode("mo",[r]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var J0=(e,t)=>{var r=E.wrapFragment(ne(e.body,t),t),n=e.label.slice(1),a=t.sizeMultiplier,i,o=0,s=ae.isCharacterBox(e.body);if(n==="sout")i=E.makeSpan(["stretchy","sout"]),i.height=t.fontMetrics().defaultRuleThickness/a,o=-.5*t.fontMetrics().xHeight;else if(n==="phase"){var l=be({number:.6,unit:"pt"},t),d=be({number:.35,unit:"ex"},t),p=t.havingBaseSizing();a=a/p.sizeMultiplier;var f=r.height+r.depth+l+d;r.style.paddingLeft=F(f/2+l);var y=Math.floor(1e3*f*a),x=Ly(y),T=new or([new Rr("phase",x)],{width:"400em",height:F(y/1e3),viewBox:"0 0 400000 "+y,preserveAspectRatio:"xMinYMin slice"});i=E.makeSvgSpan(["hide-tail"],[T],t),i.style.height=F(f),o=r.depth+l+d}else{/cancel/.test(n)?s||r.classes.push("cancel-pad"):n==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var A=0,M=0,b=0;/box/.test(n)?(b=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),A=t.fontMetrics().fboxsep+(n==="colorbox"?0:b),M=A):n==="angl"?(b=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),A=4*b,M=Math.max(0,.25-r.depth)):(A=s?.2:0,M=A),i=lr.encloseSpan(r,n,A,M,t),/fbox|boxed|fcolorbox/.test(n)?(i.style.borderStyle="solid",i.style.borderWidth=F(b)):n==="angl"&&b!==.049&&(i.style.borderTopWidth=F(b),i.style.borderRightWidth=F(b)),o=r.depth+M,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var v;if(e.backgroundColor)v=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:o},{type:"elem",elem:r,shift:0}]},t);else{var w=/cancel|phase/.test(n)?["svg-align"]:[];v=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:i,shift:o,wrapperClasses:w}]},t)}return/cancel/.test(n)&&(v.height=r.height,v.depth=r.depth),/cancel/.test(n)&&!s?E.makeSpan(["mord","cancel-lap"],[v],t):E.makeSpan(["mord"],[v],t)},X0=(e,t)=>{var r=0,n=new B.MathNode(e.label.indexOf("colorbox")>-1?"mpadded":"menclose",[le(e.body,t)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*r+"pt"),n.setAttribute("height","+"+2*r+"pt"),n.setAttribute("lspace",r+"pt"),n.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);n.setAttribute("style","border: "+a+"em solid "+String(e.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};q({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,o=t[1];return{type:"enclose",mode:n.mode,label:a,backgroundColor:i,body:o}},htmlBuilder:J0,mathmlBuilder:X0});q({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,i=ee(t[0],"color-token").color,o=ee(t[1],"color-token").color,s=t[2];return{type:"enclose",mode:n.mode,label:a,backgroundColor:o,borderColor:i,body:s}},htmlBuilder:J0,mathmlBuilder:X0});q({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});q({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"enclose",mode:r.mode,label:n,body:a}},htmlBuilder:J0,mathmlBuilder:X0});q({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var zm={};function Gt(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:i,mathmlBuilder:o}=e,s={type:t,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},l=0;l<r.length;++l)zm[r[l]]=s;i&&(mo[t]=i),o&&(fo[t]=o)}var _m={};function g(e,t){_m[e]=t}function Yu(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var Oo=e=>{var t=e.parser.settings;if(!t.displayMode)throw new j("{"+e.envName+"} can be used only in display mode.")};function Z0(e){if(e.indexOf("ed")===-1)return e.indexOf("*")===-1}function Hr(e,t,r){var{hskipBeforeAndAfter:n,addJot:a,cols:i,arraystretch:o,colSeparationType:s,autoTag:l,singleRow:d,emptySingleRow:p,maxNumCols:f,leqno:y}=t;if(e.gullet.beginGroup(),d||e.gullet.macros.set("\\cr","\\\\\\relax"),!o){var x=e.gullet.expandMacroAsText("\\arraystretch");if(x==null)o=1;else if(o=parseFloat(x),!o||o<0)throw new j("Invalid \\arraystretch: "+x)}e.gullet.beginGroup();var T=[],A=[T],M=[],b=[],v=l!=null?[]:void 0;function w(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function N(){v&&(e.gullet.macros.get("\\df@tag")?(v.push(e.subparse([new st("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):v.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),b.push(Yu(e));;){var P=e.parseExpression(!1,d?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),P={type:"ordgroup",mode:e.mode,body:P},r&&(P={type:"styling",mode:e.mode,style:r,body:[P]}),T.push(P);var z=e.fetch().text;if(z==="&"){if(f&&T.length===f){if(d||s)throw new j("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(z==="\\end"){N(),T.length===1&&P.type==="styling"&&P.body[0].body.length===0&&(A.length>1||!p)&&A.pop(),b.length<A.length+1&&b.push([]);break}else if(z==="\\\\"){e.consume();var _=void 0;e.gullet.future().text!==" "&&(_=e.parseSizeGroup(!0)),M.push(_?_.value:null),N(),b.push(Yu(e)),T=[],A.push(T),w()}else throw new j("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:a,arraystretch:o,body:A,cols:i,rowGaps:M,hskipBeforeAndAfter:n,hLinesBeforeRow:b,colSeparationType:s,tags:v,leqno:y}}function ec(e){return e.slice(0,1)==="d"?"display":"text"}var Ut=function(t,r){var n,a,i=t.body.length,o=t.hLinesBeforeRow,s=0,l=new Array(i),d=[],p=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),f=1/r.fontMetrics().ptPerEm,y=5*f;if(t.colSeparationType&&t.colSeparationType==="small"){var x=r.havingStyle($.SCRIPT).sizeMultiplier;y=.2778*(x/r.sizeMultiplier)}var T=t.colSeparationType==="CD"?be({number:3,unit:"ex"},r):12*f,A=3*f,M=t.arraystretch*T,b=.7*M,v=.3*M,w=0;function N(Qa){for(var Ja=0;Ja<Qa.length;++Ja)Ja>0&&(w+=.25),d.push({pos:w,isDashed:Qa[Ja]})}for(N(o[0]),n=0;n<t.body.length;++n){var P=t.body[n],z=b,_=v;s<P.length&&(s=P.length);var R=new Array(P.length);for(a=0;a<P.length;++a){var H=ne(P[a],r);_<H.depth&&(_=H.depth),z<H.height&&(z=H.height),R[a]=H}var G=t.rowGaps[n],J=0;G&&(J=be(G,r),J>0&&(J+=v,_<J&&(_=J),J=0)),t.addJot&&(_+=A),R.height=z,R.depth=_,w+=z,R.pos=w,w+=_+J,l[n]=R,N(o[n+1])}var X=w/2+r.fontMetrics().axisHeight,ce=t.cols||[],me=[],rt,ht,zt=[];if(t.tags&&t.tags.some(Qa=>Qa))for(n=0;n<i;++n){var O=l[n],Q=O.pos-X,K=t.tags[n],oe=void 0;K===!0?oe=E.makeSpan(["eqn-num"],[],r):K===!1?oe=E.makeSpan([],[],r):oe=E.makeSpan([],De(K,r,!0),r),oe.depth=O.depth,oe.height=O.height,zt.push({type:"elem",elem:oe,shift:Q})}for(a=0,ht=0;a<s||ht<ce.length;++a,++ht){for(var ie=ce[ht]||{},_t=!0;ie.type==="separator";){if(_t||(rt=E.makeSpan(["arraycolsep"],[]),rt.style.width=F(r.fontMetrics().doubleRuleSep),me.push(rt)),ie.separator==="|"||ie.separator===":"){var kt=ie.separator==="|"?"solid":"dashed",It=E.makeSpan(["vertical-separator"],[],r);It.style.height=F(w),It.style.borderRightWidth=F(p),It.style.borderRightStyle=kt,It.style.margin="0 "+F(-p/2);var Rt=w-X;Rt&&(It.style.verticalAlign=F(-Rt)),me.push(It)}else throw new j("Invalid separator type: "+ie.separator);ht++,ie=ce[ht]||{},_t=!1}if(!(a>=s)){var St=void 0;(a>0||t.hskipBeforeAndAfter)&&(St=ae.deflt(ie.pregap,y),St!==0&&(rt=E.makeSpan(["arraycolsep"],[]),rt.style.width=F(St),me.push(rt)));var ln=[];for(n=0;n<i;++n){var Ya=l[n],Ka=Ya[a];if(Ka){var ef=Ya.pos-X;Ka.depth=Ya.depth,Ka.height=Ya.height,ln.push({type:"elem",elem:Ka,shift:ef})}}ln=E.makeVList({positionType:"individualShift",children:ln},r),ln=E.makeSpan(["col-align-"+(ie.align||"c")],[ln]),me.push(ln),(a<s-1||t.hskipBeforeAndAfter)&&(St=ae.deflt(ie.postgap,y),St!==0&&(rt=E.makeSpan(["arraycolsep"],[]),rt.style.width=F(St),me.push(rt)))}}if(l=E.makeSpan(["mtable"],me),d.length>0){for(var tf=E.makeLineSpan("hline",r,p),rf=E.makeLineSpan("hdashline",r,p),Wo=[{type:"elem",elem:l,shift:0}];d.length>0;){var sc=d.pop(),lc=sc.pos-X;sc.isDashed?Wo.push({type:"elem",elem:rf,shift:lc}):Wo.push({type:"elem",elem:tf,shift:lc})}l=E.makeVList({positionType:"individualShift",children:Wo},r)}if(zt.length===0)return E.makeSpan(["mord"],[l],r);var Go=E.makeVList({positionType:"individualShift",children:zt},r);return Go=E.makeSpan(["tag"],[Go],r),E.makeFragment([l,Go])},$3={c:"center ",l:"left ",r:"right "},Vt=function(t,r){for(var n=[],a=new B.MathNode("mtd",[],["mtr-glue"]),i=new B.MathNode("mtd",[],["mml-eqn-num"]),o=0;o<t.body.length;o++){for(var s=t.body[o],l=[],d=0;d<s.length;d++)l.push(new B.MathNode("mtd",[le(s[d],r)]));t.tags&&t.tags[o]&&(l.unshift(a),l.push(a),t.leqno?l.unshift(i):l.push(i)),n.push(new B.MathNode("mtr",l))}var p=new B.MathNode("mtable",n),f=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);p.setAttribute("rowspacing",F(f));var y="",x="";if(t.cols&&t.cols.length>0){var T=t.cols,A="",M=!1,b=0,v=T.length;T[0].type==="separator"&&(y+="top ",b=1),T[T.length-1].type==="separator"&&(y+="bottom ",v-=1);for(var w=b;w<v;w++)T[w].type==="align"?(x+=$3[T[w].align],M&&(A+="none "),M=!0):T[w].type==="separator"&&M&&(A+=T[w].separator==="|"?"solid ":"dashed ",M=!1);p.setAttribute("columnalign",x.trim()),/[sd]/.test(A)&&p.setAttribute("columnlines",A.trim())}if(t.colSeparationType==="align"){for(var N=t.cols||[],P="",z=1;z<N.length;z++)P+=z%2?"0em ":"1em ";p.setAttribute("columnspacing",P.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?p.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?p.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?p.setAttribute("columnspacing","0.5em"):p.setAttribute("columnspacing","1em");var _="",R=t.hLinesBeforeRow;y+=R[0].length>0?"left ":"",y+=R[R.length-1].length>0?"right ":"";for(var H=1;H<R.length-1;H++)_+=R[H].length===0?"none ":R[H][0]?"dashed ":"solid ";return/[sd]/.test(_)&&p.setAttribute("rowlines",_.trim()),y!==""&&(p=new B.MathNode("menclose",[p]),p.setAttribute("notation",y.trim())),t.arraystretch&&t.arraystretch<1&&(p=new B.MathNode("mstyle",[p]),p.setAttribute("scriptlevel","1")),p},Im=function(t,r){t.envName.indexOf("ed")===-1&&Oo(t);var n=[],a=t.envName.indexOf("at")>-1?"alignat":"align",i=t.envName==="split",o=Hr(t.parser,{cols:n,addJot:!0,autoTag:i?void 0:Z0(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),s,l=0,d={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var p="",f=0;f<r[0].body.length;f++){var y=ee(r[0].body[f],"textord");p+=y.text}s=Number(p),l=s*2}var x=!l;o.body.forEach(function(b){for(var v=1;v<b.length;v+=2){var w=ee(b[v],"styling"),N=ee(w.body[0],"ordgroup");N.body.unshift(d)}if(x)l<b.length&&(l=b.length);else{var P=b.length/2;if(s<P)throw new j("Too many math in a row: "+("expected "+s+", but got "+P),b[0])}});for(var T=0;T<l;++T){var A="r",M=0;T%2===1?A="l":T>0&&x&&(M=1),n[T]={type:"align",align:A,pregap:M,postgap:0}}return o.colSeparationType=x?"align":"alignat",o};Gt({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=Lo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(o){var s=Y0(o),l=s.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new j("Unknown column alignment: "+l,o)}),i={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Hr(e.parser,i,ec(e.envName))},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var a=e.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,"lcr".indexOf(r)===-1)throw new j("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),n.cols=[{type:"align",align:r}]}}var i=Hr(e.parser,n,ec(e.envName)),o=Math.max(0,...i.body.map(s=>s.length));return i.cols=new Array(o).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[i],left:t[0],right:t[1],rightColor:void 0}:i},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=Hr(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=Lo(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(o){var s=Y0(o),l=s.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new j("Unknown column alignment: "+l,o)});if(a.length>1)throw new j("{subarray} can contain only one column");var i={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(i=Hr(e.parser,i,"script"),i.body.length>0&&i.body[0].length>1)throw new j("{subarray} can contain only one column");return i},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Hr(e.parser,t,ec(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.indexOf("r")>-1?".":"\\{",right:e.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Im,htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){["gather","gather*"].includes(e.envName)&&Oo(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Z0(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Hr(e.parser,t,"display")},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Im,htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){Oo(e);var t={autoTag:Z0(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Hr(e.parser,t,"display")},htmlBuilder:Ut,mathmlBuilder:Vt});Gt({type:"array",names:["CD"],props:{numArgs:0},handler(e){return Oo(e),_3(e.parser)},htmlBuilder:Ut,mathmlBuilder:Vt});g("\\nonumber","\\gdef\\@eqnsw{0}");g("\\notag","\\nonumber");q({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new j(e.funcName+" valid only within array environment")}});var Ku=zm;q({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];if(a.type!=="ordgroup")throw new j("Invalid environment name",a);for(var i="",o=0;o<a.body.length;++o)i+=ee(a.body[o],"textord").text;if(n==="\\begin"){if(!Ku.hasOwnProperty(i))throw new j("No such environment: "+i,a);var s=Ku[i],{args:l,optArgs:d}=r.parseArguments("\\begin{"+i+"}",s),p={mode:r.mode,envName:i,parser:r},f=s.handler(p,l,d);r.expect("\\end",!1);var y=r.nextToken,x=ee(r.parseFunction(),"environment");if(x.name!==i)throw new j("Mismatch: \\begin{"+i+"} matched by \\end{"+x.name+"}",y);return f}return{type:"environment",mode:r.mode,name:i,nameGroup:a}}});var Rm=(e,t)=>{var r=e.font,n=t.withFont(r);return ne(e.body,n)},Bm=(e,t)=>{var r=e.font,n=t.withFont(r);return le(e.body,n)},Qu={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};q({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=go(t[0]),i=n;return i in Qu&&(i=Qu[i]),{type:"font",mode:r.mode,font:i.slice(1),body:a}},htmlBuilder:Rm,mathmlBuilder:Bm});q({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,n=t[0],a=ae.isCharacterBox(n);return{type:"mclass",mode:r.mode,mclass:Fo(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}],isCharacterBox:a}}});q({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,breakOnTokenText:a}=e,{mode:i}=r,o=r.parseExpression(!0,a),s="math"+n.slice(1);return{type:"font",mode:i,font:s,body:{type:"ordgroup",mode:r.mode,body:o}}},htmlBuilder:Rm,mathmlBuilder:Bm});var jm=(e,t)=>{var r=t;return e==="display"?r=r.id>=$.SCRIPT.id?r.text():$.DISPLAY:e==="text"&&r.size===$.DISPLAY.size?r=$.TEXT:e==="script"?r=$.SCRIPT:e==="scriptscript"&&(r=$.SCRIPTSCRIPT),r},tc=(e,t)=>{var r=jm(e.size,t.style),n=r.fracNum(),a=r.fracDen(),i;i=t.havingStyle(n);var o=ne(e.numer,i,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;o.height=o.height<s?s:o.height,o.depth=o.depth<l?l:o.depth}i=t.havingStyle(a);var d=ne(e.denom,i,t),p,f,y;e.hasBarLine?(e.barSize?(f=be(e.barSize,t),p=E.makeLineSpan("frac-line",t,f)):p=E.makeLineSpan("frac-line",t),f=p.height,y=p.height):(p=null,f=0,y=t.fontMetrics().defaultRuleThickness);var x,T,A;r.size===$.DISPLAY.size||e.size==="display"?(x=t.fontMetrics().num1,f>0?T=3*y:T=7*y,A=t.fontMetrics().denom1):(f>0?(x=t.fontMetrics().num2,T=y):(x=t.fontMetrics().num3,T=3*y),A=t.fontMetrics().denom2);var M;if(p){var v=t.fontMetrics().axisHeight;x-o.depth-(v+.5*f)<T&&(x+=T-(x-o.depth-(v+.5*f))),v-.5*f-(d.height-A)<T&&(A+=T-(v-.5*f-(d.height-A)));var w=-(v-.5*f);M=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:d,shift:A},{type:"elem",elem:p,shift:w},{type:"elem",elem:o,shift:-x}]},t)}else{var b=x-o.depth-(d.height-A);b<T&&(x+=.5*(T-b),A+=.5*(T-b)),M=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:d,shift:A},{type:"elem",elem:o,shift:-x}]},t)}i=t.havingStyle(r),M.height*=i.sizeMultiplier/t.sizeMultiplier,M.depth*=i.sizeMultiplier/t.sizeMultiplier;var N;r.size===$.DISPLAY.size?N=t.fontMetrics().delim1:r.size===$.SCRIPTSCRIPT.size?N=t.havingStyle($.SCRIPT).fontMetrics().delim2:N=t.fontMetrics().delim2;var P,z;return e.leftDelim==null?P=La(t,["mopen"]):P=tr.customSizedDelim(e.leftDelim,N,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?z=E.makeSpan([]):e.rightDelim==null?z=La(t,["mclose"]):z=tr.customSizedDelim(e.rightDelim,N,!0,t.havingStyle(r),e.mode,["mclose"]),E.makeSpan(["mord"].concat(i.sizingClasses(t)),[P,E.makeSpan(["mfrac"],[M]),z],t)},rc=(e,t)=>{var r=new B.MathNode("mfrac",[le(e.numer,t),le(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var n=be(e.barSize,t);r.setAttribute("linethickness",F(n))}var a=jm(e.size,t.style);if(a.size!==t.style.size){r=new B.MathNode("mstyle",[r]);var i=a.size===$.DISPLAY.size?"true":"false";r.setAttribute("displaystyle",i),r.setAttribute("scriptlevel","0")}if(e.leftDelim!=null||e.rightDelim!=null){var o=[];if(e.leftDelim!=null){var s=new B.MathNode("mo",[new B.TextNode(e.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),o.push(s)}if(o.push(r),e.rightDelim!=null){var l=new B.MathNode("mo",[new B.TextNode(e.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),o.push(l)}return V0(o)}return r};q({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=t[1],o,s=null,l=null,d="auto";switch(n){case"\\dfrac":case"\\frac":case"\\tfrac":o=!0;break;case"\\\\atopfrac":o=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":o=!1,s="(",l=")";break;case"\\\\bracefrac":o=!1,s="\\{",l="\\}";break;case"\\\\brackfrac":o=!1,s="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\dfrac":case"\\dbinom":d="display";break;case"\\tfrac":case"\\tbinom":d="text";break}return{type:"genfrac",mode:r.mode,continued:!1,numer:a,denom:i,hasBarLine:o,leftDelim:s,rightDelim:l,size:d,barSize:null}},htmlBuilder:tc,mathmlBuilder:rc});q({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=t[1];return{type:"genfrac",mode:r.mode,continued:!0,numer:a,denom:i,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});q({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:n}=e,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:n}}});var Ju=["display","text","script","scriptscript"],Xu=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};q({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,n=t[4],a=t[5],i=go(t[0]),o=i.type==="atom"&&i.family==="open"?Xu(i.text):null,s=go(t[1]),l=s.type==="atom"&&s.family==="close"?Xu(s.text):null,d=ee(t[2],"size"),p,f=null;d.isBlank?p=!0:(f=d.value,p=f.number>0);var y="auto",x=t[3];if(x.type==="ordgroup"){if(x.body.length>0){var T=ee(x.body[0],"textord");y=Ju[Number(T.text)]}}else x=ee(x,"textord"),y=Ju[Number(x.text)];return{type:"genfrac",mode:r.mode,numer:n,denom:a,continued:!1,hasBarLine:p,barSize:f,leftDelim:o,rightDelim:l,size:y}},htmlBuilder:tc,mathmlBuilder:rc});q({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:n,token:a}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ee(t[0],"size").value,token:a}}});q({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],i=Sy(ee(t[1],"infix").size),o=t[2],s=i.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:o,continued:!1,hasBarLine:s,barSize:i,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:tc,mathmlBuilder:rc});var Lm=(e,t)=>{var r=t.style,n,a;e.type==="supsub"?(n=e.sup?ne(e.sup,t.havingStyle(r.sup()),t):ne(e.sub,t.havingStyle(r.sub()),t),a=ee(e.base,"horizBrace")):a=ee(e,"horizBrace");var i=ne(a.base,t.havingBaseStyle($.DISPLAY)),o=lr.svgSpan(a,t),s;if(a.isOver?(s=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:o}]},t),s.children[0].children[0].children[1].classes.push("svg-align")):(s=E.makeVList({positionType:"bottom",positionData:i.depth+.1+o.height,children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:i}]},t),s.children[0].children[0].children[0].classes.push("svg-align")),n){var l=E.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t);a.isOver?s=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]},t):s=E.makeVList({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]},t)}return E.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t)},Y3=(e,t)=>{var r=lr.mathMLnode(e.label);return new B.MathNode(e.isOver?"mover":"munder",[le(e.base,t),r])};q({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"horizBrace",mode:r.mode,label:n,isOver:/^\\over/.test(n),base:t[0]}},htmlBuilder:Lm,mathmlBuilder:Y3});q({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[1],a=ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:Ce(n)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=De(e.body,t,!1);return E.makeAnchor(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=Br(e.body,t);return r instanceof at||(r=new at("mrow",[r])),r.setAttribute("href",e.href),r}});q({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:n}))return r.formatUnsupportedCmd("\\url");for(var a=[],i=0;i<n.length;i++){var o=n[i];o==="~"&&(o="\\textasciitilde"),a.push({type:"textord",mode:"text",text:o})}var s={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:n,body:Ce(s)}}});q({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Ce(t[0])}},htmlBuilder(e,t){var r=De(e.body,t,!1);return E.makeFragment(r)},mathmlBuilder(e,t){return new B.MathNode("mrow",tt(e.body,t))}});q({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,token:a}=e,i=ee(t[0],"raw").string,o=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var s,l={};switch(n){case"\\htmlClass":l.class=i,s={command:"\\htmlClass",class:i};break;case"\\htmlId":l.id=i,s={command:"\\htmlId",id:i};break;case"\\htmlStyle":l.style=i,s={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var d=i.split(","),p=0;p<d.length;p++){var f=d[p],y=f.indexOf("=");if(y<0)throw new j("\\htmlData key/value '"+f+"' missing equals sign");var x=f.slice(0,y),T=f.slice(y+1);l["data-"+x.trim()]=T}s={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(s)?{type:"html",mode:r.mode,attributes:l,body:Ce(o)}:r.formatUnsupportedCmd(n)},htmlBuilder:(e,t)=>{var r=De(e.body,t,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var a=E.makeSpan(n,r,t);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&a.setAttribute(i,e.attributes[i]);return a},mathmlBuilder:(e,t)=>Br(e.body,t)});q({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Ce(t[0]),mathml:Ce(t[1])}},htmlBuilder:(e,t)=>{var r=De(e.html,t,!1);return E.makeFragment(r)},mathmlBuilder:(e,t)=>Br(e.mathml,t)});var Es=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new j("Invalid size: '"+t+"' in \\includegraphics");var n={number:+(r[1]+r[2]),unit:r[3]};if(!nm(n))throw new j("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};q({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:n}=e,a={number:0,unit:"em"},i={number:.9,unit:"em"},o={number:0,unit:"em"},s="";if(r[0])for(var l=ee(r[0],"raw").string,d=l.split(","),p=0;p<d.length;p++){var f=d[p].split("=");if(f.length===2){var y=f[1].trim();switch(f[0].trim()){case"alt":s=y;break;case"width":a=Es(y);break;case"height":i=Es(y);break;case"totalheight":o=Es(y);break;default:throw new j("Invalid key: '"+f[0]+"' in \\includegraphics.")}}}var x=ee(t[0],"url").url;return s===""&&(s=x,s=s.replace(/^.*[\\/]/,""),s=s.substring(0,s.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:x})?{type:"includegraphics",mode:n.mode,alt:s,width:a,height:i,totalheight:o,src:x}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=be(e.height,t),n=0;e.totalheight.number>0&&(n=be(e.totalheight,t)-r);var a=0;e.width.number>0&&(a=be(e.width,t));var i={height:F(r+n)};a>0&&(i.width=F(a)),n>0&&(i.verticalAlign=F(-n));var o=new Yy(e.src,e.alt,i);return o.height=r,o.depth=n,o},mathmlBuilder:(e,t)=>{var r=new B.MathNode("mglyph",[]);r.setAttribute("alt",e.alt);var n=be(e.height,t),a=0;if(e.totalheight.number>0&&(a=be(e.totalheight,t)-n,r.setAttribute("valign",F(-a))),r.setAttribute("height",F(n+a)),e.width.number>0){var i=be(e.width,t);r.setAttribute("width",F(i))}return r.setAttribute("src",e.src),r}});q({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=ee(t[0],"size");if(r.settings.strict){var i=n[1]==="m",o=a.value.unit==="mu";i?(o||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):o&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(e,t){return E.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var r=be(e.dimension,t);return new B.SpaceNode(r)}});q({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:a}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=E.makeSpan([],[ne(e.body,t)]),r=E.makeSpan(["inner"],[r],t)):r=E.makeSpan(["inner"],[ne(e.body,t)]);var n=E.makeSpan(["fix"],[]),a=E.makeSpan([e.alignment],[r,n],t),i=E.makeSpan(["strut"]);return i.style.height=F(a.height+a.depth),a.depth&&(i.style.verticalAlign=F(-a.depth)),a.children.unshift(i),a=E.makeSpan(["thinbox"],[a],t),E.makeSpan(["mord","vbox"],[a],t)},mathmlBuilder:(e,t)=>{var r=new B.MathNode("mpadded",[le(e.body,t)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}});q({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:n}=e,a=n.mode;n.switchMode("math");var i=r==="\\("?"\\)":"$",o=n.parseExpression(!1,i);return n.expect(i),n.switchMode(a),{type:"styling",mode:n.mode,style:"text",body:o}}});q({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new j("Mismatched "+e.funcName)}});var Zu=(e,t)=>{switch(t.style.size){case $.DISPLAY.size:return e.display;case $.TEXT.size:return e.text;case $.SCRIPT.size:return e.script;case $.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};q({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Ce(t[0]),text:Ce(t[1]),script:Ce(t[2]),scriptscript:Ce(t[3])}},htmlBuilder:(e,t)=>{var r=Zu(e,t),n=De(r,t,!1);return E.makeFragment(n)},mathmlBuilder:(e,t)=>{var r=Zu(e,t);return Br(r,t)}});var Fm=(e,t,r,n,a,i,o)=>{e=E.makeSpan([],[e]);var s=r&&ae.isCharacterBox(r),l,d;if(t){var p=ne(t,n.havingStyle(a.sup()),n);d={elem:p,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-p.depth)}}if(r){var f=ne(r,n.havingStyle(a.sub()),n);l={elem:f,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-f.height)}}var y;if(d&&l){var x=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+o;y=E.makeVList({positionType:"bottom",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:F(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:F(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else if(l){var T=e.height-o;y=E.makeVList({positionType:"top",positionData:T,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:F(-i)},{type:"kern",size:l.kern},{type:"elem",elem:e}]},n)}else if(d){var A=e.depth+o;y=E.makeVList({positionType:"bottom",positionData:A,children:[{type:"elem",elem:e},{type:"kern",size:d.kern},{type:"elem",elem:d.elem,marginLeft:F(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else return e;var M=[y];if(l&&i!==0&&!s){var b=E.makeSpan(["mspace"],[],n);b.style.marginRight=F(i),M.unshift(b)}return E.makeSpan(["mop","op-limits"],M,n)},qm=["\\smallint"],$n=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"op"),a=!0):i=ee(e,"op");var o=t.style,s=!1;o.size===$.DISPLAY.size&&i.symbol&&!qm.includes(i.name)&&(s=!0);var l;if(i.symbol){var d=s?"Size2-Regular":"Size1-Regular",p="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(p=i.name.slice(1),i.name=p==="oiint"?"\\iint":"\\iiint"),l=E.makeSymbol(i.name,d,"math",t,["mop","op-symbol",s?"large-op":"small-op"]),p.length>0){var f=l.italic,y=E.staticSvg(p+"Size"+(s?"2":"1"),t);l=E.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:y,shift:s?.08:0}]},t),i.name="\\"+p,l.classes.unshift("mop"),l.italic=f}}else if(i.body){var x=De(i.body,t,!0);x.length===1&&x[0]instanceof wt?(l=x[0],l.classes[0]="mop"):l=E.makeSpan(["mop"],x,t)}else{for(var T=[],A=1;A<i.name.length;A++)T.push(E.mathsym(i.name[A],i.mode,t));l=E.makeSpan(["mop"],T,t)}var M=0,b=0;return(l instanceof wt||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift&&(M=(l.height-l.depth)/2-t.fontMetrics().axisHeight,b=l.italic),a?Fm(l,r,n,t,o,b,M):(M&&(l.style.position="relative",l.style.top=F(M)),l)},$a=(e,t)=>{var r;if(e.symbol)r=new at("mo",[xt(e.name,e.mode)]),qm.includes(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new at("mo",tt(e.body,t));else{r=new at("mi",[new Ot(e.name.slice(1))]);var n=new at("mo",[xt("⁡","text")]);e.parentIsSupSub?r=new at("mrow",[r,n]):r=mm([r,n])}return r},K3={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};q({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=n;return a.length===1&&(a=K3[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:$n,mathmlBuilder:$a});q({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ce(n)}},htmlBuilder:$n,mathmlBuilder:$a});var Q3={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};q({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});q({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});q({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,n=r;return n.length===1&&(n=Q3[n]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:$n,mathmlBuilder:$a});var Om=(e,t)=>{var r,n,a=!1,i;e.type==="supsub"?(r=e.sup,n=e.sub,i=ee(e.base,"operatorname"),a=!0):i=ee(e,"operatorname");var o;if(i.body.length>0){for(var s=i.body.map(f=>{var y=f.text;return typeof y=="string"?{type:"textord",mode:f.mode,text:y}:f}),l=De(s,t.withFont("mathrm"),!0),d=0;d<l.length;d++){var p=l[d];p instanceof wt&&(p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}o=E.makeSpan(["mop"],l,t)}else o=E.makeSpan(["mop"],[],t);return a?Fm(o,r,n,t,t.style,0,0):o},J3=(e,t)=>{for(var r=tt(e.body,t.withFont("mathrm")),n=!0,a=0;a<r.length;a++){var i=r[a];if(!(i instanceof B.SpaceNode))if(i instanceof B.MathNode)switch(i.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var o=i.children[0];i.children.length===1&&o instanceof B.TextNode?o.text=o.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var s=r.map(p=>p.toText()).join("");r=[new B.TextNode(s)]}var l=new B.MathNode("mi",r);l.setAttribute("mathvariant","normal");var d=new B.MathNode("mo",[xt("⁡","text")]);return e.parentIsSupSub?new B.MathNode("mrow",[l,d]):B.newDocumentFragment([l,d])};q({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"operatorname",mode:r.mode,body:Ce(a),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Om,mathmlBuilder:J3});g("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");sn({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?E.makeFragment(De(e.body,t,!1)):E.makeSpan(["mord"],De(e.body,t,!0),t)},mathmlBuilder(e,t){return Br(e.body,t,!0)}});q({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle()),n=E.makeLineSpan("overline-line",t),a=t.fontMetrics().defaultRuleThickness,i=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:n},{type:"kern",size:a}]},t);return E.makeSpan(["mord","overline"],[i],t)},mathmlBuilder(e,t){var r=new B.MathNode("mo",[new B.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new B.MathNode("mover",[le(e.body,t),r]);return n.setAttribute("accent","true"),n}});q({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"phantom",mode:r.mode,body:Ce(n)}},htmlBuilder:(e,t)=>{var r=De(e.body,t.withPhantom(),!1);return E.makeFragment(r)},mathmlBuilder:(e,t)=>{var r=tt(e.body,t);return new B.MathNode("mphantom",r)}});q({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"hphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=E.makeSpan([],[ne(e.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var n=0;n<r.children.length;n++)r.children[n].height=0,r.children[n].depth=0;return r=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t),E.makeSpan(["mord"],[r],t)},mathmlBuilder:(e,t)=>{var r=tt(Ce(e.body),t),n=new B.MathNode("mphantom",r),a=new B.MathNode("mpadded",[n]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});q({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=E.makeSpan(["inner"],[ne(e.body,t.withPhantom())]),n=E.makeSpan(["fix"],[]);return E.makeSpan(["mord","rlap"],[r,n],t)},mathmlBuilder:(e,t)=>{var r=tt(Ce(e.body),t),n=new B.MathNode("mphantom",r),a=new B.MathNode("mpadded",[n]);return a.setAttribute("width","0px"),a}});q({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,n=ee(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:a}},htmlBuilder(e,t){var r=ne(e.body,t),n=be(e.dy,t);return E.makeVList({positionType:"shift",positionData:-n,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){var r=new B.MathNode("mpadded",[le(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}});q({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});q({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:n}=e,a=r[0],i=ee(t[0],"size"),o=ee(t[1],"size");return{type:"rule",mode:n.mode,shift:a&&ee(a,"size").value,width:i.value,height:o.value}},htmlBuilder(e,t){var r=E.makeSpan(["mord","rule"],[],t),n=be(e.width,t),a=be(e.height,t),i=e.shift?be(e.shift,t):0;return r.style.borderRightWidth=F(n),r.style.borderTopWidth=F(a),r.style.bottom=F(i),r.width=n,r.height=a+i,r.depth=-i,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=be(e.width,t),n=be(e.height,t),a=e.shift?be(e.shift,t):0,i=t.color&&t.getColor()||"black",o=new B.MathNode("mspace");o.setAttribute("mathbackground",i),o.setAttribute("width",F(r)),o.setAttribute("height",F(n));var s=new B.MathNode("mpadded",[o]);return a>=0?s.setAttribute("height",F(a)):(s.setAttribute("height",F(a)),s.setAttribute("depth",F(-a))),s.setAttribute("voffset",F(a)),s}});function Hm(e,t,r){for(var n=De(e,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,i=0;i<n.length;i++){var o=n[i].classes.indexOf("sizing");o<0?Array.prototype.push.apply(n[i].classes,t.sizingClasses(r)):n[i].classes[o+1]==="reset-size"+t.size&&(n[i].classes[o+1]="reset-size"+r.size),n[i].height*=a,n[i].depth*=a}return E.makeFragment(n)}var ed=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],X3=(e,t)=>{var r=t.havingSize(e.size);return Hm(e.body,r,t)};q({type:"sizing",names:ed,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:ed.indexOf(n)+1,body:i}},htmlBuilder:X3,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),n=tt(e.body,r),a=new B.MathNode("mstyle",n);return a.setAttribute("mathsize",F(r.sizeMultiplier)),a}});q({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:n}=e,a=!1,i=!1,o=r[0]&&ee(r[0],"ordgroup");if(o)for(var s="",l=0;l<o.body.length;++l){var d=o.body[l];if(s=d.text,s==="t")a=!0;else if(s==="b")i=!0;else{a=!1,i=!1;break}}else a=!0,i=!0;var p=t[0];return{type:"smash",mode:n.mode,body:p,smashHeight:a,smashDepth:i}},htmlBuilder:(e,t)=>{var r=E.makeSpan([],[ne(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0,r.children))for(var n=0;n<r.children.length;n++)r.children[n].height=0;if(e.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var i=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t);return E.makeSpan(["mord"],[i],t)},mathmlBuilder:(e,t)=>{var r=new B.MathNode("mpadded",[le(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});q({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n}=e,a=r[0],i=t[0];return{type:"sqrt",mode:n.mode,body:i,index:a}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=E.wrapFragment(r,t);var n=t.fontMetrics(),a=n.defaultRuleThickness,i=a;t.style.id<$.TEXT.id&&(i=t.fontMetrics().xHeight);var o=a+i/4,s=r.height+r.depth+o+a,{span:l,ruleWidth:d,advanceWidth:p}=tr.sqrtImage(s,t),f=l.height-d;f>r.height+r.depth+o&&(o=(o+f-r.height-r.depth)/2);var y=l.height-r.height-o-d;r.style.paddingLeft=F(p);var x=E.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+y)},{type:"elem",elem:l},{type:"kern",size:d}]},t);if(e.index){var T=t.havingStyle($.SCRIPTSCRIPT),A=ne(e.index,T,t),M=.6*(x.height-x.depth),b=E.makeVList({positionType:"shift",positionData:-M,children:[{type:"elem",elem:A}]},t),v=E.makeSpan(["root"],[b]);return E.makeSpan(["mord","sqrt"],[v,x],t)}else return E.makeSpan(["mord","sqrt"],[x],t)},mathmlBuilder(e,t){var{body:r,index:n}=e;return n?new B.MathNode("mroot",[le(r,t),le(n,t)]):new B.MathNode("msqrt",[le(r,t)])}});var td={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT};q({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:n,parser:a}=e,i=a.parseExpression(!0,r),o=n.slice(1,n.length-5);return{type:"styling",mode:a.mode,style:o,body:i}},htmlBuilder(e,t){var r=td[e.style],n=t.havingStyle(r).withFont("");return Hm(e.body,n,t)},mathmlBuilder(e,t){var r=td[e.style],n=t.havingStyle(r),a=tt(e.body,n),i=new B.MathNode("mstyle",a),o={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},s=o[e.style];return i.setAttribute("scriptlevel",s[0]),i.setAttribute("displaystyle",s[1]),i}});var Z3=function(t,r){var n=t.base;if(n)if(n.type==="op"){var a=n.limits&&(r.style.size===$.DISPLAY.size||n.alwaysHandleSupSub);return a?$n:null}else if(n.type==="operatorname"){var i=n.alwaysHandleSupSub&&(r.style.size===$.DISPLAY.size||n.limits);return i?Om:null}else{if(n.type==="accent")return ae.isCharacterBox(n.base)?K0:null;if(n.type==="horizBrace"){var o=!t.sub;return o===n.isOver?Lm:null}else return null}else return null};sn({type:"supsub",htmlBuilder(e,t){var r=Z3(e,t);if(r)return r(e,t);var{base:n,sup:a,sub:i}=e,o=ne(n,t),s,l,d=t.fontMetrics(),p=0,f=0,y=n&&ae.isCharacterBox(n);if(a){var x=t.havingStyle(t.style.sup());s=ne(a,x,t),y||(p=o.height-x.fontMetrics().supDrop*x.sizeMultiplier/t.sizeMultiplier)}if(i){var T=t.havingStyle(t.style.sub());l=ne(i,T,t),y||(f=o.depth+T.fontMetrics().subDrop*T.sizeMultiplier/t.sizeMultiplier)}var A;t.style===$.DISPLAY?A=d.sup1:t.style.cramped?A=d.sup3:A=d.sup2;var M=t.sizeMultiplier,b=F(.5/d.ptPerEm/M),v=null;if(l){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(o instanceof wt||w)&&(v=F(-o.italic))}var N;if(s&&l){p=Math.max(p,A,s.depth+.25*d.xHeight),f=Math.max(f,d.sub2);var P=d.defaultRuleThickness,z=4*P;if(p-s.depth-(l.height-f)<z){f=z-(p-s.depth)+l.height;var _=.8*d.xHeight-(p-s.depth);_>0&&(p+=_,f-=_)}var R=[{type:"elem",elem:l,shift:f,marginRight:b,marginLeft:v},{type:"elem",elem:s,shift:-p,marginRight:b}];N=E.makeVList({positionType:"individualShift",children:R},t)}else if(l){f=Math.max(f,d.sub1,l.height-.8*d.xHeight);var H=[{type:"elem",elem:l,marginLeft:v,marginRight:b}];N=E.makeVList({positionType:"shift",positionData:f,children:H},t)}else if(s)p=Math.max(p,A,s.depth+.25*d.xHeight),N=E.makeVList({positionType:"shift",positionData:-p,children:[{type:"elem",elem:s,marginRight:b}]},t);else throw new Error("supsub must have either sup or sub.");var G=Bl(o,"right")||"mord";return E.makeSpan([G],[o,E.makeSpan(["msupsub"],[N])],t)},mathmlBuilder(e,t){var r=!1,n,a;e.base&&e.base.type==="horizBrace"&&(a=!!e.sup,a===e.base.isOver&&(r=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[le(e.base,t)];e.sub&&i.push(le(e.sub,t)),e.sup&&i.push(le(e.sup,t));var o;if(r)o=n?"mover":"munder";else if(e.sub)if(e.sup){var d=e.base;d&&d.type==="op"&&d.limits&&t.style===$.DISPLAY||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(t.style===$.DISPLAY||d.limits)?o="munderover":o="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===$.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===$.DISPLAY)?o="munder":o="msub"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(t.style===$.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||t.style===$.DISPLAY)?o="mover":o="msup"}return new B.MathNode(o,i)}});sn({type:"atom",htmlBuilder(e,t){return E.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new B.MathNode("mo",[xt(e.text,e.mode)]);if(e.family==="bin"){var n=$0(e,t);n==="bold-italic"&&r.setAttribute("mathvariant",n)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Wm={mi:"italic",mn:"normal",mtext:"normal"};sn({type:"mathord",htmlBuilder(e,t){return E.makeOrd(e,t,"mathord")},mathmlBuilder(e,t){var r=new B.MathNode("mi",[xt(e.text,e.mode,t)]),n=$0(e,t)||"italic";return n!==Wm[r.type]&&r.setAttribute("mathvariant",n),r}});sn({type:"textord",htmlBuilder(e,t){return E.makeOrd(e,t,"textord")},mathmlBuilder(e,t){var r=xt(e.text,e.mode,t),n=$0(e,t)||"normal",a;return e.mode==="text"?a=new B.MathNode("mtext",[r]):/[0-9]/.test(e.text)?a=new B.MathNode("mn",[r]):e.text==="\\prime"?a=new B.MathNode("mo",[r]):a=new B.MathNode("mi",[r]),n!==Wm[a.type]&&a.setAttribute("mathvariant",n),a}});var Ps={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Ds={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};sn({type:"spacing",htmlBuilder(e,t){if(Ds.hasOwnProperty(e.text)){var r=Ds[e.text].className||"";if(e.mode==="text"){var n=E.makeOrd(e,t,"textord");return n.classes.push(r),n}else return E.makeSpan(["mspace",r],[E.mathsym(e.text,e.mode,t)],t)}else{if(Ps.hasOwnProperty(e.text))return E.makeSpan(["mspace",Ps[e.text]],[],t);throw new j('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(Ds.hasOwnProperty(e.text))r=new B.MathNode("mtext",[new B.TextNode(" ")]);else{if(Ps.hasOwnProperty(e.text))return new B.MathNode("mspace");throw new j('Unknown type of space "'+e.text+'"')}return r}});var rd=()=>{var e=new B.MathNode("mtd",[]);return e.setAttribute("width","50%"),e};sn({type:"tag",mathmlBuilder(e,t){var r=new B.MathNode("mtable",[new B.MathNode("mtr",[rd(),new B.MathNode("mtd",[Br(e.body,t)]),rd(),new B.MathNode("mtd",[Br(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var nd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},ad={"\\textbf":"textbf","\\textmd":"textmd"},ev={"\\textit":"textit","\\textup":"textup"},id=(e,t)=>{var r=e.font;if(r){if(nd[r])return t.withTextFontFamily(nd[r]);if(ad[r])return t.withTextFontWeight(ad[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(ev[r])};q({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"text",mode:r.mode,body:Ce(a),font:n}},htmlBuilder(e,t){var r=id(e,t),n=De(e.body,r,!0);return E.makeSpan(["mord","text"],n,r)},mathmlBuilder(e,t){var r=id(e,t);return Br(e.body,r)}});q({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=E.makeLineSpan("underline-line",t),a=t.fontMetrics().defaultRuleThickness,i=E.makeVList({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:r}]},t);return E.makeSpan(["mord","underline"],[i],t)},mathmlBuilder(e,t){var r=new B.MathNode("mo",[new B.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new B.MathNode("munder",[le(e.body,t),r]);return n.setAttribute("accentunder","true"),n}});q({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=t.fontMetrics().axisHeight,a=.5*(r.height-n-(r.depth+n));return E.makeVList({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){return new B.MathNode("mpadded",[le(e.body,t)],["vcenter"])}});q({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new j("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=od(e),n=[],a=t.havingStyle(t.style.text()),i=0;i<r.length;i++){var o=r[i];o==="~"&&(o="\\textasciitilde"),n.push(E.makeSymbol(o,"Typewriter-Regular",e.mode,a,["mord","texttt"]))}return E.makeSpan(["mord","text"].concat(a.sizingClasses(t)),E.tryCombineChars(n),a)},mathmlBuilder(e,t){var r=new B.TextNode(od(e)),n=new B.MathNode("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var od=e=>e.body.replace(/ /g,e.star?"␣":" "),kr=hm,Gm=`[ \r
	]`,tv="\\\\[a-zA-Z@]+",rv="\\\\[^\uD800-\uDFFF]",nv="("+tv+")"+Gm+"*",av=`\\\\(
|[ \r	]+
?)[ \r	]*`,ql="[̀-ͯ]",iv=new RegExp(ql+"+$"),ov="("+Gm+"+)|"+(av+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(ql+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(ql+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+nv)+("|"+rv+")");class sd{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(ov,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new st("EOF",new Ke(this,r,r));var n=this.tokenRegex.exec(t);if(n===null||n.index!==r)throw new j("Unexpected character: '"+t[r]+"'",new st(t[r],new Ke(this,r,r+1)));var a=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[a]===14){var i=t.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new st(a,new Ke(this,r,this.tokenRegex.lastIndex))}}class sv{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new j("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,n){if(n===void 0&&(n=!1),n){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(t)&&(i[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var lv=_m;g("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});g("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});g("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});g("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});g("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});g("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");g("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var ld={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};g("\\char",function(e){var t=e.popToken(),r,n="";if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")n=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new j("\\char` missing argument");n=t.text.charCodeAt(0)}else r=10;if(r){if(n=ld[t.text],n==null||n>=r)throw new j("Invalid base-"+r+" digit "+t.text);for(var a;(a=ld[e.future().text])!=null&&a<r;)n*=r,n+=a,e.popToken()}return"\\@char{"+n+"}"});var nc=(e,t,r,n)=>{var a=e.consumeArg().tokens;if(a.length!==1)throw new j("\\newcommand's first argument must be a macro name");var i=a[0].text,o=e.isDefined(i);if(o&&!t)throw new j("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!o&&!r)throw new j("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var s=0;if(a=e.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var l="",d=e.expandNextToken();d.text!=="]"&&d.text!=="EOF";)l+=d.text,d=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new j("Invalid number of arguments: "+l);s=parseInt(l),a=e.consumeArg().tokens}return o&&n||e.macros.set(i,{tokens:a,numArgs:s}),""};g("\\newcommand",e=>nc(e,!1,!0,!1));g("\\renewcommand",e=>nc(e,!0,!1,!1));g("\\providecommand",e=>nc(e,!0,!0,!0));g("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});g("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});g("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),kr[r],de.math[r],de.text[r]),""});g("\\bgroup","{");g("\\egroup","}");g("~","\\nobreakspace");g("\\lq","`");g("\\rq","'");g("\\aa","\\r a");g("\\AA","\\r A");g("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");g("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");g("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");g("ℬ","\\mathscr{B}");g("ℰ","\\mathscr{E}");g("ℱ","\\mathscr{F}");g("ℋ","\\mathscr{H}");g("ℐ","\\mathscr{I}");g("ℒ","\\mathscr{L}");g("ℳ","\\mathscr{M}");g("ℛ","\\mathscr{R}");g("ℭ","\\mathfrak{C}");g("ℌ","\\mathfrak{H}");g("ℨ","\\mathfrak{Z}");g("\\Bbbk","\\Bbb{k}");g("·","\\cdotp");g("\\llap","\\mathllap{\\textrm{#1}}");g("\\rlap","\\mathrlap{\\textrm{#1}}");g("\\clap","\\mathclap{\\textrm{#1}}");g("\\mathstrut","\\vphantom{(}");g("\\underbar","\\underline{\\text{#1}}");g("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');g("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");g("\\ne","\\neq");g("≠","\\neq");g("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");g("∉","\\notin");g("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");g("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");g("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");g("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");g("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");g("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");g("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");g("⟂","\\perp");g("‼","\\mathclose{!\\mkern-0.8mu!}");g("∌","\\notni");g("⌜","\\ulcorner");g("⌝","\\urcorner");g("⌞","\\llcorner");g("⌟","\\lrcorner");g("©","\\copyright");g("®","\\textregistered");g("️","\\textregistered");g("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');g("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');g("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');g("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');g("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");g("⋮","\\vdots");g("\\varGamma","\\mathit{\\Gamma}");g("\\varDelta","\\mathit{\\Delta}");g("\\varTheta","\\mathit{\\Theta}");g("\\varLambda","\\mathit{\\Lambda}");g("\\varXi","\\mathit{\\Xi}");g("\\varPi","\\mathit{\\Pi}");g("\\varSigma","\\mathit{\\Sigma}");g("\\varUpsilon","\\mathit{\\Upsilon}");g("\\varPhi","\\mathit{\\Phi}");g("\\varPsi","\\mathit{\\Psi}");g("\\varOmega","\\mathit{\\Omega}");g("\\substack","\\begin{subarray}{c}#1\\end{subarray}");g("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");g("\\boxed","\\fbox{$\\displaystyle{#1}$}");g("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");g("\\implies","\\DOTSB\\;\\Longrightarrow\\;");g("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");g("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");g("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var cd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};g("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in cd?t=cd[r]:(r.slice(0,4)==="\\not"||r in de.math&&["bin","rel"].includes(de.math[r].group))&&(t="\\dotsb"),t});var ac={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};g("\\dotso",function(e){var t=e.future().text;return t in ac?"\\ldots\\,":"\\ldots"});g("\\dotsc",function(e){var t=e.future().text;return t in ac&&t!==","?"\\ldots\\,":"\\ldots"});g("\\cdots",function(e){var t=e.future().text;return t in ac?"\\@cdots\\,":"\\@cdots"});g("\\dotsb","\\cdots");g("\\dotsm","\\cdots");g("\\dotsi","\\!\\cdots");g("\\dotsx","\\ldots\\,");g("\\DOTSI","\\relax");g("\\DOTSB","\\relax");g("\\DOTSX","\\relax");g("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");g("\\,","\\tmspace+{3mu}{.1667em}");g("\\thinspace","\\,");g("\\>","\\mskip{4mu}");g("\\:","\\tmspace+{4mu}{.2222em}");g("\\medspace","\\:");g("\\;","\\tmspace+{5mu}{.2777em}");g("\\thickspace","\\;");g("\\!","\\tmspace-{3mu}{.1667em}");g("\\negthinspace","\\!");g("\\negmedspace","\\tmspace-{4mu}{.2222em}");g("\\negthickspace","\\tmspace-{5mu}{.277em}");g("\\enspace","\\kern.5em ");g("\\enskip","\\hskip.5em\\relax");g("\\quad","\\hskip1em\\relax");g("\\qquad","\\hskip2em\\relax");g("\\tag","\\@ifstar\\tag@literal\\tag@paren");g("\\tag@paren","\\tag@literal{({#1})}");g("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new j("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});g("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");g("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");g("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");g("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");g("\\newline","\\\\\\relax");g("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Um=F(qt["Main-Regular"][84][1]-.7*qt["Main-Regular"][65][1]);g("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Um+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");g("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Um+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");g("\\hspace","\\@ifstar\\@hspacer\\@hspace");g("\\@hspace","\\hskip #1\\relax");g("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");g("\\ordinarycolon",":");g("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");g("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');g("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');g("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');g("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');g("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');g("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');g("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');g("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');g("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');g("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');g("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');g("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');g("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');g("∷","\\dblcolon");g("∹","\\eqcolon");g("≔","\\coloneqq");g("≕","\\eqqcolon");g("⩴","\\Coloneqq");g("\\ratio","\\vcentcolon");g("\\coloncolon","\\dblcolon");g("\\colonequals","\\coloneqq");g("\\coloncolonequals","\\Coloneqq");g("\\equalscolon","\\eqqcolon");g("\\equalscoloncolon","\\Eqqcolon");g("\\colonminus","\\coloneq");g("\\coloncolonminus","\\Coloneq");g("\\minuscolon","\\eqcolon");g("\\minuscoloncolon","\\Eqcolon");g("\\coloncolonapprox","\\Colonapprox");g("\\coloncolonsim","\\Colonsim");g("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");g("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");g("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");g("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");g("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");g("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");g("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");g("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");g("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");g("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");g("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");g("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");g("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");g("\\nleqq","\\html@mathml{\\@nleqq}{≰}");g("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");g("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");g("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");g("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");g("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");g("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");g("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");g("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");g("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");g("\\imath","\\html@mathml{\\@imath}{ı}");g("\\jmath","\\html@mathml{\\@jmath}{ȷ}");g("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");g("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");g("⟦","\\llbracket");g("⟧","\\rrbracket");g("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");g("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");g("⦃","\\lBrace");g("⦄","\\rBrace");g("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");g("⦵","\\minuso");g("\\darr","\\downarrow");g("\\dArr","\\Downarrow");g("\\Darr","\\Downarrow");g("\\lang","\\langle");g("\\rang","\\rangle");g("\\uarr","\\uparrow");g("\\uArr","\\Uparrow");g("\\Uarr","\\Uparrow");g("\\N","\\mathbb{N}");g("\\R","\\mathbb{R}");g("\\Z","\\mathbb{Z}");g("\\alef","\\aleph");g("\\alefsym","\\aleph");g("\\Alpha","\\mathrm{A}");g("\\Beta","\\mathrm{B}");g("\\bull","\\bullet");g("\\Chi","\\mathrm{X}");g("\\clubs","\\clubsuit");g("\\cnums","\\mathbb{C}");g("\\Complex","\\mathbb{C}");g("\\Dagger","\\ddagger");g("\\diamonds","\\diamondsuit");g("\\empty","\\emptyset");g("\\Epsilon","\\mathrm{E}");g("\\Eta","\\mathrm{H}");g("\\exist","\\exists");g("\\harr","\\leftrightarrow");g("\\hArr","\\Leftrightarrow");g("\\Harr","\\Leftrightarrow");g("\\hearts","\\heartsuit");g("\\image","\\Im");g("\\infin","\\infty");g("\\Iota","\\mathrm{I}");g("\\isin","\\in");g("\\Kappa","\\mathrm{K}");g("\\larr","\\leftarrow");g("\\lArr","\\Leftarrow");g("\\Larr","\\Leftarrow");g("\\lrarr","\\leftrightarrow");g("\\lrArr","\\Leftrightarrow");g("\\Lrarr","\\Leftrightarrow");g("\\Mu","\\mathrm{M}");g("\\natnums","\\mathbb{N}");g("\\Nu","\\mathrm{N}");g("\\Omicron","\\mathrm{O}");g("\\plusmn","\\pm");g("\\rarr","\\rightarrow");g("\\rArr","\\Rightarrow");g("\\Rarr","\\Rightarrow");g("\\real","\\Re");g("\\reals","\\mathbb{R}");g("\\Reals","\\mathbb{R}");g("\\Rho","\\mathrm{P}");g("\\sdot","\\cdot");g("\\sect","\\S");g("\\spades","\\spadesuit");g("\\sub","\\subset");g("\\sube","\\subseteq");g("\\supe","\\supseteq");g("\\Tau","\\mathrm{T}");g("\\thetasym","\\vartheta");g("\\weierp","\\wp");g("\\Zeta","\\mathrm{Z}");g("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");g("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");g("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");g("\\bra","\\mathinner{\\langle{#1}|}");g("\\ket","\\mathinner{|{#1}\\rangle}");g("\\braket","\\mathinner{\\langle{#1}\\rangle}");g("\\Bra","\\left\\langle#1\\right|");g("\\Ket","\\left|#1\\right\\rangle");var Vm=e=>t=>{var r=t.consumeArg().tokens,n=t.consumeArg().tokens,a=t.consumeArg().tokens,i=t.consumeArg().tokens,o=t.macros.get("|"),s=t.macros.get("\\|");t.macros.beginGroup();var l=f=>y=>{e&&(y.macros.set("|",o),a.length&&y.macros.set("\\|",s));var x=f;if(!f&&a.length){var T=y.future();T.text==="|"&&(y.popToken(),x=!0)}return{tokens:x?a:n,numArgs:0}};t.macros.set("|",l(!1)),a.length&&t.macros.set("\\|",l(!0));var d=t.consumeArg().tokens,p=t.expandTokens([...i,...d,...r]);return t.macros.endGroup(),{tokens:p.reverse(),numArgs:0}};g("\\bra@ket",Vm(!1));g("\\bra@set",Vm(!0));g("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");g("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");g("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");g("\\angln","{\\angl n}");g("\\blue","\\textcolor{##6495ed}{#1}");g("\\orange","\\textcolor{##ffa500}{#1}");g("\\pink","\\textcolor{##ff00af}{#1}");g("\\red","\\textcolor{##df0030}{#1}");g("\\green","\\textcolor{##28ae7b}{#1}");g("\\gray","\\textcolor{gray}{#1}");g("\\purple","\\textcolor{##9d38bd}{#1}");g("\\blueA","\\textcolor{##ccfaff}{#1}");g("\\blueB","\\textcolor{##80f6ff}{#1}");g("\\blueC","\\textcolor{##63d9ea}{#1}");g("\\blueD","\\textcolor{##11accd}{#1}");g("\\blueE","\\textcolor{##0c7f99}{#1}");g("\\tealA","\\textcolor{##94fff5}{#1}");g("\\tealB","\\textcolor{##26edd5}{#1}");g("\\tealC","\\textcolor{##01d1c1}{#1}");g("\\tealD","\\textcolor{##01a995}{#1}");g("\\tealE","\\textcolor{##208170}{#1}");g("\\greenA","\\textcolor{##b6ffb0}{#1}");g("\\greenB","\\textcolor{##8af281}{#1}");g("\\greenC","\\textcolor{##74cf70}{#1}");g("\\greenD","\\textcolor{##1fab54}{#1}");g("\\greenE","\\textcolor{##0d923f}{#1}");g("\\goldA","\\textcolor{##ffd0a9}{#1}");g("\\goldB","\\textcolor{##ffbb71}{#1}");g("\\goldC","\\textcolor{##ff9c39}{#1}");g("\\goldD","\\textcolor{##e07d10}{#1}");g("\\goldE","\\textcolor{##a75a05}{#1}");g("\\redA","\\textcolor{##fca9a9}{#1}");g("\\redB","\\textcolor{##ff8482}{#1}");g("\\redC","\\textcolor{##f9685d}{#1}");g("\\redD","\\textcolor{##e84d39}{#1}");g("\\redE","\\textcolor{##bc2612}{#1}");g("\\maroonA","\\textcolor{##ffbde0}{#1}");g("\\maroonB","\\textcolor{##ff92c6}{#1}");g("\\maroonC","\\textcolor{##ed5fa6}{#1}");g("\\maroonD","\\textcolor{##ca337c}{#1}");g("\\maroonE","\\textcolor{##9e034e}{#1}");g("\\purpleA","\\textcolor{##ddd7ff}{#1}");g("\\purpleB","\\textcolor{##c6b9fc}{#1}");g("\\purpleC","\\textcolor{##aa87ff}{#1}");g("\\purpleD","\\textcolor{##7854ab}{#1}");g("\\purpleE","\\textcolor{##543b78}{#1}");g("\\mintA","\\textcolor{##f5f9e8}{#1}");g("\\mintB","\\textcolor{##edf2df}{#1}");g("\\mintC","\\textcolor{##e0e5cc}{#1}");g("\\grayA","\\textcolor{##f6f7f7}{#1}");g("\\grayB","\\textcolor{##f0f1f2}{#1}");g("\\grayC","\\textcolor{##e3e5e6}{#1}");g("\\grayD","\\textcolor{##d6d8da}{#1}");g("\\grayE","\\textcolor{##babec2}{#1}");g("\\grayF","\\textcolor{##888d93}{#1}");g("\\grayG","\\textcolor{##626569}{#1}");g("\\grayH","\\textcolor{##3b3e40}{#1}");g("\\grayI","\\textcolor{##21242c}{#1}");g("\\kaBlue","\\textcolor{##314453}{#1}");g("\\kaGreen","\\textcolor{##71B307}{#1}");var $m={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class cv{constructor(t,r,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new sv(lv,r.macros),this.mode=n,this.stack=[]}feed(t){this.lexer=new sd(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,n,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:n}=this.consumeArg(["]"])}else({tokens:a,start:r,end:n}=this.consumeArg());return this.pushToken(new st("EOF",n.loc)),this.pushTokens(a),new st("",Ke.range(r,n))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],n=t&&t.length>0;n||this.consumeSpaces();var a=this.future(),i,o=0,s=0;do{if(i=this.popToken(),r.push(i),i.text==="{")++o;else if(i.text==="}"){if(--o,o===-1)throw new j("Extra }",i)}else if(i.text==="EOF")throw new j("Unexpected end of input in a macro argument, expected '"+(t&&n?t[s]:"}")+"'",i);if(t&&n)if((o===0||o===1&&t[s]==="{")&&i.text===t[s]){if(++s,s===t.length){r.splice(-s,s);break}}else s=0}while(o!==0||n);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:i}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new j("The length of delimiters doesn't match the number of args!");for(var n=r[0],a=0;a<n.length;a++){var i=this.popToken();if(n[a]!==i.text)throw new j("Use of the macro doesn't match its definition",i)}}for(var o=[],s=0;s<t;s++)o.push(this.consumeArg(r&&r[s+1]).tokens);return o}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new j("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),n=r.text,a=r.noexpand?null:this._getExpansion(n);if(a==null||t&&a.unexpandable){if(t&&a==null&&n[0]==="\\"&&!this.isDefined(n))throw new j("Undefined control sequence: "+n);return this.pushToken(r),!1}this.countExpansion(1);var i=a.tokens,o=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){i=i.slice();for(var s=i.length-1;s>=0;--s){var l=i[s];if(l.text==="#"){if(s===0)throw new j("Incomplete placeholder at end of macro body",l);if(l=i[--s],l.text==="#")i.splice(s+1,1);else if(/^[1-9]$/.test(l.text))i.splice(s,2,...o[+l.text-1]);else throw new j("Not a valid argument number",l)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new st(t)]):void 0}expandTokens(t){var r=[],n=this.stack.length;for(this.pushTokens(t);this.stack.length>n;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(n=>n.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var n=this.lexer.catcodes[t];if(n!=null&&n!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var i=0;if(a.indexOf("#")!==-1)for(var o=a.replace(/##/g,"");o.indexOf("#"+(i+1))!==-1;)++i;for(var s=new sd(a,this.settings),l=[],d=s.lex();d.text!=="EOF";)l.push(d),d=s.lex();l.reverse();var p={tokens:l,numArgs:i};return p}return a}isDefined(t){return this.macros.has(t)||kr.hasOwnProperty(t)||de.math.hasOwnProperty(t)||de.text.hasOwnProperty(t)||$m.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:kr.hasOwnProperty(t)&&!kr[t].primitive}}var ud=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Si=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),zs={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},dd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ho{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new cv(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new j("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new st("}")),this.gullet.pushTokens(t);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,n}parseExpression(t,r){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(Ho.endOfExpression.indexOf(a.text)!==-1||r&&a.text===r||t&&kr[a.text]&&kr[a.text].infix)break;var i=this.parseAtom(r);if(i){if(i.type==="internal")continue}else break;n.push(i)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(t){for(var r=-1,n,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new j("only one infix operator per group",t[a].token);r=a,n=t[a].replaceWith}if(r!==-1&&n){var i,o,s=t.slice(0,r),l=t.slice(r+1);s.length===1&&s[0].type==="ordgroup"?i=s[0]:i={type:"ordgroup",mode:this.mode,body:s},l.length===1&&l[0].type==="ordgroup"?o=l[0]:o={type:"ordgroup",mode:this.mode,body:l};var d;return n==="\\\\abovefrac"?d=this.callFunction(n,[i,t[r],o],[]):d=this.callFunction(n,[i,o],[]),[d]}else return t}handleSupSubscript(t){var r=this.fetch(),n=r.text;this.consume(),this.consumeSpaces();var a;do{var i;a=this.parseGroup(t)}while(((i=a)==null?void 0:i.type)==="internal");if(!a)throw new j("Expected group after '"+n+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],n=0;n<t.length;n++)r.push({type:"textord",mode:"text",text:t[n]});var a={type:"text",mode:this.mode,body:r},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return i}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var n,a;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(r&&r.type==="op"){var o=i.text==="\\limits";r.limits=o,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=i.text==="\\limits");else throw new j("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(n)throw new j("Double superscript",i);n=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(a)throw new j("Double subscript",i);a=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(n)throw new j("Double superscript",i);var s={type:"textord",mode:this.mode,text:"\\prime"},l=[s];for(this.consume();this.fetch().text==="'";)l.push(s),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Si[i.text]){var d=ud.test(i.text),p=[];for(p.push(new st(Si[i.text])),this.consume();;){var f=this.fetch().text;if(!Si[f]||ud.test(f)!==d)break;p.unshift(new st(Si[f])),this.consume()}var y=this.subparse(p);d?a={type:"ordgroup",mode:"math",body:y}:n={type:"ordgroup",mode:"math",body:y}}else break}return n||a?{type:"supsub",mode:this.mode,base:r,sup:n,sub:a}:r}parseFunction(t,r){var n=this.fetch(),a=n.text,i=kr[a];if(!i)return null;if(this.consume(),r&&r!=="atom"&&!i.allowedInArgument)throw new j("Got function '"+a+"' with no arguments"+(r?" as "+r:""),n);if(this.mode==="text"&&!i.allowedInText)throw new j("Can't use function '"+a+"' in text mode",n);if(this.mode==="math"&&i.allowedInMath===!1)throw new j("Can't use function '"+a+"' in math mode",n);var{args:o,optArgs:s}=this.parseArguments(a,i);return this.callFunction(a,o,s,n,t)}callFunction(t,r,n,a,i){var o={funcName:t,parser:this,token:a,breakOnTokenText:i},s=kr[t];if(s&&s.handler)return s.handler(o,r,n);throw new j("No function handler for "+t)}parseArguments(t,r){var n=r.numArgs+r.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var a=[],i=[],o=0;o<n;o++){var s=r.argTypes&&r.argTypes[o],l=o<r.numOptionalArgs;(r.primitive&&s==null||r.type==="sqrt"&&o===1&&i[0]==null)&&(s="primitive");var d=this.parseGroupOfType("argument to '"+t+"'",s,l);if(l)i.push(d);else if(d!=null)a.push(d);else throw new j("Null argument, please report this as a bug")}return{args:a,optArgs:i}}parseGroupOfType(t,r,n){switch(r){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,r);case"hbox":{var a=this.parseArgumentGroup(n,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var i=this.parseStringGroup("raw",n);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(n)throw new j("A primitive argument cannot be optional");var o=this.parseGroup(t);if(o==null)throw new j("Expected group as "+t,this.fetch());return o}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new j("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var n=this.gullet.scanArgument(r);if(n==null)return null;for(var a="",i;(i=this.fetch()).text!=="EOF";)a+=i.text,this.consume();return this.consume(),n.text=a,n}parseRegexGroup(t,r){for(var n=this.fetch(),a=n,i="",o;(o=this.fetch()).text!=="EOF"&&t.test(i+o.text);)a=o,i+=a.text,this.consume();if(i==="")throw new j("Invalid "+r+": '"+n.text+"'",n);return n.range(a,i)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!n)throw new j("Invalid color: '"+r.text+"'",r);var a=n[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,n=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",n=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new j("Invalid size: '"+r.text+"'",r);var i={number:+(a[1]+a[2]),unit:a[3]};if(!nm(i))throw new j("Invalid unit: '"+i.unit+"'",r);return{type:"size",mode:this.mode,value:i,isBlank:n}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var n=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(t,r){var n=this.gullet.scanArgument(t);if(n==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var o={type:"ordgroup",mode:this.mode,loc:n.loc,body:i};return r&&this.switchMode(a),o}parseGroup(t,r){var n=this.fetch(),a=n.text,i;if(a==="{"||a==="\\begingroup"){this.consume();var o=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var s=this.parseExpression(!1,o),l=this.fetch();this.expect(o),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:Ke.range(n,l),body:s,semisimple:a==="\\begingroup"||void 0}}else if(i=this.parseFunction(r,t)||this.parseSymbol(),i==null&&a[0]==="\\"&&!$m.hasOwnProperty(a)){if(this.settings.throwOnError)throw new j("Undefined control sequence: "+a,n);i=this.formatUnsupportedCmd(a),this.consume()}return i}formLigatures(t){for(var r=t.length-1,n=0;n<r;++n){var a=t[n],i=a.text;i==="-"&&t[n+1].text==="-"&&(n+1<r&&t[n+2].text==="-"?(t.splice(n,3,{type:"textord",mode:"text",loc:Ke.range(a,t[n+2]),text:"---"}),r-=2):(t.splice(n,2,{type:"textord",mode:"text",loc:Ke.range(a,t[n+1]),text:"--"}),r-=1)),(i==="'"||i==="`")&&t[n+1].text===i&&(t.splice(n,2,{type:"textord",mode:"text",loc:Ke.range(a,t[n+1]),text:i+i}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var n=r.slice(5),a=n.charAt(0)==="*";if(a&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new j(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:a}}dd.hasOwnProperty(r[0])&&!de[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=dd[r[0]]+r.slice(1));var i=iv.exec(r);i&&(r=r.substring(0,i.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var o;if(de[this.mode][r]){this.settings.strict&&this.mode==="math"&&Rl.indexOf(r)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var s=de[this.mode][r].group,l=Ke.range(t),d;if(Jy.hasOwnProperty(s)){var p=s;d={type:"atom",mode:this.mode,family:p,loc:l,text:r}}else d={type:s,mode:this.mode,loc:l,text:r};o=d}else if(r.charCodeAt(0)>=128)this.settings.strict&&(rm(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),o={type:"textord",mode:"text",loc:Ke.range(t),text:r};else return null;if(this.consume(),i)for(var f=0;f<i[0].length;f++){var y=i[0][f];if(!zs[y])throw new j("Unknown accent ' "+y+"'",t);var x=zs[y][this.mode]||zs[y].text;if(!x)throw new j("Accent "+y+" unsupported in "+this.mode+" mode",t);o={type:"accent",mode:this.mode,loc:Ke.range(t),label:x,isStretchy:!1,isShifty:!0,base:o}}return o}}Ho.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var ic=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Ho(t,r);delete n.gullet.macros.current["\\df@tag"];var a=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new j("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:n.subparse([new st("\\df@tag")])}]}return a},Ym=function(t,r,n){r.textContent="";var a=oc(t,n).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Ym=function(){throw new j("KaTeX doesn't work in quirks mode.")});var uv=function(t,r){var n=oc(t,r).toMarkup();return n},dv=function(t,r){var n=new O0(r);return ic(t,n)},Km=function(t,r,n){if(n.throwOnError||!(t instanceof j))throw t;var a=E.makeSpan(["katex-error"],[new wt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+n.errorColor),a},oc=function(t,r){var n=new O0(r);try{var a=ic(t,n);return w3(a,t,n)}catch(i){return Km(i,t,n)}},hv=function(t,r){var n=new O0(r);try{var a=ic(t,n);return x3(a,t,n)}catch(i){return Km(i,t,n)}},pv="0.16.27",mv={Span:Va,Anchor:G0,SymbolNode:wt,SvgNode:or,PathNode:Rr,LineNode:Il},fv={version:pv,render:Ym,renderToString:uv,ParseError:j,SETTINGS_SCHEMA:Bi,__parse:dv,__renderToDomTree:oc,__renderToHTMLTree:hv,__setFontMetrics:Wy,__defineSymbol:c,__defineFunction:q,__defineMacro:g,__domTree:mv};const gv=({tex:e,block:t=!1})=>{const r=D.useRef(null);return D.useEffect(()=>{if(r.current)try{fv.render(e,r.current,{displayMode:t,throwOnError:!1,output:"html"})}catch(n){console.error("KaTeX Render Error:",n),r.current.innerText=e}},[e,t]),t?h.jsx("div",{className:"my-6 w-full overflow-x-auto overflow-y-hidden text-center py-4 bg-gray-50 dark:bg-crt-dim/10 border-y border-dashed border-gray-300 dark:border-crt-dim/50",children:h.jsx("span",{ref:r,className:"text-ink dark:text-crt-green selection:bg-accent selection:text-white"})}):h.jsx("span",{ref:r,className:"mx-1 text-ink dark:text-crt-green font-medium"})},Qm=({contentRef:e,isDomReady:t,citationMap:r})=>{const[n,a]=D.useState([]);return D.useLayoutEffect(()=>{if(!e.current||!t)return;const i=[];e.current.querySelectorAll(".citation-mount-point").forEach((p,f)=>{const y=p.getAttribute("data-key"),x=y?r.get(y):null;y&&x&&i.push(oa.createPortal(hn.createElement(hy,{label:x.label,entry:x.entry,citationKey:y}),p,`citation-${y}-${f}`))}),e.current.querySelectorAll(".science-figure-marker").forEach((p,f)=>{const y=p.getAttribute("data-src")||"",x=p.getAttribute("data-alt")||"",T=p.getAttribute("data-caption")||"",A=p.getAttribute("data-id")||void 0,M=p.getAttribute("data-clean-src")||void 0;y&&i.push(oa.createPortal(hn.createElement(py,{src:y,alt:x,caption:T,id:A,cleanSrc:M}),p,`figure-${f}`))}),e.current.querySelectorAll(".science-table-marker").forEach((p,f)=>{try{const y=p.getAttribute("data-id")||"tbl",x=p.getAttribute("data-headers"),T=p.getAttribute("data-rows"),A=p.getAttribute("data-caption")||void 0;if(x&&T){const M=JSON.parse(x),b=JSON.parse(T);i.push(oa.createPortal(hn.createElement(fy,{id:y,initialHeaders:M,initialData:b,caption:A}),p,`table-${y}-${f}`))}}catch(y){console.error("Failed to hydrate table",y)}}),e.current.querySelectorAll(".science-math-marker").forEach((p,f)=>{const y=p.getAttribute("data-tex"),x=p.getAttribute("data-display")==="true";y&&i.push(oa.createPortal(hn.createElement(gv,{tex:y,block:x}),p,`math-${f}`))}),a(i)},[t,r]),n},Jm=({references:e,manualCitations:t})=>e.length===0&&(!t||t.length===0)?null:h.jsxs("div",{className:"mt-16 pt-8 border-t-4 border-ink dark:border-crt-green",children:[h.jsxs("h3",{className:"font-mono text-lg font-bold uppercase mb-6 text-ink dark:text-crt-green flex items-center gap-2",children:["// REFERENCES ",e.length>0?"(APA 7)":"(LEGACY)"]}),h.jsxs("div",{className:"space-y-4",children:[e.map(({entry:r})=>h.jsxs("div",{id:`ref-${r.citationKey}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words text-justify hyphens-auto",children:[h.jsx("span",{className:"font-bold",children:cy(r.author)}),".",r.year&&h.jsxs("span",{children:[" (",r.year,"). "]}),h.jsxs("span",{children:[r.title,". "]}),h.jsx("span",{className:"italic",children:r.journal||r.booktitle||r.publisher}),r.volume&&h.jsxs("span",{className:"italic",children:[", ",r.volume]}),r.issue&&h.jsxs("span",{children:["(",r.issue,")"]}),r.pages&&h.jsxs("span",{children:[", ",r.pages]}),".",h.jsxs("div",{className:"inline-block ml-2 indent-0",children:[r.doi&&h.jsxs("a",{href:`https://doi.org/${r.doi}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:["https://doi.org/",r.doi]}),r.url&&!r.doi&&h.jsx("a",{href:r.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:r.url})]})]},r.citationKey)),e.length===0&&(t==null?void 0:t.map(r=>h.jsxs("div",{id:`ref-${r.id}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words flex gap-2 text-justify hyphens-auto",children:[h.jsxs("span",{className:"font-mono font-bold text-xs select-none",children:["[",r.id,"]"]}),h.jsxs("div",{className:"text-justify hyphens-auto",children:[h.jsx("span",{children:r.text}),r.source&&h.jsxs("span",{className:"block italic text-xs opacity-70",children:["Source: ",r.source]})]})]},r.id)))]})]}),Xm=({author:e})=>{const t=e||{name:"RK Patel",role:"Lead Researcher",avatar:"https://github.com/RKPatel-1996.png"};return h.jsxs("div",{className:"flex items-center gap-4 py-4 mb-6 border-b border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("div",{className:"relative shrink-0",children:[h.jsxs("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-ink dark:border-crt-green bg-gray-200 dark:bg-crt-dim",children:[h.jsx("img",{src:t.avatar,alt:t.name,className:"w-full h-full object-cover grayscale contrast-125",onError:r=>{r.currentTarget.style.display="none";const n=r.currentTarget.nextElementSibling;n&&(n.classList.remove("hidden"),n.classList.add("flex"))}}),h.jsx("div",{className:"hidden w-full h-full items-center justify-center text-ink dark:text-crt-green",children:h.jsx(u2,{size:24})})]}),h.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-black rounded-full flex items-center justify-center",children:h.jsx(o2,{size:8,className:"text-white dark:text-black"})})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-serif font-bold text-ink dark:text-crt-green text-sm flex items-center gap-2",children:t.name}),h.jsx("div",{className:"font-mono text-[10px] uppercase tracking-wider text-pencil dark:text-crt-green/60 bg-gray-100 dark:bg-crt-dim/50 px-1 rounded inline-block",children:t.role||"Contributor"})]})]})},Zm=({items:e})=>!e||e.length===0?null:h.jsxs("nav",{id:"table-of-contents",className:"my-8 p-6 bg-paper dark:bg-crt-dim/10 border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-none",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 border-b-2 border-ink dark:border-crt-green pb-2",children:[h.jsx(e2,{size:18,className:"text-ink dark:text-crt-green"}),h.jsx("h3",{className:"font-mono text-sm font-bold uppercase text-ink dark:text-crt-green",children:"Table_Of_Contents"})]}),h.jsx("ul",{className:"space-y-2 font-mono text-xs",children:e.map(t=>h.jsx("li",{style:{paddingLeft:`${(t.level-1)*12}px`},children:h.jsxs("a",{href:`#${t.id}`,onClick:r=>{var n;r.preventDefault(),(n=document.getElementById(t.id))==null||n.scrollIntoView({behavior:"smooth"})},className:"flex items-start gap-2 text-pencil dark:text-crt-green/80 hover:text-accent dark:hover:text-crt-amber hover:underline decoration-1 transition-colors",children:[h.jsx("span",{className:"opacity-50 select-none",children:">"}),t.text]})},t.id))}),h.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-gray-300 dark:border-crt-green/30 text-[10px] text-pencil dark:text-crt-green/50 italic",children:"* Click heading titles in the article to return here."})]}),yv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=_p(),{processedHTML:n,references:a,citationMap:i}=Zp(e.content,e.bibTexContent),o=D.useRef(null),{toc:s,isDomReady:l}=em(o,n),d=Qm({contentRef:o,isDomReady:l,citationMap:i});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Fp,{size:24})}),h.jsx("div",{className:"flex-1 p-4 md:p-8 pt-20 md:pt-8 relative",children:h.jsx("div",{className:"max-w-3xl mx-auto",children:h.jsxs("article",{className:"bg-white dark:bg-black dark:border dark:border-crt-dim shadow-paper dark:shadow-crt p-6 md:p-12 min-h-[600px] md:min-h-[1000px] mb-12 relative",children:[h.jsxs("header",{className:"mb-4",children:[h.jsxs("div",{className:"flex flex-wrap justify-between font-mono text-xs mb-2 text-pencil dark:text-crt-green/60 uppercase",children:[h.jsx("span",{children:e.id}),h.jsx("span",{children:e.date})]}),h.jsx("h1",{className:"font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 text-ink dark:text-crt-green",children:e.title}),h.jsx("div",{className:"flex flex-wrap gap-2 font-mono text-xs mt-4",children:e.tags.map(p=>h.jsx("span",{className:"bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1 whitespace-nowrap",children:p},p))})]}),h.jsx(Xm,{author:e.author}),h.jsx(Zm,{items:s}),h.jsx("div",{ref:o,className:`prose ${Xr[r]} dark:prose-invert font-serif text-ink dark:text-crt-green max-w-none 
                    text-justify break-words hyphens-auto
                    
                    /* Prose Heading Styles Override for Collapsible Styling */
                    prose-headings:font-mono prose-headings:uppercase prose-headings:text-sm prose-headings:tracking-widest 
                    prose-headings:border-b prose-headings:border-gray-300 dark:prose-headings:border-crt-dim prose-headings:pb-2 prose-headings:mt-0 prose-headings:mb-4
                    
                    prose-code:font-code prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-crt-dim prose-code:p-1
                    prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-ink dark:prose-blockquote:border-crt-green
                    dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim
                `,dangerouslySetInnerHTML:{__html:n}}),d,h.jsx(Jm,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-crt-dim text-center font-mono text-xs text-pencil dark:text-crt-green/50",children:"*** END OF MANUSCRIPT ***"})]})})})]})},vv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=_p(),{processedHTML:n,references:a,citationMap:i}=Zp(e.content,e.bibTexContent),o=D.useRef(null),{toc:s,isDomReady:l}=em(o,n),d=Qm({contentRef:o,isDomReady:l,citationMap:i});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Fp,{size:24})}),h.jsx("div",{className:"flex-1 p-2 md:p-12 pt-20 md:pt-12 overflow-y-auto",children:h.jsxs("article",{className:"max-w-3xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-crt-green p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt transition-colors duration-300",children:[h.jsxs("header",{className:"mb-4",children:[h.jsx("h1",{className:"font-mono font-bold text-2xl md:text-4xl text-black dark:text-crt-green mb-4 leading-tight",children:e.title}),h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-gray-600 dark:text-crt-green/70",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[h.jsxs("span",{className:"uppercase tracking-wider",children:["Date: ",e.date]}),h.jsxs("span",{className:"uppercase tracking-wider",children:["ID: ",e.id]})]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(p=>h.jsx("span",{className:"bg-gray-100 dark:bg-crt-dim border border-gray-200 dark:border-crt-green px-2 py-1 rounded-sm whitespace-nowrap",children:p},p))})]}),h.jsx("hr",{className:"border-black dark:border-crt-green border-2 my-8"})]}),h.jsx(Xm,{author:e.author}),h.jsx(Zm,{items:s}),h.jsx("div",{ref:o,className:`prose ${Xr[r]} max-w-none 
              text-justify break-words hyphens-auto
              
              /* Override prose styles for collapsible headers */
              prose-headings:font-mono prose-headings:mt-0 prose-headings:mb-4
              prose-p:font-serif
              
              dark:prose-invert 
              dark:prose-headings:text-crt-green dark:prose-p:text-crt-green dark:prose-strong:text-crt-green dark:prose-li:text-crt-green
              dark:prose-code:text-crt-green dark:prose-code:bg-crt-dim
              dark:prose-img:border-crt-green dark:prose-img:shadow-none
              dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim`,dangerouslySetInnerHTML:{__html:n}}),d,h.jsx(Jm,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 text-center font-mono text-[10px] text-gray-400 dark:text-crt-green/40 select-none",children:"*** END OF DOCUMENT ***"})]})})]})},bv=()=>{const{id:e}=s4(),t=j0(),r=Dl.find(n=>n.id===e);return r?r.template==="standard"?h.jsx(vv,{article:r,onBack:()=>t("/")}):h.jsx(yv,{article:r,onBack:()=>t("/")}):h.jsxs("div",{className:"p-12 font-mono text-center dark:text-crt-green",children:[h.jsx("h2",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"404: RECORD_NOT_FOUND"}),h.jsxs("p",{className:"mt-2 text-sm text-pencil dark:text-crt-green/70",children:["The requested manuscript ID '",e,"' does not exist in the registry."]}),h.jsx("button",{onClick:()=>t("/"),className:"mt-8 underline hover:text-accent dark:hover:text-crt-amber",children:"< Return to Index"})]})};function wv(){const[e,t]=D.useState(!1);D.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=()=>t(!e);return h.jsx(_4,{basename:"/notes_computers_in_biology",children:h.jsx(A4,{children:h.jsxs(dn,{element:h.jsx(g2,{isDarkMode:e,toggleTheme:r}),children:[h.jsx(dn,{path:"/",element:h.jsx(ey,{})}),h.jsx(dn,{path:"/articles/:id",element:h.jsx(bv,{})}),h.jsx(dn,{path:"/media",element:h.jsx(sy,{})}),h.jsx(dn,{path:"/about",element:h.jsx(ny,{})})]})})})}const Ol=document.getElementById("root");if(!Ol)throw new Error("Could not find root element to mount to");Ol.innerHTML||_s.createRoot(Ol).render(h.jsx(hn.StrictMode,{children:h.jsx(wv,{})}));
