import{u as h,i as f}from"./action-1cc9b3bd.js";import{t as b,c as g}from"./nameConvert-75d645d2.js";import{A as y,bi as C,k as x,bl as k,m as c,bj as w,aF as p,aG as V,as as s,x as z,a$ as m,o as A,aD as B,F as D}from"./history-91cfa0f9.js";import"./_commonjsHelpers-87174ba5.js";const R=y({__name:"VariableConversion",async setup(F){let o,i;const n=h(([o,i]=C(()=>f({input:""})),o=await o,i(),o)),d=x(()=>{const t=n.current.input.trim(),a=b.map(({value:e,label:l})=>({key:e,label:l,value:""}));return t===""?a:(n.save(),a.map(e=>(e.value=v(t,e.key),e)))}),v=(t,a)=>t.split(`
`).map(e=>(e=e.trim(),e===""?"":g(e,a))).join(`
`);return(t,a)=>{const e=p("Textarea"),l=p("HeightResize"),_=V("row");return k((s(),c(l,{ignore:"",reduce:5},{default:w(({height:u})=>[z(e,{height:u/2,modelValue:m(n).current.input,"onUpdate:modelValue":a[0]||(a[0]=r=>m(n).current.input=r),placeholder:t.$t("variableConversion_input_placeholder"),"float-text":t.$t("variableConversion_input")},null,8,["height","modelValue","placeholder","float-text"]),(s(!0),A(D,null,B(d.value,r=>(s(),c(e,{"model-value":r.value,copy:r.label,height:u/2,"float-type":"general",placeholder:r.label},null,8,["model-value","copy","height","placeholder"]))),256))]),_:1})),[[_,"1-1-1-1"]])}}});export{R as default};
