const graidentCard = document.querySelector('.graident-card');
const graidentCardHolder = document.querySelector('.gradient-card-holder');
const colorChngBtn = document.querySelector('.color-change-btn');
const rotateValue = document.getElementById('rotatevale');
const value_box = document.querySelector('.value-box');
const similar_pallete_holder = document.getElementById('holder');
const save_btn = document.getElementById('save-btn');
const card = document.getElementById('gradient-card');
const todle = document.querySelector('.todle');
const cancel = document.querySelector('.cancel');

if(cancel!=null){
    cancel.addEventListener('click',cancelfunction);
}

var mainColor1;
var mainColor2;
  
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

save_btn.addEventListener("click",saveData);
colorChngBtn.addEventListener('click',newGradient);
rotateValue.addEventListener('mousemove',rotateVal);
document.addEventListener('DOMContentLoaded',createCard);

function cancelfunction(){
  todle.style.display = 'none';
}

function saveData(){
   var bk= card.style.background;
    db.collection("grads").doc().set({
        bk:bk,
        createdAt:new Date().getTime(),
    }) 
    todle.style.display = 'flex';
}

console.log(new Date().getTime());

function createCard(){
    var value = rotateValue.value;
    var color1 = generateColor();
    var color2 = generateColor();
    mainColor1 = color1;
    mainColor2 = color2;
    card.style.background = `linear-gradient(${value}deg,${color1},${color2})`;
    value_box.innerHTML = `linear-gradient(${value}deg,${color1},${color2})`;
    graidentCardHolder.appendChild(card);
}
function generateColor(){
    var color = "rgb(" + Math.floor(Math.random() * 256) + "," +Math.floor(Math.random() * 256) + ","+Math.floor(Math.random() * 256)+")";
    return color;
}

function rotateVal(){
    var value = rotateValue.value;
    var graident = card.style.background;
    card.style.background = `linear-gradient(${value}deg,${mainColor1},${mainColor2})`;
    value_box.innerHTML = `linear-gradient(${value}deg,${mainColor1},${mainColor2})`;
}

function newGradient(){
    var value = rotateValue.value;
    var color1 = generateColor();
    var color2 = generateColor();
    mainColor1 = color1;
    mainColor2 = color2;
    value_box.innerHTML = `linear-gradient(${value}deg,${color1},${color2})`;
    card.style.background = `linear-gradient(${value}deg,${color1},${color2})`;

}

//db.collection("grads").get().then((querySnapshot) => {
    // var pal_num=0;
    //   querySnapshot.forEach((doc) => {
    //     pal_num = pal_num+1;
    //    var tags = doc.data().tag;
    //    if(tags!=undefined){
    //     var len = tags.length;
    //    }
  
        //  var a = document.createElement('a');
        //  a.href ="#" ;
        //  similar_pallete_holder.appendChild(a);
  
          // var palette_card = document.createElement('div');
          // palette_card.classList.add('grad-card');
          // if(tags!=undefined){
          //   for(var i =0;i<len;i++){
          //     palette_card.classList.add(tags[i]);
          //   }
          // }
          // palette_card.id = `grad${pal_num}`;
          // similar_pallete_holder.appendChild(palette_card);
  
          // palette_card.style.background = doc.data().bk;
  
        //   var primary = document.createElement('div');
        //   primary.classList.add("primary-color");
        //   primary.style.background = doc.data().pc;
        //   palette_card.appendChild(primary);
  
          // var code_holder = document.createElement('div');
          // code_holder.classList.add('grad-code-holder');
          // code_holder.innerHTML = doc.data().bk;
          // palette_card.appendChild(code_holder);
          
        //   var pal = document.createElement('div');
        //   pal.classList.add("pal-color");
        //   pal.style.background = doc.data().sc1;
        //   palette_card.appendChild(pal);
        //   var code_holder = document.createElement('div');
        //   code_holder.classList.add('code-holder');
        //   code_holder.innerHTML = doc.data().sc1;
        //   pal.appendChild(code_holder);
  
        //   var pal = document.createElement('div');
        //   pal.classList.add("pal-color");
        //   pal.style.background = doc.data().sc2;
        //   palette_card.appendChild(pal);
        //   var code_holder = document.createElement('div');
        //   code_holder.classList.add('code-holder');
        //   code_holder.innerHTML = doc.data().sc2;
        //   pal.appendChild(code_holder);
  
        //   var pal = document.createElement('div');
        //   pal.classList.add("pal-color");
        //   pal.style.background = doc.data().sc3;
        //   palette_card.appendChild(pal);
        //   var code_holder = document.createElement('div');
        //   code_holder.classList.add('code-holder');
        //   code_holder.innerHTML = doc.data().sc3;
        //   pal.appendChild(code_holder);
  //    });
 // });

  let latestDoc = null;
  var pal_num=0;


  window.onscroll = function(ev) {
    // console.log((window.innerHeight + window.scrollY));
    // console.log(document.body.offsetHeight)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-1) {
      getNextCard();
    }
  };




  const getNextCard = async () => {
    const ref = db.collection("grads").orderBy('createdAt').startAfter(latestDoc||0).limit(30);
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
  
       var palette_card = document.createElement('div');
       palette_card.classList.add('grad-card');
       if(tags!=undefined){
         for(var i =0;i<len;i++){
           palette_card.classList.add(tags[i]);
         }
       }
       palette_card.id = `grad${pal_num}`;
       similar_pallete_holder.appendChild(palette_card);

       palette_card.style.background = doc.data().bk;

       var code_holder = document.createElement('div');
       code_holder.classList.add('grad-code-holder');
       code_holder.innerHTML = doc.data().bk;
       palette_card.appendChild(code_holder);

    });
    latestDoc = data.docs[data.docs.length -1];
  }

  document.addEventListener('DOMContentLoaded',getNextCard);
