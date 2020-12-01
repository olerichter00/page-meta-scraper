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

var MetaDescriptionScraper = /*#__PURE__*/function () {
  function MetaDescriptionScraper(page, url, truncateLength) {
    (0, _classCallCheck2["default"])(this, MetaDescriptionScraper);
    (0, _defineProperty2["default"])(this, "MAX_LENGTH", 5000);
    (0, _defineProperty2["default"])(this, "strategies", [["meta[property='og:description']", _helper.getContent], ["meta[property='twitter:description']", _helper.getContent], ["meta[name='description']", _helper.getContent], ["meta[itemprop='description']", _helper.getContent], ["meta[property='og:description']", _helper.getContent], ['p', _helper.getText], ['pre', _helper.getText]]);
    this.page = page;
    this.url = url;
    this.truncateLength = truncateLength || this.MAX_LENGTH;
  }

  (0, _createClass2["default"])(MetaDescriptionScraper, [{
    key: "description",
    value: function description() {
      var _this = this;

      if (this.isAPdf()) return '';
      var descriptions = this.strategies.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
            selector = _ref2[0],
            handler = _ref2[1];

        return handler(_this.page, selector);
      }).map(function (description) {
        return description && description.replace(/(<([^>]+)>)/gi, ' ').replace(/&.*;/g, ' ');
      }).filter(function (description) {
        return description;
      }).map(function (description) {
        return String(description);
      });
      return descriptions[0] && descriptions[0].slice(0, this.truncateLength);
    }
  }, {
    key: "isAPdf",
    value: function isAPdf() {
      return this.url.endsWith('.pdf');
    }
  }]);
  return MetaDescriptionScraper;
}();

