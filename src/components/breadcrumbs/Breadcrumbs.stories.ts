/**
 * Copyright Kyndryl, Inc. 2023
 */

// External library imports
import type { Meta, StoryObj } from '@storybook/web-components';

// Relative component imports
import './breadcrumbs';

const meta: Meta = {
  title: 'Components/Breadcrumbs',
  component: 'kd-breadcrumbs',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6AovH7Iay9Y7BkpoL5975s/Component-Library-for-Dev?node-id=459%3A39033&mode=dev',
    },
  },
  argTypes: {
    items: {
      description: 'Array of breadcrumb items',
      control: 'object'
    },
  },
};

export default meta;

type Story = StoryObj;

export const Breadcrumbs: Story = {
  args: {
    items: [
      { label: 'Bridge', href: '/' },
      { label: 'Catalog', href: '/catalog' },
      { label: 'FinOps' },
    ],
  },
};
