var http = require('http');
var url = require('url');

function parseEndpoint(endpoint) {
    var request = url.parse(endpoint, true);
    if (request.pathname == '/api/parsetime') {
        return timeObject(request.query.iso)
    } else if (request.pathname == '/api/unixtime') {
        return unixTime(request.query.iso)
    } else {
        return "error"
    }
}

function timeObject(time) {
    var date = new Date(parseTime(time))
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function unixTime(time) {
    //todo
    return { unixtime : parseTime(time) }
}

function parseTime(time) {
    return Date.parse(time)
}

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(parseEndpoint(req.url)))
})
server.listen(process.argv[2]);