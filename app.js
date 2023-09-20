const color_change_btn = document.querySelector(".color-change-btn");
const new_card_btn = document.querySelector(".new-card-btn");
const color_card_holder = document.querySelector(".color-card-holder");
const color_card_holder2 = document.querySelector(".color-card-holder2");
const margin_holder = document.querySelector(".margin-holder");
// const save_data_btn = document.querySelector(".btns-holder");
var colors = [];
var input_holders;
var colorPickers;
color_card_holder.addEventListener("click",holderClick);
margin_holder.addEventListener('click',marginHolder);
if(color_card_holder2!= null){
    color_card_holder2.addEventListener('click',holderClick);

}
color_change_btn.addEventListener("click",newColor);
if(new_card_btn!=null){
    document.addEventListener("DOMContentLoaded",newCard(0));
    new_card_btn.addEventListener("click",newCardRandom);

}else{
    document.addEventListener("DOMContentLoaded",newCardsPalete(0));
}

// document.addEventListener('click',saveData);
document.addEventListener("DOMContentLoaded",initialize_event_listner);



//todo increan colors lenght to 3
// remove commented section from hrml for 2 other cards
//icrese value to colors length in remove function while click on cross

// function saveData(e){
//     click = e.target;
//     var red0 = document.getElementById('red0').value;
//     var red1 = document.getElementById('red1').value;
//     var red2 = document.getElementById('red2').value;
//     var red3 = document.getElementById('red3').value;
//     var green0 = document.getElementById('green0').value;
//     var green1 = document.getElementById('green1').value;
//     var green2 = document.getElementById('green2').value;
//     var green3 = document.getElementById('green3').value;
//     var blue0 = document.getElementById('blue0').value;
//     var blue1 = document.getElementById('blue1').value;
//     var blue2 = document.getElementById('blue2').value;
//     var blue3 = document.getElementById('blue3').value;
      
//     if(click.classList == 'save-data-btn'){
//         db.collection("colors").doc().set({
//             pc:`#${rgbtohex(red0)}${rgbtohex(green0)}${rgbtohex(blue0)}`,
//             sc1:`#${rgbtohex(red1)}${rgbtohex(green1)}${rgbtohex(blue1)}`,
//             sc2:`#${rgbtohex(red2)}${rgbtohex(green2)}${rgbtohex(blue2)}`,
//             sc3:`#${rgbtohex(red3)}${rgbtohex(green3)}${rgbtohex(blue3)}`,
//         })  }
// }

var margin = false;
function marginHolder(){
    console.log('hello');
    if(margin == false){
        document.documentElement.style.setProperty('--left',"auto");            
        document.documentElement.style.setProperty('--right',"0px");            
        document.documentElement.style.setProperty('--card-margin',"20px");            
        document.documentElement.style.setProperty('--border-width','10px');
        document.documentElement.style.setProperty('--box-shadow','black');
        document.documentElement.style.setProperty('--border-radius','10px');
        document.documentElement.style.setProperty('--new-crd-btn-margin','0px');
        if(color_card_holder2!=null){
            color_card_holder2.style.marginTop = '20px';
        }
        margin=true;
        return;
    }
    else{
        document.documentElement.style.setProperty('--left',"0px");            
        document.documentElement.style.setProperty('--right',"auto");   
        document.getElementById("circle-margin").style.right = "auto";
        document.getElementById("circle-margin").style.left = "0";
        document.documentElement.style.setProperty('--card-margin',"0px");
        document.documentElement.style.setProperty('--border-width','0px');
        document.documentElement.style.setProperty('--border-radius','0px');
        document.documentElement.style.setProperty('--box-shadow','transparent');
        document.documentElement.style.setProperty('--new-crd-btn-margin','20px');   
        if(color_card_holder2!=null){
            color_card_holder2.style.marginTop = '0px';
        }
        margin=false;
        return;
    }

}


