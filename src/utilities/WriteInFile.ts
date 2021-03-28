import * as RNFS from 'react-native-fs'
import { ISaveNoteProps } from 'src/interface'

export default async function WriteInFile({ folder, message, file = 'data.json' }: ISaveNoteProps) {
  try {
    await RNFS.mkdir(folder)
    const saveToFileName = `${folder}/${file}`
    await RNFS.writeFile(saveToFileName, message, 'utf8')
    return true
  } catch (error) {
    console.error('WriteInFile raise issue: ', error)
  }
  return false
}
