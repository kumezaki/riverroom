#!/bin/bash

while true; do
	curl "http://riversroom.com/movies.php" > rr_download_media_files.txt
	php rr_download_media_files.php
	sleep 1
done
