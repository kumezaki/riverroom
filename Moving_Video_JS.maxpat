{
	"boxes" : [ 		{
			"box" : 			{
				"maxclass" : "jit.pwindow",
				"numinlets" : 1,
				"patching_rect" : [ 52.0, 155.0, 323.0, 267.0 ],
				"id" : "obj-12",
				"numoutlets" : 2,
				"outlettype" : [ "", "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "message",
				"text" : "read",
				"numinlets" : 2,
				"patching_rect" : [ 153.0, 62.0, 35.0, 22.0 ],
				"id" : "obj-11",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "button",
				"numinlets" : 1,
				"patching_rect" : [ 20.0, 62.0, 24.0, 24.0 ],
				"id" : "obj-7",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "newobj",
				"text" : "js MovingVideo.js",
				"numinlets" : 1,
				"patching_rect" : [ 52.0, 114.0, 104.0, 22.0 ],
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
				"numinlets" : 2,
				"patching_rect" : [ 52.0, 62.0, 75.0, 22.0 ],
				"id" : "obj-2",
				"numoutlets" : 1,
				"style" : "",
				"outlettype" : [ "bang" ]
			}

		}
, 		{
			"box" : 			{
				"maxclass" : "toggle",
				"numinlets" : 1,
				"patching_rect" : [ 52.0, 27.0, 24.0, 24.0 ],
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
				"source" : [ "obj-11", 0 ],
				"destination" : [ "obj-3", 0 ],
				"hidden" : 0,
				"disabled" : 0
			}

		}
, 		{
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
