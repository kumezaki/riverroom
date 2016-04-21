autowatch = 1;
outlets = 2;

function list()
{
	for (i = 0; i < arguments.length; i++)
	{
		outlet(0,"target",i+1)
		outlet(1,arguments[i]);
//		post(i+1,arguments[i],"\n");
	}
}
