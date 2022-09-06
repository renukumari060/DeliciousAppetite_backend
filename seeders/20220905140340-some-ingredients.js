"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        // {
        //   text: "ingredients name",
        //   amount: "amount",
        //   units: "cup",
        //   recipeId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          text: "Clarified butter",
          amount: 1,
          units: "tsp",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Coconut",
          amount: 2,
          units: "cup",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Faggery",
          amount: 1,
          units: "cup",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Cardamom powder",
          amount: 1,
          units: "tsp",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Water",
          amount: 2,
          units: "cup",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Salt",
          amount: 1 / 2,
          units: "tsp",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Rice Flour",
          amount: 2,
          units: "cups",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
