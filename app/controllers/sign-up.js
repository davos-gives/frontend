import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import AccountValidations from '../validations/account';
import { assign } from '@ember/polyfills';
import fetch from 'fetch';
import config from '../config/environment';

export default class SignupController extends Controller {
  AccountValidations = AccountValidations;

  @service router;
  @service session;

  @action
  async submit({ isValid, fname, lname, email, password, passwordConfirmation }) {
    if (isValid) {
      try {
        const data = {}
        data["fname"] = fname;
        data["lname"] = lname;
        data["email"] = email;
        data["password"] = password;
        data["password_confirmation"] = passwordConfirmation;
        await this.makeRequest(data)
          .then(response => response.json())
        //deal with errors!

        await this.session.authenticate('authenticator:oauth2', email, password);
        this.router.transitionTo('authenticated.create-organization');
      } catch (error) {
        console.log("something has gone terrible wrong!")
      }
    }
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }

  makeRequest(data, options = {}) {
    let url = `${config.apiHost}/api/v1/registrations`;
    let requestOptions = {};
    let body = JSON.stringify(data);
    assign(requestOptions, {
      body,
      method: 'POST',
      headers: {
        'accept': "application/json",
        'content-type': "application/json"
      }
    });
    assign(requestOptions, options || {});

    return fetch(url, requestOptions);
  }
}
