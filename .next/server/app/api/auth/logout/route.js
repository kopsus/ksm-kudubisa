(()=>{var e={};e.id=8489,e.ids=[8489],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},61287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>k,routeModule:()=>c,serverHooks:()=>v,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>x});var s={};r.r(s),r.d(s,{DELETE:()=>d});var a=r(42706),n=r(28203),o=r(45994),u=r(44512),i=r(39187),p=r(49180);async function d(e){let t=await (0,p.n)(e);return t instanceof Response?t:((await (0,u.UL)()).delete("accessToken"),i.NextResponse.json({message:"anda berhasil logout!!"}))}let c=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/auth/logout/route",pathname:"/api/auth/logout",filename:"route",bundlePath:"app/api/auth/logout/route"},resolvedPagePath:"E:\\kuliah\\TA\\ksm-kudubisa\\src\\app\\api\\auth\\logout\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:x,serverHooks:v}=c;function k(){return(0,o.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},49180:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var s=r(60455),a=r(43008),n=r.n(a),o=r(44512);async function u(e){let t=e.headers.get("Authorization"),r=(await o.UL()).get("accessToken")?.value,a=t?.split(" ")[1]||r;if(!a)return s.w.InvalidData("Token tidak ditemukan, login diperlukan.");try{let e=n().verify(a,process.env.JWT_SECRET);if(!e.id)return s.w.InvalidData("Token tidak valid.");return e}catch(e){return{status:401,message:"Token tidak valid."}}}},60455:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var s=r(39187);let a={get:(e,t="Success")=>s.NextResponse.json({status:200,message:t,data:e}),created:(e,t="Created")=>s.NextResponse.json({status:201,message:t,data:e}),updated:(e,t="Updated")=>s.NextResponse.json({status:201,message:t,data:e}),deleted:(e,t="Deleted")=>s.NextResponse.json({status:201,message:t,data:e}),InvalidData:(e="Invalid Data")=>s.NextResponse.json({status:400,message:e}),serverError:(e="Internal Server Error")=>s.NextResponse.json({status:500,message:e})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1989,5452,8935],()=>r(61287));module.exports=s})();