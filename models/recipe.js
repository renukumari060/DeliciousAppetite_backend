"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recipe.belongsTo(models.user);
      recipe.hasMany(models.category);
      recipe.hasMany(models.comment);
      recipe.hasMany(models.ingredient);

      recipe.belongsToMany(models.user, {
        through: "favorites",
        foreignKey: "recipeId",
      });
    }
  }
  recipe.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      videoUrl: DataTypes.TEXT,
      time: DataTypes.STRING,
      serving: DataTypes.STRING,
      isPublic: DataTypes.BOOLEAN,
      steps: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
