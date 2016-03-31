autowatch = 1;

var a = [];
var gVineOffset = 0;
var gNumVines = 0;
var gNumVinesMax = 10;
var gRandom = 0;

function create(tag)
{
	for (i = 0; i < gNumVines; i++)
      a[i] = patcher.newdefault(10,10+(i*24),"rr_cpu_test_vine",i+gVineOffset,tag);
}

function destroy()
{
	for (i = 0; i < gNumVines; i++)
		patcher.remove(a[i]);
}

function set_num_vines(v)
{
	post("set_num_vines("+v+")\n");

	gVineOffset = gRandom ? parseInt(Math.random() * (v - gNumVinesMax)) : 0;
	post("gVineOffset is "+gVineOffset+"\n");
	
	gNumVines = v > gNumVinesMax ? gNumVinesMax : v;
}

function set_num_vines_max(v)
{
	gNumVinesMax = v;
}

function set_random(v)
{
	gRandom = v;
}
