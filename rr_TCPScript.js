autowatch = 1;

function anything()
{
	s = messagename == "bang" ? max.apppath + "/" : messagename;
	
    a = s.split(":");

    script_path = a[1];

    post("script path is: "+script_path+"\n");

    outlet(0,script_path);
}
