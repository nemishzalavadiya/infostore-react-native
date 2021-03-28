import RNFS from 'react-native-fs'
import { PERMISSIONS } from 'react-native-permissions'

const STORAGE_PERMISSIONS = [
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
]

const RootExternalStorageDirectoryPath = RNFS.ExternalStorageDirectoryPath

const EXTERNAL_FILE_STORAGE_PATH =
  RootExternalStorageDirectoryPath + '/Infostore'

const NOTES_FOLDER = 'NOTES'

export {
  STORAGE_PERMISSIONS,
  RootExternalStorageDirectoryPath,
  EXTERNAL_FILE_STORAGE_PATH,
  NOTES_FOLDER,
}
