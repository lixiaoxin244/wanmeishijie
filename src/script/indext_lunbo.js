class Lunbo {
    constructor() {
        this.div=document.querySelector('.bbd');
        this.ul = document.querySelector('.lide');
        this.li = document.querySelectorAll('.lide li');
        this.yuan = document.querySelectorAll('.yuan a');
        this.zuo = document.querySelector('.zuo');
        this.you = document.querySelector('.you');
        this.index = 0;
        this.timer = null;
    }
    init() {
        this.tabswitch();
        this.jiantou();
        this.autoPlay();
        this.hide();

    } 
    //圆点切换
    tabswitch() {
        for (let j = 0; j < this.yuan.length; j++) {
            this.yuan[j].onmouseover = function () {
                if (this.className === "action") {
                    this.className = "";
                } else {
                    this.className = "action";
                }
            }
            this.yuan[j].onmouseout = function () {
                this.className = "";
            }
        }

    }
    

    //箭头切换图片圆点改变
    jiantou() {
        let liwidth = this.li[0].offsetWidth;
        let _this = this;
        //这个标记就是给每一张图片打标可以判断标记来移动图片
         this.you.onclick = function () {
            _this.index++;//每一张给索引标记
            if (_this.index >= 3) {//判断图片
                _this.index = 0;
            }
            //改变ul的宽度移动图片
            _this.ul.style.left = -liwidth * _this.index + 'px';
            _this.clean();//先清楚圆点颜色
            //再加上圆点的索引取得每一项改变颜色
            _this.yuan[_this.index].className = 'action';
        }

        this.zuo.onclick = function () {
            _this.index--;
            if (_this.index < 0) {
                _this.index = 2;
            }
            _this.ul.style.left = -liwidth * _this.index + 'px';
            _this.clean();
            _this.yuan[_this.index].className = 'action';
        }
    }
    //封装了清空圆点的类名
    clean() {
        for (let i of this.yuan) {
            i.className = '';
        }
    }
//自动播放

    autoPlay(){
        this.timer= setInterval(()=>{
            this.jiantou(this.you.onclick());
         }, 2000);
    }
//鼠标移入箭头消失
hide(){ 
    this.div.onmouseover=()=>{
        this.zuo.style.display='block';
        this.you.style.display='block';
        clearInterval(this.timer);
    }
    this.div.onmouseout=()=>{
        this.zuo.style.display='none';
        this.you.style.display='none';
        this.autoPlay()
    }
}
}



export { Lunbo }
 