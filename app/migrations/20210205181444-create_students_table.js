'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      class_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Classes",
          key: "id",
          as: "class_id"
        }
      },
      nis: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      sex: Sequelize.DataTypes.STRING,
      birthday: Sequelize.DataTypes.DATEONLY,
      address: Sequelize.DataTypes.STRING,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Students");
  }
};
