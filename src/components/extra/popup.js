Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};
var maskStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100000
};
var containerStyle = {
  position: 'relative',
  zIndex: 100001
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      close = _ref.close,
      _ref$elementId = _ref.elementId,
      elementId = _ref$elementId === void 0 ? 'root' : _ref$elementId;

  if (isOpen === false) {
    return null;
  }

  return (0, _reactDom.createPortal)(_react["default"].createElement("div", {
    style: wrapperStyle
  }, _react["default"].createElement("div", {
    style: maskStyle,
    onClick: close
  }), _react["default"].createElement("div", {
    style: containerStyle
  }, children)), document.getElementById(elementId));
};

var useModal = function useModal() {
  var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var open = (0, _react.useCallback)(function () {
    setOpen(true);
  }, [setOpen]);
  var close = (0, _react.useCallback)(function () {
    setOpen(false);
  }, [setOpen]);
  var ModalWrapper = (0, _react.useCallback)(function (_ref2) {
    var children = _ref2.children;
    return _react["default"].createElement(Modal, {
      isOpen: isOpen,
      close: close,
      elementId: elementId
    }, children);
  }, [isOpen, close, elementId]);
  return [ModalWrapper, open, close, isOpen];
};

var _default = useModal;
exports["default"] = _default;