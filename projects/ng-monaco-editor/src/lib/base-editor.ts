import {
  Input,
  Output,
  inject,
  OnDestroy,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NGX_MONACO_EDITOR_CONFIG, NgxMonacoEditorConfig } from './config';

let loadedMonaco = false;
let loadPromise: Promise<void>;

@Component({
  template: '',
  standalone: false,
})
export abstract class BaseEditor implements AfterViewInit, OnDestroy {
  
  config = inject<NgxMonacoEditorConfig>(NGX_MONACO_EDITOR_CONFIG);
  @Input() insideNg = false;
  @Output() onInit = new EventEmitter<any>();
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;

  protected _editor: any;
  protected _options: any;
  protected _windowResizeSubscription!: Subscription;
  protected abstract initMonaco(options: any, insideNg: boolean): void;

  ngAfterViewInit(): void {
    if (loadedMonaco) {
      loadPromise.then(() => this.initMonaco(this._options, this.insideNg));
    } else {
      loadedMonaco = true;
      loadPromise = this.loadMonaco();
    }
  }


  ngOnDestroy() {
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }
    if (this._editor) {
      this._editor.dispose();
      this._editor = undefined;
    }
  }

  private loadMonaco(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let baseUrl = this.config.baseUrl || './assets/monaco/min/vs';
      if (typeof (window as any).monaco === 'object') {
        this.initMonaco(this._options, this.insideNg);
        resolve();
        return;
      }

      const onGotAmdLoader = (require?: any) => {
        let usedRequire = require || (window as any).require;
        let requireConfig = { paths: { vs: `${baseUrl}` } };
        Object.assign(requireConfig, this.config.requireConfig || {});

        usedRequire.config(requireConfig);
        usedRequire(['vs/editor/editor.main'], () => {
          if (typeof this.config.onMonacoLoad === 'function') {
            this.config.onMonacoLoad();
          }
          this.initMonaco(this._options, this.insideNg);
          resolve();
        });
      };

      if (this.config.monacoRequire) {
        onGotAmdLoader(this.config.monacoRequire);
      } else if (!(window as any).require) {
        const loaderScript = document.createElement('script');
        loaderScript.type = 'text/javascript';
        loaderScript.src = `${baseUrl}/loader.js`;
        loaderScript.addEventListener('load', () => onGotAmdLoader());
        loaderScript.addEventListener('error', () =>
          reject(new Error('Failed to load Monaco loader script'))
        );
        document.body.appendChild(loaderScript);
      } else if (!(window as any).require.config) {
        const src = `${baseUrl}/loader.js`;
        const loaderRequest = new XMLHttpRequest();
        loaderRequest.addEventListener('load', () => {
          const scriptElem = document.createElement('script');
          scriptElem.type = 'text/javascript';
          scriptElem.text = [
            'var nodeRequire = require;',
            loaderRequest.responseText.replace('"use strict";', ''),
            'var monacoAmdRequire = require;',
            'require = nodeRequire;',
            'require.nodeRequire = require;',
          ].join('\n');
          document.body.appendChild(scriptElem);
          onGotAmdLoader((window as any).monacoAmdRequire);
        });
        loaderRequest.addEventListener('error', () =>
          reject(
            new Error('Failed to load Monaco loader script via XMLHttpRequest')
          )
        );
        loaderRequest.open('GET', src);
        loaderRequest.send();
      } else {
        onGotAmdLoader();
      }
    });
  }
}
