autowatch = 1;

outlets = 2;

var glob = new Global("my_glob");

var num_zones = 1;
var range = 1.;
var rel_width = 1.;
var enable = 0;

var mat_pos;
var mat_scale;

function loadbang()
{
	mat_pos = new JitterMatrix(3,"float32",glob.num_zones,1);
	mat_scale = new JitterMatrix(3,"float32",glob.num_zones,1);
}

function bang()
{
	var width = rel_width / glob.num_zones * range;
	
	for (i = 0; i < glob.num_zones; i++)
	{
		mat_scale.setcell1d(i,width*glob.zone_on_mat.getcell(i)*enable,1.,1.);
		outlet(1,"jit_matrix",mat_scale.name);
	
		mat_pos.setcell1d(i,((i+0.5)/glob.num_zones)*(2.*range)-range,0.,0.);
		outlet(0,"jit_matrix",mat_pos.name);
	}
}

function set_range(v)
{
	range = v;
}

function set_rel_width(v)
{
	rel_width = v;
}

function set_enable(v)
{
	enable = v;
}
