"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipes",
      [
        // {
        //   title: "recipe title",
        //   imageUrl: "imageUrl",
        //   videoUrl: "videoUrl",
        //   time: "time duration",
        //   serving: "string",
        //   isPublic: true,
        //   steps: "steps to prepare",
        //   userId: 1,

        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "recipe title",
          imageUrl: "imageUrl",
          videoUrl: "videoUrl",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
