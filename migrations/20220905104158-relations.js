"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("recipes", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("recipes", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("comments", "recipeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "recipes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("ingredients", "recipeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "recipes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("recipes", "userId");
    await queryInterface.removeColumn("recipes", "categoryId");
    await queryInterface.removeColumn("comments", "recipeId");
    await queryInterface.removeColumn("ingredients", "recipeId");
  },
};
