import{e as p,r as i,o as f,c as u,a as l,b as t,w as e,F as h,d as o}from"./index-0edfd3a3.js";const m=l("h1",{class:"row-title"},"不同方向",-1),g={class:"row"},y=l("h1",{class:"row-title"},"切换触发模式",-1),w={class:"row"},k=l("h1",{class:"row-title"},"手动触发模式",-1),C={class:"row"},b={class:"row"},v=l("h1",{class:"row-title"},"延时触发",-1),B={class:"row"},Y={__name:"TooltipView",setup(V){const n=p(null),d=c=>{console.log(c?"提示框显示":"提示框隐藏")},r=()=>{n.value.show()},_=()=>{n.value.hide()};return(c,x)=>{const s=i("YCButton"),a=i("YCTooltip");return f(),u(h,null,[m,l("div",g,[t(a,{content:"this is a test",placement:"top",onVisibleChange:d},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[o("top")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"bottom"},{default:e(()=>[t(s,{type:"warning"},{default:e(()=>[o("bottom")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"left"},{default:e(()=>[t(s,{type:"danger"},{default:e(()=>[o("left")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"right"},{default:e(()=>[t(s,{type:"success"},{default:e(()=>[o("right")]),_:1})]),_:1})]),y,l("div",w,[t(a,{content:"this is a test",placement:"top",trigger:"click"},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[o("top")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"bottom",trigger:"click"},{default:e(()=>[t(s,{type:"warning"},{default:e(()=>[o("bottom")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"left",trigger:"click"},{default:e(()=>[t(s,{type:"danger"},{default:e(()=>[o("left")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"right",trigger:"click"},{default:e(()=>[t(s,{type:"success"},{default:e(()=>[o("right")]),_:1})]),_:1})]),k,l("div",C,[t(a,{content:"this is a test",placement:"right",manual:"",ref_key:"tooltipRef",ref:n},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[o("right")]),_:1})]),_:1},512)]),l("div",b,[t(s,{onClick:r},{default:e(()=>[o("打开提示框")]),_:1}),t(s,{onClick:_},{default:e(()=>[o("关闭提示框")]),_:1})]),v,l("div",B,[t(a,{content:"this is a test",placement:"top","open-delay":500},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[o("top")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"bottom","open-delay":500},{default:e(()=>[t(s,{type:"warning"},{default:e(()=>[o("bottom")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"left","open-delay":500,"close-delay":500},{default:e(()=>[t(s,{type:"danger"},{default:e(()=>[o("left")]),_:1})]),_:1}),t(a,{content:"this is a test",placement:"right","open-delay":500,"close-delay":500},{default:e(()=>[t(s,{type:"success"},{default:e(()=>[o("right")]),_:1})]),_:1})])],64)}}};export{Y as default};
