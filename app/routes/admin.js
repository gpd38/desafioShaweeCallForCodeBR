module.exports = function (app) {
  app.get('/cadastro', function (req, res) {
    res.render('admin/cadastro');
  });

  app.post('/paginas/salvar', function (req, res) {
    res.send('Formulário enviado com sucesso');
    // res.render('admin/form_add_noticia');
  });
};
