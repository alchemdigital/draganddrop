"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("../main.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DragAndDrop extends _react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      drag: false
    });

    _defineProperty(this, "dropRef", /*#__PURE__*/_react.default.createRef());

    _defineProperty(this, "handleDrag", e => {
      e.preventDefault();
      e.stopPropagation();
    });

    _defineProperty(this, "handleDragIn", e => {
      e.preventDefault();
      e.stopPropagation();
      this.dragCounter++;

      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        this.setState({
          drag: true
        });
      }
    });

    _defineProperty(this, "handleDragOut", e => {
      e.preventDefault();
      e.stopPropagation();
      this.dragCounter--;

      if (this.dragCounter === 0) {
        this.setState({
          drag: false
        });
      }
    });

    _defineProperty(this, "handleDrop", e => {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        drag: false
      });

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        this.props.handleDrop(e.dataTransfer.files);
        e.dataTransfer.clearData();
        this.dragCounter = 0;
      }
    });
  }

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'inline-block',
        width: '100%'
      },
      ref: this.dropRef
    }, this.state.dragging && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        right: 0,
        left: 0,
        textAlign: 'center',
        color: 'grey',
        fontSize: 36
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, "drop here :)"))), this.props.children);
  }

}

var _default = DragAndDrop;
exports.default = _default;