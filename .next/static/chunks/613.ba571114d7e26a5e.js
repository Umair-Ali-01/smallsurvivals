"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{613:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var i=n(5944),o=n(7294),r=n(7357),a=n(6886),l=n(6066),s=n(9520),c=n(5861),u=n(948),d=n(2734),p=n(1518),m=n(8396),h=n(1023),g=n(3619),v=[{id:1,cover:"/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg",title:"Android Development from Zeo to Hero",rating:5,ratingCount:8,price:25,category:"Beginner"},{id:2,cover:"/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg",title:"UI/UX Complete Guide",rating:5,ratingCount:15,price:20,category:"Intermediate"},{id:3,cover:"/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg",title:"Mastering Data Modeling Fundamentals",rating:4,ratingCount:7,price:30,category:"Beginner"},{id:4,cover:"/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg",title:"The Complete Guide Docker and Kubernetes",rating:4,ratingCount:12,price:30,category:"Intermediate"},{id:5,cover:"/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg",title:"Modern React with MUI & Redux",rating:4,ratingCount:32,price:35,category:"Intermediate"},{id:6,cover:"/images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg",title:"Ethical Hacking Bootcamp Zero to Mastery",rating:5,ratingCount:14,price:35,category:"Beginner"},{id:7,cover:"/images/courses/grovemade-RvPDe41lYBA-unsplash.jpg",title:"Adobe Lightroom For Beginners: Complete Photo Editing",rating:4,ratingCount:6,price:25,category:"Beginner"}],y=n(5675),f=n.n(y),b=n(3366),Z=n(7462),x=n(6010);var C={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},w=n(4780),S=n(8216),A=n(8785),j=n(2627),F=n(8791),R=n(1705),k=n(8169),M=n(5893),z=(0,k.Z)((0,M.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),L=(0,k.Z)((0,M.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),O=n(1657),V=n(1588),B=n(4867);function H(e){return(0,B.Z)("MuiRating",e)}var E=(0,V.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);const I=["value"],P=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function T(e,t){if(null==e)return e;const n=Math.round(e/t)*t;return Number(n.toFixed(function(e){const t=e.toString().split(".")[1];return t?t.length:0}(t)))}const N=(0,u.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${E.visuallyHidden}`]:t.visuallyHidden},t.root,t[`size${(0,S.Z)(n.size)}`],n.readOnly&&t.readOnly]}})((({theme:e,ownerState:t})=>(0,Z.Z)({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${E.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${E.focusVisible} .${E.iconActive}`]:{outline:"1px solid #999"},[`& .${E.visuallyHidden}`]:C},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(30)},t.readOnly&&{pointerEvents:"none"}))),X=(0,u.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},t)=>[t.label,e.emptyValueFocused&&t.labelEmptyValueActive]})((({ownerState:e})=>(0,Z.Z)({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}))),$=(0,u.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.iconEmpty&&t.iconEmpty,n.iconFilled&&t.iconFilled,n.iconHover&&t.iconHover,n.iconFocus&&t.iconFocus,n.iconActive&&t.iconActive]}})((({theme:e,ownerState:t})=>(0,Z.Z)({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},t.iconActive&&{transform:"scale(1.2)"},t.iconEmpty&&{color:(e.vars||e).palette.action.disabled}))),D=(0,u.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>(0,u.Dz)(e)&&"iconActive"!==e,overridesResolver:(e,t)=>{const{iconActive:n}=e;return[t.decimal,n&&t.iconActive]}})((({iconActive:e})=>(0,Z.Z)({position:"relative"},e&&{transform:"scale(1.2)"})));function U(e){const t=(0,b.Z)(e,I);return(0,M.jsx)("span",(0,Z.Z)({},t))}function _(e){const{classes:t,disabled:n,emptyIcon:i,focus:r,getLabelText:a,highlightSelectedOnly:l,hover:s,icon:c,IconContainerComponent:u,isActive:d,itemValue:p,labelProps:m,name:h,onBlur:g,onChange:v,onClick:y,onFocus:f,readOnly:b,ownerState:C,ratingValue:w,ratingValueRounded:S}=e,j=l?p===w:p<=w,F=p<=s,R=p<=r,k=p===S,z=(0,A.Z)(),L=(0,M.jsx)($,{as:u,value:p,className:(0,x.Z)(t.icon,j?t.iconFilled:t.iconEmpty,F&&t.iconHover,R&&t.iconFocus,d&&t.iconActive),ownerState:(0,Z.Z)({},C,{iconEmpty:!j,iconFilled:j,iconHover:F,iconFocus:R,iconActive:d}),children:i&&!j?i:c});return b?(0,M.jsx)("span",(0,Z.Z)({},m,{children:L})):(0,M.jsxs)(o.Fragment,{children:[(0,M.jsxs)(X,(0,Z.Z)({ownerState:(0,Z.Z)({},C,{emptyValueFocused:void 0}),htmlFor:z},m,{children:[L,(0,M.jsx)("span",{className:t.visuallyHidden,children:a(p)})]})),(0,M.jsx)("input",{className:t.visuallyHidden,onFocus:f,onBlur:g,onChange:v,onClick:y,disabled:n,value:p,id:z,type:"radio",name:h,checked:k})]})}const G=(0,M.jsx)(z,{fontSize:"inherit"}),W=(0,M.jsx)(L,{fontSize:"inherit"});function Y(e){return`${e} Star${1!==e?"s":""}`}var Q=o.forwardRef((function(e,t){const n=(0,O.Z)({name:"MuiRating",props:e}),{className:i,defaultValue:r=null,disabled:a=!1,emptyIcon:l=W,emptyLabelText:s="Empty",getLabelText:c=Y,highlightSelectedOnly:u=!1,icon:p=G,IconContainerComponent:m=U,max:h=5,name:g,onChange:v,onChangeActive:y,onMouseLeave:f,onMouseMove:C,precision:k=1,readOnly:z=!1,size:L="medium",value:V}=n,B=(0,b.Z)(n,P),E=(0,A.Z)(g),[I,$]=(0,j.Z)({controlled:V,default:r,name:"Rating"}),Q=T(I,k),q=(0,d.Z)(),[{hover:J,focus:K},ee]=o.useState({hover:-1,focus:-1});let te=Q;-1!==J&&(te=J),-1!==K&&(te=K);const{isFocusVisibleRef:ne,onBlur:ie,onFocus:oe,ref:re}=(0,F.Z)(),[ae,le]=o.useState(!1),se=o.useRef(),ce=(0,R.Z)(re,se,t),ue=e=>{let t=""===e.target.value?null:parseFloat(e.target.value);-1!==J&&(t=J),$(t),v&&v(e,t)},de=e=>{0===e.clientX&&0===e.clientY||(ee({hover:-1,focus:-1}),$(null),v&&parseFloat(e.target.value)===Q&&v(e,null))},pe=e=>{oe(e),!0===ne.current&&le(!0);const t=parseFloat(e.target.value);ee((e=>({hover:e.hover,focus:t})))},me=e=>{if(-1!==J)return;ie(e),!1===ne.current&&le(!1);ee((e=>({hover:e.hover,focus:-1})))},[he,ge]=o.useState(!1),ve=(0,Z.Z)({},n,{defaultValue:r,disabled:a,emptyIcon:l,emptyLabelText:s,emptyValueFocused:he,focusVisible:ae,getLabelText:c,icon:p,IconContainerComponent:m,max:h,precision:k,readOnly:z,size:L}),ye=(e=>{const{classes:t,size:n,readOnly:i,disabled:o,emptyValueFocused:r,focusVisible:a}=e,l={root:["root",`size${(0,S.Z)(n)}`,o&&"disabled",a&&"focusVisible",i&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[r&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,w.Z)(l,H,t)})(ve);return(0,M.jsxs)(N,(0,Z.Z)({ref:ce,onMouseMove:e=>{C&&C(e);const t=se.current,{right:n,left:i}=t.getBoundingClientRect(),{width:o}=t.firstChild.getBoundingClientRect();let r;r="rtl"===q.direction?(n-e.clientX)/(o*h):(e.clientX-i)/(o*h);let a=T(h*r+k/2,k);a=function(e,t,n){return e<t?t:e>n?n:e}(a,k,h),ee((e=>e.hover===a&&e.focus===a?e:{hover:a,focus:a})),le(!1),y&&J!==a&&y(e,a)},onMouseLeave:e=>{f&&f(e);ee({hover:-1,focus:-1}),y&&-1!==J&&y(e,-1)},className:(0,x.Z)(ye.root,i),ownerState:ve,role:z?"img":null,"aria-label":z?c(te):null},B,{children:[Array.from(new Array(h)).map(((e,t)=>{const n=t+1,i={classes:ye,disabled:a,emptyIcon:l,focus:K,getLabelText:c,highlightSelectedOnly:u,hover:J,icon:p,IconContainerComponent:m,name:E,onBlur:me,onChange:ue,onClick:de,onFocus:pe,ratingValue:te,ratingValueRounded:Q,readOnly:z,ownerState:ve},o=n===Math.ceil(te)&&(-1!==J||-1!==K);if(k<1){const e=Array.from(new Array(1/k));return(0,M.jsx)(D,{className:(0,x.Z)(ye.decimal,o&&ye.iconActive),ownerState:ve,iconActive:o,children:e.map(((t,o)=>{const r=T(n-1+(o+1)*k,k);return(0,M.jsx)(_,(0,Z.Z)({},i,{isActive:!1,itemValue:r,labelProps:{style:e.length-1===o?{}:{width:r===te?(o+1)*k*100+"%":"0%",overflow:"hidden",position:"absolute"}}}),r)}))},n)}return(0,M.jsx)(_,(0,Z.Z)({},i,{isActive:o,itemValue:n}),n)})),!z&&!a&&(0,M.jsxs)(X,{className:(0,x.Z)(ye.label,ye.labelEmptyValue),ownerState:ve,children:[(0,M.jsx)("input",{className:ye.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:null==Q,onFocus:()=>ge(!0),onBlur:()=>ge(!1),onChange:ue}),(0,M.jsx)("span",{className:ye.visuallyHidden,children:s})]})]}))})),q=n(6239);var J=function(e){var t,n,o,a=e.item;return(0,i.tZ)(r.Z,{sx:{px:1,py:4},children:(0,i.BX)(r.Z,{sx:{p:2,backgroundColor:"background.paper",borderRadius:4,transition:function(e){return e.transitions.create(["box-shadow"])},"&:hover":(t={boxShadow:2},n="& .".concat(q.Z.root),o={backgroundColor:"primary.main",color:"primary.contrastText",boxShadow:2},n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t)},children:[(0,i.tZ)(r.Z,{sx:{lineHeight:0,overflow:"hidden",borderRadius:3,mb:2},children:(0,i.tZ)(f(),{src:a.cover,width:760,height:760,alt:"Course "+a.id})}),(0,i.BX)(r.Z,{sx:{mb:2},children:[(0,i.tZ)(c.Z,{component:"h2",variant:"h5",sx:{mb:2,height:56,overflow:"hidden",fontSize:"1.2rem"},children:a.title}),(0,i.BX)(r.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.tZ)(Q,{name:"rating-course",value:a.rating,max:5,sx:{color:"#ffce31",mr:1},readOnly:!0}),(0,i.BX)(c.Z,{component:"span",variant:"h5",children:["(",a.ratingCount,")"]})]})]}),(0,i.BX)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.BX)(r.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.tZ)(c.Z,{variant:"h5",color:"primary.main",children:"$"+a.price}),(0,i.tZ)(c.Z,{variant:"h6",children:"/ course"})]}),(0,i.tZ)(p.Z,{color:"primary",sx:{"&:hover":{backgroundColor:"primary.main",color:"primary.contrastText"}},children:(0,i.tZ)(g.Z,{})})]})]})})};function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){K(e,t,n[t])}))}return e}var te=function(e){var t=e.onClick,n=e.type,o=e.className;return(0,i.tZ)(p.Z,{sx:{backgroundColor:"background.paper",color:"primary.main","&:hover":{backgroundColor:"primary.main",color:"primary.contrastText"},bottom:{xs:"-70px !important",md:"-28px !important"},left:"unset !important",right:"prev"===n?"60px !important":"0 !important",zIndex:10,boxShadow:1},disableRipple:!0,color:"inherit",onClick:t,className:o,children:"next"===n?(0,i.tZ)(g.Z,{sx:{fontSize:22}}):(0,i.tZ)(h.Z,{sx:{fontSize:22}})})},ne=(0,u.ZP)("ul")((function(e){var t=e.theme;return{"&.slick-dots":{position:"absolute",left:0,bottom:-20,paddingLeft:t.spacing(1),textAlign:"left","& li":{marginRight:t.spacing(2),"&.slick-active>div":{backgroundColor:t.palette.primary.main}}}}})),ie=function(){var e=(0,d.Z)().breakpoints,t={infinite:!0,autoplay:!0,speed:300,slidesToShow:(0,m.Z)(e.down("md"))?1:3,slidesToScroll:1,prevArrow:(0,i.tZ)(te,{type:"prev"}),nextArrow:(0,i.tZ)(te,{type:"next"}),dots:!0,appendDots:function(e){return(0,i.tZ)(ne,{children:e})},customPaging:function(){return(0,i.tZ)(r.Z,{sx:{height:8,width:30,backgroundColor:"divider",display:"inline-block",borderRadius:4}})}};return(0,i.tZ)(r.Z,{id:"popular-course",sx:{pt:{xs:6,md:8},pb:14,backgroundColor:"background.default"},children:(0,i.tZ)(s.Z,{maxWidth:"lg",children:(0,i.BX)(a.ZP,{container:!0,spacing:2,children:[(0,i.tZ)(a.ZP,{item:!0,xs:12,md:3,children:(0,i.tZ)(r.Z,{sx:{height:"100%",width:{xs:"100%",md:"90%"},display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"}},children:(0,i.tZ)(c.Z,{variant:"h1",sx:{mt:{xs:0,md:-5},fontSize:{xs:30,md:48}},children:"Most Popular Courses"})})}),(0,i.tZ)(a.ZP,{item:!0,xs:12,md:9,children:(0,i.tZ)(l.Z,ee({},t,{children:v.map((function(e){return(0,i.tZ)(J,{item:e},String(e.id))}))}))})]})})})}}}]);