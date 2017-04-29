import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent} from '../home/home.component';
import { LoginComponent } from '../common/login/login.component';
import { ErrorComponent } from '../core/error/error.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent },
    {path: 'error', component: ErrorComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]

})
export class RoutingModule {}