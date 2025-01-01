import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorModule, NGX_MONACO_EDITOR_CONFIG } from '@next-gen-tools/ng-monaco-editor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useValue: {
        defaultOptions: { scrollBeyondLastLine: false },
        onMonacoLoad: (ele: any) => {

        }
      },
    },
  ]
})
export class AppComponent {
  title = 'editor';
}
