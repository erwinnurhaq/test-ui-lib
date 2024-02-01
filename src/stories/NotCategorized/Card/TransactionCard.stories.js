import React from 'react';

import { TransactionCard } from '../../../lib';

const metadata = {
  title: 'Production/NotCategorized/Card/TransactionCard',
  component: TransactionCard,
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

const Template = ({ ...args }) => <TransactionCard {...args} />;

export const TransactionCardNormal = Template.bind({});
TransactionCardNormal.args = {};

export const TransactionCardDisabled = Template.bind({});
TransactionCardDisabled.args = {
  isDisabled: true,
};

export const TransactionCardCustom = Template.bind({});
TransactionCardCustom.args = {
  headerTitle: 'Featured',
  title: 'Special title treatment',
  subtitle: 'With supporting text below as a natural lead-in to additional content.',
  buttonOptions: {
    children: 'Primary button',
  },
};

export const TransactionCardCustomOverflow = Template.bind({});
TransactionCardCustomOverflow.args = {
  headerTitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, urna tempus rutrum pharetra, eros leo maximus ipsum, in viverra eros nunc congue felis. Proin ut quam faucibus, consequat justo eu, lobortis lorem. ',
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, urna tempus rutrum pharetra, eros leo maximus ipsum, in viverra eros nunc congue felis. Proin ut quam faucibus, consequat justo eu, lobortis lorem. ',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, urna tempus rutrum pharetra, eros leo maximus ipsum, in viverra eros nunc congue felis. Proin ut quam faucibus, consequat justo eu, lobortis lorem. ',
  buttonOptions: {
    children: 'Primary button',
  },
};
