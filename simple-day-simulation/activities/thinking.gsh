activity thinking {
	trigger_urges ["think"]
	duration ["1"]
	logic act {
	  actor[state.nourishment < 80]::urge(eat).plus(1);
	  actor[state.nourishment < 70]::urge(eat).plus(2);
	  actor[state.nourishment < 60]::urge(eat).plus(3);
	  actor[state.nourishment < 50]::urge(eat).plus(4);
	}
}

