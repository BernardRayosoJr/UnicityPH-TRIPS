import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MaldiveRanksSecondpagePage } from '../maldive-ranks-secondpage/maldive-ranks-secondpage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the MaldiveRanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maldive-ranks',
  templateUrl: 'maldive-ranks.html',
})
export class MaldiveRanksPage {
  



 firstRank: number;
 secondRank: number;
 thirdRank: number;
 baseRank : any;
 baseRankString: string;
 ranks : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaldiveRanksPage');
  }

  

getFirstRank(firstRank) {
  console.log(firstRank);
  this.firstRank = firstRank;
}

  getSecondRank(secondRank) {
  console.log(secondRank);
  this.secondRank = secondRank;
  }

  getThirdRank(thirdRank) {
    console.log(thirdRank);
    this.thirdRank = thirdRank;
  }

  computebaseRank(){

  var fRank = this.firstRank
  var sRank = this.secondRank
  var tRank = this.thirdRank

  
  console.log("FIRST RANK ----> ",fRank);
  console.log("SECOND RANK ----> ", sRank);
  console.log("THIRD RANK ----> ",tRank);
    
  // PRESENT A LOADING CONTROLLER
  const loading = this.loadingCtrl.create({
  content: "Calculating Rank..."
  });
  loading.present();

 

//  DISMISS AND DELAY THE LOADING CONTROLLER
  setTimeout(() => {

    if (tRank >= sRank &&  tRank >= fRank )  {
      this.baseRank = tRank;
  } 
  else if  (sRank >= tRank &&  sRank >= fRank ) {
      this.baseRank = sRank;
  }

  else if  (fRank >= tRank &&  fRank >= sRank ) {
      this.baseRank = fRank;
  }
    
  switch(this.baseRank) {
    case "1":
        this.baseRankString = "Manager";
        break;
    case "2":
        this.baseRankString = "Senior Manager";
        break;
    case "3":
        this.baseRankString = "Director";
        break;  
    case "4":
        this.baseRankString = "Senior Director";
        break;
    case "5":
        this.baseRankString = "Executive Director";
        break;
    case "6":
        this.baseRankString = "Presidential Director";
        break;
    case "7":
        this.baseRankString = "Presidential Sapphire";
        break;      
    case "8":
        this.baseRankString = "Presidential Ruby";
        break;      
    case "9":
        this.baseRankString = "Presidential Diamond";
    break;  
        default:
      this.baseRankString = null;
  }

  console.log("baserank "+ this.baseRank);
  console.log("baserank title "+  this.baseRankString);

  if (this.baseRank < 3) {

    this.baseRankString = "No Rank";

  }
    loading.dismiss();
  }, 1000);


 
  }

  reload() {
      
 this.firstRank = null;
 this.secondRank= null;
 this.thirdRank= null;
 this.baseRank= null;
 this.baseRankString = null;
 this.ranks = null;
  }

  goTonextPage() {
    this.navCtrl.push(MaldiveRanksSecondpagePage, {ranks: this.baseRank , rankStr: this.baseRankString });
  }
    
    


}
