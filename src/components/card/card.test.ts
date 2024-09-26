import { Card } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-card', () => {
  test('is defined', () => {
    const el = document.createElement('kd-card');
    assert.instanceOf(el, Card);
  });
});
