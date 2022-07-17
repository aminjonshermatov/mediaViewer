import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, shareReplay} from "rxjs";

import {NodeService} from "./node.service";
import {IFolder} from "./models/Folder";
import {IFile} from "./models/File";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  public readonly files$: Observable<(IFolder | IFile)[]> = this.nodeService.filesSub$.asObservable();
  public readonly isFiles$: Observable<boolean> = this.nodeService.isFilesSub$.asObservable();
  public readonly cols$!: Observable<number>;

  public readonly gridColsByBreakpoint = new Map([
    [Breakpoints.XSmall, 1],
    [Breakpoints.Small, 2],
    [Breakpoints.Medium, 4],
    [Breakpoints.Large, 6],
    [Breakpoints.XLarge, 8],
  ]);

  constructor(private readonly route: ActivatedRoute,
              private readonly nodeService: NodeService,
              private readonly breakpointObserver: BreakpointObserver) {
    this.cols$ = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(
        map(result => {
            for (const [query, cols] of this.gridColsByBreakpoint.entries())
              if (result.breakpoints[query]) return cols;
            return 4;
          }
        ),
        shareReplay()
      )
  }

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

}
