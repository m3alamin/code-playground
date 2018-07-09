var fs = require('fs');
var http = require('http');

var postData = '<?xml version="1.0"?><methodCall><methodName>ezlinks.loginSubscriber</methodName><params><param><value><string>TeeTimesDotNet</string></value></param><param><value><string>L3fT_te$ting</string></value></param></params></methodCall>';

var postOptions = {
  host: 'inventory-xtream-test.ezlinks.com',
  port: '8002',
  path: '/',
  method: 'POST',
  headers: {
    'Connection': 'Keep-Alive',
    'Content-Type': 'text/xml',
  },
};

// const ez = fs.createWriteStream('inventory-xtream-test.ezlinks.com:8002');
// const ezRead = fs.createReadStream('inventory-xtream-test.ezlinks.com:8002');
// ezRead.on('data',function(data) {
//      console.log(data);
// });

const req = http.request(postOptions, (res) => {
  console.log('STATUS: ${res.statusCode}');
  console.log('HEADERS: ${JSON.stringify(res.headers)}');
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log('BODY: ${chunk}');
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error('problem with request: ', e.message);
});

// write data to request body
req.write(postData);
req.end();
console.log('Finished!');
