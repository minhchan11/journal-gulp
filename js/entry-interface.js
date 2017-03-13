var Entry = require('./../js/entry.js').entryBackEnds;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var newTitle = $(".entry-title").val();
    var newBody = $(".entry-body").val();
    var newEntry = new Entry(newTitle, newBody);
    $("#output").text("vowels: "+ newEntry.countVowels()+"; consonants: "+newEntry.countConsonants()+"; words: "+ newEntry.countWords());
    $("#title").text(newTitle);
    $("#teaser").text(newEntry.getTeaser());
  });
});
