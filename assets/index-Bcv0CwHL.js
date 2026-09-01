function af(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}},yi={},mu={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),sf=Symbol.for("react.portal"),lf=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),gf=Symbol.for("react.lazy"),c0=Symbol.iterator;function yf(e){return e===null||typeof e!="object"?null:(e=c0&&e[c0]||e["@@iterator"],typeof e=="function"?e:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gu=Object.assign,yu={};function Wn(e,t,r){this.props=e,this.context=t,this.refs=yu,this.updater=r||fu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vu(){}vu.prototype=Wn.prototype;function Wl(e,t,r){this.props=e,this.context=t,this.refs=yu,this.updater=r||fu}var Hl=Wl.prototype=new vu;Hl.constructor=Wl;gu(Hl,Wn.prototype);Hl.isPureReactComponent=!0;var d0=Array.isArray,bu=Object.prototype.hasOwnProperty,Ul={current:null},wu={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)bu.call(t,n)&&!wu.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:ja,type:e,key:o,ref:i,props:a,_owner:Ul.current}}function vf(e,t){return{$$typeof:ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja}function bf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var u0=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bf(""+e.key):t.toString(36)}function To(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ja:case sf:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+Gi(i,0):n,d0(a)?(r="",e!=null&&(r=e.replace(u0,"$&/")+"/"),To(a,t,r,"",function(u){return u})):a!=null&&(Gl(a)&&(a=vf(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(u0,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",d0(e))for(var s=0;s<e.length;s++){o=e[s];var l=n+Gi(o,s);i+=To(o,t,r,l,a)}else if(l=yf(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=n+Gi(o,s++),i+=To(o,t,r,l,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xa(e,t,r){if(e==null)return e;var n=[],a=0;return To(e,n,"","",function(o){return t.call(r,o,a++)}),n}function wf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Co={transition:null},xf={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Ul};function ku(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Xa,forEach:function(e,t,r){Xa(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Xa(e,function(){t++}),t},toArray:function(e){return Xa(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Wn;te.Fragment=lf;te.Profiler=df;te.PureComponent=Wl;te.StrictMode=cf;te.Suspense=mf;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf;te.act=ku;te.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=gu({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ul.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)bu.call(t,l)&&!wu.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:ja,type:e.type,key:a,ref:o,props:n,_owner:i}};te.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uf,_context:e},e.Consumer=e};te.createElement=xu;te.createFactory=function(e){var t=xu.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:pf,render:e}};te.isValidElement=Gl;te.lazy=function(e){return{$$typeof:gf,_payload:{_status:-1,_result:e},_init:wf}};te.memo=function(e,t){return{$$typeof:ff,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};te.unstable_act=ku;te.useCallback=function(e,t){return Ge.current.useCallback(e,t)};te.useContext=function(e){return Ge.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};te.useEffect=function(e,t){return Ge.current.useEffect(e,t)};te.useId=function(){return Ge.current.useId()};te.useImperativeHandle=function(e,t,r){return Ge.current.useImperativeHandle(e,t,r)};te.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return Ge.current.useMemo(e,t)};te.useReducer=function(e,t,r){return Ge.current.useReducer(e,t,r)};te.useRef=function(e){return Ge.current.useRef(e)};te.useState=function(e){return Ge.current.useState(e)};te.useSyncExternalStore=function(e,t,r){return Ge.current.useSyncExternalStore(e,t,r)};te.useTransition=function(){return Ge.current.useTransition()};te.version="18.3.1";mu.exports=te;var E=mu.exports;const hn=of(E),kf=af({__proto__:null,default:hn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=E,Af=Symbol.for("react.element"),Tf=Symbol.for("react.fragment"),Cf=Object.prototype.hasOwnProperty,Pf=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nf={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Cf.call(t,n)&&!Nf.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Af,type:e,key:o,ref:i,props:a,_owner:Pf.current}}yi.Fragment=Tf;yi.jsx=Su;yi.jsxs=Su;pu.exports=yi;var h=pu.exports,Bs={},Au={exports:{}},ct={},Tu={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,Q){var K=O.length;O.push(Q);e:for(;0<K;){var ie=K-1>>>1,oe=O[ie];if(0<a(oe,Q))O[ie]=Q,O[K]=oe,K=ie;else break e}}function r(O){return O.length===0?null:O[0]}function n(O){if(O.length===0)return null;var Q=O[0],K=O.pop();if(K!==Q){O[0]=K;e:for(var ie=0,oe=O.length,Bt=oe>>>1;ie<Bt;){var kt=2*(ie+1)-1,It=O[kt],zt=kt+1,St=O[zt];if(0>a(It,K))zt<oe&&0>a(St,It)?(O[ie]=St,O[zt]=K,ie=zt):(O[ie]=It,O[kt]=K,ie=kt);else if(zt<oe&&0>a(St,K))O[ie]=St,O[zt]=K,ie=zt;else break e}}return Q}function a(O,Q){var K=O.sortIndex-Q.sortIndex;return K!==0?K:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],p=1,f=null,y=3,x=!1,T=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(O){for(var Q=r(u);Q!==null;){if(Q.callback===null)n(u);else if(Q.startTime<=O)n(u),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=r(u)}}function P(O){if(A=!1,w(O),!T)if(r(l)!==null)T=!0,ht(M);else{var Q=r(u);Q!==null&&_t(P,Q.startTime-O)}}function M(O,Q){T=!1,A&&(A=!1,b(z),z=-1),x=!0;var K=y;try{for(w(Q),f=r(l);f!==null&&(!(f.expirationTime>Q)||O&&!J());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,y=f.priorityLevel;var oe=ie(f.expirationTime<=Q);Q=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===r(l)&&n(l),w(Q)}else n(l);f=r(l)}if(f!==null)var Bt=!0;else{var kt=r(u);kt!==null&&_t(P,kt.startTime-Q),Bt=!1}return Bt}finally{f=null,y=K,x=!1}}var _=!1,B=null,z=-1,W=5,U=-1;function J(){return!(e.unstable_now()-U<W)}function X(){if(B!==null){var O=e.unstable_now();U=O;var Q=!0;try{Q=B(!0,O)}finally{Q?ce():(_=!1,B=null)}}else _=!1}var ce;if(typeof v=="function")ce=function(){v(X)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,rt=me.port2;me.port1.onmessage=X,ce=function(){rt.postMessage(null)}}else ce=function(){N(X,0)};function ht(O){B=O,_||(_=!0,ce())}function _t(O,Q){z=N(function(){O(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){T||x||(T=!0,ht(M))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var K=y;y=Q;try{return O()}finally{y=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=y;y=O;try{return Q()}finally{y=K}},e.unstable_scheduleCallback=function(O,Q,K){var ie=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ie+K:ie):K=ie,O){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,O={id:p++,callback:Q,priorityLevel:O,startTime:K,expirationTime:oe,sortIndex:-1},K>ie?(O.sortIndex=K,t(u,O),r(l)===null&&O===r(u)&&(A?(b(z),z=-1):A=!0,_t(P,K-ie))):(O.sortIndex=oe,t(l,O),T||x||(T=!0,ht(M))),O},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(O){var Q=y;return function(){var K=y;y=Q;try{return O.apply(this,arguments)}finally{y=K}}}})(Cu);Tu.exports=Cu;var Df=Tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=E,lt=Df;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pu=new Set,va={};function an(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(va[e]=t,e=0;e<t.length;e++)Pu.add(t[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h0={},p0={};function _f(e){return Is.call(p0,e)?!0:Is.call(h0,e)?!1:Ef.test(e)?p0[e]=!0:(h0[e]=!0,!1)}function Bf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,r,n){if(t===null||typeof t>"u"||Bf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function $l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,$l);Re[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,$l);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,$l);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,t,r,n){var a=Re.hasOwnProperty(t)?Re[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,r,a,n)&&(r=null),n||a===null?_f(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var cr=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Kl=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),Nu=Symbol.for("react.provider"),Du=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Rs=Symbol.for("react.suspense"),qs=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Mu=Symbol.for("react.offscreen"),m0=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=m0&&e[m0]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Vi;function ra(e){if(Vi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var $i=!1;function Yi(e,t){if(!e||$i)return"";$i=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{$i=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ra(e):""}function zf(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=Yi(e.type,!1),e;case 11:return e=Yi(e.type.render,!1),e;case 1:return e=Yi(e.type,!0),e;default:return""}}function Ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case zs:return"Profiler";case Kl:return"StrictMode";case Rs:return"Suspense";case qs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Du:return(e.displayName||"Context")+".Consumer";case Nu:return(e._context.displayName||"Context")+".Provider";case Ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:Ls(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Ls(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ls(t);case 8:return t===Kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qf(e){var t=Eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=qf(e))}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Eu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var r=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function f0(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=_r(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bu(e,t){t=t.checked,t!=null&&Yl(e,"checked",t,!1)}function Fs(e,t){Bu(e,t);var r=_r(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Os(e,t.type,r):t.hasOwnProperty("defaultValue")&&Os(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function g0(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Os(e,t,r){(t!=="number"||jo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var na=Array.isArray;function Tn(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+_r(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function y0(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(L(92));if(na(r)){if(1<r.length)throw Error(L(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:_r(r)}}function Iu(e,t){var r=_r(t.value),n=_r(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function v0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,Ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lf=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(e){Lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),la[t]=la[e]})});function qu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||la.hasOwnProperty(e)&&la[e]?(""+t).trim():t+"px"}function Lu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=qu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var jf=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Cn=null,Pn=null;function b0(e){if(e=Wa(e)){if(typeof $s!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ki(t),$s(e.stateNode,e.type,t))}}function ju(e){Cn?Pn?Pn.push(e):Pn=[e]:Cn=e}function Fu(){if(Cn){var e=Cn,t=Pn;if(Pn=Cn=null,b0(e),t)for(e=0;e<t.length;e++)b0(t[e])}}function Ou(e,t){return e(t)}function Wu(){}var Ki=!1;function Hu(e,t,r){if(Ki)return e(t,r);Ki=!0;try{return Ou(e,t,r)}finally{Ki=!1,(Cn!==null||Pn!==null)&&(Wu(),Fu())}}function wa(e,t){var r=e.stateNode;if(r===null)return null;var n=ki(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(L(231,t,typeof r));return r}var Ys=!1;if(rr)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ys=!1}function Ff(e,t,r,n,a,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(p){this.onError(p)}}var ca=!1,Fo=null,Oo=!1,Ks=null,Of={onError:function(e){ca=!0,Fo=e}};function Wf(e,t,r,n,a,o,i,s,l){ca=!1,Fo=null,Ff.apply(Of,arguments)}function Hf(e,t,r,n,a,o,i,s,l){if(Wf.apply(this,arguments),ca){if(ca){var u=Fo;ca=!1,Fo=null}else throw Error(L(198));Oo||(Oo=!0,Ks=u)}}function on(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w0(e){if(on(e)!==e)throw Error(L(188))}function Uf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(L(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return w0(a),e;if(o===n)return w0(a),t;o=o.sibling}throw Error(L(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,s=a.child;s;){if(s===r){i=!0,r=a,n=o;break}if(s===n){i=!0,n=a,r=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===r){i=!0,r=o,n=a;break}if(s===n){i=!0,n=o,r=a;break}s=s.sibling}if(!i)throw Error(L(189))}}if(r.alternate!==n)throw Error(L(190))}if(r.tag!==3)throw Error(L(188));return r.stateNode.current===r?e:t}function Gu(e){return e=Uf(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var $u=lt.unstable_scheduleCallback,x0=lt.unstable_cancelCallback,Gf=lt.unstable_shouldYield,Vf=lt.unstable_requestPaint,Te=lt.unstable_now,$f=lt.unstable_getCurrentPriorityLevel,Zl=lt.unstable_ImmediatePriority,Yu=lt.unstable_UserBlockingPriority,Wo=lt.unstable_NormalPriority,Yf=lt.unstable_LowPriority,Ku=lt.unstable_IdlePriority,vi=null,Wt=null;function Kf(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Xf,Qf=Math.log,Jf=Math.LN2;function Xf(e){return e>>>=0,e===0?32:31-(Qf(e)/Jf|0)|0}var ro=64,no=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~a;s!==0?n=aa(s):(o&=i,o!==0&&(n=aa(o)))}else i=r&~a,i!==0?n=aa(i):o!==0&&(n=aa(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Dt(t),a=1<<r,n|=e[r],t&=~a;return n}function Zf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eg(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Dt(o),s=1<<i,l=a[i];l===-1?(!(s&r)||s&n)&&(a[i]=Zf(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qu(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function Qi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fa(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=r}function tg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Dt(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function ec(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Dt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var se=0;function Ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xu,tc,Zu,eh,th,Js=!1,ao=[],Sr=null,Ar=null,Tr=null,xa=new Map,ka=new Map,yr=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k0(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function Qn(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Wa(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ng(e,t,r,n,a){switch(t){case"focusin":return Sr=Qn(Sr,e,t,r,n,a),!0;case"dragenter":return Ar=Qn(Ar,e,t,r,n,a),!0;case"mouseover":return Tr=Qn(Tr,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return xa.set(o,Qn(xa.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,ka.set(o,Qn(ka.get(o)||null,e,t,r,n,a)),!0}return!1}function rh(e){var t=$r(e.target);if(t!==null){var r=on(t);if(r!==null){if(t=r.tag,t===13){if(t=Uu(r),t!==null){e.blockedOn=t,th(e.priority,function(){Zu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Vs=n,r.target.dispatchEvent(n),Vs=null}else return t=Wa(r),t!==null&&tc(t),e.blockedOn=r,!1;t.shift()}return!0}function S0(e,t,r){Po(e)&&r.delete(t)}function ag(){Js=!1,Sr!==null&&Po(Sr)&&(Sr=null),Ar!==null&&Po(Ar)&&(Ar=null),Tr!==null&&Po(Tr)&&(Tr=null),xa.forEach(S0),ka.forEach(S0)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,ag)))}function Sa(e){function t(a){return Jn(a,e)}if(0<ao.length){Jn(ao[0],e);for(var r=1;r<ao.length;r++){var n=ao[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Sr!==null&&Jn(Sr,e),Ar!==null&&Jn(Ar,e),Tr!==null&&Jn(Tr,e),xa.forEach(t),ka.forEach(t),r=0;r<yr.length;r++)n=yr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<yr.length&&(r=yr[0],r.blockedOn===null);)rh(r),r.blockedOn===null&&yr.shift()}var Nn=cr.ReactCurrentBatchConfig,Uo=!0;function og(e,t,r,n){var a=se,o=Nn.transition;Nn.transition=null;try{se=1,rc(e,t,r,n)}finally{se=a,Nn.transition=o}}function ig(e,t,r,n){var a=se,o=Nn.transition;Nn.transition=null;try{se=4,rc(e,t,r,n)}finally{se=a,Nn.transition=o}}function rc(e,t,r,n){if(Uo){var a=Xs(e,t,r,n);if(a===null)is(e,t,n,Go,r),k0(e,n);else if(ng(a,e,t,r,n))n.stopPropagation();else if(k0(e,n),t&4&&-1<rg.indexOf(e)){for(;a!==null;){var o=Wa(a);if(o!==null&&Xu(o),o=Xs(e,t,r,n),o===null&&is(e,t,n,Go,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else is(e,t,n,null,r)}}var Go=null;function Xs(e,t,r,n){if(Go=null,e=Xl(n),e=$r(e),e!==null)if(t=on(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($f()){case Zl:return 1;case Yu:return 4;case Wo:case Yf:return 16;case Ku:return 536870912;default:return 16}default:return 16}}var br=null,nc=null,No=null;function ah(){if(No)return No;var e,t=nc,r=t.length,n,a="value"in br?br.value:br.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return No=a.slice(e,1<n?1-n:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function A0(){return!1}function dt(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oo:A0,this.isPropagationStopped=A0,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=dt(Hn),Oa=xe({},Hn,{view:0,detail:0}),sg=dt(Oa),Ji,Xi,Xn,bi=xe({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Ji=e.screenX-Xn.screenX,Xi=e.screenY-Xn.screenY):Xi=Ji=0,Xn=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),T0=dt(bi),lg=xe({},bi,{dataTransfer:0}),cg=dt(lg),dg=xe({},Oa,{relatedTarget:0}),Zi=dt(dg),ug=xe({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=dt(ug),pg=xe({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mg=dt(pg),fg=xe({},Hn,{data:0}),C0=dt(fg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vg[e])?!!t[e]:!1}function oc(){return bg}var wg=xe({},Oa,{key:function(e){if(e.key){var t=gg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xg=dt(wg),kg=xe({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P0=dt(kg),Sg=xe({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),Ag=dt(Sg),Tg=xe({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cg=dt(Tg),Pg=xe({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ng=dt(Pg),Dg=[9,13,27,32],ic=rr&&"CompositionEvent"in window,da=null;rr&&"documentMode"in document&&(da=document.documentMode);var Mg=rr&&"TextEvent"in window&&!da,oh=rr&&(!ic||da&&8<da&&11>=da),N0=" ",D0=!1;function ih(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Eg(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(D0=!0,N0);case"textInput":return e=t.data,e===N0&&D0?null:e;default:return null}}function _g(e,t){if(fn)return e==="compositionend"||!ic&&ih(e,t)?(e=ah(),No=nc=br=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oh&&t.locale!=="ko"?null:t.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bg[e.type]:t==="textarea"}function lh(e,t,r,n){ju(n),t=Vo(t,"onChange"),0<t.length&&(r=new ac("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ua=null,Aa=null;function Ig(e){bh(e,0)}function wi(e){var t=vn(e);if(_u(t))return e}function zg(e,t){if(e==="change")return t}var ch=!1;if(rr){var es;if(rr){var ts="oninput"in document;if(!ts){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),ts=typeof E0.oninput=="function"}es=ts}else es=!1;ch=es&&(!document.documentMode||9<document.documentMode)}function _0(){ua&&(ua.detachEvent("onpropertychange",dh),Aa=ua=null)}function dh(e){if(e.propertyName==="value"&&wi(Aa)){var t=[];lh(t,Aa,e,Xl(e)),Hu(Ig,t)}}function Rg(e,t,r){e==="focusin"?(_0(),ua=t,Aa=r,ua.attachEvent("onpropertychange",dh)):e==="focusout"&&_0()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(Aa)}function Lg(e,t){if(e==="click")return wi(t)}function jg(e,t){if(e==="input"||e==="change")return wi(t)}function Fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Fg;function Ta(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Is.call(t,a)||!Et(e[a],t[a]))return!1}return!0}function B0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function I0(e,t){var r=B0(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=B0(r)}}function uh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hh(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=jo(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Og(e){var t=hh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&uh(r.ownerDocument.documentElement,r)){if(n!==null&&sc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=I0(r,o);var i=I0(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wg=rr&&"documentMode"in document&&11>=document.documentMode,gn=null,Zs=null,ha=null,el=!1;function z0(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;el||gn==null||gn!==jo(n)||(n=gn,"selectionStart"in n&&sc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ha&&Ta(ha,n)||(ha=n,n=Vo(Zs,"onSelect"),0<n.length&&(t=new ac("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function io(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var yn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},rs={},ph={};rr&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function xi(e){if(rs[e])return rs[e];if(!yn[e])return e;var t=yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ph)return rs[e]=t[r];return e}var mh=xi("animationend"),fh=xi("animationiteration"),gh=xi("animationstart"),yh=xi("transitionend"),vh=new Map,R0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(e,t){vh.set(e,t),an(t,[e])}for(var ns=0;ns<R0.length;ns++){var as=R0[ns],Hg=as.toLowerCase(),Ug=as[0].toUpperCase()+as.slice(1);qr(Hg,"on"+Ug)}qr(mh,"onAnimationEnd");qr(fh,"onAnimationIteration");qr(gh,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(yh,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function q0(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Hf(n,t,void 0,e),e.currentTarget=null}function bh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;q0(a,s,u),o=l}else for(i=0;i<n.length;i++){if(s=n[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;q0(a,s,u),o=l}}}if(Oo)throw e=Ks,Oo=!1,Ks=null,e}function he(e,t){var r=t[ol];r===void 0&&(r=t[ol]=new Set);var n=e+"__bubble";r.has(n)||(wh(t,e,2,!1),r.add(n))}function os(e,t,r){var n=0;t&&(n|=4),wh(r,e,n,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function Ca(e){if(!e[so]){e[so]=!0,Pu.forEach(function(r){r!=="selectionchange"&&(Gg.has(r)||os(r,!1,e),os(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,os("selectionchange",!1,t))}}function wh(e,t,r,n){switch(nh(t)){case 1:var a=og;break;case 4:a=ig;break;default:a=rc}r=a.bind(null,t,r,e),a=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function is(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=$r(s),i===null)return;if(l=i.tag,l===5||l===6){n=o=i;continue e}s=s.parentNode}}n=n.return}Hu(function(){var u=o,p=Xl(r),f=[];e:{var y=vh.get(e);if(y!==void 0){var x=ac,T=e;switch(e){case"keypress":if(Do(r)===0)break e;case"keydown":case"keyup":x=xg;break;case"focusin":T="focus",x=Zi;break;case"focusout":T="blur",x=Zi;break;case"beforeblur":case"afterblur":x=Zi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=T0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ag;break;case mh:case fh:case gh:x=hg;break;case yh:x=Cg;break;case"scroll":x=sg;break;case"wheel":x=Ng;break;case"copy":case"cut":case"paste":x=mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=P0}var A=(t&4)!==0,N=!A&&e==="scroll",b=A?y!==null?y+"Capture":null:y;A=[];for(var v=u,w;v!==null;){w=v;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,b!==null&&(P=wa(v,b),P!=null&&A.push(Pa(v,P,w)))),N)break;v=v.return}0<A.length&&(y=new x(y,T,null,r,p),f.push({event:y,listeners:A}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&r!==Vs&&(T=r.relatedTarget||r.fromElement)&&($r(T)||T[nr]))break e;if((x||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,x?(T=r.relatedTarget||r.toElement,x=u,T=T?$r(T):null,T!==null&&(N=on(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(x=null,T=u),x!==T)){if(A=T0,P="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(A=P0,P="onPointerLeave",b="onPointerEnter",v="pointer"),N=x==null?y:vn(x),w=T==null?y:vn(T),y=new A(P,v+"leave",x,r,p),y.target=N,y.relatedTarget=w,P=null,$r(p)===u&&(A=new A(b,v+"enter",T,r,p),A.target=w,A.relatedTarget=N,P=A),N=P,x&&T)t:{for(A=x,b=T,v=0,w=A;w;w=cn(w))v++;for(w=0,P=b;P;P=cn(P))w++;for(;0<v-w;)A=cn(A),v--;for(;0<w-v;)b=cn(b),w--;for(;v--;){if(A===b||b!==null&&A===b.alternate)break t;A=cn(A),b=cn(b)}A=null}else A=null;x!==null&&L0(f,y,x,A,!1),T!==null&&N!==null&&L0(f,N,T,A,!0)}}e:{if(y=u?vn(u):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var M=zg;else if(M0(y))if(ch)M=jg;else{M=qg;var _=Rg}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=Lg);if(M&&(M=M(e,u))){lh(f,M,r,p);break e}_&&_(e,y,u),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&Os(y,"number",y.value)}switch(_=u?vn(u):window,e){case"focusin":(M0(_)||_.contentEditable==="true")&&(gn=_,Zs=u,ha=null);break;case"focusout":ha=Zs=gn=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,z0(f,r,p);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":z0(f,r,p)}var B;if(ic)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else fn?ih(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(oh&&r.locale!=="ko"&&(fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&fn&&(B=ah()):(br=p,nc="value"in br?br.value:br.textContent,fn=!0)),_=Vo(u,z),0<_.length&&(z=new C0(z,e,null,r,p),f.push({event:z,listeners:_}),B?z.data=B:(B=sh(r),B!==null&&(z.data=B)))),(B=Mg?Eg(e,r):_g(e,r))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(p=new C0("onBeforeInput","beforeinput",null,r,p),f.push({event:p,listeners:u}),p.data=B))}bh(f,t)})}function Pa(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Vo(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=wa(e,r),o!=null&&n.unshift(Pa(e,o,a)),o=wa(e,t),o!=null&&n.push(Pa(e,o,a))),e=e.return}return n}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function L0(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,a?(l=wa(r,o),l!=null&&i.unshift(Pa(r,l,s))):a||(l=wa(r,o),l!=null&&i.push(Pa(r,l,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Vg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function j0(e){return(typeof e=="string"?e:""+e).replace(Vg,`
`).replace($g,"")}function lo(e,t,r){if(t=j0(t),j0(e)!==t&&r)throw Error(L(425))}function $o(){}var tl=null,rl=null;function nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(Qg)}:al;function Qg(e){setTimeout(function(){throw e})}function ss(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Sa(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Sa(t)}function Cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function O0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),jt="__reactFiber$"+Un,Na="__reactProps$"+Un,nr="__reactContainer$"+Un,ol="__reactEvents$"+Un,Jg="__reactListeners$"+Un,Xg="__reactHandles$"+Un;function $r(e){var t=e[jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nr]||r[jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=O0(e);e!==null;){if(r=e[jt])return r;e=O0(e)}return t}e=r,r=e.parentNode}return null}function Wa(e){return e=e[jt]||e[nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ki(e){return e[Na]||null}var il=[],bn=-1;function Lr(e){return{current:e}}function pe(e){0>bn||(e.current=il[bn],il[bn]=null,bn--)}function de(e,t){bn++,il[bn]=e.current,e.current=t}var Br={},Fe=Lr(Br),Xe=Lr(!1),Zr=Br;function In(e,t){var r=e.type.contextTypes;if(!r)return Br;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function Yo(){pe(Xe),pe(Fe)}function W0(e,t,r){if(Fe.current!==Br)throw Error(L(168));de(Fe,t),de(Xe,r)}function xh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(L(108,Rf(e)||"Unknown",a));return xe({},r,n)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Br,Zr=Fe.current,de(Fe,e),de(Xe,Xe.current),!0}function H0(e,t,r){var n=e.stateNode;if(!n)throw Error(L(169));r?(e=xh(e,t,Zr),n.__reactInternalMemoizedMergedChildContext=e,pe(Xe),pe(Fe),de(Fe,e)):pe(Xe),de(Xe,r)}var Kt=null,Si=!1,ls=!1;function kh(e){Kt===null?Kt=[e]:Kt.push(e)}function Zg(e){Si=!0,kh(e)}function jr(){if(!ls&&Kt!==null){ls=!0;var e=0,t=se;try{var r=Kt;for(se=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Kt=null,Si=!1}catch(a){throw Kt!==null&&(Kt=Kt.slice(e+1)),$u(Zl,jr),a}finally{se=t,ls=!1}}return null}var wn=[],xn=0,Qo=null,Jo=0,pt=[],mt=0,en=null,Jt=1,Xt="";function Gr(e,t){wn[xn++]=Jo,wn[xn++]=Qo,Qo=e,Jo=t}function Sh(e,t,r){pt[mt++]=Jt,pt[mt++]=Xt,pt[mt++]=en,en=e;var n=Jt;e=Xt;var a=32-Dt(n)-1;n&=~(1<<a),r+=1;var o=32-Dt(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Jt=1<<32-Dt(t)+a|r<<a|n,Xt=o+e}else Jt=1<<o|r<<a|n,Xt=e}function lc(e){e.return!==null&&(Gr(e,1),Sh(e,1,0))}function cc(e){for(;e===Qo;)Qo=wn[--xn],wn[xn]=null,Jo=wn[--xn],wn[xn]=null;for(;e===en;)en=pt[--mt],pt[mt]=null,Xt=pt[--mt],pt[mt]=null,Jt=pt[--mt],pt[mt]=null}var it=null,ot=null,fe=!1,Nt=null;function Ah(e,t){var r=ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function U0(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=Cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=en!==null?{id:Jt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,ot=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(fe){var t=ot;if(t){var r=t;if(!U0(e,t)){if(sl(e))throw Error(L(418));t=Cr(r.nextSibling);var n=it;t&&U0(e,t)?Ah(n,r):(e.flags=e.flags&-4097|2,fe=!1,it=e)}}else{if(sl(e))throw Error(L(418));e.flags=e.flags&-4097|2,fe=!1,it=e}}}function G0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function co(e){if(e!==it)return!1;if(!fe)return G0(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nl(e.type,e.memoizedProps)),t&&(t=ot)){if(sl(e))throw Th(),Error(L(418));for(;t;)Ah(e,t),t=Cr(t.nextSibling)}if(G0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ot=Cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?Cr(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=ot;e;)e=Cr(e.nextSibling)}function zn(){ot=it=null,fe=!1}function dc(e){Nt===null?Nt=[e]:Nt.push(e)}var e1=cr.ReactCurrentBatchConfig;function Zn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(L(309));var n=r.stateNode}if(!n)throw Error(L(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=a.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!r._owner)throw Error(L(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function V0(e){var t=e._init;return t(e._payload)}function Ch(e){function t(b,v){if(e){var w=b.deletions;w===null?(b.deletions=[v],b.flags|=16):w.push(v)}}function r(b,v){if(!e)return null;for(;v!==null;)t(b,v),v=v.sibling;return null}function n(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function a(b,v){return b=Mr(b,v),b.index=0,b.sibling=null,b}function o(b,v,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<v?(b.flags|=2,v):w):(b.flags|=2,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=2),b}function s(b,v,w,P){return v===null||v.tag!==6?(v=fs(w,b.mode,P),v.return=b,v):(v=a(v,w),v.return=b,v)}function l(b,v,w,P){var M=w.type;return M===mn?p(b,v,w.props.children,P,w.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&V0(M)===v.type)?(P=a(v,w.props),P.ref=Zn(b,v,w),P.return=b,P):(P=Ro(w.type,w.key,w.props,null,b.mode,P),P.ref=Zn(b,v,w),P.return=b,P)}function u(b,v,w,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=gs(w,b.mode,P),v.return=b,v):(v=a(v,w.children||[]),v.return=b,v)}function p(b,v,w,P,M){return v===null||v.tag!==7?(v=Jr(w,b.mode,P,M),v.return=b,v):(v=a(v,w),v.return=b,v)}function f(b,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fs(""+v,b.mode,w),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return w=Ro(v.type,v.key,v.props,null,b.mode,w),w.ref=Zn(b,null,v),w.return=b,w;case pn:return v=gs(v,b.mode,w),v.return=b,v;case fr:var P=v._init;return f(b,P(v._payload),w)}if(na(v)||Yn(v))return v=Jr(v,b.mode,w,null),v.return=b,v;uo(b,v)}return null}function y(b,v,w,P){var M=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return M!==null?null:s(b,v,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:return w.key===M?l(b,v,w,P):null;case pn:return w.key===M?u(b,v,w,P):null;case fr:return M=w._init,y(b,v,M(w._payload),P)}if(na(w)||Yn(w))return M!==null?null:p(b,v,w,P,null);uo(b,w)}return null}function x(b,v,w,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return b=b.get(w)||null,s(v,b,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Za:return b=b.get(P.key===null?w:P.key)||null,l(v,b,P,M);case pn:return b=b.get(P.key===null?w:P.key)||null,u(v,b,P,M);case fr:var _=P._init;return x(b,v,w,_(P._payload),M)}if(na(P)||Yn(P))return b=b.get(w)||null,p(v,b,P,M,null);uo(v,P)}return null}function T(b,v,w,P){for(var M=null,_=null,B=v,z=v=0,W=null;B!==null&&z<w.length;z++){B.index>z?(W=B,B=null):W=B.sibling;var U=y(b,B,w[z],P);if(U===null){B===null&&(B=W);break}e&&B&&U.alternate===null&&t(b,B),v=o(U,v,z),_===null?M=U:_.sibling=U,_=U,B=W}if(z===w.length)return r(b,B),fe&&Gr(b,z),M;if(B===null){for(;z<w.length;z++)B=f(b,w[z],P),B!==null&&(v=o(B,v,z),_===null?M=B:_.sibling=B,_=B);return fe&&Gr(b,z),M}for(B=n(b,B);z<w.length;z++)W=x(B,b,z,w[z],P),W!==null&&(e&&W.alternate!==null&&B.delete(W.key===null?z:W.key),v=o(W,v,z),_===null?M=W:_.sibling=W,_=W);return e&&B.forEach(function(J){return t(b,J)}),fe&&Gr(b,z),M}function A(b,v,w,P){var M=Yn(w);if(typeof M!="function")throw Error(L(150));if(w=M.call(w),w==null)throw Error(L(151));for(var _=M=null,B=v,z=v=0,W=null,U=w.next();B!==null&&!U.done;z++,U=w.next()){B.index>z?(W=B,B=null):W=B.sibling;var J=y(b,B,U.value,P);if(J===null){B===null&&(B=W);break}e&&B&&J.alternate===null&&t(b,B),v=o(J,v,z),_===null?M=J:_.sibling=J,_=J,B=W}if(U.done)return r(b,B),fe&&Gr(b,z),M;if(B===null){for(;!U.done;z++,U=w.next())U=f(b,U.value,P),U!==null&&(v=o(U,v,z),_===null?M=U:_.sibling=U,_=U);return fe&&Gr(b,z),M}for(B=n(b,B);!U.done;z++,U=w.next())U=x(B,b,z,U.value,P),U!==null&&(e&&U.alternate!==null&&B.delete(U.key===null?z:U.key),v=o(U,v,z),_===null?M=U:_.sibling=U,_=U);return e&&B.forEach(function(X){return t(b,X)}),fe&&Gr(b,z),M}function N(b,v,w,P){if(typeof w=="object"&&w!==null&&w.type===mn&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:e:{for(var M=w.key,_=v;_!==null;){if(_.key===M){if(M=w.type,M===mn){if(_.tag===7){r(b,_.sibling),v=a(_,w.props.children),v.return=b,b=v;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&V0(M)===_.type){r(b,_.sibling),v=a(_,w.props),v.ref=Zn(b,_,w),v.return=b,b=v;break e}r(b,_);break}else t(b,_);_=_.sibling}w.type===mn?(v=Jr(w.props.children,b.mode,P,w.key),v.return=b,b=v):(P=Ro(w.type,w.key,w.props,null,b.mode,P),P.ref=Zn(b,v,w),P.return=b,b=P)}return i(b);case pn:e:{for(_=w.key;v!==null;){if(v.key===_)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){r(b,v.sibling),v=a(v,w.children||[]),v.return=b,b=v;break e}else{r(b,v);break}else t(b,v);v=v.sibling}v=gs(w,b.mode,P),v.return=b,b=v}return i(b);case fr:return _=w._init,N(b,v,_(w._payload),P)}if(na(w))return T(b,v,w,P);if(Yn(w))return A(b,v,w,P);uo(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(r(b,v.sibling),v=a(v,w),v.return=b,b=v):(r(b,v),v=fs(w,b.mode,P),v.return=b,b=v),i(b)):r(b,v)}return N}var Rn=Ch(!0),Ph=Ch(!1),Xo=Lr(null),Zo=null,kn=null,uc=null;function hc(){uc=kn=Zo=null}function pc(e){var t=Xo.current;pe(Xo),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Dn(e,t){Zo=e,uc=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Zo===null)throw Error(L(308));kn=e,Zo.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Yr=null;function mc(e){Yr===null?Yr=[e]:Yr.push(e)}function Nh(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,mc(t)):(r.next=a.next,a.next=r),t.interleaved=r,ar(e,n)}function ar(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gr=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,re&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,ar(e,r)}return a=n.interleaved,a===null?(t.next=t,mc(n)):(t.next=a.next,a.next=t),n.interleaved=t,ar(e,r)}function Mo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}function $0(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ei(e,t,r,n){var a=e.updateQueue;gr=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=l))}if(o!==null){var f=a.baseState;i=0,p=u=l=null,s=o;do{var y=s.lane,x=s.eventTime;if((n&y)===y){p!==null&&(p=p.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,A=s;switch(y=t,x=r,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(x,f,y);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,y=typeof T=="function"?T.call(x,f,y):T,y==null)break e;f=xe({},f,y);break e;case 2:gr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[s]:y.push(s))}else x={eventTime:x,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=x,l=f):p=p.next=x,i|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);if(p===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=f}}function Y0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(L(191,a));a.call(n)}}}var Ha={},Ht=Lr(Ha),Da=Lr(Ha),Ma=Lr(Ha);function Kr(e){if(e===Ha)throw Error(L(174));return e}function gc(e,t){switch(de(Ma,t),de(Da,e),de(Ht,Ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}pe(Ht),de(Ht,t)}function qn(){pe(Ht),pe(Da),pe(Ma)}function Mh(e){Kr(Ma.current);var t=Kr(Ht.current),r=Hs(t,e.type);t!==r&&(de(Da,e),de(Ht,r))}function yc(e){Da.current===e&&(pe(Ht),pe(Da))}var ve=Lr(0);function ti(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function vc(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Eo=cr.ReactCurrentDispatcher,ds=cr.ReactCurrentBatchConfig,tn=0,we=null,De=null,_e=null,ri=!1,pa=!1,Ea=0,t1=0;function qe(){throw Error(L(321))}function bc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Et(e[r],t[r]))return!1;return!0}function wc(e,t,r,n,a,o){if(tn=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?o1:i1,e=r(n,a),pa){o=0;do{if(pa=!1,Ea=0,25<=o)throw Error(L(301));o+=1,_e=De=null,t.updateQueue=null,Eo.current=s1,e=r(n,a)}while(pa)}if(Eo.current=ni,t=De!==null&&De.next!==null,tn=0,_e=De=we=null,ri=!1,t)throw Error(L(300));return e}function xc(){var e=Ea!==0;return Ea=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?we.memoizedState=_e=e:_e=_e.next=e,_e}function bt(){if(De===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=_e===null?we.memoizedState:_e.next;if(t!==null)_e=t,De=e;else{if(e===null)throw Error(L(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},_e===null?we.memoizedState=_e=e:_e=_e.next=e}return _e}function _a(e,t){return typeof t=="function"?t(e):t}function us(e){var t=bt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var n=De,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var s=i=null,l=null,u=o;do{var p=u.lane;if((tn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,i=n):l=l.next=f,we.lanes|=p,rn|=p}u=u.next}while(u!==null&&u!==o);l===null?i=n:l.next=s,Et(n,t.memoizedState)||(Je=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,we.lanes|=o,rn|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hs(e){var t=bt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Et(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Eh(){}function _h(e,t){var r=we,n=bt(),a=t(),o=!Et(n.memoizedState,a);if(o&&(n.memoizedState=a,Je=!0),n=n.queue,kc(zh.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,Ba(9,Ih.bind(null,r,n,a,t),void 0,null),Be===null)throw Error(L(349));tn&30||Bh(r,t,a)}return a}function Bh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ih(e,t,r,n){t.value=r,t.getSnapshot=n,Rh(t)&&qh(e)}function zh(e,t,r){return r(function(){Rh(t)&&qh(e)})}function Rh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Et(e,r)}catch{return!0}}function qh(e){var t=ar(e,1);t!==null&&Mt(t,e,1,-1)}function K0(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t.queue=e,e=e.dispatch=a1.bind(null,we,e),[t.memoizedState,e]}function Ba(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Lh(){return bt().memoizedState}function _o(e,t,r,n){var a=qt();we.flags|=e,a.memoizedState=Ba(1|t,r,void 0,n===void 0?null:n)}function Ai(e,t,r,n){var a=bt();n=n===void 0?null:n;var o=void 0;if(De!==null){var i=De.memoizedState;if(o=i.destroy,n!==null&&bc(n,i.deps)){a.memoizedState=Ba(t,r,o,n);return}}we.flags|=e,a.memoizedState=Ba(1|t,r,o,n)}function Q0(e,t){return _o(8390656,8,e,t)}function kc(e,t){return Ai(2048,8,e,t)}function jh(e,t){return Ai(4,2,e,t)}function Fh(e,t){return Ai(4,4,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wh(e,t,r){return r=r!=null?r.concat([e]):null,Ai(4,4,Oh.bind(null,t,e),r)}function Sc(){}function Hh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Uh(e,t){var r=bt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&bc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Gh(e,t,r){return tn&21?(Et(r,t)||(r=Qu(),we.lanes|=r,rn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=r)}function r1(e,t){var r=se;se=r!==0&&4>r?r:4,e(!0);var n=ds.transition;ds.transition={};try{e(!1),t()}finally{se=r,ds.transition=n}}function Vh(){return bt().memoizedState}function n1(e,t,r){var n=Dr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},$h(e))Yh(t,r);else if(r=Nh(e,t,r,n),r!==null){var a=Ue();Mt(r,e,n,a),Kh(r,t,n)}}function a1(e,t,r){var n=Dr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if($h(e))Yh(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,r);if(a.hasEagerState=!0,a.eagerState=s,Et(s,i)){var l=t.interleaved;l===null?(a.next=a,mc(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Nh(e,t,a,n),r!==null&&(a=Ue(),Mt(r,e,n,a),Kh(r,t,n))}}function $h(e){var t=e.alternate;return e===we||t!==null&&t===we}function Yh(e,t){pa=ri=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Kh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}var ni={readContext:vt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},o1={readContext:vt,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Q0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,_o(4194308,4,Oh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var r=qt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=qt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=n1.bind(null,we,e),[n.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:K0,useDebugValue:Sc,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=K0(!1),t=e[0];return e=r1.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=we,a=qt();if(fe){if(r===void 0)throw Error(L(407));r=r()}else{if(r=t(),Be===null)throw Error(L(349));tn&30||Bh(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Q0(zh.bind(null,n,o,e),[e]),n.flags|=2048,Ba(9,Ih.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=qt(),t=Be.identifierPrefix;if(fe){var r=Xt,n=Jt;r=(n&~(1<<32-Dt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ea++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=t1++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i1={readContext:vt,useCallback:Hh,useContext:vt,useEffect:kc,useImperativeHandle:Wh,useInsertionEffect:jh,useLayoutEffect:Fh,useMemo:Uh,useReducer:us,useRef:Lh,useState:function(){return us(_a)},useDebugValue:Sc,useDeferredValue:function(e){var t=bt();return Gh(t,De.memoizedState,e)},useTransition:function(){var e=us(_a)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:_h,useId:Vh,unstable_isNewReconciler:!1},s1={readContext:vt,useCallback:Hh,useContext:vt,useEffect:kc,useImperativeHandle:Wh,useInsertionEffect:jh,useLayoutEffect:Fh,useMemo:Uh,useReducer:hs,useRef:Lh,useState:function(){return hs(_a)},useDebugValue:Sc,useDeferredValue:function(e){var t=bt();return De===null?t.memoizedState=e:Gh(t,De.memoizedState,e)},useTransition:function(){var e=hs(_a)[0],t=bt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:_h,useId:Vh,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function dl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:xe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ti={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ue(),a=Dr(e),o=Zt(n,a);o.payload=t,r!=null&&(o.callback=r),t=Pr(e,o,a),t!==null&&(Mt(t,e,a,n),Mo(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ue(),a=Dr(e),o=Zt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Pr(e,o,a),t!==null&&(Mt(t,e,a,n),Mo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ue(),n=Dr(e),a=Zt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Pr(e,a,n),t!==null&&(Mt(t,e,n,r),Mo(t,e,n))}};function J0(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!Ta(r,n)||!Ta(a,o):!0}function Qh(e,t,r){var n=!1,a=Br,o=t.contextType;return typeof o=="object"&&o!==null?o=vt(o):(a=Ze(t)?Zr:Fe.current,n=t.contextTypes,o=(n=n!=null)?In(e,a):Br),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function X0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function ul(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},fc(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=vt(o):(o=Ze(t)?Zr:Fe.current,a.context=In(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(dl(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ti.enqueueReplaceState(a,a.state,null),ei(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var r="",n=t;do r+=zf(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function ps(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function Jh(e,t,r){r=Zt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oi||(oi=!0,kl=n),hl(e,t)},r}function Xh(e,t,r){r=Zt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){hl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){hl(e,t),typeof n!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Z0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new l1;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=k1.bind(null,e,t,r),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Zt(-1,1),t.tag=2,Pr(r,t,1))),r.lanes|=1),e)}var c1=cr.ReactCurrentOwner,Je=!1;function We(e,t,r,n){t.child=e===null?Ph(t,null,r,n):Rn(t,e.child,r,n)}function rd(e,t,r,n,a){r=r.render;var o=t.ref;return Dn(t,a),n=wc(e,t,r,n,o,a),r=xc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,or(e,t,a)):(fe&&r&&lc(t),t.flags|=1,We(e,t,n,a),t.child)}function nd(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Ec(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Zh(e,t,o,n,a)):(e=Ro(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ta,r(i,n)&&e.ref===t.ref)return or(e,t,a)}return t.flags|=1,e=Mr(o,n),e.ref=t.ref,e.return=t,t.child=e}function Zh(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(Ta(o,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,or(e,t,a)}return pl(e,t,r,n,a)}function ep(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(An,nt),nt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(An,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,de(An,nt),nt|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,de(An,nt),nt|=n;return We(e,t,a,r),t.child}function tp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,r,n,a){var o=Ze(r)?Zr:Fe.current;return o=In(t,o),Dn(t,a),r=wc(e,t,r,n,o,a),n=xc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,or(e,t,a)):(fe&&n&&lc(t),t.flags|=1,We(e,t,r,a),t.child)}function ad(e,t,r,n,a){if(Ze(r)){var o=!0;Ko(t)}else o=!1;if(Dn(t,a),t.stateNode===null)Bo(e,t),Qh(t,r,n),ul(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Ze(r)?Zr:Fe.current,u=In(t,u));var p=r.getDerivedStateFromProps,f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||l!==u)&&X0(t,i,n,u),gr=!1;var y=t.memoizedState;i.state=y,ei(t,n,i,a),l=t.memoizedState,s!==n||y!==l||Xe.current||gr?(typeof p=="function"&&(dl(t,r,p,n),l=t.memoizedState),(s=gr||J0(t,r,s,n,y,l,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),i.props=n,i.state=l,i.context=u,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Dh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Tt(t.type,s),i.props=u,f=t.pendingProps,y=i.context,l=r.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=Ze(r)?Zr:Fe.current,l=In(t,l));var x=r.getDerivedStateFromProps;(p=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||y!==l)&&X0(t,i,n,l),gr=!1,y=t.memoizedState,i.state=y,ei(t,n,i,a);var T=t.memoizedState;s!==f||y!==T||Xe.current||gr?(typeof x=="function"&&(dl(t,r,x,n),T=t.memoizedState),(u=gr||J0(t,r,u,n,y,T,l)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,T,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,T,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),i.props=n,i.state=T,i.context=l,n=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return ml(e,t,r,n,o,a)}function ml(e,t,r,n,a,o){tp(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&H0(t,r,!1),or(e,t,o);n=t.stateNode,c1.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=Rn(t,e.child,null,o),t.child=Rn(t,null,s,o)):We(e,t,s,o),t.memoizedState=n.state,a&&H0(t,r,!0),t.child}function rp(e){var t=e.stateNode;t.pendingContext?W0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&W0(e,t.context,!1),gc(e,t.containerInfo)}function od(e,t,r,n,a){return zn(),dc(a),t.flags|=256,We(e,t,r,n),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function np(e,t,r){var n=t.pendingProps,a=ve.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),de(ve,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ni(i,n,0,null),e=Jr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gl(r),t.memoizedState=fl,e):Ac(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return d1(e,t,i,n,s,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Mr(a,l),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=Mr(s,o):(o=Jr(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?gl(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=fl,n}return o=e.child,e=o.sibling,n=Mr(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ac(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,r,n){return n!==null&&dc(n),Rn(t,e.child,null,r),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d1(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=ps(Error(L(422))),ho(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=Ni({mode:"visible",children:n.children},a,0,null),o=Jr(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Rn(t,e.child,null,i),t.child.memoizedState=gl(i),t.memoizedState=fl,o);if(!(t.mode&1))return ho(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(L(419)),n=ps(o,n,void 0),ho(e,t,i,n)}if(s=(i&e.childLanes)!==0,Je||s){if(n=Be,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,ar(e,a),Mt(n,e,a,-1))}return Mc(),n=ps(Error(L(421))),ho(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=S1.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ot=Cr(a.nextSibling),it=t,fe=!0,Nt=null,e!==null&&(pt[mt++]=Jt,pt[mt++]=Xt,pt[mt++]=en,Jt=e.id,Xt=e.overflow,en=t),t=Ac(t,n.children),t.flags|=4096,t)}function id(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cl(e.return,t,r)}function ms(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function ap(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(We(e,t,n.children,r),n=ve.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,r,t);else if(e.tag===19)id(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(ve,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ti(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ms(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ti(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ms(t,!0,r,null,o);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function or(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,r=Mr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Mr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function u1(e,t,r){switch(t.tag){case 3:rp(t),zn();break;case 5:Mh(t);break;case 1:Ze(t.type)&&Ko(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;de(Xo,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):r&t.child.childLanes?np(e,t,r):(de(ve,ve.current&1),e=or(e,t,r),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ap(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),de(ve,ve.current),n)break;return null;case 22:case 23:return t.lanes=0,ep(e,t,r)}return or(e,t,r)}var op,yl,ip,sp;op=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};yl=function(){};ip=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Kr(Ht.current);var o=null;switch(r){case"input":a=js(e,a),n=js(e,n),o=[];break;case"select":a=xe({},a,{value:void 0}),n=xe({},n,{value:void 0}),o=[];break;case"textarea":a=Ws(e,a),n=Ws(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=$o)}Us(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(s=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(r||(r={}),r[i]=l[i])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};sp=function(e,t,r,n){r!==n&&(t.flags|=4)};function ea(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function h1(e,t,r){var n=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ze(t.type)&&Yo(),Le(t),null;case 3:return n=t.stateNode,qn(),pe(Xe),pe(Fe),vc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Tl(Nt),Nt=null))),yl(e,t),Le(t),null;case 5:yc(t);var a=Kr(Ma.current);if(r=t.type,e!==null&&t.stateNode!=null)ip(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(L(166));return Le(t),null}if(e=Kr(Ht.current),co(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[jt]=t,n[Na]=o,e=(t.mode&1)!==0,r){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<oa.length;a++)he(oa[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":f0(n,o),he("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},he("invalid",n);break;case"textarea":y0(n,o),he("invalid",n)}Us(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&lo(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&lo(n.textContent,s,e),a=["children",""+s]):va.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&he("scroll",n)}switch(r){case"input":eo(n),g0(n,o,!0);break;case"textarea":eo(n),v0(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=$o)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[jt]=t,e[Na]=n,op(e,t,!1,!1),t.stateNode=e;e:{switch(i=Gs(r,n),r){case"dialog":he("cancel",e),he("close",e),a=n;break;case"iframe":case"object":case"embed":he("load",e),a=n;break;case"video":case"audio":for(a=0;a<oa.length;a++)he(oa[a],e);a=n;break;case"source":he("error",e),a=n;break;case"img":case"image":case"link":he("error",e),he("load",e),a=n;break;case"details":he("toggle",e),a=n;break;case"input":f0(e,n),a=js(e,n),he("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=xe({},n,{value:void 0}),he("invalid",e);break;case"textarea":y0(e,n),a=Ws(e,n),he("invalid",e);break;default:a=n}Us(r,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Lu(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ru(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ba(e,l):typeof l=="number"&&ba(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(va.hasOwnProperty(o)?l!=null&&o==="onScroll"&&he("scroll",e):l!=null&&Yl(e,o,l,i))}switch(r){case"input":eo(e),g0(e,n,!1);break;case"textarea":eo(e),v0(e);break;case"option":n.value!=null&&e.setAttribute("value",""+_r(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Tn(e,!!n.multiple,o,!1):n.defaultValue!=null&&Tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=$o)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)sp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(L(166));if(r=Kr(Ma.current),Kr(Ht.current),co(t)){if(n=t.stateNode,r=t.memoizedProps,n[jt]=t,(o=n.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:lo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[jt]=t,t.stateNode=n}return Le(t),null;case 13:if(pe(ve),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&ot!==null&&t.mode&1&&!(t.flags&128))Th(),zn(),t.flags|=98560,o=!1;else if(o=co(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[jt]=t}else zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else Nt!==null&&(Tl(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Me===0&&(Me=3):Mc())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return qn(),yl(e,t),e===null&&Ca(t.stateNode.containerInfo),Le(t),null;case 10:return pc(t.type._context),Le(t),null;case 17:return Ze(t.type)&&Yo(),Le(t),null;case 19:if(pe(ve),o=t.memoizedState,o===null)return Le(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)ea(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ti(e),i!==null){for(t.flags|=128,ea(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>jn&&(t.flags|=128,n=!0,ea(o,!1),t.lanes=4194304)}else{if(!n)if(e=ti(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ea(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!fe)return Le(t),null}else 2*Te()-o.renderingStartTime>jn&&r!==1073741824&&(t.flags|=128,n=!0,ea(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,r=ve.current,de(ve,n?r&1|2:r&1),t):(Le(t),null);case 22:case 23:return Dc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?nt&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function p1(e,t){switch(cc(t),t.tag){case 1:return Ze(t.type)&&Yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),pe(Xe),pe(Fe),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return qn(),null;case 10:return pc(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var po=!1,je=!1,m1=typeof WeakSet=="function"?WeakSet:Set,G=null;function Sn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Se(e,t,n)}else r.current=null}function vl(e,t,r){try{r()}catch(n){Se(e,t,n)}}var sd=!1;function f1(e,t){if(tl=Uo,e=hh(),sc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,s=-1,l=-1,u=0,p=0,f=e,y=null;t:for(;;){for(var x;f!==r||a!==0&&f.nodeType!==3||(s=i+a),f!==o||n!==0&&f.nodeType!==3||(l=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)y=f,f=x;for(;;){if(f===e)break t;if(y===r&&++u===a&&(s=i),y===o&&++p===n&&(l=i),(x=f.nextSibling)!==null)break;f=y,y=f.parentNode}f=x}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(rl={focusedElem:e,selectionRange:r},Uo=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,N=T.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?A:Tt(t.type,A),N);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(P){Se(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return T=sd,sd=!1,T}function ma(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&vl(t,r,o)}a=a.next}while(a!==n)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function bl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function lp(e){var t=e.alternate;t!==null&&(e.alternate=null,lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Na],delete t[ol],delete t[Jg],delete t[Xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$o));else if(n!==4&&(e=e.child,e!==null))for(wl(e,t,r),e=e.sibling;e!==null;)wl(e,t,r),e=e.sibling}function xl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}var Ie=null,Ct=!1;function hr(e,t,r){for(r=r.child;r!==null;)dp(e,t,r),r=r.sibling}function dp(e,t,r){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(vi,r)}catch{}switch(r.tag){case 5:je||Sn(r,t);case 6:var n=Ie,a=Ct;Ie=null,hr(e,t,r),Ie=n,Ct=a,Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ie.removeChild(r.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?ss(e.parentNode,r):e.nodeType===1&&ss(e,r),Sa(e)):ss(Ie,r.stateNode));break;case 4:n=Ie,a=Ct,Ie=r.stateNode.containerInfo,Ct=!0,hr(e,t,r),Ie=n,Ct=a;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&vl(r,t,i),a=a.next}while(a!==n)}hr(e,t,r);break;case 1:if(!je&&(Sn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Se(r,t,s)}hr(e,t,r);break;case 21:hr(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,hr(e,t,r),je=n):hr(e,t,r);break;default:hr(e,t,r)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new m1),t.forEach(function(n){var a=A1.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function At(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,Ct=!1;break e;case 3:Ie=s.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=s.stateNode.containerInfo,Ct=!0;break e}s=s.return}if(Ie===null)throw Error(L(160));dp(o,i,a),Ie=null,Ct=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){Se(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)up(t,e),t=t.sibling}function up(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Rt(e),n&4){try{ma(3,e,e.return),Ci(3,e)}catch(A){Se(e,e.return,A)}try{ma(5,e,e.return)}catch(A){Se(e,e.return,A)}}break;case 1:At(t,e),Rt(e),n&512&&r!==null&&Sn(r,r.return);break;case 5:if(At(t,e),Rt(e),n&512&&r!==null&&Sn(r,r.return),e.flags&32){var a=e.stateNode;try{ba(a,"")}catch(A){Se(e,e.return,A)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Bu(a,o),Gs(s,i);var u=Gs(s,o);for(i=0;i<l.length;i+=2){var p=l[i],f=l[i+1];p==="style"?Lu(a,f):p==="dangerouslySetInnerHTML"?Ru(a,f):p==="children"?ba(a,f):Yl(a,p,f,u)}switch(s){case"input":Fs(a,o);break;case"textarea":Iu(a,o);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Tn(a,!!o.multiple,x,!1):y!==!!o.multiple&&(o.defaultValue!=null?Tn(a,!!o.multiple,o.defaultValue,!0):Tn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Na]=o}catch(A){Se(e,e.return,A)}}break;case 6:if(At(t,e),Rt(e),n&4){if(e.stateNode===null)throw Error(L(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(A){Se(e,e.return,A)}}break;case 3:if(At(t,e),Rt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Sa(t.containerInfo)}catch(A){Se(e,e.return,A)}break;case 4:At(t,e),Rt(e);break;case 13:At(t,e),Rt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Pc=Te())),n&4&&cd(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||p,At(t,e),je=u):At(t,e),Rt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(G=e,p=e.child;p!==null;){for(f=G=p;G!==null;){switch(y=G,x=y.child,y.tag){case 0:case 11:case 14:case 15:ma(4,y,y.return);break;case 1:Sn(y,y.return);var T=y.stateNode;if(typeof T.componentWillUnmount=="function"){n=y,r=y.return;try{t=n,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(A){Se(n,r,A)}}break;case 5:Sn(y,y.return);break;case 22:if(y.memoizedState!==null){ud(f);continue}}x!==null?(x.return=y,G=x):ud(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=qu("display",i))}catch(A){Se(e,e.return,A)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){Se(e,e.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:At(t,e),Rt(e),n&4&&cd(e);break;case 21:break;default:At(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(cp(r)){var n=r;break e}r=r.return}throw Error(L(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(ba(a,""),n.flags&=-33);var o=ld(e);xl(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,s=ld(e);wl(e,s,i);break;default:throw Error(L(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g1(e,t,r){G=e,hp(e)}function hp(e,t,r){for(var n=(e.mode&1)!==0;G!==null;){var a=G,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||po;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||je;s=po;var u=je;if(po=i,(je=l)&&!u)for(G=a;G!==null;)i=G,l=i.child,i.tag===22&&i.memoizedState!==null?hd(a):l!==null?(l.return=i,G=l):hd(a);for(;o!==null;)G=o,hp(o),o=o.sibling;G=a,po=s,je=u}dd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,G=o):dd(e)}}function dd(e){for(;G!==null;){var t=G;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Ci(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Y0(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Y0(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}je||t.flags&512&&bl(t)}catch(y){Se(t,t.return,y)}}if(t===e){G=null;break}if(r=t.sibling,r!==null){r.return=t.return,G=r;break}G=t.return}}function ud(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var r=t.sibling;if(r!==null){r.return=t.return,G=r;break}G=t.return}}function hd(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ci(4,t)}catch(l){Se(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Se(t,a,l)}}var o=t.return;try{bl(t)}catch(l){Se(t,o,l)}break;case 5:var i=t.return;try{bl(t)}catch(l){Se(t,i,l)}}}catch(l){Se(t,t.return,l)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var y1=Math.ceil,ai=cr.ReactCurrentDispatcher,Tc=cr.ReactCurrentOwner,yt=cr.ReactCurrentBatchConfig,re=0,Be=null,Pe=null,ze=0,nt=0,An=Lr(0),Me=0,Ia=null,rn=0,Pi=0,Cc=0,fa=null,Qe=null,Pc=0,jn=1/0,Yt=null,oi=!1,kl=null,Nr=null,mo=!1,wr=null,ii=0,ga=0,Sl=null,Io=-1,zo=0;function Ue(){return re&6?Te():Io!==-1?Io:Io=Te()}function Dr(e){return e.mode&1?re&2&&ze!==0?ze&-ze:e1.transition!==null?(zo===0&&(zo=Qu()),zo):(e=se,e!==0||(e=window.event,e=e===void 0?16:nh(e.type)),e):1}function Mt(e,t,r,n){if(50<ga)throw ga=0,Sl=null,Error(L(185));Fa(e,r,n),(!(re&2)||e!==Be)&&(e===Be&&(!(re&2)&&(Pi|=r),Me===4&&vr(e,ze)),et(e,n),r===1&&re===0&&!(t.mode&1)&&(jn=Te()+500,Si&&jr()))}function et(e,t){var r=e.callbackNode;eg(e,t);var n=Ho(e,e===Be?ze:0);if(n===0)r!==null&&x0(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&x0(r),t===1)e.tag===0?Zg(pd.bind(null,e)):kh(pd.bind(null,e)),Kg(function(){!(re&6)&&jr()}),r=null;else{switch(Ju(n)){case 1:r=Zl;break;case 4:r=Yu;break;case 16:r=Wo;break;case 536870912:r=Ku;break;default:r=Wo}r=wp(r,pp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function pp(e,t){if(Io=-1,zo=0,re&6)throw Error(L(327));var r=e.callbackNode;if(Mn()&&e.callbackNode!==r)return null;var n=Ho(e,e===Be?ze:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=si(e,n);else{t=n;var a=re;re|=2;var o=fp();(Be!==e||ze!==t)&&(Yt=null,jn=Te()+500,Qr(e,t));do try{w1();break}catch(s){mp(e,s)}while(!0);hc(),ai.current=o,re=a,Pe!==null?t=0:(Be=null,ze=0,t=Me)}if(t!==0){if(t===2&&(a=Qs(e),a!==0&&(n=a,t=Al(e,a))),t===1)throw r=Ia,Qr(e,0),vr(e,n),et(e,Te()),r;if(t===6)vr(e,n);else{if(a=e.current.alternate,!(n&30)&&!v1(a)&&(t=si(e,n),t===2&&(o=Qs(e),o!==0&&(n=o,t=Al(e,o))),t===1))throw r=Ia,Qr(e,0),vr(e,n),et(e,Te()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(L(345));case 2:Vr(e,Qe,Yt);break;case 3:if(vr(e,n),(n&130023424)===n&&(t=Pc+500-Te(),10<t)){if(Ho(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=al(Vr.bind(null,e,Qe,Yt),t);break}Vr(e,Qe,Yt);break;case 4:if(vr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-Dt(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*y1(n/1960))-n,10<n){e.timeoutHandle=al(Vr.bind(null,e,Qe,Yt),n);break}Vr(e,Qe,Yt);break;case 5:Vr(e,Qe,Yt);break;default:throw Error(L(329))}}}return et(e,Te()),e.callbackNode===r?pp.bind(null,e):null}function Al(e,t){var r=fa;return e.current.memoizedState.isDehydrated&&(Qr(e,t).flags|=256),e=si(e,t),e!==2&&(t=Qe,Qe=r,t!==null&&Tl(t)),e}function Tl(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function v1(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!Et(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~Cc,t&=~Pi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Dt(t),n=1<<r;e[r]=-1,t&=~n}}function pd(e){if(re&6)throw Error(L(327));Mn();var t=Ho(e,0);if(!(t&1))return et(e,Te()),null;var r=si(e,t);if(e.tag!==0&&r===2){var n=Qs(e);n!==0&&(t=n,r=Al(e,n))}if(r===1)throw r=Ia,Qr(e,0),vr(e,t),et(e,Te()),r;if(r===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vr(e,Qe,Yt),et(e,Te()),null}function Nc(e,t){var r=re;re|=1;try{return e(t)}finally{re=r,re===0&&(jn=Te()+500,Si&&jr())}}function nn(e){wr!==null&&wr.tag===0&&!(re&6)&&Mn();var t=re;re|=1;var r=yt.transition,n=se;try{if(yt.transition=null,se=1,e)return e()}finally{se=n,yt.transition=r,re=t,!(re&6)&&jr()}}function Dc(){nt=An.current,pe(An)}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Yg(r)),Pe!==null)for(r=Pe.return;r!==null;){var n=r;switch(cc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Yo();break;case 3:qn(),pe(Xe),pe(Fe),vc();break;case 5:yc(n);break;case 4:qn();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:pc(n.type._context);break;case 22:case 23:Dc()}r=r.return}if(Be=e,Pe=e=Mr(e.current,null),ze=nt=t,Me=0,Ia=null,Cc=Pi=rn=0,Qe=fa=null,Yr!==null){for(t=0;t<Yr.length;t++)if(r=Yr[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}Yr=null}return e}function mp(e,t){do{var r=Pe;try{if(hc(),Eo.current=ni,ri){for(var n=we.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ri=!1}if(tn=0,_e=De=we=null,pa=!1,Ea=0,Tc.current=null,r===null||r.return===null){Me=1,Ia=t,Pe=null;break}e:{var o=e,i=r.return,s=r,l=t;if(t=ze,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=s,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=ed(i);if(x!==null){x.flags&=-257,td(x,i,s,o,t),x.mode&1&&Z0(o,u,t),t=x,l=u;var T=t.updateQueue;if(T===null){var A=new Set;A.add(l),t.updateQueue=A}else T.add(l);break e}else{if(!(t&1)){Z0(o,u,t),Mc();break e}l=Error(L(426))}}else if(fe&&s.mode&1){var N=ed(i);if(N!==null){!(N.flags&65536)&&(N.flags|=256),td(N,i,s,o,t),dc(Ln(l,s));break e}}o=l=Ln(l,s),Me!==4&&(Me=2),fa===null?fa=[o]:fa.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=Jh(o,l,t);$0(o,b);break e;case 1:s=l;var v=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Nr===null||!Nr.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Xh(o,s,t);$0(o,P);break e}}o=o.return}while(o!==null)}yp(r)}catch(M){t=M,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function fp(){var e=ai.current;return ai.current=ni,e===null?ni:e}function Mc(){(Me===0||Me===3||Me===2)&&(Me=4),Be===null||!(rn&268435455)&&!(Pi&268435455)||vr(Be,ze)}function si(e,t){var r=re;re|=2;var n=fp();(Be!==e||ze!==t)&&(Yt=null,Qr(e,t));do try{b1();break}catch(a){mp(e,a)}while(!0);if(hc(),re=r,ai.current=n,Pe!==null)throw Error(L(261));return Be=null,ze=0,Me}function b1(){for(;Pe!==null;)gp(Pe)}function w1(){for(;Pe!==null&&!Gf();)gp(Pe)}function gp(e){var t=bp(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?yp(e):Pe=t,Tc.current=null}function yp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=p1(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Pe=null;return}}else if(r=h1(r,t,nt),r!==null){Pe=r;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Me===0&&(Me=5)}function Vr(e,t,r){var n=se,a=yt.transition;try{yt.transition=null,se=1,x1(e,t,r,n)}finally{yt.transition=a,se=n}return null}function x1(e,t,r,n){do Mn();while(wr!==null);if(re&6)throw Error(L(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(tg(e,o),e===Be&&(Pe=Be=null,ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||mo||(mo=!0,wp(Wo,function(){return Mn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var i=se;se=1;var s=re;re|=4,Tc.current=null,f1(e,r),up(r,e),Og(rl),Uo=!!tl,rl=tl=null,e.current=r,g1(r),Vf(),re=s,se=i,yt.transition=o}else e.current=r;if(mo&&(mo=!1,wr=e,ii=a),o=e.pendingLanes,o===0&&(Nr=null),Kf(r.stateNode),et(e,Te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(oi)throw oi=!1,e=kl,kl=null,e;return ii&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===Sl?ga++:(ga=0,Sl=e):ga=0,jr(),null}function Mn(){if(wr!==null){var e=Ju(ii),t=yt.transition,r=se;try{if(yt.transition=null,se=16>e?16:e,wr===null)var n=!1;else{if(e=wr,wr=null,ii=0,re&6)throw Error(L(331));var a=re;for(re|=4,G=e.current;G!==null;){var o=G,i=o.child;if(G.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(G=u;G!==null;){var p=G;switch(p.tag){case 0:case 11:case 15:ma(8,p,o)}var f=p.child;if(f!==null)f.return=p,G=f;else for(;G!==null;){p=G;var y=p.sibling,x=p.return;if(lp(p),p===u){G=null;break}if(y!==null){y.return=x,G=y;break}G=x}}}var T=o.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}G=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,G=i;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ma(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,G=b;break e}G=o.return}}var v=e.current;for(G=v;G!==null;){i=G;var w=i.child;if(i.subtreeFlags&2064&&w!==null)w.return=i,G=w;else e:for(i=v;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ci(9,s)}}catch(M){Se(s,s.return,M)}if(s===i){G=null;break e}var P=s.sibling;if(P!==null){P.return=s.return,G=P;break e}G=s.return}}if(re=a,jr(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(vi,e)}catch{}n=!0}return n}finally{se=r,yt.transition=t}}return!1}function md(e,t,r){t=Ln(r,t),t=Jh(e,t,1),e=Pr(e,t,1),t=Ue(),e!==null&&(Fa(e,1,t),et(e,t))}function Se(e,t,r){if(e.tag===3)md(e,e,r);else for(;t!==null;){if(t.tag===3){md(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nr===null||!Nr.has(n))){e=Ln(r,e),e=Xh(t,e,1),t=Pr(t,e,1),e=Ue(),t!==null&&(Fa(t,1,e),et(t,e));break}}t=t.return}}function k1(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&r,Be===e&&(ze&r)===r&&(Me===4||Me===3&&(ze&130023424)===ze&&500>Te()-Pc?Qr(e,0):Cc|=r),et(e,t)}function vp(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var r=Ue();e=ar(e,t),e!==null&&(Fa(e,t,r),et(e,r))}function S1(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),vp(e,r)}function A1(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(L(314))}n!==null&&n.delete(t),vp(e,r)}var bp;bp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Je=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Je=!1,u1(e,t,r);Je=!!(e.flags&131072)}else Je=!1,fe&&t.flags&1048576&&Sh(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Bo(e,t),e=t.pendingProps;var a=In(t,Fe.current);Dn(t,r),a=wc(null,t,n,e,a,r);var o=xc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(n)?(o=!0,Ko(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fc(t),a.updater=Ti,t.stateNode=a,a._reactInternals=t,ul(t,n,e,r),t=ml(null,t,n,!0,o,r)):(t.tag=0,fe&&o&&lc(t),We(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=C1(n),e=Tt(n,e),a){case 0:t=pl(null,t,n,e,r);break e;case 1:t=ad(null,t,n,e,r);break e;case 11:t=rd(null,t,n,e,r);break e;case 14:t=nd(null,t,n,Tt(n.type,e),r);break e}throw Error(L(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),pl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),ad(e,t,n,a,r);case 3:e:{if(rp(t),e===null)throw Error(L(387));n=t.pendingProps,o=t.memoizedState,a=o.element,Dh(e,t),ei(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ln(Error(L(423)),t),t=od(e,t,n,r,a);break e}else if(n!==a){a=Ln(Error(L(424)),t),t=od(e,t,n,r,a);break e}else for(ot=Cr(t.stateNode.containerInfo.firstChild),it=t,fe=!0,Nt=null,r=Ph(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(zn(),n===a){t=or(e,t,r);break e}We(e,t,n,r)}t=t.child}return t;case 5:return Mh(t),e===null&&ll(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,nl(n,a)?i=null:o!==null&&nl(n,o)&&(t.flags|=32),tp(e,t),We(e,t,i,r),t.child;case 6:return e===null&&ll(t),null;case 13:return np(e,t,r);case 4:return gc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Rn(t,null,n,r):We(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),rd(e,t,n,a,r);case 7:return We(e,t,t.pendingProps,r),t.child;case 8:return We(e,t,t.pendingProps.children,r),t.child;case 12:return We(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,de(Xo,n._currentValue),n._currentValue=i,o!==null)if(Et(o.value,i)){if(o.children===a.children&&!Xe.current){t=or(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=Zt(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),cl(o.return,r,t),s.lanes|=r;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(L(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),cl(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}We(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Dn(t,r),a=vt(a),n=n(a),t.flags|=1,We(e,t,n,r),t.child;case 14:return n=t.type,a=Tt(n,t.pendingProps),a=Tt(n.type,a),nd(e,t,n,a,r);case 15:return Zh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),Bo(e,t),t.tag=1,Ze(n)?(e=!0,Ko(t)):e=!1,Dn(t,r),Qh(t,n,a),ul(t,n,a,r),ml(null,t,n,!0,e,r);case 19:return ap(e,t,r);case 22:return ep(e,t,r)}throw Error(L(156,t.tag))};function wp(e,t){return $u(e,t)}function T1(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,r,n){return new T1(e,t,r,n)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C1(e){if(typeof e=="function")return Ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Jl)return 14}return 2}function Mr(e,t){var r=e.alternate;return r===null?(r=ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ro(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")Ec(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mn:return Jr(r.children,a,o,t);case Kl:i=8,a|=8;break;case zs:return e=ft(12,r,t,a|2),e.elementType=zs,e.lanes=o,e;case Rs:return e=ft(13,r,t,a),e.elementType=Rs,e.lanes=o,e;case qs:return e=ft(19,r,t,a),e.elementType=qs,e.lanes=o,e;case Mu:return Ni(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nu:i=10;break e;case Du:i=9;break e;case Ql:i=11;break e;case Jl:i=14;break e;case fr:i=16,n=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ft(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function Jr(e,t,r,n){return e=ft(7,e,n,t),e.lanes=r,e}function Ni(e,t,r,n){return e=ft(22,e,n,t),e.elementType=Mu,e.lanes=r,e.stateNode={isHidden:!1},e}function fs(e,t,r){return e=ft(6,e,null,t),e.lanes=r,e}function gs(e,t,r){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P1(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function _c(e,t,r,n,a,o,i,s,l){return e=new P1(e,t,r,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(o),e}function N1(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function xp(e){if(!e)return Br;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var r=e.type;if(Ze(r))return xh(e,r,t)}return t}function kp(e,t,r,n,a,o,i,s,l){return e=_c(r,n,!0,e,a,o,i,s,l),e.context=xp(null),r=e.current,n=Ue(),a=Dr(r),o=Zt(n,a),o.callback=t??null,Pr(r,o,a),e.current.lanes=a,Fa(e,a,n),et(e,n),e}function Di(e,t,r,n){var a=t.current,o=Ue(),i=Dr(a);return r=xp(r),t.context===null?t.context=r:t.pendingContext=r,t=Zt(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Pr(a,t,i),e!==null&&(Mt(e,a,i,o),Mo(e,a,i)),i}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bc(e,t){fd(e,t),(e=e.alternate)&&fd(e,t)}function D1(){return null}var Sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ic(e){this._internalRoot=e}Mi.prototype.render=Ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Di(e,t,null,null)};Mi.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){Di(null,e,null,null)}),t[nr]=null}};function Mi(e){this._internalRoot=e}Mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=eh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yr.length&&t!==0&&t<yr[r].priority;r++);yr.splice(r,0,e),r===0&&rh(e)}};function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function M1(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=li(i);o.call(u)}}var i=kp(t,n,e,0,null,!1,!1,"",gd);return e._reactRootContainer=i,e[nr]=i.current,Ca(e.nodeType===8?e.parentNode:e),nn(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var u=li(l);s.call(u)}}var l=_c(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=l,e[nr]=l.current,Ca(e.nodeType===8?e.parentNode:e),nn(function(){Di(t,l,r,n)}),l}function _i(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var l=li(i);s.call(l)}}Di(t,i,e,a)}else i=M1(r,t,e,a,n);return li(i)}Xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=aa(t.pendingLanes);r!==0&&(ec(t,r|1),et(t,Te()),!(re&6)&&(jn=Te()+500,jr()))}break;case 13:nn(function(){var n=ar(e,1);if(n!==null){var a=Ue();Mt(n,e,1,a)}}),Bc(e,1)}};tc=function(e){if(e.tag===13){var t=ar(e,134217728);if(t!==null){var r=Ue();Mt(t,e,134217728,r)}Bc(e,134217728)}};Zu=function(e){if(e.tag===13){var t=Dr(e),r=ar(e,t);if(r!==null){var n=Ue();Mt(r,e,t,n)}Bc(e,t)}};eh=function(){return se};th=function(e,t){var r=se;try{return se=e,t()}finally{se=r}};$s=function(e,t,r){switch(t){case"input":if(Fs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=ki(n);if(!a)throw Error(L(90));_u(n),Fs(n,a)}}}break;case"textarea":Iu(e,r);break;case"select":t=r.value,t!=null&&Tn(e,!!r.multiple,t,!1)}};Ou=Nc;Wu=nn;var E1={usingClientEntryPoint:!1,Events:[Wa,vn,ki,ju,Fu,Nc]},ta={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_1={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||D1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{vi=fo.inject(_1),Wt=fo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;ct.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zc(t))throw Error(L(200));return N1(e,t,null,r)};ct.createRoot=function(e,t){if(!zc(e))throw Error(L(299));var r=!1,n="",a=Sp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=_c(e,1,!1,null,null,r,!1,n,a),e[nr]=t.current,Ca(e.nodeType===8?e.parentNode:e),new Ic(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return nn(e)};ct.hydrate=function(e,t,r){if(!Ei(t))throw Error(L(200));return _i(null,e,t,!0,r)};ct.hydrateRoot=function(e,t,r){if(!zc(e))throw Error(L(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Sp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=kp(t,null,e,1,r??null,a,!1,o,i),e[nr]=t.current,Ca(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Mi(t)};ct.render=function(e,t,r){if(!Ei(t))throw Error(L(200));return _i(null,e,t,!1,r)};ct.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(L(40));return e._reactRootContainer?(nn(function(){_i(null,null,e,!1,function(){e._reactRootContainer=null,e[nr]=null})}),!0):!1};ct.unstable_batchedUpdates=Nc;ct.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ei(r))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return _i(e,t,r,!1,n)};ct.version="18.3.1-next-f1338f8080-20240426";function Ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap)}catch(e){console.error(e)}}Ap(),Au.exports=ct;var ia=Au.exports,yd=ia;Bs.createRoot=yd.createRoot,Bs.hydrateRoot=yd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},za.apply(this,arguments)}var xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xr||(xr={}));const vd="popstate";function B1(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:i,hash:s}=n.location;return Cl("",{pathname:o,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:ci(a)}return z1(t,r,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I1(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,r,n){return r===void 0&&(r=null),za({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gn(t):t,{state:r,key:t&&t.key||n||I1()})}function ci(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Gn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function z1(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,s=xr.Pop,l=null,u=p();u==null&&(u=0,i.replaceState(za({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function f(){s=xr.Pop;let N=p(),b=N==null?null:N-u;u=N,l&&l({action:s,location:A.location,delta:b})}function y(N,b){s=xr.Push;let v=Cl(A.location,N,b);u=p()+1;let w=bd(v,u),P=A.createHref(v);try{i.pushState(w,"",P)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(P)}o&&l&&l({action:s,location:A.location,delta:1})}function x(N,b){s=xr.Replace;let v=Cl(A.location,N,b);u=p();let w=bd(v,u),P=A.createHref(v);i.replaceState(w,"",P),o&&l&&l({action:s,location:A.location,delta:0})}function T(N){let b=a.location.origin!=="null"?a.location.origin:a.location.href,v=typeof N=="string"?N:ci(N);return v=v.replace(/ $/,"%20"),Ae(b,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,b)}let A={get action(){return s},get location(){return e(a,i)},listen(N){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(vd,f),l=N,()=>{a.removeEventListener(vd,f),l=null}},createHref(N){return t(a,N)},createURL:T,encodeLocation(N){let b=T(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:y,replace:x,go(N){return i.go(N)}};return A}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function R1(e,t,r){return r===void 0&&(r="/"),q1(e,t,r)}function q1(e,t,r,n){let a=typeof t=="string"?Gn(t):t,o=Fn(a.pathname||"/",r);if(o==null)return null;let i=Tp(e);L1(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=K1(o);s=$1(i[l],u)}return s}function Tp(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=Er([n,l.relativePath]),p=r.concat(l);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tp(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:G1(u,o.index),routesMeta:p})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let l of Cp(o.path))a(o,i,l)}),t}function Cp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let i=Cp(n.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),a&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function L1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:V1(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const j1=/^:[\w-]+$/,F1=3,O1=2,W1=1,H1=10,U1=-2,xd=e=>e==="*";function G1(e,t){let r=e.split("/"),n=r.length;return r.some(xd)&&(n+=U1),t&&(n+=O1),r.filter(a=>!xd(a)).reduce((a,o)=>a+(j1.test(o)?F1:o===""?W1:H1),n)}function V1(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function $1(e,t,r){let{routesMeta:n}=e,a={},o="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],u=s===n.length-1,p=o==="/"?t:t.slice(o.length)||"/",f=Pl({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},p),y=l.route;if(!f)return null;Object.assign(a,f.params),i.push({params:a,pathname:Er([o,f.pathname]),pathnameBase:e2(Er([o,f.pathnameBase])),route:y}),f.pathnameBase!=="/"&&(o=Er([o,f.pathnameBase]))}return i}function Pl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Y1(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((u,p,f)=>{let{paramName:y,isOptional:x}=p;if(y==="*"){let A=s[f]||"";i=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=s[f];return x&&!T?u[y]=void 0:u[y]=(T||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Y1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(n.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function K1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J1=e=>Q1.test(e);function X1(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Gn(e):e,o;if(r)if(J1(r))o=r;else{if(r.includes("//")){let i=r;r=r.replace(/\/\/+/g,"/"),Rc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=kd(r.substring(1),"/"):o=kd(r,t)}else o=t;return{pathname:o,search:t2(n),hash:r2(a)}}function kd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ys(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Pp(e,t){let r=Z1(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Np(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Gn(e):(a=za({},e),Ae(!a.pathname||!a.pathname.includes("?"),ys("?","pathname","search",a)),Ae(!a.pathname||!a.pathname.includes("#"),ys("#","pathname","hash",a)),Ae(!a.search||!a.search.includes("#"),ys("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(i==null)s=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let y=i.split("/");for(;y[0]==="..";)y.shift(),f-=1;a.pathname=y.join("/")}s=f>=0?t[f]:"/"}let l=X1(a,s),u=i&&i!=="/"&&i.endsWith("/"),p=(o||i===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||p)&&(l.pathname+="/"),l}const Er=e=>e.join("/").replace(/\/\/+/g,"/"),e2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dp=["post","put","patch","delete"];new Set(Dp);const a2=["get",...Dp];new Set(a2);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ra.apply(this,arguments)}const Bi=E.createContext(null),Mp=E.createContext(null),Fr=E.createContext(null),Ii=E.createContext(null),dr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Ep=E.createContext(null);function o2(e,t){let{relative:r}=t===void 0?{}:t;Ua()||Ae(!1);let{basename:n,navigator:a}=E.useContext(Fr),{hash:o,pathname:i,search:s}=zi(e,{relative:r}),l=i;return n!=="/"&&(l=i==="/"?n:Er([n,i])),a.createHref({pathname:l,search:s,hash:o})}function Ua(){return E.useContext(Ii)!=null}function Or(){return Ua()||Ae(!1),E.useContext(Ii).location}function _p(e){E.useContext(Fr).static||E.useLayoutEffect(e)}function qc(){let{isDataRoute:e}=E.useContext(dr);return e?w2():i2()}function i2(){Ua()||Ae(!1);let e=E.useContext(Bi),{basename:t,future:r,navigator:n}=E.useContext(Fr),{matches:a}=E.useContext(dr),{pathname:o}=Or(),i=JSON.stringify(Pp(a,r.v7_relativeSplatPath)),s=E.useRef(!1);return _p(()=>{s.current=!0}),E.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){n.go(u);return}let f=Np(u,JSON.parse(i),o,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Er([t,f.pathname])),(p.replace?n.replace:n.push)(f,p.state,p)},[t,n,i,o,e])}const Bp=E.createContext(null);function Ip(){return E.useContext(Bp)}function s2(e){let t=E.useContext(dr).outlet;return t&&E.createElement(Bp.Provider,{value:e},t)}function l2(){let{matches:e}=E.useContext(dr),t=e[e.length-1];return t?t.params:{}}function zi(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=E.useContext(Fr),{matches:a}=E.useContext(dr),{pathname:o}=Or(),i=JSON.stringify(Pp(a,n.v7_relativeSplatPath));return E.useMemo(()=>Np(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function c2(e,t){return d2(e,t)}function d2(e,t,r,n){Ua()||Ae(!1);let{navigator:a}=E.useContext(Fr),{matches:o}=E.useContext(dr),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=Or(),p;if(t){var f;let N=typeof t=="string"?Gn(t):t;l==="/"||(f=N.pathname)!=null&&f.startsWith(l)||Ae(!1),p=N}else p=u;let y=p.pathname||"/",x=y;if(l!=="/"){let N=l.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=R1(e,{pathname:x}),A=f2(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:Er([l,a.encodeLocation?a.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:Er([l,a.encodeLocation?a.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,r,n);return t&&A?E.createElement(Ii.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:xr.Pop}},A):A}function u2(){let e=b2(),t=n2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:a},r):null,null)}const h2=E.createElement(u2,null);class p2 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?E.createElement(dr.Provider,{value:this.props.routeContext},E.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(e){let{routeContext:t,match:r,children:n}=e,a=E.useContext(Bi);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(dr.Provider,{value:t},n)}function f2(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=(a=r)==null?void 0:a.errors;if(s!=null){let p=i.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);p>=0||Ae(!1),i=i.slice(0,Math.min(i.length,p+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<i.length;p++){let f=i[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:y,errors:x}=r,T=f.route.loader&&y[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||T){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,f,y)=>{let x,T=!1,A=null,N=null;r&&(x=s&&f.route.id?s[f.route.id]:void 0,A=f.route.errorElement||h2,l&&(u<0&&y===0?(x2("route-fallback"),T=!0,N=null):u===y&&(T=!0,N=f.route.hydrateFallbackElement||null)));let b=t.concat(i.slice(0,y+1)),v=()=>{let w;return x?w=A:T?w=N:f.route.Component?w=E.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=p,E.createElement(m2,{match:f,routeContext:{outlet:p,matches:b,isDataRoute:r!=null},children:w})};return r&&(f.route.ErrorBoundary||f.route.errorElement||y===0)?E.createElement(p2,{location:r.location,revalidation:r.revalidation,component:A,error:x,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):v()},null)}var zp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zp||{}),Rp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Rp||{});function g2(e){let t=E.useContext(Bi);return t||Ae(!1),t}function y2(e){let t=E.useContext(Mp);return t||Ae(!1),t}function v2(e){let t=E.useContext(dr);return t||Ae(!1),t}function qp(e){let t=v2(),r=t.matches[t.matches.length-1];return r.route.id||Ae(!1),r.route.id}function b2(){var e;let t=E.useContext(Ep),r=y2(),n=qp();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function w2(){let{router:e}=g2(zp.UseNavigateStable),t=qp(Rp.UseNavigateStable),r=E.useRef(!1);return _p(()=>{r.current=!0}),E.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ra({fromRouteId:t},o)))},[e,t])}const Sd={};function x2(e,t,r){Sd[e]||(Sd[e]=!0)}function k2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function S2(e){return s2(e.context)}function un(e){Ae(!1)}function A2(e){let{basename:t="/",children:r=null,location:n,navigationType:a=xr.Pop,navigator:o,static:i=!1,future:s}=e;Ua()&&Ae(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:i,future:Ra({v7_relativeSplatPath:!1},s)}),[l,s,o,i]);typeof n=="string"&&(n=Gn(n));let{pathname:p="/",search:f="",hash:y="",state:x=null,key:T="default"}=n,A=E.useMemo(()=>{let N=Fn(p,l);return N==null?null:{location:{pathname:N,search:f,hash:y,state:x,key:T},navigationType:a}},[l,p,f,y,x,T,a]);return A==null?null:E.createElement(Fr.Provider,{value:u},E.createElement(Ii.Provider,{children:r,value:A}))}function T2(e){let{children:t,location:r}=e;return c2(Nl(t),r)}new Promise(()=>{});function Nl(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(n,a)=>{if(!E.isValidElement(n))return;let o=[...t,a];if(n.type===E.Fragment){r.push.apply(r,Nl(n.props.children,o));return}n.type!==un&&Ae(!1),!n.props.index||!n.props.children||Ae(!1);let i={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=Nl(n.props.children,o)),r.push(i)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},di.apply(this,arguments)}function Lp(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function C2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function P2(e,t){return e.button===0&&(!t||t==="_self")&&!C2(e)}function Dl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function N2(e,t){let r=Dl(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}const D2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],M2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],E2="6";try{window.__reactRouterVersion=E2}catch{}const _2=E.createContext({isTransitioning:!1}),B2="startTransition",Ad=kf[B2];function I2(e){let{basename:t,children:r,future:n,window:a}=e,o=E.useRef();o.current==null&&(o.current=B1({window:a,v5Compat:!0}));let i=o.current,[s,l]=E.useState({action:i.action,location:i.location}),{v7_startTransition:u}=n||{},p=E.useCallback(f=>{u&&Ad?Ad(()=>l(f)):l(f)},[l,u]);return E.useLayoutEffect(()=>i.listen(p),[i,p]),E.useEffect(()=>k2(n),[n]),E.createElement(A2,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i,future:n})}const z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jp=E.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:p,viewTransition:f}=t,y=Lp(t,D2),{basename:x}=E.useContext(Fr),T,A=!1;if(typeof u=="string"&&R2.test(u)&&(T=u,z2))try{let w=new URL(window.location.href),P=u.startsWith("//")?new URL(w.protocol+u):new URL(u),M=Fn(P.pathname,x);P.origin===w.origin&&M!=null?u=M+P.search+P.hash:A=!0}catch{}let N=o2(u,{relative:a}),b=L2(u,{replace:i,state:s,target:l,preventScrollReset:p,relative:a,viewTransition:f});function v(w){n&&n(w),w.defaultPrevented||b(w)}return E.createElement("a",di({},y,{href:T||N,onClick:A||o?n:v,ref:r,target:l}))}),En=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:i=!1,style:s,to:l,viewTransition:u,children:p}=t,f=Lp(t,M2),y=zi(l,{relative:f.relative}),x=Or(),T=E.useContext(Mp),{navigator:A,basename:N}=E.useContext(Fr),b=T!=null&&F2(y)&&u===!0,v=A.encodeLocation?A.encodeLocation(y).pathname:y.pathname,w=x.pathname,P=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(w=w.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&N&&(P=Fn(P,N)||P);const M=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let _=w===v||!i&&w.startsWith(v)&&w.charAt(M)==="/",B=P!=null&&(P===v||!i&&P.startsWith(v)&&P.charAt(v.length)==="/"),z={isActive:_,isPending:B,isTransitioning:b},W=_?n:void 0,U;typeof o=="function"?U=o(z):U=[o,_?"active":null,B?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let J=typeof s=="function"?s(z):s;return E.createElement(jp,di({},f,{"aria-current":W,className:U,ref:r,style:J,to:l,viewTransition:u}),typeof p=="function"?p(z):p)});var Ml;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ml||(Ml={}));var Td;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Td||(Td={}));function q2(e){let t=E.useContext(Bi);return t||Ae(!1),t}function L2(e,t){let{target:r,replace:n,state:a,preventScrollReset:o,relative:i,viewTransition:s}=t===void 0?{}:t,l=qc(),u=Or(),p=zi(e,{relative:i});return E.useCallback(f=>{if(P2(f,r)){f.preventDefault();let y=n!==void 0?n:ci(u)===ci(p);l(e,{replace:y,state:a,preventScrollReset:o,relative:i,viewTransition:s})}},[u,l,p,n,a,r,e,o,i,s])}function j2(e){let t=E.useRef(Dl(e)),r=E.useRef(!1),n=Or(),a=E.useMemo(()=>N2(n.search,r.current?null:t.current),[n.search]),o=qc(),i=E.useCallback((s,l)=>{const u=Dl(typeof s=="function"?s(a):s);r.current=!0,o("?"+u,l)},[o,a]);return[a,i]}function F2(e,t){t===void 0&&(t={});let r=E.useContext(_2);r==null&&Ae(!1);let{basename:n}=q2(Ml.useViewTransitionState),a=zi(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Fn(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=Fn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Pl(a.pathname,i)!=null||Pl(a.pathname,o)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Z=(e,t)=>{const r=E.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,...u},p)=>E.createElement("svg",{ref:p,...O2,width:a,height:a,stroke:n,strokeWidth:i?Number(o)*24/Number(a):o,className:["lucide",`lucide-${W2(e)}`,s].join(" "),...u},[...t.map(([f,y])=>E.createElement(f,y)),...Array.isArray(l)?l:[l]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=Z("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=Z("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=Z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=Z("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=Z("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Z("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Z("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=Z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=Z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=Z("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=Z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=Z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=Z("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Z("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Z("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Z("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Z("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Z("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=Z("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=Z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Z("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Z("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=Z("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=Z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Z("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Z("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Z("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Z("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Xr=["prose-sm","prose-base","prose-lg","prose-xl","prose-2xl"],Xp="/notes_computers_in_biology/assets/rk_logo-CWNyNbai.svg",my=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isCollapsed:a,toggleCollapse:o,isArticlePage:i})=>{const s=({isActive:u})=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap
      ${u?"bg-ink text-paper border-ink dark:bg-crt-green dark:text-black dark:border-crt-green shadow-retro":"border-transparent hover:border-gray-400 dark:text-crt-green dark:hover:border-crt-green"}
      ${a?"justify-center":"justify-start"}`,l=(u=!1)=>`flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap bg-white dark:bg-black/50
      ${u?"opacity-50 cursor-not-allowed border-transparent":"border-gray-200 dark:border-crt-dim hover:border-ink dark:hover:border-crt-green cursor-pointer"}
      ${a?"justify-center":"justify-start"}`;return h.jsxs("nav",{className:`hidden lg:flex border-r-2 border-ink dark:border-crt-green bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative
          ${a?"w-20":"w-64"}`,children:[h.jsx("button",{onClick:o,className:"absolute -right-3 top-20 w-6 h-6 bg-paper dark:bg-black border-2 border-ink dark:border-crt-green rounded-full flex items-center justify-center text-ink dark:text-crt-green hover:scale-110 transition-transform z-30",title:a?"Expand Sidebar":"Collapse Sidebar",children:a?h.jsx(Wp,{size:14}):h.jsx(K2,{size:14})}),h.jsx("div",{className:"p-4 border-b-2 border-ink dark:border-crt-green shrink-0",children:h.jsxs("div",{className:`border-4 border-ink dark:border-crt-green transition-all duration-300 bg-paper dark:bg-black flex items-center justify-center overflow-hidden
            ${a?"p-1 w-10 h-10 mx-auto rounded-full":"p-2 w-full h-auto rounded-none"}`,children:[h.jsx("img",{src:Xp,alt:"Lab Logo",className:"object-contain dark:invert transition-all duration-300 w-8 h-8"}),h.jsx("h1",{className:`font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green ml-2 transition-opacity duration-200
              ${a?"opacity-0 w-0 hidden":"opacity-100 block"}`,children:"Lab_Note"})]})}),h.jsxs("div",{className:"flex-1 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden",children:[i&&h.jsxs("div",{className:"mb-4 pb-4 border-b border-gray-300 dark:border-crt-dim mx-2 space-y-2",children:[h.jsx("div",{className:`font-mono text-[10px] uppercase text-pencil dark:text-crt-green/50 mb-2 transition-opacity ${a?"text-center":"px-3"}`,children:a?"Tool":"Reader Tools"}),h.jsxs("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:l(r===Xr.length-1),title:"Increase Font",children:[h.jsx(Yp,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_IN"})]}),h.jsxs("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:l(r===0),title:"Decrease Font",children:[h.jsx(Vp,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"ZOOM_OUT"})]}),h.jsxs("button",{className:l(),onClick:()=>window.print(),title:"Print",children:[h.jsx(Kp,{size:20,className:"shrink-0 dark:text-crt-green"}),h.jsx("span",{className:`block font-mono text-xs font-bold dark:text-crt-green transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PRINT_JOB"})]})]}),h.jsxs(En,{to:"/",className:s,title:"Library",children:[h.jsx(Gp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"LIBRARY"})]}),h.jsx("div",{className:"h-px bg-gray-300 dark:bg-crt-dim mx-4 my-2 shrink-0"}),h.jsxs(En,{to:"/media",className:s,title:"Media Logs",children:[h.jsx($p,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"MEDIA_LOGS"})]}),h.jsxs(En,{to:"/about",className:s,title:"Personnel File",children:[h.jsx(Jp,{size:24,className:"shrink-0"}),h.jsx("span",{className:`block font-mono text-sm font-bold transition-opacity duration-200 ${a?"opacity-0 w-0":"opacity-100"}`,children:"PERSONNEL"})]})]}),h.jsxs("div",{className:"p-2 border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black shrink-0",children:[h.jsxs("button",{onClick:t,className:`w-full flex items-center p-2 font-mono text-xs border border-pencil dark:border-crt-green hover:bg-gray-200 dark:hover:bg-crt-dim dark:text-crt-green transition-colors
              ${a?"justify-center":"justify-start gap-4"}`,title:"Toggle Theme",children:[e?h.jsx(ui,{size:20,className:"shrink-0"}):h.jsx(Fc,{size:20,className:"shrink-0"}),h.jsx("span",{className:`block whitespace-nowrap transition-opacity duration-200 ${a?"opacity-0 w-0 hidden":"opacity-100"}`,children:e?"DAY_SHIFT":"DARK_MODE"})]}),h.jsxs("div",{className:`mt-4 font-mono text-[10px] text-center text-pencil dark:text-crt-green/50 transition-opacity duration-200 ${a?"opacity-0 hidden":"opacity-100 block"}`,children:["v.3.1.0-dock",h.jsx("br",{}),"ReactOS_Shell"]})]})]})},fy=({isDarkMode:e,toggleTheme:t,fontSizeIdx:r,setFontSizeIdx:n,isOpen:a,toggleOpen:o,setIsOpen:i,isArticlePage:s})=>{const l=p=>`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out backdrop-blur-md shadow-lg border-2
      ${p?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green scale-110 -translate-y-2":"bg-white/80 text-ink/80 border-transparent dark:bg-black/60 dark:text-crt-green dark:border-crt-green/30 hover:scale-105"}`,u="flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-crt-green/50 text-ink dark:text-crt-green shadow-sm active:scale-95 disabled:opacity-50";return h.jsxs("div",{className:"lg:hidden fixed bottom-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-end px-4",children:[h.jsxs("div",{className:`flex flex-col items-center p-3 mb-3 rounded-2xl bg-white/30 dark:bg-black/80 border border-white/40 dark:border-crt-green/40 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-bottom
            ${a?"opacity-100 scale-100 translate-y-0 visible pointer-events-auto":"opacity-0 scale-90 translate-y-10 invisible pointer-events-none"}`,children:[s&&h.jsxs("div",{className:"flex items-center gap-3 mb-4 pb-4 border-b border-gray-400/30 dark:border-crt-green/30 w-full justify-center",children:[h.jsx("button",{onClick:()=>n(Math.max(0,r-1)),disabled:r===0,className:u,children:h.jsx(Vp,{size:16})}),h.jsxs("span",{className:"font-mono text-xs font-bold min-w-[30px] text-center dark:text-crt-green",children:["A",r+1]}),h.jsx("button",{onClick:()=>n(Math.min(Xr.length-1,r+1)),disabled:r===Xr.length-1,className:u,children:h.jsx(Yp,{size:16})}),h.jsx("div",{className:"w-px h-6 bg-gray-400/50 dark:bg-crt-green/50 mx-1"}),h.jsx("button",{className:u,onClick:()=>window.print(),children:h.jsx(Kp,{size:16})}),h.jsx("button",{className:u,children:h.jsx(Lc,{size:16})})]}),h.jsxs("div",{className:"flex items-end gap-3",children:[h.jsx(En,{to:"/",className:({isActive:p})=>l(p),onClick:()=>i(!1),children:h.jsx(Gp,{size:20})}),h.jsx(En,{to:"/media",className:({isActive:p})=>l(p),onClick:()=>i(!1),children:h.jsx($p,{size:20})}),h.jsx(En,{to:"/about",className:({isActive:p})=>l(p),onClick:()=>i(!1),children:h.jsx(Jp,{size:20})}),h.jsx("div",{className:"w-px h-8 bg-ink/20 dark:bg-crt-green/20 mx-1"}),h.jsx("button",{onClick:()=>{t(),i(!1)},className:"flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-paper dark:bg-crt-dim dark:text-crt-green hover:scale-105 transition-transform",children:e?h.jsx(ui,{size:20}):h.jsx(Fc,{size:20})})]})]}),h.jsx("button",{onClick:o,className:`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md shadow-lg border-2 transition-all duration-300 active:scale-90
            ${a?"bg-red-500 text-white border-red-600 rotate-180":"bg-ink/90 text-white border-white/20 dark:bg-crt-green/90 dark:text-black dark:border-crt-green animate-bounce"}`,"aria-label":a?"Close Dock":"Open Dock",children:a?h.jsx(Op,{size:24}):h.jsx(Hp,{size:24})})]})},gy=e=>{const t=Or(),[r,n]=E.useState(!1),[a,o]=E.useState(!1),i=t.pathname.startsWith("/articles/");E.useEffect(()=>{n(!!i),o(!1)},[t.pathname,i]);const s=()=>n(u=>!u),l=()=>o(u=>!u);return h.jsxs(h.Fragment,{children:[h.jsx(my,{...e,isCollapsed:r,toggleCollapse:s,isArticlePage:i}),h.jsx(fy,{...e,isOpen:a,toggleOpen:l,setIsOpen:o,isArticlePage:i})]})},yy=({isDarkMode:e,toggleTheme:t})=>{const r=E.useRef(null),n=Or(),[a,o]=E.useState(2),i=n.pathname.startsWith("/articles/");return h.jsxs("div",{className:`h-screen w-screen flex flex-col lg:flex-row overflow-hidden transition-colors duration-300 ${e?"bg-crt-bg text-crt-green":"bg-paper text-ink"}`,children:[h.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10",style:{backgroundImage:e?"linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)":"radial-gradient(#666 1px, transparent 1px)",backgroundSize:e?"4px 4px":"20px 20px"}}),e&&h.jsx("div",{className:"fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"}),h.jsx("header",{className:`lg:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-black z-30 relative shrink-0 ${i?"hidden":"flex"}`,children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:Xp,alt:"Logo",className:"w-8 h-8 object-contain dark:invert"}),h.jsx("h1",{className:"font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green",children:"Lab_Note"})]})}),h.jsx(gy,{isDarkMode:e,toggleTheme:t,fontSizeIdx:a,setFontSizeIdx:o}),h.jsx("main",{className:"flex-1 relative overflow-hidden z-10 flex flex-col h-full",children:h.jsx("div",{ref:r,className:"flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto pb-24 lg:pb-0",children:h.jsx(S2,{context:{fontSizeIdx:a,setFontSizeIdx:o}})})})]})},vy={id:"RK-2025-002",title:"Syllabus",date:"2026-07-05",tags:["#syllabus","#topics","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"",content:`
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
  <li>Definition, scope, and computational handling of biological data &#10004;</li>
  <li>representation of nucleic acid and protein sequences (FASTA format). &#10004;</li>
</ul>

<h3>Biological Databases (NCBI, EBI, DDBJ):&#10004;</h3> 
<ul>
  <li>Introduction to primary nucleotide databases (GenBank, EMBL, DDBJ) &#10004; </li>
  <li>protein sequence databases (UniProt, Swiss-Prot) </li>
  <li>search syntax, accession numbers &#10004;, and filtering search results</li>
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
  <li>Introduction to the Protein Data Bank (PDB); &#10004;</li>
  <li>anatomy of a PDB file; &#10004;</li>
  <li>introduction to basic standalone or web-based molecular visualization software (e.g., PyMOL, Chimera, or Jmol) for viewing three-dimensional macromolecular structures.</li>
</ul>
  </article>
  `},by=Object.freeze(Object.defineProperty({__proto__:null,default:vy},Symbol.toStringTag,{value:"Module"})),Pd="/notes_computers_in_biology/assets/f003_001-lN8lni_J.png",Nd="/notes_computers_in_biology/assets/f003_002-CRV5YUe7.png",Dd="/notes_computers_in_biology/assets/f003_003-Dn47taTF.png",Md="/notes_computers_in_biology/assets/f003_004-dAwYEpxX.png",wy={id:"RK-2026-003",title:"Computer Hardware: CPU, RAM, and Storage",date:"2026-07-06",tags:["#Hardware, #CPU, #RAM, #Storage"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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

    <figure class="science-figure" data-id="Figure: 1" data-clean-src="${Pd}"> 
            <img src="${Pd}" alt="CPU consumer grade" />
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
            <figure class="science-figure" data-id="Figure: 2" data-clean-src="${Nd}"> 
            <img src="${Nd}" alt="USB ports" />
            <figcaption>Various ports found in modern computers. <a href="https://www.usbmemorydirect.com/blog/thunderbolt-3-vs-us-c/" target="_blank">Source</a> </figcaption> 
          </figure>
      
        <li><strong>USB Type-C &amp; Thunderbolt:</strong> The modern, oval-shaped port. Thunderbolt ports are critical for biologists. They transfer data at lightning speeds (up to 40 Gbps), which is exactly what you need when migrating a 500GB dataset from a sequencer to your local machine. They can also act as docking station hubs, delivering power, video, and data through a single cable.</li>
      </ul>
    </section>

      
<section>
  <h3><strong>3.2 Video Display Ports</strong></h3>
  <p>Pharmacology and structural biology require immense screen real estate. You will often need one screen for reading a research paper, another for your data spreadsheet, and a third for a 3D molecular viewer.</p>
            <figure class="science-figure" data-id="Figure: 3" data-clean-src="${Dd}"> 
            <img src="${Dd}" alt="" />
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
      <figure class="science-figure" data-id="Figure: 3" data-clean-src="${Md}"> 
            <img src="${Md}" alt="Ethernet Connection" />
            <figcaption>RJ45 (Ethernet) port and cable. <a href="https://techterms.com/definition/ethernet" target="_blank">Source</a></figcaption> 
          </figure>
        <li><strong>RJ45 (Ethernet):</strong> The standard networking port. You should pair this with a <strong>Cat6 or Cat6a cable</strong> (which supports up to 10 Gigabit speeds). This is the "artery" that connects your local machine to the institutions main data centers and internet.</li>
      </ul>
    </section>
  </section>



</article>



  `},xy=Object.freeze(Object.defineProperty({__proto__:null,default:wy},Symbol.toStringTag,{value:"Module"})),ky={id:"RK-2026-004",title:"Operating systems: Windows, vs Linux",date:"2026-07-07",tags:["#OperatingSystems","#Windows","#Linux"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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



  `},Sy=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),Ay={id:"RK-2026-005",title:"Application of linux and its basic commands",date:"2026-07-08",tags:["#Linux","#CommandLine","#Terminal"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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



  `},Ty=Object.freeze(Object.defineProperty({__proto__:null,default:Ay},Symbol.toStringTag,{value:"Module"})),Cy={id:"RK-2026-006",title:"Linux and its basic commands",date:"2026-07-08",tags:["#Linux","#CommandLine","#Terminal"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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



  `},Py=Object.freeze(Object.defineProperty({__proto__:null,default:Cy},Symbol.toStringTag,{value:"Module"})),Ny={id:"RK-2026-007",title:"Data and data types",date:"2026-07-09",tags:["#data","#datatypes"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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



  `},Dy=Object.freeze(Object.defineProperty({__proto__:null,default:Ny},Symbol.toStringTag,{value:"Module"})),My={id:"RK-2026-008",title:"Data integrity and ALCOA+ principles",date:"2026-07-13",tags:["#data integrity","#data","#ALCOA+"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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



  `},Ey=Object.freeze(Object.defineProperty({__proto__:null,default:My},Symbol.toStringTag,{value:"Module"})),_y={id:"RK-2026-009",title:"Data and ELNs, LIMS",date:"2026-07-14",tags:["#LIMS","#data","#ELNs"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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


  `},By=Object.freeze(Object.defineProperty({__proto__:null,default:_y},Symbol.toStringTag,{value:"Module"})),Iy={id:"RK-2026-010",title:"Advanced Data Entry",date:"2026-07-15",tags:["#Entry","#data","#"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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

  `},zy=Object.freeze(Object.defineProperty({__proto__:null,default:Iy},Symbol.toStringTag,{value:"Module"})),Ry={id:"RK-2026-011",title:"Package and environment management in WSL",date:"2026-07-17",tags:["#Basics","#PackageManagement","#Programming"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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

  `},qy=Object.freeze(Object.defineProperty({__proto__:null,default:Ry},Symbol.toStringTag,{value:"Module"})),Ly={id:"RK-2026-012",title:"python basics",date:"2026-07-22",tags:["#Basics","#Pyhton","#Programming"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
    
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

  `},jy=Object.freeze(Object.defineProperty({__proto__:null,default:Ly},Symbol.toStringTag,{value:"Module"})),Fy={id:"RK-2026-013",title:"Data Cleaning & Manipulation in Python",date:"2026-07-29",tags:["#Data","#Python","#manipulation","#pandas"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
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

  `},Oy=Object.freeze(Object.defineProperty({__proto__:null,default:Fy},Symbol.toStringTag,{value:"Module"})),Wy={id:"RK-2026-014",title:"Python Syntax and IDEs",date:"2026-08-07",tags:["#Python","#IDEs","#Jupyter"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
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
  `},Hy=Object.freeze(Object.defineProperty({__proto__:null,default:Wy},Symbol.toStringTag,{value:"Module"})),Uy={id:"RK-2026-015",title:"Question Bank: short questions",date:"2026-08-11",tags:["#Questions","#SQs"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:`
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
  `},Gy=Object.freeze(Object.defineProperty({__proto__:null,default:Uy},Symbol.toStringTag,{value:"Module"})),Vy={id:"RK-2026-016",title:"Nucleic Acid and Protein Sequences in FASTA Format",date:"2026-08-31",tags:["#FASTA","#SequenceFormats","#bioinformatics"],type:"report",template:"standard",readTime:"30 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"FASTA is one of the simplest and most widely used text formats for representing DNA, RNA, and protein sequences in bioinformatics. This article explains how FASTA records are structured, how nucleotide and amino-acid alphabets are represented, how ambiguity and multi-FASTA records are handled, and why identifiers and metadata matter in real analysis workflows. It also distinguishes FASTA from richer annotation formats and from FASTQ, helping researchers choose and prepare sequence files correctly for downstream tools.",content:`
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
  `},$y=Object.freeze(Object.defineProperty({__proto__:null,default:Vy},Symbol.toStringTag,{value:"Module"})),Yy={id:"RK-2026-017",title:"Introduction to Primary Nucleotide Databases: GenBank, ENA and DDBJ",date:"2026-08-31",tags:["#GenBank","#NucleotideDatabases","#bioinformatics"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Primary nucleotide databases are the archival layer of sequence bioinformatics: they preserve nucleotide sequences submitted by researchers and assign stable identifiers that allow those records to be found and cited. This introductory article uses GenBank as the main example, then shows how the European Nucleotide Archive (ENA) and DNA Data Bank of Japan (DDBJ) participate in the same international data-sharing system. The emphasis is on the few ideas a first-time user needs to understand before searching, opening, interpreting, and downloading a nucleotide record.",content:`
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
  `},Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Yy},Symbol.toStringTag,{value:"Module"})),Qy={id:"RK-2026-019",title:"Definition, Scope, and Computational Handling of Biological Data",date:"2026-09-01",tags:["#Bioinformatics","#BiologicalData","#Pharmacology"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Bioinformatics developed as biology became increasingly data-rich, first through molecular sequence and structural information and later through genomics, transcriptomics, proteomics, metabolomics, chemical biology, and systems-level studies. This article introduces bioinformatics as the organization, management, analysis, and interpretation of biological data, showing how information expands from DNA to proteins, pathways, organisms, drugs, and phenotypes. The emphasis is on understanding why biological data require computational handling and how bioinformatics supports modern biology and pharmacology.",content:`
<article>

<section>
  <h2>1. What Is Bioinformatics?</h2>

  <p><strong>Bioinformatics is the use of computational methods to study biological data.</strong> In practical terms, it includes the <strong>collection, archiving, organization, retrieval, comparison, analysis, and interpretation</strong> of biological information. EMBL-EBI describes bioinformatics simply as the science of storing, retrieving, and analysing large amounts of biological information.<sup><a href="#ref1">1</a></sup></p>

  <p>The important word is <strong>biological</strong>. Computers are used because the data have become too numerous and interconnected to manage reliably by manual inspection alone, but the purpose remains to answer biological questions.</p>

  <h3>1.1 Two Broad Sides of Bioinformatics</h3>

  <ul>
    <li><strong>Developing methods:</strong> creating ways to compare sequences, recognize genes, analyse expression, predict structures, organize databases, or identify patterns in large datasets.</li>
    <li><strong>Applying methods:</strong> using those tools to answer questions about <strong>genes, proteins, genomes, disease, drug targets, pathways, evolution, and biological function</strong>.</li>
  </ul>

  <p>For a biology or pharmacology student, the second side is usually the most important. You do not need to build every algorithm; you need to understand <strong>what biological information goes in, what the method does, what comes out, and how confidently the result can be interpreted</strong>.</p>

  <blockquote>
    <strong>Presentation point:</strong> Bioinformatics allows biology to move from <em>observing one molecule at a time</em> to <strong>organizing and analysing thousands or millions of biological observations together</strong>.
  </blockquote>
</section>

<section>
  <h2>2. Why Did Bioinformatics Emerge?</h2>

  <p>The term <strong>bioinformatics</strong> was used by Paulien Hogeweg and Ben Hesper in the early 1970s for the study of information processes in biological systems.<sup><a href="#ref2">2</a></sup> Its modern importance increased dramatically as molecular biology began producing large amounts of <strong>DNA sequence, protein sequence, and molecular-structure data</strong>.</p>

  <p>Several foundational relationships in molecular biology naturally generate different kinds of information:</p>

  <ul>
    <li><strong>DNA sequence provides the information used to produce RNA and protein sequences.</strong></li>
    <li><strong>Amino-acid sequence is a major determinant of protein structure</strong>, although folding is also influenced by the molecular environment, partners, modifications, and cofactors.</li>
    <li><strong>Protein structure strongly influences protein function.</strong></li>
    <li><strong>Regulation of gene expression determines when, where, and how much gene product is produced.</strong></li>
  </ul>

  <p>Therefore, even a seemingly simple question about one gene quickly produces several linked questions: What is its sequence? When is it expressed? Which protein does it encode? What structure does that protein adopt? What does it interact with? What function does it perform? What happens when the gene or protein changes?</p>

  <p>As experimental techniques improved, these questions were no longer asked for only one gene or protein. They began to be asked <strong>for entire genomes and thousands of molecules simultaneously</strong>.</p>

  <p><strong>Takeaway:</strong> Bioinformatics became essential because modern molecular biology began producing <strong>large, connected sets of sequence, structure, expression, and functional data</strong>.</p>
</section>

<section>
  <h2>3. The Biological Data Explosion</h2>

  <p>A useful way to understand the data problem is to begin with a single organism.</p>

  <h3>3.1 One Bacterial Genome Is Already More Than a DNA Sequence</h3>

  <p>The reference genome of <em>Escherichia coli</em> K-12 MG1655 is approximately <strong>4.6 million base pairs</strong> long.<sup><a href="#ref3">3</a></sup> At first this may appear to be simply one long sequence. But once the genome is studied biologically, many additional layers appear:</p>

  <ul>
    <li>How many <strong>genes</strong> are present?</li>
    <li>Where are the genes located?</li>
    <li>Which genes are organized into <strong>operons</strong>?</li>
    <li>Which nucleotide positions vary between strains?</li>
    <li>Which variants are biologically important?</li>
    <li>What <strong>proteins</strong> are encoded?</li>
    <li>What structures do those proteins form?</li>
    <li>Which proteins interact with each other?</li>
    <li>Which pathways do they participate in?</li>
    <li>How does gene expression change with nutrients, stress, antibiotics, or other conditions?</li>
  </ul>

  <p>So a genome is not merely a string of A, T, G, and C. It becomes a <strong>network of biological information</strong>.</p>

  <h3>3.2 Now Multiply the Problem</h3>

  <p>The same questions can be asked for <strong>different strains, species, tissues, patients, experimental conditions, drug doses, and time points</strong>. Modern sequencing further allows many samples to be studied together.</p>

  <p>This is why sequence repositories have grown dramatically over time. The <a href="https://www.ncbi.nlm.nih.gov/genbank/statistics/" target="_blank" rel="noopener noreferrer">GenBank statistics pages</a> illustrate the continuing expansion of conventional and whole-genome sequence collections, while the NIH describes the <a href="https://www.ncbi.nlm.nih.gov/sra" target="_blank" rel="noopener noreferrer">Sequence Read Archive (SRA)</a> as a sequencing archive on the petabyte scale.<sup><a href="#ref4">4</a></sup></p>

  <p>The same expansion occurs on the chemical side of pharmacology. <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubChem</a> contains information for well over one hundred million distinct chemical structures, along with substance and bioassay records.<sup><a href="#ref5">5</a></sup></p>

  <blockquote>
    <strong>Presentation point:</strong> The problem is not only <strong>“too much DNA.”</strong> Modern biology produces too many <strong>sequences, genes, variants, proteins, structures, interactions, compounds, assays, pathways, and samples</strong> to handle as isolated observations.
  </blockquote>
</section>

<section>
  <h2>4. From the Central Dogma to Biological Systems</h2>

  <p>The <strong>central dogma</strong> provides a convenient starting map of biological information: <strong>DNA → RNA → protein</strong>.<sup><a href="#ref6">6</a></sup> Bioinformatics begins with these molecular layers but now extends far beyond them.</p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="https://www.genome.gov/sites/default/files/media/images/tg/Central-dogma_hero.png">
    <img src="https://www.genome.gov/sites/default/files/media/images/tg/Central-dogma_hero.png" alt="Diagram showing the central dogma with information proceeding from DNA to RNA to protein" />
    <figcaption>Figure 1: The central dogma provides a starting framework for understanding molecular biological data. Source: National Human Genome Research Institute (NHGRI). <a href="https://www.genome.gov/genetics-glossary/Central-Dogma" target="_blank" rel="noopener noreferrer">View original source</a>.</figcaption>
  </figure>

  <p>Once the protein is produced, additional biological levels become important:</p>

  <p><strong>DNA → RNA → protein → structure → molecular interaction → pathway → cell → tissue/organ → organism → phenotype</strong></p>

  <p>For pharmacology, another layer can be placed across this chain:</p>

  <p><strong>drug/chemical → target interaction → altered protein activity → pathway response → cellular effect → physiological response → therapeutic effect or toxicity</strong></p>

  <table class="science-table" data-id="biological-data-levels">
    <caption>Table 1: Biological information expands from molecular sequences to systems and pharmacological phenotypes</caption>
    <thead>
      <tr>
        <th>Level</th>
        <th>Examples of Data</th>
        <th>Typical Question</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>DNA / genome</strong></td>
        <td>Sequences, genes, variants</td>
        <td>Which gene or variant is present?</td>
      </tr>
      <tr>
        <td><strong>RNA / expression</strong></td>
        <td>Transcripts and expression levels</td>
        <td>Which genes are active under this condition?</td>
      </tr>
      <tr>
        <td><strong>Protein</strong></td>
        <td>Sequence, abundance, domains, modifications</td>
        <td>What protein is produced and what can it do?</td>
      </tr>
      <tr>
        <td><strong>Structure / interaction</strong></td>
        <td>3D structure, protein interactions, ligand binding</td>
        <td>How does the molecule interact with a target?</td>
      </tr>
      <tr>
        <td><strong>Chemical / metabolite</strong></td>
        <td>Metabolites, drugs, chemical structures, concentrations</td>
        <td>Which compounds are present and how do they change?</td>
      </tr>
      <tr>
        <td><strong>Pathway / system</strong></td>
        <td>Connected reactions and molecular networks</td>
        <td>Which biological process is altered?</td>
      </tr>
      <tr>
        <td><strong>Phenotype</strong></td>
        <td>Disease state, drug response, toxicity</td>
        <td>What biological outcome is observed?</td>
      </tr>
    </tbody>
  </table>

  <figure class="science-figure" data-id="FIG-2" data-clean-src="https://www.ebi.ac.uk/training/online/courses/bioinformatics-terrified/wp-content/uploads/sites/4/2019/09/bx_terrified_fig_1_700px-696x522-1.jpg">
    <img src="https://www.ebi.ac.uk/training/online/courses/bioinformatics-terrified/wp-content/uploads/sites/4/2019/09/bx_terrified_fig_1_700px-696x522-1.jpg" alt="Overview showing bioinformatics data types from genes and expression through proteins, molecular structures, chemical biology and systems" />
    <figcaption>Figure 2: Bioinformatics now spans many interconnected data types, including genes, gene expression, proteins, molecular structures, chemical biology, interactions, pathways, and biological systems. Source: EMBL-EBI Training, CC BY 4.0 unless otherwise indicated. <a href="https://www.ebi.ac.uk/training/online/courses/bioinformatics-terrified/what-bioinformatics/" target="_blank" rel="noopener noreferrer">View original source</a>.</figcaption>
  </figure>

  <p><strong>Takeaway:</strong> The scope of bioinformatics follows biology itself: <strong>from sequence, to molecule, to interaction, to pathway, to complete biological systems</strong>.</p>
</section>

<section>
  <h2>5. What Does Bioinformatics Actually Do With These Data?</h2>

  <p>At an introductory level, most bioinformatics activities can be understood through a few recurring functions.</p>

  <h3>5.1 Organization and Archiving</h3>

  <p>Biological data are placed into structured resources so they can be <strong>stored, identified, traced, and retrieved</strong>. Examples include sequence databases, expression repositories, structure databases, chemical databases, and pharmacology resources.</p>

  <h3>5.2 Classification and Annotation</h3>

  <p>Raw data become more useful when biological meaning is attached to them. A sequence may be annotated as a gene or coding region; a protein may be assigned to a family; a compound may be linked with a target; a gene may be connected with a pathway or disease.</p>

  <h3>5.3 Searching and Comparison</h3>

  <p>Bioinformatics allows researchers to search very large collections and compare:</p>

  <ul>
    <li><strong>DNA and protein sequences</strong>;</li>
    <li>genomes from different strains or species;</li>
    <li>gene-expression profiles;</li>
    <li>protein structures;</li>
    <li>chemical structures;</li>
    <li>drug potency or binding measurements;</li>
    <li>variants between individuals or populations.</li>
  </ul>

  <h3>5.4 Analysis and Prediction</h3>

  <p>Computational methods can help identify genes, detect sequence similarity, classify protein domains, analyse differential gene expression, reconstruct pathways, predict molecular structures, or estimate biological relationships.</p>

  <p><strong>Prediction must remain clearly separated from validation.</strong> A predicted gene, structure, interaction, or drug target is a hypothesis supported by computational evidence; it becomes stronger when supported by independent experimental observations.</p>

  <h3>5.5 Integration and Dissemination</h3>

  <p>One of the greatest advantages of bioinformatics is the ability to <strong>connect different types of information</strong>. A gene can be connected to its sequence, transcript, protein, structure, pathway, disease association, chemical ligand, and published literature. Public databases then allow these data to be distributed and reused worldwide.</p>

  <blockquote>
    <strong>Presentation point:</strong> Bioinformatics supports the <strong>organization, classification, dissemination, searching, comparison, and analysis</strong> of biological and biomedical data.
  </blockquote>
</section>

<section>
  <h2>6. Applications in Biology, Omics, and Pharmacology</h2>

  <p>Bioinformatics is used across biology, medicine, agriculture, biotechnology, and pharmaceutical research. The methods vary, but the underlying objective remains the same: <strong>convert large biological datasets into interpretable biological information</strong>.</p>

  <h3>6.1 General Applications in Biology</h3>

  <ul>
    <li><strong>Biological sequence analysis</strong> and identification of related sequences.</li>
    <li><strong>Phylogenetic analysis</strong> and study of evolutionary relationships.</li>
    <li>Genome organization, annotation, and comparative genomics.</li>
    <li>Analysis of <strong>gene expression</strong> and regulation.</li>
    <li>Study of genetic variation and polymorphisms.</li>
    <li>Analysis of biological <strong>pathways and networks</strong> in healthy and disease states.</li>
    <li>Protein structure analysis and prediction from sequence.</li>
    <li>Study of biomolecular interactions relevant to <strong>binding and drug discovery</strong>.</li>
  </ul>

  <h3>6.2 Genomics</h3>

  <p><strong>Genomics</strong> studies genomes at a large scale. It includes gene sequencing, whole-genome sequencing, genome comparison, variant identification, and aspects of gene-expression analysis.</p>

  <p>Bioinformatics supports genomics through:</p>

  <ul>
    <li>genome and sequence <strong>databases</strong>;</li>
    <li>database searching;</li>
    <li>sequence alignment;</li>
    <li>gene prediction;</li>
    <li>functional annotation;</li>
    <li>variant identification and comparison;</li>
    <li>analysis of differentially expressed genes;</li>
    <li>grouping genes with similar expression patterns.</li>
  </ul>

  <p>Some methods used in these tasks, such as <strong>Hidden Markov Models (HMMs)</strong>, become important later in bioinformatics courses. At this stage, students only need to recognize that computational models can detect patterns that would be difficult to identify manually.</p>

  <h3>6.3 Proteomics and Metabolomics</h3>

  <p><strong>Proteomics</strong> shifts the question from “which genes are present?” to <strong>“which proteins are actually present, in what amount, and in what state?”</strong> Bioinformatics helps identify proteins, compare abundance, recognize domains and modifications, and study protein interactions.</p>

  <p><strong>Metabolomics</strong> examines the small molecules present in a biological system. Computational resources help identify metabolites, compare their abundance, and place them into metabolic pathways.</p>

  <h3>6.4 Pharmacology and Drug Discovery</h3>

  <p>Pharmacology naturally combines several data layers:</p>

  <p><strong>chemical structure → molecular target → binding/activity → pathway → physiological response → clinical effect</strong></p>

  <p>Bioinformatics can therefore support:</p>

  <ul>
    <li>chemical and drug database searching;</li>
    <li>identification and comparison of drug targets;</li>
    <li>analysis of ligand–target activity data;</li>
    <li>comparison of molecular structures;</li>
    <li>analysis of pathways affected by a drug;</li>
    <li>study of genes involved in drug metabolism and response;</li>
    <li>integration of genomic and pharmacological information in <strong>pharmacogenomics</strong>.</li>
  </ul>

  <p>Resources such as <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">PubChem</a>, <a href="https://www.ebi.ac.uk/chembl/" target="_blank" rel="noopener noreferrer">ChEMBL</a>, and <a href="https://www.clinpgx.org/" target="_blank" rel="noopener noreferrer">ClinPGx</a> illustrate how chemical, biological-activity, and patient-response information can be connected.</p>

  <blockquote>
    <strong>Final idea:</strong> Bioinformatics is not a separate layer placed on top of biology. It has become a practical way of <strong>handling the information generated by modern biology</strong>—from genes and proteins to pathways, drugs, and whole biological systems.
  </blockquote>
</section>

<section id="references">
  <h2>7. References</h2>

  <ol>
    <li id="ref1">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/bioinformatics-terrified/what-bioinformatics/" target="_blank" rel="noopener noreferrer">What is bioinformatics?</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref2">
      Hogeweg P.
      <a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002021" target="_blank" rel="noopener noreferrer">The Roots of Bioinformatics in Theoretical Biology</a>.
      <em>PLoS Computational Biology</em>. 2011;7(3):e1002021. doi:10.1371/journal.pcbi.1002021.
    </li>

    <li id="ref3">
      National Center for Biotechnology Information.
      <a href="https://www.ncbi.nlm.nih.gov/nuccore/NC_000913.3" target="_blank" rel="noopener noreferrer"><em>Escherichia coli</em> K-12 substr. MG1655 complete genome, RefSeq NC_000913.3</a>.
      NCBI Nucleotide. Accessed 1 September 2026.
    </li>

    <li id="ref4">
      NIH Office of Data Science Strategy.
      <a href="https://datascience.nih.gov/data-ecosystem/sra" target="_blank" rel="noopener noreferrer">Sequence Read Archive</a>.
      National Institutes of Health. See also <a href="https://www.ncbi.nlm.nih.gov/genbank/statistics/" target="_blank" rel="noopener noreferrer">GenBank Statistics</a>. Accessed 1 September 2026.
    </li>

    <li id="ref5">
      National Center for Biotechnology Information.
      <a href="https://pubchem.ncbi.nlm.nih.gov/docs/statistics" target="_blank" rel="noopener noreferrer">PubChem Data Counts</a>.
      PubChem, National Library of Medicine. Accessed 1 September 2026.
    </li>

    <li id="ref6">
      National Human Genome Research Institute.
      <a href="https://www.genome.gov/genetics-glossary/Central-Dogma" target="_blank" rel="noopener noreferrer">Central Dogma</a>.
      Genome.gov. Accessed 1 September 2026.
    </li>

    <li id="ref7">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/introductory-bioinformatics-pathway/" target="_blank" rel="noopener noreferrer">Introductory Bioinformatics</a>.
      European Bioinformatics Institute. Last reviewed April 2026.
    </li>

    <li id="ref8">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/methods-in-bioinformatics/" target="_blank" rel="noopener noreferrer">Methods in Bioinformatics: Biological Data Analysis and Interpretation</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref9">
      Luscombe NM, Greenbaum D, Gerstein M.
      <a href="https://pubmed.ncbi.nlm.nih.gov/11552348/" target="_blank" rel="noopener noreferrer">What is bioinformatics? A proposed definition and overview of the field</a>.
      <em>Methods of Information in Medicine</em>. 2001;40(4):346-358. PMID: 11552348.
    </li>
  </ol>
</section>

</article>
  `},Jy=Object.freeze(Object.defineProperty({__proto__:null,default:Qy},Symbol.toStringTag,{value:"Module"})),Ed="/notes_computers_in_biology/assets/uniprot_resource_flow-mlnMzfcx.png",Xy={id:"RK-2026-020",title:"Protein Sequence Databases: Understanding UniProt and Swiss-Prot",date:"2026-09-01",tags:["#UniProt","#SwissProt","#ProteinDatabases"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"UniProt is one of the most important resources for connecting a protein sequence with biological knowledge about its function, location, domains, variants, interactions, and supporting evidence. This introductory article explains how UniProtKB, Swiss-Prot, TrEMBL, UniParc, UniRef, and Proteomes relate to one another, what a first-time visitor should look for on a protein entry page, and how UniProt identifiers are used. The emphasis is on using the resource correctly as a biology and pharmacology student rather than on database software or computational infrastructure.",content:`
<article>

<section>
  <h2>1. Why Do We Need a Protein Sequence Database?</h2>

  <p>A protein sequence by itself is only a chain of amino-acid letters such as <code>MKT...</code>. For biological or pharmacological work, we usually need much more information: <strong>What protein is this? Which organism produced it? What gene encodes it? What does the protein do? Where is it located? Which domains or active sites are present? Are variants known? Which publications support these conclusions?</strong></p>

  <p><a href="https://www.uniprot.org/" target="_blank" rel="noopener noreferrer"><strong>UniProt</strong></a>, the Universal Protein Resource, was created to make protein sequence and functional information <strong>comprehensive, consistent, richly annotated, and freely accessible</strong>.<sup><a href="#ref1">1</a></sup></p>

  <p>For a student, the simplest way to think about its purpose is:</p>

  <p><strong>protein sequence → reliable identity → biological annotation → supporting evidence → links to related biological resources</strong></p>

  <p>UniProt is therefore <strong>not merely a collection of protein FASTA sequences</strong>. Its major value is the biological knowledge attached to those sequences.</p>

  <blockquote>
    <strong>Core idea:</strong> Use UniProt when you want to move from <em>“I have a protein sequence or protein name”</em> to <strong>“What is known about this protein biologically?”</strong>
  </blockquote>
</section>

<section>
  <h2>2. What Is UniProt, and Who Manages It?</h2>

  <p>UniProt is maintained by the <strong>UniProt Consortium</strong>, a collaboration between three institutions:<sup><a href="#ref1">1</a></sup></p>

  <ul>
    <li><strong>EMBL-EBI</strong> — European Molecular Biology Laboratory, European Bioinformatics Institute;</li>
    <li><strong>SIB</strong> — Swiss Institute of Bioinformatics;</li>
    <li><strong>PIR</strong> — Protein Information Resource.</li>
  </ul>

  <p>The modern UniProt Consortium was formed in 2002 by combining major protein-information efforts, including <strong>Swiss-Prot, TrEMBL, and PIR resources</strong>.<sup><a href="#ref1">1</a></sup></p>

  <p>The key resource most students use is the <strong>UniProt Knowledgebase (UniProtKB)</strong>. UniProtKB is the central hub for protein sequence and functional information and contains two major sections:</p>

  <ul>
    <li><strong>UniProtKB/Swiss-Prot</strong> — reviewed, manually curated entries;</li>
    <li><strong>UniProtKB/TrEMBL</strong> — unreviewed entries with computational annotation.</li>
  </ul>

  <p>This terminology is important. <strong>Swiss-Prot is not a completely separate modern database from UniProt.</strong> It is the <strong>reviewed section of UniProtKB</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p><strong>Takeaway:</strong> Remember the hierarchy as <strong>UniProt → UniProtKB → Swiss-Prot reviewed / TrEMBL unreviewed</strong>.</p>
</section>

<section>
  <h2>3. The UniProt Family: What Are UniProtKB, UniParc, UniRef, and Proteomes?</h2>

  <p>When first visiting UniProt, several names appear in the menus. They serve different purposes and should not be confused.<sup><a href="#ref3">3</a></sup></p>

  <table class="science-table" data-id="uniprot-resource-map">
    <caption>Table 1: The main UniProt resources a first-time user should recognize</caption>
    <thead>
      <tr>
        <th>Resource</th>
        <th>Main Purpose</th>
        <th>What a Beginner Should Remember</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>UniProtKB</strong></td>
        <td>Protein sequence plus functional information</td>
        <td>This is the main resource to search when studying a specific protein.</td>
      </tr>
      <tr>
        <td><strong>Swiss-Prot</strong></td>
        <td>Reviewed section of UniProtKB</td>
        <td>Expert-curated entries with literature-based biological interpretation.</td>
      </tr>
      <tr>
        <td><strong>TrEMBL</strong></td>
        <td>Unreviewed section of UniProtKB</td>
        <td>Automatically annotated entries that have not undergone full manual review.</td>
      </tr>
      <tr>
        <td><strong>UniParc</strong></td>
        <td>Protein sequence archive</td>
        <td>Tracks unique sequences and their history, including sequences that may no longer be present in a source database.</td>
      </tr>
      <tr>
        <td><strong>UniRef</strong></td>
        <td>Sequence clusters</td>
        <td>Groups related sequences to reduce redundancy; common levels are UniRef100, UniRef90, and UniRef50.</td>
      </tr>
      <tr>
        <td><strong>Proteomes</strong></td>
        <td>Protein sets associated with organisms</td>
        <td>Useful when the question concerns the collection of proteins encoded by an organism rather than one protein.</td>
      </tr>
    </tbody>
  </table>

  <p>For most introductory pharmacology or biology exercises, <strong>start with UniProtKB</strong>. UniParc and UniRef become useful when you need sequence history or large-scale sequence comparison, while the Proteomes portal becomes useful when studying protein sets from whole organisms.</p>

  <p><strong>Takeaway:</strong> <strong>UniProtKB answers “What is known about this protein?”</strong> The other UniProt resources reorganize or archive protein sequences for different purposes.</p>
</section>

<section>
  <h2>4. Swiss-Prot vs. TrEMBL: Why “Reviewed” Matters</h2>

  <p>The distinction between <strong>reviewed</strong> and <strong>unreviewed</strong> is one of the most important things to notice on a UniProt entry page.</p>

  <h3>4.1 UniProtKB/Swiss-Prot: Reviewed</h3>

  <p><strong>Swiss-Prot entries are manually reviewed by expert biocurators.</strong> Curators examine scientific literature, evaluate experimental and computational evidence, verify sequence information, and organize knowledge about the protein into a consistent record.<sup><a href="#ref2">2</a></sup></p>

  <p>A reviewed entry may include carefully evaluated information about:</p>

  <ul>
    <li>protein and gene names;</li>
    <li>molecular function;</li>
    <li>catalytic activity and cofactors;</li>
    <li>subcellular location;</li>
    <li>domains and important sequence sites;</li>
    <li>post-translational modifications;</li>
    <li>protein interactions;</li>
    <li>disease-associated variants;</li>
    <li>supporting publications.</li>
  </ul>

  <h3>4.2 UniProtKB/TrEMBL: Unreviewed</h3>

  <p><strong>TrEMBL entries are computationally analysed and automatically annotated</strong>. This allows UniProt to provide broad protein coverage even though manual curation cannot keep pace with the enormous number of protein sequences generated from genome sequencing.<sup><a href="#ref2">2</a></sup></p>

  <p>“Unreviewed” does <strong>not</strong> mean “useless” or “wrong.” It means that the record has <strong>not undergone the same level of expert manual review</strong> as a Swiss-Prot record.</p>

  <blockquote>
    <strong>Practical rule:</strong> When both are available for the biological question, a <strong>reviewed Swiss-Prot entry is usually the best starting point for biological interpretation</strong>. An unreviewed TrEMBL entry may still be valuable, especially for poorly studied organisms or proteins.
  </blockquote>
</section>

<section>
  <h2>5. Your First Visit to a UniProtKB Entry: What Should You Look At?</h2>

  <p>A good first example for pharmacology students is the human <strong>beta-2 adrenergic receptor</strong>, a major G-protein-coupled receptor and drug target. Its reviewed UniProt entry is <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer"><strong>P07550 · ADRB2_HUMAN</strong></a>.<sup><a href="#ref4">4</a></sup></p>

  <p>Do not try to read every field on your first visit. Start with the following:</p>

  <table class="science-table" data-id="first-uniprot-entry-fields">
    <caption>Table 2: The first information to inspect on a UniProtKB protein entry</caption>
    <thead>
      <tr>
        <th>Entry Area</th>
        <th>What to Look For</th>
        <th>Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Protein / Gene</strong></td>
        <td>Protein name and gene symbol</td>
        <td>Confirms what biological molecule the record describes.</td>
      </tr>
      <tr>
        <td><strong>Status</strong></td>
        <td>Reviewed or unreviewed</td>
        <td>Tells you whether the entry belongs to Swiss-Prot or TrEMBL.</td>
      </tr>
      <tr>
        <td><strong>Organism</strong></td>
        <td>Species or strain</td>
        <td>The same protein name may occur in many organisms.</td>
      </tr>
      <tr>
        <td><strong>Function</strong></td>
        <td>Biological role and supporting evidence</td>
        <td>Provides the main biological interpretation.</td>
      </tr>
      <tr>
        <td><strong>Sequence</strong></td>
        <td>Amino-acid sequence, length, sequence status</td>
        <td>Provides the protein sequence used in downstream analysis.</td>
      </tr>
      <tr>
        <td><strong>Features</strong></td>
        <td>Domains, binding sites, modified residues, variants, processing sites</td>
        <td>Maps biological information onto specific sequence positions.</td>
      </tr>
      <tr>
        <td><strong>Publications / Evidence</strong></td>
        <td>Supporting papers and evidence labels</td>
        <td>Helps distinguish experimentally supported statements from predictions or similarity-based annotation.</td>
      </tr>
      <tr>
        <td><strong>External links</strong></td>
        <td>Connections to structures, pathways, genome resources and other databases</td>
        <td>Allows the protein entry to serve as a gateway into related biological information.</td>
      </tr>
    </tbody>
  </table>

  <p>For the ADRB2 example, the page immediately tells you that the entry is <strong>reviewed (Swiss-Prot)</strong>, belongs to <em>Homo sapiens</em>, contains <strong>413 amino acids</strong>, and has <strong>evidence at protein level</strong>.<sup><a href="#ref4">4</a></sup></p>

  <h3>5.1 Two Extra Fields Worth Recognizing</h3>

  <p><strong>Protein existence</strong> indicates the type of evidence supporting the existence of the protein. A protein supported directly at the protein level is different from one inferred only from homology or prediction.<sup><a href="#ref5">5</a></sup></p>

  <p><strong>Canonical sequence and isoforms</strong> are important for eukaryotic proteins. A Swiss-Prot entry may describe multiple protein products produced from one gene, while displaying one sequence as the canonical representative.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> On a first visit, check <strong>identity → reviewed status → organism → function → sequence → features → evidence</strong>.</p>
</section>

<section>
  <h2>6. How UniProt IDs Work</h2>

  <p>Protein names and gene symbols are useful to humans, but they are not always unique or stable. UniProt therefore assigns identifiers to entries.</p>

  <h3>6.1 Accession Number: The Stable Identifier</h3>

  <p>The most important identifier is the <strong>UniProtKB accession</strong>. UniProt recommends using the <strong>primary accession number</strong> when citing or linking to a protein entry because it is designed to remain stable.<sup><a href="#ref7">7</a></sup></p>

  <p>Examples include:</p>

  <pre><code>P07550
P35354
A0A023GPI8</code></pre>

  <p>UniProtKB accessions currently use either <strong>6-character or 10-character alphanumeric formats</strong>.<sup><a href="#ref7">7</a></sup> A record may also contain older <strong>secondary accessions</strong> if database entries were merged or reorganized.</p>

  <h3>6.2 Entry Name: Useful but Not the Main Stable ID</h3>

  <p>A reviewed entry also has a readable mnemonic <strong>entry name</strong>. For example:</p>

  <pre><code>P07550      = primary accession
ADRB2_HUMAN = entry name
ADRB2       = gene name
Beta-2 adrenergic receptor = protein name</code></pre>

  <p>The entry name is convenient for humans, but UniProt explicitly notes that it is <strong>not the stable identifier</strong>. For reproducible work, record the <strong>primary accession</strong>.<sup><a href="#ref8">8</a></sup></p>

  <h3>6.3 Do Not Confuse Different Kinds of Names</h3>

  <p>A protein may therefore have several labels simultaneously:</p>

  <ul>
    <li><strong>UniProt accession:</strong> database identifier;</li>
    <li><strong>entry name:</strong> UniProt mnemonic;</li>
    <li><strong>gene name:</strong> symbol for the encoding gene;</li>
    <li><strong>recommended protein name:</strong> curated biological name;</li>
    <li><strong>alternative names:</strong> historical names, abbreviations, or synonyms.</li>
  </ul>

  <blockquote>
    <strong>Practical rule:</strong> When recording a protein for an assignment or analysis, preserve at least <strong>protein name + organism + UniProt accession</strong>.
  </blockquote>
</section>

<section>
  <h2>7. Understanding the Flow of Data Through UniProt</h2>

  <p>The figure below summarizes why UniProt contains several related resources rather than a single undifferentiated protein database.</p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="${Ed}">
    <img src="${Ed}" alt="Flow diagram showing external protein sequence sources entering UniParc, UniProtKB TrEMBL and Swiss-Prot, and feeding UniRef clusters and Proteomes" />
    <figcaption>Figure 1: Simplified flow of protein sequence information through the UniProt resource. External sequence sources feed the UniProt sequence archive and knowledgebase; automatically annotated TrEMBL records may undergo expert review to become Swiss-Prot records, while UniRef groups related sequences and the Proteomes portal organizes protein sets by organism. Source: EMBL-EBI UniProt training materials, CC BY 4.0. <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/" target="_blank" rel="noopener noreferrer">View source and explanation</a>.</figcaption>
  </figure>

  <h3>7.1 External Sources → UniParc</h3>

  <p>Protein sequences originate from several external sources. A major source is the translation of coding sequences deposited in the international nucleotide databases <strong>ENA, GenBank, and DDBJ</strong>. UniProt also receives sequence information from resources such as RefSeq, Ensembl, protein structures, direct protein sequencing, and the scientific literature.<sup><a href="#ref9">9</a></sup></p>

  <p><strong>UniParc</strong> acts as the broad sequence archive. It tracks unique protein sequences and their source identifiers, including historical sequences that may later be changed or removed from an original source.</p>

  <h3>7.2 Sequence → TrEMBL Automatic Annotation</h3>

  <p>Protein sequences selected for UniProtKB can enter the <strong>TrEMBL</strong> section, where computational methods add automatic annotation. This provides broad coverage without waiting for every protein to be manually reviewed.</p>

  <h3>7.3 TrEMBL → Swiss-Prot Expert Curation</h3>

  <p>Selected entries may then undergo <strong>expert manual curation</strong>. Curators examine the literature, evaluate evidence, resolve inconsistencies, and build the high-quality reviewed record that appears in <strong>Swiss-Prot</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p>The arrow should therefore be interpreted conceptually as:</p>

  <p><strong>large-scale sequence acquisition → automatic annotation → selected expert review</strong></p>

  <p>It does <strong>not</strong> mean that every TrEMBL record will eventually become a Swiss-Prot record.</p>

  <h3>7.4 UniRef: Grouping Similar Sequences</h3>

  <p><strong>UniRef</strong> clusters related protein sequences at different identity levels. UniRef100, UniRef90, and UniRef50 progressively group sequences to reduce redundancy and make large sequence collections easier to analyse.<sup><a href="#ref3">3</a></sup></p>

  <h3>7.5 Proteomes: Looking at the Organism Level</h3>

  <p>The <strong>Proteomes</strong> portal organizes protein sets associated with organisms. This changes the question from <em>“What is known about this protein?”</em> to <em>“What proteins are represented for this organism or proteome?”</em></p>

  <h3>7.6 A Practical First-Use Workflow</h3>

  <ol>
    <li>Search UniProt using a <strong>protein name, gene name, or accession</strong>.</li>
    <li>Confirm the <strong>organism</strong>.</li>
    <li>Prefer a <strong>reviewed Swiss-Prot entry</strong> when one is available and appropriate.</li>
    <li>Read the <strong>Function</strong> section and note how the statements are supported.</li>
    <li>Inspect <strong>sequence features</strong> relevant to your question: active sites, domains, variants, modifications, transmembrane regions, or binding sites.</li>
    <li>Use <strong>external cross-references</strong> when you need structures, pathways, genomic context, disease information, or other specialist resources.</li>
    <li>Download the <strong>FASTA sequence</strong> only when the next analytical step requires the sequence itself.</li>
    <li>Record the <strong>primary UniProt accession</strong> so the protein can be traced later.</li>
  </ol>

  <blockquote>
    <strong>Final principle:</strong> A UniProt entry is a <strong>protein knowledge record</strong>, not proof that every annotation has equal experimental support. Always check <strong>review status and evidence</strong> before treating a statement as established biological fact.
  </blockquote>
</section>

<section id="references">
  <h2>8. References</h2>

  <ol>
    <li id="ref1">
      UniProt Consortium.
      <a href="https://www.uniprot.org/help/about" target="_blank" rel="noopener noreferrer">About UniProt</a>.
      UniProt. Updated June 2026. Accessed 1 September 2026.
    </li>

    <li id="ref2">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/uniprotkb/" target="_blank" rel="noopener noreferrer">UniProtKB: Swiss-Prot and TrEMBL</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref3">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-quick-tour/the-uniprot-databases/" target="_blank" rel="noopener noreferrer">The UniProt Databases</a>.
      European Bioinformatics Institute. CC BY 4.0. Accessed 1 September 2026.
    </li>

    <li id="ref4">
      UniProt.
      <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer">P07550 · ADRB2_HUMAN — Beta-2 adrenergic receptor</a>.
      UniProtKB/Swiss-Prot. Accessed 1 September 2026.
    </li>

    <li id="ref5">
      UniProt.
      <a href="https://www.uniprot.org/help/annotation_guidelines" target="_blank" rel="noopener noreferrer">Annotation Guidelines and Protein Existence</a>.
      UniProt Help. Updated June 2026.
    </li>

    <li id="ref6">
      UniProt.
      <a href="https://www.uniprot.org/help/canonical_and_isoforms" target="_blank" rel="noopener noreferrer">Canonical Sequences and Isoforms</a>.
      UniProt Help. Accessed 1 September 2026.
    </li>

    <li id="ref7">
      UniProt.
      <a href="https://www.uniprot.org/help/accession_numbers" target="_blank" rel="noopener noreferrer">UniProtKB Accession Numbers</a>.
      UniProt Help. Updated June 2026.
    </li>

    <li id="ref8">
      UniProt.
      <a href="https://www.uniprot.org/help/entry_information_section" target="_blank" rel="noopener noreferrer">Entry Information Section</a>.
      UniProt Help. Accessed 1 September 2026.
    </li>

    <li id="ref9">
      EMBL-EBI Training.
      <a href="https://www.ebi.ac.uk/training/online/courses/uniprot-exploring-protein-sequence-and-functional-info/where-does-the-data-come-from/sequence-data/" target="_blank" rel="noopener noreferrer">Where Does UniProtKB Sequence Data Come From?</a>.
      European Bioinformatics Institute. Accessed 1 September 2026.
    </li>

    <li id="ref10">
      UniProt Consortium.
      <a href="https://academic.oup.com/nar/article/53/D1/D609/7902999" target="_blank" rel="noopener noreferrer">UniProt: the Universal Protein Knowledgebase in 2025</a>.
      <em>Nucleic Acids Research</em>. 2025;53(D1):D609-D617. doi:10.1093/nar/gkae1010.
    </li>
  </ol>
</section>

</article>
  `},Zy=Object.freeze(Object.defineProperty({__proto__:null,default:Xy},Symbol.toStringTag,{value:"Module"})),e4={id:"RK-2026-021",title:"Introduction to the Protein Data Bank (PDB)",date:"2026-09-01",tags:["#PDB","#ProteinStructure","#StructuralBiology"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"The Protein Data Bank (PDB) is the global archive for three-dimensional structures of biological macromolecules. This introductory article explains what the PDB is for, who manages it, what a first-time visitor should examine on a structure page, how PDB identifiers work, and how experimental method, resolution, ligands, chains, biological assemblies, and validation affect interpretation. A beta-2 adrenergic receptor structure is used as a pharmacology-oriented example to show how a PDB entry connects molecular structure with drug binding and biological function.",content:`
<article>

<section>
  <h2>1. Why Do We Need the Protein Data Bank?</h2>

  <p>A protein sequence tells us the <strong>order of amino acids</strong>, but pharmacology and molecular biology often require another level of information: <strong>the three-dimensional arrangement of those atoms in space</strong>.</p>

  <p>Structure can help us ask questions such as:</p>

  <ul>
    <li>Where is the <strong>active site</strong> of an enzyme?</li>
    <li>Where does a drug or ligand bind?</li>
    <li>Which amino-acid residues contact the ligand?</li>
    <li>How are several protein chains arranged into a complex?</li>
    <li>How might a mutation alter a binding pocket or interface?</li>
    <li>Does the structure represent an active, inactive, ligand-bound, or engineered state?</li>
  </ul>

  <p>The <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer"><strong>Protein Data Bank (PDB)</strong></a> is the global archive that makes experimentally determined three-dimensional structures of biological macromolecules publicly available.<sup><a href="#ref1">1</a></sup></p>

  <p>Despite the name, the archive is <strong>not limited to proteins</strong>. It also contains structures involving <strong>DNA, RNA, protein–nucleic-acid complexes, carbohydrates, small-molecule ligands, ions, and other components</strong> associated with macromolecular structures.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Core idea:</strong> UniProt mainly helps answer <em>“What is known about this protein?”</em>; the PDB helps answer <strong>“What does this biological molecule or complex look like in three dimensions?”</strong>
  </blockquote>
</section>

<section>
  <h2>2. Who Manages the PDB, and Which Website Should You Use?</h2>

  <p>The PDB is a <strong>single worldwide archive</strong> managed cooperatively by the <strong>Worldwide Protein Data Bank (wwPDB)</strong>.<sup><a href="#ref2">2</a></sup></p>

  <p>Major wwPDB organizations include:</p>

  <ul>
    <li><strong>RCSB PDB</strong> — United States;</li>
    <li><strong>PDBe</strong> — Protein Data Bank in Europe at EMBL-EBI;</li>
    <li><strong>PDBj</strong> — Protein Data Bank Japan;</li>
    <li><strong>BMRB</strong> — Biological Magnetic Resonance Data Bank;</li>
    <li><strong>EMDB</strong> — Electron Microscopy Data Bank.</li>
  </ul>

  <p>The important beginner point is that <strong>RCSB PDB, PDBe, and PDBj are not three unrelated structure archives</strong>. They provide different interfaces and services around the same globally coordinated PDB archive.<sup><a href="#ref3">3</a></sup></p>

  <p>For this article, we will use <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer"><strong>RCSB PDB</strong></a> because its structure pages combine 3D visualization, sequence annotations, ligand information, experimental details, validation, and cross-links in one interface.</p>

  <p><strong>Takeaway:</strong> Think <strong>one PDB archive, several international portals</strong>.</p>
</section>

<section>
  <h2>3. What Information Is Available in a PDB Entry?</h2>

  <p>A PDB entry is much more than a picture of a protein. It is a record containing the <strong>3D atomic model together with information about how that model was obtained and what biological molecules it contains</strong>.</p>

  <table class="science-table" data-id="pdb-entry-information">
    <caption>Table 1: Major information a first-time user can obtain from a PDB entry</caption>
    <thead>
      <tr>
        <th>Entry Area</th>
        <th>What It Contains</th>
        <th>Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Structure title</strong></td>
        <td>Short description of the deposited structure</td>
        <td>Shows what molecular system and experimental state were studied.</td>
      </tr>
      <tr>
        <td><strong>Experimental method</strong></td>
        <td>X-ray diffraction, cryo-electron microscopy, NMR, or another supported method</td>
        <td>Tells you how the structural model was determined.</td>
      </tr>
      <tr>
        <td><strong>Resolution / quality information</strong></td>
        <td>Resolution where applicable, refinement statistics, validation reports</td>
        <td>Helps assess the level of structural detail and model quality.</td>
      </tr>
      <tr>
        <td><strong>Macromolecules</strong></td>
        <td>Proteins, DNA, RNA, chains, sequence lengths, source organisms</td>
        <td>Confirms what biological molecules are actually present.</td>
      </tr>
      <tr>
        <td><strong>Ligands and small molecules</strong></td>
        <td>Drugs, inhibitors, cofactors, ions, detergents, crystallization components</td>
        <td>Essential for pharmacology and binding-site interpretation.</td>
      </tr>
      <tr>
        <td><strong>Biological assembly</strong></td>
        <td>Proposed functional arrangement of the macromolecule or complex</td>
        <td>May differ from the deposited crystallographic asymmetric unit.</td>
      </tr>
      <tr>
        <td><strong>Sequence annotations</strong></td>
        <td>Residues, domains, mutations, UniProt mappings and related annotations</td>
        <td>Connects structural coordinates with sequence-level biology.</td>
      </tr>
      <tr>
        <td><strong>Literature</strong></td>
        <td>Primary publication, authors and DOI</td>
        <td>Provides the experimental context and scientific interpretation.</td>
      </tr>
      <tr>
        <td><strong>Validation</strong></td>
        <td>wwPDB validation information</td>
        <td>Helps identify strengths, unusual geometry, or possible limitations in the model.</td>
      </tr>
    </tbody>
  </table>

  <p>The RCSB PDB website also provides <strong>interactive 3D visualization</strong>, allowing a user to rotate the structure, display proteins as ribbons, show ligands as sticks or spheres, inspect specific residues, and examine ligand interactions without installing specialist software.</p>

  <h3>3.1 Experimental Structures and Computed Models Are Not the Same Thing</h3>

  <p>The RCSB PDB website can also display <strong>computed structure models</strong> from resources such as AlphaFold DB and ModelArchive. These are useful, but they are clearly separated from structures deposited in the experimental PDB archive.<sup><a href="#ref1">1</a></sup></p>

  <blockquote>
    <strong>Important:</strong> A predicted model is not equivalent to an experimentally determined PDB structure. Always check whether you are viewing a <strong>PDB archive structure</strong> or a <strong>computed structure model</strong>.
  </blockquote>
</section>

<section>
  <h2>4. How PDB Identifiers Work</h2>

  <p>The most important identifier for a structure is the <strong>PDB ID</strong>.</p>

  <p>Examples:</p>

  <pre><code>2RH1
4HHB
6LU7</code></pre>

  <p>For most entries currently encountered in textbooks and research papers, the familiar PDB ID is a <strong>four-character alphanumeric code</strong>.<sup><a href="#ref4">4</a></sup></p>

  <p>RCSB now also displays an extended form such as:</p>

  <pre><code>2RH1
pdb_00002rh1</code></pre>

  <p>The wwPDB is preparing for a future transition to longer identifiers as the four-character identifier space is exhausted. The traditional four-character IDs remain the identifiers students will most commonly encounter in current literature.<sup><a href="#ref4">4</a></sup></p>

  <h3>4.1 One Entry Contains Several Other IDs</h3>

  <p>A structure is hierarchical, so the page also uses identifiers for different parts of the entry:</p>

  <ul>
    <li><strong>PDB ID:</strong> identifies the complete deposited structure entry;</li>
    <li><strong>chain ID:</strong> identifies a particular molecular chain or instance;</li>
    <li><strong>entity ID:</strong> identifies a chemically unique molecule within the entry;</li>
    <li><strong>assembly ID:</strong> identifies a proposed biological assembly;</li>
    <li><strong>chemical component ID:</strong> identifies a ligand, residue, ion, or other small chemical component.</li>
  </ul>

  <p>These identifiers become useful when a structure contains several protein chains and multiple ligands. For example, the question <em>“Which residue contacts the drug?”</em> requires identifying both the correct <strong>chain</strong> and the correct <strong>ligand instance</strong>.<sup><a href="#ref4">4</a></sup></p>

  <blockquote>
    <strong>Practical rule:</strong> For an assignment or publication, always preserve the <strong>PDB ID</strong>. If you discuss a specific interaction, also record the relevant <strong>chain and ligand</strong>.
  </blockquote>
</section>

<section>
  <h2>5. Your First PDB Visit: Beta-2 Adrenergic Receptor, 2RH1</h2>

  <p>A useful pharmacology example is <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer"><strong>PDB 2RH1</strong></a>, a structure of the human <strong>beta-2 adrenergic receptor</strong>, an important G-protein-coupled receptor (GPCR).<sup><a href="#ref5">5</a></sup></p>

  <p>On the first visit, do not try to interpret every field. Work through the page in the following order.</p>

  <h3>5.1 Confirm What the Entry Represents</h3>

  <p>The title identifies 2RH1 as a high-resolution crystal structure of the human beta-2 adrenergic receptor. However, closer inspection shows that the experimental construct is an <strong>engineered beta-2 adrenergic receptor/T4 lysozyme chimera</strong>, rather than an untouched native receptor.<sup><a href="#ref5">5</a></sup></p>

  <p>This is an important lesson: <strong>the title is only the starting point</strong>. Always inspect the actual molecular components and modifications.</p>

  <h3>5.2 Check the Experimental Method</h3>

  <p>2RH1 was determined using <strong>X-ray diffraction</strong> at <strong>2.40 Å resolution</strong>.<sup><a href="#ref5">5</a></sup></p>

  <p>For X-ray and cryo-EM structures, resolution gives a useful indication of the level of structural detail, but it should <strong>not be used as the only measure of quality</strong>. The validation report and local quality of the region being interpreted also matter.</p>

  <h3>5.3 Identify the Ligand</h3>

  <p>The receptor was crystallized with <strong>carazolol</strong>, a ligand occupying the receptor-binding site. The RCSB page allows the ligand and its contacts with nearby residues to be explored directly in the 3D viewer.<sup><a href="#ref5">5</a></sup></p>

  <p>This is where the PDB becomes especially valuable in pharmacology: a drug or ligand can be studied in the <strong>physical context of its binding pocket</strong>, rather than only as a name or activity value.</p>

  <h3>5.4 Follow the Cross-Link to UniProt</h3>

  <p>The receptor portion of the structure is linked to the human UniProt entry <a href="https://www.uniprot.org/uniprotkb/P07550/entry" target="_blank" rel="noopener noreferrer"><strong>P07550</strong></a> for ADRB2.<sup><a href="#ref5">5</a></sup></p>

  <p>This demonstrates the relationship between the two databases:</p>

  <p><strong>UniProt: protein sequence and biological knowledge → PDB: experimentally determined 3D structural state</strong></p>

  <h3>5.5 Read the Primary Paper</h3>

  <p>The primary publication explains why the receptor was engineered, how the structure was obtained, and what biological conclusions can reasonably be drawn from it.<sup><a href="#ref6">6</a></sup></p>

  <p><strong>Takeaway:</strong> For your first PDB entry, check <strong>what was studied → method → resolution → molecules/chains → ligand → biological assembly → validation → primary paper</strong>.</p>
</section>

<section>
  <h2>6. Structural Concepts a First-Time User Must Understand</h2>

  <h3>6.1 Chain, Entity, and Biological Assembly Are Different Ideas</h3>

  <p>A PDB entry may contain several copies of the same molecule or several different molecules. RCSB therefore distinguishes between:</p>

  <ul>
    <li><strong>entity:</strong> a chemically unique molecule;</li>
    <li><strong>instance/chain:</strong> one particular copy of that entity in the structure;</li>
    <li><strong>assembly:</strong> a proposed biologically relevant arrangement of molecules.</li>
  </ul>

  <p>These levels help prevent confusion when a complex contains several protein subunits, nucleic acids, cofactors, or drug molecules.<sup><a href="#ref7">7</a></sup></p>

  <h3>6.2 Asymmetric Unit vs. Biological Assembly</h3>

  <p>For crystal structures, the <strong>asymmetric unit</strong> is the unique portion used to describe the crystal. It is not necessarily the same as the functional biological complex.</p>

  <p>The <strong>biological assembly</strong> is the arrangement believed to represent the functional molecular unit. It may be the same as the asymmetric unit, contain only part of it, or require symmetry-related copies to reconstruct the complete complex.<sup><a href="#ref8">8</a></sup></p>

  <p>For biology and pharmacology, the biological assembly is often the more relevant object to inspect.</p>

  <h3>6.3 Not Every Residue in the Sequence Has Coordinates</h3>

  <p>Experimental structures sometimes contain <strong>missing residues or missing atoms</strong>. Flexible loops, termini, or disordered regions may not be sufficiently resolved to model confidently.</p>

  <p>Therefore, the deposited protein sequence and the residues visible in the 3D model may not always be identical in length.</p>

  <h3>6.4 A PDB Structure Is One Experimental State</h3>

  <p>Proteins are dynamic. A PDB entry may capture:</p>

  <ul>
    <li>an active or inactive state;</li>
    <li>a ligand-bound or ligand-free state;</li>
    <li>a mutant or engineered construct;</li>
    <li>a truncated protein;</li>
    <li>a protein stabilized by an antibody, fusion partner, detergent, or other experimental strategy.</li>
  </ul>

  <blockquote>
    <strong>Important:</strong> A PDB structure should not automatically be interpreted as <strong>the one permanent shape of the protein in the living cell</strong>.
  </blockquote>
</section>

<section>
  <h2>7. How a Biology or Pharmacology Student Should Use the PDB</h2>

  <p>The RCSB PDB website is most useful when approached with a specific biological question.</p>

  <h3>7.1 Search</h3>

  <p>You can search using:</p>

  <ul>
    <li>a <strong>PDB ID</strong>;</li>
    <li>protein or gene name;</li>
    <li>organism;</li>
    <li>UniProt accession;</li>
    <li>ligand or drug name;</li>
    <li>chemical component;</li>
    <li>sequence or structural similarity.</li>
  </ul>

  <h3>7.2 Inspect the Structure Page</h3>

  <p>Before looking at the 3D picture, confirm:</p>

  <ol>
    <li><strong>What molecule or complex was actually studied?</strong></li>
    <li><strong>Was the protein engineered or mutated?</strong></li>
    <li><strong>Which experimental method was used?</strong></li>
    <li><strong>Which ligands, cofactors, or ions are present?</strong></li>
    <li><strong>What is the biological assembly?</strong></li>
    <li><strong>Are important residues missing?</strong></li>
    <li><strong>What does the validation information show?</strong></li>
  </ol>

  <h3>7.3 Use the 3D Viewer for a Biological Question</h3>

  <p>The integrated viewer can then be used to examine:</p>

  <ul>
    <li>ligand-binding pockets;</li>
    <li>active sites;</li>
    <li>protein–protein interfaces;</li>
    <li>specific residues;</li>
    <li>mutations;</li>
    <li>distances between atoms or residues;</li>
    <li>different chains within a complex.</li>
  </ul>

  <h3>7.4 Download Only What You Need</h3>

  <p>If further analysis is required, structures can be downloaded in <strong>PDBx/mmCIF</strong>, the modern standard archive format. The older fixed-column PDB format is still familiar and available where possible, but PDBx/mmCIF has been the standard archive format since 2014 and can represent structures that exceed the limitations of the legacy format.<sup><a href="#ref9">9</a></sup></p>

  <h3>7.5 Do Not Overinterpret a Structure</h3>

  <p>For pharmacological interpretation, keep three rules in mind:</p>

  <ul>
    <li><strong>Ligand presence demonstrates the structural state studied, not automatically therapeutic efficacy.</strong></li>
    <li><strong>A contact visible in a structure is not by itself proof that the interaction dominates binding affinity or pharmacological activity.</strong></li>
    <li><strong>Experimental structure does not eliminate the need for biochemical, pharmacological, and physiological evidence.</strong></li>
  </ul>

  <blockquote>
    <strong>Final principle:</strong> The PDB is most powerful when used to connect <strong>molecular structure with experimental biology</strong>. Use the 3D model to understand the system, but always interpret it together with the experimental method, construct, ligands, validation, and primary literature.
  </blockquote>
</section>

<section id="references">
  <h2>8. References</h2>

  <ol>
    <li id="ref1">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/pages/about-us/index" target="_blank" rel="noopener noreferrer">About RCSB PDB</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref2">
      Worldwide Protein Data Bank.
      <a href="https://www.wwpdb.org/about/agreement" target="_blank" rel="noopener noreferrer">Worldwide Protein Data Bank Charter</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref3">
      Worldwide Protein Data Bank.
      <a href="https://www.wwpdb.org/about/faq" target="_blank" rel="noopener noreferrer">wwPDB Frequently Asked Questions</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref4">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/docs/general-help/identifiers-in-pdb" target="_blank" rel="noopener noreferrer">Identifiers in PDB</a>.
      Updated 20 May 2026.
    </li>

    <li id="ref5">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/structure/2RH1" target="_blank" rel="noopener noreferrer">PDB 2RH1: High Resolution Crystal Structure of Human Beta-2 Adrenergic G Protein-Coupled Receptor</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref6">
      Cherezov V, Rosenbaum DM, Hanson MA, et al.
      <a href="https://doi.org/10.1126/science.1150577" target="_blank" rel="noopener noreferrer">High-resolution crystal structure of an engineered human beta2-adrenergic G protein-coupled receptor</a>.
      <em>Science</em>. 2007;318(5854):1258-1265. doi:10.1126/science.1150577.
    </li>

    <li id="ref7">
      RCSB Protein Data Bank.
      <a href="https://www.rcsb.org/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank" target="_blank" rel="noopener noreferrer">Organization of 3D Structures in the Protein Data Bank</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref8">
      PDB-101.
      <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies" target="_blank" rel="noopener noreferrer">Biological Assemblies</a>.
      RCSB PDB. Accessed 1 September 2026.
    </li>

    <li id="ref9">
      Worldwide Protein Data Bank.
      <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF General FAQ</a>.
      Accessed 1 September 2026.
    </li>

    <li id="ref10">
      PDB-101.
      <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction" target="_blank" rel="noopener noreferrer">Guide to Understanding PDB Data</a>.
      RCSB PDB. Accessed 1 September 2026.
    </li>
  </ol>
</section>

</article>
  `},t4=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),r4={id:"RK-2026-022",title:"Anatomy of a PDB Structure File: From Atoms to PDBx/mmCIF",date:"2026-09-01",tags:["#PDB","#PDBxmmCIF","#ProteinStructure"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"A structure file is the text representation behind the three-dimensional molecular model seen in a PDB viewer. This article introduces the biological anatomy of structure files using a small teaching example: chains contain residues, residues contain atoms, and each modeled atom is positioned using x, y, and z coordinates. It also explains why the modern PDBx/mmCIF format has replaced the legacy PDB format as the archive standard, while keeping the emphasis on biologically useful information such as ligands, water molecules, missing residues, experimental metadata, and biological assemblies.",content:`
<article>

<section>
  <h2>1. What Does a PDB Structure File Actually Represent?</h2>

  <p>When a structure is opened on the <a href="https://www.rcsb.org/" target="_blank" rel="noopener noreferrer">RCSB PDB</a> website, we usually see a ribbon diagram, molecular surface, ligand-binding pocket, or ball-and-stick model. Behind that picture is a <strong>text file describing the molecular model</strong>.</p>

  <p>The most important information in that file is:</p>

  <p><strong>which atoms are present → which residues they belong to → which chain they belong to → where each atom is located in three-dimensional space</strong>.</p>

  <p>PDB-101 describes coordinate files as lists of the atoms in a structure together with their <strong>3D locations</strong>, plus information describing the sequence, experiment, and structure.<sup><a href="#ref1">1</a></sup></p>

  <p>A structure file therefore allows software to reconstruct a molecular model. The file does not contain a photograph of the protein. It contains a <strong>model of atomic positions derived from structural experiments</strong>.</p>

  <blockquote>
    <strong>Core idea:</strong> A molecular viewer is essentially translating <strong>textual structural information into a 3D biological picture</strong>.
  </blockquote>
</section>

<section>
  <h2>2. The Biological Hierarchy: Structure → Chain → Residue → Atom</h2>

  <p>The easiest way to understand a structure file is to follow the natural hierarchy of a biological macromolecule:</p>

  <p><strong>structure → molecular chain → amino-acid residue → atom</strong></p>

  <pre><code>Chain A
│
├── Residue 1: ALA
│   ├── N
│   ├── CA
│   ├── C
│   └── O
│
└── Residue 2: TYR
    ├── N
    ├── CA
    ├── CB
    └── OH</code></pre>

  <p>Real structures may contain <strong>several protein chains, DNA or RNA chains, ligands, metal ions, cofactors, and water molecules</strong>.<sup><a href="#ref1">1</a></sup></p>

  <h3>2.1 Why Chain IDs Matter</h3>

  <p>A structure may contain several copies of the same protein or several different molecular partners. Chain identifiers allow us to say precisely which copy we mean.</p>

  <pre><code>Chain A = receptor
Chain B = interacting protein
Chain C = another subunit</code></pre>

  <p>When discussing a mutation, binding site, or interaction, <strong>residue number alone may not be enough</strong>. “TYR 100” in chain A and “TYR 100” in chain B are different structural objects.</p>

  <p><strong>Takeaway:</strong> Read a structure from the outside inward: <strong>entry → chain → residue → atom</strong>.</p>
</section>

<section>
  <h2>3. Coordinates: How a 3D Molecule Is Written as Text</h2>

  <p>Each modeled atom is assigned three numbers describing its position along the <strong>x, y, and z axes</strong>. These coordinates are expressed in <strong>Ångström (Å)</strong>, a unit commonly used for molecular dimensions.</p>

  <pre><code>ATOM      2  CA  ALA A   1      11.200  12.500   8.400  1.00 18.00           C</code></pre>

  <table class="science-table" data-id="legacy-pdb-atom-line">
    <caption>Table 1: Biological interpretation of a simplified legacy PDB atom record</caption>
    <thead>
      <tr>
        <th>Part</th>
        <th>Example</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Record type</td><td><code>ATOM</code></td><td>Atom belongs to a standard polymer residue.</td></tr>
      <tr><td>Atom name</td><td><code>CA</code></td><td>Alpha-carbon atom.</td></tr>
      <tr><td>Residue</td><td><code>ALA</code></td><td>Alanine.</td></tr>
      <tr><td>Chain</td><td><code>A</code></td><td>Molecular chain containing the residue.</td></tr>
      <tr><td>Residue number</td><td><code>1</code></td><td>Position used to identify the residue in this model.</td></tr>
      <tr><td>x, y, z</td><td><code>11.200 12.500 8.400</code></td><td>Atom position in three-dimensional space.</td></tr>
      <tr><td>Occupancy</td><td><code>1.00</code></td><td>How fully this modeled position is occupied.</td></tr>
      <tr><td>B-factor</td><td><code>18.00</code></td><td>Parameter related to atomic displacement/disorder.</td></tr>
      <tr><td>Element</td><td><code>C</code></td><td>The atom is carbon.</td></tr>
    </tbody>
  </table>

  <p>You do <strong>not</strong> need to calculate these coordinates manually. Structural viewers read them and place each atom at the appropriate position.</p>

  <blockquote>
    <strong>Presentation point:</strong> The 3D protein displayed on screen is reconstructed from <strong>one coordinate record after another</strong>.
  </blockquote>
</section>

<section>
  <h2>4. A Small Demo Structure File</h2>

  <p>The following teaching example is deliberately tiny. It is <strong>not a real deposited PDB entry</strong>; it exists only to make the structure of a coordinate file visible.</p>

  <pre><code>HEADER    TEACHING EXAMPLE
TITLE     SMALL PROTEIN FRAGMENT WITH A BOUND LIGAND

ATOM      1  N   ALA A   1      10.000  12.000   8.000  1.00 20.00           N
ATOM      2  CA  ALA A   1      11.200  12.500   8.400  1.00 18.00           C
ATOM      3  C   ALA A   1      12.300  11.500   8.700  1.00 19.00           C
ATOM      4  O   ALA A   1      12.100  10.300   8.500  1.00 21.00           O

ATOM      5  N   TYR A   2      13.500  12.000   9.200  1.00 22.00           N
ATOM      6  CA  TYR A   2      14.600  11.100   9.500  1.00 20.00           C
ATOM      7  CB  TYR A   2      15.800  11.900   9.900  1.00 23.00           C
ATOM      8  OH  TYR A   2      17.200  12.500  10.500  1.00 25.00           O

HETATM    9  C1  LIG B 101      18.300  12.700  10.800  1.00 17.00           C
HETATM   10  O1  LIG B 101      19.300  12.900  11.100  1.00 16.00           O
HETATM   11  O   HOH C 201      16.500  14.100  10.700  1.00 28.00           O
END</code></pre>

  <h3>4.1 What Can We Read Biologically?</h3>

  <ul>
    <li><strong>Chain A</strong> is the protein fragment.</li>
    <li><strong>ALA 1</strong> is followed by <strong>TYR 2</strong>.</li>
    <li>Each amino acid is represented by several individual atoms.</li>
    <li><strong>LIG</strong> is a fictional small-molecule ligand.</li>
    <li><strong>HOH</strong> represents a water molecule.</li>
    <li>Every atom has its own <strong>x, y, z coordinates</strong>.</li>
  </ul>

  <h3>4.2 What Does HETATM Mean?</h3>

  <p>In the legacy PDB format, <code>ATOM</code> records are typically used for atoms in standard polymer residues, while <code>HETATM</code> records are used for many other chemical components.</p>

  <p>These may include <strong>bound drugs, experimental ligands, cofactors, metal ions, water, modified residues, detergents, or crystallization components</strong>.<sup><a href="#ref2">2</a></sup></p>

  <blockquote>
    <strong>Important:</strong> A small molecule being present in a structure file does <strong>not automatically mean it is biologically or pharmacologically important</strong>. Some are present because of the experimental conditions.
  </blockquote>
</section>

<section>
  <h2>5. Legacy PDB vs. Modern PDBx/mmCIF</h2>

  <p>The text format shown above is the familiar <strong>legacy PDB format</strong>. It is still widely recognized because decades of structural-biology literature and software use it.</p>

  <p>However, the <strong>modern archive standard is PDBx/mmCIF</strong>. wwPDB adopted PDBx/mmCIF as the standard PDB archive format in <strong>2014</strong>.<sup><a href="#ref3">3</a></sup></p>

  <p>The older format uses fixed-width columns and has historical limits on the numbers of atoms and chains it can represent. PDBx/mmCIF is more flexible and can represent today's larger macromolecular complexes.<sup><a href="#ref3">3</a></sup></p>

  <table class="science-table" data-id="pdb-vs-mmcif">
    <caption>Table 2: Beginner-level comparison of legacy PDB and PDBx/mmCIF files</caption>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Legacy PDB</th>
        <th>PDBx/mmCIF</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Status</strong></td><td>Older, familiar format</td><td><strong>Current wwPDB archive standard</strong></td></tr>
      <tr><td><strong>Typical extension</strong></td><td><code>.pdb</code></td><td><code>.cif</code></td></tr>
      <tr><td><strong>Appearance</strong></td><td>Fixed columns</td><td>Named fields and table-like blocks</td></tr>
      <tr><td><strong>Large complexes</strong></td><td>Historical size limitations</td><td>Designed for large and complex structures</td></tr>
      <tr><td><strong>Student priority</strong></td><td>Recognize it when encountered</td><td><strong>Treat it as the modern default</strong></td></tr>
    </tbody>
  </table>

  <h3>5.1 The Same Demo in PDBx/mmCIF</h3>

  <pre><code>data_demo_structure

loop_
_atom_site.group_PDB
_atom_site.id
_atom_site.type_symbol
_atom_site.label_atom_id
_atom_site.label_comp_id
_atom_site.label_asym_id
_atom_site.label_seq_id
_atom_site.Cartn_x
_atom_site.Cartn_y
_atom_site.Cartn_z

ATOM    1  N  N   ALA A 1 10.000 12.000  8.000
ATOM    2  C  CA  ALA A 1 11.200 12.500  8.400
ATOM    5  N  N   TYR A 2 13.500 12.000  9.200
ATOM    8  O  OH  TYR A 2 17.200 12.500 10.500
HETATM 9  C  C1  LIG B . 18.300 12.700 10.800</code></pre>

  <p>The biological information is the same:</p>

  <ul>
    <li><code>label_atom_id</code> = <strong>atom name</strong>;</li>
    <li><code>label_comp_id</code> = <strong>residue or chemical component</strong>;</li>
    <li><code>label_asym_id</code> = <strong>chain/asymmetric-unit identifier</strong>;</li>
    <li><code>label_seq_id</code> = <strong>position in the polymer sequence</strong>;</li>
    <li><code>Cartn_x</code>, <code>Cartn_y</code>, <code>Cartn_z</code> = <strong>3D coordinates</strong>.</li>
  </ul>

  <p>PDBx/mmCIF organizes information into named categories and fields, often in table-like <code>loop_</code> blocks.<sup><a href="#ref4">4</a></sup> Students do not need to memorize the field names.</p>

  <blockquote>
    <strong>Takeaway:</strong> Learn the biological concepts once—<strong>atom, residue, chain, ligand, coordinate</strong>. Legacy PDB and PDBx/mmCIF are two ways of writing those structural concepts.
  </blockquote>
</section>

<section>
  <h2>6. What Else Is Biologically Important in a Structure File?</h2>

  <p>Coordinates are central, but a structure file also carries information needed to interpret them correctly.</p>

  <h3>6.1 Experimental Information</h3>

  <p>PDBx/mmCIF can record the <strong>experimental method, resolution where relevant, authors, primary publication, molecular components, refinement, and validation information</strong>.</p>

  <h3>6.2 Missing Coordinates</h3>

  <p>A protein sequence may contain a residue that does <strong>not</strong> have coordinates in the final structure. Flexible loops, terminal regions, or disordered segments may not have been sufficiently resolved to model.<sup><a href="#ref5">5</a></sup></p>

  <p><strong>residue missing from the 3D model ≠ residue necessarily missing from the biological protein</strong></p>

  <h3>6.3 Biological Assembly</h3>

  <p>The deposited coordinates may describe an <strong>asymmetric unit</strong>, particularly for crystallographic structures. The biologically relevant complex may instead be represented by a <strong>biological assembly</strong>.<sup><a href="#ref6">6</a></sup></p>

  <p>This is especially important for <strong>dimers, oligomers, receptor complexes, protein–protein interfaces, viral capsids, and large molecular machines</strong>.</p>

  <h3>6.4 Engineered and Experimental Components</h3>

  <p>Many structures contain mutations, fusion partners, affinity tags, antibodies, stabilizing proteins, detergents, or crystallization molecules introduced to make the experiment possible.</p>

  <p>A structure file therefore represents <strong>the molecular system that was actually studied</strong>, which may differ from the untouched native protein.</p>

  <blockquote>
    <strong>Interpretation rule:</strong> Never read coordinates without asking <strong>“What exactly was in the experimental sample?”</strong>
  </blockquote>
</section>

<section>
  <h2>7. References</h2>

  <ol>
    <li id="ref1">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/dealing-with-coordinates" target="_blank" rel="noopener noreferrer">Dealing with Coordinates</a>. Accessed 1 September 2026.</li>
    <li id="ref2">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/small-molecule-ligands" target="_blank" rel="noopener noreferrer">Small Molecule Ligands</a>. Accessed 1 September 2026.</li>
    <li id="ref3">Worldwide Protein Data Bank. <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF General FAQ</a>. Accessed 1 September 2026.</li>
    <li id="ref4">Worldwide Protein Data Bank. <a href="https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-format.html" target="_blank" rel="noopener noreferrer">PDBx/mmCIF Format FAQ</a>. Accessed 1 September 2026.</li>
    <li id="ref5">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/introduction" target="_blank" rel="noopener noreferrer">Guide to Understanding PDB Data</a>. Accessed 1 September 2026.</li>
    <li id="ref6">PDB-101, RCSB Protein Data Bank. <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies" target="_blank" rel="noopener noreferrer">Biological Assemblies</a>. Accessed 1 September 2026.</li>
    <li id="ref7">RCSB Protein Data Bank. <a href="https://www.rcsb.org/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank" target="_blank" rel="noopener noreferrer">Organization of 3D Structures in the Protein Data Bank</a>. Accessed 1 September 2026.</li>
  </ol>
</section>

</article>
  `},n4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),a4={id:"RK-2026-018",title:"Core Pharmacology Databases: Connecting Chemicals, Targets and Drug Response",date:"2026-08-31",tags:["#Pharmacology","#DrugDatabases","#DrugDiscovery"],type:"report",template:"standard",readTime:"25 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"Pharmacology sits at the interface between chemistry and biology: a chemical has a structure, interacts with biological targets, produces measurable activity, and may ultimately become a medicine whose effects vary between patients. This introductory article presents the small set of databases that are most useful for following that chain, including PubChem, ChEMBL, DrugBank, the IUPHAR/BPS Guide to PHARMACOLOGY, BindingDB, DrugCentral, and ClinPGx. The aim is not to memorize databases, but to learn which resource answers which pharmacological question.",content:`
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
  `},o4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),i4=Object.assign({"./articles/rk-2025-002.ts":by,"./articles/rk-2026-003.ts":xy,"./articles/rk-2026-004.ts":Sy,"./articles/rk-2026-005.ts":Ty,"./articles/rk-2026-006.ts":Py,"./articles/rk-2026-007.ts":Dy,"./articles/rk-2026-008.ts":Ey,"./articles/rk-2026-009.ts":By,"./articles/rk-2026-010.ts":zy,"./articles/rk-2026-011.ts":qy,"./articles/rk-2026-012.ts":jy,"./articles/rk-2026-013.ts":Oy,"./articles/rk-2026-014.ts":Hy,"./articles/rk-2026-015.ts":Gy,"./articles/rk-2026-016.ts":$y,"./articles/rk-2026-017.ts":Ky,"./articles/rk-2026-019.ts":Jy,"./articles/rk-2026-020.ts":Zy,"./articles/rk-2026-021.ts":t4,"./articles/rk-2026-022.ts":n4,"./articles/rk-2026-18.ts":o4}),s4=Object.assign({}),El=Object.entries(i4).map(([e,t])=>{const r=t.default,n=e.replace(/\.ts$/,".bib"),a=s4[n];return r?(a&&(r.bibTexContent=a),r):null}).filter(e=>!!e&&!!e.id).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),l4=({article:e})=>h.jsxs("div",{className:`group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b-2 border-ink dark:border-crt-green 
      text-ink dark:text-crt-green
      md:hover:bg-ink md:hover:text-paper active:bg-ink active:text-paper
      dark:md:hover:bg-crt-green dark:md:hover:text-black dark:active:bg-crt-green dark:active:text-black
      transition-all cursor-pointer`,children:[h.jsx("div",{className:"font-mono text-sm w-32 shrink-0 opacity-70 group-hover:opacity-100 group-hover:font-bold",children:e.date}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight md:group-hover:translate-x-2 transition-transform duration-300",children:e.title}),h.jsx("div",{className:"md:hidden mt-2 flex flex-wrap gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-[10px] font-mono border border-current px-2 rounded-full opacity-60",children:t},t))})]}),h.jsxs("div",{className:"hidden md:flex items-center gap-4 shrink-0",children:[h.jsx("div",{className:"flex gap-2",children:e.tags.map(t=>h.jsx("span",{className:"text-xs font-mono border border-pencil dark:border-crt-green/50 group-hover:border-paper dark:group-hover:border-black px-2 py-1 rounded-full transition-colors",children:t},t))}),h.jsx(Wp,{className:"opacity-0 group-hover:opacity-100 transition-opacity",size:16})]})]}),c4=()=>{const[e,t]=E.useState(""),r=El.filter(n=>n.title.toLowerCase().includes(e.toLowerCase())||n.tags.some(a=>a.toLowerCase().includes(e.toLowerCase())));return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-6xl mx-auto",children:[h.jsxs("header",{className:"mb-12 border-b-4 border-ink dark:border-crt-green pb-4",children:[h.jsx("h1",{className:"font-mono text-xl md:text-3xl font-bold tracking-tighter uppercase text-ink dark:text-crt-green",children:"INDEX_REGISTRY // ARCHIVES"}),h.jsx("p",{className:"font-mono text-xs text-pencil dark:text-crt-green/60 mt-2",children:"Select a record to view details."})]}),h.jsx("div",{className:"mb-12 relative max-w-2xl",children:h.jsxs("div",{className:"flex items-center gap-4 text-ink dark:text-crt-green font-mono text-lg border-b-2 border-transparent focus-within:border-ink dark:focus-within:border-crt-green transition-colors pb-2",children:[h.jsx("span",{className:"animate-pulse",children:h.jsx(Qp,{size:20})}),h.jsx("span",{className:"text-pencil dark:text-crt-green/50 select-none",children:">"}),h.jsx("input",{type:"text",value:e,onChange:n=>t(n.target.value),placeholder:"Search logs...",className:"bg-transparent border-none outline-none w-full placeholder-gray-400 dark:placeholder-crt-dim/50",autoFocus:!0})]})}),h.jsx("div",{className:"space-y-0",children:r.length>0?r.map(n=>h.jsx(jp,{to:`/articles/${n.id}`,className:"block",children:h.jsx(l4,{article:n})},n.id)):h.jsx("div",{className:"py-12 text-center font-mono text-pencil dark:text-crt-dim border-2 border-dashed border-gray-300 dark:border-crt-dim",children:h.jsxs("p",{children:['Error: No records found matching query "',e,'"']})})}),h.jsxs("div",{className:"mt-8 font-mono text-xs text-right text-pencil dark:text-crt-green/50",children:["Total_Records: ",El.length," // Visible: ",r.length]})]})},d4=e=>{const[t,r]=E.useState([]),[n,a]=E.useState(!0),[o,i]=E.useState(null);return E.useEffect(()=>{let s=!0;const l=new AbortController;return(async()=>{try{const p=await fetch(`https://pub.orcid.org/v3.0/${e}/works`,{headers:{Accept:"application/json"},signal:l.signal});if(!p.ok)throw new Error(`Failed to connect to ORCID (Status: ${p.status})`);const f=await p.json();if(s){const y=f.group.map(x=>{var P,M,_,B,z,W,U,J,X,ce,me;const T=x["work-summary"][0],A=((M=(P=T.title)==null?void 0:P.title)==null?void 0:M.value)||"Untitled Work",N=((_=T["journal-title"])==null?void 0:_.value)||"Unknown Journal",b=((z=(B=T["publication-date"])==null?void 0:B.year)==null?void 0:z.value)||"N/A",v=((W=T.url)==null?void 0:W.value)||((ce=(X=(J=(U=T["external-ids"])==null?void 0:U["external-id"])==null?void 0:J[0])==null?void 0:X["external-id-url"])==null?void 0:ce.value)||"#",w=((me=T.type)==null?void 0:me.replace(/_/g," "))||"publication";return{title:A,journal:N,year:b,url:v,type:w}});r(y),a(!1)}}catch(p){s&&p.name!=="AbortError"&&(console.error("ORCID Fetch Error:",p),i("Error synchronizing with ORCID registry."),a(!1))}})(),()=>{s=!1,l.abort()}},[e]),{publications:t,loading:n,error:o}},u4="/notes_computers_in_biology/assets/RK-BtUTJjuG.jpg",h4=()=>{const{publications:e,loading:t,error:r}=d4("0000-0002-7077-4218");return h.jsx("div",{className:"min-h-full p-6 md:p-12 relative",children:h.jsxs("div",{className:"max-w-4xl mx-auto bg-white dark:bg-black border border-ink dark:border-crt-green shadow-paper dark:shadow-crt p-8 md:p-12 relative",children:[h.jsx("div",{className:"absolute top-4 right-4 border-2 border-red-700 dark:border-crt-amber text-red-700 dark:text-crt-amber px-2 py-1 font-mono text-xs font-bold -rotate-12 opacity-80 uppercase tracking-widest",children:"Personnel_File"}),h.jsxs("header",{className:"flex flex-col md:flex-row gap-8 mb-12 border-b-2 border-ink dark:border-crt-green pb-8",children:[h.jsxs("div",{className:"shrink-0 relative group",children:[h.jsxs("div",{className:"w-48 h-48 bg-gray-200 dark:bg-crt-dim border-4 border-ink dark:border-crt-green overflow-hidden relative",children:[h.jsx("img",{src:u4,alt:"Profile",className:"w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500",onError:n=>{n.target.src="https://ui-avatars.com/api/?name=Rohit+Patel&background=random&size=200"}}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_50%,rgba(0,0,0,0)_50%)] bg-[length:100%_4px] pointer-events-none"})]}),h.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 dark:bg-crt-dim/80 rotate-3 shadow-sm z-10"})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold text-ink dark:text-crt-green mb-2",children:"Patel Rohit K."}),h.jsx("div",{className:"font-mono text-sm md:text-base bg-ink text-paper dark:bg-crt-green dark:text-black inline-block px-2 py-1 mb-6 uppercase tracking-wider",children:"Microbiologist & Bioinformatician"}),h.jsx("p",{className:"font-serif text-lg leading-relaxed text-ink dark:text-crt-green/90 mb-6 border-l-4 border-gray-300 dark:border-crt-dim pl-4 italic",children:'"A dedicated microbiology and bioinformatics researcher passionate about bridging the gap between computational technology and life sciences. My mission is to translate complex computational methods and tools into accessible, actionable knowledge for biologists."'}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs",children:[h.jsxs("a",{href:"mailto:rohitmicrobiologist@gmail.com",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(ny,{size:14})," rohitmicrobiologist@gmail.com"]}),h.jsxs("a",{href:"https://github.com/RKPatel-1996",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(ey,{size:14})," github.com/RKPatel-1996"]}),h.jsxs("a",{href:"https://scholar.google.co.in/citations?user=kvgCFB4AAAAJ",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx(Cd,{size:14})," Google Scholar"]}),h.jsxs("a",{href:"https://www.researchgate.net/profile/Rohit-Patel-7",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors",children:[h.jsx($2,{size:14})," ResearchGate"]}),h.jsxs("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-accent dark:hover:text-crt-amber transition-colors col-span-full",children:[h.jsx("div",{className:"w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px] font-bold",children:"iD"})," ","ORCID: 0000-0002-7077-4218"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[h.jsxs("div",{className:"lg:col-span-1 space-y-12",children:[h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(Cd,{size:16})," Education_History"]}),h.jsxs("div",{className:"space-y-6 font-serif text-sm relative border-l border-dashed border-gray-400 dark:border-crt-dim ml-2 pl-6",children:[h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-ink dark:bg-crt-green rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"Ph.D. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (Pursuing)"}),h.jsx("p",{className:"text-xs italic leading-tight",children:"Exploring bacterial secondary metabolites as phytohormone analogues."})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"M.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat University (2020)"})]}),h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -left-[31px] top-1 w-2 h-2 bg-gray-400 dark:bg-crt-dim rounded-full"}),h.jsx("div",{className:"font-bold text-ink dark:text-crt-green",children:"B.Sc. in Microbiology"}),h.jsx("div",{className:"text-pencil dark:text-crt-green/70 text-xs mb-1",children:"Gujarat Arts & Science College (2018)"})]})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(Y2,{size:16})," Research_Exp"]}),h.jsxs("div",{className:"font-serif text-sm",children:[h.jsx("div",{className:"mb-2 font-bold text-ink dark:text-crt-green",children:"Senior Research Fellow (SRF)"}),h.jsx("div",{className:"text-xs text-pencil dark:text-crt-green/70 mb-2",children:"Gujarat University"}),h.jsx("p",{className:"text-xs leading-relaxed border-l-2 border-gray-200 dark:border-crt-dim pl-2",children:"Project: Network program on Antimicrobial Resistance, Superbugs and One Health (Human health care node)."})]})]}),h.jsxs("section",{children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-4 pb-1 flex items-center gap-2",children:[h.jsx(cy,{size:16})," Skill_Matrix"]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:["Molecular Docking","MD Simulation","WGS","Metagenomics","AMR Workflows","Web-App Dev","Plant-Microbe Interaction"].map(n=>h.jsx("span",{className:"font-mono text-[10px] bg-gray-100 dark:bg-crt-dim border border-gray-300 dark:border-crt-green px-2 py-1 text-ink dark:text-crt-green hover:bg-ink hover:text-white dark:hover:bg-crt-green dark:hover:text-black transition-colors cursor-default",children:n},n))})]})]}),h.jsxs("div",{className:"lg:col-span-2",children:[h.jsxs("h3",{className:"font-mono text-sm font-bold uppercase border-b-2 border-ink dark:border-crt-green mb-6 pb-1 flex items-center gap-2",children:[h.jsx(V2,{size:16})," Publications_DB (Live Sync)"]}),t&&h.jsxs("div",{className:"flex flex-col items-center justify-center h-48 font-mono text-xs text-pencil dark:text-crt-green animate-pulse",children:[h.jsx(ry,{className:"animate-spin mb-4"}),h.jsx("span",{children:"ESTABLISHING_CONNECTION_TO_ORCID..."})]}),r&&h.jsxs("div",{className:"p-4 border border-red-500 bg-red-50 text-red-700 font-mono text-xs text-center",children:["ERROR: ",r]}),!t&&!r&&h.jsx("div",{className:"space-y-4",children:e.length===0?h.jsx("div",{className:"text-center font-mono text-xs text-pencil py-8",children:"No public records found."}):e.map((n,a)=>h.jsxs("div",{className:"group relative border border-gray-200 dark:border-crt-dim p-4 hover:border-ink dark:hover:border-crt-green transition-colors bg-gray-50 dark:bg-transparent",children:[h.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-crt-dim group-hover:bg-accent dark:group-hover:bg-crt-amber transition-colors"}),h.jsxs("div",{className:"pl-3",children:[h.jsxs("div",{className:"flex justify-between items-start mb-1",children:[h.jsx("span",{className:"font-mono text-[10px] uppercase text-pencil dark:text-crt-green/60 border border-gray-300 dark:border-crt-dim px-1 rounded",children:n.year}),h.jsx("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"text-pencil hover:text-accent dark:text-crt-green/70 dark:hover:text-crt-amber",children:h.jsx(jc,{size:14})})]}),h.jsx("h4",{className:"font-serif font-bold text-ink dark:text-crt-green text-lg leading-tight mb-2 group-hover:text-accent dark:group-hover:text-crt-amber transition-colors",children:n.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80",children:n.journal})]})]},a))}),h.jsx("div",{className:"mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-crt-dim text-center",children:h.jsx("a",{href:"https://orcid.org/0000-0002-7077-4218",target:"_blank",rel:"noreferrer",className:"font-mono text-xs text-accent dark:text-crt-green hover:underline",children:"VIEW_FULL_RECORD_ON_ORCID [external_link]"})})]})]})]})})},p4=({heroVideo:e})=>h.jsxs("div",{className:"mb-12",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 opacity-80",children:[h.jsx(oy,{size:16,className:"text-red-600 dark:text-crt-amber animate-pulse"}),h.jsx("h2",{className:"font-mono text-xs font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_A: Transmission_Source"}),h.jsx("div",{className:"h-px bg-ink/20 dark:bg-crt-green/20 flex-1 ml-2"})]}),h.jsxs("div",{className:"border-2 border-ink dark:border-crt-green shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt bg-gray-100 dark:bg-black max-w-4xl mx-auto",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),h.jsx("span",{children:"broadcast_deck.exe - [MAIN_FEED]"})]}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full bg-black border-b-2 border-ink dark:border-crt-green",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsx("div",{className:"p-4 bg-gray-200 dark:bg-crt-dim/10",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start justify-between",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"font-mono text-[10px] text-accent dark:text-crt-amber mb-1 uppercase font-bold flex items-center gap-2",children:[h.jsx("span",{children:"Latest_Upload"}),h.jsx("span",{className:"opacity-50",children:"//"}),h.jsx("span",{children:e.dateAdded})]}),h.jsx("h1",{className:"font-serif text-xl md:text-2xl font-bold leading-tight text-ink dark:text-crt-green mb-2",children:e.title}),h.jsx("div",{className:"font-serif italic text-sm text-pencil dark:text-crt-green/80 border-l-2 border-ink dark:border-crt-green pl-3 py-1",children:e.commentary})]}),h.jsx("div",{className:"shrink-0 pt-1",children:h.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-ink dark:bg-crt-green text-paper dark:text-black font-mono text-xs font-bold uppercase hover:translate-y-px hover:shadow-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] transition-all border border-transparent",children:[h.jsx("span",{children:"Visit_Channel"}),h.jsx(jc,{size:12})]})})]})})]})]}),m4=({video:e})=>{const[t,r]=E.useState(!1);return h.jsxs("div",{className:"flex flex-col border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt bg-gray-100 dark:bg-black h-fit transition-all duration-300",children:[h.jsxs("div",{className:"bg-ink dark:bg-crt-green text-paper dark:text-black px-2 py-1 flex justify-between items-center font-mono text-xs select-none shrink-0",children:[h.jsx("span",{className:"truncate max-w-[200px]",children:"media_player.exe"}),h.jsxs("div",{className:"flex gap-1",children:[h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-paper dark:bg-black border border-gray-400"}),h.jsx("div",{className:"w-3 h-3 bg-accent dark:bg-black border border-gray-400"})]})]}),h.jsx("div",{className:"relative aspect-video w-full border-b-2 border-ink dark:border-crt-green bg-black group shrink-0",children:h.jsx("iframe",{className:"absolute top-0 left-0 w-full h-full",src:`https://www.youtube.com/embed/${e.id}`,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsxs("div",{className:"p-3 bg-gray-200 dark:bg-crt-dim/10 flex flex-col gap-3",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-serif font-bold text-lg leading-tight text-ink dark:text-crt-green mb-1 line-clamp-2",children:e.title}),h.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-pencil dark:text-crt-green/70",children:[h.jsx(py,{size:12}),h.jsx("span",{className:"uppercase tracking-wide",children:e.channelName})]})]}),h.jsxs("div",{className:"flex justify-between items-center border-t border-gray-300 dark:border-crt-green/30 pt-2",children:[h.jsxs("span",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/50",children:["ID: ",e.id]}),h.jsxs("button",{onClick:()=>r(!t),className:"flex items-center gap-1 px-3 py-1 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-sm hover:translate-y-px active:shadow-none active:translate-y-1 transition-all font-mono text-xs font-bold uppercase text-ink dark:text-crt-green group",children:[t?"Close_Log":"Read_Notes",t?h.jsx(Hp,{size:12}):h.jsx(Op,{size:12,className:"group-hover:translate-y-0.5 transition-transform"})]})]})]}),t&&h.jsxs("div",{className:"border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black p-4 animate-in slide-in-from-top-2 duration-200",children:[h.jsxs("div",{className:"flex gap-3 mb-4",children:[h.jsx("div",{className:"shrink-0 w-1 bg-accent dark:bg-crt-amber self-stretch"}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1 font-mono text-[10px] uppercase text-accent dark:text-crt-amber font-bold",children:[h.jsx(ay,{size:12})," Curator_Commentary"]}),h.jsxs("p",{className:"font-serif italic text-sm text-ink/90 dark:text-crt-green/90 leading-relaxed",children:['"',e.commentary,'"']})]})]}),h.jsx("div",{className:"flex flex-wrap gap-2 pt-2 border-t border-dashed border-gray-300 dark:border-crt-dim",children:e.tags.map(n=>h.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-mono uppercase bg-gray-100 dark:bg-crt-dim/30 border border-gray-300 dark:border-crt-green/30 px-2 py-1 text-pencil dark:text-crt-green rounded-sm",children:[h.jsx(ly,{size:10}),n]},n))})]})]})},f4={id:"v392lEyM29A",title:"Linux course for beginners | Full tutorial",channelName:"Boot dev",tags:["Linux","Basic","Course"],commentary:"Learn the basics and foundational commands of linux.",dateAdded:"2025-02-18"},_d=[{id:"d86ws7mQYIg",title:"Computer hardware and basic operations explained",channelName:"Branch Education",tags:["computer","Hardware","Inner working"],commentary:"A clear and concise explanation of how computers work at a fundamental level. This video is a great resource for anyone looking to understand the inner workings of computer hardware and basic operations.",dateAdded:"2023-03-22"}],g4=()=>{const[e,t]=E.useState(""),[r,n]=E.useState(null),a=Array.from(new Set(_d.flatMap(i=>i.tags))),o=E.useMemo(()=>_d.filter(i=>{const s=e.toLowerCase(),l=i.title.toLowerCase().includes(s)||i.channelName.toLowerCase().includes(s)||i.commentary.toLowerCase().includes(s)||i.tags.some(p=>p.toLowerCase().includes(s)),u=r?i.tags.includes(r):!0;return l&&u}),[e,r]);return h.jsxs("div",{className:"min-h-full p-4 md:p-12 max-w-7xl mx-auto",children:[h.jsx(p4,{heroVideo:f4}),h.jsxs("section",{children:[h.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[h.jsx("div",{className:"w-4 h-4 bg-accent dark:bg-crt-amber rotate-45"}),h.jsx("h2",{className:"font-mono text-xl font-bold uppercase tracking-widest text-ink dark:text-crt-green",children:"Zone_B: Curated_Vault"})]}),h.jsx("div",{className:"bg-gray-100 dark:bg-crt-dim/20 border-2 border-ink dark:border-crt-green p-4 mb-8 shadow-sm",children:h.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[h.jsxs("div",{className:"flex-1 relative",children:[h.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pointer-events-none text-pencil dark:text-crt-green/50",children:h.jsx(Qp,{size:18})}),h.jsx("input",{type:"text",placeholder:"Search titles, channels, or my notes...",value:e,onChange:i=>t(i.target.value),className:"w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-crt-green/30 text-ink dark:text-crt-green font-mono text-sm focus:outline-none focus:border-accent dark:focus:border-crt-amber transition-colors"})]}),h.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide",children:[h.jsx(Z2,{size:18,className:"text-pencil dark:text-crt-green/50 shrink-0"}),h.jsxs("div",{className:"flex gap-2",children:[r&&h.jsxs("button",{onClick:()=>n(null),className:"flex items-center gap-1 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800 text-xs font-mono uppercase font-bold rounded-sm whitespace-nowrap hover:bg-red-200 transition-colors",children:[h.jsx(hy,{size:12})," Clear"]}),a.map(i=>h.jsxs("button",{onClick:()=>n(r===i?null:i),className:`px-3 py-1 border text-xs font-mono uppercase rounded-sm whitespace-nowrap transition-colors
                                    ${r===i?"bg-ink text-white border-ink dark:bg-crt-green dark:text-black dark:border-crt-green":"bg-white dark:bg-black text-pencil dark:text-crt-green/70 border-gray-300 dark:border-crt-green/30 hover:border-ink dark:hover:border-crt-green"}`,children:["#",i]},i))]})]})]})}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:o.length>0?o.map(i=>h.jsx(m4,{video:i},i.id)):h.jsxs("div",{className:"col-span-full py-12 text-center border-2 border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("p",{className:"font-mono text-pencil dark:text-crt-green/50",children:['No records match query "',e,'" with filter [',r||"ALL","]."]}),h.jsx("button",{onClick:()=>{t(""),n(null)},className:"mt-4 text-accent dark:text-crt-amber font-mono text-sm hover:underline",children:"RESET_SEARCH_PARAMETERS"})]})})]})]})},y4=e=>{const t={};if(!e)return t;const r=e.replace(/\r\n/g,`
`);let n=0;for(;n<r.length;){const a=r.indexOf("@",n);if(a===-1)break;const o=r.indexOf("{",a);if(o===-1)break;const i=r.substring(a+1,o).trim().toLowerCase(),s=r.indexOf(",",o);if(s===-1){n=o+1;continue}const l=r.substring(o+1,s).trim();let u=s+1,p=!1;const f={};for(;!p&&u<r.length;){for(;u<r.length&&/\s/.test(r[u]);)u++;if(r[u]==="}"){p=!0,n=u+1;break}const y=r.indexOf("=",u);if(y===-1){p=!0;break}const x=r.indexOf("}",u);if(x!==-1&&x<y){p=!0,n=x+1;break}const T=r.substring(u,y).trim().toLowerCase();for(u=y+1;u<r.length&&/\s/.test(r[u]);)u++;let A="";const N=r[u];if(N==="{"){let b=0,v=u+1,w=!1;for(let P=u;P<r.length;P++)if(r[P]==="{"&&b++,r[P]==="}"&&b--,b===0){A=r.substring(v,P),u=P+1,w=!0;break}if(!w){p=!0;break}}else if(N==='"'){const b=r.indexOf('"',u+1);if(b!==-1)A=r.substring(u+1,b),u=b+1;else{p=!0;break}}else{let b=u;for(;b<r.length&&r[b]!==","&&r[b]!=="}";)b++;A=r.substring(u,b).trim(),u=b}for(A=A.replace(/[\r\n\t]+/g," ").replace(/\s+/g," ").trim(),f[T]=A;u<r.length&&/\s/.test(r[u]);)u++;r[u]===","&&u++}t[l]={citationKey:l,entryType:i,...f},n<=a&&(n=a+1)}return t},Zp=e=>e?e.split(" and ").map(r=>{let n=r.trim();if(n.startsWith("{")&&n.endsWith("}")&&(n=n.substring(1,n.length-1)),n.includes(","))return n.split(",")[0].trim();{const a=n.split(" ");return a[a.length-1]}}):["Unknown"],v4=e=>{if(!e)return"Unknown Author";const r=e.split(" and ").map(o=>{let i=o.trim();return i.startsWith("{")&&i.endsWith("}")&&(i=i.substring(1,i.length-1)),i});if(r.length<=5)return r.join(", ");const n=r.slice(0,3).join(", "),a=r[r.length-1];return`${n}, ... ${a}`},b4=e=>{const t=Zp(e.author),r=e.year||"n.d.";let n="";return t.length===1?n=t[0]:t.length===2?n=`${t[0]} & ${t[1]}`:n=`${t[0]} et al.`,`${n}, ${r}`},w4=e=>{const t=Zp(e.author),r=e.year||"0000";return`${t[0].toLowerCase()}_${r}`},em=(e,t)=>E.useMemo(()=>{let r=e.replace(/\$\$([\s\S]*?)\$\$/g,(u,p)=>`<span class="science-math-marker" data-tex="${p.trim().replace(/"/g,"&quot;")}" data-display="true"></span>`);if(r=r.replace(/\\\(([\s\S]*?)\\\)/g,(u,p)=>`<span class="science-math-marker" data-tex="${p.trim().replace(/"/g,"&quot;")}" data-display="false"></span>`),!t)return{processedHTML:r,references:[],citationMap:new Map};const n=y4(t),a=/@([a-zA-Z0-9_-]+)/g,o=Array.from(r.matchAll(a)),i=new Set;o.forEach(u=>{const p=u[1];n[p]&&i.add(p)});const s=Array.from(i).map(u=>{const p=n[u];return{entry:p,sortKey:w4(p),label:b4(p)}}).sort((u,p)=>u.sortKey.localeCompare(p.sortKey)).map(({entry:u,label:p})=>({entry:u,label:p})),l=new Map;return s.forEach(u=>l.set(u.entry.citationKey,u)),r=r.replace(a,(u,p)=>n[p]?`<span class="citation-mount-point" data-key="${p}"></span>`:u),{processedHTML:r,references:s,citationMap:l}},[e,t]),tm=(e,t)=>{const[r,n]=E.useState([]),[a,o]=E.useState(!1);return E.useLayoutEffect(()=>{if(!e.current)return;const i=e.current;Array.from(i.querySelectorAll("figure.science-figure")).forEach(A=>{const N=A.querySelector("img"),b=A.querySelector("figcaption");if(N){const v=document.createElement("div");v.className="science-figure-marker",v.setAttribute("data-src",N.getAttribute("src")||""),v.setAttribute("data-alt",N.getAttribute("alt")||""),v.setAttribute("data-id",A.getAttribute("data-id")||""),v.setAttribute("data-clean-src",A.getAttribute("data-clean-src")||""),b&&v.setAttribute("data-caption",b.innerHTML),A.replaceWith(v)}}),Array.from(i.querySelectorAll("table.science-table")).forEach(A=>{var M;const N=[],b=[];A.querySelectorAll("thead th").forEach(_=>N.push(_.textContent||"")),A.querySelectorAll("tbody tr").forEach(_=>{const B=[];_.querySelectorAll("td").forEach(z=>B.push(z.textContent||"")),b.push(B)});const v=(M=A.querySelector("caption"))==null?void 0:M.textContent,w=A.getAttribute("data-id")||`tbl-${Math.random().toString(36).substr(2,5)}`,P=document.createElement("div");P.className="science-table-marker",P.setAttribute("data-id",w),P.setAttribute("data-headers",JSON.stringify(N)),P.setAttribute("data-rows",JSON.stringify(b)),v&&P.setAttribute("data-caption",v),A.replaceWith(P)});const u=Array.from(i.querySelectorAll("h1, h2, h3")),p=[];u.forEach((A,N)=>{const b=A.textContent||`Section ${N+1}`,v=b.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),w=`sec-${N}-${v}`;A.id=w,A.classList.add("scroll-mt-24"),A.classList.add("cursor-pointer","hover:text-accent","dark:hover:text-crt-amber","transition-colors"),A.title="Click text to return to Table of Contents",A.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation();const M=document.getElementById("table-of-contents");M&&M.scrollIntoView({behavior:"smooth"})}),p.push({id:w,text:b,level:parseInt(A.tagName[1])})}),n(p);const f=Array.from(i.childNodes),y=document.createDocumentFragment();let x=null,T=null;f.forEach(A=>{if(A.nodeName.match(/^H[1-3]$/)){x&&y.appendChild(x),x=document.createElement("details"),x.open=!0,x.className="group/details mb-4";const b=document.createElement("summary");b.className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center";const v=A,w=document.createElement("span");w.className="mr-2 text-pencil dark:text-crt-green transition-transform duration-200 group-open/details:rotate-90 inline-flex items-center justify-center shrink-0",w.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',b.appendChild(w),b.appendChild(v),x.appendChild(b),T=document.createElement("div"),T.className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-crt-dim/30 ml-2",x.appendChild(T)}else T?T.appendChild(A):y.appendChild(A)}),x&&y.appendChild(x),f.length>0&&(i.innerHTML="",i.appendChild(y)),o(!0)},[t]),{toc:r,isDomReady:a}},x4=({label:e,entry:t,citationKey:r})=>{const n=a=>{a.preventDefault();const o=document.getElementById(`ref-${r}`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.classList.add("bg-yellow-100","dark:bg-crt-dim"),setTimeout(()=>o.classList.remove("bg-yellow-100","dark:bg-crt-dim"),2e3))};return t?h.jsxs("span",{className:"group relative inline-block align-baseline ml-1",children:[h.jsxs("button",{onClick:n,className:"text-base text-accent dark:text-crt-amber hover:underline select-none","aria-label":`Cite: ${e}`,children:["(",e,")"]}),h.jsxs("div",{className:"invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 z-50 pointer-events-none group-hover:pointer-events-auto",children:[h.jsxs("div",{className:"bg-white dark:bg-black border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt p-3 text-left font-serif text-ink dark:text-crt-green",children:[h.jsxs("div",{className:"border-b border-gray-200 dark:border-crt-dim pb-2 mb-2",children:[h.jsx("p",{className:"font-bold text-sm leading-tight mb-1",children:t.title}),h.jsx("p",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70 line-clamp-2",children:t.author})]}),h.jsxs("div",{className:"flex justify-between items-end",children:[h.jsxs("div",{className:"font-mono text-[10px] text-pencil dark:text-crt-green/70",children:[t.journal," ",t.year]}),(t.doi||t.url)&&h.jsxs("a",{href:t.doi?`https://doi.org/${t.doi}`:t.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 font-mono text-[10px] bg-ink text-paper dark:bg-crt-green dark:text-black px-2 py-1 hover:bg-accent transition-colors",onClick:a=>a.stopPropagation(),children:["SOURCE ",h.jsx(jc,{size:8})]})]})]}),h.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ink dark:border-t-crt-green"})]})]}):h.jsxs("span",{className:"text-red-500 font-bold select-none cursor-not-allowed",children:["[",r,"?]"]})},k4=({src:e,alt:t,caption:r,id:n,cleanSrc:a})=>{const[o,i]=E.useState(!1),[s,l]=E.useState(100),[u,p]=E.useState(100),[f,y]=E.useState(!0),x=!f&&a?a:e,T=()=>{i(!1),l(100),p(100),y(!0)},A=()=>{if(n){const N=`Figure ${n}`;navigator.clipboard.writeText(N),alert(`Copied to clipboard: ${N}`)}};return h.jsxs("div",{className:"print-scientific-figure my-8 border-2 border-ink dark:border-crt-green bg-white dark:bg-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)]",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2 p-2 bg-gray-100 dark:bg-crt-dim/20 border-b border-gray-200 dark:border-crt-dim",children:[h.jsxs("div",{className:"flex items-center gap-1 border-r border-gray-300 dark:border-crt-dim pr-2 mr-2",children:[h.jsx("button",{onClick:()=>i(!o),className:`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${o?"bg-ink text-white dark:bg-crt-green dark:text-black":"text-pencil dark:text-crt-green"}`,title:"Invert Colors",children:o?h.jsx(ui,{size:14}):h.jsx(Fc,{size:14})}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(ui,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:s,onChange:N=>l(Number(N.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Brightness"})]}),h.jsxs("div",{className:"flex items-center gap-1 mx-1",children:[h.jsx(Q2,{size:12,className:"text-pencil dark:text-crt-green/50"}),h.jsx("input",{type:"range",min:"50",max:"150",value:u,onChange:N=>p(Number(N.target.value)),className:"w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-crt-dim",title:"Contrast"})]}),h.jsx("button",{onClick:T,title:"Reset View",className:"p-1.5 text-pencil hover:text-ink dark:text-crt-green/50 dark:hover:text-crt-green",children:h.jsx(iy,{size:12})})]}),h.jsxs("div",{className:"flex items-center gap-2 flex-1 justify-end",children:[a&&h.jsxs("button",{onClick:()=>y(!f),className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Toggle Annotations",children:[f?h.jsx(Up,{size:12}):h.jsx(X2,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Layers"})]}),h.jsxs("a",{href:e,download:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Download Original",children:[h.jsx(Lc,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"RAW"})]}),n&&h.jsxs("button",{onClick:A,className:"flex items-center gap-1 px-2 py-1 text-xs font-mono border border-gray-300 dark:border-crt-dim rounded hover:bg-white dark:hover:bg-crt-dim text-ink dark:text-crt-green",title:"Copy Citation",children:[h.jsx(J2,{size:12}),h.jsx("span",{className:"hidden sm:inline",children:"Ref"})]})]})]}),h.jsx("div",{className:"relative overflow-hidden bg-gray-100 dark:bg-black/50 flex justify-center items-center min-h-[200px]",children:h.jsx("img",{src:x,alt:t||"Scientific Figure",className:"max-w-full h-auto object-contain transition-all duration-200",style:{filter:`invert(${o?1:0}) brightness(${s}%) contrast(${u}%)`}})}),r&&h.jsx("div",{className:"mt-0 p-3 bg-paper dark:bg-black border-t border-gray-200 dark:border-crt-dim",children:h.jsxs("figcaption",{className:"font-mono text-xs text-gray-700 dark:text-crt-green flex gap-2",children:[n&&h.jsxs("strong",{className:"uppercase shrink-0",children:[n,":"]}),h.jsx("span",{dangerouslySetInnerHTML:{__html:r}})]})})]})},S4=({id:e,initialData:t,initialHeaders:r})=>{const[n,a]=j2(),o=n.get(`${e}_sort`),i=n.get(`${e}_order`),s=n.get(`${e}_filter`)||"",[l,u]=E.useState(o?parseInt(o):null),[p,f]=E.useState(i!=="desc"),[y,x]=E.useState(s),[T,A]=E.useState(new Set),[N,b]=E.useState(!1);E.useEffect(()=>{const _=new URLSearchParams(n);l!==null?(_.set(`${e}_sort`,l.toString()),_.set(`${e}_order`,p?"asc":"desc")):(_.delete(`${e}_sort`),_.delete(`${e}_order`)),y?_.set(`${e}_filter`,y):_.delete(`${e}_filter`),a(_,{replace:!0})},[l,p,y,e,a,n]);const v=_=>{const B=t.map(ce=>parseFloat(ce[_])).filter(ce=>!isNaN(ce));if(B.length===0)return null;B.sort((ce,me)=>ce-me);const W=B.reduce((ce,me)=>ce+me,0)/B.length,U=B[0],J=B[B.length-1],X=B[Math.floor(B.length/2)];return{mean:W,min:U,max:J,median:X}},w=E.useMemo(()=>{let _=[...t];if(y){const B=y.toLowerCase();_=_.filter(z=>z.some(W=>W.toLowerCase().includes(B)))}return l!==null&&_.sort((B,z)=>{const W=B[l],U=z[l],J=parseFloat(W),X=parseFloat(U);return!isNaN(J)&&!isNaN(X)?p?J-X:X-J:p?W.localeCompare(U):U.localeCompare(W)}),_},[t,l,p,y]);return{sortCol:l,setSortCol:u,sortAsc:p,setSortAsc:f,filterText:y,setFilterText:x,hiddenCols:T,setHiddenCols:A,heatmapMode:N,setHeatmapMode:b,processedData:w,getStats:v,getCellColor:(_,B)=>{if(!N)return;const z=parseFloat(_);if(isNaN(z))return;const W=v(B);if(!W)return;const U=W.max-W.min;if(U===0)return;const J=(z-W.min)/U,X=Math.floor(255*(1-J));return`rgba(255, ${X}, ${X}, 0.5)`},downloadCSV:()=>{const B=[r.filter((J,X)=>!T.has(X)).join(","),...w.map(J=>J.filter((X,ce)=>!T.has(ce)).map(X=>`"${X.replace(/"/g,'""')}"`).join(","))].join(`
`),z=new Blob([B],{type:"text/csv;charset=utf-8;"}),W=URL.createObjectURL(z),U=document.createElement("a");U.href=W,U.setAttribute("download",`${e}_data.csv`),document.body.appendChild(U),U.click(),document.body.removeChild(U)}}},A4=({id:e,initialHeaders:t,initialData:r,caption:n})=>{const{sortCol:a,setSortCol:o,sortAsc:i,setSortAsc:s,filterText:l,setFilterText:u,hiddenCols:p,setHiddenCols:f,heatmapMode:y,setHeatmapMode:x,processedData:T,getStats:A,getCellColor:N,downloadCSV:b}=S4({id:e,initialData:r,initialHeaders:t});return h.jsxs("div",{className:"print-scientific-table my-8 border-2 border-ink dark:border-crt-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_5px_rgba(0,255,0,0.5)] bg-white dark:bg-black overflow-hidden flex flex-col",children:[h.jsxs("div",{className:"p-2 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-crt-dim/20 flex flex-wrap items-center justify-between gap-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h4",{className:"font-mono text-xs font-bold uppercase px-2",children:e}),h.jsx("div",{className:"h-4 w-px bg-gray-400 dark:bg-crt-green/50 mx-1"}),h.jsx("input",{type:"text",placeholder:"Filter data...",value:l,onChange:v=>u(v.target.value),className:"text-xs font-mono p-1 border border-gray-300 dark:border-crt-green/30 bg-white dark:bg-black text-ink dark:text-crt-green rounded focus:outline-none focus:border-accent dark:focus:border-crt-green"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>x(!y),className:`p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 ${y?"text-red-600 dark:text-red-400 font-bold":"text-pencil dark:text-crt-green"}`,title:"Toggle Heatmap",children:h.jsx(dy,{size:16})}),h.jsxs("div",{className:"relative group",children:[h.jsx("button",{className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Columns",children:h.jsx(Up,{size:16})}),h.jsxs("div",{className:"absolute right-0 top-full mt-1 w-40 bg-white dark:bg-black border border-ink dark:border-crt-green shadow-lg z-50 hidden group-hover:block p-2",children:[h.jsx("div",{className:"font-mono text-[10px] uppercase border-b mb-1 pb-1 dark:text-crt-green",children:"Visible Cols"}),t.map((v,w)=>h.jsxs("label",{className:"flex items-center gap-2 text-xs p-1 hover:bg-gray-100 dark:hover:bg-crt-dim cursor-pointer dark:text-crt-green",children:[h.jsx("input",{type:"checkbox",checked:!p.has(w),onChange:()=>{const P=new Set(p);P.has(w)?P.delete(w):P.add(w),f(P)}}),v]},w))]})]}),h.jsx("button",{onClick:b,className:"p-1 rounded hover:bg-gray-200 dark:hover:bg-crt-green/20 text-pencil dark:text-crt-green",title:"Export CSV",children:h.jsx(Lc,{size:16})})]})]}),h.jsx("div",{className:"overflow-auto max-h-[500px]",children:h.jsxs("table",{className:"w-full text-left border-collapse text-sm font-mono text-ink dark:text-crt-green",children:[h.jsx("thead",{className:"bg-gray-100 dark:bg-crt-dim/50 sticky top-0 z-10 shadow-sm",children:h.jsx("tr",{children:t.map((v,w)=>{if(p.has(w))return null;const P=A(w);return h.jsxs("th",{className:`
                                    p-2 border-b-2 border-gray-300 dark:border-crt-green/50 whitespace-nowrap cursor-pointer hover:bg-gray-200 dark:hover:bg-crt-dim/80 select-none relative group
                                    ${w===0?"sticky left-0 bg-gray-100 dark:bg-crt-dim/90 z-20 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                `,onClick:()=>{a===w?s(!i):(o(w),s(!0))},children:[h.jsxs("div",{className:"flex items-center gap-1 justify-between",children:[h.jsx("span",{children:v}),a===w&&(i?h.jsx(G2,{size:12}):h.jsx(U2,{size:12}))]}),P&&h.jsxs("div",{className:"absolute left-0 top-full mt-1 w-48 bg-black text-white p-2 text-[10px] rounded shadow-xl hidden group-hover:block z-50 pointer-events-none",children:[h.jsxs("div",{className:"font-bold border-b border-gray-700 pb-1 mb-1 flex items-center gap-1",children:[h.jsx(H2,{size:10})," Column Stats"]}),h.jsxs("div",{className:"grid grid-cols-2 gap-x-2",children:[h.jsx("span",{children:"Mean:"})," ",h.jsx("span",{className:"text-right",children:P.mean.toFixed(2)}),h.jsx("span",{children:"Median:"})," ",h.jsx("span",{className:"text-right",children:P.median.toFixed(2)}),h.jsx("span",{children:"Min:"})," ",h.jsx("span",{className:"text-right",children:P.min}),h.jsx("span",{children:"Max:"})," ",h.jsx("span",{className:"text-right",children:P.max})]})]})]},w)})})}),h.jsx("tbody",{children:T.map((v,w)=>h.jsx("tr",{className:"border-b border-gray-200 dark:border-crt-dim/30 hover:bg-yellow-50 dark:hover:bg-crt-dim/20 transition-colors",children:v.map((P,M)=>p.has(M)?null:h.jsx("td",{className:`
                                        p-2 border-r border-gray-100 dark:border-crt-dim/20 
                                        ${M===0?"sticky left-0 bg-white dark:bg-black font-bold z-10 border-r-2 border-gray-300 dark:border-r-crt-green/50":""}
                                    `,style:{backgroundColor:M!==0?N(P,M):void 0},children:P},M))},w))})]})}),n&&h.jsx("div",{className:"p-2 text-[10px] font-mono border-t border-gray-200 dark:border-crt-dim bg-gray-50 dark:bg-black text-center text-gray-500 dark:text-crt-green/60",children:n})]})};class Ke{constructor(t,r,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=n}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Ke(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class st{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new st(r,Ke.range(this,t))}}class q{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var n="KaTeX parse error: "+t,a,o,i=r&&r.loc;if(i&&i.start<=i.end){var s=i.lexer.input;a=i.start,o=i.end,a===s.length?n+=" at end of input: ":n+=" at position "+(a+1)+": ";var l=s.slice(a,o).replace(/[^]/g,"$&̲"),u;a>15?u="…"+s.slice(a-15,a):u=s.slice(0,a);var p;o+15<s.length?p=s.slice(o,o+15)+"…":p=s.slice(o),n+=u+l+p}var f=new Error(n);return f.name="ParseError",f.__proto__=q.prototype,f.position=a,a!=null&&o!=null&&(f.length=o-a),f.rawMessage=t,f}}q.prototype.__proto__=Error.prototype;var T4=function(t,r){return t===void 0?r:t},C4=/([A-Z])/g,P4=function(t){return t.replace(C4,"-$1").toLowerCase()},N4={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},D4=/[&><"']/g;function M4(e){return String(e).replace(D4,t=>N4[t])}var rm=function e(t){return t.type==="ordgroup"||t.type==="color"?t.body.length===1?e(t.body[0]):t:t.type==="font"?e(t.body):t},E4=function(t){var r=rm(t);return r.type==="mathord"||r.type==="textord"||r.type==="atom"},_4=function(t){if(!t)throw new Error("Expected non-null, but got "+String(t));return t},B4=function(t){var r=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);return r?r[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r[1])?null:r[1].toLowerCase():"_relative"},ae={deflt:T4,escape:M4,hyphenate:P4,getBaseElem:rm,isCharacterBox:E4,protocolFromUrl:B4},qo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,t)=>(t.push(e),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function I4(e){if(e.default)return e.default;var t=e.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Oc{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in qo)if(qo.hasOwnProperty(r)){var n=qo[r];this[r]=t[r]!==void 0?n.processor?n.processor(t[r]):t[r]:I4(n)}}reportNonstrict(t,r,n){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,n)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new q("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),n);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,n){var a=this.strict;if(typeof a=="function")try{a=a(t,r,n)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=ae.protocolFromUrl(t.url);if(r==null)return!1;t.protocol=r}var n=typeof this.trust=="function"?this.trust(t):this.trust;return!!n}}class pr{constructor(t,r,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=n}sup(){return Lt[z4[this.id]]}sub(){return Lt[R4[this.id]]}fracNum(){return Lt[q4[this.id]]}fracDen(){return Lt[L4[this.id]]}cramp(){return Lt[j4[this.id]]}text(){return Lt[F4[this.id]]}isTight(){return this.size>=2}}var Wc=0,hi=1,_n=2,er=3,qa=4,gt=5,On=6,He=7,Lt=[new pr(Wc,0,!1),new pr(hi,0,!0),new pr(_n,1,!1),new pr(er,1,!0),new pr(qa,2,!1),new pr(gt,2,!0),new pr(On,3,!1),new pr(He,3,!0)],z4=[qa,gt,qa,gt,On,He,On,He],R4=[gt,gt,gt,gt,He,He,He,He],q4=[_n,er,qa,gt,On,He,On,He],L4=[er,er,gt,gt,He,He,He,He],j4=[hi,hi,er,er,gt,gt,He,He],F4=[Wc,hi,_n,er,_n,er,_n,er],$={DISPLAY:Lt[Wc],TEXT:Lt[_n],SCRIPT:Lt[qa],SCRIPTSCRIPT:Lt[On]},_l=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function O4(e){for(var t=0;t<_l.length;t++)for(var r=_l[t],n=0;n<r.blocks.length;n++){var a=r.blocks[n];if(e>=a[0]&&e<=a[1])return r.name}return null}var Lo=[];_l.forEach(e=>e.blocks.forEach(t=>Lo.push(...t)));function nm(e){for(var t=0;t<Lo.length;t+=2)if(e>=Lo[t]&&e<=Lo[t+1])return!0;return!1}var dn=80,W4=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},H4=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},U4=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},G4=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},V4=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},$4=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},Y4=function(t,r,n){var a=n-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},K4=function(t,r,n){r=1e3*r;var a="";switch(t){case"sqrtMain":a=W4(r,dn);break;case"sqrtSize1":a=H4(r,dn);break;case"sqrtSize2":a=U4(r,dn);break;case"sqrtSize3":a=G4(r,dn);break;case"sqrtSize4":a=V4(r,dn);break;case"sqrtTall":a=Y4(r,dn,n)}return a},Q4=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},Bd={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},J4=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Ga{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Ft={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},go={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Id={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function X4(e,t){Ft[e]=t}function Hc(e,t,r){if(!Ft[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0),a=Ft[t][n];if(!a&&e[0]in Id&&(n=Id[e[0]].charCodeAt(0),a=Ft[t][n]),!a&&r==="text"&&nm(n)&&(a=Ft[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var vs={};function Z4(e){var t;if(e>=5?t=0:e>=3?t=1:t=2,!vs[t]){var r=vs[t]={cssEmPerMu:go.quad[t]/18};for(var n in go)go.hasOwnProperty(n)&&(r[n]=go[n][t])}return vs[t]}var e3=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],zd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Rd=function(t,r){return r.size<2?t:e3[t-1][r.size-1]};class Qt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Qt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=zd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return new Qt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:Rd(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:zd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=Rd(Qt.BASESIZE,t);return this.size===r&&this.textSize===Qt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Qt.BASESIZE?["sizing","reset-size"+this.size,"size"+Qt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Z4(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Qt.BASESIZE=6;var Bl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},t3={ex:!0,em:!0,mu:!0},am=function(t){return typeof t!="string"&&(t=t.unit),t in Bl||t in t3||t==="ex"},be=function(t,r){var n;if(t.unit in Bl)n=Bl[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")n=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")n=a.fontMetrics().xHeight;else if(t.unit==="em")n=a.fontMetrics().quad;else throw new q("Invalid unit: '"+t.unit+"'");a!==r&&(n*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*n,r.maxSize)},j=function(t){return+t.toFixed(4)+"em"},Ir=function(t){return t.filter(r=>r).join(" ")},om=function(t,r,n){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},im=function(t){var r=document.createElement(t);r.className=Ir(this.classes);for(var n in this.style)this.style.hasOwnProperty(n)&&(r.style[n]=this.style[n]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var o=0;o<this.children.length;o++)r.appendChild(this.children[o].toNode());return r},r3=/[\s"'>/=\x00-\x1f]/,sm=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+ae.escape(Ir(this.classes))+'"');var n="";for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(r+=' style="'+ae.escape(n)+'"');for(var o in this.attributes)if(this.attributes.hasOwnProperty(o)){if(r3.test(o))throw new q("Invalid attribute name '"+o+"'");r+=" "+o+'="'+ae.escape(this.attributes[o])+'"'}r+=">";for(var i=0;i<this.children.length;i++)r+=this.children[i].toMarkup();return r+="</"+t+">",r};class Va{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,om.call(this,t,n,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return im.call(this,"span")}toMarkup(){return sm.call(this,"span")}}class Uc{constructor(t,r,n,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,om.call(this,r,a),this.children=n||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return im.call(this,"a")}toMarkup(){return sm.call(this,"a")}}class n3{constructor(t,r,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=n}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+ae.escape(this.src)+'"'+(' alt="'+ae.escape(this.alt)+'"'),r="";for(var n in this.style)this.style.hasOwnProperty(n)&&(r+=ae.hyphenate(n)+":"+this.style[n]+";");return r&&(t+=' style="'+ae.escape(r)+'"'),t+="'/>",t}}var a3={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class wt{constructor(t,r,n,a,o,i,s,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=n||0,this.italic=a||0,this.skew=o||0,this.width=i||0,this.classes=s||[],this.style=l||{},this.maxFontSize=0;var u=O4(this.text.charCodeAt(0));u&&this.classes.push(u+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=a3[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=j(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Ir(this.classes));for(var n in this.style)this.style.hasOwnProperty(n)&&(r=r||document.createElement("span"),r.style[n]=this.style[n]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=ae.escape(Ir(this.classes)),r+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(n+=ae.hyphenate(a)+":"+this.style[a]+";");n&&(t=!0,r+=' style="'+ae.escape(n)+'"');var o=ae.escape(this.text);return t?(r+=">",r+=o,r+="</span>",r):o}}class ir{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</svg>",t}}class zr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Bd[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+ae.escape(this.alternate)+'"/>':'<path d="'+ae.escape(Bd[this.pathName])+'"/>'}}class Il{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&r.setAttribute(n,this.attributes[n]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+ae.escape(this.attributes[r])+'"');return t+="/>",t}}function qd(e){if(e instanceof wt)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function o3(e){if(e instanceof Va)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var i3={bin:1,close:1,inner:1,open:1,punct:1,rel:1},s3={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},ue={math:{},text:{}};function c(e,t,r,n,a,o){ue[e][a]={font:t,group:r,replace:n},o&&n&&(ue[e][n]=ue[e][a])}var d="math",I="text",m="main",k="ams",ge="accent-token",H="bin",$e="close",Vn="inner",V="mathord",Ne="op-token",ut="open",Ri="punct",S="rel",ur="spacing",C="textord";c(d,m,S,"≡","\\equiv",!0);c(d,m,S,"≺","\\prec",!0);c(d,m,S,"≻","\\succ",!0);c(d,m,S,"∼","\\sim",!0);c(d,m,S,"⊥","\\perp");c(d,m,S,"⪯","\\preceq",!0);c(d,m,S,"⪰","\\succeq",!0);c(d,m,S,"≃","\\simeq",!0);c(d,m,S,"∣","\\mid",!0);c(d,m,S,"≪","\\ll",!0);c(d,m,S,"≫","\\gg",!0);c(d,m,S,"≍","\\asymp",!0);c(d,m,S,"∥","\\parallel");c(d,m,S,"⋈","\\bowtie",!0);c(d,m,S,"⌣","\\smile",!0);c(d,m,S,"⊑","\\sqsubseteq",!0);c(d,m,S,"⊒","\\sqsupseteq",!0);c(d,m,S,"≐","\\doteq",!0);c(d,m,S,"⌢","\\frown",!0);c(d,m,S,"∋","\\ni",!0);c(d,m,S,"∝","\\propto",!0);c(d,m,S,"⊢","\\vdash",!0);c(d,m,S,"⊣","\\dashv",!0);c(d,m,S,"∋","\\owns");c(d,m,Ri,".","\\ldotp");c(d,m,Ri,"⋅","\\cdotp");c(d,m,C,"#","\\#");c(I,m,C,"#","\\#");c(d,m,C,"&","\\&");c(I,m,C,"&","\\&");c(d,m,C,"ℵ","\\aleph",!0);c(d,m,C,"∀","\\forall",!0);c(d,m,C,"ℏ","\\hbar",!0);c(d,m,C,"∃","\\exists",!0);c(d,m,C,"∇","\\nabla",!0);c(d,m,C,"♭","\\flat",!0);c(d,m,C,"ℓ","\\ell",!0);c(d,m,C,"♮","\\natural",!0);c(d,m,C,"♣","\\clubsuit",!0);c(d,m,C,"℘","\\wp",!0);c(d,m,C,"♯","\\sharp",!0);c(d,m,C,"♢","\\diamondsuit",!0);c(d,m,C,"ℜ","\\Re",!0);c(d,m,C,"♡","\\heartsuit",!0);c(d,m,C,"ℑ","\\Im",!0);c(d,m,C,"♠","\\spadesuit",!0);c(d,m,C,"§","\\S",!0);c(I,m,C,"§","\\S");c(d,m,C,"¶","\\P",!0);c(I,m,C,"¶","\\P");c(d,m,C,"†","\\dag");c(I,m,C,"†","\\dag");c(I,m,C,"†","\\textdagger");c(d,m,C,"‡","\\ddag");c(I,m,C,"‡","\\ddag");c(I,m,C,"‡","\\textdaggerdbl");c(d,m,$e,"⎱","\\rmoustache",!0);c(d,m,ut,"⎰","\\lmoustache",!0);c(d,m,$e,"⟯","\\rgroup",!0);c(d,m,ut,"⟮","\\lgroup",!0);c(d,m,H,"∓","\\mp",!0);c(d,m,H,"⊖","\\ominus",!0);c(d,m,H,"⊎","\\uplus",!0);c(d,m,H,"⊓","\\sqcap",!0);c(d,m,H,"∗","\\ast");c(d,m,H,"⊔","\\sqcup",!0);c(d,m,H,"◯","\\bigcirc",!0);c(d,m,H,"∙","\\bullet",!0);c(d,m,H,"‡","\\ddagger");c(d,m,H,"≀","\\wr",!0);c(d,m,H,"⨿","\\amalg");c(d,m,H,"&","\\And");c(d,m,S,"⟵","\\longleftarrow",!0);c(d,m,S,"⇐","\\Leftarrow",!0);c(d,m,S,"⟸","\\Longleftarrow",!0);c(d,m,S,"⟶","\\longrightarrow",!0);c(d,m,S,"⇒","\\Rightarrow",!0);c(d,m,S,"⟹","\\Longrightarrow",!0);c(d,m,S,"↔","\\leftrightarrow",!0);c(d,m,S,"⟷","\\longleftrightarrow",!0);c(d,m,S,"⇔","\\Leftrightarrow",!0);c(d,m,S,"⟺","\\Longleftrightarrow",!0);c(d,m,S,"↦","\\mapsto",!0);c(d,m,S,"⟼","\\longmapsto",!0);c(d,m,S,"↗","\\nearrow",!0);c(d,m,S,"↩","\\hookleftarrow",!0);c(d,m,S,"↪","\\hookrightarrow",!0);c(d,m,S,"↘","\\searrow",!0);c(d,m,S,"↼","\\leftharpoonup",!0);c(d,m,S,"⇀","\\rightharpoonup",!0);c(d,m,S,"↙","\\swarrow",!0);c(d,m,S,"↽","\\leftharpoondown",!0);c(d,m,S,"⇁","\\rightharpoondown",!0);c(d,m,S,"↖","\\nwarrow",!0);c(d,m,S,"⇌","\\rightleftharpoons",!0);c(d,k,S,"≮","\\nless",!0);c(d,k,S,"","\\@nleqslant");c(d,k,S,"","\\@nleqq");c(d,k,S,"⪇","\\lneq",!0);c(d,k,S,"≨","\\lneqq",!0);c(d,k,S,"","\\@lvertneqq");c(d,k,S,"⋦","\\lnsim",!0);c(d,k,S,"⪉","\\lnapprox",!0);c(d,k,S,"⊀","\\nprec",!0);c(d,k,S,"⋠","\\npreceq",!0);c(d,k,S,"⋨","\\precnsim",!0);c(d,k,S,"⪹","\\precnapprox",!0);c(d,k,S,"≁","\\nsim",!0);c(d,k,S,"","\\@nshortmid");c(d,k,S,"∤","\\nmid",!0);c(d,k,S,"⊬","\\nvdash",!0);c(d,k,S,"⊭","\\nvDash",!0);c(d,k,S,"⋪","\\ntriangleleft");c(d,k,S,"⋬","\\ntrianglelefteq",!0);c(d,k,S,"⊊","\\subsetneq",!0);c(d,k,S,"","\\@varsubsetneq");c(d,k,S,"⫋","\\subsetneqq",!0);c(d,k,S,"","\\@varsubsetneqq");c(d,k,S,"≯","\\ngtr",!0);c(d,k,S,"","\\@ngeqslant");c(d,k,S,"","\\@ngeqq");c(d,k,S,"⪈","\\gneq",!0);c(d,k,S,"≩","\\gneqq",!0);c(d,k,S,"","\\@gvertneqq");c(d,k,S,"⋧","\\gnsim",!0);c(d,k,S,"⪊","\\gnapprox",!0);c(d,k,S,"⊁","\\nsucc",!0);c(d,k,S,"⋡","\\nsucceq",!0);c(d,k,S,"⋩","\\succnsim",!0);c(d,k,S,"⪺","\\succnapprox",!0);c(d,k,S,"≆","\\ncong",!0);c(d,k,S,"","\\@nshortparallel");c(d,k,S,"∦","\\nparallel",!0);c(d,k,S,"⊯","\\nVDash",!0);c(d,k,S,"⋫","\\ntriangleright");c(d,k,S,"⋭","\\ntrianglerighteq",!0);c(d,k,S,"","\\@nsupseteqq");c(d,k,S,"⊋","\\supsetneq",!0);c(d,k,S,"","\\@varsupsetneq");c(d,k,S,"⫌","\\supsetneqq",!0);c(d,k,S,"","\\@varsupsetneqq");c(d,k,S,"⊮","\\nVdash",!0);c(d,k,S,"⪵","\\precneqq",!0);c(d,k,S,"⪶","\\succneqq",!0);c(d,k,S,"","\\@nsubseteqq");c(d,k,H,"⊴","\\unlhd");c(d,k,H,"⊵","\\unrhd");c(d,k,S,"↚","\\nleftarrow",!0);c(d,k,S,"↛","\\nrightarrow",!0);c(d,k,S,"⇍","\\nLeftarrow",!0);c(d,k,S,"⇏","\\nRightarrow",!0);c(d,k,S,"↮","\\nleftrightarrow",!0);c(d,k,S,"⇎","\\nLeftrightarrow",!0);c(d,k,S,"△","\\vartriangle");c(d,k,C,"ℏ","\\hslash");c(d,k,C,"▽","\\triangledown");c(d,k,C,"◊","\\lozenge");c(d,k,C,"Ⓢ","\\circledS");c(d,k,C,"®","\\circledR");c(I,k,C,"®","\\circledR");c(d,k,C,"∡","\\measuredangle",!0);c(d,k,C,"∄","\\nexists");c(d,k,C,"℧","\\mho");c(d,k,C,"Ⅎ","\\Finv",!0);c(d,k,C,"⅁","\\Game",!0);c(d,k,C,"‵","\\backprime");c(d,k,C,"▲","\\blacktriangle");c(d,k,C,"▼","\\blacktriangledown");c(d,k,C,"■","\\blacksquare");c(d,k,C,"⧫","\\blacklozenge");c(d,k,C,"★","\\bigstar");c(d,k,C,"∢","\\sphericalangle",!0);c(d,k,C,"∁","\\complement",!0);c(d,k,C,"ð","\\eth",!0);c(I,m,C,"ð","ð");c(d,k,C,"╱","\\diagup");c(d,k,C,"╲","\\diagdown");c(d,k,C,"□","\\square");c(d,k,C,"□","\\Box");c(d,k,C,"◊","\\Diamond");c(d,k,C,"¥","\\yen",!0);c(I,k,C,"¥","\\yen",!0);c(d,k,C,"✓","\\checkmark",!0);c(I,k,C,"✓","\\checkmark");c(d,k,C,"ℶ","\\beth",!0);c(d,k,C,"ℸ","\\daleth",!0);c(d,k,C,"ℷ","\\gimel",!0);c(d,k,C,"ϝ","\\digamma",!0);c(d,k,C,"ϰ","\\varkappa");c(d,k,ut,"┌","\\@ulcorner",!0);c(d,k,$e,"┐","\\@urcorner",!0);c(d,k,ut,"└","\\@llcorner",!0);c(d,k,$e,"┘","\\@lrcorner",!0);c(d,k,S,"≦","\\leqq",!0);c(d,k,S,"⩽","\\leqslant",!0);c(d,k,S,"⪕","\\eqslantless",!0);c(d,k,S,"≲","\\lesssim",!0);c(d,k,S,"⪅","\\lessapprox",!0);c(d,k,S,"≊","\\approxeq",!0);c(d,k,H,"⋖","\\lessdot");c(d,k,S,"⋘","\\lll",!0);c(d,k,S,"≶","\\lessgtr",!0);c(d,k,S,"⋚","\\lesseqgtr",!0);c(d,k,S,"⪋","\\lesseqqgtr",!0);c(d,k,S,"≑","\\doteqdot");c(d,k,S,"≓","\\risingdotseq",!0);c(d,k,S,"≒","\\fallingdotseq",!0);c(d,k,S,"∽","\\backsim",!0);c(d,k,S,"⋍","\\backsimeq",!0);c(d,k,S,"⫅","\\subseteqq",!0);c(d,k,S,"⋐","\\Subset",!0);c(d,k,S,"⊏","\\sqsubset",!0);c(d,k,S,"≼","\\preccurlyeq",!0);c(d,k,S,"⋞","\\curlyeqprec",!0);c(d,k,S,"≾","\\precsim",!0);c(d,k,S,"⪷","\\precapprox",!0);c(d,k,S,"⊲","\\vartriangleleft");c(d,k,S,"⊴","\\trianglelefteq");c(d,k,S,"⊨","\\vDash",!0);c(d,k,S,"⊪","\\Vvdash",!0);c(d,k,S,"⌣","\\smallsmile");c(d,k,S,"⌢","\\smallfrown");c(d,k,S,"≏","\\bumpeq",!0);c(d,k,S,"≎","\\Bumpeq",!0);c(d,k,S,"≧","\\geqq",!0);c(d,k,S,"⩾","\\geqslant",!0);c(d,k,S,"⪖","\\eqslantgtr",!0);c(d,k,S,"≳","\\gtrsim",!0);c(d,k,S,"⪆","\\gtrapprox",!0);c(d,k,H,"⋗","\\gtrdot");c(d,k,S,"⋙","\\ggg",!0);c(d,k,S,"≷","\\gtrless",!0);c(d,k,S,"⋛","\\gtreqless",!0);c(d,k,S,"⪌","\\gtreqqless",!0);c(d,k,S,"≖","\\eqcirc",!0);c(d,k,S,"≗","\\circeq",!0);c(d,k,S,"≜","\\triangleq",!0);c(d,k,S,"∼","\\thicksim");c(d,k,S,"≈","\\thickapprox");c(d,k,S,"⫆","\\supseteqq",!0);c(d,k,S,"⋑","\\Supset",!0);c(d,k,S,"⊐","\\sqsupset",!0);c(d,k,S,"≽","\\succcurlyeq",!0);c(d,k,S,"⋟","\\curlyeqsucc",!0);c(d,k,S,"≿","\\succsim",!0);c(d,k,S,"⪸","\\succapprox",!0);c(d,k,S,"⊳","\\vartriangleright");c(d,k,S,"⊵","\\trianglerighteq");c(d,k,S,"⊩","\\Vdash",!0);c(d,k,S,"∣","\\shortmid");c(d,k,S,"∥","\\shortparallel");c(d,k,S,"≬","\\between",!0);c(d,k,S,"⋔","\\pitchfork",!0);c(d,k,S,"∝","\\varpropto");c(d,k,S,"◀","\\blacktriangleleft");c(d,k,S,"∴","\\therefore",!0);c(d,k,S,"∍","\\backepsilon");c(d,k,S,"▶","\\blacktriangleright");c(d,k,S,"∵","\\because",!0);c(d,k,S,"⋘","\\llless");c(d,k,S,"⋙","\\gggtr");c(d,k,H,"⊲","\\lhd");c(d,k,H,"⊳","\\rhd");c(d,k,S,"≂","\\eqsim",!0);c(d,m,S,"⋈","\\Join");c(d,k,S,"≑","\\Doteq",!0);c(d,k,H,"∔","\\dotplus",!0);c(d,k,H,"∖","\\smallsetminus");c(d,k,H,"⋒","\\Cap",!0);c(d,k,H,"⋓","\\Cup",!0);c(d,k,H,"⩞","\\doublebarwedge",!0);c(d,k,H,"⊟","\\boxminus",!0);c(d,k,H,"⊞","\\boxplus",!0);c(d,k,H,"⋇","\\divideontimes",!0);c(d,k,H,"⋉","\\ltimes",!0);c(d,k,H,"⋊","\\rtimes",!0);c(d,k,H,"⋋","\\leftthreetimes",!0);c(d,k,H,"⋌","\\rightthreetimes",!0);c(d,k,H,"⋏","\\curlywedge",!0);c(d,k,H,"⋎","\\curlyvee",!0);c(d,k,H,"⊝","\\circleddash",!0);c(d,k,H,"⊛","\\circledast",!0);c(d,k,H,"⋅","\\centerdot");c(d,k,H,"⊺","\\intercal",!0);c(d,k,H,"⋒","\\doublecap");c(d,k,H,"⋓","\\doublecup");c(d,k,H,"⊠","\\boxtimes",!0);c(d,k,S,"⇢","\\dashrightarrow",!0);c(d,k,S,"⇠","\\dashleftarrow",!0);c(d,k,S,"⇇","\\leftleftarrows",!0);c(d,k,S,"⇆","\\leftrightarrows",!0);c(d,k,S,"⇚","\\Lleftarrow",!0);c(d,k,S,"↞","\\twoheadleftarrow",!0);c(d,k,S,"↢","\\leftarrowtail",!0);c(d,k,S,"↫","\\looparrowleft",!0);c(d,k,S,"⇋","\\leftrightharpoons",!0);c(d,k,S,"↶","\\curvearrowleft",!0);c(d,k,S,"↺","\\circlearrowleft",!0);c(d,k,S,"↰","\\Lsh",!0);c(d,k,S,"⇈","\\upuparrows",!0);c(d,k,S,"↿","\\upharpoonleft",!0);c(d,k,S,"⇃","\\downharpoonleft",!0);c(d,m,S,"⊶","\\origof",!0);c(d,m,S,"⊷","\\imageof",!0);c(d,k,S,"⊸","\\multimap",!0);c(d,k,S,"↭","\\leftrightsquigarrow",!0);c(d,k,S,"⇉","\\rightrightarrows",!0);c(d,k,S,"⇄","\\rightleftarrows",!0);c(d,k,S,"↠","\\twoheadrightarrow",!0);c(d,k,S,"↣","\\rightarrowtail",!0);c(d,k,S,"↬","\\looparrowright",!0);c(d,k,S,"↷","\\curvearrowright",!0);c(d,k,S,"↻","\\circlearrowright",!0);c(d,k,S,"↱","\\Rsh",!0);c(d,k,S,"⇊","\\downdownarrows",!0);c(d,k,S,"↾","\\upharpoonright",!0);c(d,k,S,"⇂","\\downharpoonright",!0);c(d,k,S,"⇝","\\rightsquigarrow",!0);c(d,k,S,"⇝","\\leadsto");c(d,k,S,"⇛","\\Rrightarrow",!0);c(d,k,S,"↾","\\restriction");c(d,m,C,"‘","`");c(d,m,C,"$","\\$");c(I,m,C,"$","\\$");c(I,m,C,"$","\\textdollar");c(d,m,C,"%","\\%");c(I,m,C,"%","\\%");c(d,m,C,"_","\\_");c(I,m,C,"_","\\_");c(I,m,C,"_","\\textunderscore");c(d,m,C,"∠","\\angle",!0);c(d,m,C,"∞","\\infty",!0);c(d,m,C,"′","\\prime");c(d,m,C,"△","\\triangle");c(d,m,C,"Γ","\\Gamma",!0);c(d,m,C,"Δ","\\Delta",!0);c(d,m,C,"Θ","\\Theta",!0);c(d,m,C,"Λ","\\Lambda",!0);c(d,m,C,"Ξ","\\Xi",!0);c(d,m,C,"Π","\\Pi",!0);c(d,m,C,"Σ","\\Sigma",!0);c(d,m,C,"Υ","\\Upsilon",!0);c(d,m,C,"Φ","\\Phi",!0);c(d,m,C,"Ψ","\\Psi",!0);c(d,m,C,"Ω","\\Omega",!0);c(d,m,C,"A","Α");c(d,m,C,"B","Β");c(d,m,C,"E","Ε");c(d,m,C,"Z","Ζ");c(d,m,C,"H","Η");c(d,m,C,"I","Ι");c(d,m,C,"K","Κ");c(d,m,C,"M","Μ");c(d,m,C,"N","Ν");c(d,m,C,"O","Ο");c(d,m,C,"P","Ρ");c(d,m,C,"T","Τ");c(d,m,C,"X","Χ");c(d,m,C,"¬","\\neg",!0);c(d,m,C,"¬","\\lnot");c(d,m,C,"⊤","\\top");c(d,m,C,"⊥","\\bot");c(d,m,C,"∅","\\emptyset");c(d,k,C,"∅","\\varnothing");c(d,m,V,"α","\\alpha",!0);c(d,m,V,"β","\\beta",!0);c(d,m,V,"γ","\\gamma",!0);c(d,m,V,"δ","\\delta",!0);c(d,m,V,"ϵ","\\epsilon",!0);c(d,m,V,"ζ","\\zeta",!0);c(d,m,V,"η","\\eta",!0);c(d,m,V,"θ","\\theta",!0);c(d,m,V,"ι","\\iota",!0);c(d,m,V,"κ","\\kappa",!0);c(d,m,V,"λ","\\lambda",!0);c(d,m,V,"μ","\\mu",!0);c(d,m,V,"ν","\\nu",!0);c(d,m,V,"ξ","\\xi",!0);c(d,m,V,"ο","\\omicron",!0);c(d,m,V,"π","\\pi",!0);c(d,m,V,"ρ","\\rho",!0);c(d,m,V,"σ","\\sigma",!0);c(d,m,V,"τ","\\tau",!0);c(d,m,V,"υ","\\upsilon",!0);c(d,m,V,"ϕ","\\phi",!0);c(d,m,V,"χ","\\chi",!0);c(d,m,V,"ψ","\\psi",!0);c(d,m,V,"ω","\\omega",!0);c(d,m,V,"ε","\\varepsilon",!0);c(d,m,V,"ϑ","\\vartheta",!0);c(d,m,V,"ϖ","\\varpi",!0);c(d,m,V,"ϱ","\\varrho",!0);c(d,m,V,"ς","\\varsigma",!0);c(d,m,V,"φ","\\varphi",!0);c(d,m,H,"∗","*",!0);c(d,m,H,"+","+");c(d,m,H,"−","-",!0);c(d,m,H,"⋅","\\cdot",!0);c(d,m,H,"∘","\\circ",!0);c(d,m,H,"÷","\\div",!0);c(d,m,H,"±","\\pm",!0);c(d,m,H,"×","\\times",!0);c(d,m,H,"∩","\\cap",!0);c(d,m,H,"∪","\\cup",!0);c(d,m,H,"∖","\\setminus",!0);c(d,m,H,"∧","\\land");c(d,m,H,"∨","\\lor");c(d,m,H,"∧","\\wedge",!0);c(d,m,H,"∨","\\vee",!0);c(d,m,C,"√","\\surd");c(d,m,ut,"⟨","\\langle",!0);c(d,m,ut,"∣","\\lvert");c(d,m,ut,"∥","\\lVert");c(d,m,$e,"?","?");c(d,m,$e,"!","!");c(d,m,$e,"⟩","\\rangle",!0);c(d,m,$e,"∣","\\rvert");c(d,m,$e,"∥","\\rVert");c(d,m,S,"=","=");c(d,m,S,":",":");c(d,m,S,"≈","\\approx",!0);c(d,m,S,"≅","\\cong",!0);c(d,m,S,"≥","\\ge");c(d,m,S,"≥","\\geq",!0);c(d,m,S,"←","\\gets");c(d,m,S,">","\\gt",!0);c(d,m,S,"∈","\\in",!0);c(d,m,S,"","\\@not");c(d,m,S,"⊂","\\subset",!0);c(d,m,S,"⊃","\\supset",!0);c(d,m,S,"⊆","\\subseteq",!0);c(d,m,S,"⊇","\\supseteq",!0);c(d,k,S,"⊈","\\nsubseteq",!0);c(d,k,S,"⊉","\\nsupseteq",!0);c(d,m,S,"⊨","\\models");c(d,m,S,"←","\\leftarrow",!0);c(d,m,S,"≤","\\le");c(d,m,S,"≤","\\leq",!0);c(d,m,S,"<","\\lt",!0);c(d,m,S,"→","\\rightarrow",!0);c(d,m,S,"→","\\to");c(d,k,S,"≱","\\ngeq",!0);c(d,k,S,"≰","\\nleq",!0);c(d,m,ur," ","\\ ");c(d,m,ur," ","\\space");c(d,m,ur," ","\\nobreakspace");c(I,m,ur," ","\\ ");c(I,m,ur," "," ");c(I,m,ur," ","\\space");c(I,m,ur," ","\\nobreakspace");c(d,m,ur,null,"\\nobreak");c(d,m,ur,null,"\\allowbreak");c(d,m,Ri,",",",");c(d,m,Ri,";",";");c(d,k,H,"⊼","\\barwedge",!0);c(d,k,H,"⊻","\\veebar",!0);c(d,m,H,"⊙","\\odot",!0);c(d,m,H,"⊕","\\oplus",!0);c(d,m,H,"⊗","\\otimes",!0);c(d,m,C,"∂","\\partial",!0);c(d,m,H,"⊘","\\oslash",!0);c(d,k,H,"⊚","\\circledcirc",!0);c(d,k,H,"⊡","\\boxdot",!0);c(d,m,H,"△","\\bigtriangleup");c(d,m,H,"▽","\\bigtriangledown");c(d,m,H,"†","\\dagger");c(d,m,H,"⋄","\\diamond");c(d,m,H,"⋆","\\star");c(d,m,H,"◃","\\triangleleft");c(d,m,H,"▹","\\triangleright");c(d,m,ut,"{","\\{");c(I,m,C,"{","\\{");c(I,m,C,"{","\\textbraceleft");c(d,m,$e,"}","\\}");c(I,m,C,"}","\\}");c(I,m,C,"}","\\textbraceright");c(d,m,ut,"{","\\lbrace");c(d,m,$e,"}","\\rbrace");c(d,m,ut,"[","\\lbrack",!0);c(I,m,C,"[","\\lbrack",!0);c(d,m,$e,"]","\\rbrack",!0);c(I,m,C,"]","\\rbrack",!0);c(d,m,ut,"(","\\lparen",!0);c(d,m,$e,")","\\rparen",!0);c(I,m,C,"<","\\textless",!0);c(I,m,C,">","\\textgreater",!0);c(d,m,ut,"⌊","\\lfloor",!0);c(d,m,$e,"⌋","\\rfloor",!0);c(d,m,ut,"⌈","\\lceil",!0);c(d,m,$e,"⌉","\\rceil",!0);c(d,m,C,"\\","\\backslash");c(d,m,C,"∣","|");c(d,m,C,"∣","\\vert");c(I,m,C,"|","\\textbar",!0);c(d,m,C,"∥","\\|");c(d,m,C,"∥","\\Vert");c(I,m,C,"∥","\\textbardbl");c(I,m,C,"~","\\textasciitilde");c(I,m,C,"\\","\\textbackslash");c(I,m,C,"^","\\textasciicircum");c(d,m,S,"↑","\\uparrow",!0);c(d,m,S,"⇑","\\Uparrow",!0);c(d,m,S,"↓","\\downarrow",!0);c(d,m,S,"⇓","\\Downarrow",!0);c(d,m,S,"↕","\\updownarrow",!0);c(d,m,S,"⇕","\\Updownarrow",!0);c(d,m,Ne,"∐","\\coprod");c(d,m,Ne,"⋁","\\bigvee");c(d,m,Ne,"⋀","\\bigwedge");c(d,m,Ne,"⨄","\\biguplus");c(d,m,Ne,"⋂","\\bigcap");c(d,m,Ne,"⋃","\\bigcup");c(d,m,Ne,"∫","\\int");c(d,m,Ne,"∫","\\intop");c(d,m,Ne,"∬","\\iint");c(d,m,Ne,"∭","\\iiint");c(d,m,Ne,"∏","\\prod");c(d,m,Ne,"∑","\\sum");c(d,m,Ne,"⨂","\\bigotimes");c(d,m,Ne,"⨁","\\bigoplus");c(d,m,Ne,"⨀","\\bigodot");c(d,m,Ne,"∮","\\oint");c(d,m,Ne,"∯","\\oiint");c(d,m,Ne,"∰","\\oiiint");c(d,m,Ne,"⨆","\\bigsqcup");c(d,m,Ne,"∫","\\smallint");c(I,m,Vn,"…","\\textellipsis");c(d,m,Vn,"…","\\mathellipsis");c(I,m,Vn,"…","\\ldots",!0);c(d,m,Vn,"…","\\ldots",!0);c(d,m,Vn,"⋯","\\@cdots",!0);c(d,m,Vn,"⋱","\\ddots",!0);c(d,m,C,"⋮","\\varvdots");c(I,m,C,"⋮","\\varvdots");c(d,m,ge,"ˊ","\\acute");c(d,m,ge,"ˋ","\\grave");c(d,m,ge,"¨","\\ddot");c(d,m,ge,"~","\\tilde");c(d,m,ge,"ˉ","\\bar");c(d,m,ge,"˘","\\breve");c(d,m,ge,"ˇ","\\check");c(d,m,ge,"^","\\hat");c(d,m,ge,"⃗","\\vec");c(d,m,ge,"˙","\\dot");c(d,m,ge,"˚","\\mathring");c(d,m,V,"","\\@imath");c(d,m,V,"","\\@jmath");c(d,m,C,"ı","ı");c(d,m,C,"ȷ","ȷ");c(I,m,C,"ı","\\i",!0);c(I,m,C,"ȷ","\\j",!0);c(I,m,C,"ß","\\ss",!0);c(I,m,C,"æ","\\ae",!0);c(I,m,C,"œ","\\oe",!0);c(I,m,C,"ø","\\o",!0);c(I,m,C,"Æ","\\AE",!0);c(I,m,C,"Œ","\\OE",!0);c(I,m,C,"Ø","\\O",!0);c(I,m,ge,"ˊ","\\'");c(I,m,ge,"ˋ","\\`");c(I,m,ge,"ˆ","\\^");c(I,m,ge,"˜","\\~");c(I,m,ge,"ˉ","\\=");c(I,m,ge,"˘","\\u");c(I,m,ge,"˙","\\.");c(I,m,ge,"¸","\\c");c(I,m,ge,"˚","\\r");c(I,m,ge,"ˇ","\\v");c(I,m,ge,"¨",'\\"');c(I,m,ge,"˝","\\H");c(I,m,ge,"◯","\\textcircled");var lm={"--":!0,"---":!0,"``":!0,"''":!0};c(I,m,C,"–","--",!0);c(I,m,C,"–","\\textendash");c(I,m,C,"—","---",!0);c(I,m,C,"—","\\textemdash");c(I,m,C,"‘","`",!0);c(I,m,C,"‘","\\textquoteleft");c(I,m,C,"’","'",!0);c(I,m,C,"’","\\textquoteright");c(I,m,C,"“","``",!0);c(I,m,C,"“","\\textquotedblleft");c(I,m,C,"”","''",!0);c(I,m,C,"”","\\textquotedblright");c(d,m,C,"°","\\degree",!0);c(I,m,C,"°","\\degree");c(I,m,C,"°","\\textdegree",!0);c(d,m,C,"£","\\pounds");c(d,m,C,"£","\\mathsterling",!0);c(I,m,C,"£","\\pounds");c(I,m,C,"£","\\textsterling",!0);c(d,k,C,"✠","\\maltese");c(I,k,C,"✠","\\maltese");var Ld='0123456789/@."';for(var bs=0;bs<Ld.length;bs++){var jd=Ld.charAt(bs);c(d,m,C,jd,jd)}var Fd='0123456789!@*()-=+";:?/.,';for(var ws=0;ws<Fd.length;ws++){var Od=Fd.charAt(ws);c(I,m,C,Od,Od)}var pi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var xs=0;xs<pi.length;xs++){var yo=pi.charAt(xs);c(d,m,V,yo,yo),c(I,m,C,yo,yo)}c(d,k,C,"C","ℂ");c(I,k,C,"C","ℂ");c(d,k,C,"H","ℍ");c(I,k,C,"H","ℍ");c(d,k,C,"N","ℕ");c(I,k,C,"N","ℕ");c(d,k,C,"P","ℙ");c(I,k,C,"P","ℙ");c(d,k,C,"Q","ℚ");c(I,k,C,"Q","ℚ");c(d,k,C,"R","ℝ");c(I,k,C,"R","ℝ");c(d,k,C,"Z","ℤ");c(I,k,C,"Z","ℤ");c(d,m,V,"h","ℎ");c(I,m,V,"h","ℎ");var Y="";for(var Oe=0;Oe<pi.length;Oe++){var ke=pi.charAt(Oe);Y=String.fromCharCode(55349,56320+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56372+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56424+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56580+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56684+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56736+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56788+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56840+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56944+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Oe<26&&(Y=String.fromCharCode(55349,56632+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y),Y=String.fromCharCode(55349,56476+Oe),c(d,m,V,ke,Y),c(I,m,C,ke,Y))}Y="𝕜";c(d,m,V,"k",Y);c(I,m,C,"k",Y);for(var Hr=0;Hr<10;Hr++){var mr=Hr.toString();Y=String.fromCharCode(55349,57294+Hr),c(d,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57314+Hr),c(d,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57324+Hr),c(d,m,V,mr,Y),c(I,m,C,mr,Y),Y=String.fromCharCode(55349,57334+Hr),c(d,m,V,mr,Y),c(I,m,C,mr,Y)}var zl="ÐÞþ";for(var ks=0;ks<zl.length;ks++){var vo=zl.charAt(ks);c(d,m,V,vo,vo),c(I,m,C,vo,vo)}var bo=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Wd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],l3=function(t,r){var n=t.charCodeAt(0),a=t.charCodeAt(1),o=(n-55296)*1024+(a-56320)+65536,i=r==="math"?0:1;if(119808<=o&&o<120484){var s=Math.floor((o-119808)/26);return[bo[s][2],bo[s][i]]}else if(120782<=o&&o<=120831){var l=Math.floor((o-120782)/10);return[Wd[l][2],Wd[l][i]]}else{if(o===120485||o===120486)return[bo[0][2],bo[0][i]];if(120486<o&&o<120782)return["",""];throw new q("Unsupported character: "+t)}},qi=function(t,r,n){return ue[n][t]&&ue[n][t].replace&&(t=ue[n][t].replace),{value:t,metrics:Hc(t,r,n)}},Pt=function(t,r,n,a,o){var i=qi(t,r,n),s=i.metrics;t=i.value;var l;if(s){var u=s.italic;(n==="text"||a&&a.font==="mathit")&&(u=0),l=new wt(t,s.height,s.depth,u,s.skew,s.width,o)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+n+"'")),l=new wt(t,0,0,0,0,0,o);if(a){l.maxFontSize=a.sizeMultiplier,a.style.isTight()&&l.classes.push("mtight");var p=a.getColor();p&&(l.style.color=p)}return l},c3=function(t,r,n,a){return a===void 0&&(a=[]),n.font==="boldsymbol"&&qi(t,"Main-Bold",r).metrics?Pt(t,"Main-Bold",r,n,a.concat(["mathbf"])):t==="\\"||ue[r][t].font==="main"?Pt(t,"Main-Regular",r,n,a):Pt(t,"AMS-Regular",r,n,a.concat(["amsrm"]))},d3=function(t,r,n,a,o){return o!=="textord"&&qi(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},u3=function(t,r,n){var a=t.mode,o=t.text,i=["mord"],s=a==="math"||a==="text"&&r.font,l=s?r.font:r.fontFamily,u="",p="";if(o.charCodeAt(0)===55349&&([u,p]=l3(o,a)),u.length>0)return Pt(o,u,a,r,i.concat(p));if(l){var f,y;if(l==="boldsymbol"){var x=d3(o,a,r,i,n);f=x.fontName,y=[x.fontClass]}else s?(f=um[l].fontName,y=[l]):(f=wo(l,r.fontWeight,r.fontShape),y=[l,r.fontWeight,r.fontShape]);if(qi(o,f,a).metrics)return Pt(o,f,a,r,i.concat(y));if(lm.hasOwnProperty(o)&&f.slice(0,10)==="Typewriter"){for(var T=[],A=0;A<o.length;A++)T.push(Pt(o[A],f,a,r,i.concat(y)));return dm(T)}}if(n==="mathord")return Pt(o,"Math-Italic",a,r,i.concat(["mathnormal"]));if(n==="textord"){var N=ue[a][o]&&ue[a][o].font;if(N==="ams"){var b=wo("amsrm",r.fontWeight,r.fontShape);return Pt(o,b,a,r,i.concat("amsrm",r.fontWeight,r.fontShape))}else if(N==="main"||!N){var v=wo("textrm",r.fontWeight,r.fontShape);return Pt(o,v,a,r,i.concat(r.fontWeight,r.fontShape))}else{var w=wo(N,r.fontWeight,r.fontShape);return Pt(o,w,a,r,i.concat(w,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},h3=(e,t)=>{if(Ir(e.classes)!==Ir(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;if(e.classes.length===1){var r=e.classes[0];if(r==="mbin"||r==="mord")return!1}for(var n in e.style)if(e.style.hasOwnProperty(n)&&e.style[n]!==t.style[n])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&e.style[a]!==t.style[a])return!1;return!0},p3=e=>{for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof wt&&n instanceof wt&&h3(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e},Gc=function(t){for(var r=0,n=0,a=0,o=0;o<t.children.length;o++){var i=t.children[o];i.height>r&&(r=i.height),i.depth>n&&(n=i.depth),i.maxFontSize>a&&(a=i.maxFontSize)}t.height=r,t.depth=n,t.maxFontSize=a},Ye=function(t,r,n,a){var o=new Va(t,r,n,a);return Gc(o),o},cm=(e,t,r,n)=>new Va(e,t,r,n),m3=function(t,r,n){var a=Ye([t],[],r);return a.height=Math.max(n||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=j(a.height),a.maxFontSize=1,a},f3=function(t,r,n,a){var o=new Uc(t,r,n,a);return Gc(o),o},dm=function(t){var r=new Ga(t);return Gc(r),r},g3=function(t,r){return t instanceof Ga?Ye([],[t],r):t},y3=function(t){if(t.positionType==="individualShift"){for(var r=t.children,n=[r[0]],a=-r[0].shift-r[0].elem.depth,o=a,i=1;i<r.length;i++){var s=-r[i].shift-o-r[i].elem.depth,l=s-(r[i-1].elem.height+r[i-1].elem.depth);o=o+s,n.push({type:"kern",size:l}),n.push(r[i])}return{children:n,depth:a}}var u;if(t.positionType==="top"){for(var p=t.positionData,f=0;f<t.children.length;f++){var y=t.children[f];p-=y.type==="kern"?y.size:y.elem.height+y.elem.depth}u=p}else if(t.positionType==="bottom")u=-t.positionData;else{var x=t.children[0];if(x.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")u=-x.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")u=-x.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:u}},v3=function(t,r){for(var{children:n,depth:a}=y3(t),o=0,i=0;i<n.length;i++){var s=n[i];if(s.type==="elem"){var l=s.elem;o=Math.max(o,l.maxFontSize,l.height)}}o+=2;var u=Ye(["pstrut"],[]);u.style.height=j(o);for(var p=[],f=a,y=a,x=a,T=0;T<n.length;T++){var A=n[T];if(A.type==="kern")x+=A.size;else{var N=A.elem,b=A.wrapperClasses||[],v=A.wrapperStyle||{},w=Ye(b,[u,N],void 0,v);w.style.top=j(-o-x-N.depth),A.marginLeft&&(w.style.marginLeft=A.marginLeft),A.marginRight&&(w.style.marginRight=A.marginRight),p.push(w),x+=N.height+N.depth}f=Math.min(f,x),y=Math.max(y,x)}var P=Ye(["vlist"],p);P.style.height=j(y);var M;if(f<0){var _=Ye([],[]),B=Ye(["vlist"],[_]);B.style.height=j(-f);var z=Ye(["vlist-s"],[new wt("​")]);M=[Ye(["vlist-r"],[P,z]),Ye(["vlist-r"],[B])]}else M=[Ye(["vlist-r"],[P])];var W=Ye(["vlist-t"],M);return M.length===2&&W.classes.push("vlist-t2"),W.height=y,W.depth=-f,W},b3=(e,t)=>{var r=Ye(["mspace"],[],t),n=be(e,t);return r.style.marginRight=j(n),r},wo=function(t,r,n){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var o;return r==="textbf"&&n==="textit"?o="BoldItalic":r==="textbf"?o="Bold":r==="textit"?o="Italic":o="Regular",a+"-"+o},um={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},hm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},w3=function(t,r){var[n,a,o]=hm[t],i=new zr(n),s=new ir([i],{width:j(a),height:j(o),style:"width:"+j(a),viewBox:"0 0 "+1e3*a+" "+1e3*o,preserveAspectRatio:"xMinYMin"}),l=cm(["overlay"],[s],r);return l.height=o,l.style.height=j(o),l.style.width=j(a),l},D={fontMap:um,makeSymbol:Pt,mathsym:c3,makeSpan:Ye,makeSvgSpan:cm,makeLineSpan:m3,makeAnchor:f3,makeFragment:dm,wrapFragment:g3,makeVList:v3,makeOrd:u3,makeGlue:b3,staticSvg:w3,svgData:hm,tryCombineChars:p3},ye={number:3,unit:"mu"},Ur={number:4,unit:"mu"},$t={number:5,unit:"mu"},x3={mord:{mop:ye,mbin:Ur,mrel:$t,minner:ye},mop:{mord:ye,mop:ye,mrel:$t,minner:ye},mbin:{mord:Ur,mop:Ur,mopen:Ur,minner:Ur},mrel:{mord:$t,mop:$t,mopen:$t,minner:$t},mopen:{},mclose:{mop:ye,mbin:Ur,mrel:$t,minner:ye},mpunct:{mord:ye,mop:ye,mrel:$t,mopen:ye,mclose:ye,mpunct:ye,minner:ye},minner:{mord:ye,mop:ye,mbin:Ur,mrel:$t,mopen:ye,mpunct:ye,minner:ye}},k3={mord:{mop:ye},mop:{mord:ye,mop:ye},mbin:{},mrel:{},mopen:{},mclose:{mop:ye},mpunct:{},minner:{mop:ye}},pm={},mi={},fi={};function F(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:o,mathmlBuilder:i}=e,s={type:t,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:a},l=0;l<r.length;++l)pm[r[l]]=s;t&&(o&&(mi[t]=o),i&&(fi[t]=i))}function sn(e){var{type:t,htmlBuilder:r,mathmlBuilder:n}=e;F({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:n})}var gi=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},Ce=function(t){return t.type==="ordgroup"?t.body:[t]},sr=D.makeSpan,S3=["leftmost","mbin","mopen","mrel","mop","mpunct"],A3=["rightmost","mrel","mclose","mpunct"],T3={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT},C3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Ee=function(t,r,n,a){a===void 0&&(a=[null,null]);for(var o=[],i=0;i<t.length;i++){var s=ne(t[i],r);if(s instanceof Ga){var l=s.children;o.push(...l)}else o.push(s)}if(D.tryCombineChars(o),!n)return o;var u=r;if(t.length===1){var p=t[0];p.type==="sizing"?u=r.havingSize(p.size):p.type==="styling"&&(u=r.havingStyle(T3[p.style]))}var f=sr([a[0]||"leftmost"],[],r),y=sr([a[1]||"rightmost"],[],r),x=n==="root";return Hd(o,(T,A)=>{var N=A.classes[0],b=T.classes[0];N==="mbin"&&A3.includes(b)?A.classes[0]="mord":b==="mbin"&&S3.includes(N)&&(T.classes[0]="mord")},{node:f},y,x),Hd(o,(T,A)=>{var N=Rl(A),b=Rl(T),v=N&&b?T.hasClass("mtight")?k3[N][b]:x3[N][b]:null;if(v)return D.makeGlue(v,u)},{node:f},y,x),o},Hd=function e(t,r,n,a,o){a&&t.push(a);for(var i=0;i<t.length;i++){var s=t[i],l=mm(s);if(l){e(l.children,r,n,null,o);continue}var u=!s.hasClass("mspace");if(u){var p=r(s,n.node);p&&(n.insertAfter?n.insertAfter(p):(t.unshift(p),i++))}u?n.node=s:o&&s.hasClass("newline")&&(n.node=sr(["leftmost"])),n.insertAfter=(f=>y=>{t.splice(f+1,0,y),i++})(i)}a&&t.pop()},mm=function(t){return t instanceof Ga||t instanceof Uc||t instanceof Va&&t.hasClass("enclosing")?t:null},P3=function e(t,r){var n=mm(t);if(n){var a=n.children;if(a.length){if(r==="right")return e(a[a.length-1],"right");if(r==="left")return e(a[0],"left")}}return t},Rl=function(t,r){return t?(r&&(t=P3(t,r)),C3[t.classes[0]]||null):null},La=function(t,r){var n=["nulldelimiter"].concat(t.baseSizingClasses());return sr(r.concat(n))},ne=function(t,r,n){if(!t)return sr();if(mi[t.type]){var a=mi[t.type](t,r);if(n&&r.size!==n.size){a=sr(r.sizingClasses(n),[a],r);var o=r.sizeMultiplier/n.sizeMultiplier;a.height*=o,a.depth*=o}return a}else throw new q("Got group of unknown type: '"+t.type+"'")};function xo(e,t){var r=sr(["base"],e,t),n=sr(["strut"]);return n.style.height=j(r.height+r.depth),r.depth&&(n.style.verticalAlign=j(-r.depth)),r.children.unshift(n),r}function ql(e,t){var r=null;e.length===1&&e[0].type==="tag"&&(r=e[0].tag,e=e[0].body);var n=Ee(e,t,"root"),a;n.length===2&&n[1].hasClass("tag")&&(a=n.pop());for(var o=[],i=[],s=0;s<n.length;s++)if(i.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var l=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,i.push(n[s]),n[s].hasClass("nobreak")&&(l=!0);l||(o.push(xo(i,t)),i=[])}else n[s].hasClass("newline")&&(i.pop(),i.length>0&&(o.push(xo(i,t)),i=[]),o.push(n[s]));i.length>0&&o.push(xo(i,t));var u;r?(u=xo(Ee(r,t,!0)),u.classes=["tag"],o.push(u)):a&&o.push(a);var p=sr(["katex-html"],o);if(p.setAttribute("aria-hidden","true"),u){var f=u.children[0];f.style.height=j(p.height+p.depth),p.depth&&(f.style.verticalAlign=j(-p.depth))}return p}function fm(e){return new Ga(e)}class at{constructor(t,r,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=n||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Ir(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Ot&&this.children[n+1]instanceof Ot){for(var a=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Ot;)a+=this.children[++n].toText();t.appendChild(new Ot(a).toNode())}else t.appendChild(this.children[n].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=ae.escape(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+ae.escape(Ir(this.classes))+'"'),t+=">";for(var n=0;n<this.children.length;n++)t+=this.children[n].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class Ot{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return ae.escape(this.toText())}toText(){return this.text}}class N3{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",j(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+j(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var R={MathNode:at,TextNode:Ot,SpaceNode:N3,newDocumentFragment:fm},xt=function(t,r,n){return ue[r][t]&&ue[r][t].replace&&t.charCodeAt(0)!==55349&&!(lm.hasOwnProperty(t)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(t=ue[r][t].replace),new R.TextNode(t)},Vc=function(t){return t.length===1?t[0]:new R.MathNode("mrow",t)},$c=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var n=r.font;if(!n||n==="mathnormal")return null;var a=t.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathsfit")return"sans-serif-italic";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var o=t.text;if(["\\imath","\\jmath"].includes(o))return null;ue[a][o]&&ue[a][o].replace&&(o=ue[a][o].replace);var i=D.fontMap[n].fontName;return Hc(o,i,a)?D.fontMap[n].variant:null};function Ss(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var t=e.children[0];return t instanceof Ot&&t.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var r=e.children[0];return r instanceof Ot&&r.text===","}else return!1}var tt=function(t,r,n){if(t.length===1){var a=le(t[0],r);return n&&a instanceof at&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var o=[],i,s=0;s<t.length;s++){var l=le(t[s],r);if(l instanceof at&&i instanceof at){if(l.type==="mtext"&&i.type==="mtext"&&l.getAttribute("mathvariant")===i.getAttribute("mathvariant")){i.children.push(...l.children);continue}else if(l.type==="mn"&&i.type==="mn"){i.children.push(...l.children);continue}else if(Ss(l)&&i.type==="mn"){i.children.push(...l.children);continue}else if(l.type==="mn"&&Ss(i))l.children=[...i.children,...l.children],o.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(i.type==="mn"||Ss(i))){var u=l.children[0];u instanceof at&&u.type==="mn"&&(u.children=[...i.children,...u.children],o.pop())}else if(i.type==="mi"&&i.children.length===1){var p=i.children[0];if(p instanceof Ot&&p.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var f=l.children[0];f instanceof Ot&&f.text.length>0&&(f.text=f.text.slice(0,1)+"̸"+f.text.slice(1),o.pop())}}}o.push(l),i=l}return o},Rr=function(t,r,n){return Vc(tt(t,r,n))},le=function(t,r){if(!t)return new R.MathNode("mrow");if(fi[t.type]){var n=fi[t.type](t,r);return n}else throw new q("Got group of unknown type: '"+t.type+"'")};function Ud(e,t,r,n,a){var o=tt(e,r),i;o.length===1&&o[0]instanceof at&&["mrow","mtable"].includes(o[0].type)?i=o[0]:i=new R.MathNode("mrow",o);var s=new R.MathNode("annotation",[new R.TextNode(t)]);s.setAttribute("encoding","application/x-tex");var l=new R.MathNode("semantics",[i,s]),u=new R.MathNode("math",[l]);u.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&u.setAttribute("display","block");var p=a?"katex":"katex-mathml";return D.makeSpan([p],[u])}var gm=function(t){return new Qt({style:t.displayMode?$.DISPLAY:$.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},ym=function(t,r){if(r.displayMode){var n=["katex-display"];r.leqno&&n.push("leqno"),r.fleqn&&n.push("fleqn"),t=D.makeSpan(n,[t])}return t},D3=function(t,r,n){var a=gm(n),o;if(n.output==="mathml")return Ud(t,r,a,n.displayMode,!0);if(n.output==="html"){var i=ql(t,a);o=D.makeSpan(["katex"],[i])}else{var s=Ud(t,r,a,n.displayMode,!1),l=ql(t,a);o=D.makeSpan(["katex"],[s,l])}return ym(o,n)},M3=function(t,r,n){var a=gm(n),o=ql(t,a),i=D.makeSpan(["katex"],[o]);return ym(i,n)},E3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},_3=function(t){var r=new R.MathNode("mo",[new R.TextNode(E3[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},B3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},I3=function(t){return t.type==="ordgroup"?t.body.length:1},z3=function(t,r){function n(){var s=4e5,l=t.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var u=t,p=I3(u.base),f,y,x;if(p>5)l==="widehat"||l==="widecheck"?(f=420,s=2364,x=.42,y=l+"4"):(f=312,s=2340,x=.34,y="tilde4");else{var T=[1,1,2,2,3,3][p];l==="widehat"||l==="widecheck"?(s=[0,1062,2364,2364,2364][T],f=[0,239,300,360,420][T],x=[0,.24,.3,.3,.36,.42][T],y=l+T):(s=[0,600,1033,2339,2340][T],f=[0,260,286,306,312][T],x=[0,.26,.286,.3,.306,.34][T],y="tilde"+T)}var A=new zr(y),N=new ir([A],{width:"100%",height:j(x),viewBox:"0 0 "+s+" "+f,preserveAspectRatio:"none"});return{span:D.makeSvgSpan([],[N],r),minWidth:0,height:x}}else{var b=[],v=B3[l],[w,P,M]=v,_=M/1e3,B=w.length,z,W;if(B===1){var U=v[3];z=["hide-tail"],W=[U]}else if(B===2)z=["halfarrow-left","halfarrow-right"],W=["xMinYMin","xMaxYMin"];else if(B===3)z=["brace-left","brace-center","brace-right"],W=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var J=0;J<B;J++){var X=new zr(w[J]),ce=new ir([X],{width:"400em",height:j(_),viewBox:"0 0 "+s+" "+M,preserveAspectRatio:W[J]+" slice"}),me=D.makeSvgSpan([z[J]],[ce],r);if(B===1)return{span:me,minWidth:P,height:_};me.style.height=j(_),b.push(me)}return{span:D.makeSpan(["stretchy"],b,r),minWidth:P,height:_}}}var{span:a,minWidth:o,height:i}=n();return a.height=i,a.style.height=j(i),o>0&&(a.style.minWidth=j(o)),a},R3=function(t,r,n,a,o){var i,s=t.height+t.depth+n+a;if(/fbox|color|angl/.test(r)){if(i=D.makeSpan(["stretchy",r],[],o),r==="fbox"){var l=o.color&&o.getColor();l&&(i.style.borderColor=l)}}else{var u=[];/^[bx]cancel$/.test(r)&&u.push(new Il({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&u.push(new Il({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var p=new ir(u,{width:"100%",height:j(s)});i=D.makeSvgSpan([],[p],o)}return i.height=s,i.style.height=j(s),i},lr={encloseSpan:R3,mathMLnode:_3,svgSpan:z3};function ee(e,t){if(!e||e.type!==t)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return e}function Yc(e){var t=Li(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}function Li(e){return e&&(e.type==="atom"||s3.hasOwnProperty(e.type))?e:null}var Kc=(e,t)=>{var r,n,a;e&&e.type==="supsub"?(n=ee(e.base,"accent"),r=n.base,e.base=r,a=o3(ne(e,t)),e.base=n):(n=ee(e,"accent"),r=n.base);var o=ne(r,t.havingCrampedStyle()),i=n.isShifty&&ae.isCharacterBox(r),s=0;if(i){var l=ae.getBaseElem(r),u=ne(l,t.havingCrampedStyle());s=qd(u).skew}var p=n.label==="\\c",f=p?o.height+o.depth:Math.min(o.height,t.fontMetrics().xHeight),y;if(n.isStretchy)y=lr.svgSpan(n,t),y=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"elem",elem:y,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+j(2*s)+")",marginLeft:j(2*s)}:void 0}]},t);else{var x,T;n.label==="\\vec"?(x=D.staticSvg("vec",t),T=D.svgData.vec[1]):(x=D.makeOrd({mode:n.mode,text:n.label},t,"textord"),x=qd(x),x.italic=0,T=x.width,p&&(f+=x.depth)),y=D.makeSpan(["accent-body"],[x]);var A=n.label==="\\textcircled";A&&(y.classes.push("accent-full"),f=o.height);var N=s;A||(N-=T/2),y.style.left=j(N),n.label==="\\textcircled"&&(y.style.top=".2em"),y=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"kern",size:-f},{type:"elem",elem:y}]},t)}var b=D.makeSpan(["mord","accent"],[y],t);return a?(a.children[0]=b,a.height=Math.max(b.height,a.height),a.classes[0]="mord",a):b},vm=(e,t)=>{var r=e.isStretchy?lr.mathMLnode(e.label):new R.MathNode("mo",[xt(e.label,e.mode)]),n=new R.MathNode("mover",[le(e.base,t),r]);return n.setAttribute("accent","true"),n},q3=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));F({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,t)=>{var r=gi(t[0]),n=!q3.test(e.funcName),a=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:a,base:r}},htmlBuilder:Kc,mathmlBuilder:vm});F({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,t)=>{var r=t[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Kc,mathmlBuilder:vm});F({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:a}},htmlBuilder:(e,t)=>{var r=ne(e.base,t),n=lr.svgSpan(e,t),a=e.label==="\\utilde"?.12:0,o=D.makeVList({positionType:"top",positionData:r.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]},t);return D.makeSpan(["mord","accentunder"],[o],t)},mathmlBuilder:(e,t)=>{var r=lr.mathMLnode(e.label),n=new R.MathNode("munder",[le(e.base,t),r]);return n.setAttribute("accentunder","true"),n}});var ko=e=>{var t=new R.MathNode("mpadded",e?[e]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};F({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n,funcName:a}=e;return{type:"xArrow",mode:n.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(e,t){var r=t.style,n=t.havingStyle(r.sup()),a=D.wrapFragment(ne(e.body,n,t),t),o=e.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(o+"-arrow-pad");var i;e.below&&(n=t.havingStyle(r.sub()),i=D.wrapFragment(ne(e.below,n,t),t),i.classes.push(o+"-arrow-pad"));var s=lr.svgSpan(e,t),l=-t.fontMetrics().axisHeight+.5*s.height,u=-t.fontMetrics().axisHeight-.5*s.height-.111;(a.depth>.25||e.label==="\\xleftequilibrium")&&(u-=a.depth);var p;if(i){var f=-t.fontMetrics().axisHeight+i.height+.5*s.height+.111;p=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:u},{type:"elem",elem:s,shift:l},{type:"elem",elem:i,shift:f}]},t)}else p=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:u},{type:"elem",elem:s,shift:l}]},t);return p.children[0].children[0].children[1].classes.push("svg-align"),D.makeSpan(["mrel","x-arrow"],[p],t)},mathmlBuilder(e,t){var r=lr.mathMLnode(e.label);r.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var a=ko(le(e.body,t));if(e.below){var o=ko(le(e.below,t));n=new R.MathNode("munderover",[r,o,a])}else n=new R.MathNode("mover",[r,a])}else if(e.below){var i=ko(le(e.below,t));n=new R.MathNode("munder",[r,i])}else n=ko(),n=new R.MathNode("mover",[r,n]);return n}});var L3=D.makeSpan;function bm(e,t){var r=Ee(e.body,t,!0);return L3([e.mclass],r,t)}function wm(e,t){var r,n=tt(e.body,t);return e.mclass==="minner"?r=new R.MathNode("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(r=n[0],r.type="mi"):r=new R.MathNode("mi",n):(e.isCharacterBox?(r=n[0],r.type="mo"):r=new R.MathNode("mo",n),e.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):e.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):e.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}F({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.slice(5),body:Ce(a),isCharacterBox:ae.isCharacterBox(a)}},htmlBuilder:bm,mathmlBuilder:wm});var ji=e=>{var t=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};F({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,t){var{parser:r}=e;return{type:"mclass",mode:r.mode,mclass:ji(t[0]),body:Ce(t[1]),isCharacterBox:ae.isCharacterBox(t[1])}}});F({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,t){var{parser:r,funcName:n}=e,a=t[1],o=t[0],i;n!=="\\stackrel"?i=ji(a):i="mrel";var s={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Ce(a)},l={type:"supsub",mode:o.mode,base:s,sup:n==="\\underset"?null:o,sub:n==="\\underset"?o:null};return{type:"mclass",mode:r.mode,mclass:i,body:[l],isCharacterBox:ae.isCharacterBox(l)}},htmlBuilder:bm,mathmlBuilder:wm});F({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"pmb",mode:r.mode,mclass:ji(t[0]),body:Ce(t[0])}},htmlBuilder(e,t){var r=Ee(e.body,t,!0),n=D.makeSpan([e.mclass],r,t);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,t){var r=tt(e.body,t),n=new R.MathNode("mstyle",r);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var j3={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Gd=()=>({type:"styling",body:[],mode:"math",style:"display"}),Vd=e=>e.type==="textord"&&e.text==="@",F3=(e,t)=>(e.type==="mathord"||e.type==="atom")&&e.text===t;function O3(e,t,r){var n=j3[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(n,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),o={type:"atom",text:n,mode:"math",family:"rel"},i=r.callFunction("\\Big",[o],[]),s=r.callFunction("\\\\cdright",[t[1]],[]),l={type:"ordgroup",mode:"math",body:[a,i,s]};return r.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var u={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[u],[])}default:return{type:"textord",text:" ",mode:"math"}}}function W3(e){var t=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){t.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var r=e.fetch().text;if(r==="&"||r==="\\\\")e.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new q("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],a=[n],o=0;o<t.length;o++){for(var i=t[o],s=Gd(),l=0;l<i.length;l++)if(!Vd(i[l]))s.body.push(i[l]);else{n.push(s),l+=1;var u=Yc(i[l]).text,p=new Array(2);if(p[0]={type:"ordgroup",mode:"math",body:[]},p[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(u)>-1))if("<>AV".indexOf(u)>-1)for(var f=0;f<2;f++){for(var y=!0,x=l+1;x<i.length;x++){if(F3(i[x],u)){y=!1,l=x;break}if(Vd(i[x]))throw new q("Missing a "+u+" character to complete a CD arrow.",i[x]);p[f].body.push(i[x])}if(y)throw new q("Missing a "+u+" character to complete a CD arrow.",i[l])}else throw new q('Expected one of "<>AV=|." after @',i[l]);var T=O3(u,p,e),A={type:"styling",body:[T],mode:"math",style:"display"};n.push(A),s=Gd()}o%2===0?n.push(s):n.shift(),n=[],a.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var N=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:N,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}F({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"cdlabel",mode:r.mode,side:n.slice(4),label:t[0]}},htmlBuilder(e,t){var r=t.havingStyle(t.style.sup()),n=D.wrapFragment(ne(e.label,r,t),t);return n.classes.push("cd-label-"+e.side),n.style.bottom=j(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,t){var r=new R.MathNode("mrow",[le(e.label,t)]);return r=new R.MathNode("mpadded",[r]),r.setAttribute("width","0"),e.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new R.MathNode("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});F({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,t){var{parser:r}=e;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(e,t){var r=D.wrapFragment(ne(e.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(e,t){return new R.MathNode("mrow",[le(e.fragment,t)])}});F({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,t){for(var{parser:r}=e,n=ee(t[0],"ordgroup"),a=n.body,o="",i=0;i<a.length;i++){var s=ee(a[i],"textord");o+=s.text}var l=parseInt(o),u;if(isNaN(l))throw new q("\\@char has non-numeric argument "+o);if(l<0||l>=1114111)throw new q("\\@char with invalid code point "+o);return l<=65535?u=String.fromCharCode(l):(l-=65536,u=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:r.mode,text:u}}});var xm=(e,t)=>{var r=Ee(e.body,t.withColor(e.color),!1);return D.makeFragment(r)},km=(e,t)=>{var r=tt(e.body,t.withColor(e.color)),n=new R.MathNode("mstyle",r);return n.setAttribute("mathcolor",e.color),n};F({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,t){var{parser:r}=e,n=ee(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:n,body:Ce(a)}},htmlBuilder:xm,mathmlBuilder:km});F({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,t){var{parser:r,breakOnTokenText:n}=e,a=ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var o=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:a,body:o}},htmlBuilder:xm,mathmlBuilder:km});F({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,t,r){var{parser:n}=e,a=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,o=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:o,size:a&&ee(a,"size").value}},htmlBuilder(e,t){var r=D.makeSpan(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=j(be(e.size,t)))),r},mathmlBuilder(e,t){var r=new R.MathNode("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",j(be(e.size,t)))),r}});var Ll={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Sm=e=>{var t=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new q("Expected a control sequence",e);return t},H3=e=>{var t=e.gullet.popToken();return t.text==="="&&(t=e.gullet.popToken(),t.text===" "&&(t=e.gullet.popToken())),t},Am=(e,t,r,n)=>{var a=e.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!e.gullet.isExpandable(r.text)}),e.gullet.macros.set(t,a,n)};F({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:t,funcName:r}=e;t.consumeSpaces();var n=t.fetch();if(Ll[n.text])return(r==="\\global"||r==="\\\\globallong")&&(n.text=Ll[n.text]),ee(t.parseFunction(),"internal");throw new q("Invalid token after macro prefix",n)}});F({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=t.gullet.popToken(),a=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new q("Expected a control sequence",n);for(var o=0,i,s=[[]];t.gullet.future().text!=="{";)if(n=t.gullet.popToken(),n.text==="#"){if(t.gullet.future().text==="{"){i=t.gullet.future(),s[o].push("{");break}if(n=t.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new q('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==o+1)throw new q('Argument number "'+n.text+'" out of order');o++,s.push([])}else{if(n.text==="EOF")throw new q("Expected a macro definition");s[o].push(n.text)}var{tokens:l}=t.gullet.consumeArg();return i&&l.unshift(i),(r==="\\edef"||r==="\\xdef")&&(l=t.gullet.expandTokens(l),l.reverse()),t.gullet.macros.set(a,{tokens:l,numArgs:o,delimiters:s},r===Ll[r]),{type:"internal",mode:t.mode}}});F({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Sm(t.gullet.popToken());t.gullet.consumeSpaces();var a=H3(t);return Am(t,n,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});F({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:t,funcName:r}=e,n=Sm(t.gullet.popToken()),a=t.gullet.popToken(),o=t.gullet.popToken();return Am(t,n,o,r==="\\\\globalfuture"),t.gullet.pushToken(o),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var sa=function(t,r,n){var a=ue.math[t]&&ue.math[t].replace,o=Hc(a||t,r,n);if(!o)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return o},Qc=function(t,r,n,a){var o=n.havingBaseStyle(r),i=D.makeSpan(a.concat(o.sizingClasses(n)),[t],n),s=o.sizeMultiplier/n.sizeMultiplier;return i.height*=s,i.depth*=s,i.maxFontSize=o.sizeMultiplier,i},Tm=function(t,r,n){var a=r.havingBaseStyle(n),o=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=j(o),t.height-=o,t.depth+=o},U3=function(t,r,n,a,o,i){var s=D.makeSymbol(t,"Main-Regular",o,a),l=Qc(s,r,a,i);return n&&Tm(l,a,r),l},G3=function(t,r,n,a){return D.makeSymbol(t,"Size"+r+"-Regular",n,a)},Cm=function(t,r,n,a,o,i){var s=G3(t,r,o,a),l=Qc(D.makeSpan(["delimsizing","size"+r],[s],a),$.TEXT,a,i);return n&&Tm(l,a,$.TEXT),l},As=function(t,r,n){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var o=D.makeSpan(["delimsizinginner",a],[D.makeSpan([],[D.makeSymbol(t,r,n)])]);return{type:"elem",elem:o}},Ts=function(t,r,n){var a=Ft["Size4-Regular"][t.charCodeAt(0)]?Ft["Size4-Regular"][t.charCodeAt(0)][4]:Ft["Size1-Regular"][t.charCodeAt(0)][4],o=new zr("inner",Q4(t,Math.round(1e3*r))),i=new ir([o],{width:j(a),height:j(r),style:"width:"+j(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),s=D.makeSvgSpan([],[i],n);return s.height=r,s.style.height=j(r),s.style.width=j(a),{type:"elem",elem:s}},jl=.008,So={type:"kern",size:-1*jl},V3=["|","\\lvert","\\rvert","\\vert"],$3=["\\|","\\lVert","\\rVert","\\Vert"],Pm=function(t,r,n,a,o,i){var s,l,u,p,f="",y=0;s=u=p=t,l=null;var x="Size1-Regular";t==="\\uparrow"?u=p="⏐":t==="\\Uparrow"?u=p="‖":t==="\\downarrow"?s=u="⏐":t==="\\Downarrow"?s=u="‖":t==="\\updownarrow"?(s="\\uparrow",u="⏐",p="\\downarrow"):t==="\\Updownarrow"?(s="\\Uparrow",u="‖",p="\\Downarrow"):V3.includes(t)?(u="∣",f="vert",y=333):$3.includes(t)?(u="∥",f="doublevert",y=556):t==="["||t==="\\lbrack"?(s="⎡",u="⎢",p="⎣",x="Size4-Regular",f="lbrack",y=667):t==="]"||t==="\\rbrack"?(s="⎤",u="⎥",p="⎦",x="Size4-Regular",f="rbrack",y=667):t==="\\lfloor"||t==="⌊"?(u=s="⎢",p="⎣",x="Size4-Regular",f="lfloor",y=667):t==="\\lceil"||t==="⌈"?(s="⎡",u=p="⎢",x="Size4-Regular",f="lceil",y=667):t==="\\rfloor"||t==="⌋"?(u=s="⎥",p="⎦",x="Size4-Regular",f="rfloor",y=667):t==="\\rceil"||t==="⌉"?(s="⎤",u=p="⎥",x="Size4-Regular",f="rceil",y=667):t==="("||t==="\\lparen"?(s="⎛",u="⎜",p="⎝",x="Size4-Regular",f="lparen",y=875):t===")"||t==="\\rparen"?(s="⎞",u="⎟",p="⎠",x="Size4-Regular",f="rparen",y=875):t==="\\{"||t==="\\lbrace"?(s="⎧",l="⎨",p="⎩",u="⎪",x="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(s="⎫",l="⎬",p="⎭",u="⎪",x="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(s="⎧",p="⎩",u="⎪",x="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(s="⎫",p="⎭",u="⎪",x="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(s="⎧",p="⎭",u="⎪",x="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(s="⎫",p="⎩",u="⎪",x="Size4-Regular");var T=sa(s,x,o),A=T.height+T.depth,N=sa(u,x,o),b=N.height+N.depth,v=sa(p,x,o),w=v.height+v.depth,P=0,M=1;if(l!==null){var _=sa(l,x,o);P=_.height+_.depth,M=2}var B=A+w+P,z=Math.max(0,Math.ceil((r-B)/(M*b))),W=B+z*M*b,U=a.fontMetrics().axisHeight;n&&(U*=a.sizeMultiplier);var J=W/2-U,X=[];if(f.length>0){var ce=W-A-w,me=Math.round(W*1e3),rt=J4(f,Math.round(ce*1e3)),ht=new zr(f,rt),_t=(y/1e3).toFixed(3)+"em",O=(me/1e3).toFixed(3)+"em",Q=new ir([ht],{width:_t,height:O,viewBox:"0 0 "+y+" "+me}),K=D.makeSvgSpan([],[Q],a);K.height=me/1e3,K.style.width=_t,K.style.height=O,X.push({type:"elem",elem:K})}else{if(X.push(As(p,x,o)),X.push(So),l===null){var ie=W-A-w+2*jl;X.push(Ts(u,ie,a))}else{var oe=(W-A-w-P)/2+2*jl;X.push(Ts(u,oe,a)),X.push(So),X.push(As(l,x,o)),X.push(So),X.push(Ts(u,oe,a))}X.push(So),X.push(As(s,x,o))}var Bt=a.havingBaseStyle($.TEXT),kt=D.makeVList({positionType:"bottom",positionData:J,children:X},Bt);return Qc(D.makeSpan(["delimsizing","mult"],[kt],Bt),$.TEXT,a,i)},Cs=80,Ps=.08,Ns=function(t,r,n,a,o){var i=K4(t,a,n),s=new zr(t,i),l=new ir([s],{width:"400em",height:j(r),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return D.makeSvgSpan(["hide-tail"],[l],o)},Y3=function(t,r){var n=r.havingBaseSizing(),a=Em("\\surd",t*n.sizeMultiplier,Mm,n),o=n.sizeMultiplier,i=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),s,l=0,u=0,p=0,f;return a.type==="small"?(p=1e3+1e3*i+Cs,t<1?o=1:t<1.4&&(o=.7),l=(1+i+Ps)/o,u=(1+i)/o,s=Ns("sqrtMain",l,p,i,r),s.style.minWidth="0.853em",f=.833/o):a.type==="large"?(p=(1e3+Cs)*ya[a.size],u=(ya[a.size]+i)/o,l=(ya[a.size]+i+Ps)/o,s=Ns("sqrtSize"+a.size,l,p,i,r),s.style.minWidth="1.02em",f=1/o):(l=t+i+Ps,u=t+i,p=Math.floor(1e3*t+i)+Cs,s=Ns("sqrtTall",l,p,i,r),s.style.minWidth="0.742em",f=1.056),s.height=u,s.style.height=j(l),{span:s,advanceWidth:f,ruleWidth:(r.fontMetrics().sqrtRuleThickness+i)*o}},Nm=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],K3=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],Dm=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],ya=[0,1.2,1.8,2.4,3],Q3=function(t,r,n,a,o){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Nm.includes(t)||Dm.includes(t))return Cm(t,r,!1,n,a,o);if(K3.includes(t))return Pm(t,ya[r],!1,n,a,o);throw new q("Illegal delimiter: '"+t+"'")},J3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],X3=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"stack"}],Mm=[{type:"small",style:$.SCRIPTSCRIPT},{type:"small",style:$.SCRIPT},{type:"small",style:$.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Z3=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Em=function(t,r,n,a){for(var o=Math.min(2,3-a.style.size),i=o;i<n.length&&n[i].type!=="stack";i++){var s=sa(t,Z3(n[i]),"math"),l=s.height+s.depth;if(n[i].type==="small"){var u=a.havingBaseStyle(n[i].style);l*=u.sizeMultiplier}if(l>r)return n[i]}return n[n.length-1]},_m=function(t,r,n,a,o,i){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var s;Dm.includes(t)?s=J3:Nm.includes(t)?s=Mm:s=X3;var l=Em(t,r,s,a);return l.type==="small"?U3(t,l.style,n,a,o,i):l.type==="large"?Cm(t,l.size,n,a,o,i):Pm(t,r,n,a,o,i)},ev=function(t,r,n,a,o,i){var s=a.fontMetrics().axisHeight*a.sizeMultiplier,l=901,u=5/a.fontMetrics().ptPerEm,p=Math.max(r-s,n+s),f=Math.max(p/500*l,2*p-u);return _m(t,f,!0,a,o,i)},tr={sqrtImage:Y3,sizedDelim:Q3,sizeToMaxHeight:ya,customSizedDelim:_m,leftRightDelim:ev},$d={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},tv=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Fi(e,t){var r=Li(e);if(r&&tv.includes(r.text))return r;throw r?new q("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",e):new q("Invalid delimiter type '"+e.type+"'",e)}F({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,t)=>{var r=Fi(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:$d[e.funcName].size,mclass:$d[e.funcName].mclass,delim:r.text}},htmlBuilder:(e,t)=>e.delim==="."?D.makeSpan([e.mclass]):tr.sizedDelim(e.delim,e.size,t,e.mode,[e.mclass]),mathmlBuilder:e=>{var t=[];e.delim!=="."&&t.push(xt(e.delim,e.mode));var r=new R.MathNode("mo",t);e.mclass==="mopen"||e.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var n=j(tr.sizeToMaxHeight[e.size]);return r.setAttribute("minsize",n),r.setAttribute("maxsize",n),r}});function Yd(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}F({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=e.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new q("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:Fi(t[0],e).text,color:r}}});F({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=Fi(t[0],e),n=e.parser;++n.leftrightDepth;var a=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var o=ee(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:a,left:r.text,right:o.delim,rightColor:o.color}},htmlBuilder:(e,t)=>{Yd(e);for(var r=Ee(e.body,t,!0,["mopen","mclose"]),n=0,a=0,o=!1,i=0;i<r.length;i++)r[i].isMiddle?o=!0:(n=Math.max(r[i].height,n),a=Math.max(r[i].depth,a));n*=t.sizeMultiplier,a*=t.sizeMultiplier;var s;if(e.left==="."?s=La(t,["mopen"]):s=tr.leftRightDelim(e.left,n,a,t,e.mode,["mopen"]),r.unshift(s),o)for(var l=1;l<r.length;l++){var u=r[l],p=u.isMiddle;p&&(r[l]=tr.leftRightDelim(p.delim,n,a,p.options,e.mode,[]))}var f;if(e.right===".")f=La(t,["mclose"]);else{var y=e.rightColor?t.withColor(e.rightColor):t;f=tr.leftRightDelim(e.right,n,a,y,e.mode,["mclose"])}return r.push(f),D.makeSpan(["minner"],r,t)},mathmlBuilder:(e,t)=>{Yd(e);var r=tt(e.body,t);if(e.left!=="."){var n=new R.MathNode("mo",[xt(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if(e.right!=="."){var a=new R.MathNode("mo",[xt(e.right,e.mode)]);a.setAttribute("fence","true"),e.rightColor&&a.setAttribute("mathcolor",e.rightColor),r.push(a)}return Vc(r)}});F({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var r=Fi(t[0],e);if(!e.parser.leftrightDepth)throw new q("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:(e,t)=>{var r;if(e.delim===".")r=La(t,[]);else{r=tr.sizedDelim(e.delim,1,t,e.mode,[]);var n={delim:e.delim,options:t};r.isMiddle=n}return r},mathmlBuilder:(e,t)=>{var r=e.delim==="\\vert"||e.delim==="|"?xt("|","text"):xt(e.delim,e.mode),n=new R.MathNode("mo",[r]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Jc=(e,t)=>{var r=D.wrapFragment(ne(e.body,t),t),n=e.label.slice(1),a=t.sizeMultiplier,o,i=0,s=ae.isCharacterBox(e.body);if(n==="sout")o=D.makeSpan(["stretchy","sout"]),o.height=t.fontMetrics().defaultRuleThickness/a,i=-.5*t.fontMetrics().xHeight;else if(n==="phase"){var l=be({number:.6,unit:"pt"},t),u=be({number:.35,unit:"ex"},t),p=t.havingBaseSizing();a=a/p.sizeMultiplier;var f=r.height+r.depth+l+u;r.style.paddingLeft=j(f/2+l);var y=Math.floor(1e3*f*a),x=$4(y),T=new ir([new zr("phase",x)],{width:"400em",height:j(y/1e3),viewBox:"0 0 400000 "+y,preserveAspectRatio:"xMinYMin slice"});o=D.makeSvgSpan(["hide-tail"],[T],t),o.style.height=j(f),i=r.depth+l+u}else{/cancel/.test(n)?s||r.classes.push("cancel-pad"):n==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var A=0,N=0,b=0;/box/.test(n)?(b=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),A=t.fontMetrics().fboxsep+(n==="colorbox"?0:b),N=A):n==="angl"?(b=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),A=4*b,N=Math.max(0,.25-r.depth)):(A=s?.2:0,N=A),o=lr.encloseSpan(r,n,A,N,t),/fbox|boxed|fcolorbox/.test(n)?(o.style.borderStyle="solid",o.style.borderWidth=j(b)):n==="angl"&&b!==.049&&(o.style.borderTopWidth=j(b),o.style.borderRightWidth=j(b)),i=r.depth+N,e.backgroundColor&&(o.style.backgroundColor=e.backgroundColor,e.borderColor&&(o.style.borderColor=e.borderColor))}var v;if(e.backgroundColor)v=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:o,shift:i},{type:"elem",elem:r,shift:0}]},t);else{var w=/cancel|phase/.test(n)?["svg-align"]:[];v=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:o,shift:i,wrapperClasses:w}]},t)}return/cancel/.test(n)&&(v.height=r.height,v.depth=r.depth),/cancel/.test(n)&&!s?D.makeSpan(["mord","cancel-lap"],[v],t):D.makeSpan(["mord"],[v],t)},Xc=(e,t)=>{var r=0,n=new R.MathNode(e.label.indexOf("colorbox")>-1?"mpadded":"menclose",[le(e.body,t)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*r+"pt"),n.setAttribute("height","+"+2*r+"pt"),n.setAttribute("lspace",r+"pt"),n.setAttribute("voffset",r+"pt"),e.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);n.setAttribute("style","border: "+a+"em solid "+String(e.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};F({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,o=ee(t[0],"color-token").color,i=t[1];return{type:"enclose",mode:n.mode,label:a,backgroundColor:o,body:i}},htmlBuilder:Jc,mathmlBuilder:Xc});F({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,t,r){var{parser:n,funcName:a}=e,o=ee(t[0],"color-token").color,i=ee(t[1],"color-token").color,s=t[2];return{type:"enclose",mode:n.mode,label:a,backgroundColor:i,borderColor:o,body:s}},htmlBuilder:Jc,mathmlBuilder:Xc});F({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});F({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"enclose",mode:r.mode,label:n,body:a}},htmlBuilder:Jc,mathmlBuilder:Xc});F({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Bm={};function Ut(e){for(var{type:t,names:r,props:n,handler:a,htmlBuilder:o,mathmlBuilder:i}=e,s={type:t,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},l=0;l<r.length;++l)Bm[r[l]]=s;o&&(mi[t]=o),i&&(fi[t]=i)}var Im={};function g(e,t){Im[e]=t}function Kd(e){var t=[];e.consumeSpaces();var r=e.fetch().text;for(r==="\\relax"&&(e.consume(),e.consumeSpaces(),r=e.fetch().text);r==="\\hline"||r==="\\hdashline";)e.consume(),t.push(r==="\\hdashline"),e.consumeSpaces(),r=e.fetch().text;return t}var Oi=e=>{var t=e.parser.settings;if(!t.displayMode)throw new q("{"+e.envName+"} can be used only in display mode.")};function Zc(e){if(e.indexOf("ed")===-1)return e.indexOf("*")===-1}function Wr(e,t,r){var{hskipBeforeAndAfter:n,addJot:a,cols:o,arraystretch:i,colSeparationType:s,autoTag:l,singleRow:u,emptySingleRow:p,maxNumCols:f,leqno:y}=t;if(e.gullet.beginGroup(),u||e.gullet.macros.set("\\cr","\\\\\\relax"),!i){var x=e.gullet.expandMacroAsText("\\arraystretch");if(x==null)i=1;else if(i=parseFloat(x),!i||i<0)throw new q("Invalid \\arraystretch: "+x)}e.gullet.beginGroup();var T=[],A=[T],N=[],b=[],v=l!=null?[]:void 0;function w(){l&&e.gullet.macros.set("\\@eqnsw","1",!0)}function P(){v&&(e.gullet.macros.get("\\df@tag")?(v.push(e.subparse([new st("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):v.push(!!l&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),b.push(Kd(e));;){var M=e.parseExpression(!1,u?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),M={type:"ordgroup",mode:e.mode,body:M},r&&(M={type:"styling",mode:e.mode,style:r,body:[M]}),T.push(M);var _=e.fetch().text;if(_==="&"){if(f&&T.length===f){if(u||s)throw new q("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(_==="\\end"){P(),T.length===1&&M.type==="styling"&&M.body[0].body.length===0&&(A.length>1||!p)&&A.pop(),b.length<A.length+1&&b.push([]);break}else if(_==="\\\\"){e.consume();var B=void 0;e.gullet.future().text!==" "&&(B=e.parseSizeGroup(!0)),N.push(B?B.value:null),P(),b.push(Kd(e)),T=[],A.push(T),w()}else throw new q("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:a,arraystretch:i,body:A,cols:o,rowGaps:N,hskipBeforeAndAfter:n,hLinesBeforeRow:b,colSeparationType:s,tags:v,leqno:y}}function e0(e){return e.slice(0,1)==="d"?"display":"text"}var Gt=function(t,r){var n,a,o=t.body.length,i=t.hLinesBeforeRow,s=0,l=new Array(o),u=[],p=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),f=1/r.fontMetrics().ptPerEm,y=5*f;if(t.colSeparationType&&t.colSeparationType==="small"){var x=r.havingStyle($.SCRIPT).sizeMultiplier;y=.2778*(x/r.sizeMultiplier)}var T=t.colSeparationType==="CD"?be({number:3,unit:"ex"},r):12*f,A=3*f,N=t.arraystretch*T,b=.7*N,v=.3*N,w=0;function P(Qa){for(var Ja=0;Ja<Qa.length;++Ja)Ja>0&&(w+=.25),u.push({pos:w,isDashed:Qa[Ja]})}for(P(i[0]),n=0;n<t.body.length;++n){var M=t.body[n],_=b,B=v;s<M.length&&(s=M.length);var z=new Array(M.length);for(a=0;a<M.length;++a){var W=ne(M[a],r);B<W.depth&&(B=W.depth),_<W.height&&(_=W.height),z[a]=W}var U=t.rowGaps[n],J=0;U&&(J=be(U,r),J>0&&(J+=v,B<J&&(B=J),J=0)),t.addJot&&(B+=A),z.height=_,z.depth=B,w+=_,z.pos=w,w+=B+J,l[n]=z,P(i[n+1])}var X=w/2+r.fontMetrics().axisHeight,ce=t.cols||[],me=[],rt,ht,_t=[];if(t.tags&&t.tags.some(Qa=>Qa))for(n=0;n<o;++n){var O=l[n],Q=O.pos-X,K=t.tags[n],ie=void 0;K===!0?ie=D.makeSpan(["eqn-num"],[],r):K===!1?ie=D.makeSpan([],[],r):ie=D.makeSpan([],Ee(K,r,!0),r),ie.depth=O.depth,ie.height=O.height,_t.push({type:"elem",elem:ie,shift:Q})}for(a=0,ht=0;a<s||ht<ce.length;++a,++ht){for(var oe=ce[ht]||{},Bt=!0;oe.type==="separator";){if(Bt||(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=j(r.fontMetrics().doubleRuleSep),me.push(rt)),oe.separator==="|"||oe.separator===":"){var kt=oe.separator==="|"?"solid":"dashed",It=D.makeSpan(["vertical-separator"],[],r);It.style.height=j(w),It.style.borderRightWidth=j(p),It.style.borderRightStyle=kt,It.style.margin="0 "+j(-p/2);var zt=w-X;zt&&(It.style.verticalAlign=j(-zt)),me.push(It)}else throw new q("Invalid separator type: "+oe.separator);ht++,oe=ce[ht]||{},Bt=!1}if(!(a>=s)){var St=void 0;(a>0||t.hskipBeforeAndAfter)&&(St=ae.deflt(oe.pregap,y),St!==0&&(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=j(St),me.push(rt)));var ln=[];for(n=0;n<o;++n){var Ya=l[n],Ka=Ya[a];if(Ka){var tf=Ya.pos-X;Ka.depth=Ya.depth,Ka.height=Ya.height,ln.push({type:"elem",elem:Ka,shift:tf})}}ln=D.makeVList({positionType:"individualShift",children:ln},r),ln=D.makeSpan(["col-align-"+(oe.align||"c")],[ln]),me.push(ln),(a<s-1||t.hskipBeforeAndAfter)&&(St=ae.deflt(oe.postgap,y),St!==0&&(rt=D.makeSpan(["arraycolsep"],[]),rt.style.width=j(St),me.push(rt)))}}if(l=D.makeSpan(["mtable"],me),u.length>0){for(var rf=D.makeLineSpan("hline",r,p),nf=D.makeLineSpan("hdashline",r,p),Hi=[{type:"elem",elem:l,shift:0}];u.length>0;){var s0=u.pop(),l0=s0.pos-X;s0.isDashed?Hi.push({type:"elem",elem:nf,shift:l0}):Hi.push({type:"elem",elem:rf,shift:l0})}l=D.makeVList({positionType:"individualShift",children:Hi},r)}if(_t.length===0)return D.makeSpan(["mord"],[l],r);var Ui=D.makeVList({positionType:"individualShift",children:_t},r);return Ui=D.makeSpan(["tag"],[Ui],r),D.makeFragment([l,Ui])},rv={c:"center ",l:"left ",r:"right "},Vt=function(t,r){for(var n=[],a=new R.MathNode("mtd",[],["mtr-glue"]),o=new R.MathNode("mtd",[],["mml-eqn-num"]),i=0;i<t.body.length;i++){for(var s=t.body[i],l=[],u=0;u<s.length;u++)l.push(new R.MathNode("mtd",[le(s[u],r)]));t.tags&&t.tags[i]&&(l.unshift(a),l.push(a),t.leqno?l.unshift(o):l.push(o)),n.push(new R.MathNode("mtr",l))}var p=new R.MathNode("mtable",n),f=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);p.setAttribute("rowspacing",j(f));var y="",x="";if(t.cols&&t.cols.length>0){var T=t.cols,A="",N=!1,b=0,v=T.length;T[0].type==="separator"&&(y+="top ",b=1),T[T.length-1].type==="separator"&&(y+="bottom ",v-=1);for(var w=b;w<v;w++)T[w].type==="align"?(x+=rv[T[w].align],N&&(A+="none "),N=!0):T[w].type==="separator"&&N&&(A+=T[w].separator==="|"?"solid ":"dashed ",N=!1);p.setAttribute("columnalign",x.trim()),/[sd]/.test(A)&&p.setAttribute("columnlines",A.trim())}if(t.colSeparationType==="align"){for(var P=t.cols||[],M="",_=1;_<P.length;_++)M+=_%2?"0em ":"1em ";p.setAttribute("columnspacing",M.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?p.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?p.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?p.setAttribute("columnspacing","0.5em"):p.setAttribute("columnspacing","1em");var B="",z=t.hLinesBeforeRow;y+=z[0].length>0?"left ":"",y+=z[z.length-1].length>0?"right ":"";for(var W=1;W<z.length-1;W++)B+=z[W].length===0?"none ":z[W][0]?"dashed ":"solid ";return/[sd]/.test(B)&&p.setAttribute("rowlines",B.trim()),y!==""&&(p=new R.MathNode("menclose",[p]),p.setAttribute("notation",y.trim())),t.arraystretch&&t.arraystretch<1&&(p=new R.MathNode("mstyle",[p]),p.setAttribute("scriptlevel","1")),p},zm=function(t,r){t.envName.indexOf("ed")===-1&&Oi(t);var n=[],a=t.envName.indexOf("at")>-1?"alignat":"align",o=t.envName==="split",i=Wr(t.parser,{cols:n,addJot:!0,autoTag:o?void 0:Zc(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:o?2:void 0,leqno:t.parser.settings.leqno},"display"),s,l=0,u={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var p="",f=0;f<r[0].body.length;f++){var y=ee(r[0].body[f],"textord");p+=y.text}s=Number(p),l=s*2}var x=!l;i.body.forEach(function(b){for(var v=1;v<b.length;v+=2){var w=ee(b[v],"styling"),P=ee(w.body[0],"ordgroup");P.body.unshift(u)}if(x)l<b.length&&(l=b.length);else{var M=b.length/2;if(s<M)throw new q("Too many math in a row: "+("expected "+s+", but got "+M),b[0])}});for(var T=0;T<l;++T){var A="r",N=0;T%2===1?A="l":T>0&&x&&(N=1),n[T]={type:"align",align:A,pregap:N,postgap:0}}return i.colSeparationType=x?"align":"alignat",i};Ut({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,t){var r=Li(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(i){var s=Yc(i),l=s.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new q("Unknown column alignment: "+l,i)}),o={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Wr(e.parser,o,e0(e.envName))},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],r="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(e.envName.charAt(e.envName.length-1)==="*"){var a=e.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,"lcr".indexOf(r)===-1)throw new q("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),n.cols=[{type:"align",align:r}]}}var o=Wr(e.parser,n,e0(e.envName)),i=Math.max(0,...o.body.map(s=>s.length));return o.cols=new Array(i).fill({type:"align",align:r}),t?{type:"leftright",mode:e.mode,body:[o],left:t[0],right:t[1],rightColor:void 0}:o},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var t={arraystretch:.5},r=Wr(e.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["subarray"],props:{numArgs:1},handler(e,t){var r=Li(t[0]),n=r?[t[0]]:ee(t[0],"ordgroup").body,a=n.map(function(i){var s=Yc(i),l=s.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new q("Unknown column alignment: "+l,i)});if(a.length>1)throw new q("{subarray} can contain only one column");var o={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(o=Wr(e.parser,o,"script"),o.body.length>0&&o.body[0].length>1)throw new q("{subarray} can contain only one column");return o},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Wr(e.parser,t,e0(e.envName));return{type:"leftright",mode:e.mode,body:[r],left:e.envName.indexOf("r")>-1?".":"\\{",right:e.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:zm,htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){["gather","gather*"].includes(e.envName)&&Oi(e);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Zc(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Wr(e.parser,t,"display")},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:zm,htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){Oi(e);var t={autoTag:Zc(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Wr(e.parser,t,"display")},htmlBuilder:Gt,mathmlBuilder:Vt});Ut({type:"array",names:["CD"],props:{numArgs:0},handler(e){return Oi(e),W3(e.parser)},htmlBuilder:Gt,mathmlBuilder:Vt});g("\\nonumber","\\gdef\\@eqnsw{0}");g("\\notag","\\nonumber");F({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,t){throw new q(e.funcName+" valid only within array environment")}});var Qd=Bm;F({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];if(a.type!=="ordgroup")throw new q("Invalid environment name",a);for(var o="",i=0;i<a.body.length;++i)o+=ee(a.body[i],"textord").text;if(n==="\\begin"){if(!Qd.hasOwnProperty(o))throw new q("No such environment: "+o,a);var s=Qd[o],{args:l,optArgs:u}=r.parseArguments("\\begin{"+o+"}",s),p={mode:r.mode,envName:o,parser:r},f=s.handler(p,l,u);r.expect("\\end",!1);var y=r.nextToken,x=ee(r.parseFunction(),"environment");if(x.name!==o)throw new q("Mismatch: \\begin{"+o+"} matched by \\end{"+x.name+"}",y);return f}return{type:"environment",mode:r.mode,name:o,nameGroup:a}}});var Rm=(e,t)=>{var r=e.font,n=t.withFont(r);return ne(e.body,n)},qm=(e,t)=>{var r=e.font,n=t.withFont(r);return le(e.body,n)},Jd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};F({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=gi(t[0]),o=n;return o in Jd&&(o=Jd[o]),{type:"font",mode:r.mode,font:o.slice(1),body:a}},htmlBuilder:Rm,mathmlBuilder:qm});F({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,t)=>{var{parser:r}=e,n=t[0],a=ae.isCharacterBox(n);return{type:"mclass",mode:r.mode,mclass:ji(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}],isCharacterBox:a}}});F({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,breakOnTokenText:a}=e,{mode:o}=r,i=r.parseExpression(!0,a),s="math"+n.slice(1);return{type:"font",mode:o,font:s,body:{type:"ordgroup",mode:r.mode,body:i}}},htmlBuilder:Rm,mathmlBuilder:qm});var Lm=(e,t)=>{var r=t;return e==="display"?r=r.id>=$.SCRIPT.id?r.text():$.DISPLAY:e==="text"&&r.size===$.DISPLAY.size?r=$.TEXT:e==="script"?r=$.SCRIPT:e==="scriptscript"&&(r=$.SCRIPTSCRIPT),r},t0=(e,t)=>{var r=Lm(e.size,t.style),n=r.fracNum(),a=r.fracDen(),o;o=t.havingStyle(n);var i=ne(e.numer,o,t);if(e.continued){var s=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;i.height=i.height<s?s:i.height,i.depth=i.depth<l?l:i.depth}o=t.havingStyle(a);var u=ne(e.denom,o,t),p,f,y;e.hasBarLine?(e.barSize?(f=be(e.barSize,t),p=D.makeLineSpan("frac-line",t,f)):p=D.makeLineSpan("frac-line",t),f=p.height,y=p.height):(p=null,f=0,y=t.fontMetrics().defaultRuleThickness);var x,T,A;r.size===$.DISPLAY.size||e.size==="display"?(x=t.fontMetrics().num1,f>0?T=3*y:T=7*y,A=t.fontMetrics().denom1):(f>0?(x=t.fontMetrics().num2,T=y):(x=t.fontMetrics().num3,T=3*y),A=t.fontMetrics().denom2);var N;if(p){var v=t.fontMetrics().axisHeight;x-i.depth-(v+.5*f)<T&&(x+=T-(x-i.depth-(v+.5*f))),v-.5*f-(u.height-A)<T&&(A+=T-(v-.5*f-(u.height-A)));var w=-(v-.5*f);N=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:A},{type:"elem",elem:p,shift:w},{type:"elem",elem:i,shift:-x}]},t)}else{var b=x-i.depth-(u.height-A);b<T&&(x+=.5*(T-b),A+=.5*(T-b)),N=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:u,shift:A},{type:"elem",elem:i,shift:-x}]},t)}o=t.havingStyle(r),N.height*=o.sizeMultiplier/t.sizeMultiplier,N.depth*=o.sizeMultiplier/t.sizeMultiplier;var P;r.size===$.DISPLAY.size?P=t.fontMetrics().delim1:r.size===$.SCRIPTSCRIPT.size?P=t.havingStyle($.SCRIPT).fontMetrics().delim2:P=t.fontMetrics().delim2;var M,_;return e.leftDelim==null?M=La(t,["mopen"]):M=tr.customSizedDelim(e.leftDelim,P,!0,t.havingStyle(r),e.mode,["mopen"]),e.continued?_=D.makeSpan([]):e.rightDelim==null?_=La(t,["mclose"]):_=tr.customSizedDelim(e.rightDelim,P,!0,t.havingStyle(r),e.mode,["mclose"]),D.makeSpan(["mord"].concat(o.sizingClasses(t)),[M,D.makeSpan(["mfrac"],[N]),_],t)},r0=(e,t)=>{var r=new R.MathNode("mfrac",[le(e.numer,t),le(e.denom,t)]);if(!e.hasBarLine)r.setAttribute("linethickness","0px");else if(e.barSize){var n=be(e.barSize,t);r.setAttribute("linethickness",j(n))}var a=Lm(e.size,t.style);if(a.size!==t.style.size){r=new R.MathNode("mstyle",[r]);var o=a.size===$.DISPLAY.size?"true":"false";r.setAttribute("displaystyle",o),r.setAttribute("scriptlevel","0")}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var s=new R.MathNode("mo",[new R.TextNode(e.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),i.push(s)}if(i.push(r),e.rightDelim!=null){var l=new R.MathNode("mo",[new R.TextNode(e.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),i.push(l)}return Vc(i)}return r};F({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],o=t[1],i,s=null,l=null,u="auto";switch(n){case"\\dfrac":case"\\frac":case"\\tfrac":i=!0;break;case"\\\\atopfrac":i=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":i=!1,s="(",l=")";break;case"\\\\bracefrac":i=!1,s="\\{",l="\\}";break;case"\\\\brackfrac":i=!1,s="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\dfrac":case"\\dbinom":u="display";break;case"\\tfrac":case"\\tbinom":u="text";break}return{type:"genfrac",mode:r.mode,continued:!1,numer:a,denom:o,hasBarLine:i,leftDelim:s,rightDelim:l,size:u,barSize:null}},htmlBuilder:t0,mathmlBuilder:r0});F({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],o=t[1];return{type:"genfrac",mode:r.mode,continued:!0,numer:a,denom:o,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});F({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:t,funcName:r,token:n}=e,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:n}}});var Xd=["display","text","script","scriptscript"],Zd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};F({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,t){var{parser:r}=e,n=t[4],a=t[5],o=gi(t[0]),i=o.type==="atom"&&o.family==="open"?Zd(o.text):null,s=gi(t[1]),l=s.type==="atom"&&s.family==="close"?Zd(s.text):null,u=ee(t[2],"size"),p,f=null;u.isBlank?p=!0:(f=u.value,p=f.number>0);var y="auto",x=t[3];if(x.type==="ordgroup"){if(x.body.length>0){var T=ee(x.body[0],"textord");y=Xd[Number(T.text)]}}else x=ee(x,"textord"),y=Xd[Number(x.text)];return{type:"genfrac",mode:r.mode,numer:n,denom:a,continued:!1,hasBarLine:p,barSize:f,leftDelim:i,rightDelim:l,size:y}},htmlBuilder:t0,mathmlBuilder:r0});F({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,t){var{parser:r,funcName:n,token:a}=e;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ee(t[0],"size").value,token:a}}});F({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0],o=_4(ee(t[1],"infix").size),i=t[2],s=o.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:i,continued:!1,hasBarLine:s,barSize:o,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:t0,mathmlBuilder:r0});var jm=(e,t)=>{var r=t.style,n,a;e.type==="supsub"?(n=e.sup?ne(e.sup,t.havingStyle(r.sup()),t):ne(e.sub,t.havingStyle(r.sub()),t),a=ee(e.base,"horizBrace")):a=ee(e,"horizBrace");var o=ne(a.base,t.havingBaseStyle($.DISPLAY)),i=lr.svgSpan(a,t),s;if(a.isOver?(s=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:i}]},t),s.children[0].children[0].children[1].classes.push("svg-align")):(s=D.makeVList({positionType:"bottom",positionData:o.depth+.1+i.height,children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:o}]},t),s.children[0].children[0].children[0].classes.push("svg-align")),n){var l=D.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t);a.isOver?s=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]},t):s=D.makeVList({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]},t)}return D.makeSpan(["mord",a.isOver?"mover":"munder"],[s],t)},nv=(e,t)=>{var r=lr.mathMLnode(e.label);return new R.MathNode(e.isOver?"mover":"munder",[le(e.base,t),r])};F({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,t){var{parser:r,funcName:n}=e;return{type:"horizBrace",mode:r.mode,label:n,isOver:/^\\over/.test(n),base:t[0]}},htmlBuilder:jm,mathmlBuilder:nv});F({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[1],a=ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:Ce(n)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(e,t)=>{var r=Ee(e.body,t,!1);return D.makeAnchor(e.href,[],r,t)},mathmlBuilder:(e,t)=>{var r=Rr(e.body,t);return r instanceof at||(r=new at("mrow",[r])),r.setAttribute("href",e.href),r}});F({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:n}))return r.formatUnsupportedCmd("\\url");for(var a=[],o=0;o<n.length;o++){var i=n[o];i==="~"&&(i="\\textasciitilde"),a.push({type:"textord",mode:"text",text:i})}var s={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:n,body:Ce(s)}}});F({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,t){var{parser:r}=e;return{type:"hbox",mode:r.mode,body:Ce(t[0])}},htmlBuilder(e,t){var r=Ee(e.body,t,!1);return D.makeFragment(r)},mathmlBuilder(e,t){return new R.MathNode("mrow",tt(e.body,t))}});F({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n,token:a}=e,o=ee(t[0],"raw").string,i=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var s,l={};switch(n){case"\\htmlClass":l.class=o,s={command:"\\htmlClass",class:o};break;case"\\htmlId":l.id=o,s={command:"\\htmlId",id:o};break;case"\\htmlStyle":l.style=o,s={command:"\\htmlStyle",style:o};break;case"\\htmlData":{for(var u=o.split(","),p=0;p<u.length;p++){var f=u[p],y=f.indexOf("=");if(y<0)throw new q("\\htmlData key/value '"+f+"' missing equals sign");var x=f.slice(0,y),T=f.slice(y+1);l["data-"+x.trim()]=T}s={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(s)?{type:"html",mode:r.mode,attributes:l,body:Ce(i)}:r.formatUnsupportedCmd(n)},htmlBuilder:(e,t)=>{var r=Ee(e.body,t,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var a=D.makeSpan(n,r,t);for(var o in e.attributes)o!=="class"&&e.attributes.hasOwnProperty(o)&&a.setAttribute(o,e.attributes[o]);return a},mathmlBuilder:(e,t)=>Rr(e.body,t)});F({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"htmlmathml",mode:r.mode,html:Ce(t[0]),mathml:Ce(t[1])}},htmlBuilder:(e,t)=>{var r=Ee(e.html,t,!1);return D.makeFragment(r)},mathmlBuilder:(e,t)=>Rr(e.mathml,t)});var Ds=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new q("Invalid size: '"+t+"' in \\includegraphics");var n={number:+(r[1]+r[2]),unit:r[3]};if(!am(n))throw new q("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};F({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,t,r)=>{var{parser:n}=e,a={number:0,unit:"em"},o={number:.9,unit:"em"},i={number:0,unit:"em"},s="";if(r[0])for(var l=ee(r[0],"raw").string,u=l.split(","),p=0;p<u.length;p++){var f=u[p].split("=");if(f.length===2){var y=f[1].trim();switch(f[0].trim()){case"alt":s=y;break;case"width":a=Ds(y);break;case"height":o=Ds(y);break;case"totalheight":i=Ds(y);break;default:throw new q("Invalid key: '"+f[0]+"' in \\includegraphics.")}}}var x=ee(t[0],"url").url;return s===""&&(s=x,s=s.replace(/^.*[\\/]/,""),s=s.substring(0,s.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:x})?{type:"includegraphics",mode:n.mode,alt:s,width:a,height:o,totalheight:i,src:x}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,t)=>{var r=be(e.height,t),n=0;e.totalheight.number>0&&(n=be(e.totalheight,t)-r);var a=0;e.width.number>0&&(a=be(e.width,t));var o={height:j(r+n)};a>0&&(o.width=j(a)),n>0&&(o.verticalAlign=j(-n));var i=new n3(e.src,e.alt,o);return i.height=r,i.depth=n,i},mathmlBuilder:(e,t)=>{var r=new R.MathNode("mglyph",[]);r.setAttribute("alt",e.alt);var n=be(e.height,t),a=0;if(e.totalheight.number>0&&(a=be(e.totalheight,t)-n,r.setAttribute("valign",j(-a))),r.setAttribute("height",j(n+a)),e.width.number>0){var o=be(e.width,t);r.setAttribute("width",j(o))}return r.setAttribute("src",e.src),r}});F({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=ee(t[0],"size");if(r.settings.strict){var o=n[1]==="m",i=a.value.unit==="mu";o?(i||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):i&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(e,t){return D.makeGlue(e.dimension,t)},mathmlBuilder(e,t){var r=be(e.dimension,t);return new R.SpaceNode(r)}});F({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:a}},htmlBuilder:(e,t)=>{var r;e.alignment==="clap"?(r=D.makeSpan([],[ne(e.body,t)]),r=D.makeSpan(["inner"],[r],t)):r=D.makeSpan(["inner"],[ne(e.body,t)]);var n=D.makeSpan(["fix"],[]),a=D.makeSpan([e.alignment],[r,n],t),o=D.makeSpan(["strut"]);return o.style.height=j(a.height+a.depth),a.depth&&(o.style.verticalAlign=j(-a.depth)),a.children.unshift(o),a=D.makeSpan(["thinbox"],[a],t),D.makeSpan(["mord","vbox"],[a],t)},mathmlBuilder:(e,t)=>{var r=new R.MathNode("mpadded",[le(e.body,t)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}});F({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){var{funcName:r,parser:n}=e,a=n.mode;n.switchMode("math");var o=r==="\\("?"\\)":"$",i=n.parseExpression(!1,o);return n.expect(o),n.switchMode(a),{type:"styling",mode:n.mode,style:"text",body:i}}});F({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,t){throw new q("Mismatched "+e.funcName)}});var eu=(e,t)=>{switch(t.style.size){case $.DISPLAY.size:return e.display;case $.TEXT.size:return e.text;case $.SCRIPT.size:return e.script;case $.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};F({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,t)=>{var{parser:r}=e;return{type:"mathchoice",mode:r.mode,display:Ce(t[0]),text:Ce(t[1]),script:Ce(t[2]),scriptscript:Ce(t[3])}},htmlBuilder:(e,t)=>{var r=eu(e,t),n=Ee(r,t,!1);return D.makeFragment(n)},mathmlBuilder:(e,t)=>{var r=eu(e,t);return Rr(r,t)}});var Fm=(e,t,r,n,a,o,i)=>{e=D.makeSpan([],[e]);var s=r&&ae.isCharacterBox(r),l,u;if(t){var p=ne(t,n.havingStyle(a.sup()),n);u={elem:p,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-p.depth)}}if(r){var f=ne(r,n.havingStyle(a.sub()),n);l={elem:f,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-f.height)}}var y;if(u&&l){var x=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+e.depth+i;y=D.makeVList({positionType:"bottom",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:j(-o)},{type:"kern",size:l.kern},{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:j(o)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else if(l){var T=e.height-i;y=D.makeVList({positionType:"top",positionData:T,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:j(-o)},{type:"kern",size:l.kern},{type:"elem",elem:e}]},n)}else if(u){var A=e.depth+i;y=D.makeVList({positionType:"bottom",positionData:A,children:[{type:"elem",elem:e},{type:"kern",size:u.kern},{type:"elem",elem:u.elem,marginLeft:j(o)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else return e;var N=[y];if(l&&o!==0&&!s){var b=D.makeSpan(["mspace"],[],n);b.style.marginRight=j(o),N.unshift(b)}return D.makeSpan(["mop","op-limits"],N,n)},Om=["\\smallint"],$n=(e,t)=>{var r,n,a=!1,o;e.type==="supsub"?(r=e.sup,n=e.sub,o=ee(e.base,"op"),a=!0):o=ee(e,"op");var i=t.style,s=!1;i.size===$.DISPLAY.size&&o.symbol&&!Om.includes(o.name)&&(s=!0);var l;if(o.symbol){var u=s?"Size2-Regular":"Size1-Regular",p="";if((o.name==="\\oiint"||o.name==="\\oiiint")&&(p=o.name.slice(1),o.name=p==="oiint"?"\\iint":"\\iiint"),l=D.makeSymbol(o.name,u,"math",t,["mop","op-symbol",s?"large-op":"small-op"]),p.length>0){var f=l.italic,y=D.staticSvg(p+"Size"+(s?"2":"1"),t);l=D.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:y,shift:s?.08:0}]},t),o.name="\\"+p,l.classes.unshift("mop"),l.italic=f}}else if(o.body){var x=Ee(o.body,t,!0);x.length===1&&x[0]instanceof wt?(l=x[0],l.classes[0]="mop"):l=D.makeSpan(["mop"],x,t)}else{for(var T=[],A=1;A<o.name.length;A++)T.push(D.mathsym(o.name[A],o.mode,t));l=D.makeSpan(["mop"],T,t)}var N=0,b=0;return(l instanceof wt||o.name==="\\oiint"||o.name==="\\oiiint")&&!o.suppressBaseShift&&(N=(l.height-l.depth)/2-t.fontMetrics().axisHeight,b=l.italic),a?Fm(l,r,n,t,i,b,N):(N&&(l.style.position="relative",l.style.top=j(N)),l)},$a=(e,t)=>{var r;if(e.symbol)r=new at("mo",[xt(e.name,e.mode)]),Om.includes(e.name)&&r.setAttribute("largeop","false");else if(e.body)r=new at("mo",tt(e.body,t));else{r=new at("mi",[new Ot(e.name.slice(1))]);var n=new at("mo",[xt("⁡","text")]);e.parentIsSupSub?r=new at("mrow",[r,n]):r=fm([r,n])}return r},av={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};F({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=n;return a.length===1&&(a=av[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ce(n)}},htmlBuilder:$n,mathmlBuilder:$a});var ov={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};F({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:t,funcName:r}=e;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:$n,mathmlBuilder:$a});F({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:t,funcName:r}=e,n=r;return n.length===1&&(n=ov[n]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:$n,mathmlBuilder:$a});var Wm=(e,t)=>{var r,n,a=!1,o;e.type==="supsub"?(r=e.sup,n=e.sub,o=ee(e.base,"operatorname"),a=!0):o=ee(e,"operatorname");var i;if(o.body.length>0){for(var s=o.body.map(f=>{var y=f.text;return typeof y=="string"?{type:"textord",mode:f.mode,text:y}:f}),l=Ee(s,t.withFont("mathrm"),!0),u=0;u<l.length;u++){var p=l[u];p instanceof wt&&(p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}i=D.makeSpan(["mop"],l,t)}else i=D.makeSpan(["mop"],[],t);return a?Fm(i,r,n,t,t.style,0,0):i},iv=(e,t)=>{for(var r=tt(e.body,t.withFont("mathrm")),n=!0,a=0;a<r.length;a++){var o=r[a];if(!(o instanceof R.SpaceNode))if(o instanceof R.MathNode)switch(o.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var i=o.children[0];o.children.length===1&&i instanceof R.TextNode?i.text=i.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var s=r.map(p=>p.toText()).join("");r=[new R.TextNode(s)]}var l=new R.MathNode("mi",r);l.setAttribute("mathvariant","normal");var u=new R.MathNode("mo",[xt("⁡","text")]);return e.parentIsSupSub?new R.MathNode("mrow",[l,u]):R.newDocumentFragment([l,u])};F({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,t)=>{var{parser:r,funcName:n}=e,a=t[0];return{type:"operatorname",mode:r.mode,body:Ce(a),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Wm,mathmlBuilder:iv});g("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");sn({type:"ordgroup",htmlBuilder(e,t){return e.semisimple?D.makeFragment(Ee(e.body,t,!1)):D.makeSpan(["mord"],Ee(e.body,t,!0),t)},mathmlBuilder(e,t){return Rr(e.body,t,!0)}});F({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,t){var{parser:r}=e,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle()),n=D.makeLineSpan("overline-line",t),a=t.fontMetrics().defaultRuleThickness,o=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:n},{type:"kern",size:a}]},t);return D.makeSpan(["mord","overline"],[o],t)},mathmlBuilder(e,t){var r=new R.MathNode("mo",[new R.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new R.MathNode("mover",[le(e.body,t),r]);return n.setAttribute("accent","true"),n}});F({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"phantom",mode:r.mode,body:Ce(n)}},htmlBuilder:(e,t)=>{var r=Ee(e.body,t.withPhantom(),!1);return D.makeFragment(r)},mathmlBuilder:(e,t)=>{var r=tt(e.body,t);return new R.MathNode("mphantom",r)}});F({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"hphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=D.makeSpan([],[ne(e.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var n=0;n<r.children.length;n++)r.children[n].height=0,r.children[n].depth=0;return r=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t),D.makeSpan(["mord"],[r],t)},mathmlBuilder:(e,t)=>{var r=tt(Ce(e.body),t),n=new R.MathNode("mphantom",r),a=new R.MathNode("mpadded",[n]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});F({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,t)=>{var{parser:r}=e,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:(e,t)=>{var r=D.makeSpan(["inner"],[ne(e.body,t.withPhantom())]),n=D.makeSpan(["fix"],[]);return D.makeSpan(["mord","rlap"],[r,n],t)},mathmlBuilder:(e,t)=>{var r=tt(Ce(e.body),t),n=new R.MathNode("mphantom",r),a=new R.MathNode("mpadded",[n]);return a.setAttribute("width","0px"),a}});F({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,t){var{parser:r}=e,n=ee(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:a}},htmlBuilder(e,t){var r=ne(e.body,t),n=be(e.dy,t);return D.makeVList({positionType:"shift",positionData:-n,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){var r=new R.MathNode("mpadded",[le(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}});F({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:t}=e;return{type:"internal",mode:t.mode}}});F({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,t,r){var{parser:n}=e,a=r[0],o=ee(t[0],"size"),i=ee(t[1],"size");return{type:"rule",mode:n.mode,shift:a&&ee(a,"size").value,width:o.value,height:i.value}},htmlBuilder(e,t){var r=D.makeSpan(["mord","rule"],[],t),n=be(e.width,t),a=be(e.height,t),o=e.shift?be(e.shift,t):0;return r.style.borderRightWidth=j(n),r.style.borderTopWidth=j(a),r.style.bottom=j(o),r.width=n,r.height=a+o,r.depth=-o,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(e,t){var r=be(e.width,t),n=be(e.height,t),a=e.shift?be(e.shift,t):0,o=t.color&&t.getColor()||"black",i=new R.MathNode("mspace");i.setAttribute("mathbackground",o),i.setAttribute("width",j(r)),i.setAttribute("height",j(n));var s=new R.MathNode("mpadded",[i]);return a>=0?s.setAttribute("height",j(a)):(s.setAttribute("height",j(a)),s.setAttribute("depth",j(-a))),s.setAttribute("voffset",j(a)),s}});function Hm(e,t,r){for(var n=Ee(e,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,o=0;o<n.length;o++){var i=n[o].classes.indexOf("sizing");i<0?Array.prototype.push.apply(n[o].classes,t.sizingClasses(r)):n[o].classes[i+1]==="reset-size"+t.size&&(n[o].classes[i+1]="reset-size"+r.size),n[o].height*=a,n[o].depth*=a}return D.makeFragment(n)}var tu=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],sv=(e,t)=>{var r=t.havingSize(e.size);return Hm(e.body,r,t)};F({type:"sizing",names:tu,props:{numArgs:0,allowedInText:!0},handler:(e,t)=>{var{breakOnTokenText:r,funcName:n,parser:a}=e,o=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:tu.indexOf(n)+1,body:o}},htmlBuilder:sv,mathmlBuilder:(e,t)=>{var r=t.havingSize(e.size),n=tt(e.body,r),a=new R.MathNode("mstyle",n);return a.setAttribute("mathsize",j(r.sizeMultiplier)),a}});F({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,t,r)=>{var{parser:n}=e,a=!1,o=!1,i=r[0]&&ee(r[0],"ordgroup");if(i)for(var s="",l=0;l<i.body.length;++l){var u=i.body[l];if(s=u.text,s==="t")a=!0;else if(s==="b")o=!0;else{a=!1,o=!1;break}}else a=!0,o=!0;var p=t[0];return{type:"smash",mode:n.mode,body:p,smashHeight:a,smashDepth:o}},htmlBuilder:(e,t)=>{var r=D.makeSpan([],[ne(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0,r.children))for(var n=0;n<r.children.length;n++)r.children[n].height=0;if(e.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var o=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t);return D.makeSpan(["mord"],[o],t)},mathmlBuilder:(e,t)=>{var r=new R.MathNode("mpadded",[le(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}});F({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,t,r){var{parser:n}=e,a=r[0],o=t[0];return{type:"sqrt",mode:n.mode,body:o,index:a}},htmlBuilder(e,t){var r=ne(e.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=D.wrapFragment(r,t);var n=t.fontMetrics(),a=n.defaultRuleThickness,o=a;t.style.id<$.TEXT.id&&(o=t.fontMetrics().xHeight);var i=a+o/4,s=r.height+r.depth+i+a,{span:l,ruleWidth:u,advanceWidth:p}=tr.sqrtImage(s,t),f=l.height-u;f>r.height+r.depth+i&&(i=(i+f-r.height-r.depth)/2);var y=l.height-r.height-i-u;r.style.paddingLeft=j(p);var x=D.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+y)},{type:"elem",elem:l},{type:"kern",size:u}]},t);if(e.index){var T=t.havingStyle($.SCRIPTSCRIPT),A=ne(e.index,T,t),N=.6*(x.height-x.depth),b=D.makeVList({positionType:"shift",positionData:-N,children:[{type:"elem",elem:A}]},t),v=D.makeSpan(["root"],[b]);return D.makeSpan(["mord","sqrt"],[v,x],t)}else return D.makeSpan(["mord","sqrt"],[x],t)},mathmlBuilder(e,t){var{body:r,index:n}=e;return n?new R.MathNode("mroot",[le(r,t),le(n,t)]):new R.MathNode("msqrt",[le(r,t)])}});var ru={display:$.DISPLAY,text:$.TEXT,script:$.SCRIPT,scriptscript:$.SCRIPTSCRIPT};F({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,t){var{breakOnTokenText:r,funcName:n,parser:a}=e,o=a.parseExpression(!0,r),i=n.slice(1,n.length-5);return{type:"styling",mode:a.mode,style:i,body:o}},htmlBuilder(e,t){var r=ru[e.style],n=t.havingStyle(r).withFont("");return Hm(e.body,n,t)},mathmlBuilder(e,t){var r=ru[e.style],n=t.havingStyle(r),a=tt(e.body,n),o=new R.MathNode("mstyle",a),i={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},s=i[e.style];return o.setAttribute("scriptlevel",s[0]),o.setAttribute("displaystyle",s[1]),o}});var lv=function(t,r){var n=t.base;if(n)if(n.type==="op"){var a=n.limits&&(r.style.size===$.DISPLAY.size||n.alwaysHandleSupSub);return a?$n:null}else if(n.type==="operatorname"){var o=n.alwaysHandleSupSub&&(r.style.size===$.DISPLAY.size||n.limits);return o?Wm:null}else{if(n.type==="accent")return ae.isCharacterBox(n.base)?Kc:null;if(n.type==="horizBrace"){var i=!t.sub;return i===n.isOver?jm:null}else return null}else return null};sn({type:"supsub",htmlBuilder(e,t){var r=lv(e,t);if(r)return r(e,t);var{base:n,sup:a,sub:o}=e,i=ne(n,t),s,l,u=t.fontMetrics(),p=0,f=0,y=n&&ae.isCharacterBox(n);if(a){var x=t.havingStyle(t.style.sup());s=ne(a,x,t),y||(p=i.height-x.fontMetrics().supDrop*x.sizeMultiplier/t.sizeMultiplier)}if(o){var T=t.havingStyle(t.style.sub());l=ne(o,T,t),y||(f=i.depth+T.fontMetrics().subDrop*T.sizeMultiplier/t.sizeMultiplier)}var A;t.style===$.DISPLAY?A=u.sup1:t.style.cramped?A=u.sup3:A=u.sup2;var N=t.sizeMultiplier,b=j(.5/u.ptPerEm/N),v=null;if(l){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(i instanceof wt||w)&&(v=j(-i.italic))}var P;if(s&&l){p=Math.max(p,A,s.depth+.25*u.xHeight),f=Math.max(f,u.sub2);var M=u.defaultRuleThickness,_=4*M;if(p-s.depth-(l.height-f)<_){f=_-(p-s.depth)+l.height;var B=.8*u.xHeight-(p-s.depth);B>0&&(p+=B,f-=B)}var z=[{type:"elem",elem:l,shift:f,marginRight:b,marginLeft:v},{type:"elem",elem:s,shift:-p,marginRight:b}];P=D.makeVList({positionType:"individualShift",children:z},t)}else if(l){f=Math.max(f,u.sub1,l.height-.8*u.xHeight);var W=[{type:"elem",elem:l,marginLeft:v,marginRight:b}];P=D.makeVList({positionType:"shift",positionData:f,children:W},t)}else if(s)p=Math.max(p,A,s.depth+.25*u.xHeight),P=D.makeVList({positionType:"shift",positionData:-p,children:[{type:"elem",elem:s,marginRight:b}]},t);else throw new Error("supsub must have either sup or sub.");var U=Rl(i,"right")||"mord";return D.makeSpan([U],[i,D.makeSpan(["msupsub"],[P])],t)},mathmlBuilder(e,t){var r=!1,n,a;e.base&&e.base.type==="horizBrace"&&(a=!!e.sup,a===e.base.isOver&&(r=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var o=[le(e.base,t)];e.sub&&o.push(le(e.sub,t)),e.sup&&o.push(le(e.sup,t));var i;if(r)i=n?"mover":"munder";else if(e.sub)if(e.sup){var u=e.base;u&&u.type==="op"&&u.limits&&t.style===$.DISPLAY||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(t.style===$.DISPLAY||u.limits)?i="munderover":i="msubsup"}else{var l=e.base;l&&l.type==="op"&&l.limits&&(t.style===$.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||t.style===$.DISPLAY)?i="munder":i="msub"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(t.style===$.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||t.style===$.DISPLAY)?i="mover":i="msup"}return new R.MathNode(i,o)}});sn({type:"atom",htmlBuilder(e,t){return D.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder(e,t){var r=new R.MathNode("mo",[xt(e.text,e.mode)]);if(e.family==="bin"){var n=$c(e,t);n==="bold-italic"&&r.setAttribute("mathvariant",n)}else e.family==="punct"?r.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&r.setAttribute("stretchy","false");return r}});var Um={mi:"italic",mn:"normal",mtext:"normal"};sn({type:"mathord",htmlBuilder(e,t){return D.makeOrd(e,t,"mathord")},mathmlBuilder(e,t){var r=new R.MathNode("mi",[xt(e.text,e.mode,t)]),n=$c(e,t)||"italic";return n!==Um[r.type]&&r.setAttribute("mathvariant",n),r}});sn({type:"textord",htmlBuilder(e,t){return D.makeOrd(e,t,"textord")},mathmlBuilder(e,t){var r=xt(e.text,e.mode,t),n=$c(e,t)||"normal",a;return e.mode==="text"?a=new R.MathNode("mtext",[r]):/[0-9]/.test(e.text)?a=new R.MathNode("mn",[r]):e.text==="\\prime"?a=new R.MathNode("mo",[r]):a=new R.MathNode("mi",[r]),n!==Um[a.type]&&a.setAttribute("mathvariant",n),a}});var Ms={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Es={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};sn({type:"spacing",htmlBuilder(e,t){if(Es.hasOwnProperty(e.text)){var r=Es[e.text].className||"";if(e.mode==="text"){var n=D.makeOrd(e,t,"textord");return n.classes.push(r),n}else return D.makeSpan(["mspace",r],[D.mathsym(e.text,e.mode,t)],t)}else{if(Ms.hasOwnProperty(e.text))return D.makeSpan(["mspace",Ms[e.text]],[],t);throw new q('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,t){var r;if(Es.hasOwnProperty(e.text))r=new R.MathNode("mtext",[new R.TextNode(" ")]);else{if(Ms.hasOwnProperty(e.text))return new R.MathNode("mspace");throw new q('Unknown type of space "'+e.text+'"')}return r}});var nu=()=>{var e=new R.MathNode("mtd",[]);return e.setAttribute("width","50%"),e};sn({type:"tag",mathmlBuilder(e,t){var r=new R.MathNode("mtable",[new R.MathNode("mtr",[nu(),new R.MathNode("mtd",[Rr(e.body,t)]),nu(),new R.MathNode("mtd",[Rr(e.tag,t)])])]);return r.setAttribute("width","100%"),r}});var au={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},ou={"\\textbf":"textbf","\\textmd":"textmd"},cv={"\\textit":"textit","\\textup":"textup"},iu=(e,t)=>{var r=e.font;if(r){if(au[r])return t.withTextFontFamily(au[r]);if(ou[r])return t.withTextFontWeight(ou[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(cv[r])};F({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,t){var{parser:r,funcName:n}=e,a=t[0];return{type:"text",mode:r.mode,body:Ce(a),font:n}},htmlBuilder(e,t){var r=iu(e,t),n=Ee(e.body,r,!0);return D.makeSpan(["mord","text"],n,r)},mathmlBuilder(e,t){var r=iu(e,t);return Rr(e.body,r)}});F({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,t){var{parser:r}=e;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=D.makeLineSpan("underline-line",t),a=t.fontMetrics().defaultRuleThickness,o=D.makeVList({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:n},{type:"kern",size:3*a},{type:"elem",elem:r}]},t);return D.makeSpan(["mord","underline"],[o],t)},mathmlBuilder(e,t){var r=new R.MathNode("mo",[new R.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new R.MathNode("munder",[le(e.body,t),r]);return n.setAttribute("accentunder","true"),n}});F({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,t){var{parser:r}=e;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(e,t){var r=ne(e.body,t),n=t.fontMetrics().axisHeight,a=.5*(r.height-n-(r.depth+n));return D.makeVList({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]},t)},mathmlBuilder(e,t){return new R.MathNode("mpadded",[le(e.body,t)],["vcenter"])}});F({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,t,r){throw new q("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,t){for(var r=su(e),n=[],a=t.havingStyle(t.style.text()),o=0;o<r.length;o++){var i=r[o];i==="~"&&(i="\\textasciitilde"),n.push(D.makeSymbol(i,"Typewriter-Regular",e.mode,a,["mord","texttt"]))}return D.makeSpan(["mord","text"].concat(a.sizingClasses(t)),D.tryCombineChars(n),a)},mathmlBuilder(e,t){var r=new R.TextNode(su(e)),n=new R.MathNode("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var su=e=>e.body.replace(/ /g,e.star?"␣":" "),kr=pm,Gm=`[ \r
	]`,dv="\\\\[a-zA-Z@]+",uv="\\\\[^\uD800-\uDFFF]",hv="("+dv+")"+Gm+"*",pv=`\\\\(
|[ \r	]+
?)[ \r	]*`,Fl="[̀-ͯ]",mv=new RegExp(Fl+"+$"),fv="("+Gm+"+)|"+(pv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Fl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Fl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+hv)+("|"+uv+")");class lu{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(fv,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new st("EOF",new Ke(this,r,r));var n=this.tokenRegex.exec(t);if(n===null||n.index!==r)throw new q("Unexpected character: '"+t[r]+"'",new st(t[r],new Ke(this,r,r+1)));var a=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[a]===14){var o=t.indexOf(`
`,this.tokenRegex.lastIndex);return o===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=o+1,this.lex()}return new st(a,new Ke(this,r,this.tokenRegex.lastIndex))}}class gv{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new q("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,n){if(n===void 0&&(n=!1),n){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var o=this.undefStack[this.undefStack.length-1];o&&!o.hasOwnProperty(t)&&(o[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var yv=Im;g("\\noexpand",function(e){var t=e.popToken();return e.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});g("\\expandafter",function(e){var t=e.popToken();return e.expandOnce(!0),{tokens:[t],numArgs:0}});g("\\@firstoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[0],numArgs:0}});g("\\@secondoftwo",function(e){var t=e.consumeArgs(2);return{tokens:t[1],numArgs:0}});g("\\@ifnextchar",function(e){var t=e.consumeArgs(3);e.consumeSpaces();var r=e.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});g("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");g("\\TextOrMath",function(e){var t=e.consumeArgs(2);return e.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var cu={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};g("\\char",function(e){var t=e.popToken(),r,n="";if(t.text==="'")r=8,t=e.popToken();else if(t.text==='"')r=16,t=e.popToken();else if(t.text==="`")if(t=e.popToken(),t.text[0]==="\\")n=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new q("\\char` missing argument");n=t.text.charCodeAt(0)}else r=10;if(r){if(n=cu[t.text],n==null||n>=r)throw new q("Invalid base-"+r+" digit "+t.text);for(var a;(a=cu[e.future().text])!=null&&a<r;)n*=r,n+=a,e.popToken()}return"\\@char{"+n+"}"});var n0=(e,t,r,n)=>{var a=e.consumeArg().tokens;if(a.length!==1)throw new q("\\newcommand's first argument must be a macro name");var o=a[0].text,i=e.isDefined(o);if(i&&!t)throw new q("\\newcommand{"+o+"} attempting to redefine "+(o+"; use \\renewcommand"));if(!i&&!r)throw new q("\\renewcommand{"+o+"} when command "+o+" does not yet exist; use \\newcommand");var s=0;if(a=e.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var l="",u=e.expandNextToken();u.text!=="]"&&u.text!=="EOF";)l+=u.text,u=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new q("Invalid number of arguments: "+l);s=parseInt(l),a=e.consumeArg().tokens}return i&&n||e.macros.set(o,{tokens:a,numArgs:s}),""};g("\\newcommand",e=>n0(e,!1,!0,!1));g("\\renewcommand",e=>n0(e,!0,!1,!1));g("\\providecommand",e=>n0(e,!0,!0,!0));g("\\message",e=>{var t=e.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});g("\\errmessage",e=>{var t=e.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});g("\\show",e=>{var t=e.popToken(),r=t.text;return console.log(t,e.macros.get(r),kr[r],ue.math[r],ue.text[r]),""});g("\\bgroup","{");g("\\egroup","}");g("~","\\nobreakspace");g("\\lq","`");g("\\rq","'");g("\\aa","\\r a");g("\\AA","\\r A");g("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");g("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");g("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");g("ℬ","\\mathscr{B}");g("ℰ","\\mathscr{E}");g("ℱ","\\mathscr{F}");g("ℋ","\\mathscr{H}");g("ℐ","\\mathscr{I}");g("ℒ","\\mathscr{L}");g("ℳ","\\mathscr{M}");g("ℛ","\\mathscr{R}");g("ℭ","\\mathfrak{C}");g("ℌ","\\mathfrak{H}");g("ℨ","\\mathfrak{Z}");g("\\Bbbk","\\Bbb{k}");g("·","\\cdotp");g("\\llap","\\mathllap{\\textrm{#1}}");g("\\rlap","\\mathrlap{\\textrm{#1}}");g("\\clap","\\mathclap{\\textrm{#1}}");g("\\mathstrut","\\vphantom{(}");g("\\underbar","\\underline{\\text{#1}}");g("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');g("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");g("\\ne","\\neq");g("≠","\\neq");g("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");g("∉","\\notin");g("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");g("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");g("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");g("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");g("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");g("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");g("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");g("⟂","\\perp");g("‼","\\mathclose{!\\mkern-0.8mu!}");g("∌","\\notni");g("⌜","\\ulcorner");g("⌝","\\urcorner");g("⌞","\\llcorner");g("⌟","\\lrcorner");g("©","\\copyright");g("®","\\textregistered");g("️","\\textregistered");g("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');g("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');g("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');g("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');g("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");g("⋮","\\vdots");g("\\varGamma","\\mathit{\\Gamma}");g("\\varDelta","\\mathit{\\Delta}");g("\\varTheta","\\mathit{\\Theta}");g("\\varLambda","\\mathit{\\Lambda}");g("\\varXi","\\mathit{\\Xi}");g("\\varPi","\\mathit{\\Pi}");g("\\varSigma","\\mathit{\\Sigma}");g("\\varUpsilon","\\mathit{\\Upsilon}");g("\\varPhi","\\mathit{\\Phi}");g("\\varPsi","\\mathit{\\Psi}");g("\\varOmega","\\mathit{\\Omega}");g("\\substack","\\begin{subarray}{c}#1\\end{subarray}");g("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");g("\\boxed","\\fbox{$\\displaystyle{#1}$}");g("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");g("\\implies","\\DOTSB\\;\\Longrightarrow\\;");g("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");g("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");g("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var du={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};g("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in du?t=du[r]:(r.slice(0,4)==="\\not"||r in ue.math&&["bin","rel"].includes(ue.math[r].group))&&(t="\\dotsb"),t});var a0={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};g("\\dotso",function(e){var t=e.future().text;return t in a0?"\\ldots\\,":"\\ldots"});g("\\dotsc",function(e){var t=e.future().text;return t in a0&&t!==","?"\\ldots\\,":"\\ldots"});g("\\cdots",function(e){var t=e.future().text;return t in a0?"\\@cdots\\,":"\\@cdots"});g("\\dotsb","\\cdots");g("\\dotsm","\\cdots");g("\\dotsi","\\!\\cdots");g("\\dotsx","\\ldots\\,");g("\\DOTSI","\\relax");g("\\DOTSB","\\relax");g("\\DOTSX","\\relax");g("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");g("\\,","\\tmspace+{3mu}{.1667em}");g("\\thinspace","\\,");g("\\>","\\mskip{4mu}");g("\\:","\\tmspace+{4mu}{.2222em}");g("\\medspace","\\:");g("\\;","\\tmspace+{5mu}{.2777em}");g("\\thickspace","\\;");g("\\!","\\tmspace-{3mu}{.1667em}");g("\\negthinspace","\\!");g("\\negmedspace","\\tmspace-{4mu}{.2222em}");g("\\negthickspace","\\tmspace-{5mu}{.277em}");g("\\enspace","\\kern.5em ");g("\\enskip","\\hskip.5em\\relax");g("\\quad","\\hskip1em\\relax");g("\\qquad","\\hskip2em\\relax");g("\\tag","\\@ifstar\\tag@literal\\tag@paren");g("\\tag@paren","\\tag@literal{({#1})}");g("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new q("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});g("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");g("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");g("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");g("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");g("\\newline","\\\\\\relax");g("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Vm=j(Ft["Main-Regular"][84][1]-.7*Ft["Main-Regular"][65][1]);g("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Vm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");g("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Vm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");g("\\hspace","\\@ifstar\\@hspacer\\@hspace");g("\\@hspace","\\hskip #1\\relax");g("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");g("\\ordinarycolon",":");g("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");g("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');g("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');g("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');g("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');g("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');g("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');g("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');g("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');g("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');g("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');g("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');g("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');g("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');g("∷","\\dblcolon");g("∹","\\eqcolon");g("≔","\\coloneqq");g("≕","\\eqqcolon");g("⩴","\\Coloneqq");g("\\ratio","\\vcentcolon");g("\\coloncolon","\\dblcolon");g("\\colonequals","\\coloneqq");g("\\coloncolonequals","\\Coloneqq");g("\\equalscolon","\\eqqcolon");g("\\equalscoloncolon","\\Eqqcolon");g("\\colonminus","\\coloneq");g("\\coloncolonminus","\\Coloneq");g("\\minuscolon","\\eqcolon");g("\\minuscoloncolon","\\Eqcolon");g("\\coloncolonapprox","\\Colonapprox");g("\\coloncolonsim","\\Colonsim");g("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");g("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");g("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");g("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");g("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");g("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");g("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");g("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");g("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");g("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");g("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");g("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");g("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");g("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");g("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");g("\\nleqq","\\html@mathml{\\@nleqq}{≰}");g("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");g("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");g("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");g("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");g("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");g("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");g("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");g("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");g("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");g("\\imath","\\html@mathml{\\@imath}{ı}");g("\\jmath","\\html@mathml{\\@jmath}{ȷ}");g("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");g("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");g("⟦","\\llbracket");g("⟧","\\rrbracket");g("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");g("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");g("⦃","\\lBrace");g("⦄","\\rBrace");g("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");g("⦵","\\minuso");g("\\darr","\\downarrow");g("\\dArr","\\Downarrow");g("\\Darr","\\Downarrow");g("\\lang","\\langle");g("\\rang","\\rangle");g("\\uarr","\\uparrow");g("\\uArr","\\Uparrow");g("\\Uarr","\\Uparrow");g("\\N","\\mathbb{N}");g("\\R","\\mathbb{R}");g("\\Z","\\mathbb{Z}");g("\\alef","\\aleph");g("\\alefsym","\\aleph");g("\\Alpha","\\mathrm{A}");g("\\Beta","\\mathrm{B}");g("\\bull","\\bullet");g("\\Chi","\\mathrm{X}");g("\\clubs","\\clubsuit");g("\\cnums","\\mathbb{C}");g("\\Complex","\\mathbb{C}");g("\\Dagger","\\ddagger");g("\\diamonds","\\diamondsuit");g("\\empty","\\emptyset");g("\\Epsilon","\\mathrm{E}");g("\\Eta","\\mathrm{H}");g("\\exist","\\exists");g("\\harr","\\leftrightarrow");g("\\hArr","\\Leftrightarrow");g("\\Harr","\\Leftrightarrow");g("\\hearts","\\heartsuit");g("\\image","\\Im");g("\\infin","\\infty");g("\\Iota","\\mathrm{I}");g("\\isin","\\in");g("\\Kappa","\\mathrm{K}");g("\\larr","\\leftarrow");g("\\lArr","\\Leftarrow");g("\\Larr","\\Leftarrow");g("\\lrarr","\\leftrightarrow");g("\\lrArr","\\Leftrightarrow");g("\\Lrarr","\\Leftrightarrow");g("\\Mu","\\mathrm{M}");g("\\natnums","\\mathbb{N}");g("\\Nu","\\mathrm{N}");g("\\Omicron","\\mathrm{O}");g("\\plusmn","\\pm");g("\\rarr","\\rightarrow");g("\\rArr","\\Rightarrow");g("\\Rarr","\\Rightarrow");g("\\real","\\Re");g("\\reals","\\mathbb{R}");g("\\Reals","\\mathbb{R}");g("\\Rho","\\mathrm{P}");g("\\sdot","\\cdot");g("\\sect","\\S");g("\\spades","\\spadesuit");g("\\sub","\\subset");g("\\sube","\\subseteq");g("\\supe","\\supseteq");g("\\Tau","\\mathrm{T}");g("\\thetasym","\\vartheta");g("\\weierp","\\wp");g("\\Zeta","\\mathrm{Z}");g("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");g("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");g("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");g("\\bra","\\mathinner{\\langle{#1}|}");g("\\ket","\\mathinner{|{#1}\\rangle}");g("\\braket","\\mathinner{\\langle{#1}\\rangle}");g("\\Bra","\\left\\langle#1\\right|");g("\\Ket","\\left|#1\\right\\rangle");var $m=e=>t=>{var r=t.consumeArg().tokens,n=t.consumeArg().tokens,a=t.consumeArg().tokens,o=t.consumeArg().tokens,i=t.macros.get("|"),s=t.macros.get("\\|");t.macros.beginGroup();var l=f=>y=>{e&&(y.macros.set("|",i),a.length&&y.macros.set("\\|",s));var x=f;if(!f&&a.length){var T=y.future();T.text==="|"&&(y.popToken(),x=!0)}return{tokens:x?a:n,numArgs:0}};t.macros.set("|",l(!1)),a.length&&t.macros.set("\\|",l(!0));var u=t.consumeArg().tokens,p=t.expandTokens([...o,...u,...r]);return t.macros.endGroup(),{tokens:p.reverse(),numArgs:0}};g("\\bra@ket",$m(!1));g("\\bra@set",$m(!0));g("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");g("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");g("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");g("\\angln","{\\angl n}");g("\\blue","\\textcolor{##6495ed}{#1}");g("\\orange","\\textcolor{##ffa500}{#1}");g("\\pink","\\textcolor{##ff00af}{#1}");g("\\red","\\textcolor{##df0030}{#1}");g("\\green","\\textcolor{##28ae7b}{#1}");g("\\gray","\\textcolor{gray}{#1}");g("\\purple","\\textcolor{##9d38bd}{#1}");g("\\blueA","\\textcolor{##ccfaff}{#1}");g("\\blueB","\\textcolor{##80f6ff}{#1}");g("\\blueC","\\textcolor{##63d9ea}{#1}");g("\\blueD","\\textcolor{##11accd}{#1}");g("\\blueE","\\textcolor{##0c7f99}{#1}");g("\\tealA","\\textcolor{##94fff5}{#1}");g("\\tealB","\\textcolor{##26edd5}{#1}");g("\\tealC","\\textcolor{##01d1c1}{#1}");g("\\tealD","\\textcolor{##01a995}{#1}");g("\\tealE","\\textcolor{##208170}{#1}");g("\\greenA","\\textcolor{##b6ffb0}{#1}");g("\\greenB","\\textcolor{##8af281}{#1}");g("\\greenC","\\textcolor{##74cf70}{#1}");g("\\greenD","\\textcolor{##1fab54}{#1}");g("\\greenE","\\textcolor{##0d923f}{#1}");g("\\goldA","\\textcolor{##ffd0a9}{#1}");g("\\goldB","\\textcolor{##ffbb71}{#1}");g("\\goldC","\\textcolor{##ff9c39}{#1}");g("\\goldD","\\textcolor{##e07d10}{#1}");g("\\goldE","\\textcolor{##a75a05}{#1}");g("\\redA","\\textcolor{##fca9a9}{#1}");g("\\redB","\\textcolor{##ff8482}{#1}");g("\\redC","\\textcolor{##f9685d}{#1}");g("\\redD","\\textcolor{##e84d39}{#1}");g("\\redE","\\textcolor{##bc2612}{#1}");g("\\maroonA","\\textcolor{##ffbde0}{#1}");g("\\maroonB","\\textcolor{##ff92c6}{#1}");g("\\maroonC","\\textcolor{##ed5fa6}{#1}");g("\\maroonD","\\textcolor{##ca337c}{#1}");g("\\maroonE","\\textcolor{##9e034e}{#1}");g("\\purpleA","\\textcolor{##ddd7ff}{#1}");g("\\purpleB","\\textcolor{##c6b9fc}{#1}");g("\\purpleC","\\textcolor{##aa87ff}{#1}");g("\\purpleD","\\textcolor{##7854ab}{#1}");g("\\purpleE","\\textcolor{##543b78}{#1}");g("\\mintA","\\textcolor{##f5f9e8}{#1}");g("\\mintB","\\textcolor{##edf2df}{#1}");g("\\mintC","\\textcolor{##e0e5cc}{#1}");g("\\grayA","\\textcolor{##f6f7f7}{#1}");g("\\grayB","\\textcolor{##f0f1f2}{#1}");g("\\grayC","\\textcolor{##e3e5e6}{#1}");g("\\grayD","\\textcolor{##d6d8da}{#1}");g("\\grayE","\\textcolor{##babec2}{#1}");g("\\grayF","\\textcolor{##888d93}{#1}");g("\\grayG","\\textcolor{##626569}{#1}");g("\\grayH","\\textcolor{##3b3e40}{#1}");g("\\grayI","\\textcolor{##21242c}{#1}");g("\\kaBlue","\\textcolor{##314453}{#1}");g("\\kaGreen","\\textcolor{##71B307}{#1}");var Ym={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class vv{constructor(t,r,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new gv(yv,r.macros),this.mode=n,this.stack=[]}feed(t){this.lexer=new lu(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,n,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:n}=this.consumeArg(["]"])}else({tokens:a,start:r,end:n}=this.consumeArg());return this.pushToken(new st("EOF",n.loc)),this.pushTokens(a),new st("",Ke.range(r,n))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],n=t&&t.length>0;n||this.consumeSpaces();var a=this.future(),o,i=0,s=0;do{if(o=this.popToken(),r.push(o),o.text==="{")++i;else if(o.text==="}"){if(--i,i===-1)throw new q("Extra }",o)}else if(o.text==="EOF")throw new q("Unexpected end of input in a macro argument, expected '"+(t&&n?t[s]:"}")+"'",o);if(t&&n)if((i===0||i===1&&t[s]==="{")&&o.text===t[s]){if(++s,s===t.length){r.splice(-s,s);break}}else s=0}while(i!==0||n);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:o}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new q("The length of delimiters doesn't match the number of args!");for(var n=r[0],a=0;a<n.length;a++){var o=this.popToken();if(n[a]!==o.text)throw new q("Use of the macro doesn't match its definition",o)}}for(var i=[],s=0;s<t;s++)i.push(this.consumeArg(r&&r[s+1]).tokens);return i}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new q("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),n=r.text,a=r.noexpand?null:this._getExpansion(n);if(a==null||t&&a.unexpandable){if(t&&a==null&&n[0]==="\\"&&!this.isDefined(n))throw new q("Undefined control sequence: "+n);return this.pushToken(r),!1}this.countExpansion(1);var o=a.tokens,i=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){o=o.slice();for(var s=o.length-1;s>=0;--s){var l=o[s];if(l.text==="#"){if(s===0)throw new q("Incomplete placeholder at end of macro body",l);if(l=o[--s],l.text==="#")o.splice(s+1,1);else if(/^[1-9]$/.test(l.text))o.splice(s,2,...i[+l.text-1]);else throw new q("Not a valid argument number",l)}}}return this.pushTokens(o),o.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new st(t)]):void 0}expandTokens(t){var r=[],n=this.stack.length;for(this.pushTokens(t);this.stack.length>n;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(n=>n.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var n=this.lexer.catcodes[t];if(n!=null&&n!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var o=0;if(a.indexOf("#")!==-1)for(var i=a.replace(/##/g,"");i.indexOf("#"+(o+1))!==-1;)++o;for(var s=new lu(a,this.settings),l=[],u=s.lex();u.text!=="EOF";)l.push(u),u=s.lex();l.reverse();var p={tokens:l,numArgs:o};return p}return a}isDefined(t){return this.macros.has(t)||kr.hasOwnProperty(t)||ue.math.hasOwnProperty(t)||ue.text.hasOwnProperty(t)||Ym.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:kr.hasOwnProperty(t)&&!kr[t].primitive}}var uu=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ao=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),_s={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},hu={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Wi{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new vv(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new q("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new st("}")),this.gullet.pushTokens(t);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,n}parseExpression(t,r){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(Wi.endOfExpression.indexOf(a.text)!==-1||r&&a.text===r||t&&kr[a.text]&&kr[a.text].infix)break;var o=this.parseAtom(r);if(o){if(o.type==="internal")continue}else break;n.push(o)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(t){for(var r=-1,n,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new q("only one infix operator per group",t[a].token);r=a,n=t[a].replaceWith}if(r!==-1&&n){var o,i,s=t.slice(0,r),l=t.slice(r+1);s.length===1&&s[0].type==="ordgroup"?o=s[0]:o={type:"ordgroup",mode:this.mode,body:s},l.length===1&&l[0].type==="ordgroup"?i=l[0]:i={type:"ordgroup",mode:this.mode,body:l};var u;return n==="\\\\abovefrac"?u=this.callFunction(n,[o,t[r],i],[]):u=this.callFunction(n,[o,i],[]),[u]}else return t}handleSupSubscript(t){var r=this.fetch(),n=r.text;this.consume(),this.consumeSpaces();var a;do{var o;a=this.parseGroup(t)}while(((o=a)==null?void 0:o.type)==="internal");if(!a)throw new q("Expected group after '"+n+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],n=0;n<t.length;n++)r.push({type:"textord",mode:"text",text:t[n]});var a={type:"text",mode:this.mode,body:r},o={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return o}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var n,a;;){this.consumeSpaces();var o=this.fetch();if(o.text==="\\limits"||o.text==="\\nolimits"){if(r&&r.type==="op"){var i=o.text==="\\limits";r.limits=i,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=o.text==="\\limits");else throw new q("Limit controls must follow a math operator",o);this.consume()}else if(o.text==="^"){if(n)throw new q("Double superscript",o);n=this.handleSupSubscript("superscript")}else if(o.text==="_"){if(a)throw new q("Double subscript",o);a=this.handleSupSubscript("subscript")}else if(o.text==="'"){if(n)throw new q("Double superscript",o);var s={type:"textord",mode:this.mode,text:"\\prime"},l=[s];for(this.consume();this.fetch().text==="'";)l.push(s),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Ao[o.text]){var u=uu.test(o.text),p=[];for(p.push(new st(Ao[o.text])),this.consume();;){var f=this.fetch().text;if(!Ao[f]||uu.test(f)!==u)break;p.unshift(new st(Ao[f])),this.consume()}var y=this.subparse(p);u?a={type:"ordgroup",mode:"math",body:y}:n={type:"ordgroup",mode:"math",body:y}}else break}return n||a?{type:"supsub",mode:this.mode,base:r,sup:n,sub:a}:r}parseFunction(t,r){var n=this.fetch(),a=n.text,o=kr[a];if(!o)return null;if(this.consume(),r&&r!=="atom"&&!o.allowedInArgument)throw new q("Got function '"+a+"' with no arguments"+(r?" as "+r:""),n);if(this.mode==="text"&&!o.allowedInText)throw new q("Can't use function '"+a+"' in text mode",n);if(this.mode==="math"&&o.allowedInMath===!1)throw new q("Can't use function '"+a+"' in math mode",n);var{args:i,optArgs:s}=this.parseArguments(a,o);return this.callFunction(a,i,s,n,t)}callFunction(t,r,n,a,o){var i={funcName:t,parser:this,token:a,breakOnTokenText:o},s=kr[t];if(s&&s.handler)return s.handler(i,r,n);throw new q("No function handler for "+t)}parseArguments(t,r){var n=r.numArgs+r.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var a=[],o=[],i=0;i<n;i++){var s=r.argTypes&&r.argTypes[i],l=i<r.numOptionalArgs;(r.primitive&&s==null||r.type==="sqrt"&&i===1&&o[0]==null)&&(s="primitive");var u=this.parseGroupOfType("argument to '"+t+"'",s,l);if(l)o.push(u);else if(u!=null)a.push(u);else throw new q("Null argument, please report this as a bug")}return{args:a,optArgs:o}}parseGroupOfType(t,r,n){switch(r){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,r);case"hbox":{var a=this.parseArgumentGroup(n,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var o=this.parseStringGroup("raw",n);return o!=null?{type:"raw",mode:"text",string:o.text}:null}case"primitive":{if(n)throw new q("A primitive argument cannot be optional");var i=this.parseGroup(t);if(i==null)throw new q("Expected group as "+t,this.fetch());return i}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new q("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var n=this.gullet.scanArgument(r);if(n==null)return null;for(var a="",o;(o=this.fetch()).text!=="EOF";)a+=o.text,this.consume();return this.consume(),n.text=a,n}parseRegexGroup(t,r){for(var n=this.fetch(),a=n,o="",i;(i=this.fetch()).text!=="EOF"&&t.test(o+i.text);)a=i,o+=a.text,this.consume();if(o==="")throw new q("Invalid "+r+": '"+n.text+"'",n);return n.range(a,o)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!n)throw new q("Invalid color: '"+r.text+"'",r);var a=n[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,n=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",n=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new q("Invalid size: '"+r.text+"'",r);var o={number:+(a[1]+a[2]),unit:a[3]};if(!am(o))throw new q("Invalid unit: '"+o.unit+"'",r);return{type:"size",mode:this.mode,value:o,isBlank:n}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var n=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(t,r){var n=this.gullet.scanArgument(t);if(n==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var o=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var i={type:"ordgroup",mode:this.mode,loc:n.loc,body:o};return r&&this.switchMode(a),i}parseGroup(t,r){var n=this.fetch(),a=n.text,o;if(a==="{"||a==="\\begingroup"){this.consume();var i=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var s=this.parseExpression(!1,i),l=this.fetch();this.expect(i),this.gullet.endGroup(),o={type:"ordgroup",mode:this.mode,loc:Ke.range(n,l),body:s,semisimple:a==="\\begingroup"||void 0}}else if(o=this.parseFunction(r,t)||this.parseSymbol(),o==null&&a[0]==="\\"&&!Ym.hasOwnProperty(a)){if(this.settings.throwOnError)throw new q("Undefined control sequence: "+a,n);o=this.formatUnsupportedCmd(a),this.consume()}return o}formLigatures(t){for(var r=t.length-1,n=0;n<r;++n){var a=t[n],o=a.text;o==="-"&&t[n+1].text==="-"&&(n+1<r&&t[n+2].text==="-"?(t.splice(n,3,{type:"textord",mode:"text",loc:Ke.range(a,t[n+2]),text:"---"}),r-=2):(t.splice(n,2,{type:"textord",mode:"text",loc:Ke.range(a,t[n+1]),text:"--"}),r-=1)),(o==="'"||o==="`")&&t[n+1].text===o&&(t.splice(n,2,{type:"textord",mode:"text",loc:Ke.range(a,t[n+1]),text:o+o}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var n=r.slice(5),a=n.charAt(0)==="*";if(a&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new q(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:a}}hu.hasOwnProperty(r[0])&&!ue[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=hu[r[0]]+r.slice(1));var o=mv.exec(r);o&&(r=r.substring(0,o.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var i;if(ue[this.mode][r]){this.settings.strict&&this.mode==="math"&&zl.indexOf(r)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var s=ue[this.mode][r].group,l=Ke.range(t),u;if(i3.hasOwnProperty(s)){var p=s;u={type:"atom",mode:this.mode,family:p,loc:l,text:r}}else u={type:s,mode:this.mode,loc:l,text:r};i=u}else if(r.charCodeAt(0)>=128)this.settings.strict&&(nm(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),i={type:"textord",mode:"text",loc:Ke.range(t),text:r};else return null;if(this.consume(),o)for(var f=0;f<o[0].length;f++){var y=o[0][f];if(!_s[y])throw new q("Unknown accent ' "+y+"'",t);var x=_s[y][this.mode]||_s[y].text;if(!x)throw new q("Accent "+y+" unsupported in "+this.mode+" mode",t);i={type:"accent",mode:this.mode,loc:Ke.range(t),label:x,isStretchy:!1,isShifty:!0,base:i}}return i}}Wi.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var o0=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Wi(t,r);delete n.gullet.macros.current["\\df@tag"];var a=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new q("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:n.subparse([new st("\\df@tag")])}]}return a},Km=function(t,r,n){r.textContent="";var a=i0(t,n).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Km=function(){throw new q("KaTeX doesn't work in quirks mode.")});var bv=function(t,r){var n=i0(t,r).toMarkup();return n},wv=function(t,r){var n=new Oc(r);return o0(t,n)},Qm=function(t,r,n){if(n.throwOnError||!(t instanceof q))throw t;var a=D.makeSpan(["katex-error"],[new wt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+n.errorColor),a},i0=function(t,r){var n=new Oc(r);try{var a=o0(t,n);return D3(a,t,n)}catch(o){return Qm(o,t,n)}},xv=function(t,r){var n=new Oc(r);try{var a=o0(t,n);return M3(a,t,n)}catch(o){return Qm(o,t,n)}},kv="0.16.27",Sv={Span:Va,Anchor:Uc,SymbolNode:wt,SvgNode:ir,PathNode:zr,LineNode:Il},Av={version:kv,render:Km,renderToString:bv,ParseError:q,SETTINGS_SCHEMA:qo,__parse:wv,__renderToDomTree:i0,__renderToHTMLTree:xv,__setFontMetrics:X4,__defineSymbol:c,__defineFunction:F,__defineMacro:g,__domTree:Sv};const Tv=({tex:e,block:t=!1})=>{const r=E.useRef(null);return E.useEffect(()=>{if(r.current)try{Av.render(e,r.current,{displayMode:t,throwOnError:!1,output:"html"})}catch(n){console.error("KaTeX Render Error:",n),r.current.innerText=e}},[e,t]),t?h.jsx("div",{className:"my-6 w-full overflow-x-auto overflow-y-hidden text-center py-4 bg-gray-50 dark:bg-crt-dim/10 border-y border-dashed border-gray-300 dark:border-crt-dim/50",children:h.jsx("span",{ref:r,className:"text-ink dark:text-crt-green selection:bg-accent selection:text-white"})}):h.jsx("span",{ref:r,className:"mx-1 text-ink dark:text-crt-green font-medium"})},Jm=({contentRef:e,isDomReady:t,citationMap:r})=>{const[n,a]=E.useState([]);return E.useLayoutEffect(()=>{if(!e.current||!t)return;const o=[];e.current.querySelectorAll(".citation-mount-point").forEach((p,f)=>{const y=p.getAttribute("data-key"),x=y?r.get(y):null;y&&x&&o.push(ia.createPortal(hn.createElement(x4,{label:x.label,entry:x.entry,citationKey:y}),p,`citation-${y}-${f}`))}),e.current.querySelectorAll(".science-figure-marker").forEach((p,f)=>{const y=p.getAttribute("data-src")||"",x=p.getAttribute("data-alt")||"",T=p.getAttribute("data-caption")||"",A=p.getAttribute("data-id")||void 0,N=p.getAttribute("data-clean-src")||void 0;y&&o.push(ia.createPortal(hn.createElement(k4,{src:y,alt:x,caption:T,id:A,cleanSrc:N}),p,`figure-${f}`))}),e.current.querySelectorAll(".science-table-marker").forEach((p,f)=>{try{const y=p.getAttribute("data-id")||"tbl",x=p.getAttribute("data-headers"),T=p.getAttribute("data-rows"),A=p.getAttribute("data-caption")||void 0;if(x&&T){const N=JSON.parse(x),b=JSON.parse(T);o.push(ia.createPortal(hn.createElement(A4,{id:y,initialHeaders:N,initialData:b,caption:A}),p,`table-${y}-${f}`))}}catch(y){console.error("Failed to hydrate table",y)}}),e.current.querySelectorAll(".science-math-marker").forEach((p,f)=>{const y=p.getAttribute("data-tex"),x=p.getAttribute("data-display")==="true";y&&o.push(ia.createPortal(hn.createElement(Tv,{tex:y,block:x}),p,`math-${f}`))}),a(o)},[t,r]),n},Xm=({references:e,manualCitations:t})=>e.length===0&&(!t||t.length===0)?null:h.jsxs("div",{className:"mt-16 pt-8 border-t-4 border-ink dark:border-crt-green",children:[h.jsxs("h3",{className:"font-mono text-lg font-bold uppercase mb-6 text-ink dark:text-crt-green flex items-center gap-2",children:["// REFERENCES ",e.length>0?"(APA 7)":"(LEGACY)"]}),h.jsxs("div",{className:"space-y-4",children:[e.map(({entry:r})=>h.jsxs("div",{id:`ref-${r.citationKey}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words text-justify hyphens-auto",children:[h.jsx("span",{className:"font-bold",children:v4(r.author)}),".",r.year&&h.jsxs("span",{children:[" (",r.year,"). "]}),h.jsxs("span",{children:[r.title,". "]}),h.jsx("span",{className:"italic",children:r.journal||r.booktitle||r.publisher}),r.volume&&h.jsxs("span",{className:"italic",children:[", ",r.volume]}),r.issue&&h.jsxs("span",{children:["(",r.issue,")"]}),r.pages&&h.jsxs("span",{children:[", ",r.pages]}),".",h.jsxs("div",{className:"inline-block ml-2 indent-0",children:[r.doi&&h.jsxs("a",{href:`https://doi.org/${r.doi}`,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:["https://doi.org/",r.doi]}),r.url&&!r.doi&&h.jsx("a",{href:r.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-[10px] text-pencil dark:text-crt-green/60 hover:text-accent dark:hover:text-crt-amber hover:underline",children:r.url})]})]},r.citationKey)),e.length===0&&(t==null?void 0:t.map(r=>h.jsxs("div",{id:`ref-${r.id}`,className:"text-sm transition-colors duration-500 rounded p-2 pl-8 -indent-8 font-serif text-gray-800 dark:text-crt-green/90 break-words flex gap-2 text-justify hyphens-auto",children:[h.jsxs("span",{className:"font-mono font-bold text-xs select-none",children:["[",r.id,"]"]}),h.jsxs("div",{className:"text-justify hyphens-auto",children:[h.jsx("span",{children:r.text}),r.source&&h.jsxs("span",{className:"block italic text-xs opacity-70",children:["Source: ",r.source]})]})]},r.id)))]})]}),Zm=({author:e})=>{const t=e||{name:"RK Patel",role:"Lead Researcher",avatar:"https://github.com/RKPatel-1996.png"};return h.jsxs("div",{className:"flex items-center gap-4 py-4 mb-6 border-b border-dashed border-gray-300 dark:border-crt-dim",children:[h.jsxs("div",{className:"relative shrink-0",children:[h.jsxs("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-ink dark:border-crt-green bg-gray-200 dark:bg-crt-dim",children:[h.jsx("img",{src:t.avatar,alt:t.name,className:"w-full h-full object-cover grayscale contrast-125",onError:r=>{r.currentTarget.style.display="none";const n=r.currentTarget.nextElementSibling;n&&(n.classList.remove("hidden"),n.classList.add("flex"))}}),h.jsx("div",{className:"hidden w-full h-full items-center justify-center text-ink dark:text-crt-green",children:h.jsx(uy,{size:24})})]}),h.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-black rounded-full flex items-center justify-center",children:h.jsx(sy,{size:8,className:"text-white dark:text-black"})})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-serif font-bold text-ink dark:text-crt-green text-sm flex items-center gap-2",children:t.name}),h.jsx("div",{className:"font-mono text-[10px] uppercase tracking-wider text-pencil dark:text-crt-green/60 bg-gray-100 dark:bg-crt-dim/50 px-1 rounded inline-block",children:t.role||"Contributor"})]})]})},ef=({items:e})=>!e||e.length===0?null:h.jsxs("nav",{id:"table-of-contents",className:"my-8 p-6 bg-paper dark:bg-crt-dim/10 border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-none",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-4 border-b-2 border-ink dark:border-crt-green pb-2",children:[h.jsx(ty,{size:18,className:"text-ink dark:text-crt-green"}),h.jsx("h3",{className:"font-mono text-sm font-bold uppercase text-ink dark:text-crt-green",children:"Table_Of_Contents"})]}),h.jsx("ul",{className:"space-y-2 font-mono text-xs",children:e.map(t=>h.jsx("li",{style:{paddingLeft:`${(t.level-1)*12}px`},children:h.jsxs("a",{href:`#${t.id}`,onClick:r=>{var n;r.preventDefault(),(n=document.getElementById(t.id))==null||n.scrollIntoView({behavior:"smooth"})},className:"flex items-start gap-2 text-pencil dark:text-crt-green/80 hover:text-accent dark:hover:text-crt-amber hover:underline decoration-1 transition-colors",children:[h.jsx("span",{className:"opacity-50 select-none",children:">"}),t.text]})},t.id))}),h.jsx("div",{className:"mt-4 pt-2 border-t border-dashed border-gray-300 dark:border-crt-green/30 text-[10px] text-pencil dark:text-crt-green/50 italic",children:"* Click heading titles in the article to return here."})]}),Cv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=Ip(),{processedHTML:n,references:a,citationMap:o}=em(e.content,e.bibTexContent),i=E.useRef(null),{toc:s,isDomReady:l}=tm(i,n),u=Jm({contentRef:i,isDomReady:l,citationMap:o});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Fp,{size:24})}),h.jsx("div",{className:"flex-1 p-4 md:p-8 pt-20 md:pt-8 relative",children:h.jsx("div",{className:"max-w-3xl mx-auto",children:h.jsxs("article",{className:"bg-white dark:bg-black dark:border dark:border-crt-dim shadow-paper dark:shadow-crt p-6 md:p-12 min-h-[600px] md:min-h-[1000px] mb-12 relative",children:[h.jsxs("header",{className:"mb-4",children:[h.jsxs("div",{className:"flex flex-wrap justify-between font-mono text-xs mb-2 text-pencil dark:text-crt-green/60 uppercase",children:[h.jsx("span",{children:e.id}),h.jsx("span",{children:e.date})]}),h.jsx("h1",{className:"font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 text-ink dark:text-crt-green",children:e.title}),h.jsx("div",{className:"flex flex-wrap gap-2 font-mono text-xs mt-4",children:e.tags.map(p=>h.jsx("span",{className:"bg-gray-200 dark:bg-crt-dim dark:text-crt-green px-2 py-1 whitespace-nowrap",children:p},p))})]}),h.jsx(Zm,{author:e.author}),h.jsx(ef,{items:s}),h.jsx("div",{ref:i,className:`prose ${Xr[r]} dark:prose-invert font-serif text-ink dark:text-crt-green max-w-none 
                    text-justify break-words hyphens-auto
                    
                    /* Prose Heading Styles Override for Collapsible Styling */
                    prose-headings:font-mono prose-headings:uppercase prose-headings:text-sm prose-headings:tracking-widest 
                    prose-headings:border-b prose-headings:border-gray-300 dark:prose-headings:border-crt-dim prose-headings:pb-2 prose-headings:mt-0 prose-headings:mb-4
                    
                    prose-code:font-code prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-crt-dim prose-code:p-1
                    prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-ink dark:prose-blockquote:border-crt-green
                    dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim
                `,dangerouslySetInnerHTML:{__html:n}}),u,h.jsx(Xm,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 pt-8 border-t border-dashed border-gray-300 dark:border-crt-dim text-center font-mono text-xs text-pencil dark:text-crt-green/50",children:"*** END OF MANUSCRIPT ***"})]})})})]})},Pv=({article:e,onBack:t})=>{const{fontSizeIdx:r}=Ip(),{processedHTML:n,references:a,citationMap:o}=em(e.content,e.bibTexContent),i=E.useRef(null),{toc:s,isDomReady:l}=tm(i,n),u=Jm({contentRef:i,isDomReady:l,citationMap:o});return h.jsxs("div",{className:"relative flex flex-col min-h-full bg-transparent",children:[h.jsx("button",{onClick:t,className:"fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md border-2 border-ink/20 dark:border-crt-green/20 shadow-lg hover:scale-110 active:scale-95 transition-all text-ink dark:text-crt-green","aria-label":"Return to Index",children:h.jsx(Fp,{size:24})}),h.jsx("div",{className:"flex-1 p-2 md:p-12 pt-20 md:pt-12 overflow-y-auto",children:h.jsxs("article",{className:"max-w-3xl mx-auto bg-white dark:bg-black border-2 border-black dark:border-crt-green p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-crt transition-colors duration-300",children:[h.jsxs("header",{className:"mb-4",children:[h.jsx("h1",{className:"font-mono font-bold text-2xl md:text-4xl text-black dark:text-crt-green mb-4 leading-tight",children:e.title}),h.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-gray-600 dark:text-crt-green/70",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[h.jsxs("span",{className:"uppercase tracking-wider",children:["Date: ",e.date]}),h.jsxs("span",{className:"uppercase tracking-wider",children:["ID: ",e.id]})]}),h.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(p=>h.jsx("span",{className:"bg-gray-100 dark:bg-crt-dim border border-gray-200 dark:border-crt-green px-2 py-1 rounded-sm whitespace-nowrap",children:p},p))})]}),h.jsx("hr",{className:"border-black dark:border-crt-green border-2 my-8"})]}),h.jsx(Zm,{author:e.author}),h.jsx(ef,{items:s}),h.jsx("div",{ref:i,className:`prose ${Xr[r]} max-w-none 
              text-justify break-words hyphens-auto
              
              /* Override prose styles for collapsible headers */
              prose-headings:font-mono prose-headings:mt-0 prose-headings:mb-4
              prose-p:font-serif
              
              dark:prose-invert 
              dark:prose-headings:text-crt-green dark:prose-p:text-crt-green dark:prose-strong:text-crt-green dark:prose-li:text-crt-green
              dark:prose-code:text-crt-green dark:prose-code:bg-crt-dim
              dark:prose-img:border-crt-green dark:prose-img:shadow-none
              dark:prose-th:text-crt-green dark:prose-td:text-crt-green dark:prose-tr:border-crt-dim`,dangerouslySetInnerHTML:{__html:n}}),u,h.jsx(Xm,{references:a,manualCitations:e.citations}),h.jsx("div",{className:"mt-16 text-center font-mono text-[10px] text-gray-400 dark:text-crt-green/40 select-none",children:"*** END OF DOCUMENT ***"})]})})]})},Nv=()=>{const{id:e}=l2(),t=qc(),r=El.find(n=>n.id===e);return r?r.template==="standard"?h.jsx(Pv,{article:r,onBack:()=>t("/")}):h.jsx(Cv,{article:r,onBack:()=>t("/")}):h.jsxs("div",{className:"p-12 font-mono text-center dark:text-crt-green",children:[h.jsx("h2",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"404: RECORD_NOT_FOUND"}),h.jsxs("p",{className:"mt-2 text-sm text-pencil dark:text-crt-green/70",children:["The requested manuscript ID '",e,"' does not exist in the registry."]}),h.jsx("button",{onClick:()=>t("/"),className:"mt-8 underline hover:text-accent dark:hover:text-crt-amber",children:"< Return to Index"})]})};function Dv(){const[e,t]=E.useState(!1);E.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const r=()=>t(!e);return h.jsx(I2,{basename:"/notes_computers_in_biology",children:h.jsx(T2,{children:h.jsxs(un,{element:h.jsx(yy,{isDarkMode:e,toggleTheme:r}),children:[h.jsx(un,{path:"/",element:h.jsx(c4,{})}),h.jsx(un,{path:"/articles/:id",element:h.jsx(Nv,{})}),h.jsx(un,{path:"/media",element:h.jsx(g4,{})}),h.jsx(un,{path:"/about",element:h.jsx(h4,{})})]})})})}const Ol=document.getElementById("root");if(!Ol)throw new Error("Could not find root element to mount to");Ol.innerHTML||Bs.createRoot(Ol).render(h.jsx(hn.StrictMode,{children:h.jsx(Dv,{})}));
