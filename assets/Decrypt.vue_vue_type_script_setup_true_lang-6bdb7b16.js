import{u as w,i as E}from"./action-1ad25393.js";import{c as A,a as I,T as d}from"./index-fb174fea.js";import{m as $,p as H,d as S,t as z}from"./cryptoJS-ac2d89ab.js";import{A as O,bi as h,k as j,be as D,m as L,bj as r,aF as p,as as R,x as l,a$ as t}from"./history-00340aff.js";const G=O({__name:"Decrypt",props:{type:{type:String,default:"des"}},async setup(y){let i,s;const _=y,f={iv:"",type:"advanced",key:"",fill:!0,mode:"CBC",padding:"Pkcs7"},e=w(([i,s]=h(()=>E({input:A("base64"),option:f,output:I("text")})),i=await i,s(),i)),m=j(()=>{if(e.current.input.text.isEmpty()||e.current.option.key===""||e.current.option.type==="advanced"&&e.current.option.mode!=="ECB"&&e.current.option.iv==="")return d.empty();if(e.current.input.text.isError())return e.current.input.text;try{return d.fromBase64((_.type==="des"?S:z).decrypt(e.current.input.text.toBase64(),e.current.option))}catch(u){return d.fromError($error(u))}});return D(()=>m.value,u=>{u.isEmpty()||e.save()},{immediate:!0,deep:!0}),(u,o)=>{const b=p("TextInput"),c=p("Select"),a=p("Input"),g=p("Bool"),x=p("Tooltip"),V=p("Align"),v=p("HelpTip"),T=p("Tabs"),k=p("TextOutput"),B=p("HeightResize");return R(),L(B,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:r(({small:C,large:U})=>[l(V,{direction:"vertical"},{default:r(()=>[l(b,{modelValue:t(e).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).current.input=n),allow:["base64","hex"],height:C},null,8,["modelValue","height"]),l(T,{modelValue:t(e).current.option.type,"onUpdate:modelValue":o[7]||(o[7]=n=>t(e).current.option.type=n),class:"ctool-page-option",lists:[{name:"advanced",label:u.$t("main_ui_advanced")},{name:"simple",label:u.$t("main_ui_simple")}]},{extra:r(()=>[l(v,{link:"https://github.com/brix/crypto-js"})]),default:r(()=>[l(V,null,{default:r(()=>[l(c,{modelValue:t(e).current.option.mode,"onUpdate:modelValue":o[1]||(o[1]=n=>t(e).current.option.mode=n),options:t($)},null,8,["modelValue","options"]),l(c,{modelValue:t(e).current.option.padding,"onUpdate:modelValue":o[2]||(o[2]=n=>t(e).current.option.padding=n),options:t(H)},null,8,["modelValue","options"]),l(a,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[3]||(o[3]=n=>t(e).current.option.key=n),width:200,label:"key"},null,8,["modelValue"]),l(a,{modelValue:t(e).current.option.iv,"onUpdate:modelValue":o[5]||(o[5]=n=>t(e).current.option.iv=n),width:220,label:"iv",disabled:t(e).current.option.mode==="ECB"},{append:r(()=>[l(x,{content:u.$t("aes_iv_auto_fill")},{default:r(()=>[l(g,{modelValue:t(e).current.option.fill,"onUpdate:modelValue":o[4]||(o[4]=n=>t(e).current.option.fill=n),disabled:t(e).current.option.mode==="ECB"},null,8,["modelValue","disabled"])]),_:1},8,["content"])]),_:1},8,["modelValue","disabled"])]),_:1}),l(a,{modelValue:t(e).current.option.key,"onUpdate:modelValue":o[6]||(o[6]=n=>t(e).current.option.key=n),label:"key"},null,8,["modelValue"])]),_:1},8,["modelValue","lists"]),l(k,{modelValue:t(e).current.output,"onUpdate:modelValue":o[8]||(o[8]=n=>t(e).current.output=n),allow:["text"],content:m.value,height:U,encoding:""},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{G as _};
