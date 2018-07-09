<?php

include 'Classes/PHPExcel/IOFactory.php';
$inputFileName = 'teeoff/ActiveTeeOffCourseImageURLs.xlsx';
$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
$sheetData = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);

echo '<pre>';
print_r($sheetData);
