function randomChar(){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    return characters.charAt(Math.floor(Math.random() * charactersLength));
}

function emptywordSearch(size){
    var wordSearch = Array.from(Array(size), () => new Array(size))
    for (let r = 0; r < size; r++){
        for (let c = 0; c < size; c++){
            wordSearch[r][c] = randomChar()
        }
    }   
    return wordSearch
}

function removeElement(word){
    for(var r = 0; r < temp.length; r++){
        for (var c =0;c<temp.length;c++){
            if (temp[r][c] == word){
                temp[r][c] = ""
                wordSearch[r][c] = randomChar()
            }
        }
    }   
}
  
function addElement(word,temp,size,length,_iteration){  
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
    }else if((orientation==2) && (r - (length-1) > 0 && c + length-1 < size)){
        for(let i =0;i<word.length;i++){
            if (temp[r-i][c+i] != null){
                removeElement(word)
                return _iteration 
            }else{
            wordSearch[r-i][c+i] = word[i]
            temp[r-i][c+i] = word
            }
        }
    }else if((orientation==3) && (r - (length-1) > 0 && c - (length-1) > 0)){
            for(let i =0;i<word.length;i++){
                if (temp[r-i][c-i] != null){
                    removeElement(word)
                    return _iteration 
                }else{
                wordSearch[r-i][c-i] = word[i]
                temp[r-i][c-i] = word
            }
        }
    }else{
        return _iteration 
    }
    return _iteration + 1
}

function generate(size,tryLimit,_iteration){
    var attempts = 0
    var tAttempt = 0
    while (_iteration < wordlist.length){
        _iteration = addElement(wordlist[_iteration],temp,size,wordlist[_iteration].length,_iteration)
        attempts +=1
        tAttempt +=1
        if (attempts >= tryLimit && _iteration == 0){
            console.log("cannot generate word search - tried " + tAttempt + " time")
            return
        }else if (attempts >= tryLimit){
            _iteration -=1
            attempts = 0
        }
    }
}

var size = 50
var wordlist = ["rose","tulips"]
var wordSearch = emptywordSearch(size)
var temp = Array.from(Array(size), () => new Array(size))
generate(size,50,0)
console.log(wordSearch)

