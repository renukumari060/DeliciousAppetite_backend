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
          userId: 4,
          recipeId: 2,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Deep",
          commentContent: "awesome",
          userId: 5,
          recipeId: 2,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Renu",
          commentContent: "oh wow...I feel like making them right now",
          userId: 4,
          recipeId: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Deep",
          commentContent: "Awesome Recipe",
          userId: 5,
          recipeId: 1,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Renu",
          commentContent: "Awesome Recipe",
          userId: 4,
          recipeId: 3,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Deep",
          commentContent: "Super yummy",
          userId: 5,
          recipeId: 3,
          rating: 4,
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
