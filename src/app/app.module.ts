import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './ui/note/note.component';
import { AddformnoteComponent } from './ui/addformnote/addformnote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditformnoteComponent } from './ui/editformnote/editformnote.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddformnoteComponent,
    EditformnoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
