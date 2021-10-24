'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      itemCompra.belongsTo(models.compra, 
        {foreignKey: 'CompraId', as: 'compras_'})
       
      itemCompra.belongsTo(models.produto, 
        {foreignKey: 'ProdutoId', as: 'produto_'})
    }    
  }
  itemCompra.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'itemCompra',
  });
  return itemCompra;
};