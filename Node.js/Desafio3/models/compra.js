'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      compra.belongsTo(models.Cliente, 
        {foreignKey: 'ClienteId', as: 'compras_cliente'})
      compra.belongsToMany(models.produto,
        {forengkey: 'ProdutiId', through: 'itemCompra'})
      compra.hasMany(models.itemCompra,
        {forengkey: 'CompraId', as: 'compra_itemcompra'})
       
    }
  };
  compra.init({
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'compra',
  });
  return compra;
};