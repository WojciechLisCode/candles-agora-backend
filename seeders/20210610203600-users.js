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
          email: "jolantazgoda@gmail.com",
          password: bcrypt.hashSync("marvel1989", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
          isBlocked: false,
        },
        {
          name: "Wojtek",
          email: "wlis58372@gmail.com",
          password: bcrypt.hashSync("erobos86", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
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
