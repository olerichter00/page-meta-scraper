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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var EXCLUDE_KEYWORDS = ['ask', 'show', 'hn', 'the', 'a', 'that', 'this', 'as', 'and', 'or', 'for', 'in', 'out', 'new', 'i'];

var MetaImageScraper = /*#__PURE__*/function () {
  function MetaImageScraper(page, url, keywords) {
    (0, _classCallCheck2["default"])(this, MetaImageScraper);
    (0, _defineProperty2["default"])(this, "keywords", []);
    (0, _defineProperty2["default"])(this, "MAX_IMAGES", 10);
    (0, _defineProperty2["default"])(this, "strategies", [['meta[property="og:image:secure_url"]', _helper.getContent], ['meta[property="og:image:url"]', _helper.getContent], ['meta[property="og:image"]', _helper.getContent], ['meta[name="twitter:image:src"]', _helper.getContent], ['meta[name="twitter:image"]', _helper.getContent], ['meta[itemprop="image"]', _helper.getContent], ['article img[src]', _helper.getSrc], ['#content img[src]', _helper.getSrc], ['img[alt*="author" i]', _helper.getSrc], ['img[src]:not([aria-hidden="true"])', _helper.getSrc]]);
    (0, _defineProperty2["default"])(this, "fallbackStrategies", [[this.keywords, _imageSearchApiClient["default"]], [this.keywords, _unsplashSearchApiClient["default"]]]);
    this.page = page;
    this.url = url;
    this.keywords = this.stripKeywords(keywords);
  }

  (0, _createClass2["default"])(MetaImageScraper, [{
    key: "images",
    value: function () {
      var _images = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var imageUrls, _iterator, _step, strategy;

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
                _iterator = _createForOfIteratorHelper(this.fallbackStrategies);
                _context.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context.next = 21;
                  break;
                }

                strategy = _step.value;
                _context.t0 = imageUrls.push;
                _context.t1 = imageUrls;
                _context.t2 = _toConsumableArray2["default"];
                _context.next = 14;
                return this.fallbackImages(strategy);

              case 14:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);

                _context.t0.apply.call(_context.t0, _context.t1, _context.t4);

                if (!(imageUrls.length >= 1)) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

              case 19:
                _context.next = 7;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t5 = _context["catch"](5);

                _iterator.e(_context.t5);

              case 26:
                _context.prev = 26;

                _iterator.f();

                return _context.finish(26);

              case 29:
                return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 23, 26, 29]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVyL21ldGFJbWFnZVNjcmFwZXIudHMiXSwibmFtZXMiOlsiRVhDTFVERV9LRVlXT1JEUyIsIk1ldGFJbWFnZVNjcmFwZXIiLCJwYWdlIiwidXJsIiwia2V5d29yZHMiLCJnZXRDb250ZW50IiwiZ2V0U3JjIiwiZmV0Y2hJbWFnZXNGcm9tU2VhcmNoIiwiZmV0Y2hJbWFnZXNGcm9tVW5zcGxhc2giLCJzdHJpcEtleXdvcmRzIiwiaW1hZ2VVcmxzIiwicHVzaCIsInBhZ2VJbWFnZXMiLCJsZW5ndGgiLCJzbGljZSIsIk1BWF9JTUFHRVMiLCJmYWxsYmFja1N0cmF0ZWdpZXMiLCJzdHJhdGVneSIsImZhbGxiYWNrSW1hZ2VzIiwiaW1hZ2VzIiwic3RyYXRlZ2llcyIsIm1hcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsImZsYXQiLCJpbWFnZSIsImZpbHRlciIsIlN0cmluZyIsImtleXdvcmQiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBRyxDQUN2QixLQUR1QixFQUV2QixNQUZ1QixFQUd2QixJQUh1QixFQUl2QixLQUp1QixFQUt2QixHQUx1QixFQU12QixNQU51QixFQU92QixNQVB1QixFQVF2QixJQVJ1QixFQVN2QixLQVR1QixFQVV2QixJQVZ1QixFQVd2QixLQVh1QixFQVl2QixJQVp1QixFQWF2QixLQWJ1QixFQWN2QixLQWR1QixFQWV2QixHQWZ1QixDQUF6Qjs7SUF3QnFCQyxnQjtBQU9uQiw0QkFBbUJDLElBQW5CLEVBQXVDQyxHQUF2QyxFQUFvREMsUUFBcEQsRUFBd0U7QUFBQTtBQUFBLHVEQUozQyxFQUkyQztBQUFBLHlEQUZuRCxFQUVtRDtBQUFBLHlEQXdEL0IsQ0FDdkMsQ0FBQyxzQ0FBRCxFQUF5Q0Msa0JBQXpDLENBRHVDLEVBRXZDLENBQUMsK0JB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QyxFQUF1RCxHQUF2RCxDQUFKO0FBQUEsT0FEUCxFQUVKSCxNQUZJLENBRUcsVUFBQUUsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ2YsTUFBUixJQUFrQixDQUF0QjtBQUFBLE9BRlYsRUFHSmEsTUFISSxDQUdHLFVBQUFFLE9BQU87QUFBQSxlQUFJLENBQUM1QixnQkFBZ0IsQ0FBQzhCLFFBQWpCLENBQTBCRixPQUFPLENBQUNHLFdBQVIsRUFBMUIsQ0FBTDtBQUFBLE9BSFYsQ0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoSW1hZ2VzRnJvbVNlYXJjaCBmcm9tICcuLi9jbGllbnRzL2ltYWdlU2VhcmNoQXBpQ2xpZW50J1xuaW1wb3J0IGZldGNoSW1hZ2VzRnJvbVVuc3BsYXNoIGZyb20gJy4uL2NsaWVudHMvdW5zcGxhc2hTZWFyY2hBcGlDbGllbnQnXG5pbXBvcnQgeyBnZXRDb250ZW50LCBnZXRTcmMsIG5vcm1hbGl6ZVVybCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBFWENMVURFX0tFWVdPUkRTID0gW1xuICAnYXNrJyxcbiAgJ3Nob3cnLFxuICAnaG4nLFxuICAndGhlJyxcbiAgJ2EnLFxuICAndGhhdCcsXG4gICd0aGlzJyxcbiAgJ2FzJyxcbiAgJ2FuZCcsXG4gICdvcicsXG4gICdmb3InLFxuICAnaW4nLFxuICAnb3V0JyxcbiAgJ25ldycsXG4gICdpJyxcbl1cblxudHlwZSBTZWxlY3RvclN0cmF0ZWd5ID0gW1xuICBzdHJpbmcsXG4gIChlbGVtZW50OiBjaGVlcmlvLlJvb3QsIHNlbGVjdG9yOiBzdHJpbmcpID0+IHN0cmluZyB8IHVuZGVmaW5lZCB8IChzdHJpbmcgfCB1bmRlZmluZWQpW10sXG5dXG50eXBlIFNlcnZpY2VTdHJhdGVneSA9IFtzdHJpbmdbXSwgKGtleXdvcmRzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZTxzdHJpbmdbXT5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFJbWFnZVNjcmFwZXIge1xuICBwcml2YXRlIHBhZ2U6IGNoZWVyaW8uUm9vdFxuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUga2V5d29yZHM6IHN0cmluZ1tdID0gW11cblxuICBwcml2YXRlIE1BWF9JTUFHRVMgPSAxMFxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYWdlOiBjaGVlcmlvLlJvb3QsIHVybDogc3RyaW5nLCBrZXl3b3Jkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgICB0aGlzLmtleXdvcmRzID0gdGhpcy5zdHJpcEtleXdvcmRzKGtleXdvcmRzKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGltYWdlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgY29uc3QgaW1hZ2VVcmxzID0gW11cblxuICAgIHRyeSB7XG4gICAgICBpbWFnZVVybHMucHVzaCguLi50aGlzLnBhZ2VJbWFnZXMoKSlcbiAgICB9IGNhdGNoIHt9XG5cbiAgICBpZiAoaW1hZ2VVcmxzLmxlbmd0aCA+PSAyKSByZXR1cm4gaW1hZ2VVcmxzLnNsaWNlKDAsIHRoaXMuTUFYX0lNQUdFUylcblxuICAgIGZvciAoY29uc3Qgc3RyYXRlZ3kgb2YgdGhpcy5mYWxsYmFja1N0cmF0ZWdpZXMpIHtcbiAgICAgIGltYWdlVXJscy5wdXNoKC4uLihhd2FpdCB0aGlzLmZhbGxiYWNrSW1hZ2VzKHN0cmF0ZWd5KSkpXG5cbiAgICAgIGlmIChpbWFnZVVybHMubGVuZ3RoID49IDEpIHJldHVybiBpbWFnZVVybHMuc2xpY2UoMCwgdGhpcy5NQVhfSU1BR0VTKVxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZVVybHMuc2xpY2UoMCwgdGhpcy5NQVhfSU1BR0VTKVxuICB9XG5cbiAgcHJpdmF0ZSBwYWdlSW1hZ2VzKCk6IHN0cmluZ1tdIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5zdHJhdGVnaWVzXG4gICAgICAgIC5tYXAoKFtzZWxlY3RvciwgaGFuZGxlcl0pID0+IGhhbmRsZXIodGhpcy5wYWdlLCBzZWxlY3RvcikpXG4gICAgICAgIC5mbGF0KClcbiAgICAgICAgLm1hcChpbWFnZSA9PiBub3JtYWxpemVVcmwodGhpcy51cmwsIGltYWdlKSlcbiAgICAgICAgLmZpbHRlcihpbWFnZSA9PiB0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKVxuICAgICAgICAubWFwKGltYWdlID0+IFN0cmluZyhpbWFnZSkpXG5cbiAgICAgIHJldHVybiBpbWFnZXNcbiAgICB9IGNhdGNoIHt9XG5cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmFsbGJhY2tJbWFnZXMoc3RyYXRlZ3k6IFNlcnZpY2VTdHJhdGVneSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW2tleXdvcmRzLCBoYW5kbGVyXSA9IHN0cmF0ZWd5XG5cbiAgICAgIHJldHVybiBhd2FpdCBoYW5kbGVyKGtleXdvcmRzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0cmlwS2V5d29yZHMoa2V5d29yZHM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBrZXl3b3Jkc1xuICAgICAgLm1hcChrZXl3b3JkID0+IGtleXdvcmQucmVwbGFjZSgvW15BLVphLXpcXHNdL2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykpXG4gICAgICAuZmlsdGVyKGtleXdvcmQgPT4ga2V5d29yZC5sZW5ndGggPj0gNClcbiAgICAgIC5maWx0ZXIoa2V5d29yZCA9PiAhRVhDTFVERV9LRVlXT1JEUy5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKVxuICB9XG5cbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBTZWxlY3RvclN0cmF0ZWd5W10gPSBbXG4gICAgWydtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlOnVybFwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJywgZ2V0Q29udGVudF0sXG4gICAgWydtZXRhW25hbWU9XCJ0d2l0dGVyOmltYWdlOnNyY1wiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScsIGdldENvbnRlbnRdLFxuICAgIFsnbWV0YVtpdGVtcHJvcD1cImltYWdlXCJdJywgZ2V0Q29udGVudF0sXG4gICAgWydhcnRpY2xlIGltZ1tzcmNdJywgZ2V0U3JjXSxcbiAgICBbJyNjb250ZW50IGltZ1tzcmNdJywgZ2V0U3JjXSxcbiAgICBbJ2ltZ1thbHQqPVwiYXV0aG9yXCIgaV0nLCBnZXRTcmNdLFxuICAgIFsnaW1nW3NyY106bm90KFthcmlhLWhpZGRlbj1cInRydWVcIl0pJywgZ2V0U3JjXSxcbiAgXVxuXG4gIHByaXZhdGUgZmFsbGJhY2tTdHJhdGVnaWVzOiBTZXJ2aWNlU3RyYXRlZ3lbXSA9IFtcbiAgICBbdGhpcy5rZXl3b3JkcywgZmV0Y2hJbWFnZXNGcm9tU2VhcmNoXSxcbiAgICBbdGhpcy5rZXl3b3JkcywgZmV0Y2hJbWFnZXNGcm9tVW5zcGxhc2hdLFxuICBdXG59XG4iXX0=