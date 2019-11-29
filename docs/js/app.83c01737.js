(function(e){function a(a){for(var s,r,n=a[0],d=a[1],o=a[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(a);while(u.length)u.shift()();return i.push.apply(i,o||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],s=!0,n=1;n<t.length;n++){var d=t[n];0!==l[d]&&(s=!1)}s&&(i.splice(a--,1),e=r(r.s=t[0]))}return e}var s={},l={app:0},i=[];function r(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=s,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)r.d(t,s,function(a){return e[a]}.bind(null,s));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var c=d;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("41f5")},"41f5":function(e,a,t){"use strict";t.r(a);t("666b"),t("4586"),t("90e9"),t("ad07");var s=t("9869"),l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"ui form"},[t("div",{staticClass:"ui dividing header"},[t("div",{staticClass:"ui equal width grid",staticStyle:{"align-items":"center"}},[e._m(0),t("div",{staticClass:"two wide column"},[t("div",{staticClass:"switch__container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.masked,expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(a){var t=e.masked,s=a.target,l=!!s.checked;if(Array.isArray(t)){var i=null,r=e._i(t,i);s.checked?r<0&&(e.masked=t.concat([i])):r>-1&&(e.masked=t.slice(0,r).concat(t.slice(r+1)))}else e.masked=l}}}),t("label",{attrs:{for:"switch-shadow"}})])]),e._m(1)])]),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Zip",mask:"#####",value:"12345",masked:e.masked}}),t("field",{attrs:{label:"Brazil Zip",mask:"#####-###",value:"87010-230",masked:e.masked}})],1),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Brazil CPF",mask:"###.###.###-##",value:"12345678901",masked:e.masked}}),t("field",{attrs:{label:"Brazil CNPJ",mask:"##.###.###/####-##",value:"27.865.757/0063-05",masked:e.masked}})],1),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"US Phone",mask:"+1 (###) ###-####",value:"2025550134",masked:e.masked}}),t("field",{attrs:{label:"Brazil Phone",mask:"+55 (##) ####-####",value:"4432211266",masked:e.masked}})],1),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"DateTime",mask:"##/##/#### ##:##:##",value:"04011981 060515",placeholder:"dd/mm/yyyy hh:mm:ss",masked:e.masked}}),t("field",{attrs:{label:"Credit Card",mask:"#### #### #### ####",value:"4916479938940351",masked:e.masked}})],1),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Date",mask:"##/##/####",placeholder:"dd/mm/yyyy",value:"04011981",masked:e.masked}}),t("field",{attrs:{label:"Time",mask:"##:##:##",placeholder:"hh:mm:ss",value:"060515",masked:e.masked}})],1),t("div",{staticClass:"equal width fields"},[t("field",{attrs:{label:"Br Car Plate",mask:"AAA ####",value:"IVY1703",masked:e.masked,type:"text"}}),t("field",{attrs:{label:"Canada Zip",mask:"S#S #S#",value:"M5P 2N7",masked:e.masked,type:"text"}})],1),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("IBAN "+e._s(e.iban))]),t("the-mask",{attrs:{mask:"AA## #### #### #### #### #### ###",masked:e.masked},model:{value:e.iban,callback:function(a){e.iban=a},expression:"iban"}})],1),t("div",{staticClass:"field"},[t("label",[e._v("Vehicle Identification "+e._s(e.vehicle))]),t("the-mask",{attrs:{mask:"XX.XX.XXXXX.X.X.XXXXXX",masked:e.masked},model:{value:e.vehicle,callback:function(a){e.vehicle=a},expression:"vehicle"}})],1)]),t("h4",{staticClass:"ui dividing header"},[e._v("Dynamic Masks (Using Array)")]),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"CPF/CNPJ",mask:["###.###.###-##","##.###.###/####-##"],masked:e.masked}})],1),t("pre",[e._v("<the-mask :mask=\"['###.###.###-##', '##.###.###/####-##']\" />")])]),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Brazil 9th digit",mask:["(##) ####-####","(##) #####-####"],masked:e.masked}})],1),t("pre",[e._v("<the-mask :mask=\"['(##) ####-####', '(##) #####-####']\" />")])])]),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Agency",mask:["###","###-#","###-##"],masked:e.masked}})],1),t("pre",[e._v("<the-mask :mask=\"['###', '###-#', '###-##']\" />")])]),t("div",{staticClass:"field"},[t("p",[t("field",{attrs:{label:"Bank Account",mask:["###-#","####-#","#####-#","######-#"],masked:e.masked}})],1),t("pre",[e._v("<the-mask :mask=\"['###-#', '####-#', '#####-#', '######-#']\" />")])])]),t("h4",{staticClass:"ui dividing header"},[e._v("Custom Tokens (Creates token F to represent a hexadecimal [0-9A-F])")]),t("div",[t("field",{attrs:{label:"Hex. Color",mask:"FFFFFF",masked:e.masked,tokens:e.hexTokens}}),t("pre",[e._v('<the-mask mask="FFFFFF" :tokens="hexTokens" />')]),t("pre",[e._v("hexTokens: {\n  F: {\n    pattern: /[0-9a-fA-F]/,\n    transform: v => v.toLocaleUpperCase()\n  }\n}")])],1),t("h1",{attrs:{id:"tokens"}},[e._v("Tokens")]),t("pre",[e._v("    '#': {pattern: /\\d/},\n    'X': {pattern: /[0-9a-zA-Z]/},\n    'S': {pattern: /[a-zA-Z]/},\n    'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},\n    'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},\n    '!': {escape: true}\n    ")]),t("h1",[e._v("Try it now")]),t("div",{staticClass:"equal width fields"},[t("div",{staticClass:"field"},[t("label",[e._v("masked")]),t("div",{staticClass:"switch__container small",staticStyle:{margin:"0"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.masked,expression:"masked"}],staticClass:"switch switch--shadow",attrs:{id:"switch-shadow",type:"checkbox"},domProps:{checked:Array.isArray(e.masked)?e._i(e.masked,null)>-1:e.masked},on:{change:function(a){var t=e.masked,s=a.target,l=!!s.checked;if(Array.isArray(t)){var i=null,r=e._i(t,i);s.checked?r<0&&(e.masked=t.concat([i])):r>-1&&(e.masked=t.slice(0,r).concat(t.slice(r+1)))}else e.masked=l}}}),t("label",{attrs:{for:"switch-shadow"}})])]),t("div",{staticClass:"field"},[t("label",[e._v("mask")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.mask,expression:"mask"}],domProps:{value:e.mask},on:{input:function(a){a.target.composing||(e.mask=a.target.value)}}})]),t("div",{staticClass:"field"},[t("label",[e._v("value")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],domProps:{value:e.value},on:{input:function(a){a.target.composing||(e.value=a.target.value)}}})]),t("div",{staticClass:"field"},[t("label",[e._v("placeholder")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.placeholder,expression:"placeholder"}],domProps:{value:e.placeholder},on:{input:function(a){a.target.composing||(e.placeholder=a.target.value)}}})]),t("div",{staticClass:"field"},[t("label",[e._v("type")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.type=a.target.multiple?t:t[0]}}},[t("option",[e._v("text")]),t("option",[e._v("tel")])])])]),t("div",{staticClass:"field"},[t("label",[e._v("Test your input mask below")]),t("the-mask",{attrs:{mask:e.mask,value:e.value,type:e.type,masked:e.masked,placeholder:e.placeholder}})],1),t("pre",[e._v(e._s(e.code))]),t("h2",[e._v("Directive Usage")]),t("div",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"field"},[t("input",{attrs:{type:"tel",placeholder:"dd/mm/yyyy"}})]),t("pre",[e._v(e._s(e.directive))]),t("div",{staticClass:"ui tertiary inverted red segment"},[e._v(" The value returned from directive is always masked! ")]),t("div",{staticClass:"ui tertiary inverted orange segment"},[e._v(' When possible, prefer to use input type="tel" to avoid glitch on android devices ')])])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"right aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("raw")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left aligned column"},[t("h1",{staticStyle:{"margin-bottom":"10px"}},[e._v("masked")])])}],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"inline field"},[t("label",[e._v(e._s(e.label))]),t("the-mask",{attrs:{mask:e.mask,tokens:e.tokens,placeholder:e.placeholder,masked:e.masked,type:e.type||"tel"},model:{value:e.editableValue,callback:function(a){e.editableValue=a},expression:"editableValue"}}),t("span",[e._v(e._s(e.editableValue))])],1)},n=[],d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},o=[],c={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleUpperCase()},a:{pattern:/[a-zA-Z]/,transform:e=>e.toLocaleLowerCase()},"!":{escape:!0}};function m(e,a,t=!0,s=c){e=e||"",a=a||"";var l,i=0,r=0,n="";while(i<a.length&&r<e.length){l=a[i];var d=s[l],o=e[r];d&&!d.escape?(d.pattern.test(o)&&(n+=d.transform?d.transform(o):o,i++),r++):(d&&d.escape&&(i++,l=a[i]),t&&(n+=l),o===l&&r++,i++)}var m="";while(i<a.length&&t){if(l=a[i],s[l]){m="";break}m+=l,i++}return n+m}function u(e,a,t,s){a=a.slice().sort((e,a)=>e.length-a.length);for(let l=0;l<a.length;l++){const i=a[l],r=a[l+1];if(!(r&&m(e,r,t,s).length>i.length))return m(e,i,t,s)}return""}var v=function(e,a,t,s){return a?Array.isArray(a)?u(e,a,t,s):m(e,a,t,s):e};function p(e){var a=document.createEvent("Event");return a.initEvent(e,!0,!0),a}var k=function(e,a){var t=a.value||{};if((Array.isArray(t)||"string"===typeof t)&&(t={masked:!0,mask:t,tokens:c}),"INPUT"!==e.tagName.toLocaleUpperCase()){var s=e.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);e=s[0]}e.oninput=function(a){if(a.isTrusted){var s=e.selectionEnd,l=e.value[s-1];if(e.value=v(e.value,t.mask,t.masked,t.tokens),e===document.activeElement){var i=a.data&&s==e.value.length;if(i)s=e.value.length;else if(l){var r=s;while(r<=e.value.length&&e.value.charAt(r-1)!==l)r++;s=r<=e.value.length?r:s-1}e.setSelectionRange(s,s),setTimeout((function(){e.setSelectionRange(s,s)}),0)}e.dispatchEvent(p("input"))}};var l=v(e.value,t.mask,t.masked,t.tokens);l!==e.value&&(e.value=l,e.dispatchEvent(p("input")))},h={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:()=>c}},directives:{mask:k},data(){return{lastValue:null,display:this.value}},watch:{value(e){e!==this.lastValue&&(this.display=e)},masked(){this.refresh(this.display)}},computed:{config(){return{mask:this.mask,tokens:this.tokens,masked:!0}}},methods:{onInput(e){e.isTrusted||this.refresh(e.target.value)},refresh(e){this.display=e;var a=v(e,this.mask,this.masked,this.tokens);a!==this.lastValue&&(this.lastValue=a,this.$emit("input",a))}}},f=h,y=t("2be6"),b=Object(y["a"])(f,d,o,!1,null,null,null),g=b.exports,_={components:{TheMask:g},props:["label","mask","placeholder","masked","type","tokens","value"],data(){return{editableValue:this.value}}},w=_,C=(t("9c4b"),Object(y["a"])(w,r,n,!1,null,null,null)),A=C.exports,x={components:{Field:A,TheMask:g},data(){return{masked:!1,iban:"BR0500000000011870000713973C1",vehicle:"KNDJB723025140702",hexTokens:{F:{pattern:/[0-9a-fA-F]/,transform:e=>e.toLocaleUpperCase()}},type:"text",placeholder:"test your mask here",mask:"#XSAa",value:"12TgB",directive:'<input type="tel" v-mask="\'##/##/####\'" />'}},computed:{code(){return'<the-mask mask="'.concat(this.mask,'" value="').concat(this.value,'" type="').concat(this.type,'" masked="').concat(this.masked,'" placeholder="').concat(this.placeholder,'"></the-mask>')}},directives:{mask:k}},P=x,T=(t("4a98"),t("91fb"),Object(y["a"])(P,l,i,!1,null,null,null)),F=T.exports;new s["a"]({el:"#app",render:e=>e(F)})},"4a98":function(e,a,t){"use strict";var s=t("76f7"),l=t.n(s);l.a},"4f49":function(e,a,t){},"76f7":function(e,a,t){},"8c6b":function(e,a,t){},"91fb":function(e,a,t){"use strict";var s=t("4f49"),l=t.n(s);l.a},"9c4b":function(e,a,t){"use strict";var s=t("8c6b"),l=t.n(s);l.a}});