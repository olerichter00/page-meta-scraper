'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cheerio = _interopDefault(require('cheerio'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var config = {
  useFallbackImages: false,
  imageFallbackStrategies: [],
  imageSearchBaseUrl: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
  unsplashBaseUrl: '',
  unsplashClientId: '',
  xRapidapiHost: '',
  xRapidapiKey: '',
  debugMode: false
};

var contextualwebClient = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(keywords) {
    var params, headers, url, response, json, images;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            params = {
              pageNumber: 1,
              pageSize: 10,
              q: keywords.join(' '),
              autoCorrect: true
            };
            headers = {
              'x-rapidapi-host': config.xRapidapiHost,
              'x-rapidapi-key': config.xRapidapiKey
            };
            url = new URL(config.imageSearchBaseUrl);
            Object.keys(params).forEach(function (key) {
              return url.searchParams.append(key, params[key]);
            });
            _context.next = 7;
            return fetch(url.toString(), {
              headers: headers
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            json = _context.sent;
            images = json.value.map(function (image) {
              return image.url;
            });
            return _context.abrupt("return", images);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", []);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function contextualwebClient(_x) {
    return _ref.apply(this, arguments);
  };
}();

var unsplashClient = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(keywords) {
    var params, headers, url, response, json, images;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              query: keywords.join(' ')
            };
            headers = {
              Authorization: "Client-ID " + config.unsplashClientId
            };
            url = new URL(config.unsplashBaseUrl);
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

  return function unsplashClient(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* prettier-ignore */

var EXCLUDE_KEYWORDS = ['ask', 'show', 'hn', 'the', 'a', 'that', 'this', 'as', 'and', 'or', 'for', 'in', 'out', 'new', 'i'];

var FallbackImageScraper = /*#__PURE__*/function () {
  function FallbackImageScraper(keywords, contextualweb, unsplash) {
    if (contextualweb === void 0) {
      contextualweb = contextualwebClient;
    }

    if (unsplash === void 0) {
      unsplash = unsplashClient;
    }

    this.keywords = [];
    this.strategies = {};
    this.MAX_IMAGES = 10;
    this.keywords = this.stripKeywords(keywords);
    this.strategies = {
      contextualweb: contextualweb,
      unsplash: unsplash
    };
  }

  var _proto = FallbackImageScraper.prototype;

  _proto.images = /*#__PURE__*/function () {
    var _images = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var imageUrls, _iterator, _step, strategyName, strategy;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!config.debugMode) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", ['https://www.tagesspiegel.de/images/grosser-panda-meng-meng_zoo-berlin/24195486/2-format43.jpg']);

            case 2:
              imageUrls = [];
              _iterator = _createForOfIteratorHelperLoose(config.imageFallbackStrategies);

            case 4:
              if ((_step = _iterator()).done) {
                _context.next = 19;
                break;
              }

              strategyName = _step.value;
              strategy = this.strategies[strategyName];

              if (strategy) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("continue", 17);

            case 9:
              _context.t0 = imageUrls.push;
              _context.t1 = imageUrls;
              _context.next = 13;
              return strategy(this.keywords);

            case 13:
              _context.t2 = _context.sent;

              _context.t0.apply.call(_context.t0, _context.t1, _context.t2);

              if (!(imageUrls.length >= 1)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

            case 17:
              _context.next = 4;
              break;

            case 19:
              return _context.abrupt("return", imageUrls.slice(0, this.MAX_IMAGES));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function images() {
      return _images.apply(this, arguments);
    }

    return images;
  }();

  _proto.stripKeywords = function stripKeywords(keywords) {
    return keywords.map(function (keyword) {
      return keyword.replace(/[^A-Za-z\s]/g, '').replace(/\s{2,}/g, ' ');
    }).filter(function (keyword) {
      return keyword.length >= 4;
    }).filter(function (keyword) {
      return !EXCLUDE_KEYWORDS.includes(keyword.toLowerCase());
    });
  };

  return FallbackImageScraper;
}();

var getContent = function getContent(page, selector) {
  return page(selector).attr('content');
};
var getSrc = function getSrc(page, selector) {
  var result = [];
  page(selector).each(function (_i, e) {
    return result.push(page(e).attr('src'));
  });
  return result;
};
var getText = function getText(page, selector) {
  return page(selector).text();
};
var getHref = function getHref(page, selector) {
  return page(selector).attr('href');
};
var stripFilenameFromUrl = function stripFilenameFromUrl(url) {
  return url.replace(/[a-zA-Z]*\.html?$/g, '');
};
var normalizeUrl = function normalizeUrl(fullUrl, url) {
  var urlRegExp = new RegExp('^(?:[a-z]+:)?//', 'i');
  if (!url) return;
  var isFullPath = urlRegExp.test(url);
  var isAbsolutePath = /^\//i.test(url);
  if (isFullPath) return url;
  if (isAbsolutePath) return "" + new URL(fullUrl).origin + url;
  return stripFilenameFromUrl(fullUrl) + "/" + url;
};

var MetaImageScraper = /*#__PURE__*/function () {
  function MetaImageScraper(page, url) {
    this.MAX_IMAGES = 10;
    this.strategies = [['meta[property="og:image:secure_url"]', getContent], ['meta[property="og:image:url"]', getContent], ['meta[property="og:image"]', getContent], ['meta[name="twitter:image:src"]', getContent], ['meta[name="twitter:image"]', getContent], ['meta[itemprop="image"]', getContent], ['article img[src]', getSrc], ['#content img[src]', getSrc], ['img[alt*="author" i]', getSrc], ['img[src]:not([aria-hidden="true"])', getSrc]];
    this.page = page;
    this.url = url;
  }

  var _proto = MetaImageScraper.prototype;

  _proto.images = /*#__PURE__*/function () {
    var _images = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var _this = this;

      var _images2;

      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _images2 = this.strategies.map(function (_ref) {
                var selector = _ref[0],
                    handler = _ref[1];
                return handler(_this.page, selector);
              }).flat().map(function (image) {
                return normalizeUrl(_this.url, image);
              }).filter(function (image) {
                return typeof image === 'string';
              }).map(function (image) {
                return String(image);
              }).slice(0, this.MAX_IMAGES);
              return _context.abrupt("return", _images2);

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);

            case 7:
              return _context.abrupt("return", []);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 5]]);
    }));

    function images() {
      return _images.apply(this, arguments);
    }

    return images;
  }();

  return MetaImageScraper;
}();

