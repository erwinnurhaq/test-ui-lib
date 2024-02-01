import React from 'react';

import { Accordion } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/Accordion',
  component: Accordion,
};

export default metadata;

const items = [
  {
    id: 1,
    label: 'label 1',
    content: (
      <div className="psui-type-body-long-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    ),
  },
  {
    id: 2,
    label: 'label 2',
    content: (
      <div className="psui-type-body-long-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5>Lorem ipsum dolor sit amet</h5>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>
    ),
  },
  {
    id: 3,
    label: 'label 3',
    content: (
      <div className="psui-type-body-long-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    ),
  },
  {
    id: 4,
    label: 'label 4',
    content: (
      <div className="psui-type-body-long-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    ),
  },
  {
    id: 5,
    label: 'label 5',
    content: (
      <div className="psui-type-body-long-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    ),
  },
];

const Template = ({ ...args }) => {
  const [openedItemIds, setOpenedItemIds] = React.useState([1, 2]);

  return (
    <div style={{ width: 500 }}>
      <Accordion
        {...args}
        items={items}
        openedItemIds={openedItemIds}
        openLabel={clickedLabelId => {
          setOpenedItemIds(item => [...item, clickedLabelId]);
        }}
        closeLabel={clickedLabelId =>
          setOpenedItemIds(item => item.filter(id => id !== clickedLabelId))
        }
      />
    </div>
  );
};

const TemplateFullWidth = ({ ...args }) => {
  const [openedItemIds, setOpenedItemIds] = React.useState([1, 2]);

  return (
    <div>
      <Accordion
        {...args}
        items={items}
        openedItemIds={openedItemIds}
        openLabel={clickedLabelId => {
          setOpenedItemIds(item => [...item, clickedLabelId]);
        }}
        closeLabel={clickedLabelId =>
          setOpenedItemIds(item => item.filter(id => id !== clickedLabelId))
        }
      />
    </div>
  );
};

export const AccordionNormal = Template.bind({});
AccordionNormal.args = {};

export const AccordionFullWidth = TemplateFullWidth.bind({});
AccordionFullWidth.args = {};

export const AccordionSkeleton = Template.bind({});
AccordionSkeleton.args = { isSkeleton: true };
