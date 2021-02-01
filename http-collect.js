const http = require('http');

const url = process.argv[2];
let dataContent = '';

const result = http.get(url, (response) => {
    
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        dataContent += data;
    })
    response.on('end', () => {
        console.log(dataContent.length);
        console.log(dataContent);
    })
})

// SOLUTION

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

