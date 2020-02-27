import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormInputComponent extends Component {
  @tracked isEditing = false;

  @action
  addEit() {
    this.isEditing = true;
  }

  @action
  removeEdit() {
    this.isEditing = false;
  }
}
