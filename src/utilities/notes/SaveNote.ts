import WriteInFile from '../WriteInFile'
import { EXTERNAL_FILE_STORAGE_PATH } from '../../helper/Constant'
import isPermissionProvided from '../isPermissionsProvided'

export default async function saveNote(props) {
  try {
    let result = await isPermissionProvided()
    if (result) {
      result = await WriteInFile(
        props.folder
          ? EXTERNAL_FILE_STORAGE_PATH + '/' + props.folder
          : EXTERNAL_FILE_STORAGE_PATH,
        props.message,
        props.file,
      )
    }
    return !!result
  } catch (error) {
    console.error('saveNote raise issue: ', error)
  }
}
