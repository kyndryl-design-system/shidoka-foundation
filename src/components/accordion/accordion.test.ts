import { Accordion } from '../../../dist/index';

import { assert } from '@open-wc/testing';

suite('kd-accordion', () => {
  test('is defined', () => {
    const el = document.createElement('kd-accordion');
    assert.instanceOf(el, Accordion);
  });
});
