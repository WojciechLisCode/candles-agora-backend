"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jola",
          email: "jola@mail.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
          isBlocked: false,
        },
        {
          name: "Wojtek",
          email: "wojtek@mail.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
          isBlocked: false,
        },
        {
          name: "Marvel",
          email: "marvel@mail.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
          isBlocked: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
