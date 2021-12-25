import {Component, OnDestroy, OnInit} from "@angular/core";
import {IdSharingService} from "../../services/id-sharing.service";
import {CarModel} from "../../models/CarModel";
import {CarService} from "../../services/car.service";


@Component({
  selector: 'app-car-overview',
  templateUrl: 'car-overview.component.html',
  styleUrls: ['car-overview.component.scss']
})

export class CarOverviewComponent implements OnInit, OnDestroy {


  constructor(private carService: CarService,
              private idSharingService: IdSharingService) {
  }

  car!: CarModel;
  isLoaded = false;

  ngOnInit(): void {
    this.getCarById(this.idSharingService.getId())
  }

  getCarById(carId: string): void {
    this.carService.getCarById(carId).subscribe(data => {
      this.car = data;
      this.isLoaded = true;
    })
  }

  ngOnDestroy(): void {
    this.isLoaded = false;
  }


}
