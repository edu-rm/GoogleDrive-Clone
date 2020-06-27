import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        root: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default User;