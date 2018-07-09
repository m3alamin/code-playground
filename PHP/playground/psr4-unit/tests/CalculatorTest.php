<?php

use Wthree\Lib\Calculator;
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
    private $calculator;

    protected function setUp()
    {
        $this->calculator = new Calculator();
    }
    protected function tearDown()
    {
        $this->calculator = NULL;
    }

    public function testAdd()
    {
        $arr = [
            [1,2,3],
            [2,4,6],
            [1,3,4]
        ];

        foreach($arr as $item) {
            $result = $this->calculator->add($item[0], $item[1]);
            $this->assertEquals($item[2], $result);
        }
    }

}
