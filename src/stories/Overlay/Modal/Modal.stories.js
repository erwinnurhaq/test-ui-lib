import React from 'react';

import { Modal } from '../../../lib';
import './styles.css';

const metadata = {
  title: 'Production/Overlay/Modal',
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 700,
    },
  },
};

export default metadata;

const TemplateTitleContent = ({ ...args }) => (
  <Modal {...args} className="storybook-modal-short">
    <div className="storybook-modal-title">Transactional modal title</div>
    <div className="storybook-modal-content">
      Passive modal notifications should only appear if there is an action the user needs to address
      immediately. Passive modal notifications are persistent on screen.
    </div>
  </Modal>
);

const TemplateTitleContentLabel = ({ ...args }) => (
  <Modal {...args} className="storybook-modal-short">
    <div className="storybook-modal-optional-title">Optional label</div>
    <div className="storybook-modal-title">Transactional modal title</div>
    <div className="storybook-modal-content">
      Passive modal notifications should only appear if there is an action the user needs to address
      immediately. Passive modal notifications are persistent on screen.
    </div>
  </Modal>
);

const TemplateTitleContentImportant = ({ ...args }) => (
  <Modal {...args} className="storybook-modal-short">
    <div className="storybook-modal-title">Transactional modal title</div>
    <div className="storybook-modal-content">
      Passive modal notifications should only appear if there is an action the user needs to address
      immediately. Passive modal notifications are persistent on screen.
    </div>
    <div className="storybook-modal-important">
      Important directions or information can be SemiBold.
    </div>
  </Modal>
);

const TemplateFull = ({ ...args }) => (
  <Modal {...args}>
    <div className="storybook-modal-optional-title">Optional label</div>
    <div className="storybook-modal-title">Transactional modal title</div>
    <div className="storybook-modal-content">
      Passive modal notifications should only appear if there is an action the user needs to address
      immediately. Passive modal notifications are persistent on screen.
    </div>
    <div className="storybook-modal-important">
      Important directions or information can be SemiBold.
    </div>
  </Modal>
);

const TemplateFullShortWidthHeight = ({ ...args }) => (
  <Modal {...args} className="storybook-modal-short-width">
    <div className="storybook-modal-optional-title">Optional label</div>
    <div className="storybook-modal-title">Transactional modal title</div>
    <div className="storybook-modal-content">
      Passive modal notifications should only appear if there is an action the user needs to address
      immediately. Passive modal notifications are persistent on screen.
    </div>
    <div className="storybook-modal-important">
      Important directions or information can be SemiBold.
    </div>
  </Modal>
);

export const PassiveModalFull = TemplateFull.bind();
PassiveModalFull.args = {};

export const PassiveModalFullShort = TemplateFullShortWidthHeight.bind();
PassiveModalFullShort.args = {};

export const PassiveTitleContent = TemplateTitleContent.bind();
PassiveTitleContent.args = {};

export const PassiveTitleContentLabel = TemplateTitleContentLabel.bind();
PassiveTitleContentLabel.args = {};

export const PassiveTitleContentImportant = TemplateTitleContentImportant.bind();
PassiveTitleContentImportant.args = {};

export const PassiveModalFullCritical = TemplateTitleContent.bind();
PassiveModalFullCritical.args = { colorType: 'danger' };

export const TransactionalModalFullWithButtons = TemplateFull.bind();
TransactionalModalFullWithButtons.args = {
  buttonOptions: {
    showButtons: true,
    showSkipButton: false,
    skipButtonText: 'Skip',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    skipButtonOnClick: () => {},
    cancelButtonOnClick: () => {},
    confirmButtonOnClick: () => {},
    skipButtonDisabled: false,
    cancelButtonDisabled: false,
    confirmButtonDisabled: false,
  },
};

export const CriticalModalFullWithButtons = TemplateFull.bind();
CriticalModalFullWithButtons.args = {
  colorType: 'danger',
  buttonOptions: {
    showButtons: true,
    showSkipButton: true,
    skipButtonText: 'Skip',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    skipButtonOnClick: () => {},
    cancelButtonOnClick: () => {},
    confirmButtonOnClick: () => {},
    skipButtonDisabled: false,
    cancelButtonDisabled: false,
    confirmButtonDisabled: false,
  },
};
