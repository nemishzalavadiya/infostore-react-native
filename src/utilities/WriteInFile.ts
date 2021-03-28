import * as RNFS from 'react-native-fs'

export default async function WriteInFile(folder, message, fileName = 'data.json') {
  try {
    await RNFS.mkdir(folder)
    const file = `${folder}/${fileName}`
    console.log(file)
    await RNFS.writeFile(file, message, 'utf8')
    return true
  } catch (error) {
    console.error('WriteInFile raise issue: ', error)
  }
  return false
}
