import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { MainScreenRoutingModule }     from './main-screen/main-screen-routing.module';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { SettingsScreenComponent } from './settings-screen/settings-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    MainScreenComponent,
    DashboardScreenComponent,
    SettingsScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    AppRoutingModule,
    MainScreenRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
