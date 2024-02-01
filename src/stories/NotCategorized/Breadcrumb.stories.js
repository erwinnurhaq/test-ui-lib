import React from 'react';

import { Breadcrumb } from '../../lib';

const metadata = {
  title: 'Production/NotCategorized/Breadcrumb',
  component: Breadcrumb,
};

export default metadata;

const Template = ({ ...args }) => <Breadcrumb {...args} />;

export const BreadcrumbDefaults = Template.bind({});
BreadcrumbDefaults.args = {
  currentActiveItemKey: 'Shirt',
  sections: [
    { key: 'Home', content: 'Home', onClick: () => {} },
    { key: 'Store', content: 'Store', onClick: () => {} },
    { key: 'Shirt', content: 'T-Shirt' },
  ],
};

export const BreadcrumbArrow = Template.bind({});
BreadcrumbArrow.args = {
  currentActiveItemKey: 'Shirt',
  sections: [
    { key: 'Home', content: 'Home', onClick: () => {} },
    { key: 'Store', content: 'Store' },
    { key: 'Shirt', content: 'T-Shirt', isDisabled: true },
  ],
  icon: 'arrow',
};

export const Breadcrumb5More = Template.bind({});
Breadcrumb5More.args = {
  currentActiveItemKey: 'Park',
  sections: [
    { key: 'Home', content: 'Home', onClick: () => {} },
    { key: 'Store', content: 'Store', onClick: () => {} },
    { key: 'Shirt', content: 'T-Shirt', isDisabled: true },
    { key: 'Office', content: 'Office', isDisabled: true },
    { key: 'Park', content: 'Park' },
  ],
};

export const BreadcrumbDisabled = Template.bind({});
BreadcrumbDisabled.args = {
  currentActiveItemKey: 'Shirt',
  sections: [
    { key: 'Home', content: 'Home', isDisabled: true },
    { key: 'Store', content: 'Store', isDisabled: true },
    { key: 'Shirt', content: 'T-Shirt', isDisabled: true },
  ],
};

export const BreadcrumbLoading = Template.bind({});
BreadcrumbLoading.args = {
  loading: true,
};
