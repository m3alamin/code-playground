<?php

use Apple\Calculator as AppCal;
use Samsung\Calculator as SC;

require_once 'app/Samsung/Calculator.php';
require_once 'app/Apple/Calculator.php';

$c = new SC();
$ac = new AppCal();

echo $c->add(1,2);
echo '<br/>';
echo $ac->add(1,2);