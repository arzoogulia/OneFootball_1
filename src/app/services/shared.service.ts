import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id: string;
  active: string;
  profileid: string;

  constructor() {
  }

  setSearchedData(id, active, profileid) {
    this.id = id;
    this.active = active;
    this.profileid = profileid;
  }

  getSearchedData() {
    return [this.id, this.active, this.profileid];
  }
}
