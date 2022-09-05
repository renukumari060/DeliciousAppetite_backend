"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        // {
        //   categoryName: "some category",
        //   recipeId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          categoryName: "Breakfast",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Lunch",
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Snacks",
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Dinner",
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
