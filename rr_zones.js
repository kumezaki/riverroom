autowatch = 1;

var gNumZones = 4;
var gZoneStatus = [];
var gZoneClip = [];
var gZoneXMin = [];
var gZoneXMax = [];

var gCurZone = -1;

var clip_w = 80;
var clip_zoom_max = 2.0;
var clip_zoom_w = clip_zoom_max * clip_w;

var gWindowWidth = 1024;
var gWindowOffset = clip_zoom_w;
var gZoneWidth = gWindowWidth / gNumZones;

var gNumClips = 0;
var gClipLoc_X = [];

var gStoppedClips = [];

function loadbang()
{
	for (i = 0; i < gNumZones; i++)
	{
		gZoneStatus[i] = 0;
		gZoneClip[i] = -1;
		gZoneXMin[i] = i * gZoneWidth + gWindowOffset;
		gZoneXMax[i] = gZoneXMin[i] + gZoneWidth;
		post("zone",i,gZoneXMin[i],gZoneXMax[i],"\n");
	}
	
	for (i = 0; i < gNumClips; i++)
		gClipLoc_X[i] = -1;

	reset_clip_z_values();
	
	gCurZone = -1;
}

function bang()
{
	for (i = gNumClips-1; i >= 0; i--) /* in reverse order so that lowest clip w/ Z value is displayed on top */
		messnamed(gClip_ZValue[i][1]+"_movie_bang","bang");
}

function set_num_zones(n)
{
	post("set_num_zones",n,"\n");
	gNumZones = n;
	loadbang();
}

function set_num_clips(n)
{
	post("set_num_clips",n,"\n");
	gNumClips = n;
	loadbang();
}

function set_zone_status(z,s) /* called when zone status is updated by external event (e.g. kinect) */
{
	post("set_zone_status",z,s,"\n");
	gZoneStatus[z] = s;
	
	gCurZone = z;
	messnamed("get_clip_loc_x","bang");
}

function set_clip_loc_x(c,x) /* called after sending bang to get_clip_loc_x in set_zone_status */
{
	if (in_zone(x,gCurZone))
	{
		post("set_clip_loc_x: clip",c,x,"in zone",gCurZone,gZoneXMin[gCurZone],gZoneXMax[gCurZone],"\n");
		update_zone(c,gCurZone);
	}
}

function set_clip_zone(c,z) /* called when clip enters a new zone */
{
	post("set_clip_zone: clip",c,"in zone",z,gZoneXMin[z],gZoneXMax[z],"\n");
	update_zone(c,z);
}

function in_zone(x,z)
{
	return (x >= gZoneXMin[z]) && (x < gZoneXMax[z]);
}

function update_zone(c,z)
{
	if (gZoneStatus[z])
	{
		if (gZoneClip[z] < 0)
		{
			gZoneClip[z] = c;
			change_clip_zone_status(z,c,1);
		}
		else
			post("clip",gZoneClip[z],"in zone",z,"already stopped\n");
	}
	else
	{
		if (gZoneClip[z] == c)
		{
			gZoneClip[z] = -1;
			change_clip_zone_status(z,c,0); /* don't send if it's already 0 */
		}
	}
}

function change_clip_zone_status(z,c,s)
{
	messnamed("clip_zone_status",c,s);

	clip_change(c,s);

	post("clip",c,"in zone",z,s?"stopped\n":"started\n");
}

/*--------------------------------------------------------------------------------------*/

var gClip_ZValue = [];

function reset_clip_z_values()
{
	delete gClip_ZValue;
	
	for (i = 0; i < gNumClips; i++)
		gClip_ZValue[i] = [i,i]; /* [z-value, clip_num] */

	display_array(gClip_ZValue);
}

function clip_change(clip_num,status)
{
	/* search for clip number and assign new z value here */
	for (i = 0; i < gNumClips; i++)
		if (gClip_ZValue[i][1]==clip_num)
		{
			gClip_ZValue[i][0] = status ? -1 : gNumClips;
			break;
		}
	display_array(gClip_ZValue);
	
	/* sort the array based on temporary z-values */
	gClip_ZValue.sort();
	display_array(gClip_ZValue);

	/* reassign z-values */
	for (i = 0; i < gNumClips; i++)
		gClip_ZValue[i][0] = i;
	display_array(gClip_ZValue);
}

function display_array(gClip_ZValue)
{
	for (i = 0; i < gNumClips; i++)
		post("("+gClip_ZValue[i]+")");
	post("\n");
}
