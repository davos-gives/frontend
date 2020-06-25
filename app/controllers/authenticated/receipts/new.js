import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ReceiptsNewController extends Controller {
  @service session;
  @service currentUser;

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

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}