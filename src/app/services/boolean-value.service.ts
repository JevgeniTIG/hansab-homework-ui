import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})



export class BooleanValueService {

  private boolValue = false;

  public saveBoolValue(boolValue: boolean): void {
    this.boolValue = boolValue;
  }

  public getBoolValue(): boolean {
    return <boolean>this.boolValue;
  }

}
