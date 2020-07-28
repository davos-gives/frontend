import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import loginValidations from '../validations/login';

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;
  @service router;

  loginValidations = loginValidations;

  @action
  async authenticate({ email, password }) {
    try {
      await this.session.authenticate('authenticator:oauth2', email, password);
    } catch (error) {
      this.errorMessage = error.error || error;
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo('authenticated.campaigns')
    }
  }
}