import PermissionCheck from './PermissionCheck'
import WriteInFile from './WriteInFile'
import { EXTERNAL_FILE_STORAGE_PATH, STORAGE_PERMISSIONS } from '../Constant'

async function isPermissionProvided() {
  let result = await PermissionCheck(STORAGE_PERMISSIONS)
  console.log('permission result: ', result)

  return result
}

export default async function saveNotes(props) {
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
}
