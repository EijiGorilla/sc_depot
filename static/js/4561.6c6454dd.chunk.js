/*! For license information please see 4561.6c6454dd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[4561],{54561:(t,e,i)=>{i.r(e),i.d(e,{CalciteTile:()=>o,defineCustomElement:()=>s});var n=i(29423);const o=n.T,s=n.d},76851:(t,e,i)=>{i.d(e,{L:()=>l,d:()=>r});var n=i(82108),o=i(39879),s=i(65079),c=i(76527),a=i(67294);const l=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.childElClickHandler=t=>{t.isTrusted||t.stopPropagation()},this.storeTagRef=t=>{this.childEl=t},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}connectedCallback(){(0,s.c)(this)}componentWillLoad(){(0,c.a)(this)}componentDidLoad(){(0,c.s)(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,s.d)(this)}render(){const{download:t,el:e}=this,i=(0,o.b)(e),s=this.href?"a":"span",c=(0,n.h)("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),a=(0,n.h)("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"}),l=s,r="span"===s?"link":null,d="span"===s?0:null;return(0,n.h)(n.xr,{role:"presentation"},(0,n.h)(l,{class:{[o.C.rtl]:"rtl"===i},download:"a"!==l||""!==t&&!t?null:t,href:"a"===l&&this.href,onClick:this.childElClickHandler,rel:"a"===l&&this.rel,role:r,tabIndex:d,target:"a"===l&&this.target,ref:this.storeTagRef},this.iconStart?c:null,(0,n.h)("slot",null),this.iconEnd?a:null))}clickHandler(t){this.disabled||t.isTrusted||this.childEl.click()}async setFocus(){await(0,c.c)(this),(0,o.k)(this.childEl)}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-ui-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-link",{disabled:[516],download:[520],href:[513],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],rel:[1],target:[1],setFocus:[64]},[[0,"click","clickHandler"]]]);function r(){if("undefined"===typeof customElements)return;["calcite-link","calcite-icon"].forEach((t=>{switch(t){case"calcite-link":customElements.get(t)||customElements.define(t,l);break;case"calcite-icon":customElements.get(t)||(0,a.d)()}}))}r()},29423:(t,e,i)=>{i.d(e,{T:()=>h,d:()=>u});var n=i(82108),o=i(84343),s=i(39879),c=i(65079),a=i(67294),l=i(76851);const r="content-start",d="content-end",h=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.hidden=!1,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1}connectedCallback(){(0,o.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this)}componentDidRender(){(0,c.u)(this)}renderTile(){const{icon:t,el:e,heading:i,description:o,iconFlipRtl:c}=this,a=i&&t&&!o,l=a?{height:"64px",width:"64px"}:void 0;return(0,n.h)("div",{class:{container:!0,"large-visual":a}},t&&(0,n.h)("div",{class:"icon"},(0,n.h)("calcite-icon",{flipRtl:c,icon:t,scale:"l",style:l})),(0,n.h)("div",{class:"content-container"},(0,s.g)(e,r)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:r})):null,(0,n.h)("div",{class:"content"},i&&(0,n.h)("div",{class:"heading"},i),o&&(0,n.h)("div",{class:"description"},o)),(0,s.g)(e,d)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:d})):null))}render(){return(0,n.h)(n.FK,null,this.href?(0,n.h)("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tile",{active:[516],description:[513],disabled:[516],embed:[516],focused:[516],heading:[513],hidden:[516],href:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"]}]);function u(){if("undefined"===typeof customElements)return;["calcite-tile","calcite-icon","calcite-link"].forEach((t=>{switch(t){case"calcite-tile":customElements.get(t)||customElements.define(t,h);break;case"calcite-icon":customElements.get(t)||(0,a.d)();break;case"calcite-link":customElements.get(t)||(0,l.d)()}}))}u()}}]);
//# sourceMappingURL=4561.6c6454dd.chunk.js.map