class Pokemon {
    constructor (name, attack, defense, hp, luck) {
         this.name = name
         this.attack = attack
         this.defense = defense
         this.hp = hp
         this.luck = luck
    }

    isLucky() {
     
      return Math.random() < this.luck;
    }

    attackPokemon(cible) {
        // la formule des dégâts est la suivante: dégâts = att de l'attaquant – def du defenseur​
        // console.log les degats
        // infliger les degats a "cible"
        /* cible.hp -= degats; */
        console.log(cible.name + " attaque")
        let degats = cible.attack - cible.defense 
        console.log(degats) 
        cible.hp -= degats
        console.log(cible.hp)

    } 

    
}

let carapuce = new Pokemon('Carapuce', 4, 2, 16, 0.7)
let Chenipan = new Pokemon ('Chenipan', 5, 2, 15, 0.5)
//let pikachu = new Pokemon ('pikachu', 4, 4, 3, 0.5)

carapuce.isLucky();

while(carapuce.hp > 0 && Chenipan.hp > 0) {
    if (carapuce.isLucky()) {
        carapuce.attackPokemon(Chenipan);
        if ( Chenipan.hp < 1) {
            console.log("Chenipan, vous avez perdu !")
            break
        } 
    } else {
        console.log(" carapuce a raté")
    }
    if (Chenipan.isLucky()) {
        Chenipan.attackPokemon(carapuce);
        if ( carapuce.hp < 1) {
            console.log(" Carapuce, vous avez perdu !")
            break 
        } 
    } else {
        console.log(" Chenipan a raté")
    }
    
}


