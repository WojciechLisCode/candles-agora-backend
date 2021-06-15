"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class iCanSellCandle extends Model {
    static associate(models) {
      iCanSellCandle.belongsTo(models.candle);
      iCanSellCandle.belongsTo(models.user);
    }
  }
  iCanSellCandle.init(
    {
      connectionText: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "iCanSellCandle",
    }
  );
  return iCanSellCandle;
};
