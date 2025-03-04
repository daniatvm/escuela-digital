import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginService } from './services/login.service';
import { SchoolService } from './services/school.service';
import { EmployeeService } from './services/employee.service';
import { ClassService } from './services/class.service';
import { FeedbackService } from './services/feedback.service';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,

    },
    LoginService,
    SchoolService,
    EmployeeService,
    ClassService,
    FeedbackService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
