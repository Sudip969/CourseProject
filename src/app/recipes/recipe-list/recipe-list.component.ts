import { Component, EventEmitter, Output } from '@angular/core';
import{ Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 @Output() recipeWasSelected= new EventEmitter<Recipe>()
  recipes:Recipe[]=[
    new Recipe('Desert','Custard' ,'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipe('Paneer','Chilly' ,'https://media.gettyimages.com/id/1311491582/photo/chilli-paneer-indian-snack-food.jpg?s=2048x2048&w=gi&k=20&c=kAxCYY0zA9NeYXT1p6G5bpjdMw-aQu1Hc5rExoASTdY='),
    new Recipe('Paneer','Kadhai' ,'https://media.gettyimages.com/id/1305516603/photo/shahi-paneer-or-paneer-kadai.jpg?s=2048x2048&w=gi&k=20&c=49Bggu_EPwzVsFZJ9iyZMmsWFSv0kHWL8hW3dYaGw9I='),
    
  
  ];

onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe); 
}

}
