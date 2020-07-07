import { size } from 'lodash';

export const modify = (existingFiles, files)  => {
  let fileToUpload = {}

  for(let i = 0 ; files.lenght ; i++) {
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
  return fileToUpload;

}