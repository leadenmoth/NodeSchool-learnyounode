var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strArr = str.split('\n');
console.log(strArr.length - 1);