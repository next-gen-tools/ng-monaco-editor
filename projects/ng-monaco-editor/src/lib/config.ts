import { InjectionToken } from '@angular/core';

export const NG_MONACO_EDITOR_CONFIG = new InjectionToken('NGX_MONACO_EDITOR_CONFIG');

export interface NgMonacoEditorConfig {
  baseUrl?: string;
  requireConfig?: { [key: string]: any; };
  defaultOptions?: { [key: string]: any; };
  monacoRequire?: Function;
  onMonacoLoad?: Function;
}
