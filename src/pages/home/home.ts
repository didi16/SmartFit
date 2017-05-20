import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseListObservable } from 'angularfire2/database';
import {WorkoutPage } from '../workout/workout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	 
	  courseItems: FirebaseListObservable<any[]>;

  	constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider ) {

  	this.courseItems = this.firebaseService.getCourseItems();

  }
    onLoadNewWorkout(courseNumber: any){
      this.navCtrl.push(WorkoutPage, {param1:courseNumber});
    }
}
