autowatch = 1;

var glob = new Global("my_glob");
glob.num_zones = 32;
glob.zone_on_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);
glob.zone_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);
for (i = 0; i < glob.num_zones; i++)
	glob.zone_mat.setcell1d(i,((i+0.5)/glob.num_zones)*2.-1.);
glob.diff_thresh_mat = new JitterMatrix(1, "float32", 1, 1);
glob.diff_thresh_mat.setall(1. / glob.num_zones * 0.5 * 2.);

function bang()
{
	for (i = 0; i < glob.num_zones; i++)
	{
		v = glob.zone_on_mat.getcell(i);
		glob.zone_on_mat.setcell1d(i,Math.random()<(v==1?0.03:0.01)?1-v:v);
	}
}
