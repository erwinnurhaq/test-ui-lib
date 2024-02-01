import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';
import Button from '../../Buttons/SecondaryButton';

function Upload({
  testId,
  className,
  title,
  subTitle,
  buttonLabel,
  buttonTestId,
  buttonClassName,
  buttonDisabled,
  showFileClose,
  fileDisabledClose,
  acceptFile,
  handleFile,
  onFileClose,
}) {
  const [fileName, setFileName] = React.useState('');
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const file = event.target.files[0];
    setFileName(file.name);
    if (handleFile) {
      handleFile(file);
    }
  };

  const handleClearFile = () => {
    if (!fileDisabledClose) {
      setFileName('');
      hiddenFileInput.current.value = '';
      if (onFileClose) {
        onFileClose();
      }
    }
  };

  return (
    <div data-testid={testId} className={`psui-upload ${className}`}>
      {title && <p className={'psui-upload-title psui-type-label'}>{title}</p>}
      {subTitle && <p className={'psui-upload-subTitle psui-type-label'}>{subTitle}</p>}
      <Button
        testId={buttonTestId}
        className={`psui-upload-button ${buttonClassName}`}
        type="button"
        isDisabled={buttonDisabled}
        onClick={handleClick}
      >
        {buttonLabel}
      </Button>
      <input
        type="file"
        multiple={false}
        accept={acceptFile}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      {fileName && (
        <div className={'psui-upload-file'}>
          <p className="psui-type-label">{fileName}</p>
          {showFileClose && (
            <IoMdCloseCircle
              className={`psui-upload-file-icon psui-type-label${
                fileDisabledClose ? ' psui-upload-file-icon-disabled' : ''
              }`}
              onClick={handleClearFile}
            />
          )}
        </div>
      )}
    </div>
  );
}

Upload.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonLabel: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  buttonTestId: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  showFileClose: PropTypes.bool,
  fileDisabledClose: PropTypes.bool,
  handleFile: PropTypes.func,
  onFileClose: PropTypes.func,
  acceptFile: PropTypes.string,
};

Upload.defaultProps = {
  testId: null,
  className: '',
  title: '',
  subTitle: '',
  buttonLabel: 'Button',
  buttonTestId: null,
  buttonClassName: '',
  buttonDisabled: false,
  showFileClose: true,
  fileDisabledClose: false,
  handleFile: () => {},
  onFileClose: () => {},
  acceptFile: '',
};

export default Upload;
