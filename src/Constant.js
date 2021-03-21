import { PERMISSIONS } from 'react-native-permissions'
import RNFS from 'react-native-fs'

const STORAGE_PERMISSIONS = [
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
]

const RootExternalStorageDirectoryPath = RNFS.ExternalStorageDirectoryPath

const EXTERNAL_FILE_STORAGE_PATH =
  RootExternalStorageDirectoryPath + '/Infostore'

export {
  STORAGE_PERMISSIONS,
  RootExternalStorageDirectoryPath,
  EXTERNAL_FILE_STORAGE_PATH,
}
