import { ISaveProps } from 'src/interface'
import { EXTERNAL_FILE_STORAGE_PATH } from '../../helper/Constant'
import isPermissionProvided from '../isPermissionsProvided'
import WriteInFile from '../WriteInFile'

export default async function saveNote({ saveProps }: ISaveProps) {
  try {
    let result = await isPermissionProvided()
    if (result) {
      result = await WriteInFile({
        folder: saveProps.folder
          ? `${EXTERNAL_FILE_STORAGE_PATH}/${saveProps.folder}`
          : EXTERNAL_FILE_STORAGE_PATH,
        message: saveProps.message,
        file: saveProps.file,
      })
    }
    return !!result
  } catch (error) {
    console.error('saveNote raise issue: ', error)
  }
}
