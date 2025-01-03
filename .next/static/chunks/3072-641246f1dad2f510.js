"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3072],{92054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parse=function(e,t){let r=new a,i=e.length;if(i<2)return r;let n=t?.decode||c,o=0;do{let t=e.indexOf("=",o);if(-1===t)break;let s=e.indexOf(";",o),a=-1===s?i:s;if(t>a){o=e.lastIndexOf(";",t-1)+1;continue}let c=l(e,o,t),d=u(e,t,c),h=e.slice(c,d);if(void 0===r[h]){let i=l(e,t+1,a),o=u(e,a,i),s=n(e.slice(i,o));r[h]=s}o=a+1}while(o<i);return r},t.serialize=function(e,t,a){let l=a?.encode||encodeURIComponent;if(!r.test(e))throw TypeError(`argument name is invalid: ${e}`);let u=l(t);if(!i.test(u))throw TypeError(`argument val is invalid: ${t}`);let c=e+"="+u;if(!a)return c;if(void 0!==a.maxAge){if(!Number.isInteger(a.maxAge))throw TypeError(`option maxAge is invalid: ${a.maxAge}`);c+="; Max-Age="+a.maxAge}if(a.domain){if(!n.test(a.domain))throw TypeError(`option domain is invalid: ${a.domain}`);c+="; Domain="+a.domain}if(a.path){if(!o.test(a.path))throw TypeError(`option path is invalid: ${a.path}`);c+="; Path="+a.path}if(a.expires){var d;if(d=a.expires,"[object Date]"!==s.call(d)||!Number.isFinite(a.expires.valueOf()))throw TypeError(`option expires is invalid: ${a.expires}`);c+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.partitioned&&(c+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():void 0){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError(`option priority is invalid: ${a.priority}`)}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError(`option sameSite is invalid: ${a.sameSite}`)}return c};let r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{let e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,r){do{let r=e.charCodeAt(t);if(32!==r&&9!==r)return t}while(++t<r);return r}function u(e,t,r){for(;t>r;){let r=e.charCodeAt(--t);if(32!==r&&9!==r)return t+1}return r}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},95238:function(e,t,r){var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var s=r(92054),a=r(77049),l=function(e){if(!(0,a.isClientSide)(e))throw Error("You are trying to access cookies on the server side. Please, use the server-side import with `cookies-next/server` instead.")},u=function(e){if(l(e),"server"!==(0,a.getRenderPhase)()){for(var t={},r=document.cookie?document.cookie.split("; "):[],i=0,n=r.length;i<n;i++){var o=r[i].split("="),s=o.slice(1).join("=");t[o[0]]=s}return t}};t.getCookies=u,t.getCookie=function(e,t){l(t);var r=u(t),i=null==r?void 0:r[e];if(void 0!==i)return(0,a.decode)(i)};var c=function(e,t,r){if(l(r),"server"!==(0,a.getRenderPhase)()){var n=(0,s.serialize)(e,(0,a.stringify)(t),i({path:"/"},r||{}));document.cookie=n}};t.setCookie=c,t.deleteCookie=function(e,t){l(t),c(e,"",i(i({},t),{maxAge:-1}))},t.hasCookie=function(e,t){if(l(t),!e)return!1;var r=u(t);return!!r&&Object.prototype.hasOwnProperty.call(r,e)},o(r(36301),t)},36301:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77049:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderPhase=t.isClientSide=t.decode=t.stringify=void 0,t.stringify=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}},t.decode=function(e){return e?e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):e},t.isClientSide=function(e){return!(null==e?void 0:e.req)&&!(null==e?void 0:e.res)&&!(e&&"cookies"in e&&(null==e?void 0:e.cookies))},t.getRenderPhase=function(){return"undefined"==typeof window?"server":"client"}},13030:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var o=r(95238),s=r(5218);n(r(36301),t);var a=r(77049);t.getCookies=function(e){return(0,a.isClientSide)(e)?o.getCookies(e):s.getCookies(e)},t.getCookie=function(e,t){return(0,a.isClientSide)(t)?o.getCookie(e,t):s.getCookie(e,t)},t.setCookie=function(e,t,r){return(0,a.isClientSide)(r)?o.setCookie(e,t,r):s.setCookie(e,t,r)},t.deleteCookie=function(e,t){return(0,a.isClientSide)(t)?o.deleteCookie(e,t):s.deleteCookie(e,t)},t.hasCookie=function(e,t){return(0,a.isClientSide)(t)?o.hasCookie(e,t):s.hasCookie(e,t)}},5218:function(e,t,r){var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},s=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}l((i=i.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var r,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],i=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},l=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var u=r(92054),c=r(77049),d=function(e){if((0,c.isClientSide)(e))throw Error("You are trying to access cookies on the client side. Please, use the client-side import with `cookies-next/client` instead.")},h=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},f=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&h(e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&h(e.res.cookies)||!!e&&"cookies"in e&&"function"==typeof e.cookies},p=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},v=function(e){return s(void 0,void 0,void 0,function(){var t,r;return a(this,function(i){switch(i.label){case 0:if(d(e),!f(e))return[3,2];if(e.req)return[2,p(e.req.cookies)];if(e.res)return[2,p(e.res.cookies)];if(!e.cookies)return[3,2];return t=p,[4,e.cookies()];case 1:return[2,t.apply(void 0,[i.sent()])];case 2:if((null==e?void 0:e.req)&&(r=e.req),null==r?void 0:r.cookies)return[2,r.cookies];if(null==r?void 0:r.headers.cookie)return[2,(0,u.parse)(r.headers.cookie)];return[2,{}]}})})};t.getCookies=v,t.getCookie=function(e,t){return s(void 0,void 0,void 0,function(){var r;return a(this,function(i){switch(i.label){case 0:return d(t),[4,v(t)];case 1:if(void 0===(r=i.sent()[e]))return[2,void 0];return[2,(0,c.decode)(r)]}})})};var y=function(e,t,r){return s(void 0,void 0,void 0,function(){var n,o,s,h,p,v,y,g,b,m,w,k,C,S,O;return a(this,function(a){switch(a.label){case 0:if(d(r),!f(r))return[3,3];if(n=r.req,o=r.res,s=r.cookies,h=l(r,["req","res","cookies"]),p=i({name:e,value:(0,c.stringify)(t)},h),n&&n.cookies.set(p),o&&o.cookies.set(p),!s)return[3,2];return[4,s()];case 1:a.sent().set(p),a.label=2;case 2:return[2];case 3:return v={},r&&(m=(b=r).req,w=b.res,k=l(b,["req","res"]),y=m,g=w,v=k),C=(0,u.serialize)(e,(0,c.stringify)(t),i({path:"/"},v)),g&&y&&(Array.isArray(S=g.getHeader("Set-Cookie"))||(S=S?[String(S)]:[]),g.setHeader("Set-Cookie",S.concat(C)),y&&y.cookies&&(O=y.cookies,""===t?delete O[e]:O[e]=(0,c.stringify)(t)),y&&y.headers&&y.headers.cookie&&(O=(0,u.parse)(y.headers.cookie),""===t?delete O[e]:O[e]=(0,c.stringify)(t),y.headers.cookie=Object.entries(O).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},""))),[2]}})})};t.setCookie=y,t.deleteCookie=function(e,t){return s(void 0,void 0,void 0,function(){return a(this,function(r){return d(t),[2,y(e,"",i(i({},t),{maxAge:-1}))]})})},t.hasCookie=function(e,t){return s(void 0,void 0,void 0,function(){return a(this,function(r){switch(r.label){case 0:if(d(t),!e)return[2,!1];return[4,v(t)];case 1:return[2,r.sent().hasOwnProperty(e)]}})})},o(r(36301),t)},47702:(e,t,r)=>{r.d(t,{X:()=>a,k:()=>l});var i=r(84403),n=r(15586),o=r(14267),s=r(2955),a=class extends s.k{#e;#t;#r;#i;#n;#o;constructor(e){super(),this.#o=!1,this.#n=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){this.options={...this.#n,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#r.remove(this)}setData(e,t){let r=(0,i.pl)(this.state.data,e,this.options);return this.#s({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#s({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#i?.promise;return this.#i?.cancel(e),t?t.then(i.lQ).catch(i.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>!1!==(0,i.Eh)(e.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===i.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.j3)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){let e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#i&&(this.#o?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#s({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let r=new AbortController,n=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#o=!0,r.signal)})},s={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let e=(0,i.ZM)(this.options,t),r={queryKey:this.queryKey,meta:this.meta};return(n(r),this.#o=!1,this.options.persister)?this.options.persister(e,r,this):e(r)}};n(s),this.options.behavior?.onFetch(s,this),this.#t=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==s.fetchOptions?.meta)&&this.#s({type:"fetch",meta:s.fetchOptions?.meta});let a=e=>{(0,o.wm)(e)&&e.silent||this.#s({type:"error",error:e}),(0,o.wm)(e)||(this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this)),this.scheduleGc()};return this.#i=(0,o.II)({initialPromise:t?.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){a(Error(`${this.queryHash} data is undefined`));return}try{this.setData(e)}catch(e){a(e);return}this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),this.scheduleGc()},onError:a,onFail:(e,t)=>{this.#s({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0}),this.#i.start()}#s(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...l(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=e.error;if((0,o.wm)(r)&&r.revert&&this.#t)return{...this.#t,fetchStatus:"idle"};return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),n.j.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function l(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.v_)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}},94928:(e,t,r)=>{r.d(t,{Xr:()=>f,fp:()=>p,md:()=>h});var i=r(12115),n=r(21416);let o=(0,i.createContext)(void 0),s=e=>{let t=(0,i.useContext)(o);return(null==e?void 0:e.store)||t||(0,n.zp)()},a=e=>"function"==typeof(null==e?void 0:e.then),l=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},u=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw l(e),e}),c=new WeakMap,d=e=>{let t=c.get(e);return t||(t=new Promise((r,i)=>{let n=e,o=e=>t=>{n===e&&r(t)},s=e=>t=>{n===e&&i(t)},l=e=>{"onCancel"in e&&"function"==typeof e.onCancel&&e.onCancel(i=>{if(i===e)throw Error("[Bug] p is not updated even after cancelation");a(i)?(c.set(i,t),n=i,i.then(o(i),s(i)),l(i)):r(i)})};e.then(o(e),s(e)),l(e)}),c.set(e,t)),t};function h(e,t){let r=s(t),[[n,o,c],h]=(0,i.useReducer)(t=>{let i=r.get(e);return Object.is(t[0],i)&&t[1]===r&&t[2]===e?t:[i,r,e]},void 0,()=>[r.get(e),r,e]),f=n;(o!==r||c!==e)&&(h(),f=r.get(e));let p=null==t?void 0:t.delay;return((0,i.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof p){let t=r.get(e);a(t)&&l(d(t)),setTimeout(h,p);return}h()});return h(),t},[r,e,p]),(0,i.useDebugValue)(f),a(f))?u(d(f)):f}function f(e,t){let r=s(t);return(0,i.useCallback)(function(){for(var t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];if(!("write"in e))throw Error("not writable atom");return r.set(e,...i)},[r,e])}function p(e,t){return[h(e,t),f(e,t)]}},21416:(e,t,r)=>{let i;r.d(t,{eU:()=>o,zp:()=>j});let n=0;function o(e,t){let r=`atom${++n}`,i={toString(){return this.debugLabel?r+":"+this.debugLabel:r}};return"function"==typeof e?i.read=e:(i.init=e,i.read=s,i.write=a),t&&(i.write=t),i}function s(e){return e(this)}function a(e,t,r){return t(this,"function"==typeof r?r(e(this)):r)}let l=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,u=e=>"init"in e,c=e=>!!e.write,d=new WeakMap,h=e=>{var t;return v(e)&&!(null==(t=d.get(e))?void 0:t[1])},f=(e,t)=>{let r=d.get(e);if(r)r[1]=!0,r[0].forEach(e=>e(t));else throw Error("[Bug] cancelable promise not found")},p=e=>{if(d.has(e))return;let t=[new Set,!1];d.set(e,t);let r=()=>{t[1]=!0};e.then(r,r),e.onCancel=e=>{t[0].add(e)}},v=e=>"function"==typeof(null==e?void 0:e.then),y=e=>"v"in e||"e"in e,g=e=>{if("e"in e)throw e.e;if(!("v"in e))throw Error("[Bug] atom state is not initialized");return e.v},b=(e,t,r)=>{r.p.has(e)||(r.p.add(e),t.then(()=>{r.p.delete(e)},()=>{r.p.delete(e)}))},m=(e,t,r,i,n)=>{var o;if(i===t)throw Error("[Bug] atom cannot depend on itself");r.d.set(i,n.n),h(r.v)&&b(t,r.v,n),null==(o=n.m)||o.t.add(t),e&&C(e,i,t)},w=()=>[new Map,new Map,new Set],k=(e,t,r)=>{e[0].has(t)||e[0].set(t,new Set),e[1].set(t,r)},C=(e,t,r)=>{let i=e[0].get(t);i&&i.add(r)},S=(e,t)=>e[0].get(t),O=(e,t)=>{e[2].add(t)},_=e=>{let t;let r=!1,i=e=>{try{e()}catch(e){r||(t=e,r=!0)}};for(;e[1].size||e[2].size;){e[0].clear();let t=new Set(e[1].values());e[1].clear();let r=new Set(e[2]);e[2].clear(),t.forEach(e=>{var t;return null==(t=e.m)?void 0:t.l.forEach(i)}),r.forEach(i)}if(r)throw t},A=(...[e,t,r,i])=>{let n;n=new Set;let o=(t,r,i)=>{let n="v"in r,o=r.v,s=h(r.v)?r.v:null;if(v(i)){for(let n of(p(i),r.d.keys()))b(t,i,e(n));r.v=i,delete r.e}else r.v=i,delete r.e;n&&Object.is(o,r.v)||(++r.n,s&&f(s,i))},s=(r,i,n)=>{var a;let d,h;let f=e(i);if(y(f)&&(f.m&&!(null==n?void 0:n.has(i))||Array.from(f.d).every(([e,t])=>s(r,e,n).n===t)))return f;f.d.clear();let p=!0;try{let b=t(i,t=>{if(l(i,t)){let r=e(t);if(!y(r)){if(u(t))o(t,r,t.init);else throw Error("no atom init")}return g(r)}let a=s(r,t,n);try{return g(a)}finally{if(p)m(r,i,f,t,a);else{let e=w();m(e,i,f,t,a),j(e,i,f),_(e)}}},{get signal(){return d||(d=new AbortController),d.signal},get setSelf(){return c(i)||console.warn("setSelf function cannot be used with read-only atom"),!h&&c(i)&&(h=(...e)=>{if(p&&console.warn("setSelf function cannot be called in sync"),!p)return E(i,...e)}),h}});if(o(i,f,b),v(b)){null==(a=b.onCancel)||a.call(b,()=>null==d?void 0:d.abort());let e=()=>{if(f.m){let e=w();j(e,i,f),_(e)}};b.then(e,e)}return f}catch(e){return delete f.v,f.e=e,++f.n,f}finally{p=!1}},a=(t,r,i)=>{var n,o;let s=new Map;for(let t of(null==(n=i.m)?void 0:n.t)||[])s.set(t,e(t));for(let t of i.p)s.set(t,e(t));return null==(o=S(t,r))||o.forEach(t=>{s.set(t,e(t))}),s},d=(e,t,r)=>{let[i,n]=function(e,t,r){let i=[],n=new Set,o=new Set,s=[[t,r]];for(;s.length>0;){let[t,r]=s[s.length-1];if(o.has(t)){s.pop();continue}if(n.has(t)){i.push([t,r,r.n]),o.add(t),s.pop();continue}for(let[i,o]of(n.add(t),a(e,t,r)))t===i||n.has(i)||s.push([i,o])}return[i,o]}(e,t,r),o=new Set([t]);for(let t=i.length-1;t>=0;--t){let[r,a,l]=i[t],u=!1;for(let e of a.d.keys())if(e!==r&&o.has(e)){u=!0;break}u&&(s(e,r,n),j(e,r,a),l!==a.n&&(k(e,r,a),o.add(r))),n.delete(r)}},C=(t,i,...n)=>{let a=!0;try{return r(i,e=>g(s(t,e)),(r,...n)=>{let s=e(r);try{if(!l(i,r))return C(t,r,...n);{if(!u(r))throw Error("atom not writable");let e=s.n,i=n[0];o(r,s,i),j(t,r,s),e!==s.n&&(k(t,r,s),d(t,r,s));return}}finally{a||_(t)}},...n)}finally{a=!1}},E=(e,...t)=>{let r=w();try{return C(r,e,...t)}finally{_(r)}},j=(t,r,i)=>{if(i.m&&!h(i.v)){for(let n of i.d.keys())i.m.d.has(n)||(P(t,n,e(n)).t.add(r),i.m.d.add(n));for(let n of i.m.d||[])if(!i.d.has(n)){i.m.d.delete(n);let o=x(t,n,e(n));null==o||o.t.delete(r)}}},P=(t,r,o)=>{if(!o.m){for(let i of(s(t,r),o.d.keys()))P(t,i,e(i)).t.add(r);if(o.m={l:new Set,d:new Set(o.d.keys()),t:new Set},n.add(r),c(r)){let e;let n=o.m,s=(t,i)=>{let n=!0;e=(...e)=>{try{return C(t,r,...e)}finally{n||_(t)}};try{return i()}finally{n=!1}};O(t,()=>{let o=s(t,()=>i(r,(...t)=>e(...t)));o&&(n.u=e=>s(e,o))})}}return o.m},x=(t,r,i)=>{if(i.m&&!i.m.l.size&&!Array.from(i.m.t).some(t=>{var i;return null==(i=e(t).m)?void 0:i.d.has(r)})){let o=i.m.u;for(let s of(o&&O(t,()=>o(t)),delete i.m,n.delete(r),i.d.keys())){let i=x(t,s,e(s));null==i||i.t.delete(r)}return}return i.m},T={get:e=>g(s(void 0,e)),set:E,sub:(t,r)=>{let i=w(),n=e(t),o=P(i,t,n).l;return o.add(r),_(i),()=>{o.delete(r);let e=w();x(e,t,n),_(e)}},unstable_derive:n=>A(...n(e,t,r,i))};return Object.assign(T,{dev4_get_internal_weak_map:()=>({get:t=>{let r=e(t);if(0!==r.n)return r}}),dev4_get_mounted_atoms:()=>n,dev4_restore_atoms:t=>{let r=w();for(let[i,n]of t)if(u(i)){let t=e(i),s=t.n;o(i,t,n),j(r,i,t),s!==t.n&&(k(r,i,t),d(r,i,t))}_(r)}}),T},E=()=>{let e=new WeakMap;return A(t=>{if(!t)throw Error("Atom is undefined or null");let r=e.get(t);return r||(r={d:new Map,p:new Set,n:0},e.set(t,r)),r},(e,...t)=>e.read(...t),(e,...t)=>e.write(...t),(e,...t)=>{var r;return null==(r=e.onMount)?void 0:r.call(e,...t)})},j=()=>(i||(i=E(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=i),globalThis.__JOTAI_DEFAULT_STORE__!==i&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),i)}}]);