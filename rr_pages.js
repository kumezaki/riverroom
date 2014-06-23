autowatch = 1;

var gPageNum = 0;
var gPageNumMax = 1;
var gNumVines = 0;
var gStop = 0;

function reset()
{
	gPageNum = 0;
	gPageNumMax = 1;
	gNumVines = 0;
	
	messnamed("num_vines_msg",gNumVines);
}

function bang()
{
	if (gPageNum < gPageNumMax)
	{
		if (gStop)
			download_stop();
		else
			outlet(0,++gPageNum);
	}
	else
		download_done();
}

function count(page_count,total_count)
{
	post(page_count,total_count,"\n");
	gPageNumMax = parseInt(total_count / 20) + 1;
	gNumVines += page_count;
	post("gPageNumMax set to",gPageNumMax,"\n");
	post("gNumVines is",gNumVines,"\n");
}

function stop()
{
	gStop = 1;
	post("DOWNLOADING STOP REQUESTED!\n");
}

function download_stop()
{
	gStop = 0;
	messnamed("num_vines_msg",gNumVines);
	post("DOWNLOADING STOPPED!\n");
}

function download_done()
{
	messnamed("num_vines_msg",gNumVines);
	post("DOWNLOADING DONE!\n");
}
