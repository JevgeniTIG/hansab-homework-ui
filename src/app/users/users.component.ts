import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/UserModel";
import {IdSharingService} from "../services/id-sharing.service";
import {BooleanValueService} from "../services/boolean-value.service";


@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})

export class UsersComponent implements OnInit {

  users: UserModel [] = [];
  sortedUsers: UserModel [] = [];
  nothingFound = false;
  sortingInitiated = false;

  constructor(private userService: UserService,
              private idSharingService: IdSharingService,
              private sharedService: BooleanValueService) {
  }

  ngOnInit(): void {
    this.getAllUsers()


  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.sortedUsers = data;
    })
  }

  setUserId(userId: string): void {
    this.idSharingService.saveId(userId);
  }


  searchForUser(name: string): void {
    this.sortingInitiated = true;

    this.sortedUsers = [];
    this.sharedService.saveBoolValue(true);

    if (name.length === 0) {
      this.nothingFound = true;
    }
    this.users.forEach(u => {
      if (u.name.includes(name)) {

        this.sortedUsers.push(u);
      }
    })
    if (this.sortedUsers.length === 0) {
      this.nothingFound = true;
    }
    this.sortedUsers = this.sortedUsers.sort((a, b) =>
      a.name.localeCompare((b.name)))
  }

  reloadPage(): void {
    window.location.reload();
  }

}




