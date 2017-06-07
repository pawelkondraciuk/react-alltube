class AlltubeValidator {
  static search(req, res, next) {
    req.checkParams('phrase', 'Invalid urlparam').isAlpha();
    next();
  }
}

module.exports = AlltubeValidator;
