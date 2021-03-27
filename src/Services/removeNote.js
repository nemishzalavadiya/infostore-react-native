import React from 'react'
import RNFS from 'react-native-fs'
import { EXTERNAL_FILE_STORAGE_PATH, NOTES_FOLDER } from '../Constant'

export default async function removeNote(path) {
  try {
    await RNFS.unlink(path)
    return true
  } catch (err) {
    return false
  }
}
