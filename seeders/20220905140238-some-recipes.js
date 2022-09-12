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
          title: "Samosa",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/AAm95jaoAJc&t=300s",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Samosa recipe",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/AAm95jaoAJc&t",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Modak Recipe",
          imageUrl: "https://source.unsplash.com/1600x900/?modak",
          videoUrl: "https://www.youtube.com/embed/KcXhD7vAYmo",
          time: "25 minutes",
          serving: "12 modaks",
          isPublic: false,
          steps:
            "firstly, take a ball sized rice flour dough and flatten it.with the help of both thumbs start pressing the edges and create a dent in the centre.slowly press from edges till it forms a cup.start creating pleats with your index finger and thumb.now scoop a tbsp of prepared coconut-jaggery stuffing.get the pleats together to form a bundle.close the top by pinching and making it pointed.",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Motichur Ladoo",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/DNhlPEwGF1A",
          time: "35 minutes",
          serving: "10 laddoos",
          isPublic: true,
          steps: "step 1: take a ball sized rice flour dough and flatten it",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sweet Patoto Kheer",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/-FuWmv3sDIE",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Paneer Masala",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/R4Za6SvB-xY",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 2,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Til Ladoo",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/J8dOHmWR9Bs",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dhokle Recipe",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/gIAqWYn3DuY",
          time: "time duration",
          serving: "string",
          isPublic: false,
          steps: "steps to prepare",
          userId: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Balushahi Recipe",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/QAc429NEgcM",
          time: "time duration",
          serving: "string",
          isPublic: true,
          steps: "steps to prepare",
          userId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peanut Chikki",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/9F5NZZDmEqs",
          time: "time duration",
          serving: "string",
          isPublic: false,
          steps: "steps to prepare",
          userId: 4,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tamarind Chutney",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/Z5M-Z63-v3A",
          time: "time duration",
          serving: "string",
          isPublic: false,
          steps: "steps to prepare",
          userId: 1,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Eggplant masala",
          imageUrl: "imageUrl",
          videoUrl: "https://www.youtube.com/embed/qkuTBrXA7WA",
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
