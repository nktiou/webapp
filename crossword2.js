class crossWords{
    constructor(size, wordList){
        this.size = size
        this.wordList = wordList
        this.wordIndex = Array.from(Array(wordList.length), () => new Array(3))
        this.board = Array.from(Array(size), () => new Array(size))
    }
    indexWord(word, r,c){

    }
    findIntersection(wordA, wordB){
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
    placeWord(){
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
    generate(){
        continue
    }
}

const size = 5
const wordList = ["mead","gran"]