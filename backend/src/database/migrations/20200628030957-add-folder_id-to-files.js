module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('files', 'folder_id', {
      type: Sequelize.INTEGER,
      references: { model: 'folders', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('files', 'folder_id');
  },
};
