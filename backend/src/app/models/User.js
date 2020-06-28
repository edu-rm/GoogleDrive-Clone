import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Folder, {
      foreignKey: 'user_id',
      as: 'user_folders',
    });
    this.hasMany(models.File, {
      foreignKey: 'user_id',
      as: 'user_files',
    })
  }
}

export default User;