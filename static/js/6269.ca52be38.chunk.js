/*! For license information please see 6269.ca52be38.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[6269],{46269:(e,t,n)=>{n.d(t,{P:()=>W,S:()=>q,d:()=>$});var a=n(95146),o=n(39879),i=n(65079),s=n(76527),l=n(6676),c=n(9185),r=n(27882),d=n(62785),h=n(76988),p=n(24192),g=n(48897),f=n(67294),m=n(26964),u=n(53794),b=n(43901);const v="action-bar-container",C="container",x="content-bottom",S="content-top",y="header",k="header-container",A="header-container--border-end",w="heading",z="description",H="header-content",E="header-actions",F="header-actions--end",P="header-actions--start",B="content-wrapper",T="fab-container",M="footer",L="footer-content",D="footer-actions",O="footer-start",I="footer-end",j="close",_="collapse",N="x",R="ellipsis",K="chevron-down",U="chevron-up",q={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},W=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,a.lh)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.lh)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.lh)(this,"calcitePanelScroll",6),this.resizeObserver=(0,l.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;if(!e||"number"!==typeof e.scrollHeight||"number"!==typeof e.offsetHeight)return;e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch(t){return void requestAnimationFrame((()=>{this.closed=!1}))}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,o.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,o.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,o.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,o.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,o.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,o.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,o.d)(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=(0,o.d)(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=(0,o.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,o.d)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,o.d)(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,o.d)(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{(0,o.s)(e)?.map((e=>{"CALCITE-ALERT"===e.nodeName&&(e.embedded=!0)}))},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuFlipPlacements=void 0,this.menuOpen=!1,this.menuPlacement=p.b,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){(0,d.c)(this),(0,h.c)(this)}async componentWillLoad(){(0,s.s)(this),this.isClosed=this.closed,await(0,h.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,i.u)(this)}disconnectedCallback(){(0,d.d)(this),(0,h.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,o.f)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:o}=this,i=e?(0,a.h)(r.H,{class:w,level:t},e):null,s=n?(0,a.h)("span",{class:z},n):null;return o||!i&&!s?null:(0,a.h)("div",{class:H,key:"header-content"},i,s)}renderActionBar(){return(0,a.h)("div",{class:v,hidden:!this.hasActionBar},(0,a.h)("slot",{name:q.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:H,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:q.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[P]:!0,[E]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:q.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:n,collapsed:i,collapseDirection:s,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,p=[K,U];"up"===s&&p.reverse();const g=l?(0,a.h)("calcite-action",{"aria-expanded":(0,o.t)(!i),"aria-label":r,icon:i?p[0]:p[1],id:_,onClick:this.collapse,scale:this.scale,text:r,title:i?d:r}):null,f=n?(0,a.h)("calcite-action",{"aria-label":h,icon:N,id:j,onClick:this.handleUserClose,scale:this.scale,text:h,title:h}):null,m=(0,a.h)("slot",{name:q.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),u=e||g||f||c;return(0,a.h)("div",{class:{[F]:!0,[E]:!0},hidden:!u,key:"header-actions-end"},m,this.renderMenu(),g,f)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n,menuFlipPlacements:o,menuPlacement:i}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:o??["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,overlayPositioning:this.overlayPositioning,placement:i},(0,a.h)("calcite-action",{icon:R,scale:this.scale,slot:c.S.trigger,text:t.options}),(0,a.h)("slot",{name:q.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:o,collapsible:i,hasMenuItems:s,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||n||i||o||s;return this.showHeaderContent=r,(0,a.h)("header",{class:y,hidden:!(r||l)},(0,a.h)("div",{class:{[k]:!0,[A]:l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:t,hasFooterContent:n,hasFooterActions:o}=this,i=t||e||n||o;return(0,a.h)("footer",{class:M,hidden:!i},(0,a.h)("div",{class:L,hidden:!n},(0,a.h)("slot",{name:q.footer,onSlotchange:this.handleFooterSlotChange})),(0,a.h)("div",{class:O,hidden:n||!t},(0,a.h)("slot",{name:q.footerStart,onSlotchange:this.handleFooterStartSlotChange})),(0,a.h)("div",{class:I,hidden:n||!e},(0,a.h)("slot",{name:q.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),(0,a.h)("div",{class:D,hidden:n||!o},(0,a.h)("slot",{key:"footer-actions-slot",name:q.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return(0,a.h)("div",{class:B,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderContentBottom(){return(0,a.h)("div",{class:x,hidden:!this.hasContentBottom},(0,a.h)("slot",{name:q.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return(0,a.h)("div",{class:S,hidden:!this.hasContentTop},(0,a.h)("slot",{name:q.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return(0,a.h)("div",{class:T,hidden:!this.hasFab},(0,a.h)("slot",{name:q.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,isClosed:n}=this,s=(0,a.h)("article",{key:"0f439dffdca536eb6973ac386b0566091249aee3","aria-busy":(0,o.t)(t),class:C,hidden:n,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),(0,a.h)("slot",{key:"alerts",name:q.alerts,onSlotchange:this.handleAlertsSlotChange}));return(0,a.h)(a.xr,{key:"6e5baec07ecb356871dea038ebc2d5ee2d8ed54f",onKeyDown:this.panelKeyDownHandler},(0,a.h)(i.I,{key:"924cda1799b359f1bb3fb119cebfff5a7349b72d",disabled:e},t?(0,a.h)("calcite-scrim",{loading:t}):null,s))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuFlipPlacements:[16],menuOpen:[516,"menu-open"],menuPlacement:[513,"menu-placement"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function $(){if("undefined"===typeof customElements)return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,W);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,c.d)();break;case"calcite-icon":customElements.get(e)||(0,f.d)();break;case"calcite-loader":customElements.get(e)||(0,m.d)();break;case"calcite-popover":customElements.get(e)||(0,u.d)();break;case"calcite-scrim":customElements.get(e)||(0,b.d)()}}))}$()}}]);
//# sourceMappingURL=6269.ca52be38.chunk.js.map