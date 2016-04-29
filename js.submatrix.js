var src_start = [2, 2];
var dim_start = [3, 5];
var copy_size = [4, 4];

var temp = new JitterMatrix(4, "char", 10, 10);

function jit_matrix( x )
{
	temp.usesrcdim = true;
	temp.srcdimstart = src_start;
	temp.srcdimend = [src_start[0] + copy_size[0]-1, src_start[1] + copy_size[1]-1];
	
	temp.clear();
	
    temp.usedstdim = true;
	temp.dstdimstart = dim_start;
	temp.dstdimend = [dim_start[0] + copy_size[0]-1, dim_start[1] + copy_size[1]-1];
	
	temp.frommatrix( x );
	
	temp.usessrcdim = false;
	temp.usesdstdim = false;
	
	outlet( 0, "jit_matrix", temp.name );
}