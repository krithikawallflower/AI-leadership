(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Eu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},ai={},os={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),_u=Symbol.for("react.portal"),Lu=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Mu=Symbol.for("react.provider"),Du=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Ou=Symbol.for("react.memo"),$u=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Fu(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var as={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ss=Object.assign,cs={};function fn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function us(){}us.prototype=fn.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||as}var Yl=Ql.prototype=new us;Yl.constructor=Ql;ss(Yl,fn.prototype);Yl.isPureReactComponent=!0;var Ko=Array.isArray,ds=Object.prototype.hasOwnProperty,Xl={current:null},ps={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)ds.call(t,r)&&!ps.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:er,type:e,key:l,ref:a,props:i,_owner:Xl.current}}function Au(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function Uu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uu(""+e.key):t.toString(36)}function Nr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case er:case _u:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ni(a,0):r,Ko(i)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),Nr(i,t,n,"",function(d){return d})):i!=null&&(Kl(i)&&(i=Au(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Go,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ko(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+Ni(l,s);a+=Nr(l,t,n,c,i)}else if(c=Fu(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+Ni(l,s++),a+=Nr(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ar(e,t,n){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Wu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},zr={transition:null},Bu={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:zr,ReactCurrentOwner:Xl};function ms(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=fn;D.Fragment=Lu;D.Profiler=Tu;D.PureComponent=Ql;D.StrictMode=Pu;D.Suspense=Ru;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bu;D.act=ms;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ss({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Xl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ds.call(t,c)&&!ps.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:er,type:e.type,key:i,ref:l,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:Du,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mu,_context:e},e.Consumer=e};D.createElement=fs;D.createFactory=function(e){var t=fs.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Iu,render:e}};D.isValidElement=Kl;D.lazy=function(e){return{$$typeof:$u,_payload:{_status:-1,_result:e},_init:Wu}};D.memo=function(e,t){return{$$typeof:Ou,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};D.unstable_act=ms;D.useCallback=function(e,t){return ue.current.useCallback(e,t)};D.useContext=function(e){return ue.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};D.useEffect=function(e,t){return ue.current.useEffect(e,t)};D.useId=function(){return ue.current.useId()};D.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ue.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};D.useRef=function(e){return ue.current.useRef(e)};D.useState=function(e){return ue.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ue.current.useTransition()};D.version="18.3.1";os.exports=D;var P=os.exports;const Gl=Eu(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=P,Hu=Symbol.for("react.element"),Qu=Symbol.for("react.fragment"),Yu=Object.prototype.hasOwnProperty,Xu=Vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ku={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Yu.call(t,r)&&!Ku.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hu,type:e,key:l,ref:a,props:i,_owner:Xu.current}}ai.Fragment=Qu;ai.jsx=hs;ai.jsxs=hs;ls.exports=ai;var o=ls.exports,Zi={},gs={exports:{}},ke={},ys={exports:{}},vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,T){var z=k.length;k.push(T);e:for(;0<z;){var U=z-1>>>1,X=k[U];if(0<i(X,T))k[U]=T,k[z]=X,z=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var T=k[0],z=k.pop();if(z!==T){k[0]=z;e:for(var U=0,X=k.length,Ft=X>>>1;U<Ft;){var Fe=2*(U+1)-1,Si=k[Fe],jt=Fe+1,or=k[jt];if(0>i(Si,z))jt<X&&0>i(or,Si)?(k[U]=or,k[jt]=z,U=jt):(k[U]=Si,k[Fe]=z,U=Fe);else if(jt<X&&0>i(or,z))k[U]=or,k[jt]=z,U=jt;else break e}}return T}function i(k,T){var z=k.sortIndex-T.sortIndex;return z!==0?z:k.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],d=[],m=1,h=null,g=3,v=!1,w=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=k)r(d),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(d)}}function y(k){if(j=!1,f(k),!w)if(n(c)!==null)w=!0,$e(S);else{var T=n(d);T!==null&&kt(y,T.startTime-k)}}function S(k,T){w=!1,j&&(j=!1,p(E),E=-1),v=!0;var z=g;try{for(f(T),h=n(c);h!==null&&(!(h.expirationTime>T)||k&&!re());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var X=U(h.expirationTime<=T);T=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(c)&&r(c),f(T)}else r(c);h=n(c)}if(h!==null)var Ft=!0;else{var Fe=n(d);Fe!==null&&kt(y,Fe.startTime-T),Ft=!1}return Ft}finally{h=null,g=z,v=!1}}var b=!1,C=null,E=-1,$=5,M=-1;function re(){return!(e.unstable_now()-M<$)}function Re(){if(C!==null){var k=e.unstable_now();M=k;var T=!0;try{T=C(!0,k)}finally{T?Oe():(b=!1,C=null)}}else b=!1}var Oe;if(typeof u=="function")Oe=function(){u(Re)};else if(typeof MessageChannel<"u"){var lr=new MessageChannel,$t=lr.port2;lr.port1.onmessage=Re,Oe=function(){$t.postMessage(null)}}else Oe=function(){_(Re,0)};function $e(k){C=k,b||(b=!0,Oe())}function kt(k,T){E=_(function(){k(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,$e(S))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var z=g;g=T;try{return k()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,T){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=g;g=k;try{return T()}finally{g=z}},e.unstable_scheduleCallback=function(k,T,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,k={id:m++,callback:T,priorityLevel:k,startTime:z,expirationTime:X,sortIndex:-1},z>U?(k.sortIndex=z,t(d,k),n(c)===null&&k===n(d)&&(j?(p(E),E=-1):j=!0,kt(y,z-U))):(k.sortIndex=X,t(c,k),w||v||(w=!0,$e(S))),k},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(k){var T=g;return function(){var z=g;g=T;try{return k.apply(this,arguments)}finally{g=z}}}})(vs);ys.exports=vs;var Gu=ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=P,we=Gu;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xs=new Set,On={};function It(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(On[e]=t,e=0;e<t.length;e++)xs.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Ju=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zo={},Jo={};function qu(e){return Ji.call(Jo,e)?!0:Ji.call(Zo,e)?!1:Ju.test(e)?Jo[e]=!0:(Zo[e]=!0,!1)}function ed(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function td(e,t,n,r){if(t===null||typeof t>"u"||ed(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,Jl);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ql(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(td(t,n,i,r)&&(n=null),r||i===null?qu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),eo=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),ws=Symbol.for("react.provider"),ks=Symbol.for("react.context"),to=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),no=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),js=Symbol.for("react.offscreen"),qo=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,zi;function Nn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var bi=!1;function Ci(e,t){if(!e||bi)return"";bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,s=l.length-1;1<=a&&0<=s&&i[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==l[s]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function nd(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Ci(e.type,!1),e;case 11:return e=Ci(e.type.render,!1),e;case 1:return e=Ci(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ut:return"Portal";case qi:return"Profiler";case eo:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ks:return(e.displayName||"Context")+".Consumer";case ws:return(e._context.displayName||"Context")+".Provider";case to:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case no:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function rd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===eo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function id(e){var t=Ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=id(e))}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ea(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zs(e,t){t=t.checked,t!=null&&ql(e,"checked",t,!1)}function il(e,t){zs(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function na(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(zn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function bs(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ra(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,Es=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ld=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function _s(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Ls(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_s(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var od=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,en=null,tn=null;function ia(e){if(e=rr(e)){if(typeof dl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=pi(t),dl(e.stateNode,e.type,t))}}function Ps(e){en?tn?tn.push(e):tn=[e]:en=e}function Ts(){if(en){var e=en,t=tn;if(tn=en=null,ia(e),t)for(e=0;e<t.length;e++)ia(t[e])}}function Ms(e,t){return e(t)}function Ds(){}var Ei=!1;function Is(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return Ms(e,t,n)}finally{Ei=!1,(en!==null||tn!==null)&&(Ds(),Ts())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var pl=!1;if(Ge)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){pl=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{pl=!1}function ad(e,t,n,r,i,l,a,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var _n=!1,Or=null,$r=!1,fl=null,sd={onError:function(e){_n=!0,Or=e}};function cd(e,t,n,r,i,l,a,s,c){_n=!1,Or=null,ad.apply(sd,arguments)}function ud(e,t,n,r,i,l,a,s,c){if(cd.apply(this,arguments),_n){if(_n){var d=Or;_n=!1,Or=null}else throw Error(x(198));$r||($r=!0,fl=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(Rt(e)!==e)throw Error(x(188))}function dd(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return la(i),e;if(l===r)return la(i),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Os(e){return e=dd(e),e!==null?$s(e):null}function $s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$s(e);if(t!==null)return t;e=e.sibling}return null}var Fs=we.unstable_scheduleCallback,oa=we.unstable_cancelCallback,pd=we.unstable_shouldYield,fd=we.unstable_requestPaint,Y=we.unstable_now,md=we.unstable_getCurrentPriorityLevel,io=we.unstable_ImmediatePriority,As=we.unstable_UserBlockingPriority,Fr=we.unstable_NormalPriority,hd=we.unstable_LowPriority,Us=we.unstable_IdlePriority,si=null,Be=null;function gd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:xd,yd=Math.log,vd=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(yd(e)/vd|0)|0}var dr=64,pr=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=bn(s):(l&=a,l!==0&&(r=bn(l)))}else a=n&~i,a!==0?r=bn(a):l!==0&&(r=bn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),i=1<<n,r|=e[n],t&=~i;return r}function wd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Me(l),s=1<<a,c=i[a];c===-1?(!(s&n)||s&r)&&(i[a]=wd(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ws(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Me(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,oo,Hs,Qs,Ys,hl=!1,fr=[],st=null,ct=null,ut=null,An=new Map,Un=new Map,it=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function aa(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function vn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=rr(t),t!==null&&oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nd(e,t,n,r,i){switch(t){case"focusin":return st=vn(st,e,t,n,r,i),!0;case"dragenter":return ct=vn(ct,e,t,n,r,i),!0;case"mouseover":return ut=vn(ut,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return An.set(l,vn(An.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Un.set(l,vn(Un.get(l)||null,e,t,n,r,i)),!0}return!1}function Xs(e){var t=zt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Rs(n),t!==null){e.blockedOn=t,Ys(e.priority,function(){Hs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=rr(n),t!==null&&oo(t),e.blockedOn=n,!1;t.shift()}return!0}function sa(e,t,n){br(e)&&n.delete(t)}function zd(){hl=!1,st!==null&&br(st)&&(st=null),ct!==null&&br(ct)&&(ct=null),ut!==null&&br(ut)&&(ut=null),An.forEach(sa),Un.forEach(sa)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,zd)))}function Wn(e){function t(i){return xn(i,e)}if(0<fr.length){xn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&xn(st,e),ct!==null&&xn(ct,e),ut!==null&&xn(ut,e),An.forEach(t),Un.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Xs(n),n.blockedOn===null&&it.shift()}var nn=et.ReactCurrentBatchConfig,Ur=!0;function bd(e,t,n,r){var i=R,l=nn.transition;nn.transition=null;try{R=1,ao(e,t,n,r)}finally{R=i,nn.transition=l}}function Cd(e,t,n,r){var i=R,l=nn.transition;nn.transition=null;try{R=4,ao(e,t,n,r)}finally{R=i,nn.transition=l}}function ao(e,t,n,r){if(Ur){var i=gl(e,t,n,r);if(i===null)Fi(e,t,r,Wr,n),aa(e,r);else if(Nd(i,e,t,n,r))r.stopPropagation();else if(aa(e,r),t&4&&-1<Sd.indexOf(e)){for(;i!==null;){var l=rr(i);if(l!==null&&Vs(l),l=gl(e,t,n,r),l===null&&Fi(e,t,r,Wr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var Wr=null;function gl(e,t,n,r){if(Wr=null,e=ro(r),e=zt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(md()){case io:return 1;case As:return 4;case Fr:case hd:return 16;case Us:return 536870912;default:return 16}default:return 16}}var ot=null,so=null,Cr=null;function Gs(){if(Cr)return Cr;var e,t=so,n=t.length,r,i="value"in ot?ot.value:ot.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function ca(){return!1}function je(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?mr:ca,this.isPropagationStopped=ca,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=je(mn),nr=H({},mn,{view:0,detail:0}),Ed=je(nr),Li,Pi,wn,ci=H({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?(Li=e.screenX-wn.screenX,Pi=e.screenY-wn.screenY):Pi=Li=0,wn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),ua=je(ci),_d=H({},ci,{dataTransfer:0}),Ld=je(_d),Pd=H({},nr,{relatedTarget:0}),Ti=je(Pd),Td=H({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=je(Td),Dd=H({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Id=je(Dd),Rd=H({},mn,{data:0}),da=je(Rd),Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fd[e])?!!t[e]:!1}function uo(){return Ad}var Ud=H({},nr,{key:function(e){if(e.key){var t=Od[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=je(Ud),Bd=H({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pa=je(Bd),Vd=H({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),Hd=je(Vd),Qd=H({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=je(Qd),Xd=H({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kd=je(Xd),Gd=[9,13,27,32],po=Ge&&"CompositionEvent"in window,Ln=null;Ge&&"documentMode"in document&&(Ln=document.documentMode);var Zd=Ge&&"TextEvent"in window&&!Ln,Zs=Ge&&(!po||Ln&&8<Ln&&11>=Ln),fa=String.fromCharCode(32),ma=!1;function Js(e,t){switch(e){case"keyup":return Gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bt=!1;function Jd(e,t){switch(e){case"compositionend":return qs(t);case"keypress":return t.which!==32?null:(ma=!0,fa);case"textInput":return e=t.data,e===fa&&ma?null:e;default:return null}}function qd(e,t){if(Bt)return e==="compositionend"||!po&&Js(e,t)?(e=Gs(),Cr=so=ot=null,Bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zs&&t.locale!=="ko"?null:t.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ep[e.type]:t==="textarea"}function ec(e,t,n,r){Ps(r),t=Br(t,"onChange"),0<t.length&&(n=new co("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Bn=null;function tp(e){dc(e,0)}function ui(e){var t=Qt(e);if(Ns(t))return e}function np(e,t){if(e==="change")return t}var tc=!1;if(Ge){var Mi;if(Ge){var Di="oninput"in document;if(!Di){var ga=document.createElement("div");ga.setAttribute("oninput","return;"),Di=typeof ga.oninput=="function"}Mi=Di}else Mi=!1;tc=Mi&&(!document.documentMode||9<document.documentMode)}function ya(){Pn&&(Pn.detachEvent("onpropertychange",nc),Bn=Pn=null)}function nc(e){if(e.propertyName==="value"&&ui(Bn)){var t=[];ec(t,Bn,e,ro(e)),Is(tp,t)}}function rp(e,t,n){e==="focusin"?(ya(),Pn=t,Bn=n,Pn.attachEvent("onpropertychange",nc)):e==="focusout"&&ya()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(Bn)}function lp(e,t){if(e==="click")return ui(t)}function op(e,t){if(e==="input"||e==="change")return ui(t)}function ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:ap;function Vn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ji.call(t,i)||!Ie(e[i],t[i]))return!1}return!0}function va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xa(e,t){var n=va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=va(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sp(e){var t=ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(r!==null&&fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=xa(n,l);var a=xa(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=Ge&&"documentMode"in document&&11>=document.documentMode,Vt=null,yl=null,Tn=null,vl=!1;function wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Vt==null||Vt!==Rr(r)||(r=Vt,"selectionStart"in r&&fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Vn(Tn,r)||(Tn=r,r=Br(yl,"onSelect"),0<r.length&&(t=new co("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Ii={},lc={};Ge&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function di(e){if(Ii[e])return Ii[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return Ii[e]=t[n];return e}var oc=di("animationend"),ac=di("animationiteration"),sc=di("animationstart"),cc=di("transitionend"),uc=new Map,ka="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){uc.set(e,t),It(t,[e])}for(var Ri=0;Ri<ka.length;Ri++){var Oi=ka[Ri],up=Oi.toLowerCase(),dp=Oi[0].toUpperCase()+Oi.slice(1);vt(up,"on"+dp)}vt(oc,"onAnimationEnd");vt(ac,"onAnimationIteration");vt(sc,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(cc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ud(r,t,void 0,e),e.currentTarget=null}function dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==l&&i.isPropagationStopped())break e;ja(i,s,d),l=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,d=s.currentTarget,s=s.listener,c!==l&&i.isPropagationStopped())break e;ja(i,s,d),l=c}}}if($r)throw e=fl,$r=!1,fl=null,e}function F(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function $i(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[gr]){e[gr]=!0,xs.forEach(function(n){n!=="selectionchange"&&(pp.has(n)||$i(n,!1,e),$i(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,$i("selectionchange",!1,t))}}function pc(e,t,n,r){switch(Ks(t)){case 1:var i=bd;break;case 4:i=Cd;break;default:i=ao}n=i.bind(null,t,n,e),i=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;s!==null;){if(a=zt(s),a===null)return;if(c=a.tag,c===5||c===6){r=l=a;continue e}s=s.parentNode}}r=r.return}Is(function(){var d=l,m=ro(n),h=[];e:{var g=uc.get(e);if(g!==void 0){var v=co,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":v=Wd;break;case"focusin":w="focus",v=Ti;break;case"focusout":w="blur",v=Ti;break;case"beforeblur":case"afterblur":v=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Hd;break;case oc:case ac:case sc:v=Md;break;case cc:v=Yd;break;case"scroll":v=Ed;break;case"wheel":v=Kd;break;case"copy":case"cut":case"paste":v=Id;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=pa}var j=(t&4)!==0,_=!j&&e==="scroll",p=j?g!==null?g+"Capture":null:g;j=[];for(var u=d,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Fn(u,p),y!=null&&j.push(Qn(u,y,f)))),_)break;u=u.return}0<j.length&&(g=new v(g,w,null,n,m),h.push({event:g,listeners:j}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==ul&&(w=n.relatedTarget||n.fromElement)&&(zt(w)||w[Ze]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=d,w=w?zt(w):null,w!==null&&(_=Rt(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=d),v!==w)){if(j=ua,y="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=pa,y="onPointerLeave",p="onPointerEnter",u="pointer"),_=v==null?g:Qt(v),f=w==null?g:Qt(w),g=new j(y,u+"leave",v,n,m),g.target=_,g.relatedTarget=f,y=null,zt(m)===d&&(j=new j(p,u+"enter",w,n,m),j.target=f,j.relatedTarget=_,y=j),_=y,v&&w)t:{for(j=v,p=w,u=0,f=j;f;f=At(f))u++;for(f=0,y=p;y;y=At(y))f++;for(;0<u-f;)j=At(j),u--;for(;0<f-u;)p=At(p),f--;for(;u--;){if(j===p||p!==null&&j===p.alternate)break t;j=At(j),p=At(p)}j=null}else j=null;v!==null&&Sa(h,g,v,j,!1),w!==null&&_!==null&&Sa(h,_,w,j,!0)}}e:{if(g=d?Qt(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=np;else if(ha(g))if(tc)S=op;else{S=ip;var b=rp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=lp);if(S&&(S=S(e,d))){ec(h,S,n,m);break e}b&&b(e,g,d),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&ll(g,"number",g.value)}switch(b=d?Qt(d):window,e){case"focusin":(ha(b)||b.contentEditable==="true")&&(Vt=b,yl=d,Tn=null);break;case"focusout":Tn=yl=Vt=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,wa(h,n,m);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":wa(h,n,m)}var C;if(po)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Bt?Js(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Zs&&n.locale!=="ko"&&(Bt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Bt&&(C=Gs()):(ot=m,so="value"in ot?ot.value:ot.textContent,Bt=!0)),b=Br(d,E),0<b.length&&(E=new da(E,e,null,n,m),h.push({event:E,listeners:b}),C?E.data=C:(C=qs(n),C!==null&&(E.data=C)))),(C=Zd?Jd(e,n):qd(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(m=new da("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=C))}dc(h,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Fn(e,n),l!=null&&r.unshift(Qn(e,l,i)),l=Fn(e,t),l!=null&&r.push(Qn(e,l,i))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,i?(c=Fn(n,l),c!=null&&a.unshift(Qn(n,c,s))):i||(c=Fn(n,l),c!=null&&a.push(Qn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var fp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function Na(e){return(typeof e=="string"?e:""+e).replace(fp,`
`).replace(mp,"")}function yr(e,t,n){if(t=Na(t),Na(e)!==t&&n)throw Error(x(425))}function Vr(){}var xl=null,wl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,hp=typeof clearTimeout=="function"?clearTimeout:void 0,za=typeof Promise=="function"?Promise:void 0,gp=typeof queueMicrotask=="function"?queueMicrotask:typeof za<"u"?function(e){return za.resolve(null).then(e).catch(yp)}:jl;function yp(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wn(t)}function dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),We="__reactFiber$"+hn,Yn="__reactProps$"+hn,Ze="__reactContainer$"+hn,Sl="__reactEvents$"+hn,vp="__reactListeners$"+hn,xp="__reactHandles$"+hn;function zt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ba(e);e!==null;){if(n=e[We])return n;e=ba(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[We]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function pi(e){return e[Yn]||null}var Nl=[],Yt=-1;function xt(e){return{current:e}}function A(e){0>Yt||(e.current=Nl[Yt],Nl[Yt]=null,Yt--)}function O(e,t){Yt++,Nl[Yt]=e.current,e.current=t}var yt={},ae=xt(yt),me=xt(!1),Lt=yt;function an(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Hr(){A(me),A(ae)}function Ca(e,t,n){if(ae.current!==yt)throw Error(x(168));O(ae,t),O(me,n)}function fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,rd(e)||"Unknown",i));return H({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Lt=ae.current,O(ae,e),O(me,me.current),!0}function Ea(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=fc(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,A(me),A(ae),O(ae,e)):A(me),O(me,n)}var Qe=null,fi=!1,Ui=!1;function mc(e){Qe===null?Qe=[e]:Qe.push(e)}function wp(e){fi=!0,mc(e)}function wt(){if(!Ui&&Qe!==null){Ui=!0;var e=0,t=R;try{var n=Qe;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,fi=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),Fs(io,wt),i}finally{R=t,Ui=!1}}return null}var Xt=[],Kt=0,Yr=null,Xr=0,Se=[],Ne=0,Pt=null,Ye=1,Xe="";function St(e,t){Xt[Kt++]=Xr,Xt[Kt++]=Yr,Yr=e,Xr=t}function hc(e,t,n){Se[Ne++]=Ye,Se[Ne++]=Xe,Se[Ne++]=Pt,Pt=e;var r=Ye;e=Xe;var i=32-Me(r)-1;r&=~(1<<i),n+=1;var l=32-Me(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ye=1<<32-Me(t)+i|n<<i|r,Xe=l+e}else Ye=1<<l|n<<i|r,Xe=e}function mo(e){e.return!==null&&(St(e,1),hc(e,1,0))}function ho(e){for(;e===Yr;)Yr=Xt[--Kt],Xt[Kt]=null,Xr=Xt[--Kt],Xt[Kt]=null;for(;e===Pt;)Pt=Se[--Ne],Se[Ne]=null,Xe=Se[--Ne],Se[Ne]=null,Ye=Se[--Ne],Se[Ne]=null}var xe=null,ve=null,W=!1,Te=null;function gc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _a(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ve=dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ye,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ve=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(W){var t=ve;if(t){var n=t;if(!_a(e,t)){if(zl(e))throw Error(x(418));t=dt(n.nextSibling);var r=xe;t&&_a(e,t)?gc(r,n):(e.flags=e.flags&-4097|2,W=!1,xe=e)}}else{if(zl(e))throw Error(x(418));e.flags=e.flags&-4097|2,W=!1,xe=e}}}function La(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function vr(e){if(e!==xe)return!1;if(!W)return La(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=ve)){if(zl(e))throw yc(),Error(x(418));for(;t;)gc(e,t),t=dt(t.nextSibling)}if(La(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=xe?dt(e.stateNode.nextSibling):null;return!0}function yc(){for(var e=ve;e;)e=dt(e.nextSibling)}function sn(){ve=xe=null,W=!1}function go(e){Te===null?Te=[e]:Te.push(e)}var kp=et.ReactCurrentBatchConfig;function kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=i.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pa(e){var t=e._init;return t(e._payload)}function vc(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=ht(p,u),p.index=0,p.sibling=null,p}function l(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,f,y){return u===null||u.tag!==6?(u=Xi(f,p.mode,y),u.return=p,u):(u=i(u,f),u.return=p,u)}function c(p,u,f,y){var S=f.type;return S===Wt?m(p,u,f.props.children,y,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&Pa(S)===u.type)?(y=i(u,f.props),y.ref=kn(p,u,f),y.return=p,y):(y=Ir(f.type,f.key,f.props,null,p.mode,y),y.ref=kn(p,u,f),y.return=p,y)}function d(p,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ki(f,p.mode,y),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function m(p,u,f,y,S){return u===null||u.tag!==7?(u=_t(f,p.mode,y,S),u.return=p,u):(u=i(u,f),u.return=p,u)}function h(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Xi(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case sr:return f=Ir(u.type,u.key,u.props,null,p.mode,f),f.ref=kn(p,null,u),f.return=p,f;case Ut:return u=Ki(u,p.mode,f),u.return=p,u;case nt:var y=u._init;return h(p,y(u._payload),f)}if(zn(u)||gn(u))return u=_t(u,p.mode,f,null),u.return=p,u;xr(p,u)}return null}function g(p,u,f,y){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(p,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return f.key===S?c(p,u,f,y):null;case Ut:return f.key===S?d(p,u,f,y):null;case nt:return S=f._init,g(p,u,S(f._payload),y)}if(zn(f)||gn(f))return S!==null?null:m(p,u,f,y,null);xr(p,f)}return null}function v(p,u,f,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,s(u,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sr:return p=p.get(y.key===null?f:y.key)||null,c(u,p,y,S);case Ut:return p=p.get(y.key===null?f:y.key)||null,d(u,p,y,S);case nt:var b=y._init;return v(p,u,f,b(y._payload),S)}if(zn(y)||gn(y))return p=p.get(f)||null,m(u,p,y,S,null);xr(u,y)}return null}function w(p,u,f,y){for(var S=null,b=null,C=u,E=u=0,$=null;C!==null&&E<f.length;E++){C.index>E?($=C,C=null):$=C.sibling;var M=g(p,C,f[E],y);if(M===null){C===null&&(C=$);break}e&&C&&M.alternate===null&&t(p,C),u=l(M,u,E),b===null?S=M:b.sibling=M,b=M,C=$}if(E===f.length)return n(p,C),W&&St(p,E),S;if(C===null){for(;E<f.length;E++)C=h(p,f[E],y),C!==null&&(u=l(C,u,E),b===null?S=C:b.sibling=C,b=C);return W&&St(p,E),S}for(C=r(p,C);E<f.length;E++)$=v(C,p,E,f[E],y),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?E:$.key),u=l($,u,E),b===null?S=$:b.sibling=$,b=$);return e&&C.forEach(function(re){return t(p,re)}),W&&St(p,E),S}function j(p,u,f,y){var S=gn(f);if(typeof S!="function")throw Error(x(150));if(f=S.call(f),f==null)throw Error(x(151));for(var b=S=null,C=u,E=u=0,$=null,M=f.next();C!==null&&!M.done;E++,M=f.next()){C.index>E?($=C,C=null):$=C.sibling;var re=g(p,C,M.value,y);if(re===null){C===null&&(C=$);break}e&&C&&re.alternate===null&&t(p,C),u=l(re,u,E),b===null?S=re:b.sibling=re,b=re,C=$}if(M.done)return n(p,C),W&&St(p,E),S;if(C===null){for(;!M.done;E++,M=f.next())M=h(p,M.value,y),M!==null&&(u=l(M,u,E),b===null?S=M:b.sibling=M,b=M);return W&&St(p,E),S}for(C=r(p,C);!M.done;E++,M=f.next())M=v(C,p,E,M.value,y),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),u=l(M,u,E),b===null?S=M:b.sibling=M,b=M);return e&&C.forEach(function(Re){return t(p,Re)}),W&&St(p,E),S}function _(p,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:e:{for(var S=f.key,b=u;b!==null;){if(b.key===S){if(S=f.type,S===Wt){if(b.tag===7){n(p,b.sibling),u=i(b,f.props.children),u.return=p,p=u;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&Pa(S)===b.type){n(p,b.sibling),u=i(b,f.props),u.ref=kn(p,b,f),u.return=p,p=u;break e}n(p,b);break}else t(p,b);b=b.sibling}f.type===Wt?(u=_t(f.props.children,p.mode,y,f.key),u.return=p,p=u):(y=Ir(f.type,f.key,f.props,null,p.mode,y),y.ref=kn(p,u,f),y.return=p,p=y)}return a(p);case Ut:e:{for(b=f.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=i(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Ki(f,p.mode,y),u.return=p,p=u}return a(p);case nt:return b=f._init,_(p,u,b(f._payload),y)}if(zn(f))return w(p,u,f,y);if(gn(f))return j(p,u,f,y);xr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,f),u.return=p,p=u):(n(p,u),u=Xi(f,p.mode,y),u.return=p,p=u),a(p)):n(p,u)}return _}var cn=vc(!0),xc=vc(!1),Kr=xt(null),Gr=null,Gt=null,yo=null;function vo(){yo=Gt=Gr=null}function xo(e){var t=Kr.current;A(Kr),e._currentValue=t}function Cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){Gr=e,yo=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(Gr===null)throw Error(x(308));Gt=e,Gr.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var bt=null;function wo(e){bt===null?bt=[e]:bt.push(e)}function wc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,wo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lo(e,n)}}function Ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var i=e.updateQueue;rt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,d=c.next;c.next=null,a===null?l=d:a.next=d,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=c))}if(l!==null){var h=i.baseState;a=0,m=d=c=null,s=l;do{var g=s.lane,v=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,j=s;switch(g=t,v=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){h=w.call(v,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,g=typeof w=="function"?w.call(v,h,g):w,g==null)break e;h=H({},h,g);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=v,c=h):m=m.next=v,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=h}}function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var ir={},Ve=xt(ir),Xn=xt(ir),Kn=xt(ir);function Ct(e){if(e===ir)throw Error(x(174));return e}function jo(e,t){switch(O(Kn,t),O(Xn,e),O(Ve,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}A(Ve),O(Ve,t)}function un(){A(Ve),A(Xn),A(Kn)}function jc(e){Ct(Kn.current);var t=Ct(Ve.current),n=al(t,e.type);t!==n&&(O(Xn,e),O(Ve,n))}function So(e){Xn.current===e&&(A(Ve),A(Xn))}var B=xt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function No(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var Lr=et.ReactCurrentDispatcher,Bi=et.ReactCurrentBatchConfig,Tt=0,V=null,G=null,J=null,qr=!1,Mn=!1,Gn=0,jp=0;function ie(){throw Error(x(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,l){if(Tt=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?bp:Cp,e=n(r,i),Mn){l=0;do{if(Mn=!1,Gn=0,25<=l)throw Error(x(301));l+=1,J=G=null,t.updateQueue=null,Lr.current=Ep,e=n(r,i)}while(Mn)}if(Lr.current=ei,t=G!==null&&G.next!==null,Tt=0,J=G=V=null,qr=!1,t)throw Error(x(300));return e}function Co(){var e=Gn!==0;return Gn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?V.memoizedState=J=e:J=J.next=e,J}function Ee(){if(G===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?V.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?V.memoizedState=J=e:J=J.next=e}return J}function Zn(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=G,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=a=null,c=null,d=l;do{var m=d.lane;if((Tt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,a=r):c=c.next=h,V.lanes|=m,Mt|=m}d=d.next}while(d!==null&&d!==l);c===null?a=r:c.next=s,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,Mt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Ie(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Sc(){}function Nc(e,t){var n=V,r=Ee(),i=t(),l=!Ie(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,Eo(Cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Jn(9,bc.bind(null,n,r,i,t),void 0,null),q===null)throw Error(x(349));Tt&30||zc(n,t,i)}return i}function zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,Ec(t)&&_c(e)}function Cc(e,t,n){return n(function(){Ec(t)&&_c(e)})}function Ec(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function _c(e){var t=Je(e,1);t!==null&&De(t,e,1,-1)}function Da(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=zp.bind(null,V,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lc(){return Ee().memoizedState}function Pr(e,t,n,r){var i=Ue();V.flags|=e,i.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function mi(e,t,n,r){var i=Ee();r=r===void 0?null:r;var l=void 0;if(G!==null){var a=G.memoizedState;if(l=a.destroy,r!==null&&zo(r,a.deps)){i.memoizedState=Jn(t,n,l,r);return}}V.flags|=e,i.memoizedState=Jn(1|t,n,l,r)}function Ia(e,t){return Pr(8390656,8,e,t)}function Eo(e,t){return mi(2048,8,e,t)}function Pc(e,t){return mi(4,2,e,t)}function Tc(e,t){return mi(4,4,e,t)}function Mc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dc(e,t,n){return n=n!=null?n.concat([e]):null,mi(4,4,Mc.bind(null,t,e),n)}function _o(){}function Ic(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oc(e,t,n){return Tt&21?(Ie(n,t)||(n=Ws(),V.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function Sp(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{R=n,Bi.transition=r}}function $c(){return Ee().memoizedState}function Np(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Ac(t,n);else if(n=wc(e,t,n,r),n!==null){var i=ce();De(n,e,r,i),Uc(n,t,r)}}function zp(e,t,n){var r=mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Ac(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ie(s,a)){var c=t.interleaved;c===null?(i.next=i,wo(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=wc(e,t,i,r),n!==null&&(i=ce(),De(n,e,r,i),Uc(n,t,r))}}function Fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ac(e,t){Mn=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lo(e,n)}}var ei={readContext:Ce,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},bp={readContext:Ce,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ia,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,Mc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Np.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Da,useDebugValue:_o,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Sp.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=Ue();if(W){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),q===null)throw Error(x(349));Tt&30||zc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ia(Cc.bind(null,r,l,e),[e]),r.flags|=2048,Jn(9,bc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ue(),t=q.identifierPrefix;if(W){var n=Xe,r=Ye;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cp={readContext:Ce,useCallback:Ic,useContext:Ce,useEffect:Eo,useImperativeHandle:Dc,useInsertionEffect:Pc,useLayoutEffect:Tc,useMemo:Rc,useReducer:Vi,useRef:Lc,useState:function(){return Vi(Zn)},useDebugValue:_o,useDeferredValue:function(e){var t=Ee();return Oc(t,G.memoizedState,e)},useTransition:function(){var e=Vi(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Nc,useId:$c,unstable_isNewReconciler:!1},Ep={readContext:Ce,useCallback:Ic,useContext:Ce,useEffect:Eo,useImperativeHandle:Dc,useInsertionEffect:Pc,useLayoutEffect:Tc,useMemo:Rc,useReducer:Hi,useRef:Lc,useState:function(){return Hi(Zn)},useDebugValue:_o,useDeferredValue:function(e){var t=Ee();return G===null?t.memoizedState=e:Oc(t,G.memoizedState,e)},useTransition:function(){var e=Hi(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Nc,useId:$c,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function El(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hi={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),l=Ke(r,i);l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,i),t!==null&&(De(t,e,i,r),_r(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),l=Ke(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pt(e,l,i),t!==null&&(De(t,e,i,r),_r(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=pt(e,i,r),t!==null&&(De(t,e,r,n),_r(t,e,r))}};function Ra(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Vn(n,r)||!Vn(i,l):!0}function Wc(e,t,n){var r=!1,i=yt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(i=he(t)?Lt:ae.current,r=t.contextTypes,l=(r=r!=null)?an(e,i):yt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hi.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ko(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ce(l):(l=he(t)?Lt:ae.current,i.context=an(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(El(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hi.enqueueReplaceState(i,i.state,null),Zr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=nd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ni||(ni=!0,Al=r),Ll(e,t)},n}function Vc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ll(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ll(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bp.bind(null,e,t,n),t.then(e,e))}function Fa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Aa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var Lp=et.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?xc(t,null,n,r):cn(t,e.child,n,r)}function Ua(e,t,n,r,i){n=n.render;var l=t.ref;return rn(t,i),r=bo(e,t,n,r,l,i),n=Co(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(W&&n&&mo(t),t.flags|=1,se(e,t,r,i),t.child)}function Wa(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Oo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Hc(e,t,l,r,i)):(e=Ir(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Vn,n(a,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=ht(l,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Vn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Pl(e,t,n,r,i)}function Qc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Jt,ye),ye|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Jt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(Jt,ye),ye|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(Jt,ye),ye|=r;return se(e,t,i,n),t.child}function Yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,i){var l=he(n)?Lt:ae.current;return l=an(t,l),rn(t,i),n=bo(e,t,n,r,l,i),r=Co(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(W&&r&&mo(t),t.flags|=1,se(e,t,n,i),t.child)}function Ba(e,t,n,r,i){if(he(n)){var l=!0;Qr(t)}else l=!1;if(rn(t,i),t.stateNode===null)Tr(e,t),Wc(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=he(n)?Lt:ae.current,d=an(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==d)&&Oa(t,a,r,d),rt=!1;var g=t.memoizedState;a.state=g,Zr(t,r,a,i),c=t.memoizedState,s!==r||g!==c||me.current||rt?(typeof m=="function"&&(El(t,n,m,r),c=t.memoizedState),(s=rt||Ra(t,n,s,r,g,c,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Le(t.type,s),a.props=d,h=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ce(c):(c=he(n)?Lt:ae.current,c=an(t,c));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||g!==c)&&Oa(t,a,r,c),rt=!1,g=t.memoizedState,a.state=g,Zr(t,r,a,i);var w=t.memoizedState;s!==h||g!==w||me.current||rt?(typeof v=="function"&&(El(t,n,v,r),w=t.memoizedState),(d=rt||Ra(t,n,d,r,g,w,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,l,i)}function Tl(e,t,n,r,i,l){Yc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ea(t,n,!1),qe(e,t,l);r=t.stateNode,Lp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,l),t.child=cn(t,null,s,l)):se(e,t,s,l),t.memoizedState=r.state,i&&Ea(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?Ca(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ca(e,t.context,!1),jo(e,t.containerInfo)}function Va(e,t,n,r,i){return sn(),go(i),t.flags|=256,se(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var r=t.pendingProps,i=B.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(B,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=vi(a,r,0,null),e=_t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ml,e):Lo(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Pp(e,t,a,r,s,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=ht(s,l):(l=_t(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Dl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=ht(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lo(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&go(r),cn(t,e.child,null,n),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pp(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(x(422))),wr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=vi({mode:"visible",children:r.children},i,0,null),l=_t(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&cn(t,e.child,null,a),t.child.memoizedState=Dl(a),t.memoizedState=Ml,l);if(!(t.mode&1))return wr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(x(419)),r=Qi(l,r,void 0),wr(e,t,a,r)}if(s=(a&e.childLanes)!==0,fe||s){if(r=q,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),De(r,e,i,-1))}return Ro(),r=Qi(Error(x(421))),wr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ve=dt(i.nextSibling),xe=t,W=!0,Te=null,e!==null&&(Se[Ne++]=Ye,Se[Ne++]=Xe,Se[Ne++]=Pt,Ye=e.id,Xe=e.overflow,Pt=t),t=Lo(t,r.children),t.flags|=4096,t)}function Ha(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cl(e.return,t,n)}function Yi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Gc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ha(e,n,t);else if(e.tag===19)Ha(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(B,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yi(t,!0,n,null,l);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:Xc(t),sn();break;case 5:jc(t);break;case 1:he(t.type)&&Qr(t);break;case 4:jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(Kr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(O(B,B.current&1),e=qe(e,t,n),e!==null?e.sibling:null);O(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,n)}return qe(e,t,n)}var Zc,Il,Jc,qc;Zc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};Jc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ct(Ve.current);var l=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),l=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),l=[];break;case"textarea":i=ol(e,i),r=ol(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}sl(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(On.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(On.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&F("scroll",e),l||s===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};qc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mp(e,t,n){var r=t.pendingProps;switch(ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Hr(),le(t),null;case 3:return r=t.stateNode,un(),A(me),A(ae),No(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Bl(Te),Te=null))),Il(e,t),le(t),null;case 5:So(t);var i=Ct(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Jc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return le(t),null}if(e=Ct(Ve.current),vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[We]=t,r[Yn]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Cn.length;i++)F(Cn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":ea(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":na(r,l),F("invalid",r)}sl(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&yr(r.textContent,s,e),i=["children",""+s]):On.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":cr(r),ta(r,l,!0);break;case"textarea":cr(r),ra(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[We]=t,e[Yn]=r,Zc(e,t,!1,!1),t.stateNode=e;e:{switch(a=cl(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cn.length;i++)F(Cn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":ea(e,r),i=rl(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":na(e,r),i=ol(e,r),F("invalid",e);break;default:i=r}sl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Ls(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Es(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$n(e,c):typeof c=="number"&&$n(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(On.hasOwnProperty(l)?c!=null&&l==="onScroll"&&F("scroll",e):c!=null&&ql(e,l,c,a))}switch(n){case"input":cr(e),ta(e,r,!1);break;case"textarea":cr(e),ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?qt(e,!!r.multiple,l,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Ct(Kn.current),Ct(Ve.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return le(t),null;case 13:if(A(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ve!==null&&t.mode&1&&!(t.flags&128))yc(),sn(),t.flags|=98560,l=!1;else if(l=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[We]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Te!==null&&(Bl(Te),Te=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Ro())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return un(),Il(e,t),e===null&&Hn(t.stateNode.containerInfo),le(t),null;case 10:return xo(t.type._context),le(t),null;case 17:return he(t.type)&&Hr(),le(t),null;case 19:if(A(B),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)jn(l,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Jr(e),a!==null){for(t.flags|=128,jn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(B,B.current&1|2),t.child}e=e.sibling}l.tail!==null&&Y()>pn&&(t.flags|=128,r=!0,jn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!W)return le(t),null}else 2*Y()-l.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Y(),t.sibling=null,n=B.current,O(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Dp(e,t){switch(ho(t),t.tag){case 1:return he(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),A(me),A(ae),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(A(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(B),null;case 4:return un(),null;case 10:return xo(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var kr=!1,oe=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,N=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Qa=!1;function Rp(e,t){if(xl=Ur,e=ic(),fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,d=0,m=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(s=a+i),h!==l||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++d===i&&(s=a),g===l&&++m===r&&(c=a),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Ur=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,_=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?j:Le(t.type,j),_);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=Qa,Qa=!1,w}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Rl(t,n,l)}i=i.next}while(i!==r)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ol(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Yn],delete t[Sl],delete t[vp],delete t[xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function Ya(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var ee=null,Pe=!1;function tt(e,t,n){for(n=n.child;n!==null;)nu(e,t,n),n=n.sibling}function nu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:oe||Zt(n,t);case 6:var r=ee,i=Pe;ee=null,tt(e,t,n),ee=r,Pe=i,ee!==null&&(Pe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Pe?(e=ee,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),Wn(e)):Ai(ee,n.stateNode));break;case 4:r=ee,i=Pe,ee=n.stateNode.containerInfo,Pe=!0,tt(e,t,n),ee=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Rl(n,t,a),i=i.next}while(i!==r)}tt(e,t,n);break;case 1:if(!oe&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,tt(e,t,n),oe=r):tt(e,t,n);break;default:tt(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ip),t.forEach(function(r){var i=Hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Pe=!1;break e;case 3:ee=s.stateNode.containerInfo,Pe=!0;break e;case 4:ee=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(ee===null)throw Error(x(160));nu(l,a,i),ee=null,Pe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Ae(e),r&4){try{Dn(3,e,e.return),gi(3,e)}catch(j){Q(e,e.return,j)}try{Dn(5,e,e.return)}catch(j){Q(e,e.return,j)}}break;case 1:_e(t,e),Ae(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(_e(t,e),Ae(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{$n(i,"")}catch(j){Q(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&zs(i,l),cl(s,a);var d=cl(s,l);for(a=0;a<c.length;a+=2){var m=c[a],h=c[a+1];m==="style"?Ls(i,h):m==="dangerouslySetInnerHTML"?Es(i,h):m==="children"?$n(i,h):ql(i,m,h,d)}switch(s){case"input":il(i,l);break;case"textarea":bs(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?qt(i,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?qt(i,!!l.multiple,l.defaultValue,!0):qt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Yn]=l}catch(j){Q(e,e.return,j)}}break;case 6:if(_e(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(j){Q(e,e.return,j)}}break;case 3:if(_e(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(j){Q(e,e.return,j)}break;case 4:_e(t,e),Ae(e);break;case 13:_e(t,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Mo=Y())),r&4&&Xa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||m,_e(t,e),oe=d):_e(t,e),Ae(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(h=N=m;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:Dn(4,g,g.return);break;case 1:Zt(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){Q(r,n,j)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){Ga(h);continue}}v!==null?(v.return=g,N=v):Ga(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=_s("display",a))}catch(j){Q(e,e.return,j)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){Q(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Ae(e),r&4&&Xa(e);break;case 21:break;default:_e(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($n(i,""),r.flags&=-33);var l=Ya(e);Fl(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ya(e);$l(e,s,a);break;default:throw Error(x(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Op(e,t,n){N=e,iu(e)}function iu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||kr;if(!a){var s=i.alternate,c=s!==null&&s.memoizedState!==null||oe;s=kr;var d=oe;if(kr=a,(oe=c)&&!d)for(N=i;N!==null;)a=N,c=a.child,a.tag===22&&a.memoizedState!==null?Za(i):c!==null?(c.return=a,N=c):Za(i);for(;l!==null;)N=l,iu(l),l=l.sibling;N=i,kr=s,oe=d}Ka(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,N=l):Ka(e)}}function Ka(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ma(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ma(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Wn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}oe||t.flags&512&&Ol(t)}catch(g){Q(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ga(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Za(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gi(4,t)}catch(c){Q(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Q(t,i,c)}}var l=t.return;try{Ol(t)}catch(c){Q(t,l,c)}break;case 5:var a=t.return;try{Ol(t)}catch(c){Q(t,a,c)}}}catch(c){Q(t,t.return,c)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var $p=Math.ceil,ti=et.ReactCurrentDispatcher,Po=et.ReactCurrentOwner,be=et.ReactCurrentBatchConfig,I=0,q=null,K=null,te=0,ye=0,Jt=xt(0),Z=0,qn=null,Mt=0,yi=0,To=0,In=null,pe=null,Mo=0,pn=1/0,He=null,ni=!1,Al=null,ft=null,jr=!1,at=null,ri=0,Rn=0,Ul=null,Mr=-1,Dr=0;function ce(){return I&6?Y():Mr!==-1?Mr:Mr=Y()}function mt(e){return e.mode&1?I&2&&te!==0?te&-te:kp.transition!==null?(Dr===0&&(Dr=Ws()),Dr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function De(e,t,n,r){if(50<Rn)throw Rn=0,Ul=null,Error(x(185));tr(e,n,r),(!(I&2)||e!==q)&&(e===q&&(!(I&2)&&(yi|=n),Z===4&&lt(e,te)),ge(e,r),n===1&&I===0&&!(t.mode&1)&&(pn=Y()+500,fi&&wt()))}function ge(e,t){var n=e.callbackNode;kd(e,t);var r=Ar(e,e===q?te:0);if(r===0)n!==null&&oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oa(n),t===1)e.tag===0?wp(Ja.bind(null,e)):mc(Ja.bind(null,e)),gp(function(){!(I&6)&&wt()}),n=null;else{switch(Bs(r)){case 1:n=io;break;case 4:n=As;break;case 16:n=Fr;break;case 536870912:n=Us;break;default:n=Fr}n=pu(n,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lu(e,t){if(Mr=-1,Dr=0,I&6)throw Error(x(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Ar(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ii(e,r);else{t=r;var i=I;I|=2;var l=au();(q!==e||te!==t)&&(He=null,pn=Y()+500,Et(e,t));do try{Up();break}catch(s){ou(e,s)}while(1);vo(),ti.current=l,I=i,K!==null?t=0:(q=null,te=0,t=Z)}if(t!==0){if(t===2&&(i=ml(e),i!==0&&(r=i,t=Wl(e,i))),t===1)throw n=qn,Et(e,0),lt(e,r),ge(e,Y()),n;if(t===6)lt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fp(i)&&(t=ii(e,r),t===2&&(l=ml(e),l!==0&&(r=l,t=Wl(e,l))),t===1))throw n=qn,Et(e,0),lt(e,r),ge(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Nt(e,pe,He);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Mo+500-Y(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(Nt.bind(null,e,pe,He),t);break}Nt(e,pe,He);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Me(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$p(r/1960))-r,10<r){e.timeoutHandle=jl(Nt.bind(null,e,pe,He),r);break}Nt(e,pe,He);break;case 5:Nt(e,pe,He);break;default:throw Error(x(329))}}}return ge(e,Y()),e.callbackNode===n?lu.bind(null,e):null}function Wl(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=ii(e,t),e!==2&&(t=pe,pe=n,t!==null&&Bl(t)),e}function Bl(e){pe===null?pe=e:pe.push.apply(pe,e)}function Fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ie(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~To,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Ja(e){if(I&6)throw Error(x(327));ln();var t=Ar(e,0);if(!(t&1))return ge(e,Y()),null;var n=ii(e,t);if(e.tag!==0&&n===2){var r=ml(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=qn,Et(e,0),lt(e,t),ge(e,Y()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,He),ge(e,Y()),null}function Do(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(pn=Y()+500,fi&&wt())}}function Dt(e){at!==null&&at.tag===0&&!(I&6)&&ln();var t=I;I|=1;var n=be.transition,r=R;try{if(be.transition=null,R=1,e)return e()}finally{R=r,be.transition=n,I=t,!(I&6)&&wt()}}function Io(){ye=Jt.current,A(Jt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hp(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:un(),A(me),A(ae),No();break;case 5:So(r);break;case 4:un();break;case 13:A(B);break;case 19:A(B);break;case 10:xo(r.type._context);break;case 22:case 23:Io()}n=n.return}if(q=e,K=e=ht(e.current,null),te=ye=t,Z=0,qn=null,To=yi=Mt=0,pe=In=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}bt=null}return e}function ou(e,t){do{var n=K;try{if(vo(),Lr.current=ei,qr){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qr=!1}if(Tt=0,J=G=V=null,Mn=!1,Gn=0,Po.current=null,n===null||n.return===null){Z=1,qn=t,K=null;break}e:{var l=e,a=n.return,s=n,c=t;if(t=te,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Fa(a);if(v!==null){v.flags&=-257,Aa(v,a,s,l,t),v.mode&1&&$a(l,d,t),t=v,c=d;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){$a(l,d,t),Ro();break e}c=Error(x(426))}}else if(W&&s.mode&1){var _=Fa(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Aa(_,a,s,l,t),go(dn(c,s));break e}}l=c=dn(c,s),Z!==4&&(Z=2),In===null?In=[l]:In.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Bc(l,c,t);Ta(l,p);break e;case 1:s=c;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Vc(l,s,t);Ta(l,y);break e}}l=l.return}while(l!==null)}cu(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function au(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Ro(){(Z===0||Z===3||Z===2)&&(Z=4),q===null||!(Mt&268435455)&&!(yi&268435455)||lt(q,te)}function ii(e,t){var n=I;I|=2;var r=au();(q!==e||te!==t)&&(He=null,Et(e,t));do try{Ap();break}catch(i){ou(e,i)}while(1);if(vo(),I=n,ti.current=r,K!==null)throw Error(x(261));return q=null,te=0,Z}function Ap(){for(;K!==null;)su(K)}function Up(){for(;K!==null&&!pd();)su(K)}function su(e){var t=du(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?cu(e):K=t,Po.current=null}function cu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,K=null;return}}else if(n=Mp(n,t,ye),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Z===0&&(Z=5)}function Nt(e,t,n){var r=R,i=be.transition;try{be.transition=null,R=1,Wp(e,t,n,r)}finally{be.transition=i,R=r}return null}function Wp(e,t,n,r){do ln();while(at!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(jd(e,l),e===q&&(K=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,pu(Fr,function(){return ln(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=be.transition,be.transition=null;var a=R;R=1;var s=I;I|=4,Po.current=null,Rp(e,n),ru(n,e),sp(wl),Ur=!!xl,wl=xl=null,e.current=n,Op(n),fd(),I=s,R=a,be.transition=l}else e.current=n;if(jr&&(jr=!1,at=e,ri=i),l=e.pendingLanes,l===0&&(ft=null),gd(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ni)throw ni=!1,e=Al,Al=null,e;return ri&1&&e.tag!==0&&ln(),l=e.pendingLanes,l&1?e===Ul?Rn++:(Rn=0,Ul=e):Rn=0,wt(),null}function ln(){if(at!==null){var e=Bs(ri),t=be.transition,n=R;try{if(be.transition=null,R=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,ri=0,I&6)throw Error(x(331));var i=I;for(I|=4,N=e.current;N!==null;){var l=N,a=l.child;if(N.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(N=d;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Dn(8,m,l)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var g=m.sibling,v=m.return;if(eu(m),m===d){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var w=l.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var _=j.sibling;j.sibling=null,j=_}while(j!==null)}}N=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,N=a;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Dn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,N=p;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){a=N;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,N=f;else e:for(a=u;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:gi(9,s)}}catch(S){Q(s,s.return,S)}if(s===a){N=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,N=y;break e}N=s.return}}if(I=i,wt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{R=n,be.transition=t}}return!1}function qa(e,t,n){t=dn(n,t),t=Bc(e,t,1),e=pt(e,t,1),t=ce(),e!==null&&(tr(e,1,t),ge(e,t))}function Q(e,t,n){if(e.tag===3)qa(e,e,n);else for(;t!==null;){if(t.tag===3){qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=dn(n,e),e=Vc(t,e,1),t=pt(t,e,1),e=ce(),t!==null&&(tr(t,1,e),ge(t,e));break}}t=t.return}}function Bp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>Y()-Mo?Et(e,0):To|=n),ge(e,t)}function uu(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(tr(e,t,n),ge(e,n))}function Vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uu(e,n)}function Hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),uu(e,n)}var du;du=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,Tp(e,t,n);fe=!!(e.flags&131072)}else fe=!1,W&&t.flags&1048576&&hc(t,Xr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var i=an(t,ae.current);rn(t,n),i=bo(null,t,r,e,i,n);var l=Co();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(l=!0,Qr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ko(t),i.updater=hi,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=Tl(null,t,r,!0,l,n)):(t.tag=0,W&&l&&mo(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Yp(r),e=Le(r,e),i){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=Ba(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Wa(null,t,r,Le(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ba(e,t,r,i,n);case 3:e:{if(Xc(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,i=l.element,kc(e,t),Zr(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=dn(Error(x(423)),t),t=Va(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(x(424)),t),t=Va(e,t,r,n,i);break e}else for(ve=dt(t.stateNode.containerInfo.firstChild),xe=t,W=!0,Te=null,n=xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===i){t=qe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&bl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,kl(r,i)?a=null:l!==null&&kl(r,l)&&(t.flags|=32),Yc(e,t),se(e,t,a,n),t.child;case 6:return e===null&&bl(t),null;case 13:return Kc(e,t,n);case 4:return jo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Ua(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,O(Kr,r._currentValue),r._currentValue=a,l!==null)if(Ie(l.value,a)){if(l.children===i.children&&!me.current){t=qe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Ke(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Cl(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Cl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rn(t,n),i=Ce(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=Le(r,t.pendingProps),i=Le(r.type,i),Wa(e,t,r,i,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Tr(e,t),t.tag=1,he(r)?(e=!0,Qr(t)):e=!1,rn(t,n),Wc(t,r,i),_l(t,r,i,n),Tl(null,t,r,!0,e,n);case 19:return Gc(e,t,n);case 22:return Qc(e,t,n)}throw Error(x(156,t.tag))};function pu(e,t){return Fs(e,t)}function Qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Qp(e,t,n,r)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yp(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===to)return 11;if(e===no)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ir(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Oo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return _t(n.children,i,l,t);case eo:a=8,i|=8;break;case qi:return e=ze(12,n,t,i|2),e.elementType=qi,e.lanes=l,e;case el:return e=ze(13,n,t,i),e.elementType=el,e.lanes=l,e;case tl:return e=ze(19,n,t,i),e.elementType=tl,e.lanes=l,e;case js:return vi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ws:a=10;break e;case ks:a=9;break e;case to:a=11;break e;case no:a=14;break e;case nt:a=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=ze(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function _t(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=ze(22,e,r,t),e.elementType=js,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $o(e,t,n,r,i,l,a,s,c){return e=new Xp(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ze(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(l),e}function Kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fu(e){if(!e)return yt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return fc(e,n,t)}return t}function mu(e,t,n,r,i,l,a,s,c){return e=$o(n,r,!0,e,i,l,a,s,c),e.context=fu(null),n=e.current,r=ce(),i=mt(n),l=Ke(r,i),l.callback=t??null,pt(n,l,i),e.current.lanes=i,tr(e,i,r),ge(e,r),e}function xi(e,t,n,r){var i=t.current,l=ce(),a=mt(i);return n=fu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(i,t,a),e!==null&&(De(e,i,a,l),_r(e,i,a)),a}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){es(e,t),(e=e.alternate)&&es(e,t)}function Gp(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}wi.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));xi(e,t,null,null)};wi.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){xi(null,e,null,null)}),t[Ze]=null}};function wi(e){this._internalRoot=e}wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Xs(e)}};function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ts(){}function Zp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=li(a);l.call(d)}}var a=mu(t,r,e,0,null,!1,!1,"",ts);return e._reactRootContainer=a,e[Ze]=a.current,Hn(e.nodeType===8?e.parentNode:e),Dt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=li(c);s.call(d)}}var c=$o(e,0,!1,null,null,!1,!1,"",ts);return e._reactRootContainer=c,e[Ze]=c.current,Hn(e.nodeType===8?e.parentNode:e),Dt(function(){xi(t,c,n,r)}),c}function ji(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var s=i;i=function(){var c=li(a);s.call(c)}}xi(t,a,e,i)}else a=Zp(n,t,e,i,r);return li(a)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(lo(t,n|1),ge(t,Y()),!(I&6)&&(pn=Y()+500,wt()))}break;case 13:Dt(function(){var r=Je(e,1);if(r!==null){var i=ce();De(r,e,1,i)}}),Fo(e,1)}};oo=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();De(t,e,134217728,n)}Fo(e,134217728)}};Hs=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ce();De(n,e,t,r)}Fo(e,t)}};Qs=function(){return R};Ys=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};dl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pi(r);if(!i)throw Error(x(90));Ns(r),il(r,i)}}}break;case"textarea":bs(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Ms=Do;Ds=Dt;var Jp={usingClientEntryPoint:!1,Events:[rr,Qt,pi,Ps,Ts,Do]},Sn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Os(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{si=Sr.inject(qp),Be=Sr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uo(t))throw Error(x(200));return Kp(e,t,null,n)};ke.createRoot=function(e,t){if(!Uo(e))throw Error(x(299));var n=!1,r="",i=hu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$o(e,1,!1,null,null,n,!1,r,i),e[Ze]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ao(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Os(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Dt(e)};ke.hydrate=function(e,t,n){if(!ki(t))throw Error(x(200));return ji(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Uo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=hu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=mu(t,null,e,1,n??null,i,!1,l,a),e[Ze]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wi(t)};ke.render=function(e,t,n){if(!ki(t))throw Error(x(200));return ji(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!ki(e))throw Error(x(40));return e._reactRootContainer?(Dt(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};ke.unstable_batchedUpdates=Do;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ki(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ji(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function gu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gu)}catch(e){console.error(e)}}gu(),gs.exports=ke;var ef=gs.exports,ns=ef;Zi.createRoot=ns.createRoot,Zi.hydrateRoot=ns.hydrateRoot;var tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const nf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=(e,t)=>{const n=P.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,children:s,...c},d)=>P.createElement("svg",{ref:d,...tf,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:`lucide lucide-${nf(e)}`,...c},[...t.map(([m,h])=>P.createElement(m,h)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n},Wo=L("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),Bo=L("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),rf=L("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),lf=L("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),Vo=L("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),yu=L("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]),of=L("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),vu=L("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]),xu=L("CheckCircle2",[["path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",key:"14v8dr"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),af=L("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),sf=L("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),cf=L("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Gi=L("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),uf=L("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),df=L("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),pf=L("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),ff=L("Columns",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}]]),mf=L("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]),Ho=L("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Qo=L("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Vl=L("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),hf=L("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),gf=L("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]),yf=L("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),vf=L("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),xf=L("Layout",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9",key:"wpwpyp"}]]),wu=L("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),oi=L("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),wf=L("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),kf=L("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),jf=L("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Sf=L("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]),Nf=L("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),zf=L("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]),bf=L("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),Cf=L("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Ef=L("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),_f=L("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Yo=L("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),ku=L("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),Lf=L("StickyNote",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M15 3v6h6",key:"edgan2"}]]),Pf=L("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Tf=L("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),ju=L("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Su=L("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Mf=L("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Df=L("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),If=()=>{const{theme:e,toggleTheme:t,setCurrentPage:n,currentPage:r}=Ot(),[i,l]=Gl.useState(!1),a=()=>l(!i),s=c=>{n(c),l(!1)};return o.jsxs("header",{className:"glass header",children:[o.jsxs("div",{className:"container header-content",children:[o.jsxs("div",{className:"header-left",children:[o.jsx("button",{className:"menu-trigger",onClick:a,"aria-label":"Open Menu",children:o.jsx(wf,{size:24})}),o.jsxs("div",{className:"logo",onClick:()=>s("dashboard"),children:[o.jsx("div",{className:"logo-icon",children:o.jsx(mf,{size:24,color:"var(--accent-primary)"})}),o.jsxs("span",{className:"logo-text",children:["Student",o.jsx("span",{className:"gradient-text",children:"Companion"})]})]})]}),o.jsx("nav",{className:"nav-links",children:["dashboard","learn","think","build"].map(c=>o.jsx("button",{onClick:()=>s(c),className:`nav-link ${r===c?"active":""}`,children:c.charAt(0).toUpperCase()+c.slice(1)},c))}),o.jsx("button",{className:"theme-toggle",onClick:t,"aria-label":"Toggle Theme",children:e==="light"?o.jsx(jf,{size:20}):o.jsx(Pf,{size:20})})]}),o.jsxs("div",{className:`menu-drawer ${i?"open":""}`,children:[o.jsxs("div",{className:"drawer-header",children:[o.jsx("span",{className:"drawer-title",children:"Course Explorer"}),o.jsx("button",{className:"close-btn",onClick:a,children:o.jsx(ju,{size:20})})]}),o.jsx("div",{className:"drawer-sections",children:o.jsxs("div",{className:"drawer-section",children:[o.jsx("h4",{className:"section-label",children:"Main Views"}),o.jsxs("div",{className:"menu-items",children:[o.jsxs("button",{className:`menu-item ${r==="dashboard"?"active":""}`,onClick:()=>s("dashboard"),children:[o.jsx("div",{className:"item-icon",children:o.jsx(yu,{size:20})}),o.jsxs("div",{className:"item-content",children:[o.jsx("span",{className:"item-title",children:"Textbook"}),o.jsx("span",{className:"item-desc",children:"Course materials & landing"})]}),o.jsx(Gi,{size:16,className:"arrow"})]}),o.jsxs("button",{className:`menu-item ${r==="teaching-assistant"?"active":""}`,onClick:()=>s("teaching-assistant"),children:[o.jsx("div",{className:"item-icon",children:o.jsx(of,{size:20})}),o.jsxs("div",{className:"item-content",children:[o.jsx("span",{className:"item-title",children:"Teaching Assistant"}),o.jsx("span",{className:"item-desc",children:"Strategic Orchestration guide"})]}),o.jsx(Gi,{size:16,className:"arrow"})]}),o.jsxs("button",{className:`menu-item ${r==="visualisation"?"active":""}`,onClick:()=>s("visualisation"),children:[o.jsx("div",{className:"item-icon",children:o.jsx(lf,{size:20})}),o.jsxs("div",{className:"item-content",children:[o.jsx("span",{className:"item-title",children:"Visualisation"}),o.jsx("span",{className:"item-desc",children:"Operating model journey"})]}),o.jsx(Gi,{size:16,className:"arrow"})]})]})]})})]}),i&&o.jsx("div",{className:"menu-overlay",onClick:a}),o.jsx("style",{children:`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 72px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .menu-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--text-secondary);
        }
        .menu-trigger:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link.active {
          color: var(--accent-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }
        .theme-toggle {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }
        .theme-toggle:hover {
          background: var(--bg-secondary);
          transform: translateY(-2px);
          box-shadow: var(--card-shadow);
        }
        
        /* Drawer Styles */
        .menu-drawer {
          position: fixed;
          top: 0;
          left: -320px;
          width: 320px;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 1000;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-right: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .menu-drawer.open {
          transform: translateX(320px);
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .drawer-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
        }
        .close-btn {
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: 50%;
        }
        .close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .section-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 1.25rem;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .menu-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 15px;
          text-align: left;
          width: 100%;
          border: 1px solid transparent;
        }
        .menu-item:hover {
          background: var(--bg-secondary);
          border-color: var(--border-color);
        }
        .menu-item.active {
          background: var(--accent-primary-20);
          border-color: var(--accent-primary);
        }
        .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          color: var(--accent-primary);
        }
        .item-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .item-title {
          font-weight: 400;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .item-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          z-index: 999;
          backdrop-filter: blur(4px);
        }
        .arrow {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.2s;
        }
        .menu-item:hover .arrow {
          opacity: 1;
          transform: translateX(4px);
        }
      `})]})},Nu=({currentDay:e=3})=>{const t=[{id:1,title:"Day 1",date:"Weekend 1, Sat",status:"completed"},{id:2,title:"Day 2",date:"Weekend 1, Sun",status:"completed"},{id:3,title:"Day 3",date:"Weekend 2, Sat",status:"active"},{id:4,title:"Day 4",date:"Weekend 2, Sun",status:"upcoming"},{id:5,title:"Day 5",date:"Weekend 3, Sat",status:"upcoming"},{id:6,title:"Day 6",date:"Weekend 3, Sun",status:"upcoming"}],[n,r]=P.useState(null);return o.jsxs("div",{className:"timeline-container glass",children:[o.jsxs("div",{className:"timeline-header",children:[o.jsx("h3",{className:"timeline-title",children:"Course Journey"}),o.jsx("div",{className:"timeline-badge",children:o.jsxs("span",{children:["Day ",e," of 6"]})})]}),o.jsxs("div",{className:"timeline-track",children:[o.jsx("div",{className:"timeline-line",children:o.jsx("div",{className:"timeline-progress",style:{width:`${(e-1)/(t.length-1)*100}%`}})}),o.jsx("div",{className:"timeline-nodes",children:t.map(i=>o.jsxs("div",{className:`timeline-node ${i.status} ${n===i.id?"hovered":""}`,onMouseEnter:()=>r(i.id),onMouseLeave:()=>r(null),children:[o.jsxs("div",{className:"node-dot-wrapper",children:[o.jsx("div",{className:"node-dot"}),i.status==="active"&&o.jsx("div",{className:"dot-pulse"})]}),o.jsx("span",{className:"node-day",children:i.title}),n===i.id&&o.jsx("div",{className:"node-tooltip glass",children:o.jsx("p",{children:i.date})})]},i.id))})]}),o.jsx("style",{children:`
        .timeline-container {
          padding: 1.25rem 2rem;
          border-radius: 16px;
          box-shadow: var(--card-shadow);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .timeline-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .timeline-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--accent-glow);
          color: var(--accent-primary);
          padding: 0.25rem 0.65rem;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .timeline-track {
          position: relative;
          padding: 0.5rem 0;
        }
        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--bg-tertiary);
          transform: translateY(-50%);
          border-radius: 2px;
        }
        .timeline-progress {
          height: 100%;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .timeline-nodes {
          position: relative;
          display: flex;
          justify-content: space-between;
          z-index: 10;
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          position: relative;
        }
        .node-dot-wrapper {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          transition: all 0.3s ease;
          z-index: 2;
          position: relative;
        }
        .timeline-node.completed .node-dot {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .timeline-node.active .node-dot {
          width: 13px;
          height: 13px;
          background: var(--accent-primary);
          border-color: var(--accent-primary);
        }
        .dot-pulse {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid var(--accent-primary);
          animation: dot-pulse 2s infinite;
          z-index: 1;
        }
        @keyframes dot-pulse {
          0%   { transform: scale(0.6); opacity: 0.6; }
          70%  { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(0.6); opacity: 0; }
        }
        .node-day {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--text-tertiary);
          white-space: nowrap;
        }
        .timeline-node.active .node-day {
          color: var(--accent-primary);
          font-weight: 600;
        }
        .timeline-node.completed .node-day {
          color: var(--text-secondary);
        }
        .node-tooltip {
          position: absolute;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          font-size: 0.68rem;
          text-align: center;
          font-weight: 500;
          color: var(--text-secondary);
          animation: fadeIn 0.2s ease-out;
          white-space: nowrap;
          z-index: 20;
          box-shadow: var(--card-shadow);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `})]})},zu=({title:e,description:t,icon:n,color:r,onClick:i,status:l})=>o.jsxs("div",{className:"pillar-card glass",onClick:i,children:[o.jsx("div",{className:"card-accent",style:{background:r}}),o.jsxs("div",{className:"card-header",children:[o.jsx("div",{className:"icon-container",style:{background:`${r}15`,color:r},children:o.jsx(n,{size:24})}),o.jsx(rf,{className:"arrow-icon",size:20})]}),o.jsxs("div",{className:"card-body",children:[o.jsx("h3",{className:"card-title",children:e}),o.jsx("p",{className:"card-description",children:t})]}),o.jsx("div",{className:"card-footer",children:o.jsx("span",{className:"card-status",children:l})}),o.jsx("style",{children:`
        .pillar-card {
          position: relative;
          padding: 2rem;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          box-shadow: var(--card-shadow);
          border: 1px solid var(--border-color);
        }
        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--card-shadow-hover);
        }
        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .icon-container {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-icon {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }
        .pillar-card:hover .arrow-icon {
          color: var(--text-primary);
          transform: translate(2px, -2px);
        }
        .card-title {
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .card-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .card-footer {
          margin-top: auto;
        }
        .card-status {
          font-size: 0.75rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }
      `})]}),rs=()=>{const{setCurrentPage:e}=Ot(),t=[{id:"learn",title:"Learn",description:"Access course presentations, your personal notes, and high-impact pre-read materials.",icon:Vo,color:"var(--accent-primary)",status:"4 New Materials"},{id:"think",title:"Think",description:"Dive into strategic workspaces where you tackle leadership problems with frameworks.",icon:wu,color:"var(--accent-secondary)",status:"2 Activities Due"},{id:"build",title:"Build",description:"Navigate to the simulator to apply your learning in a high-stakes AI environment.",icon:vu,color:"var(--accent-primary)",status:"Next Challenge Ready"}];return o.jsxs("div",{className:"container dashboard-page",children:[o.jsxs("section",{className:"dashboard-hero",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("h1",{className:"hero-title",children:["Welcome back, ",o.jsx("span",{className:"gradient-text",children:"Leader"}),"."]}),o.jsx("p",{className:"hero-subtitle",children:"You are currently on Day 3 of the AI Leadership Journey. Here is your progress and what's next."})]}),o.jsxs("div",{className:"next-session-card glass",children:[o.jsx("div",{className:"next-label",children:"Next Live Session"}),o.jsx("div",{className:"next-date",children:"Tomorrow, 09:00 AM"}),o.jsxs("button",{className:"prep-btn",onClick:()=>e("learn"),children:["Prepare for Session 4 ",o.jsx(Bo,{size:16})]})]})]}),o.jsx(Nu,{currentDay:3}),o.jsx("section",{className:"pillars-grid",children:t.map(n=>o.jsx(zu,{...n,onClick:()=>e(n.id)},n.id))}),o.jsx("style",{children:`
        .dashboard-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
        }
        .dashboard-hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }
        .hero-title {
          font-size: 3rem;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
        }
        .next-session-card {
          padding: 1.5rem 2rem;
          border-radius: 20px;
          min-width: 300px;
          border-left: 4px solid var(--accent-primary);
          box-shadow: var(--card-shadow);
        }
        .next-label {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .next-date {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .prep-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-primary);
        }
        .prep-btn:hover {
          gap: 0.75rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .dashboard-hero {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},Rf=()=>{const{setCurrentPage:e}=Ot(),t=[{day:"Day 3",items:[{type:"pillars",id:"pillars",title:"Key Leadership Pillars",author:"Strategic Framework",time:"Interactive"},{type:"pillars",id:"pillars-hex",title:"Key Pillars — Option 2",author:"Advanced Framework",time:"Non-Linear"},{type:"presentation",title:"AI Scaling Strategies",author:"Dr. Sarah Chen",time:"45 mins"},{type:"note",title:"Session 3 Key Takeaways",author:"Course Curator",time:"10 mins"},{type:"preread",title:"Ethical AI Frameworks",author:"Required Reading",time:"20 mins"}]},{day:"Day 2",items:[{type:"presentation",title:"Machine Learning for Executives",author:"Mark T.",time:"60 mins"},{type:"note",title:"Day 2 Workshop Notes",author:"Student Companion",time:"15 mins"}]}],n=r=>{switch(r){case"pillars":return o.jsx(Yo,{size:24});case"presentation":return o.jsx(zf,{size:24});case"note":return o.jsx(Vl,{size:24});case"preread":return o.jsx(yu,{size:24});default:return o.jsx(Vl,{size:24})}};return o.jsxs("div",{className:"container learn-page",children:[o.jsxs("h1",{className:"page-title",children:["Learning ",o.jsx("span",{className:"gradient-text",children:"Materials"})]}),o.jsx("p",{className:"page-subtitle",children:"Access your presentations, curated notes, and pre-read materials for every session."}),o.jsx("div",{className:"materials-list",children:t.map((r,i)=>o.jsxs("div",{className:"day-section",children:[o.jsx("h2",{className:"day-title",children:r.day}),o.jsx("div",{className:"materials-grid",children:r.items.map((l,a)=>o.jsxs("div",{className:`material-card glass ${l.type==="pillars"?"clickable-card":""}`,onClick:()=>l.type==="pillars"&&e(l.id||"pillars"),children:[o.jsx("div",{className:`material-icon-box ${l.type}`,children:n(l.type)}),o.jsxs("div",{className:"material-info",children:[o.jsx("h3",{className:"material-title",children:l.title}),o.jsx("p",{className:"material-author",children:l.author}),o.jsxs("div",{className:"material-meta",children:[o.jsx(pf,{size:12})," ",o.jsx("span",{children:l.time})]})]}),l.type!=="pillars"&&o.jsx("button",{className:"download-btn",children:o.jsx(Ho,{size:18})})]},a))})]},i))}),o.jsx("style",{children:`
        .learn-page {
          padding-top: 4rem;
          padding-bottom: 5rem;
        }
        .page-title {
          font-size: 2.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }
        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          max-width: 600px;
        }
        .day-section {
          margin-bottom: 4rem;
        }
        .day-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2rem;
          border-left: 4px solid var(--accent-primary);
          padding-left: 1rem;
        }
        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .material-card {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border-radius: 16px;
          gap: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: var(--card-shadow);
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }
        .material-card:hover {
          transform: scale(1.02);
          box-shadow: var(--card-shadow-hover);
        }
        .material-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .presentation { background: rgba(29, 78, 216, 0.08); color: var(--accent-primary); }
        .pillars { background: var(--accent-primary-20); color: var(--accent-primary); }
        .note { background: rgba(96, 165, 250, 0.12); color: var(--accent-secondary); }
        .preread { background: rgba(29, 78, 216, 0.06); color: var(--accent-primary); }
        
        .material-info {
          flex-grow: 1;
        }
        .material-title {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .material-author {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .material-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--text-tertiary);
          font-weight: 400;
        }
        .download-btn {
          color: var(--text-tertiary);
          padding: 0.5rem;
          border-radius: 8px;
        }
        .download-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .clickable-card {
          border: 2px solid transparent;
          cursor: pointer;
        }
        .clickable-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-secondary);
        }
      `})]})},Of=({onZoomIn:e,onZoomOut:t,onResetZoom:n,onJumpToFrame:r,activeDay:i})=>{const{setCurrentPage:l}=Ot();return o.jsxs("div",{className:"think-top-bar glass",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>l("dashboard"),children:[o.jsx(Wo,{size:18}),o.jsx("span",{children:"Dashboard"})]}),o.jsx("div",{className:"v-divider"}),o.jsxs("h2",{className:"top-bar-title",children:["Think ",o.jsx("span",{className:"text-secondary",children:"Explore & Map"})]})]}),o.jsx("div",{className:"top-bar-center",children:o.jsx("div",{className:"frame-navigator",children:[1,2,3,4,5,6].map(a=>o.jsxs("button",{className:`nav-pill ${i===a?"active":""}`,onClick:()=>r(a),children:["Day ",a,a>4&&o.jsx("span",{className:"lock-dot"})]},a))})}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("div",{className:"zoom-controls",children:[o.jsx("button",{onClick:t,title:"Zoom Out",children:o.jsx(Df,{size:18})}),o.jsx("button",{onClick:n,title:"Reset Zoom",className:"zoom-value",children:"100%"}),o.jsx("button",{onClick:e,title:"Zoom In",children:o.jsx(Mf,{size:18})})]}),o.jsx("div",{className:"v-divider"}),o.jsxs("button",{className:"export-btn",children:[o.jsx(Ho,{size:18}),o.jsx("span",{children:"Export"})]})]}),o.jsx("style",{children:`
        .think-top-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          z-index: 1000;
          border-bottom: 1px solid var(--border-color);
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .back-btn:hover {
          color: var(--accent-primary);
        }
        .v-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
        }
        .top-bar-title {
          font-size: 1rem;
          font-weight: 500;
        }
        .text-secondary {
          color: var(--text-tertiary);
          font-weight: 300;
          margin-left: 0.5rem;
        }
        .frame-navigator {
          display: flex;
          background: var(--bg-tertiary);
          padding: 4px;
          border-radius: 12px;
          gap: 4px;
        }
        .nav-pill {
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
        }
        .nav-pill.active {
          background: var(--bg-primary);
          color: var(--accent-primary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .lock-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 4px;
          height: 4px;
          background: var(--text-tertiary);
          border-radius: 50%;
        }
        .zoom-controls {
          display: flex;
          align-items: center;
          background: var(--bg-tertiary);
          border-radius: 10px;
          padding: 2px;
        }
        .zoom-controls button {
          padding: 6px;
          color: var(--text-secondary);
        }
        .zoom-value {
          font-size: 0.75rem;
          min-width: 50px;
          font-weight: 600;
        }
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-primary);
          color: white;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
        }
      `})]})},$f=({activeTool:e,onSelectTool:t})=>{const n=[{id:"select",icon:Sf,label:"Select"},{id:"pan",icon:gf,label:"Pan"},{id:"divider-1",type:"divider"},{id:"note",icon:Lf,label:"Sticky Note"},{id:"shape",icon:ku,label:"Shapes"},{id:"connector",icon:kf,label:"Connect"},{id:"text",icon:Tf,label:"Text"},{id:"image",icon:yf,label:"Image"}];return o.jsxs("div",{className:"tool-dock-container",children:[o.jsx("div",{className:"tool-dock glass",children:n.map(r=>r.type==="divider"?o.jsx("div",{className:"dock-divider"},r.id):o.jsx("button",{className:`tool-btn ${e===r.id?"active":""}`,onClick:()=>t(r.id),title:r.label,children:o.jsx(r.icon,{size:20})},r.id))}),o.jsx("style",{children:`
        .tool-dock-container {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }
        .tool-dock {
          display: flex;
          align-items: center;
          padding: 8px;
          gap: 6px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .tool-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .tool-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .tool-btn.active {
          background: var(--accent-primary-20);
          color: var(--accent-primary);
        }
        .dock-divider {
          width: 1px;
          height: 24px;
          background: var(--border-color);
          margin: 0 4px;
        }
      `})]})},Ff=({type:e,title:t,subtitle:n})=>{const r=e==="ppt";return o.jsxs("div",{className:"artifact-tile-container",children:[o.jsx("div",{className:`artifact-tile ${r?"ppt":"doc"}`,children:o.jsx("div",{className:"artifact-preview",children:r?o.jsxs("div",{className:"ppt-layout",children:[o.jsx("div",{className:"ppt-header"}),o.jsxs("div",{className:"ppt-body",children:[o.jsx("div",{className:"ppt-line short"}),o.jsx("div",{className:"ppt-line"}),o.jsxs("div",{className:"ppt-charts",children:[o.jsx("div",{className:"ppt-bar",style:{height:"60%"}}),o.jsx("div",{className:"ppt-bar",style:{height:"80%"}}),o.jsx("div",{className:"ppt-bar",style:{height:"40%"}})]})]})]}):o.jsxs("div",{className:"doc-layout",children:[o.jsx("div",{className:"doc-icon",children:o.jsx(Vl,{size:24})}),o.jsxs("div",{className:"doc-lines",children:[o.jsx("div",{className:"doc-line bold"}),o.jsx("div",{className:"doc-line"}),o.jsx("div",{className:"doc-line"}),o.jsx("div",{className:"doc-line short"}),o.jsx("div",{className:"doc-line"})]})]})})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("span",{className:"artifact-title",children:t}),o.jsx("span",{className:"artifact-subtitle",children:n})]}),o.jsx("style",{children:`
        .artifact-tile-container {
          width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .artifact-tile {
          height: 160px;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }
        .artifact-tile:hover {
          transform: translateY(-4px);
          box-shadow: var(--card-shadow-hover);
          border-color: var(--accent-secondary);
        }
        .artifact-preview {
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        
        /* Doc Styles */
        .doc-layout {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .doc-icon {
          color: var(--accent-primary);
        }
        .doc-lines {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .doc-line {
          height: 6px;
          background: #f1f5f9;
          border-radius: 2px;
          width: 100%;
        }
        .doc-line.bold {
          height: 8px;
          background: #e2e8f0;
          width: 60%;
        }
        .doc-line.short {
          width: 40%;
        }

        /* PPT Styles */
        .ppt-layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #f1f5f9;
        }
        .ppt-header {
          height: 30px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        }
        .ppt-body {
          flex-grow: 1;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .ppt-line {
          height: 4px;
          background: #f1f5f9;
          width: 100%;
        }
        .ppt-line.short { width: 50%; }
        .ppt-charts {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 40px;
        }
        .ppt-bar {
          flex: 1;
          background: var(--accent-secondary);
          opacity: 0.5;
          border-radius: 2px 2px 0 0;
        }

        .artifact-info {
          display: flex;
          flex-direction: column;
        }
        .artifact-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .artifact-subtitle {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
      `})]})},Af=({color:e="#fef08a",content:t,initialX:n=0,initialY:r=0,rotation:i=0})=>{const[l,a]=P.useState({x:n,y:r}),[s,c]=P.useState(!1),d=P.useRef({x:0,y:0}),m=h=>{h.stopPropagation(),c(!0),d.current={x:h.clientX-l.x,y:h.clientY-l.y}};return P.useEffect(()=>{const h=v=>{s&&a({x:v.clientX-d.current.x,y:v.clientY-d.current.y})},g=()=>{c(!1)};return s&&(window.addEventListener("mousemove",h),window.addEventListener("mouseup",g)),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",g)}},[s]),o.jsxs("div",{className:`post-it ${s?"dragging":""}`,onMouseDown:m,style:{transform:`translate3d(${l.x}px, ${l.y}px, 0) rotate(${i}deg)`,backgroundColor:e},children:[o.jsx("div",{className:"post-it-content",children:t}),o.jsx("style",{children:`
        .post-it {
          position: absolute;
          width: 140px;
          height: 140px;
          padding: 1.25rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          cursor: grab;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.05s linear;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #1e293b;
          z-index: 10;
        }
        .post-it.dragging {
          cursor: grabbing;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          z-index: 100;
        }
        .post-it::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.05) 50%);
        }
        .post-it-content {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      `})]})},Uf=({day:e})=>o.jsxs("div",{className:"locked-overlay",children:[o.jsxs("div",{className:"lock-content glass",children:[o.jsx("div",{className:"lock-icon",children:o.jsx(oi,{size:32})}),o.jsxs("div",{className:"lock-text",children:[o.jsxs("h3",{children:["Day ",e," Locked"]}),o.jsxs("p",{children:["Unlocks on Day ",e]})]})]}),o.jsx("style",{children:`
        .locked-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(var(--bg-secondary-rgb), 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }
        .lock-content {
          padding: 2.5rem;
          border-radius: 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .lock-icon {
          width: 70px;
          height: 70px;
          background: var(--bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .lock-text h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .lock-text p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `})]}),Wf=({day:e,title:t,artifacts:n,postIts:r,isLocked:i})=>o.jsxs("div",{className:`canvas-frame ${i?"locked":""}`,id:`frame-day-${e}`,children:[o.jsxs("div",{className:"frame-header",children:[o.jsxs("div",{className:"day-badge",children:["DAY ",e]}),o.jsx("h3",{className:"frame-title",children:t})]}),o.jsxs("div",{className:"frame-content",children:[o.jsx("div",{className:"artifacts-row",children:n.map((l,a)=>o.jsx(Ff,{...l},a))}),o.jsxs("div",{className:"drop-zone",children:[o.jsx("div",{className:"drop-zone-label",children:"POST-IT WORKSPACE"}),r.map((l,a)=>o.jsx(Af,{...l},a))]})]}),i&&o.jsx(Uf,{day:e}),o.jsx("style",{children:`
        .canvas-frame {
          width: 1100px;
          height: 780px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          flex-shrink: 0;
        }
        .frame-header {
          padding: 1.5rem 2.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .day-badge {
          padding: 4px 12px;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .frame-title {
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--text-primary);
        }
        .frame-content {
          flex-grow: 1;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .artifacts-row {
          display: flex;
          gap: 1.5rem;
        }
        .drop-zone {
          flex-grow: 1;
          border: 2px dashed var(--border-color);
          border-radius: 16px;
          position: relative;
          background: var(--bg-tertiary);
          opacity: 0.6;
          overflow: hidden;
        }
        .drop-zone-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
          letter-spacing: 0.2em;
          pointer-events: none;
        }
      `})]}),Bf=()=>{const[e,t]=P.useState(.8),[n,r]=P.useState({x:100,y:100}),[i,l]=P.useState("select"),[a,s]=P.useState(1),c=P.useRef(null),d=P.useRef(!1),m=P.useRef({x:0,y:0}),h=[{day:1,title:"Foundations of AI Leadership",artifacts:[{type:"doc",title:"AI Landscape Overview.pdf",subtitle:"Policy Document"},{type:"ppt",title:"Session 1 Slides.pptx",subtitle:"Course Materials"},{type:"doc",title:"The AI Imperative.pdf",subtitle:"Pre-read"}],postIts:[{content:"What surprised me?",color:"#fef08a",initialX:50,initialY:100,rotation:-2},{content:"Key takeaway from Day 1",color:"#e0e7ff",initialX:220,initialY:150,rotation:3}]},{day:2,title:"Strategy & Opportunity Mapping",artifacts:[{type:"doc",title:"Strategy Framework.pdf",subtitle:"Guidelines"},{type:"ppt",title:"Opportunity Map Deck.pptx",subtitle:"Workshop Slides"},{type:"doc",title:"Case Study: NHS AI.pdf",subtitle:"Reference"}],postIts:[{content:"Biggest opportunity identified",color:"#d1fae5",initialX:80,initialY:120,rotation:1},{content:"Risk mitigation plan",color:"#fee2e2",initialX:250,initialY:180,rotation:-4}]},{day:3,title:"Operating Model Design",artifacts:[{type:"doc",title:"OM Design Template.docx",subtitle:"Template"},{type:"ppt",title:"Blueprint Session Slides.pptx",subtitle:"Strategy"},{type:"doc",title:"Benchmark Report.pdf",subtitle:"Data"}],postIts:[{content:"Gap in current OM",color:"#fef08a",initialX:100,initialY:100,rotation:2},{content:"Quick win for Week 1",color:"#e0e7ff",initialX:300,initialY:140,rotation:-1}]},{day:4,title:"AI Ethics & Governance",artifacts:[{type:"doc",title:"Ethics Checklist.pdf",subtitle:"Compliance"},{type:"ppt",title:"Governance Slides.pptx",subtitle:"Board Deck"},{type:"doc",title:"Policy Brief.pdf",subtitle:"Executive Summary"}],postIts:[{content:"Ethical tension point",color:"#fee2e2",initialX:60,initialY:110,rotation:-3},{content:"Guardian role definition",color:"#d1fae5",initialX:240,initialY:160,rotation:4}]},{day:5,title:"Scaling & Transformation",isLocked:!0,artifacts:[],postIts:[]},{day:6,title:"Executive Synthesis",isLocked:!0,artifacts:[],postIts:[]}],g=p=>{(i==="pan"||p.button===1||p.button===0&&p.altKey)&&(d.current=!0,m.current={x:p.clientX,y:p.clientY},document.body.style.cursor="grabbing")},v=p=>{if(!d.current)return;const u=p.clientX-m.current.x,f=p.clientY-m.current.y;r(y=>({x:y.x+u,y:y.y+f})),m.current={x:p.clientX,y:p.clientY}},w=()=>{d.current=!1,document.body.style.cursor="default"},j=p=>{if(p.ctrlKey||p.metaKey){p.preventDefault();const u=p.deltaY>0?-.05:.05;t(f=>Math.min(Math.max(f+u,.3),2))}else r(u=>({x:u.x-p.deltaX,y:u.y-p.deltaY}))},_=p=>{s(p);const u=1100,f=80,y=-((p-1)*(u+f))+window.innerWidth/2-u/2;r({x:y,y:150})};return P.useEffect(()=>(_(1),window.addEventListener("mousemove",v),window.addEventListener("mouseup",w),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",w)}),[]),o.jsxs("div",{className:"think-canvas-container",onMouseDown:g,onWheel:j,ref:c,children:[o.jsx(Of,{onZoomIn:()=>t(p=>Math.min(p+.1,2)),onZoomOut:()=>t(p=>Math.max(p-.1,.3)),onResetZoom:()=>t(.8),onJumpToFrame:_,activeDay:a}),o.jsx("div",{className:"canvas-stage",style:{transform:`translate3d(${n.x}px, ${n.y}px, 0) scale(${e})`,cursor:i==="pan"?"grab":"default"},children:o.jsx("div",{className:"frames-container",children:h.map(p=>o.jsx(Wf,{...p},p.day))})}),o.jsx($f,{activeTool:i,onSelectTool:l}),o.jsx("style",{children:`
        .think-canvas-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: var(--bg-secondary);
          background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
          background-size: 30px 30px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
        }
        .canvas-stage {
          position: absolute;
          transform-origin: 0 0;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
        .frames-container {
          display: flex;
          gap: 80px;
          padding: 100px;
        }
        [data-theme='dark'] .think-canvas-container {
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
        }
      `})]})},Vf=()=>{const e=[{id:"sim-1",title:"The Governance Sandbox",overview:"Test your ethical framework against a series of unpredictable AI deployment scenarios.",outcomes:["Validated Governance Model","Risk Mitigation Report","Stakeholder Alignment Score"],difficulty:"Advanced",icon:_f,color:"var(--accent-primary)"},{id:"sim-2",title:"Scalability Stress Test",overview:"Optimize an AI infrastructure project while maintaining performance and budget constraints.",outcomes:["Infrastructure Blueprint","Cost-Efficiency Audit","Auto-scaling Strategy"],difficulty:"Intermediate",icon:Su,color:"var(--accent-secondary)"}];return o.jsxs("div",{className:"container build-page",children:[o.jsxs("div",{className:"build-hero",children:[o.jsx(bf,{size:48,className:"rocket-icon"}),o.jsxs("h1",{className:"page-title",children:["Build & ",o.jsx("span",{className:"gradient-text",children:"Simulate"})]}),o.jsx("p",{className:"page-subtitle",children:"Apply your theoretical knowledge in our advanced simulator environments. Real-time feedback and high-stakes scenarios."})]}),o.jsx("div",{className:"briefs-grid",children:e.map(t=>o.jsxs("div",{className:"brief-card glass",children:[o.jsxs("div",{className:"brief-header",children:[o.jsx("div",{className:"brief-icon",style:{background:`${t.color}15`,color:t.color},children:o.jsx(t.icon,{size:28})}),o.jsx("span",{className:"difficulty-badge",children:t.difficulty})]}),o.jsxs("div",{className:"brief-content",children:[o.jsx("h2",{className:"brief-title",children:t.title}),o.jsx("p",{className:"brief-overview",children:t.overview}),o.jsxs("div",{className:"outcomes-section",children:[o.jsx("h3",{className:"outcomes-title",children:"Expected Outcomes"}),o.jsx("ul",{className:"outcomes-list",children:t.outcomes.map((n,r)=>o.jsxs("li",{className:"outcome-item",children:[o.jsx(af,{size:14,className:"check-icon"}),o.jsx("span",{children:n})]},r))})]})]}),o.jsxs("button",{className:"simulator-link-btn",onClick:()=>window.open("https://simulator.example.ai","_blank"),children:["Enter Simulator ",o.jsx(Qo,{size:18})]})]},t.id))}),o.jsx("style",{children:`
        .build-page {
          padding-top: 4rem;
          padding-bottom: 5rem;
        }
        .build-hero {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .rocket-icon {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .briefs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }
        .brief-card {
          padding: 2.5rem;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: all 0.4s ease;
          box-shadow: var(--card-shadow);
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }
        .brief-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--card-shadow-hover);
          border-color: var(--accent-primary);
        }
        .brief-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brief-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .difficulty-badge {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          border-radius: 99px;
          color: var(--text-secondary);
        }
        .brief-title {
          font-size: 1.75rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .brief-overview {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .outcomes-section {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 16px;
        }
        .outcomes-title {
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .outcomes-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .outcome-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .check-icon {
          color: var(--accent-secondary);
          flex-shrink: 0;
        }
        .simulator-link-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem;
          background: var(--text-primary);
          color: var(--bg-primary);
          border-radius: 16px;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .simulator-link-btn:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }
        @media (max-width: 640px) {
          .briefs-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},bu=({children:e,title:t,type:n,isLocked:r,isCompleted:i,icon:l,accentColor:a="var(--accent-primary)"})=>o.jsxs("div",{className:`activity-card ${n} ${r?"locked":""} ${i?"completed":""}`,children:[o.jsxs("div",{className:"card-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsxs("div",{className:"type-badge",style:{backgroundColor:r?"var(--bg-tertiary)":`${a}15`,color:r?"var(--text-tertiary)":a},children:[l&&o.jsx(l,{size:14}),o.jsx("span",{children:n.toUpperCase()})]}),o.jsx("h3",{className:"card-title",children:t})]}),o.jsxs("div",{className:"header-right",children:[i&&o.jsx(xu,{size:18,color:"var(--accent-ta)"}),r&&o.jsx(oi,{size:16,color:"var(--text-tertiary)"})]})]}),o.jsx("div",{className:"card-body",children:e}),r&&o.jsx("div",{className:"locked-overlay",children:o.jsxs("div",{className:"lock-message",children:[o.jsx(oi,{size:20}),o.jsx("span",{children:"Complete previous activity to unlock"})]})}),o.jsx("style",{children:`
        .activity-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--card-shadow);
        }
        .activity-card.locked {
          opacity: 0.6;
          filter: grayscale(0.5);
          pointer-events: none;
        }
        .activity-card.completed {
          border-color: var(--accent-ta);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .type-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.05em;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .card-body {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .locked-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.02);
          backdrop-filter: blur(2px);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .lock-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-primary);
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
      `})]}),Hf=({title:e,content:t,highlights:n=[],isLocked:r,isCompleted:i})=>o.jsxs(bu,{title:e,type:"theory",icon:Vo,isLocked:r,isCompleted:i,accentColor:"var(--accent-primary)",children:[o.jsxs("div",{className:"theory-snippet",children:[o.jsx("p",{className:"theory-text",children:t}),n.length>0&&o.jsx("div",{className:"highlights",children:n.map((l,a)=>o.jsx("div",{className:"highlight-pill",children:l},a))})]}),o.jsx("style",{children:`
        .theory-text {
          margin-bottom: 1.25rem;
        }
        .highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .highlight-pill {
          padding: 0.4rem 0.8rem;
          background: var(--bg-tertiary);
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--accent-primary);
          border: 1px solid var(--border-color);
        }
      `})]}),Qf=({id:e,title:t,description:n,fields:r=[],isLocked:i,isCompleted:l,onSave:a,initialData:s={}})=>{const[c,d]=P.useState(s),m=(h,g)=>{const v={...c,[h]:g};d(v),a&&a(e,v)};return o.jsxs(bu,{title:t,type:"workspace",icon:xf,isLocked:i,isCompleted:l,accentColor:"var(--accent-secondary)",children:[o.jsxs("div",{className:"workspace-container",children:[n&&o.jsx("p",{className:"workspace-desc",children:n}),o.jsx("div",{className:"workspace-fields",children:r.map(h=>o.jsxs("div",{className:"field-group",children:[o.jsx("label",{htmlFor:h.id,className:"field-label",children:h.label}),h.type==="textarea"?o.jsx("textarea",{id:h.id,className:"workspace-input area",placeholder:h.placeholder,value:c[h.id]||"",onChange:g=>m(h.id,g.target.value)}):o.jsx("input",{id:h.id,type:"text",className:"workspace-input",placeholder:h.placeholder,value:c[h.id]||"",onChange:g=>m(h.id,g.target.value)})]},h.id))})]}),o.jsx("style",{children:`
        .workspace-desc {
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          color: var(--text-tertiary);
        }
        .workspace-fields {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .field-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .workspace-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .workspace-input:focus {
          outline: none;
          border-color: var(--accent-secondary);
          background: var(--bg-primary);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .workspace-input.area {
          min-height: 100px;
          resize: vertical;
        }
      `})]})},Yf=({text:e})=>o.jsxs("div",{className:"reflection-prompt",children:[o.jsxs("div",{className:"prompt-header",children:[o.jsx(Yo,{size:16}),o.jsx("span",{children:"TA REFLECTION"})]}),o.jsxs("p",{className:"prompt-text",children:['"',e,'"']}),o.jsx("style",{children:`
        .reflection-prompt {
          background: var(--accent-ta-glow);
          border-left: 4px solid var(--accent-ta);
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          margin: -1rem 1rem 2rem 2.5rem;
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .prompt-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--accent-ta);
          margin-bottom: 0.5rem;
        }
        .prompt-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.5;
          font-style: italic;
        }
      `})]}),Xf=({content:e})=>o.jsxs("div",{className:"ta-announcement",children:[o.jsx("div",{className:"ann-icon",children:o.jsx(hf,{size:20})}),o.jsx("p",{className:"ann-text",children:e}),o.jsx("style",{children:`
        .ta-announcement {
          background: linear-gradient(135deg, var(--bg-card), var(--bg-secondary));
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          box-shadow: var(--card-shadow);
        }
        .ann-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ann-text {
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
      `})]}),Kf=({cards:e=[],workspaceEntries:t={},onWorkspaceSave:n,completedCardIds:r=new Set})=>o.jsxs("div",{className:"activity-feed",children:[e.map((i,l)=>{const a=l===0||r.has(e[l-1].id),s=!i.isUnlocked&&!a,c=r.has(i.id);return o.jsxs(Gl.Fragment,{children:[i.type==="announcement"&&o.jsx(Xf,{content:i.content}),i.type==="theory"&&o.jsx(Hf,{...i,isLocked:s,isCompleted:c}),i.type==="workspace"&&o.jsxs(o.Fragment,{children:[o.jsx(Qf,{...i,isLocked:s,isCompleted:c,initialData:t[i.id]||{},onSave:n}),i.reflectionPrompt&&t[i.id]&&Object.values(t[i.id]).filter(d=>d.trim().length>0).length>=(i.triggerThreshold||1)&&o.jsx(Yf,{text:i.reflectionPrompt})]})]},i.id)}),o.jsx("style",{children:`
        .activity-feed {
          padding-bottom: 5rem;
          max-width: 800px;
          margin: 0 auto;
        }
      `})]}),Gf=({dayLabel:e,theme:t,progress:n})=>o.jsxs("div",{className:"context-badge",children:[o.jsx("div",{className:"day-pill",children:e}),o.jsx("h2",{className:"theme-title",children:t}),o.jsxs("div",{className:"progress-container",children:[o.jsxs("div",{className:"progress-labels",children:[o.jsx("span",{children:"Daily Progress"}),o.jsxs("span",{children:[Math.round(n*100),"%"]})]}),o.jsx("div",{className:"progress-bar-bg",children:o.jsx("div",{className:"progress-bar-fill",style:{width:`${n*100}%`}})})]}),o.jsx("style",{children:`
        .context-badge {
          margin-bottom: 2.5rem;
        }
        .day-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-primary);
          background: var(--accent-primary-20);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
        }
        .theme-title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .progress-bar-bg {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--accent-primary);
          border-radius: 3px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `})]}),Zf=({items:e=[],onToggle:t})=>o.jsxs("div",{className:"next-actions",children:[o.jsx("h4",{className:"sidebar-label",children:"Next Best Actions"}),o.jsx("div",{className:"action-list",children:e.map(n=>o.jsxs("div",{className:`action-item ${n.completed?"completed":""}`,onClick:()=>t(n.id),children:[o.jsx("div",{className:"action-checkbox",children:n.completed?o.jsx(xu,{size:18,color:"var(--accent-primary)"}):o.jsx(df,{size:18,color:"var(--text-tertiary)"})}),o.jsxs("div",{className:"action-content",children:[o.jsx("span",{className:"action-text",children:n.text}),n.tag&&o.jsxs("div",{className:"action-tag",children:[o.jsx(Qo,{size:10}),o.jsx("span",{children:n.tag})]})]})]},n.id))}),o.jsx("style",{children:`
        .sidebar-label {
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 1.25rem;
        }
        .action-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .action-item {
          display: flex;
          gap: 1rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .action-item:hover {
          background: var(--bg-tertiary);
        }
        .action-item.completed .action-text {
          text-decoration: line-through;
          color: var(--text-tertiary);
        }
        .action-checkbox {
          padding-top: 2px;
        }
        .action-content {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .action-text {
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.4;
          color: var(--text-primary);
        }
        .action-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--accent-primary);
          background: var(--accent-primary-20);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
      `})]}),Jf=({onSubmit:e})=>{const[t,n]=P.useState(""),r=l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),i())},i=()=>{t.trim()&&(e(t),n(""))};return o.jsxs("div",{className:"ask-ta-container",children:[o.jsxs("div",{className:"input-wrapper",children:[o.jsx("textarea",{placeholder:"Ask a clarifying question...",value:t,onChange:l=>n(l.target.value),onKeyDown:r,className:"ask-input"}),o.jsx("button",{className:"send-btn",onClick:i,disabled:!t.trim(),children:o.jsx(Cf,{size:18})})]}),o.jsx("style",{children:`
        .ask-ta-container {
          position: sticky;
          bottom: 0;
          padding-top: 1.5rem;
          margin-top: auto;
        }
        .input-wrapper {
          position: relative;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 0.75rem;
          box-shadow: var(--card-shadow);
        }
        .ask-input {
          width: 100%;
          border: none;
          background: transparent;
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.85rem;
          resize: none;
          min-height: 24px;
          max-height: 120px;
          padding-right: 2.5rem;
          outline: none;
        }
        .send-btn {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .send-btn:not(:disabled) {
          opacity: 1;
        }
      `})]})},qf=({dayLabel:e,theme:t,progress:n,actions:r,onActionToggle:i,onAskSubmit:l})=>o.jsxs("aside",{className:"ta-pulse-sidebar",children:[o.jsxs("div",{className:"sidebar-scroll-container",children:[o.jsx(Gf,{dayLabel:e,theme:t,progress:n}),o.jsx("div",{className:"sidebar-divider"}),o.jsx(Zf,{items:r,onToggle:i})]}),o.jsx(Jf,{onSubmit:l}),o.jsx("style",{children:`
        .ta-pulse-sidebar {
          width: 320px;
          height: calc(100vh - 72px);
          position: sticky;
          top: 72px;
          background: var(--bg-sidebar);
          border-left: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .sidebar-scroll-container {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none; /* Hide scrollbar Firefox */
        }
        .sidebar-scroll-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar Chrome/Safari */
        }
        .sidebar-divider {
          height: 1px;
          background: var(--border-color);
          margin: 2.5rem 0;
        }
        @media (max-width: 1024px) {
          .ta-pulse-sidebar {
            display: none;
          }
        }
      `})]}),em=({isActive:e,onToggle:t})=>o.jsxs("button",{className:`split-view-toggle ${e?"active":""}`,onClick:t,children:[o.jsx("div",{className:"toggle-icon",children:o.jsx(ff,{size:16})}),o.jsx("span",{children:e?"Exit Split View":"Orchestrate Split View"}),o.jsx("style",{children:`
        .split-view-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 0.85rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--card-shadow);
        }
        .split-view-toggle:hover {
          transform: translateY(-2px);
          border-color: var(--accent-primary);
        }
        .split-view-toggle.active {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }
        .toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `})]}),tm=({isVisible:e})=>e?o.jsxs("div",{className:"sdz-panel",children:[o.jsxs("div",{className:"sdz-header",children:[o.jsxs("div",{className:"sdz-brand",children:[o.jsx("div",{className:"brand-dot"}),o.jsx("span",{children:"StrategyDotZero / Orchestrator"})]}),o.jsx("div",{className:"sdz-external",children:o.jsx(Qo,{size:14})})]}),o.jsx("div",{className:"sdz-iframe-placeholder",children:o.jsxs("div",{className:"placeholder-content",children:[o.jsx("div",{className:"pulse-circle"}),o.jsx("h3",{children:"Secure Connection Active"}),o.jsx("p",{children:"The orchestration tool is ready for live mapping."}),o.jsxs("div",{className:"simulated-ui",children:[o.jsx("div",{className:"ui-line long"}),o.jsx("div",{className:"ui-line med"}),o.jsxs("div",{className:"ui-grid",children:[o.jsx("div",{className:"grid-cell"}),o.jsx("div",{className:"grid-cell"}),o.jsx("div",{className:"grid-cell"}),o.jsx("div",{className:"grid-cell"})]})]})]})}),o.jsx("style",{children:`
        .sdz-panel {
          flex: 1;
          height: calc(100vh - 72px);
          background: #090b10;
          color: white;
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .sdz-header {
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .sdz-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.7);
        }
        .brand-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 10px #3b82f6;
        }
        .sdz-iframe-placeholder {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }
        .placeholder-content {
          text-align: center;
          max-width: 400px;
        }
        .pulse-circle {
          width: 64px;
          height: 64px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid #3b82f6;
          border-radius: 50%;
          margin: 0 auto 2rem;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .simulated-ui {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          opacity: 0.3;
        }
        .ui-line {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .ui-line.long { width: 100%; }
        .ui-line.med { width: 60%; }
        .ui-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }
        .grid-cell {
          height: 60px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          border: 1px dashed rgba(255,255,255,0.1);
        }
      `})]}):null,nm=({days:e=[],activeDayIndex:t=0,onDaySelect:n})=>{const[r,i]=P.useState(null),l=e[t]||{},a=t/(e.length-1)*100;return o.jsxs("div",{className:"course-timeline-wrapper",children:[o.jsxs("div",{className:"timeline-header",children:[o.jsx("span",{className:"journey-label",children:"Your Journey"}),o.jsxs("div",{className:"active-day-info",children:[o.jsx("span",{className:"active-day-label",children:l.dayLabel}),o.jsx("span",{className:"divider",children:"·"}),o.jsx("span",{className:"active-theme",children:l.theme})]})]}),o.jsxs("div",{className:"timeline-container",children:[o.jsx("div",{className:"track-line",children:o.jsx("div",{className:"track-fill",style:{width:`${a}%`}})}),o.jsx("div",{className:"nodes-container",children:e.map((s,c)=>{var v;const d=c<t,m=c===t,h=c>t,g=r===c;return o.jsxs("div",{className:`timeline-node ${d?"completed":""} ${m?"active":""} ${h?"locked":""}`,onMouseEnter:()=>i(c),onMouseLeave:()=>i(null),onClick:()=>!h&&n&&n(c),children:[o.jsxs("div",{className:"node-marker-wrapper",children:[o.jsx("div",{className:"node-marker",children:d?o.jsx(sf,{size:14}):h?o.jsx(oi,{size:12}):o.jsx("div",{className:"active-inner"})}),m&&o.jsx("div",{className:"pulse-ring"})]}),o.jsx("span",{className:"node-label",children:s.nodeLabel}),g&&o.jsxs("div",{className:"node-tooltip glass",children:[o.jsx("span",{className:"tooltip-theme",children:s.theme}),o.jsx("span",{className:"tooltip-status",children:d?"Completed":m?"Currently Active":`Unlocks after ${(v=e[c-1])==null?void 0:v.theme}`})]})]},s.dayId)})})]}),o.jsx("style",{children:`
        .course-timeline-wrapper {
          max-width: 800px;
          margin: 0 auto 3rem auto;
          padding: 1.5rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          box-shadow: var(--card-shadow);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .journey-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }
        .active-day-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .active-day-label {
          color: var(--accent-primary);
        }
        .divider {
          color: var(--text-tertiary);
        }
        .active-theme {
          color: var(--text-primary);
        }
        .timeline-container {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
        }
        .track-line {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--bg-tertiary);
          border-radius: 2px;
          z-index: 1;
        }
        .track-fill {
          height: 100%;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          border-radius: 2px;
          transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nodes-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }
        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          position: relative;
        }
        .timeline-node.locked {
          cursor: not-allowed;
        }
        .node-marker-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .node-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          transition: all 0.3s ease;
          z-index: 2;
        }
        .timeline-node.completed .node-marker {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }
        .timeline-node.active .node-marker {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background: var(--bg-card);
          transform: scale(1.1);
        }
        .active-inner {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
        }
        .timeline-node.locked .node-marker {
          color: var(--accent-locked);
          border-color: var(--border-color);
          background: var(--bg-tertiary);
        }
        .pulse-ring {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--accent-primary);
          animation: pulse-ring 2s infinite;
          z-index: 1;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.7); opacity: 0.5; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.7); opacity: 0; }
        }
        .node-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .timeline-node.active .node-label {
          color: var(--accent-primary);
        }
        .node-tooltip {
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          text-align: center;
          z-index: 20;
          box-shadow: var(--card-shadow);
          animation: tooltip-fade 0.2s ease-out;
        }
        @keyframes tooltip-fade {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .tooltip-theme {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        .tooltip-status {
          font-size: 0.7rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `})]})},is=[{dayId:1,dayLabel:"Weekend 1, Day 1",nodeLabel:"W1 · D1",theme:"Introducing the Framework",cards:[]},{dayId:2,dayLabel:"Weekend 1, Day 2",nodeLabel:"W1 · D2",theme:"Systems Thinking Basics",cards:[]},{dayId:3,dayLabel:"Weekend 2, Day 1",nodeLabel:"W2 · D1",theme:"Designing the Ecosystem",cards:[{id:"ann-welcome",type:"announcement",content:"Welcome to Weekend 2. Today's focus: Designing the Ecosystem.",isUnlocked:!0},{id:"theory-iof",type:"theory",title:"The Intelligent Orchestration Framework",content:"Orchestration is not choreography. It is about creating the conditions where value emerges through coordination of autonomous agents.",highlights:["Decentralized Control","Real-time Feedback Loops","Platform Thinking"],isUnlocked:!0},{id:"ws-tension-points",type:"workspace",title:"Strategic Tension Points",description:"List the core tensions currently pulling your organization in opposite directions.",fields:[{id:"tension1",label:"Tension 1",type:"text",placeholder:"e.g. Speed vs. Quality"}],triggerThreshold:3,reflectionPrompt:"You've listed multiple symptoms—can you group these into a single systemic tension like 'Speed vs. Quality'?",isUnlocked:!0},{id:"theory-systems",type:"theory",title:"Systems Thinking: Feedback Loops",content:"A system's behavior is driven by its structure. To change the outcome, you must change the loop.",isUnlocked:!1},{id:"ws-structural-change",type:"workspace",title:"Structural vs. Behavioral Change",description:"Map the required changes in your ecosystem.",fields:[{id:"structural",label:"Structural Change",type:"text"},{id:"behavioral",label:"Behavioral Change",type:"text"}],isUnlocked:!1}]},{dayId:4,dayLabel:"Weekend 2, Day 2",nodeLabel:"W2 · D2",theme:"AI Ethics & Change Management",cards:[{id:"theory-ai-ethics",type:"theory",title:"AI Ethics in Orchestration",content:"Ethics is not a constraint; it is a design principle for building trust in automated systems.",isUnlocked:!1},{id:"ws-friction-points",type:"workspace",title:"Friction Points",description:"Identify where the 'machine' is grinding.",isUnlocked:!1}]},{dayId:5,dayLabel:"Weekend 3, Day 1",nodeLabel:"W3 · D1",theme:"Scaling & Governance",cards:[]},{dayId:6,dayLabel:"Weekend 3, Day 2",nodeLabel:"W3 · D2",theme:"Final Validation",cards:[]}],rm=[{id:1,text:"Define your core ecosystem actors",completed:!1},{id:2,text:"Link your 5 strategic themes to the orchestration tool",completed:!1,tag:"StrategyDotZero"},{id:3,text:"Identify the primary feedback loop",completed:!1}],im=()=>{const[e,t]=P.useState(2),[n,r]=P.useState(()=>{const _=localStorage.getItem("ta_workspace_entries");return _?JSON.parse(_):{}}),[i,l]=P.useState(()=>{const _=localStorage.getItem("ta_completed_cards");return _?new Set(JSON.parse(_)):new Set}),[a,s]=P.useState(()=>{const _=localStorage.getItem("ta_next_steps");return _?JSON.parse(_):rm}),[c,d]=P.useState(!1);P.useEffect(()=>{localStorage.setItem("ta_workspace_entries",JSON.stringify(n))},[n]),P.useEffect(()=>{localStorage.setItem("ta_completed_cards",JSON.stringify([...i]))},[i]),P.useEffect(()=>{localStorage.setItem("ta_next_steps",JSON.stringify(a))},[a]);const m=is[e],h=(_,p)=>{r(f=>({...f,[_]:p}));const u=m.cards.find(f=>f.id===_);if(u&&u.fields&&u.fields.every(y=>p[y.id]&&p[y.id].trim().length>0)&&!i.has(_)){const y=new Set(i);y.add(_),l(y)}},g=_=>{s(p=>p.map(u=>u.id===_?{...u,completed:!u.completed}:u))},v=_=>{console.log("TA Question submitted:",_)},w=()=>{let _=`# Strategy Orchestration - Executive Summary

`;_+=`Course: ${m.dayLabel} - ${m.theme}

`,m.cards.forEach(y=>{y.type==="workspace"&&n[y.id]&&(_+=`## ${y.title}
`,Object.entries(n[y.id]).forEach(([S,b])=>{const C=y.fields.find(E=>E.id===S);_+=`### ${C?C.label:S}
${b}

`}))});const p=new Blob([_],{type:"text/markdown"}),u=URL.createObjectURL(p),f=document.createElement("a");f.href=u,f.download=`Strategy_Summary_${m.dayLabel.replace(/ /g,"_")}.md`,f.click(),URL.revokeObjectURL(u)},j=m?i.size/m.cards.filter(_=>_.type!=="announcement").length:0;return o.jsxs("div",{className:`ta-page-container ${c?"split-view-active":""}`,children:[o.jsxs("div",{className:"main-content-layout",children:[o.jsxs("div",{className:"conversational-core",children:[o.jsxs("header",{className:"core-header",children:[o.jsxs("div",{className:"header-info",children:[o.jsx("h1",{className:"page-title",children:"Strategy Companion"}),o.jsx("p",{className:"page-subtitle",children:"Your proactive guide to orchestration."})]}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("button",{className:"export-btn",onClick:w,children:[o.jsx(Ho,{size:16}),o.jsx("span",{children:"Export Summary"})]}),o.jsx(em,{isActive:c,onToggle:()=>d(!c)})]})]}),o.jsx(nm,{days:is,activeDayIndex:e,onDaySelect:_=>t(_)}),o.jsx(Kf,{cards:m.cards,workspaceEntries:n,onWorkspaceSave:h,completedCardIds:i})]}),o.jsx(qf,{dayLabel:m.dayLabel,theme:m.theme,progress:j,actions:a,onActionToggle:g,onAskSubmit:v})]}),o.jsx(tm,{isVisible:c}),o.jsx("style",{children:`
        .ta-page-container {
          display: flex;
          min-height: calc(100vh - 72px);
          overflow: hidden;
        }
        .main-content-layout {
          display: flex;
          flex: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .conversational-core {
          flex: 1;
          padding: 3rem 4rem;
          overflow-y: auto;
          background: var(--bg-primary);
        }
        .core-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .page-title {
          font-size: 2.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
          font-weight: 300;
        }
        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 400;
          font-size: 0.85rem;
          transition: all 0.3s;
        }
        .export-btn:hover {
          background: var(--bg-secondary);
          transform: translateY(-2px);
          box-shadow: var(--card-shadow);
        }

        /* Split View States */
        .split-view-active .main-content-layout {
          flex: 0 0 50%;
        }
        .split-view-active .conversational-core {
          padding: 2rem;
        }
        .split-view-active .core-header {
          margin-bottom: 2rem;
        }
        .split-view-active .page-title {
          font-size: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .conversational-core {
            padding: 2rem;
          }
        }
      `})]})},lm=({pillars:e,onSelect:t,selectedId:n})=>o.jsxs("div",{className:`pillar-hub ${n?"is-collapsed":""}`,children:[o.jsx("div",{className:"pillars-grid",children:e.map(r=>o.jsxs("div",{className:`pillar-hub-card glass ${n===r.id?"active":""} ${n&&n!==r.id?"dimmed":""}`,onClick:()=>t(r),children:[o.jsxs("div",{className:"pillar-header",children:[o.jsx("span",{className:"pillar-number",style:{background:`${r.color}20`,color:r.color},children:r.number}),o.jsx("div",{className:"pillar-accent",style:{background:r.color}})]}),o.jsxs("div",{className:"pillar-content",children:[o.jsx("h3",{children:r.title}),o.jsx("p",{children:r.teaser})]}),o.jsx("div",{className:"pillar-footer",children:o.jsxs("span",{className:"explore-text",style:{color:r.color},children:["Explore ",o.jsx(Bo,{size:14})]})})]},r.id))}),o.jsx("style",{children:`
        .pillar-hub {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
        }
        
        .pillar-hub.is-collapsed {
          width: 380px;
          flex-shrink: 0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          transition: all 0.5s ease;
        }

        .pillar-hub.is-collapsed .pillars-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .pillar-hub-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-left: 0 solid transparent;
        }

        .pillar-hub-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        .pillar-hub-card.active {
          border-left-width: 4px;
          background: var(--bg-secondary);
        }

        .pillar-hub-card.dimmed {
          opacity: 0.5;
          filter: grayscale(0.5);
          transform: scale(0.98);
        }

        .pillar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pillar-number {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .pillar-accent {
          width: 40px;
          height: 3px;
          border-radius: 2px;
        }

        .pillar-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .pillar-hub.is-collapsed .pillar-content h3 {
          font-size: 1rem;
        }

        .pillar-content p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pillar-hub.is-collapsed .pillar-content p {
          display: none;
        }

        .pillar-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.3s ease;
        }

        .pillar-hub-card:hover .pillar-footer {
          opacity: 1;
          transform: translateX(0);
        }

        .pillar-hub.is-collapsed .pillar-footer {
          display: none;
        }

        .explore-text {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .pillar-hub.is-collapsed {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),om=({pillar:e,onClose:t})=>e?o.jsxs("div",{className:"pillar-detail-panel glass",children:[o.jsxs("div",{className:"detail-header",children:[o.jsxs("div",{className:"title-group",children:[o.jsx("div",{className:"detail-number",style:{background:`${e.color}20`,color:e.color},children:e.number}),o.jsx("h2",{children:e.title})]}),o.jsx("button",{className:"close-btn",onClick:t,children:o.jsx(ju,{size:24})})]}),o.jsxs("div",{className:"detail-body",children:[o.jsx("div",{className:"detail-accent-bar",style:{background:e.color}}),o.jsx("p",{className:"full-description",children:e.description}),o.jsxs("div",{className:"detail-sections",children:[o.jsxs("div",{className:"detail-section",children:[o.jsx("div",{className:"section-icon",style:{color:e.color},children:o.jsx(vf,{size:18})}),o.jsxs("div",{className:"section-content",children:[o.jsx("h4",{children:"Key Objective"}),o.jsxs("p",{children:["Establish a robust framework for ",e.title.toLowerCase()," that scales with the organization."]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsx("div",{className:"section-icon",style:{color:e.color},children:o.jsx(Ef,{size:18})}),o.jsxs("div",{className:"section-content",children:[o.jsx("h4",{children:"Governance"}),o.jsx("p",{children:"Ensuring compliance and ethical alignment while driving rapid innovation and adoption."})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsx("div",{className:"section-icon",style:{color:e.color},children:o.jsx(Su,{size:18})}),o.jsxs("div",{className:"section-content",children:[o.jsx("h4",{children:"Impact"}),o.jsx("p",{children:"Accelerated decision making and improved strategic alignment across all business units."})]})]})]})]}),o.jsx("style",{children:`
        .pillar-detail-panel {
          flex: 1;
          height: fit-content;
          min-height: 500px;
          border-radius: 24px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-color);
          position: sticky;
          top: 2rem;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .title-group h2 {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .detail-number {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .close-btn {
          color: var(--text-tertiary);
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .detail-body {
          position: relative;
          padding-left: 1.5rem;
        }

        .detail-accent-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 2px;
          opacity: 0.5;
        }

        .full-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .detail-sections {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .detail-section {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .section-content h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .section-content p {
          font-size: 0.85rem;
          color: var(--text-tertiary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .pillar-detail-panel {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            top: auto;
            border-radius: 32px 32px 0 0;
            height: 80vh;
            z-index: 1000;
            animation: slideUp 0.5s ease;
          }

          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        }
      `})]}):null,Hl=[{id:"sensing",number:1,title:"Sensing & Environmental Intelligence",teaser:"Continuously monitors signals, risks, and opportunities from the external environment...",description:"Continuously monitors signals, risks, and opportunities from the external environment to inform decision-making.",color:"#6366f1"},{id:"articulation",number:2,title:"Articulation & Strategic Design",teaser:"Defines, unifies and articulates strategy across a holistic priority landscape...",description:"Defines, unifies and articulates strategy across a holistic priority landscape and in ways that are comprehensive yet easy to engage and navigate.",color:"#0ea5e9"},{id:"readiness",number:3,title:"Readiness & Blueprinting",teaser:"Understand and define your organisation's operating model and value chains...",description:"Understand and define your organisations operating model and value chains. Understanding the key enablers like people, process and technology that are required and assess readiness to deliver against strategy",color:"#f59e0b"},{id:"mobilisation",number:4,title:"Mobilisation & Alignment",teaser:"Translate the strategic landscape into a series of cascading plans...",description:"Translate the strategic landscape and target operating models into a series of cascading plans that ensure accountability and optimise prioritisation of budgets and resources.",color:"#10b981"},{id:"realisation",number:5,title:"Realisation & Delivery",teaser:"Govern strategic alignment and impact, track and assure delivery performance...",description:"Govern strategic alignment and impact, track and assure delivery performance and enable capability improvement and benefits realisation",color:"#f43f5e"},{id:"continuous",number:6,title:"Continuous Intelligence",teaser:"Manage how intelligence—human, artificial, and hybrid—is embedded...",description:"Introduce models to effectively manage how intelligence—human, artificial, and hybrid—is embedded, learned from, and refined across the enterprise. The goal is to build a self-learning organisation where strategy, execution, and insight continuously reinforce one another.",color:"#a855f7"}],am=()=>{const{setCurrentPage:e}=Ot(),[t,n]=P.useState(null),[r,i]=P.useState(!1);P.useEffect(()=>{i(!0)},[]);const l=a=>{(t==null?void 0:t.id)===a.id?n(null):n(a)};return o.jsxs("div",{className:`container pillars-page ${r?"fade-in":""}`,children:[o.jsxs("header",{className:"pillars-header",children:[o.jsxs("button",{className:"back-btn",onClick:()=>e("learn"),children:[o.jsx(Wo,{size:18})," Back to Learn"]}),o.jsxs("div",{className:"header-content",children:[o.jsxs("div",{className:"badge",children:[o.jsx(Yo,{size:14})," Strategic Framework"]}),o.jsxs("h1",{className:"page-title",children:["Key Leadership ",o.jsx("span",{className:"gradient-text",children:"Pillars"})]}),o.jsx("p",{className:"page-subtitle",children:"A comprehensive blueprint for navigating the AI era with confidence and clarity."})]})]}),o.jsxs("div",{className:`pillars-content-layout ${t?"has-selection":""}`,children:[o.jsx(lm,{pillars:Hl,onSelect:l,selectedId:t==null?void 0:t.id}),t&&o.jsx(om,{pillar:t,onClose:()=>n(null)})]}),o.jsx("style",{children:`
        .pillars-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .pillars-page.fade-in {
          opacity: 1;
        }

        .pillars-header {
          margin-bottom: 4rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
          transition: color 0.2s ease;
        }

        .back-btn:hover {
          color: var(--accent-primary);
        }

        .header-content {
          max-width: 800px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--accent-primary-20);
          color: var(--accent-primary);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }

        .page-title {
          font-size: 3.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .page-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pillars-content-layout {
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          transition: all 0.5s ease;
        }

        @media (max-width: 1024px) {
          .pillars-content-layout {
            flex-direction: column;
          }
          .page-title {
            font-size: 2.5rem;
          }
        }
      `})]})},sm=({pillar:e,isSelected:t,isDimmed:n,onSelect:r,position:i})=>o.jsxs("div",{className:`hex-node-container ${t?"selected":""} ${n?"dimmed":""}`,style:{left:`${i.x}%`,top:`${i.y}%`,"--accent-color":e.color},onClick:()=>r(e),tabIndex:0,onKeyDown:l=>(l.key==="Enter"||l.key===" ")&&r(e),children:[o.jsx("div",{className:"hex-shape glass",children:o.jsxs("div",{className:"hex-inner",children:[o.jsx("span",{className:"node-number",children:e.number}),o.jsx("h3",{className:"node-title",children:e.title})]})}),o.jsx("style",{children:`
        .hex-node-container {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          width: 160px;
          height: 180px;
        }

        .hex-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          transition: all 0.3s ease;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .hex-node-container:hover .hex-shape,
        .hex-node-container.selected .hex-shape {
          background: color-mix(in srgb, var(--accent-color) 15%, var(--glass-bg));
          transform: scale(1.08);
          box-shadow: 0 0 30px color-mix(in srgb, var(--accent-color) 30%, transparent);
        }

        .hex-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          gap: 0.5rem;
        }

        .node-number {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-color);
          opacity: 0.8;
          text-transform: uppercase;
        }

        .node-title {
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-primary);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hex-node-container.dimmed {
          opacity: 0.3;
          filter: grayscale(0.6) blur(1px);
          pointer-events: none;
        }

        .hex-node-container.selected {
          z-index: 20;
          opacity: 1 !important;
          filter: none !important;
        }

        @media (max-width: 1024px) {
          .hex-node-container {
            width: 130px;
            height: 150px;
          }
          .node-title {
            font-size: 0.75rem;
          }
        }
      `})]}),cm=({title:e,description:t,accentColor:n,isSystemViewActive:r})=>{const[i,l]=P.useState(e),[a,s]=P.useState(t),[c,d]=P.useState(!1);return P.useEffect(()=>{d(!0);const m=setTimeout(()=>{l(e),s(t),d(!1)},300);return()=>clearTimeout(m)},[e,t]),o.jsxs("div",{className:`hex-hub glass ${c?"dissolve":"reform"}`,style:{"--accent-color":n||"var(--accent-primary)"},children:[o.jsx("div",{className:"hub-pulse"}),o.jsx("div",{className:"hub-pulse pulse-delay-1"}),o.jsxs("div",{className:"hub-content",children:[o.jsx("h2",{className:"hub-title",children:i}),o.jsx("div",{className:"hub-divider",style:{background:n||"var(--accent-primary)"}}),o.jsx("p",{className:"hub-description",children:a}),r&&o.jsxs("div",{className:"system-sync-label",children:[o.jsx("div",{className:"sync-pulse"}),"System Synchronizing..."]})]}),o.jsx("style",{children:`
        .hex-hub {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          text-align: center;
          padding: 2.5rem;
          transition: all 0.5s ease;
          border: 1px solid var(--glass-border);
        }

        .hub-pulse {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 2px solid var(--accent-color);
          opacity: 0;
          animation: hubRipple 3s infinite;
        }

        .pulse-delay-1 {
          animation-delay: 1.5s;
        }

        @keyframes hubRipple {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .hub-content {
          position: relative;
          z-index: 2;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .dissolve .hub-content {
          opacity: 0;
          filter: blur(8px);
        }

        .reform .hub-content {
          opacity: 1;
          filter: blur(0);
        }

        .hub-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .hub-divider {
          width: 40px;
          height: 3px;
          margin: 0 auto 1.5rem;
          border-radius: 2px;
          transition: background 0.5s ease;
        }

        .hub-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 240px;
        }

        .system-sync-label {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .sync-pulse {
          width: 6px;
          height: 6px;
          background: currentColor;
          border-radius: 50%;
          animation: syncPulse 1s infinite alternate;
        }

        @keyframes syncPulse {
          from { opacity: 0.3; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1.2); }
        }

        @media (max-width: 1024px) {
          .hex-hub {
            width: 260px;
            height: 260px;
            padding: 1.5rem;
          }
          .hub-title { font-size: 1.1rem; }
          .hub-description { font-size: 0.85rem; }
        }
      `})]})},um=({nodes:e,selectedId:t,systemViewStep:n})=>o.jsxs("svg",{className:"flow-lines-svg",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[o.jsx("defs",{children:o.jsxs("filter",{id:"glow",children:[o.jsx("feGaussianBlur",{stdDeviation:"0.5",result:"coloredBlur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"coloredBlur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.map((l,a)=>{const s=t===l.id,c=t==="sensing"&&l.id==="articulation",d=n===l.number,m=s||d||c;return o.jsxs("g",{children:[o.jsx("path",{d:`M 50 50 L ${l.pos.x} ${l.pos.y}`,className:`flow-path ${m?"active":""}`,style:{stroke:m?l.color:"var(--text-tertiary)"}}),o.jsx("circle",{r:"0.6",className:`data-dot ${m?"fast":""}`,children:o.jsx("animateMotion",{dur:m?"1.5s":"4s",repeatCount:"indefinite",path:`M 50 50 L ${l.pos.x} ${l.pos.y}`})}),a<e.length&&o.jsx("path",{d:`M ${l.pos.x} ${l.pos.y} Q ${50+(l.pos.x-50+e[(a+1)%e.length].pos.x-50)/1.5} ${50+(l.pos.y-50+e[(a+1)%e.length].pos.y-50)/1.5} ${e[(a+1)%e.length].pos.x} ${e[(a+1)%e.length].pos.y}`,className:`flow-path-arc ${m?"active":""}`,style:{stroke:m?l.color:"var(--text-tertiary)"}})]},l.id)}),o.jsx("style",{children:`
        .flow-lines-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .flow-path, .flow-path-arc {
          fill: none;
          stroke-width: 0.15;
          opacity: 0.15;
          transition: all 0.5s ease;
        }

        .flow-path.active, .flow-path-arc.active {
          opacity: 0.8;
          stroke-width: 0.3;
          filter: url(#glow);
        }

        .data-dot {
          fill: white;
          opacity: 0.6;
          filter: url(#glow);
        }

        .data-dot.fast {
          opacity: 1;
          fill: var(--accent-color);
        }
      `})]}),dm=({pillars:e,selectedPillar:t,onSelect:n,isSystemViewActive:r,systemViewStep:i})=>{const a=e.map((s,c)=>{const d=(c*60-90)*(Math.PI/180);return{...s,pos:{x:50+38*Math.cos(d),y:50+38*Math.sin(d)}}});return o.jsxs("div",{className:"hex-canvas-container",children:[o.jsxs("div",{className:"canvas-elements",children:[o.jsx(um,{nodes:a,selectedId:t==null?void 0:t.id,systemViewStep:i}),o.jsx(cm,{title:t?t.title:"Digital Twin Core",description:t?t.description:"Select a pillar to explore the Intelligent Orchestration Framework.",accentColor:t==null?void 0:t.color,isSystemViewActive:r}),a.map(s=>o.jsx(sm,{pillar:s,position:s.pos,isSelected:(t==null?void 0:t.id)===s.id,isDimmed:t&&t.id!==s.id&&!r,onSelect:n},s.id))]}),o.jsx("style",{children:`
        .hex-canvas-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .canvas-elements {
          position: relative;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .hex-canvas-container {
            display: none; /* Hide for mobile layout as per plan */
          }
        }
      `})]})},pm=()=>{const{setCurrentPage:e}=Ot(),[t,n]=P.useState(null),[r,i]=P.useState(!1),[l,a]=P.useState(0);P.useState(null);const s=()=>{i(!0),n(null);let d=1;a(1);const m=setInterval(()=>{d+=1,d>6?(clearInterval(m),i(!1),a(0)):a(d)},800)},c=d=>{r||((t==null?void 0:t.id)===d.id?n(null):n(d))};return o.jsxs("div",{className:"container pillars-hex-page",children:[o.jsxs("header",{className:"page-header",children:[o.jsxs("button",{className:"back-btn",onClick:()=>e("learn"),children:[o.jsx(Wo,{size:18})," Back to Learn"]}),o.jsxs("div",{className:"header-flex",children:[o.jsxs("div",{className:"title-group",children:[o.jsxs("h1",{className:"page-title",children:["Intelligent Orchestration ",o.jsx("span",{className:"gradient-text",children:"Framework"})]}),o.jsx("p",{className:"page-subtitle",children:"A dynamic, non-linear representation of the six interdependent strategic pillars."})]}),o.jsxs("button",{className:`system-view-btn ${r?"active":""}`,onClick:r?()=>{}:s,disabled:r,children:[r?o.jsx(ku,{size:16,fill:"currentColor"}):o.jsx(Nf,{size:16,fill:"currentColor"}),r?"System Pulse Active":"Full System View"]})]})]}),o.jsx("div",{className:"desktop-view",children:o.jsx(dm,{pillars:Hl,selectedPillar:t,onSelect:c,isSystemViewActive:r,systemViewStep:l})}),o.jsxs("div",{className:"mobile-view",children:[o.jsxs("div",{className:"mobile-hub-preview glass",children:[o.jsx("h2",{className:"preview-title",children:t?t.title:"Select a Pillar"}),o.jsx("p",{className:"preview-desc",children:t?t.description:"The orchestration framework is a continuous learning loop."})]}),o.jsx("div",{className:"mobile-accordion",children:Hl.map(d=>o.jsxs("div",{className:`accordion-item glass ${(t==null?void 0:t.id)===d.id?"active":""}`,onClick:()=>c(d),children:[o.jsxs("div",{className:"accordion-header",children:[o.jsx("span",{className:"node-num",style:{color:d.color},children:d.number}),o.jsx("span",{className:"node-title",children:d.title}),(t==null?void 0:t.id)===d.id?o.jsx(uf,{size:20}):o.jsx(cf,{size:20})]}),(t==null?void 0:t.id)===d.id&&o.jsxs("div",{className:"accordion-content fade-in",children:[o.jsx("p",{children:d.description}),o.jsx("div",{className:"interdependence-hint",style:{color:d.color},children:d.id==="sensing"&&"→ Direct relationship with Articulation & Strategic Design"})]})]},d.id))})]}),o.jsx("style",{children:`
        .pillars-hex-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 4rem;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 2.8rem;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .system-view-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .system-view-btn:hover:not(:disabled) {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .system-view-btn.active {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background: var(--accent-primary-20);
        }

        .mobile-view {
          display: none;
        }

        @media (max-width: 1024px) {
          .page-title { font-size: 2.2rem; }
          .header-flex { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 768px) {
          .desktop-view { display: none; }
          .mobile-view { display: flex; flex-direction: column; gap: 2rem; }
          
          .mobile-hub-preview {
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            border: 1px solid var(--accent-primary-20);
          }

          .preview-title { font-size: 1.2rem; margin-bottom: 1rem; }
          .preview-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

          .mobile-accordion {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .accordion-item {
            padding: 1.25rem;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .accordion-item.active {
            border-color: var(--accent-primary);
          }

          .accordion-header {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .node-num { font-weight: 800; font-size: 1.1rem; }
          .node-title { flex: 1; font-weight: 700; font-size: 1rem; }

          .accordion-content {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--glass-border);
          }

          .accordion-content p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 1rem;
          }

          .interdependence-hint {
            font-size: 0.8rem;
            font-weight: 700;
          }

          .fade-in {
            animation: fadeIn 0.4s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `})]})},fm=({currentDay:e=3})=>{const t=e<=2?1:e<=4?2:3,n=t===1,r=t===2,i=t===3,l=800,a=340,s=20,c=44,d=108,m=80,h=140,g=248,v=44,w=d+m/2,j=22,_=720/4,p=[40+_*.5,40+_*1.5,40+_*2.5,40+_*3.5],u=[{label:"People",sub:"Talent & Culture",cx:p[0]},{label:"Process",sub:"Workflows & Methods",cx:p[1]},{label:"Technology",sub:"Tools & Platforms",cx:p[2]},{label:"Data",sub:"Insights & Governance",cx:p[3]}],f=l/2,y="var(--accent-primary)",S="var(--border-color)",b="var(--accent-primary-20)",C="var(--accent-glow)",E="var(--accent-secondary)",$=n?"none":r?b:C,M=n?S:y,re=n?1.5:2,Re=n?"6 4":"0",Oe=n?0:1,lr=i?1:0,$t=n?.3:1,$e=8,kt="var(--border-color)",k="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",T=[{id:1,label:"Skeleton"},{id:2,label:"Blueprint"},{id:3,label:"Detailed"}];return o.jsxs("div",{className:"omv-wrapper",children:[o.jsx("div",{className:"omv-stage-bar",children:T.map(z=>o.jsx("span",{className:`omv-stage-pill ${t===z.id?"active":""}`,children:z.label},z.id))}),o.jsx("div",{className:"omv-svg-container",children:o.jsxs("svg",{viewBox:`0 0 ${l} ${a}`,xmlns:"http://www.w3.org/2000/svg","aria-label":"Operating model diagram",role:"img",style:{width:"100%",height:"auto",display:"block",overflow:"visible"},children:[o.jsxs("defs",{children:[o.jsx("marker",{id:"arrow",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:o.jsx("path",{d:"M0,0 L0,6 L8,3 z",style:{fill:E,transition:k,opacity:$t}})}),o.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[o.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"blur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("rect",{x:40,y:s,width:l-80,height:c,rx:10,style:{fill:$,stroke:M,strokeWidth:re,strokeDasharray:Re,transition:k}}),o.jsx("text",{x:l/2,y:s+c/2+1,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--font-heading)",fontSize:"13px",fontWeight:600,letterSpacing:"0.08em",fill:y,opacity:Oe,transition:k,textTransform:"uppercase"},children:"STRATEGY"}),n&&o.jsx("rect",{x:l/2-60,y:s+(c-$e)/2,width:120,height:$e,rx:4,style:{fill:kt,opacity:.4}}),u.map(z=>o.jsx("line",{x1:z.cx,y1:s+c,x2:z.cx,y2:d,style:{stroke:E,strokeWidth:1.5,opacity:$t,transition:k}},`vs-${z.label}`)),u.map(z=>o.jsxs("g",{children:[o.jsx("rect",{x:z.cx-h/2,y:d,width:h,height:m,rx:10,style:{fill:$,stroke:M,strokeWidth:re,strokeDasharray:Re,transition:k,filter:i?"url(#glow)":"none"}}),o.jsx("text",{x:z.cx,y:d+(i?m/2-10:m/2+2),textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--font-heading)",fontSize:"13px",fontWeight:600,fill:y,opacity:Oe,transition:k},children:z.label}),o.jsx("text",{x:z.cx,y:d+m/2+12,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--font-main)",fontSize:"9px",fontWeight:400,fill:"var(--text-secondary)",opacity:lr,transition:k},children:z.sub}),n&&o.jsx("rect",{x:z.cx-40,y:d+(m-$e)/2,width:80,height:$e,rx:4,style:{fill:kt,opacity:.4}})]},z.label)),u.slice(0,3).map((z,U)=>{const X=z.cx+h/2,Ft=u[U+1].cx-h/2,Fe=d+m/2;return o.jsx("line",{x1:X,y1:Fe,x2:Ft-6,y2:Fe,markerEnd:"url(#arrow)",style:{stroke:E,strokeWidth:1.5,opacity:$t,transition:k}},`flow-${U}`)}),o.jsx("circle",{cx:f,cy:w,r:j,style:{fill:n?"none":r?b:y,stroke:M,strokeWidth:re,strokeDasharray:Re,transition:k}}),o.jsx("text",{x:f,y:w,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--font-heading)",fontSize:"10px",fontWeight:700,fill:i?"white":y,opacity:Oe,transition:k,letterSpacing:"0.04em"},children:"AI"}),u.map(z=>o.jsx("line",{x1:z.cx,y1:d+m,x2:z.cx,y2:g,style:{stroke:E,strokeWidth:1.5,opacity:$t,transition:k}},`vg-${z.label}`)),o.jsx("rect",{x:40,y:g,width:l-80,height:v,rx:10,style:{fill:$,stroke:M,strokeWidth:re,strokeDasharray:Re,transition:k}}),o.jsx("text",{x:l/2,y:g+v/2+1,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"var(--font-heading)",fontSize:"13px",fontWeight:600,letterSpacing:"0.08em",fill:y,opacity:Oe,transition:k},children:"GOVERNANCE & OVERSIGHT"}),n&&o.jsx("rect",{x:l/2-80,y:g+(v-$e)/2,width:160,height:$e,rx:4,style:{fill:kt,opacity:.4}}),i&&u.map(z=>o.jsx("rect",{x:z.cx-h/2+8,y:d+8,width:6,height:6,rx:2,style:{fill:E,opacity:.8,transition:k}},`badge-${z.label}`))]})}),o.jsx("style",{children:`
        .omv-wrapper {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          box-shadow: var(--card-shadow);
        }
        .omv-stage-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .omv-stage-pill {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.25rem 0.85rem;
          border-radius: 99px;
          border: 1.5px solid var(--border-color);
          color: var(--text-tertiary);
          background: transparent;
          transition: all 0.4s ease;
        }
        .omv-stage-pill.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
        }
        .omv-svg-container {
          width: 100%;
        }
      `})]})},mm=()=>{const{setCurrentPage:e}=Ot(),t=[{id:"learn",title:"Learn",description:"Access course presentations, your personal notes, and high-impact pre-read materials.",icon:Vo,color:"var(--accent-primary)",status:"4 New Materials"},{id:"think",title:"Think",description:"Dive into strategic workspaces where you tackle leadership problems with frameworks.",icon:wu,color:"var(--accent-secondary)",status:"2 Activities Due"},{id:"build",title:"Build",description:"Navigate to the simulator to apply your learning in a high-stakes AI environment.",icon:vu,color:"var(--accent-primary)",status:"Next Challenge Ready"}];return o.jsxs("div",{className:"container viz-page",children:[o.jsxs("section",{className:"viz-hero",children:[o.jsxs("div",{className:"hero-content",children:[o.jsxs("h1",{className:"hero-title",children:["Operating ",o.jsx("span",{className:"gradient-text",children:"Model"}),"."]}),o.jsx("p",{className:"hero-subtitle",children:"Track how your organisation's operating model evolves across the three weeks of the AI Leadership Journey — from skeleton to fully detailed blueprint."})]}),o.jsxs("div",{className:"next-session-card glass",children:[o.jsx("div",{className:"next-label",children:"Current Phase"}),o.jsx("div",{className:"next-date",children:"Week 2 — Blueprint"}),o.jsxs("button",{className:"prep-btn",onClick:()=>e("learn"),children:["View course materials ",o.jsx(Bo,{size:16})]})]})]}),o.jsxs("section",{className:"course-journey-section",children:[o.jsx(fm,{currentDay:3}),o.jsx(Nu,{currentDay:3})]}),o.jsx("section",{className:"pillars-grid",children:t.map(n=>o.jsx(zu,{...n,onClick:()=>e(n.id)},n.id))}),o.jsx("style",{children:`
        .viz-page {
          padding-top: 3rem;
          padding-bottom: 5rem;
        }
        .viz-hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }
        .hero-title {
          font-size: 3rem;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          font-weight: 300;
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.65;
        }
        .next-session-card {
          padding: 1.5rem 2rem;
          border-radius: 20px;
          min-width: 300px;
          border-left: 4px solid var(--accent-primary);
          box-shadow: var(--card-shadow);
        }
        .next-label {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-tertiary);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .next-date {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .prep-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-primary);
        }
        .prep-btn:hover {
          gap: 0.75rem;
        }
        .course-journey-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .viz-hero {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},Cu=P.createContext(),Ot=()=>P.useContext(Cu),hm=()=>{const[e,t]=P.useState(localStorage.getItem("theme")||"light"),[n,r]=P.useState("dashboard");P.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const i=()=>{t(a=>a==="light"?"dark":"theme")},l=()=>{switch(n){case"dashboard":return o.jsx(rs,{});case"learn":return o.jsx(Rf,{});case"think":return o.jsx(Bf,{});case"build":return o.jsx(Vf,{});case"teaching-assistant":return o.jsx(im,{});case"pillars":return o.jsx(am,{});case"pillars-hex":return o.jsx(pm,{});case"visualisation":return o.jsx(mm,{});default:return o.jsx(rs,{})}};return o.jsx(Cu.Provider,{value:{theme:e,toggleTheme:i,setCurrentPage:r,currentPage:n},children:o.jsxs("div",{className:"app-container",children:[o.jsx(If,{}),o.jsx("main",{children:l()})]})})};Zi.createRoot(document.getElementById("root")).render(o.jsx(Gl.StrictMode,{children:o.jsx(hm,{})}));
