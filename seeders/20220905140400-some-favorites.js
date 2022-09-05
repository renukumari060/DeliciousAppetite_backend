"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "favorites",
      [
        // {
        //   userId: 1,
        //   recipeId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          userId: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favorites", null, {});
  },
};
