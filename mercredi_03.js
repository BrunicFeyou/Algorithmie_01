class personnage {

    constructor(name, hp, mort, defense, attaque ) {
        this.name = name
        this.hp = hp 
        this.mort = mort 
        this.defense = defense
        this.attaque = attaque
    }
    



 attack(cible) {

    let degats=  Math.random(); 
    
    
    if ( degats > cible.mort ){
        cible.hp -= 15 
        console.log(cible.name + " est mort")
        return
    
        }

     if (degats >= cible.defense){
        jason.hp -= 10 
        console.log("la vie de " + cible.name + " est de " + cible.hp)
        console.log(cible.name + " a esquivé et à infliger 10 points dégâts")
        console.log("La vie de Jason est maintenant de "+ jason.hp)
        return
     }

     if (degats >= cible.attaque){
        jason.hp -= 10 
        cible.hp -= 15 
        console.log ("la vie de " + cible.name +  " est de " + cible.hp)
        console.log (cible.name + " a infligé un grand dégat et meurt")
        console.log("La vie de Jason est de "+ jason.hp)
        return
        
     }

    
}

}




let jason = new personnage('jason', 100, 0.6, 0.7, 0.8)
let tokyo = new personnage('tokyo', 15, 0.3, 0.4, 0.5)
let dublin = new personnage('dublin', 15, 0.4, 0.2, 0.3)
let moscou = new personnage('moscou',15, 0.5, 0.3, 0.7)
let berlin = new personnage('berlin',15, 0.6, 0.8, 0.2)
let naerobi = new personnage('naerobi', 15, 0.1, 0.4, 0.7)
 

let survivants = [
     tokyo, dublin, moscou, berlin, naerobi
]

caracteristiques = [
    'grand', 'rousse', 'guigue', 'avare', 'introverti '
]

for (let i = 0; i < survivants.length; i++) {
   let supersurvivants = caracteristiques[Math.floor(Math.random() *caracteristiques.length)]
   survivants[i].caracteristique = supersurvivants
}

 while (survivants.some(survivant => survivant.hp > 0 ) && jason.hp > 0) {

    survivants.forEach(survivant => {
        jason.attack(survivant)
    })
    
}

if (survivants.every(survivant => survivant.hp < 1)){
    console.log("La vie de " + survivant.name + survivant.hp)
    console.log ("Tous les survivants sont mort. " +  jason.name + " a gagné");
    
 }

 if (jason.hp < 1) {
      console.log ('La vie du tueur est nulle ' + jason.hp + ". Jason est mort")
      
 }
