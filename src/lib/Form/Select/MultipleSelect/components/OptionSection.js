import React from 'react';
import PropTypes from 'prop-types';

import RowItem from './RowItem';
import SearchRow from './SearchRow';
import OptionRows from './OptionRows';

function OptionSection({
  isShow,
  testId,
  data,
  isValueChecked,
  onSelectOption,
  searchPlaceholder,
  noDataText,
  noItemMatchText,
}) {
  const [search, setSearch] = React.useState('');

  const unSelectedData = React.useMemo(
    () =>
      data
        .filter(item => !isValueChecked(item.value))
        .filter(item => item?.name.match(new RegExp(search, 'gi'))),
    [data, search, isValueChecked]
  );

  const selectedData = React.useMemo(() => data.filter(item => isValueChecked(item.value)), [
    data,
    isValueChecked,
  ]);

  if (!isShow) return null;

  if (data.length === 0) {
    return (
      <div className="psui-select-multiple-options__container">
        <RowItem testId={testId ? `${testId}-no-data` : null}>{noDataText}</RowItem>
      </div>
    );
  }

  return (
    <div className="psui-select-multiple-options__container">
      <SearchRow
        testId={testId}
        value={search}
        onChange={setSearch}
        placeholder={searchPlaceholder}
      />
      {selectedData.length > 0 && (
        <>
          <OptionRows
            testId={testId}
            data={selectedData}
            isChecked={isValueChecked}
            onClick={onSelectOption}
          />
          <hr className="psui-select-multiple-options__divider" />
        </>
      )}
      {unSelectedData.length === 0 && search.length > 0 && (
        <RowItem testId={testId ? `${testId}-no-item-match` : null}>{noItemMatchText}</RowItem>
      )}
      {unSelectedData.length > 0 && (
        <OptionRows
          testId={testId}
          data={unSelectedData}
          isChecked={isValueChecked}
          onClick={onSelectOption}
        />
      )}
    </div>
  );
}

OptionSection.propTypes = {
  testId: PropTypes.string,
  isShow: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ).isRequired,
  isValueChecked: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  noDataText: PropTypes.string.isRequired,
  noItemMatchText: PropTypes.string.isRequired,
};

OptionSection.defaultProps = {
  testId: null,
};

export default OptionSection;
