autowatch = 1;
inlets = 1;
outlets = 1;


var cornerX = 480;
var cornerY = 480;
var videoH = 240;
var videoW = 240;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var smallMatrix = new JitterMatrix(4,"char",videoH, videoW);
 
var numMovies = 3; // AC: Set to the total number of .mp4s
var txtFile = "MovieFileNames.txt";
var file = new File(txtFile); 

var riverMovie = new Array;

var source_end = [cornerX,cornerY];
var initY = new Array;
var changeX = new Array;
var videoX = new Array;

function init_float_array_random()
{
	for (i = 0; i < numMovies; i++)
	{
	   initY[i] = Math.random()*(fullMatrix.dim[0]-240); 
	
	   changeX[i] = (Math.random()*5)+1; 
	
	   videoX[i] = 0; 
	}
}

function loadbang()
{	
	var moviename = new Array;
	file.open(txtFile);
       
	for (i = 0; i < numMovies; i++){
		moviename[i] = file.readline(1024);
		post("MovieName" + " " + moviename[i] + "\n");
		riverMovie[i] = new JitterObject("jit.movie");
		riverMovie[i].read(moviename[i]);
		riverMovie[i].vol = 0.;
		riverMovie[i].engine = "avf";
  	}
	
	file.close();
	init_float_array_random();
}

function bang()
{
    fullMatrix.clear();
    fullMatrix.usesrcdim = 1;
    fullMatrix.usedstdim = 1;
    fullMatrix.srcdimstart = [0,0];
    fullMatrix.srcdimend = source_end;

	var dim_start = new Array;
	var dim_end = new Array;
	 
  for (i = 0; i < numMovies; i++)
  {
    riverMovie[i].matrixcalc(smallMatrix,smallMatrix);

	dim_start[0] = videoX[i]; //x
	dim_start[1] = initY[i]; //y
	dim_end[0] = videoX[i]+videoW; //x
	dim_end[1] = initY[i]+videoH; //y
    fullMatrix.dstdimstart = dim_start;
    fullMatrix.dstdimend = dim_end;
  
    fullMatrix.frommatrix(smallMatrix);

	if (dim_start[0] <= fullMatrix.dim[0]-240)
	{
		videoX[i] += changeX[i];
	}
	else
	{
		videoX[i] = 0;
	}

  }

	 outlet(0, "jit_matrix", fullMatrix.name);
}
