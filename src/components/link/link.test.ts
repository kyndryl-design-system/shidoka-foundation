import { Link } from '../../../dist/index';

import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

suite('kd-link', () => {
  test('is defined', () => {
    const el = document.createElement('kd-link');
    assert.instanceOf(el, Link);
  });

  test('is disabled', async () => {
    const el = await fixture(html`<kd-link disabled></kd-link>`);
    assert.shadowDom.equal(
      el,
      `
      <a role="link" class="kd-link-text  kd-link-text-disabled " target="_self" rel="" href="javascript:void(0)" disabled="">
        <span class="kd-link-text-span-flex">
          <slot></slot>
          <slot name="icon"></slot>
        </span>
      </a>
    `
    );
  });

  test('is primary', async () => {
    const el = await fixture(
      html`<kd-link href="" target="_self" kind="primary"></kd-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a role="link" class="kd-link-text  kd-link-text-primary kd-link-text-inline " target="_self" rel="" href="javascript:void(0)">
        <span class="kd-link-text-span-flex">
          <slot></slot>
          <slot name="icon"></slot>
        </span>
      </a>
    `
    );
  });

  test('is secondary', async () => {
    const mockEl = await fixture(
      html`<kd-link
        href="https://mock.com"
        target="_self"
        kind="secondary"
      ></kd-link>`
    );
    assert.shadowDom.equal(
      mockEl,
      `
      <a role="link" class="kd-link-text kd-link-text-inline kd-link-text-secondary" target="_self" rel="" href="https://mock.com">
        <span class="kd-link-text-span-flex">
          <slot></slot>
          <slot name="icon"></slot>
        </span>
      </a>
    `
    );
  });

  test('with icon', async () => {
    const mockEl = await fixture(
      html`<kd-link standalone href="" target="_self" kind="primary"></kd-link>`
    );
    assert.shadowDom.equal(
      mockEl,
      `
      <a role="link" class="kd-link-text  kd-link-text-primary kd-link-text-standalone " target="_self" rel="" href="javascript:void(0)">
        <span class="kd-link-text-span-flex">
          <slot></slot>
          <slot name="icon"></slot>
        </span>
      </a>
    `
    );
  });
});
