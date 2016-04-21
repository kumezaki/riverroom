autowatch = 1;

var rr_matrix = new JitterMatrix(4, "char", 320, 180);

var rr_movie = new JitterObject("jit.movie");
var rr_gl_texture = new JitterObject("jit.gl.texture","rr");

function reset()
{
	rr_movie.engine = "avf";
	rr_movie.vol = 0.;
	rr_movie.unique = 1;
	rr_movie.autostart = 0;
	rr_movie.read("sumidagawa_00001.mp4");
	
	rr_gl_texture.name = "rr_tex";
	rr_gl_texture.apply = "replace";
}

function start()
{
	rr_movie.start();
}
	
function bang()
{
	rr_movie.matrixcalc(rr_matrix,rr_matrix);
	
	rr_gl_texture.matrixcalc(rr_matrix,rr_matrix);

	outlet(0,"jit_matrix",rr_matrix.name);
}
