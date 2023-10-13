class personnage {


    constructor(name, type, hp, amorçage, duel, noamorcage) {

        this.name = name;
        this.type = type;
        this.hp = hp;
        this.amorçage = amorçage; 
        this.duel= duel 
        this.noamorcage = noamorcage;
       
    }

    
    
}

    



let manchedef = 0;
let mancheattack = 0

let Omen = new personnage ('Omen', "defense", 1, 0.6, 0.3, 0.5)
let Phoenix= new personnage ('Phoenix', "defense", 1, 0.6, 0.3, 0.5)
let Jett= new personnage ('Jett', "defense", 1, 0.6, 0.3, 0.5)
let Fade= new personnage ('Fade', "defense", 1, 0.6, 0.3, 0.5)
let Chamber= new personnage ('Chamber', "defense", 1, 0.6, 0.3, 0.5)



let Nicolas= new personnage ('Nicolas', "attaquant", 1, 0.4, 0.7, 0.5)
let Michele= new personnage ('Michele', "attaquant", 1, 0.4, 0.7, 0.5)
let Aurore= new personnage ('Aurore', "attaquant", 1, 0.4, 0.7, 0.5)
let Florian= new personnage ('Florian', "attaquant", 1, 0.4, 0.7, 0.5)
let Maxime= new personnage ('Maxime', "attaquant", 1, 0.4, 0.7, 0.5)



let combattants = [
    Omen, Phoenix, Jett, Fade, Chamber, Nicolas, Michele, Aurore, Florian, Maxime
]

spike = Math.random()
mort = Math.random()

for (i = 0; i < combattants.length; i++) {

   /* let combattant= combattants[Math.floor(Math.random() * combattants.length)]

   console.log(combattant) */
   

   
    if(combattants[i].type === "defense") {
        let attaquant;
       do {
         attaquant = combattants[Math.floor(Math.random() *combattants.length)];
          
        } while (attaquant.type !== "attaquant") {
            attaquant.hp -= 1 
            console.log(combattants[i].name + " attaque " + attaquant.name) 
            console.log(attaquant.name + " est mort. Sa vie est de " + attaquant.hp )
        }
        
      if ( spike >= combattants[i].amorçage) {

        console.log("Le spike a été amorcer")

        if ( mort >= combattants[i].duel){
            do {
                attaquant = combattants[Math.floor(Math.random() *combattants.length)]; 
               } while (attaquant.type !== "attaquant") {
                   attaquant.hp -= 1 
                   console.log("Après l'amoçage du spike " + combattants[i].name + " a tué " + attaquant.name);

               }  
               
        }
        
      } 
      if (combattants.every(combattant => combattant.hp < 1)) {
        mancheattack+= 1
        console.log(" Tous les défenseurs sont morts. L'attaque gagne "+ mancheattack + " manches")
      }
    
      }
         

      



      if(combattants[i].type === "attaquant") {
        let defense;
       do {
         defense = combattants[Math.floor(Math.random() *combattants.length)];
          
        } while (defense.type !== "defense") {
            defense.hp -= 1 
            console.log(combattants[i].name + " attaque " + defense.name) 
            console.log(defense.name + " est mort. Sa vie est de " + defense.hp )
        }
        
      if ( spike >= combattants[i].amorçage) {

        console.log("Le spike a été amorcer")

        if ( mort >= combattants[i].duel){
            do {
                defense = combattants[Math.floor(Math.random() *combattants.length)]; 
               } while (defense.type !== "attaquant") {
                   defense.hp -= 1 
                   console.log("Après l'amoçage du spike " + combattants[i].name + " a tué " + defense.name);

               }  
               let defenseurs = []
               defenseurs.push(defense) 
               if(defenseurs.every(defenseur => defenseur < 1)){
                manchedef += 1
                console.log("Les attaquants ont perdu. La défense remporte "+ manchedef + "manche")
               }
        }
      } 
      }
      
    }
    

    
        
    








    
     
 
    




