module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      folder_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      user_id :{
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('files');
  },
};
