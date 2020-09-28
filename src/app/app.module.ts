import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryDetailsComponent } from './components/gallery-details/gallery-details.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './directive/highlight.directive';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    GalleryComponent,
    GalleryDetailsComponent,
    DateCountPipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  exports:[
    FormsModule,
    HeaderComponent,
    FormComponent,
    GalleryComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
