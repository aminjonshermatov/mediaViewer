import { Component } from '@angular/core';

import { NodeDto } from './dto/NodeDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mediaTypes: NodeDto[] = [];

  toggle() {
    console.log('toggle');
  }
}
