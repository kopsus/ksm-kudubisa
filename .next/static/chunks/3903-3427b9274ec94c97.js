"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3903],{58257:(e,a,t)=>{t.d(a,{g:()=>n});var r=t(93109),s=t(82651),l=t(13030);let n=s.A.create({baseURL:r.VY,withCredentials:!0});n.interceptors.request.use(async e=>{let a=(0,l.getCookie)("token");return a&&e.headers&&(e.headers.Authorization="Bearer ".concat(a)),e},e=>Promise.reject(e))},81073:(e,a,t)=>{t.d(a,{d:()=>i});var r=t(95155),s=t(73312),l=t(37528),n=t(93518),d=t(46967);function i(e){let{table:a}=e;return(0,r.jsxs)("div",{className:"flex md:items-center justify-between px-2",children:[(0,r.jsxs)("div",{className:"flex-1 text-sm md:text-nowrap text-muted-foreground",children:[a.getFilteredSelectedRowModel().rows.length," of"," ",a.getFilteredRowModel().rows.length," row(s) selected."]}),(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2 items-end md:flex-row md:justify-end md:items-center",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("p",{className:"text-sm font-medium",children:"Rows per page"}),(0,r.jsxs)(l.l6,{value:"".concat(a.getState().pagination.pageSize),onValueChange:e=>{a.setPageSize(Number(e))},children:[(0,r.jsx)(l.bq,{className:"h-8 w-[70px]",children:(0,r.jsx)(l.yv,{placeholder:a.getState().pagination.pageSize})}),(0,r.jsx)(l.gC,{side:"top",children:[5,10,20,30,40].map(e=>(0,r.jsx)(l.eb,{value:"".concat(e),children:e},e))})]})]}),(0,r.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",a.getState().pagination.pageIndex+1," of"," ",a.getPageCount()]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)(s.$,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>a.previousPage(),disabled:!a.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,r.jsx)(n.A,{className:"h-4 w-4"})]}),(0,r.jsxs)(s.$,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>a.nextPage(),disabled:!a.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,r.jsx)(d.A,{className:"h-4 w-4"})]})]})]})]})}},93397:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(95155),s=t(40767);let l=e=>{let{children:a,title:t,desc:l,titleDelete:n,show:d,onHide:i}=e;return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{className:"fixed inset-0 z-999999 bg-black/80 pointer-events-auto",onClick:i}),(0,r.jsxs)("div",{className:"".concat(d?"pointer-events-auto block":"hidden pointer-events-none"," fixed left-[50%] top-[50%] z-999999 grid w-full translate-x-[-50%] translate-y-[-50%] gap-10 border border-zinc-200 bg-white p-6 shadow-lg duration-200 rounded-xl max-h-screen overflow-y-auto max-w-[425px]"),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight",children:t}),(0,r.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight text-center",children:n}),(0,r.jsx)("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:l})]}),(0,r.jsx)(s.A,{color:"red",onClick:i,className:"w-4 h-4 cursor-pointer absolute right-4 top-4 hover:scale-105 transition-all"}),a]})]})}},73312:(e,a,t)=>{t.d(a,{$:()=>o});var r=t(95155),s=t(12115),l=t(12317),n=t(31027),d=t(21567);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-primary text-zinc-50 shadow hover:bg-primary/90 dark:bg-primary dark:text-zinc-900 dark:hover:bg-primary/90",danger:"bg-danger text-zinc-50 shadow hover:bg-danger/90 dark:bg-danger dark:text-zinc-900 dark:hover:bg-danger/90",outline:"text-danger border border-danger shadow hover:bg-danger/90 hover:text-white dark:text-danger dark:hover:bg-danger/90 dar:hover:text-white",ghost:"bg-slate-300 hover:bg-slate-400"},size:{default:"h-9 px-6 py-2",sm:"h-8 rounded-full px-3 text-xs",lg:"h-10 rounded-full px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,a)=>{let{className:t,variant:s,size:n,asChild:o=!1,...c}=e,m=o?l.DX:"button";return(0,r.jsx)(m,{className:(0,d.cn)(i({variant:s,size:n,className:t})),ref:a,...c})});o.displayName="Button"},22130:(e,a,t)=>{t.d(a,{Zp:()=>n});var r=t(95155),s=t(12115),l=t(21567);let n=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4 md:p-6",t),...s})});n.displayName="Card",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("flex flex-col space-y-1.5",t),...s})}).displayName="CardHeader",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...s})}).displayName="CardTitle",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("text-sm text-zinc-500 dark:text-zinc-400",t),...s})}).displayName="CardDescription",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("pt-0",t),...s})}).displayName="CardContent",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:a,className:(0,l.cn)("flex items-center pt-0",t),...s})}).displayName="CardFooter"},33900:(e,a,t)=>{t.d(a,{p:()=>n});var r=t(95155),s=t(12115),l=t(21567);let n=s.forwardRef((e,a)=>{let{className:t,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex h-9 w-full rounded-md border-2 border-primary active:outline-none px-3 py-1 text-sm shadow-sm",t),ref:a,...n})});n.displayName="Input"},37528:(e,a,t)=>{t.d(a,{bq:()=>f,eb:()=>u,gC:()=>h,l6:()=>c,yv:()=>m});var r=t(95155),s=t(12115),l=t(33903),n=t(51719),d=t(91902),i=t(98867),o=t(21567);let c=l.bL;l.YJ;let m=l.WT,f=s.forwardRef((e,a)=>{let{className:t,children:s,...d}=e;return(0,r.jsxs)(l.l9,{ref:a,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border-2 border-primary bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300",t),...d,children:[s,(0,r.jsx)(l.In,{asChild:!0,children:(0,r.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=l.l9.displayName;let x=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(l.PP,{ref:a,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...s,children:(0,r.jsx)(d.A,{className:"h-4 w-4"})})});x.displayName=l.PP.displayName;let p=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(l.wn,{ref:a,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...s,children:(0,r.jsx)(n.A,{className:"h-4 w-4"})})});p.displayName=l.wn.displayName;let h=s.forwardRef((e,a)=>{let{className:t,children:s,position:n="popper",...d}=e;return(0,r.jsx)(l.ZL,{children:(0,r.jsxs)(l.UC,{ref:a,className:(0,o.cn)("relative z-999999 overflow-hidden max-h-52 overflow-y-auto rounded-md border border-primary bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...d,children:[(0,r.jsx)(x,{}),(0,r.jsx)(l.LM,{className:(0,o.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,r.jsx)(p,{})]})})});h.displayName=l.UC.displayName,s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(l.JU,{ref:a,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",t),...s})}).displayName=l.JU.displayName;let u=s.forwardRef((e,a)=>{let{className:t,children:s,...n}=e;return(0,r.jsxs)(l.q7,{ref:a,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",t),...n,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(l.VF,{children:(0,r.jsx)(i.A,{className:"h-4 w-4"})})}),(0,r.jsx)(l.p4,{children:s})]})});u.displayName=l.q7.displayName,s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)(l.wv,{ref:a,className:(0,o.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",t),...s})}).displayName=l.wv.displayName},72508:(e,a,t)=>{t.d(a,{A0:()=>d,BF:()=>i,Hj:()=>o,XI:()=>n,nA:()=>m,nd:()=>c});var r=t(95155),s=t(12115),l=t(21567);let n=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:a,className:(0,l.cn)("w-full caption-bottom text-sm",t),...s})})});n.displayName="Table";let d=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("thead",{ref:a,className:(0,l.cn)("[&_tr]:border-b",t),...s})});d.displayName="TableHeader";let i=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tbody",{ref:a,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...s})});i.displayName="TableBody",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tfoot",{ref:a,className:(0,l.cn)("border-t bg-zinc-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-zinc-800/50",t),...s})}).displayName="TableFooter";let o=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("tr",{ref:a,className:(0,l.cn)("border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",t),...s})});o.displayName="TableRow";let c=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("th",{ref:a,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-zinc-400",t),...s})});c.displayName="TableHead";let m=s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("td",{ref:a,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...s})});m.displayName="TableCell",s.forwardRef((e,a)=>{let{className:t,...s}=e;return(0,r.jsx)("caption",{ref:a,className:(0,l.cn)("mt-4 text-sm text-zinc-500 dark:text-zinc-400",t),...s})}).displayName="TableCaption"},93109:(e,a,t)=>{t.d(a,{It:()=>s,VY:()=>r}),new(t(11094)).PrismaClient;let r="http://localhost:3000/api",s="cm5gvuic20002wxkgn20vevnt"},21567:(e,a,t)=>{t.d(a,{cn:()=>l});var r=t(43463),s=t(69795);function l(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.QP)((0,r.$)(a))}},97348:(e,a,t)=>{t.d(a,{c:()=>r});let r=(0,t(21416).eU)({show:!1,type:"CREATE",data:null})}}]);