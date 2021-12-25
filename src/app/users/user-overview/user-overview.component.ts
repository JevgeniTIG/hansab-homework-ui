import {Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {IdSharingService} from "../../services/id-sharing.service";
import {UserModel} from "../../models/UserModel";
import {CarModel} from "../../models/CarModel";


@Component({
  selector: 'app-user-overview',
  templateUrl: 'user-overview.component.html',
  styleUrls: ['user-overview.component.scss']
})

export class UserOverviewComponent implements OnInit, OnDestroy {


  constructor(private userService: UserService,
              private idSharingService: IdSharingService) {
  }

  user!: UserModel;
  cars: CarModel [] = [];
  isLoaded = false;

  ngOnInit(): void {
    this.getUserById(this.idSharingService.getId())
  }

  getUserById(userId: string): void {
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
      this.cars = data.cars
      this.isLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.isLoaded = false;
  }




}
