"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candle extends Model {
    static associate(models) {
      candle.belongsToMany(models.user, {
        through: "iWantCandle",
        foreignKey: "candleId",
        as: "wants",
      });
      candle.belongsToMany(models.user, {
        through: "iDidHaveCandle",
        foreignKey: "candleId",
        as: "had",
      });
      candle.belongsToMany(models.user, {
        through: "iHaveCandle",
        foreignKey: "candleId",
        as: "have",
      });
      candle.belongsToMany(models.user, {
        through: "iCanSellCandle",
        foreignKey: "candleId",
        as: "dontNeed",
      });
    }
  }
  candle.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
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