exports["default"] = MetaDescriptionScraper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVyL21ldGFEZXNjcmlwdGlvblNjcmFwZXIudHMiXSwibmFtZXMiOlsiTWV0YURlc2NyaXB0aW9uU2NyYXBlciIsInBhZ2UiLCJ1cmwiLCJ0cnVuY2F0ZUxlbmd0aCIsImdldENvbnRlbnQiLCJnZXRUZXh0IiwiTUFYX0xFTkdUSCIsImlzQVBkZiIsImRlc2NyaXB0aW9ucyIsInN0cmF0ZWdpZXMiLCJtYXAiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJmaWx0ZXIiLCJTdHJpbmciLCJzbGljZSIsImVuZHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsc0I7QUFPbkIsa0NBQW1CQyxJQUFuQixFQUFpQ0MsR0FBakMsRUFBOENDLGNBQTlDLEVBQXVFO0FBQUE7QUFBQSx5REFGbEQsSUFFa0Q7QUFBQSx5REF5QnVCLENBQzVGLENBQUMsaUNBQUQsRUFBb0NDLGtCQUFwQyxDQUQ0RixFQUU1RixDQUFDLHNDQUFELEVBQXlDQSxrQkFBekMsQ0FGNEYsRUFHNUYsQ0FBQywwQkFBRCxFQUE2QkEsa0JBQTdCLENBSDRGLEVBSTVGLENBQUMsOEJBQUQsRUFBaUNBLGtCQUFqQyxDQUo0RixFQUs1RixDQUFDLGlDQUFELEVBQW9DQSxrQkFBcEMsQ0FMNEYsRUFNNUYsQ0FBQyxHQUFELEVBQU1DLGVBQU4sQ0FONEYsRUFPNUYsQ0FBQyxLQUFELEVBQVFBLGVBQVIsQ0FQNEYsQ0F6QnZCO0FBQ3JFLFNBQUtKLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQWMsSUFBSSxLQUFLRyxVQUE3QztBQUNEOzs7O2tDQUV3QztBQUFBOztBQUN2QyxVQUFJLEtBQUtDLE1BQUwsRUFBSixFQUFtQixPQUFPLEVBQVA7QUFFbkIsVUFBTUMsWUFBWSxHQUFHLEtBQUtDLFVBQUwsQ0FDbEJDLEdBRGtCLENBQ2Q7QUFBQTtBQUFBLFlBQUVDLFFBQUY7QUFBQSxZQUFZQyxPQUFaOztBQUFBLGVBQXlCQSxPQUFPLENBQUMsS0FBSSxDQUFDWCxJQUFOLEVBQVlVLFFBQVosQ0FBaEM7QUFBQSxPQURjLEVBRWxCRCxHQUZrQixDQUdqQixVQUFBRyxXQUFXO0FBQUEsZUFDVEEsV0FBVyxJQUFJQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsZUFBcEIsRUFBcUMsR0FBckMsRUFBMENBLE9BQTFDLENBQWtELE9BQWxELEVBQTJELEdBQTNELENBRE47QUFBQSxPQUhNLEVBTWxCQyxNQU5rQixDQU1YLFVBQUFGLFdBQVc7QUFBQSxlQUFJQSxXQUFKO0FBQUEsT0FOQSxFQU9sQkgsR0FQa0IsQ0FPZCxVQUFBRyxXQUFXO0FBQUEsZUFBSUcsTUFBTSxDQUFDSCxXQUFELENBQVY7QUFBQSxPQVBHLENBQXJCO0FBU0EsYUFBT0wsWUFBWSxDQUFDLENBQUQsQ0FBWixJQUFtQkEsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQlMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsS0FBS2QsY0FBOUIsQ0FBMUI7QUFDRDs7OzZCQUV5QjtBQUN4QixhQUFPLEtBQUtELEdBQUwsQ0FBU2dCLFFBQVQsQ0FBa0IsTUFBbEIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29udGVudCwgZ2V0VGV4dCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YURlc2NyaXB0aW9uU2NyYXBlciB7XG4gIHByaXZhdGUgcGFnZTogYW55XG4gIHByaXZhdGUgdXJsOiBzdHJpbmdcbiAgcHJpdmF0ZSB0cnVuY2F0ZUxlbmd0aDogbnVtYmVyXG5cbiAgcHJpdmF0ZSBNQVhfTEVOR1RIID0gNTAwMFxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwYWdlOiBzdHJpbmcsIHVybDogc3RyaW5nLCB0cnVuY2F0ZUxlbmd0aD86IG51bWJlcikge1xuICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgICB0aGlzLnVybCA9IHVybFxuICAgIHRoaXMudHJ1bmNhdGVMZW5ndGggPSB0cnVuY2F0ZUxlbmd0aCB8fCB0aGlzLk1BWF9MRU5HVEhcbiAgfVxuXG4gIHB1YmxpYyBkZXNjcmlwdGlvbigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmlzQVBkZigpKSByZXR1cm4gJydcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IHRoaXMuc3RyYXRlZ2llc1xuICAgICAgLm1hcCgoW3NlbGVjdG9yLCBoYW5kbGVyXSkgPT4gaGFuZGxlcih0aGlzLnBhZ2UsIHNlbGVjdG9yKSlcbiAgICAgIC5tYXAoXG4gICAgICAgIGRlc2NyaXB0aW9uID0+XG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcgJykucmVwbGFjZSgvJi4qOy9nLCAnICcpLFxuICAgICAgKVxuICAgICAgLmZpbHRlcihkZXNjcmlwdGlvbiA9PiBkZXNjcmlwdGlvbilcbiAgICAgIC5tYXAoZGVzY3JpcHRpb24gPT4gU3RyaW5nKGRlc2NyaXB0aW9uKSlcblxuICAgIHJldHVybiBkZXNjcmlwdGlvbnNbMF0gJiYgZGVzY3JpcHRpb25zWzBdLnNsaWNlKDAsIHRoaXMudHJ1bmNhdGVMZW5ndGgpXG4gIH1cblxuICBwcml2YXRlIGlzQVBkZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy51cmwuZW5kc1dpdGgoJy5wZGYnKVxuICB9XG5cbiAgcHJpdmF0ZSBzdHJhdGVnaWVzOiBbc3RyaW5nLCAocGFnZTogY2hlZXJpby5Sb290LCBlbGVtZW50OiBzdHJpbmcpID0+IHN0cmluZyB8IHVuZGVmaW5lZF1bXSA9IFtcbiAgICBbXCJtZXRhW3Byb3BlcnR5PSdvZzpkZXNjcmlwdGlvbiddXCIsIGdldENvbnRlbnRdLFxuICAgIFtcIm1ldGFbcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nXVwiLCBnZXRDb250ZW50XSxcbiAgICBbXCJtZXRhW25hbWU9J2Rlc2NyaXB0aW9uJ11cIiwgZ2V0Q29udGVudF0sXG4gICAgW1wibWV0YVtpdGVtcHJvcD0nZGVzY3JpcHRpb24nXVwiLCBnZXRDb250ZW50XSxcbiAgICBbXCJtZXRhW3Byb3BlcnR5PSdvZzpkZXNjcmlwdGlvbiddXCIsIGdldENvbnRlbnRdLFxuICAgIFsncCcsIGdldFRleHRdLFxuICAgIFsncHJlJywgZ2V0VGV4dF0sXG4gIF1cbn1cbiJdfQ==