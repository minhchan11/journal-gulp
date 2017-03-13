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
}
