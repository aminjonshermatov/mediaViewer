export class Folder {
  name!: string;

  constructor(folder: [string]) {
    [this.name] = folder;
  }
}
