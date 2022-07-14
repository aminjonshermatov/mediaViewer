export class File {
  id: number;
  title: string;

  constructor(data: [number, string]) {
    [this.id, this.title] = data;
  }

}
