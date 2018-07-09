<?php

require_once 'App.php';

class Table extends App {

  protected $_tableName;

  public function connect()
  {
    echo 'Table name..: ' . $this->_getTableName() . '</br>';
    print_r($this->config);
  }

  private function _getTableName()
  {
    if(isset($this->_tableName)) {
      return $this->_tableName;
    }
    return get_class($this);
  }
}
