const arr1 = document.querySelectorAll("#col1 div");
const arr2 = document.querySelectorAll("#col2 div");
const arr3 = document.querySelectorAll("#col3 div");
const arr4 = document.querySelectorAll("#col4 div");
const arr5 = document.querySelectorAll("#col5 div");
const arr6 = document.querySelectorAll("#col6 div");
const arr7 = document.querySelectorAll("#col7 div");
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
var mode = "1vscpu";

colonne1.addEventListener("click", function () {

    pion(arr1);

})

colonne2.addEventListener("click", function () {

    pion(arr2);

})
colonne3.addEventListener("click", function () {

    pion(arr3);

})
colonne4.addEventListener("click", function () {

    pion(arr4);

})
colonne5.addEventListener("click", function () {

    pion(arr5);

})
colonne6.addEventListener("click", function () {

    pion(arr6);

})
colonne7.addEventListener("click", function () {

    pion(arr7);

})

function gagnerCol() {

    for (let i = arrG.length - 1; i >= 0; i--) {
        for (let j = arrG[i].length - 1; j >= 0; j--) {

            verif(i, j);
        }
        count = 0;
    }
}

function gagnerRow() {

    for (let j = arrG[0].length - 1; j >= 0; j--) {
        for (let i = arrG.length - 1; i >= 0; i--) {

            verif(i, j);

        }
        count = 0;
    }
}

function gagnerDiag() {

    // for (let i = 0, j = 3, fin = false; fin != true ; i++, j--) {
    //     // console.log(i);
    //     // console.log(j);
    //         i == 3 && j == 0 ? fin = true : false;
    // }

    let Ylength = arrG.length;
    let Xlength = arrG[0].length;
    let maxLength = Math.max(Xlength, Ylength);
    let temp;
    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
        temp = [];
        for (let j = Ylength - 1; j >= 0; --j) {
            var x = i - j;
            if (x >= 0 && x < Xlength) {
                temp.push(arrG[j][x]);
            }
        }
        if (temp.length > 0) {
            for (let k = 0; k < temp.length; ++k) {
                // console.log(temp[k]);


                if (temp[k].classList.contains("rouge")) {
                    if (countColor == "rouge") {
                        count++;
                    } else if (countColor == "jaune") {
                        count = 1;
                    }
                    countColor = "rouge";
                } else if (temp[k].classList.contains("jaune")) {
                    if (countColor == "jaune") {
                        count++;
                    } else if (countColor == "rouge") {
                        count = 1;
                    }
                    countColor = "jaune";
                } else {
                    temp[k].classList.contains("blanc") ? count = 0 : true;
                }

                if (count >= 4 && countColor == "rouge") {
                    winR = true;
                    console.log("Rouge a gagné diag1");
                } else if (count >= 4 && countColor == "jaune") {
                    winJ = true;
                    console.log("Jaune a gagné diag1");
                }
            }
            count = 0;
        }
    }


    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
        temp = [];
        for (let j = Ylength - 1; j >= 0; --j) {
            var x = i - (Ylength - j);
            if (x >= 0 && x < Xlength) {
                temp.push(arrG[j][x]);
            }
        }
        if (temp.length > 0) {
            for (let k = 0; k < temp.length; ++k) {
                // console.log(temp[k]);


                if (temp[k].classList.contains("rouge")) {
                    if (countColor == "rouge") {
                        count++;
                    } else if (countColor == "jaune") {
                        count = 1;
                    }
                    countColor = "rouge";
                } else if (temp[k].classList.contains("jaune")) {
                    if (countColor == "jaune") {
                        count++;
                    } else if (countColor == "rouge") {
                        count = 1;
                    }
                    countColor = "jaune";
                } else {
                    temp[k].classList.contains("blanc") ? count = 0 : true;
                }

                if (count >= 4 && countColor == "rouge") {
                    winR = true;
                    console.log("Rouge a gagné diag2");
                } else if (count >= 4 && countColor == "jaune") {
                    winJ = true;
                    console.log("Jaune a gagné diag2");
                }
            }
            count = 0;
        }
    }


}



function pion(array) {

    if (winR == false && winJ == false) {
        if (mode == "1vs2") {

            for (let i = array.length - 1; i >= 0; i--) {

                if (array[i].classList.contains("blanc") && rempli == false) {
                    array[i].classList.remove("blanc");
                    array[i].classList.add(couleur);
                    rempli = true;
                    couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";

                }
            }
            rempli = false;
            gagnerCol();
            gagnerRow();
            gagnerDiag();

        } else if (mode = "1vscpu") {
            if (couleur == "rouge") {

                for (let i = array.length - 1; i >= 0; i--) {

                    if (array[i].classList.contains("blanc") && rempli == false && couleur == "rouge") {
                        array[i].classList.remove("blanc");
                        array[i].classList.add(couleur);
                        rempli = true;
                        couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
                    }
                }
                rempli = false;
                gagnerCol();
                gagnerRow();
                gagnerDiag();

                if(winR != true && winJ != true) {
                    setTimeout(function () {

                        let rnd = Math.floor(Math.random() * (7));
                        for (let i = arrG[rnd].length - 1; i >= 0; i--) {

                            if (arrG[rnd][i].classList.contains("blanc") && rempli == false && couleur == "jaune") {
                                arrG[rnd][i].classList.remove("blanc");
                                arrG[rnd][i].classList.add(couleur);
                                rempli = true;
                                couleur == "rouge" ? couleur = "jaune" : couleur = "rouge";
                            }
                        }
                        rempli = false;
                        gagnerCol();
                        gagnerRow();
                        gagnerDiag();

                    }, 800);
                }

            }
        }
    }
}

function verif(i, j) {
    if (arrG[i][j].classList.contains("rouge")) {
        if (countColor == "rouge") {
            count++;
        } else if (countColor == "jaune") {
            count = 1;
        }
        countColor = "rouge";
    } else if (arrG[i][j].classList.contains("jaune")) {
        if (countColor == "jaune") {
            count++;
        } else if (countColor == "rouge") {
            count = 1;
        }
        countColor = "jaune";
    } else {
        arrG[i][j].classList.contains("blanc") ? count = 0 : true;
    }

    if (count >= 4 && countColor == "rouge") {
        winR = true;
        console.log("Rouge a gagné");
    } else if (count >= 4 && countColor == "jaune") {
        winJ = true;
        console.log("Jaune a gagné");
    }
}

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}