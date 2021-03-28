import RNFS from 'react-native-fs'
import { Permission, PERMISSIONS } from 'react-native-permissions'

const STORAGE_PERMISSIONS: Permission[] = [
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
]

const RootExternalStorageDirectoryPath: string = RNFS.ExternalStorageDirectoryPath

const EXTERNAL_FILE_STORAGE_PATH: string =
  `${RootExternalStorageDirectoryPath}/Infostore`

const NOTES_FOLDER: string = 'NOTES'

export {
  STORAGE_PERMISSIONS,
  RootExternalStorageDirectoryPath,
  EXTERNAL_FILE_STORAGE_PATH,
  NOTES_FOLDER,
}
