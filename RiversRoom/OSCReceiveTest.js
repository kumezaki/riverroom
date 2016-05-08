autowatch = 1;

var gMatrix_In;
var gMatrix_Out;
var gMatrixName = "";

var gThresh = 0.5;

function jit_matrix(matrix_name)
{
	if (gMatrixName == "")
	{
		gMatrix_In = new JitterMatrix(matrix_name);
		gMatrixName = matrix_name;
		
		gMatrix_Out = new JitterMatrix(1,"float32",gMatrix_In.dim[0],1);
	}

	for (i = 0; i < gMatrix_In.dim[0]; i++)
	{
		var t = 0;
		for (j = 0; j < gMatrix_In.dim[1]; j++)
			t += parseInt(gMatrix_In.getcell(i,j));
		t /= gMatrix_In.dim[1];
		gMatrix_Out.setcell1d(i,t<gThresh?0:1);
	}

	outlet(0,"jit_matrix",gMatrix_Out.name);
}

function set_thresh(v)
{
	gThresh = v;
}
