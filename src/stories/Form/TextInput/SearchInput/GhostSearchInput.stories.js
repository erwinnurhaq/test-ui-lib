import React from 'react';

import { SearchInput } from '../../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/SearchInput/GhostSearchInput',
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

const GhostSearchInputTemplate = ({ ...args }) => {
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

export const GhostSearchInput = GhostSearchInputTemplate.bind({});
GhostSearchInput.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, ghost: true },
};

export const GhostSearchInputDisabled = GhostSearchInputTemplate.bind({});
GhostSearchInputDisabled.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, ghost: true, disabled: true },
};

export const GhostSearchInputLoading = GhostSearchInputTemplate.bind({});
GhostSearchInputLoading.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, ghost: true, loading: true },
};

export const GhostSearchInputSkeleton = GhostSearchInputTemplate.bind({});
GhostSearchInputSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    ghost: true,
    skeleton: true,
  },
};
