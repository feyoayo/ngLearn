import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeworkDirectivesComponent } from './homework-directives/homework-directives.component';
import { TodoComponent } from './todo/todo.component';
@NgModule({
  declarations: [AppComponent, HomeworkDirectivesComponent, TodoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
