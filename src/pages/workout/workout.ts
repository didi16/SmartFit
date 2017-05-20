import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import {FirebaseListObservable } from 'angularfire2/database';
import { ListwodPage } from '../listwod/listwod';

/**
 * Generated class for the WorkoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'WorkoutPage',
  templateUrl: 'workout.html',
})
export class WorkoutPage {

  WODitems: FirebaseListObservable<any[]>;
  desiredWOD: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseServiceProvider) {
  		this.WODitems = this.firebaseService.getCourseItems();
  		this.desiredWOD = navParams.get('param1');
  }


onLoadNewWorkout(desiredWOD: any){
	this.navCtrl.push(ListwodPage,{param1: desiredWOD});
}

}
