autowatch = 1;
inlets = 1;

var movingvideos = new JitterObject("jit.window","movingvideos");
movingvideos.depthbuffer = 0;
movingvideos.idelmouse = 1;

var myrender = new JitterObject("jit.gl.render","movingvideos");
myrender.ortho = 2;
myrender.erase_color = [0,0,0,1];

var videoH = 240;
var videoW = 240;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var smallMatrix = new JitterMatrix(4,"char",videoH, videoW);

 
var numMovies = 3; // AC: Set to the total number of videos
var txtFile = "MovieFileNames.txt";
var file = new File(txtFile); 

var riverMovie = new Array;

var initY = new Array;
var changeX = new Array;
var videoX = new Array;

//var mylistener = new JitterListener(movingvideos.getregisteredname()); //don't fully understand this

function init_float_array_random()
{
	for (i = 0; i < numMovies; i++)
	{
	   initY[i] = Math.random()*(fullMatrix.dim[0]-240); 
	
	   changeX[i] = (Math.random()*5)+1; 
	
	   videoX[i] = 0; 
	}
}

var movieplane = new Array;

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
		movieplane[i] = new JitterObject("jit.gl.videoplane","movingvideos");
		movieplane[i].drawto = "movingvideos";
		movieplane[i].scale = [0.25,0.25,1.];
        movieplane[i].position = [0.,initY[i],0.]; //I know this isn't quite right
  	}
	
	file.close();
}

function bang()
{
  for (i = 0; i < numMovies; i++)
  {
    riverMovie[i].matrixcalc(smallMatrix,smallMatrix);
    movieplane[i].matrixcalc(smallMatrix,smallMatrix);
  
    fullMatrix.frommatrix(smallMatrix);
	}
}

function fullscreen(v)
{
	movingvideos.fullscreen = v;
}

function thecallback()
{
}

function thecallback()
{
}
