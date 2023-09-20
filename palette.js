
const similar_pallete_holder = document.getElementById('holder');
document.addEventListener('DOMContentLoaded',()=> getNextCard());
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqp_gIy7zQQEDHXdd1Uq7w4jEa0u2f_5s",
    authDomain: "color-guide-nv.firebaseapp.com",
    projectId: "color-guide-nv",
    storageBucket: "color-guide-nv.appspot.com",
    messagingSenderId: "588560110467",
    appId: "1:588560110467:web:dbab6da4ad1723642f5cb6",
    measurementId: "G-TFXWW874CG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var db = firebase.firestore();
let latestDoc = null;
var pal_num=0;

// const handelScroll = ()=>{
//   let trigerHeight = document.scrollTop + document.offsetHeight;
//   console.log(document.scrollHeight)
//   if(trigerHeight >= document.scrollHeight){
//     getNextCard();
//     console.log("hello");
//   }
// }

window.onscroll = function(ev) {
  // console.log((window.innerHeight + window.scrollY));
  // console.log(document.body.offsetHeight)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-1) {
    getNextCard();
  }
};


// document.addEventListener('scroll',handelScroll);
const getNextCard = async () => {
  const ref = db.collection("colors").orderBy('createdAts').startAfter(latestDoc||0).limit(30);
  const data = await ref.get();
  if(data.empty){
    return;
  }
 
  data.docs.forEach((doc)=>{
    pal_num = pal_num+1;
     var tags = doc.data().tag;
     if(tags!=undefined){
      var len = tags.length;
     }

      //  var a = document.createElement('a');
      //  a.href ="#" ;
      //  similar_pallete_holder.appendChild(a);

        var palette_card = document.createElement('div');
        palette_card.classList.add('palette-card');
        if(tags!=undefined){
          for(var i =0;i<len;i++){
            palette_card.classList.add(tags[i]);
          }
        }
        palette_card.id = `palette_card${pal_num}`;
        similar_pallete_holder.appendChild(palette_card);

        

        var primary = document.createElement('div');
        primary.classList.add("primary-color");
        primary.style.background = doc.data().pc;
        palette_card.appendChild(primary);

        var code_holder = document.createElement('div');
        code_holder.classList.add('code-holder');
        code_holder.innerHTML = doc.data().pc;
        primary.appendChild(code_holder);
        
        var pal = document.createElement('div');
        pal.classList.add("pal-color");
        pal.style.background = doc.data().sc1;
        palette_card.appendChild(pal);
        var code_holder = document.createElement('div');
        code_holder.classList.add('code-holder');
        code_holder.innerHTML = doc.data().sc1;
        pal.appendChild(code_holder);

        var pal = document.createElement('div');
        pal.classList.add("pal-color");
        pal.style.background = doc.data().sc2;
        palette_card.appendChild(pal);
        var code_holder = document.createElement('div');
        code_holder.classList.add('code-holder');
        code_holder.innerHTML = doc.data().sc2;
        pal.appendChild(code_holder);

        var pal = document.createElement('div');
        pal.classList.add("pal-color");
        pal.style.background = doc.data().sc3;
        palette_card.appendChild(pal);
        var code_holder = document.createElement('div');
        code_holder.classList.add('code-holder');
        code_holder.innerHTML = doc.data().sc3;
        pal.appendChild(code_holder);
  });
  latestDoc = data.docs[data.docs.length -1];
}

// db.collection("colors").get().then((querySnapshot) => {
//   var pal_num=0;
//     querySnapshot.forEach((doc) => {
//       pal_num = pal_num+1;
//      var tags = doc.data().tag;
//      if(tags!=undefined){
//       var len = tags.length;
//      }

//       //  var a = document.createElement('a');
//       //  a.href ="#" ;
//       //  similar_pallete_holder.appendChild(a);

//         var palette_card = document.createElement('div');
//         palette_card.classList.add('palette-card');
//         if(tags!=undefined){
//           for(var i =0;i<len;i++){
//             palette_card.classList.add(tags[i]);
//           }
//         }
//         palette_card.id = `palette_card${pal_num}`;
//         similar_pallete_holder.appendChild(palette_card);

        

//         var primary = document.createElement('div');
//         primary.classList.add("primary-color");
//         primary.style.background = doc.data().pc;
//         palette_card.appendChild(primary);

//         var code_holder = document.createElement('div');
//         code_holder.classList.add('code-holder');
//         code_holder.innerHTML = doc.data().pc;
//         primary.appendChild(code_holder);
        
//         var pal = document.createElement('div');
//         pal.classList.add("pal-color");
//         pal.style.background = doc.data().sc1;
//         palette_card.appendChild(pal);
//         var code_holder = document.createElement('div');
//         code_holder.classList.add('code-holder');
//         code_holder.innerHTML = doc.data().sc1;
//         pal.appendChild(code_holder);

