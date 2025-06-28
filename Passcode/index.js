const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characters1= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characters2=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const characters3=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let box1= document.getElementById("boxes1")
let box2= document.getElementById("boxes2")

function passcode(){
    let word1=""
    for(let i=0;i<15;i++){
        let pass= characters[Math.floor(Math.random()*characters.length)]
        word1+=pass
    }
    let word2=""
    for(let i=0;i<15;i++){
        let pass= characters[Math.floor(Math.random()*characters.length)]
        word2+=pass
    }
    box1.textContent=word1
    box2.textContent=word2
    
}

function numbersoff(){
    let word1=""
    for(let i=0;i<15;i++){
        let pass= characters1[Math.floor(Math.random()*characters1.length)]
        word1+=pass
    }
    let word2=""
    for(let i=0;i<15;i++){
        let pass= characters1[Math.floor(Math.random()*characters1.length)]
        word2+=pass
    }
    box1.textContent=word1
    box2.textContent=word2
    
}

function lettersoff(){
    let word1=""
    for(let i=0;i<15;i++){
        let pass= characters2[Math.floor(Math.random()*characters2.length)]
        word1+=pass
    }
    let word2=""
    for(let i=0;i<15;i++){
        let pass= characters2[Math.floor(Math.random()*characters2.length)]
        word2+=pass
    }
    box1.textContent=word1
    box2.textContent=word2
    
}

function specialoff(){
    let word1=""
    for(let i=0;i<15;i++){
        let pass= characters3[Math.floor(Math.random()*characters3.length)]
        word1+=pass
    }
    let word2=""
    for(let i=0;i<15;i++){
        let pass= characters3[Math.floor(Math.random()*characters3.length)]
        word2+=pass
    }
    box1.textContent=word1
    box2.textContent=word2

}






function copyPassword(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Password copied!");
      })
      .catch(err => {
        console.error("Failed to copy:", err);
      });
}




