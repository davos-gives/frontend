import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DonationsController extends Controller {
  @tracked subMenuOpen = false;

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }
}