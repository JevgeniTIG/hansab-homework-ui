import {Component} from "@angular/core";
import {BooleanValueService} from "../services/boolean-value.service";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})

export class NavigationComponent {

  constructor(private sharedService: BooleanValueService) {
  }

  checkValue(): void {
    if (this.sharedService.getBoolValue()) {

      window.location.reload()
    }
  }


}
