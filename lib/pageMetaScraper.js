"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMetaScraper = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _metaImageScraper = _interopRequireDefault(require("./scraper/metaImageScraper"));

var _metaDescriptionScraper = _interopRequireDefault(require("./scraper/metaDescriptionScraper"));

var _metaTitleScraper = _interopRequireDefault(require("./scraper/metaTitleScraper"));

var _metaFaviconScraper = _interopRequireDefault(require("./scraper/metaFaviconScraper"));

var PageMetaScraper = /*#__PURE__*/function () {
  function PageMetaScraper(url, keywords) {
    var fetcher = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fetch;
    (0, _classCallCheck2["default"])(this, PageMetaScraper);
    this.url = url;
    this.keywords = keywords;
    this.fetcher = fetcher;
  }

  (0, _createClass2["default"])(PageMetaScraper, [{
    key: "loadPage",
    value: function () {
      var _loadPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var response, html;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.fetcher(this.url);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                html = _context.sent;
                this.page = _cheerio["default"].load(html, {
                  xmlMode: true,
                  normalizeWhitespace: true,
                  decodeEntities: true
                });
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function loadPage() {
        return _loadPage.apply(this, arguments);
      }

      return loadPage;
    }()
  }, {
    key: "scrape",
    value: function () {
      var _scrape = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var metadata;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                metadata = {};

                try {
                  metadata.title = this.title();
                  metadata.description = this.description();
                  metadata.favicon = this.favicon();
                } catch (error) {}

                _context2.next = 4;
                return this.images();

              case 4:
                metadata.imageUrls = _context2.sent;
                return _context2.abrupt("return", metadata);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function scrape() {
        return _scrape.apply(this, arguments);
      }

      return scrape;
    }()
  }, {
    key: "images",
    value: function () {
      var _images = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return new _metaImageScraper["default"](this.page, this.url, this.keywords).images();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function images() {
        return _images.apply(this, arguments);
      }

      return images;
    }()
  }, {
    key: "title",
    value: function title() {
      return new _metaTitleScraper["default"](this.page).title();
    }
  }, {
    key: "favicon",
    value: function favicon() {
      return new _metaFaviconScraper["default"](this.page).favicon();
    }
  }, {
    key: "description",
    value: function description() {
      return new _metaDescriptionScraper["default"](this.page, this.url, 300).description();
    }
  }]);
  return PageMetaScraper;
}();

