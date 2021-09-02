class indexElement{
    constructor(word,orientation,start,end){
        this.word = word
        this.orientation = orientation
        this.start = start
        this.end = end
    }
    alreadyUsed(word){

    }
}

function findIntersection(wordA, wordB){
    if (wordA<wordB){
        wordA, wordB = wordB,wordA
    }
    for(let i = 0;i<wordA.length;i++){
        if (wordB.includes(wordA[i])){
            return [wordA, wordB, i, wordB.indexOf(wordA[i])]
        }
    }
    return -1
}
    
function addElement(temp){

}

function generate(size, wordlist){
    var wordIndex = []
    var selected = []
    var i = 0
    while (wordlist>0){
        var r1 = Math.floor(Math.random()*wordlist.length)
        var r2 = Math.floor(Math.random()*wordlist.length)
        if (r1 != r2){
            var temp = findIntersection(wordlist[r1],wordlist[r2])
            if (temp == -1){
                break
            }
            addElement(temp)
            // index words 
            wordlist.splice(r1,1)
            wordlist.splice(r2,1)
        }
    }
}
const size = 5
const wordlist = ["john","kov"]
const test = new crossWord(wordlist)
console.log(findIntersection("john","kvo"))
