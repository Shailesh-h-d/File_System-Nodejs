var fs = require('fs');

//fs.rename()
fs.rename('./CRUD_files/renamedFile.txt', './CRUD_files/renamedAgain.txt', (err) => {
    if(err) throw err;
    console.log('File renamed!');
});