import { Webscrape } from "./../js/Webscrape.js";

let error = function(error) {
  $("#output").text("Something went wrong, no doctors found!");
};

let displayScrape = function(response) {
  let id = response.match(/<script id="__st">\[ \]<\/script>/)[1];
  $("#output").text(id); 
};



$(document).ready(function(){
  let newWebscrape = new Webscrape();
  
  console.log("Loaded");
  $("#test").text("Template Working");
  $("#check-scrape").submit(function(event) {
  event.preventDefault();
  let url = $("#url").val();
  newWebscrape.getWebScrape(url, displayScrape, error);
  });

  
});
