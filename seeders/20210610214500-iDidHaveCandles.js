"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "iDidHaveCandles",
      [
        {
          connectionText: "Very nice scent",
          userId: 1,
          candleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          connectionText: "It was terrible. Not recomended",
          userId: 2,
          candleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("iDidHaveCandles", null, {});
  },
};
