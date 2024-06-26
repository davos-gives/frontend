import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import templateValidations from '../../../validations/template';

export default class ReceiptsEditController extends Controller {
  templateValidations = templateValidations;
  @service session;
  @service currentUser;
  @service router;
  @service notifications;

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

  @action
  async save(receipt) {
    await receipt.save();
    this.notifications.success('Template Successfully Updated', {
      autoClear: true,
      clearDuration: 5000
    });
    this.router.transitionTo('authenticated.campaigns');
  }
}