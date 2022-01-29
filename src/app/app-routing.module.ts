import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/form/form.component';
import { IndexComponent } from './views/index/index.component';
import { ListComponent } from './views/list/list.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [

  {
    path: '',

    //component: LoginComponent
    component: IndexComponent
    //component: FormComponent
    //component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
