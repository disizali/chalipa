"use strict";
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define(
    "News",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT
    },
    {}
  );
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};
