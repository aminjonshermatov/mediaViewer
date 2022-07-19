import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {map, Observable, Subject, takeUntil, tap} from "rxjs";

import {NodeService} from "./node.service";
import {IFolder} from "./models/Folder";
import {IFile} from "./models/File";
import {IShareSocialData} from "./models/ShareSocialData";
import {environment} from "../../environments/environment";
import {ShareSocialComponent} from "./share-social/share-social.component";
import {GridBreakpointsService} from "../grid-breakpoints.service";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, OnDestroy {

  private readonly baseUrl: string = environment.baseUrl;

  public readonly files$: Observable<(IFolder | IFile)[]> = this.nodeService.filesSub$.asObservable();
  public readonly isFiles$: Observable<boolean> = this.nodeService.isFilesSub$.asObservable();
  public readonly cols$: Observable<number> = this.gridBreakpointsService.colsGridListSub$.asObservable();

  private readonly destroyed$: Subject<void> = new Subject<void>();

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly route: ActivatedRoute,
              private readonly breakpointObserver: BreakpointObserver,
              private readonly dialog: MatDialog,
              private readonly nodeService: NodeService,
              private readonly gridBreakpointsService: GridBreakpointsService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
          if (!params.has('folderName')) this.nodeService.getFolders();
          else {
            const folderName = params.get('folderName');
            this.nodeService.getFiles(folderName || '');
            if (folderName) this.nodeService.currentFolderSub$.next(folderName);
          }
        }
      )
  }

  shareFile(file: IFile): void {
    this._openShareSocialDialog({
      title: file.title,
      url: this.document.location.href + '/' + file.id,
      description: `Incredible medias such ${file.title}`,
      imagePath: this.baseUrl + '/' + this.nodeService.currentFolderSub$.value + '/' + file.id
    });
  }

  shareFolder(folder: IFolder): void {
    this._openShareSocialDialog({
      title: folder.name,
      url: this.document.location.href + '/' + folder.name,
      description: `Incredible medias such ${folder.name}`,
      imagePath: this.document.location.origin + '/assets/images/folder.png'
    });
  }

  private _openShareSocialDialog(data: IShareSocialData): void {
    this.dialog.open(ShareSocialComponent, {
      data,
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '250ms',
    });
  }

  downloadFile(fileId: number, fileName: string, type: string): void {
    this.nodeService.getFileBlob(fileId, type + "; charset=utf-8")
      .pipe(
        takeUntil(this.destroyed$),
        map(blob => URL.createObjectURL(blob)),
        tap(dataObjUrl => {
          const link = document.createElement('a');
          link.href = dataObjUrl;
          link.download = fileName;
          link.click();
        })
      )
      .subscribe({});
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
