import { Webscrape } from "./../js/Webscrape.js";

let error = function(error) {
  $("#output").text("Something went wrong, no doctors found!");
};

let displayScrape = function(response) {
  let script = response.match(/<script id="__st">.*?<\/script>/)[0];
  console.log("this is the id ", script);
  let id = script.match(/rid\":([\d].*?)};<\/script>/)[1];
  console.log("please be id: ", id);
  $("#output").text(response); 
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
