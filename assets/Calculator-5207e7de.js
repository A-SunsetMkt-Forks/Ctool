import{u as A,i as B}from"./action-1cc9b3bd.js";import{A as Q,c4 as m,bi as E,k as W,be as I,m as j,bj as v,aF as V,as as S,x as o,a$ as u,p as C,w as T,aT as N}from"./history-91cfa0f9.js";import{c as U}from"./_commonjsHelpers-87174ba5.js";var g={},F={get exports(){return g},set exports(c){g=c}};(function(c,Y){(function(d,l){c.exports=l()})(U,function(){var d="month",l="quarter";return function(e,y){var p=y.prototype;p.quarter=function(r){return this.$utils().u(r)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(r-1))};var h=p.add;p.add=function(r,t){return r=Number(r),this.$utils().p(t)===l?this.add(3*r,d):h.bind(this)(r,t)};var $=p.startOf;p.startOf=function(r,t){var n=this.$utils(),i=!!n.u(t)||t;if(n.p(r)===l){var s=this.quarter()-1;return i?this.month(3*s).startOf(d).startOf("day"):this.month(3*s+2).endOf(d).endOf("day")}return $.bind(this)(r,t)}}})})(F);const G=g;var q={},R={get exports(){return q},set exports(c){q=c}};(function(c,Y){(function(d,l){c.exports=l()})(U,function(){return function(d,l,e){l.prototype.dayOfYear=function(y){var p=Math.round((e(this).startOf("day")-e(this).startOf("year"))/864e5)+1;return y==null?p:this.add(y-p,"day")}}})})(R);const J=q;var H={},K={get exports(){return H},set exports(c){H=c}};(function(c,Y){(function(d,l){c.exports=l()})(U,function(){var d="day";return function(l,e,y){var p=function(r){return r.add(4-r.isoWeekday(),d)},h=e.prototype;h.isoWeekYear=function(){return p(this).year()},h.isoWeek=function(r){if(!this.$utils().u(r))return this.add(7*(r-this.isoWeek()),d);var t,n,i,s,O=p(this),x=(t=this.isoWeekYear(),n=this.$u,i=(n?y.utc:y)().year(t).startOf("year"),s=4-i.isoWeekday(),i.isoWeekday()>4&&(s+=7),i.add(s,d));return O.diff(x,"week")+1},h.isoWeekday=function(r){return this.$utils().u(r)?this.day()||7:this.day(this.day()%7?r:r-7)};var $=h.startOf;h.startOf=function(r,t){var n=this.$utils(),i=!!n.u(t)||t;return n.p(r)==="isoweek"?i?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):$.bind(this)(r,t)}}})})(K);const L=H,P=C("span",null,"与",-1),X=C("span",null,"相差",-1),nt=Q({__name:"Calculator",async setup(c){let Y,d;m.extend(G),m.extend(J),m.extend(L);const l=m(),e=A(([Y,d]=E(()=>B({poor:{input1:l.format("YYYY-MM-DD HH:mm:ss"),input2:l.add(1,"d").format("YYYY-MM-DD HH:mm:ss"),unit:"seconds"},operation:{input:l.format("YYYY-MM-DD HH:mm:ss"),unit:"days",type:"+",length:1},analyze:{type:"year",input:l.format("YYYY-MM-DD HH:mm:ss")}})),Y=await Y,d(),Y)),y=[{value:"years",label:$t("time_year"),rate:0},{value:"months",label:$t("time_month"),rate:0},{value:"weeks",label:$t("time_week"),rate:1e3*60*60*24*7},{value:"days",label:$t("time_day"),rate:1e3*60*60*24},{value:"hours",label:$t("time_hour"),rate:1e3*60*60},{value:"minutes",label:$t("time_minute"),rate:1e3*60},{value:"seconds",label:$t("time_second"),rate:1e3}],p=t=>{for(let n of y)if(n.value===t)return n.rate;return 0},h=W(()=>m(e.current.poor.input2).diff(m(e.current.poor.input1),e.current.poor.unit)),$=W(()=>{if(!e.current.operation.length)return"";let t=p(e.current.operation.unit);if(t===0){const n=e.current.operation.type==="+"?"add":"subtract";return m(e.current.operation.input)[n](e.current.operation.length,e.current.operation.unit).format("YYYY-MM-DD HH:mm:ss")}return m(m(e.current.operation.input).unix()*1e3+t*e.current.operation.length*(e.current.operation.type==="+"?1:-1)).format("YYYY-MM-DD HH:mm:ss")}),r=W(()=>{let t=m(e.current.analyze.input);const n=t.year(),i=t.quarter();if(e.current.analyze.type==="quarter"){const f=m(`${t.year()}-${(i-1)*3+1}-01`),_=Math.ceil((t.unix()-f.unix())/(86400*7)),b=Math.ceil((t.unix()-f.unix())/86400),w=Math.ceil((t.unix()-f.unix())/3600),z=Math.ceil((t.unix()-f.unix())/60),D=t.unix()-f.unix();return $t("time_analyze_quarter_output",{quarter:i,weekOfQuarter:_,dayOfQuarter:b,hourOfQuarter:w,minuteOfQuarter:z,secondOfQuarter:D})}if(e.current.analyze.type==="month"){const f=t.month()+1,_=m(`${t.year()}-${f}-01`),b=Math.ceil((t.unix()-_.unix())/(86400*7)),w=Math.ceil((t.unix()-_.unix())/3600),z=Math.ceil((t.unix()-_.unix())/60),D=t.unix()-_.unix();return $t("time_analyze_month_output",{month:f,weekOfMonth:b,hourOfMonth:w,minuteOfMonth:z,secondOfMonth:D})}const s=m(t.year()+"-01-01"),O=t.isoWeek(),x=t.dayOfYear(),M=Math.ceil((t.unix()-s.unix())/3600),k=Math.ceil((t.unix()-s.unix())/60),a=t.unix()-s.unix();return $t("time_analyze_year_output",{year:n,quarter:i,weekOfYear:O,dayOfYear:x,hourOfYear:M,minuteOfYear:k,secondOfYear:a})});return I(()=>e.current,()=>{e.save()},{immediate:!0,deep:!0}),(t,n)=>{const i=V("Input"),s=V("Select"),O=V("InputNumber"),x=V("Align"),M=V("Card"),k=V("Button");return S(),j(x,{direction:"vertical"},{default:v(()=>[o(M,{title:t.$t("time_diff_tool")},{default:v(()=>[o(x,null,{default:v(()=>[o(i,{center:"",modelValue:u(e).current.poor.input1,"onUpdate:modelValue":n[0]||(n[0]=a=>u(e).current.poor.input1=a),width:170},null,8,["modelValue"]),P,o(i,{center:"",modelValue:u(e).current.poor.input2,"onUpdate:modelValue":n[1]||(n[1]=a=>u(e).current.poor.input2=a),width:170},null,8,["modelValue"]),X,o(O,{center:"","model-value":h.value,width:160},{append:v(()=>[o(s,{modelValue:u(e).current.poor.unit,"onUpdate:modelValue":n[2]||(n[2]=a=>u(e).current.poor.unit=a),options:y.map(({value:a,label:f})=>({value:a,label:f}))},null,8,["modelValue","options"])]),_:1},8,["model-value"])]),_:1})]),_:1},8,["title"]),o(M,{title:t.$t("time_operation")},{default:v(()=>[o(x,null,{default:v(()=>[o(i,{center:"",modelValue:u(e).current.operation.input,"onUpdate:modelValue":n[3]||(n[3]=a=>u(e).current.operation.input=a),width:170},null,8,["modelValue"]),o(s,{modelValue:u(e).current.operation.type,"onUpdate:modelValue":n[4]||(n[4]=a=>u(e).current.operation.type=a),options:[{value:"+",label:t.$t("time_add")},{value:"-",label:t.$t("time_reduce")}]},null,8,["modelValue","options"]),o(O,{center:"",modelValue:u(e).current.operation.length,"onUpdate:modelValue":n[6]||(n[6]=a=>u(e).current.operation.length=a),width:160},{append:v(()=>[o(s,{modelValue:u(e).current.operation.unit,"onUpdate:modelValue":n[5]||(n[5]=a=>u(e).current.operation.unit=a),options:y.map(({value:a,label:f})=>({value:a,label:f}))},null,8,["modelValue","options"])]),_:1},8,["modelValue"]),C("span",null,[T(N(t.$t("time_after"))+", "+N(t.$t("time_is"))+" ",1),o(k,{onClick:n[7]||(n[7]=a=>t.$copy($.value)),type:"dotted",text:$.value},null,8,["text"])])]),_:1})]),_:1},8,["title"]),o(M,{title:t.$t("time_analyze")},{default:v(()=>[o(x,null,{default:v(()=>[o(i,{center:"",modelValue:u(e).current.analyze.input,"onUpdate:modelValue":n[8]||(n[8]=a=>u(e).current.analyze.input=a),width:170},null,8,["modelValue"]),o(s,{modelValue:u(e).current.analyze.type,"onUpdate:modelValue":n[9]||(n[9]=a=>u(e).current.analyze.type=a),options:[{value:"year",label:t.$t("time_analyze_year")},{value:"quarter",label:t.$t("time_analyze_quarter")},{value:"month",label:t.$t("time_analyze_month")}]},null,8,["modelValue","options"]),o(k,{onClick:n[10]||(n[10]=a=>t.$copy(r.value)),type:"dotted",text:r.value},null,8,["text"])]),_:1})]),_:1},8,["title"])]),_:1})}}});export{nt as default};
