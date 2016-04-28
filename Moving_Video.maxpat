{
	"boxes" : [ 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "Click to move video across window",
				"numinlets" : 1,
				"numoutlets" : 0,
				"patching_rect" : [ 327.5, 19.0, 197.0, 20.0 ],
				"id" : "obj-25",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "Click to load other .mov file",
				"numinlets" : 1,
				"numoutlets" : 0,
				"patching_rect" : [ 108.5, 254.0, 155.0, 20.0 ],
				"id" : "obj-22",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "read",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 71.5, 252.0, 35.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-17",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "Click to  begin video",
				"numinlets" : 1,
				"numoutlets" : 0,
				"patching_rect" : [ 66.5, 92.0, 118.0, 20.0 ],
				"id" : "obj-13",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "t b clear",
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 42.5, 160.0, 53.0, 22.0 ],
				"outlettype" : [ "bang", "clear" ],
				"id" : "obj-14",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "loadbang",
				"numinlets" : 1,
				"numoutlets" : 1,
				"patching_rect" : [ 59.0, 196.0, 60.0, 22.0 ],
				"outlettype" : [ "bang" ],
				"id" : "obj-7",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "240",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 523.0, 143.0, 31.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-8",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "number",
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 466.5, 143.0, 50.0, 22.0 ],
				"outlettype" : [ "", "bang" ],
				"id" : "obj-4",
				"parameter_enable" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "480",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 357.5, 147.0, 31.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-33",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "button",
				"numinlets" : 1,
				"numoutlets" : 1,
				"patching_rect" : [ 301.5, 17.0, 24.0, 24.0 ],
				"outlettype" : [ "bang" ],
				"id" : "obj-29",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "240, 900 5000",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 301.5, 66.0, 87.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-27",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "0, 660 5000",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 466.5, 66.0, 74.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-26",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "line",
				"numinlets" : 3,
				"numoutlets" : 2,
				"patching_rect" : [ 466.5, 99.0, 40.0, 22.0 ],
				"outlettype" : [ "", "" ],
				"id" : "obj-24",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "line",
				"numinlets" : 3,
				"numoutlets" : 2,
				"patching_rect" : [ 301.5, 99.0, 40.0, 22.0 ],
				"outlettype" : [ "", "" ],
				"id" : "obj-21",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "pack i i",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 466.5, 189.0, 48.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-20",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "prepend dstdimend",
				"numinlets" : 1,
				"numoutlets" : 1,
				"patching_rect" : [ 466.5, 222.0, 113.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-19",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "number",
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 301.5, 147.0, 50.0, 22.0 ],
				"outlettype" : [ "", "bang" ],
				"id" : "obj-16",
				"parameter_enable" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "pack i i",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 301.5, 196.0, 48.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-12",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "prepend dstdimstart",
				"numinlets" : 1,
				"numoutlets" : 1,
				"patching_rect" : [ 301.5, 222.0, 117.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-10",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 42.5, 395.0, 490.0, 341.0 ],
				"outlettype" : [ "", "" ],
				"id" : "obj-9"
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.matrix 4 char 900 900 @usesrcdim 1 @srcdimstart 0 0 @srcdimend 240 240 @usedstdim 1 @dstdimstart 240 480 @dstdimend 0 240",
				"linecount" : 2,
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 42.5, 335.0, 635.0, 35.0 ],
				"outlettype" : [ "jit_matrix", "" ],
				"id" : "obj-6",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "read sumidagawa_00000.mov",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 59.0, 222.0, 171.0, 22.0 ],
				"outlettype" : [ "" ],
				"id" : "obj-5",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "jit.movie 240 240 @vol 0",
				"numinlets" : 1,
				"numoutlets" : 2,
				"patching_rect" : [ 42.5, 289.0, 142.0, 22.0 ],
				"outlettype" : [ "jit_matrix", "" ],
				"id" : "obj-3",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "qmetro 33.33",
				"numinlets" : 2,
				"numoutlets" : 1,
				"patching_rect" : [ 42.5, 129.0, 81.0, 22.0 ],
				"outlettype" : [ "bang" ],
				"id" : "obj-2",
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "toggle",
				"numinlets" : 1,
				"numoutlets" : 1,
				"patching_rect" : [ 42.5, 92.0, 24.0, 24.0 ],
				"outlettype" : [ "int" ],
				"id" : "obj-1",
				"parameter_enable" : 0,
				"style" : ""
			}

		}
 ],
	"lines" : [ 		{
			"patchline" : 			{
				"source" : [ "obj-17", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-8", 0 ],
				"destination" : [ "obj-20", 1 ],
				"hidden" : 0,
				"midpoints" : [ 532.5, 174.5, 505.0, 174.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-5", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-6", 0 ],
				"destination" : [ "obj-9", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-5", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-4", 0 ],
				"destination" : [ "obj-20", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-33", 0 ],
				"destination" : [ "obj-12", 1 ],
				"hidden" : 0,
				"midpoints" : [ 367.0, 182.0, 340.0, 182.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-3", 0 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-29", 0 ],
				"destination" : [ "obj-27", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-29", 0 ],
				"destination" : [ "obj-26", 0 ],
				"hidden" : 0,
				"midpoints" : [ 311.0, 49.0, 476.0, 49.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-27", 0 ],
				"destination" : [ "obj-21", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-26", 0 ],
				"destination" : [ "obj-24", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-24", 0 ],
				"destination" : [ "obj-8", 0 ],
				"hidden" : 0,
				"midpoints" : [ 476.0, 131.5, 532.5, 131.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-24", 0 ],
				"destination" : [ "obj-4", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-21", 0 ],
				"destination" : [ "obj-33", 0 ],
				"hidden" : 0,
				"midpoints" : [ 311.0, 131.5, 367.0, 131.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-21", 0 ],
				"destination" : [ "obj-16", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-20", 0 ],
				"destination" : [ "obj-19", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-2", 0 ],
				"destination" : [ "obj-14", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-19", 0 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"midpoints" : [ 476.0, 317.5, 52.0, 317.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-16", 0 ],
				"destination" : [ "obj-12", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-14", 1 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"midpoints" : [ 86.0, 189.0, 237.5, 189.0, 237.5, 319.0, 52.0, 319.0 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-14", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-12", 0 ],
				"destination" : [ "obj-10", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-10", 0 ],
				"destination" : [ "obj-6", 0 ],
				"hidden" : 0,
				"midpoints" : [ 311.0, 317.5, 52.0, 317.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-1", 0 ],
				"destination" : [ "obj-2", 0 ],
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
