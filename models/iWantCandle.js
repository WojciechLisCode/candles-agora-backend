"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class iWantCandle extends Model {
    static associate(models) {
      iWantCandle.belongsTo(models.candle);
      iWantCandle.belongsTo(models.user);
    }
  }
  iWantCandle.init(
    {
      connectionText: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "iWantCandle",
    }
  );
  return iWantCandle;
};
