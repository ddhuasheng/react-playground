import { fileNameLanguage } from './utils'
import {
  APP_COMPONENT_FILE_NAME,
  APP_CSS_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
  ENTRY_FILE_NAME,
} from './consts'
import AppTsxRaw from './template/App.tsx?raw'
import AppCssRaw from './template/App.css?raw'
import MainTsxRaw from './template/main.tsx?raw'
import ImportMapJson from './template/import-map.json?raw'

export const initFiles = {
  [APP_COMPONENT_FILE_NAME]: {
    language: fileNameLanguage(APP_COMPONENT_FILE_NAME),
    name: APP_COMPONENT_FILE_NAME,
    value: AppTsxRaw,
  },
  [APP_CSS_FILE_NAME]: {
    language: fileNameLanguage(APP_CSS_FILE_NAME),
    name: APP_CSS_FILE_NAME,
    value: AppCssRaw,
  },
  [ENTRY_FILE_NAME]: {
    language: fileNameLanguage(ENTRY_FILE_NAME),
    name: ENTRY_FILE_NAME,
    value: MainTsxRaw,
  },
  [IMPORT_MAP_FILE_NAME]: {
    language: fileNameLanguage(IMPORT_MAP_FILE_NAME),
    name: IMPORT_MAP_FILE_NAME,
    value: ImportMapJson,
  },
}
