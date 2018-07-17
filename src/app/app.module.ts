import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RoutingModule} from './routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReactiveFormsModule} from '@angular/forms';

/** Components */
import {AppComponent} from './app.component';
import {OperationmenuComponent} from './components/operationmenu/operationmenu.component';
import {SearchComponent} from './components/search/search.component';
import {UserlistComponent} from './components/userlist/userlist.component';
import {UserformComponent} from './components/userform/userform.component';

/* Services */
import {CommonService} from './services/common.service';

import {Global} from './common/global';

@NgModule({
  declarations: [
    AppComponent,
    OperationmenuComponent,
    SearchComponent,
    UserlistComponent,
    UserformComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [CommonService, Global],
  bootstrap: [AppComponent],
  entryComponents: [UserformComponent],
})
export class AppModule {}
