autowatch = 1;
inlets = 1;
outlets = 1;


var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var smallMatrix = new JitterMatrix(4,"char",240, 240);

var numMovies = 3; // AC: Set to the total number of .mp4s 

//var riverMovie = new JitterObject("jit.qt.movie");
var riverMovie = new Array;
//movie attribue values 
//riverMovie.vol = 0;

var source_start = [0,0];
var source_end = [480,480];
var dim_start = [0,(Math.random()*(fullMatrix.dim[0]-240))]; //sets a random Y starting position for the top left corner of video
var dim_end = [240,dim_start[1]+240]; 
var x_change = ((Math.random()*5)+1); //sets a random scrolling speed of video 

var initY = new Array;
var changeX = new Array;
var videoX = new Array;

function init_float_array_random()
{
	for (i = 0; i < numMovies; i++)
	{
	   initY[i] = Math.random()*(fullMatrix.dim[0]-240); //selects an initial Y value for each video
	
	   changeX[i] = (Math.random()*5)+1; //selects an initial scroll speed for each video
	
	   videoX[i] = 0; //sets each video's inital X value to 0
	}
}

function loadbang()
{
  for (i = 0; i < numMovies; i++)
  {
	riverMovie[i] = new JitterObject("jit.movie");
	riverMovie[i].read("sumidagawa_00001.mp4");
	riverMovie[i].vol = 0.;
	// by default in Jitter movies loop
  }

	init_float_array_random();
}

function read(filename)
{
		if(arguments.length==0) { 
		riverMovie[0].read();
	}
	else {
		riverMovie[0].read(filename);
	}
}

function bang()
{
    fullMatrix.clear();
    fullMatrix.usesrcdim = 1;
    fullMatrix.usedstdim = 1;
    fullMatrix.srcdimstart = source_start;
    fullMatrix.srcdimend = source_end;
     
  for (i = 0; i < numMovies; i++)
  {
    riverMovie[i].matrixcalc(smallMatrix,smallMatrix);

	dim_start[0] = videoX[i]; //x
	dim_start[1] = initY[i]; //y
	dim_end[0] = videoX[i]+240; //x
	dim_end[1] = initY[i]+240; //y
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
		
//    if(dim_start[0] <= fullMatrix.dim[0]-240) 
//    {dim_start[0] += x_change;
//	} else {dim_start[0] = 0}
//	if(dim_end[0] <= fullMatrix.dim[0])	
//    {dim_end[0] += x_change;
//	} else{dim_end[0] = 240}
  }
	
    outlet(0, "jit_matrix", fullMatrix.name);
}
