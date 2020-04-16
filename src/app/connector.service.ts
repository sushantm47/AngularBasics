import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  constructor(private webRequestService: WebRequestService) {}
  getCricketers() {
    return this.webRequestService.get('cricket');
  }
  addPlayer(name: string) {
    // We want to send a web request to create a list
    return this.webRequestService.post('cricket', { name });
  }
}
