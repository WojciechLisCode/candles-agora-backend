"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candle extends Model {
    static associate(models) {
      // candle.belongsToMany(models.user, {
      //   through: "iWantThem",
      //   foreignKey: "candleId",
      //   as: "wants",
      // });
      candle.belongsToMany(models.user, {
        through: "iDidHaveCandles",
        foreignKey: "candleId",
        // as: "had",
      });
    }
  }
  candle.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "candle",
    }
  );
  return candle;
};
