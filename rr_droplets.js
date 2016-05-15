autowatch = 1;

outlets = 3;

var orientation = 0;

var num_droplets = 0;

var pos_mat;
var scaled_pos_mat;
var y_range = 1.;	/* used only for x (0) orientation */

var speed_mat;
var speed_min = 0.;
var speed_range = 0.;

var scale_mat;
var scale = 1.;
var num_displays = 1;

var off = -1;

var update_expr = new JitterObject("jit.expr");

var scale_expr = new JitterObject("jit.expr");

function init_pos_x()
{
	for (i = 0; i < num_droplets; i++)
		pos_mat.setcell1d(i,-1,Math.random()*(2.*y_range)-y_range,0.);
}

function init_pos_z()
{
	for (i = 0; i < num_droplets; i++)
		pos_mat.setcell1d(i,Math.random()*2.-1.,0.,-1.);
}

function init_pos()
{
	pos_mat = new JitterMatrix(3, "float32", num_droplets, 1);
	scaled_pos_mat = new JitterMatrix(3, "float32", num_droplets, 1);
	
	switch (orientation)
	{
		case 0: // x
			init_pos_x();
			break;
		case 2: // z
			init_pos_z();
			break;
		default:
			post("WARNING: unknown orientation\n");
	}
}

function init_speed()
{
	speed_mat = new JitterMatrix(1, "float32", num_droplets, 1);

	for (i = 0; i < num_droplets; i++)
		speed_mat.setcell1d(i,Math.random()*speed_range+speed_min);
}

function init_scale()
{
	scale_mat = new JitterMatrix(3, "float32", num_droplets, 1);

	scale_mat.fillplane(0,scale/num_displays);
	scale_mat.fillplane(1,scale);
	scale_mat.fillplane(2,scale);

	outlet(2,"jit_matrix",scale_mat.name);
}

function init()
{
	init_pos();
	init_speed();
	init_scale();
}

function get_update_string()
{
	return "(in[0].p["
	+ orientation
	+ "]<1.)*(in[0].p["
	+ orientation
	+ "]+in[1].p["
	+ orientation
	+ "])-(in[0]>=1.)*"
	+ (off == 1 ? 1000. : 1.);
}

function set_update_expr_x()
{
	update_expr.expr = [get_update_string(),"in[0].p[1]","in[0].p[2]"];
}

function set_update_expr_z()
{
	update_expr.expr = ["in[0].p[0]","in[0].p[1]",get_update_string()];
}

function set_scale_expr_x()
{
	scale_expr.expr = ["in[0].p[0]*2.","in[0].p[1]","in[0].p[2]"];
}

function set_scale_expr_z()
{
	scale_expr.expr = ["in[0].p[0]","in[0].p[1]","in[0].p[2]*3.5-1.75"];
}

function set_exprs()
{
	switch (orientation)
	{
		case 0: // x
			set_update_expr_x();
			set_scale_expr_x();
			break;
		case 2: // z
			set_update_expr_z();
			set_scale_expr_z();
			break;
		default:
			post("WARNING: unknown orientation\n");
	}
}

function set_orientation(v)
{
	orientation = v;
	
	set_exprs();
	
	init();
}

function set_y_range(v)
{
	y_range = v;
}

function set_num_droplets(v)
{
	num_droplets = v;
}

function set_off(v)
{
	if (v != off)
	{
		off = v;
		set_exprs();
		init_pos();
	}
}

function set_scale(v)
{
	scale = v;
	init_scale();
}

function set_num_displays(v)
{
	num_displays = v;
}

function set_speed(min,range)
{
	speed_min = min;
	speed_range = range;
	init_speed();
}

function bang()
{
	outlet(0,"jit_matrix",pos_mat.name);

	scale_expr.matrixcalc(pos_mat,scaled_pos_mat);
	outlet(1,"jit_matrix",scaled_pos_mat.name);

	update_expr.matrixcalc([pos_mat,speed_mat],pos_mat);
}
