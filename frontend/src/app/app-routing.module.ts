import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NodeComponent} from "./node/node.component";
import {GalleryComponent} from "./node/gallery/gallery.component";

const routes: Routes = [
  {path: '', component: NodeComponent, pathMatch: 'full'},
  {
    path: ':folderName',
    component: NodeComponent,
  },
  {
    path: ':folderName/:fileId',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
