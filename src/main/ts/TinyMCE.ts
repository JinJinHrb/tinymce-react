import { TinyMCE as TinyMCEGlobal } from 'tinymce'

const getTinymce = (view: Window): TinyMCEGlobal | null => {
	const myWindow = window as any
	if (myWindow?.__POWERED_BY_QIANKUN__ && myWindow?.tinymce && !(view as any)?.tinymce) {
		// for qiankun
		return myWindow.tinymce
	}
	const global = view as any
	return global && global.tinymce ? global.tinymce : null
}

export { getTinymce }
