import * as RNFS from 'react-native-fs'

export default async function WriteInFile(folder, message, fileName = 'data.json') {
  try {
    await RNFS.mkdir(folder)
    let file = folder + '/' + fileName;
    console.log(file);
    await RNFS.writeFile(file, message, 'utf8')
    return true;
  } catch (err) {
    console.log('err me: ', err.message)
  }
  return false
}
