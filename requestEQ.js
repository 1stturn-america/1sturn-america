
const request = require ('request');
const cheerio = require ('cheerio');

request ('http://www.equibase.com/static/entry/RaceCardIndexGP022020USA-EQB.html', (error,
response, html) => {
   if (!error && response.statusCode == 200) {
        console.log(html);
       }
});