import {Component, OnInit} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';
import {Player, PlayerInfo} from '../services/playerDataType';
import {PlayerDataService} from '../services/playerData.service';

@Component({
  selector: 'app-search-output',
  templateUrl: './search-output.component.html',
  styleUrls: ['./search-output.component.scss']
})
export class SearchOutputComponent implements OnInit {
  submittedData: string[];
  submittedid: string;
  submittedactive: string;
  submittedprofileid: string;
  data: PlayerInfo;
  age: string;
  picture: string;
  role: string;
  team: string;
  id: string;

  constructor(private shared: SharedService,
              private router: Router,
              private playerData: PlayerDataService) {
  }

  ngOnInit(): void {
    this.submittedData = this.shared.getSearchedData();
    this.submittedactive = this.submittedData[1];
    this.submittedid = this.submittedData[0];
    this.submittedprofileid = this.submittedData[2];
    this.playerData.profileAPI(this.submittedData[2]).subscribe((data: PlayerInfo) => {
      this.data = data;
      console.log('data got:', this.data);
      this.id = this.data.id;
      this.age = this.data.profile.age;
      this.role = this.data.profile.role;
      this.team = this.data.profile.team;
      this.picture = this.data.profile.picture;
    });
  }

  backClick() {
    this.router.navigate(['']);
  }
}
