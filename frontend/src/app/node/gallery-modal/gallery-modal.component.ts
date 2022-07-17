import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {map, Observable, Subject, takeUntil, tap} from "rxjs";
import SwiperCore, {FreeMode, Lazy, Navigation, Keyboard} from "swiper";
import {SwiperComponent} from "swiper/angular";

import {environment} from "../../../environments/environment";
import {IFile} from "../models/File";
import {NodeService} from "../node.service";

SwiperCore.use([Lazy, FreeMode, Navigation, Keyboard]);

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  @ViewChild('swiper', {static: true}) swiper?: SwiperComponent;

  public readonly baseUrl: string = environment.baseUrl;
  public readonly currentFolder$: Observable<string> = this.nodeService.currentFolderSub$.asObservable();

  private readonly destroyed$: Subject<void> = new Subject<void>();

  public files: IFile[] = [];
  public thumbsSwiper?: any;

  constructor(private readonly nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.filesSub$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(files => {
      this.files = files as IFile[];
    });
  }

  openFile(fileId: number, type: string): void {
    this.nodeService.getFileBlob(fileId, type + "; charset=utf-8")
      .pipe(
        takeUntil(this.destroyed$),
        map(blob => URL.createObjectURL(blob)),
        tap(dataObj => window.open(dataObj, '_blank'))
      )
      .subscribe({});
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
