import React from 'react';

import { OverflowMenu, OverflowMenuItem, OverflowMenuDivider } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/OverflowMenu',
  component: OverflowMenu,
  subcomponents: { OverflowMenuItem, OverflowMenuDivider },
  decorators: [
    Story => (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 300,
    },
  },
};

export default metadata;

const Template = ({ ...args }) => (
  <OverflowMenu {...args}>
    <OverflowMenuItem>Menu 1</OverflowMenuItem>
    <OverflowMenuItem>Menu 2</OverflowMenuItem>
    <OverflowMenuItem>Menu 3</OverflowMenuItem>
    <OverflowMenuItem>Menu 4</OverflowMenuItem>
    <OverflowMenuDivider />
    <OverflowMenuItem isDanger>Menu Danger</OverflowMenuItem>
  </OverflowMenu>
);

export const OverflowMenuDefault = Template.bind({});
OverflowMenuDefault.args = {};

export const OverflowMenuDisabled = Template.bind({});
OverflowMenuDisabled.args = { isDisabled: true };

const TemplateSomeItemDisabled = ({ ...args }) => (
  <OverflowMenu {...args}>
    <OverflowMenuItem>Menu 1</OverflowMenuItem>
    <OverflowMenuItem>Menu 2</OverflowMenuItem>
    <OverflowMenuItem isDisabled>Menu 3</OverflowMenuItem>
    <OverflowMenuItem>Menu 4</OverflowMenuItem>
    <OverflowMenuDivider />
    <OverflowMenuItem isDanger>Menu Danger</OverflowMenuItem>
  </OverflowMenu>
);

export const OverflowMenuSomeItemDisabled = TemplateSomeItemDisabled.bind({});
OverflowMenuSomeItemDisabled.args = {};

export const OverflowMenuCustomTrigger = Template.bind({});
OverflowMenuCustomTrigger.args = {
  customTrigger: (isOpen, setIsOpen) => (
    <button
      type="button"
      className={`${
        isOpen ? 'psui-bg-ps-blue-30' : 'psui-bg-ps-yellow-30'
      } psui-h-10 psui-my-2 psui-cursor-pointer`}
      onClick={() => setIsOpen(true)}
    >
      Custom Trigger
    </button>
  ),
};
