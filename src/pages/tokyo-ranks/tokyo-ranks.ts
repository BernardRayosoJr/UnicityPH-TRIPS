import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TokyoRanksSecondpagePage } from '../tokyo-ranks-secondpage/tokyo-ranks-secondpage';

/**
 * Generated class for the TokyoRanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tokyo-ranks',
  templateUrl: 'tokyo-ranks.html',
})
export class TokyoRanksPage {

  firstRank: number;
  secondRank: number;
  thirdRank: number;
  fourthRank: number;
  baseRank : any;
  baseRankString: string;
  ranks : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokyoRanksPage');
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

  getFourthRank(fourthRank) {
      console.log(fourthRank);
      this.fourthRank = fourthRank;
    }
  
    computebaseRank(){

      var fRank = this.firstRank
      var sRank = this.secondRank
      var tRank = this.thirdRank
      var frtRank = this.fourthRank
    
      
      console.log("FIRST RANK ----> ",fRank);
      console.log("SECOND RANK ----> ", sRank);
      console.log("THIRD RANK ----> ",tRank);
      console.log("FOURT RANK ----> ",frtRank);
        
      // PRESENT A LOADING CONTROLLER
      const loading = this.loadingCtrl.create({
      content: "Calculating Rank..."
      });
      loading.present();
    
     
    
    //  DISMISS AND DELAY THE LOADING CONTROLLER
      setTimeout(() => {
    
        if (tRank >= sRank &&  tRank >= fRank  &&  tRank >= frtRank )  {
          this.baseRank = tRank;
      } 
      else if  (sRank >= tRank &&  sRank >= fRank &&  sRank >= frtRank ) {
          this.baseRank = sRank;
      }
    
      else if  (fRank >= tRank &&  fRank >= sRank &&  fRank >= frtRank) {
          this.baseRank = fRank;
      }

      else if  (frtRank >= fRank &&  frtRank >= sRank &&  frtRank >= tRank) {
        this.baseRank = frtRank;
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
      this.fourthRank= null;
      this.baseRank= null;
      this.baseRankString = null;
      this.ranks = null;
    }

  goTonextPage() {
        this.navCtrl.push(TokyoRanksSecondpagePage, {ranks: this.baseRank , rankStr: this.baseRankString });
  }
        
}
