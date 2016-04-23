<?php

$filename_json = "download_json.txt";
$tagname = $argv[1];
$pagenum = $argv[2];

//var_dump(file_exists($filename_json));

$f = fopen($filename_json,"r");
$s = fgets($f);
fclose($f);

//var_dump($s);

$o = json_decode($s,TRUE);

$c = $o["data"]["count"];

printf("#%s: num_records %d %s\n",$tagname,$c,$r);

if ($c > 0)
{
	$i_max = $c < 3 ? $c : 3;
	for ($i = 0; $i < $i_max; $i++) {
		$n = rand(0,$c<19?$c:19);
		$r = $o["data"]["records"][$n]["videoUrl"];
		printf("[%d] %d %s\n",$i,$n,$r);
		$filename_mp4 = sprintf("%s_%05d.mp4",$tagname,$i);
		$cmd = "curl ".$r." > ./mp4downloads/".$filename_mp4;
		shell_exec($cmd);
		$cmd = "./ffmpeg -y -i ./mp4downloads/".$filename_mp4." -an -vf scale=360:360 ./mp4downloads/".$filename_mp4.".mov";
		shell_exec($cmd);
		$cmd = "./ffmpeg -y -i ./mp4downloads/".$filename_mp4." -vn ./mp4downloads/".$filename_mp4.".aif";
		shell_exec($cmd);
	}
	$m = $i." ".$tagname;
	echo $m."\n";
	file_put_contents('./movies.txt',$m,FILE_APPEND);
}
else
	echo $tagname.": NONE FOUND\n";

?>
