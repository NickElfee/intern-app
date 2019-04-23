import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { CodePanelComponent } from './code-panel/code-panel.component';

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
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class SharedModule { }
