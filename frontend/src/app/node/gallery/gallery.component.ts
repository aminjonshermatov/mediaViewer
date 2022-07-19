import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import SwiperCore from "swiper";
import Swiper, {FreeMode, Keyboard, Lazy, Navigation, Zoom} from "swiper";
import {SwiperComponent} from "swiper/angular";
import {environment} from "../../../environments/environment";
import {map, Observable, shareReplay, Subject, takeUntil, tap} from "rxjs";
import {IFile} from "../models/File";
import {NodeService} from "../node.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {IFolder} from "../models/Folder";

SwiperCore.use([Lazy, FreeMode, Navigation, Keyboard, Zoom]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit, OnDestroy {

  @ViewChild('swiper', {static: true}) swiper?: SwiperComponent;

  public readonly baseUrl: string = environment.baseUrl;
  public readonly currentFolder$: Observable<string> = this.nodeService.currentFolderSub$.asObservable();

  private readonly destroyed$: Subject<void> = new Subject<void>();

  public files: IFile[] = [];
  public thumbsSwiper?: any;
  public initialSlide: number = 0;

  constructor(private readonly nodeService: NodeService,
              private readonly location: Location,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const {folderName, fileId} = this.route.snapshot.params || {folderName: 'pictures', fileId: 0};
    this.nodeService.currentFolderSub$.next(folderName);
    this.nodeService.getFiles(folderName);

    this.nodeService.filesSub$
      .pipe(
        takeUntil(this.destroyed$),
        tap(files => this.files = files as IFile[])
      )
      .subscribe({});

    this.initialSlide = fileId ?? 0;
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

  onChange(event: [swiper: Swiper]): void {
    const newIdx = event[0].realIndex;
    this.location.go(`/${this.nodeService.currentFolderSub$.value}/${newIdx}`);
  }
}
