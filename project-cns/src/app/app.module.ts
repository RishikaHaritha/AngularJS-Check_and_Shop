import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { EditGroceryComponent } from './components/edit-grocery/edit-grocery.component';

const appRoutes : Routes = [
	{path :'' , component : HomeComponent},
	{path : 'groceries' , component : GroceriesComponent},
	{path : 'add-grocery' , component : AddGroceryComponent}
	
]
export const firebaseConfig = {
    apiKey: "AIzaSyA2bMw4YfnozhU9cbzzIwxaIzBGbI6Wpk0",
    authDomain: "myproject-1abb2.firebaseapp.com",
    databaseURL: "https://myproject-1abb2.firebaseio.com",
    projectId: "myproject-1abb2",
    storageBucket: "myproject-1abb2.appspot.com",
    messagingSenderId: "757198016846"  
};

const firebaseAuthConfig = {
	provider :  AuthProviders.Google,
	method : AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroceriesComponent,
    NavbarComponent,
    GroceryComponent,
    AddGroceryComponent,
    EditGroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
