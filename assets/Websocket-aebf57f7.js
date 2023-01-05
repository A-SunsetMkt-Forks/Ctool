import{u as H,i as I}from"./action-1cc9b3bd.js";import{A as S,bi as D,aA as F,m as d,bj as n,aF as i,aG as N,as as s,x as c,p as _,ae as W,a$ as $,bl as j,o as k,aD as R,ac as U,F as b,w as g,aT as w,c4 as q,ab as G}from"./history-91cfa0f9.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-87174ba5.js";const L={class:"ctool-websocket-logs-item"},O={class:"ctool-websocket-logs-top"},K={class:"ctool-websocket-logs-time"},M={class:"ctool-websocket-logs-content"},P=S({__name:"Websocket",async setup(Q){let m,y;const u=H(([m,y]=D(()=>I({url:"wss://echo.websocket.events"},e=>/^ws/.test(e))),m=await m,y(),m)),o=F({status:!1,ws:null,send_content:"",logs:[]}),r=async(e,t="other")=>{o.value.logs.push({content:e,type:t,time:q().format("HH:mm:ss")}),await G();const l=document.querySelector(".ctool-websocket-logs .ctool-card-body");l&&(l.scrollTop=l.scrollHeight)},f=()=>{if(!u.current.url.trim())return;u.save(),r($t("websocket_connect_start",[u.current.url]));let e=new WebSocket(u.current.url);e.onopen=()=>{o.value.status=!0,r($t("websocket_connect_ok"))},e.onclose=()=>{o.value.status=!1,r($t("websocket_close_ok"))},e.onmessage=t=>{r(t.data,"accept")},e.onerror=t=>{r($t("websocket_error",[t]))},o.value.ws=e},h=()=>{var e;o.value.status&&(r($t("websocket_close_start",[u.current.url])),(e=o.value.ws)==null||e.close())},C=()=>{var e;if(!o.value.status)throw new Error($t("websocket_error_connect"));if(o.value.send_content==="")throw new Error($t("websocket_error_content"));try{(e=o.value.ws)==null||e.send(o.value.send_content),r(o.value.send_content,"send")}catch(t){r($error(t))}};return(e,t)=>{const l=i("Align"),v=i("Button"),x=i("Input"),z=i("Textarea"),V=i("Exception"),T=i("Icon"),A=i("Card"),B=i("HeightResize"),E=N("row");return s(),d(l,{direction:"vertical"},{default:n(()=>[c(x,{modelValue:$(u).current.url,"onUpdate:modelValue":t[2]||(t[2]=p=>$(u).current.url=p),class:"ctool-page-option"},{prepend:n(()=>[c(l,{horizontal:"center",vertical:"center",width:20},{default:n(()=>[_("div",{style:W([{backgroundColor:o.value.status?"#19be6b":"#ed4014"},{"border-radius":"50%",height:"7px",width:"7px",display:"inline-block"}])},null,4)]),_:1})]),append:n(()=>[o.value.status?(s(),d(v,{key:1,onClick:t[1]||(t[1]=p=>h()),text:e.$t("websocket_close")},null,8,["text"])):(s(),d(v,{key:0,onClick:t[0]||(t[0]=p=>f()),text:e.$t("websocket_connect")},null,8,["text"]))]),_:1},8,["modelValue"]),j((s(),d(B,{ignore:"",reduce:5,append:[".ctool-page-option"]},{default:n(({height:p})=>[c(z,{height:p,modelValue:o.value.send_content,"onUpdate:modelValue":t[3]||(t[3]=a=>o.value.send_content=a),"float-text":e.$t("websocket_send"),"float-position":"top-right",onClickFloatText:C,placeholder:`${e.$t("main_ui_input")}${e.$t("websocket_send_content")}`},null,8,["height","modelValue","float-text","placeholder"]),c(A,{title:e.$t("websocket_log_content"),height:p,class:"ctool-websocket-logs"},{extra:n(()=>[c(l,null,{default:n(()=>[c(v,{size:"small",type:"primary",text:e.$t("main_ui_copy"),onClick:t[4]||(t[4]=()=>e.$copy(JSON.stringify(o.value.logs)))},null,8,["text"]),c(v,{size:"small",type:"danger",text:e.$t("main_ui_clear"),onClick:t[5]||(t[5]=a=>o.value.logs=[])},null,8,["text"])]),_:1})]),default:n(()=>[o.value.logs.length<1?(s(),d(l,{key:0,horizontal:"center",vertical:"center"},{default:n(()=>[c(V)]),_:1})):(s(),d(l,{key:1,direction:"vertical"},{default:n(()=>[(s(!0),k(b,null,R(o.value.logs,a=>(s(),k("div",L,[_("div",O,[_("div",{class:U(["ctool-websocket-logs-type",`ctool-websocket-logs-type-${a.type}`])},[a.type==="send"?(s(),k(b,{key:0},[g(w(e.$t("websocket_client"))+"：",1)],64)):a.type==="accept"?(s(),k(b,{key:1},[g(w(e.$t("websocket_server"))+"：",1)],64)):(s(),k(b,{key:2},[g(w(e.$t("websocket_tips"))+"：",1)],64))],2),_("div",K,w(a.time),1),c(T,{size:12,name:"copy",tooltip:e.$t("main_ui_copy"),hover:"",onClick:X=>e.$copy(a.content)},null,8,["tooltip","onClick"])]),_("pre",M,[_("code",null,w(a.content),1)])]))),256))]),_:1}))]),_:2},1032,["title","height"])]),_:1},8,["append"])),[[E,"40-60"]])]),_:1})}}});const oe=J(P,[["__scopeId","data-v-dcc2e74a"]]);export{oe as default};
