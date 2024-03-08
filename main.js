
// Esse é o jeito CommomJs
//let matematica = require("./matematica.js") 
import { fatorial, verNumeroPrimo } from "./matematicaESM.js"

for(let i=2; i<15; i++) {
    if(verNumeroPrimo(i)) {
        console.log("Primo "+i)
    }
    console.log("Fat de "+i+" é "+fatorial(i));
}

