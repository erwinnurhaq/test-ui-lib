import React from 'react';

import { ContentSwitcher } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/ContentSwitcher',
  component: ContentSwitcher,
};

export default metadata;

const ContentSwitcherWrapper = ({ ...args }) => {
  const [selectedId, setSelectedId] = React.useState(0);

  return (
    <ContentSwitcher
      {...args}
      selectedId={selectedId}
      data={[
        {
          id: 1,
          text: 'test-1',
          tabIndex: '1',
          onClick: id => setSelectedId(id),
        },
        {
          id: 2,
          text: 'test-2',
          tabIndex: '2',
          onClick: () => setSelectedId(2),
        },
        {
          id: 3,
          text: 'test-3',
          tabIndex: '3',
          onClick: id => setSelectedId(id),
        },
        {
          id: 4,
          text: 'test-4',
          tabIndex: '4',
          onClick: () => setSelectedId(4),
        },
        {
          id: 5,
          text: 'test-5',
          tabIndex: '5',
          onClick: () => setSelectedId(5),
        },
      ]}
    />
  );
};

const Template = ({ ...args }) => <ContentSwitcherWrapper {...args} />;

export const ContentSwitcherNormal = Template.bind({});
ContentSwitcherNormal.args = {};

export const ContentSwitcherDisabled = Template.bind({});
ContentSwitcherDisabled.args = { isDisabled: true };

export const ContentSwitcherSkeleton = Template.bind({});
ContentSwitcherSkeleton.args = { isSkeleton: true };
