function emptywordSearch(size){
    var wordSearch = Array.from(Array(size), () => new Array(size))
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    for (let r = 0; r < size; r++){
        for (let c = 0; c < size; c++){
            wordSearch[r][c] = characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }   
    return wordSearch
}
function checkValid(orientation,size,length,r,c){
    switch (orientation){
        case 0:
            if (r + length-1 < size){
                return true
            }else{
                return false
            }
        case 1:
            if (c + length-1 < size){
                return true
            }else{
                return false
            }
        case 2:
            if (r - (length-1) > 0 && c + length-1 < size){
                return true
            }else{
                return false
            }
        case 3:
            if (r - (length-1) > 0 && c - (length-1) > 0){
                return true
            }else{
                return false
            }
    }
}
function addWord(word,temp,size,_iteration){  
    var r = Math.floor(Math.random()*size)
    var c = Math.floor(Math.random()*size)
    var orientation = Math.floor(Math.random()*3)
    if(checkValid(orientation,size,word.length,r,c)==true){
        switch (orientation){
            case 0:
                for(let i =0;i<word.length;i++){
                    wordSearch[i+r][c] = word[i]
                    temp[i+r][c] = word
                }break
            case 1:
                for(let i =0;i<word.length;i++){
                wordSearch[r][i+c] = word[i]
                temp[r][i+c] = word
                }break
            case 2:
                for(let i =0;i<word.length;i++){
                    wordSearch[r-i][c+i] = word[i]
                    temp[r-i][c+i] = word
                }break
            case 3:
                for(let i =0;i<word.length;i++){
                    wordSearch[r-i][c-i] = word[i]
                    temp[r-i][c-i] = word
                }break
            }
        }else{
            generate(size,_iteration)
        }
}
            
function generate(size,_iteration){
    while (_iteration < wordlist.length){
        addElement(wordlist[_iteration],temp,size,wordlist[_iteration].length,_iteration)
        _iteration +=1
    }
}

function addElement(word,temp,size,length,_iteration){  
    var r = Math.floor(Math.random()*size)
    var c = Math.floor(Math.random()*size)
    var orientation = Math.floor(Math.random()*3)
    if ((orientation==0) && (r + length-1 < size)){
        for(let i =0;i<word.length;i++){
            wordSearch[i+r][c] = word[i]
            temp[i+r][c] = word
        }
    }else if((orientation==1) && (c + length-1 < size)){
        for(let i =0;i<word.length;i++){
            wordSearch[r][i+c] = word[i]
            temp[r][i+c] = word
            }
    }else if((orientation==2) && (r - (length-1) > 0 && c + length-1 < size)){
        for(let i =0;i<word.length;i++){
            wordSearch[r-i][c+i] = word[i]
            temp[r-i][c+i] = word
        }
    }else if((orientation==3) && (r - (length-1) > 0 && c - (length-1) > 0)){
            for(let i =0;i<word.length;i++){
                wordSearch[r-i][c-i] = word[i]
                temp[r-i][c-i] = word
            }
    }else{
        generate(size,_iteration)
    }
}

var size = 5
var wordlist = ["@@@@","####"]
var wordSearch = emptywordSearch(size)
var temp = Array.from(Array(size), () => new Array(size))
generate(size,0)
console.log(wordSearch)
