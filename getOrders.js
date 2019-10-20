const fs = require('fs');

fs.readFile('C:/Users/abalu3/Documents/WSTax/wstaxorder.txt', function(err, data){
    if(!err && data){
        let file = data.toString('utf8');
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line, index) => {
            if(line.length>0){
                line = line.split("-");
                if(allLines.length-1 > index && index !== 0){
                    console.log("[DOCUMENT_NO] = '"+line[0]+"' or");
                } else if(index ==0){
                    console.log("where [DOCUMENT_NO] = '"+line[0]+"' or");
                } else{
                    console.log("[DOCUMENT_NO] = '"+line[0]+"'");
                }
            }
        });
    }
});