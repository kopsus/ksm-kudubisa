(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5099],{13863:(e,t,a)=>{Promise.resolve().then(a.bind(a,63837))},26764:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(67401).A)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},19993:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(67401).A)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},58257:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var r=a(93109),l=a(82651),s=a(13030);let i=l.A.create({baseURL:r.VY,withCredentials:!0});i.interceptors.request.use(async e=>{let t=(0,s.getCookie)("token");return t&&e.headers&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e))},52087:(e,t,a)=>{"use strict";a.d(t,{Ob:()=>d,X1:()=>n,cV:()=>o,x3:()=>i});var r=a(93109),l=a(82651),s=a(58257);let i=async()=>(await l.A.get("".concat(r.VY,"/gallery"))).data,n=async e=>(await s.g.post("".concat(r.VY,"/gallery"),e)).data,d=async e=>{let{body:t,id:a}=e;return(await s.g.patch("".concat(r.VY,"/gallery/").concat(a),t)).data},o=async e=>(await s.g.delete("".concat(r.VY,"/gallery/").concat(e))).data},99176:(e,t,a)=>{"use strict";a.d(t,{u:()=>s});var r=a(547),l=a(52087);let s=()=>{var e;let t=(0,r.I)({queryKey:["gallery"],queryFn:()=>(0,l.x3)()});return{dataGallery:null===(e=t.data)||void 0===e?void 0:e.data,...t}}},68246:(e,t,a)=>{"use strict";a.d(t,{V:()=>s});var r=a(93109),l=a(82651);let s=async e=>(await l.A.post("".concat(r.VY,"/upload"),e,{headers:{"Content-Type":"multipart/form-data"}})).data},63837:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var r=a(95155),l=a(99176),s=a(76975),i=a(45070),n=a(25848),d=a(52087);let o=()=>{let{refetch:e}=(0,l.u)(),t=(0,n.n)({mutationKey:["gallery mutation"],mutationFn:e=>{let{body:t,type:a,id:r}=e;switch(a){case"create":return(0,d.X1)(t);case"update":return(0,d.Ob)({body:t,id:r});case"delete":return(0,d.cV)(r)}},onSuccess:()=>{e()},onError:e=>{console.log("res",e)}});return{serviceGallery:t.mutateAsync,...t}};var c=a(68246),u=a(93397),h=a(73312),g=a(33900),v=a(24797),p=a(97348),m=a(94928),x=a(5565),f=a(12115);let w=()=>{var e,t;let[a,l]=(0,m.fp)(p.c),{previewUrl:s,setPreviewUrl:i,handleImageChange:n}=(0,v.A)(),[d,w]=f.useState(null),y=()=>{l(e=>({...e,show:!1})),i(""),w(null)},b=s||(null===(e=a.data)||void 0===e?void 0:e.image)||"",{serviceGallery:j}=o(),k=async e=>{if(e.preventDefault(),!d){alert("Please select an image to upload.");return}let t=new FormData;t.append("file",d);let r=await (0,c.V)(t);if(null==r?void 0:r.data){let e={image:r.data};if("CREATE"===a.type)await j({type:"create",body:e}),y();else{var l;await j({type:"update",body:e,id:null===(l=a.data)||void 0===l?void 0:l.id}),y()}}else alert("Failed to upload image.")};return(0,r.jsx)(u.A,{show:"DELETE"!==a.type&&a.show,onHide:y,title:"".concat("CREATE"===a.type?"Tambah Gallery":"Edit Gallery"),children:(0,r.jsxs)("form",{onSubmit:k,className:"flex flex-col items-center gap-5",children:[(0,r.jsx)("div",{className:"w-52 h-52 rounded-xl border bg-white shadow-1 overflow-hidden",children:s||(null===(t=a.data)||void 0===t?void 0:t.image)?(0,r.jsx)(x.default,{src:b,alt:"Preview",width:0,height:0,sizes:"100vw"}):null}),(0,r.jsx)(g.p,{type:"file",onChange:e=>{var t;n(e);let a=null===(t=e.target.files)||void 0===t?void 0:t[0];w(null!=a?a:null)},className:"max-w-72"}),(0,r.jsx)(h.$,{type:"submit",children:"Simpan"})]})})},y=()=>{let[e,t]=(0,m.fp)(p.c),a=()=>{t(e=>({...e,show:!1}))},{serviceGallery:l}=o(),s=async()=>{await l({type:"delete",id:e.data}),a()};return(0,r.jsx)(u.A,{show:"DELETE"===e.type&&e.show,onHide:a,titleDelete:"Hapus Image ini dari Gallery",children:(0,r.jsxs)("div",{className:"flex items-center justify-center gap-5",children:[(0,r.jsx)(h.$,{variant:"outline",onClick:a,children:"Cancel"}),(0,r.jsx)(h.$,{variant:"danger",onClick:s,children:"Delete"})]})})};var b=a(64223),j=a(26764),k=a(19993);let A=()=>{let e=(0,m.Xr)(p.c),{dataGallery:t}=(0,l.u)(),a=(0,b.$)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{pageName:"Gallery",onClick:()=>{e({type:"CREATE",show:!0,data:null})}}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:[null==t?void 0:t.map((l,s)=>(0,r.jsxs)("div",{onClick:()=>a.open(s,t.map(e=>e.image)),className:"h-52 w-full rounded-lg shadow-1 overflow-hidden border relative group",children:[(0,r.jsxs)("div",{className:"hidden group-hover:flex justify-center items-center gap-5 absolute top-0 left-0 w-full h-full bg-black/50",children:[(0,r.jsx)(j.A,{color:"white",className:"cursor-pointer",onClick:()=>{e({type:"UPDATE",show:!0,data:l})}}),(0,r.jsx)(k.A,{color:"red",className:"cursor-pointer",onClick:()=>{e({type:"DELETE",show:!0,data:l.id})}})]}),(0,r.jsx)(x.default,{src:l.image,alt:l.id,width:0,height:0,sizes:"100vw"})]},s)),(0,r.jsx)(s.H,{index:a.index,visible:a.visible,slides:a.slides,onClose:a.close})]}),(0,r.jsx)(y,{}),(0,r.jsx)(w,{})]})}},76975:(e,t,a)=>{"use strict";a.d(t,{H:()=>i});var r=a(95155),l=a(66298),s=a(33615);a(58561);let i=e=>{let{index:t,visible:a,onClose:i,slides:n=[]}=e;return(0,r.jsx)(l.Ay,{index:t,open:a,close:i,slides:n,plugins:[s.A]})}},45070:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(95155),l=a(73312);let s=e=>{let{pageName:t,onClick:a}=e;return(0,r.jsxs)("div",{className:"mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,r.jsx)("h2",{className:"text-title-md2 font-semibold text-black dark:text-white",children:t}),(0,r.jsxs)(l.$,{onClick:a,children:["Tambah ",t]})]})}},93397:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(95155),l=a(40767);let s=e=>{let{children:t,title:a,desc:s,titleDelete:i,show:n,onHide:d}=e;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)("div",{className:"fixed inset-0 z-999999 bg-black/80 pointer-events-auto",onClick:d}),(0,r.jsxs)("div",{className:"".concat(n?"pointer-events-auto block":"hidden pointer-events-none"," fixed left-[50%] top-[50%] z-999999 grid w-full translate-x-[-50%] translate-y-[-50%] gap-10 border border-zinc-200 bg-white p-6 shadow-lg duration-200 rounded-xl max-h-screen overflow-y-auto max-w-[425px]"),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight",children:a}),(0,r.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight text-center",children:i}),(0,r.jsx)("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:s})]}),(0,r.jsx)(l.A,{color:"red",onClick:d,className:"w-4 h-4 cursor-pointer absolute right-4 top-4 hover:scale-105 transition-all"}),t]})]})}},73312:(e,t,a)=>{"use strict";a.d(t,{$:()=>o});var r=a(95155),l=a(12115),s=a(12317),i=a(31027),n=a(21567);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-primary text-zinc-50 shadow hover:bg-primary/90 dark:bg-primary dark:text-zinc-900 dark:hover:bg-primary/90",danger:"bg-danger text-zinc-50 shadow hover:bg-danger/90 dark:bg-danger dark:text-zinc-900 dark:hover:bg-danger/90",outline:"text-danger border border-danger shadow hover:bg-danger/90 hover:text-white dark:text-danger dark:hover:bg-danger/90 dar:hover:text-white",ghost:"bg-slate-300 hover:bg-slate-400"},size:{default:"h-9 px-6 py-2",sm:"h-8 rounded-full px-3 text-xs",lg:"h-10 rounded-full px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=l.forwardRef((e,t)=>{let{className:a,variant:l,size:i,asChild:o=!1,...c}=e,u=o?s.DX:"button";return(0,r.jsx)(u,{className:(0,n.cn)(d({variant:l,size:i,className:a})),ref:t,...c})});o.displayName="Button"},33900:(e,t,a)=>{"use strict";a.d(t,{p:()=>i});var r=a(95155),l=a(12115),s=a(21567);let i=l.forwardRef((e,t)=>{let{className:a,type:l,...i}=e;return(0,r.jsx)("input",{type:l,className:(0,s.cn)("flex h-9 w-full rounded-md border-2 border-primary active:outline-none px-3 py-1 text-sm shadow-sm",a),ref:t,...i})});i.displayName="Input"},93109:(e,t,a)=>{"use strict";a.d(t,{It:()=>l,VY:()=>r}),new(a(11094)).PrismaClient;let r="http://localhost:3000/api",l="cm5gvuic20002wxkgn20vevnt"},24797:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(12115);let l=()=>{let[e,t]=(0,r.useState)("");return{previewUrl:e,setPreviewUrl:t,handleImageChange:e=>{var a;let r=null===(a=e.target.files)||void 0===a?void 0:a[0];if(r){let e=URL.createObjectURL(r);return t(e),()=>URL.revokeObjectURL(e)}t("")}}}},64223:(e,t,a)=>{"use strict";a.d(t,{$:()=>i});var r=a(12115);let l=[16,32,48,64,96,128,256,384],s=[640,750,828,1080,1200,1920,2048,3840],i=()=>{let[e,t]=(0,r.useState)(!1),[a,i]=(0,r.useState)([]),[n,d]=(0,r.useState)(-1);return{index:n,open:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t(!0),d(e),i(a)},close:()=>{t(!1),d(-1),i([])},visible:e,slides:a.map(e=>({width:1280,height:1280,src:e,srcSet:l.concat(s).filter(e=>e<=1280).map(t=>({src:e,width:t,height:Math.round(1*t)}))})),images:a}}},21567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>s});var r=a(43463),l=a(69795);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.QP)((0,r.$)(t))}},97348:(e,t,a)=>{"use strict";a.d(t,{c:()=>r});let r=(0,a(21416).eU)({show:!1,type:"CREATE",data:null})}},e=>{var t=t=>e(e.s=t);e.O(0,[3496,970,3072,547,486,7970,8225,8441,1517,7358],()=>t(13863)),_N_E=e.O()}]);