// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskManagerModule } from './features/task-manager/task-manager.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa el módulo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskManagerModule,
    BrowserAnimationsModule // Añádelo a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
