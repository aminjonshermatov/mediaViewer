import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NodeComponent} from './node/node.component';
import { FileComponent } from './node/file/file.component';
import { FolderComponent } from './node/folder/folder.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { ElevationDirective } from './node/elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    FileComponent,
    FolderComponent,
    ElevationDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        HttpClientModule,
        MatGridListModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
