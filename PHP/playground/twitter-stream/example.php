<?php
set_time_limit(0);

$fp = fsockopen('etntestserver.ezlinks.com', 80);

$vars = '<?xml version="1.0"?>
<methodCall>
<methodName>ezlinks.loginSubscriber</methodName>
<params>
<param>
<value><string>TeeTimesDotNet</string></value>
</param>
<param>
<value><string>L3fT_te$ting</string></value>
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

while (!feof($fp)) {
    $res = fread($fp,1024);
    $xml = @simplexml_load_string($res);
    if($xml) {
        $tk = $xml->params->param->value->string;
        $token = json_decode(json_encode($tk), true);
        $token = $token[0];

        $vars = '<?xml version="1.0"?>
<methodCall>
<methodName>ezlinks.subscribeTeesheetUpdateCache</methodName>
<params>
<param>
<value><string>'.$token.'</string></value>
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

        stream_set_blocking($fp, 0);

        while (!feof($fp)) {
            $_data = fread($fp, 999999999);

            if(strlen($_data) < 1) continue;
            if(!@simplexml_load_string($_data)) continue;

            $name = 'local_and_test';
            $user = 'root';
            $password = '111111';
            $host = 'localhost';

            try {
                $db =  new PDO("mysql:host=$host;dbname=$name",$user,$password);
            } catch (PDOException $e) {
                echo '<h1>Error establishing a database connection</h1>';
                die();
            }
            $sql = "INSERT INTO stream (data) VALUES (:data)";
            $sth = $db->prepare($sql);
            $sth->bindParam(':data', $_data);
            $sth->execute();

//            if (strncmp($_data, 'HTTP/1.1', 8) == 0)
//            {
//                $_data = trim($_data);
//                if ($_data != 'HTTP/1.1 200 OK')
//                {
//                    echo 'ERROR: ' . $_data . "\n";
//                    return false;
//                }
//            }
//
//            if ( ($_data !== false) && (strlen($_data) > 0) )
//            {
//                if ($_data)
//                {
//                    $name = 'local_and_test';
//                    $user = 'root';
//                    $password = '111111';
//                    $host = 'localhost';
//
//                    try {
//                        $db =  new PDO("mysql:host=$host;dbname=$name",$user,$password);
//                    } catch (PDOException $e) {
//                        echo '<h1>Error establishing a database connection</h1>';
//                        die();
//                    }
//                    $sql = "INSERT INTO stream (data) VALUES (:data)";
//                    $sth = $db->prepare($sql);
//                    $sth->bindParam(':data', $_data);
//                    $sth->execute();
//                }
//            }


        }
    }
}