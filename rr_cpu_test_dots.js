autowatch = 1;

win_dim_x = 320;
win_dim_y = 240;

num_dots = 10;

n = 20;

vel_x_max = 5.0;

g = new Global("dots");
g.x = new Array();
g.y = new Array();
g.w = new Array();
g.h = new Array();
g.vel_x = new Array();

function loadbang()
{
	for (i = 0; i < num_dots; i++)
	{
		g.x[i] = 0;
		g.y[i] = Math.random()*win_dim_y;
		g.w[i] = n;
		g.h[i] = n;
		g.vel_x[i] = Math.random()*vel_x_max;
	}
}

function bang()
{
	for (i = 0; i < num_dots; i++)
	{
//		messnamed("rr_draw_dot",g.x[i]-(n>>2),g.y[i]-(n>>1),n,n);
		
		g.x[i] = g.x[i]+g.vel_x[i];
		if (g.x[i]+(n>>1) > win_dim_x)
		{
			g.x[i] = g.x[i] % win_dim_x;
			g.y[i] = Math.random()*(win_dim_y-n)+(n>>1);
	
			g.vel_x[i] = Math.random()*vel_x_max;
		}
	}
}

function set_num_dots(n)
{
	num_dots = n;
	loadbang();
}
