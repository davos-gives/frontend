import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormInputComponent extends Component {
  @tracked isEditing = false;

  get defaultImage() {
    let { defaultImage } = this.args.campaign;
    return `Active_donation_bg${defaultImage}`
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
