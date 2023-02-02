import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexBoxComponent } from './flex-box.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: FlexBoxComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexBoxRoutingModule {}
