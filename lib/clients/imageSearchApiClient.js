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
              pageNumber: 1,
              pageSize: 10,
              q: keywords.join(' '),
              autoCorrect: true
            };
            headers = {
              'x-rapidapi-host': _config["default"].xRapidapiHost,
              'x-rapidapi-key': _config["default"].xRapidapiKey
            };
            url = new URL(_config["default"].imageSearchBaseUrl);
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
            images = json.value.map(function (image) {
              return image.url;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnRzL2ltYWdlU2VhcmNoQXBpQ2xpZW50LnRzIl0sIm5hbWVzIjpbImZldGNoSW1hZ2VzRnJvbVNlYXJjaCIsImtleXdvcmRzIiwicGFyYW1zIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwicSIsImpvaW4iLCJhdXRvQ29ycmVjdCIsImhlYWRlcnMiLCJjb25maWciLCJ4UmFwaWRhcGlIb3N0IiwieFJhcGlkYXBpS2V5IiwidXJsIiwiVVJMIiwiaW1hZ2VTZWFyY2hCYXNlVXJsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJmZXRjaCIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJqc29uIiwiaW1hZ2VzIiwidmFsdWUiLCJtYXAiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQWdCQSxJQUFNQSxxQkFBcUI7QUFBQSwyRkFBRyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJDLFlBQUFBLE1BRHNCLEdBQ0w7QUFDckJDLGNBQUFBLFVBQVUsRUFBRSxDQURTO0FBRXJCQyxjQUFBQSxRQUFRLEVBQUUsRUFGVztBQUdyQkMsY0FBQUEsQ0FBQyxFQUFFSixRQUFRLENBQUNLLElBQVQsQ0FBYyxHQUFkLENBSGtCO0FBSXJCQyxjQUFBQSxXQUFXLEVBQUU7QUFKUSxhQURLO0FBUXRCQyxZQUFBQSxPQVJzQixHQVFaO0FBQ2QsaUNBQW1CQyxtQkFBT0MsYUFEWjtBQUVkLGdDQUFrQkQsbUJBQU9FO0FBRlgsYUFSWTtBQWF0QkMsWUFBQUEsR0Fic0IsR0FhaEIsSUFBSUMsR0FBSixDQUFRSixtQkFBT0ssa0JBQWYsQ0FiZ0I7QUFjNUJDLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxNQUFaLEVBQW9CZSxPQUFwQixDQUE0QixVQUFBQyxHQUFHO0FBQUEscUJBQUlOLEdBQUcsQ0FBQ08sWUFBSixDQUFpQkMsTUFBakIsQ0FBd0JGLEdBQXhCLEVBQTZCaEIsTUFBTSxDQUFDZ0IsR0FBRCxDQUFuQyxDQUFKO0FBQUEsYUFBL0I7QUFkNEI7QUFBQSxtQkFnQkxHLEtBQUssQ0FBQ1QsR0FBRyxDQUFDVSxRQUFKLEVBQUQsRUFBaUI7QUFBRWQsY0FBQUEsT0FBTyxFQUFFQTtBQUFYLGFBQWpCLENBaEJBOztBQUFBO0FBZ0J0QmUsWUFBQUEsUUFoQnNCO0FBQUE7QUFBQSxtQkFpQktBLFFBQVEsQ0FBQ0MsSUFBVCxFQWpCTDs7QUFBQTtBQWlCdEJBLFlBQUFBLElBakJzQjtBQW1CdEJDLFlBQUFBLE1BbkJzQixHQW1CYkQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFBQyxLQUFLO0FBQUEscUJBQUlBLEtBQUssQ0FBQ2hCLEdBQVY7QUFBQSxhQUFwQixDQW5CYTtBQUFBLDZDQXFCckJhLE1BckJxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQnpCLHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7ZUF3QmVBLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbnR5cGUgUGFyYW1zID0ge1xuICBwYWdlTnVtYmVyOiBudW1iZXJcbiAgcGFnZVNpemU6IG51bWJlclxuICBxOiBzdHJpbmdcbiAgYXV0b0NvcnJlY3Q6IGJvb2xlYW5cbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbnR5cGUgSnNvblJlc3BvbnNlID0ge1xuICB2YWx1ZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1bXVxufVxuXG5jb25zdCBmZXRjaEltYWdlc0Zyb21TZWFyY2ggPSBhc3luYyAoa2V5d29yZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICBjb25zdCBwYXJhbXM6IFBhcmFtcyA9IHtcbiAgICBwYWdlTnVtYmVyOiAxLFxuICAgIHBhZ2VTaXplOiAxMCxcbiAgICBxOiBrZXl3b3Jkcy5qb2luKCcgJyksXG4gICAgYXV0b0NvcnJlY3Q6IHRydWUsXG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICd4LXJhcGlkYXBpLWhvc3QnOiBjb25maWcueFJhcGlkYXBpSG9zdCxcbiAgICAneC1yYXBpZGFwaS1rZXknOiBjb25maWcueFJhcGlkYXBpS2V5LFxuICB9XG5cbiAgY29uc3QgdXJsID0gbmV3IFVSTChjb25maWcuaW1hZ2VTZWFyY2hCYXNlVXJsKVxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pKVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICBjb25zdCBqc29uOiBKc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICBjb25zdCBpbWFnZXMgPSBqc29uLnZhbHVlLm1hcChpbWFnZSA9PiBpbWFnZS51cmwpXG5cbiAgcmV0dXJuIGltYWdlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEltYWdlc0Zyb21TZWFyY2hcbiJdfQ==