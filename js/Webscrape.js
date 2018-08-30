export class Webscrape {
  constructor() {

  }

//get example site
    getWebScrape(response, displayScrape, error) {
     $.get('https://allorigins.me/get?method=raw&url=' + encodeURIComponent(`${response}`) + '&callback=?')
     .then(function(response){
      displayScrape(response);
    }).fail(function(error) {
      throw(error);
    });
  }

}