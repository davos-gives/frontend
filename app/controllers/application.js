import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';


export default class IndexController extends Controller {
  @tracked opened = true;
  @tracked subMenuOpen = false;

  *transition({ duration, removedSprites, insertedSprites }) {
    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration * (1 / 4) });
    }

    for (let sprite of insertedSprites) {
      yield fadeIn(sprite, { duration: duration * (1 / 4) });
    }
  }

  @action
  shrinkMenu() {
    this.opened = false;
  }

  @action
  growMenu() {
    this.opened = true;
  }

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }
}
