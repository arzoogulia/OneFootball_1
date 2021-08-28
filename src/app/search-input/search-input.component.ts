import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../services/shared.service';
import {PlayerDataService} from '../services/playerData.service';
import {Player} from '../services/playerDataType';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchText: '';
  data: Player;
  errorFlag = false;

  constructor(private route: Router,
              private shared: SharedService,
              private playerData: PlayerDataService) {
  }

  ngOnInit(): void {
  }

  onSubmit(searchText) {
    this.playerData.dataAPI(searchText).subscribe((data: Player) => {
      this.data = data;
      console.log('data', this.data);

      if (this.data != null) {
        if (this.data.active === 'true') {
          this.shared.setSearchedData(this.data.id, this.data.active, this.data['profile-id']);
          this.route.navigate(['detail', searchText]);
        } else {
          console.log('Player Not Available');
          this.errorFlag = true;
        }
      }
    }, (error) => {
      console.log('Error', error);
      this.errorFlag = true;
    });
    this.searchText = '';
    this.errorFlag = false;
  }

}
