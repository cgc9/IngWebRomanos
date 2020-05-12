import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import { RomanNumeralsComponent } from './components/roman-numerals/roman-numerals.component';


@NgModule({
  declarations: [
    AppComponent,
    RomanNumeralsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,
    // MatCardModule,
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
