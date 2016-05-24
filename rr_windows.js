autowatch = 1;

var orientation = 0;

var main_win = [];
main_win[0] = { ortho : 2, coeff_source : 0.01, coeff_feedback : 0.85 }
main_win[2] = { ortho : 0, coeff_source : 0.15, coeff_feedback : 0.85 }

var sub_win = [];
sub_win[0] = { ortho : 2, coeff_source : 0.1, coeff_feedback : 0.9 }
sub_win[2] = { ortho : 2, coeff_source : 0.1, coeff_feedback : 0.9 }

function send_messages(win,name)
{
	messnamed("rr_ortho", name, win[orientation].ortho);
	messnamed("rr_delay_coeffs", name, win[orientation].coeff_source, win[orientation].coeff_feedback);
}

function set_orientation(v)
{
	orientation = v;
	
	send_messages(main_win, "rr_main");
	send_messages(sub_win, "rr_sub");
}
