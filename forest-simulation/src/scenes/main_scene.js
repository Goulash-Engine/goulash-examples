import Phaser from "phaser";
import map from "../map/forest.json";
import grass from "../map/grass.png";

export default class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.tilemapTiledJSON('map', map)
    this.load.image('tiles', grass);
  }

  create() {
    const map = this.make.tilemap({key: 'map'});
    const grassTiles = map.addTilesetImage('grass', 'tiles');
    const layer = map.createLayer('base', grassTiles);
  }

}
