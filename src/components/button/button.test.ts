import { Button } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-button', () => {
  test('is defined', () => {
    const el = document.createElement('kd-button');
    assert.instanceOf(el, Button);
  });
});
