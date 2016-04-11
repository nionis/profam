webpackHotUpdate(0,{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _profanity = __webpack_require__(21);

	var _profanity2 = _interopRequireDefault(_profanity);

	var _spam = __webpack_require__(22);

	var _spam2 = _interopRequireDefault(_spam);

	var _utils = __webpack_require__(5);

	var _logger = __webpack_require__(2);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	module.exports = function () {
	  function _class() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    _classCallCheck(this, _class);

	    //Initialize Modules
	    this.profanity = new _profanity2.default();
	    this.spam = new _spam2.default();

	    //Update Options with options provided in initialization.
	    if (options !== null) {
	      var keys = Object.keys(options);

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var key = _step.value;

	          if (key == 'profanity' || key == 'spam') {
	            this[key] = Object.assign(this[key], options[key]);
	          } else {
	            this[key] = options[key];
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    } else {
	      (0, _logger2.default)('No options provided in initialization, not a problem tho.');
	    }
	  }

	  return _class;
	}();

/***/ }

})