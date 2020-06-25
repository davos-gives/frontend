import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
  serverTokenEndpoint = '/api/v1/session';
}