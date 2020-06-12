import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency'; import { inject as service } from '@ember/service';

const { get, set } = Ember;

export default class ReceiptSignatureUploaderComponent extends Component {
  @service store;

  @action
  uploadImage(file) {
    this.uploadImage.perform(file);
  }

  @(task(function* (file) {
    let photo = this.store.createRecord('signature', {});

    let fd = new FormData();
    fd.append('upload_preset', 'btdal7la');
    fd.append('file', file.blob);

    let response = yield file.upload('https://api.cloudinary.com/v1_1/davos-gives/image/upload', { data: { upload_preset: 'btdal7la' } });

    photo.set('url', response.body.url);
    yield photo.save();
  }).restartable())
  uploadImage;



  // @(task(function* (file) {
  //   let photo = this.store.createRecord('signature', {});

  //   let fd = new FormData();
  //   fd.append('upload_preset', 'btdal7la');
  //   fd.append('file', file.blob);

  //   let response = yield fetch('https://api.cloudinary.com/v1_1/davos-gives/image/upload', {
  //     method: 'POST',
  //     body: fd
  //   });

  //   let hostedFile = yield response.json();
  //   photo.set('url', hostedFile.url);
  //   yield photo.save();
  // }).restartable())
  // uploadImage;

}
