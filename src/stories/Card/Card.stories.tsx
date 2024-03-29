import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../lib';

const meta = {
  title: 'Production/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    title: 'Card Title',
    img: { src: '', alt: '' },
  },
};
