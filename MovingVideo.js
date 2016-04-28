autowatch = 1;
inlets = 1;
outlets = 1;

var fullMatrix = new JitterMatrix(4,"char", 900, 900);
var riverMovie = new JitterObject("jit.qt.movie",240,240);

//matrix attribute values
fullMatrix.usesrcdim = 1;
fullMatrix.srcdimstart = [0,0];
fullMatrix.srcdimend = [240,240];
fullMatrix.usedstdim = 1;
fullMatrix.dstdimstart = [240,480];
fullMatrix.dstdimend = [0,240];

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
    fullMatrix.clear;
    riverMovie.matrixcalc(riverMovie,fullMatrix);
	outlet(0, "jit_matrix", fullMatrix.name);
}