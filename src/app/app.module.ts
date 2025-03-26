import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './garage/login/login.component';
import { TasksComponent } from './employee/tasks/tasks.component';
import { CreateTaskComponent } from './employee/tasks/create-task/create-task.component';
import { ListTaskComponent } from './employee/tasks/list-task/list-task.component';
import { UpdateTaskComponent } from './employee/tasks/update-task/update-task.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    TasksComponent,
    CreateTaskComponent,
    ListTaskComponent,
    UpdateTaskComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
