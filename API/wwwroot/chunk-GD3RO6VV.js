import{a as ce}from"./chunk-CRLWXKZW.js";import{b as me}from"./chunk-3QIZL2WF.js";import{a as $}from"./chunk-VH5HHFUJ.js";import{A as ee,F as te,G as re,H as ne,I as ie,J as oe,Q as ae,T as se,X as le}from"./chunk-HZOLZAUA.js";import{b as O,k as Y,na as Z,qa as S}from"./chunk-5LRCDLK5.js";import{$ as R,Eb as _,Gc as D,Ja as A,Jb as W,Ob as a,Pb as s,Pc as K,Sc as J,Ub as T,Vc as Q,Xb as k,Zb as G,ca as E,e as c,fb as u,ia as p,jc as l,kc as P,lc as F,nc as z,oc as H,pc as X,qa as I,ra as x,rb as B,uc as v,v as m,vc as y,w as C,xb as L}from"./chunk-FXMMOEPG.js";var de="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var pe=(i=21)=>{let e="",t=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)e+=de[t[i]&63];return e};var U=class{id=pe();items=[];deliveryMethodId;paymentIntentId;clientSecret;coupon};var f=class i{baseUrl=S.apiUrl;http=p(O);cart=A(null);itemCount=D(()=>this.cart()?.items.reduce((e,t)=>e+t.quantity,0));selectedDelivery=A(null);totals=D(()=>{let e=this.cart(),t=this.selectedDelivery();if(!e)return null;let r=e.items.reduce((b,h)=>b+h.price*h.quantity,0),n=t?t.price:0,o=0;e.coupon&&(e.coupon.amountOff?o=e.coupon.amountOff/100:e.coupon.percentOff&&(o=r*(e.coupon.percentOff/100)));let d=r+n-o;return{subtotal:r,deliveryFee:n,discount:o,total:d}});getCart(e){return this.http.get(this.baseUrl+"cart?id="+e).pipe(C(t=>(this.cart.set(t),t)))}setCart(e){return this.http.post(this.baseUrl+"cart",e).pipe(R(t=>{this.cart.set(t)}))}addItemToCart(e,t=1){return c(this,null,function*(){let r=this.cart()??this.createCart();this.isProduct(e)&&(e=this.mapProductToCartItem(e)),r.items=this.addOrUpdateItem(r.items,e,t),yield m(this.setCart(r))})}removeItemFromCart(e,t=1){return c(this,null,function*(){let r=this.cart();if(!r)return;let n=r.items.findIndex(o=>o.productId===e);n!==-1&&(r.items[n].quantity>t?r.items[n].quantity-=t:r.items.splice(n,1),r.items.length==0?this.deleteCart():yield m(this.setCart(r)))})}deleteCart(){this.http.delete(this.baseUrl+"cart?id="+this.cart()?.id).subscribe({next:()=>{localStorage.removeItem("cart_id"),this.cart.set(null)}})}applyDiscount(e){return this.http.get(this.baseUrl+"coupons/"+e)}addOrUpdateItem(e,t,r){let n=e.findIndex(o=>o.productId===t.productId);return n===-1?(t.quantity=r,e.push(t)):e[n].quantity+=r,e}mapProductToCartItem(e){return{productId:e.id,productName:e.name,price:e.price,quantity:0,pictureUrl:e.pictureUrl,brand:e.brand,type:e.type}}createCart(){let e=new U;return localStorage.setItem("cart_id",e.id),e}isProduct(e){return e.id!=null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})};var ve="https://js.stripe.com/v3",be=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,fe="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Ce=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ve,'"]')),t=0;t<e.length;t++){var r=e[t];if(be.test(r.src))return r}return null},he=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(ve).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r},Ee=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"5.6.0",startTime:t})},g=null,M=null,j=null,Ie=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},xe=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}},_e=function(e){return g!==null?g:(g=new Promise(function(t,r){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe&&e&&console.warn(fe),window.Stripe){t(window.Stripe);return}try{var n=Ce();if(n&&e)console.warn(fe);else if(!n)n=he(e);else if(n&&j!==null&&M!==null){var o;n.removeEventListener("load",j),n.removeEventListener("error",M),(o=n.parentNode)===null||o===void 0||o.removeChild(n),n=he(e)}j=xe(t,r),M=Ie(r),n.addEventListener("load",j),n.addEventListener("error",M)}catch(d){r(d);return}}),g.catch(function(t){return g=null,Promise.reject(t)}))},Pe=function(e,t,r){if(e===null)return null;var n=e.apply(void 0,t);return Ee(n,r),n},w,ye=!1,Se=function(){return w||(w=_e(null).catch(function(e){return w=null,Promise.reject(e)}),w)};Promise.resolve().then(function(){return Se()}).catch(function(i){ye||console.warn(i)});var ge=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];ye=!0;var n=Date.now();return Se().then(function(o){return Pe(o,t,n)})};var V=class i{baseUrl=S.apiUrl;http=p(O);stripePromise;accountService=p(me);cartService=p(f);elements;addressElement;paymentElement;constructor(){this.stripePromise=ge(S.stripePublicKey)}getStripeInstance(){return this.stripePromise}initializeElements(){return c(this,null,function*(){if(!this.elements){let e=yield this.getStripeInstance();if(e){let t=yield m(this.createOrUpdatePaymentIntent());this.elements=e.elements({clientSecret:t.clientSecret,appearance:{labels:"floating"}})}else throw new Error("Stripe has not been loaded")}return this.elements})}createPaymentElement(){return c(this,null,function*(){if(!this.paymentElement){let e=yield this.initializeElements();if(e)this.paymentElement=e.create("payment");else throw new Error("Elements instance has not been initialized")}return this.paymentElement})}createAddressElement(){return c(this,null,function*(){if(!this.addressElement){let e=yield this.initializeElements();if(e){let t=this.accountService.currentUser(),r={};t&&(r.name=t.firstName+" "+t.lastName),t?.address&&(r.address={line1:t.address.line1,line2:t.address.line2,city:t.address.city,state:t.address.state,postal_code:t.address.postalCode,country:t.address.country});let n={mode:"shipping",defaultValues:r};this.addressElement=e.create("address",n)}else throw new Error("Elements instance has not been loaded")}return this.addressElement})}createConfirmationToken(){return c(this,null,function*(){let e=yield this.getStripeInstance(),t=yield this.initializeElements(),r=yield t.submit();if(r.error)throw new Error(r.error.message);if(e)return yield e.createConfirmationToken({elements:t});throw new Error("Stripe not available")})}confirmPayment(e){return c(this,null,function*(){let t=yield this.getStripeInstance(),n=yield(yield this.initializeElements()).submit();if(n.error)throw new Error(n.error.message);let o=this.cartService.cart()?.clientSecret;if(t&&o)return yield t.confirmPayment({clientSecret:o,confirmParams:{confirmation_token:e.id},redirect:"if_required"});throw new Error("Unable to load stripe")})}createOrUpdatePaymentIntent(){let e=this.cartService.cart();if(!e)throw new Error("Problem with cart");let t=!!e?.clientSecret;return this.http.post(this.baseUrl+"payments/"+e.id,{}).pipe(C(r=>c(this,null,function*(){return t||(yield m(this.cartService.setCart(r))),r})))}disposeElements(){this.elements=void 0,this.addressElement=void 0,this.paymentElement=void 0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})};function Oe(i,e){i&1&&(a(0,"div",11)(1,"button",19),l(2,"Checkout"),s(),a(3,"button",20),l(4,"Continue shopping"),s()())}function Ue(i,e){if(i&1){let t=T();a(0,"div",21)(1,"span",22),l(2),s(),a(3,"button",23),k("click",function(){I(t);let n=G();return x(n.removeCouponCode())}),a(4,"mat-icon",24),l(5,"delete"),s()()()}if(i&2){let t=e.ngIf;u(2),F("",t.name," applied")}}var we=class i{cartService=p(f);location=p(K);stripeService=p(V);code;applyCouponCode(){this.code&&this.cartService.applyDiscount(this.code).subscribe({next:e=>c(this,null,function*(){let t=this.cartService.cart();t&&(t.coupon=e,yield m(this.cartService.setCart(t)),this.code=void 0),this.location.path()==="/checkout"&&(yield m(this.stripeService.createOrUpdatePaymentIntent()))})})}removeCouponCode(){return c(this,null,function*(){let e=this.cartService.cart();e&&(e.coupon&&(e.coupon=void 0),yield m(this.cartService.setCart(e)),this.location.path()==="/checkout"&&(yield m(this.stripeService.createOrUpdatePaymentIntent())))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=B({type:i,selectors:[["app-order-summary"]],decls:43,vars:17,consts:[["form","ngForm"],[1,"mx-auto","max-w-4xl","flex-1","space-y-6","w-full"],[1,"space-y-4","p-4","rounded-lg","border","border-gray-200","bg-white","shadow-sm"],[1,"text-xl","font-semibold"],[1,"space-y-4"],[1,"space-y-2"],[1,"flex","items-center","justify-between","gap-4"],[1,"font-medium","text-gray-500"],[1,"font-medium","text-gray-900"],[1,"font-medium","text-green-500"],[1,"flex","items-center","justify-between","gap-4","border-t","border-gray-200","pt-2"],[1,"flex","flex-col","gap-2"],[1,"space-y-4","rounded-lg","border","border-gray-200","bg-white","shadow-sm"],[1,"space-y-2","flex","flex-col","p-2",3,"ngSubmit"],[1,"mb-2","block","text-sm","font-medium"],["class","flex justify-between items-center",4,"ngIf"],["appearance","outline"],["name","code","type","text","matInput","",3,"ngModelChange","disabled","ngModel"],["type","submit","mat-flat-button","",3,"disabled"],["routerLink","/checkout","mat-flat-button",""],["routerLink","/shop","mat-button",""],[1,"flex","justify-between","items-center"],[1,"text-sm","font-semibold"],["mat-icon-button","",3,"click"],[1,"text-red-500"]],template:function(t,r){if(t&1){let n=T();a(0,"div",1)(1,"div",2)(2,"p",3),l(3,"Order Summary"),s(),a(4,"div",4)(5,"div",5)(6,"dl",6)(7,"dt",7),l(8,"Subtotal"),s(),a(9,"dd",8),l(10),v(11,"currency"),s()(),a(12,"dl",6)(13,"dt",7),l(14,"Discount"),s(),a(15,"dd",9),l(16),v(17,"currency"),s()(),a(18,"dl",6)(19,"dt",7),l(20,"Delivery fee"),s(),a(21,"dd",8),l(22),v(23,"currency"),s()()(),a(24,"dl",10)(25,"dt",7),l(26,"Total"),s(),a(27,"dd",8),l(28),v(29,"currency"),s()()(),L(30,Oe,5,0,"div",11),s(),a(31,"div",12)(32,"form",13,0),k("ngSubmit",function(){return I(n),x(r.applyCouponCode())}),a(34,"label",14),l(35," Do you have a voucher code? "),s(),L(36,Ue,6,1,"div",15),a(37,"mat-form-field",16)(38,"mat-label"),l(39,"Voucher code"),s(),a(40,"input",17),X("ngModelChange",function(d){return I(n),H(r.code,d)||(r.code=d),x(d)}),s()(),a(41,"button",18),l(42,"Apply code"),s()()()()}if(t&2){let n,o,d,b,h,N,q;u(10),P(y(11,9,(n=r.cartService.totals())==null?null:n.subtotal)),u(6),F("-",y(17,11,(o=r.cartService.totals())==null?null:o.discount),""),u(6),P(y(23,13,(d=r.cartService.totals())==null?null:d.deliveryFee)),u(6),P(y(29,15,(b=r.cartService.totals())==null?null:b.total)),u(2),W(r.location.path()!="/checkout"?30:-1),u(6),_("ngIf",(h=r.cartService.cart())==null?null:h.coupon),u(4),_("disabled",!!((N=r.cartService.cart())!=null&&N.coupon)),z("ngModel",r.code),u(),_("disabled",!!((q=r.cartService.cart())!=null&&q.coupon))}},dependencies:[Z,Y,le,se,ce,Q,ae,oe,ee,te,re,ie,ne,J,$],encapsulation:2})};export{f as a,V as b,we as c};
