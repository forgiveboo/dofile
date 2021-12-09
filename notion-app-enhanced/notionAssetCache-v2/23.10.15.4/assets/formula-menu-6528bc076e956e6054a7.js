"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[71],{75571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var n=r(67154),o=r.n(n),s=r(98135),i=r.n(s),a=r(59713),l=r.n(a),p=(r(33948),r(67294)),d=r.n(p),u=r(52858),c=r(52016);class m extends c.Z{getInitialState(){return{value:"",html:"",query:""}}}const h=m;var f=r(66832),g=(r(73210),r(96486)),y=r.n(g),v=r(37235),S=r(45023),b=r(26666),x=r(24429),M=r(82990),C=r(63143),w=r(62134),T=r(89206),N=r(8848),k=r(72693);r(15306);function P(e,t){if(!e)return"";const r=E(e,t);if(!r)return"";const n=r.toString({parenthesis:"auto",handler:(e,t)=>{if(e.isOperatorNode&&"not"===e.fn)return"not ".concat(e.args[0].toString(t))}});return n.replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const F=r(89916).create();F.import(r(75275)),F.import(r(54546)),F.import(r(76200)),F.import(r(1120));const I=(0,C.Q8)(x._G,(e=>e.value)),D=(0,C.Q8)(x.Gn,(e=>e.apply)),W=(0,C.Q8)(x.wk,(e=>e.apply));function E(e,t){if(e){if("conditional"===e.type)return new F.expression.node.ConditionalNode(E(e.condition,t),E(e.true,t),E(e.false,t));if("constant"===e.type)return new F.expression.node.ConstantNode(e.value,e.value_type);if("function"===e.type)return new F.expression.node.FunctionNode(new F.expression.node.SymbolNode(e.name),(e.args||[]).map((e=>E(e,t))));if("operator"===e.type)return new F.expression.node.OperatorNode(e.operator,e.name,(e.args||[]).map((e=>E(e,t))));if("property"===e.type){const r=t[e.id],n=r?r.name:e.name;return new F.expression.node.FunctionNode("prop",[new F.expression.node.ConstantNode(n,"string")])}return"symbol"===e.type?new F.expression.node.SymbolNode(e.name):void 0}}F.import(I,{override:!0}),F.import(D,{override:!0}),F.import(W,{override:!0}),F.config({predictable:!0});r(85827);var Z=r(29366),L=r.n(Z);const z=/(.+) \(char (\d+)\)/,R=[{regex:/Syntax error in part (.+)$/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.syntax.error",defaultMessage:"Syntax error in part {token}"},{token:t})},{regex:/End of (?:matrix|string) ([\]\"\']) expected/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:t})},{regex:/Parenthesis ([\)\]]) expected/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:t})},{regex:/Unexpected (?:operator|part) (.+)$/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.unexpected.error",defaultMessage:"Unexpected {token}"},{token:t})}];function H(e){const{str:t,property:r,schema:n,intl:o,propertyTypeDisplayName:s}=e,i=t.replace(/\\n/g,"\n").replace(/\\t/g,"\t");if(""===i.trim())return;let a;try{a=L().parse(i)}catch({message:l}){return{type:"error",message:function(e,t){const r=z.exec(t);if(!r)return t;let n=r[1];const o=r[2],s=o?e.formatMessage({id:"mathParseHelpers.errorPosition.message",defaultMessage:"char {position}",description:"The character position at which an error occurred"},{position:o}):"";return R.forEach((({regex:t,translate:r})=>{if(n.match(t)){const o=t.exec(n);if(o){const t=o[1];n=r(e,t)}}})),e.formatMessage({id:"mathParseHelpers.fullError.message",defaultMessage:"{errorBody} ({postfix})",description:"The full error message from the math.parse library. Postfix describes the position: i.e. (char 42)"},{errorBody:n,postfix:s})}(o,l),size:1}}return _(o,a,r,n,s)}function _(e,t,r,n,o){if(t){if(t.isAccessorNode||t.isArrayNode||t.isAssignmentNode||t.isBlockNode||t.isFunctionAssignmentNode||t.isIndexNode||t.isObjectNode||t.isRangeNode)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidSyntax",defaultMessage:"Invalid syntax: {input}",description:"When a user enters an invalid formula that is structured incorrectly, we show this error message."},{input:t.toString().nodeString})};if(t.isConditionalNode){const s=_(e,t.condition,r,n,o),i=_(e,t.trueExpr,r,n,o),a=_(e,t.falseExpr,r,n,o);if(!s)return;if("error"===s.type)return s;if(i&&"error"===i.type)return i;if(a&&"error"===a.type)return a;if(i&&a)return i.result_type!==a.result_type?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.branchCondition",defaultMessage:"Each branch of a condition must be of the same type: {input}",description:"When a user enters an invalid formula with an invalid if statement, we show this error message."},{input:t.toString().nodeString})}:{type:"conditional",result_type:i.result_type,condition:s,true:i,false:a}}else{if(t.isConstantNode){const{value:r,valueType:n}=t,o={string:"text",number:"number",boolean:"checkbox"};return n in o?{type:"constant",result_type:o[n],value:r.toString(),value_type:n}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.illegalConstant",defaultMessage:"Illegal constant: {value}",description:"When a user enters an invalid formula with an invalid constant, we show this error message."},{value:r})}}if(t.isFunctionNode){const{fn:s,args:i}=t;if("prop"===s.name){if(1!==i.length)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.tooManyArgumentsInProp",defaultMessage:"Too many arguments passed to prop()."})};const t=i[0];if(!t.isConstantNode||"string"!==t.valueType)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.invalidPropertyReference",defaultMessage:"Invalid property reference: {input}"},{input:t.toString().nodeString})};const o=t.value,s=Object.keys(n).find((e=>{const t=n[e];return Boolean(t&&t.name===o)})),a=s&&n[s];if(!s||!a)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.propertyNotFound",defaultMessage:"Property not found: prop({input})"},{input:o})};if("formula"===a.type){const{formula:t}=a;if(!t||!t.result_type)return;return(0,b.pV)(t).includes(r)?{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.circularDependency",defaultMessage:"Property {propertySchemaName} creates a circular dependency."},{propertySchemaName:a.name})}:{type:"property",result_type:(0,b.z6)(a),name:o,id:s}}return{type:"property",result_type:(0,b.z6)(a),name:o,id:s}}const a=x.uf(s.name)||x.aV(s.name);if(!a)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedFunction",defaultMessage:"Undefined function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:s.name})};const l=y().compact((i||[]).map((t=>_(e,t,r,n,o)))),p=A({intl:e,functionName:s.name,functionArgs:l,signatures:a.signatures,schema:n,propertyTypeDisplayName:o});if(p.error)return p.error;return{type:"function",result_type:p.value.resultType,name:s.name,args:l}}if(t.isOperatorNode){const{op:s,fn:i,args:a}=t,l=x.aV(i);if(!l)return{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedOperator",defaultMessage:"Undefined operator: {operator}",description:"When a user enters an invalid formula with an operator that doesn't exist, we show this error message."},{operator:s})};const p=y().compact((a||[]).map((t=>_(e,t,r,n,o)))),d=A({intl:e,functionName:i,functionArgs:p,signatures:l.signatures,schema:n,propertyTypeDisplayName:o});if(d.error)return d.error;return{type:"operator",result_type:d.value.resultType,operator:s,name:i,args:p}}if(t.isParenthesisNode)return _(e,t.content,r,n,o);if(t.isSymbolNode){const{name:r}=t;return r in x._G?{type:"symbol",result_type:x._G[r].resultType,name:r}:{type:"error",size:1,message:e.formatMessage({id:"formulaHelpers.error.undefinedConstant",defaultMessage:"Undefined constant: {constantName}",description:"When a user enters an invalid formula with a constant that doesn't exist, we show this error message."},{constantName:r})}}}}}function A(e){const{intl:t,functionName:r,functionArgs:n,signatures:o,schema:s,propertyTypeDisplayName:i}=e;return o.reduce(((e,o)=>{if(!e.error)return e;const a=function(e){const{intl:t,functionName:r,functionArgs:n,signature:o,schema:s,propertyTypeDisplayName:i}=e,{arity:a,variadic:l}=o;if(l){if(!(n.length>0))return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooFewArgumentsVariadic",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};{const e=y().compact(n.map((e=>B({intl:t,resultType:l,functionArg:e,schema:s,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}if(a){if(n.length<a.length)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooFewArguments",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};if(n.length>a.length)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooManyArguments",defaultMessage:"Too many arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};const e=y().compact(n.map(((e,r)=>B({intl:t,resultType:a[r],functionArg:e,schema:s,propertyTypeDisplayName:i}))));if(e.length>0)return{...e[0],size:e.length}}}({intl:t,functionName:r,functionArgs:n,signature:o,schema:s,propertyTypeDisplayName:i});return a?e.error.size<a.size?e:{error:a}:{value:o}}),{error:{type:"error",size:99,message:t.formatMessage({id:"formulaHelpers.error.noSignatureForFunction",defaultMessage:"No signatures found for function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:r})}})}function B(e){const{intl:t,resultType:r,functionArg:n,schema:o,propertyTypeDisplayName:s}=e;if("error"===n.type)return n;if(r!==n.result_type){const e=P(n,o);return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.typeMismatch",defaultMessage:"Type mismatch {nodeString} is not a {localizedPropertyTypeDisplayName}.",description:"When tye types in the function don't match the database property type, we show this error."},{nodeString:e,localizedPropertyTypeDisplayName:r?s[r]:t.formatMessage({id:"formatMessage.error.undefinedResultType",defaultMessage:"undefined"})})}}}var O=r(5366),U=r(33929),q=r(74350),K=r(52821),V=r(80935);const j=(0,O.defineMessages)({placeholder:{id:"database.formula.placeholder",defaultMessage:"Type a formula"}});class G extends f.Z{constructor(...e){super(...e),l()(this,"updateTimer",void 0),l()(this,"latestSelectionRange",void 0),l()(this,"storeTypes",{store:h}),l()(this,"handleSelectionChange",(()=>{const e=V.get();e&&this.input.contains(e.commonAncestorContainer)&&(this.latestSelectionRange=e)})),l()(this,"handleInputMount",(e=>this.input=e)),l()(this,"handleInput",(e=>{const{target:{textContent:t}}=e;this.updateValue(t),C.z4(this.updateTimer)&&(this.updateTimer=window.setTimeout((()=>this.executeUpdate()),G.delay))})),l()(this,"handlePaste",(e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)})),l()(this,"handleKeyUp",(e=>{this.updateSelection()})),l()(this,"handleClick",(e=>{this.updateSelection()})),l()(this,"handleKeyDown",(e=>{(0,S.Z)(this.environment,e,"command+enter")&&(this.handleAccept(),e.stopPropagation())})),l()(this,"getStyle",(()=>({flexGrow:1,position:"relative",minWidth:0,...this.props.inputContainerStyle})))}insertEntry(e){var t,r,n,o;const{value:s}=this.stores.store.state,{name:i}=e,a=G.getCompletion(e),l=null!==(t=null===(r=this.latestSelectionRange)||void 0===r?void 0:r.startOffset)&&void 0!==t?t:0;let p=l,d=null!==(n=null===(o=this.latestSelectionRange)||void 0===o?void 0:o.endOffset)&&void 0!==n?n:0;const u=b.wo(s,l);if(u){const[e,t]=u,r=s.slice(e,t).toLowerCase();r!==a.toLowerCase().slice(0,t-e)&&r!==i.toLowerCase().slice(0,t-e)||(p=e,d=t)}this.input.focus();const c=this.input.firstChild||this.input,m=document.createRange();m.setStart(c,p),m.setEnd(c,d),V.set(m,this.environment.device),p<d&&document.execCommand("delete",!1),document.execCommand("insertText",!1,a);const h=(d+a.length)/(this.input&&this.input.textContent&&this.input.textContent.length||0)*this.container.scrollWidth;h>this.container.scrollLeft+this.container.offsetWidth&&(this.container.scrollLeft=h-this.container.offsetWidth)}handleAccept(){this.updateTimer&&(window.clearTimeout(this.updateTimer),this.updateTimer=void 0);const{value:e}=this.stores.store.state;if(""===e.trim())this.props.onSubmit();else{const{formula:t,error:r}=this.updateFormula(e);r||this.props.onSubmit(t)}}willMount(e){super.willMount(e);const{formula:t,schema:r}=e,n=P(t,r);this.updateValue(n)}didMount(){const{device:e}=this.environment,{value:t}=this.stores.store.state;if(this.input&&(this.input.textContent=t,e.isMobile||this.input.focus(),t)){const e=document.getSelection();this.input.firstChild&&e.collapse(this.input.firstChild,t.length),this.container.scrollLeft=this.container.scrollWidth-this.container.offsetWidth}document.addEventListener("selectionchange",this.handleSelectionChange)}willUnmount(){document.removeEventListener("selectionchange",this.handleSelectionChange)}renderComponent(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=w.fg(this.environment),{html:n}=this.stores.store.state;return i()("div",{style:this.getWrapStyle()},void 0,d().createElement("div",{ref:e=>{e&&(this.container=e)},style:this.getStyle()},i()(T.Z,{capture:!t,onLeft:y().identity,onRight:y().identity,onSelectAll:y().identity,onRedo:y().identity,onUndo:y().identity,onToggleBold:y().identity,onToggleItalics:y().identity,onToggleCode:y().identity,onCut:y().identity,onCopy:y().identity,onPaste:y().identity,onKeypress:y().identity,onDelete:y().identity,onBackspace:y().identity},void 0,d().createElement("div",{ref:this.handleInputMount,contentEditable:!t,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onPaste:this.handlePaste,style:this.getInputStyle()})),i()("div",{style:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:n}})),!e.isMobile&&!t&&i()(v.Z,{renderTooltip:()=>i()("div",{},void 0,i()("span",{},void 0,i()(O.FormattedMessage,{defaultMessage:"Accept",id:"database.formula.acceptFormulaInput.tooltip"}))," ",i()("span",{style:{color:this.theme.mediumInvertedTextColor}},void 0,r,"+Enter")),render:t=>d().createElement(k.Z,o()({disabled:Boolean(this.stores.store.state.error),onClick:()=>this.handleAccept(),style:{height:24,padding:"0 8px",alignSelf:"flex-end",marginRight:6,marginBottom:4,...e.isMobile&&{marginRight:12}}},t),i()(O.FormattedMessage,{id:"database.formula.doneButton.label",defaultMessage:"Done",description:"Label for button that confirms changes to a formula."}))}))}updateValue(e){const t=""===e.trim()?this.props.disabled?"":U.default.formatMessage(j.placeholder):b.EP(this.props.Prism,e);this.stores.store.setState({...this.stores.store.state,html:t,value:e})}updateSelection(){const e=document.getSelection().anchorOffset,{value:t}=this.stores.store.state,r=b.wo(t,e),n=r?t.slice(r[0],r[1]):"";n!==this.stores.store.state.query&&this.stores.store.setState({...this.stores.store.state,query:n})}updateFormula(e){const{schema:t,property:r}=this.props;if(""===e.trim())return{error:void 0,formula:void 0,type:void 0};{const n=H({str:e,property:r,schema:t,intl:U.default.getIntl(),propertyTypeDisplayName:K.SO});if(n&&"error"===n.type){const{message:e}=n;return{formula:void 0,error:e,type:void 0}}return{formula:n,error:void 0,type:void 0}}}executeUpdate(){const{value:e}=this.stores.store.state,{error:t,formula:r}=this.updateFormula(e);!t&&r&&this.props.onChange(r),this.updateTimer=void 0,this.stores.store.setState({...this.stores.store.state,error:t})}static getCompletion(e){const{category:t,name:r}=e;return t===x.WD.property?"prop(".concat(JSON.stringify(r),")"):t===x.WD.constant?r:"".concat(r,"(")}getWrapStyle(){const{device:e,WindowSizeStore:t}=this.environment;return{display:"flex",flex:"none",background:this.theme.inputBackground,minHeight:33,borderTopLeftRadius:3,borderTopRightRadius:3,...this.props.disabled&&{background:this.theme.contentBackground,borderRadius:3},...e.isMobile&&{borderBottom:"1px solid ".concat(this.theme.regularDividerColor),background:this.theme.popoverBackground,minHeight:44,paddingLeft:t.state.paddingLeftCSS,paddingRight:t.state.paddingRightCSS},...this.props.wrapStyle}}getOverlayStyle(){const{device:e}=this.environment,{value:t}=this.stores.store.state;return{...e.isMobile?G.mobileInputStyle:G.desktopInputStyle,zIndex:0,...""===t.trim()&&{color:this.theme.mediumTextColor},position:void 0}}getInputStyle(){const{device:e}=this.environment,t=e.isSafari||e.isChrome?"WebkitTextFillColor":"color";return{...e.isMobile?G.mobileInputStyle:G.desktopInputStyle,border:"none",background:"none",[t]:""===this.stores.store.state.value?this.theme.regularTextColor:N.ZP.transparent,caretColor:this.theme.regularTextColor,zIndex:1,width:"100%"}}}l()(G,"delay",0),l()(G,"desktopInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:32,margin:0,padding:0,paddingLeft:10,paddingRight:8,paddingTop:8,fontSize:13,fontFamily:M.Z.getCompositeFontFamily(q.SP).mono,wordWrap:"break-word"}),l()(G,"mobileInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:44,margin:0,paddingLeft:16,paddingRight:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:M.Z.getCompositeFontFamily(q.SP).githubMono});const Q=G;var J=r(39068),Y=r(48762),$=r(46167),X=r(76725),ee=r(77907);class te extends f.Z{renderDescription(){const{entry:e}=this.props;if(e){const{descriptionMessage:t,fallbackDescription:r}=e;if(t)return d().createElement(O.FormattedMessage,t);if(r)return r}return null}renderComponent(){const{entry:e}=this.props;if(e){const{name:t,examples:r}=e,n=(0,b.EP)(this.props.Prism,(r||[]).join("\n")),o=this.renderSyntax();return i()("div",{},void 0,i()("h1",{style:te.headerStyle},void 0,t),i()("p",{style:te.textStyle},void 0,this.renderDescription()),i()("p",{style:te.textStyle},void 0,i()("b",{},void 0,i()(O.FormattedMessage,{id:"database.formula.syntaxSection.title",defaultMessage:"Syntax",description:"Title of the section describing the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(number)', and appears alongside the Examples section."}))),i()("pre",{style:this.getCodeStyle()},void 0,(0,X.Z)(o,(e=>i()("br",{},"sep:".concat(e))))),i()("p",{style:te.textStyle},void 0,i()("b",{},void 0,i()(O.FormattedMessage,{id:"database.formula.examplesSection.title",defaultMessage:"Examples",description:"Title of the section listing examples of the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(144) == 12', and appears alongside the Syntax section."}))),i()("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:n}}))}return i()("div",{})}renderSyntax(){const{entry:e}=this.props;if(!e)return[];const{name:t,category:r}=e;return r===x.WD.property?[i()("span",{},0,"prop(",JSON.stringify(t),")")]:r===x.WD.constant?[i()("span",{},0,t)]:r===x.WD.function?this.getFunctionSyntax(e):r===x.WD.operator?this.getOperatorSyntax(e):[]}getFunctionSyntax(e){const{name:t}=e;return te.getSignatureNames(e).map((({variadic:e,arity:r},n)=>e?i()("span",{},n,t,"(",i()("i",{},void 0,e),"...)"):i()("span",{},n,t,"(",(0,X.Z)(r.map(((e,t)=>i()("i",{},t,e))),(e=>i()("span",{},"sep:".concat(e),","," "))),")")))}getOperatorSyntax(e){const{operator:t}=e;return y().compact(te.getSignatureNames(e).map((({arity:e},r)=>{if(1===e.length){const[n]=e;return i()("span",{},-r-1,t," ",i()("i",{},void 0,n))}if(2===e.length){const[n,o]=e;return i()("span",{},-r-1,i()("i",{},void 0,n)," ",t," ",i()("i",{},void 0,o))}if(3===e.length){const[t,n,o]=e;return i()("span",{},-r-1,i()("i",{},void 0,t)," ","? ",i()("i",{},void 0,n)," ",": ",i()("i",{},void 0,o))}})).concat(this.getFunctionSyntax(e)))}static getSignatureNames(e){const{name:t,signatures:r}=e;return"if"===t?[{arity:["boolean","value","value"]}]:"format"===t||"unaryPlus"===t?[{arity:["value"]}]:"equal"===t||"unequal"===t?[{arity:["value","value"]}]:r.map((({arity:e,variadic:t})=>({variadic:t?te.typeNameMap[t]:void 0,arity:e?y().compact(e.map((e=>te.typeNameMap[e]))):[]})))}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:3,fontSize:13,margin:0,fontFamily:M.Z.getCompositeFontFamily(q.SP).mono,lineHeight:1.4}}}l()(te,"typeNameMap",{checkbox:"boolean",number:"number",text:"text",date:"date"}),l()(te,"headerStyle",{fontSize:20,margin:0,lineHeight:1,marginTop:4,marginBottom:12}),l()(te,"textStyle",{marginTop:8,marginBottom:8,fontSize:13,lineHeight:1.4});const re=(0,ee.withDependency)(ee.deps.prismjs,((e,t)=>d().createElement(te,o()({},t,{Prism:e}))));var ne=r(83071),oe=r(86646),se=r(3779),ie=r(95009),ae=r(14947),le=r(15282);class pe extends f.Z{renderComponent(){const{entry:{name:e}}=this.props;return i()(Y.Z,{focused:this.props.focused,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,icon:i()("div",{style:{...J.Z.defaultWrapStyle,...this.environment.device.isMobile&&{marginLeft:14}}},void 0,this.renderPropertyIcon()),title:e,right:this.renderDocumentationButtonPopup(),style:{...!this.environment.device.isMobile&&{paddingLeft:8,paddingRight:8}},desktopIconStyle:{marginLeft:0}})}renderDocumentationButtonPopup(){const{device:e}=this.environment;if(this.environment.device.isMobile)return i()($.Z,{popupType:e.isMobile?$.Z.PopupType.SlideUp:$.Z.PopupType.Popup,renderOrigin:e=>d().createElement(ae.Z,o()({mobileFeedback:!0,style:{width:16,height:16}},e),se.Z.typesUnknownType({fill:this.theme.mediumIconColor})),render:t=>{let r;return r=e.isMobile?{menuType:ie.ZP.MenuType.Modal,title:i()(O.FormattedMessage,{defaultMessage:"Documentation",id:"database.formulaPropertyEntryMenuItem.title",description:"In this context, documentation refers to the documentation popup for formulas property values in databases."}),right:i()(le.DoneMenuText,{}),onClickRight:t.close}:{menuType:ie.ZP.MenuType.Popup},d().createElement(ie.ZP,r,i()(ne.Z,{},void 0,i()(oe.Z,{title:i()(re,{entry:this.props.entry}),style:{paddingTop:10,paddingBottom:16}})))}})}renderPropertyIcon(){const{entry:e}=this.props;if(e.category===x.WD.property||e.category===x.WD.constant){const{resultType:t}=e;return i()(J.Z,{type:t,size:14,theme:this.theme})}if(e.category===x.WD.function||e.category===x.WD.operator){const{signatures:[{resultType:t}]}=e;return i()(J.Z,{type:t,size:14,theme:this.theme})}}}l()(pe,"contextTypes",{...ie.ff});const de=pe;var ue=r(2665),ce=r(50906),me=r(29798),he=r(592),fe=r(32918),ge=r(27832),ye=r(74523),ve=r(33665);class Se extends f.Z{constructor(...e){super(...e),l()(this,"storeTypes",{formulaInputStore:h,menuListStore:me.Z})}renderComponent(){const{device:e}=this.environment,{schema:t,property:r,disabled:n}=this.props,{error:o}=this.stores.formulaInputStore.state,{formula:s}=t[r],a=i()(p.Fragment,{},void 0,i()(ee.DependencyConsumer,{dependency:ee.deps.prismjs},void 0,(e=>d().createElement(Q,{ref:e=>{e&&(this.formulaInput=e)},Prism:e,store:this.stores.formulaInputStore,formula:s,schema:t,property:r,disabled:n,onChange:e=>this.handleInputChange(e),onSubmit:e=>this.handleInputSubmit(e),wrapStyle:{overflow:"hidden"},inputContainerStyle:{maxHeight:"45vh",overflow:"scroll"}}))),e.isMobile&&this.renderStatus());let l;return l=e.isMobile?{menuType:ie.ZP.MenuType.Modal,title:i()(O.FormattedMessage,{id:"database.mobileFormulaModal.title",defaultMessage:"Formula"}),left:i()(le.CancelMenuText,{}),right:o?void 0:i()(O.FormattedMessage,{id:"database.mobileFormulaModal.saveButton.label",defaultMessage:"Save"}),onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:ie.ZP.MenuType.Popup,width:580,height:n?"none":void 0,disableScroller:!0,header:a,footer:this.renderStatus(),scrollerStyle:{display:"flex"}},d().createElement(ie.ZP,l,!n&&this.renderContent())}renderContent(){const{device:e}=this.environment,t=this.getLibrary(),r=this.getFocusedEntry(t);return e.isMobile?i()(u.Z,{initialFocus:0,context:{blocks:[],environment:this.environment,publicEditMode:void 0},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore}):i()("div",{style:{display:"flex",flexGrow:1,boxShadow:"\n\t\t\t\t\t\t\tinset 0 1px 0 ".concat(this.theme.regularDividerColor,",\n\t\t\t\t\t\t\tinset 0 -1px 0 ").concat(this.theme.regularDividerColor,"\n\t\t\t\t\t\t"),maxHeight:295}},void 0,i()(he.ZP,{type:he.xm.Y,style:{width:180,flexGrow:0,flexShrink:0}},void 0,i()(u.Z,{initialFocus:0,context:{blocks:[],environment:this.environment,publicEditMode:void 0},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,disableMouseLeaveBlur:!0})),i()(he.ZP,{type:he.xm.Y,style:{padding:12,boxShadow:"inset 1px 0 0 ".concat(this.theme.regularDividerColor),flexGrow:1}},void 0,i()(re,{entry:r})))}renderStatus(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=w.fg(this.environment),{error:n}=this.stores.formulaInputStore.state;return n?i()("div",{style:e.isMobile?this.getMobileStatusWrapStyle():this.getDesktopStatusWrapStyle()},void 0,i()("span",{style:{...e.isMobile&&Se.mobileStatusStyle,...Se.errorStatusStyle}},void 0,n),!e.isMobile&&this.renderLearnMoreLink()):e.isMobile?i()("div",{style:this.getMobileStatusWrapStyle()},void 0,i()("span",{style:Se.mobileStatusStyle},void 0,i()(O.FormattedMessage,{defaultMessage:"No errors.",id:"database.formula.mobileNoErrors.message"}))):t?void 0:i()("div",{style:this.getDesktopStatusWrapStyle()},void 0,i()("span",{},void 0,i()(O.FormattedMessage,{id:"database.formula.keyboardShortcutHint",defaultMessage:"{commandEnter} to accept.",description:'Caption that describes keyboard shortcut to confirm changes to a formula and close the formula editor. Appears as "⌘+Enter to accept." on Mac, Ctrl+Enter on Windows.',values:{commandEnter:i()("span",{style:{fontWeight:M.Z.fontWeight.medium}},void 0,r,"+Enter")}})),this.renderLearnMoreLink())}renderLearnMoreLink(){return i()("div",{style:{marginLeft:"auto"}},void 0,i()(ye.Z,{title:i()("span",{style:{fontSize:M.Z.fontSize.UISmall.desktop}},void 0,i()(O.FormattedMessage,{defaultMessage:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})),href:(0,ve.U)("guides.formulas"),analyticsFrom:"formula_property_menu"}))}renderSections(e){return e.map((e=>({key:e.key,title:this.props.intl.formatMessage(e.titleMessage),render:e=>d().createElement(ne.Z,o()({},e,{desktopTitleStyle:{paddingLeft:8,paddingRight:8}})),actions:e.entries.map(((e,t)=>({key:this.getEntryKey(e,t),displayName:e.name,analyticsName:e.name,searchName:e.name,render:t=>d().createElement(de,o()({},t,{entry:e})),action:()=>{this.formulaInput.insertEntry(e)},closeParentMenu:!1})))})))}handleUpdate(e,t){const{onChange:r,schema:n,property:o,analyticsFrom:s}=this.props;if(e&&"error"===e.type);else{const{type:i,name:a,number_format:l}=n[o];r({schema:{...n,[o]:{type:i,name:a,formula:e,number_format:l}},close:t});const p=n[o];p&&ce.$qu(this.environment,{property_type:p.type,action:"formula_edit",from:s})}}getLibrary(){const{schema:e,property:t,block:r,intl:n}=this.props,o=Object.keys(e).filter((e=>e!==t)).map((t=>{const o=e[t];if(!o)throw new Error("Property not found.");const{name:s}=o,i=ue.Qs({property:t,schema:e,block:r,getRecordValue:this.getRecordValue,userTimeZone:fe.x7,intl:n,depth:0,resultCache:{}});return{name:s,category:x.WD.property,fallbackDescription:n.formatMessage({id:"database.formula.property.description",defaultMessage:"Returns the {propertyName} property for each entry."},{propertyName:s}),resultType:b.z6(o),examples:["prop(".concat(JSON.stringify(s),") == ").concat(JSON.stringify(i))]}}));return[x.jQ(x.WD.property,o),...x.ZY]}getFocusedEntry(e){const t=this.stores.menuListStore.state.focus.focusedKey;if(void 0!==t)for(const r of e)for(const[e,n]of r.entries.entries())if(this.getEntryKey(n,e)===t)return n}getEntryKey(e,t){return"".concat(e.name," ").concat(t)}getDesktopStatusWrapStyle(){return{display:"flex",flex:"none",alignItems:"center",fontSize:12,paddingLeft:8,paddingRight:8,height:30,color:this.theme.mediumTextColor}}getMobileStatusWrapStyle(){const{WindowSizeStore:e}=this.environment;return{display:"flex",flex:"none",alignItems:"center",fontSize:14,height:28,color:this.theme.mediumTextColor,background:this.theme.popoverBackground,boxShadow:"0 1px 0 ".concat(this.theme.regularDividerColor),paddingLeft:e.state.paddingLeftCSS,paddingRight:e.state.paddingRightCSS}}get getRecordValue(){return ge.default.getCurrentBlockValueFn()}handleInputChange(e){this.handleUpdate(e,!1)}handleInputSubmit(e){this.handleUpdate(e,!0)}}l()(Se,"mobileStatusStyle",{paddingLeft:16,paddingRight:16}),l()(Se,"errorStatusStyle",{color:N.ZP.redWithAlpha(.8),...M.Z.textOverflowStyle});const be=(0,O.injectIntl)(Se)}}]);