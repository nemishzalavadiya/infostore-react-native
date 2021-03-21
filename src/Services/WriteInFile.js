import RNFS from 'react-native-fs';

export default async function WriteInFile(filePath,message) {
  try {
    let success = await RNFS.writeFile(
      filePath,
      message,
      'utf8',
    )
    if (success) {
      console.log('FILE WRITTEN!',success)
      return true;
    }
  } catch (err) {
    console.log(err.message)
  }
  return false;
}
