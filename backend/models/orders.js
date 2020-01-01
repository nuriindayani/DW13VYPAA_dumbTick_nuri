"use strict";
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      quant: DataTypes.INTEGER,
      tot: DataTypes.STRING,
      stat: DataTypes.STRING,
      event_id: DataTypes.INTEGER,
      buyer_id: DataTypes.INTEGER
    },
    {}
  );
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.users, {
      foreignKey: "buyer_id",
      sourceKey: "id"
    });
    orders.belongsTo(models.events, {
      foreignKey: "event_id",
      sourceKey: "id"
    });
  };
  return orders;
};
