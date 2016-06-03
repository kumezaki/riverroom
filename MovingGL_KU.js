autowatch = 1;

var context_name = "AnthonyRocks";

var mywindow = new JitterObject("jit.window",context_name);

var myrender = new JitterObject("jit.gl.render",context_name);

var myvidplane = new JitterObject("jit.gl.videoplane",context_name);
myvidplane.scale = [0.25,0.25,1.];
myvidplane.position = [0.,0.,0.];

var mymovie = new JitterObject("jit.movie");
mymovie.read("sumidagawa_00000.mp4");
mymovie.vol = 0.;

var mymoviemat = new JitterMatrix(4,"char",480,480);

function loadbang()
{
}
	
function bang()
{
	// update the movie matrix
	mymovie.matrixcalc(mymoviemat,mymoviemat);

	// set the updated matrix to the vid plane
	// the jit_matrix function is what binds a matrix to the GL vid plane
	myvidplane.jit_matrix(mymoviemat.name);

	myrender.erase(); // erase the drawing context
	myrender.drawclients(); // draw the client objects
	myrender.swap(); // swap in the new drawing
}
