let produit = [
    { nom: "A", prix: 30, views: 1200 },
    { nom: "B", prix: 20, views: 2500 },
    { nom: "C", prix: 15, views: 1800 },
    { nom: "D", prix: 40, views: 3000 },
    { nom: "E", prix: 10, views: 900 },
    { nom: "F", prix: 25, views: 2000 }
];

let budget = 100;
let produitpop=[];
let j = 0;
for (let i = 0 ; i < produit.length ; i++ ){

    if(produit [i].views>1500){
        produitpop[j]=produit[i];
    j++
}
}