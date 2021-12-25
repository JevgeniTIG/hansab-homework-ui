import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})



export class IdSharingService {

  private id: string | undefined;

  public saveId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return <string>this.id;
  }

}