exports.PageMetaScraper = PageMetaScraper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdlTWV0YVNjcmFwZXIudHMiXSwibmFtZXMiOlsiUGFnZU1ldGFTY3JhcGVyIiwidXJsIiwia2V5d29yZHMiLCJmZXRjaGVyIiwiZmV0Y2giLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwicGFnZSIsImNoZWVyaW8iLCJsb2FkIiwieG1sTW9kZSIsIm5vcm1hbGl6ZVdoaXRlc3BhY2UiLCJkZWNvZGVFbnRpdGllcyIsIm1ldGFkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZhdmljb24iLCJlcnJvciIsImltYWdlcyIsImltYWdlVXJscyIsIk1ldGFJbWFnZVNjcmFwZXIiLCJNZXRhVGl0bGVTY3JhcGVyIiwiTWV0YUZhdmljb25TY3JhcGVyIiwiTWV0YURlc2NyaXB0aW9uU2NyYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFTYUEsZTtBQU1YLDJCQUFtQkMsR0FBbkIsRUFBZ0NDLFFBQWhDLEVBQStFO0FBQUEsUUFBM0JDLE9BQTJCLHVFQUFQQyxLQUFPO0FBQUE7QUFDN0UsU0FBS0gsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozt1QkFJMEIsS0FBS0EsT0FBTCxDQUFhLEtBQUtGLEdBQWxCLEM7OztBQUFqQkksZ0JBQUFBLFE7O3VCQUNhQSxRQUFRLENBQUNDLElBQVQsRTs7O0FBQWJDLGdCQUFBQSxJO0FBQ04scUJBQUtDLElBQUwsR0FBWUMsb0JBQVFDLElBQVIsQ0FBYUgsSUFBYixFQUFtQjtBQUM3Qkksa0JBQUFBLE9BQU8sRUFBRSxJQURvQjtBQUU3QkMsa0JBQUFBLG1CQUFtQixFQUFFLElBRlE7QUFHN0JDLGtCQUFBQSxjQUFjLEVBQUU7QUFIYSxpQkFBbkIsQ0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNJQyxnQkFBQUEsUSxHQUFxQixFOztBQUUzQixvQkFBSTtBQUNGQSxrQkFBQUEsUUFBUSxDQUFDQyxLQUFULEdBQWlCLEtBQUtBLEtBQUwsRUFBakI7QUFDQUQsa0JBQUFBLFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QixLQUFLQSxXQUFMLEVBQXZCO0FBQ0FGLGtCQUFBQSxRQUFRLENBQUNHLE9BQVQsR0FBbUIsS0FBS0EsT0FBTCxFQUFuQjtBQUNELGlCQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjLENBQUU7Ozt1QkFFUyxLQUFLQyxNQUFMLEU7OztBQUEzQkwsZ0JBQUFBLFFBQVEsQ0FBQ00sUztrREFFRk4sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJTSxJQUFJTyw0QkFBSixDQUFxQixLQUFLYixJQUExQixFQUFnQyxLQUFLUCxHQUFyQyxFQUEwQyxLQUFLQyxRQUEvQyxFQUF5RGlCLE1BQXpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHcUI7QUFDbEMsYUFBTyxJQUFJRyw0QkFBSixDQUFxQixLQUFLZCxJQUExQixFQUFnQ08sS0FBaEMsRUFBUDtBQUNEOzs7OEJBRXFDO0FBQ3BDLGFBQU8sSUFBSVEsOEJBQUosQ0FBdUIsS0FBS2YsSUFBNUIsRUFBa0NTLE9BQWxDLEVBQVA7QUFDRDs7O2tDQUV5QztBQUN4QyxhQUFPLElBQUlPLGtDQUFKLENBQTJCLEtBQUtoQixJQUFoQyxFQUFzQyxLQUFLUCxHQUEzQyxFQUFnRCxHQUFoRCxFQUFxRGUsV0FBckQsRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbydcblxuaW1wb3J0IE1ldGFJbWFnZVNjcmFwZXIgZnJvbSAnLi9zY3JhcGVyL21ldGFJbWFnZVNjcmFwZXInXG5pbXBvcnQgTWV0YURlc2NyaXB0aW9uU2NyYXBlciBmcm9tICcuL3NjcmFwZXIvbWV0YURlc2NyaXB0aW9uU2NyYXBlcidcbmltcG9ydCBNZXRhVGl0bGVTY3JhcGVyIGZyb20gJy4vc2NyYXBlci9tZXRhVGl0bGVTY3JhcGVyJ1xuaW1wb3J0IE1ldGFGYXZpY29uU2NyYXBlciBmcm9tICcuL3NjcmFwZXIvbWV0YUZhdmljb25TY3JhcGVyJ1xuXG50eXBlIE1ldGFkYXRhID0ge1xuICB0aXRsZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBpbWFnZVVybHM/OiBzdHJpbmdbXVxuICBmYXZpY29uPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YVNjcmFwZXIge1xuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUga2V5d29yZHM6IHN0cmluZ1tdXG4gIHByaXZhdGUgZmV0Y2hlcjogRnVuY3Rpb25cbiAgcHJpdmF0ZSBwYWdlOiBhbnlcblxuICBwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmdbXSwgZmV0Y2hlcjogRnVuY3Rpb24gPSBmZXRjaCkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzXG4gICAgdGhpcy5mZXRjaGVyID0gZmV0Y2hlclxuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvYWRQYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hlcih0aGlzLnVybClcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgIHRoaXMucGFnZSA9IGNoZWVyaW8ubG9hZChodG1sLCB7XG4gICAgICAgIHhtbE1vZGU6IHRydWUsXG4gICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgIGRlY29kZUVudGl0aWVzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzY3JhcGUoKTogUHJvbWlzZTxNZXRhZGF0YT4ge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG5cbiAgICB0cnkge1xuICAgICAgbWV0YWRhdGEudGl0bGUgPSB0aGlzLnRpdGxlKClcbiAgICAgIG1ldGFkYXRhLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbigpXG4gICAgICBtZXRhZGF0YS5mYXZpY29uID0gdGhpcy5mYXZpY29uKClcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIG1ldGFkYXRhLmltYWdlVXJscyA9IGF3YWl0IHRoaXMuaW1hZ2VzKClcblxuICAgIHJldHVybiBtZXRhZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbWFnZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBNZXRhSW1hZ2VTY3JhcGVyKHRoaXMucGFnZSwgdGhpcy51cmwsIHRoaXMua2V5d29yZHMpLmltYWdlcygpXG4gIH1cblxuICBwcml2YXRlIHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5ldyBNZXRhVGl0bGVTY3JhcGVyKHRoaXMucGFnZSkudGl0bGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBmYXZpY29uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5ldyBNZXRhRmF2aWNvblNjcmFwZXIodGhpcy5wYWdlKS5mYXZpY29uKClcbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gbmV3IE1ldGFEZXNjcmlwdGlvblNjcmFwZXIodGhpcy5wYWdlLCB0aGlzLnVybCwgMzAwKS5kZXNjcmlwdGlvbigpXG4gIH1cbn1cbiJdfQ==