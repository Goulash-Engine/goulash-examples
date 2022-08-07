import Phaser from 'phaser';
import MyGame from './scenes/main_scene';

const config = {
    type: Phaser.AUTO,
    parent: 'goulash-phaser-3',
    width: 10*32,
    height: 10*32,
    scene: MyGame
};

const game = new Phaser.Game(config);
