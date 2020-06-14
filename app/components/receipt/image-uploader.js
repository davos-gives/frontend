import Component from '@glimmer/component';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default class ImageUploaderComponent extends Component {
  @service store;

  get currentModel() {
    debugger;
    return this.args.model;
  }

  @action
  uploadImage(file) {
    this.uploadTask.perform(file);
  }

  @(task(function* (file) {
    let image = this.store.createRecord(this.currentModel, {});

    let fd = new FormData();
    fd.append('upload_preset', 'btdal7la');
    fd.append('file', file.blob);

    let response = yield file.upload('https://api.cloudinary.com/v1_1/davos-gives/image/upload', { data: { upload_preset: 'btdal7la' } });

    image.set('url', response.body.url);
    yield image.save();
  }).restartable())
  uploadTask;
}
