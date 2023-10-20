const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allorNull: false,
         primaryKey: true,
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true,
      },
      pasword:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }, { timestamps: false });
};
