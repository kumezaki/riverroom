autowatch = 1;

var gNumZones = 4;
var gZoneStatus = [];
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
		gZoneXMin[i] = i * gZoneWidth;
		gZoneXMax[i] = gZoneXMin[i] + gZoneWidth;
	}
	
	for (i = 0; i < gNumClips; i++)
		gClipLoc_X[i] = -1;
}

function set_zone_status(z,s)
{
	post("set_zone_status",z,s,"\n");
	gZoneStatus[z] = s;
	
	gCurZone = z;
	messnamed("get_clip_loc_x","bang");
}

function set_clip_loc_x(c,x)
{
	if (in_zone(x,gCurZone))
	{
		post("clip",c,x,"in zone",gCurZone,"\n");
		send_clip_zone_status(c,gZoneStatus[gCurZone]);
	}
}

function set_clip_zone(c,z)
{
	post("clip",c,"in zone",z,"\n");
	send_clip_zone_status(c,gZoneStatus[z]);
}

function in_zone(x,z)
{
	return (x >= gZoneXMin[z]) && (x < gZoneXMax[z]);
}

function send_clip_zone_status(c,s)
{
	messnamed("clip_zone_status",c,s);
}
