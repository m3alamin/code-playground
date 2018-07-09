<?php

use Wthree\Lib\Calculator;

require_once './vendor/autoload.php';

$c = new Calculator();
echo $c->add(1,2);