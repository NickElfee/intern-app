import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MonacoEditorModule } from 'ngx-monaco';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { BackendModule } from './backend/backend.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/nx';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers } from './+state/global.reducers';
import { BoardsModule } from './modules/boards/boards.module';
import { PracticesModule } from './modules/practices/practices.module';
import { AnaliticsModule } from './modules/analitics/analitics.module';
import { TaskModule } from './task/task.module';
import { InternsComponent } from './components/smart/interns/interns.component';
import { InternsListComponent } from './components/dumb/interns-list/interns-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BackendModule,
    AuthModule,
    SharedModule,
    BoardsModule,
    PracticesModule,
    AnaliticsModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    MonacoEditorModule.forRoot(),
    TaskModule,
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent, InternsComponent, InternsListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
