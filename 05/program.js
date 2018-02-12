var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function finishedReading(err, list) {
    list.forEach(function filterByExtension(item) {
        if (path.extname(item) == '.' + process.argv[3]) {
            console.log(item);
        }
    })
});
