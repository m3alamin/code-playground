<?php

$t = new ctwitter_stream();
$t->start();

class ctwitter_stream
{
    public function __construct() {
        set_time_limit(0);
    }

    //
    // process a tweet object from the stream
    //
    public function process_tweet($_data)
    {
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
        return true;
    }

    //
    // the main stream manager
    //
    public function start()
    {
        $i = 0;
        while ($i < 1) {
            $i++;
            $fp = fsockopen("etntestserver.ezlinks.com", 80, $errno, $errstr, 30);
            $this->process_tweet('After fsocket open-' . $i);
            $this->process_tweet(json_encode($fp));

            if (!$fp) {
                echo "ERROR: Stream Error: failed to open socket";
                $this->process_tweet("ERROR: Stream Error: failed to open socket" . $i);
            } else {
                //
                // build the data and store it so we can get a length
                //
                $data = '<?xml version="1.0"?>
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

                //
                // build the request
                //
                $request = "POST /1/subscribe/feed HTTP/1.1\r\n";
                $request .= "Host: etntestserver.ezlinks.com\r\n";
                $request .= "Content-Type: text/xml\r\n\r\n";
                $request .= "Connection: keep-alive\r\n\r\n";
                $request .= $data;

                //
                // write the request
                //
                fwrite($fp, $request);

                //
                // set it to non-blocking
                //
                stream_set_blocking($fp, 0);

                $j = 0;
                while (!feof($fp)) {
                    $j++;

                    $read = array($fp);
                    $write = null;
                    $except = null;

                    //
                    // select, waiting up to 10 minutes for a tweet; if we don't get one, then
                    // then reconnect, because it's possible something went wrong.
                    //
                    $res = stream_select($read, $write, $except, 600, 0);
                    $this->process_tweet('After RES-' . $j);
                    $this->process_tweet(json_encode($res));

                    if (($res == false) || ($res == 0)) {
                        break;
                    }

                    //
                    // read the JSON object from the socket
                    //
                    $json = fgets($fp);
                    $this->process_tweet('after fgets-' . $j);
                    $this->process_tweet(json_encode($json));
                    if($json == false) {
                        fclose($fp);
                        $this->process_tweet("Closed in 2nd while");
                        break;
                    }

                    //
                    // look for a HTTP response code
                    //
//                    if (strncmp($json, 'HTTP/1.1', 8) == 0) {
//                        $json = trim($json);
//                        if ($json != 'HTTP/1.1 200 OK') {
//                            echo 'ERROR: ' . $json . "\n";
//                            return false;
//                        }
//                    }

                    //
                    // if there is some data, then process it
                    //
//                    if (($json !== false) && (strlen($json) > 0)) {
//                        $data = json_encode($json);
//                        if ($data) {
//                            $this->process_tweet($data);
//                        }
//                    }
                }
            }

            fclose($fp);
            $this->process_tweet("Closed in 1st while");
            sleep(10);
        }

        return;
    }
}
