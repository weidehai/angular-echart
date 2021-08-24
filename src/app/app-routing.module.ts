import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';

const routes: Routes = [
  { path: 'echart-demo', component: EchartDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
