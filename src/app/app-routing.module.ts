import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PythonComponent } from './python/python.component';
import { DataMiningComponent } from './data-mining/data-mining.component';
import { PythonRcceComponent } from './python-rcce/python-rcce.component';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { Powerbi3Component } from './powerbi3/powerbi3.component';
import { ExplanationComponent } from './explanation/explanation.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'index',component:IndexComponent, outlet: 'sidebar'},
  //----Explanation Video
  {path:'Explanation',component:ExplanationComponent},
  //----PowerBi
  {path:'PowerBi-Bank',component:PowerbiComponent},
  {path:'PowerBi-Bank-Customers',component:Powerbi2Component},
  {path:'PowerBi-Customers',component:Powerbi3Component},
  //----Python
  {path:'Python-Polynomial-Regression',component:PythonComponent},
  {path:'dataMining',component:DataMiningComponent},
  {path:'Python-Decision-Tree',component:PythonRcceComponent},

  {path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
