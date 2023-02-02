import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: RxjsOperatorsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsOperatorsRoutingModule {}
