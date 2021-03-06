import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LabnewComponent } from './labnew/labnew.component';
import { LabeditComponent } from './labedit/labedit.component';
import { LabviewComponent } from './labview/labview.component';
import { StornewComponent } from './stornew/stornew.component';
import { StorviewComponent } from './storview/storview.component';
import { StoreditComponent } from './storedit/storedit.component';
import { LabdetailsComponent } from './labdetails/labdetails.component';
import { StordetailsComponent } from './stordetails/stordetails.component';
import { SampnewComponent } from './sampnew/sampnew.component';
import { SampdetailsComponent } from './sampdetails/sampdetails.component';
import { SampviewComponent } from './sampview/sampview.component';
import { SampeditComponent } from './sampedit/sampedit.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { TickerDirective } from './ticker.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    LoginComponent,
    LabnewComponent,
    LabeditComponent,
    LabviewComponent,
    StornewComponent,
    StorviewComponent,
    StoreditComponent,
    LabdetailsComponent,
    StordetailsComponent,
    SampnewComponent,
    SampdetailsComponent,
    SampviewComponent,
    SampeditComponent,
    MainComponent,
    AllusersComponent,
    ViewuserComponent,
    EdituserComponent,
    TickerDirective,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule  
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
