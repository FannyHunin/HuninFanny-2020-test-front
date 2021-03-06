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
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"public/css/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/js/modules/wiggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wiggleAnim = void 0;

var wiggleAnim = function wiggleAnim(img) {
  img.style.transition = ".1s";
  img.style.transform = 'rotate(7deg)';
};

exports.wiggleAnim = wiggleAnim;
},{}],"src/js/modules/createModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = void 0;

var createModal = function createModal(element) {
  var modal = document.querySelector('#beer-modal');
  var close = document.querySelector('#beer-modal>button');
  var beer_imgModal = document.querySelector('.beer-modal-img>img');
  var beer_titleModal2 = document.querySelector("#beer-modal>div>.beer-modal-info>h3");
  var beer_subtitle = document.querySelector("#beer-modal>div>.beer-modal-info>h5");
  var beer_description = document.querySelector("#beer-modal>div>.beer-modal-info>p");
  modal.classList.add("beer-modal");
  modal.classList.remove("beer-none");
  var beer_spec1 = document.querySelector("#spe1");
  var beer_spec2 = document.querySelector("#spe2");
  var beer_spec3 = document.querySelector("#spe3");
  var beer_spec4 = document.querySelector("#spe4");
  var beer_spec5 = document.querySelector("#spe5");
  var beer_spec6 = document.querySelector("#spe6");
  beer_imgModal.setAttribute("src", element.image_url);
  beer_titleModal2.innerHTML = element.name;
  beer_subtitle.innerHTML = element.tagline;
  beer_description.innerHTML = element.description;
  beer_spec1.innerHTML = element.first_brewed;
  beer_spec2.innerHTML = element.abv;
  beer_spec3.innerHTML = element.ibu;
  beer_spec4.innerHTML = element.ebc;
  var beer_spec5Arr = element.ingredients.malt;
  beer_spec5Arr.forEach(function (elem) {
    var pIngr = document.createElement("p");
    pIngr.innerHTML = elem.name;
    pIngr.style.textAlign = "right";
    beer_spec5.appendChild(pIngr);
  });
  beer_spec6.innerHTML = element.ingredients.yeast;
  console.log(modal.classList);
  close.addEventListener("click", function () {
    modal.classList.remove("beer-modal");
    modal.classList.add("beer-none");
    console.log(modal.classList);
  });
};

exports.createModal = createModal;
},{}],"src/js/script.js":[function(require,module,exports) {
"use strict";

require("../../public/css/style.scss");

var _wiggle = require("./modules/wiggle");

var _createModal = require("./modules/createModal");

var col1 = document.querySelector(".col-1");
var col2 = document.querySelector(".col-2");
var beer_div;
var beer_info;
var see_more;
fetch('https://api.punkapi.com/v2/beers?page=2&per_page=60').then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
  data.forEach(function (element) {
    //create beer part 1
    var beer_name = document.createElement('h1');
    var beer_tag = document.createElement('p');
    var beer_brewed = document.createElement('p');
    var beer_img = document.createElement('img');
    var see_more = document.createElement('a'); //sort the beers in 2 rows

    if (element.id % 2 == 1) {
      beer_div = document.createElement("div");
      col1.appendChild(beer_div);
      beer_info = document.createElement("div");
      beer_div.appendChild(beer_info);
    } else {
      beer_div = document.createElement("div");
      col2.appendChild(beer_div);
      beer_info = document.createElement("div");
      beer_div.appendChild(beer_info);
    } //create beer part 2


    beer_info.appendChild(beer_name);
    beer_info.appendChild(beer_tag);
    beer_info.appendChild(beer_brewed);
    beer_info.appendChild(see_more);
    beer_div.appendChild(beer_img);
    beer_name.innerHTML = element.name;
    beer_tag.innerHTML = element.tagline;
    beer_brewed.innerHTML = "First brewed on ".concat(element.first_brewed);
    beer_img.setAttribute("src", element.image_url);
    see_more.innerHTML = "See more...";
    see_more.setAttribute("class", "see-more-btn");
    see_more.setAttribute("href", "#beer-modal"); //styling

    beer_div.style.width = "60%";
    beer_div.style.marginBottom = "100px";
    beer_div.style.display = "flex";
    beer_div.style.alignItems = "center";
    beer_div.style.justifyContent = "space-between";
    beer_img.style.heigth = "150px";
    beer_img.style.width = "150px";
    beer_info.style.width = "50%";
    beer_name.style.fontFamily = "'Anton', sans-serif";
    beer_tag.style.fontFamily = "'Roboto', sans-serif";
    beer_brewed.style.fontFamily = "'Open Sans', sans-serif";
    see_more.style.fontFamily = "'Roboto', sans-serif";
    see_more.style.backgroundColor = "black";
    see_more.style.color = "white";
    see_more.style.border = "none";
    see_more.style.width = "100%";
    see_more.style.fontSize = "20px";
    see_more.style.padding = "15px";
    see_more.style.textDecoration = "none"; //beer wiggle

    see_more.addEventListener('mouseover', function () {
      (0, _wiggle.wiggleAnim)(beer_img);
    });
    see_more.addEventListener('mouseout', function () {
      beer_img.style.transform = "rotate(0deg)";
    }); //modal

    see_more.addEventListener('click', function () {
      (0, _createModal.createModal)(element);
    });
  });
});
},{"../../public/css/style.scss":"public/css/style.scss","./modules/wiggle":"src/js/modules/wiggle.js","./modules/createModal":"src/js/modules/createModal.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37909" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/script.js"], null)
//# sourceMappingURL=/script.04c05cf5.js.map