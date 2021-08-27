import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchartDemoComponent } from './echart-demo/echart-demo.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  { path: 'echart-demo', component: EchartDemoComponent },
  { path: 'sort', component: SortComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
