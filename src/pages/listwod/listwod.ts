import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListwodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'ListwodPage',
  templateUrl: 'listwod.html',
})
export class ListwodPage {

  desiredWOD: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.desiredWOD = navParams.get('param1');
  }

   public createRange(number: any){
   	
	    var items: number[] = [];
	    for(var i = 1; i <= number; i++){
	       items.push(i);
	    }
	    return items;
  }

  
}
