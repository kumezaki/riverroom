autowatch = 1;
inlets = 1;
outlets = 1;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var smallMatrix = new JitterMatrix(4,"char",240, 240);
var riverMovie = new JitterObject("jit.qt.movie",240,240);

var source_start = [0,0];
var source_end = [480,480];
var dim_start = [0,240];
var dim_end = [240,480];
var x_change = 5;

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
     
    riverMovie.matrixcalc(fullMatrix,smallMatrix);

    fullMatrix.usesrcdim = 1;
    fullMatrix.srcdimstart = source_start;
    fullMatrix.srcdimend = source_end;

    fullMatrix.usedstdim = 1;
    fullMatrix.dstdimstart = dim_start;
    fullMatrix.dstdimend = dim_end;
  
    fullMatrix.frommatrix(smallMatrix);
	
    if(dim_start[0] <= 660) 
    {dim_start[0] += x_change;
	} else {dim_start[0] = 0}
	if(dim_end[0] <= 900)	
    {dim_end[0] += x_change;
	} else{dim_end[0] = 240}


	
    outlet(0, "jit_matrix", fullMatrix.name);
}
