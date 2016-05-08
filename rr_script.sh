#!/bin/bash

while true; do
	curl "http://riversroom.com/update.php" | awk -f rr_awk.txt
# for 5/3/16 Harvard residency:
	sleep 5
# for 4/23/16 UCI concert:
#	sleep 10
done
