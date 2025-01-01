import { ChangeDetectionStrategy, Component, Input, NgZone, inject } from '@angular/core';
import { fromEvent } from 'rxjs';

import { BaseEditor } from './base-editor';
import { DiffEditorModel } from './types';

declare global {
  interface Window {
    monaco?: any;
    require?: any; // Optional, if using AMD require for Monaco
  }
}

@Component({
  selector: 'ng-monaco-diff-editor',
  template: '<div class="editor-container" #editorContainer></div>',
  styles: [`
    :host {
      display: block;
      block-size: 200px;
    }

    .editor-container {
      inline-size: 100%;
      block-size: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonacoDiffEditorComponent extends BaseEditor {
  private zone = inject(NgZone);
  private _originalModel!: DiffEditorModel;
  private _modifiedModel!: DiffEditorModel;
  protected override _options: any = {};

  @Input()
  set options(options: any) {
    this._options = { ...this.config.defaultOptions, ...options };
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this._options, this.insideNg);
    }
  }

  get options(): any {
    return this._options;
  }

  @Input()
  set originalModel(model: DiffEditorModel) {
    this._originalModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this._options, this.insideNg);
    }
  }

  @Input()
  set modifiedModel(model: DiffEditorModel) {
    this._modifiedModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this._options, this.insideNg);
    }
  }

  protected initMonaco(options: any, insideNg: boolean): void {
    if (!this._originalModel || !this._modifiedModel) {
      throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
    }

    this._originalModel.language = this._originalModel.language || options.language;
    this._modifiedModel.language = this._modifiedModel.language || options.language;

    const originalModel = window.monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
    const modifiedModel = window.monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);

    this._editorContainer.nativeElement.innerHTML = '';

    if (insideNg) {
      this._editor = window.monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
    } else {
      this.zone.runOutsideAngular(() => {
        this._editor = window.monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
      });
    }

    this._editor.setModel({
      original: originalModel,
      modified: modifiedModel
    });

    // Refresh layout on resize event
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }
    this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(() => this._editor.layout());

    this.onInit.emit(this._editor);
  }
}
