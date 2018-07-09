<?php
 header('Access-Control-Allow-Origin: *');  
 header('Content-Type: application/json');

 $data = ['name'=> 'Gored', 'age'=> 31];
 echo json_encode($data);