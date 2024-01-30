import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('lib-glimmer-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(hbs`<GlimmerComponent />`);

    assert.dom('output').hasText('0');

    await click('button');

    assert.dom('output').hasText('1');
  });
});
