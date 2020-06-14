import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormInputComponent extends Component {
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
}
