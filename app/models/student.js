'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Student = this.belongsTo(models.Class, {
        foreignKey: 'classId',
        as: 'class'
      })
    }
  };
  Student.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "class_id",
    },
    nis: DataTypes.STRING,
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
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
    modelName: 'Student',
    tableName: 'students',
    timestamps: true
  });

  return Student;
};