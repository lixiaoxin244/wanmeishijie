"use strict";function Biaodan(){this.biao=document.querySelector(".biao"),this.form=document.querySelector(".form"),this.input=document.querySelectorAll(".form p input"),this.span=document.querySelectorAll(".form p span")}Object.defineProperty(exports,"__esModule",{value:!0}),Biaodan.prototype.init=function(){this.shouji(),this.mima(),this.queren()},Biaodan.prototype.shouji=function(){var e=this;this.input[0].onfocus=function(){this.placeholder=""},this.input[0].onblur=function(){""!==this.value?/^1[3578]\d{9}$/.test(this.value)?(e.span[0].innerHTML="正确",e.span[0].style.color="lawngreen",this.style.borderColor=""):(e.span[0].innerHTML="手机号错误",e.span[0].style.color="red"):(e.span[0].innerHTML="不能空",e.span[0].style.color="red",this.style.borderColor="red")}},Biaodan.prototype.mima=function(){var t=this;this.input[1].onfocus=function(){this.placeholder=""},this.input[1].onblur=function(){if(8<=this.value.length&&this.value.length<=16){var e=0;switch(/\d+/.test(this.value)&&e++,/[a-z]+/.test(this.value)&&e++,/[\w\_]+/.test(this.value)&&e++,e){case 1:t.span[1].innerHTML="密码弱",t.span[1].style.color="red";break;case 2:t.span[1].innerHTML="密码中",t.span[1].style.color="orange";break;case 3:t.span[1].innerHTML="密码强",t.span[1].style.color="lawngreen"}}else t.span[1].innerHTML="不能空",t.span[1].style.color="red",this.style.borderColor="red"}},Biaodan.prototype.queren=function(){var e=this;this.input[2].onfocus=function(){this.placeholder=""},this.input[2].onblur=function(){""!=this.value&&(this.value===e.input[1].value?(e.span[2].innerHTML="正确",e.span[2].style.color="lawngreen",this.style.borderColor=""):(e.span[2].innerHTML="密码错误",e.span[2].style.color="red",this.style.borderColor="red"))}},exports.Biaodan=Biaodan;