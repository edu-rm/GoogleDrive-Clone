import { size } from 'lodash';

export const modify = (existingFiles, files)  => {
  let fileToUpload = {}

  for(let i = 0 ; i< files.length; i++) {
    const id = size(existingFiles) + i + 1;
    fileToUpload = {
      ...fileToUpload,
      [id] : {
        id,
        file: files[i],
        progress: 0,
      }
    }
  }

  console.log(fileToUpload);
  

  return fileToUpload;

}