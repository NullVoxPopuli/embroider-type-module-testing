import { module, test } from 'qunit';

import { theFn } from 'lib-import-sync';

module('import-sync', function () {
  test('it works', function (assert) {
    assert.strictEqual(theFn(), 'expecting broccoli');
  });
});
