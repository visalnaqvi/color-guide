const mav = document.querySelector('.nav');
const menu = document.querySelector(".menu");
document.addEventListener("DOMContentLoaded",getLocalStorage);
document.addEventListener("DOMContentLoaded",enableDrkMode);
mav.addEventListener("click",navClick);

var border_width = false;

var shadow = true;
var loded = false;
var storeData;
var menuflag = false;
function navClick(e){
    var click = e.target;
    if(click.classList.contains("settings")){
        if(storeData["dark-mode"]==false){
            click.style.border = 'none';
            document.documentElement.style.setProperty('--body', '#1d1d1e');
            document.documentElement.style.setProperty('--color-hover', '#000000');
            document.documentElement.style.setProperty('--grey', '#ffffff');
            document.documentElement.style.setProperty('--light-grey', '#aaaaaa');
            document.documentElement.style.setProperty('--border', '#ffffff');
            document.documentElement.style.setProperty('--card-border', '#444444');
            document.documentElement.style.setProperty('--edit-sec-color', "#111111");
            document.documentElement.style.setProperty('--plus-icon', 'url(./icons/add-icon-black.svg)');
            document.documentElement.style.setProperty('--refresh-icon', 'url(./icons/refreshwhite.svg)');
            document.documentElement.style.setProperty('--setting-icon', 'url(./icons/sunwhite.svg)');
            // document.getElementById("circle-dark").style.right = "0";
            // document.getElementById("circle-dark").style.left = "auto";
            storeData['dark-mode'] = true;
            localStorage.setItem("storeData",JSON.stringify(storeData));
            return;
        }
        
        else{//light
            click.style.border = '2px black solid';
            document.documentElement.style.setProperty('--color-hover', '#ffffff');
            document.documentElement.style.setProperty('--body', '#dddddd');
            document.documentElement.style.setProperty('--grey', '#444444');
            document.documentElement.style.setProperty('--light-grey', '#aaaaaa');
            document.documentElement.style.setProperty('--border', '#000000');
            document.documentElement.style.setProperty('--card-border', '#ffffff');
            document.documentElement.style.setProperty('--edit-sec-color', '#ffffff');
            document.documentElement.style.setProperty('--plus-icon', 'url(../icons/add-icon.svg)');
            document.documentElement.style.setProperty('--refresh-icon', 'url(./icons/refresh-black.svg)');
            document.documentElement.style.setProperty('--setting-icon', 'url(./icons/moon-black.svg)');
            // document.getElementById("circle-dark").style.right = "auto";
            // document.getElementById("circle-dark").style.left = "0";
            storeData['dark-mode'] = false;
            localStorage.setItem("storeData",JSON.stringify(storeData));
            return;
        }
    }


    if(click.classList.contains('ham-menu')){

        if(menuflag==true){
            menu.style.height = '0px';
            menu.style.width = '0px';
            menu.style.opacity = '0';
            menuflag=false;
            return;
        }
        if(menuflag==false){
            menu.style.height = '200px';
            menu.style.width = '200px';
            menu.style.opacity = '1';
            menuflag=true;
            return;
        }
       
    }


}

function getLocalStorage(){
    if(localStorage.getItem("storeData")==null){
        storeData = {"dark-mode":false,"loded":true};
    }else{
         storeData = JSON.parse(localStorage.getItem("storeData"));
    }
}

function enableDrkMode(){
    if(storeData["dark-mode"]==true){
        document.documentElement.style.setProperty('--body', '#1d1d1e');
        document.documentElement.style.setProperty('--color-hover', '#000000');
        document.documentElement.style.setProperty('--grey', '#ffffff');
        document.documentElement.style.setProperty('--light-grey', '#aaaaaa');
        document.documentElement.style.setProperty('--border', '#ffffff');
        document.documentElement.style.setProperty('--card-border', '#444444');
        document.documentElement.style.setProperty('--edit-sec-color', '#111111');
        document.documentElement.style.setProperty('--plus-icon', 'url(./icons/add-icon-black.svg)');
        document.documentElement.style.setProperty('--refresh-icon', 'url(./icons/refreshwhite.svg)');
        document.documentElement.style.setProperty('--setting-icon', 'url(./icons/sunwhite.svg)');
        // document.getElementById("circle-dark").style.right = "0";
        // document.getElementById("circle-dark").style.left = "auto";
        return;
    }
    
    if(storeData["dark-mode"]==false){//light
        document.documentElement.style.setProperty('--color-hover', '#ffffff');
        document.documentElement.style.setProperty('--body', '#dddddd');
        document.documentElement.style.setProperty('--grey', '#444444');
        document.documentElement.style.setProperty('--light-grey', '#aaaaaa');
        document.documentElement.style.setProperty('--border', '#000000');
        document.documentElement.style.setProperty('--card-border', '#ffffff');
        document.documentElement.style.setProperty('--edit-sec-color', '#ffffff');
        document.documentElement.style.setProperty('--plus-icon', 'url(./icons/add-icon.svg)');
        document.documentElement.style.setProperty('--refresh-icon', 'url(./icons/refresh-black.svg)');
        document.documentElement.style.setProperty('--setting-icon', 'url(./icons/moon-black.svg)');
        // document.getElementById("circle-dark").style.right = "auto";
        // document.getElementById("circle-dark").style.left = "0";
        return;
    }
}