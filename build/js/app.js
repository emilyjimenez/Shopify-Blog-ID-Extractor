(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Webscrape = exports.Webscrape = function () {
  function Webscrape() {
    _classCallCheck(this, Webscrape);
  }

  //get example site


  _createClass(Webscrape, [{
    key: 'getWebScrape',
    value: function getWebScrape(response, displayScrape, error) {
      $.get('https://allorigins.me/get?method=raw&url=' + encodeURIComponent('' + response) + '&callback=?').then(function (response) {
        displayScrape(response);
      }).fail(function (error) {
        throw error;
      });
    }
  }]);

  return Webscrape;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _Webscrape = require("./../js/Webscrape.js");

var error = function error(_error) {
  $("#output").text("Something went wrong, no doctors found!");
};

var displayScrape = function displayScrape(response) {
  $("#output").text(response);
};

$(document).ready(function () {
  var newWebscrape = new _Webscrape.Webscrape();

  console.log("Loaded");
  $("#test").text("Template Working");
  $("#check-scrape").submit(function (event) {
    event.preventDefault();
    var url = $("#url").val();
    newWebscrape.getWebScrape(url, displayScrape, error);
  });
});

},{"./../js/Webscrape.js":1}]},{},[2]);
