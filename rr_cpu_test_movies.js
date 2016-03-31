autowatch = 1;

win_dim_x = 320;
win_dim_y = 240;

grid_dim_x = 1;
grid_dim_y = 1;

num_droplets = 1;
num_movies = 1;

droplets_per_bang = 1;
num_droplet_groups = 1;
droplet_group_pos = 0;

grid = true;

g = new Global("dots");

function bang()
{
	outlet(0,"bang");
	for (pos = 0; pos < num_droplets; pos++)
		send_movie_dst_dims(pos);
	return;
	
	if (droplet_group_pos == 0) outlet(0,"bang");
	
	for (pos = 0; pos < droplets_per_bang; pos++)
		send_movie_dst_dims(pos + (droplet_group_pos * droplets_per_bang));

	droplet_group_pos = ++droplet_group_pos % num_droplet_groups;
}
	
function send_movie_dst_dims(pos)
{
	if (grid)
	{
		x_pos = pos % grid_dim_x;
		y_pos = parseInt(pos / grid_dim_x);
		
		size_x = win_dim_x / grid_dim_x;
		size_y = win_dim_y / grid_dim_y;
		
		start_x = size_x * x_pos;
		start_y = size_y * y_pos;
		end_x = start_x + (size_x - 1);
		end_y = start_y + (size_y - 1);
	}
	else	
	{
		start_x = g.x[pos];
		start_y = g.y[pos];
		end_x = g.x[pos] + g.w[pos] - 1;
		end_y = g.y[pos] + g.h[pos] - 1;
	}
	
	msg_name = (pos % num_movies) +"_movie_msg";
	messnamed(msg_name,start_x,start_y,end_x,end_y);
	post(msg_name,start_x,start_y,end_x,end_y,"\n");
}

function update_num_droplet_groups()
{
	num_droplet_groups = parseInt(num_droplets/droplets_per_bang)+1;
	messnamed("rr_num_droplet_groups_msg",num_droplet_groups);
}

function set_win_dim(x,y) { win_dim_x = x; win_dim_y = y; }

function set_grid_dim(x,y) { grid_dim_x = x; grid_dim_y = y; }

function set_num_droplets(n) { num_droplets = n; update_num_droplet_groups(); }

function set_num_movies(n) { num_movies = n; }

function set_droplets_per_bang(n) { droplets_per_bang = n; update_num_droplet_groups(); }

function set_mode(n) { grid = (n == 0); }
