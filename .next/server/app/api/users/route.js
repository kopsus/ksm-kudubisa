(()=>{var e={};e.id=318,e.ids=[318],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},11730:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>v,routeModule:()=>d,serverHooks:()=>x,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{GET:()=>p});var a=r(42706),n=r(28203),u=r(45994),o=r(56457),i=r(60455);async function p(e){try{let e=(await o.zR.user.findMany({include:{role:!0}})).map(({password:e,...t})=>t);return i.w.get(e)}catch(e){return i.w.serverError()}}let d=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/users/route",pathname:"/api/users",filename:"route",bundlePath:"app/api/users/route"},resolvedPagePath:"E:\\kuliah\\TA\\ksm-kudubisa\\src\\app\\api\\users\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:x}=d;function v(){return(0,u.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}},96487:()=>{},78335:()=>{},56457:(e,t,r)=>{"use strict";r.d(t,{VY:()=>a,zR:()=>s});let s=new(r(96330)).PrismaClient,a="http://localhost:3000/api"},60455:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var s=r(39187);let a={get:(e,t="Success")=>s.NextResponse.json({status:200,message:t,data:e}),created:(e,t="Created")=>s.NextResponse.json({status:201,message:t,data:e}),updated:(e,t="Updated")=>s.NextResponse.json({status:201,message:t,data:e}),deleted:(e,t="Deleted")=>s.NextResponse.json({status:201,message:t,data:e}),InvalidData:(e="Invalid Data")=>s.NextResponse.json({status:400,message:e}),serverError:(e="Internal Server Error")=>s.NextResponse.json({status:500,message:e})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1989,5452],()=>r(11730));module.exports=s})();