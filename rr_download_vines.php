<?php

$filename = "download_json.txt";
$fieldname = "videoUrl";
$tagname = $argv[1];
$pagenum = $argv[2];

//var_dump(file_exists($filename));

$f = fopen($filename,"r");
$s = fgets($f);
fclose($f);

//var_dump($s);

$o = json_decode($s,TRUE);

$c = $o["data"]["count"];

$count = 0;

for ($i = 0; $i < $c; $i++)
{
	$i_str = sprintf("%s_%05d",$tagname,$i+(($pagenum-1)*20));
	$e = $o["data"]["records"][$i][$fieldname];
	if ( $e != "")
	{
		shell_exec("curl ".$e." > ".$i_str.".mp4\n");
		$count++;
	}
}

printf("num_records %d\n",$c);

printf("count %d\n",$count);

?>
