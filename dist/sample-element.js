webpackJsonp([12],[
/* 0 */
/*!***************************************************!*\
  !*** ./elements/sample-element/sample-element.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _register = __webpack_require__(/*! bulbs-elements/register */ 233);\n\nvar _register2 = _interopRequireDefault(_register);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SampleElement = function (_React$Component) {\n  _inherits(SampleElement, _React$Component);\n\n  function SampleElement() {\n    _classCallCheck(this, SampleElement);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(SampleElement).apply(this, arguments));\n  }\n\n  _createClass(SampleElement, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Check out this SICK example!'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'It is so effin SICK!'\n        ),\n        _react2.default.createElement(\n          'span',\n          { className: 'prop-text' },\n          this.props.thisProp\n        )\n      );\n    }\n  }]);\n\n  return SampleElement;\n}(_react2.default.Component);\n\nexports.default = SampleElement;\n\nSampleElement.propTypes = {\n  thisProp: _react.PropTypes.string\n};\n\n(0, _register2.default)('sample-element', SampleElement);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9lbGVtZW50cy9zYW1wbGUtZWxlbWVudC9zYW1wbGUtZWxlbWVudC5qcz81MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSAnYnVsYnMtZWxlbWVudHMvcmVnaXN0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW1wbGVFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkNoZWNrIG91dCB0aGlzIFNJQ0sgZXhhbXBsZSE8L2gxPlxuICAgICAgICA8cD5JdCBpcyBzbyBlZmZpbiBTSUNLITwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvcC10ZXh0XCI+eyB0aGlzLnByb3BzLnRoaXNQcm9wIH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblNhbXBsZUVsZW1lbnQucHJvcFR5cGVzID0ge1xuICB0aGlzUHJvcDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbnJlZ2lzdGVyKCdzYW1wbGUtZWxlbWVudCcsIFNhbXBsZUVsZW1lbnQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZWxlbWVudHMvc2FtcGxlLWVsZW1lbnQvc2FtcGxlLWVsZW1lbnQuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVBOzs7O0FBREE7QUFFQTs7OztBQUZBO0FBR0E7O0FBQUE7QUFBQTtBQUhBO0FBREE7Ozs7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
]);