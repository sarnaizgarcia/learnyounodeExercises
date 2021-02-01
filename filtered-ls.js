const fs = require('fs');

fs.readdir(process.argv[2], { encoding: 'utf-8' }, 
    (err, list) => {
        if (err) {
            throw err;
        }
        const filesApproved = list.filter((file) => {
                const fileParts = file.split('.');
                return fileParts[1] === process.argv[3];
            });
        
        for (const file of filesApproved) {
            console.log(file);
        }
        
})

