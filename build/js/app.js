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
  $("#output").text("Something went wrong!");
};

var displayScrape = function displayScrape(response) {
  var script = response.match(/<script id="__st">.*?<\/script>/)[0];
  console.log("this is the id ", script);
  var id = script.match(/rid\":([\d].*?)};<\/script>/)[1];
  console.log("please be id: ", id);
  // $("#blog-id").append(`<li><a href="https://betsyandiya.myshopify.com/admin/blogs/39293445/articles/${id}">https://betsyandiya.myshopify.com/admin/blogs/39293445/articles/${id}</a></li>`);
};

// let getAllIds = function(urlsArr) {
//   // for (let i = 0; i < urlsArr.length; i++) {
//   //   let index = urlsArr[i];
//   //   let newWebscrape = new Webscrape;
//   //   newWebscrape.getWebScrape(index, displayScrape, error);
//   // } 
// }


$(document).ready(function () {
  $("#url-array").submit(function (event) {
    event.preventDefault();
    var newWebscrape = new _Webscrape.Webscrape();
    var urls = $("#urls").val();
    var urlsArr = urls.split("\n");
    // console.log(urlsArr);
    // getAllIds(urlsArr);
    urlsArr.forEach(function (urls) {
      console.log(urls);

      newWebscrape.getWebScrape(urls, displayScrape, error);
    });
  });
});

},{"./../js/Webscrape.js":1}]},{},[2]);
