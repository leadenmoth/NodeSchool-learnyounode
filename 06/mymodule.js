var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extFilter, callback) {
    fs.readdir(dirName, function finishedReading(err, list) {
        if (err)
           return callback(err);
        var newList = [];
        var extension = '.' + extFilter;
        list.forEach(function filterByExtension(item) {
            if (path.extname(item) == extension) {
                newList.push(item);
            }
        })
        callback(null, newList);
    });
}