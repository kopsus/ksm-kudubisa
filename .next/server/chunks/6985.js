"use strict";exports.id=6985,exports.ids=[6985],exports.modules={63689:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(41680).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},26161:(e,r,n)=>{n.d(r,{H_:()=>rV,UC:()=>rT,YJ:()=>rF,q7:()=>rK,VF:()=>rG,JU:()=>rL,ZL:()=>rA,z6:()=>rB,hN:()=>rW,bL:()=>rN,wv:()=>rU,Pb:()=>rZ,G5:()=>rX,ZP:()=>rH,l9:()=>rO});var t=n(58009);function o(e,r,{checkForDefaultPrevented:n=!0}={}){return function(t){if(e?.(t),!1===n||!t.defaultPrevented)return r?.(t)}}function l(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function a(...e){return r=>{let n=!1,t=e.map(e=>{let t=l(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():l(e[r],null)}}}}var i=n(6004),u=n(13024),c=n(55740),s=n(45512),d=t.forwardRef((e,r)=>{let{children:n,...o}=e,l=t.Children.toArray(n),a=l.find(m);if(a){let e=a.props.children,n=l.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,s.jsx)(f,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,s.jsx)(f,{...o,ref:r,children:n})});d.displayName="Slot";var f=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],l=r[t];/^on[A-Z]/.test(t)?o&&l?n[t]=(...e)=>{l(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...l}:"className"===t&&(n[t]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?a(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});f.displayName="SlotClone";var p=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function m(e){return t.isValidElement(e)&&e.type===p}var v=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,l=t?d:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{});function g(e,r,{checkForDefaultPrevented:n=!0}={}){return function(t){if(e?.(t),!1===n||!t.defaultPrevented)return r?.(t)}}function h(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function w(...e){return r=>{let n=!1,t=e.map(e=>{let t=h(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():h(e[r],null)}}}}function y(...e){return t.useCallback(w(...e),e)}var x=t.forwardRef((e,r)=>{let{children:n,...o}=e,l=t.Children.toArray(n),a=l.find(b);if(a){let e=a.props.children,n=l.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,s.jsx)(C,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,s.jsx)(C,{...o,ref:r,children:n})});x.displayName="Slot";var C=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],l=r[t];/^on[A-Z]/.test(t)?o&&l?n[t]=(...e)=>{l(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...l}:"className"===t&&(n[t]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?w(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});C.displayName="SlotClone";var R=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function b(e){return t.isValidElement(e)&&e.type===R}function j(e){let r=e+"CollectionProvider",[n,o]=(0,i.A)(r),[l,a]=n(r,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:r,children:n}=e,o=t.useRef(null),a=t.useRef(new Map).current;return(0,s.jsx)(l,{scope:r,itemMap:a,collectionRef:o,children:n})};u.displayName=r;let c=e+"CollectionSlot",d=t.forwardRef((e,r)=>{let{scope:n,children:t}=e,o=y(r,a(c,n).collectionRef);return(0,s.jsx)(x,{ref:o,children:t})});d.displayName=c;let f=e+"CollectionItemSlot",p="data-radix-collection-item",m=t.forwardRef((e,r)=>{let{scope:n,children:o,...l}=e,i=t.useRef(null),u=y(r,i),c=a(f,n);return t.useEffect(()=>(c.itemMap.set(i,{ref:i,...l}),()=>void c.itemMap.delete(i))),(0,s.jsx)(x,{[p]:"",ref:u,children:o})});return m.displayName=f,[{Provider:u,Slot:d,ItemSlot:m},function(r){let n=a(e+"CollectionConsumer",r);return t.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(n.itemMap.values()).sort((e,n)=>r.indexOf(e.ref.current)-r.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}function M(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function D(...e){return r=>{let n=!1,t=e.map(e=>{let t=M(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():M(e[r],null)}}}}function E(...e){return t.useCallback(D(...e),e)}var P=n(59018),k=n(20356),_=n(19632),S=n(69305),I=n(30096),N=n(36924),O=n(60226),A=n(29399),T=t.forwardRef((e,r)=>{let{children:n,...o}=e,l=t.Children.toArray(n),a=l.find(K);if(a){let e=a.props.children,n=l.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,s.jsx)(F,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,s.jsx)(F,{...o,ref:r,children:n})});T.displayName="Slot";var F=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],l=r[t];/^on[A-Z]/.test(t)?o&&l?n[t]=(...e)=>{l(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...l}:"className"===t&&(n[t]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?D(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});F.displayName="SlotClone";var L=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function K(e){return t.isValidElement(e)&&e.type===L}var V=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,l=t?T:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{});function B(e,r,{checkForDefaultPrevented:n=!0}={}){return function(t){if(e?.(t),!1===n||!t.defaultPrevented)return r?.(t)}}function W(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function G(...e){return r=>{let n=!1,t=e.map(e=>{let t=W(e,r);return n||"function"!=typeof t||(n=!0),t});if(n)return()=>{for(let r=0;r<t.length;r++){let n=t[r];"function"==typeof n?n():W(e[r],null)}}}}var U=t.forwardRef((e,r)=>{let{children:n,...o}=e,l=t.Children.toArray(n),a=l.find(X);if(a){let e=a.props.children,n=l.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,s.jsx)(Z,{...o,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,s.jsx)(Z,{...o,ref:r,children:n})});U.displayName="Slot";var Z=t.forwardRef((e,r)=>{let{children:n,...o}=e;if(t.isValidElement(n)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return t.cloneElement(n,{...function(e,r){let n={...r};for(let t in r){let o=e[t],l=r[t];/^on[A-Z]/.test(t)?o&&l?n[t]=(...e)=>{l(...e),o(...e)}:o&&(n[t]=o):"style"===t?n[t]={...o,...l}:"className"===t&&(n[t]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:r?G(r,e):e})}return t.Children.count(n)>1?t.Children.only(null):null});Z.displayName="SlotClone";var H=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function X(e){return t.isValidElement(e)&&e.type===H}var q=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=t.forwardRef((e,n)=>{let{asChild:t,...o}=e,l=t?U:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),z=n(92828),$="rovingFocusGroup.onEntryFocus",Y={bubbles:!1,cancelable:!0},J="RovingFocusGroup",[Q,ee,er]=j(J),[en,et]=(0,i.A)(J,[er]),[eo,el]=en(J),ea=t.forwardRef((e,r)=>(0,s.jsx)(Q.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(Q.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(ei,{...e,ref:r})})}));ea.displayName=J;var ei=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,orientation:o,loop:l=!1,dir:a,currentTabStopId:i,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:d,onEntryFocus:f,preventScrollOnEntryFocus:p=!1,...m}=e,v=t.useRef(null),g=function(...e){return t.useCallback(G(...e),e)}(r,v),h=(0,P.jH)(a),[w=null,y]=(0,u.i)({prop:i,defaultProp:c,onChange:d}),[x,C]=t.useState(!1),R=(0,z.c)(f),b=ee(n),j=t.useRef(!1),[M,D]=t.useState(0);return t.useEffect(()=>{let e=v.current;if(e)return e.addEventListener($,R),()=>e.removeEventListener($,R)},[R]),(0,s.jsx)(eo,{scope:n,orientation:o,dir:h,loop:l,currentTabStopId:w,onItemFocus:t.useCallback(e=>y(e),[y]),onItemShiftTab:t.useCallback(()=>C(!0),[]),onFocusableItemAdd:t.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:t.useCallback(()=>D(e=>e-1),[]),children:(0,s.jsx)(q.div,{tabIndex:x||0===M?-1:0,"data-orientation":o,...m,ref:g,style:{outline:"none",...e.style},onMouseDown:B(e.onMouseDown,()=>{j.current=!0}),onFocus:B(e.onFocus,e=>{let r=!j.current;if(e.target===e.currentTarget&&r&&!x){let r=new CustomEvent($,Y);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=b().filter(e=>e.focusable);ed([e.find(e=>e.active),e.find(e=>e.id===w),...e].filter(Boolean).map(e=>e.ref.current),p)}}j.current=!1}),onBlur:B(e.onBlur,()=>C(!1))})})}),eu="RovingFocusGroupItem",ec=t.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:n,focusable:o=!0,active:l=!1,tabStopId:a,...i}=e,u=(0,I.B)(),c=a||u,d=el(eu,n),f=d.currentTabStopId===c,p=ee(n),{onFocusableItemAdd:m,onFocusableItemRemove:v}=d;return t.useEffect(()=>{if(o)return m(),()=>v()},[o,m,v]),(0,s.jsx)(Q.ItemSlot,{scope:n,id:c,focusable:o,active:l,children:(0,s.jsx)(q.span,{tabIndex:f?0:-1,"data-orientation":d.orientation,...i,ref:r,onMouseDown:B(e.onMouseDown,e=>{o?d.onItemFocus(c):e.preventDefault()}),onFocus:B(e.onFocus,()=>d.onItemFocus(c)),onKeyDown:B(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){d.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,n){var t;let o=(t=e.key,"rtl"!==n?t:"ArrowLeft"===t?"ArrowRight":"ArrowRight"===t?"ArrowLeft":t);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(o)))return es[o]}(e,d.orientation,d.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let n=p().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)n.reverse();else if("prev"===r||"next"===r){"prev"===r&&n.reverse();let t=n.indexOf(e.currentTarget);n=d.loop?function(e,r){return e.map((n,t)=>e[(r+t)%e.length])}(n,t+1):n.slice(t+1)}setTimeout(()=>ed(n))}})})})});ec.displayName=eu;var es={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ed(e,r=!1){let n=document.activeElement;for(let t of e)if(t===n||(t.focus({preventScroll:r}),document.activeElement!==n))return}var ef=n(72421),ep=n(8523),em=["Enter"," "],ev=["ArrowUp","PageDown","End"],eg=["ArrowDown","PageUp","Home",...ev],eh={ltr:[...em,"ArrowRight"],rtl:[...em,"ArrowLeft"]},ew={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ey="Menu",[ex,eC,eR]=j(ey),[eb,ej]=(0,i.A)(ey,[eR,N.Bk,et]),eM=(0,N.Bk)(),eD=et(),[eE,eP]=eb(ey),[ek,e_]=eb(ey),eS=e=>{let{__scopeMenu:r,open:n=!1,children:o,dir:l,onOpenChange:a,modal:i=!0}=e,u=eM(r),[c,d]=t.useState(null),f=t.useRef(!1),p=(0,z.c)(a),m=(0,P.jH)(l);return t.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",r,{capture:!0,once:!0}),document.addEventListener("pointermove",r,{capture:!0,once:!0})},r=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",r,{capture:!0}),document.removeEventListener("pointermove",r,{capture:!0})}},[]),(0,s.jsx)(N.bL,{...u,children:(0,s.jsx)(eE,{scope:r,open:n,onOpenChange:p,content:c,onContentChange:d,children:(0,s.jsx)(ek,{scope:r,onClose:t.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:i,children:o})})})};eS.displayName=ey;var eI=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=eM(n);return(0,s.jsx)(N.Mz,{...o,...t,ref:r})});eI.displayName="MenuAnchor";var eN="MenuPortal",[eO,eA]=eb(eN,{forceMount:void 0}),eT=e=>{let{__scopeMenu:r,forceMount:n,children:t,container:o}=e,l=eP(eN,r);return(0,s.jsx)(eO,{scope:r,forceMount:n,children:(0,s.jsx)(A.C,{present:n||l.open,children:(0,s.jsx)(O.Z,{asChild:!0,container:o,children:t})})})};eT.displayName=eN;var eF="MenuContent",[eL,eK]=eb(eF),eV=t.forwardRef((e,r)=>{let n=eA(eF,e.__scopeMenu),{forceMount:t=n.forceMount,...o}=e,l=eP(eF,e.__scopeMenu),a=e_(eF,e.__scopeMenu);return(0,s.jsx)(ex.Provider,{scope:e.__scopeMenu,children:(0,s.jsx)(A.C,{present:t||l.open,children:(0,s.jsx)(ex.Slot,{scope:e.__scopeMenu,children:a.modal?(0,s.jsx)(eB,{...o,ref:r}):(0,s.jsx)(eW,{...o,ref:r})})})})}),eB=t.forwardRef((e,r)=>{let n=eP(eF,e.__scopeMenu),o=t.useRef(null),l=E(r,o);return t.useEffect(()=>{let e=o.current;if(e)return(0,ef.Eq)(e)},[]),(0,s.jsx)(eG,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),eW=t.forwardRef((e,r)=>{let n=eP(eF,e.__scopeMenu);return(0,s.jsx)(eG,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),eG=t.forwardRef((e,r)=>{let{__scopeMenu:n,loop:o=!1,trapFocus:l,onOpenAutoFocus:a,onCloseAutoFocus:i,disableOutsidePointerEvents:u,onEntryFocus:c,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:m,onDismiss:v,disableOutsideScroll:h,...w}=e,y=eP(eF,n),x=e_(eF,n),C=eM(n),R=eD(n),b=eC(n),[j,M]=t.useState(null),D=t.useRef(null),P=E(r,D,y.onContentChange),I=t.useRef(0),O=t.useRef(""),A=t.useRef(0),F=t.useRef(null),L=t.useRef("right"),K=t.useRef(0),V=h?ep.A:t.Fragment,B=h?{as:T,allowPinchZoom:!0}:void 0,W=e=>{let r=O.current+e,n=b().filter(e=>!e.disabled),t=document.activeElement,o=n.find(e=>e.ref.current===t)?.textValue,l=function(e,r,n){var t;let o=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,l=(t=Math.max(n?e.indexOf(n):-1,0),e.map((r,n)=>e[(t+n)%e.length]));1===o.length&&(l=l.filter(e=>e!==n));let a=l.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return a!==n?a:void 0}(n.map(e=>e.textValue),r,o),a=n.find(e=>e.textValue===l)?.ref.current;(function e(r){O.current=r,window.clearTimeout(I.current),""!==r&&(I.current=window.setTimeout(()=>e(""),1e3))})(r),a&&setTimeout(()=>a.focus())};t.useEffect(()=>()=>window.clearTimeout(I.current),[]),(0,_.Oh)();let G=t.useCallback(e=>L.current===F.current?.side&&function(e,r){return!!r&&function(e,r){let{x:n,y:t}=e,o=!1;for(let e=0,l=r.length-1;e<r.length;l=e++){let a=r[e].x,i=r[e].y,u=r[l].x,c=r[l].y;i>t!=c>t&&n<(u-a)*(t-i)/(c-i)+a&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)}(e,F.current?.area),[]);return(0,s.jsx)(eL,{scope:n,searchRef:O,onItemEnter:t.useCallback(e=>{G(e)&&e.preventDefault()},[G]),onItemLeave:t.useCallback(e=>{G(e)||(D.current?.focus(),M(null))},[G]),onTriggerLeave:t.useCallback(e=>{G(e)&&e.preventDefault()},[G]),pointerGraceTimerRef:A,onPointerGraceIntentChange:t.useCallback(e=>{F.current=e},[]),children:(0,s.jsx)(V,{...B,children:(0,s.jsx)(S.n,{asChild:!0,trapped:l,onMountAutoFocus:g(a,e=>{e.preventDefault(),D.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:(0,s.jsx)(k.qW,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:m,onDismiss:v,children:(0,s.jsx)(ea,{asChild:!0,...R,dir:x.dir,orientation:"vertical",loop:o,currentTabStopId:j,onCurrentTabStopIdChange:M,onEntryFocus:g(c,e=>{x.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,s.jsx)(N.UC,{role:"menu","aria-orientation":"vertical","data-state":ri(y.open),"data-radix-menu-content":"",dir:x.dir,...C,...w,ref:P,style:{outline:"none",...w.style},onKeyDown:g(w.onKeyDown,e=>{let r=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,t=1===e.key.length;r&&("Tab"===e.key&&e.preventDefault(),!n&&t&&W(e.key));let o=D.current;if(e.target!==o||!eg.includes(e.key))return;e.preventDefault();let l=b().filter(e=>!e.disabled).map(e=>e.ref.current);ev.includes(e.key)&&l.reverse(),function(e){let r=document.activeElement;for(let n of e)if(n===r||(n.focus(),document.activeElement!==r))return}(l)}),onBlur:g(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(I.current),O.current="")}),onPointerMove:g(e.onPointerMove,rs(e=>{let r=e.target,n=K.current!==e.clientX;if(e.currentTarget.contains(r)&&n){let r=e.clientX>K.current?"right":"left";L.current=r,K.current=e.clientX}}))})})})})})})});eV.displayName=eF;var eU=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,s.jsx)(V.div,{role:"group",...t,ref:r})});eU.displayName="MenuGroup";var eZ=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,s.jsx)(V.div,{...t,ref:r})});eZ.displayName="MenuLabel";var eH="MenuItem",eX="menu.itemSelect",eq=t.forwardRef((e,r)=>{let{disabled:n=!1,onSelect:o,...l}=e,a=t.useRef(null),i=e_(eH,e.__scopeMenu),u=eK(eH,e.__scopeMenu),d=E(r,a),f=t.useRef(!1);return(0,s.jsx)(ez,{...l,ref:d,disabled:n,onClick:g(e.onClick,()=>{let e=a.current;if(!n&&e){let r=new CustomEvent(eX,{bubbles:!0,cancelable:!0});e.addEventListener(eX,e=>o?.(e),{once:!0}),function(e,r){e&&c.flushSync(()=>e.dispatchEvent(r))}(e,r),r.defaultPrevented?f.current=!1:i.onClose()}}),onPointerDown:r=>{e.onPointerDown?.(r),f.current=!0},onPointerUp:g(e.onPointerUp,e=>{f.current||e.currentTarget?.click()}),onKeyDown:g(e.onKeyDown,e=>{let r=""!==u.searchRef.current;!n&&(!r||" "!==e.key)&&em.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eq.displayName=eH;var ez=t.forwardRef((e,r)=>{let{__scopeMenu:n,disabled:o=!1,textValue:l,...a}=e,i=eK(eH,n),u=eD(n),c=t.useRef(null),d=E(r,c),[f,p]=t.useState(!1),[m,v]=t.useState("");return t.useEffect(()=>{let e=c.current;e&&v((e.textContent??"").trim())},[a.children]),(0,s.jsx)(ex.ItemSlot,{scope:n,disabled:o,textValue:l??m,children:(0,s.jsx)(ec,{asChild:!0,...u,focusable:!o,children:(0,s.jsx)(V.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...a,ref:d,onPointerMove:g(e.onPointerMove,rs(e=>{o?i.onItemLeave(e):(i.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:g(e.onPointerLeave,rs(e=>i.onItemLeave(e))),onFocus:g(e.onFocus,()=>p(!0)),onBlur:g(e.onBlur,()=>p(!1))})})})}),e$=t.forwardRef((e,r)=>{let{checked:n=!1,onCheckedChange:t,...o}=e;return(0,s.jsx)(e3,{scope:e.__scopeMenu,checked:n,children:(0,s.jsx)(eq,{role:"menuitemcheckbox","aria-checked":ru(n)?"mixed":n,...o,ref:r,"data-state":rc(n),onSelect:g(o.onSelect,()=>t?.(!!ru(n)||!n),{checkForDefaultPrevented:!1})})})});e$.displayName="MenuCheckboxItem";var eY="MenuRadioGroup",[eJ,eQ]=eb(eY,{value:void 0,onValueChange:()=>{}}),e0=t.forwardRef((e,r)=>{let{value:n,onValueChange:t,...o}=e,l=(0,z.c)(t);return(0,s.jsx)(eJ,{scope:e.__scopeMenu,value:n,onValueChange:l,children:(0,s.jsx)(eU,{...o,ref:r})})});e0.displayName=eY;var e1="MenuRadioItem",e2=t.forwardRef((e,r)=>{let{value:n,...t}=e,o=eQ(e1,e.__scopeMenu),l=n===o.value;return(0,s.jsx)(e3,{scope:e.__scopeMenu,checked:l,children:(0,s.jsx)(eq,{role:"menuitemradio","aria-checked":l,...t,ref:r,"data-state":rc(l),onSelect:g(t.onSelect,()=>o.onValueChange?.(n),{checkForDefaultPrevented:!1})})})});e2.displayName=e1;var e6="MenuItemIndicator",[e3,e5]=eb(e6,{checked:!1}),e9=t.forwardRef((e,r)=>{let{__scopeMenu:n,forceMount:t,...o}=e,l=e5(e6,n);return(0,s.jsx)(A.C,{present:t||ru(l.checked)||!0===l.checked,children:(0,s.jsx)(V.span,{...o,ref:r,"data-state":rc(l.checked)})})});e9.displayName=e6;var e8=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e;return(0,s.jsx)(V.div,{role:"separator","aria-orientation":"horizontal",...t,ref:r})});e8.displayName="MenuSeparator";var e4=t.forwardRef((e,r)=>{let{__scopeMenu:n,...t}=e,o=eM(n);return(0,s.jsx)(N.i3,{...o,...t,ref:r})});e4.displayName="MenuArrow";var e7="MenuSub",[re,rr]=eb(e7),rn=e=>{let{__scopeMenu:r,children:n,open:o=!1,onOpenChange:l}=e,a=eP(e7,r),i=eM(r),[u,c]=t.useState(null),[d,f]=t.useState(null),p=(0,z.c)(l);return t.useEffect(()=>(!1===a.open&&p(!1),()=>p(!1)),[a.open,p]),(0,s.jsx)(N.bL,{...i,children:(0,s.jsx)(eE,{scope:r,open:o,onOpenChange:p,content:d,onContentChange:f,children:(0,s.jsx)(re,{scope:r,contentId:(0,I.B)(),triggerId:(0,I.B)(),trigger:u,onTriggerChange:c,children:n})})})};rn.displayName=e7;var rt="MenuSubTrigger",ro=t.forwardRef((e,r)=>{let n=eP(rt,e.__scopeMenu),o=e_(rt,e.__scopeMenu),l=rr(rt,e.__scopeMenu),a=eK(rt,e.__scopeMenu),i=t.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:c}=a,d={__scopeMenu:e.__scopeMenu},f=t.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return t.useEffect(()=>f,[f]),t.useEffect(()=>{let e=u.current;return()=>{window.clearTimeout(e),c(null)}},[u,c]),(0,s.jsx)(eI,{asChild:!0,...d,children:(0,s.jsx)(ez,{id:l.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":l.contentId,"data-state":ri(n.open),...e,ref:D(r,l.onTriggerChange),onClick:r=>{e.onClick?.(r),e.disabled||r.defaultPrevented||(r.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,rs(r=>{a.onItemEnter(r),r.defaultPrevented||e.disabled||n.open||i.current||(a.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,rs(e=>{f();let r=n.content?.getBoundingClientRect();if(r){let t=n.content?.dataset.side,o="right"===t,l=r[o?"left":"right"],i=r[o?"right":"left"];a.onPointerGraceIntentChange({area:[{x:e.clientX+(o?-5:5),y:e.clientY},{x:l,y:r.top},{x:i,y:r.top},{x:i,y:r.bottom},{x:l,y:r.bottom}],side:t}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(e),e.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,r=>{let t=""!==a.searchRef.current;!e.disabled&&(!t||" "!==r.key)&&eh[o.dir].includes(r.key)&&(n.onOpenChange(!0),n.content?.focus(),r.preventDefault())})})})});ro.displayName=rt;var rl="MenuSubContent",ra=t.forwardRef((e,r)=>{let n=eA(eF,e.__scopeMenu),{forceMount:o=n.forceMount,...l}=e,a=eP(eF,e.__scopeMenu),i=e_(eF,e.__scopeMenu),u=rr(rl,e.__scopeMenu),c=t.useRef(null),d=E(r,c);return(0,s.jsx)(ex.Provider,{scope:e.__scopeMenu,children:(0,s.jsx)(A.C,{present:o||a.open,children:(0,s.jsx)(ex.Slot,{scope:e.__scopeMenu,children:(0,s.jsx)(eG,{id:u.contentId,"aria-labelledby":u.triggerId,...l,ref:d,align:"start",side:"rtl"===i.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{i.isUsingKeyboardRef.current&&c.current?.focus(),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:g(e.onFocusOutside,e=>{e.target!==u.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,e=>{i.onClose(),e.preventDefault()}),onKeyDown:g(e.onKeyDown,e=>{let r=e.currentTarget.contains(e.target),n=ew[i.dir].includes(e.key);r&&n&&(a.onOpenChange(!1),u.trigger?.focus(),e.preventDefault())})})})})})});function ri(e){return e?"open":"closed"}function ru(e){return"indeterminate"===e}function rc(e){return ru(e)?"indeterminate":e?"checked":"unchecked"}function rs(e){return r=>"mouse"===r.pointerType?e(r):void 0}ra.displayName=rl;var rd="DropdownMenu",[rf,rp]=(0,i.A)(rd,[ej]),rm=ej(),[rv,rg]=rf(rd),rh=e=>{let{__scopeDropdownMenu:r,children:n,dir:o,open:l,defaultOpen:a,onOpenChange:i,modal:c=!0}=e,d=rm(r),f=t.useRef(null),[p=!1,m]=(0,u.i)({prop:l,defaultProp:a,onChange:i});return(0,s.jsx)(rv,{scope:r,triggerId:(0,I.B)(),triggerRef:f,contentId:(0,I.B)(),open:p,onOpenChange:m,onOpenToggle:t.useCallback(()=>m(e=>!e),[m]),modal:c,children:(0,s.jsx)(eS,{...d,open:p,onOpenChange:m,dir:o,modal:c,children:n})})};rh.displayName=rd;var rw="DropdownMenuTrigger",ry=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,disabled:t=!1,...l}=e,i=rg(rw,n),u=rm(n);return(0,s.jsx)(eI,{asChild:!0,...u,children:(0,s.jsx)(v.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...l,ref:a(r,i.triggerRef),onPointerDown:o(e.onPointerDown,e=>{t||0!==e.button||!1!==e.ctrlKey||(i.onOpenToggle(),i.open||e.preventDefault())}),onKeyDown:o(e.onKeyDown,e=>{!t&&(["Enter"," "].includes(e.key)&&i.onOpenToggle(),"ArrowDown"===e.key&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});ry.displayName=rw;var rx=e=>{let{__scopeDropdownMenu:r,...n}=e,t=rm(r);return(0,s.jsx)(eT,{...t,...n})};rx.displayName="DropdownMenuPortal";var rC="DropdownMenuContent",rR=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...l}=e,a=rg(rC,n),i=rm(n),u=t.useRef(!1);return(0,s.jsx)(eV,{id:a.contentId,"aria-labelledby":a.triggerId,...i,...l,ref:r,onCloseAutoFocus:o(e.onCloseAutoFocus,e=>{u.current||a.triggerRef.current?.focus(),u.current=!1,e.preventDefault()}),onInteractOutside:o(e.onInteractOutside,e=>{let r=e.detail.originalEvent,n=0===r.button&&!0===r.ctrlKey,t=2===r.button||n;(!a.modal||t)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rR.displayName=rC;var rb=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(eU,{...o,...t,ref:r})});rb.displayName="DropdownMenuGroup";var rj=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(eZ,{...o,...t,ref:r})});rj.displayName="DropdownMenuLabel";var rM=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(eq,{...o,...t,ref:r})});rM.displayName="DropdownMenuItem";var rD=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e$,{...o,...t,ref:r})});rD.displayName="DropdownMenuCheckboxItem";var rE=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e0,{...o,...t,ref:r})});rE.displayName="DropdownMenuRadioGroup";var rP=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e2,{...o,...t,ref:r})});rP.displayName="DropdownMenuRadioItem";var rk=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e9,{...o,...t,ref:r})});rk.displayName="DropdownMenuItemIndicator";var r_=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e8,{...o,...t,ref:r})});r_.displayName="DropdownMenuSeparator",t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(e4,{...o,...t,ref:r})}).displayName="DropdownMenuArrow";var rS=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(ro,{...o,...t,ref:r})});rS.displayName="DropdownMenuSubTrigger";var rI=t.forwardRef((e,r)=>{let{__scopeDropdownMenu:n,...t}=e,o=rm(n);return(0,s.jsx)(ra,{...o,...t,ref:r,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rI.displayName="DropdownMenuSubContent";var rN=rh,rO=ry,rA=rx,rT=rR,rF=rb,rL=rj,rK=rM,rV=rD,rB=rE,rW=rP,rG=rk,rU=r_,rZ=e=>{let{__scopeDropdownMenu:r,children:n,open:t,onOpenChange:o,defaultOpen:l}=e,a=rm(r),[i=!1,c]=(0,u.i)({prop:t,defaultProp:l,onChange:o});return(0,s.jsx)(rn,{...a,open:i,onOpenChange:c,children:n})},rH=rS,rX=rI}};