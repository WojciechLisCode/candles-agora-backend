"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class iDidHaveCandle extends Model {
    static associate(models) {
      iDidHaveCandle.belongsTo(models.candle);
      iDidHaveCandle.belongsTo(models.user);
    }
  }
  iDidHaveCandle.init(
    {
      connectionText: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "iDidHaveCandle",
    }
  );
  return iDidHaveCandle;
};
