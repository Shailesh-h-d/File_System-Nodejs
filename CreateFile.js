var fs = require('fs');

//fs.appendFile()
fs.appendFile('./CRUD_files/newFile1.txt', ' Hello World2222!', (err) => {
    if (err) throw err;
    console.log('Saved');
});

//fs.open()
fs.open('./CRUD_files/newFile2.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log("Saved !");
});

// fs.writeFile()
fs.writeFile('./CRUD_files/newFile3.txt', ' this is replaced content using', (err) => {
    if(err) throw err;
    console.log('Saved!writeFile');
});