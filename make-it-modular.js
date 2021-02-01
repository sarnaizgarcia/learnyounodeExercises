const myModule = require('./mymodule');

myModule(process.argv[2], process.argv[3], (err, datos) => {  
    if (err) {
        throw err;
    }

    for (const file of datos) {
        console.log(file);
    }
});

// SOLUTION

// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

