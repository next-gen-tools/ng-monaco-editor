import {
  NgModule,
  ModuleWithProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from './monaco-editor.component';
import { NG_MONACO_EDITOR_CONFIG, NgMonacoEditorConfig } from './config';
import { MonacoDiffEditorComponent } from './monaco-diff-editor.component';

@NgModule({
  imports: [CommonModule, MonacoEditorComponent, MonacoDiffEditorComponent],
  exports: [MonacoEditorComponent, MonacoDiffEditorComponent],
})
export class MonacoEditorModule {
  public static forRoot(
    config: NgMonacoEditorConfig = {}
  ): ModuleWithProviders<MonacoEditorModule> {
    return {
      ngModule: MonacoEditorModule,
      providers: [{ provide: NG_MONACO_EDITOR_CONFIG, useValue: config }],
    };
  }
}

export function provideMonacoEditor(config: NgMonacoEditorConfig = {}) {
  return makeEnvironmentProviders([
    { provide: NG_MONACO_EDITOR_CONFIG, useValue: config },
  ]);
}
