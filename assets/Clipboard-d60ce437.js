import{A as m,bq as u,bV as b,m as i,bj as p,aF as c,as as e,a$ as t,o as d,aT as o,n as s,by as k,w as f}from"./history-91cfa0f9.js";import"./_commonjsHelpers-87174ba5.js";const y={key:0},C={key:1},v=m({__name:"Clipboard",setup(g){u.dispatch("extend_page_close");const{state:a}=b();return(n,r)=>{const _=c("Link"),l=c("Align");return e(),i(l,{horizontal:"center",vertical:"center"},{default:p(()=>[t(a)==="granted"?(e(),d("span",y,o(n.$t("main_clipboard_granted")),1)):s("",!0),t(a)==="denied"?(e(),d("span",C,o(n.$t("main_clipboard_denied")),1)):s("",!0),t(a)==="prompt"?(e(),i(_,{key:2,type:"primary",onClick:r[0]||(r[0]=()=>t(k)(!0))},{default:p(()=>[f(o(n.$t("main_clipboard_prompt")),1)]),_:1})):s("",!0)]),_:1})}}});export{v as default};
