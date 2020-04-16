import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cricket } from '../../models/cricket.model';
import { ConnectorService } from '../../connector.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.scss'],
})
export class AddplayerComponent implements OnInit {
  constructor(
    private connectorService: ConnectorService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addPlayer(name: string) {
    console.log('r1');
    this.connectorService.addPlayer(name).subscribe((list: Cricket) => {
      console.log('running');
      console.log(list);
      //  navigate to /cricket
      this.router.navigate(['/cricket']);
    });
  }
}
