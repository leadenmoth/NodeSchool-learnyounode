var mymodule = require('./mymodule.js')
mymodule(process.argv[2], process.argv[3], function finishedReading(err, list) {
    if (err) { 
        console.log(err)
    } else {
        list.forEach(function printArray(item) {
            console.log(item);
        })
    }
});
