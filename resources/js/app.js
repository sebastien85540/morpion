//mise en place du canvas

let c = document.getElementById("canvasMorpion");
let ctx = c.getContext("2d");

let largeur = c.width;
let hauteur = c.height;

let nbColonnes = 3;
let nbLignes = 3;


let hauteurLigne = hauteur/nbLignes;
let largeurColonne = largeur/nbColonnes;

let ratioCroix = 0.7;
let epaisseurCroix = 7;
let couleurCroix = "red";



let ratioRond = 0.7;
let epaisseurRond = 7;
let couleurRond = "blue";
let rayonRond = largeurColonne;
if (largeurColonne > hauteurLigne){
    rayonRond = hauteurLigne;
}
rayonRond /= 2;
rayonRond *= ratioRond;


let nbCoupsVictoire = 3;

let jeu = true;
let joueurActuel = true;
let coups = [];


for (let i = 0; i < nbLignes; i++){
    for (let j = 0; j < nbColonnes; j++){
        coups.push([]);
        coups[i].push(false);
    }
}

ctx.fillStyle = "#39D2E0";
ctx.strokeStyle = "black";
ctx.fillRect (0, 0, largeur, hauteur);
ctx.strokeRect (0, 0, largeur, hauteur);



ctx.beginPath()
ctx.lineWidth = 1;
ctx.strokeStyle = "black";

for(let i = 0;i < nbLignes-1; i++){
ctx.moveTo(0,(i+1)*(hauteurLigne));
ctx.lineTo(largeur, (i+1)*(hauteurLigne));
ctx.stroke();
}
for (let j = 0; j < nbColonnes; j++){
ctx.moveTo((j+1)*(largeurColonne), 0);
ctx.lineTo((j+1)*(largeurColonne), hauteur);
ctx.stroke();
}
ctx.closePath();

// Evenement clic
c.addEventListener("click", play, false);



//fonction de croix
function createCroix(x, y) {
    ctx.beginPath();
    ctx.lineWidth = epaisseurCroix;
    ctx.strokeStyle = couleurCroix;
    ctx.moveTo(x- (largeurColonne/2) * ratioCroix, y - (hauteurLigne/2)* ratioCroix);
    ctx.lineTo(x + (largeurColonne/2) * ratioCroix, y + (hauteurLigne/2)* ratioCroix);


    ctx.moveTo(x + (largeurColonne/2)* ratioCroix, y - (hauteurLigne/2)* ratioCroix);
    ctx.lineTo(x - (largeurColonne/2)* ratioCroix, y + (hauteurLigne/2)* ratioCroix);

    ctx.stroke();
    ctx.closePath();
} 


//Creation de rond
function createRond(x , y) {
    ctx.beginPath();
    ctx.lineWidth = epaisseurRond;
    ctx.strokeStyle = couleurRond;
    ctx.arc(x, y, rayonRond, 0, 2*Math.PI);
    ctx.stroke();
}

//Recuperer les coordonnées des cases
function play(event) {
 x = event.clientX - c.offsetLeft;
 y = event.clientY - c.offsetTop + document.documentElement.scrollTop;

 let caseX = parseInt(x /(largeur/nbColonnes));
 let caseY = parseInt(y / (hauteur/nbLignes));


 let milieuX = caseX * largeurColonne + largeurColonne / 2;
 let milieuY = caseY * hauteurLigne + hauteurLigne / 2;


 if (jeu) {
     if (!coups[caseY][caseX]) {
         if (joueurActuel){
             createCroix(milieuX, milieuY);
             coups[caseY][caseX] = "croix";
             document.getElementById("joueur").innerHTML = "au joueur de placer un rond";
         }
         else{
             createRond(milieuX, milieuY);
             coups[caseY][caseX] = "rond";
             document.getElementById("joueur").innerHTML = "au joueur de placer une croix";
         }
         joueurActuel = !joueurActuel;
     }
 }

}

function end() {
    for (let i = 0; i < nbLignes; i++){
        for ( let j = 0; j < nbColonnes; j++){
            if (coups[i][j] = false){
                return false ;
            }
        }
    }
    return true;
}