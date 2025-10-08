import{j as S}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var P=Object.defineProperty,k=Object.defineProperties,z=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,i=(e,r,a)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,E=(e,r)=>{for(var a in r||(r={}))x.call(r,a)&&i(e,a,r[a]);if(c)for(var a of c(r))B.call(r,a)&&i(e,a,r[a]);return e},N=(e,r)=>k(e,z(r)),T=(e,r)=>{var a={};for(var o in e)x.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&c)for(var o of c(e))r.indexOf(o)<0&&B.call(e,o)&&(a[o]=e[o]);return a};function j(e){var r=e,{children:a}=r,o=T(r,["children"]);return S.jsx("button",N(E({className:"middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button"},o),{children:a}))}j.displayName="Button";const D={title:"Example/Button",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},t={args:{primary:!0,children:"BOTON",label:"Button"}},n={args:{label:"Button"}},s={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    children: "BOTON",
    label: "Button"
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,O,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(w=(O=l.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const I=["Primary","Secondary","Large","Small"];export{s as Large,t as Primary,n as Secondary,l as Small,I as __namedExportsOrder,D as default};
