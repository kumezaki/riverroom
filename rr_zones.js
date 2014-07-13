autowatch = 1;

var gNumZones = 4;
var gZoneStatus = [];
var gZoneClip = [];
var gZoneXMin = [];
var gZoneXMax = [];

var gCurZone = -1;

var gWindowWidth = 1024;
var gZoneWidth = gWindowWidth / gNumZones;

var gNumClips = 10;
var gClipLoc_X = [];

function loadbang()
{
	for (i = 0; i < gNumZones; i++)
	{
		gZoneStatus[i] = 0;
		gZoneClip[i] = -1;
		gZoneXMin[i] = i * gZoneWidth;
		gZoneXMax[i] = gZoneXMin[i] + gZoneWidth;
	}
	
	for (i = 0; i < gNumClips; i++)
		gClipLoc_X[i] = -1;

	gCurZone = -1;
}

function bang()
{
	for (i = 0; i < gNumClips; i++)
		messnamed(i+"_movie_bang","bang");
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
		post("set_clip_loc_x: clip",c,x,"in zone",gCurZone,"\n");
		update_zone(c,gCurZone);
	}
}

function set_clip_zone(c,z) /* called when clip enters a new zone */
{
	post("set_clip_zone: clip",c,"in zone",z,"\n");
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
			send_clip_zone_status(c,1);
			post("clip",c,"in zone",z,"stopped\n");
		}
		else
			post("clip",gZoneClip[z],"in zone",z,"already stopped\n");
	}
	else
	{
		if (gZoneClip[z] == c)
		{
			gZoneClip[z] = -1;
			send_clip_zone_status(c,0); /* don't send if it's already 0 */
		}
	}
}

function send_clip_zone_status(c,s)
{
	messnamed("clip_zone_status",c,s);
}
