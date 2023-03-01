import {  EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../ingredients/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
 restore= new Subject<Recipe[]>() 
    private recipes:Recipe[]=[
        new Recipe('Desert',
        'Custard' ,
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        [
            new Ingredients('Strawberry',2),
            new Ingredients('promegenate',1)
        ]),
        new Recipe('Paneer',
        'Chilly' ,
        'https://media.gettyimages.com/id/1311491582/photo/chilli-paneer-indian-snack-food.jpg?s=2048x2048&w=gi&k=20&c=kAxCYY0zA9NeYXT1p6G5bpjdMw-aQu1Hc5rExoASTdY=',
        [
            new Ingredients('Paneer',1),
            new Ingredients('Onion',2)
        ]),
        new Recipe('Paneer',
        'Kadhai' ,
        'https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=2048x2048&w=gi&k=20&c=49Bggu_EPwzVsFZJ9iyZMmsWFSv0kHWL8hW3dYaGw9I=',
        [
            new Ingredients('Paneer',1),
            new Ingredients('Wheat flour',1)
        ]),
    ];
    constructor(private slService : ShoppingListService){}
    setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        console.log(this.recipes)
        this.restore.next(this.recipes)
    }
    
    getRecipes(){
        return this.recipes;
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredients[]){
        this.slService.addExtraIngredients(ingredients)
    }
    deleteContact(index:number){
        this.recipes.splice(index, 1);
        this.restore.next(this.recipes.slice());
        // this.getRecipes()
        alert("Recipe Removed Successfully")
       
    }
}