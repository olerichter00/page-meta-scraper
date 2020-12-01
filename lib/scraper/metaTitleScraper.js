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

var MetaTitleScraper = /*#__PURE__*/function () {
  function MetaTitleScraper(page) {
    (0, _classCallCheck2["default"])(this, MetaTitleScraper);
    (0, _defineProperty2["default"])(this, "strategies", [["meta[property='og:title']", _helper.getContent], ['title', _helper.getText]]);
    this.page = page;
  }

  (0, _createClass2["default"])(MetaTitleScraper, [{
    key: "title",
    value: function title() {
      var _this = this;

      var title = this.strategies.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            selector = _ref2[0],
            handler = _ref2[1];

        return handler(_this.page, selector);
      }).filter(function (title) {
        return title;
      }).map(function (title) {
        return String(title);
      });
      return title[0];
    }
  }]);
  return MetaTitleScraper;
}();

exports["default"] = MetaTitleScraper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVyL21ldGFUaXRsZVNjcmFwZXIudHMiXSwibmFtZXMiOlsiTWV0YVRpdGxlU2NyYXBlciIsInBhZ2UiLCJnZXRDb250ZW50IiwiZ2V0VGV4dCIsInRpdGxlIiwic3RyYXRlZ2llcyIsIm1hcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsImZpbHRlciIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLGdCO0FBR25CLDRCQUFtQkMsSUFBbkIsRUFBaUM7QUFBQTtBQUFBLHlEQWE4RCxDQUM3RixDQUFDLDJCQUFELEVBQThCQyxrQkFBOUIsQ0FENkYsRUFFN0YsQ0FBQyxPQUFELEVBQVVDLGVBQVYsQ0FGNkYsQ0FiOUQ7QUFDL0IsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NEJBRWtDO0FBQUE7O0FBQ2pDLFVBQU1HLEtBQUssR0FBRyxLQUFLQyxVQUFMLENBQ1hDLEdBRFcsQ0FDUDtBQUFBO0FBQUEsWUFBRUMsUUFBRjtBQUFBLFlBQVlDLE9BQVo7O0FBQUEsZUFBeUJBLE9BQU8sQ0FBQyxLQUFJLENBQUNQLElBQU4sRUFBWU0sUUFBWixDQUFoQztBQUFBLE9BRE8sRUFFWEUsTUFGVyxDQUVKLFVBQUFMLEtBQUs7QUFBQSxlQUFJQSxLQUFKO0FBQUEsT0FGRCxFQUdYRSxHQUhXLENBR1AsVUFBQUYsS0FBSztBQUFBLGVBQUlNLE1BQU0sQ0FBQ04sS0FBRCxDQUFWO0FBQUEsT0FIRSxDQUFkO0FBS0EsYUFBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29udGVudCwgZ2V0VGV4dCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YVRpdGxlU2NyYXBlciB7XG4gIHByaXZhdGUgcGFnZTogYW55XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBhZ2U6IHN0cmluZykge1xuICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgfVxuXG4gIHB1YmxpYyB0aXRsZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5zdHJhdGVnaWVzXG4gICAgICAubWFwKChbc2VsZWN0b3IsIGhhbmRsZXJdKSA9PiBoYW5kbGVyKHRoaXMucGFnZSwgc2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcih0aXRsZSA9PiB0aXRsZSlcbiAgICAgIC5tYXAodGl0bGUgPT4gU3RyaW5nKHRpdGxlKSlcblxuICAgIHJldHVybiB0aXRsZVswXVxuICB9XG5cbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBbc3RyaW5nLCAocGFnZTogY2hlZXJpby5Sb290LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBzdHJpbmcgfCB1bmRlZmluZWRdW10gPSBbXG4gICAgW1wibWV0YVtwcm9wZXJ0eT0nb2c6dGl0bGUnXVwiLCBnZXRDb250ZW50XSxcbiAgICBbJ3RpdGxlJywgZ2V0VGV4dF0sXG4gIF1cbn1cbiJdfQ==