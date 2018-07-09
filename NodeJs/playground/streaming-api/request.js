var http = require("http");

var options = {
  "method": "POST",
  "hostname": "inventory-xtream-test.ezlinks.com",
  "port": 8002,
  "path": null,
  "headers": {
    "content-type": "text/xml",
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    console.log(chunk);
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (err) {
    console.log(err);
  });

});

req.write('<?xml version="1.0"?><methodCall><methodName>ezlinks.loginSubscriber</methodName><params><param><value><string>TeeTimesDotNet</string></value></param><param><value><string>L3fT_te$ting</string></value></param></params></methodCall>');
req.end();
