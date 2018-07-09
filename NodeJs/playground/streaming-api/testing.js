var net = require('net');

var client = new net.Socket();
client.connect(8002, 'inventory-xtream-test.ezlinks.com', function() {
	console.log('Connected');
  client.write("Content-Type: text/xml\r\n");
	client.write("Connection: Keep-Alive\r\n");
	client.write("\r\n");
	client.write('<?xml version="1.0"?><methodCall><methodName>ezlinks.loginSubscriber</methodName><params><param><value><string>TeeTimesDotNet</string></value></param><param><value><string>L3fT_te$ting</string></value></param></params></methodCall>');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('error', function(data) {
	console.log('Received err: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
