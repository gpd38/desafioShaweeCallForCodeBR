module.exports = function (app) {
  app.get('/cadastro', function (req, res) {
    res.render('crud');
  });

  app.post('/salvar', function (req, res) {
    res.send('Chegou Aqui - Formulário enviado ');
    // res.render('admin/form_add_noticia');
  });
};
