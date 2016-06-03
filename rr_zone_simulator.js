autowatch = 1;

var glob = new Global("my_glob");
glob.num_zones = 64;

glob.zone_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);
for (i = 0; i < glob.num_zones; i++)
	glob.zone_mat.setcell1d(i,((i+0.5)/glob.num_zones)*2.-1.);
glob.zone_on_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);

glob.diff_thresh_mat = new JitterMatrix(1, "float32", 1, 1);
glob.diff_thresh_mat.setall(1. / glob.num_zones * 0.5 * 2.);

var enabled = 0;

function bang()
{
	for (i = 0; i < glob.num_zones; i++)
	{
		v = glob.zone_on_mat.getcell(i);
		glob.zone_on_mat.setcell1d(i,enabled*(Math.random()<(v==1?0.015:0.005)?1-v:v));
	}
}

function set_enable(v)
{
	enabled = v;
}

function set_zone_mat_0()
{
	for (i = 0; i < 32; i++)
		glob.zone_on_mat.setcell1d(i+0,arguments[i]);
}

function set_zone_mat_1()
{
	for (i = 0; i < 32; i++)
		glob.zone_on_mat.setcell1d(i+32,arguments[i]);
}