function initialize_event_listner(){
    input_holders.forEach(function(input_holder){
        input_holder.addEventListener('input',function(e){
            var click = e.target;
            var click_id = click.id;
            var length = colors.length;
            for(var i = 0 ; i<length;i++){
                if(`red${i}`==click_id){
                   var green_val = document.getElementById(`green${i}`).value;
                   var blue_val = document.getElementById(`blue${i}`).value;
                   var rgb_val = `rgb(${click.value},${green_val},${blue_val})`;
                   var hex_val = `#${rgbtohex(click.value)}${rgbtohex(green_val)}${rgbtohex(blue_val)}`
                   document.getElementById(`rgb-box${i}`).innerHTML = rgb_val;
                   document.getElementById(`color${i}`).style.background = rgb_val;
                   document.getElementById(`color-code${i}`).innerHTML = hex_val;
                   document.getElementById(`color_picker${i}`).style.background = hex_val;
                   document.getElementById(`color_picker${i}`).value = hex_val;
                }
                if(`green${i}`==click_id){
                    var red_val = document.getElementById(`red${i}`).value;
                    var blue_val = document.getElementById(`blue${i}`).value;
                    var rgb_val = `rgb(${red_val},${click.value},${blue_val})`;
                    var hex_val = `#${rgbtohex(red_val)}${rgbtohex(click.value)}${rgbtohex(blue_val)}`;
                    document.getElementById(`rgb-box${i}`).innerHTML = rgb_val;
                    document.getElementById(`color${i}`).style.background = rgb_val;
                    document.getElementById(`color-code${i}`).innerHTML = hex_val;
                    document.getElementById(`color_picker${i}`).value = hex_val;
                    document.getElementById(`color_picker${i}`).style.background = hex_val;
                }
                if(`blue${i}`==click_id){
                    var green_val = document.getElementById(`green${i}`).value;
                    var red_val = document.getElementById(`red${i}`).value;
                    var rgb_val = `rgb(${red_val},${green_val},${click.value})`;
                    var hex_val =`#${rgbtohex(red_val)}${rgbtohex(green_val)}${rgbtohex(click.value)}`;
                    document.getElementById(`rgb-box${i}`).innerHTML = rgb_val;
                    document.getElementById(`color${i}`).style.background = rgb_val;
                    document.getElementById(`color-code${i}`).innerHTML = hex_val;
                    document.getElementById(`color_picker${i}`).value = hex_val;
                    document.getElementById(`color_picker${i}`).style.background = hex_val;
                }

                // if(`color_picker${i}`==click.id){
                //     var hexval = document.getElementById(click.id).value; 
                //     var red_value = hextorgb(hexval[1]+hexval[2]);
                //     var green_value = hextorgb(hexval[3]+hexval[4]);
                //     var blue_value = hextorgb(hexval[5]+hexval[6]);
                //     var new_color_rgb = `rgb(${red_value},${green_value},${blue_value})`;
                //     document.getElementById(`rgb-box${i}`).innerHTML = new_color_rgb;
                //     document.getElementById(`color${i}`).style.background = new_color_rgb;
                //     document.getElementById(`color-code${i}`).innerHTML = hexval;
                //     document.getElementById(`red${i}`).value = red_value;
                //     document.getElementById(`green${i}`).value = green_value;
                //     document.getElementById(`blue${i}`).value = blue_value;
                //     document.getElementById(`color_picker${i}`).style.background = hexval;
                
                // }
            }
        });
    });
    colorPickers.forEach((colorPicker)=>{
        colorPicker.addEventListener('input',function(e){
            var click = e.target;
            var length = colors.length;
            for(var i = 0 ; i<length;i++){
                if(`color_picker${i}`==click.id){
                    var hexval = document.getElementById(click.id).value; 
                    var red_value = hextorgb(hexval[1]+hexval[2]);
                    var green_value = hextorgb(hexval[3]+hexval[4]);
                    var blue_value = hextorgb(hexval[5]+hexval[6]);
                    var new_color_rgb = `rgb(${red_value},${green_value},${blue_value})`;
                    document.getElementById(`rgb-box${i}`).innerHTML = new_color_rgb;
                    document.getElementById(`color${i}`).style.background = new_color_rgb;
                    document.getElementById(`color-code${i}`).innerHTML = hexval;
                    document.getElementById(`red${i}`).value = red_value;
                    document.getElementById(`green${i}`).value = green_value;
                    document.getElementById(`blue${i}`).value = blue_value;
                    document.getElementById(`color_picker${i}`).style.background = hexval;
                
                }
            }
        })
    })

    
}

