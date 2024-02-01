import React from 'react';

import { TooltipContainer, TooltipContent } from '../../lib';

const metadata = {
  title: 'Production/Overlay/Tooltip',
  component: TooltipContainer,
  subcomponents: { TooltipContent },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
};

export default metadata;

const TemplateWithButton = ({ ...args }) => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <TooltipContainer {...args}>
      <TooltipContent>Hello tooltip info is here</TooltipContent>
      <button>TEST BUTTON</button>
    </TooltipContainer>
  </div>
);

const TemplateWithTextAndCustomTooltip = ({ ...args }) => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Roboto, sans-serif',
    }}
  >
    <TooltipContainer {...args}>
      <TooltipContent>
        <h1>test</h1>
        <h2>test</h2>
      </TooltipContent>
      TEST TEXT TEXT
    </TooltipContainer>
  </div>
);

export const TooltipNormalTop = TemplateWithButton.bind({});
TooltipNormalTop.args = { tooltipPosition: 'top' };
export const TooltipNormalBottom = TemplateWithButton.bind({});
TooltipNormalBottom.args = { tooltipPosition: 'bottom' };
export const TooltipNormalLeft = TemplateWithButton.bind({});
TooltipNormalLeft.args = { tooltipPosition: 'left' };
export const TooltipNormalRight = TemplateWithButton.bind({});
TooltipNormalRight.args = { tooltipPosition: 'right' };

export const TooltipWithTextAndCustomTooltip = TemplateWithTextAndCustomTooltip.bind({});
TooltipNormalTop.args = {
  tooltipPosition: 'top',
};
