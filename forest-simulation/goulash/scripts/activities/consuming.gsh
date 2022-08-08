activity consuming {
	trigger_urges ["wip"]
	duration ["5"]
	logic on_finish {
	  actor::urge(consume).set(0);
	}
	logic act {
	  actor::urge(consume).minus(5);
	}
}

