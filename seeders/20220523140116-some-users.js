"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          email: "apple@apple.com",
          password: bcrypt.hashSync("apple", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banana",
          email: "banana@banana.com",
          password: bcrypt.hashSync("banana", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coco",
          email: "coco@coco.com",
          password: bcrypt.hashSync("coco", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "renu",
          email: "renu",
          password: bcrypt.hashSync("renu", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deep",
          email: "deep",
          password: bcrypt.hashSync("deep", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
