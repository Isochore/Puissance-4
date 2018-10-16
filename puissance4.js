const arr1 = document.querySelectorAll("#col1 div");
const arr2 = document.querySelectorAll("#col2 div");
const arr3 = document.querySelectorAll("#col3 div");
const arr4 = document.querySelectorAll("#col4 div");
const arr5 = document.querySelectorAll("#col5 div");
const arr6 = document.querySelectorAll("#col6 div");
const arr7 = document.querySelectorAll("#col7 div");
var couleur = "rouge";
const colonne1 = document.querySelector("#col1");
const colonne2 = document.querySelector("#col2");
const colonne3 = document.querySelector("#col3");
const colonne4 = document.querySelector("#col4");
const colonne5 = document.querySelector("#col5");
const colonne6 = document.querySelector("#col6");
const colonne7 = document.querySelector("#col7");
const arrG = [arr1, arr2, arr3, arr4, arr5, arr6, arr7];
var rempli = false;
var count = 0;
var couleur = "rouge";
var countColor;
var winR = false;
var winJ = false;
var plein = 0;

if (winR == false && winJ == false) {

colonne1.addEventListener("click", function(){

    console.log("je fais la fonction");

for(let i = arr1.length -1; i >= 0; i--) {

 if(arr1[i].classList.contains("blanc") && rempli == false) {
     arr1[i].classList.remove("blanc");
     arr1[i].classList.add(couleur);
     rempli = true 
     couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";

    //  if (couleur == "rouge") {
    //      couleur == "jaune";
    //  } else {
    //      couleur ="rouge";
    //  }
}
}
rempli=false;
})

}

colonne2.addEventListener("click", function(){

    for(let i = arr2.length -1; i >= 0; i--) {

        if(arr2[i].classList.contains("blanc") && rempli == false) {
            arr2[i].classList.remove("blanc");
            arr2[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;

})
colonne3.addEventListener("click", function(){

    for(let i = arr3.length -1; i >= 0; i--) {

        if(arr3[i].classList.contains("blanc") && rempli == false) {
            arr3[i].classList.remove("blanc");
            arr3[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;

})
colonne4.addEventListener("click", function(){

    for(let i = arr4.length -1; i >= 0; i--) {

        if(arr4[i].classList.contains("blanc") && rempli == false) {
            arr4[i].classList.remove("blanc");
            arr4[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;

})
colonne5.addEventListener("click", function(){

    for(let i = arr5.length -1; i >= 0; i--) {

        if(arr5[i].classList.contains("blanc") && rempli == false) {
            arr5[i].classList.remove("blanc");
            arr5[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;

})
colonne6.addEventListener("click", function(){

    for(let i = arr6.length -1; i >= 0; i--) {

        if(arr6[i].classList.contains("blanc") && rempli == false) {
            arr6[i].classList.remove("blanc");
            arr6[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;

})
colonne7.addEventListener("click", function(){

    for(let i = arr7.length -1; i >= 0; i--) {

        if(arr7[i].classList.contains("blanc") && rempli == false) {
            arr7[i].classList.remove("blanc");
            arr7[i].classList.add(couleur);
            rempli = true 
            couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
       
           //  if (couleur == "rouge") {
           //      couleur == "jaune";
           //  } else {
           //      couleur ="rouge";
           //  }
       }
       }
       rempli=false;
       gagnerCol();

})

function gagnerCol() {
    for(let i = arrG.length -1; i >= 0; i--) {
        for(let j = arrG[i].length -1; j >= 0; j--) {   
            countColor = arrG[i][j].classList;

            if (arrG[i][j].classList.contains("rouge")) {
                countColor.contains("rouge") ? count++ : count = 1;
            } else if (arrG[i][j].classList.contains("jaune")) {
                countColor.contains("jaune") ? count++ : count = 1;
            } else {
                countColor.contains("blanc") ? count = 0 : true;
                plein++;
                // console.log("current " + plein);
            }

            if (count >= 4 && countColor.contains("rouge")) {
                winR = true;
            } else if (count >= 4 && countColor.contains("jaune")){
                winJ = true;
            }
            console.log(count);
            // console.log(winR);
            // console.log(winJ);
            }
            // console.log(countColor);
    }
    plein > 0 ? plein = 0 : plein = true;
    // console.log("final " + plein);
}
// oui