function rgbtohex(value){
    var hex_val = parseInt(value).toString(16);
    hex_val.length == 1? hex_val = "0"+hex_val : hex_val = hex_val;
    return hex_val;
}

function holderClick(e){
    var click = e.target;
    // if(click.classList.contains("margin-holder")){
    //     if(margin == false){
    //         document.documentElement.style.setProperty('--left',"auto");            
    //         document.documentElement.style.setProperty('--right',"0px");            
    //         document.documentElement.style.setProperty('--card-margin',"20px");            
    //         document.documentElement.style.setProperty('--border-width','10px');
    //         document.documentElement.style.setProperty('--box-shadow','black');
    //         document.documentElement.style.setProperty('--border-radius','10px');
    //         document.documentElement.style.setProperty('--new-crd-btn-margin','0px');
    //         if(color_card_holder2!=null){
    //             color_card_holder2.style.marginTop = '20px';
    //         }
    //         margin=true;
    //         return;
    //     }
    //     else{
    //         document.documentElement.style.setProperty('--left',"0px");            
    //         document.documentElement.style.setProperty('--right',"auto");   
    //         document.getElementById("circle-margin").style.right = "auto";
    //         document.getElementById("circle-margin").style.left = "0";
    //         document.documentElement.style.setProperty('--card-margin',"0px");
    //         document.documentElement.style.setProperty('--border-width','0px');
    //         document.documentElement.style.setProperty('--border-radius','0px');
    //         document.documentElement.style.setProperty('--box-shadow','transparent');
    //         document.documentElement.style.setProperty('--new-crd-btn-margin','20px');   
    //         if(color_card_holder2!=null){
    //             color_card_holder2.style.marginTop = '0px';
    //         }
    //         margin=false;
    //         return;
    //     }
    // }



    if(click.classList[0]=="cross"){
        var token = false;
        var lenght = colors.length;
        if(lenght>1){
            click.parentElement.parentElement.classList.add("fall");
            click.parentElement.parentElement.addEventListener("transitionend",function(){
            if(token==false){
                token = true;
                click.parentElement.parentElement.remove();
                colors.splice(1,1);
                newIds();  
                if(color_card_holder2.childNodes.length==0){
                    color_card_holder2.style.display = 'none';
                    color_card_holder.style.height = '60vh'
                    color_card_holder.style.justifyContent = 'center'; 
                    input_holders.forEach((ih) =>{
                        ih.style.overflow = 'hidden';
                    })
                }   
            }
            })
        }     
    }

    // if(click.classList[0]=='cross'){ 
    //     if(color_card_holder2.childNodes.length==1 && color_card_holder2.childNodes[0].classList.contains('fall')){
    //         color_card_holder2.style.display = 'none';
    //         color_card_holder.style.height = '60vh'
    //         color_card_holder.style.justifyContent = 'center';
    //         colors.splice(1,1);
    //         newIds();   
    //     }   
    // }

    if(click.classList.contains('adjust-holder')){
        var lenght = colors.length;
        for(var i=0;i<lenght;i++){
            if(`adjust-holder${i}`==click.id){
                document.getElementById(`rgb-box${i}`).innerHTML = ``;
            }
        }
    }



    if(click.classList[0]=="lock"){
        click.classList.remove("lock");
        click.classList.add("locked")
        click.parentElement.parentElement.classList.add('color-locked');
        click.parentElement.style.background = "red";
        click.parentElement.classList.remove('lock-holder');
        click.parentElement.classList.add('lock-holder2');
        return;
    }

    if(click.classList[0]=="locked"){
        click.classList.remove("locked");
        click.classList.add("lock")
        click.parentElement.parentElement.classList.remove('color-locked');
        click.parentElement.classList.remove('lock-holder2');
        click.parentElement.classList.add('lock-holder');
        click.parentElement.style.background  = "#00000050";
        return;
    }

    if(click.classList[0]=="pen"){
        var card = click.parentElement.parentElement;
        card.classList.add("edit-sec-card");
        click.parentElement.style.display = "none";
        return;
    }

    if(click.classList[0]=="close-edit-sec"){
       var lenght = click.parentElement.childNodes.length;
        var childs = click.parentElement.childNodes[2].childNodes;//[0].style.display = 'flex';
        childs.forEach((child) =>{
           if(child.classList.contains('pen-holder')){
               child.style.display = 'flex';
           }
        })
       click.parentElement.childNodes[2].classList.remove("edit-sec-card");
    //    for(var i = 0;i < lenght; i++){
    //        if(click.parentElement.childNodes[i].classList!==undefined){
    //         click.parentElement.childNodes[i].classList.remove("edit-sec-card");
    //         if(click.parentElement.childNodes[i].childNodes[2]!==undefined){
    //             if(click.parentElement.childNodes[i].childNodes[2].classList.contains('pen-holder')){
    //                 // click.parentElement.childNodes[i].childNodes[2].style.display = "flex";
    //                 console.log(click.parentElement);
    //             }
    //         }
    //        }
    //    }
       return;
    }


}

