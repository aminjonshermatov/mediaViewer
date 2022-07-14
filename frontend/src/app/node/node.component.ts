import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

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

  constructor(private readonly route: ActivatedRoute,
              private readonly nodeService: NodeService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
          if (!params.has('folderName')) this.nodeService.getFolders();
          else this.nodeService.getFiles(params.get('folderName') || '')
        }
      )
  }

}
