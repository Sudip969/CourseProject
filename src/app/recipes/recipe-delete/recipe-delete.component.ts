import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-delete',
  templateUrl: './recipe-delete.component.html',
  styleUrls: ['./recipe-delete.component.css']
})
export class RecipeDeleteComponent implements OnInit{

  id!:number

constructor(private route:ActivatedRoute,
            private router:Router,
            private location:Location,
            private recipeService:RecipeService){}
ngOnInit(){
  this.route.params.subscribe((params:Params)=>{
    this.id=+params['id']
  })
}
delete(){
 
  this.recipeService.deleteContact(this.id);
  this.router.navigate(['/recipes']);
  
}
cancel(){
 //this.router.navigate(['/contacts'])
  this.location.back();
}
}
