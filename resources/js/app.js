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
let epaisseurCroix = 1;
let couleurCroix = "red";



let ratioRond = 0.7;
let epaisseurRond = 1;
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
ctx.lineWidth = 2;
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


