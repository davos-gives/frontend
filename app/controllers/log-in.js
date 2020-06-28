import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;
  @service router;

  @action
  async authenticate({ email, password }) {
    try {
      await this.session.authenticate('authenticator:oauth2', email, password);
    } catch (error) {
      this.errorMessage = error.error || error;
      console.log("I haz an error");
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo('authenticated.create-organization')
    }
  }
}