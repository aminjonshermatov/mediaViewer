import {Component, Input, OnInit} from '@angular/core';
import {IFile} from "../models/File";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GalleryModalComponent} from "../gallery-modal/gallery-modal.component";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() file!: IFile;
  private dialogRef?: MatDialogRef<GalleryModalComponent>;

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(GalleryModalComponent, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: '80%',
      width: '80%',
    });
  }

}
