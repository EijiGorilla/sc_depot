/*! For license information please see 9671.a19d7061.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[9671],{79671:(e,t,i)=>{i.d(t,{I:()=>z,d:()=>C});var n=i(82108),s=i(39879),l=i(13349),a=i(65079),o=i(22943),r=i(76527),c=i(62785),d=i(6676),u=i(76988),h=i(80416),p=i(67294),m=i(1788);const b="loader",v="clear-button",g="editing-enabled",f="inline-child",x="icon",y="prefix",k="suffix",I="element-wrapper",w="wrapper",E="action-wrapper",V="action",z=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalInputTextFocus=(0,n.lh)(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=(0,n.lh)(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=(0,n.lh)(this,"calciteInputTextInput",7),this.calciteInputTextChange=(0,n.lh)(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=(0,d.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===e.key&&(this.clearInputTextValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,l.s)(this)&&e.preventDefault())},this.clearInputTextValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=e=>{if(this.disabled)return;const t=(0,s.g)(this.el,"action");e.target!==t&&this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputTextKeyDownHandler=e=>{this.disabled||this.readOnly||"Enter"===e.key&&this.emitChangeIfUserModified()},this.hiddenInputChangeHandler=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setInputValue=e=>{this.childEl&&(this.childEl.value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=e},this.setPreviousValue=e=>{this.previousValue=e},this.setValue=e=>{let{committing:t=!1,nativeEvent:i,origin:n,previousValue:s,value:l}=e;if(this.setPreviousValue(null!==s&&void 0!==s?s:this.value),this.previousValueOrigin=n,this.userChangedValue="user"===n&&l!==this.value,this.value=l,"direct"===n&&(this.setInputValue(l),this.setPreviousEmittedValue(l)),i){this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:t&&this.emitChangeIfUserModified()}},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.form=void 0,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.inputMode="text",this.enterKeyHint=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||this.setValue({origin:"direct",previousValue:t,value:e||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,s.h)({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,a.c)(this),(0,c.c)(this),(0,u.c)(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),(0,o.c)(this),(0,l.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){var e;(0,a.d)(this),(0,o.d)(this),(0,l.d)(this),(0,c.d)(this),(0,u.d)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){(0,r.a)(this),this.requestedIcon=(0,s.h)({},this.icon,"text"),await(0,u.s)(this)}componentDidLoad(){(0,r.s)(this)}componentDidRender(){(0,a.u)(this)}async setFocus(){var e;await(0,r.c)(this),null===(e=this.childEl)||void 0===e||e.focus()}async selectText(){var e;null===(e=this.childEl)||void 0===e||e.select()}onLabelClick(){this.setFocus()}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(e){null!=this.minLength&&(e.minLength=this.minLength),null!=this.maxLength&&(e.maxLength=this.maxLength)}setDisabledAction(){const e=(0,s.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const e=(0,s.b)(this.el),t=(0,n.h)("div",{class:b},(0,n.h)("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{"aria-label":this.messages.clear,class:v,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:(0,h.g)(this.scale)})),a=(0,n.h)("calcite-icon",{class:x,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,h.g)(this.scale)}),r=(0,n.h)("div",{class:y},this.prefixText),c=(0,n.h)("div",{class:k},this.suffixText),d=(0,n.h)("input",{"aria-label":(0,o.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,class:{[g]:this.editingEnabled,[f]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:!!this.required||null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value,ref:this.setChildElRef});return(0,n.h)(n.xr,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{class:{[w]:!0,[s.C.rtl]:"rtl"===e}},this.prefixText?r:null,(0,n.h)("div",{class:I},d,this.isClearable?i:null,this.requestedIcon?a:null,this.loading?t:null),(0,n.h)("div",{class:E},(0,n.h)("slot",{name:V})),this.suffixText?c:null,(0,n.h)(l.H,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-input-text",{alignment:[513],autofocus:[516],clearable:[516],disabled:[516],form:[513],hidden:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],maxLength:[514,"max-length"],minLength:[514,"min-length"],name:[513],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],autocomplete:[1],inputMode:[1,"input-mode"],enterKeyHint:[1,"enter-key-hint"],pattern:[1],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],value:[1025],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]}]);function C(){if("undefined"===typeof customElements)return;["calcite-input-text","calcite-icon","calcite-progress"].forEach((e=>{switch(e){case"calcite-input-text":customElements.get(e)||customElements.define(e,z);break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-progress":customElements.get(e)||(0,m.d)()}}))}C()}}]);
//# sourceMappingURL=9671.a19d7061.chunk.js.map