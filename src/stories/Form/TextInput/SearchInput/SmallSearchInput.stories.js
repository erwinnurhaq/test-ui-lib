import React from 'react';

import { SearchInput } from '../../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/SearchInput/SmallSearchInput',
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

const SmallSearchInputTemplate = ({ ...args }) => {
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

export const SmallSearchInput = SmallSearchInputTemplate.bind({});
SmallSearchInput.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true },
};

export const SmallSearchInputDisabled = SmallSearchInputTemplate.bind({});
SmallSearchInputDisabled.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true, disabled: true },
};

export const SmallSearchInputLoading = SmallSearchInputTemplate.bind({});
SmallSearchInputLoading.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true, loading: true },
};

export const SmallSearchInputSkeleton = SmallSearchInputTemplate.bind({});
SmallSearchInputSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    small: true,
    skeleton: true,
  },
};
