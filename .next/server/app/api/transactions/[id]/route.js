(()=>{var e={};e.id=5877,e.ids=[5877],e.modules={96330:e=>{"use strict";e.exports=require("@prisma/client")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},62877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>x,routeModule:()=>k,serverHooks:()=>f,workAsyncStorage:()=>w,workUnitAsyncStorage:()=>v});var a={};r.r(a),r.d(a,{DELETE:()=>l,GET:()=>p,PATCH:()=>c});var s=r(42706),n=r(28203),i=r(45994),u=r(49180),o=r(56457),d=r(60455);async function p(e,{params:t}){try{let{id:e}=await t,r=await o.zR.transaksi.findUnique({where:{id:e},include:{TransaksiProduk:{include:{produk:{select:{product_name:!0,price:!0,image:!0}}}},user:{select:{namaLengkap:!0,username:!0,rt:!0,rw:!0,noTlp:!0}},updatedByAgen:!0,updatedByPengepul:!0}});if(!r)return d.w.InvalidData("Transaksi not found");return d.w.get(r)}catch(e){return console.error(e),d.w.serverError()}}async function c(e,{params:t}){let r=await (0,u.n)(e);if(r instanceof Response)return r;try{let a=t.id,s=await e.json(),{statusUser:n,statusAgen:i,updatedByRoleAgen:u,updatedByRolePengepul:p}=s;if(!r.id)return d.w.InvalidData("ID pengguna tidak ditemukan.");if(!await o.zR.transaksi.findUnique({where:{id:a}}))return d.w.InvalidData("Transaksi not found");let c=await o.zR.transaksi.update({where:{id:a},data:{statusUser:n,statusAgen:i,updatedByRoleAgen:u,updatedByRolePengepul:p,TransaksiProduk:{deleteMany:{},create:s.TransaksiProduk?.map(e=>({produkId:e.produkId,quantity:e.quantity}))}},select:{statusUser:!0,statusAgen:!0,updatedByRoleAgen:!0,updatedByRolePengepul:!0,TransaksiProduk:{include:{produk:!0}}}});return d.w.updated(c)}catch(e){return console.error(e),d.w.serverError("Internal Server Error")}}async function l(e,{params:t}){let r=await (0,u.n)(e);if(r instanceof Response)return r;try{let{id:e}=await t;if(!await o.zR.transaksi.findUnique({where:{id:e}}))return d.w.InvalidData("Transaksi not found");await o.zR.transaksiProduk.deleteMany({where:{transaksiId:e}});let r=await o.zR.transaksi.delete({where:{id:e}});return d.w.deleted(r)}catch(e){return d.w.serverError()}}let k=new s.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/transactions/[id]/route",pathname:"/api/transactions/[id]",filename:"route",bundlePath:"app/api/transactions/[id]/route"},resolvedPagePath:"E:\\kuliah\\TA\\ksm-kudubisa\\src\\app\\api\\transactions\\[id]\\route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:w,workUnitAsyncStorage:v,serverHooks:f}=k;function x(){return(0,i.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:v})}},96487:()=>{},78335:()=>{},49180:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var a=r(60455),s=r(43008),n=r.n(s),i=r(44512);async function u(e){let t=e.headers.get("Authorization"),r=(await i.UL()).get("accessToken")?.value,s=t?.split(" ")[1]||r;if(!s)return a.w.InvalidData("Token tidak ditemukan, login diperlukan.");try{let e=n().verify(s,process.env.JWT_SECRET);if(!e.id)return a.w.InvalidData("Token tidak valid.");return e}catch(e){return{status:401,message:"Token tidak valid."}}}},56457:(e,t,r)=>{"use strict";r.d(t,{VY:()=>s,zR:()=>a});let a=new(r(96330)).PrismaClient,s="http://localhost:3000/api"},60455:(e,t,r)=>{"use strict";r.d(t,{w:()=>s});var a=r(39187);let s={get:(e,t="Success")=>a.NextResponse.json({status:200,message:t,data:e}),created:(e,t="Created")=>a.NextResponse.json({status:201,message:t,data:e}),updated:(e,t="Updated")=>a.NextResponse.json({status:201,message:t,data:e}),deleted:(e,t="Deleted")=>a.NextResponse.json({status:201,message:t,data:e}),InvalidData:(e="Invalid Data")=>a.NextResponse.json({status:400,message:e}),serverError:(e="Internal Server Error")=>a.NextResponse.json({status:500,message:e})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1989,5452,8935],()=>r(62877));module.exports=a})();