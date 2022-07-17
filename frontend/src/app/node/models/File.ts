export interface IFile {
  id: number;
  title: string;
  m_type: string;
}

export class File implements IFile{
  id: number;
  title: string;
  m_type: string;

  constructor(data: [number, string, string]) {
    [this.id, this.title, this.m_type] = data;
  }

}
