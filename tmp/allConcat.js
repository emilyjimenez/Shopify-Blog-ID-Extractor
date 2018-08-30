import { Webscrape } from "./../js/Webscrape.js";

let error = function(error) {
  $("#output").text("Something went wrong!");
};

let displayScrape = function(response) {
  let script = response.match(/<script id="__st">.*?<\/script>/)[0];
  console.log("this is the id ", script);
  let id = script.match(/rid\":([\d].*?)};<\/script>/)[1];
  console.log("please be id: ", id);
  $("#blog-id").text(id);
};

let getAllIds = function(urlsArr) {
  for (let i = 0; i < urlsArr.length; i++) {
    let index = urlsArr[i];
    let newWebscrape = new Webscrape;
    newWebscrape.getWebScrape(index, displayScrape, error);
  } 
}



$(document).ready(function(){
  let newWebscrape = new Webscrape();
  
  $("#check-scrape").submit(function(event) {
  event.preventDefault();
  let url = $("#url").val();
  newWebscrape.getWebScrape(url, displayScrape, error);
  });

  $("#url-array").submit(function(event) {
    event.preventDefault();
    let urls = $("#urls").val();
    let urlsArr = urls.split("\n");
    getAllIds(urlsArr);
    });

  
});
