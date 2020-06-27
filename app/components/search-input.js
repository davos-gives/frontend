import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormInputComponent extends Component {
  @tracked focused = false;

  @action
  startPlaces(element) {
    const autoComplete = new google.maps.places.Autocomplete(element);

    autoComplete.addListener('place_changed', function () {
      let place = autoComplete.getPlace();
      debugger;
    })
  }

  @action
  addFocus() {
    this.focused = true;
  }

  @action
  removeFocus() {
    if (!this.args.value || this.args.value === "") {
      this.focused = false;
    }
  }
}
