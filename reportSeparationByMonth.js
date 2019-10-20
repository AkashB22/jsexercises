const fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);
const path = require('path');
const baseDir = path.join(__dirname,'/data/');
fs.readFile(baseDir + 'totalreport.csv', function(err, data){
    if(!err && data){
        let file = data.toString('utf8');
        const allLines = file.split(/\r\n|\n/);
        // Reading line by line
        allLines.forEach((line, index) => {
            if(line.length>0){
               //console.log(line);
               let checkLine = line;
               let date = checkLine.split(',"');
               //console.log(date[6]);
               if((/JUN-18/).test(checkLine) || date[6]=='LASTMODIFIED"'){
                   fs.open(baseDir + '/calibri-jun18.csv', 'a', function(err, fileDescriptor){
                        if(!err && fileDescriptor){
                            let AddLine = checkLine + '\r\n';
                            fs.appendFile(fileDescriptor, AddLine, function(err){
                                if(!err){
                                    fs.close(fileDescriptor, function(err){
                                       if(!err) {
                                           console.log("success");
                                       } else{
                                           console.log('ERROR while closing the file');
                                       }
                                    });
                                } else {
                                    console.log('ERROR in writing to file');
                                }
                            });
                        } else{
                            console.log('ERROR on opening a file' + err);
                        }
                   });
               } else{
                   //console.log(line);
               }
            }
        });
    }
});