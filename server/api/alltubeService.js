const request = require('request');

function search(phrase) {
  function mapResponse(suggestions) {
    return suggestions.map((suggestion) => {
      return {
        name: suggestion.value,
        url: suggestion.data,
      };
    });
  }
  return new Promise((resolve, reject) => {
    request('http://alltube.tv/index.php', {
      qs: {
        phrase,
        url: 'search/autocomplete/',
      },
      json: true,
    }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(mapResponse(body.suggestions));
      }
    });
  });
}

module.exports = {
  search,
};
