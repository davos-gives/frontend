import Component from '@glimmer/component';

export default class FormInputComponent extends Component {

  validate(_element, [object]) {
    return object.validate();
  }
}
