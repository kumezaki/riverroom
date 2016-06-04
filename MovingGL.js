autowatch = 1;
inlets = 1;

var context_name = "MovingVideos";

var mywindow = new JitterObject("jit.window",context_name);
mywindow.depthbuffer = 0;
mywindow.idelmouse = 1;

var myrender = new JitterObject("jit.gl.render",context_name);
myrender.ortho = 2;
myrender.erase_color = [0,0,0,1];

var mymoviemat = new JitterMatrix(4,"char",480,480);
 
var numMovies = 3; // AC: Set to the total number of videos
var txtFile = "MovieFileNames.txt";
var file = new File(txtFile); 

var riverMovie = new Array;
var movieplane = new Array;

var initY = new Array;
var changeX = new Array;
var videoX = new Array;

function init_float_array_random()
{
	for (i = 0; i < numMovies; i++)
	{
	   initY[i] = (Math.random()*(-1))+Math.random();
       post("Y pos" + "" + initY[i] + "\n");
	   changeX[i] = Math.random()*0.25; 
	   videoX[i] = -1.5; 
	}
}

function loadbang()
{
	init_float_array_random();

	var moviename = new Array;

	file.open(txtFile);
       
	for (i = 0; i < numMovies; i++){
		moviename[i] = file.readline(1024);
		post("MovieName" + " " + moviename[i] + "\n");
		riverMovie[i] = new JitterObject("jit.movie");
		riverMovie[i].read(moviename[i]);
		riverMovie[i].vol = 0.;
		riverMovie[i].engine = "avf";
		movieplane[i] = new JitterObject("jit.gl.videoplane",context_name);
		movieplane[i].scale = [0.25,0.25,1.];
        movieplane[i].position = [videoX[i],initY[i],0.];
  	}
	
	file.close();
}

function bang()
{
  for (i = 0; i < numMovies; i++)
  {
    riverMovie[i].matrixcalc(mymoviemat,mymoviemat);
    movieplane[i].jit_matrix(mymoviemat.name);
	}
	
//	movieplane[i].position = [changeX[i]
    myrender.erase(); // erase the drawing context
	myrender.drawclients(); // draw the client objects
	myrender.swap(); // swap in the new drawing
}

function fullscreen(v)
{
	mywindow.fullscreen = v;
}