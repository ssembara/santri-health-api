'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Class = this.hasMany(models.Student, {
        foreignKey: 'id'
      })
    }
  };
  Class.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "updated_at"
    }
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'classes',
    timestamps: true
  });
  return Class;
};