function newIds(){
    var total_cards = colors.length;
    var count = 0;
    for(var i=0; i<total_cards;i++){
        var j=0;
        var color = document.getElementById(`color${i}`);
        if(color!==null){
            var cross = document.getElementById(`cross${i}`);
            var color_code = document.getElementById(`color-code${i}`);
            var red = document.getElementById(`red${i}`);
            var green = document.getElementById(`green${i}`);
            var blue = document.getElementById(`blue${i}`);
            var rgb_box = document.getElementById(`rgb-box${i}`);
            var color_picker = document.getElementById(`color_picker${i}`)
        }
        while(color===null){
            color = document.getElementById(`color${i+j}`);
            if(color!==null){
                var cross = document.getElementById(`cross${i+j}`);
                var color_code = document.getElementById(`color-code${i+j}`);
                var red = document.getElementById(`red${i+j}`);
                var green = document.getElementById(`green${i+j}`);
                var blue = document.getElementById(`blue${i+j}`);
                var rgb_box = document.getElementById(`rgb-box${i+j}`);
                var color_picker = document.getElementById(`color_picker${i+j}`);
            }
            j=j+1;
        }
        color.id = `color${count}`;
        cross.id = `cross${count}`;
        color_code.id = `color-code${count}`;
        red.id = `red${count}`;
        green.id = `green${count}`;
        blue.id = `blue${count}`;
        rgb_box.id = `rgb-box${count}`;
        color_picker.id = `color_picker${count}`


        count= count+1;
    }

}


function generateColor(){
    var color = "#";
    var symbol = "1234567890abcdef";
    for (var i=0;i<6;i++){
        color = color + symbol[Math.floor(Math.random() * 16)];
    }
    return color;
}



function newColor(){
    var total_cards = colors.length;
    for(var i=0;i<total_cards;i++){
        var new_color = generateColor();
        var red_value = hextorgb(new_color[1]+new_color[2]);
        var green_value = hextorgb(new_color[3]+new_color[4]);
        var blue_value = hextorgb(new_color[5]+new_color[6]);
        var new_color_rgb = `rgb(${red_value},${green_value},${blue_value})`;
    
        var color_card = document.getElementById(`color${i}`);
        if(!color_card.classList.contains("color-locked")){
            document.getElementById(`color${i}`).style.background = new_color;
            document.getElementById(`color-code${i}`).innerText = new_color;
            document.getElementById(`red${i}`).value = red_value;
            document.getElementById(`green${i}`).value = green_value;
            document.getElementById(`blue${i}`).value = blue_value;
            document.getElementById(`rgb-box${i}`).innerHTML = new_color_rgb;
            document.getElementById(`color_picker${i}`).value = new_color;
            document.getElementById(`color_picker${i}`).style.background = new_color;
        };
    }
}

function newCardsPalete(){
    for(var i =0;i<4;i++){
        newCard(4);
    }
}

function newCardRandom(){
    newCard(0);
}

