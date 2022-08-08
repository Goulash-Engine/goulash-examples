logic forest_routine {
    actors::state(hydration).minus(100);

    actors[state.hydration < 60]::urge(consume).plus(1);
    actors[state.hydration < 20]::condition(dry).add();
    actors[state.hydration <= 0]::state(damage).plus(1);

    actors[state.hydration <= 0]::state(hydration).set(0);
    actors[state.damage < 0]::state(damage).set(0);

    actors[state.damage > 50]::condition(alive).remove();
    actors[state.damage > 50]::condition(dying).add();

    actors[state.damage >= 100]::condition(dying).remove();
    actors[state.damage >= 100]::condition(dead).add();
}
