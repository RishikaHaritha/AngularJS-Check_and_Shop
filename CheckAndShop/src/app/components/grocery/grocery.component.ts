import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  id : any ;
  grocery : any;
  grocerya : any;
  
  constructor(private firebaseService : FirebaseService , private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  this.firebaseService.getGroceryDetails(this.id).subscribe(grocery => {
		this.grocery = grocery;
		console.log(grocery);
	  });
	  
  }

}
