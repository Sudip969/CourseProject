import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/ingredients/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameRef') nameInputRef!:ElementRef;
  @ViewChild('amountRef') amountInputRef!:ElementRef;
  constructor(private slService : ShoppingListService){}

  onAddItem(){
    const indName =this.nameInputRef.nativeElement.value
    const indAmount= this.amountInputRef.nativeElement.value

    const newIngredient= new Ingredients(indName,indAmount)
    this.slService.addIngredients(newIngredient)
  }

}


