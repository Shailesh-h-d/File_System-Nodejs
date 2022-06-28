var fs = require('fs');

//fs.appendFile()
fs.appendFile('./CRUD_files/updatefile.txt', ' this is updated content at the end of the file', (err) => {
    if(err) throw err;
    console.log('Updated!');
})

//fs.writeFile()
fs.writeFile('./CRUD_files/updatefile.txt', 'this is override update', (err) => {
    if(err) throw err;
    console.log("updated and replaced");
})