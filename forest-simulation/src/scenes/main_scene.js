import Phaser from "phaser";
import logoImg from "../assets/logo.png";

export default class MyGame extends Phaser.Scene
{
  constructor ()
  {
    super();
  }

  preload ()
  {
    this.load.image('logo', logoImg);
  }

  create ()
  {
    const logo = this.add.image(400, 150, 'logo');
  }
}
