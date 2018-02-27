import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Year and date for the footer
 
  myDate: String = new Date().toISOString();
  year_str = this.myDate.slice(0, 4);

  username: string;
  password: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private authservice: AuthService,
  private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

 // login action
  login(form: NgForm) {

    // loading animation
 
    const loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    })

    loading.present();

    // stored the username and password of the form

    var username = form.value.username;
    var password = form.value.password;

    this.authservice.getToken(username, password)
    .subscribe(data=> {
   
      // if token is valid go to homepage
    if (data.token) {

      this.handleError("You're now logged in!", "Account Verified!");
    
      this.navCtrl.setRoot(HomePage, { token: data.token });
     }

     else {
        this.handleError("Access Denied", "An error occured!");
     }
       loading.dismiss();
    },
    error => {
      loading.dismiss();
      this.handleError("There was a problem with your request. Please try again!","Login Error", );
     }
  )}
  

  private handleError (errorMessage:string, titleMessage:string) {
    
        const alert = this.alertCtrl.create({
          title: titleMessage,
          message: errorMessage,
          buttons:['Ok']
        })
        alert.present();
    
      }

}
