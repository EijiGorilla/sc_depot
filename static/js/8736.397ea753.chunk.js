/*! For license information please see 8736.397ea753.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[8736],{18736:(e,t,n)=>{n.r(t),n.d(t,{CalciteColorPickerHexInput:()=>l,defineCustomElement:()=>a});var i=n(35174);const l=i.e,a=i.d},35174:(e,t,n)=>{n.d(t,{C:()=>p,D:()=>d,H:()=>x,O:()=>g,R:()=>v,S:()=>I,a:()=>y,b:()=>C,c:()=>m,d:()=>H,e:()=>k});var i=n(82108),l=n(91586),a=n(30577),o=n(39879),s=n(76527),r=n(67294),c=n(93073),h=n(79671),u=n(1788);const p={channel:"channel",channels:"channels",colorField:"color-field",colorFieldScope:"scope--color-field",colorMode:"color-mode",colorModeContainer:"color-mode-container",container:"container",control:"control",controlAndScope:"control-and-scope",controlSection:"control-section",deleteColor:"delete-color",header:"header",hexAndChannelsGroup:"hex-and-channels-group",hexOptions:"color-hex-options",hueScope:"scope--hue",hueSlider:"hue-slider",opacityScope:"scope--opacity",opacitySlider:"opacity-slider",preview:"preview",previewAndSliders:"preview-and-sliders",saveColor:"save-color",savedColor:"saved-color",savedColors:"saved-colors",savedColorsButtons:"saved-colors-buttons",savedColorsSection:"saved-colors-section",scope:"scope",section:"section",slider:"slider",sliders:"sliders",splitSection:"section--split"},d=(0,a.c)("#007AC2"),m="calcite-color-",v={r:255,g:255,b:255},x={h:360,s:100,v:100},C=x.h-1,g={min:0,max:100},y={s:{slider:{height:12,width:104},colorField:{height:80,width:160},thumb:{radius:10}},m:{slider:{height:12,width:204},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:12,width:384},colorField:{height:200,width:464},thumb:{radius:10}}},I=1,f="container",w="hex-input",b="opacity-input",S=(0,a.c)(),k=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=(0,i.lh)(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,n="#".concat(t),{allowEmpty:i,internalColor:a}=this,o=i&&!t,s=(0,l.j)(n);this.onHexInputChange(),o||(0,l.i)(n)&&s||(e.value=i&&!a?"":this.formatHexForInternalInput((0,l.r)(a.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:n,internalColor:i}=this;n&&!t||(e.value=n&&!i?"":this.formatOpacityForInternalInput(i))},this.onHexInputChange=()=>{let e=this.hexInputNode.value;if(e){const t=(0,l.n)(e,!1);if((0,l.i)(t)&&this.alphaChannel&&this.internalColor){const n=(0,l.n)(this.internalColor.hexa(),!0).slice(-2);e="".concat(t+n)}}this.internalSetValue(e,this.value)},this.onOpacityInputChange=()=>{const e=this.opacityInputNode;let t;if(e.value){var n;const i=(0,l.o)(Number(e.value));t=null===(n=this.internalColor)||void 0===n?void 0:n.alpha(i).hexa()}else t=e.value;this.internalSetValue(t,this.value)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:n,metaKey:i,shiftKey:a}=e,{alphaChannel:o,hexInputNode:s,internalColor:r,value:c}=this,{key:h}=e,u=e.composedPath();if("Tab"===h||"Enter"===h)return u.includes(s)?this.onHexInputChange():this.onOpacityInputChange(),void("Enter"===h&&e.preventDefault());const p="ArrowDown"===h||"ArrowUp"===h,d=this.value;if(p){if(!c)return this.internalSetValue(this.previousNonNullValue,d),void e.preventDefault();const t="ArrowUp"===h?1:-1,n=a?10:1;return this.internalSetValue((0,l.h)(this.nudgeRGBChannels(r,n*t,u.includes(s)?"rgb":"a"),o),d),void e.preventDefault()}const m=t||n||i,v=1===h.length,x=l.k.test(h);!v||m||x||e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");(0,l.i)(t)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=(0,l.n)((0,l.h)(S,this.alphaChannel),this.alphaChannel,!0),this.internalColor=S}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:n}=this;if(n){const e=(0,l.n)(n,t);(0,l.i)(e,t)&&this.internalSetValue(e,e,!1)}else e&&this.internalSetValue(null,null,!1)}componentWillLoad(){(0,s.a)(this)}componentDidLoad(){(0,s.s)(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:n,messages:l,scale:a,value:o}=this,s=this.formatHexForInternalInput(o),r=this.formatOpacityForInternalInput(n),c="l"===a?"m":"s";return(0,i.h)("div",{class:f},(0,i.h)("calcite-input-text",{class:w,label:(null===l||void 0===l?void 0:l.hex)||t,maxLength:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInternalInputTextBlur:this.onHexInputBlur,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",scale:c,value:s,ref:this.storeHexInputRef}),e?(0,i.h)("calcite-input-number",{class:b,key:"opacity-input",label:null===l||void 0===l?void 0:l.opacity,max:g.max,maxLength:3,min:g.min,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.onOpacityInputChange,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onKeyDown:this.onInputKeyDown,scale:c,suffixText:"%",value:r,ref:this.storeOpacityInputRef}):null)}async setFocus(){return await(0,s.c)(this),(0,o.k)(this.hexInputNode)}internalSetValue(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){const{alphaChannel:t}=this,i=(0,l.n)(e,t,t);if((0,l.i)(i,t)){const{internalColor:e}=this,o=(0,a.c)(i),s=(0,l.n)((0,l.h)(o,t),t),r=!e||s!==(0,l.n)((0,l.h)(e,t),t);return this.internalColor=o,this.previousNonNullValue=s,this.value=s,void(r&&n&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void(n&&this.calciteColorPickerHexInputChange.emit());this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?"".concat((0,l.b)(e.alpha())):""}nudgeRGBChannels(e,t,n){let i;const o=e.array(),s=o.slice(0,3);if("rgb"===n){i=[...s.map((e=>e+t)),this.alphaChannel?o[3]:void 0]}else{const n=(0,l.o)((0,l.b)(e.alpha())+t);i=[...s,n]}return(0,a.c)(i)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]}]);function H(){if("undefined"===typeof customElements)return;["calcite-color-picker-hex-input","calcite-icon","calcite-input-number","calcite-input-text","calcite-progress"].forEach((e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,k);break;case"calcite-icon":customElements.get(e)||(0,r.d)();break;case"calcite-input-number":customElements.get(e)||(0,c.d)();break;case"calcite-input-text":customElements.get(e)||(0,h.d)();break;case"calcite-progress":customElements.get(e)||(0,u.d)()}}))}H()}}]);
//# sourceMappingURL=8736.397ea753.chunk.js.map