// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _model = require("./model");
var _utilsJs = require("./classes/utils.js");
// init
window.addEventListener("DOMContentLoaded", (event)=>{
    localStorage.setItem("gameStatus", "not-started");
    (0, _model.loadModel)().then(()=>{
        (0, _utilsJs.render)();
        (0, _utilsJs.addListeners)();
    });
});

},{"./model":"dEDha","./classes/utils.js":"jujso"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easy", ()=>easy);
parcelHelpers.export(exports, "medium", ()=>medium);
parcelHelpers.export(exports, "hard", ()=>hard);
parcelHelpers.export(exports, "model", ()=>model);
parcelHelpers.export(exports, "loadModel", ()=>loadModel);
var _block = require("./classes/block");
var _utils = require("./classes/utils");
var _logoNoBackgroundPng = require("./assets/logo-no-background.png");
var _logoNoBackgroundPngDefault = parcelHelpers.interopDefault(_logoNoBackgroundPng);
let easy = document.createElement("button");
easy.className = "btn btn-success dif";
easy.innerText = "Easy";
easy.type = "button";
easy.value = "Easy";
let medium = document.createElement("button");
medium.className = "btn btn-warning dif";
medium.innerText = "Medium";
medium.type = "button";
medium.value = "Medium";
let hard = document.createElement("button");
hard.className = "btn btn-danger dif";
hard.innerText = "Hard";
hard.type = "button";
hard.value = "Hard";
let model = [
    new (0, _block.TitleBlock)(`<img src="${(0, _logoNoBackgroundPngDefault.default)}" width="350" height="200"/>`)
];
const loadModel = ()=>{
    return new Promise((resolve, reject)=>{
        try {
            (0, _utils.getCategories)().then(()=>{
                model.push(new (0, _block.TextBlock)("<h3>Please choose a difficulty level:</h3>"));
                model.push(new (0, _block.ColumnBlock)([
                    easy,
                    medium,
                    hard
                ]));
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
};

},{"./classes/block":"3AZe8","./classes/utils":"jujso","./assets/logo-no-background.png":"7lBIO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AZe8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block);
parcelHelpers.export(exports, "TitleBlock", ()=>TitleBlock);
parcelHelpers.export(exports, "TextBlock", ()=>TextBlock);
parcelHelpers.export(exports, "ColumnBlock", ()=>ColumnBlock);
parcelHelpers.export(exports, "GameBlock", ()=>GameBlock);
parcelHelpers.export(exports, "QuestionBlock", ()=>QuestionBlock);
parcelHelpers.export(exports, "CategoryBlock", ()=>CategoryBlock);
var _utils = require("./utils");
class Block {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
    toHTML() {
        throw new Error("Not implemented");
    }
}
class TitleBlock extends Block {
    constructor(value){
        super("title", value);
    }
    toHTML() {
        return (0, _utils.row)((0, _utils.col)(`${this.value}`));
    }
}
class TextBlock extends Block {
    constructor(value){
        super("text", value);
    }
    toHTML() {
        return (0, _utils.row)((0, _utils.col)(`<p>${this.value}</p>`));
    }
}
class ColumnBlock extends Block {
    constructor(value){
        super("columns", value);
    }
    toHTML() {
        let html = "";
        this.value.forEach((button1)=>{
            html += (0, _utils.col)(button1.outerHTML);
        });
        return (0, _utils.row)(html);
    }
}
class GameBlock extends Block {
    constructor(value, dif){
        super("game", value);
        this.qnum = 0;
        this.dif = dif;
        localStorage.setItem("CorrectAnswer", 0);
    }
    //Return new question
    toHTML() {
        if (this.qnum == 10) {
            let end = $("<spawn/>");
            end.classList = "badge bg-info";
            end.style.fontSize = "20px";
            end.style.margin = "2px";
            end.style.padding = "2px";
            end.style.borderRadius = "50%";
            end.text("Game Over! you have answered " + localStorage.getItem("CorrectAnswer") + " questions correctly out of " + this.value.length);
            return end;
        }
        //Create category bade
        let category = document.createElement("span");
        category.innerHTML = "Category: " + localStorage.getItem("category");
        category.classList = "badge bg-info";
        category.style.fontSize = "20px";
        category.style.margin = "2px";
        //Create difficulty badge
        let dif = document.createElement("span");
        dif.innerHTML = "Difficulty level:" + this.dif;
        dif.classList = "badge bg-info";
        dif.style.fontSize = "20px";
        dif.style.margin = "2px";
        //Create question number badge
        let qnum = document.createElement("span");
        qnum.innerHTML = "Question number:" + (this.qnum + 1) + "/" + this.value.length;
        qnum.classList = "badge bg-info";
        qnum.style.fontSize = "20px";
        qnum.style.margin = "2px";
        //Create correct answer badge
        let correct = document.createElement("span");
        correct.innerHTML = "Correct Answers:" + localStorage.getItem("CorrectAnswer");
        correct.classList = "badge bg-info";
        correct.style.fontSize = "20px";
        correct.style.margin = "2px";
        //Create return content
        let html = (0, _utils.row)(category.outerHTML);
        html += (0, _utils.row)(dif.outerHTML);
        html += (0, _utils.row)(qnum.outerHTML);
        html += (0, _utils.row)(correct.outerHTML);
        html += this.value[this.qnum++].toHTML();
        return html;
    }
}
class QuestionBlock extends Block {
    constructor(value, a1, a2, a3, cA1){
        super("question", value);
        this.ans = [];
        this.ans.push(a1);
        this.ans.push(a2);
        this.ans.push(a3);
        this.ans.push(cA1);
        this.cA = cA1;
        this.correct_answer = null;
    }
    addListener() {
        this.addEventListener("click", ()=>{
            //Check if answer is correct
            if (button.innerHTML === cA) button.classList = "btn btn-success";
            else {
                button.classList = "btn btn-danger";
                this.correct_answer.style.classList = "btn btn-success";
            }
        });
        //Run countdown
        this.startCountdown();
    }
    getQuestion() {
        let buttons = [];
        let picked = new Set();
        for(let i = 0; i < 4; i++){
            //Pick a random answer
            let x = Math.floor(Math.random() * 4);
            while(picked.has(x))x = Math.floor(Math.random() * 4);
            picked.add(x);
            //Create a button
            let button1 = document.createElement("button");
            button1.innerHTML = this.ans[x];
            if (this.ans[x] === this.cA) {
                this.correct_answer = button1;
                button1.id = "correct_answer";
            }
            button1.classList = "btn btn-primary answer";
            button1.style.width = "150px";
            button1.style.height = "150px";
            button1.style.margin = "20px";
            button1.style.fontSize = "20px";
            buttons.push(button1.outerHTML);
        }
        // Create a container div to hold the buttons and center it
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.textAlign = "center";
        container.innerHTML = buttons.map((button1)=>(0, _utils.col)(button1)).join("");
        return container.outerHTML;
    }
    toHTML() {
        let q = document.createElement("span");
        q.innerHTML = this.value;
        q.classList = "badge bg-secondary";
        q.style.margin = "20px";
        q.style.fontSize = "30px";
        let timer = document.createElement("span");
        timer.id = "timer";
        timer.classList = "badge bg-secondary";
        timer.style.fontSize = "20px";
        let html = "";
        html += (0, _utils.row)((0, _utils.col)(q.outerHTML));
        html += (0, _utils.row)("<br />");
        html += (0, _utils.row)((0, _utils.col)(timer.outerHTML));
        html += (0, _utils.row)("<br />");
        html += this.getQuestion();
        return html;
    }
}
class CategoryBlock extends Block {
    constructor(value){
        super("categories", value);
        CategoryBlock.categories = value;
    }
    static categories;
    //Get categories
    getCategories = ()=>{
        //Create categories div
        let categories = document.createElement("div");
        categories.role = "group";
        categories.ariaLabel = "Categories";
        categories.className = "btn-group";
        categories.id = "dropdownMenuButton";
        categories.style.padding = "10px";
        //Create categories buttons
        let button1 = document.createElement("button");
        button1.className = "btn btn-primary";
        button1.innerHTML = "General";
        button1.id = "categoryButton";
        categories.appendChild(button1);
        //Create div group
        let group = document.createElement("div");
        group.role = "group";
        group.className = "btn-group";
        group.id = "dropdownMenu";
        //Drop down button
        let button2 = document.createElement("button");
        button1.type = "button";
        button2.className = "btn btn-primary dropdown-toggle";
        button2.setAttribute("data-bs-toggle", "dropdown");
        button2.setAttribute("aria-haspopup", "true");
        button2.setAttribute("aria-expanded", "false");
        group.appendChild(button2);
        categories.appendChild(group);
        //Create dropdown menu
        let div = document.createElement("div");
        div.className = "dropdown-menu";
        div.setAttribute("aria-labelledby", "dropdownMenu");
        group.appendChild(div);
        //Add categories
        this.value.forEach((category)=>{
            let a = document.createElement("a");
            a.className = "dropdown-item";
            a.innerText = category["name"];
            a.value = category["id"];
            div.appendChild(a);
        });
        return categories.outerHTML;
    };
    toHTML() {
        return (0, _utils.row)(this.getCategories());
    }
}

},{"./utils":"jujso","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jujso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "row", ()=>row);
parcelHelpers.export(exports, "col", ()=>col);
parcelHelpers.export(exports, "startGame", ()=>startGame);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "AddAnswerListener", ()=>AddAnswerListener);
parcelHelpers.export(exports, "addListeners", ()=>addListeners);
parcelHelpers.export(exports, "getCategories", ()=>getCategories);
var _block = require("./block");
var _modelJs = require("../model.js");
const row = (content)=>`<div class="row">${content}</div>`;
const col = (content)=>`<div class="col-sm">${content}</div>`;
let countdownIntervalId1;
let countdownIntervalId2;
const startGame = ()=>{
    let dif = localStorage.getItem("difficulty").toLowerCase();
    let category = document.querySelector("#categoryButton").innerHTML;
    localStorage.setItem("category", category);
    let catId = 0;
    (0, _block.CategoryBlock).categories.forEach((cat)=>{
        if (cat["name"] === category) catId = cat["id"];
    });
    //Initiate new game
    fetch(`https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${dif}&type=multiple`).then((response)=>response.json()).then((result)=>arrangeQuestions(result)).catch((error)=>console.log("error", error));
};
//Arrange questions for new game
const arrangeQuestions = (result)=>{
    let qblocks = [];
    let questions = result.results;
    questions.forEach((question)=>{
        let q = question["question"];
        let a1 = question["incorrect_answers"][0];
        let a2 = question["incorrect_answers"][1];
        let a3 = question["incorrect_answers"][2];
        let ca = question["correct_answer"];
        let qb = new (0, _block.QuestionBlock)(q, a1, a2, a3, ca);
        qblocks.push(qb);
    });
    let title = (0, _modelJs.model)[0];
    (0, _modelJs.model).length = 1;
    let game = new (0, _block.GameBlock)(qblocks, localStorage.getItem("difficulty"));
    (0, _modelJs.model).push(game);
    render();
};
// render
const container = document.querySelector("#app");
const render = ()=>{
    container.innerHTML = "";
    const html = (0, _modelJs.model).map((m)=>m.toHTML()).join("");
    container.insertAdjacentHTML("beforeend", html);
    if (localStorage.getItem("gameStatus") === "started") {
        AddAnswerListener();
        startCountdown();
    }
};
const AddAnswerListener = ()=>{
    let caButton = document.getElementById("correct_answer");
    document.querySelectorAll(".answer").forEach((answer)=>{
        answer.addEventListener("click", ()=>{
            if (caButton.innerHTML === answer.innerHTML) {
                answer.classList = "btn btn-success";
                let correctAnswerCount = localStorage.getItem("CorrectAnswer");
                correctAnswerCount = parseInt(correctAnswerCount) + 1;
                localStorage.setItem("CorrectAnswer", correctAnswerCount);
            } else {
                answer.classList = "btn btn-danger";
                caButton.classList = "btn btn-success";
            }
            clearInterval(countdownIntervalId2);
            nextQuestion();
        });
    });
};
function nextQuestion() {
    //Hold the question for 3 seconds
    let seconds = 3;
    countdownIntervalId1 = setInterval(function() {
        seconds--;
        if (seconds <= 0) {
            clearInterval(countdownIntervalId1);
            render();
        }
    }, 1000);
}
// Function to start the countdown timer
function startCountdown() {
    let seconds = 30;
    updateTimerUI(seconds);
    countdownIntervalId2 = setInterval(function() {
        seconds--;
        updateTimerUI(seconds);
        if (seconds <= 0) {
            clearInterval(countdownIntervalId);
            onTimerExpired();
        }
    }, 1000);
}
// Function to update the timer UI
function updateTimerUI(seconds) {
    document.getElementById("timer").textContent = `Time remaining: ${seconds} seconds`;
    if (seconds <= 10) document.getElementById("timer").style.color = "red";
}
// Function to check if the timer has expired
//Function for when the time expire
function onTimerExpired() {
    document.getElementById("timer").textContent = "Time's up!";
    let caButton = document.getElementById("correct_answer");
    caButton.classList = "btn btn-success";
    nextQuestion();
}
const addListeners = ()=>{
    //Add listeners for the difficulty buttons
    document.querySelectorAll(".dif").forEach((button)=>{
        button.addEventListener("click", ()=>{
            let mainButton = document.querySelector("#dropdownMenuButton button");
            localStorage.setItem("category", mainButton.innerHTML);
            localStorage.setItem("difficulty", button.value);
            localStorage.setItem("gameStatus", "started");
            console.log(button.value + " selected");
            //Start game
            startGame();
        });
    });
    //Add listeners for the category buttons
    let mainButton = document.querySelector("#dropdownMenuButton button");
    let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
    dropdownItems.forEach((item)=>{
        item.addEventListener("click", ()=>{
            // Update the text of the main button to match the selected category
            mainButton.innerHTML = item.innerText;
        });
    });
};
const getCategories = ()=>{
    return new Promise((resolve, reject)=>{
        try {
            //Initiate new game
            fetch(`https://opentdb.com/api_category.php`).then((response)=>response.json()).then((result)=>{
                (0, _modelJs.model).push(new (0, _block.TextBlock)("<h3>Please choose a category:</h3>"));
                (0, _modelJs.model).push(new (0, _block.CategoryBlock)(result["trivia_categories"]));
                resolve();
            }).catch((error)=>console.log("error", error));
        } catch (error) {
            reject(error);
        }
    });
};

},{"./block":"3AZe8","../model.js":"dEDha","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7lBIO":[function(require,module,exports) {
module.exports = require("474b65c31a7876a7").getBundleURL("bLxZJ") + "logo-no-background.2f6d6cee.png" + "?" + Date.now();

},{"474b65c31a7876a7":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire37e0")

//# sourceMappingURL=index.975ef6c8.js.map
