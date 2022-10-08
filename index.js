const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('outputOne')
let passwordTwo = document.getElementById('outputTwo')
let passwordThree = document.getElementById('outputThree')
let passwordFour = document.getElementById('outputFour')
let passwordLength = 8

function generatePassword() {
    let randomPassword = "";
    for(let i=0; i<passwordLength; i++) {
        randomPassword += getRandom()
    }
    passwordOne.textContent = randomPassword;
    let randomPasswordTwo = ""
    for(let i=0; i<passwordLength; i++) {
        randomPasswordTwo += getRandom()
    }
    passwordTwo.textContent = randomPasswordTwo;
}   

function getRandom() {
    let randomCharacter = Math.floor(Math.random() * characters.length);
    return  characters[randomCharacter]
}