import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import { ClassementComponent } from '../app/components/classement/classement.component';
import { ShowroomComponent } from '../app/components/showroom/showroom.component';

// services
import {CatsService} from './services/cats.service';

// Store
import { Store } from './store/Store';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ClassementComponent,
    ShowroomComponent
  ],
  providers: [CatsService, Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
