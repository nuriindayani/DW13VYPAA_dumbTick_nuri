"use strict";
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define(
    "events",
    {
      title: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      price: DataTypes.INTEGER,
      desc: DataTypes.TEXT,
      address: DataTypes.STRING,
      urlmap: DataTypes.TEXT,
      image: DataTypes.STRING,
      createdby: DataTypes.INTEGER
    },
    {}
  );
  events.associate = function(models) {
    // associations can be defined here
    events.belongsTo(models.categories, {
      foreignKey: "category_id",
      sourceKey: "id"
    });
    events.belongsTo(models.users, {
      foreignKey: "createdby",
      sourceKey: "id"
    });
    events.hasMany(models.orders, {
      foreignKey: "event_id",
      as: "event"
    });
  };
  return events;
};
