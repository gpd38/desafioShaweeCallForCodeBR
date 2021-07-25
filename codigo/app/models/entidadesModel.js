module.exports = function () {
  this.getProdutores = function (connection, callback) {
    connection.query('select * from produtores', callback);
  };

  this.getProdutor = function (connection, callback) {
    connection.query(
      'select * from produtores where id_produtor = 1',
      callback
    );
  };

  this.getCooperativas = function (connection, callback) {
    connection.query('select * from cooperativas', callback);
  };

  this.getCooperativa = function (connection, callback) {
    connection.query(
      'select * from produtores where id_cooperativas = 1',
      callback
    );
  };

  return this;
};
