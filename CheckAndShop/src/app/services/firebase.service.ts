import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
	groceries:FirebaseListObservable<any[]>;
	grocery:FirebaseObjectObservable<any>;
	//test : FirebaseObjectObservable<any>;
    //ref : any;
  constructor(private af : AngularFire) {
	this.groceries = this.af.database.list('/Groceries/salt') as FirebaseListObservable<Grocery[]> 
	 }
  
  getGroceries(){	  
	  return this.groceries;
  }
  getGroceryDetails(id){
	this.grocery = this.af.database.object('/Groceries/salt/'+id) as FirebaseObjectObservable<Grocery>
	//this.test = this.af.database.child('/Groceries') as FirebaseObjectObservable<Grocery>
	//console.log(test);
		
	return this.grocery;
  }
  addGrocery(grocery){
	return this.groceries.push(grocery);
  }
  updateGrocery(id,grocery){
	  return this.groceries.update(id,grocery);
	
  }
  
}
interface Grocery{

	$key?: any;
	$price?:any;
	$review?:any;
	
}
