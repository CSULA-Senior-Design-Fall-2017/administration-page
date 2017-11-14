import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AddUserComponent} from './add-user/add-user.component';
import {AppComponent} from './app.component';
import {AdminComponent} from './service_test/service_test.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
