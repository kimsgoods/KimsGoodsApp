import{C as Se,E as Ee,H as we,M as Ie,V as Be,W as Te,m as j,n as ke,o as xe,q,s as Ae,v as Ce}from"./chunk-HZOLZAUA.js";import{$ as ve,A as E,F as z,I as _e,J as pe,T as ge,X as w,aa as be,n as p,na as ye,o as V,p as me,x as fe}from"./chunk-5LRCDLK5.js";import{c as Me,d as W,g as I,h as Z,i as U}from"./chunk-W5UVDF5Y.js";import{Bc as de,Ca as _,Db as M,Ec as N,Ga as v,Gb as ie,Ia as J,Ic as he,Jb as ne,Nc as ue,Ob as S,Pb as k,Qb as ae,Ub as se,Vb as re,Wb as oe,Xb as x,Yb as le,Z as G,Zb as D,a as u,ca as m,dc as F,ec as P,fa as f,fb as b,fc as H,hb as ee,ia as s,jb as B,jc as O,l as c,lc as L,o as $,pa as Q,qa as X,qc as ce,ra as Y,rb as y,tb as h,vb as te,wa as C,wb as T,xb as R}from"./chunk-FXMMOEPG.js";var ze=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}"],encapsulation:2,changeDetection:0})}return n})(),Re=me({passive:!0}),Pe=(()=>{class n{_platform=s(p);_ngZone=s(_);_styleLoader=s(fe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return $;this._styleLoader.load(ze);let t=z(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new c,r="cdk-text-field-autofilled",o=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:d.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",o,Re),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:a,unlisten:()=>{t.removeEventListener("animationstart",o,Re)}}),a}stopMonitoring(e){let t=z(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var je=new f("MAT_INPUT_VALUE_ACCESSOR"),qe=["button","checkbox","file","hidden","image","radio","range","reset","submit"],We=new f("MAT_INPUT_CONFIG"),Ft=(()=>{class n{_elementRef=s(v);_platform=s(p);ngControl=s(Ee,{optional:!0,self:!0});_autofillMonitor=s(Pe);_ngZone=s(_);_formField=s(Te,{optional:!0});_renderer=s(B);_uid=s(w).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder;_errorStateTracker;_config=s(We,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_formFieldDescribedBy;_isServer;_isNativeSelect;_isTextarea;_isInFormField;focused=!1;stateChanges=new c;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=E(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Se.required)??!1}set required(e){this._required=E(e)}_required;get type(){return this._type}set type(e){let t=this._type;this._type=e||"text",this._validateType(),!this._isTextarea&&V().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._type!==t&&this._ensureWheelDefaultBehavior()}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=E(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>V().has(e));constructor(){let e=s(we,{optional:!0}),t=s(Ie,{optional:!0}),i=s(be),a=s(je,{optional:!0,self:!0}),r=this._elementRef.nativeElement,o=r.nodeName.toLowerCase();a?J(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ve(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=o==="select",this._isTextarea=o==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&he(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){qe.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}setDescribedByIds(e){let t=this._elementRef.nativeElement,i=t.getAttribute("aria-describedby"),a;if(i){let r=this._formFieldDescribedBy||e;a=e.concat(i.split(" ").filter(o=>o&&!r.includes(o)))}else a=e;this._formFieldDescribedBy=e,a.length?t.setAttribute("aria-describedby",a.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_webkitBlinkWheelListener=()=>{};_ensureWheelDefaultBehavior(){this._cleanupWebkitWheel?.(),this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._cleanupWebkitWheel=this._renderer.listen(this._elementRef.nativeElement,"wheel",this._webkitBlinkWheelListener))}_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=h({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&x("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(re("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),M("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),ie("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},exportAs:["matInput"],features:[ce([{provide:Be,useExisting:n}]),T,Q]})}return n})();function Ze(n,l){if(n&1){let e=se();S(0,"div",1)(1,"button",2),x("click",function(){X(e);let i=D();return Y(i.action())}),O(2),k()()}if(n&2){let e=D();b(2),L(" ",e.data.action," ")}}var Ue=["label"];function Ke(n,l){}var $e=Math.pow(2,31)-1,A=class{_overlayRef;instance;containerInstance;_afterDismissed=new c;_afterOpened=new c;_onAction=new c;_durationTimeoutId;_dismissedByAction=!1;constructor(l,e){this._overlayRef=e,this.containerInstance=l,l._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(l){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(l,$e))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},He=new f("MatSnackBarData"),g=class{politeness="assertive";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Ge=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Xe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Ye=(()=>{class n{snackBarRef=s(A);data=s(He);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(S(0,"div",0),O(1),k(),R(2,Ze,3,1,"div",1)),t&2&&(b(),L(" ",i.data.message,`
`),b(),ne(i.hasAction?2:-1))},dependencies:[ye,Ge,Qe,Xe],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return n})(),Je={snackBarState:Me("state",[Z("void, hidden",I({transform:"scale(0.8)",opacity:0})),Z("visible",I({transform:"scale(1)",opacity:1})),U("* => visible",W("150ms cubic-bezier(0, 0, 0.2, 1)")),U("* => void, * => hidden",W("75ms cubic-bezier(0.4, 0.0, 1, 1)",I({opacity:0})))])},et=(()=>{class n extends xe{_ngZone=s(_);_elementRef=s(v);_changeDetectorRef=s(de);_platform=s(p);snackBarConfig=s(g);_document=s(ue);_trackedModals=new Set;_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new c;_onExit=new c;_onEnter=new c;_animationState="void";_live;_label;_role;_liveElementId=s(w).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){let{fromState:t,toState:i}=e;if((i==="void"&&t!=="void"||i==="hidden")&&this._completeExit(),i==="visible"){let a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a="mdc-snackbar__label";i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute("aria-owns");this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),t=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&t){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),t.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&(F(q,7),F(Ue,7)),t&2){let a;P(a=H())&&(i._portalOutlet=a.first),P(a=H())&&(i._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(t,i){t&1&&le("@state.done",function(r){return i.onAnimationEnd(r)}),t&2&&oe("@state",i._animationState)},features:[te],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(S(0,"div",1)(1,"div",2,0)(3,"div",3),R(4,Ke,0,0,"ng-template",4),k(),ae(5,"div"),k()()),t&2&&(b(5),M("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[q],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[Je.snackBarState]}})}return n})();function tt(){return new g}var it=new f("mat-snack-bar-default-options",{providedIn:"root",factory:tt}),Oe=(()=>{class n{_overlay=s(Ce);_live=s(ge);_injector=s(C);_breakpointObserver=s(_e);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(it);_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ye;snackBarContainerComponent=et;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let a=u(u({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=C.create({parent:i||this._injector,providers:[{provide:g,useValue:t}]}),r=new j(this.snackBarContainerComponent,t.viewContainerRef,a),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let i=u(u(u({},new g),this._defaultConfig),t),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),o=new A(r,a);if(e instanceof ee){let d=new ke(e,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(d)}else{let d=this._createInjector(i,o),Ne=new j(e,void 0,d),Ve=r.attachComponentPortal(Ne);o.instance=Ve.instance}return this._breakpointObserver.observe(pe.HandsetPortrait).pipe(G(a.detachments())).subscribe(d=>{a.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration))}_createOverlay(e){let t=new Ae;t.direction=e.direction;let i=this._overlay.position().global(),a=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,o=!r&&e.horizontalPosition!=="center";return r?i.left("0"):o?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,this._overlay.create(t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return C.create({parent:i||this._injector,providers:[{provide:A,useValue:t},{provide:He,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Le=class n{snackbar=s(Oe);error(l){this.snackbar.open(l,"Close",{duration:5e3,panelClass:["snack-error"]})}success(l){this.snackbar.open(l,"Close",{duration:5e3,panelClass:["snack-success"]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})};export{Ft as a,Le as b};
