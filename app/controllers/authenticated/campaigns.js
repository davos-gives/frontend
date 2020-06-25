import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CampaignsController extends Controller {
  @service session;
  @service currentUser;

  @tracked subMenuOpen = false;

  get activeReceipts() {
    return this.model.receipts.filter(receipt => receipt.published)
  }

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}