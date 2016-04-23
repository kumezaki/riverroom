autowatch = 1;

outlets = 2;

var num_textures;
var texture_pos;

var num_search_names;
var search_names = new Array;
var search_names_textures = new Array;
var search_name_pos;

var num_movies = new Array;
var movie_pos;

var end;

function loadbang()
{
	reset();
}

function display_tag(tag,pos,alpha)
{
	// send message to display
	messnamed(pos+"_tagname_msg",tag,0.5-(0.5*pos),alpha);
	post("Y POS:",tag,0.5-(0.5*pos),"\n");
}

function display_sub_window()
{
	// count number of occurences of unique tag
	a = new Array;
	for (i = 0; i < 3; i++)
	{
		tag = search_names_textures[i];
		post("COUNT:",i,tag,"\n");
		if (!(tag === undefined))
			if (a[tag] === undefined)
				a[tag] = 1;
			else
				a[tag]++;
	}
	
	// get maximum count
	m = 0;
	for (tag in a)
		m = a[tag] > m ? a[tag] : m;

	// display tags
	f = new File("current_tags.txt","write");
	f.open();
	f.eof = 0;
	pos = 0;
	for (tag in a)
	{
		post("DISPLAY",pos,tag,a[tag],"\n");
		display_tag(tag,pos++,a[tag]/m);
		f.writeline(tag);
	}
	f.close();
	
	// display blanks, if needed (3 maximum slots)
	for (; pos < 3; pos++)
	{
		post("DISPLAY",pos,"blank","\n");
		display_tag("",pos,0.);
	}
}

function update()
{
	// read new search tags from movies.txt and clear
	f = new File("movies.txt","readwrite");
	f.open();
	while (f.position != f.eof)
	{
		s = f.readline(256);
		post("UPDATE:",s,"\n");
		a = s.split(" ");
		if (a.length == 2)
		{
			num_movies[num_search_names] = a[0];
			search_names[num_search_names] = a[1];
			num_search_names++;
		}
	}
	f.eof = 0;
	f.close();
}
	
function reset()
{
	num_textures = 3;
	texture_pos = num_textures-1;
	
	num_search_names = 0;
	delete search_names;
	search_names = new Array;
	search_name_pos = 0;

	delete num_movies;
	num_movies = new Array;

	movie_pos = 0;
	
	end = 0;
}

function set_end(v)
{
	post("set_end",v,"received!\n");
	end = v;
}
	
function bang()
{
	texture_pos = ++texture_pos % num_textures;
	
	texture_off = (search_name_pos == num_search_names) || end;

	outlet(1,texture_pos,texture_off);
	post(texture_pos,"texture",texture_off?"off":"on","\n");

	if (!texture_off)
	{
		if (movie_pos < num_movies[search_name_pos])
		{
			outlet(0,texture_pos,search_names[search_name_pos],movie_pos);
			post(texture_pos,search_names[search_name_pos],movie_pos,"\n");
			search_names_textures[texture_pos] = search_names[search_name_pos];
			movie_pos++;
		}
	
		if (movie_pos == num_movies[search_name_pos])
		{
			movie_pos = 0;
			search_name_pos++;
		}
	}
	else
	{
		search_names_textures[texture_pos] = undefined;
	}

	display_sub_window();
	diff = num_search_names-search_name_pos;
	post("SEARCH NAME QUEUE (write,read,diff)",num_search_names,search_name_pos,diff,"\n");
}
