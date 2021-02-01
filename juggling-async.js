const http = require('http');

const url1 = process.argv[2]; 
const url2 = process.argv[3];
const url3 = process.argv[4];


function firstRequest() {
    let dataContent = '';
    http.get(url1, (response) => {
        response.setEncoding('utf-8');
        response.on('data', (data) => {
            dataContent += data;
        });
        response.on('end', () => {
            console.log(dataContent)
            secondRequest();
        });
    })
}

function secondRequest() {
    let dataContent = '';
    http.get(url2, (response) => {
        response.setEncoding('utf-8');
        response.on('data', (data) => {
            dataContent += data;
        });
        response.on('end', () => {
            console.log(dataContent)
            thirdRequest();
        });
    })
}

function thirdRequest() {
    let dataContent = '';
    http.get(url3, (response) => {
        response.setEncoding('utf-8');
        response.on('data', (data) => {
            dataContent += data;
        });
        response.on('end', () => {
            console.log(dataContent)
        });
    })
}

firstRequest();

// SOLUTION

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
