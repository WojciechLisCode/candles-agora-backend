"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class iHaveCandle extends Model {
    static associate(models) {
      iHaveCandle.belongsTo(models.candle);
      iHaveCandle.belongsTo(models.user);
    }
  }
  iHaveCandle.init(
    {
      connectionText: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "iHaveCandle",
    }
  );
  return iHaveCandle;
};
