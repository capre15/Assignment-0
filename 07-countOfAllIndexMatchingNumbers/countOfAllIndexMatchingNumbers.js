function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
    var tallyCounter=0;
    var indexCounter=0;

    for(var i=0; i<nums.length; i++){
        if(indexCounter==nums[i]){
            tallyCounter++;
        }
        indexCounter++;
    }
    return tallyCounter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;