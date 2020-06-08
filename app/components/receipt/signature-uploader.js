import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { exec, init } from 'pell'

export default class ReceiptSignatureUploaderComponent extends Component {

  @action
  uploadImage() {
    console.log('uploading an image');
  }

}
