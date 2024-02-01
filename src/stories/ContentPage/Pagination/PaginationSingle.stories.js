import React from 'react';

import { PaginationSingle } from '../../../lib';

const metadata = {
  title: 'Production/ContentPage/Pagination/PaginationSingle',
  component: PaginationSingle,
};

export default metadata;

const defaultOptions = {
  disabled: false,
  standalone: false,
  showStartButton: false,
  showEndButton: false,
  onStartButtonClick: null,
  onEndButtonClick: null,
  formatPageCountInfo: null,
};

const PaginationSingleWrapper = ({ ...args }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <PaginationSingle
      {...args}
      currentPage={currentPage}
      onChangePage={val => {
        console.log(val);
        setCurrentPage(val);
      }}
    />
  );
};

const Template = ({ ...args }) => <PaginationSingleWrapper {...args} />;

export const PaginationSingleNormal = Template.bind({});
PaginationSingleNormal.args = { totalPages: 4, options: defaultOptions };

export const PaginationSingleDisabled = Template.bind({});
PaginationSingleDisabled.args = { totalPages: 4, options: { ...defaultOptions, disabled: true } };

export const PaginationSingleStandalone = Template.bind({});
PaginationSingleStandalone.args = {
  totalPages: 4,
  options: { ...defaultOptions, standalone: true },
};

export const PaginationSingleUnknownPages = Template.bind({});
PaginationSingleUnknownPages.args = { options: defaultOptions };

export const PaginationSingleWithStartEndButton = Template.bind({});
PaginationSingleWithStartEndButton.args = {
  totalPages: 4,
  options: { ...defaultOptions, showStartButton: true, showEndButton: true },
};

export const PaginationSingleStandaloneWithStartEndButton = Template.bind({});
PaginationSingleStandaloneWithStartEndButton.args = {
  totalPages: 4,
  options: { ...defaultOptions, standalone: true, showStartButton: true, showEndButton: true },
};

export const PaginationSingleWithStartEndButtonUnknownPages = Template.bind({});
PaginationSingleWithStartEndButtonUnknownPages.args = {
  options: { ...defaultOptions, showStartButton: true, showEndButton: true },
};

export const PaginationSingleStandaloneWithStartEndButtonUnknownPages = Template.bind({});
PaginationSingleStandaloneWithStartEndButtonUnknownPages.args = {
  options: { ...defaultOptions, standalone: true, showStartButton: true, showEndButton: true },
};

export const PaginationSingleNormalCustomFormatPageCount = Template.bind({});
PaginationSingleNormalCustomFormatPageCount.args = {
  totalPages: 4,
  options: {
    ...defaultOptions,
    formatPageCountInfo: (current, total) => `Halaman ${current} dari ${total}`,
  },
};
