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
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {SwiperModule} from "swiper/angular";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NodeComponent} from './node/node.component';
import {ElevationDirective} from './node/elevation.directive';
import {GalleryComponent} from './node/gallery/gallery.component';
import {ShareSocialComponent} from './node/share-social/share-social.component';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    ElevationDirective,
    GalleryComponent,
    ShareSocialComponent,
    TruncatePipe
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
    MatCardModule,
    SwiperModule,
    FlexLayoutModule,
    MatTooltipModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
