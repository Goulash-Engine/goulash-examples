import Phaser from "phaser";
import map from "../map/forest.json";
import grass from "../map/grass.png";
import GoulashClient from "../goulash_client";

export default class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.tilemapTiledJSON('map', map)
    this.load.image('tiles', grass);
    this.load.image('tree_alive', '../src/assets/tree_alive.png');
    this.load.image('tree_dying', '../src/assets/tree_dying.png');
    this.load.image('tree_dead', '../src/assets/tree_dead.png');
  }

  create() {
    const map = this.make.tilemap({key: 'map'});
    const grassTiles = map.addTilesetImage('grass', 'tiles');
    const layer = map.createLayer('base', grassTiles);

    const trees = []
    trees.push(this.add.sprite(50,50, 'tree_alive'))
    trees.push(this.add.sprite(250,80, 'tree_alive'))
    trees.push(this.add.sprite(30,200, 'tree_alive'))
    trees.push(this.add.sprite(150,180, 'tree_alive'))

    const goulashClient = new GoulashClient();

  }

}
