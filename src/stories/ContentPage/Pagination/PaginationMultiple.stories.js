import React from 'react';

import { PaginationMultiple } from '../../../lib';

const metadata = {
  title: 'Production/ContentPage/Pagination/PaginationMultiple',
  component: PaginationMultiple,
};

export default metadata;

const defaultOptions = {
  disabled: false,
  disabledPages: [],
  standalone: false,
};

const totalPages = 8;

const PaginationMultipleWrapper = ({ ...args }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <PaginationMultiple
      {...args}
      currentPage={currentPage}
      onChangePage={val => {
        console.log(val);
        setCurrentPage(val);
      }}
    />
  );
};

const Template = ({ ...args }) => <PaginationMultipleWrapper {...args} />;

export const PaginationMultipleNormal = Template.bind({});
PaginationMultipleNormal.args = { totalPages, options: defaultOptions };

export const PaginationMultipleDisabled = Template.bind({});
PaginationMultipleDisabled.args = { totalPages, options: { ...defaultOptions, disabled: true } };

export const PaginationMultipleDisabledPages = Template.bind({});
PaginationMultipleDisabledPages.args = {
  totalPages,
  options: { ...defaultOptions, disabledPages: [2, 3] },
};

export const PaginationMultipleStandalone = Template.bind({});
PaginationMultipleStandalone.args = {
  totalPages,
  options: { ...defaultOptions, standalone: true },
};
