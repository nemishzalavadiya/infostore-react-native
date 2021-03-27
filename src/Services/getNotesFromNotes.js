import React from 'react'
import RNFS from 'react-native-fs'
import { EXTERNAL_FILE_STORAGE_PATH, NOTES_FOLDER } from '../Constant'

export default async function getNotesFromNotes() {
  let files = await RNFS.readDir(
    EXTERNAL_FILE_STORAGE_PATH + '/' + NOTES_FOLDER,
  )
  let data = []
  for (const file of files) {
    if (file.isFile()) {
      let fileData = await RNFS.readFile(file.path)
      let fileObject = JSON.parse(fileData);
      fileObject.path = file.path;
      data.push(fileObject)
    }
  }
  return data
}
