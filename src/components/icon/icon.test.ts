import { Icon } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-icon', () => {
  test('is defined', () => {
    const el = document.createElement('kd-icon');
    assert.instanceOf(el, Icon);
  });
});