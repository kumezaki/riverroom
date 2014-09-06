autowatch = 1;

var w = 80;
var h = 60;
var zoom_max = 2.0;
var zoom_w = zoom_max * w;
var zoom_h = zoom_max * h;

var w_window = 1024;
var h_window = 500;

var w_matrix = w_window + (2 * zoom_w);
var h_matrix = h_window + (2 * zoom_h);

function bang()
{
	/* matrix_dim and window_dim must be sent first */
	messnamed("matrix_dim",w_matrix,h_matrix);
	messnamed("window_dim",w_window,h_window);

	messnamed("zoom_clip_dim",zoom_w,zoom_h);
	messnamed("zoom_clip_dim_half",zoom_w/2,zoom_h/2);

	messnamed("clip_dim",w,h);
	messnamed("clip_dim_half",w/2,h/2);
}
