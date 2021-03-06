"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.belongsToMany(models.candle, {
        through: "iWantCandle",
        foreignKey: "userId",
        as: "wants",
      });
      user.belongsToMany(models.candle, {
        through: "iDidHaveCandle",
        foreignKey: "userId",
        as: "had",
      });
      user.belongsToMany(models.candle, {
        through: "iHaveCandle",
        foreignKey: "userId",
        as: "have",
      });
      user.belongsToMany(models.candle, {
        through: "iCanSellCandle",
        foreignKey: "userId",
        as: "dontNeed",
      });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isBlocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
