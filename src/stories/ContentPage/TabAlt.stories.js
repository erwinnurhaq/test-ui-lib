import React from 'react';

import { TabAlt } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/TabAlt',
  component: TabAlt,
};

export default metadata;

const TabAltWrapper = ({ ...args }) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <TabAlt
      {...args}
      activeIndex={selected}
      onTabChange={index => setSelected(index)}
      panes={[
        {
          key: 'key1',
          menuItem: 'test-1',
          render: <div>test-1 content</div>,
        },
        {
          key: 'key2',
          menuItem: 'test-2',
          render: <div>test-2 content</div>,
        },
        {
          key: 'key3',
          menuItem: 'test-3',
          render: <div>test-3 content</div>,
        },
        {
          key: 'key4',
          menuItem: 'test-4',
          render: <div>test-4 content</div>,
        },
      ]}
    />
  );
};

const Template = ({ ...args }) => <TabAltWrapper {...args} />;

export const TabAltNormal = Template.bind({});
TabAltNormal.args = {};

export const TabAltDisabled = Template.bind({});
TabAltDisabled.args = { isDisabled: true };

export const TabAltNoBorder = Template.bind({});
TabAltNoBorder.args = { isNoBorder: true };

const CustomTabElement = ({ ...props }) => <button {...props} />;
export const TabAltCustomElement = Template.bind({});
TabAltCustomElement.args = { linkElement: CustomTabElement };
