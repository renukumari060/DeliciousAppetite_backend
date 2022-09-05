"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favorite.belongsTo(models.user);
      favorite.belongsTo(models.recipe);
    }
  }
  favorite.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favorite",
    }
  );
  return favorite;
};
