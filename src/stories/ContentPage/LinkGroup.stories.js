import React from 'react';

import { LinkGroup, Link, ControlledLink } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/Link/LinkGroup',
  component: LinkGroup,
};

export default metadata;

const Template = ({ ...args }) => (
  <LinkGroup {...args}>
    <Link>Link example</Link>
    <Link isDisabled>Link example</Link>
  </LinkGroup>
);
const TemplateWithControlledLink = ({ ...args }) => (
  <LinkGroup {...args}>
    <ControlledLink>Link example</ControlledLink>
    <ControlledLink isDisabled>Link example</ControlledLink>
  </LinkGroup>
);
const TemplateWithMixedLink = ({ ...args }) => (
  <LinkGroup {...args}>
    <Link>Link example</Link>
    <Link isDisabled>Link example</Link>
    <ControlledLink>Link example</ControlledLink>
    <ControlledLink isDisabled>Link example</ControlledLink>
  </LinkGroup>
);

export const LinkGroupHorizontal = Template.bind({});
LinkGroupHorizontal.args = {};

export const LinkGroupHorizontalWithControlledLink = TemplateWithControlledLink.bind({});
LinkGroupHorizontalWithControlledLink.args = {};

export const LinkGroupHorizontalWithMixedLink = TemplateWithMixedLink.bind({});
LinkGroupHorizontalWithMixedLink.args = {};

export const LinkGroupVertical = Template.bind({});
LinkGroupVertical.args = { isVertical: true };

export const LinkGroupVerticalWithControlledLink = TemplateWithControlledLink.bind({});
LinkGroupVerticalWithControlledLink.args = { isVertical: true };

export const LinkGroupVerticalWithMixedLink = TemplateWithMixedLink.bind({});
LinkGroupVerticalWithMixedLink.args = { isVertical: true };
