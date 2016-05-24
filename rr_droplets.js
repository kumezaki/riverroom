autowatch = 1;

outlets = 3;

var glob = new Global("my_glob");

var orientation = 0;

var num_droplets = 0;
var num_displays = 1;

var pos_mat;
var scaled_pos_mat;
var spread = 1.;	/* currently used only for x (0) orientation */

var speed_mat;
var speed_min = 0.;
var speed_range = 0.;

var speed_gate_mat;

var scale_mat;
var scale = 0.;

var off = -1;

var update_expr = new JitterObject("jit.expr");

var scale_expr = new JitterObject("jit.expr");

var speed_gate_op = new JitterObject("jit.op");
speed_gate_op.op = "*";

function init_pos_x()
{
	for (i = 0; i < num_droplets; i++)
		pos_mat.setcell1d(i,-1,Math.random()*(2.*spread)-spread,0.);
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
	speed_gate_mat = new JitterMatrix(1, "float32", num_droplets, 1);

	for (i = 0; i < num_droplets; i++)
	{
		speed_mat.setcell1d(i,Math.random()*speed_range+speed_min);
		speed_gate_mat.setcell1d(i,1.);
	}
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
	set_exprs();
	
	set_params();
	
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

function set_params()
{
	switch (orientation)
	{
		case 0: // x
			speed_min = 0.001;
			speed_range = 0.002;
			scale = 0.2;
			spread = 0.4;
			break;
		case 2: // z
			speed_min = 0.01;
			speed_range = 0.01;
			scale = 0.15;
			spread = 1.0;
			break;
		default:
			post("WARNING: unknown orientation\n");
	}
}

function set_orientation(v)
{
	orientation = v;
	
	init();
}

function set_num_droplets(v)
{
	num_droplets = v;
}

function set_num_displays(v)
{
	num_displays = v;
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

function update_gate_matrix()
{
	var droplet_pos_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);

	var temp_mat = new JitterMatrix(1, "float32", glob.num_zones, 1);

	var expr_obj = new JitterObject("jit.expr");

	for (i = 0; i < num_droplets; i++)
	{
		droplet_pos_mat.setall(pos_mat.getcell(i)[orientation]);

//		expr_obj.expr = "in[0]&&absdiff(in[1],in[2])<in[3]";
		expr_obj.expr = "in[0]*absdiff(in[1],in[2])<in[3]";
		expr_obj.matrixcalc([glob.zone_on_mat,droplet_pos_mat,glob.zone_mat,glob.diff_thresh_mat],temp_mat);

		gate = 1.;
		for (j = 0; j < glob.num_zones; j++)
			if (temp_mat.getcell(j) != 0.) { gate = 0.; break; }
		speed_gate_mat.setcell1d(i,gate);
	}
}

function bang()
{
	/* output positions */
	outlet(0,"jit_matrix",pos_mat.name);

	/* output scaled positions */
	scale_expr.matrixcalc(pos_mat,scaled_pos_mat);
	outlet(1,"jit_matrix",scaled_pos_mat.name);

	/* update gate matrix */
	update_gate_matrix();

	/* create gated speed matrix for updating positions */
	var delta_pos_mat = new JitterMatrix(1, "float32", num_droplets, 1);
	speed_gate_op.matrixcalc([speed_mat,speed_gate_mat],delta_pos_mat);
	
	/* update positions */
	update_expr.matrixcalc([pos_mat,delta_pos_mat],pos_mat);
}
