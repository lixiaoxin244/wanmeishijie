import { bufferMove } from './move.js'
class Show {
    constructor() {
        this.car = document.querySelector('.t-car');
        this.hidden = document.querySelector('.hidden-car');
        this.shop = document.querySelector('.dao-left');
        this.shopxian = document.querySelector('.ul');
        this.p = document.querySelector('.text');
        this.span = document.querySelector('.span');
        //图片浮动
        this.a = document.querySelectorAll('.guanggao a');
        this.Aimg = document.querySelectorAll('.guanggao a img');
        //展示区浮动
        this.ad=document.querySelector('.ad');
        this.li=document.querySelectorAll('.temp li');
       
    }

    init() {
        this.gouwuche();
        this.shopp();
        this.fu();
        this.zhanshi();
    }
    //购物车隐藏的模块
    gouwuche() {
        let _this = this;
        _this.hidden.style.cssText = 'visibility:visible;overflow:hidden;height:0';
        this.car.onmouseover = function () {
            bufferMove(_this.hidden, { height: 102 })
        }
        this.car.onmouseout = function () {
            bufferMove(_this.hidden, { height: 0 })
        }
    }



    //全部商品显示
    shopp() {
        let _this = this;
        this.shop.onmouseover = function () {
            _this.shopxian.style.visibility = 'visible';

            this.style.background = 'red';
            _this.p.style.color = 'white';
        }
        this.shop.onmouseout = function () {
            _this.shopxian.style.visibility = 'hidden';

            this.style.background = '';
            _this.p.style.color = '';
        }
    }


    //浮动图片
    fu() {
        for (let i of this.a) {
            i.onmouseover = function () {
                this.style.top = -5 + 'px';
            }
            i.onmouseout = function () {
                this.style.top = 0 + 'px';
            }
        }
        
    }

    //展示区
    zhanshi() {
        for (let j of this.li) {
            j.onmouseover = function () { 
            bufferMove(j, { top: -10 }) ;
            }
            j.onmouseout = function () {
                bufferMove(j, { top: 0 }) ;
            }
        }
  
        this.ad.onmouseover = function () {
          this.style.top=-10+'px';
        }
        this.ad.onmouseout = function () {
            this.style.top=0;
        }
        
    }








}





export { Show }
//先取得元素。鼠标移入显示移除消失