function newCard(e){
    var card_num = colors.length;
    if(card_num>9){
        return;
    }
    //gentrating new color and pushing it inoto list
    var new_color = generateColor();
    var red_value = hextorgb(new_color[1]+new_color[2]);
    var green_value = hextorgb(new_color[3]+new_color[4]);
    var blue_value = hextorgb(new_color[5]+new_color[6]);
    var new_color_rgb = `rgb(${red_value},${green_value},${blue_value})`;
    colors.push(new_color);
    //generating edit-sec-container
    var edit_sec = document.createElement('div');
    edit_sec.classList.add("edit-sec-container");

    //generating input holder
    var input_holder = document.createElement('div');
    input_holder.classList.add('input-holder');
    edit_sec.appendChild(input_holder);

    //generating RGB box
    var rgb_box  = document.createElement('div');
    rgb_box.classList.add('result-rgb-box');
    rgb_box.innerHTML = new_color_rgb;
    rgb_box.id = `rgb-box${card_num}`;
    input_holder.appendChild(rgb_box);

    //generating red div
    var red_div = document.createElement('div');
    red_div.innerHTML = "Red";
    input_holder.appendChild(red_div);

    //generating red input
    var red_slider = document.createElement('input');
    red_slider.type="range";
    red_slider.value = red_value;
    red_slider.max = "255";
    red_slider.min = "0";
    red_slider.classList.add('input_');
    red_slider.id = `red${card_num}`;
    input_holder.appendChild(red_slider);

    //generating green div
    var green_div = document.createElement('div');
    green_div.innerHTML = "Green";
    input_holder.appendChild(green_div);
    
    //generating green input
    var green_slider = document.createElement('input');
    green_slider.type="range";
    green_slider.max = "255";
    green_slider.min = "0";
    green_slider.id = `green${card_num}`;
    green_slider.classList.add('input_');
    green_slider.value = green_value;
    input_holder.appendChild(green_slider);
    
    //generating blue div
    var blue_div = document.createElement('div');
    blue_div.innerHTML = "Blue";
    input_holder.appendChild(blue_div);

    //generating blue input
    var blue_slider = document.createElement('input');
    blue_slider.type="range";
    blue_slider.max = "255";
    blue_slider.min = "0";
    blue_slider.id = `blue${card_num}`;
    blue_slider.classList.add('input_');
    blue_slider.value = blue_value;
    input_holder.appendChild(blue_slider);


    //generating close button
    var close_btn = document.createElement("button");
    close_btn.classList.add("close-edit-sec");
    close_btn.innerText="CLOSE";
    edit_sec.appendChild(close_btn);


    //creating color card
    var card = document.createElement('div');
    card.classList.add("color-card");
    card.id = `color${card_num}`;
    card.style.background = new_color;

    if(e==0){
        //creating cross
        var cross = document.createElement('div');
        cross.innerHTML = "&#9747;";
        cross.classList.add("cross");
        cross.id = `cross${card_num}`;
        card.appendChild(cross); 
    }
    //cereating pen holder
    var pen_holder = document.createElement('div');
    pen_holder.classList.add('pen-holder');
    card.appendChild(pen_holder);

    //creating pen
    var pen = document.createElement('div');
    pen.classList.add('pen');
    pen_holder.appendChild(pen);

     //creanting lock holder
     var lock_holder = document.createElement('div');
     lock_holder.classList.add("lock-holder");
     card.appendChild(lock_holder);

       //creating lock
     var lock = document.createElement('div');
     lock.classList.add('lock');
     lock_holder.appendChild(lock);


    //creating color code
    var color_code_creat = document.createElement('div');
    color_code_creat.classList.add("color-code");
    color_code_creat.id = `color-code${card_num}`;
    color_code_creat.innerText = new_color;
    card.appendChild(color_code_creat);

    // //creating adjust holder
    // var adjust_holder = document.createElement('div');
    // adjust_holder.id = `adjust-holder${card_num}`;
    // adjust_holder.classList.add('adjust-holder');
    // input_holder.appendChild(adjust_holder);

    // //creating adjust
    // var adjust = document.createElement('div');
    // adjust.classList.add('adjust');
    // adjust_holder.appendChild(adjust);


    //creating colorpicker
    var color_picker = document.createElement('input');
    color_picker.type = "color";
    color_picker.id = `color_picker${card_num}`;
    color_picker.value = new_color;
    color_picker.style.background = new_color;
    color_picker.classList.add('color_picker');
    card.appendChild(color_picker);

    // //creating colorpicker
    // var adjust = document.createElement('div');
    // adjust.classList.add('adjust');
    // adjust_holder.appendChild(adjust);


     
    edit_sec.appendChild(card);

    // document.getElementById("new_card_button").classList.remove("new-card-btn");
    // document.getElementById("new_card_button").classList.add("new-card-btn-hide");

    edit_sec.addEventListener("transitionend",function(){
        edit_sec.classList.remove('rise');
    })
   

    if(colors.length > 5){
        color_card_holder2.style.display = 'flex';
        color_card_holder.style.height = '200px'
        color_card_holder2.style.height = '200px'
        color_card_holder2.appendChild(edit_sec);
        color_card_holder.style.justifyContent = 'start';
        color_card_holder2.style.justifyContent = 'start';
        input_holders.forEach((ih) =>{
            ih.style.overflow = 'scroll';
        })
        // document.getElementById("new_card_button").style.opacity = "0";
    }else{
        color_card_holder.appendChild(edit_sec);
    }

    input_holders = document.querySelectorAll(".input-holder");
    colorPickers = document.querySelectorAll(".color_picker");
    initialize_event_listner();
}


