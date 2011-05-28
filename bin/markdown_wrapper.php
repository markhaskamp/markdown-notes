<?php

require 'markdown.php';

$filename = $argv[1];

$infile = fopen($filename, 'r');
$markdown = fread($infile, filesize($filename));

$html = Markdown($markdown);

echo $html;

?>

