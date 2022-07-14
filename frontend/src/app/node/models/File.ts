export interface IFile {
  id: number;
  title: string;
}

export class File implements IFile{
  id: number;
  title: string;

  constructor(data: [number, string]) {
    [this.id, this.title] = data;
  }

}
