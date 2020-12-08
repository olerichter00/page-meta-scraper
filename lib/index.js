"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.scrape = exports.configure = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pageMetaScraper = require("../src/pageMetaScraper");

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
            metadataScraper = new _pageMetaScraper.PageMetaScraper(url, keywords, fetcher);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjb25maWd1cmUiLCJwYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25maWciLCJzY3JhcGUiLCJ1cmwiLCJrZXl3b3JkcyIsImZldGNoZXIiLCJmZXRjaCIsIm1ldGFkYXRhU2NyYXBlciIsIlBhZ2VNZXRhU2NyYXBlciIsImxvYWRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFvQjtBQUMzQ0MsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGtCQUFkLEVBQXNCSCxNQUF0QjtBQUNELENBRk07Ozs7QUFJQSxJQUFNSSxNQUFNO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBb0JDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0NDLFlBQUFBLE9BQXhDLDJEQUE0REMsS0FBNUQ7QUFDZEMsWUFBQUEsZUFEYyxHQUNJLElBQUlDLGdDQUFKLENBQW9CTCxHQUFwQixFQUF5QkMsUUFBekIsRUFBbUNDLE9BQW5DLENBREo7QUFBQTtBQUFBLG1CQUdkRSxlQUFlLENBQUNFLFFBQWhCLEVBSGM7O0FBQUE7QUFBQTtBQUFBLG1CQUtQRixlQUFlLENBQUNMLE1BQWhCLEVBTE87O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFOQSxNQUFNO0FBQUE7QUFBQTtBQUFBLEdBQVo7OztlQVFRO0FBQ2JMLEVBQUFBLFNBQVMsRUFBRUEsU0FERTtBQUViSyxFQUFBQSxNQUFNLEVBQUVBO0FBRkssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VNZXRhU2NyYXBlciB9IGZyb20gJy4uL3NyYy9wYWdlTWV0YVNjcmFwZXInXG5pbXBvcnQgY29uZmlnLCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJlID0gKHBhcmFtczogQ29uZmlnKSA9PiB7XG4gIE9iamVjdC5hc3NpZ24oY29uZmlnLCBwYXJhbXMpXG59XG5cbmV4cG9ydCBjb25zdCBzY3JhcGUgPSBhc3luYyAodXJsOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmdbXSwgZmV0Y2hlcjogRnVuY3Rpb24gPSBmZXRjaCkgPT4ge1xuICBjb25zdCBtZXRhZGF0YVNjcmFwZXIgPSBuZXcgUGFnZU1ldGFTY3JhcGVyKHVybCwga2V5d29yZHMsIGZldGNoZXIpXG5cbiAgYXdhaXQgbWV0YWRhdGFTY3JhcGVyLmxvYWRQYWdlKClcblxuICByZXR1cm4gYXdhaXQgbWV0YWRhdGFTY3JhcGVyLnNjcmFwZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlndXJlOiBjb25maWd1cmUsXG4gIHNjcmFwZTogc2NyYXBlLFxufVxuIl19