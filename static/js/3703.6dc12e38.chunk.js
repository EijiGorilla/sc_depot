/*! For license information please see 3703.6dc12e38.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[3703],{43703:(e,t,i)=>{i.r(t),i.d(t,{CalciteCard:()=>C,defineCustomElement:()=>z});var a=i(82108),s=i(84343),n=i(39879),l=i(62785),c=i(76988),o=i(98110),r=i(4301),d=i(26964);const h="container",u="header",m="footer",g="checkbox-wrapper",b="thumbnail-wrapper",p="thumbnail",f="title",v="subtitle",k="footer-start",x="footer-end",w=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteCardSelect=(0,a.lh)(this,"calciteCardSelect",6),this.cardSelectClick=()=>{this.selectCard()},this.cardSelectKeyDown=e=>{switch(e.key){case" ":case"Enter":this.selectCard(),e.preventDefault()}},this.loading=!1,this.selected=!1,this.selectable=!1,this.thumbnailPosition="block-start",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}connectedCallback(){(0,s.c)(this),(0,l.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,l.d)(this),(0,c.d)(this)}async componentWillLoad(){await(0,c.s)(this)}render(){const e=this.thumbnailPosition.startsWith("inline"),t=this.thumbnailPosition.endsWith("start");return(0,a.h)("div",{class:{"calcite-card-container":!0,inline:e}},this.loading?(0,a.h)("div",{"aria-live":"polite",class:"calcite-card-loader-container"},(0,a.h)("calcite-loader",{label:this.messages.loading})):null,t&&this.renderThumbnail(),(0,a.h)("section",{"aria-busy":(0,n.t)(this.loading),class:{[h]:!0}},this.selectable?this.renderCheckbox():null,this.renderHeader(),(0,a.h)("div",{class:"card-content"},(0,a.h)("slot",null)),this.renderFooter()),!t&&this.renderThumbnail())}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}selectCard(){this.selected=!this.selected,this.calciteCardSelect.emit()}renderThumbnail(){return(0,n.g)(this.el,p)?(0,a.h)("section",{class:b},(0,a.h)("slot",{name:p})):null}renderCheckbox(){return(0,a.h)("calcite-label",{class:g,onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},(0,a.h)("calcite-checkbox",{checked:this.selected,label:this.messages.select}))}renderHeader(){const{el:e}=this,t=(0,n.g)(e,f),i=(0,n.g)(e,v);return t||i?(0,a.h)("header",{class:u},(0,a.h)("slot",{name:f}),(0,a.h)("slot",{name:v})):null}renderFooter(){const{el:e}=this,t=(0,n.g)(e,k),i=(0,n.g)(e,x);return t||i?(0,a.h)("footer",{class:m},(0,a.h)("slot",{name:k}),(0,a.h)("slot",{name:x})):null}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-card",{loading:[516],selected:[1540],selectable:[516],thumbnailPosition:[513,"thumbnail-position"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32]}]);function y(){if("undefined"===typeof customElements)return;["calcite-card","calcite-checkbox","calcite-label","calcite-loader"].forEach((e=>{switch(e){case"calcite-card":customElements.get(e)||customElements.define(e,w);break;case"calcite-checkbox":customElements.get(e)||(0,o.d)();break;case"calcite-label":customElements.get(e)||(0,r.d)();break;case"calcite-loader":customElements.get(e)||(0,d.d)()}}))}y();const C=w,z=y},98110:(e,t,i)=>{i.d(t,{C:()=>h,d:()=>u});var a=i(82108),s=i(39879),n=i(13349),l=i(66418),c=i(65079),o=i(15520),r=i(22943),d=i(76527);const h=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=(0,a.lh)(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=(0,a.lh)(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=(0,a.lh)(this,"calciteInternalCheckboxFocus",6),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=e=>{(0,o.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()},this.checked=!1,this.disabled=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}async setFocus(){var e;await(0,d.c)(this),null===(e=this.toggleEl)||void 0===e||e.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||"calcite-checkbox-".concat((0,l.g)()),(0,c.c)(this),(0,r.c)(this),(0,n.c)(this)}disconnectedCallback(){(0,c.d)(this),(0,r.d)(this),(0,n.d)(this)}componentWillLoad(){(0,d.a)(this)}componentDidLoad(){(0,d.s)(this)}componentDidRender(){(0,c.u)(this)}render(){return(0,a.h)(a.xr,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,a.h)("div",{"aria-checked":(0,s.t)(this.checked),"aria-label":(0,r.g)(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,role:"checkbox",tabIndex:this.disabled?void 0:0,ref:e=>this.toggleEl=e},(0,a.h)("svg",{"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},(0,a.h)("path",{d:this.getPath()})),(0,a.h)("slot",null)),(0,a.h)(n.H,{component:this}))}get el(){return this}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle::after{content:"";inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute;transform:translateX(-50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],form:[513],guid:[1537],hovered:[516],indeterminate:[1540],label:[1],name:[513],required:[516],scale:[513],value:[8],setFocus:[64]}]);function u(){if("undefined"===typeof customElements)return;["calcite-checkbox"].forEach((e=>{if("calcite-checkbox"===e)customElements.get(e)||customElements.define(e,h)}))}u()},4301:(e,t,i)=>{i.d(t,{L:()=>l,d:()=>c});var a=i(82108),s=i(22943);const n="container",l=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=(0,a.lh)(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}connectedCallback(){document.dispatchEvent(new CustomEvent(s.l))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(s.a))}render(){return(0,a.h)(a.xr,{onClick:this.labelClickHandler},(0,a.h)("div",{class:n},(0,a.h)("slot",null)))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]}]);function c(){if("undefined"===typeof customElements)return;["calcite-label"].forEach((e=>{if("calcite-label"===e)customElements.get(e)||customElements.define(e,l)}))}c()}}]);
//# sourceMappingURL=3703.6dc12e38.chunk.js.map