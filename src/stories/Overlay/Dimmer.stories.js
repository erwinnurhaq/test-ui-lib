import React from 'react';

import { Dimmer } from '../../lib';

const metadata = {
  title: 'Production/Overlay/Dimmer',
  component: Dimmer,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 700,
    },
  },
};

export default metadata;

const Template = ({ ...args }) => (
  <div>
    <Dimmer {...args} />
    <div style={{ backgroundColor: '#DAEBFD', height: 100, marginBottom: 20 }} />
    <div style={{ backgroundColor: '#DAEBFD', height: 100, marginBottom: 20 }} />
    <div style={{ backgroundColor: '#DAEBFD', height: 100, marginBottom: 20 }} />
    <div
      style={{
        backgroundColor: '#FFFFFF',
        height: 200,
        width: 300,
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: -100,
        marginLeft: -150,
        zIndex: 99999,
        padding: 40,
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      Test
    </div>
  </div>
);

export const DimmerSimple = Template.bind({});
DimmerSimple.args = {};

export const DimmerBlur = Template.bind({});
DimmerBlur.args = { isBlurred: true };
