import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { AnaliticsComponent } from './modules/analitics/analitics/analitics.component';
import { PracticesComponent } from './modules/practices/practices/practices.component';
import { RouterUrl } from './configs/router-url.enum';
import { BoardsComponent } from './modules/boards/components/smart/boards/boards.component';

const routes: Routes = [
  { path: '', redirectTo: RouterUrl.LOGIN, pathMatch: 'full' },
  { path: RouterUrl.LOGIN, component: LoginComponent },
  { path: RouterUrl.HOME, component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: RouterUrl.BOARDS, pathMatch: 'full'},
      { path: RouterUrl.BOARDS, component: BoardsComponent },
      { path: RouterUrl.ANALITICS, component: AnaliticsComponent },
      { path: RouterUrl.PRACTICES, component: PracticesComponent},
  ]},
];

export const routing = RouterModule.forRoot(routes);
