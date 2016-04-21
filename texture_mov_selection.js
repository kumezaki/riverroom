autowatch = 1;

outlets = 2;

var texture_pos;
var num_textures;

var num_search_names;
var search_names = new Array;
var search_name_pos;

var num_movies = new Array;

var movie_pos;


function loadbang()
{
	reset();
}

function display()
{
	for (i = 0, alpha = 1.; i < 3; i++, alpha *= 0.5)
	{
		tag = ((search_name_pos+i) < num_search_names) ? search_names[search_name_pos+i] : "?";
		messnamed(i+"_tagname_msg",tag,0.5-(0.5*i),alpha);
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
		post(s,"\n");
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
	
	display();
}
	
function reset()
{
	texture_pos = -1;
	num_textures = 3;
	
	num_search_names = 0;
	delete search_names;
	search_names = new Array;
	search_name_pos = 0;

	delete num_movies;
	num_movies = new Array;

	movie_pos = 0;
}
	
function bang()
{
	texture_pos = ++texture_pos % num_textures;
	
	texture_off = search_name_pos == num_search_names;

	outlet(1,texture_pos,texture_off);
	post(texture_pos,"texture",texture_off?"off":"on","\n");
	
	if (texture_off) return;

	if (movie_pos < num_movies[search_name_pos])
	{
		outlet(0,texture_pos,search_names[search_name_pos],movie_pos);
		post(texture_pos,search_names[search_name_pos],movie_pos,"\n");
		movie_pos++;
	}

	if (movie_pos == num_movies[search_name_pos])
	{
		movie_pos = 0;
		search_name_pos++;
	}
}
