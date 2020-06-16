import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CampaignsController extends Controller {
  @tracked subMenuOpen = false;

  get activeReceipts() {
    return this.model.receipts.filter(receipt => receipt.published)
  }

  @action
  toggleMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }
}