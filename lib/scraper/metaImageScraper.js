"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _imageSearchApiClient = _interopRequireDefault(require("../clients/imageSearchApiClient"));

var _unsplashSearchApiClient = _interopRequireDefault(require("../clients/unsplashSearchApiClient"));

var _helper = require("../utils/helper");

var _config = _interopRequireDefault(require("../config"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* prettier-ignore */
var EXCLUDE_KEYWORDS = ['ask', 'show', 'hn', 'the', 'a', 'that', 'this', 'as', 'and', 'or', 'for', 'in', 'out', 'new', 'i'];

var MetaImageScraper = /*#__PURE__*/function () {
  function MetaImageScraper(page, url, keywords) {
    (0, _classCallCheck2["default"])(this, MetaImageScraper);
    (0, _defineProperty2["default"])(this, "keywords", []);
    (0, _defineProperty2["default"])(this, "MAX_IMAGES", 10);
    (0, _defineProperty2["default"])(this, "strategies", [['meta[property="og:image:secure_url"]', _helper.getContent], ['meta[property="og:image:url"]', _helper.getContent], ['meta[property="og:image"]', _helper.getContent], ['meta[name="twitter:image:src"]', _helper.getContent], ['meta[name="twitter:image"]', _helper.getContent], ['meta[itemprop="image"]', _helper.getContent], ['article img[src]', _helper.getSrc], ['#content img[src]', _helper.getSrc], ['img[alt*="author" i]', _helper.getSrc], ['img[src]:not([aria-hidden="true"])', _helper.getSrc]]);
    (0, _defineProperty2["default"])(this, "fallbackStrategies", {
      contextualweb: [this.keywords, _imageSearchApiClient["default"]],
      unsplash: [this.keywords, _unsplashSearchApiClient["default"]]
    });
    this.page = page;
    this.url = url;
    this.keywords = this.stripKeywords(keywords);
  }

  (0, _createClass2["default"])(MetaImageScraper, [{
    key: "images",
    value: function () {
      var _images = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var imageUrls, _iterator, _step, strategyName, strategy;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageUrls = [];

                try {
                  imageUrls.push.apply(imageUrls, (0, _toConsumableArray2["default"])(this.pageImages()));
                } catch (_unused) {}

                if (!(imageUrls.length >= 2)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

              case 4:
                _iterator = _createForOfIteratorHelper(_config["default"].imageFallbackStrategies);
                _context.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context.next = 22;
                  break;
                }

                strategyName = _step.value;
                strategy = this.fallbackStrategies[strategyName];
                _context.t0 = imageUrls.push;
                _context.t1 = imageUrls;
                _context.t2 = _toConsumableArray2["default"];
                _context.next = 15;
                return this.fallbackImages(strategy);

              case 15:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);

                _context.t0.apply.call(_context.t0, _context.t1, _context.t4);

                if (!(imageUrls.length >= 1)) {
                  _context.next = 20;
                  break;
                }

                return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

              case 20:
                _context.next = 7;
                break;

              case 22:
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t5 = _context["catch"](5);

                _iterator.e(_context.t5);

              case 27:
                _context.prev = 27;

                _iterator.f();

                return _context.finish(27);

              case 30:
                return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 24, 27, 30]]);
      }));

      function images() {
        return _images.apply(this, arguments);
      }

      return images;
    }()
  }, {
    key: "pageImages",
    value: function pageImages() {
      var _this = this;

      try {
        var images = this.strategies.map(function (_ref) {
          var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
              selector = _ref2[0],
              handler = _ref2[1];

          return handler(_this.page, selector);
        }).flat().map(function (image) {
          return (0, _helper.normalizeUrl)(_this.url, image);
        }).filter(function (image) {
          return typeof image === 'string';
        }).map(function (image) {
          return String(image);
        });
        return images;
      } catch (_unused2) {}

      return [];
    }
  }, {
    key: "fallbackImages",
    value: function () {
      var _fallbackImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(strategy) {
        var _strategy, _keywords, handler;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _strategy = (0, _slicedToArray2["default"])(strategy, 2), _keywords = _strategy[0], handler = _strategy[1];
                _context2.next = 4;
                return handler(_keywords);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", []);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function fallbackImages(_x) {
        return _fallbackImages.apply(this, arguments);
      }

      return fallbackImages;
    }()
  }, {
    key: "stripKeywords",
    value: function stripKeywords(keywords) {
      return keywords.map(function (keyword) {
        return keyword.replace(/[^A-Za-z\s]/g, '').replace(/\s{2,}/g, ' ');
      }).filter(function (keyword) {
        return keyword.length >= 4;
      }).filter(function (keyword) {
        return !EXCLUDE_KEYWORDS.includes(keyword.toLowerCase());
      });
    }
  }]);
  return MetaImageScraper;
}();

