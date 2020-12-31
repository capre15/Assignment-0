function titleCaseEdit(title) {
  // Insert code here;
    var str = title.split(" ");
    
    for(let i = 0; i < str.length; i++){
        str[i]=str[i][0].toUpperCase()+str[i].substr(1);
    }
    
    return str.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;