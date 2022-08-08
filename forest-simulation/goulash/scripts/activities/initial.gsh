activity initial {
	trigger_urges ["wakeup"]
	duration ["1"]
	logic on_finish {
	  actor::state(hydration).set(100);
    actor::urge(wakeup).set(0);
	}
}

