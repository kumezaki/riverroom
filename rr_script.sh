#!/bin/bash

while true; do
	curl "http://riversroom.com/update.php" | awk -f rr_awk.txt
	sleep 5
done
