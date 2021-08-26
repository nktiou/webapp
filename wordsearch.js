function emptyPuzzle(size){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    for (let r = 0; r < size; r++){
        for (let c = 0; c < size; c++){
            puzzle[r][c] = characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }   
}

function addWord(word){  
    var vh = Math.floor((Math.random() * 1) + 1)
    var r = Math.floor((Math.random() * size) + 1)
    var c = Math.floor((Math.random() * size) + 1)
}

function generate(){
}

var size = 5
var puzzle = Array.from(Array(size), () => new Array(size))
var wordlist = ["bonk","from","dob"]
emptyPuzzle(size)
console.log(puzzle)

