import React from 'react';

import { Tab } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/Tab',
  component: Tab,
};

export default metadata;

const TabWrapper = ({ ...args }) => {
  const [selectedId, setSelectedId] = React.useState(0);

  return (
    <Tab
      {...args}
      selectedId={selectedId}
      data={[
        {
          id: 1,
          text: 'test-1',
          onClick: id => setSelectedId(id),
        },
        {
          id: 2,
          text: 'test-2',
          onClick: () => setSelectedId(2),
        },
        {
          id: 3,
          text: 'test-3',
          onClick: id => setSelectedId(id),
        },
        {
          id: 4,
          text: 'test-4',
          onClick: () => setSelectedId(4),
        },
      ]}
    />
  );
};

const Template = ({ ...args }) => <TabWrapper {...args} />;

export const TabNormal = Template.bind({});
TabNormal.args = {};

export const TabDisabled = Template.bind({});
TabDisabled.args = { isDisabled: true };

export const TabWithWrap = Template.bind({});
TabWithWrap.args = {};
TabWithWrap.decorators = [
  Story => (
    <div style={{ width: '300px' }}>
      <Story />
    </div>
  ),
];
