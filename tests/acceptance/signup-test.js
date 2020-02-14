import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import percySnapshot from '@percy/ember';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /singup shows the correct page', async function (assert) {
    await visit('/signup');
    await percySnapshot('signup page');
    assert.equal(currentURL(), '/signup');
  });
});
