import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

import { TextInput } from '../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/TextInput',
  component: TextInput,
};

export default metadata;

const inputDefaultOptions = {
  hideNumberArrowStep: false,
  tooltipContent: '',
  tooltipPosition: 'top',
  hideLabel: false,
  hideInfo: false,
  fluid: false,
  disabled: false,
  required: false,
  skeleton: false,
  ghost: false,
  requiredText: '',
  prefix: '',
  suffix: '',
  addonLeft: '',
  addonRight: '',
};

const TextInputTemplate = ({ ...args }) => (
  <div
    style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TextInput {...args} />
  </div>
);

export const TextInputNoLabel = TextInputTemplate.bind({});
TextInputNoLabel.args = { placeholder: 'Placeholder' };

export const TextInputNoLabelWithTooltip = TextInputTemplate.bind({});
TextInputNoLabelWithTooltip.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const TextInputRegular = TextInputTemplate.bind({});
TextInputRegular.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: inputDefaultOptions,
};

export const TextInputWithTooltip = TextInputTemplate.bind({});
TextInputWithTooltip.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const TextInputDisabled = TextInputTemplate.bind({});
TextInputDisabled.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, disabled: true },
};

export const TextInputRequired = TextInputTemplate.bind({});
TextInputRequired.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    required: true,
    requiredText: 'Required field',
  },
};

const TextInputWithPrefixIconTemplate = ({ ...args }) => (
  <div
    style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TextInput
      {...args}
      options={{
        ...args.options,
        prefix: <FaRegUserCircle className="psui-h-5 psui-w-5" />,
      }}
    />
  </div>
);

export const TextInputWithPrefixIcon = TextInputWithPrefixIconTemplate.bind({});
TextInputWithPrefixIcon.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    prefix: 'String || React Node',
  },
};

const TextInputWithSuffixIconTemplate = ({ ...args }) => (
  <div
    style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TextInput
      {...args}
      options={{
        ...args.options,
        suffix: <FaRegUserCircle className="psui-h-5 psui-w-5" />,
      }}
    />
  </div>
);

export const TextInputWithSuffixIcon = TextInputWithSuffixIconTemplate.bind({});
TextInputWithSuffixIcon.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    suffix: 'String || React Node',
  },
};

export const TextInputWithAddonLeft = TextInputTemplate.bind({});
TextInputWithAddonLeft.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, addonLeft: 'http://' },
};

export const TextInputWithAddonRight = TextInputTemplate.bind({});
TextInputWithAddonRight.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, addonRight: '.com' },
};

export const TextInputTypePassword = TextInputTemplate.bind({});
TextInputTypePassword.args = {
  type: 'password',
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: inputDefaultOptions,
};

export const TextInputTypeNumber = TextInputTemplate.bind({});
TextInputTypeNumber.args = {
  type: 'number',
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: inputDefaultOptions,
};

export const TextInputTypeNumberWithPrefixSuffix = TextInputTemplate.bind({});
TextInputTypeNumberWithPrefixSuffix.args = {
  type: 'number',
  label: 'Input Label',
  placeholder: 'Temperature',
  options: {
    ...inputDefaultOptions,
    prefix: 'Max',
    suffix: 'ºC',
  },
};

export const TextInputSkeleton = TextInputTemplate.bind({});
TextInputSkeleton.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    skeleton: true,
  },
};

const TextInputControllableTemplate = ({ ...args }) => {
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
      <TextInput {...args} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export const TextInputNumberControllable = TextInputControllableTemplate.bind({});
TextInputNumberControllable.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  type: 'number',
  options: inputDefaultOptions,
};
