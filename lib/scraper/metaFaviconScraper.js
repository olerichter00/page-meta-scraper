"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _helper = require("../utils/helper");

var MetaFaviconScraper = /*#__PURE__*/function () {
  function MetaFaviconScraper(page) {
    (0, _classCallCheck2["default"])(this, MetaFaviconScraper);
    (0, _defineProperty2["default"])(this, "strategies", [["link[rel='icon']", _helper.getHref]]);
    this.page = page;
  }

  (0, _createClass2["default"])(MetaFaviconScraper, [{
    key: "favicon",
    value: function favicon() {
      var _this = this;

      var favicons = this.strategies.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            selector = _ref2[0],
            handler = _ref2[1];

        return handler(_this.page, selector);
      }).filter(function (favicons) {
        return favicons;
      }).map(function (favicons) {
        return String(favicons);
      });
      return favicons[0];
    }
  }]);
  return MetaFaviconScraper;
}();

exports["default"] = MetaFaviconScraper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVyL21ldGFGYXZpY29uU2NyYXBlci50cyJdLCJuYW1lcyI6WyJNZXRhRmF2aWNvblNjcmFwZXIiLCJwYWdlIiwiZ2V0SHJlZiIsImZhdmljb25zIiwic3RyYXRlZ2llcyIsIm1hcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsImZpbHRlciIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLGtCO0FBR25CLDhCQUFtQkMsSUFBbkIsRUFBaUM7QUFBQTtBQUFBLHlEQWE4RCxDQUM3RixDQUFDLGtCQUFELEVBQXFCQyxlQUFyQixDQUQ2RixDQWI5RDtBQUMvQixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFb0M7QUFBQTs7QUFDbkMsVUFBTUUsUUFBUSxHQUFHLEtBQUtDLFVBQUwsQ0FDZEMsR0FEYyxDQUNWO0FBQUE7QUFBQSxZQUFFQyxRQUFGO0FBQUEsWUFBWUMsT0FBWjs7QUFBQSxlQUF5QkEsT0FBTyxDQUFDLEtBQUksQ0FBQ04sSUFBTixFQUFZSyxRQUFaLENBQWhDO0FBQUEsT0FEVSxFQUVkRSxNQUZjLENBRVAsVUFBQUwsUUFBUTtBQUFBLGVBQUlBLFFBQUo7QUFBQSxPQUZELEVBR2RFLEdBSGMsQ0FHVixVQUFBRixRQUFRO0FBQUEsZUFBSU0sTUFBTSxDQUFDTixRQUFELENBQVY7QUFBQSxPQUhFLENBQWpCO0FBS0EsYUFBT0EsUUFBUSxDQUFDLENBQUQsQ0FBZjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SHJlZiB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUZhdmljb25TY3JhcGVyIHtcbiAgcHJpdmF0ZSBwYWdlOiBhbnlcblxuICBwdWJsaWMgY29uc3RydWN0b3IocGFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZVxuICB9XG5cbiAgcHVibGljIGZhdmljb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmYXZpY29ucyA9IHRoaXMuc3RyYXRlZ2llc1xuICAgICAgLm1hcCgoW3NlbGVjdG9yLCBoYW5kbGVyXSkgPT4gaGFuZGxlcih0aGlzLnBhZ2UsIHNlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoZmF2aWNvbnMgPT4gZmF2aWNvbnMpXG4gICAgICAubWFwKGZhdmljb25zID0+IFN0cmluZyhmYXZpY29ucykpXG5cbiAgICByZXR1cm4gZmF2aWNvbnNbMF1cbiAgfVxuXG4gIHByaXZhdGUgc3RyYXRlZ2llczogW3N0cmluZywgKHBhZ2U6IGNoZWVyaW8uUm9vdCwgc2VsZWN0b3I6IHN0cmluZykgPT4gc3RyaW5nIHwgdW5kZWZpbmVkXVtdID0gW1xuICAgIFtcImxpbmtbcmVsPSdpY29uJ11cIiwgZ2V0SHJlZl0sXG4gIF1cbn1cbiJdfQ==