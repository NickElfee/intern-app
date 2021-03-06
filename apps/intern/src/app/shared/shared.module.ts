import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { CodePanelComponent } from './code-panel/code-panel.component';
import { MonacoEditorModule } from 'ngx-monaco';
import { BackendService } from './backend/backend.service';

const COMPONENTS = [
  HeaderComponent,
  LoaderComponent,
  CodePanelComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MonacoEditorModule,
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    BackendService,
  ]
})
export class SharedModule { }
