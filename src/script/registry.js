function Biaodan() {
   this.biao = document.querySelector('.biao');
   this.form = document.querySelector('.form');
   this.input = document.querySelectorAll('.form p input');
   this.span = document.querySelectorAll('.form p span');

}
Biaodan.prototype.init = function () {
   this.shouji();
   this.mima();
   this.queren();


}
//手机号码框
Biaodan.prototype.shouji = function () {
   let _this = this;
   this.input[0].onfocus = function () {
      this.placeholder = '';
   }

   this.input[0].onblur = function () {
      var num = /^1[3578]\d{9}$/;
      if (this.value !== '') {//判断框里不是空的
         if (num.test(this.value)) {//检查框里的内容
            _this.span[0].innerHTML = '正确'
            _this.span[0].style.color = 'lawngreen';
            this.style.borderColor = '';
         } else {
            _this.span[0].innerHTML = '手机号错误'
            _this.span[0].style.color = 'red';
         }

      } else {
         _this.span[0].innerHTML = '不能空';
         _this.span[0].style.color = 'red';
         this.style.borderColor = 'red';
      }
   }
}

Biaodan.prototype.mima = function () {
   let _this = this;
   this.input[1].onfocus = function () {
      this.placeholder = '';
   }

   this.input[1].onblur = function () {
      if (this.value.length >= 8 && this.value.length <= 16) {//判断框里的长度
         var mi = /\d+/;
         var mimi = /[a-z]+/;
         var ma = /[\w\_]+/;
         var m = 0;
         if (mi.test(this.value)) {
            m++;
         }
         if (mimi.test(this.value)) {
            m++;
         }
         if (ma.test(this.value)) {
            m++;
         }//检测正则
         switch (m) {
            case 1: _this.span[1].innerHTML = '密码弱';
               _this.span[1].style.color = 'red';
               break;
            case 2: _this.span[1].innerHTML = '密码中';
               _this.span[1].style.color = 'orange';
               break;
            case 3: _this.span[1].innerHTML = '密码强';
               _this.span[1].style.color = 'lawngreen';
               break;
         }
      } else {
         _this.span[1].innerHTML = '不能空';
         _this.span[1].style.color = 'red';
         this.style.borderColor = 'red';
      }
   }
}

Biaodan.prototype.queren = function () {
    let _this=this;
   this.input[2].onfocus = function () {
      this.placeholder = '';
   }

   this.input[2].onblur = function () {
      if(this.value!=''){
        
      
      if (this.value === _this.input[1].value ) {
         _this.span[2].innerHTML = '正确'
         _this.span[2].style.color = 'lawngreen';
         this.style.borderColor = '';
      } else {
         _this.span[2].innerHTML = '密码错误';
         _this.span[2].style.color = 'red';
         this.style.borderColor = 'red';
      }}
   }
}


export { Biaodan }