export class Webscrape {
  constructor() {

  }

//get example site
    getWebScrape(response, displayScrape) {
     $.get('https://allorigins.me/get?method=raw&url=' + encodeURIComponent(`${response}`) + '&callback=?', function(response){
      displayScrape(response);
    });
  }
}