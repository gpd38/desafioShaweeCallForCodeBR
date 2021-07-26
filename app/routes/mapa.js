module.exports = function (app) {
  app.get('/mapa', function (req, res) {
    res.render('paginas/mapa');
  });
};
