/* Import all modules, libraries and services. */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoService } from './services/contact-info.service';

/* Decorator function NgModule.*/
@NgModule({
  /* View classes that belong to the module. */
  declarations: [
    AppComponent
  ],
  /* Other modules whose classes are required for component templates from the current module. */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  /* Classes that create services used by the module. */
  providers: [
    ContactInfoService
  ],
  /* The root component that is called by default when the application loads. */
  bootstrap: [AppComponent]
})

/* Module view using class. */
export class AppModule { }
