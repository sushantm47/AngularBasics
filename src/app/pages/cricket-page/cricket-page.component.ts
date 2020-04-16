import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConnectorService } from '../../connector.service';
import { Cricket } from '../../models/cricket.model';
@Component({
  selector: 'app-cricket-page',
  templateUrl: './cricket-page.component.html',
  styleUrls: ['./cricket-page.component.scss'],
})
export class CricketPageComponent implements OnInit {
  cricketlist: Cricket[];
  constructor(
    private connectorService: ConnectorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.connectorService.getCricketers().subscribe((lists: Cricket[]) => {
      this.cricketlist = lists;
      console.log(this.cricketlist);
    });
  }
}
