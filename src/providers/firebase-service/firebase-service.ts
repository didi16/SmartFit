import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {}

    
  	getCourseItems(){
  		return this.afd.list('Course');
  	}

}
