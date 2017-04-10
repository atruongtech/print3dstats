import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';
import { PrintsModule } from './prints/prints.module';

import { Auth } from './common/services/auth0/auth0.service'

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { BrandBarComponent } from './core/brand-bar/brand-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandBarComponent
  ],
  imports: [
    PrintsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
