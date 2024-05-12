import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';
import { HomeComponent } from './components/home/home.component';
import { JobFilterComponent } from './components/job-filter/job-filter.component';
import { TextDesignDirective } from './directives/text-design.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobsComponent,
    JobComponent,
    HomeComponent,
    JobFilterComponent,
    TextDesignDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
