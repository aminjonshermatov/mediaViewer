export interface IFolder {
  name: string;
}

export class Folder implements IFolder{
  name: string;

  constructor(folder: [string]) {
    [this.name] = folder;
  }
}
