var fs = require('fs');

//fs.unlink()
fs.unlink('./CRUD_files/deletefile.txt', (err) => {
    if(err) throw err;
    console.log('File Deleted!');
});