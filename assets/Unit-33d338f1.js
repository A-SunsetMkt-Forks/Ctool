import{u as I,i as S}from"./action-1cc9b3bd.js";import{A as D,bi as J,k as N,aA as T,be as A,o as $,x as o,bj as p,F as q,aF as m,as as d,a$ as u,aD as G,p as r,aT as g,m as O}from"./history-91cfa0f9.js";import"./_commonjsHelpers-87174ba5.js";const w=14,b=7,V=4,R=[{key:"length",main:"m",unit:[{key:"km",unit:"km",calc:i=>i/1e3,init:i=>i*1e3},{key:"m",unit:"m",calc:i=>i,init:i=>i},{key:"dm",unit:"dm",calc:i=>i/.1,init:i=>i*.1},{key:"cm",unit:"cm",calc:i=>i/.01,init:i=>i*.01},{key:"mm",unit:"mm",calc:i=>i/.001,init:i=>i*.001},{key:"um",unit:"um",calc:i=>i/1e-6,init:i=>i*1e-6},{key:"nm",unit:"nm",calc:i=>i/1e-9,init:i=>i*1e-9},{key:"pm",unit:"pm",calc:i=>i/1e-12,init:i=>i*1e-12},{key:"ly",unit:"ly",calc:i=>i/9460730472580800,init:i=>i*9460730472580800},{key:"au",unit:"AU",calc:i=>i/149597870700,init:i=>i*1496e8},{key:"in",unit:"in",calc:i=>i/(.3048/12),init:i=>i*(.3048/12)},{key:"ft",unit:"ft",calc:i=>i/.3048,init:i=>i*.3048},{key:"yd",unit:"yd",calc:i=>i/(.3048*3),init:i=>i*(.3048*3)},{key:"mi",unit:"mi",calc:i=>i/(.3048*3*1760),init:i=>i*(.3048*3*1760)},{key:"nmi",unit:"nmi",calc:i=>i/1852,init:i=>i*1852},{key:"fm",unit:"fm",calc:i=>i/1.8288,init:i=>i*1.8288},{key:"fur",unit:"fur",calc:i=>i/201.168,init:i=>i*201.168},{key:"cn_li",unit:"li",calc:i=>i/500,init:i=>i*500},{key:"cn_zhang",unit:"zhang",calc:i=>i/(10/3),init:i=>i*(10/3)},{key:"cn_chi",unit:"chi",calc:i=>i/(1/3),init:i=>i*(1/3)},{key:"cn_cun",unit:"cun",calc:i=>i/(.1/3),init:i=>i*(.1/3)},{key:"cn_fen",unit:"fen",calc:i=>i/(.01/3),init:i=>i*(.01/3)},{key:"cn_li2",unit:"li",calc:i=>i/(.001/3),init:i=>i*(.001/3)},{key:"cn_hao",unit:"hao",calc:i=>i/(1e-4/3),init:i=>i*(1e-4/3)}],special:[],group:[{key:"metric_system",list:["km","m","dm","cm","mm","um","nm","pm","ly","au"]},{key:"imperial_units",list:["in","ft","yd","mi","nmi","fm","fur"]},{key:"chinese_units",list:["cn_li","cn_zhang","cn_chi","cn_cun","cn_fen","cn_li2","cn_hao"]}]},{key:"area",main:"m_2",unit:[{key:"km_2",unit:"km²",calc:i=>i/1e6,init:i=>i*1e6},{key:"ha",unit:"ha",calc:i=>i/1e4,init:i=>i*1e4},{key:"are",unit:"are",calc:i=>i/100,init:i=>i*100},{key:"m_2",unit:"m²",calc:i=>i,init:i=>i},{key:"dm_2",unit:"dm²",calc:i=>i/.01,init:i=>i*.01},{key:"cm_2",unit:"cm²",calc:i=>i/1e-4,init:i=>i*1e-4},{key:"mm_2",unit:"mm²",calc:i=>i/1e-6,init:i=>i*1e-6},{key:"acre",unit:"acre",calc:i=>i/(Math.pow(.3048,2)*Math.pow(16.5,2)*160),init:i=>i*(Math.pow(.3048,2)*Math.pow(16.5,2)*160)},{key:"mi_2",unit:"mi²",calc:i=>i/Math.pow(.3048*3*1760,2),init:i=>i*Math.pow(.3048*3*1760,2)},{key:"yd_2",unit:"yd²",calc:i=>i/(Math.pow(.3048,2)*9),init:i=>i*(Math.pow(.3048,2)*9)},{key:"ft_2",unit:"ft²",calc:i=>i/Math.pow(.3048,2),init:i=>i*Math.pow(.3048,2)},{key:"in_2",unit:"in²",calc:i=>i/(Math.pow(.3048,2)/144),init:i=>i*(Math.pow(.3048,2)/144)},{key:"rd_2",unit:"rd²",calc:i=>i/(Math.pow(.3048,2)*Math.pow(16.5,2)),init:i=>i*(Math.pow(.3048,2)*Math.pow(16.5,2))},{key:"cn_qing",unit:"qing",calc:i=>i/(100/.0015),init:i=>i*(100/.0015)},{key:"cn_mu",unit:"mu",calc:i=>i/(1/.0015),init:i=>i*(1/.0015)},{key:"cn_fen",unit:"fen",calc:i=>i/(1/.015),init:i=>i*(1/.015)},{key:"cn_chi_2",unit:"chi²",calc:i=>i/(1/9),init:i=>i*(1/9)},{key:"cn_cun_2",unit:"cun²",calc:i=>i/(.01/9),init:i=>i*(.01/9)}],special:[],group:[{key:"metric_system",list:["km_2","ha","are","m_2","dm_2","cm_2","mm_2"]},{key:"imperial_units",list:["acre","mi_2","yd_2","ft_2","in_2","rd_2"]},{key:"chinese_units",list:["cn_qing","cn_mu","cn_fen","cn_chi_2","cn_cun_2"]}]},{key:"volume",main:"m_3",unit:[{key:"m_3",unit:"m³",calc:i=>i,init:i=>i},{key:"dm_3",unit:"dm³",calc:i=>i/.001,init:i=>i*.001},{key:"cm_3",unit:"cm³",calc:i=>i/1e-6,init:i=>i*1e-6},{key:"mm_3",unit:"mm³",calc:i=>i/1e-9,init:i=>i*1e-9},{key:"l",unit:"l",calc:i=>i/.001,init:i=>i*.001},{key:"dl",unit:"dl",calc:i=>i/1e-4,init:i=>i*1e-4},{key:"ml",unit:"ml",calc:i=>i/1e-6,init:i=>i*1e-6},{key:"cl",unit:"cl",calc:i=>i/1e-5,init:i=>i*1e-5},{key:"uL",unit:"μL",calc:i=>i/1e-9,init:i=>i*1e-9},{key:"hl",unit:"hl",calc:i=>i/.1,init:i=>i*.1},{key:"ft_3",unit:"ft_3",calc:i=>i/.0283168,init:i=>i*.0283168},{key:"in_3",unit:"in_3",calc:i=>i/(.0283168/1728),init:i=>i*(.0283168/1728)},{key:"yd_3",unit:"yd_3",calc:i=>i/(.0283168*27),init:i=>i*(.0283168*27)},{key:"acre_ft",unit:"acre ft",calc:i=>i/(43560*1728*.016387064/1e3),init:i=>i*(43560*1728*.016387064/1e3)},{key:"uk_gal",unit:"uk gal",calc:i=>i/.00454609188,init:i=>i*.00454609188},{key:"us_gal",unit:"us gal",calc:i=>i/(231*.016387064/1e3),init:i=>i*(231*.016387064/1e3)},{key:"uk_oz",unit:"uk oz",calc:i=>i/(1e-6*28.41),init:i=>i*1e-6*28.41},{key:"us_oz",unit:"us oz",calc:i=>i/(1e-6*29.57),init:i=>i*1e-6*29.57}],special:[],group:[{key:"metric_system",list:["m_3","dm_3","cm_3","mm_3","l","dl","ml","cl","uL","hl"]},{key:"imperial_units",list:["ft_3","in_3","yd_3","acre_ft","uk_gal","us_gal","uk_oz","us_oz"]}]},{key:"weight",main:"kg",unit:[{key:"kg",unit:"kg",calc:i=>i,init:i=>i},{key:"g",unit:"g",calc:i=>i/.001,init:i=>i*.001},{key:"mg",unit:"mg",calc:i=>i/1e-6,init:i=>i*1e-6},{key:"ug",unit:"μg",calc:i=>i/1e-9,init:i=>i*1e-9},{key:"t",unit:"t",calc:i=>i/1e3,init:i=>i*1e3},{key:"q",unit:"q",calc:i=>i/100,init:i=>i*100},{key:"ct",unit:"ct",calc:i=>i/2e-4,init:i=>i*2e-4},{key:"lb",unit:"lb",calc:i=>i/.45359237,init:i=>i*.45359237},{key:"oz",unit:"oz",calc:i=>i/(.45359237/16),init:i=>i*(.45359237/16)},{key:"gr",unit:"gr",calc:i=>i/(.45359237/7e3),init:i=>i*(.45359237/7e3)},{key:"lt",unit:"lt",calc:i=>i/(.45359237*2240),init:i=>i*(.45359237*2240)},{key:"st1",unit:"st",calc:i=>i/(.45359237*2e3),init:i=>i*(.45359237*2e3)},{key:"uk_cwt",unit:"uk cwt",calc:i=>i/(.45359237*112),init:i=>i*(.45359237*112)},{key:"us_cwt",unit:"us cwt",calc:i=>i/(.45359237*100),init:i=>i*(.45359237*100)},{key:"st2",unit:"st",calc:i=>i/(.45359237*14),init:i=>i*(.45359237*14)},{key:"dr",unit:"dr",calc:i=>i/(.45359237/256),init:i=>i*(.45359237/256)},{key:"cn_dan",unit:"dan",calc:i=>i/50,init:i=>i*50},{key:"cn_jin",unit:"jin",calc:i=>i/.5,init:i=>i*.5},{key:"cn_liang",unit:"liang",calc:i=>i/.05,init:i=>i*.05},{key:"cn_qian",unit:"qian",calc:i=>i/.005,init:i=>i*.005}],special:[],group:[{key:"metric_system",list:["kg","g","mg","ug","t","q","ct"]},{key:"imperial_units",list:["lb","oz","gr","lt","st1","uk_cwt","us_cwt","st2","dr"]},{key:"chinese_units",list:["cn_dan","cn_jin","cn_liang","cn_qian"]}]},{key:"temperature",main:"k",unit:[{key:"c",unit:"°C",calc:i=>i-273.15,init:i=>i+273.15},{key:"f",unit:"°F",calc:i=>32+(i-273.15)*9/5,init:i=>5*(i-32)/9+273.15},{key:"k",unit:"K",calc:i=>i-273.15+273.15,init:i=>i-273.15+273.15},{key:"r",unit:"°R",calc:i=>(i-273.15+273.15)*1.8,init:i=>i/1.8-273.15+273.15},{key:"re",unit:"°Re",calc:i=>(i-273.15)/1.25,init:i=>i*1.25+273.15}],special:[],group:[{key:"",list:["c","f","k","r","re"]}]},{key:"pressure",main:"pa",unit:[{key:"pa",unit:"Pa",calc:i=>i,init:i=>i},{key:"kpa",unit:"kpa",calc:i=>i/1e3,init:i=>i*1e3},{key:"hpa",unit:"hpa",calc:i=>i/100,init:i=>i*100},{key:"atm",unit:"atm",calc:i=>i/101325,init:i=>i*101325},{key:"mmhg",unit:"mmHg",calc:i=>i/(101325/760),init:i=>i*(101325/760)},{key:"in_hg",unit:"in Hg",calc:i=>i/(101325/760*25.4),init:i=>i*(101325/760*25.4)},{key:"bar",unit:"bar",calc:i=>i/1e5,init:i=>i*1e5},{key:"mbar",unit:"mbar",calc:i=>i/100,init:i=>i*100},{key:"psf",unit:"psf",calc:i=>i/(6894.757/144),init:i=>i*(6894.757/144)},{key:"psi",unit:"psi",calc:i=>i/6894.757,init:i=>i*6894.757},{key:"mmwg",unit:"mmWG",calc:i=>i/(1/.101972),init:i=>i*(1/.101972)},{key:"kgf_cm_2",unit:"kgf/cm²",calc:i=>i/98066.5,init:i=>i*98066.5},{key:"kgf_m_2",unit:"kgf/m²",calc:i=>i/9.80665,init:i=>i*9.80665},{key:"mpa",unit:"MPa",calc:i=>i/1e6,init:i=>i*1e6}],special:[],group:[{key:"",list:["pa","kpa","hpa","atm","mmhg","in_hg","bar","mbar","psf","psi","mmwg","kgf_cm_2","kgf_m_2","mpa"]}]},{key:"power",main:"w",unit:[{key:"w",unit:"W",calc:i=>i,init:i=>i},{key:"kw",unit:"kW",calc:i=>i/1e3,init:i=>i*1e3},{key:"hp",unit:"hp",calc:i=>i/745.699872,init:i=>i*745.699872},{key:"ps",unit:"ps",calc:i=>i/(9.80665*75),init:i=>i*(9.80665*75)},{key:"kg_m_s",unit:"kg·m/s",calc:i=>i/9.80665,init:i=>i*9.80665},{key:"kcal_s",unit:"kcal/s",calc:i=>i/4184.1004,init:i=>i*4184.1004},{key:"btu_s",unit:"Btu/s",calc:i=>i/1055.05585,init:i=>i*1055.05585},{key:"ft_lb_s",unit:"ft·lb/s",calc:i=>i/(745.699872/550),init:i=>i*(745.699872/550)},{key:"j_s",unit:"J/s",calc:i=>i,init:i=>i},{key:"n_m_s",unit:"N·m/s",calc:i=>i,init:i=>i}],special:[],group:[{key:"",list:["w","kw","hp","ps","kg_m_s","kcal_s","btu_s","ft_lb_s","j_s","n_m_s"]}]},{key:"work",main:"j",unit:[{key:"j",unit:"J",calc:i=>i,init:i=>i},{key:"kg_m",unit:"kg·m",calc:i=>i/9.80392157,init:i=>i*9.80392157},{key:"ps_h",unit:"ps·h",calc:i=>i/(9.80665*75*3600),init:i=>i*(9.80665*75*3600)},{key:"hp_h",unit:"hp·h",calc:i=>i/(745.699872*3600),init:i=>i*(745.699872*3600)},{key:"kw_h",unit:"kW·h",calc:i=>i/36e5,init:i=>i*36e5},{key:"kw_h_",unit:"kW·h",calc:i=>i/36e5,init:i=>i*36e5},{key:"cal",unit:"cal",calc:i=>i/4.185851820846,init:i=>i*4.185851820846},{key:"kcal",unit:"kcal",calc:i=>i/4185.851820846,init:i=>i*4185.851820846},{key:"btu",unit:"btu",calc:i=>i/1055.05585262,init:i=>i*1055.05585262},{key:"ft_lb",unit:"ft·lb",calc:i=>i/1.3557483731,init:i=>i*1.3557483731},{key:"kj",unit:"kJ",calc:i=>i/1e3,init:i=>i*1e3}],special:[],group:[{key:"",list:["j","kg_m","ps_h","hp_h","kw_h","kw_h_","cal","kcal","btu","ft_lb","kj"]}]},{key:"density",main:"kg_m_3",unit:[{key:"kg_cm_3",unit:"kg/cm³",calc:i=>i/Math.pow(10,6),init:i=>i*1e6},{key:"kg_dm_3",unit:"kg/dm³",calc:i=>i/1e3,init:i=>i*1e3},{key:"kg_m_3",unit:"kg/m³",calc:i=>i,init:i=>i},{key:"g_cm_3",unit:"g/cm³",calc:i=>i/1e3,init:i=>i*1e3},{key:"g_dm_3",unit:"g/dm³",calc:i=>i,init:i=>i},{key:"g_m_3",unit:"g/m³",calc:i=>i*1e3,init:i=>i/1e3}],special:[],group:[{key:"",list:["kg_cm_3","kg_dm_3","kg_m_3","g_cm_3","g_dm_3","g_m_3"]}]},{key:"strength",main:"n",unit:[{key:"n",unit:"N",calc:i=>i,init:i=>i},{key:"kn",unit:"kN",calc:i=>i/1e3,init:i=>i*1e3},{key:"kgf",unit:"kgf",calc:i=>i*101.971621/1e3,init:i=>i*9.80665},{key:"gf",unit:"gf",calc:i=>i*101.971621,init:i=>i*9.80665/1e3},{key:"tf",unit:"tf",calc:i=>i*101.971621/Math.pow(10,6),init:i=>i*9806.65},{key:"lbf",unit:"lbf",calc:i=>i*224.808943/1e3,init:i=>i*4.448222},{key:"kip",unit:"kip",calc:i=>i*224.808943/Math.pow(10,6),init:i=>i*4448.221615},{key:"dyn",unit:"dyn",calc:i=>i*1e5,init:i=>i/1e5}],special:[],group:[{key:"",list:["n","kn","kgf","gf","tf","lbf","kip","dyn"]}]},{key:"time",main:"s",unit:[{key:"yr",unit:"yr",calc:i=>i*31.709792/Math.pow(10,9),init:i=>i*31536e3},{key:"week",unit:"week",calc:i=>i*1.653439/Math.pow(10,6),init:i=>i*604800},{key:"d",unit:"d",calc:i=>i*11.574074/Math.pow(10,6),init:i=>i*86400},{key:"h",unit:"h",calc:i=>i*277.777778/Math.pow(10,6),init:i=>i*3600},{key:"min",unit:"min",calc:i=>i*16.6666667/1e3,init:i=>i*60},{key:"s",unit:"s",calc:i=>i,init:i=>i},{key:"ms",unit:"ms",calc:i=>i*1e3,init:i=>i/1e3},{key:"us",unit:"μs",calc:i=>i*1e6,init:i=>i/1e6},{key:"ns",unit:"ns",calc:i=>i*1e9,init:i=>i/1e9}],special:[{from:"h",to:"min",func:i=>i*60}],group:[{key:"",list:["yr","week","d","h","min","s","ms","us","ns"]}]},{key:"speed",main:"m_s",unit:[{key:"m_s",unit:"m/s",calc:i=>i,init:i=>i},{key:"km_s",unit:"km/s",calc:i=>i/1e3,init:i=>i*1e3},{key:"km_h",unit:"km/h",calc:i=>i*3.6,init:i=>i*277.777778/1e3},{key:"c",unit:"c",calc:i=>i*3.335641/Math.pow(10,9),init:i=>i*299792458},{key:"mach",unit:"mach",calc:i=>i*2.938584/1e3,init:i=>i*340.3},{key:"mile_h",unit:"mile/h",calc:i=>i*2.236936,init:i=>i*447.04/1e3},{key:"in_s",unit:"in/s",calc:i=>i*39.370079,init:i=>i*25.4/1e3}],special:[],group:[{key:"",list:["m_s","km_s","km_h","c","mach","mile_h","in_s"]}]},{key:"byte",main:"b",unit:[{key:"bit",unit:"bit",calc:i=>i*8,init:i=>i/8},{key:"b",unit:"b",calc:i=>i,init:i=>i},{key:"kb",unit:"kb",calc:i=>i/Math.pow(2,10),init:i=>i*1024},{key:"mb",unit:"mb",calc:i=>i/Math.pow(2,20),init:i=>i*Math.pow(2,20)},{key:"gb",unit:"gb",calc:i=>i/Math.pow(2,30),init:i=>i*Math.pow(2,30)},{key:"tb",unit:"tb",calc:i=>i/Math.pow(2,40),init:i=>i*Math.pow(2,40)},{key:"pb",unit:"pb",calc:i=>i/Math.pow(2,50),init:i=>i*Math.pow(2,50)},{key:"eb",unit:"eb",calc:i=>i/Math.pow(2,60),init:i=>i*Math.pow(2,60)}],special:[],group:[{key:"",list:["bit","b","kb","mb","gb","tb","pb","eb"]}]},{key:"angle",main:"degree",unit:[{key:"circle",unit:"circle",calc:i=>i*2.777778/1e3,init:i=>i*360},{key:"angle",unit:"angle",calc:i=>i*11.111111/1e3,init:i=>i*90},{key:"gon",unit:"gon",calc:i=>i*1.111111,init:i=>i*900/1e3},{key:"degree",unit:"°",calc:i=>i,init:i=>i},{key:"min",unit:" ′",calc:i=>i*60,init:i=>i*16.6666667/1e3},{key:"s",unit:"'",calc:i=>i*3600,init:i=>i*.2777778/1e3},{key:"rad",unit:"rad",calc:i=>i*17.453293/1e3,init:i=>i*57.29578},{key:"mrad",unit:"mrad",calc:i=>i*17.453293,init:i=>i*57.29578/1e3}],special:[],group:[{key:"angle_units",list:["circle","angle","gon","degree","min","s"]},{key:"radian_units",list:["rad","mrad"]}]}],F=(i,e)=>{for(let l of f(i).group)if(l.list.includes(e))return l.key;return""},X=function(i,e,l,t){let a=x(i,l);if(l===t)return B(e);let _=x(i,t),s=K(i,l,t);return s!==null?e=s(e):e=_.calc(a.init(e)),B(e)},f=i=>{for(let e of R)if(i===e.key)return e;throw new Error(`${i} type not found`)},x=(i,e)=>{for(let l of f(i).unit)if(e===l.key)return l;throw new Error(`${i} - ${e} unit not found`)},K=(i,e,l)=>{let t=f(i);if(t.special.length>0){for(let a of t.special)if(a.from===e&&a.to===l)return a.func}return null},B=function(i){let e=`${i}`,l=!1,t,a,_;if(e.indexOf(".")>-1){let s=e.match(/\.\d+e[+-](\d+)$/);s&&s[1]?l=s[1]*1<w-1:l=!0}return l?i>-1&&i<1&&i!=0?Math.abs(i)<1e-5?i=C(i,V):i=i.toFixed(b)*1:(t=e.split("."),a=t[0],_=t[1],e.length>w?a.length>=w?i=C(i,V):a.length<b-1?i=i.toFixed(b)*1:i=i.toFixed(w-a.length-1)*1:_.length>b&&(i=i.toFixed(b)*1)):e.length>w&&(i=C(i,V)),i+""},C=(i,e)=>{let l=i.toExponential(e);return(l+"").match(new RegExp(".0{"+e+"}e"))?i.toExponential(0):l},Q={key:0,class:"ctool-unit-all"},Y=["onClick"],Z={class:"ctool-unit-simple"},ii={class:"ctool-unit-simple-title"},ti=r("span",{style:{"font-size":"1.5rem",padding:"0 .6rem"}},"=",-1),ei={class:"ctool-unit-simple-title"},ui=D({__name:"Unit",async setup(i){let e,l;const t=I(([e,l]=J(()=>S({type:"length",from:"m",to:"all",input:1},n=>/^[0-9.]+$/.test(n))),e=await e,l(),e)),a=(n,c,y)=>`${y?`${$t("unit_"+y)} - `:""}${$t(`unit_${c}_${n}`)} (${x(c,n).unit})`,_=N(()=>a(t.current.from,t.current.type,F(t.current.type,t.current.from))),s=n=>{let c=[];return f(n).group.forEach(y=>{y.list.forEach(M=>{c.push({value:M,label:`${a(M,n,y.key)}`})})}),c};let z=T(s(t.current.type));const E=N(()=>{let n=[];for(let c of f(t.current.type).unit)n.push({key:c.key,value:X(t.current.type,t.current.input,t.current.from,c.key),name:a(c.key,t.current.type,F(t.current.type,c.key))});return n}),U=N(()=>{for(let n of E.value)if(t.current.to===n.key)return n;throw $error("null")});A(()=>t.current.type,n=>{t.current.from=f(n).main,t.current.to="all",z.value=s(n)}),A(()=>t.current,n=>{n.input&&t.save()},{immediate:!0,deep:!0});const L=()=>{t.current.to!=="all"&&([t.current.from,t.current.to]=[t.current.to,t.current.from])};return(n,c)=>{const y=m("Radio"),M=m("InputNumber"),j=m("Select"),P=m("Button"),v=m("Align"),W=m("Card"),H=m("HeightResize");return d(),$(q,null,[o(v,{class:"ctool-page-option",bottom:"default",direction:"vertical",horizontal:"center"},{default:p(()=>[o(y,{modelValue:u(t).current.type,"onUpdate:modelValue":c[0]||(c[0]=k=>u(t).current.type=k),options:u(R).map(k=>({value:k.key,label:n.$t("unit_"+k.key)}))},null,8,["modelValue","options"]),o(v,null,{default:p(()=>[o(M,{label:n.$t("main_ui_input"),min:!1,width:170,center:"",modelValue:u(t).current.input,"onUpdate:modelValue":c[1]||(c[1]=k=>u(t).current.input=k)},null,8,["label","modelValue"]),o(j,{options:z.value,modelValue:u(t).current.from,"onUpdate:modelValue":c[2]||(c[2]=k=>u(t).current.from=k)},null,8,["options","modelValue"]),o(P,{text:"<->",disabled:u(t).current.to==="all",onClick:L},null,8,["disabled"]),o(j,{options:[{value:"all",label:n.$t("unit_all")},...z.value],modelValue:u(t).current.to,"onUpdate:modelValue":c[3]||(c[3]=k=>u(t).current.to=k)},null,8,["options","modelValue"])]),_:1})]),_:1}),o(H,{append:[".ctool-page-option"]},{default:p(({height:k})=>[o(W,{height:k},{default:p(()=>[u(t).current.to==="all"?(d(),$("div",Q,[(d(!0),$(q,null,G(E.value,h=>(d(),$("div",{onClick:ni=>n.$copy(h.value)},[r("span",null,g(h.value),1),r("span",null,g(h.name),1)],8,Y))),256))])):(d(),O(v,{key:1,horizontal:"center",vertical:"center"},{default:p(()=>[r("div",Z,[o(v,null,{default:p(()=>[r("span",{class:"ctool-unit-simple-value",onClick:c[4]||(c[4]=h=>n.$copy(`${u(t).current.input}`))},g(u(t).current.input),1),r("span",ii,g(_.value),1),ti,r("span",{class:"ctool-unit-simple-value",onClick:c[5]||(c[5]=h=>n.$copy(U.value.value))},g(U.value.value),1),r("span",ei,g(U.value.name),1)]),_:1})])]),_:1}))]),_:2},1032,["height"])]),_:1},8,["append"])],64)}}});export{ui as default};
