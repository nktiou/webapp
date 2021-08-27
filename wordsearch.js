function emptywordSearch(size){
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    for (let r = 0; r < size; r++){
        for (let c = 0; c < size; c++){
            wordSearch[r][c] = characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }   
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
    var temp = Array.from(Array(size), () => new Array(size))
    while (_iteration<=wordlist.length){
        try{
            temp = addWord(wordlist[_iteration],temp,size,_iteration)
            _iteration +=1
        }catch(error){
            console.log(wordSearch)
            throw new Error("sorry my fault, didn't mean to but now I am in byte nirvana");
        }
    }
}

var size = 5
var wordSearch = Array.from(Array(size), () => new Array(size))
var wordlist = ["@@@@","####"]
emptywordSearch(size,0)
generate(size,0)
console.log(wordSearch)
