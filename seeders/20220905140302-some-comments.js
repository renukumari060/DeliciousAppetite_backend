"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        // {
        //   userName: "some username",
        //   commentContent: "some comment",
        //   recipeId: 1,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          userName: "Renu",
          commentContent: "nice recipe",
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
