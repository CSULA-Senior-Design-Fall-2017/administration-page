import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AddUserComponent} from './add-user/add-user.component';
import {AppComponent} from './app.component';
import {DemoComponent} from './service_test/service_test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {UserService} from './services/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DemoComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
