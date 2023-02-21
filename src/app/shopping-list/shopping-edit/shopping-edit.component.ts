import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/ingredients/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameRef') nameInputRef!:ElementRef;
  @ViewChild('amountRef') amountInputRef!:ElementRef;
  @Output() ingredientAdded= new EventEmitter<{name:string,amount:number}>()  

  onAddItem(){
    const indName =this.nameInputRef.nativeElement.value
    const indAmount= this.amountInputRef.nativeElement.value

    const newIngredient= new Ingredients(indName,indAmount)
    this.ingredientAdded.emit(newIngredient); 
  }

}


