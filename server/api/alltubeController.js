const service = require('./alltubeService');

class AlltubeController {
  static search(req, res, next) {
    service.search(req.params.phrase)
      .then((body) => {
        res.json(body);
      })
      .catch(next);
  }
}

module.exports = AlltubeController;
