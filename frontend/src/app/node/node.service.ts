import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, tap} from "rxjs";

import {environment} from "../../environments/environment";
import {NotificationService} from "../notification.service";
import {Folder} from "./models/Folder";
import {File} from "./models/File";

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private readonly baseUrl: string = environment.baseUrl;

  public readonly filesSub$: BehaviorSubject<File[]> = new BehaviorSubject<File[]>([]);
  public readonly foldersSub$: BehaviorSubject<Folder[]> = new BehaviorSubject<Folder[]>([]);

  constructor(private readonly httpClient: HttpClient,
              private readonly notificationService: NotificationService) { }

  public getFolders(): void {
    this.httpClient.get<[string][]>(`${this.baseUrl}/`)
      .pipe(
        map(folders => folders.map(folderData => new Folder(folderData))),
        tap(folders => this.foldersSub$.next(folders))
      ).subscribe({
      error: (err) => {
        this.notificationService.error(err.error['detail'])
        this.foldersSub$.next([]);
      }
    });
  }

  public getFiles(folderName: string): void {
    this.httpClient.get<[number, string][]>(`${this.baseUrl}/${folderName}`)
      .pipe(
        map(files => files.map(fileData => new File(fileData))),
        tap(files => this.filesSub$.next(files))
      ).subscribe({
      error: (err) => {
        this.notificationService.error(err.error['detail'])
        this.filesSub$.next([]);
      }
    });
  }

}
