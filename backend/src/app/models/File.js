import Sequelize, { Model } from 'sequelize';

class File extends Model{
  static init(sequelize) {
    super.init({
        path: Sequelize.STRING,
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