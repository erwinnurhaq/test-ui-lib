import React from 'react';

import { ProgressIndicator } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/ProgressIndicator',
  component: ProgressIndicator,
};

export default metadata;

const ProgressIndicatorWrapper = ({ ...args }) => {
  // 1 means here is step 2
  // because currentStepIndex is starting at 0
  const [currentStepIndex] = React.useState(1);

  return (
    <ProgressIndicator
      {...args}
      currentStepIndex={currentStepIndex}
      stepsData={[
        {
          text: 'test-1',
        },
        {
          text: 'test-2 thisisverylonglonglonglongtext longtext',
        },
        {
          text: 'test-3',
        },
        {
          text: 'test-4',
        },
      ]}
    />
  );
};

const Template = ({ ...args }) => <ProgressIndicatorWrapper {...args} />;

export const ProgressIndicatorNormal = Template.bind({});
ProgressIndicatorNormal.args = {};
