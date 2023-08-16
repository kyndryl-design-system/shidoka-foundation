import { Link } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-link', () => {
  test('is defined', () => {
    const el = document.createElement('kd-link');
    assert.instanceOf(el, Link);
  });
});