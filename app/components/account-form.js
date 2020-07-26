import organizationValidation from '../validations/charity';
import shortUserValidation from '../validations/short-user';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AccountFormComponent extends Component {
  @service notifications;

  constructor() {
    super(...arguments);

    this.user = new Changeset(this.args.user, lookupValidator(shortUserValidation), shortUserValidation)
    this.organization = new Changeset(this.args.organization, lookupValidator(organizationValidation), organizationValidation)
  }

  validate(_element, [object]) {
    return object.validate();
  }

  get formInvalid() {
    return (
      (!this.user.isValid || this.user.changes.length === 0) &&
      (!this.organization.isValid || this.organization.changes.length === 0)
    )
  }

  @action
  rollback() {
    this.user.rollback();
    this.organization.rollback();
  }

  @action
  async save() {
    if (!this.formInvalid) {
      if (this.user.changes.length > 0) {
        await this.user.save();
      }
      if (this.organization.changes.length > 0) {
        await this.organization.save();
      }

      this.notifications.success('Organization Successfully Updated', {
        autoClear: true,
        clearDuration: 5000
      });
    }
  }

  @action
  reauthenticate() {
    const orgId = this.args.organization.id
    if (this.organization.isValid) {
      window.location = `https://staging-api.davos.gives/auth?organization_id=${orgId}`
    }
  }
}