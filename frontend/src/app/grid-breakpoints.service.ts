import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {BehaviorSubject, map, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GridBreakpointsService {

  private readonly gridColsByBreakpoint = new Map([
    [Breakpoints.XSmall, 1],
    [Breakpoints.Small, 2],
    [Breakpoints.Medium, 3],
    [Breakpoints.Large, 5],
    [Breakpoints.XLarge, 5],
  ]);

  private readonly socialColsByBreakpoint = new Map([
    [Breakpoints.XSmall, 3],
    [Breakpoints.Small, 4],
    [Breakpoints.Medium, 6],
    [Breakpoints.Large, 8],
    [Breakpoints.XLarge, 8],
  ]);

  public readonly colsGridListSub$: BehaviorSubject<number> = new BehaviorSubject<number>(4);
  public readonly colsShareSocialListSub$: BehaviorSubject<number> = new BehaviorSubject<number>(6);

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(
        map(result => {
            for (const [query, cols] of this.gridColsByBreakpoint.entries())
              if (result.breakpoints[query]) {
                this.colsGridListSub$.next(cols)
                break
              }
            for (const [query, cols] of this.socialColsByBreakpoint.entries())
              if (result.breakpoints[query]) {
                this.colsShareSocialListSub$.next(cols)
                break
              }
          }
        ),
        shareReplay()
      ).subscribe({});
  }
}
