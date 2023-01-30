import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexBoxComponent } from './flex-box.component';

const routes: Routes = [{ path: '', component: FlexBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexBoxRoutingModule {}
