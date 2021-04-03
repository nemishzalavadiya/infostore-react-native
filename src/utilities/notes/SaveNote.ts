import { IAddNoteProps, ISaveProps } from 'src/interface'
import { EXTERNAL_FILE_STORAGE_PATH } from '../../helper/Constant'
import isPermissionProvided from '../isPermissionsProvided'
import WriteInFile from '../WriteInFile'
import { sha256 } from 'react-native-sha256'
import { NOTES_FOLDER } from '../../helper/Constant'
import { ISaveNoteProps } from 'src/interface'

async function saveNoteToExternalStorage({ saveProps }: ISaveProps) {
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

export default async function saveNote({ note, title }: IAddNoteProps): Promise<Boolean> {

  const formContent = JSON.stringify({ title, note, date:new Date() })
  const fileName = await sha256(formContent)

  const saveProps: ISaveNoteProps = {
    folder: NOTES_FOLDER,
    file: `${title.trim().split(" ").join("_")}_${fileName}`,
    message: formContent,
  }

  const status = await saveNoteToExternalStorage({ saveProps })
  if (status) {
    return true
  } else {
    return false
  }
}
