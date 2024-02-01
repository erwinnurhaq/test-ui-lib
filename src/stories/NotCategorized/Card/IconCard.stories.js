import React from 'react';
import { TiWeatherDownpour } from 'react-icons/ti';

import { IconCard } from '../../../lib';

const metadata = {
  title: 'Production/NotCategorized/Card/IconCard',
  component: IconCard,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#EBF1F5',
        },
      ],
    },
  },
};

export default metadata;

const Template = ({ ...args }) => <IconCard {...args} />;

export const IconCardNormal = Template.bind({});
IconCardNormal.args = {};

export const IconCardDisabled = Template.bind({});
IconCardDisabled.args = {
  isDisabled: true,
};

export const IconCardCustomTextAndIcon = Template.bind({});
IconCardCustomTextAndIcon.args = {
  icon: <TiWeatherDownpour className="psui-w-8 psui-h-8" />,
  title: 'Card icon title',
  subtitle: 'This is handy supporting sub text',
};

export const IconCardCustomTextOverflow = Template.bind({});
IconCardCustomTextOverflow.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin mi a laoreet facilisis. Donec nec aliquet velit. Integer porta feugiat vestibulum.',
};
