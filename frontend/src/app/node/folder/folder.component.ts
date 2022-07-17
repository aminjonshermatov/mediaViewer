import {Component, Input, OnInit} from '@angular/core';

import {IFolder} from "../models/Folder";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() folder!: IFolder;

  constructor() { }

  ngOnInit(): void { }

}
