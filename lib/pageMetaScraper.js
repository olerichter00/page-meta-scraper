"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageMetaScraper = exports["default"] = exports.scrape = exports.configure = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _metaImageScraper = _interopRequireDefault(require("./scraper/metaImageScraper"));

var _metaDescriptionScraper = _interopRequireDefault(require("./scraper/metaDescriptionScraper"));

var _metaTitleScraper = _interopRequireDefault(require("./scraper/metaTitleScraper"));

var _metaFaviconScraper = _interopRequireDefault(require("./scraper/metaFaviconScraper"));

var _config = _interopRequireDefault(require("./config"));

var configure = function configure(params) {
  Object.assign(_config["default"], params);
};

exports.configure = configure;

var scrape = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, keywords) {
    var fetcher,
        metadataScraper,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetcher = _args.length > 2 && _args[2] !== undefined ? _args[2] : fetch;
            metadataScraper = new PageMetaScraper(url, keywords, fetcher);
            _context.next = 4;
            return metadataScraper.loadPage();

          case 4:
            _context.next = 6;
            return metadataScraper.scrape();

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function scrape(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.scrape = scrape;
var _default = {
  configure: configure,
  scrape: scrape
};
exports["default"] = _default;

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
      var _loadPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var response, html;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.fetcher(this.url);

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.text();

              case 6:
                html = _context2.sent;
                this.page = _cheerio["default"].load(html, {
                  xmlMode: true,
                  normalizeWhitespace: true,
                  decodeEntities: true
                });
                _context2.next = 12;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function loadPage() {
        return _loadPage.apply(this, arguments);
      }

      return loadPage;
    }()
  }, {
    key: "scrape",
    value: function () {
      var _scrape = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var metadata;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                metadata = {};

                try {
                  metadata.title = this.title();
                  metadata.description = this.description();
                  metadata.favicon = this.favicon();
                } catch (error) {}

                _context3.next = 4;
                return this.images();

              case 4:
                metadata.imageUrls = _context3.sent;
                return _context3.abrupt("return", metadata);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function scrape() {
        return _scrape.apply(this, arguments);
      }

      return scrape;
    }()
  }, {
    key: "images",
    value: function () {
      var _images = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return new _metaImageScraper["default"](this.page, this.url, this.keywords).images();

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdlTWV0YVNjcmFwZXIudHMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwicGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uZmlnIiwic2NyYXBlIiwidXJsIiwia2V5d29yZHMiLCJmZXRjaGVyIiwiZmV0Y2giLCJtZXRhZGF0YVNjcmFwZXIiLCJQYWdlTWV0YVNjcmFwZXIiLCJsb2FkUGFnZSIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJwYWdlIiwiY2hlZXJpbyIsImxvYWQiLCJ4bWxNb2RlIiwibm9ybWFsaXplV2hpdGVzcGFjZSIsImRlY29kZUVudGl0aWVzIiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZmF2aWNvbiIsImVycm9yIiwiaW1hZ2VzIiwiaW1hZ2VVcmxzIiwiTWV0YUltYWdlU2NyYXBlciIsIk1ldGFUaXRsZVNjcmFwZXIiLCJNZXRhRmF2aWNvblNjcmFwZXIiLCJNZXRhRGVzY3JpcHRpb25TY3JhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBb0I7QUFDM0NDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrQkFBZCxFQUFzQkgsTUFBdEI7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUksTUFBTTtBQUFBLDJGQUFHLGlCQUFPQyxHQUFQLEVBQW9CQyxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDQyxZQUFBQSxPQUF4QywyREFBNERDLEtBQTVEO0FBQ2RDLFlBQUFBLGVBRGMsR0FDSSxJQUFJQyxlQUFKLENBQW9CTCxHQUFwQixFQUF5QkMsUUFBekIsRUFBbUNDLE9BQW5DLENBREo7QUFBQTtBQUFBLG1CQUdkRSxlQUFlLENBQUNFLFFBQWhCLEVBSGM7O0FBQUE7QUFBQTtBQUFBLG1CQUtQRixlQUFlLENBQUNMLE1BQWhCLEVBTE87O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFOQSxNQUFNO0FBQUE7QUFBQTtBQUFBLEdBQVo7OztlQVFRO0FBQ2JMLEVBQUFBLFNBQVMsRUFBRUEsU0FERTtBQUViSyxFQUFBQSxNQUFNLEVBQUVBO0FBRkssQzs7O0lBS0ZNLGU7QUFNWCwyQkFBbUJMLEdBQW5CLEVBQWdDQyxRQUFoQyxFQUErRTtBQUFBLFFBQTNCQyxPQUEyQix1RUFBUEMsS0FBTztBQUFBO0FBQzdFLFNBQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7dUJBSTBCLEtBQUtBLE9BQUwsQ0FBYSxLQUFLRixHQUFsQixDOzs7QUFBakJPLGdCQUFBQSxROzt1QkFDYUEsUUFBUSxDQUFDQyxJQUFULEU7OztBQUFiQyxnQkFBQUEsSTtBQUNOLHFCQUFLQyxJQUFMLEdBQVlDLG9CQUFRQyxJQUFSLENBQWFILElBQWIsRUFBbUI7QUFDN0JJLGtCQUFBQSxPQUFPLEVBQUUsSUFEb0I7QUFFN0JDLGtCQUFBQSxtQkFBbUIsRUFBRSxJQUZRO0FBRzdCQyxrQkFBQUEsY0FBYyxFQUFFO0FBSGEsaUJBQW5CLENBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTSUMsZ0JBQUFBLFEsR0FBcUIsRTs7QUFFM0Isb0JBQUk7QUFDRkEsa0JBQUFBLFFBQVEsQ0FBQ0MsS0FBVCxHQUFpQixLQUFLQSxLQUFMLEVBQWpCO0FBQ0FELGtCQUFBQSxRQUFRLENBQUNFLFdBQVQsR0FBdUIsS0FBS0EsV0FBTCxFQUF2QjtBQUNBRixrQkFBQUEsUUFBUSxDQUFDRyxPQUFULEdBQW1CLEtBQUtBLE9BQUwsRUFBbkI7QUFDRCxpQkFKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYyxDQUFFOzs7dUJBRVMsS0FBS0MsTUFBTCxFOzs7QUFBM0JMLGdCQUFBQSxRQUFRLENBQUNNLFM7a0RBRUZOLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSU0sSUFBSU8sNEJBQUosQ0FBcUIsS0FBS2IsSUFBMUIsRUFBZ0MsS0FBS1YsR0FBckMsRUFBMEMsS0FBS0MsUUFBL0MsRUFBeURvQixNQUF6RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBR3FCO0FBQ2xDLGFBQU8sSUFBSUcsNEJBQUosQ0FBcUIsS0FBS2QsSUFBMUIsRUFBZ0NPLEtBQWhDLEVBQVA7QUFDRDs7OzhCQUVxQztBQUNwQyxhQUFPLElBQUlRLDhCQUFKLENBQXVCLEtBQUtmLElBQTVCLEVBQWtDUyxPQUFsQyxFQUFQO0FBQ0Q7OztrQ0FFeUM7QUFDeEMsYUFBTyxJQUFJTyxrQ0FBSixDQUEyQixLQUFLaEIsSUFBaEMsRUFBc0MsS0FBS1YsR0FBM0MsRUFBZ0QsR0FBaEQsRUFBcURrQixXQUFyRCxFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJ1xuXG5pbXBvcnQgTWV0YUltYWdlU2NyYXBlciBmcm9tICcuL3NjcmFwZXIvbWV0YUltYWdlU2NyYXBlcidcbmltcG9ydCBNZXRhRGVzY3JpcHRpb25TY3JhcGVyIGZyb20gJy4vc2NyYXBlci9tZXRhRGVzY3JpcHRpb25TY3JhcGVyJ1xuaW1wb3J0IE1ldGFUaXRsZVNjcmFwZXIgZnJvbSAnLi9zY3JhcGVyL21ldGFUaXRsZVNjcmFwZXInXG5pbXBvcnQgTWV0YUZhdmljb25TY3JhcGVyIGZyb20gJy4vc2NyYXBlci9tZXRhRmF2aWNvblNjcmFwZXInXG5pbXBvcnQgY29uZmlnLCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuXG50eXBlIE1ldGFkYXRhID0ge1xuICB0aXRsZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBpbWFnZVVybHM/OiBzdHJpbmdbXVxuICBmYXZpY29uPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmUgPSAocGFyYW1zOiBDb25maWcpID0+IHtcbiAgT2JqZWN0LmFzc2lnbihjb25maWcsIHBhcmFtcylcbn1cblxuZXhwb3J0IGNvbnN0IHNjcmFwZSA9IGFzeW5jICh1cmw6IHN0cmluZywga2V5d29yZHM6IHN0cmluZ1tdLCBmZXRjaGVyOiBGdW5jdGlvbiA9IGZldGNoKSA9PiB7XG4gIGNvbnN0IG1ldGFkYXRhU2NyYXBlciA9IG5ldyBQYWdlTWV0YVNjcmFwZXIodXJsLCBrZXl3b3JkcywgZmV0Y2hlcilcblxuICBhd2FpdCBtZXRhZGF0YVNjcmFwZXIubG9hZFBhZ2UoKVxuXG4gIHJldHVybiBhd2FpdCBtZXRhZGF0YVNjcmFwZXIuc2NyYXBlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWd1cmU6IGNvbmZpZ3VyZSxcbiAgc2NyYXBlOiBzY3JhcGUsXG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YVNjcmFwZXIge1xuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIHByaXZhdGUga2V5d29yZHM6IHN0cmluZ1tdXG4gIHByaXZhdGUgZmV0Y2hlcjogRnVuY3Rpb25cbiAgcHJpdmF0ZSBwYWdlOiBhbnlcblxuICBwdWJsaWMgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmdbXSwgZmV0Y2hlcjogRnVuY3Rpb24gPSBmZXRjaCkge1xuICAgIHRoaXMudXJsID0gdXJsXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzXG4gICAgdGhpcy5mZXRjaGVyID0gZmV0Y2hlclxuICB9XG5cbiAgcHVibGljIGFzeW5jIGxvYWRQYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hlcih0aGlzLnVybClcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgIHRoaXMucGFnZSA9IGNoZWVyaW8ubG9hZChodG1sLCB7XG4gICAgICAgIHhtbE1vZGU6IHRydWUsXG4gICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWUsXG4gICAgICAgIGRlY29kZUVudGl0aWVzOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzY3JhcGUoKTogUHJvbWlzZTxNZXRhZGF0YT4ge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9XG5cbiAgICB0cnkge1xuICAgICAgbWV0YWRhdGEudGl0bGUgPSB0aGlzLnRpdGxlKClcbiAgICAgIG1ldGFkYXRhLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbigpXG4gICAgICBtZXRhZGF0YS5mYXZpY29uID0gdGhpcy5mYXZpY29uKClcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIG1ldGFkYXRhLmltYWdlVXJscyA9IGF3YWl0IHRoaXMuaW1hZ2VzKClcblxuICAgIHJldHVybiBtZXRhZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbWFnZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBNZXRhSW1hZ2VTY3JhcGVyKHRoaXMucGFnZSwgdGhpcy51cmwsIHRoaXMua2V5d29yZHMpLmltYWdlcygpXG4gIH1cblxuICBwcml2YXRlIHRpdGxlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5ldyBNZXRhVGl0bGVTY3JhcGVyKHRoaXMucGFnZSkudGl0bGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBmYXZpY29uKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5ldyBNZXRhRmF2aWNvblNjcmFwZXIodGhpcy5wYWdlKS5mYXZpY29uKClcbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpcHRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gbmV3IE1ldGFEZXNjcmlwdGlvblNjcmFwZXIodGhpcy5wYWdlLCB0aGlzLnVybCwgMzAwKS5kZXNjcmlwdGlvbigpXG4gIH1cbn1cbiJdfQ==