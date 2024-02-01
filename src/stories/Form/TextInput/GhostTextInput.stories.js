import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

import { TextInput } from '../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/GhostTextInput',
  component: TextInput,
};

export default metadata;

const ghostInputDefaultOptions = {
  tooltipContent: '',
  tooltipPosition: 'top',
  hideLabel: false,
  hideInfo: false,
  fluid: false,
  disabled: false,
  required: false,
  skeleton: false,
  ghost: true,
  requiredText: '',
  prefix: '',
  suffix: '',
  addonLeft: '',
  addonRight: '',
};

const GhostTextInputTemplate = ({ ...args }) => (
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

export const GhostTextInputWithLabel = GhostTextInputTemplate.bind({});
GhostTextInputWithLabel.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: ghostInputDefaultOptions,
};

export const GhostTextInputWithLabelAndTooltip = GhostTextInputTemplate.bind({});
GhostTextInputWithLabelAndTooltip.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...ghostInputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const GhostTextInputRegular = GhostTextInputTemplate.bind({});
GhostTextInputRegular.args = {
  placeholder: 'Placeholder',
  options: ghostInputDefaultOptions,
};

const GhostTextInputWithPrefixIconTemplate = ({ ...args }) => (
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

export const GhostTextInputWithPrefixIcon = GhostTextInputWithPrefixIconTemplate.bind({});
GhostTextInputWithPrefixIcon.args = {
  placeholder: 'Placeholder',
  options: {
    ...ghostInputDefaultOptions,
    prefix: 'String || React Node',
  },
};

export const GhostTextInputWithTooltip = GhostTextInputWithPrefixIconTemplate.bind({});
GhostTextInputWithTooltip.args = {
  placeholder: 'Placeholder',
  options: { ...ghostInputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const GhostTextInputDisabled = GhostTextInputWithPrefixIconTemplate.bind({});
GhostTextInputDisabled.args = {
  placeholder: 'Placeholder',
  options: { ...ghostInputDefaultOptions, disabled: true },
};

export const GhostTextInputRequired = GhostTextInputWithPrefixIconTemplate.bind({});
GhostTextInputRequired.args = {
  placeholder: 'Placeholder',
  options: {
    ...ghostInputDefaultOptions,
    required: true,
    requiredText: 'Required field',
  },
};

const GhostTextInputWithSuffixIconTemplate = ({ ...args }) => (
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

export const GhostTextInputWithSuffixIcon = GhostTextInputWithSuffixIconTemplate.bind({});
GhostTextInputWithSuffixIcon.args = {
  placeholder: 'Placeholder',
  options: {
    ...ghostInputDefaultOptions,
    suffix: 'String || React Node',
  },
};

export const GhostTextInputTypePassword = GhostTextInputTemplate.bind({});
GhostTextInputTypePassword.args = {
  type: 'password',
  placeholder: 'Placeholder',
  options: ghostInputDefaultOptions,
};

export const GhostTextInputTypeNumber = GhostTextInputTemplate.bind({});
GhostTextInputTypeNumber.args = {
  type: 'number',
  placeholder: 'Placeholder',
  options: ghostInputDefaultOptions,
};

export const GhostTextInputTypeNumberWithPrefixSuffix = GhostTextInputTemplate.bind({});
GhostTextInputTypeNumberWithPrefixSuffix.args = {
  type: 'number',
  placeholder: 'Temperature',
  options: {
    ...ghostInputDefaultOptions,
    prefix: 'Max',
    suffix: 'ºC',
  },
};

export const GhostTextInputSkeleton = GhostTextInputTemplate.bind({});
GhostTextInputSkeleton.args = {
  placeholder: 'Placeholder',
  options: {
    ...ghostInputDefaultOptions,
    skeleton: true,
  },
};
