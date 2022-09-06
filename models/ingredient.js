"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ingredient.belongsTo(models.recipe);
    }
  }
  ingredient.init(
    {
      text: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      units: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
