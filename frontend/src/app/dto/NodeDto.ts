export class NodeDto {

  constructor(public id: string,
              public title: string,
              public isDir: boolean,
              public children: NodeDto[]) { }

}
