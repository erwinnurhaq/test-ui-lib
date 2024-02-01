import React from 'react';

import { SearchInput } from '../../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/SearchInput/SearchInputWithActButton',
  component: SearchInput,
};

export default metadata;

const inputDefaultOptions = {
  loading: false,
  fluid: false,
  disabled: false,
  skeleton: false,
  ghost: false,
  small: false,
  withActButton: false,
  onActButtonClick: () => {},
  onClearValue: null,
};

const SearchInputWithActButtonTemplate = ({ ...args }) => {
  const [value, setValue] = React.useState('');
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchInput {...args} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export const SearchInputWithActButton = SearchInputWithActButtonTemplate.bind({});
SearchInputWithActButton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    withActButton: true,
    onActButtonClick: () => alert('Clicked'),
  },
};

export const SearchInputWithActButtonDisabled = SearchInputWithActButtonTemplate.bind({});
SearchInputWithActButtonDisabled.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    withActButton: true,
    onActButtonClick: () => alert('Clicked'),
    disabled: true,
  },
};

export const SearchInputWithActButtonLoading = SearchInputWithActButtonTemplate.bind({});
SearchInputWithActButtonLoading.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    withActButton: true,
    onActButtonClick: () => alert('Clicked'),
    loading: true,
  },
};

export const SearchInputWithActButtonSkeleton = SearchInputWithActButtonTemplate.bind({});
SearchInputWithActButtonSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    withActButton: true,
    onActButtonClick: () => alert('Clicked'),
    skeleton: true,
  },
};
