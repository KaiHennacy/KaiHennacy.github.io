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
})({"public/js/utils/Components.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Components =
/*#__PURE__*/
function () {
  function Components() {
    _classCallCheck(this, Components);
  }

  _createClass(Components, [{
    key: "createElement",
    value: function createElement(elementType) {
      if (!elementType) {
        throw new Error('Must pass valid HTML Element');
      }

      var createdElement = document.createElement(elementType);
      return createdElement;
    }
  }, {
    key: "newGridButton",
    value: function newGridButton() {
      var _this = this;

      var newGridButton = this.createElement('button');
      newGridButton.classList.add('new-grid-button');
      newGridButton.textContent = 'Create Grid';
      newGridButton.addEventListener('click', function () {
        var mainContainer = document.querySelector('.container');
        mainContainer.appendChild(_this.createGrid());
      });
      return newGridButton;
    }
  }, {
    key: "createGrid",
    value: function createGrid() {
      var _this2 = this;

      var outerDiv = this.createElement('div');
      var buttonContainer = this.createElement('div');
      var cancelButton = this.createElement('button');
      var addRowButton = this.createElement('button');
      var addColumnButton = this.createElement('button');
      var newInnerDivButton = this.createElement('button');
      var resetDivAreas = this.createElement('button');
      outerDiv.classList.add('new');
      outerDiv.setAttribute('style', 'display: grid; grid-template: repeat(1, 1fr) / repeat(1, 1fr);');
      cancelButton.setAttribute('type', 'button');
      addRowButton.setAttribute('type', 'button');
      addColumnButton.setAttribute('type', 'button');
      newInnerDivButton.setAttribute('type', 'button');
      resetDivAreas.setAttribute('type', 'button');
      cancelButton.textContent = 'Cancel';
      addRowButton.textContent = 'Add Row';
      addColumnButton.textContent = 'Add Column';
      newInnerDivButton.textContent = 'New Panel';
      resetDivAreas.textContent = 'Reset Panel Layout';
      cancelButton.addEventListener('click', function () {
        var mainContainer = document.querySelector('.container');
        mainContainer.removeChild(mainContainer.lastChild);
      });
      addRowButton.addEventListener('click', function () {
        //getNum* only works with outerDiv, consider refactoring
        var numRows = _this2.getNumRows(outerDiv);

        var numColumns = _this2.getNumColumns(outerDiv); // console.log(numRows)


        outerDiv.setAttribute('style', "display: grid; grid-template: repeat(".concat(numRows + 1, ", 1fr) / repeat(").concat(numColumns, ", 1fr);"));
      });
      addColumnButton.addEventListener('click', function () {
        //getNum* only works with outerDiv, consider refactoring
        var numRows = _this2.getNumRows(outerDiv);

        var numColumns = _this2.getNumColumns(outerDiv); // console.log(numRows)


        outerDiv.setAttribute('style', "display: grid; grid-template: repeat(".concat(numRows, ", 1fr) / repeat(").concat(numColumns + 1, ", 1fr);"));
      });
      newInnerDivButton.addEventListener('click', function () {
        var newInnerDiv = _this2.createElement('div');

        var moveContainer = _this2.createElement('div');

        var contentForm = _this2.createElement('form');

        var headerInput = _this2.createElement('input');

        var bodyInput = _this2.createElement('input');

        var submitPanel = _this2.createElement('button');

        var displayMove = _this2.createElement('button');

        var moveUp = _this2.createElement('button');

        var moveDown = _this2.createElement('button');

        var moveLeft = _this2.createElement('button');

        var moveRight = _this2.createElement('button');

        var growUp = _this2.createElement('button');

        var growDown = _this2.createElement('button');

        var growLeft = _this2.createElement('button');

        var growRight = _this2.createElement('button');

        headerInput.setAttribute('type', 'text');
        bodyInput.setAttribute('type', 'text');
        submitPanel.setAttribute('type', 'button');
        displayMove.setAttribute('type', 'button');
        displayMove.textContent = 'Move Options';
        moveUp.setAttribute('type', 'button');
        moveDown.setAttribute('type', 'button');
        moveLeft.setAttribute('type', 'button');
        moveRight.setAttribute('type', 'button');
        growUp.setAttribute('type', 'button');
        growDown.setAttribute('type', 'button');
        growLeft.setAttribute('type', 'button');
        growRight.setAttribute('type', 'button');
        moveUp.textContent = 'Move Up';
        moveDown.textContent = 'Move Down';
        moveLeft.textContent = 'Move Left';
        moveRight.textContent = 'Move Right';
        growUp.textContent = 'Grow Up';
        growDown.textContent = 'Grow Down';
        growLeft.textContent = 'Grow Left';
        growRight.textContent = 'Grow Right';
        moveUp.classList.add('up-button');
        growUp.classList.add('up-button');
        moveDown.classList.add('down-button');
        growDown.classList.add('down-button');
        moveLeft.classList.add('left-button');
        growLeft.classList.add('left-button');
        moveRight.classList.add('right-button');
        growRight.classList.add('right-button');
        moveContainer.classList.toggle('hidden');
        submitPanel.textContent = 'Submit';
        displayMove.textContent = 'Move Panel';
        submitPanel.addEventListener('click', function () {
          var panelHeader = _this2.createElement('h3');

          var panelBody = _this2.createElement('p');

          panelHeader.textContent = headerInput.value;
          panelBody.textContent = bodyInput.value;
          contentForm.classList.toggle('hidden');
          newInnerDiv.appendChild(panelHeader);
          newInnerDiv.appendChild(panelBody);
        });
        displayMove.addEventListener('click', function () {
          moveContainer.classList.toggle('hidden');
        });
        moveUp.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart - 1, "/").concat(columnStart, "/").concat(rowEnd - 1, "/").concat(columnEnd, ";"));
        });
        moveDown.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart + 1, "/").concat(columnStart, "/").concat(rowEnd + 1, "/").concat(columnEnd, ";"));
        });
        moveLeft.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart - 1, "/").concat(rowEnd, "/").concat(columnEnd - 1, ";"));
        });
        moveRight.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart + 1, "/").concat(rowEnd, "/").concat(columnEnd + 1, ";"));
        });
        growUp.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart - 1, "/").concat(columnStart, "/").concat(rowEnd, "/").concat(columnEnd, ";"));
        });
        growDown.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart, "/").concat(rowEnd + 1, "/").concat(columnEnd, ";"));
        });
        growLeft.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart - 1, "/").concat(rowEnd, "/").concat(columnEnd, ";"));
        });
        growRight.addEventListener('click', function () {
          var rowStart = _this2.getRowStart(newInnerDiv);

          var columnStart = _this2.getColumnStart(newInnerDiv);

          var rowEnd = _this2.getRowEnd(newInnerDiv);

          var columnEnd = _this2.getColumnEnd(newInnerDiv);

          newInnerDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart, "/").concat(rowEnd, "/").concat(columnEnd + 1, ";"));
        });
        moveContainer.appendChild(moveUp);
        moveContainer.appendChild(moveDown);
        moveContainer.appendChild(moveLeft);
        moveContainer.appendChild(moveRight);
        moveContainer.appendChild(growUp);
        moveContainer.appendChild(growDown);
        moveContainer.appendChild(growLeft);
        moveContainer.appendChild(growRight);
        contentForm.appendChild(headerInput);
        contentForm.appendChild(bodyInput);
        contentForm.appendChild(submitPanel);
        newInnerDiv.appendChild(contentForm);
        newInnerDiv.appendChild(displayMove);
        newInnerDiv.appendChild(moveContainer); // newInnerDiv.setAttribute('style', 'grid-area: 1/1/1/1;')

        outerDiv.appendChild(newInnerDiv);
      });
      resetDivAreas.addEventListener('click', function () {
        var childDivs = outerDiv.childNodes;

        var numColumns = _this2.getNumColumns(outerDiv);

        childDivs.forEach(function (childDiv, index) {
          var rowStart = Math.floor(index / numColumns) + 1;
          var columnStart = index - (rowStart - 1) * numColumns + 1;
          childDiv.setAttribute('style', "grid-area: ".concat(rowStart, "/").concat(columnStart, "/").concat(rowStart + 1, "/").concat(columnStart + 1, ";"));
        });
      });
      buttonContainer.appendChild(cancelButton);
      buttonContainer.appendChild(addRowButton);
      buttonContainer.appendChild(addColumnButton);
      buttonContainer.appendChild(newInnerDivButton);
      buttonContainer.appendChild(resetDivAreas);
      outerDiv.appendChild(buttonContainer);
      return outerDiv;
    }
  }, {
    key: "createNavBar",
    value: function createNavBar() {
      var _this3 = this;

      var navElement = this.createElement('nav');
      var ulElement = this.createElement('ul');
      var buttonElement = this.createElement('button');
      var liElements;
      var sections = ['home', 'about', 'projects', 'theme'];
      liElements = sections.map(function (section) {
        var liElement = document.createElement('li');
        var btnElement = document.createElement('button');
        btnElement.textContent = section.charAt(0).toUpperCase() + section.slice(1); // aElement.setAttribute('href', `#${section}`)

        btnElement.addEventListener('click', function () {
          _this3.toggleHidden(section);
        });
        liElement.classList.add('nav_list-item');
        liElement.appendChild(btnElement); // ulElement.appendChild(liElement)

        return liElement;
      });
      console.log(liElements);
      ulElement.classList.add('nav_list');
      ulElement.classList.add('hidden');
      liElements.forEach(function (element) {
        ulElement.appendChild(element);
      }); //ulElement.innerHTML = liElements.join('')

      buttonElement.classList.add('navigation__button');
      buttonElement.textContent = 'MENU';
      buttonElement.addEventListener('click', function () {
        ulElement.classList.toggle('hidden');
      });
      navElement.appendChild(buttonElement);
      navElement.appendChild(ulElement);
      return navElement;
    }
  }, {
    key: "toggleHidden",
    value: function toggleHidden(section) {
      var pageSection = document.querySelector(".".concat(section));
      console.log(pageSection);
      pageSection.classList.toggle('hidden');
      return pageSection;
    }
  }, {
    key: "getNumRows",
    value: function getNumRows(element) {
      var styleStr = element.getAttribute('style');
      return parseInt(styleStr.slice(styleStr.indexOf(': repeat(') + 9, styleStr.indexOf(', 1fr) /')));
    }
  }, {
    key: "getNumColumns",
    value: function getNumColumns(element) {
      var styleStr = element.getAttribute('style');
      return parseInt(styleStr.slice(styleStr.indexOf('/ repeat(') + 9, styleStr.indexOf(', 1fr);')));
    }
  }, {
    key: "getRowStart",
    value: function getRowStart(element) {
      var styleStr = element.getAttribute('style');
      return parseInt(styleStr.slice(styleStr.indexOf(': ') + 2, styleStr.indexOf('/')));
    }
  }, {
    key: "getColumnStart",
    value: function getColumnStart(element) {
      var styleStr = element.getAttribute('style');
      var styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length);
      styleSubStr = styleSubStr.slice(0, styleSubStr.indexOf('/'));
      return parseInt(styleSubStr);
    }
  }, {
    key: "getRowEnd",
    value: function getRowEnd(element) {
      var styleStr = element.getAttribute('style');
      var styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length);
      styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length);
      styleSubStr = styleSubStr.slice(0, styleSubStr.indexOf('/'));
      return parseInt(styleSubStr);
    }
  }, {
    key: "getColumnEnd",
    value: function getColumnEnd(element) {
      var styleStr = element.getAttribute('style');
      var styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length);
      styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length);
      styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length);
      styleSubStr = styleSubStr.slice(0, styleSubStr.length - 1);
      return parseInt(styleSubStr);
    }
  }]);

  return Components;
}();

module.exports = Components;
},{}],"public/js/app.js":[function(require,module,exports) {
var Components = require('./utils/Components');

var components = new Components();
var fixedHeader = document.querySelector('.fixed-header');
fixedHeader.appendChild(components.createNavBar());
var mainContainer = document.querySelector('.container');
mainContainer.appendChild(components.newGridButton());
},{"./utils/Components":"public/js/utils/Components.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62421" + '/');

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
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","public/js/app.js"], null)
//# sourceMappingURL=/app.279dbfa4.js.map