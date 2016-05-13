<?php

$filename = "./rr_download_media_files.txt";
$server_dir = "http://riversroom.com/mp4downloads/";

//var_dump(file_exists($filename));

$f = fopen($filename,"r");

while (fscanf($f,"%d %s\n",$num,$tag))
{
	for ($i = 0; $i < $num; $i++)
	{
		$s = sprintf("%s_%05d",$tag,$i);
		echo $s."\n";

		$cmd = "curl ".$server_dir.$s.".mp4.mov > ./mp4downloads/".$s.".mp4.mov";
		echo $cmd."\n";
		shell_exec($cmd);

		$cmd = "curl ".$server_dir.$s.".mp4.aif > ./mp4downloads/".$s.".mp4.aif";
		echo $cmd."\n";
		shell_exec($cmd);
	}

	file_put_contents('./movies.txt',$num." ".$tag."\n",FILE_APPEND);
}

fclose($f);

file_put_contents($filename,"");

?>
