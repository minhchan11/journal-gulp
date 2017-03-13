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
