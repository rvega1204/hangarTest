import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import '/rxjs/add/operator/map';

@Injectable()
export class SongService {
  constructor(http:Http) {
    this.songs = http.get('http://localhost:3004/songs')
      .map(response => response.json());
  }
}