import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ManualColorPickerComponent extends Component {
  @tracked isOpen = false;

  @action
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


}
