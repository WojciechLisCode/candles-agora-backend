"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("iDidHaveCandles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iDidHaveCandles", "candleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "candles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iHaveCandles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iHaveCandles", "candleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "candles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iCanSellCandles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iCanSellCandles", "candleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "candles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iWantCandles", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("iWantCandles", "candleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "candles",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("iDidHaveCandles", "userId");
    await queryInterface.removeColumn("iDidHaveCandles", "candleId");
    await queryInterface.removeColumn("iHaveCandles", "userId");
    await queryInterface.removeColumn("iHaveCandles", "candleId");
    await queryInterface.removeColumn("iCanSellCandles", "userId");
    await queryInterface.removeColumn("iCanSellCandles", "candleId");
    await queryInterface.removeColumn("iWantCandles", "userId");
    await queryInterface.removeColumn("iWantCandles", "candleId");
  },
};
