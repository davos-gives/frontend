import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service router;

  @tracked opened = true;

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

  get showMenu() {
    if (
      this.router.currentRoute.name == "sign-up" ||
      this.router.currentRoute.name == "create-organization" ||
      this.router.currentRoute.name == "log-in"
    ) {
      return false;
    } else {
      return true;
    }
  }
}
