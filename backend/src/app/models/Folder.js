import Sequelize, { Model } from 'sequelize';

class Folder extends Model {
  static init(sequelize){
    super.init(
      {
        father: Sequelize.INTEGER,
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Folder;