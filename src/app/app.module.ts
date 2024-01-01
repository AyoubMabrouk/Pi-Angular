import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataMiningComponent } from './data-mining/data-mining.component';
import { PythonComponent } from './python/python.component';
import { PythonRcceComponent } from './python-rcce/python-rcce.component';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { Powerbi3Component } from './powerbi3/powerbi3.component';
import { ExplanationComponent } from './explanation/explanation.component';





@NgModule({
  declarations: [
    AppComponent,
    PowerbiComponent,
    LoginComponent,
    IndexComponent,
    DataMiningComponent,
    PythonComponent,
    PythonRcceComponent,
    Powerbi2Component,
    Powerbi3Component,
    ExplanationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
