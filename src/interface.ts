interface IAddNoteProps {
  title: string,
  note: string,
  setTitle?: (arg0: string) => void,
  setNote?: (arg0: string) => void,
  saveData?: (arg0: any) => void
}

interface IAddProps {
  addProps: IAddNoteProps
}

interface INoteContent {
  title: string,
  note: string,
  path: string,
  date: string,
}

interface IShowNoteProps {
  content: INoteContent[],
  removeNote: (arg0: string) => Promise<void>,
  setTitle?: (arg0: string) => void,
  setNote?: (arg0: string) => void,
  setAdd?: (arg0: boolean) => void,
}

interface IShowProps {
  showProps: IShowNoteProps
}

interface ISaveNoteProps {
  file: string,
  folder: string,
  message: string
}

interface ISaveProps {
  saveProps: ISaveNoteProps
}

interface IToolBar {
  name: string
}

interface INoteModelProperties {
  isOpen: boolean
  setOpen: (arg0: boolean) => void,
  removeNote: (arg0: string) => Promise<void>,
  setTitle?: (arg0: string) => void,
  setNote?: (arg0: string) => void,
  setAdd?: (arg0: boolean) => void,
}

interface INoteModel {
  noteModel: INoteModelProperties
}
export { IToolBar, INoteModel, INoteModelProperties, IAddProps, IAddNoteProps, IShowNoteProps, IShowProps, INoteContent, ISaveProps, ISaveNoteProps }