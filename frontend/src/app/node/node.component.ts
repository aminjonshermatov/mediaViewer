import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, OnDestroy {

  private routeParam$!: Subscription;

  constructor(private readonly route: ActivatedRoute) {
    this.routeParam$ = this.route.params.subscribe(param => {
      console.log(param);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeParam$.unsubscribe();
  }

}
