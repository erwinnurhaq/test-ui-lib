import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { IconButton } from '../../lib';

const metadata = {
  title: 'Production/Buttons/IconButton',
  component: IconButton,
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
          height: '500px',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default metadata;

const TemplateWithIcon = ({ ...args }) => (
  <IconButton {...args}>
    <FiPlus className="psui-h-4" />
  </IconButton>
);

export const IconButtonWithIcon = TemplateWithIcon.bind({});
IconButtonWithIcon.args = {};
IconButtonWithIcon.storyName = 'Icon Button';
