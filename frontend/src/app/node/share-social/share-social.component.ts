import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable} from "rxjs";

import {IShareSocialData} from "../models/ShareSocialData";
import {GridBreakpointsService} from "../../grid-breakpoints.service";

@Component({
  selector: 'app-share-social',
  templateUrl: './share-social.component.html',
  styleUrls: ['./share-social.component.scss']
})
export class ShareSocialComponent implements OnInit {

  public readonly shareWith: string[] = ['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp'];
  public readonly cols$: Observable<number> = this.gridBreakpointsService.colsShareSocialListSub$.asObservable();

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: IShareSocialData,
              private readonly gridBreakpointsService: GridBreakpointsService) { }

  ngOnInit(): void { }

}
