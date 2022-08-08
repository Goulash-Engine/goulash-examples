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
    console.log('creating forest...')
    const map = this.make.tilemap({key: 'map'});
    const grassTiles = map.addTilesetImage('grass', 'tiles');
    const layer = map.createLayer('base', grassTiles);

    this.tree1 = this.add.sprite(50, 50, 'tree_alive');
    this.tree1.setData('key', 'tree1');

    this.tree2 = this.add.sprite(250, 80, 'tree_alive')
    this.tree2.setData('key', 'tree2');

    this.tree3 = this.add.sprite(30, 200, 'tree_alive')
    this.tree3.setData('key', 'tree3');

    this.tree4 = this.add.sprite(150, 180, 'tree_alive')
    this.tree4.setData('key', 'tree4');

    const goulashClient = new GoulashClient();
    goulashClient.setupActor(this.tree1.getData('key'));
    goulashClient.setupActor(this.tree2.getData('key'));
    goulashClient.setupActor(this.tree3.getData('key'));
    goulashClient.setupActor(this.tree4.getData('key'));

    const trees = []
    trees.push(this.tree1);
    trees.push(this.tree2);
    trees.push(this.tree3);
    trees.push(this.tree4);

    this.updateTreeState(goulashClient, trees)
  }

  updateTreeState(goulashClient, trees) {
    console.log('updating tree state')
    setInterval(async () => {
      const actors = await goulashClient.fetchAllActors()
      actors.forEach(actor => {
        trees.forEach(tree => {
          if (actor.conditions.includes('alive')) {
            tree.setTexture('tree_alive')
          } else if (actor.conditions.includes('dead')) {
            tree.setTexture('tree_dead')
          } else if (actor.conditions.includes('dying')) {
            tree.setTexture('tree_dying')
          }
        })
      })
    }, 1000)
  }

}
