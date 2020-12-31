function frequencyCounter(word) {
  // Insert code here;
    var arr = {};
    for(var i = 0; i < word.length; i++){
//        var letter = word.charAt[i];
        if(arr[word[i]]){
            arr[word[i]]++;
        }else{
            arr[word[i]] = 1;
        }
    }
    return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;