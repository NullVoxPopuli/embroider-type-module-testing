import { module, test } from 'qunit';

import greet from 'lib-no-deps';

module('lib-no-deps', function () {
  test('it works', function (assert) {
    assert.strictEqual(greet('myself'), 'Hello, myself!');
  });
});
