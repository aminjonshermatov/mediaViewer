import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NodeComponent} from "./node/node.component";
import {GalleryModalComponent} from "./node/gallery-modal/gallery-modal.component";

const routes: Routes = [
  {path: '', component: NodeComponent, pathMatch: 'full'},
  {
    path: ':folderName',
    component: NodeComponent,
    children: [
      { path: 'file/:fileId', component: GalleryModalComponent, }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
