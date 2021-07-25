module.exports = function (app) {
  app.get('/formulario_inclusao_entidade', function (req, res) {
    res.render('admin/form_add_entidade');
  });

  app.post('/paginas/salvar', function (req, res) {
    res.send('Chegou Aqui - Formulário enviado ');
    // res.render('admin/form_add_noticia');
  });
};
