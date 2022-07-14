import{d as ee,a as z,b as t,e as G,P as re,u as te,c as r,I as K,m as ke,Q as Ce,i as ne,N as Ve,T as xe,g as le,r as P,U as be,t as Ie,s as ue,W as de,X as $e,V as T,Y as Se,w as ae,Z as ce,J as Y,l as q,_ as ve,O as Be,$ as fe,a0 as me,q as X,a1 as ge,n as we,H as L,a2 as Fe,a3 as Pe,h as De,o as Re,a4 as Te,a5 as Ae,j as Me,v as Le,k as Ee,a6 as Ne,a7 as Ue,y as ze,z as M,A as se,B as $,C as Oe,D as ie,a8 as We,E as A,F as U,a9 as Ke,G as je,K as He,aa as j,ab as J}from"./index.93da1b49.js";import{V as qe,a as Xe}from"./VTable.22c4586f.js";class Z{constructor(i){let{x:a,y:l,width:n,height:s}=i;this.x=a,this.y=l,this.width=n,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ye(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform;if(l){let n,s,d,f,h;if(l.startsWith("matrix3d("))n=l.slice(9,-1).split(/, /),s=+n[0],d=+n[5],f=+n[12],h=+n[13];else if(l.startsWith("matrix("))n=l.slice(7,-1).split(/, /),s=+n[0],d=+n[3],f=+n[4],h=+n[5];else return new Z(i);const y=a.transformOrigin,_=i.x-f-(1-s)*parseFloat(y),o=i.y-h-(1-d)*parseFloat(y.slice(y.indexOf(" ")+1)),c=s?i.width/s:e.offsetWidth+1,m=d?i.height/d:e.offsetHeight+1;return new Z({x:_,y:o,width:c,height:m})}else return new Z(i)}const Ge="cubic-bezier(0.4, 0, 0.2, 1)";const H=ee({name:"VFieldLabel",props:{floating:Boolean},setup(e,i){let{slots:a}=i;return z(()=>t(qe,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},a)),{}}}),Je=G({focused:Boolean},"focus");function Qe(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:re();const a=te(e,"focused"),l=r(()=>({[`${i}--focused`]:a.value}));function n(){a.value=!0}function s(){a.value=!1}return{focusClasses:l,isFocused:a,focus:n,blur:s}}const Ze=["underlined","outlined","filled","solo","plain"],he=G({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ze.includes(e)},...ke(),...Ce()},"v-field"),ye=ne()({name:"VField",inheritAttrs:!1,props:{id:String,...Je(),...he()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:l,slots:n}=i;const{themeClasses:s}=Ve(e),{loaderClasses:d}=xe(e),{focusClasses:f,isFocused:h,focus:y,blur:_}=Qe(e),o=r(()=>e.dirty||e.active),c=r(()=>!e.singleLine&&!!(e.label||n.label)),m=le(),C=r(()=>e.id||`input-${m}`),g=P(),x=P(),S=P(),{backgroundColorClasses:u,backgroundColorStyles:v}=be(Ie(e,"bgColor")),{textColorClasses:p,textColorStyles:D}=ue(r(()=>o.value&&h.value&&!e.error&&!e.disabled?e.color:void 0));de(o,k=>{if(c.value){const b=g.value.$el,B=x.value.$el,I=Ye(b),w=B.getBoundingClientRect(),N=w.x-I.x,R=w.y-I.y-(I.height/2-w.height/2),F=w.width/.75,O=Math.abs(F-I.width)>1?{maxWidth:Be(F)}:void 0,Q=parseFloat(getComputedStyle(b).transitionDuration)*1e3,W=parseFloat(getComputedStyle(B).getPropertyValue("--v-field-label-scale"));b.style.visibility="visible",B.style.visibility="hidden",b.animate([{transform:"translate(0)"},{transform:`translate(${N}px, ${R}px) scale(${W})`,...O}],{duration:Q,easing:Ge,direction:k?"normal":"reverse"}).finished.then(()=>{b.style.removeProperty("visibility"),B.style.removeProperty("visibility")})}},{flush:"post"});const V=r(()=>({isActive:o,isFocused:h,controlRef:S,blur:_,focus:y}));function E(k){k.target!==document.activeElement&&k.preventDefault(),l("click:control",k)}return z(()=>{var k,b,B;const I=e.variant==="outlined",w=n["prepend-inner"]||e.prependInnerIcon,N=!!(e.clearable||n.clear),R=!!(n["append-inner"]||e.appendInnerIcon||N),F=n.label?n.label({label:e.label,props:{for:C.value}}):e.label;return t("div",q({class:["v-field",{"v-field--active":o.value,"v-field--appended":R,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":w,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--has-label":!!F,[`v-field--variant-${e.variant}`]:!0},s.value,u.value,f.value,d.value],style:[v.value,D.value],onClick:E},a),[t("div",{class:"v-field__overlay"},null),t($e,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:n.loader}),w&&t("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t(T,{key:"prepend-icon",onClick:a["onClick:prependInner"],icon:e.prependInnerIcon},null),(k=n["prepend-inner"])==null?void 0:k.call(n,V.value)]),t("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&c.value&&t(H,{key:"floating-label",ref:x,class:[p.value],floating:!0},{default:()=>[F]}),t(H,{ref:g,for:C.value},{default:()=>[F]}),(b=n.default)==null?void 0:b.call(n,{...V.value,props:{id:C.value,class:"v-field__input"},focus:y,blur:_})]),N&&t(Se,{key:"clear"},{default:()=>[ae(t("div",{class:"v-field__clearable"},[n.clear?n.clear():t(T,{onClick:O=>l("click:clear",O),icon:e.clearIcon},null)]),[[ce,e.dirty]])]}),R&&t("div",{key:"append",class:"v-field__append-inner"},[(B=n["append-inner"])==null?void 0:B.call(n,V.value),e.appendInnerIcon&&t(T,{key:"append-icon",onClick:a["onClick:appendInner"],icon:e.appendInnerIcon},null)]),t("div",{class:["v-field__outline",p.value]},[I&&t(Y,null,[t("div",{class:"v-field__outline__start"},null),c.value&&t("div",{class:"v-field__outline__notch"},[t(H,{ref:x,floating:!0},{default:()=>[F]})]),t("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&c.value&&t(H,{ref:x,floating:!0},{default:()=>[F]})])])}),{controlRef:S}}});function et(e){return ve(e,Object.keys(ye.props))}const tt=ee({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...fe({transition:{component:me,leaveAbsolute:!0,group:!0}})},setup(e,i){let{slots:a}=i;const l=r(()=>X(e.messages)),{textColorClasses:n,textColorStyles:s}=ue(r(()=>e.color));return z(()=>t(ge,{transition:e.transition,tag:"div",class:["v-messages",n.value],style:s.value},{default:()=>[e.active&&l.value.map((d,f)=>t("div",{class:"v-messages__message",key:`${f}-${l.value}`},[a.message?a.message({message:d}):d]))]})),{}}}),nt=Symbol.for("vuetify:form");function lt(){return we(nt,null)}const at=G({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function st(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:re(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:le();const l=te(e,"modelValue"),n=r(()=>{var v;return(v=e.validationValue)!=null?v:l.value}),s=lt(),d=P([]),f=P(!0),h=r(()=>!!(X(l.value===""?null:l.value).length||X(n.value===""?null:n.value).length)),y=r(()=>!!(e.disabled||s!=null&&s.isDisabled.value)),_=r(()=>!!(e.readonly||s!=null&&s.isReadonly.value)),o=r(()=>e.errorMessages.length?X(e.errorMessages):d.value),c=r(()=>e.error||o.value.length?!1:e.rules.length&&f.value?null:!0),m=P(!1),C=r(()=>({[`${i}--error`]:c.value===!1,[`${i}--dirty`]:h.value,[`${i}--disabled`]:y.value,[`${i}--readonly`]:_.value})),g=r(()=>{var v;return(v=e.name)!=null?v:L(a)});Fe(()=>{s==null||s.register(g.value,u,x,S,c)}),Pe(()=>{s==null||s.unregister(g.value)}),de(n,()=>{n.value!=null&&u()});function x(){S(),l.value=null}function S(){f.value=!0,d.value=[]}async function u(){const v=[];m.value=!0;for(const p of e.rules){if(v.length>=(e.maxErrors||1))break;const V=await(typeof p=="function"?p:()=>p)(n.value);if(V!==!0){if(typeof V!="string"){console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);continue}v.push(V)}}return d.value=v,m.value=!1,f.value=!1,d.value}return{errorMessages:o,isDirty:h,isDisabled:y,isReadonly:_,isPristine:f,isValid:c,isValidating:m,reset:x,resetValidation:S,validate:u,validationClasses:C}}const _e=G({id:String,appendIcon:K,prependIcon:K,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},...De(),...at()}),pe=ne()({name:"VInput",props:{..._e()},emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:a,slots:l,emit:n}=i;const{densityClasses:s}=Re(e),d=le(),f=r(()=>e.id||`input-${d}`),{errorMessages:h,isDirty:y,isDisabled:_,isReadonly:o,isPristine:c,isValid:m,isValidating:C,reset:g,resetValidation:x,validate:S,validationClasses:u}=st(e,"v-input",f),v=r(()=>({id:f,isDirty:y,isDisabled:_,isReadonly:o,isPristine:c,isValid:m,isValidating:C,reset:g,resetValidation:x,validate:S}));return z(()=>{var p,D,V,E,k;const b=!!(l.prepend||e.prependIcon),B=!!(l.append||e.appendIcon),I=!!((p=e.messages)!=null&&p.length||h.value.length),w=!e.hideDetails||e.hideDetails==="auto"&&I;return t("div",{class:["v-input",`v-input--${e.direction}`,s.value,u.value]},[b&&t("div",{key:"prepend",class:"v-input__prepend"},[e.prependIcon&&t(T,{key:"prepend-icon",onClick:a["onClick:prepend"],icon:e.prependIcon},null),(D=l.prepend)==null?void 0:D.call(l,v.value)]),l.default&&t("div",{class:"v-input__control"},[(V=l.default)==null?void 0:V.call(l,v.value)]),B&&t("div",{key:"append",class:"v-input__append"},[(E=l.append)==null?void 0:E.call(l,v.value),e.appendIcon&&t(T,{key:"append-icon",onClick:a["onClick:append"],icon:e.appendIcon},null)]),w&&t("div",{class:"v-input__details"},[t(tt,{active:I,messages:h.value.length>0?h.value:e.messages},{message:l.message}),(k=l.details)==null?void 0:k.call(l,v.value)])])}),{reset:g,resetValidation:x,validate:S}}});function it(e){return ve(e,Object.keys(pe.props))}const ot=ee({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...fe({transition:{component:me}})},setup(e,i){let{slots:a}=i;const l=r(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return z(()=>t(ge,{transition:e.transition},{default:()=>[ae(t("div",{class:"v-counter"},[a.default?a.default({counter:l.value,max:e.max,value:e.value}):l.value]),[[ce,e.active]])]})),{}}}),rt=["color","file","time","date","datetime-local","week","month"],oe=ne()({name:"VTextField",directives:{Intersect:Te},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},..._e(),...he()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:l,slots:n}=i;const s=te(e,"modelValue"),d=r(()=>{var u;return typeof e.counterValue=="function"?e.counterValue(s.value):((u=s.value)!=null?u:"").toString().length}),f=r(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function h(u,v){var p,D;!e.autofocus||!u||(p=v[0].target)==null||(D=p.focus)==null||D.call(p)}const y=P(),_=P(),o=P(!1),c=P(),m=r(()=>rt.includes(e.type)||e.persistentPlaceholder||o.value),C=r(()=>e.messages.length?e.messages:o.value||e.persistentHint?e.hint:"");function g(){if(c.value!==document.activeElement){var u;(u=c.value)==null||u.focus()}o.value||(o.value=!0)}function x(u){g(),l("click:control",u)}function S(u){u.stopPropagation(),g(),Ne(()=>{s.value="",l("click:clear",u)})}return z(()=>{const u=!!(n.counter||e.counter||e.counterValue),[v,p]=Me(a),[{modelValue:D,...V}]=it(e),[E]=et(e);return t(pe,q({ref:y,modelValue:s.value,"onUpdate:modelValue":k=>s.value=k,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":a["onClick:prepend"],"onClick:append":a["onClick:append"]},v,V,{messages:C.value}),{...n,default:k=>{let{id:b,isDisabled:B,isDirty:I,isReadonly:w,isValid:N}=k;return t(ye,q({ref:_,onMousedown:R=>{R.target!==c.value&&R.preventDefault()},"onClick:control":x,"onClick:clear":S,"onClick:prependInner":a["onClick:prependInner"],"onClick:appendInner":a["onClick:appendInner"],role:"textbox"},E,{id:b.value,active:m.value||I.value,dirty:I.value||e.dirty,focused:o.value,error:N.value===!1}),{...n,default:R=>{var F;let{props:{class:O,...Q}}=R;return t(Y,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),t("div",{class:O,onClick:W=>l("click:input",W),"data-no-activator":""},[(F=n.default)==null?void 0:F.call(n),ae(t("input",q({ref:c,"onUpdate:modelValue":W=>s.value=W,autofocus:e.autofocus,readonly:w.value,disabled:B.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:()=>o.value=!1},Q,p),null),[[Le,s.value],[Ee("intersect"),{handler:h},null,{once:!0}]])]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?()=>t(Y,null,[t("span",null,null),t(ot,{active:e.persistentCounter||o.value,value:d.value,max:f.value},n.counter)]):void 0})}),Ae({},y,_,c)}}),ut=A("h1",{class:"my-3",style:{color:"#546E7A"}},"\u6211\u7684\u4EFB\u52D9",-1),dt=A("thead",null,[A("tr",null,[A("th",{style:{"font-size":"24px"}},"\u4EFB\u52D9\u6E05\u55AE"),A("th")])],-1),ct={key:0},vt=A("td",{class:"text-center",colspan:"2",style:{"font-size":"22px"}},"\u6C92\u6709\u8CC7\u6599",-1),ft=[vt],mt={style:{"font-size":"22px"}},gt={key:1},ht={key:0},yt=J("mdi-check"),_t=J("mdi-undo"),pt={key:1},kt=J("mdi-pencil"),Ct=J("mdi-delete"),bt={__name:"ListView",setup(e){const i=P(""),a=o=>!!o,l=Ue(),{items:n}=ze(l),{addItem:s,delItem:d,editItem:f,confirmEditItem:h,cancelEditItem:y}=l,_=()=>{!a(i.value)||(s(i.value),i.value="")};return(o,c)=>(M(),se(Oe,{id:"list"},{default:$(()=>[t(ie,{cols:"12"},{default:$(()=>[ut]),_:1}),t(ie,{cols:"12"},{default:$(()=>[t(oe,{placeholder:"\u65B0\u589E\u4E00\u500B\u4EFB\u52D9",variant:"underlined",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=m=>i.value=m),"append-icon":"mdi-plus",rules:[a],"onClick:append":_,onKeydown:We(_,["enter"])},null,8,["modelValue","rules","onKeydown"]),t(Xe,null,{default:$(()=>[dt,A("tbody",null,[L(n).length===0?(M(),U("tr",ct,ft)):Ke("",!0),(M(!0),U(Y,null,je(L(n),(m,C)=>(M(),U("tr",null,[A("td",mt,[m.edit?(M(),se(oe,{key:0,modelValue:m.model,"onUpdate:modelValue":g=>m.model=g,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])):(M(),U("span",gt,He(m.name),1))]),A("td",null,[m.edit?(M(),U("span",ht,[t(j,{icon:"",variant:"plain",flat:"",color:"light-green accent-1",onClick:g=>L(h)(C)},{default:$(()=>[t(T,null,{default:$(()=>[yt]),_:1})]),_:2},1032,["onClick"]),t(j,{icon:"",variant:"plain",flat:"",color:"red",onClick:g=>L(y)(C)},{default:$(()=>[t(T,null,{default:$(()=>[_t]),_:1})]),_:2},1032,["onClick"])])):(M(),U("span",pt,[t(j,{icon:"",variant:"plain",flat:"",color:"green darken-4",onClick:g=>L(f)(C)},{default:$(()=>[t(T,null,{default:$(()=>[kt]),_:1})]),_:2},1032,["onClick"]),t(j,{icon:"",variant:"plain",flat:"",color:"red",onClick:g=>L(d)(C)},{default:$(()=>[t(T,null,{default:$(()=>[Ct]),_:1})]),_:2},1032,["onClick"])]))])]))),256))])]),_:1})]),_:1})]),_:1}))}};export{bt as default};
