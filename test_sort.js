autowatch = 1;

var gNumClips = 0;
var gArray = [];

function set_num_clips(num_clips)
{
	delete gArray;
	
	gNumClips = num_clips;

	for (i = 0; i < gNumClips; i++)
		gArray[i] = [i,i]; /* [z-value, clip_num] */

	display_array(gArray);
}

function clip_change(clip_num,status)
{
	/* search for clip number and assign new z value here */
	for (i = 0; i < gNumClips; i++)
		if (gArray[i][1]==clip_num)
		{
			gArray[i][0] = status ? -1 : gNumClips;
			break;
		}
	display_array(gArray);
	
	/* sort the array based on temporary z-values */
	gArray.sort();
	display_array(gArray);

	/* reassign z-values */
	for (i = 0; i < gNumClips; i++)
		gArray[i][0] = i;
	display_array(gArray);
}

function display_array(gArray)
{
	for (i = 0; i < gNumClips; i++)
		post("("+gArray[i]+")");
	post("\n");
}
