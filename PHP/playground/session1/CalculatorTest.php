<?php

use PHPUnit\Framework\TestCase;

require_once 'Calculator.php';

class CalculatorTest extends TestCase {
    protected $calculator;

    protected function setUp() {
        $this->calculator = new Calculator();
    }

    protected function tearDown() {
        $this->calculator = NULL;
    }

    public function testAdd() {

        $arr = [
            [1,2,3],
            [2,4,6],
            [1,6,7]
        ];

        foreach ($arr as $item) {
            $result = $this->calculator->add($item[0],$item[1]);
            $this->assertEquals($item[2], $result);
        }
       
    }

    public function testSubtract() {

        $arr = [
            [19,2,17],
            [20,4,16],
            [12,6,6],
            [4,50,-46]
        ];

        foreach ($arr as $item) {
            $result = $this->calculator->subtract($item[0],$item[1]);
            $this->assertEquals($item[2], $result);
        }
       
    }


}