import { EventEmitter } from "@angular/core";
import { Ingredients } from "../ingredients/ingredients.model";

export class ShoppingListService{
    ingredientsChanged= new EventEmitter<Ingredients[]>()
    private ingredients:Ingredients[]=[
        new Ingredients('Apples',5),
        new Ingredients('Orange',10)
      ];
      getIngredients(){
        return this.ingredients.slice();
      }
      addIngredients(ingredient:Ingredients){   
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }
}