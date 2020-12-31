function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
    var unionSet = new Set();
   for(var i = 0; i < args.length; i++){
       for(var j of args[i]){
           unionSet.add(j);
       }
   }
    return unionSet;
    
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;