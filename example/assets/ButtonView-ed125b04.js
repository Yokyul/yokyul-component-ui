import{e as i,r as d,o as c,c as r,a as o,b as t,w as a,F as _,d as l}from"./index-0edfd3a3.js";const u=o("h1",{class:"row-title"},"普通展示",-1),p={class:"row"},f=o("h1",{class:"row-title"},"朴素按钮",-1),y={class:"row"},g=o("h1",{class:"row-title"},"圆角按钮",-1),h={class:"row"},w=o("h1",{class:"row-title"},"禁用状态",-1),m={class:"row"},b=o("h1",{class:"row-title"},"等待状态",-1),v={class:"row"},B=o("h1",{class:"row-title"},"图标按钮",-1),k={class:"row"},C=o("h1",{class:"row-title"},"不同尺寸的按钮",-1),x={class:"row"},z=o("h1",{class:"row-title"},"圆形按钮",-1),V={class:"row"},N=o("h1",{class:"row-title"},"按钮事件",-1),F={class:"row"},T={__name:"ButtonView",setup(R){const s=i(null);function n(){console.log("点击按钮",s.value.ref)}return(Y,E)=>{const e=d("YCButton");return c(),r(_,null,[u,o("div",p,[t(e,null,{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary"},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info"},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success"},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning"},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger"},{default:a(()=>[l("危险按钮")]),_:1})]),f,o("div",y,[t(e,{plain:""},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",plain:""},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",plain:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",plain:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",plain:""},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",plain:""},{default:a(()=>[l("危险按钮")]),_:1})]),g,o("div",h,[t(e,{round:""},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",round:""},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",round:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",plain:"",round:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",plain:"",round:""},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",plain:"",round:""},{default:a(()=>[l("危险按钮")]),_:1})]),w,o("div",m,[t(e,{disabled:""},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",disabled:""},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",disabled:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",disabled:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",disabled:""},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",disabled:""},{default:a(()=>[l("危险按钮")]),_:1})]),b,o("div",v,[t(e,{loading:""},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",loading:""},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",loading:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",loading:"",round:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",loading:"",round:""},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",loading:"",round:""},{default:a(()=>[l("危险按钮")]),_:1})]),B,o("div",k,[t(e,{icon:"house"},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",icon:"gear"},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",icon:"folder",plain:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",icon:"bug",plain:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",icon:"code",round:""},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",icon:"cube",round:""},{default:a(()=>[l("危险按钮")]),_:1})]),C,o("div",x,[t(e,{icon:"house",size:"small"},{default:a(()=>[l("默认按钮")]),_:1}),t(e,{type:"primary",icon:"gear",size:"small"},{default:a(()=>[l("主要按钮")]),_:1}),t(e,{type:"info",icon:"folder",plain:""},{default:a(()=>[l("信息按钮")]),_:1}),t(e,{type:"success",icon:"bug",plain:""},{default:a(()=>[l("成功按钮")]),_:1}),t(e,{type:"warning",icon:"code",plain:"",size:"large"},{default:a(()=>[l("警告按钮")]),_:1}),t(e,{type:"danger",icon:"cube",plain:"",size:"large"},{default:a(()=>[l("危险按钮")]),_:1})]),z,o("div",V,[t(e,{type:"danger",circle:""},{default:a(()=>[l("验")]),_:1}),t(e,{type:"primary",icon:"gear",circle:""}),t(e,{type:"info",icon:"folder",circle:"",plain:""}),t(e,{type:"success",icon:"bug",circle:"",plain:""}),t(e,{type:"warning",icon:"code",circle:"",disabled:""}),t(e,{type:"danger",icon:"cube",circle:"",disabled:""})]),N,o("div",F,[t(e,{type:"primary",onClick:n,ref_key:"btnRef",ref:s},{default:a(()=>[l("主要按钮")]),_:1},512)])],64)}}};export{T as default};
