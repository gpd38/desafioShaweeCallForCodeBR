/**module.exports = function (app) {
  app.get('/sobre', function (req, res) {
    var connection = app.config.dbConnection();
    //var noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getSobre(connection, function (error, result) {
      res.render('paginas/sobre', { sobre: result });
    });
  });
};*/

module.exports = function (app) {
  app.get('/sobre', function (req, res) {
    res.render('paginas/sobre');
  });
};
