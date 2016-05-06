{
	"boxes" : [ 		{
			"box" : 			{
				"maxclass" : "comment",
				"text" : "If \"sumidagawa_00000.mov\" is in the same folder as this patch, click the toggle to play. Othersie click \"read\" to load a .mov",
				"linecount" : 2,
				"patching_rect" : [ 82.0, 11.0, 468.0, 33.0 ],
				"id" : "obj-5",
				"style" : "",
				"numinlets" : 1,
				"numoutlets" : 0
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"patching_rect" : [ 52.0, 155.0, 323.0, 267.0 ],
				"id" : "obj-12",
				"numinlets" : 1,
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "read",
				"patching_rect" : [ 153.0, 62.0, 35.0, 22.0 ],
				"id" : "obj-11",
				"style" : "",
				"numinlets" : 2,
				"numoutlets" : 1,
				"outlettype" : [ "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "button",
				"patching_rect" : [ 20.0, 62.0, 24.0, 24.0 ],
				"id" : "obj-7",
				"style" : "",
				"numinlets" : 1,
				"numoutlets" : 1,
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "js MovingVideo.js",
				"patching_rect" : [ 52.0, 114.0, 104.0, 22.0 ],
				"id" : "obj-3",
				"style" : "",
				"numinlets" : 1,
				"numoutlets" : 1,
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
				"id" : "obj-2",
				"style" : "",
				"numinlets" : 2,
				"numoutlets" : 1,
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "toggle",
				"patching_rect" : [ 52.0, 11.0, 24.0, 24.0 ],
				"id" : "obj-1",
				"parameter_enable" : 0,
				"style" : "",
				"numinlets" : 1,
				"numoutlets" : 1,
				"outlettype" : [ "int" ]
			}

		}
 ],
	"lines" : [ 		{
			"patchline" : 			{
				"source" : [ "obj-7", 0 ],
				"destination" : [ "obj-3", 0 ],
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
				"source" : [ "obj-2", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
			"patchline" : 			{
				"source" : [ "obj-11", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
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
