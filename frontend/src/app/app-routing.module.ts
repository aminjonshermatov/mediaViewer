import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NodeComponent } from "./node/node.component";

const routes: Routes = [
  { path: ':nodeId', component: NodeComponent },
  { path: '**', component: NodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
