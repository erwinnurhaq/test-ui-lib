# CHANGELOG

# CHANGELOG

## v1.9.6

- Bug Fix.
  - Missing Toggle component checked props.

## v1.9.5

- Export existing OverflowMenuItemWrapper component.

## v1.9.4

- New TabAlt component.
- New Portals component.

## v1.9.3

### BREAKING CHANGES!!!

- Checkbox, Toggle, Radio
  - **[Breaking Changes]** change props "onClick" to native input "onChange".
  - **[Breaking Changes]** omit props "value" and "checked", change to spreaded input args.
    - **[Breaking Changes]** props "id" is required to be able to click on label.

### UPDATES

- Checkbox, Toggle, Radio
  - Add props "colorType" variant "default" | "yellow". Default to be "default" (dark).
  - Add props "isLabelInside" (for Toggle component).
  - **[Breaking Changes]** change props "onClick" to native input "onChange".
  - **[Breaking Changes]** omit props "value" and "checked", change to spreaded input args.
    - **[Breaking Changes]** props "id" is required to be able to click on label.
    - Spread omitted input args.
    - Forwarded Ref.
- PrimaryButton
  - Change disabled background color to follow its color type.
  - Add props "isFluid".
  - Spread omitted button args.
  - Forwarded Ref.
- SecondaryButton & GhostButton
  - Add props "colorType" variant "default" | "yellow" | "danger". Default to be "default" (dark).
  - Add props "isFluid".
  - Spread omitted button args.
  - Forwarded Ref.
- IconButton & SkeletonButton
  - Spread omitted button args.
  - Forwarded Ref.
- Badges
  - Add more color variant "dark-green" | "dark-red".
  - Spread omitted div args.
  - Forwarded Ref.
- Select
  - Spread omitted select args.
  - Forwarded Ref.
- TextInputContainer **(New Exported as FieldContainer)**
  - Add props "hideLabel" and "hideInfo" to hide label container (top) and info container (bottom).
  - Add {testId}-wrapper.
  - Spread omitted div args.
- TextInput
  - Add props "hideNumberArrowStep" for input type number.
- TextAreaInput
  - Add props "maxLength"
  - Spread omitted input args.
- SearchInput
  - Spread omitted input args.
- OverflowMenu
  - Some improvement
- PaginationBar
  - Add props "hideBarBorder".
  - fix some styling.
  - Spread omitted div args.
- Overal style update for the skeletons.
- Utility
  - Add "combineClassNames" utility to merge conditional classnames.

## v1.9.2

- fixed most TimePicker component issues
- fixed Radio, Checkbox, Toggle onChange warning
- fixed Breadcrumb missing key warning
- updated Checkbox indeterminate behaviour

## v1.9.1

- fixed DatePicker and DateRangePicker wrong date and day alignment

## v1.9.0

- updating proptypes for badges to includes node

!BREAKING CHANGE!

- we are only using esmodule now to make sure its tree-shakeable

## v1.8.2

- fix testId defaultProps for Tab, Dimmer and Modal
- fix id defaultProps for Badges and Breadcrumb

## v1.8.1

- Fixing issue with OverflowMenu styling and children items not working after build
- Cleaning up className in pagination components
- Added autoWidth props into the select dropdown for choosing page in PaginationBar components
- Fixing error with defaultProps for pagination components
- Updating GhostSmallSelect, TextInput ghost, and SearchInput ghost background color to be transparent

## v1.8.0

