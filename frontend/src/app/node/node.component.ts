import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {NodeService} from "./node.service";
import {Folder} from "./models/Folder";
import {File} from "./models/File";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  public readonly files$: Observable<File[]> = this.nodeService.filesSub$.asObservable();
  public readonly folders$: Observable<Folder[]> = this.nodeService.foldersSub$.asObservable();

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
