(()=>{var e={};e.id=6717,e.ids=[6717],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},13790:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>x,workAsyncStorage:()=>k,workUnitAsyncStorage:()=>v});var s={};r.r(s),r.d(s,{GET:()=>p,POST:()=>c});var a=r(42706),n=r(28203),i=r(45994),u=r(56457),o=r(60455),d=r(49180);async function p(){try{let e=await u.zR.transaksi.findMany({include:{user:{select:{username:!0,namaLengkap:!0,noTlp:!0,rt:!0,rw:!0}},TransaksiProduk:{include:{produk:{select:{product_name:!0,price:!0,image:!0}}}},updatedByAgen:!0,updatedByPengepul:!0}});return o.w.get(e)}catch(e){return o.w.serverError()}}async function c(e){let t=await (0,d.n)(e);if(t instanceof Response)return t;try{let{TransaksiProduk:r}=await e.json();if(!t.id)return o.w.InvalidData("ID pengguna tidak ditemukan.");let s=await u.zR.transaksi.create({data:{statusUser:"Pending",userId:t.id,TransaksiProduk:{create:r.map(e=>({produkId:e.produkId,quantity:e.quantity}))}},include:{TransaksiProduk:{include:{produk:!0}}}});return o.w.created(s)}catch(e){return console.error(e),o.w.serverError()}}let l=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/transactions/route",pathname:"/api/transactions",filename:"route",bundlePath:"app/api/transactions/route"},resolvedPagePath:"E:\\kuliah\\TA\\ksm-kudubisa\\src\\app\\api\\transactions\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:k,workUnitAsyncStorage:v,serverHooks:x}=l;function g(){return(0,i.patchFetch)({workAsyncStorage:k,workUnitAsyncStorage:v})}},96487:()=>{},78335:()=>{},49180:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var s=r(60455),a=r(43008),n=r.n(a),i=r(44512);async function u(e){let t=e.headers.get("Authorization"),r=(await i.UL()).get("accessToken")?.value,a=t?.split(" ")[1]||r;if(!a)return s.w.InvalidData("Token tidak ditemukan, login diperlukan.");try{let e=n().verify(a,process.env.JWT_SECRET);if(!e.id)return s.w.InvalidData("Token tidak valid.");return e}catch(e){return{status:401,message:"Token tidak valid."}}}},56457:(e,t,r)=>{"use strict";r.d(t,{VY:()=>a,zR:()=>s});let s=new(r(96330)).PrismaClient,a="http://localhost:3000/api"},60455:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});var s=r(39187);let a={get:(e,t="Success")=>s.NextResponse.json({status:200,message:t,data:e}),created:(e,t="Created")=>s.NextResponse.json({status:201,message:t,data:e}),updated:(e,t="Updated")=>s.NextResponse.json({status:201,message:t,data:e}),deleted:(e,t="Deleted")=>s.NextResponse.json({status:201,message:t,data:e}),InvalidData:(e="Invalid Data")=>s.NextResponse.json({status:400,message:e}),serverError:(e="Internal Server Error")=>s.NextResponse.json({status:500,message:e})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1989,5452,8935],()=>r(13790));module.exports=s})();