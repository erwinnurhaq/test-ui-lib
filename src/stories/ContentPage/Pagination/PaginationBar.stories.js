import React from 'react';

import { PaginationBar } from '../../../lib';

const metadata = {
  title: 'Production/ContentPage/Pagination/PaginationBar',
  component: PaginationBar,
};

export default metadata;

const defaultOptions = {
  disabled: false,
  rowSizes: [5, 10, 20, 50, 100],
  rowSizesLabel: 'Items per page',
  totalItemCountInfo: null,
  formatItemCountInfo: null,
  formatPageCountInfo: null,
  hideBarBorder: false,
};

const totalItems = 80;

const PaginationBarWrapper = ({ ...args }) => {
  const [totalPages, setTotalPages] = React.useState(8);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentRowSize, setCurrentRowSize] = React.useState(10);

  return (
    <PaginationBar
      {...args}
      totalPages={totalPages}
      currentRowSize={currentRowSize}
      currentPage={currentPage}
      onChangePage={val => {
        console.log(val);
        setCurrentPage(val);
      }}
      onChangeRowSize={val => {
        console.log(val);
        setTotalPages(Math.ceil(totalItems / val));
        setCurrentRowSize(val);
        setCurrentPage(1);
      }}
    />
  );
};

const Template = ({ ...args }) => <PaginationBarWrapper {...args} />;

export const PaginationBarNormal = Template.bind({});
PaginationBarNormal.args = { options: defaultOptions };

export const PaginationBarDisabled = Template.bind({});
PaginationBarDisabled.args = {
  options: { ...defaultOptions, disabled: true },
};

export const PaginationBarWithItemCount = Template.bind({});
PaginationBarWithItemCount.args = {
  options: { ...defaultOptions, totalItemCountInfo: totalItems },
};

export const PaginationBarWithCustomItemCount = Template.bind({});
PaginationBarWithCustomItemCount.args = {
  options: {
    ...defaultOptions,
    totalItemCountInfo: totalItems,
    formatItemCountInfo: (lower, upper, total) =>
      `Item ke ${lower} sampai ${upper} dari total ${total} item`,
  },
};

export const PaginationBarWithCustomPageCount = Template.bind({});
PaginationBarWithCustomPageCount.args = {
  options: {
    ...defaultOptions,
    formatPageCountInfo: (current, total) => `halaman ke ${current} dari ${total}`,
  },
};

export const PaginationBarCustomRowSize = Template.bind({});
PaginationBarCustomRowSize.args = {
  options: { ...defaultOptions, rowSizes: [5, 20, 40, 60, 80] },
};

export const PaginationBarCustomRowSizeLabel = Template.bind({});
PaginationBarCustomRowSizeLabel.args = {
  options: { ...defaultOptions, rowSizes: [5, 20, 40, 60, 80], rowSizesLabel: 'Jumlah baris' },
};
