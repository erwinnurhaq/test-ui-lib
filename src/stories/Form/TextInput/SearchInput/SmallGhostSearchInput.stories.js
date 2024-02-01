import React from 'react';

import { SearchInput } from '../../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/SearchInput/SmallGhostSearchInput',
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

const SmallGhostSearchInputTemplate = ({ ...args }) => {
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

export const SmallGhostSearchInput = SmallGhostSearchInputTemplate.bind({});
SmallGhostSearchInput.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true, ghost: true },
};

export const SmallGhostSearchInputDisabled = SmallGhostSearchInputTemplate.bind({});
SmallGhostSearchInputDisabled.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true, ghost: true, disabled: true },
};

export const SmallGhostSearchInputLoading = SmallGhostSearchInputTemplate.bind({});
SmallGhostSearchInputLoading.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, small: true, ghost: true, loading: true },
};

export const SmallGhostSearchInputSkeleton = SmallGhostSearchInputTemplate.bind({});
SmallGhostSearchInputSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    small: true,
    ghost: true,
    skeleton: true,
  },
};
