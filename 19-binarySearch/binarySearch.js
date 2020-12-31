class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
      var low = 0; var high = nums.length-1;
      
      var mid = Math.floor((low + high)/2);
        
      if(low <= high){
          
      if(target === nums[mid]){
              return true;
      }else if(target < nums[mid]){
          return this.binarySearch(nums.slice(0,mid),target);
          
      }else if(target > nums[mid]){
          return this.binarySearch(nums.slice(mid+1),target);
      }
      }
  
      return false;
      
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;