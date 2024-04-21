import {Model, DataTypes } from "sequelize";
import sequelize from "./conexaodb.js";



// Definir o modelo Produto
const Produto = sequelize.define('Produto', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    preco: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
},  {
      tableName: 'produto',
      timestamps: false
   });
  
  // Sincronizar o modelo com o banco de dados
  Produto.sync();


  
  
// Exportar o modelo para uso em outros arquivos
export default Produto

