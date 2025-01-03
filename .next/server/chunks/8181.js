"use strict";exports.id=8181,exports.ids=[8181],exports.modules={70207:(e,a,t)=>{t.d(a,{d:()=>n});var s=t(45512),r=t(39400),d=t(93732),l=t(52706),i=t(99905);function n({table:e}){return(0,s.jsxs)("div",{className:"flex md:items-center justify-between px-2",children:[(0,s.jsxs)("div",{className:"flex-1 text-sm md:text-nowrap text-muted-foreground",children:[e.getFilteredSelectedRowModel().rows.length," of"," ",e.getFilteredRowModel().rows.length," row(s) selected."]}),(0,s.jsxs)("div",{className:"flex flex-col w-full gap-2 items-end md:flex-row md:justify-end md:items-center",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("p",{className:"text-sm font-medium",children:"Rows per page"}),(0,s.jsxs)(d.l6,{value:`${e.getState().pagination.pageSize}`,onValueChange:a=>{e.setPageSize(Number(a))},children:[(0,s.jsx)(d.bq,{className:"h-8 w-[70px]",children:(0,s.jsx)(d.yv,{placeholder:e.getState().pagination.pageSize})}),(0,s.jsx)(d.gC,{side:"top",children:[5,10,20,30,40].map(e=>(0,s.jsx)(d.eb,{value:`${e}`,children:e},e))})]})]}),(0,s.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",e.getState().pagination.pageIndex+1," of"," ",e.getPageCount()]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(r.$,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,s.jsx)(l.A,{className:"h-4 w-4"})]}),(0,s.jsxs)(r.$,{variant:"ghost",className:"h-8 w-8 p-0",onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,s.jsx)(i.A,{className:"h-4 w-4"})]})]})]})]})}},12459:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(45512),r=t(44269);let d=({children:e,title:a,desc:t,titleDelete:d,show:l,onHide:i})=>(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)("div",{className:"fixed inset-0 z-999999 bg-black/80 pointer-events-auto",onClick:i}),(0,s.jsxs)("div",{className:`${l?"pointer-events-auto block":"hidden pointer-events-none"} fixed left-[50%] top-[50%] z-999999 grid w-full translate-x-[-50%] translate-y-[-50%] gap-10 border border-zinc-200 bg-white p-6 shadow-lg duration-200 rounded-xl max-h-screen overflow-y-auto max-w-[425px]`,children:[(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight",children:a}),(0,s.jsx)("p",{className:"text-lg font-semibold leading-none tracking-tight text-center",children:d}),(0,s.jsx)("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:t})]}),(0,s.jsx)(r.A,{color:"red",onClick:i,className:"w-4 h-4 cursor-pointer absolute right-4 top-4 hover:scale-105 transition-all"}),e]})]})},39400:(e,a,t)=>{t.d(a,{$:()=>o});var s=t(45512),r=t(58009),d=t(12705),l=t(21643),i=t(44195);let n=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-primary text-zinc-50 shadow hover:bg-primary/90 dark:bg-primary dark:text-zinc-900 dark:hover:bg-primary/90",danger:"bg-danger text-zinc-50 shadow hover:bg-danger/90 dark:bg-danger dark:text-zinc-900 dark:hover:bg-danger/90",outline:"text-danger border border-danger shadow hover:bg-danger/90 hover:text-white dark:text-danger dark:hover:bg-danger/90 dar:hover:text-white",ghost:"bg-slate-300 hover:bg-slate-400"},size:{default:"h-9 px-6 py-2",sm:"h-8 rounded-full px-3 text-xs",lg:"h-10 rounded-full px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef(({className:e,variant:a,size:t,asChild:r=!1,...l},o)=>{let c=r?d.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(n({variant:a,size:t,className:e})),ref:o,...l})});o.displayName="Button"},64590:(e,a,t)=>{t.d(a,{Zp:()=>l});var s=t(45512),r=t(58009),d=t(44195);let l=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4 md:p-6",e),...a}));l.displayName="Card",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex flex-col space-y-1.5",e),...a})).displayName="CardHeader",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("font-semibold leading-none tracking-tight",e),...a})).displayName="CardTitle",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("text-sm text-zinc-500 dark:text-zinc-400",e),...a})).displayName="CardDescription",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("pt-0",e),...a})).displayName="CardContent",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{ref:t,className:(0,d.cn)("flex items-center pt-0",e),...a})).displayName="CardFooter"},77722:(e,a,t)=>{t.d(a,{p:()=>l});var s=t(45512),r=t(58009),d=t(44195);let l=r.forwardRef(({className:e,type:a,...t},r)=>(0,s.jsx)("input",{type:a,className:(0,d.cn)("flex h-9 w-full rounded-md border-2 border-primary active:outline-none px-3 py-1 text-sm shadow-sm",e),ref:r,...t}));l.displayName="Input"},93732:(e,a,t)=>{t.d(a,{bq:()=>x,eb:()=>g,gC:()=>h,l6:()=>c,yv:()=>m});var s=t(45512),r=t(58009),d=t(53698),l=t(98755),i=t(28638),n=t(24849),o=t(44195);let c=d.bL;d.YJ;let m=d.WT,x=r.forwardRef(({className:e,children:a,...t},r)=>(0,s.jsxs)(d.l9,{ref:r,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border-2 border-primary bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300",e),...t,children:[a,(0,s.jsx)(d.In,{asChild:!0,children:(0,s.jsx)(l.A,{className:"h-4 w-4 opacity-50"})})]}));x.displayName=d.l9.displayName;let f=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)(d.PP,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...a,children:(0,s.jsx)(i.A,{className:"h-4 w-4"})}));f.displayName=d.PP.displayName;let p=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)(d.wn,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...a,children:(0,s.jsx)(l.A,{className:"h-4 w-4"})}));p.displayName=d.wn.displayName;let h=r.forwardRef(({className:e,children:a,position:t="popper",...r},l)=>(0,s.jsx)(d.ZL,{children:(0,s.jsxs)(d.UC,{ref:l,className:(0,o.cn)("relative z-999999 overflow-hidden max-h-52 overflow-y-auto rounded-md border border-primary bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...r,children:[(0,s.jsx)(f,{}),(0,s.jsx)(d.LM,{className:(0,o.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(p,{})]})}));h.displayName=d.UC.displayName,r.forwardRef(({className:e,...a},t)=>(0,s.jsx)(d.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",e),...a})).displayName=d.JU.displayName;let g=r.forwardRef(({className:e,children:a,...t},r)=>(0,s.jsxs)(d.q7,{ref:r,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),...t,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.VF,{children:(0,s.jsx)(n.A,{className:"h-4 w-4"})})}),(0,s.jsx)(d.p4,{children:a})]}));g.displayName=d.q7.displayName,r.forwardRef(({className:e,...a},t)=>(0,s.jsx)(d.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",e),...a})).displayName=d.wv.displayName},47630:(e,a,t)=>{t.d(a,{A0:()=>i,BF:()=>n,Hj:()=>o,XI:()=>l,nA:()=>m,nd:()=>c});var s=t(45512),r=t(58009),d=t(44195);let l=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,d.cn)("w-full caption-bottom text-sm",e),...a})}));l.displayName="Table";let i=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("thead",{ref:t,className:(0,d.cn)("[&_tr]:border-b",e),...a}));i.displayName="TableHeader";let n=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("tbody",{ref:t,className:(0,d.cn)("[&_tr:last-child]:border-0",e),...a}));n.displayName="TableBody",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("tfoot",{ref:t,className:(0,d.cn)("border-t bg-zinc-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-zinc-800/50",e),...a})).displayName="TableFooter";let o=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("tr",{ref:t,className:(0,d.cn)("border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",e),...a}));o.displayName="TableRow";let c=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("th",{ref:t,className:(0,d.cn)("h-10 px-2 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-zinc-400",e),...a}));c.displayName="TableHead";let m=r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("td",{ref:t,className:(0,d.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...a}));m.displayName="TableCell",r.forwardRef(({className:e,...a},t)=>(0,s.jsx)("caption",{ref:t,className:(0,d.cn)("mt-4 text-sm text-zinc-500 dark:text-zinc-400",e),...a})).displayName="TableCaption"},44195:(e,a,t)=>{t.d(a,{cn:()=>d});var s=t(82281),r=t(94805);function d(...e){return(0,r.QP)((0,s.$)(e))}},10750:(e,a,t)=>{t.d(a,{c:()=>s});let s=(0,t(61208).eU)({show:!1,type:"CREATE",data:null})}};