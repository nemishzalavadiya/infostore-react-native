import RNFS from 'react-native-fs'

export default async function removeNote(path: string) {
  try {
    await RNFS.unlink(path)
    return true
  } catch (err) {
    return false
  }
}
