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
var rempli = false ;

console.log(colonne1);
console.log(colonne2);
console.log(colonne3);
console.log(colonne4);
console.log(colonne5);
console.log(colonne6);
console.log(colonne7);

colonne1.addEventListener("click", function(){
for(let i = arr1.length -1; i >= 0; i--) {
 console.log(arr1[i]);   
 if(arr1[i].style.backgroundColor=="white" && rempli == false) {
     arr1[i].style.backgroundColor=couleur;
     rempli = true 
}
}
rempli=false;
})
colonne2.addEventListener("click", function(){

})
colonne3.addEventListener("click", function(){

})
colonne4.addEventListener("click", function(){

})
colonne5.addEventListener("click", function(){

})
colonne6.addEventListener("click", function(){

})
colonne7.addEventListener("click", function(){

})

