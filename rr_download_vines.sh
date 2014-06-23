#!/bin/bash

json_filename="download_json.txt"
page_num=1

if [ $1 ]
then
	cd $1
	echo "running script in:"
	pwd
else
	echo $1 directory not found
	exit
fi

if [ ! -x /usr/bin/curl ]
then
	echo curl not found
	exit -1
fi

if [ $3 ]
then
	page_num=$3
fi

if [ $2 ]
then
	curl "https://api.vineapp.com/timelines/tags/$2?page=$page_num" > $json_filename
else
	echo tag is missing
	exit -1
fi

if [ -e $json_filename ]
then
	php ./rr_download_vines.php $2 $page_num
else
	echo $json_filename not found
	exit -1
fi
