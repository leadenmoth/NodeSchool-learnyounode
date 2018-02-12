var http = require('http');
var bl = require('bl');
var count = 0;
var responses = new Array(3);

function getData (url, index, callback) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return callback(err)
            }
            callback(null, index, data.toString());
        }))
    })
}

for (var i = 0; i < 3; i++) {
    getData(process.argv[i+2], i, function finishedReading(err, index, data) {
        if (err) { 
            console.log(err)
        } else {
            responses[index] = data;
            count++;
            if (count === 3) {
                responses.forEach(function (item) {
                    console.log(item);
                })
            }
            }
        }
    );
    
}