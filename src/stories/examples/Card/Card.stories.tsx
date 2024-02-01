import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../../lib/example';

const meta = {
  title: 'Example/Card',
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
