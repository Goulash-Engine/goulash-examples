logic routine {
    actors::state(energy).minus(0.5);
    actors[state.energy < 70]::urge(rest).plus(0.5);
    actors[state.energy < 30]::urge(rest).plus(2.5);
    actors[state.energy < 10]::urge(rest).plus(5.0);

    actors::state(nourishment).minus(0.5);
    actors[state.nourishment < 70]::urge(eat).plus(0.5);
    actors[state.nourishment < 30]::urge(eat).plus(2.5);
    actors[state.nourishment < 10]::urge(eat).plus(5.0);
}
