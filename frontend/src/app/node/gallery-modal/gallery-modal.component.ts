import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import {SwiperComponent} from "swiper/angular";

import {environment} from "../../../environments/environment";
import {IFile} from "../models/File";
import {NodeService} from "../node.service";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryModalComponent implements OnInit {

  @ViewChild('swiper', { static: true }) swiper?: SwiperComponent;

  public readonly baseUrl: string = environment.baseUrl;
  public readonly currentFolder$: Observable<string> = this.nodeService.currentFolderSub$.asObservable();

  public files: IFile[] = [];
  public currentIdx: number = 0;

  public thumbsSwiper?: any;

  constructor(private readonly nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.filesSub$.subscribe(files => {
      console.log(files);
      this.files = files as IFile[];
    })
  }

}
