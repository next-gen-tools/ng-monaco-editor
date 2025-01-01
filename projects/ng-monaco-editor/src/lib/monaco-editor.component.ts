import {
  Input,
  NgZone,
  inject,
  OnInit,
  Component,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { NgxEditorModel } from './types';
import { BaseEditor } from './base-editor';
import { themeMappings } from './theme-mappings';
import { js_snippets } from './data/js.snippets';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare global {
  interface Window {
    monaco?: any;
    require?: any; // Optional, if using AMD require for Monaco
  }
}

@Component({
  selector: 'ng-monaco-editor',
  template: '<div class="editor-container" #editorContainer></div>',
  styles: [
    `
      :host {
        display: block;
        block-size: 200px;
      }
      .editor-container {
        inline-size: 100%;
        block-size: 100%;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonacoEditorComponent  extends BaseEditor
implements ControlValueAccessor, OnInit
{
private zone = inject(NgZone);
private _value: string = '';

propagateChange = (_: any) => {};
onTouched = () => {};

@Input() language: string = 'javascript';
@Input() theme: string = 'vs-dark';
@Input('options')
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

@Input('model')
set model(model: NgxEditorModel) {
  this.options.model = model;
  if (this._editor) {
    this._editor.dispose();
    this.initMonaco(this.options, this.insideNg);
  }
}

writeValue(value: any): void {
  this._value = value || '';
  setTimeout(() => {
    if (this._editor && !this.options.model) {
      this._editor.setValue(this._value);
    }
  });
}

registerOnChange(fn: any): void {
  this.propagateChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouched = fn;
}

ngOnInit(): void {}

protected initMonaco(options: any, insideNg: boolean): void {
  const hasModel = !!options.model;

  if (hasModel) {
    const model = window.monaco.editor.getModel(options.model.uri || '');
    if (model) {
      options.model = model;
      options.model.setValue(this._value);
    } else {
      options.model = window.monaco.editor.createModel(
        options.model.value,
        options.model.language,
        options.model.uri
      );
    }
  }

  if (insideNg) {
    this._editor = window.monaco.editor.create(
      this._editorContainer.nativeElement,
      options
    );
  } else {
    this.zone.runOutsideAngular(() => {
      this._editor = window.monaco.editor.create(
        this._editorContainer.nativeElement,
        options
      );
    });
  }

  if (!hasModel) {
    this._editor.setValue(this._value);
  }

  this._editor.onDidChangeModelContent(() => {
    const value = this._editor.getValue();
    this.zone.run(() => {
      this.propagateChange(value);
      this._value = value;
    });
  });

  this._editor.onDidBlurEditorWidget(() => {
    this.onTouched();
  });

  if (this._windowResizeSubscription) {
    this._windowResizeSubscription.unsubscribe();
  }
  this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(() =>
    this._editor.layout()
  );

  this.applyTheme(this.theme);
  this.onInit.emit(this._editor);
}

private applyTheme(theme: string): void {
  if (themeMappings[theme]) {
    themeMappings[theme]().then((data) => {
      window.monaco.editor.defineTheme(theme, data);
      window.monaco.editor.setTheme(theme);
    });
  }
}

private loadSnippets(): void {
  if (window.monaco && window.monaco.languages) {
    const language = this.language;
    const snippets = js_snippets;

    window.monaco.languages.registerCompletionItemProvider(language, {
      provideCompletionItems: () => {
        return {
          suggestions: snippets.map((snippet) => ({
            label: snippet.label,
            kind: window.monaco.languages.CompletionItemKind.Snippet,
            insertText: snippet.insertText,
            documentation: snippet.documentation,
          })),
        };
      },
    });
  }
}
}
