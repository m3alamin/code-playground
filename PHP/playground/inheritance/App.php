<?php

class App {

  protected $config;

  function __construct() {
    $this->config = require_once 'config.php';
  }
}
