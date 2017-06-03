import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
	groceries:any;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	  this.firebaseService.getGroceries().subscribe(groceries => {
			console.log(groceries);
			this.groceries = groceries;
	  });
  }

}