import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormInputComponent extends Component {
  @service router;
  @tracked isEditing = false;

  get defaultImage() {
    let imageNumber = Math.floor(Math.random() * Math.floor(3)) + 1;
    return `Active_donation_bg${imageNumber}`
  }

  get campaigns() {
    let campaignsCount = this.args.receipt.campaigns.length;
    if (campaignsCount == 0 || campaignsCount > 1) {
      return `${campaignsCount} campaigns`;
    } else {
      return `${campaignsCount} campaign`;
    }
  }

  @action
  addEit() {
    this.isEditing = true;
  }

  @action
  removeEdit() {
    this.isEditing = false;
  }

  @action
  transitionTo(receipt) {
    this.router.transitionTo('authenticated.receipts.edit', receipt.id);
  }
}
