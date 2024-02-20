// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
function isNumeric(value) {
  return typeof value === 'number' && !isNaN(value);
}
function isSpace(value) {
  if (value === ' ' | value === '  ' | value === '   ' | value === '') {
    netMarketingOri = '乱写什么';
  }
}
var netMarketingOri = window.prompt("请输入你的网络营销考试分数");
var onlineShopOri = window.prompt("请输入你的网店运营考试分数");
isSpace(netMarketingOri);
isSpace(onlineShopOri);
var netMarketing = Number(netMarketingOri);
var onlineShop = Number(onlineShopOri);
var a = 15;
var b = 5;
if (isNumeric(netMarketing) && isNumeric(onlineShop) && netMarketing >= 0 && onlineShop >= 0 && netMarketing <= 100 && onlineShop <= 100) {
  console.log('进来了');
  if (onlineShop >= 60) {
    b = 0;
  }
  if (netMarketing >= 60) {
    a = 0;
  }
  if (onlineShop > 50 && onlineShop < 60) {
    b = 5;
  } else if (onlineShop < 50) {
    b = b + Math.floor((50 - onlineShop) / 5);
  }
  if (netMarketing < 60 && onlineShop >= 60) {
    if (onlineShop < 65) {
      a = 10;
    } else if (onlineShop > 65) {
      var mideum;
      medium = Math.floor((onlineShop - 65) / 5) * 2;
      if (medium > 5) medium = 5;
      a = 10 - medium;
    }
  } else if (netMarketing < 60 && onlineShop < 60 && onlineShop > netMarketing) {
    a = a - Math.floor((onlineShop - netMarketing) / 5) * 2;
    if (a < 10) a = 10;
  }
  window.alert("\u7F51\u7EDC\u8425\u9500\u6284".concat(a, "\u904D,\u7F51\u5E97\u8FD0\u8425\u6284").concat(b, "\u904D"));
} else {
  window.alert('请输入正确的分数（0到100的整数）');
}
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f73af5e0.js.map