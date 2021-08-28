import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(private http: HttpClient) {
  }

  dataAPI(playerName) {
    const url = 'https://web-sandbox.onefootball.com/assignments/player/data/'.concat(playerName, '.json');
    return this.http.get(url);
  }

  profileAPI(profileID) {
    const url = 'https://web-sandbox.onefootball.com/assignments/player/profile/'.concat(profileID);
    return this.http.get(url);
  }
}
