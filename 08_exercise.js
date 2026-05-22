// Buisness Name Generator by combining list of adjective shop name and another words

// ADJECTIVES - Crazy , AMAZING , Fire 
// SHOP_NAME - Engine , Foods , Garments 
// OTHER_WORDS - Bros , limited , Hub

let Adjectives = ["Crazy", "Amazing", "Fire"];    
let shop = ["Engine", "Foods", "Garments"];
let OtherWords = ["Bros", "Limited", "Hub"];


let Full_Name = `${Adjectives[Math.floor(Math.random() * Adjectives.length)]} ${shop[Math.floor(Math.random() * shop.length)]} ${OtherWords[Math.floor(Math.random() * OtherWords.length)]}`;



console.log(`Your business name is: ${Full_Name}`);
