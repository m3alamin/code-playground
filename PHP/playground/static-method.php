<?php
class A {


	public static function message() {
		static::status();
	}

	protected static function status() {
		echo "Hello from Parent Class";
	}
}

class B extends A {
	protected static function status() {
		echo "Hello from Child Class";
	}
}


B::message();
 