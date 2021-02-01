const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
    let filesArray = [];
    fs.readdir(directory, { encoding: 'utf-8' }, (err, list) => {
        if (err) {
            return callback(err)
        }
        list.forEach((fileName) => {
            if(path.extname(fileName) === '.' + extension) {
                filesArray.push(fileName);
            }
        });
        callback(null, filesArray);
    })
};

// SOLUTION

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }

