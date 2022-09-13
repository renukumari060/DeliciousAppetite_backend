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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Lunch",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Dinner",
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
