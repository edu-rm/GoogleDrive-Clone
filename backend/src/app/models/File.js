import Sequelize, { Model } from 'sequelize';

class File extends Model{
  static init(sequelize) {
    super.init({
        path: Sequelize.STRING,
        name: Sequelize.STRING,
        extension: Sequelize.STRING,
        url: Sequelize.STRING,
        size: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    );
    return this;
  };

  static associate (models) {
    this.belongsTo(models.Folder, {
      foreignKey: 'folder_id',
      as: 'file_folder',
    })
  }

}

export default File;