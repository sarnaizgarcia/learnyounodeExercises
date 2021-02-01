const fs = require('fs');

const contents = fs.readFile(process.argv[2], 
    { encoding: 'utf-8' }, (err, data) => {
        console.log(data.toString().split('\n').length - 1);
})