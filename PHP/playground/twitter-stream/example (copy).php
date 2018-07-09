<?php

$fp = fsockopen('etntestserver.ezlinks.com', 80);

$vars = '<?xml version="1.0"?>
<methodCall>
<methodName>ezlinks.subscribeTeesheetUpdateCache</methodName>
<params>
<param>
<value><string>VGVlVGltZXNEb3ROZXQsMjAxNy0wNy0xNCAwMTowOTo0OC4yMjJ8MHgwMDAwMzlGQw==</string></value>
</param>
</params>
</methodCall>';
$content = $vars;

fwrite($fp, "POST /1/subscribe/feed HTTP/1.1\r\n");
fwrite($fp, "Host: etntestserver.ezlinks.com\r\n");
fwrite($fp, "Content-Type: text/xml\r\n");
fwrite($fp, "Content-Length: ".strlen($content)."\r\n");
fwrite($fp, "Connection: Keep-Alive\r\n");
fwrite($fp, "\r\n");

fwrite($fp, $content);

header('Content-type: text/xml');
while (!feof($fp)) {
    echo fgets($fp, 1024);
}