- Doing npm audit fix
- Fixing build issue caused by Number.isNaN in usePrefixSuffixWidth.js by adding builtIns: false in package.json babel minify preset option
- Added Upload component
- Added PaginationBar, PaginationBar, PaginationMultiple components
- Some update and fixes:
  - removed isFluid helpers functions from Form folder
  - added helpers functions (checkClassName, checkFluid, checkNullishObj)
  - OverflowMenu:
    - added customTrigger props
    - added additional testId for menu and overlay
    - updating className handler so it will not causing additional space
    - removing default width and height in .psui-overflowmenu-container
    - renaming .psui-overflowmenu-menu-item\_\_danger -> .psui-overflowmenu-menu-item--danger
    - added story for customTrigger props
  - TextInput common components:
    - NumberInputArrow:
      - added testId props
      - added testId for increment and decrement button
    - PasswordInputEye:
      - added testId props
      - added testId for eye button
    - TextInputTooltip:
      - added testId props
      - added testId for tooltip and tooltip content
    - TextInputSkeleton:
      - added testId props
      - added testId for skeleton
      - fixing className implementation to make sure it doesn't have additional space
      - changing isFluid implementation to checkFluid
    - TextInputContainer:
      - added testId props
      - added testId for text input tooltip and required text
      - updating id props default value to null from empty string to fix empty attribute issue
      - fixing className implementation to make sure it doesn't have additional space
      - renaming isInputHasTooltipInRightSide -> isWithTooltipRightSide
      - changing isFluid implementation to checkFluid
    - usePrefixSuffixWidth:
      - updating prefixWidth and suffixWidth default value to null
      - updating implementation to put null instead of empty string when prefixRef or suffixRef is empty
      - added isNaN checker for width property of prefixRef and suffixRef
  - TextInput:
    - updating testId and id props default value to null from empty string to fix empty attribute issue
    - added testId in password input eye, number input arrows, text input skeleton and text input container
    - fixing paddingLeft and paddingRight issue when the prefixWidth/suffixWidth is NaN by using checkNullishObj
  - TextAreaInput:
    - updating testId and id props default value to null from empty string to fix empty attribute issue
    - added test id in text input skeleton and text input container
  - SearchInput:
    - updating testId, name and id props default value to null from empty string to fix empty attribute issue
    - updating onActButtonClick props default value to null from empty function
    - added testId in text input skeleton, loader, clear button and act button
    - fixing className implementation to make sure it doesn't have additional space
    - changing isFluid implementation to checkFluid
  - Select common components:
    - SelectSkeleton:
      - added testId props
      - added testId in skeleton
      - fixing className implementation to make sure it doesn't have additional space
      - changing isFluid implementation to checkFluid
    - SelectTooltip:
      - added testId props
      - added testId in tooltip container and tooltip content
  - Select:
    - updating name and id props default value to null from empty string to fix empty attribute issue
    - added testId for select skeleton, select tooltip and required text
    - fixing className implementation to make sure it doesn't have additional space
    - changing isFluid implementation to checkFluid
    - added autoWidth props
    - cleanup defaultOption in story
    - added fluid and autoWidth props story
  - SmallSelect:
    - updating name and id props default value to null from empty string to fix empty attribute issue
    - added testId in select skeleton and select tooltip
    - fixing className implementation to make sure it doesn't have additional space
    - changing isFluid implementation to checkFluid
    - added autoWidth props
    - cleanup defaultOption in story
    - added fluid and autoWidth props story
  - GhostSmallSelect:
    - updating name and id props default value to null from empty string to fix empty attribute issue
    - added testId in select skeleton and select tooltip
    - fixing className implementation to make sure it doesn't have additional space
    - changing isFluid implementation to checkFluid
    - added autoWidth props
    - updating Template in story
    - cleanup defaultOption in story
    - added fluid and autoWidth props story
  - MultipleSelect: - common components: - added OptionRows, RowItem and SearchRow components - OptionSections: - cleaned up OptionSection to move OptionRows, RowItem and SearchRow to other files - added testId props for OptionSection - added testId for OptionRows, RowItem and SearchRow - updating name and id props default value to null from empty string to fix empty attribute issue - added testId for select skeleton, select tooltip, overlay, option section and required text - fixing className implementation to make sure it doesn't have additional space - changing isFluid implementation to checkFluid - added autoWidth props - cleanup defaultOption in story - added fluid and autoWidth props story
    select components styling: - removing .psui-select-container-regular**with-tooltip and .psui-select-container-multiple**with-tooltip - removing default width for .psui-select-container-regular and .psui-select-container-multiple - added default width and removing full width for .psui-select-wrapper-regular and .psui-select-wrapper-multiple - added more padding right for .psui-select-small and .psui-select-ghost-small - added default width for .psui-select-skeleton-regular and .psui-select-skeleton-multiple - added ellipsis for text overflow in .psui-select-multiple-options**search-input and added more padding into it as well - added height for .psui-select-multiple-option**row-wrapper::-webkit-scrollbar

## v1.7.0

- Added DatePicker, DateRangePicker, TimePicker

!BREAKING CHANGE!

- removed reset css and archived component css from 'prospace-ui/dist/styles/index.css' to 'prospace-ui/dist/styles/resets.css' and 'prospace-ui/dist/styles/archive.css'
  so you need to import them first before 'prospace-ui/dist/styles/index.css', the reasons we do this is to minimize conflicting style if the user added this library to
  their projects

## v1.6.0

- Added Breadcrumb

## v1.5.0

- Update | bumping up to v1.5.0
- Added Link, ControlledLink, and LinkGroup
- Added IconCard, ImageCard and TransactionCard
- Added Overflow Menu
- Updating on how PrimaryButton handle className prop
- Added Avatar, AvatarImage, AvatarInitial

## v1.4.1

- fixing slider z index

## v1.4.0

- Doing npm audit fix
- Fixed text input bug when some input can still be happen even when the input is disabled
- Fixed number input bug when onChange props doesn't run when using arrow to update input
- Added Badges
- Added Accordion
- Added SearchInput
- Added Slider
- Reorganizing folders (should not affect the library)

## v1.3.0

- Added TextInput
- Added TextAreaInput
- Added ProgressIndicator

## v1.2.0

- Doing npm audit fix
- Added colorType props to PrimaryButton
- Updated IconButton tooltip styling
- Added ContentSwitcher
- Added Dimmer
- Added Modal
- Updated Tab component testId and className placement
- Added Tooltip
- Added Select components

## v1.1.0

- Added Tab component
- Added CheckBox, Radio and Toggle component
- doing dependencies update

## v1.0.1

- doing npm audit fix

## v1.0.0

Be careful when installing v1.0.0 into the application. we have added css reset from semantic UI in that version so make sure to check your application if there is any css conflict.

if you are using the components from 0.1.11-alpha please change your import to 'prospace-ui/dist/archive' because the old components has been moved into there.

moved all css into 'prospace-ui/dist/styles/index.css' so please import that first before using any of the component

Change list:

- Updated storybook and other dependencies version
- Added react >= 16 and react-dom >= 16 to peerDepencies (possible breaking change if your app still use react or react dom < 16)
- Added tailwind (possible breaking change because the addition of the css resets)
- Added react-icons (but still keeping the fontawesome lib for supporting old components)
- Moved old components to the 'prospace-ui/dist/archive' path (breaking change)
- Updating proptypes of some of the old components (possible breaking change):
  - Button
  - Dropdown
  - TextInput
- Added 2 components from design system:
  - Loading
  - Buttons
- Add CHANGELOG.md
- Add git hook for linting and running the unit tests
- Add SKIP_PREFLIGHT_CHECK=true to test scripts (this is temporary fix until react-scripts has an updated babel-loader version so the tests might not work properly) (https://github.com/storybookjs/storybook/issues/14416)
- moving css to external files that need to be imported manually from 'prospace-ui/dist/styles/index.css'
