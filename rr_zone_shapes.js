autowatch = 1;

outlets = 2;

var num_zones = 1;
var range = 1.;
var rel_width = 1.;

var mat_pos;
var mat_scale;
var array_on;

function loadbang()
{
	mat_pos = new JitterMatrix(3,"float32",num_zones,1);
	mat_scale = new JitterMatrix(3,"float32",num_zones,1);
	array_on = new Array;
	for (i = 0; i < num_zones; i++)
	{
		array_on[i] = 0;
	}
}

function bang()
{
	var width = rel_width / num_zones * range; // 99% of full range
	
	for (i = 0; i < num_zones; i++)
	{
		mat_scale.setcell1d(i,width*array_on[i],1.,1.);
		outlet(1,"jit_matrix",mat_scale.name);
	
		mat_pos.setcell1d(i,((i+0.5)/num_zones)*(2.*range)-range,0.,0.);
		outlet(0,"jit_matrix",mat_pos.name);
	}
}

function set_range(v)
{
	range = v;
}

function set_num_zones(v)
{
	num_zones = v;
}

function set_rel_width(v)
{
	rel_width = v;
}

function set_on(i,v)
{
	array_on[i] = v;
}
