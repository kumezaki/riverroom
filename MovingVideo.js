autowatch = 1;
inlets = 1;
outlets = 1;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var riverMovie = new JitterObject("jit.qt.movie",240,240);

var source_start = [0, 0]; //There is an error saying "Matrix Array Argument Not Valid Matrix or Matrixname", but I am not sure why.
var source_end = [480, 480];
var dim_start = [0, 240];
var dim_end = [240, 480];

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
    
    riverMovie.matrixcalc(riverMovie,fullMatrix); //I suspect that this is not doing what I am imagining it might. 

    fullMatrix.usesrcdim = 1;
    fullMatrix.srcdimstart = source_start;
    fullMatrix.srcdimend = source_end;

    fullMatrix.clear(); //I'm not sure if this is the way to have it clear the matrix with each incoming bang.

    fullMatrix.usedstdim = 1;
    fullMatrix.dstdimstart = dim_start;
    fullMatrix.dstdimend = dim_end;

	
    outlet(0, "jit_matrix", fullMatrix.name);
}
