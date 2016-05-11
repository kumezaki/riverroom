{
	"boxes" : [ 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"patching_rect" : [ 52.0, 230.0, 454.0, 286.0 ],
				"numinlets" : 1,
				"id" : "obj-9",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "select 27",
				"patching_rect" : [ 199.0, 93.0, 59.0, 22.0 ],
				"numinlets" : 2,
				"id" : "obj-7",
				"numoutlets" : 2,
				"style" : "",
				"outlettype" : [ "bang", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "toggle",
				"patching_rect" : [ 199.0, 124.0, 24.0, 24.0 ],
				"numinlets" : 1,
				"id" : "obj-12",
				"parameter_enable" : 0,
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "int" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "fullscreen $1",
				"patching_rect" : [ 199.0, 157.0, 79.0, 22.0 ],
				"numinlets" : 2,
				"id" : "obj-10",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "key",
				"patching_rect" : [ 199.0, 62.0, 50.5, 22.0 ],
				"numinlets" : 0,
				"id" : "obj-4",
				"numoutlets" : 4,
				"style" : "",
				"outlettype" : [ "int", "int", "int", "int" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "loadbang",
				"patching_rect" : [ 133.0, 62.0, 60.0, 22.0 ],
				"numinlets" : 2,
				"id" : "obj-6",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "If \"sumidagawa_00000.mov\" is in the same folder as this patch, click the toggle to play. Othersie click \"read\" to load a .mov",
				"linecount" : 2,
				"patching_rect" : [ 82.0, 11.0, 468.0, 33.0 ],
				"numinlets" : 1,
				"id" : "obj-5",
				"numoutlets" : 0,
				"style" : ""
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "js MovingVideo.js",
				"patching_rect" : [ 52.0, 195.0, 104.0, 22.0 ],
				"numinlets" : 1,
				"id" : "obj-3",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ],
				"saved_object_attributes" : 				{
					"filename" : "MovingVideo.js",
					"parameter_enable" : 0
				}

			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "qmetro 33.3",
				"patching_rect" : [ 52.0, 62.0, 75.0, 22.0 ],
				"numinlets" : 2,
				"id" : "obj-2",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "toggle",
				"patching_rect" : [ 52.0, 11.0, 24.0, 24.0 ],
				"numinlets" : 1,
				"id" : "obj-1",
				"parameter_enable" : 0,
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "int" ]
			}

		}
 ],
	"lines" : [ 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-12", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-6", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"midpoints" : [ 142.5, 98.5, 61.5, 98.5 ],
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-4", 0 ],
				"destination" : [ "obj-7", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-3", 0 ],
				"destination" : [ "obj-9", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-2", 0 ],
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
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"midpoints" : [ 208.5, 187.0, 61.5, 187.0 ],
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
		"revision" : 2,
		"architecture" : "x86",
		"modernui" : 1
	}

}
