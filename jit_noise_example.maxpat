{
	"boxes" : [ 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "this is how it looks (WRONG)",
				"linecount" : 2,
				"numinlets" : 1,
				"patching_rect" : [ 460.0, 528.0, 132.0, 33.0 ],
				"id" : "obj-16",
				"numoutlets" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.matrix",
				"numinlets" : 1,
				"patching_rect" : [ 354.0, 528.0, 55.0, 22.0 ],
				"id" : "obj-6",
				"numoutlets" : 2,
				"style" : "",
				"outlettype" : [ "jit_matrix", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "this is what I want to do",
				"numinlets" : 1,
				"patching_rect" : [ 81.0, 435.0, 169.0, 20.0 ],
				"id" : "obj-5",
				"numoutlets" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "Section of matrix being copied",
				"numinlets" : 1,
				"patching_rect" : [ 373.0, 104.0, 175.0, 20.0 ],
				"id" : "obj-2",
				"numoutlets" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "clear",
				"numinlets" : 2,
				"patching_rect" : [ 379.0, 457.0, 37.0, 22.0 ],
				"id" : "obj-3",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"patching_rect" : [ 354.0, 160.0, 240.0, 240.0 ],
				"id" : "obj-19",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.submatrix @offset 2 2 @dim 4 4",
				"numinlets" : 1,
				"patching_rect" : [ 354.0, 126.0, 194.0, 22.0 ],
				"id" : "obj-18",
				"fontname" : "Arial",
				"numoutlets" : 2,
				"style" : "",
				"outlettype" : [ "jit_matrix", "" ],
				"fontsize" : 12.0
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"patching_rect" : [ 354.0, 566.0, 240.0, 240.0 ],
				"id" : "obj-15",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"patching_rect" : [ 64.0, 566.0, 240.0, 240.0 ],
				"id" : "obj-14",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.matrix 4 char 10 10 @usesrcdim 1 @srcdimstart 2 2 @srcdimend 5 5 @usedstdim 1 @dstdimstart 3 5 @dstdimend 6 8",
				"linecount" : 7,
				"numinlets" : 1,
				"patching_rect" : [ 64.0, 457.0, 134.0, 102.0 ],
				"id" : "obj-13",
				"fontname" : "Arial",
				"numoutlets" : 2,
				"style" : "",
				"outlettype" : [ "jit_matrix", "" ],
				"fontface" : 0,
				"fontsize" : 12.0
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "js js.submatrix",
				"numinlets" : 1,
				"patching_rect" : [ 354.0, 492.0, 87.0, 22.0 ],
				"id" : "obj-12",
				"fontname" : "Arial",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ],
				"fontface" : 0,
				"fontsize" : 12.0,
				"saved_object_attributes" : 				{
					"filename" : "js.submatrix",
					"parameter_enable" : 0
				}

			}

		}
, 		{
			"box" : 			{
				"maxclass" : "button",
				"numinlets" : 1,
				"patching_rect" : [ 40.0, 40.0, 34.0, 34.0 ],
				"id" : "obj-11",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"patching_rect" : [ 64.0, 160.0, 240.0, 240.0 ],
				"id" : "obj-9",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.noise 4 char 8 8",
				"numinlets" : 1,
				"patching_rect" : [ 40.0, 83.0, 108.0, 22.0 ],
				"id" : "obj-7",
				"fontname" : "Arial",
				"numoutlets" : 2,
				"style" : "",
				"outlettype" : [ "jit_matrix", "" ],
				"fontsize" : 12.0
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "attrui",
				"text_width" : 60.0,
				"attr" : "dim",
				"numinlets" : 1,
				"patching_rect" : [ 460.0, 492.0, 174.0, 22.0 ],
				"id" : "obj-8",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ]
			}

		}
 ],
	"lines" : [ 		{
			"patchline" : 			{
				"source" : [ "obj-8", 0 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-9", 0 ],
				"hidden" : 0,
				"midpoints" : [ 49.5, 147.0, 73.5, 147.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-18", 0 ],
				"hidden" : 0,
				"midpoints" : [ 49.5, 120.0, 363.5, 120.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-13", 0 ],
				"hidden" : 0,
				"midpoints" : [ 49.5, 444.0, 73.5, 444.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-12", 0 ],
				"hidden" : 0,
				"midpoints" : [ 49.5, 147.0, 332.0, 147.0, 332.0, 477.0, 363.5, 477.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-6", 0 ],
				"destination" : [ "obj-15", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-3", 0 ],
				"destination" : [ "obj-12", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-18", 0 ],
				"destination" : [ "obj-19", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-13", 0 ],
				"destination" : [ "obj-14", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-12", 0 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-11", 0 ],
				"destination" : [ "obj-7", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
 ],
	"appversion" : 	{
		"major" : 7,
		"minor" : 2,
		"revision" : 1,
		"architecture" : "x86",
		"modernui" : 1
	}

}