function hextorgb(value){
    var rgb_val = parseInt(value , 16 ).toString();
    return rgb_val;
}

// var pallete_colors = ["(000,076,052)","(033,071,045)"];
// var pallete_container_array = [];

// function pallete_generate(){
//     for(var i = 0;i<pallete_colors.length;i++){
//         var pallete_array = [];
//         primary_color = pallete_colors[i];
//         var hue = primary_color[1]+primary_color[2]+primary_color[3];
//         hue  = parseInt(hue);
//         var sat = primary_color[5]+primary_color[6]+primary_color[7];
//         sat = parseInt(sat);
//         var li = primary_color[9]+primary_color[10]+primary_color[11];
//         li = parseInt(li);
//         for(var j = 0; j <5 ; j++){
//             hue = hue + 4;
//             sat = sat-2;
//             li = li+2;
//             pallete_array.push(`hsl(${hue},${sat}%,${li}%)`);
//         }
//         pallete_container_array.push(pallete_array);
//     }
//     console.log(pallete_container_array);
// }

// function generatePalleteCard(){

//     for(var i =0;i<pallete_container_array.length;i++){
//         var color_array = pallete_container_array[i];
//         for(var j =0;j<5;j++){
//             var num_arr = [];
//             for(var k=0;k<4;k++){
//                 var num = Math.floor(Math.random()*5);
//                 while(num_arr.includes(num)){
//                     num = Math.floor(Math.random()*5);
//                 }
//                 num_arr[k] = num;
//             }
//             num_arr.sort();
//             console.log(num_arr);
//             var new_color1 = color_array[num_arr[0]];
//             var new_color2 = color_array[num_arr[1]];
//             var new_color3 = color_array[num_arr[2]];
//             var new_color4 = color_array[num_arr[3]];

//             var palette_card = document.createElement('div');
//             palette_card.classList.add('palette-card');
//             similar_pallete_holder.appendChild(palette_card);
    
//             var primary = document.createElement('div');
//             primary.classList.add("primary-color");
//             primary.style.background = new_color1;
//             palette_card.appendChild(primary);
            
//             var pal = document.createElement('div');
//             pal.classList.add("pal-color");
//             pal.style.background = new_color2;
//             palette_card.appendChild(pal);
    
//             var pal = document.createElement('div');
//             pal.classList.add("pal-color");
//             pal.style.background = new_color3;
//             palette_card.appendChild(pal);
    
//             var pal = document.createElement('div');
//             pal.classList.add("pal-color");
//             pal.style.background = new_color4;
//             palette_card.appendChild(pal);

//         }
       
//     }
    
// }


