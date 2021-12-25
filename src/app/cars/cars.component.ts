import {Component} from "@angular/core";
import {IdSharingService} from "../services/id-sharing.service";
import {CarModel} from "../models/CarModel";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.scss']
})

export class CarsComponent {

  cars: CarModel [] = [];
  isLoaded = false;

  constructor(private carService: CarService,
              private idSharingService: IdSharingService) {
  }

  ngOnInit(): void {
    this.getAllCars()

  }

  getAllCars(): void {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
      this.isLoaded = true;
    })
  }

  setCarId(carId: string): void {
    this.idSharingService.saveId(carId);
  }

}
