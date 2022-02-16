"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireWildcard(require("react"));

require("../main.css");

var _close_black = _interopRequireDefault(require("../../assets/img/icons/close_black.svg"));

var _linkPin = _interopRequireDefault(require("../../assets/img/icons/link-pin.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DragAndDrop(props) {
  const [files, setFiles] = (0, _react.useState)([]);
  const [showFileUpload, setShowFileUpload] = (0, _react.useState)(true);
  const dropRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    const handleDragIn = e => {
      e.preventDefault();
      e.stopPropagation();
    };

    dropRef.current.addEventListener('dragenter', handleDragIn);
    return () => {
      dropRef.current.removeEventListener('dragenter', handleDragIn);
    };
  });
  (0, _react.useEffect)(() => {
    const handleDragOut = e => {
      e.preventDefault();
      e.stopPropagation();
    };

    dropRef.current.addEventListener('dragleave', handleDragOut);
    return () => {
      dropRef.current.removeEventListener('dragleave', handleDragOut);
    };
  });
  (0, _react.useEffect)(() => {
    const handleDrag = e => {
      e.preventDefault();
      e.stopPropagation();
    };

    dropRef.current.addEventListener('dragover', handleDrag);
    return () => {
      dropRef.current.removeEventListener('dragover', handleDrag);
    };
  });
  (0, _react.useEffect)(() => {
    const handleDrop = e => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        let thisFiles = e.dataTransfer.files;
        let fileList = [...files];
        Object.keys(thisFiles).map(eachKey => {
          /* if (props.isSupportedFile(filesTemp[eachKey])) {
              if (filesTemp[eachKey].size / 1024 / 1024 <= allowedSingleFileSize.current) */
          fileList.push(thisFiles[eachKey]);
          /* else
              Config.toast(singleFileSizeError.current, 'error')
          } */
        });
        setFiles(fileList);
        setShowFileUpload(false);
        if (props.handleDrop) props.handleDrop(fileList);
        if (props.getFiles) props.getFiles(fileList);
        e.dataTransfer.clearData();
      }
    };

    dropRef.current.addEventListener('drop', handleDrop);
    return () => {
      dropRef.current.removeEventListener('drop', handleDrop);
    };
  });

  const removeFile = (e, index) => {
    if (props.removeFile) props.removeFile(e, index);
    let filesTemp = files;
    delete filesTemp[index];
    let isFilesEmpty = true;
    let finalFiles = [];
    Object.keys(filesTemp).map(eachKey => {
      if (filesTemp[eachKey] != null) {
        isFilesEmpty = false;
        finalFiles.push(filesTemp[eachKey]);
      }
    });

    if (isFilesEmpty) {
      filesTemp = [];
      setShowFileUpload(true);
    }

    setFiles(finalFiles);
    if (props.getFiles) props.getFiles(finalFiles);
  };

  const handleChange = e => {
    let thisFiles = e.target.files;
    let fileList = [...files];
    Object.keys(thisFiles).map(eachKey => {
      /* if (props.isSupportedFile(filesTemp[eachKey])) {
          if (filesTemp[eachKey].size / 1024 / 1024 <= allowedSingleFileSize.current) */
      fileList.push(thisFiles[eachKey]);
      /* else
          Config.toast(singleFileSizeError.current, 'error')
      } */
    });
    setFiles(fileList);
    if (props.handleDrop) props.handleDrop(fileList);
    if (props.getFiles) props.getFiles(fileList);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "drag-n-drop-global-container",
    ref: dropRef
  }, !props.customUI && (showFileUpload ? /*#__PURE__*/_react.default.createElement("div", {
    className: "drag-n-drop-container"
  }, /*#__PURE__*/_react.default.createElement("p", null, "drop here :)")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "drag-n-drop-file-list-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "button-wrap-file-list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "file-list-align"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "file-list"
  }, Object.keys(files).map(eachKey => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: eachKey + files[eachKey].name,
      className: "file-name-list"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filename"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: 'https://pro.alchemdigital.com/api/extension-image/' + files[eachKey].name.split('.').pop(),
      alt: "document"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "filename-length"
    }, files[eachKey].name.split('.').slice(0, -1).join('.')), /*#__PURE__*/_react.default.createElement("span", {
      className: "extension"
    }, '.' + files[eachKey].name.split('.').pop())), /*#__PURE__*/_react.default.createElement("span", {
      className: "upload-file-delete",
      "data-file-index": eachKey,
      onClick: e => removeFile(e, eachKey)
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _close_black.default,
      alt: "close-btn"
    })));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "file-upload-btn"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "files",
    id: "files-drag",
    onChange: e => handleChange(e),
    multiple: true,
    hidden: true
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-control-file",
    htmlFor: "files-drag"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _linkPin.default,
    alt: "linkpin"
  }), " Add More"))))));
}

var _default = DragAndDrop;
exports.default = _default;