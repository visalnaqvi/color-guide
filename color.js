const reds = document.querySelectorAll(".red");
const pinks = document.querySelectorAll(".pink");
const holder = document.getElementById("colors-holder");
let red_array = ["#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C","#FF8A80","#FF5252","#FF1744","#D50000"];
let pink_array = ["#FCE4EC","#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60",'#C2185B',"#AD1457","#880E4F","#FF80AB","#FF4081","#F50057","#C51162"];
let purple_array = ["#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92","#B388FF","#7C4DFF","#651FFF","#6200EA"];
let deep_purple_array = ["#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92","#B388FF","#7C4DFF","#651FFF","#6200EA"];
let indigo_array = ["#E8EAF6","#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB",'#303F9F','#283593','#1A237E','#8C9EFF','#536DFE','#3D5AFE',"#304FFE"];
let blue_array = ['#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1','#82B1FF','#448AFF','#2979FF','#2962FF'];
let light_blue_array = ['#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B','#80D8FF','#40C4FF','#00B0FF','#0091EA'];
let cyan_array = ['#E0F7FA','#B2EBF2','#80DEEA','#4DD0E1','#26C6DA','#00BCD4','#00ACC1','#0097A7','#00838F','#006064','#84FFFF','#18FFFF','#00E5FF','#00B8D4'];
let teal_array = ['#E0F2F1','#B2DFDB','#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40','#A7FFEB','#64FFDA','#1DE9B6','#00BFA5'];
let green_array = ['#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20','#B9F6CA','#69F0AE','#00E676','#00C853'];
let light_green_array = ["#F1F8E9",'#DCEDC8','#C5E1A5','#AED581','#9CCC65','#8BC34A','#7CB342','#689F38','#558B2F','#33691E','#CCFF90','#B2FF59','#76FF03','#64DD17'];
let lime_array = ['#F9FBE7','#F0F4C3','#E6EE9C','#DCE775','#D4E157','#CDDC39','#C0CA33','#AFB42B','#9E9D24','#827717','#F4FF81','#EEFF41','#C6FF00','#AEEA00'];
let yellow_array = ['#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFFF8D','#FFFF00','#FFEA00','#FFD600'];
let amber_array = ['#FFF8E1','#FFECB3','#FFE082','#FFD54F','#FFCA28','#FFC107','#FFB300','#FFA000','#FF8F00','#FF6F00','#FFE57F','#FFD740','#FFC400','#FFAB00'];
let orange_array = ['#FFF3E0','#FFE0B2','#FFCC80','#FFB74D','#FFA726','#FF9800','#FB8C00','#F57C00','#EF6C00','#E65100','#FFD180','#FFAB40','#FF9100','#FF6D00'];
let deep_orange_array =['#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#F4511E','#E64A19','#D84315','#BF360C','#FF9E80','#FF6E40','#FF3D00','#DD2C00'];
let brown_array = ['#EFEBE9','#D7CCC8','#BCAAA4','#A1887F','#8D6E63','#795548','#6D4C41','#5D4037','#4E342E','#3E2723'];
let gray_array = ['#FAFAFA','#F5F5F5','#EEEEEE','#E0E0E0','#BDBDBD','#9E9E9E','#757575','#616161','#424242','#212121'];
let blue_gray_array = ['#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238'];
let black_white_array = ['#000000','#FFFFFF'];
let colors_mat = [red_array,pink_array,purple_array,deep_purple_array,indigo_array
,blue_array,light_blue_array,cyan_array,teal_array,green_array,light_green_array,lime_array,yellow_array,amber_array,orange_array,deep_orange_array,brown_array,gray_array,blue_gray_array,black_white_array]
document.addEventListener("DOMContentLoaded",creatRed);

function creatRed(){
    for(var i=0;i<colors_mat.length;i++){
        var similarDiv = document.createElement("div");
        similarDiv.classList.add("similar-color-card");
        var array = colors_mat[i];
        for(var j = 0;j<array.length;j++){
            var redDiv = document.createElement('div');
            redDiv.style.background = array[j];
            if(array[j]=='#000000'){
                redDiv.style.color = "white";
            }
            redDiv.innerHTML = array[j];
            if(j<5){
                redDiv.classList.add('black');
            }
            redDiv.classList.add('container');
            similarDiv.appendChild(redDiv);
        }
        holder.appendChild(similarDiv);
    }
}


// reds.forEach(function(red){
//     var color = red.innerHTML;
//     red.style.background=color;
// })

// pinks.forEach(function(pink){
//     var color = pink.innerHTML;
//     pink.style.background=color;
// })


