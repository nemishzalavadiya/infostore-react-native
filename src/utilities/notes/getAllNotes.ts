import RNFS from 'react-native-fs'
import { EXTERNAL_FILE_STORAGE_PATH, NOTES_FOLDER } from '../../helper/Constant'

export default async function getAllNotes() {
  const data = []
  try {
    const files = await RNFS.readDir(
      `${EXTERNAL_FILE_STORAGE_PATH}/${NOTES_FOLDER}`,
    )
    for (const file of files) {
      if (file.isFile()) {
        const fileData = await RNFS.readFile(file.path)
        const fileObject = JSON.parse(fileData)
        fileObject.path = file.path
        data.push(fileObject)
      }
    }
  } catch (error) {
    console.error('err while fetching :', error)
  }
  return data
}
