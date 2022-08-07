activity eating {
	trigger_urges ["eat"]
	duration ["5"]
	logic on_finish {
	  actor::urge(eat).set(0);
	}
	logic act {
	  actor[state.nourishment > 99]::condition(full).add();
	  actor[state.nourishment < 100]::urge(eat).minus(5);
	  actor[state.nourishment < 100]::urge(rest).plus(0.3);
	  actor[state.nourishment < 100]::state(nourishment).plus(3);
	}
}

