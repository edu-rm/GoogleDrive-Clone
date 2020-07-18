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

    const total_size = file.dataValues.total_size * 0.000001;

    return res.json({
      storage: total_size,
    })
  }
}

export default StorageController;