var DescriptionScraper = /*#__PURE__*/function () {
  function DescriptionScraper(page, url, truncateLength) {
    this.MAX_LENGTH = 5000;
    this.strategies = [["meta[property='og:description']", getContent], ["meta[property='twitter:description']", getContent], ["meta[name='description']", getContent], ["meta[itemprop='description']", getContent], ["meta[property='og:description']", getContent], ['p', getText], ['pre', getText]];
    this.page = page;
    this.url = url;
    this.truncateLength = truncateLength || this.MAX_LENGTH;
  }

  var _proto = DescriptionScraper.prototype;

  _proto.description = function description() {
    var _this = this;

    if (this.isAPdf()) return '';
    var descriptions = this.strategies.map(function (_ref) {
      var selector = _ref[0],
          handler = _ref[1];
      return handler(_this.page, selector);
    }).map(function (description) {
      return description && description.replace(/(<([^>]+)>)/gi, ' ').replace(/&.*;/g, ' ');
    }).filter(function (description) {
      return description;
    }).map(function (description) {
      return String(description);
    });
    return descriptions[0] && descriptions[0].slice(0, this.truncateLength);
  };

  _proto.isAPdf = function isAPdf() {
    return this.url.endsWith('.pdf');
  };

  return DescriptionScraper;
}();

var MetaTitleScraper = /*#__PURE__*/function () {
  function MetaTitleScraper(page) {
    this.strategies = [["meta[property='og:title']", getContent], ['title', getText]];
    this.page = page;
  }

  var _proto = MetaTitleScraper.prototype;

  _proto.title = function title() {
    var _this = this;

    var title = this.strategies.map(function (_ref) {
      var selector = _ref[0],
          handler = _ref[1];
      return handler(_this.page, selector);
    }).filter(function (title) {
      return title;
    }).map(function (title) {
      return String(title);
    });
    return title[0];
  };

  return MetaTitleScraper;
}();

var FaviconScraper = /*#__PURE__*/function () {
  function FaviconScraper(page) {
    this.strategies = [["link[rel='icon']", getHref]];
    this.page = page;
  }

  var _proto = FaviconScraper.prototype;

  _proto.favicon = function favicon() {
    var _this = this;

    var favicons = this.strategies.map(function (_ref) {
      var selector = _ref[0],
          handler = _ref[1];
      return handler(_this.page, selector);
    }).filter(function (favicons) {
      return favicons;
    }).map(function (favicons) {
      return String(favicons);
    });
    return favicons[0];
  };

  return FaviconScraper;
}();

var PageMetaScraper = /*#__PURE__*/function () {
  function PageMetaScraper(url, keywords, fetcher) {
    this.url = url;
    this.keywords = keywords;
    this.fetcher = fetcher;
  }

  var _proto = PageMetaScraper.prototype;

  _proto.loadPage = /*#__PURE__*/function () {
    var _loadPage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var response, html;
      return runtime_1.wrap(function _callee$(_context) {
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
              this.page = cheerio.load(html, {
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
  }();

  _proto.scrape = /*#__PURE__*/function () {
    var _scrape = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
      var metadata;
      return runtime_1.wrap(function _callee2$(_context2) {
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
  }();

  _proto.images = /*#__PURE__*/function () {
    var _images = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      var images;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return new MetaImageScraper(this.page, this.url).images();

            case 2:
              images = _context3.sent;

              if (!(images.length > 0)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", images);

            case 5:
              if (!config.useFallbackImages) {
                _context3.next = 9;
                break;
              }

              _context3.next = 8;
              return new FallbackImageScraper(this.keywords).images();

            case 8:
              return _context3.abrupt("return", _context3.sent);

            case 9:
              return _context3.abrupt("return", []);

            case 10:
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
  }();

  _proto.title = function title() {
    return new MetaTitleScraper(this.page).title();
  };

  _proto.favicon = function favicon() {
    return new FaviconScraper(this.page).favicon();
  };

  _proto.description = function description() {
    return new DescriptionScraper(this.page, this.url, 300).description();
  };

  return PageMetaScraper;
}();

var configure = function configure(params) {
  Object.assign(config, params);
};
var scrape = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(url, keywords, fetcher) {
    var metadataScraper;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (keywords === void 0) {
              keywords = [];
            }

            if (fetcher === void 0) {
              fetcher = fetch;
            }

            metadataScraper = new PageMetaScraper(url, keywords, fetcher);
            _context.next = 5;
            return metadataScraper.loadPage();

          case 5:
            _context.next = 7;
            return metadataScraper.scrape();

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function scrape(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var fallbackImages = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(keywords) {
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new FallbackImageScraper(keywords).images();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fallbackImages(_x4) {
    return _ref2.apply(this, arguments);
  };
}();
var index = {
  configure: configure,
  scrape: scrape,
  fallbackImages: fallbackImages
};

exports.configure = configure;
exports.default = index;
exports.fallbackImages = fallbackImages;
exports.scrape = scrape;
//# sourceMappingURL=page-meta-scraper.cjs.development.js.map
