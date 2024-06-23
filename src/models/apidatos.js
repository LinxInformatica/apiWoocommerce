const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('apiDatos', {
      IDAPIDATOS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      IDINTERNOAPICABEZERA: {
        type: DataTypes.INTEGER,
        allowNull: true // Puedes ajustar esto según tus requerimientos
      },
      TIPODATO: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
      },
      IDINTERNODATO: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      SKU: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      IDPUBLICADO: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      DESCRIPCION: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      CANTIDAD: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true
      },
      PRECIOREAL: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
      },
      PRECIOPUBLICADO: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true
      },
      ACTIVO: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
      },
      FECHAPUBLICADO: {
        type: DataTypes.DATE,
        allowNull: true
      },
      FECHAMODIFICADO: {
        type: DataTypes.DATE,
        allowNull: true
      },
      FECHAINACTIVO: {
        type: DataTypes.DATE,
        allowNull: true
      }
    })
};