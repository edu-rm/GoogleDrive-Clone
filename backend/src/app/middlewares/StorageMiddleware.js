import { fn, col } from 'sequelize';
import File from '../models/File';

export default async (req, res, next) => {
  const file = await File.findAll({
    where : {
      user_id: req.user_id
    },
    attributes : [
      [fn('sum', col('size')), 'total_size']
    ],
  });

  const { total_size } = file[0].dataValues;

  console.log(total_size);
  console.log(req.files);
}