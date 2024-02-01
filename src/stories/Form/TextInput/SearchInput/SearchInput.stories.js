import React from 'react';

import { SearchInput } from '../../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/SearchInput/SearchInput',
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

const SearchInputTemplate = ({ ...args }) => {
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

export const SearchInputRegular = SearchInputTemplate.bind({});
SearchInputRegular.args = {
  placeholder: 'Placeholder',
  options: inputDefaultOptions,
};

export const SearchInputDisabled = SearchInputTemplate.bind({});
SearchInputDisabled.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, disabled: true },
};

export const SearchInputLoading = SearchInputTemplate.bind({});
SearchInputLoading.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, loading: true },
};

export const SearchInputWithActButton = SearchInputTemplate.bind({});
SearchInputWithActButton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    withActButton: true,
    onActButtonClick: () => alert('Clicked'),
  },
};

export const SearchInputGhost = SearchInputTemplate.bind({});
SearchInputGhost.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, ghost: true },
};

export const SearchInputSmall = SearchInputTemplate.bind({});
SearchInputSmall.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true },
};

export const SearchInputSkeleton = SearchInputTemplate.bind({});
SearchInputSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    skeleton: true,
  },
};
