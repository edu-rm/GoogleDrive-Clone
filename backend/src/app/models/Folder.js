import Sequelize, { Model } from 'sequelize';

class Folder extends Model {
  static init(sequelize){
    super.init(
      {
        father: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Folder;