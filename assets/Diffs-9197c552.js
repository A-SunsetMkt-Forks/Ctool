import{P as we,E as C,a as oe,S as G,f as ne,F as Ve,V as Ge,h as Ne,R as N,D as S,i as X,j as $e,C as be,W as Ae,G as Fe,c as ze,d as Ue,p as We,e as Ie,l as Pe}from"./index-5382bd37.js";import{A as qe,bi as He,bw as je,aA as K,al as Je,aq as Ke,be as Q,m as Qe,bj as R,aF as O,as as Ye,x as k,p as Ze,ae as Xe,a$ as y}from"./history-91cfa0f9.js";import{u as et,i as tt}from"./action-1cc9b3bd.js";import{f as z}from"./index-ada68135.js";import"./_commonjsHelpers-87174ba5.js";import"./index-da14ef80.js";class v{constructor(e,r,i,l){this.fromA=e,this.toA=r,this.fromB=i,this.toB=l}offset(e,r){return new v(this.fromA+e,this.toA+e,this.fromB+r,this.toB+r)}}function $(t,e,r,i,l,n){if(t==i)return[];let o=re(t,e,r,i,l,n),s=ie(t,e+o,r,i,l+o,n);e+=o,r-=s,l+=o,n-=s;let a=r-e,f=n-l;if(!a||!f)return[new v(e,r,l,n)];if(a>f){let h=t.slice(e,r).indexOf(i.slice(l,n));if(h>-1)return[new v(e,e+h,l,l),new v(e+h+f,r,n,n)]}else if(f>a){let h=i.slice(l,n).indexOf(t.slice(e,r));if(h>-1)return[new v(e,e,l,l+h),new v(r,r,l+h+a,n)]}if(a==1||f==1)return[new v(e,r,l,n)];let u=ke(t,e,r,i,l,n);if(u){let[h,d,m]=u;return $(t,e,h,i,l,d).concat($(t,h+m,r,i,d+m,n))}return nt(t,e,r,i,l,n)}function nt(t,e,r,i,l,n){let o=r-e,s=n-l,a=Math.ceil((o+s)/2);Y.reset(a),Z.reset(a);let f=(m,c)=>t.charCodeAt(e+m)==i.charCodeAt(l+c),u=(m,c)=>t.charCodeAt(r-m-1)==i.charCodeAt(n-c-1),h=(o-s)%2!=0?Z:null,d=h?null:Y;for(let m=0;m<a;m++){let c=Y.advance(m,o,s,a,h,!1,f)||Z.advance(m,o,s,a,d,!0,u);if(c)return rt(t,e,r,e+c[0],i,l,n,l+c[1])}return[new v(e,r,l,n)]}class xe{constructor(){this.vec=[]}reset(e){this.len=e<<1;for(let r=0;r<this.len;r++)this.vec[r]=-1;this.vec[e+1]=0,this.start=this.end=0}advance(e,r,i,l,n,o,s){for(let a=-e+this.start;a<=e-this.end;a+=2){let f=l+a,u=a==-e||a!=e&&this.vec[f-1]<this.vec[f+1]?this.vec[f+1]:this.vec[f-1]+1,h=u-a;for(;u<r&&h<i&&s(u,h);)u++,h++;if(this.vec[f]=u,u>r)this.end+=2;else if(h>i)this.start+=2;else if(n){let d=l+(r-i)-a;if(d>=0&&d<this.len&&n.vec[d]!=-1)if(o){let m=n.vec[d];if(m>=r-u)return[m,l+m-d]}else{let m=r-n.vec[d];if(u>=m)return[u,h]}}}return null}}const Y=new xe,Z=new xe;function rt(t,e,r,i,l,n,o,s){let a=!1;return!T(t,i)&&++i==r&&(a=!0),!T(l,s)&&++s==o&&(a=!0),a?[new v(e,r,n,o)]:$(t,e,i,l,n,s).concat($(t,i,r,l,s,o))}function Ce(t,e){let r=1,i=Math.min(t,e);for(;r<i;)r=r<<1;return r}function re(t,e,r,i,l,n){if(e==r||e==n||t.charCodeAt(e)!=i.charCodeAt(l))return 0;let o=Ce(r-e,n-l);for(let s=e,a=l;;){let f=s+o,u=a+o;if(f>r||u>n||t.slice(s,f)!=i.slice(a,u)){if(o==1)return s-e-(T(t,s)?0:1);o=o>>1}else{if(f==r||u==n)return f-e;s=f,a=u}}}function ie(t,e,r,i,l,n){if(e==r||l==n||t.charCodeAt(r-1)!=i.charCodeAt(n-1))return 0;let o=Ce(r-e,n-l);for(let s=r,a=n;;){let f=s-o,u=a-o;if(f<e||u<l||t.slice(f,s)!=i.slice(u,a)){if(o==1)return r-s-(T(t,s)?0:1);o=o>>1}else{if(f==e||u==l)return r-f;s=f,a=u}}}function ke(t,e,r,i,l,n){let o=r-e,s=n-l;if(o<s){let d=ke(i,l,n,t,e,r);return d&&[d[1],d[0],d[2]]}if(o<4||s*2<o)return null;let a=i.slice(l,n);function f(d){let m=d+Math.floor(o/4);if(T(t,d)||d++,T(t,m)||m--,d>=m)return null;let c=t.slice(d,m),g=-1,p;for(;(g=a.indexOf(c,g+1))!=-1;){let x=re(t,m,r,i,l+g+c.length,n),A=ie(t,e,d,i,l,l+g),b=c.length+x+A;(!p||p[2]<b)&&(p=[d-A,l+g-A,b])}return p&&p[2]*2>o?p:null}let u=f(e+Math.ceil(o/4)),h=f(e+Math.ceil(o/2));return u&&(!h||h[2]<u[2])?u:h}function Be(t,e){for(let r=1;r<t.length;r++){let i=t[r-1],l=t[r];i.toA>l.fromA-e&&i.toB>l.fromB-e&&(t[r-1]=new v(i.fromA,l.toA,i.fromB,l.toB),t.splice(r--,1))}}function it(t,e,r){for(;;){Be(r,1);let i=!1;for(let l=0;l<r.length;l++){let n=r[l],o,s;(o=re(t,n.fromA,n.toA,e,n.fromB,n.toB))&&(n=r[l]=new v(n.fromA+o,n.toA,n.fromB+o,n.toB)),(s=ie(t,n.fromA,n.toA,e,n.fromB,n.toB))&&(n=r[l]=new v(n.fromA,n.toA-s,n.fromB,n.toB-s));let a=n.toA-n.fromA,f=n.toB-n.fromB;if(a&&f)continue;let u=n.fromA-(l?r[l-1].toA:0),h=(l<r.length-1?r[l+1].fromA:t.length)-n.toA;if(!u||!h)continue;let d=a?t.slice(n.fromA,n.toA):e.slice(n.fromB,n.toB);u<=d.length&&t.slice(n.fromA-u,n.fromA)==d.slice(d.length-u)?(r[l]=new v(n.fromA-u,n.toA-u,n.fromB-u,n.toB-u),i=!0):h<=d.length&&t.slice(n.toA,n.toA+h)==d.slice(0,h)&&(r[l]=new v(n.fromA+h,n.toA+h,n.fromB+h,n.toB+h),i=!0)}if(!i)break}return r}function lt(t,e,r){for(let i=0,l=0;l<t.length;l++){let n=t[l],o=n.toA-n.fromA,s=n.toB-n.fromB;if(o&&s||o>3||s>3){let a=l==t.length-1?e.length:t[l+1].fromA,f=n.fromA-i,u=a-n.toA,h=ae(e,n.fromA,Math.min(f,5)),d=se(e,n.toA,Math.min(u,5)),m=n.fromA-h,c=d-n.toA;if(!o||!s){let g=Math.max(o,s),[p,x,A]=o?[e,n.fromA,n.toA]:[r,n.fromB,n.toB],b,M;m&&c?(g>m&&e.slice(h,n.fromA)==p.slice(A-m,A)?(n=t[l]=new v(h,h+o,n.fromB-m,n.toB-m),h=n.fromA,d=se(e,n.toA,Math.min(a-n.toA,5))):g>c&&e.slice(n.toA,d)==p.slice(x,x+c)&&(n=t[l]=new v(d-o,d,n.fromB+c,n.toB+c),d=n.toA,h=ae(e,n.fromA,Math.min(n.fromA-i,5))),m=n.fromA-h,c=d-n.toA):!m&&!c&&(M=n.fromA-(b=ot(e,n.fromA,f)))&&e.slice(b,n.fromA)==p.slice(A-M,A)&&(n=t[l]=new v(b,b+o,n.fromB-M,n.toB-M))}(m||c)&&(n=t[l]=new v(n.fromA-m,n.toA+c,n.fromB-m,n.toB+c)),i=n.toA}}return Be(t,3),t}let L;try{L=new RegExp("[\\p{Alphabetic}\\p{Number}]","u")}catch{}function Me(t){return t>48&&t<58||t>64&&t<91||t>96&&t<123}function De(t,e){if(e==t.length)return 0;let r=t.charCodeAt(e);return r<192?Me(r)?1:0:L?!Oe(r)||e==t.length-1?L.test(String.fromCharCode(r))?1:0:L.test(t.slice(e,e+2))?2:0:0}function Se(t,e){if(!e)return 0;let r=t.charCodeAt(e-1);return r<192?Me(r)?1:0:L?!ye(r)||e==1?L.test(String.fromCharCode(r))?1:0:L.test(t.slice(e-2,e))?2:0:0}function se(t,e,r){if(e==t.length||!Se(t,e))return e;for(let i=e,l=e+r;;){let n=De(t,i);if(!n)return i;if(i+=n,i>l)return e}}function ae(t,e,r){if(!e||!De(t,e))return e;for(let i=e,l=e-r;;){let n=Se(t,i);if(!n)return i;if(i-=n,i<l)return e}}function ot(t,e,r){for(let i=e,l=e-r;;){let n=i?t.charCodeAt(i-1):10;if(n==10)return i;if(i--,i<l||n!=32&&n!=9)return e}}const Oe=t=>t>=55296&&t<=56319,ye=t=>t>=56320&&t<=57343;function T(t,e){return!e||e==t.length||!Oe(t.charCodeAt(e-1))||!ye(t.charCodeAt(e))}function st(t,e){return it(t,e,$(t,0,t.length,e,0,e.length))}function Le(t,e){return lt(st(t,e),t,e)}class le{constructor(e,r,i,l,n){this.changes=e,this.fromA=r,this.toA=i,this.fromB=l,this.toB=n}offset(e,r){return e||r?new le(this.changes,this.fromA+e,this.toA+e,this.fromB+r,this.toB+r):this}get endA(){return Math.max(this.fromA,this.toA-1)}get endB(){return Math.max(this.fromB,this.toB-1)}}function ue(t,e,r,i){let l=r.lineAt(t),n=i.lineAt(e);return l.to==t&&n.to==e?[Math.min(r.length,t+1),Math.min(i.length,e+1)]:[l.from,n.from]}function fe(t,e,r,i){let l=r.lineAt(t),n=i.lineAt(e);return l.from==t&&n.from==e?[t,e]:[l.to+1,n.to+1]}function _e(t,e,r,i,l){let n=[];for(let o=0;o<t.length;o++){let s=t[o],[a,f]=ue(s.fromA+i,s.fromB+l,e,r),[u,h]=fe(s.toA+i,s.toB+l,e,r),d=[s.offset(-a+i,-f+l)];for(;o<t.length-1;){let m=t[o+1],[c,g]=ue(m.fromA+i,m.fromB+l,e,r);if(c>u+1&&g>h+1)break;d.push(m.offset(-a+i,-f+l)),[u,h]=fe(m.toA+i,m.toB+l,e,r),o++}n.push(new le(d,a,Math.max(a,u),f,Math.max(f,h)))}return n}function at(t,e){return _e(Le(t.toString(),e.toString()),t,e,0,0)}const U=1e3;function he(t,e,r,i){let l=0,n=t.length;for(;;){if(l==n){let u=0,h=0;l&&({toA:u,toB:h}=t[l-1]);let d=e-(r?u:h);return[u+d,h+d]}let o=l+n>>1,s=t[o],[a,f]=r?[s.fromA,s.toA]:[s.fromB,s.toB];if(a>e)n=o;else if(f<=e)l=o+1;else return i?[s.fromA,s.fromB]:[s.toA,s.toB]}}function Te(t,e,r,i){let l=[];return e.iterChangedRanges((n,o,s,a)=>{let f=0,u=r?e.length:i,h=0,d=r?i:e.length;n>U&&([f,h]=he(t,n-U,r,!0)),o<e.length-U&&([u,d]=he(t,o+U,r,!1));let m=a-s-(o-n),c,[g,p]=r?[m,0]:[0,m];l.length&&(c=l[l.length-1]).toA>=f?l[l.length-1]={fromA:c.fromA,fromB:c.fromB,toA:u,toB:d,diffA:c.diffA+g,diffB:c.diffB+p}:l.push({fromA:f,toA:u,fromB:h,toB:d,diffA:g,diffB:p})}),l}function Ee(t,e,r,i){if(!t.length)return e;let l=0,n=0,o=0,s=[];for(let a of t){let f=a.fromA+n,u=a.toA+n+a.diffA,h=a.fromB+o,d=a.toB+o+a.diffB;for(;l<e.length;){let m=e[l];if(m.toA+n<=f)s.push(m.offset(n,o));else if(m.fromA+n>u)break;l++}for(let m of _e(Le(r.sliceString(f,u),i.sliceString(h,d)),r,i,f,h))s.push(m);n+=a.diffA,o+=a.diffB}for(;l<e.length;)s.push(e[l++].offset(n,o));return s}function ut(t,e,r){return Ee(Te(t,e.changes,!0,r.length),t,e.newDoc,r)}function ft(t,e,r){return Ee(Te(t,e.changes,!1,r.length),t,r,e.newDoc)}const ee=G.define(),E=ne.define({create(t){return null},update(t,e){for(let r of e.effects)r.is(ee)&&(t=r.value);return t}}),B=Ve.define({combine:t=>t[0]}),Re=Ge.fromClass(class{constructor(t){({deco:this.deco,gutter:this.gutter}=me(t))}update(t){(t.docChanged||t.viewportChanged||ht(t.startState,t.state)||ct(t.startState,t.state))&&({deco:this.deco,gutter:this.gutter}=me(t.view))}},{decorations:t=>t.deco}),W=we.low(Ne({class:"cm-changeGutter",markers:t=>{var e;return((e=t.plugin(Re))===null||e===void 0?void 0:e.gutter)||X.empty},renderEmptyElements:!1}));function ht(t,e){return t.field(E,!1)!=e.field(E,!1)}function ct(t,e){return t.facet(B)!=e.facet(B)}const ce=S.line({class:"cm-changedLine"}),dt=S.mark({class:"cm-changedText"}),de=new class extends Fe{constructor(){super(...arguments),this.elementClass="cm-changedLineGutter"}};function mt(t,e,r,i,l,n){let o=r?t.fromA:t.fromB,s=r?t.toA:t.toB,a=0;if(o!=s){l.add(o,o,ce),n&&n.add(o,o,de);for(let f=e.iterRange(o,s-1),u=o;!f.next().done;){if(f.lineBreak){u++,l.add(u,u,ce),n&&n.add(u,u,de);continue}let h=u+f.value.length;if(i)for(;a<t.changes.length;){let d=t.changes[a],m=o+(r?d.fromA:d.fromB),c=o+(r?d.toA:d.toB),g=Math.max(u,m),p=Math.min(h,c);if(g<p&&l.add(g,p,dt),c<h)a++;else break}u=h}}}function me(t){let e=t.state.field(E),{side:r,highlightChanges:i,markGutter:l}=t.state.facet(B),n=r=="a",o=new N,s=l?new N:null,{from:a,to:f}=t.viewport;for(let u of e){if((n?u.fromA:u.fromB)>=f)break;(n?u.toA:u.toB)>a&&mt(u,t.state.doc,n,i,o,s)}return{deco:o.finish(),gutter:s&&s.finish()}}class I extends Ae{constructor(e){super(),this.height=e}eq(e){return this.height==e.height}toDOM(){let e=document.createElement("div");return e.className="cm-mergeSpacer",e.style.height=this.height+"px",e}updateDOM(e){return e.style.height=this.height+"px",!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}const H=G.define({map:(t,e)=>t.map(e)}),V=ne.define({create:()=>S.none,update:(t,e)=>{for(let r of e.effects)if(r.is(H))return r.value;return t.map(e.changes)},provide:t=>C.decorations.from(t)}),P=1e-4;function gt(t,e,r){let i=new N,l=new N,n=t.viewportLineBlocks,o=e.viewportLineBlocks,s=0,a=0,f=t.state.field(V).iter(),u=e.state.field(V).iter(),h=0,d=0,m=0,c=0;e:for(let A=0;;A++){let b=A<r.length?r[A]:null,[M,F]=b?[b.fromA,b.fromB]:[t.state.doc.length,e.state.doc.length];if(h<M&&d<F)for(;;){if(s==n.length||a==o.length)break e;let D=n[s],w=o[a];for(;f.value&&f.from<D.from;)m-=f.value.spec.widget.height,f.next();for(;u.value&&u.from<w.from;)c-=u.value.spec.widget.height,u.next();if(D.from>=M||w.from>=F)break;let j=D.from-h,J=w.from-d;if(j<0||j<J)s++;else if(J<0||J<j)a++;else{let _=D.top+m-(w.top+c);_<-P?(m-=_,i.add(D.from,D.from,S.widget({widget:new I(-_),block:!0,side:-1}))):_>P&&(c+=_,l.add(w.from,w.from,S.widget({widget:new I(_),block:!0,side:-1}))),s++,a++}}if(!b)break;h=b.toA,d=b.toB}for(;f.value;)m-=f.value.spec.widget.height,f.next();for(;u.value;)c-=u.value.spec.widget.height,u.next();let g=t.contentHeight+m-(e.contentHeight+c);g<P?i.add(t.state.doc.length,t.state.doc.length,S.widget({widget:new I(-g),block:!0,side:1})):g>P&&l.add(e.state.doc.length,e.state.doc.length,S.widget({widget:new I(g),block:!0,side:1}));let p=i.finish(),x=l.finish();X.eq([p],[t.state.field(V)])||t.dispatch({effects:H.of(p)}),X.eq([x],[e.state.field(V)])||e.dispatch({effects:H.of(x)})}const te=G.define({map:(t,e)=>e.mapPos(t)});class pt extends Ae{constructor(e){super(),this.lines=e}eq(e){return this.lines==e.lines}toDOM(e){let r=document.createElement("div");return r.className="cm-collapsedLines",r.textContent="⦚ "+e.state.phrase("$ unchanged lines",this.lines)+" ⦚",r.addEventListener("click",i=>{let l=e.posAtDOM(i.target);e.dispatch({effects:te.of(l)});let{side:n,sibling:o}=e.state.facet(B);o().dispatch({effects:te.of(vt(l,e.state.field(E),n=="a"))})}),r}ignoreEvent(e){return e instanceof MouseEvent}get estimatedHeight(){return 27}}function vt(t,e,r){let i=0,l=0;for(let n=0;;n++){let o=n<e.length?e[n]:null;if(!o||(r?o.fromA:o.fromB)>=t)return l+(t-i);[i,l]=r?[o.toA,o.toB]:[o.toB,o.toA]}}const wt=ne.define({create(t){return S.none},update(t,e){t=t.map(e.changes);for(let r of e.effects)r.is(te)&&(t=t.update({filter:i=>i!=r.value}));return t},provide:t=>C.decorations.from(t)});function ge({margin:t=3,minSize:e=4}){return wt.init(r=>bt(r,t,e))}function bt(t,e,r){let i=new N,l=t.facet(B).side=="a",n=t.field(E),o=1;for(let s=0;;s++){let a=s<n.length?n[s]:null,f=s?o+e:1,u=a?t.doc.lineAt(l?a.fromA:a.fromB).number-1-e:t.doc.lines,h=u-f+1;if(h>=r&&i.add(t.doc.line(f).from,t.doc.line(u).to,S.replace({widget:new pt(h),block:!0})),!a)break;o=t.doc.lineAt(Math.min(t.doc.length,l?a.toA:a.toB)).number}return i.finish()}const At=C.styleModule.of(new $e({".cm-mergeView":{overflowY:"auto"},".cm-mergeViewEditors":{display:"flex",alignItems:"stretch"},".cm-mergeViewEditor":{flexGrow:1,flexBasis:0,overflow:"hidden"},".cm-merge-revert":{width:"1.6em",flexGrow:0,flexShrink:0,position:"relative"},".cm-merge-revert button":{position:"absolute",display:"block",width:"100%",boxSizing:"border-box",textAlign:"center",background:"none",border:"none",font:"inherit",cursor:"pointer"}})),xt=C.baseTheme({"& .cm-scroller, &":{height:"auto !important",overflowY:"visible !important"},"&.cm-merge-a .cm-changedLine":{backgroundColor:"rgba(160, 128, 100, .08)"},"&.cm-merge-b .cm-changedLine":{backgroundColor:"rgba(100, 160, 128, .08)"},"&light.cm-merge-a .cm-changedText":{background:"linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"},"&dark.cm-merge-a .cm-changedText":{background:"linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"},"&light.cm-merge-b .cm-changedText":{background:"linear-gradient(#22bb2266, #22bb2266) bottom/100% 2px no-repeat"},"&dark.cm-merge-b .cm-changedText":{background:"linear-gradient(#88ff8866, #88ff8866) bottom/100% 2px no-repeat"},".cm-collapsedLines":{padding:"5px 5px 5px 10px",cursor:"pointer"},"&light .cm-collapsedLines":{color:"#444",background:"linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"},"&dark .cm-collapsedLines":{color:"#ddd",background:"linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"},".cm-changeGutter":{width:"3px",paddingLeft:"1px"},"&light.cm-merge-a .cm-changedLineGutter":{background:"#e43"},"&dark.cm-merge-a .cm-changedLineGutter":{background:"#fa9"},"&light.cm-merge-b .cm-changedLineGutter":{background:"#2b2"},"&dark.cm-merge-b .cm-changedLineGutter":{background:"#8f8"}}),pe=new be,q=new be;class Ct{constructor(e){this.revertDOM=null,this.revertToA=!1,this.revertToLeft=!1,this.measuring=-1;let r=[we.low(Re),xt,At,V,C.updateListener.of(h=>{this.measuring<0&&(h.heightChanged||h.viewportChanged)&&!h.transactions.some(d=>d.effects.some(m=>m.is(H)))&&this.measure()})],i=[B.of({side:"a",sibling:()=>this.b,highlightChanges:e.highlightChanges!==!1,markGutter:e.gutter!==!1})];e.gutter!==!1&&i.push(W);let l=oe.create({doc:e.a.doc,selection:e.a.selection,extensions:[e.a.extensions||[],C.editorAttributes.of({class:"cm-merge-a"}),q.of(i),r]}),n=[B.of({side:"b",sibling:()=>this.a,highlightChanges:e.highlightChanges!==!1,markGutter:e.gutter!==!1})];e.gutter!==!1&&n.push(W);let o=oe.create({doc:e.b.doc,selection:e.b.selection,extensions:[e.b.extensions||[],C.editorAttributes.of({class:"cm-merge-b"}),q.of(n),r]});this.chunks=at(l.doc,o.doc);let s=[E.init(()=>this.chunks),pe.of(e.collapseUnchanged?ge(e.collapseUnchanged):[])];l=l.update({effects:G.appendConfig.of(s)}).state,o=o.update({effects:G.appendConfig.of(s)}).state,this.dom=document.createElement("div"),this.dom.className="cm-mergeView",this.editorDOM=this.dom.appendChild(document.createElement("div")),this.editorDOM.className="cm-mergeViewEditors";let a=e.orientation||"a-b",f=document.createElement("div");f.className="cm-mergeViewEditor";let u=document.createElement("div");u.className="cm-mergeViewEditor",this.editorDOM.appendChild(a=="a-b"?f:u),this.editorDOM.appendChild(a=="a-b"?u:f),this.a=new C({state:l,parent:f,root:e.root,dispatch:h=>this.dispatch(h,this.a)}),this.b=new C({state:o,parent:u,root:e.root,dispatch:h=>this.dispatch(h,this.b)}),this.setupRevertControls(!!e.revertControls,e.revertControls=="b-to-a",e.renderRevertControl),e.parent&&e.parent.appendChild(this.dom),this.scheduleMeasure()}dispatch(e,r){if(e.docChanged){this.chunks=r==this.a?ut(this.chunks,e,this.b.state.doc):ft(this.chunks,e,this.a.state.doc),r.update([e,e.state.update({effects:ee.of(this.chunks)})]);let i=r==this.a?this.b:this.a;i.update([i.state.update({effects:ee.of(this.chunks)})]),this.scheduleMeasure()}else r.update([e])}reconfigure(e){if("orientation"in e){let n=e.orientation!="b-a";if(n!=(this.editorDOM.firstChild==this.a.dom.parentNode)){let o=this.a.dom.parentNode,s=this.b.dom.parentNode;o.remove(),s.remove(),this.editorDOM.insertBefore(n?o:s,this.editorDOM.firstChild),this.editorDOM.appendChild(n?s:o),this.revertToLeft=!this.revertToLeft,this.revertDOM&&(this.revertDOM.textContent="")}}if("revertControls"in e||"renderRevertControl"in e){let n=!!this.revertDOM,o=this.revertToA,s=this.renderRevert;"revertControls"in e&&(n=!!e.revertControls,o=e.revertControls=="b-to-a"),"renderRevertControl"in e&&(s=e.renderRevertControl),this.setupRevertControls(n,o,s)}let r="highlightChanges"in e,i="gutter"in e,l="collapseUnchanged"in e;if(r||i||l){let n=[],o=[];if(r||i){let s=this.a.state.facet(B),a=i?e.gutter!==!1:s.markGutter,f=r?e.highlightChanges!==!1:s.highlightChanges;n.push(q.reconfigure([B.of({side:"a",sibling:()=>this.b,highlightChanges:f,markGutter:a}),a?W:[]])),o.push(q.reconfigure([B.of({side:"b",sibling:()=>this.a,highlightChanges:f,markGutter:a}),a?W:[]]))}if(l){let s=pe.reconfigure(e.collapseUnchanged?ge(e.collapseUnchanged):[]);n.push(s),o.push(s)}this.a.dispatch({effects:n}),this.b.dispatch({effects:o})}this.scheduleMeasure()}setupRevertControls(e,r,i){this.revertToA=r,this.revertToLeft=this.revertToA==(this.editorDOM.firstChild==this.a.dom.parentNode),this.renderRevert=i,!e&&this.revertDOM?(this.revertDOM.remove(),this.revertDOM=null):e&&!this.revertDOM?(this.revertDOM=this.editorDOM.insertBefore(document.createElement("div"),this.editorDOM.firstChild.nextSibling),this.revertDOM.addEventListener("mousedown",l=>this.revertClicked(l)),this.revertDOM.className="cm-merge-revert"):this.revertDOM&&(this.revertDOM.textContent="")}scheduleMeasure(){if(this.measuring<0){let e=this.dom.ownerDocument.defaultView||window;this.measuring=e.requestAnimationFrame(()=>{this.measuring=-1,this.measure()})}}measure(){gt(this.a,this.b,this.chunks),this.revertDOM&&this.updateRevertButtons()}updateRevertButtons(){let e=this.revertDOM,r=e.firstChild,i=this.a.viewport,l=this.b.viewport;for(let n=0;n<this.chunks.length;n++){let o=this.chunks[n];if(o.fromA>i.to||o.fromB>l.to)break;if(o.fromA<i.from||o.fromB<l.from)continue;let s=this.a.lineBlockAt(o.fromA).top+"px";for(;r&&+r.dataset.chunk<n;)r=ve(r);r&&r.dataset.chunk==String(n)?(r.style.top!=s&&(r.style.top=s),r=r.nextSibling):e.insertBefore(this.renderRevertButton(s,n),r)}for(;r;)r=ve(r)}renderRevertButton(e,r){let i;if(this.renderRevert)i=this.renderRevert();else{i=document.createElement("button");let l=this.a.state.phrase("Revert this chunk");i.setAttribute("aria-label",l),i.setAttribute("title",l),i.textContent=this.revertToLeft?"⇜":"⇝"}return i.style.top=e,i.setAttribute("data-chunk",String(r)),i}revertClicked(e){let r=e.target,i;for(;r&&r.parentNode!=this.revertDOM;)r=r.parentNode;if(r&&(i=this.chunks[r.dataset.chunk])){let[l,n,o,s,a,f]=this.revertToA?[this.b,this.a,i.fromB,i.toB,i.fromA,i.toA]:[this.a,this.b,i.fromA,i.toA,i.fromB,i.toB],u=l.state.sliceDoc(o,Math.max(o,s-1));o!=s&&(u+=l.state.lineBreak),n.dispatch({changes:{from:a,to:Math.min(n.state.doc.length,f),insert:u},userEvent:"revert"}),e.preventDefault()}}destroy(){this.a.destroy(),this.b.destroy(),this.measuring>-1&&(this.dom.ownerDocument.defaultView||window).cancelAnimationFrame(this.measuring),this.dom.remove()}}function ve(t){let e=t.nextSibling;return t.remove(),e}const yt=qe({__name:"Diffs",async setup(t){let e,r;const i=et(([e,r]=He(()=>tt({a:"",b:"",option:{lineWrapping:!0,lang:"text",collapse:!1,revert:"b-to-a"}},!1)),e=await e,r(),e)),l=je(),n=["text",...Object.keys(z.languages)];let o=K(null),s=K(null);const a=K({index:0,chunks:[]}),f=async c=>{var p;const g=((p=z.parseLang(c))==null?void 0:p.lang)||"";for(let x of Pe)if(g&&g===x.name)return await x.load();return[]},u=async()=>[l.theme.raw==="dark"?ze:Ue,C.updateListener.of(c=>{s.value&&c.docChanged&&(c.view.dom.contains(s.value.a.dom)&&c.state.doc.toString()!==i.current.a&&(i.current.a=c.state.doc.toString()),c.view.dom.contains(s.value.b.dom)&&c.state.doc.toString()!==i.current.b&&(i.current.b=c.state.doc.toString()))}),await f(i.current.option.lang),i.current.option.lineWrapping?C.lineWrapping:[],We($t("main_ui_input")),Ie()],h=async c=>{s.value&&s.value.destroy(),s.value=new Ct({a:{doc:i.current.a,extensions:await u()},b:{doc:i.current.b,extensions:await u()},parent:c,revertControls:i.current.option.revert,collapseUnchanged:i.current.option.collapse?{}:void 0,highlightChanges:!0,gutter:!0})},d=async()=>{i.current.a=await z.simple(i.current.option.lang,"beautify",i.current.a),i.current.b=await z.simple(i.current.option.lang,"beautify",i.current.b),h(o.value)},m=c=>{if(!s.value)return;const g=c==="next"?a.value.index+1:a.value.index-1,p=a.value.chunks[g];p&&(s.value.dom.scrollTo({top:s.value.a.lineBlockAt(p.fromA).top,behavior:"smooth"}),a.value.index=g)};return Je(()=>{setTimeout(()=>{h(o.value)},200)}),Ke(()=>{var c;(c=s.value)==null||c.destroy()}),Q(()=>({color:l.theme.raw,option:i.current.option}),()=>h(o.value),{deep:!0}),Q(()=>({a:i.current.a,b:i.current.b}),()=>{setTimeout(()=>{s.value&&(a.value.index=0,a.value.chunks=s.value.chunks.map(c=>({fromA:c.fromA}))||[])},1e3)},{immediate:!0}),Q(()=>i.current,()=>{i.current.a===""||i.current.b===""||i.save()},{deep:!0}),(c,g)=>{const p=O("HeightResize"),x=O("Select"),A=O("Button"),b=O("Bool"),M=O("Dropdown"),F=O("Input"),D=O("Align");return Ye(),Qe(D,{direction:"vertical",class:"ctool-diff"},{default:R(()=>[k(p,{ignore:"",append:[".ctool-page-option"],reduce:5},{default:R(({height:w})=>[Ze("div",{ref_key:"container",ref:o,style:Xe({height:`${w}px`,width:"100%",overflow:"hidden"})},null,4)]),_:1},8,["append"]),k(D,{class:"ctool-page-option",horizontal:"center"},{default:R(()=>[k(x,{modelValue:y(i).current.option.lang,"onUpdate:modelValue":g[0]||(g[0]=w=>y(i).current.option.lang=w),options:n},null,8,["modelValue"]),k(A,{text:c.$t("code_beautify"),onClick:d},null,8,["text"]),k(b,{modelValue:y(i).current.option.lineWrapping,"onUpdate:modelValue":g[1]||(g[1]=w=>y(i).current.option.lineWrapping=w),label:c.$t("component_editor_line_wrapping"),border:""},null,8,["modelValue","label"]),k(b,{modelValue:y(i).current.option.collapse,"onUpdate:modelValue":g[2]||(g[2]=w=>y(i).current.option.collapse=w),label:c.$t("diffs_collapse"),border:""},null,8,["modelValue","label"]),k(M,{onSelect:g[3]||(g[3]=w=>y(i).current.option.revert=w),placeholder:c.$t("diffs_revert_direction"),options:[{value:"b-to-a",label:c.$t("diffs_right_to_left")},{value:"a-to-b",label:c.$t("diffs_left_to_right")}]},null,8,["placeholder","options"]),k(F,{center:"",disabled:a.value.chunks.length===0,"model-value":`${a.value.chunks.length?a.value.index+1:0} / ${a.value.chunks.length}`,width:130},{prepend:R(()=>[k(A,{disabled:a.value.chunks.length===0||a.value.index===0,text:"<",onClick:g[4]||(g[4]=w=>m("last"))},null,8,["disabled"])]),append:R(()=>[k(A,{disabled:a.value.chunks.length===0||a.value.index===a.value.chunks.length-1,text:">",onClick:g[5]||(g[5]=w=>m("next"))},null,8,["disabled"])]),_:1},8,["disabled","model-value"])]),_:1})]),_:1})}}});export{yt as default};
