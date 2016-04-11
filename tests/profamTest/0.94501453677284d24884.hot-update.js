webpackHotUpdate(0,{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _axios = __webpack_require__(6);

	var _axios2 = _interopRequireDefault(_axios);

	var _logger = __webpack_require__(2);

	var _logger2 = _interopRequireDefault(_logger);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var profanity = function () {
	  function profanity() {
	    _classCallCheck(this, profanity);

	    this.enable = 1; //  1, 0  : Enabled or Disabled
	    this.modes = new Map([//  Can check modes available, enabled
	    ['grawlix', { 'enabled': 1 }], ['obscure', { 'enabled': 0 }], ['choice', { 'enabled': 0 }], ['grawlix', { 'enabled': 0 }], ['asterisks', { 'enabled': 0 }], ['empty', { 'enabled': 0 }], ['black', { 'enabled': 0 }]]);
	    this.locales = new Map(); // Can check modes available, enabled
	    this.localesUrlMockup = null; // Url Mockup of locales location for axio.get
	  }

	  // Utils


	  _createClass(profanity, [{
	    key: 'makeUrl',
	    value: function makeUrl() {
	      var locale = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	      if (this.localesUrlMockup !== null) {
	        return this.localesUrlMockup.replace(/\[locale\]/g, locale);
	      } else {
	        (0, _logger2.default)('Locale provided is undefined or null, Usage: .makeUrl(<string>)');
	      }
	    }

	    // I\O
	    //Setters

	  }, {
	    key: 'setLocales',
	    value: function setLocales() {
	      var locales = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	      var _this = this;

	      var isAdd = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	      var isCustom = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      var self = this;
	      locales = (0, _utils.toArray)(locales);

	      //Process Locales
	      var processLocale = function processLocale(item) {
	        if (isAdd) {
	          var _self$locales;

	          (_self$locales = self.locales).set.apply(_self$locales, _toConsumableArray(item));
	        } else {
	          self.locales = new Map([item]);
	        }
	      };

	      //Prepare locales
	      if (locales.length) {
	        locales.filter(function (locale) {
	          return !_this.locales.has(locale);
	        }).forEach(function (locale) {
	          if (!isCustom) {
	            var url = _this.makeUrl(locale);

	            _axios2.default.get(url).then(function (response) {
	              processLocale([locale, { 'enabled': 0, 'available': 1, 'data': response.data }]);
	            }).catch(function (response) {
	              (0, _logger2.default)('Tried to download locale but catched an error', response);
	            });
	          } else {
	            processLocale([locale, { 'enabled': 0, 'available': 1, 'data': [] }]);
	          }
	        });
	      } else {
	        (0, _logger2.default)('Provided empty string or array, Usage: .downloadLocales(<string/array>)');
	      }
	    }
	  }, {
	    key: 'setModes',
	    value: function setModes() {
	      var _this2 = this;

	      var modes = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var isAdd = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (modes !== null) {
	        modes = (0, _utils.toArray)(modes);

	        modes = modes.filter(function (mode) {
	          return !(_this2.availableModes.indexOf(mode) !== -1);
	        });

	        if (modes.length) {
	          if (isAdd) {
	            var _modes;

	            (_modes = modes).push.apply(_modes, _toConsumableArray(this.modes));
	          }

	          this.modes = [].concat(_toConsumableArray(new Set(modes)));

	          (0, _logger2.default)('Added Modes', modes);
	        } else {
	          (0, _logger2.default)('Invalid mode');
	        }
	      } else {
	        (0, _logger2.default)('setModes received null');
	      }
	    }
	  }, {
	    key: 'addWords',
	    value: function addWords() {
	      var locale = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var words = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	      words = (0, _utils.toArray)(words);

	      if (this.locales.has(locale)) {
	        var _options$data;

	        var options = this.locales.get(locale);
	        (_options$data = options.data).push.apply(_options$data, _toConsumableArray(words));
	        this.locales.set(locale, options);
	      } else {
	        (0, _logger2.default)('addWords: this locale doesnt exist, you might need to setLocales first');
	      }
	    }

	    //Getters

	  }, {
	    key: 'getLocales',
	    value: function getLocales() {
	      return [].concat(_toConsumableArray(this.locales.keys()));
	    }
	  }, {
	    key: 'getModes',
	    value: function getModes() {
	      return [].concat(_toConsumableArray(this.modes.keys()));
	    }
	  }]);

	  return profanity;
	}();

	exports.default = profanity;

/***/ }

})