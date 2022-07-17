import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, tap} from "rxjs";

import {environment} from "../../environments/environment";
import {NotificationService} from "../notification.service";
import {Folder, IFolder} from "./models/Folder";
import {File, IFile} from "./models/File";
import {FileType} from "./models/FileType";

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private readonly baseUrl: string = environment.baseUrl;

  public readonly filesSub$: BehaviorSubject<(IFile | IFolder)[]> = new BehaviorSubject<(IFile | IFolder)[]>([]);
  public readonly isFilesSub$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public readonly currentFolderSub$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private readonly httpClient: HttpClient,
              private readonly notificationService: NotificationService) { }

  public getFolders(): void {
    this.httpClient.get<[string][]>(`${this.baseUrl}/`)
      .pipe(
        map(folders => folders.map(folderData => NodeService._filesFactory(FileType.Folder, folderData))),
        tap(folders => this.filesSub$.next(folders)),
        tap(() => this.isFilesSub$.next(false)),
      ).subscribe({
      error: (err) => {
        this.notificationService.error(NodeService._getErrorMsg(err));
        this.filesSub$.next([]);
      }
    });
  }

  public getFiles(folderName: string): void {
    this.httpClient.get<[number, string][]>(`${this.baseUrl}/${folderName}`)
      .pipe(
        map(files => files.map(fileData => NodeService._filesFactory(FileType.File, fileData))),
        tap(files => this.filesSub$.next(files)),
        tap(() => this.isFilesSub$.next(true)),
      ).subscribe({
      error: (err) => {
        this.notificationService.error(NodeService._getErrorMsg(err));
        this.filesSub$.next([]);
      }
    });
  }

  private static _filesFactory(type: FileType, args: [string] | [number, string]): IFile | IFolder {
    switch (type) {
      case FileType.File:
        return new File(args as [number, string]);
      case FileType.Folder:
        return new Folder(args as [string]);
    }
  }

  private static _getErrorMsg(err?: any): string {
    return err?.error['detail'] || err?.message || 'Unknown error!';
  }

}
