"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[105],{88625:(e,t,a)=>{a.r(t),a.d(t,{SpaceSubscriptionUpdatePaymentMethodModal:()=>B});var o=a(98135),r=a.n(o),n=(a(33948),a(67294)),i=a.n(n),s=a(89940),d=a(45407),l=a(1643),p=a(86664),c=a(16100),u=a(64215),m=a(47966),g=a(58879),v=a(21325),y=a(27832),f=a(97880),b=a(72693),h=a(5366),C=a(82990),S=a(8848),M=a(46951),k=a(78291),P=a(95155);function B(e){return r()(p.Elements,{stripe:(0,c.getStripe)()},void 0,i().createElement(x,e))}function x(e){const[t,a,o]=(0,s.oR)(void 0,d.Z),[c]=(0,s.oR)(k.default),y=(0,p.useStripe)(),C=(0,p.useElements)(),[S,B]=i().useState(!1),[x,_]=i().useState(void 0),R=(0,g.O7)(),U=(0,h.useIntl)(),[,,D]=(0,s.oR)(P.default);(0,n.useEffect)((()=>{c.data&&!o.isPaymentOptionAvailable("invoice")&&l.BV(l.su(c.data))&&o.addPaymentOption("invoice")}),[R,e.customerData.productId,c,o,D]);const F=i().useCallback(((e,r)=>{t.paymentRequest||(a({...t,paymentRequest:e,supportsApplePay:Boolean(r&&r.applePay)}),o.addPaymentOption("native_payment_platform"))}),[a,o,t]);i().useEffect((()=>{if(y){const t=y.paymentRequest({country:"US",currency:"usd",total:{label:U.formatMessage({id:"spaceSubscriptionUpdatePaymentMethod.applePay.total.label",defaultMessage:"Notion - You will be charged on a recurring basis"}),amount:0}});t.canMakePayment().then((e=>{e&&F(t,e)})),t.on("token",(t=>{E({environment:R,spaceStore:e.spaceStore,stripeToken:t.token.id,customerData:e.customerData,onComplete:a=>{t.complete(a?"success":"fail"),e.onComplete()}})}))}}),[y,e,U,R,F]);const T=l.zt(t.availablePaymentMethods),q=(0,u.y)(w,[]);return S?r()("div",{style:q.container},void 0,r()("div",{style:q.header},void 0,r()(h.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.update.header",defaultMessage:"Update credit card"})),r()("div",{style:q.cardContainer},void 0,r()(p.CardElement,{options:{hidePostalCode:!0}})),x&&r()(M.Z,{isMultiline:!1,style:q.error},void 0,x),r()("div",{style:q.upgradeButtonContainer},void 0,r()(b.Z,{style:q.upgradeButton,onClick:()=>async function(e){const{stripe:t,elements:a,environment:o,spaceStore:r,customerData:n,onComplete:i,setError:s}=e;if(!t||!a)return;const d=a.getElement(p.CardElement);if(!d)return;const l=await t.createToken(d);!l.error&&l.token?await E({environment:o,spaceStore:r,stripeToken:l.token.id,customerData:n,onComplete:i}):l.error&&s(l.error.message)}({stripe:y,elements:C,environment:R,spaceStore:e.spaceStore,customerData:e.customerData,onComplete:e.onComplete,setError:_})},void 0,r()(h.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton",defaultMessage:"Update"})))):r()("div",{style:q.container},void 0,r()("div",{style:q.header},void 0,r()(h.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.update.header",defaultMessage:"Update payment method"})),r()("div",{style:q.optionGroup},void 0,T.map((({type:a,title:o},n)=>r()("div",{onClick:()=>async function(e){const{newPaymentMethod:t,setCreditCardSelected:a,paymentRequest:o,environment:r,spaceStore:n,onComplete:i}=e;"credit_card"===t?a(!0):"invoice"===t?(await v.Mg({environment:r,spaceStore:n,billing:"send_invoice"}),i()):"native_payment_platform"===t?o&&o.show():(0,f.t1)(t)}({newPaymentMethod:a,paymentRequest:t.paymentRequest,setCreditCardSelected:B,environment:R,spaceStore:e.spaceStore,onComplete:e.onComplete})},a,r()(m.Z,{style:{...q.option,...n!==T.length-1?q.optionBorder:void 0}},void 0,o))))))}async function E(e){const{environment:t,spaceStore:a,stripeToken:o,customerData:r,onComplete:n}=e,{currentUserStore:i}=y.default.state,s=i?i.getValue():void 0,d=r.billingEmail||(s?s.email:void 0);if(!d)throw new Error("No billing email found.");n(await v.Mg({environment:t,spaceStore:a,billing:"charge_automatically",stripeToken:o,billingEmail:d}))}function w(e){return{container:{width:500,background:e.popoverBackground,padding:30,borderRadius:3},optionGroup:{borderRadius:"2px",background:e.groupedFormBackground,border:"1px solid",borderColor:e.groupedFormBorder},option:{display:"flex",justifyContent:"flex-start",border:"none",height:void 0,paddingTop:"15px",paddingBottom:"15px"},optionBorder:{borderBottom:"1px solid",borderBottomColor:e.groupedFormBorder},header:{fontSize:18,marginBottom:16,fontWeight:C.Z.fontWeight.medium},cardContainer:{backgroundColor:e.groupedFormBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBackground,padding:"10px",marginTop:"10px",marginBottom:"10px"},upgradeButtonContainer:{width:"100%",justifyContent:"flex-end",display:"flex"},upgradeButton:{marginTop:"20px"},error:{marginTop:8,color:S.ZP.red}}}},16100:(e,t,a)=>{a.r(t),a.d(t,{injectStripe:()=>c,getStripe:()=>u,translateStripeError:()=>m});var o=a(98135),r=a.n(o),n=a(67294),i=a.n(n),s=a(86664),d=a(97894),l=a(95477);let p=null;function c(e){return t=>r()(s.Elements,{stripe:u()},void 0,r()(s.ElementsConsumer,{},void 0,(({stripe:a,elements:o})=>{const r={...t,stripe:a,elements:o};return i().createElement(e,r)})))}async function u(){return p||(d.loadStripe.setLoadParameters({advancedFraudSignals:!1}),p=(0,d.loadStripe)(l.default.stripe.key)),p}function m(e,t){if(!t.code)return t.message||"";switch(t.code){case"invalid_expiry_year_past":return e.formatMessage({id:"stripeHelpers.invalidExpiryYear.error.message",defaultMessage:"Your card's expiration year is in the past."});case"invalid_cvc":return e.formatMessage({id:"stripeHelpers.invalidCVC.error.message",defaultMessage:"Your card's security code is invalid."});case"invalid_number":return e.formatMessage({id:"stripeHelpers.invalidNumber.error.message",defaultMessage:"Your card number is not a valid credit card number."});case"card_declined":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message",defaultMessage:"Your card was declined."});default:return t.message||""}}},45407:(e,t,a)=>{a.d(t,{Z:()=>s});a(33948);var o=a(52016),r=a(96486),n=a.n(r);class i extends o.Z{getInitialState(){return{availablePaymentMethods:["credit_card"],paymentRequest:void 0,supportsApplePay:!1}}isPaymentOptionAvailable(e){return this.state.availablePaymentMethods.includes(e)}addPaymentOption(e){const t=n().uniq([...this.state.availablePaymentMethods,e]);this.setState({...this.state,availablePaymentMethods:t})}}const s=i}}]);