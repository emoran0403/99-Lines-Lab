let friends=['Paul', 'Nate', 'Nick', 'John', "Joe"];

for(var j = 0; j < friends.length; j++){
    let current = friends[j]
    for (let i = 99; i > 0; i--) {
        if (i>1){
            console.log(i + " lines of code in the file, " + i + " lines of code; " + current + " strikes one out, clears it all out, " + i + " lines of code in the file");
        }
        if (i==1) {
            console.log(i + " line of code in the file, " + i + " line of code; " + current + " strikes one out, clears it all out, " + i + " line of code in the file");
        }
    }
}