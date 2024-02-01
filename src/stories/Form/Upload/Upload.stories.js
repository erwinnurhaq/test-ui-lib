import React from 'react';

import { Upload } from '../../../lib';

const metadata = {
  title: 'Production/Form/Upload',
  component: Upload,
};

export default metadata;

const Template = ({ ...args }) => <Upload {...args} />;

export const UploadNormal = Template.bind({});
UploadNormal.args = {
  title: 'Account Photo',
  subTitle: 'Only .jpg and .png files.',
  buttonLabel: 'Choose file',
  acceptFile: 'image/jpeg',
};

export const UploadDisabled = Template.bind({});
UploadDisabled.args = {
  title: 'Account Photo',
  subTitle: 'Only .jpg and .png files.',
  buttonLabel: 'Choose file',
  buttonDisabled: true,
  fileDisabledClose: true,
};
