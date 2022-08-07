activity resting {
	trigger_urges ["rest"]
	duration ["20"]
	logic on_finish {
		actor::urge(rest).set(0);
		actor::state(energy).set(100);
	}
	logic act {
		actor::urge(rest).minus(5);
		actor::urge(think).plus(5);
	}
}

