import { fn, col } from 'sequelize';
import File from '../models/File';

class StorageController {
  async index(req, res) {
    const file = await File.findOne({
      where : {
        user_id: req.user_id
      },
      attributes : [
        [fn('sum', col('size')), 'total_size']
      ],
    });

    return res.json({
      storage: file.dataValues.total_size,
    })
  }
}

export default StorageController;