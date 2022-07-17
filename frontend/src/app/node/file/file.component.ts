import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {IFile} from "../models/File";
import {GalleryModalComponent} from "../gallery-modal/gallery-modal.component";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() file!: IFile;

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void { }

  openModal() {
    this.dialog.open(GalleryModalComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: '80%',
      width: '80%',
    });
  }
}