exports["default"] = MetaImageScraper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVyL21ldGFJbWFnZVNjcmFwZXIudHMiXSwibmFtZXMiOlsiRVhDTFVERV9LRVlXT1JEUyIsIk1ldGFJbWFnZVNjcmFwZXIiLCJwYWdlIiwidXJsIiwia2V5d29yZHMiLCJnZXRDb250ZW50IiwiZ2V0U3JjIiwiY29udGV4dHVhbHdlYiIsImZldGNoSW1hZ2VzRnJvbVNlYXJjaCIsInVuc3BsYXNoIiwiZmV0Y2hJbWFnZXNGcm9tVW5zcGxhc2giLCJzdHJpcEtleXdvcmRzIiwiaW1hZ2VVcmxzIiwicHVzaCIsInBhZ2VJbWFnZXMiLCJsZW5ndGgiLCJzbGljZSIsIk1BWF9JTUFHRVMiLCJjb25maWciLCJpbWFnZUZhbGxiYWNrU3RyYXRlZ2llcyIsInN0cmF0ZWd5TmFtZSIsInN0cmF0ZWd5IiwiZmFsbGJhY2tTdHJhdGVnaWVzIiwiZmFsbGJhY2tJbWFnZXMiLCJpbWFnZXMiLCJzdHJhdGVnaWVzIiwibWFwIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwiZmxhdCIsImltYWdlIiwiZmlsdGVyIiwiU3RyaW5nIiwia2V5d29yZCIsInJlcGxhY2UiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixJQUFoQixFQUFzQixLQUF0QixFQUE2QixHQUE3QixFQUFrQyxNQUFsQyxFQUEwQyxNQUExQyxFQUFrRCxJQUFsRCxFQUF3RCxLQUF4RCxFQUErRCxJQUEvRCxFQUFxRSxLQUFyRSxFQUE0RSxJQUE1RSxFQUFrRixLQUFsRixFQUF5RixLQUF6RixFQUFnRyxHQUFoRyxDQUF6Qjs7SUFRcUJDLGdCO0FBT25CLDRCQUFtQkMsSUFBbkIsRUFBdUNDLEdBQXZDLEVBQW9EQyxRQUFwRCxFQUF3RTtBQUFBO0FBQUEsdURBSjNDLEVBSTJD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Ozs7Ozs7O2tEQUViLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJV0EsUSxFQUE4QjtBQUNsRCxhQUFPQSxRQUFRLENBQ1pzQixHQURJLENBQ0EsVUFBQU8sT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixjQUFoQixFQUFnQyxFQUFoQyxFQUFvQ0EsT0FBcEMsQ0FBNEMsU0FBNUMsRUFBdUQsR0FBdkQsQ0FBSjtBQUFBLE9BRFAsRUFFSkgsTUFGSSxDQUVHLFVBQUFFLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNsQixNQUFSLElBQWtCLENBQXRCO0FBQUEsT0FGVixFQUdKZ0IsTUFISSxDQUdHLFVBQUFFLE9BQU87QUFBQSxlQUFJLENBQUNqQyxnQkFBZ0IsQ0FBQ21DLFFBQWpCLENBQTBCRixPQUFPLENBQUNHLFdBQVIsRUFBMUIsQ0FBTDtBQUFBLE9BSFYsQ0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoSW1hZ2VzRnJvbVNlYXJjaCBmcm9tICcuLi9jbGllbnRzL2ltYWdlU2VhcmNoQXBpQ2xpZW50J1xuaW1wb3J0IGZldGNoSW1hZ2VzRnJvbVVuc3BsYXNoIGZyb20gJy4uL2NsaWVudHMvdW5zcGxhc2hTZWFyY2hBcGlDbGllbnQnXG5pbXBvcnQgeyBnZXRDb250ZW50LCBnZXRTcmMsIG5vcm1hbGl6ZVVybCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG4vKiBwcmV0dGllci1pZ25vcmUgKi9cbmNvbnN0IEVYQ0xVREVfS0VZV09SRFMgPSBbJ2FzaycsICdzaG93JywgJ2huJywgJ3RoZScsICdhJywgJ3RoYXQnLCAndGhpcycsICdhcycsICdhbmQnLCAnb3InLCAnZm9yJywgJ2luJywgJ291dCcsICduZXcnLCAnaSddXG5cbnR5cGUgU2VsZWN0b3JTdHJhdGVneSA9IFtcbiAgc3RyaW5nLFxuICAoZWxlbWVudDogY2hlZXJpby5Sb290LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgfCAoc3RyaW5nIHwgdW5kZWZpbmVkKVtdLFxuXVxudHlwZSBGYWxsYmFja1N0cmF0ZWd5ID0gW3N0cmluZ1tdLCAoa2V5d29yZHM6IHN0cmluZ1tdKSA9PiBQcm9taXNlPHN0cmluZ1tdPl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUltYWdlU2NyYXBlciB7XG4gIHByaXZhdGUgcGFnZTogY2hlZXJpby5Sb290XG4gIHByaXZhdGUgdXJsOiBzdHJpbmdcbiAgcHJpdmF0ZSBrZXl3b3Jkczogc3RyaW5nW10gPSBbXVxuXG4gIHByaXZhdGUgTUFYX0lNQUdFUyA9IDEwXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhZ2U6IGNoZWVyaW8uUm9vdCwgdXJsOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMua2V5d29yZHMgPSB0aGlzLnN0cmlwS2V5d29yZHMoa2V5d29yZHMpXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW1hZ2VzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBpbWFnZVVybHMgPSBbXVxuXG4gICAgdHJ5IHtcbiAgICAgIGltYWdlVXJscy5wdXNoKC4uLnRoaXMucGFnZUltYWdlcygpKVxuICAgIH0gY2F0Y2gge31cblxuICAgIGlmIChpbWFnZVVybHMubGVuZ3RoID49IDIpIHJldHVybiBpbWFnZVVybHMuc2xpY2UoMCwgdGhpcy5NQVhfSU1BR0VTKVxuXG4gICAgZm9yIChjb25zdCBzdHJhdGVneU5hbWUgb2YgY29uZmlnLmltYWdlRmFsbGJhY2tTdHJhdGVnaWVzKSB7XG4gICAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuZmFsbGJhY2tTdHJhdGVnaWVzW3N0cmF0ZWd5TmFtZV1cblxuICAgICAgaW1hZ2VVcmxzLnB1c2goLi4uKGF3YWl0IHRoaXMuZmFsbGJhY2tJbWFnZXMoc3RyYXRlZ3kpKSlcblxuICAgICAgaWYgKGltYWdlVXJscy5sZW5ndGggPj0gMSkgcmV0dXJuIGltYWdlVXJscy5zbGljZSgwLCB0aGlzLk1BWF9JTUFHRVMpXG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlVXJscy5zbGljZSgwLCB0aGlzLk1BWF9JTUFHRVMpXG4gIH1cblxuICBwcml2YXRlIHBhZ2VJbWFnZXMoKTogc3RyaW5nW10ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLnN0cmF0ZWdpZXNcbiAgICAgICAgLm1hcCgoW3NlbGVjdG9yLCBoYW5kbGVyXSkgPT4gaGFuZGxlcih0aGlzLnBhZ2UsIHNlbGVjdG9yKSlcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAubWFwKGltYWdlID0+IG5vcm1hbGl6ZVVybCh0aGlzLnVybCwgaW1hZ2UpKVxuICAgICAgICAuZmlsdGVyKGltYWdlID0+IHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIC5tYXAoaW1hZ2UgPT4gU3RyaW5nKGltYWdlKSlcblxuICAgICAgcmV0dXJuIGltYWdlc1xuICAgIH0gY2F0Y2gge31cblxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmYWxsYmFja0ltYWdlcyhzdHJhdGVneTogRmFsbGJhY2tTdHJhdGVneSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW2tleXdvcmRzLCBoYW5kbGVyXSA9IHN0cmF0ZWd5XG5cbiAgICAgIHJldHVybiBhd2FpdCBoYW5kbGVyKGtleXdvcmRzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0cmlwS2V5d29yZHMoa2V5d29yZHM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBrZXl3b3Jkc1xuICAgICAgLm1hcChrZXl3b3JkID0+IGtleXdvcmQucmVwbGFjZSgvW15BLVphLXpcXHNdL2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykpXG4gICAgICAuZmlsdGVyKGtleXdvcmQgPT4ga2V5d29yZC5sZW5ndGggPj0gNClcbiAgICAgIC5maWx0ZXIoa2V5d29yZCA9PiAhRVhDTFVERV9LRVlXT1JEUy5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKVxuICB9XG5cbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBTZWxlY3RvclN0cmF0ZWd5W10gPSBbXG4gICAgWydtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlOnVybFwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJywgZ2V0Q29udGVudF0sXG4gICAgWydtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtpdGVtcHJvcD1cImltYWdlXCJdJywgZ2V0Q29udGVudF0sXG4gICAgWydhcnRpY2xlIGltZ1tzcmNdJywgZ2V0U3JjXSxcbiAgICBbJyNjb250ZW50IGltZ1tzcmNdJywgZ2V0U3JjXSxcbiAgICBbJ2ltZ1thbHQqPVwiYXV0aG9yXCIgaV0nLCBnZXRTcmNdLFxuICAgIFsnaW1nW3NyY106bm90KFthcmlhLWhpZGRlbj1cInRydWVcIl0pJywgZ2V0U3JjXSxcbiAgXVxuXG4gIHByaXZhdGUgZmFsbGJhY2tTdHJhdGVnaWVzOiB7IFtrZXk6IHN0cmluZ106IEZhbGxiYWNrU3RyYXRlZ3kgfSA9IHtcbiAgICBjb250ZXh0dWFsd2ViOiBbdGhpcy5rZXl3b3JkcywgZmV0Y2hJbWFnZXNGcm9tU2VhcmNoXSxcbiAgICB1bnNwbGFzaDogW3RoaXMua2V5d29yZHMsIGZldGNoSW1hZ2VzRnJvbVVuc3BsYXNoXSxcbiAgfVxufVxuIl19