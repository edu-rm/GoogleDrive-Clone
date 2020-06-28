import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        password_hash: Sequelize.VIRTUAL,

      },
      {
        sequelize
      }
    );
    this.addHook('beforeSave', async (user)=>{
      user.password = await bcrypt.hash(user.password_hash, 8);
    });

    return this;
  }

  checkPassword( password ) {
    return bcrypt.compare(password, this.password);
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