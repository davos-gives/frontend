import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ReceiptsNewController extends Controller {
  @tracked sidebarVisible = false;
  @tracked subMenuOpen = false;

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }

  @action
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}