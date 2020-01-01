"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      imgs: DataTypes.STRING,
      role: DataTypes.INTEGER
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.events, {
      as: "user",
      foreignKey: "createdby"
    });
    users.hasMany(models.orders, {
      as: "buyer",
      foreignKey: "buyer_id"
    });
  };
  return users;
};
