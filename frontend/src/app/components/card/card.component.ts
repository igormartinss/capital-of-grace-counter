import { Component, OnInit } from '@angular/core';
import { CapitalOfGracesService } from '../../capital-of-graces/capital-of-graces.service';
import { CapitalOfGraces } from 'src/app/capital-of-graces/capital-of-graces.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  quantityOfCapitals = 0;

  capitalOfGraces: CapitalOfGraces = {
    quantity: null,
    date: '' + Date.now()
  }

  capitals: CapitalOfGraces[]

  constructor(private capitalOfGracesService: CapitalOfGracesService) { }

  ngOnInit() {
      this.getQuantityOfCapitals()
  }

  createCapitalOfGraces():void {
    this.capitalOfGracesService.create(this.capitalOfGraces).subscribe(() => {
      this.capitalOfGracesService.showMessage('CG adicionado!');
      this.getQuantityOfCapitals()

    })
  }

  getQuantityOfCapitals() {
    this.quantityOfCapitals = 0;
    this.capitalOfGracesService.read().subscribe(capitals => {
      this.capitals = capitals;     
      for(let capital of Object.values(this.capitals)) {
        this.quantityOfCapitals += capital.quantity;
      } 
    })
  }
}
