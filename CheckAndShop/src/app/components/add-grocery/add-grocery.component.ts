import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {
  price : any;
  constructor(private firebaseService : FirebaseService,private router : Router) { }

  ngOnInit() {
  }
  onAddSubmit(){
	  let grocery = {
	  price : this.price
	  }
	  this.firebaseService.addGrocery(grocery);
	  this.router.navigate(['/groceries']);
  }
}
