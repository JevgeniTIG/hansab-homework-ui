import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {conf} from "../config/conf";

const USERS_API = conf.host + 'api/v1/users'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get(USERS_API);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(USERS_API + '/' + userId)
  }


}
