
import { Component} from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "../recipes/recipe.service";
 import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
 constructor(private dataStorageService:DataStorageService,private router:Router, private recipeService : RecipeService){}
onSaveData(){
    this.dataStorageService.storeRecipe();
    
}
onFetchData(){
    this.dataStorageService.fetchRecipe();
    this.router.navigate(['/recipes']);
}
}   