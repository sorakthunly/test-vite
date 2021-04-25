"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _testOne = require("./testOne");

Object.keys(_testOne).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _testOne[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _testOne[key];
    }
  });
});

var _thunkFetch = require("./thunkFetch");

Object.keys(_thunkFetch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _thunkFetch[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _thunkFetch[key];
    }
  });
});