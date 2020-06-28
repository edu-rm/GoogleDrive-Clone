// import File from '../app/models/File';
// import Folder from '../app/models/Folder';


// export default async (id) => {

//   async function deleteRecursively(id) {
//     const { id_folder } = await Folder.findByPk(id);
//     if(id_folder) {
//       const children = await Folder.findAll({
//         where: {
//           father: id_child,
//         }
//       });
//       const id_children
//       deleteRecursively(id);
//     }else {
//       return;
//     }
//   }
//   deleteRecursively(id);

//   return;
// }