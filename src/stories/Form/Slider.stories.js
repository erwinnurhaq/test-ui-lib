import React from 'react';

import { Slider } from '../../lib';

const metadata = {
  title: 'Production/Form/Slider',
  component: Slider,
  parameters: {
    // this fixes the missing slider in docsin chrome base web
    docs: {
      inlineStories: false,
      iframeHeight: 100,
    },
  },
};

export default metadata;

const Template = ({ ...args }) => {
  const [value, setValue] = React.useState(50);

  return <Slider {...args} value={value} setValue={setValue} />;
};

export const SliderNormal = Template.bind({});
SliderNormal.args = {};

export const SliderDisabled = Template.bind({});
SliderDisabled.args = { isDisabled: true };

export const SliderWithLabel = Template.bind({});
SliderWithLabel.args = { label: 'Slider label' };
