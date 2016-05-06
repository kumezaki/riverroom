autowatch = 1;
inlets = 1;
outlets = 1;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var smallMatrix = new JitterMatrix(4,"char",240, 240);
var riverMovie = new JitterObject("jit.qt.movie",240,240);

var source_start = [0,0];
var source_end = [480,480];
var dim_start = [0,(Math.random()*900)]; //sets a random Y starting position for the top left corner of video
var dim_end = [240,dim_start[1]+240]; 
var x_change = (Math.random()*6); //sets a random scrolling speed of video 

//movie attribue values 
riverMovie.vol = 0;


function loadbang()
{
	riverMovie.read("sumidagawa_00000.mov");
}

function read(filename)
{
		if(arguments.length==0) { 
		riverMovie.read();
	}
	else {
		riverMovie.read(filename);
	}
}

function bang()
{
    fullMatrix.clear();
     
    riverMovie.matrixcalc(smallMatrix,smallMatrix);

    fullMatrix.usesrcdim = 1;
    fullMatrix.srcdimstart = source_start;
    fullMatrix.srcdimend = source_end;

    fullMatrix.usedstdim = 1;
    fullMatrix.dstdimstart = dim_start;
    fullMatrix.dstdimend = dim_end;
  
    fullMatrix.frommatrix(smallMatrix);
	
    if(dim_start[0] <= fullMatrix.dim[0]-240) 
    {dim_start[0] += x_change;
	} else {dim_start[0] = 0}
	if(dim_end[0] <= fullMatrix.dim[0])	
    {dim_end[0] += x_change;
	} else{dim_end[0] = 240}


	
    outlet(0, "jit_matrix", fullMatrix.name);
}
