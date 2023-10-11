let musiques= [
  "MEVTR de damso",
  "Woman de Rema",
  "Annissa de wejdene",
  "wewe de rugar",
  "bella de gims"
]; 

class client {
    constructor (name, sante) {
        this.name = name
        this.sante = sante
    }
}
let John = new client('John', 10);

let trajet = {
   radio : musiques[Math.floor(Math.random()*musiques.length)],
   feux : 30 , 
   changement : 0

}




    while ( trajet.feux > 0){
        if(John.sante > 1) {
        trajet.feux--;
        trajet.radio = musiques[Math.floor(Math.random()*musiques.length)] ;
        console.log('sante = ' + John.sante)
        console.log("la radio joue: " + trajet.radio) 
        if (trajet.radio == 'Annissa de wejdene'){
            John.sante -= 1 
            trajet.changement++; 
        }
        
        
    } else {
        console.log ("Oh non il a explosé !!")
            break;
        
    }
    }

    if(trajet.feux == 0 && John.sante > 0) {
      console.log("Vous êtes bien arrivé à destination avec " + trajet.changement + " changements")
    }
    



