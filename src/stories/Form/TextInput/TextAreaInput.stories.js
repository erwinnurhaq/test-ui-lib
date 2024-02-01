import React from 'react';

import { TextAreaInput } from '../../../lib';

const metadata = {
  title: 'Production/Form/TextInput/TextAreaInput',
  component: TextAreaInput,
};

export default metadata;

const inputDefaultOptions = {
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
  addonLeft: '',
  addonRight: '',
};

const TextAreaInputTemplate = ({ ...args }) => (
  <div
    style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TextAreaInput {...args} />
  </div>
);

export const TextAreaInputNoLabel = TextAreaInputTemplate.bind({});
TextAreaInputNoLabel.args = { placeholder: 'Placeholder' };

export const TextAreaInputNoLabelWithTooltip = TextAreaInputTemplate.bind({});
TextAreaInputNoLabelWithTooltip.args = {
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const TextAreaInputRegular = TextAreaInputTemplate.bind({});
TextAreaInputRegular.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: inputDefaultOptions,
};

export const TextAreaInputWithTooltip = TextAreaInputTemplate.bind({});
TextAreaInputWithTooltip.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const TextAreaInputDisabled = TextAreaInputTemplate.bind({});
TextAreaInputDisabled.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, disabled: true },
};

export const TextAreaInputRequired = TextAreaInputTemplate.bind({});
TextAreaInputRequired.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    required: true,
    requiredText: 'Required field',
  },
};

export const TextAreaInputWithAddonLeft = TextAreaInputTemplate.bind({});
TextAreaInputWithAddonLeft.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, addonLeft: '*' },
};

export const TextAreaInputWithAddonRight = TextAreaInputTemplate.bind({});
TextAreaInputWithAddonRight.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: { ...inputDefaultOptions, addonRight: '*' },
};

export const TextAreaInputGhost = TextAreaInputTemplate.bind({});
TextAreaInputGhost.args = {
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    ghost: true,
  },
};

export const TextAreaInputSkeleton = TextAreaInputTemplate.bind({});
TextAreaInputSkeleton.args = {
  label: 'Input Label',
  placeholder: 'Placeholder',
  options: {
    ...inputDefaultOptions,
    skeleton: true,
  },
};
