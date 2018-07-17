import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserlistComponent} from './components/userlist/userlist.component';
// import {AdduserModule} from './modules/adduser/adduser.module';

const routes: Routes = [
  {path: '', component: UserlistComponent},
  // {
  //   path: 'adduser',
  //   loadChildren: 'app/modules/adduser/adduser.module#AdduserModule',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