//         var pal = document.createElement('div');
//         pal.classList.add("pal-color");
//         pal.style.background = doc.data().sc2;
//         palette_card.appendChild(pal);
//         var code_holder = document.createElement('div');
//         code_holder.classList.add('code-holder');
//         code_holder.innerHTML = doc.data().sc2;
//         pal.appendChild(code_holder);

//         var pal = document.createElement('div');
//         pal.classList.add("pal-color");
//         pal.style.background = doc.data().sc3;
//         palette_card.appendChild(pal);
//         var code_holder = document.createElement('div');
//         code_holder.classList.add('code-holder');
//         code_holder.innerHTML = doc.data().sc3;
//         pal.appendChild(code_holder);
//     });
// });


// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });



// var mainColors = ["(000,070,050)","(061,070,050)","(122,070,050)","(173,070,050)","(244,070,050)","(217,070,050)"];
// document.addEventListener("DOMContentLoaded",generatePalleteCard);


// function generatePalleteCard(){
//     for(var i = 0;i<mainColors.length;i++){
//         var lightShadesArray = [];
//         var darkShadesArray = [];
//         var shadesArray = [];
//         var color = mainColors[i];
//         var hue = color[1]+color[2]+color[3];
//         var hueLight  = parseInt(hue);
//         var hueDark  = parseInt(hue);
//         var lightArryhue = parseInt(hue);
//         var darkArryhue = parseInt(hue);
//         var sat = color[5]+color[6]+color[7];
//         var satLight = parseInt(sat);
//         var satDark = parseInt(sat);
//         var lightArraysat = parseInt(sat);
//         var darkArraysat = parseInt(sat);
//         var li = color[9]+color[10]+color[11];
//         var liLight = parseInt(li);
//         var liDark = parseInt(li);
//         var lightArryli = parseInt(li);
//         var darkArryli = parseInt(li);
//         for(var j = 0; j <3 ; j++){
//             hueLight = hueLight + 9;
//             satLight = satLight-9;
//             liLight = liLight+9;
//             shadesArray.push(`hsl(${hueLight},${satLight}%,${liLight}%)`);
//         }
//         if(shadesArray.length==3){
//             shadesArray.push(`hsl(${parseInt(hue)},${parseInt(sat)}%,${parseInt(li)}%)`)
//         }
//         for(var k = 0; k <3 ; k++){
//             hueDark = hueDark - 9;
//             hueDark <0 ? hueDark = 347 : hueDark =  hueDark;
//             satDark = satDark+4;
//             liDark = liDark-8;
//             shadesArray.push(`hsl(${hueDark},${satDark}%,${liDark}%)`);
//         }
//         for(var x=0;x<shadesArray.length;x++){
//             lightArryhue = lightArryhue-3;
//             lightArraysat = lightArraysat - 5;
//             lightArryli = lightArryli + 5;
//             lightShadesArray.push(`hsl(${lightArryhue},${lightArraysat}%,${lightArryli}%)`)
//         }
//         for(var y=0;y<shadesArray.length;y++){
//             darkArryhue = darkArryhue+3;
//             darkArraysat = darkArraysat + 5;
//             darkArryli = darkArryli - 5;
//             darkShadesArray.push(`hsl(${darkArryhue},${darkArraysat}%,${darkArryli}%)`)
//         }
//         console.log(shadesArray);
//         for(var z=0;z<10;z++){
//             var num1 = Math.floor(Math.random()*7);
//             var num2 = Math.floor(Math.random()*7)
//             while(num2==num1){
//                 num2 = Math.floor(Math.random()*7); 
//             }
//             var num3 = Math.floor(Math.random()*7)
//             while(num3==num1||num3==num2){
//                 num3 = Math.floor(Math.random()*7); 
//             }

//             var color1 = shadesArray[num1];
//             var color2 = shadesArray[num2];
//             var color3 = shadesArray[num3];
//             var color4 = darkShadesArray[num2];

//             var palette_card = document.createElement('div');
//                 palette_card.classList.add('palette-card');
//                 similar_pallete_holder.appendChild(palette_card);
        
//                 var primary = document.createElement('div');
//                 primary.classList.add("primary-color");
//                 primary.style.background = color1;
//                 palette_card.appendChild(primary);
                
//                 var pal = document.createElement('div');
//                 pal.classList.add("pal-color");
//                 pal.style.background = color2;
//                 palette_card.appendChild(pal);
        
//                 var pal = document.createElement('div');
//                 pal.classList.add("pal-color");
//                 pal.style.background = color3;
//                 palette_card.appendChild(pal);
        
//                 var pal = document.createElement('div');
//                 pal.classList.add("pal-color");
//                 pal.style.background = color4;
//                 palette_card.appendChild(pal);
//         }


        
//     }
// }

