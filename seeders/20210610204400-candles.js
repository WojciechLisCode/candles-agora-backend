"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "candles",
      [
        {
          name: "candle1",
          imageUrl: "candle1Image",
          description: "candle1description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle2",
          imageUrl: "candle2Image",
          description: "candle2description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle3",
          imageUrl: "candle3Image",
          description: "candle3description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle4",
          imageUrl: "candle4Image",
          description: "candle4description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle5",
          imageUrl: "candle5Image",
          description: "candle5description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle6",
          imageUrl: "candle6Image",
          description: "candle6description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle7",
          imageUrl: "candle7Image",
          description: "candle7description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle8",
          imageUrl: "candle8Image",
          description: "candle8description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "candle9",
          imageUrl: "candle9Image",
          description: "candle9description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("candles", null, {});
  },
};
