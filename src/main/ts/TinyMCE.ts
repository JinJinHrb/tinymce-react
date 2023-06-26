/* eslint-disable no-underscore-dangle */
import { TinyMCE as TinyMCEGlobal } from 'tinymce'

type MyWindow = Window & { __POWERED_BY_QIANKUN__?: boolean; tinymce?: TinyMCEGlobal }

const getTinymce = (view: Window): TinyMCEGlobal | null => {
  const myWindow = window as unknown as MyWindow
  if (myWindow?.__POWERED_BY_QIANKUN__ && myWindow?.tinymce && !(view as MyWindow)?.tinymce) {
    // for qiankun
    return myWindow.tinymce
  }
  const global = view as any
  return global && global.tinymce ? global.tinymce : null
}

export { getTinymce }
