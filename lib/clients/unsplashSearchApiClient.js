"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../config"));

var fetchImagesFromSearch = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(keywords) {
    var params, headers, url, response, json, images;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              query: keywords.join(' ')
            };
            headers = {
              Authorization: "Client-ID ".concat(_config["default"].unsplashClientId)
            };
            url = new URL(_config["default"].unsplashBaseUrl);
            Object.keys(params).forEach(function (key) {
              return url.searchParams.append(key, params[key]);
            });
            _context.next = 6;
            return fetch(url.toString(), {
              headers: headers
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            json = _context.sent;
            images = json.results.map(function (image) {
              return image.urls.small;
            });
            return _context.abrupt("return", images);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchImagesFromSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = fetchImagesFromSearch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnRzL3Vuc3BsYXNoU2VhcmNoQXBpQ2xpZW50LnRzIl0sIm5hbWVzIjpbImZldGNoSW1hZ2VzRnJvbVNlYXJjaCIsImtleXdvcmRzIiwicGFyYW1zIiwicXVlcnkiLCJqb2luIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25maWciLCJ1bnNwbGFzaENsaWVudElkIiwidXJsIiwiVVJMIiwidW5zcGxhc2hCYXNlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJmZXRjaCIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJqc29uIiwiaW1hZ2VzIiwicmVzdWx0cyIsIm1hcCIsImltYWdlIiwidXJscyIsInNtYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBZUEsSUFBTUEscUJBQXFCO0FBQUEsMkZBQUcsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCQyxZQUFBQSxNQURzQixHQUNMO0FBQ3JCQyxjQUFBQSxLQUFLLEVBQUVGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEdBQWQ7QUFEYyxhQURLO0FBS3RCQyxZQUFBQSxPQUxzQixHQUtaO0FBQ2RDLGNBQUFBLGFBQWEsc0JBQWVDLG1CQUFPQyxnQkFBdEI7QUFEQyxhQUxZO0FBU3RCQyxZQUFBQSxHQVRzQixHQVNoQixJQUFJQyxHQUFKLENBQVFILG1CQUFPSSxlQUFmLENBVGdCO0FBVTVCQyxZQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVgsTUFBWixFQUFvQlksT0FBcEIsQ0FBNEIsVUFBQUMsR0FBRztBQUFBLHFCQUFJTixHQUFHLENBQUNPLFlBQUosQ0FBaUJDLE1BQWpCLENBQXdCRixHQUF4QixFQUE2QmIsTUFBTSxDQUFDYSxHQUFELENBQW5DLENBQUo7QUFBQSxhQUEvQjtBQVY0QjtBQUFBLG1CQVlMRyxLQUFLLENBQUNULEdBQUcsQ0FBQ1UsUUFBSixFQUFELEVBQWlCO0FBQUVkLGNBQUFBLE9BQU8sRUFBUEE7QUFBRixhQUFqQixDQVpBOztBQUFBO0FBWXRCZSxZQUFBQSxRQVpzQjtBQUFBO0FBQUEsbUJBYUtBLFFBQVEsQ0FBQ0MsSUFBVCxFQWJMOztBQUFBO0FBYXRCQSxZQUFBQSxJQWJzQjtBQWV0QkMsWUFBQUEsTUFmc0IsR0FlYkQsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLHFCQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBZjtBQUFBLGFBQXRCLENBZmE7QUFBQSw2Q0FpQnJCTCxNQWpCcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBckJ0QixxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O2VBb0JlQSxxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgcXVlcnk6IHN0cmluZ1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxudHlwZSBKc29uUmVzcG9uc2UgPSB7XG4gIHJlc3VsdHM6IHtcbiAgICB1cmxzOiB7XG4gICAgICBzbWFsbDogc3RyaW5nXG4gICAgfVxuICB9W11cbn1cblxuY29uc3QgZmV0Y2hJbWFnZXNGcm9tU2VhcmNoID0gYXN5bmMgKGtleXdvcmRzOiBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcbiAgY29uc3QgcGFyYW1zOiBQYXJhbXMgPSB7XG4gICAgcXVlcnk6IGtleXdvcmRzLmpvaW4oJyAnKSxcbiAgfVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgQXV0aG9yaXphdGlvbjogYENsaWVudC1JRCAke2NvbmZpZy51bnNwbGFzaENsaWVudElkfWAsXG4gIH1cblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGNvbmZpZy51bnNwbGFzaEJhc2VVcmwpXG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbXNba2V5XSkpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSwgeyBoZWFkZXJzIH0pXG4gIGNvbnN0IGpzb246IEpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIGNvbnN0IGltYWdlcyA9IGpzb24ucmVzdWx0cy5tYXAoaW1hZ2UgPT4gaW1hZ2UudXJscy5zbWFsbClcblxuICByZXR1cm4gaW1hZ2VzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoSW1hZ2VzRnJvbVNlYXJjaFxuIl19