function removeWord(){
    
}

function findIntersection(word1,word2){
    if (word1.length<word2.length){
        word1,word2 = word2,word1
    }
    for(let i=0;i<word1.length;i++){
        if (word2.includes(word1[i])){
            return [i,word2.indexOf(word1[i])]
        }
    }
    return -1
}

function addElement(word,size,length,_iteration){  
    var r = Math.floor(Math.random()*size)
    var c = Math.floor(Math.random()*size)
    var orientation = Math.floor(Math.random()*3)
    if ((orientation==0) && (r + length-1 < size)){
        for(let i =0;i<word.length;i++){
            if (temp[i+r][c] != null){
                removeElement(word)
                return _iteration 
            }else{
            wordSearch[i+r][c] = word[i]
            temp[i+r][c] = word
            }
        }
    }else if((orientation==1) && (c + length-1 < size)){
        for(let i =0;i<word.length;i++){
            if (temp[r][i+c] != null){
                removeElement(word)
                return _iteration 
            }else{
            wordSearch[r][i+c] = word[i]
            temp[r][i+c] = word
            }
        }
    }
}
function generate(size,_iteration){
    while (_iteration<wordlist.length){
        addElement()
    }

}

const size = 5
const wordlist = []
var wordSearch = Array.from(Array(size), () => new Array(size))
console.log(findIntersection("john","joe"))

