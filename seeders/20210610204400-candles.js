"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "candles",
      [
        {
          name: "RAINBOWS END",
          imageUrl: "candle1Image",
          description: "candle1description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MORNING MIST",
          imageUrl: "candle2Image",
          description: "candle2description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SEASON OF PEACE",
          imageUrl: "candle3Image",
          description: "candle3description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SNOW IN PEACE",
          imageUrl: "candle4Image",
          description: "candle4description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WILLOW BREEZE",
          imageUrl: "candle5Image",
          description: "candle5description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PIKNIK IN THE PARK",
          imageUrl: "candle6Image",
          description: "candle6description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "WATERFALL CANYON",
          imageUrl: "candle7Image",
          description: "candle7description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CUBAN MOHITO",
          imageUrl: "candle8Image",
          description: "candle8description",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NATURE PAINTBRUSH",
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
