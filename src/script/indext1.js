import {Lunbo} from "./indext_lunbo.js";
import { Show } from "./indext_xianshi.js";
import { Biaodan } from "./registry.js"; 
import { Denglu } from "./denglu.js"; 



if(document.body.id=='shouye'){ 
    new Lunbo().init(); 
    new Show().init();
};
if(document.body.id=='zhuce'){ 
    new Biaodan().init();
};
if(document.body.id=='denglu'){ 
    new Denglu().init();
}