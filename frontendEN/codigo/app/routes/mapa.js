/**module.exports = function (application) {
  application.get('/mapa', function (req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function (error, result) {
      res.render('paginas/mapa', { noticias: result });
    });
  });
};*/

module.exports = function (app) {
  app.get('/mapa', function (req, res) {
    res.render('paginas/mapa');
  });
};
