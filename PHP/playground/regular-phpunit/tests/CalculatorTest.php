<?php
require_once '../lib/Calculator.php';

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
        $result = $this->calculator->add(1, 2);
        $this->assertEquals(3, $result);
    }

    public function testSubtract()
    {
        $result = $this->calculator->subtract(1, 2);
        $this->assertEquals(-1, $result);

        $this->assertEquals(10, $this->calculator->subtract(50, 40));
        $this->assertEquals(-10, $this->calculator->subtract(50, 60));
    }
}