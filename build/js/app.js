(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryBackEnds;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var newTitle = $(".entry-title").val();
    var newBody = $(".entry-body").val();
    var newEntry = new Entry(newTitle, newBody);
    $("#output").text("vowels: "+ newEntry.countVowels()+"; consonants: "+newEntry.countConsonants()+"; words: "+ newEntry.countWords());
  });
});

},{"./../js/entry.js":2}],2:[function(require,module,exports){
function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function () {
  var totalString = this.title + " " + this.body;
  return totalString.split(" ").length;
};

Entry.prototype.countVowels = function () {
  var totalString = this.title + " " + this.body;
  var matches = totalString.match(/[aeiou]/gi);
  return matches.length;
};

Entry.prototype.countConsonants = function () {
  var totalString = this.title + " " + this.body;
  var matches = totalString.match(/[^aeiou|_\d\W]/gi);
  return matches.length;
};

Entry.prototype.getTeaser = function () {
  var matches = /[?!.]/.exec(this.body).index;
  var firstSentence = this.body.slice(0, matches+1);
  var sentenceArray = firstSentence.split(" ");
  if( sentenceArray.length > 8)
  {
    return sentenceArray.slice(0,8).join(" ");
  }else{
    return firstSentence;
  }
};

exports.entryBackEnds = Entry;

},{}]},{},[1]);
