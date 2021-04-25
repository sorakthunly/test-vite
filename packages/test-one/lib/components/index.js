"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = require("./HelloWorld");

Object.keys(_HelloWorld).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HelloWorld[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HelloWorld[key];
    }
  });
});