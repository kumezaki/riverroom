autowatch = 1;

var gMatrix_Out = undefined;

var gThresh = 0.5;

function jit_matrix(matrix_name)
{
	mat_in = new JitterMatrix(matrix_name);
		
	if ((gMatrix_Out === undefined) || (mat_in.dim[0] != gMatrix_Out.dim[0]))
	{
		gMatrix_Out = new JitterMatrix(1,"float32",mat_in.dim[0],1);

		post("CREATING OUT MATRIX",gMatrix_Out.name,gMatrix_Out.dim[0],gMatrix_Out.dim[1],"\n");
	}

	for (i = 0; i < mat_in.dim[0]; i++)
	{
		var t = 0;
		for (j = 0; j < mat_in.dim[1]; j++)
			t += parseInt(mat_in.getcell(i,j));
		t /= mat_in.dim[1];
//		gMatrix_Out.setcell1d(i,t<gThresh?0:1);
		gMatrix_Out.setcell1d(i,t<gThresh?0:t);
	}

	outlet(0,"jit_matrix",gMatrix_Out.name);
}

function set_thresh(v)
{
	gThresh = v;
}
