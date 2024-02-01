import { config } from '@fortawesome/fontawesome-svg-core';
import Button from './Button';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import Loader from './Loader';

import '@fortawesome/fontawesome-svg-core/styles.css';

// Make sure this is before any other `fontawesome` API calls
// this is to make sure we follow the csp rules in our applications
config.autoAddCss = false;

export { Button, TextInput, Dropdown, Loader };
