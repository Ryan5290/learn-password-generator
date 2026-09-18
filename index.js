const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15

let passwordOneEl = document.getElementById("password-1")
let passwordTwoEl = document.getElementById("password-2")


function generatePassword() {
    let charsLen = characters.length
    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
        let randIndex = Math.floor(Math.random()* charsLen)
        password += characters[randIndex]
    }
    return password
    
}

function displayPasswords() {
    let passwordOne = generatePassword()
    let passwordTwo = generatePassword()
    
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
}

function buildCharacters() {
    let numEl = document.getElementById("num-el")
    console.log(numEl)
}

buildCharacters()


