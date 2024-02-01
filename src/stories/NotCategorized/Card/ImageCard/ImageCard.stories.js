import React from 'react';

import { ImageCard } from '../../../../lib';
import Pic from './pic.png';

const metadata = {
  title: 'Production/NotCategorized/Card/ImageCard',
  component: ImageCard,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#EBF1F5',
        },
      ],
    },
  },
};

export default metadata;

const Template = ({ ...args }) => <ImageCard {...args} />;

export const ImageCardNormal = Template.bind({});
ImageCardNormal.args = {};

export const ImageCardDisabled = Template.bind({});
ImageCardDisabled.args = { isDisabled: true };

export const ImageCardCustomImage = Template.bind({});
ImageCardCustomImage.args = { imageSrc: Pic, imageAlt: 'pic' };

export const ImageCardCustomImageDisabled = Template.bind({});
ImageCardCustomImageDisabled.args = { imageSrc: Pic, imageAlt: 'pic', isDisabled: true };

export const ImageCardCustomTextAndImage = Template.bind({});
ImageCardCustomTextAndImage.args = {
  imageSrc: Pic,
  imageAlt: 'pic',
  title: 'Card icon title',
  subtitle: 'This is handy supporting sub text',
};

export const ImageCardCustomOverflowTextAndImage = Template.bind({});
ImageCardCustomOverflowTextAndImage.args = {
  imageSrc: Pic,
  imageAlt: 'pic',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin mi a laoreet facilisis. Donec nec aliquet velit. Integer porta feugiat vestibulum.',
};

export const ImageCardCustomTextAndImageAndLink = Template.bind({});
ImageCardCustomTextAndImageAndLink.args = {
  imageSrc: Pic,
  imageAlt: 'pic',
  title: 'Card icon title',
  subtitle: 'This is handy supporting sub text',
  linkOptions: {
    children: 'Link example',
  },
};
