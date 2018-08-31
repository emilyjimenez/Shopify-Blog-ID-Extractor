import { Webscrape } from "./../js/Webscrape.js";

let newWebscrape = new Webscrape;





let getAllIds = function(urlsArr) {
  for (let i = 0; i < urlsArr.length; i++) {
    let index = urlsArr[i];
    // let newWebscrape = new Webscrape;
    newWebscrape.getWebScrape(index, displayScrape);
  } 
}

let displayScrape = function(response) {
  let script = response.match(/<script id="__st">.*?<\/script>/)[0];
  console.log("this is the id ", script);
  let id = script.match(/rid\":([\d].*?)};<\/script>/)[1];
  console.log("please be id: ", id);
  $("#blog-id").append(`<li><a href="https://betsyandiya.myshopify.com/admin/blogs/39293445/articles/${id}">https://betsyandiya.myshopify.com/admin/blogs/39293445/articles/${id}</a></li>`);
};

$(document).ready(function(){
  $("#url-array").submit(function(event) {
    event.preventDefault();
 
    let urls = $("#urls").val();
    let urlsArr = urls.split("\n");
    console.log(urlsArr);
    return getAllIds(urlsArr);
    // urlsArr.forEach(function(url) {
      
    //   newWebscrape.getWebScrape(url, displayScrape);
    // });
  });
});
