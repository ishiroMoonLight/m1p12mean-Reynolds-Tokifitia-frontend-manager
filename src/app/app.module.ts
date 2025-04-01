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
import { InfosComponent } from './employee/infos/infos.component';
import { CreateInfoComponent } from './employee/infos/create-info/create-info.component';
import { EditInfoComponent } from './employee/infos/edit-info/edit-info.component';
import { ListInfoComponent } from './employee/infos/list-info/list-info.component';
import { ShowInfoComponent } from './employee/infos/show-info/show-info.component';

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
    InfosComponent,
    CreateInfoComponent,
    EditInfoComponent,
    ListInfoComponent,
    ShowInfoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
