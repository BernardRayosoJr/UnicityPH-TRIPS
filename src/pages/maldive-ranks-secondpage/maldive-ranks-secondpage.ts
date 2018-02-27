    import { Component, OnInit } from '@angular/core';
    import { IonicPage, NavController, NavParams } from 'ionic-angular';

    /**
     * Generated class for the MaldiveRanksSecondpagePage page.
     *
     * See https://ionicframework.com/docs/components/#navigation for more info on
     * Ionic pages and navigation.
     */

    @IonicPage()
    @Component({
      selector: 'page-maldive-ranks-secondpage',
      templateUrl: 'maldive-ranks-secondpage.html',
    })
    export class MaldiveRanksSecondpagePage implements OnInit {


    baseRank: any;
    baseRankString: string;
    firstRank: number;
    secondRank: number;
    thirdRank: number;
    fourthRank: number;
    totalPoints: number = 0;
    firstTotalPoints: number = 0;
    secondTotalPoints: number = 0;
    thirdTotalPoints: number = 0;
    fourthTotalPoints: number = 0;
    isResetShow: boolean = false;
    totalPackage: number = 0;

    

    RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"]
    Total = []

    constructor(public navCtrl: NavController, public navParams: NavParams) {}


    ngOnInit() {
      this.isResetShow = false;
      this.baseRank = this.navParams.get('ranks');
      this.baseRankString = this.navParams.get('rankStr');
      this.isResetShow = false;
      this.totalPackage = 0;
      console.log(this.baseRankString);
      if (this.baseRank < 3) {
        this.baseRank = 0;
      }
      else {
      this.baseRank = this.navParams.get('ranks');
      }
      console.log("BaseRank ------> ",this.baseRank );
    }


    reload() {

      this.isResetShow = false;
      
      this.firstRank = 0;
      this.secondRank= 0;
      this.thirdRank= 0;
      this.fourthRank= 0;
      this.totalPackage= 0;
     
      // this.baseRank= null;
      // this.baseRankString = null;
      this.totalPoints = 0;
      this.firstTotalPoints = 0;
      this.secondTotalPoints = 0;
      this.thirdTotalPoints = 0;
      this.fourthTotalPoints = 0;


  }


    getFirstRank(firstRank) {
      console.log(firstRank);
      this.firstRank = firstRank;
      this.firstTotalPoints = 0;
   
      var rankdiff = this.firstRank - this.baseRank; 

      console.log("firstRank difference"+rankdiff);


      if (this.baseRank < 3) {   

      this.RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"]
     
      if (rankdiff == 0) {
        this.RankAdvancementArray = ["0"];
        console.log(this.RankAdvancementArray);
      }


  
      if (rankdiff == 1) {
        this.RankAdvancementArray.splice(1,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 2) {
        this.RankAdvancementArray.splice(2,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 3) {
        this.RankAdvancementArray.splice(3,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 4) {
        this.RankAdvancementArray.splice(4,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 5) {
        this.RankAdvancementArray.splice(5,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 6) {
        this.RankAdvancementArray.splice(6,8);
        console.log(this.RankAdvancementArray);
      }


      if (rankdiff == 7) {
        this.RankAdvancementArray.splice(7,8);
        console.log(this.RankAdvancementArray);
      }

      if (rankdiff == 8) {
        this.RankAdvancementArray.splice(8,8);
        console.log(this.RankAdvancementArray);
      }

      for (var i=0;i<this.RankAdvancementArray.length; i++) {

      if(isNaN(parseInt(this.RankAdvancementArray[i]))){
      continue;
      }
      this.firstTotalPoints +=  parseInt(this.RankAdvancementArray[i]);
        
      }
      console.log(this.firstTotalPoints);
      //  this.Total.push(String(this.firstTotalPoints));
      this.computePoints();
      this.computePackage();
      return this.firstTotalPoints;
    }

      else {

      this.RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"]

      console.log("BaseRank ------> ",this.baseRank );
     
      //  RESET TO 0
      if (this.firstRank == 0) {
        
          this.RankAdvancementArray =  ["0"];
          console.log(this.RankAdvancementArray);
      }

      //  SENIOR MANAGER
      if (this.firstRank == 1) {
    
      this.RankAdvancementArray =  ["0"];
      console.log(this.RankAdvancementArray);
      }
      //  SENIOR MANAGER
      if (this.firstRank == 2) {
    
      this.RankAdvancementArray =  ["0"];
      console.log(this.RankAdvancementArray);
    }

      // DIRECTOR
      if (this.firstRank == 3) {
    
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["0"];
      break;  
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.RankAdvancementArray);

    }

      // SENIOR DIRECTOR
      if (this.firstRank == 4) {

      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9"];
      break;  
      case "4":
      //  SENIOR DIRECTOR
      this.RankAdvancementArray = ["2.5"];
      break;  
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.RankAdvancementArray);
   }


      //  EXECUTIVE DIRECTOR

      if (this.firstRank == 5) {

      console.log(this.firstRank);
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9","9"]
      break;  
      case "4":
      //  SENIOR DIRECTOR
      this.RankAdvancementArray = ["9"]
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      this.RankAdvancementArray = ["3"]
      break;
      default:
      this.RankAdvancementArray =  ["0"];
     }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);

   }
      //  PRESIDENTIAL  DIRECTOR
      if (this.firstRank == 6) {
      console.log(this.firstRank);
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9","9","10"]
      break;
      case "4":
      //  SENIOR  DIRECTOR
      this.RankAdvancementArray = ["9","10"]
      break;
      case "5":
      //  EXECUTIVE  DIRECTOR
      this.RankAdvancementArray = ["10"]
      break;
      case "6":
      //  PRESIDENTIAL  DIRECTOR
      this.RankAdvancementArray = ["3"]
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
    
     }

      //  PRESIDENTIAL SAPPHIRE
      if (this.firstRank == 7) {
    
      console.log(this.firstRank);
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9","9","10","10"]
      break;
      case "4":
      //  SENIOR DIRECTOR
      this.RankAdvancementArray = ["9","10","10"]
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      this.RankAdvancementArray = ["10","10"]
      case "6":
      //  PRESIDENTIAL DIRECTOR
      this.RankAdvancementArray = ["10"]
      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      this.RankAdvancementArray = ["4"]
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
    
      }
  

      //  PRESIDENTIAL RUBY
      if (this.firstRank == 8) {
      
      console.log(this.firstRank);
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9","9","10","10","10"]
      break;
      case "4":
      //  SENIOR DIRECTOR
      this.RankAdvancementArray = ["9","10","10","10"]
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      this.RankAdvancementArray = ["10","10","10"]
      break;
      case "6":
      //  PRESIDENTIAL DIRECTOR
      this.RankAdvancementArray = ["10","10"]
      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      this.RankAdvancementArray = ["10"]
      break;
      case "8":
      //  PRESIDENTIAL RUBY
      this.RankAdvancementArray = ["4"]
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
      
      }
  

      //  PRESIDENTIAL DIAMOND
      if (this.firstRank == 9) {
      console.log(this.firstRank);
      switch(this.baseRank) {
      case "3":
      //  DIRECTOR
      this.RankAdvancementArray = ["9","9","10","10","10","10"]
      break;
      case "4":
      //  SENIOR DIRECTOR
      this.RankAdvancementArray = ["9","10","10","10","10"]
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      this.RankAdvancementArray = ["10","10","10","10"]
      break;
      case "6":
      //  PRESIDENTIAL DIRECTOR
      this.RankAdvancementArray = ["10","10","10"]
      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      this.RankAdvancementArray = ["10","10"]
      break;
      case "8":
      //  PRESIDENTIAL RUBY
      this.RankAdvancementArray = ["10"]
      break;
      case "9":
      //  PRESIDENTIAL DIAMOND
      this.RankAdvancementArray = ["5"]
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
      
      }   


      for (var x=0;x<this.RankAdvancementArray.length; x++) {
    
      if(isNaN(parseFloat(this.RankAdvancementArray[x]))){
      continue;
      }
      this.firstTotalPoints += parseFloat(this.RankAdvancementArray[x]);
      }
      console.log(this.firstTotalPoints);
      this.computePoints();
      this.computePackage();
      return this.firstTotalPoints;
        }
     }
 
  
      getSecondRank(secondRank) {

        var newSbaseRank: any;

      this.secondRank = secondRank;
      this.secondTotalPoints = 0;
      this.RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"];
     
      console.log("FIRST RANK  ----> ",this.firstRank);
      console.log("SECOND RANK ----> ",this.secondRank,);
      // BASE RANK IS FIRST RANK

       // secondRank  RESET TO 0
      if (this.secondRank == 0) {
        
          this.RankAdvancementArray =  ["0"];
          console.log(this.RankAdvancementArray);
      }


      // MANAGER
      if (this.secondRank == 1) {
      this.RankAdvancementArray = ["0"];
      }
      
      // SENIOR MANAGER
      if (this.secondRank == 2) { 
        
        
        if (this.baseRank > this.firstRank)
         {
         console.log("base rank is higher than first rank");
        newSbaseRank =  this.baseRank;
         }
          
         else {
          newSbaseRank =  this.firstRank;
         }
      
      switch(String(newSbaseRank)) {
      case "0":
      case "1":
      // MANAGER
      this.RankAdvancementArray = ["0","6"];
      break;
       
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.RankAdvancementArray);
      }
       



      // DIRECTOR
      if (this.secondRank == 3) {


     
      if (this.baseRank > this.firstRank)
       {
       console.log("base rank is higher than first rank");
      newSbaseRank =  this.baseRank;
       }
        
       else {
        newSbaseRank =  this.firstRank;
       }


      switch(String(newSbaseRank)) {
      case "0":
      case "1":
      //  MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["0"];
       }
       else {
        this.RankAdvancementArray = ["6","7"];
       }
  
      break;
      case "2":
      //  SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["0"];
       }
       else {
        this.RankAdvancementArray = ["7"];
       }
     
      break;
      case "3":
      //  DIRECTOR
        if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["0"];
       }
       else {
        this.RankAdvancementArray = ["2"];
       }
   
      break;
      default:
      this.RankAdvancementArray =  ["0"];
    }
      console.log(this.RankAdvancementArray);
      }
      
     

      
      // SENIOR DIRECTOR
      if (this.secondRank == 4) {

      

       if (this.baseRank > this.firstRank)
       {
          console.log("base rank is higher than first rank");
          newSbaseRank =  this.baseRank;
       }

       else {
          newSbaseRank =  this.firstRank;

       }
      
   
      switch(String(newSbaseRank)) {
      case "0":
      case "1":

      //  Manager
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["2.5"];
      }
      else {
        this.RankAdvancementArray = ["6","7","9"];
      }
      break;
      case "2": 
      //SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["2.5"];
      }
      else {
        this.RankAdvancementArray = ["7","9"];
      }
     
      break;
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["2.5"];
      }
      else {
        this.RankAdvancementArray = ["9"];
      }
      break;
      case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["2.5"];
      }
      else {
        this.RankAdvancementArray = ["5"];
      }
    
      break; 
      default:
      this.RankAdvancementArray =  ["0"];
        }
      console.log(this.RankAdvancementArray);
    }
      
      
      // EXECUTIVE DIRECTOR

      if (this.secondRank == 5) {
      console.log(this.secondRank);

      if (this.baseRank > this.firstRank)
      {
         console.log("base rank is higher than first rank");
         newSbaseRank =  this.baseRank;
      }

      else {
         newSbaseRank =  this.firstRank;

      }

      switch(String(newSbaseRank)) {
      case "0":
      case "1":
      //  MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["6","7","9","9"];
      }
      break;
      case "2":
      //SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["7","9","9"];
      }
      
      break;
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["9","9"]
      }
      
      break; case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["9"]
      }
      
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["5"]
      }
      
     
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
      
      }

      // PRESIDENTIAL DIRECTOR
      if (this.secondRank == 6) {
      console.log(this.secondRank);

      if (this.baseRank > this.firstRank)
      {
         console.log("base rank is higher than first rank");
         newSbaseRank =  this.baseRank;
      }

      else {
         newSbaseRank =  this.firstRank;

      }

      switch(String(newSbaseRank)) {
      case "0":
      case "1":
      //  MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["6","7","9","9","10"];
      }
      
      break;
      case "2":
      //SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        this.RankAdvancementArray = ["3"];
      }
      else {
        this.RankAdvancementArray = ["7","9","9","10"];
      }
      break;        
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["3"]; 
      }
      else {
        // Rank Advacnement 
        this.RankAdvancementArray = ["9","9","10"]
      }
      
      break;  
      case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["3"]; 
      }
      else{
         // RANK ADVANCEMENT 
        this.RankAdvancementArray = ["9","10"]
      }
    
      break;
       case "5":
      //  EXECUTIVE DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["3"]; 
      }
      else {
        this.RankAdvancementArray = ["10"]
      }
      
      break;
      case "6":
      // PRESIDENTIAL DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["3"]; 
      }
      else {
        this.RankAdvancementArray = ["5"]
      }
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
          
           }
      
      //  PRESIDENTIAL SAPPHIRE
      if (this.secondRank == 7) { 

        if (this.baseRank > this.firstRank)
        {
           console.log("base rank is higher than first rank");
           newSbaseRank =  this.baseRank;
        }
  
        else {
           newSbaseRank =  this.firstRank;
  
        }     
      console.log(this.secondRank);
      switch(String(newSbaseRank)) {
      case "0":  
      case "1":
      //  MANAGER
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["6","7","9","9","10","10"];
      }
      break;
      case "2":
      //  SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["7","9","9","10","10"];
      }
  
      break;
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["9","9","10","10"]
      }
     
      break;  
      case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["9","10","10"]
      }
     
      break;

      case "5":
      //  EXECUTIVE DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10"]
      }
      break;

      case "6":
      //  PRESIDENTIAL DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["10"]
      }
     
      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["10"]
      }

      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
          
      }
        
      
      // PRESIDENTIAL RUBY
      if (this.secondRank == 8) {

        if (this.baseRank > this.firstRank)
        {
           console.log("base rank is higher than first rank");
           newSbaseRank =  this.baseRank;
        }
  
        else {
           newSbaseRank =  this.firstRank;
  
        }  


      console.log(this.secondRank);
      switch(String(newSbaseRank)) {
      case "0":  
      case "1":
      //  MANAGER
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["6","7","9","9","10","10","10"];
      }
      break;
      case "2":
      //  SENIOR MANAGER
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["7","9","9","10","10","10"];
      }
      
      break;
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["9","9","10","10","10"]
      }
   
      break;
      case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["9","10","10","10"]
      }
   
      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10","10"]
      }
    
      break;
      case "6":
      //  PRESIDENTIAL DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10"]
      }
      
      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else{
        this.RankAdvancementArray = ["10"]
      }
      break;
      case "8":
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["4"]; 
      }
      else {
         // PRESIDENTIAL RUBY
        this.RankAdvancementArray = ["10"]
      }

      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.firstRank);
      console.log(this.RankAdvancementArray);
            
    }
            
      
      // PRESIDENTIAL DIAMOND
      if (this.secondRank == 9) { 

        if (this.baseRank > this.firstRank)
        {
           console.log("base rank is higher than first rank");
           newSbaseRank =  this.baseRank;
        }
  
        else {
           newSbaseRank =  this.firstRank;
  
        }  


      console.log(this.secondRank);
      switch(String(newSbaseRank)) {
      case "0":  
      case "1":
       //  MANAGER
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["6","7","9","9","10","10","10","10"];
      }     
      break;
      case "2":
      //  SENIOR MANAGER

      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["7","9","9","10","10","10","10"];
      }
      break;
      case "3":
      //  DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["9","9","10","10","10","10"]
      }
     
      break;
      case "4":
      //  SENIOR DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["9","10","10","10","10"]
      }

      break;
      case "5":
      //  EXECUTIVE DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10","10","10"]
      }

      break;
      case "6":
      //  PRESIDENTIAL DIRECTOR
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10","10"]
      }

      break;
      case "7":
      //  PRESIDENTIAL SAPPHIRE
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["10","10"]
      }

      break;
      case "8":
      //  PRESIDENTIAL RUBY
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["10"]
      }
   
      break;
      case "9":
      // PRESIDENTIAL DIAMOND
      if (this.baseRank == this.secondRank) {
        // Maintaning Base Rank (July - Sept)
        this.RankAdvancementArray = ["5"]; 
      }
      else {
        this.RankAdvancementArray = ["10"]
      }
      break;
      default:
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.baseRank);
      console.log(this.RankAdvancementArray);
            
   }    
         
      // COMPUTE POINTS FOR THE MONTH OF NOVEMBER
      
     for (var x=0;x<this.RankAdvancementArray.length; x++) {
        if(isNaN(parseFloat(this.RankAdvancementArray[x]))){
            continue;
      }
        this.secondTotalPoints += parseFloat(this.RankAdvancementArray[x]);
      }
          
        console.log(this.secondTotalPoints);
        this.computePoints();
        this.computePackage();
        return this.secondTotalPoints;
      }
  

     //  INPUT THIRD RANK FOR DECEMBER

     getThirdRank(thirdRank) {
     this.thirdRank = thirdRank;
     var newSbaseRank: any;
     this.thirdTotalPoints = 0;
     this.RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"];
     console.log(this.secondRank,"SECOND RANK");
     console.log(this.thirdRank,"THIRD RANK");

    // secondRank  RESET TO 0


  



     if (this.thirdRank == 0) {
        
    this.RankAdvancementArray =  ["0"];
    console.log(this.RankAdvancementArray);
    }

     // MANAGER
     if (this.thirdRank == 1) {
            this.RankAdvancementArray = ["0"];
     }


// -------------     // SENIOR MANAGER


     if (this.thirdRank == 2) {
     // BASE RANK


     if (this.baseRank > this.secondRank)
     {
        console.log("base rank is higher than 2nd rank");
        newSbaseRank =  this.baseRank;
     }
     
     else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
      console.log("base rank is firstRank");
      newSbaseRank = this.firstRank
      }
     else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
      console.log("base rank is secondRank");
        newSbaseRank = this.secondRank
      }

     else {
        newSbaseRank =  this.secondRank;

     } 

  //    if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
  //     console.log("base rank is firstRank");
  //     newSbaseRank =  this.firstRank;
  
  //   }
  
  //  else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
  //     console.log("base rank is secondRank");
  //     newSbaseRank =  this.secondRank;
  
  //   }
  
  //   else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
  //     console.log("base rank is thirdRank");
  //     newSbaseRank =  this.thirdRank;
  
  //   }
  
  //    else {
  //    newSbaseRank =  this.thirdRank;
  
  //   } 

     
     

     console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )


     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     // MANAGER
     if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["0"];

     }
     else {
      this.RankAdvancementArray = ["0","6"];
     }
   
     break;      
     default:
     this.RankAdvancementArray =  ["0"];
      }
     console.log(this.RankAdvancementArray);
     }


    //  ---------------------------------------------
    
     // DIRECTOR
     if (this.thirdRank == 3) {
       
    
      if (this.baseRank > this.secondRank)
      {
         console.log("base rank is higher than 2nd rank");
         newSbaseRank =  this.baseRank;
      }
      
      else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
       console.log("base rank is firstRank");
       newSbaseRank = this.firstRank
       }
      else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
       console.log("base rank is secondRank");
         newSbaseRank = this.secondRank
       }
 
      else {
         newSbaseRank =  this.secondRank;
 
      } 
 
 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 


     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     //  Manager
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["0"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["0"];

     }

     else {
       this.RankAdvancementArray = ["6","7"];
     }
    
     
     break;  
     case "2":
     //  SM
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["0"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["2"];

     }
     else {
      this.RankAdvancementArray = ["7"];
     }
    
     break;
     case "3":
     //  director
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["0"];
     }
     else {
      this.RankAdvancementArray = ["2"];
     }
     
     break;
     default:
     this.RankAdvancementArray =  ["0"];
      }
     console.log(this.RankAdvancementArray);
     }


    //  ----------------------------------------------------------

     // SENIOR DIRECTOR
     if (this.thirdRank == 4) {


      if (this.baseRank > this.secondRank)
      {
         console.log("base rank is higher than 2nd rank");
         newSbaseRank =  this.baseRank;
      }
      
      else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
       console.log("base rank is firstRank");
       newSbaseRank = this.firstRank
       }
      else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
       console.log("base rank is secondRank");
         newSbaseRank = this.secondRank
       }
 
      else {
         newSbaseRank =  this.secondRank;
 
      } 
 
 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 



     switch(String(newSbaseRank)) {

     case "1":
     case "0":  
     //  Manager
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["2.5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }

    else {
      this.RankAdvancementArray = ["6","7","9"];
    }
    
    break;
    case "2":
    //SENIOR MANAGER
    if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["2.5"];
    }

     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["7","9"];
     }
     
     break;  
     case "3":
     //  DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["2.5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["9"];
     }
    
     break;
     case "4":
     //  SENIOR DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["2.5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["5"];
     }
    
     break;  
     default:
     this.RankAdvancementArray =  ["0"];
    }
      console.log(this.RankAdvancementArray);
  }

  // ---------------------------------------------------
      // EXECUTIVE DIRECTOR
      
     if (this.thirdRank == 5) {
      
      if (this.baseRank > this.secondRank)
      {
         console.log("base rank is higher than 2nd rank");
         newSbaseRank =  this.baseRank;
      }
      
      else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
       console.log("base rank is firstRank");
       newSbaseRank = this.firstRank
       }
      else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
       console.log("base rank is secondRank");
         newSbaseRank = this.secondRank
       }
 
      else {
         newSbaseRank =  this.secondRank;
 
      } 
 
 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 

     switch(String(newSbaseRank)) {
     case "0":  
     case "1":
     //  MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }

     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }

     else {
      this.RankAdvancementArray = ["6","7","9","9"];
     }


     
     break;
     case "2":
     //SENIOR MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["7","9","9"];
     }
     break;        
     case "3":
     //  DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }

     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["9","9"]
     }
     
     break;  

     case "4":
     //  SENIOR DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["9"]
     }
     break;

     case "5":
     //  EXECUTIVE DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["5"]
     }

     break;
     default:
     this.RankAdvancementArray =  ["0"];
     }
     console.log(this.baseRank);
     console.log(this.RankAdvancementArray);
          
  }


  // -------------------------------------------------

     //  PRESIDENTIAL DIRECTOR
     if (this.thirdRank == 6) {

      if (this.baseRank > this.secondRank)
     {
        console.log("base rank is higher than 2nd rank");
        newSbaseRank =  this.baseRank;
     }
     
     else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
      console.log("base rank is firstRank");
      newSbaseRank = this.firstRank
      }
     else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
      console.log("base rank is secondRank");
        newSbaseRank = this.secondRank
      }

     else {
        newSbaseRank =  this.secondRank;

     } 

 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 


     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     //  MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["6","7","9","9","10"];
     }

     break;
     case "2":
     //  SENIOR MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["7","9","9","10"];
     }

     break;        
     case "3":
     //  DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["9","9","10"]
     }

     break;  
     case "4":
     //  SENIOR DIRECTOR 
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["9","10"]
     }

     break;
     case "5":
     //  EXECUTIVE DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];

     }
     else {
      this.RankAdvancementArray = ["10"]
     }
     break;
     case "6":
     //  PRESIDENTIAL DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["3"];
     }
     else {
      this.RankAdvancementArray = ["5"]
     }
     break;
     default:
     this.RankAdvancementArray =  ["0"];
  }
     console.log(this.baseRank);
     console.log(this.RankAdvancementArray);
          
  }


    // ---------------------------------
    // PRESIDENTIAL SAPPHIRE


     if (this.thirdRank == 7) {

      if (this.baseRank > this.secondRank)
      {
         console.log("base rank is higher than 2nd rank");
         newSbaseRank =  this.baseRank;
      }
      
      else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
       console.log("base rank is firstRank");
       newSbaseRank = this.firstRank
       }
      else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
       console.log("base rank is secondRank");
         newSbaseRank = this.secondRank
       }
 
      else {
         newSbaseRank =  this.secondRank;
 
      } 
 
 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 



     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     //  MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["6","7","9","9","10","10"];
     }

     break;
     case "2":
     //  SENIOR MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["7","9","9","10","10"];
     }  

     break; 

     case "3":
     //  DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }

     else {
      this.RankAdvancementArray = ["9","9","10","10"]
     }

     break;  
     case "4":
     //  SENIOR DIRECTOR 
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["9","10","10"]
     }

     break;

     case "5":
     //  EXECUTIVE DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10"]
     }
     break;

     case "6":
     //  PRESIDENTIAL DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }

     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }

     else {
      this.RankAdvancementArray = ["10"]
     }
     break;
     
     case "7":
     //  PRESIDENTIAL SAPPHIRE
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10"]
     }

     break;
     default:
     this.RankAdvancementArray =  ["0"];
     }
     console.log(this.secondRank);
     console.log(this.RankAdvancementArray);
                
  }

  // ------------------------------------

     // PRESIDENTIAL RUBY
     if (this.thirdRank == 8) {

      if (this.baseRank > this.secondRank)
      {
         console.log("base rank is higher than 2nd rank");
         newSbaseRank =  this.baseRank;
      }
      
      else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
       console.log("base rank is firstRank");
       newSbaseRank = this.firstRank
       }
      else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
       console.log("base rank is secondRank");
         newSbaseRank = this.secondRank
       }
 
      else {
         newSbaseRank =  this.secondRank;
 
      } 
 
 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 

     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     //  Manager
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }

     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["6","7","9","9","10","10","10"];
     }

     break;
     case "2":
     //  SENIOR MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["7","9","9","10","10","10"];
     }

     break; 
     case "3":
     //  DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["9","9","10","10","10"]
     }

     break;  
     case "4":
     //  SENIOR DIRECTOR 
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["9","10","10","10"]
     }  

     break;
     case "5":
     //  EXECUTIVE DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10","10"]
     }

     break;
     case "6":
     //  PRESIDENTIAL DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10"];
     }

     break;

     case "7":
     //  PRESIDENTIAL SAPPHIRE
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10"];
     }
     break;
     
     case "8":
     //  PRESIDENTIAL RUBY
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["4"];
     }
     else {
      this.RankAdvancementArray = ["10"];
     }

     break;
     default:
     this.RankAdvancementArray =  ["0"];
     }
     console.log(this.secondRank);
     console.log(this.RankAdvancementArray);
                
    }



    // -------------------------------------------


     // PRESIDENTIAL DIAMOND
     if (this.thirdRank == 9) {


       if (this.baseRank > this.secondRank)
     {
        console.log("base rank is higher than 2nd rank");
        newSbaseRank =  this.baseRank;
     }
     
     else if (this.firstRank >= this.baseRank && this.firstRank >= this.secondRank) {
      console.log("base rank is firstRank");
      newSbaseRank = this.firstRank
      }
     else if (this.secondRank >= this.baseRank  &&  this.secondRank >= this.firstRank) {
      console.log("base rank is secondRank");
        newSbaseRank = this.secondRank
      }

     else {
        newSbaseRank =  this.secondRank;

     } 

 
      console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 
      
     switch(String(newSbaseRank)) {
     case "1":
     case "0":  
     //  MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["6","7","9","9","10","10","10","10"];
     }

     break;
     case "2":
     //  SENIOR MANAGER
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["7","9","9","10","10","10","10"];
     }

     break;
     case "3":
     //  DIRECTOR 
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     
     else {
      this.RankAdvancementArray = ["9","9","10","10","10","10"];
     }

     break;
     case "4":
     //  SENIOR DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["9","10","10","10","10"];
     }

     break;
     case "5":
     //  EXECUTIVE DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10","10","10"];
     }

     break;
     case "6":
     //  PRESIDENTIAL DIRECTOR
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10","10"];
     }

     break;
     case "7":
     //  PRESIDENTIAL SAPPHIRE
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10","10"]
     }
     break;
     case "8":
     //  PRESIDENTIAL RUBY
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10"]
     }

     break;
     case "9":
     //  PRESIDENTIAL DIAMOND
     if (this.baseRank == this.thirdRank) {
      this.RankAdvancementArray = ["5"];
     }
     else if (this.firstRank == this.thirdRank) {
      this.RankAdvancementArray = ["10"];

     }
     else {
      this.RankAdvancementArray = ["10"]
     }

     break;
     default:
     this.RankAdvancementArray =  ["0"];
    }
     console.log(this.secondRank);
     console.log(this.RankAdvancementArray);
    }


    // RETURN TOTAL POINTS FOR THE MONTH OF DECEMBER
    for (var x=0;x<this.RankAdvancementArray.length; x++) {
    if(isNaN(parseFloat(this.RankAdvancementArray[x]))){
      continue;
    }
      this.thirdTotalPoints += parseFloat(this.RankAdvancementArray[x]);
    }
            
     console.log(this.thirdTotalPoints);
     this.computePoints();
     this.computePackage();
     
     return this.thirdTotalPoints;
  }


    //  GET FOURTHRANK


     //  INPUT FOURTH RANK FOR DECEMBER

     getFourthRank(fourthRank) { 

      this.fourthRank = fourthRank;
      var newSbaseRank: any;
      this.fourthTotalPoints = 0;
      this.RankAdvancementArray = ["0","6","7","9","9","10","10","10","10"];
      console.log(this.thirdRank,"THIRD RANK");
      console.log(this.fourthRank,"FOURTH RANK");


  
  
 
      // ------------------------------------------------------------------------------------------------------------
     
     // secondRank  RESET TO 0
      if (this.fourthRank == 0) {

      console.log("NO RANK");
         
     this.RankAdvancementArray =  ["0"];
     console.log(this.RankAdvancementArray);
     }

      // ------------------------------------------------------------------------------------------------------------
     
      // MANAGER
      if (this.fourthRank == 1) {
       this.RankAdvancementArray = ["0"];
        console.log("RANK ======>  MANAGER");
        console.log(this.RankAdvancementArray);
      }

      // ------------------------------------------------------------------------------------------------------------
      
      // SENIOR MANAGER
      if (this.fourthRank == 2) {
      // BASE RANK
      console.log("RANK ======>  SENIOR MANAGER");
 
     
     
      if (this.firstRank > this.secondRank && this.firstRank > this.thirdRank) {
        console.log("base rank is firstRank");
        newSbaseRank =  this.firstRank;

      }

      else if (this.secondRank > this.firstRank && this.secondRank > this.thirdRank) {
        console.log("base rank is secondRank");
        newSbaseRank =  this.secondRank;

      }

      else if (this.thirdRank > this.secondRank && this.thirdRank > this.firstRank) {
        console.log("base rank is thirdRank");
        newSbaseRank =  this.thirdRank;

      }

    else {
        console.log("base rank is fourth");
        newSbaseRank =  this.thirdRank;

      }

      console.log(" YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 
 
      switch(String(newSbaseRank)) {
      case "1":
      case "0":  
      // MANAGER
      if (this.firstRank == this.fourthRank  ) {
       this.RankAdvancementArray = ["0"];
 
      }
      else if (this.secondRank == this.fourthRank ){
        this.RankAdvancementArray = ["0"];
      }
      
      else {
       this.RankAdvancementArray = ["0","6"];
      }
    
      break;      
      default:
      
      this.RankAdvancementArray =  ["0"];
      }
      console.log(this.RankAdvancementArray);
      }


       // ------------------------------------------------------------------------------------------------------------

        // DIRECTOR
      if (this.fourthRank == 3) {

        console.log("RANK ======>  SENIOR MANAGER");

        if (this.firstRank > this.secondRank && this.firstRank > this.thirdRank) {
          console.log("base rank is firstRank");
          newSbaseRank =  this.firstRank;

        }

        else if (this.secondRank > this.firstRank && this.secondRank > this.thirdRank) {
          console.log("base rank is secondRank");
          newSbaseRank =  this.secondRank;

        }

        else if (this.thirdRank > this.secondRank && this.thirdRank > this.firstRank) {
          console.log("base rank is thirdRank");
          newSbaseRank =  this.thirdRank;

        }

      else {
          console.log("base rank is fourth");
          newSbaseRank =  this.thirdRank;

        }

        console.log(" YOUR NEW BASE RANK IS ======>   ",newSbaseRank )

        
        // if (this.baseRank > this.thirdRank)
        // {
        //    console.log("base rank is higher than 3rd rank");
        //    newSbaseRank =  this.baseRank;
        // }
 
        // else if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
        //  console.log("base rank is firstRank");
 
        //  newSbaseRank = this.firstRank
        //  }
 
 
        // else if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
        //  console.log("base rank is secondRank");
        //    newSbaseRank = this.secondRank
        //  }
 
   
        // else {
        //    newSbaseRank =  this.thirdRank;
   
        // } 
  
  
       switch(String(newSbaseRank)) {
       case "1":
       case "0":  
       //  Manager
       if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["0"];
       }

       
       else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
        this.RankAdvancementArray = ["0"];
  
       }
  
       else {
         this.RankAdvancementArray = ["6","7"];
       }
       console.log(this.RankAdvancementArray)
       
       break;  
       case "2":
       //  SM
       if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["0"];
       }
       else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
        this.RankAdvancementArray = ["2"];
  
       }
       else {
        this.RankAdvancementArray = ["7"];
       }
       break;
       case "3":
       //  director
       if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["0"];
       }
       else {
        this.RankAdvancementArray = ["2"];
       }
       
       break;
       default:
       this.RankAdvancementArray =  ["0"];
        }
       console.log(this.RankAdvancementArray);
       }




         // ------------------------------------------------------------------------------------------------------------

      // SENIOR DIRECTOR
      if (this.fourthRank == 4) {

        console.log("RANK ======>  SENIOR DIRECTOR");

        console.log("FirstRank ======>  ", this.firstRank);
        console.log("SecondRank ======>  ", this.secondRank);
        console.log("FirstRank ======>  ");



        if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
          console.log("base rank is firstRank");
          newSbaseRank =  this.firstRank;

        }

        else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
          console.log("base rank is secondRank");
          newSbaseRank =  this.secondRank;

        }

        else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
          console.log("base rank is thirdRank");
          newSbaseRank =  this.thirdRank;

        }

      else {
          console.log("base rank is fourth");
          newSbaseRank =  this.thirdRank;
        }

        // if (this.baseRank > this.thirdRank)
        // {
        //    console.log("base rank is higher than 3rd rank");
        //    newSbaseRank =  this.baseRank;
        // }
 
        //  if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
        //  console.log("base rank is firstRank");
 
        //  newSbaseRank = this.firstRank
        //  }
 
 
        //  if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
        //  console.log("base rank is secondRank");
        //    newSbaseRank = this.secondRank
        //  }
 
   
        // else {
        //    newSbaseRank =  this.thirdRank;
   
        // } 
 

       console.log(" YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
 
      switch(String(newSbaseRank)) {
 
      case "1":
      case "0":  
      //  Manager
      if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["2.5"];
      }
      else if (this.firstRank == this.fourthRank ) {
       this.RankAdvancementArray = ["5"];
 
      }

      else if (this.secondRank == this.fourthRank) {
        this.RankAdvancementArray = ["5"];
  
       }
        
     else {
       this.RankAdvancementArray = ["6","7","9"];
     }
     console.log(this.RankAdvancementArray);
     break;

     case "2":
     //SENIOR MANAGER
     if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["2.5"];
     }
 
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
       this.RankAdvancementArray = ["7","9"];
      }
      
      break; 

      case "3":
      //  DIRECTOR
      if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["2.5"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
       this.RankAdvancementArray = ["9"];
      }
      console.log(this.RankAdvancementArray);
      break;

      case "4":
      //  SENIOR DIRECTOR
      
      if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["2.5"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
       this.RankAdvancementArray = ["5"];
      }
      console.log(this.RankAdvancementArray);
      break;  
      default:
      this.RankAdvancementArray =  ["0"];
     }
       console.log(this.RankAdvancementArray);
     }
     




       // ------------------------------------------------------------------------------------------------------------

      // EXECUTIVE DIRECTOR
      if (this.fourthRank == 5) {

        console.log("RANK ======>  EXECUTIVE DIRECTOR");
        console.log("FIRST RANK ======>", this.firstRank);
        console.log("SECOND RANK ======>", this.secondRank);
        console.log("THIRD RANK ======>", this.thirdRank);
        console.log("BASE RANK ======>", this.baseRank);





        
        if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
          console.log("base rank is firstRank");
          newSbaseRank =  this.firstRank;

        }

       else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
          console.log("base rank is secondRank");
          newSbaseRank =  this.secondRank;

        }

        else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
          console.log("base rank is thirdRank");
          newSbaseRank =  this.thirdRank;

        }

      
       else {
        newSbaseRank =  this.thirdRank;

        } 


      //   if (this.baseRank > this.thirdRank && this.baseRank > this.secondRank && this.baseRank > this.firstRank)
      //  {
      //     console.log("base rank is higher than 3rd rank");
      //     newSbaseRank =  this.baseRank;
      //  }

       
      //   if ( this.firstRank > this.secondRank && this.firstRank > this.fourthRank &&  this.firstRank > this.thirdRank) {
      //   console.log("base rank is firstRank");

      //   newSbaseRank = this.firstRank
      //   }


      //   if (this.secondRank > this.fourthRank && this.secondRank > this.firstRank && this.secondRank > this.thirdRank ) {
      //   console.log("base rank is secondRank");
      //     newSbaseRank = this.secondRank
      //   }

      //   if (this.thirdRank > this.fourthRank && this.thirdRank > this.firstRank && this.thirdRank > this.secondRank ) {
      //     console.log("base rank is Thirdrank");
      //       newSbaseRank = this.thirdRank
      //     }

  
    
      
       console.log(" YOUR NEW BASE RANK IS ======>   ",newSbaseRank )
      
       switch(String(newSbaseRank)) {
 
      case "1":
      case "0":  
      //  Manager
      if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["2.5"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
 
     else {
         this.RankAdvancementArray = ["6","7","9","9"];
     }
     console.log(this.RankAdvancementArray);
     break;



     case "2":
     //SENIOR MANAGER
     if (this.baseRank == this.fourthRank) {
       this.RankAdvancementArray = ["3"];
     }
 
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
        this.RankAdvancementArray = ["7","9","9"];
      }
      
      break; 

      case "3":
      //  DIRECTOR

      if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["3"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
      }
      else {
       this.RankAdvancementArray = ["9","9"]
      }
      console.log(this.RankAdvancementArray);
      break;

      case "4":
      //  SENIOR DIRECTOR
      
      if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["3"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
        this.RankAdvancementArray = ["9"]
      }
      console.log(this.RankAdvancementArray);
      break; 
      
      case "5":
      //  SENIOR DIRECTOR
      
      if (this.baseRank == this.fourthRank) {
        this.RankAdvancementArray = ["3"];
      }
      else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
       this.RankAdvancementArray = ["5"];
 
      }
      else {
        this.RankAdvancementArray = ["5"]
      }
      console.log(this.RankAdvancementArray);
      break; 

      default:
      this.RankAdvancementArray =  ["0"];
     }
       console.log(this.RankAdvancementArray);
     }

 //  PRESIDENTIAL DIRECTOR
 if (this.fourthRank == 6) {
  console.log("PRESIDENTIAL DIRECTOR");
 
  if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
    console.log("base rank is firstRank");
    newSbaseRank =  this.firstRank;

  }

 else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
    console.log("base rank is secondRank");
    newSbaseRank =  this.secondRank;

  }

  else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
    console.log("base rank is thirdRank");
    newSbaseRank =  this.thirdRank;

  }

   else {
    newSbaseRank =  this.thirdRank;

  } 


  // if (this.baseRank > this.thirdRank)
  // {
  //    console.log("base rank is higher than 3rd rank");
  //    newSbaseRank =  this.baseRank;
  // }

  // else if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
  //  console.log("base rank is firstRank");

  //  newSbaseRank = this.firstRank
  //  }


  // else if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
  //  console.log("base rank is secondRank");
  //    newSbaseRank = this.secondRank
  //  }


  // else {
  //    newSbaseRank =  this.thirdRank;

  // } 


 console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )

switch(String(newSbaseRank)) {
case "1":
case "0":  
//  MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank)  {
 this.RankAdvancementArray = ["5"];

}
else {
 this.RankAdvancementArray = ["6","7","9","9","10"];
}

break;
case "2":
//  SENIOR MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];

}
else {
 this.RankAdvancementArray = ["7","9","9","10"];
}

break;        
case "3":
//  DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];

}
else {
 this.RankAdvancementArray = ["9","9","10"]
}

break;  
case "4":
//  SENIOR DIRECTOR 
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];

}
else {
 this.RankAdvancementArray = ["9","10"]
}

break;
case "5":
//  EXECUTIVE DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];

}
else {
 this.RankAdvancementArray = ["10"]
}
break;
case "6":
//  PRESIDENTIAL DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["3"];
}
else {
 this.RankAdvancementArray = ["5"]
}
break;
default:
this.RankAdvancementArray =  ["0"];
}
console.log(this.baseRank);
console.log(this.RankAdvancementArray);
     
}

// ------------------------------------------------

// PRESIDENTIAL SAPPHIRE

if (this.fourthRank == 7) {

  if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
    console.log("base rank is firstRank");
    newSbaseRank =  this.firstRank;

  }

 else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
    console.log("base rank is secondRank");
    newSbaseRank =  this.secondRank;

  }

  else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
    console.log("base rank is thirdRank");
    newSbaseRank =  this.thirdRank;

  }

   else {
    newSbaseRank =  this.thirdRank;

  } 

  // if (this.baseRank > this.thirdRank)
  // {
  //    console.log("base rank is higher than 3rd rank");
  //    newSbaseRank =  this.baseRank;
  // }

  // else if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
  //  console.log("base rank is firstRank");

  //  newSbaseRank = this.firstRank
  //  }


  // else if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
  //  console.log("base rank is secondRank");
  //    newSbaseRank = this.secondRank
  //  }


  // else {
  //    newSbaseRank =  this.thirdRank;

  // } 


 console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )



switch(String(newSbaseRank)) {
case "1":
case "0":  
//  MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["6","7","9","9","10","10"];
}

break;
case "2":
//  SENIOR MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["7","9","9","10","10"];
}  

break; 

case "3":
//  DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}

else {
 this.RankAdvancementArray = ["9","9","10","10"]
}

break;  
case "4":
//  SENIOR DIRECTOR 
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["9","10","10"]
}

break;

case "5":
//  EXECUTIVE DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10","10"]
}
break;

case "6":
//  PRESIDENTIAL DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}

else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}

else {
 this.RankAdvancementArray = ["10"]
}
break;

case "7":
//  PRESIDENTIAL SAPPHIRE
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10"]
}

break;
default:
this.RankAdvancementArray =  ["0"];
}
console.log(this.thirdRank);
console.log(this.RankAdvancementArray);
           
}


// PRESIDENTIAL RUBY
if (this.fourthRank == 8) {


  if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
    console.log("base rank is firstRank");
    newSbaseRank =  this.firstRank;

  }

 else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
    console.log("base rank is secondRank");
    newSbaseRank =  this.secondRank;

  }

  else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
    console.log("base rank is thirdRank");
    newSbaseRank =  this.thirdRank;

  }

   else {
    newSbaseRank =  this.thirdRank;

  } 

  // if (this.baseRank > this.thirdRank)
  // {
  //    console.log("base rank is higher than 3rd rank");
  //    newSbaseRank =  this.baseRank;
  // }

  // else if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
  //  console.log("base rank is firstRank");

  //  newSbaseRank = this.firstRank
  //  }


  // else if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
  //  console.log("base rank is secondRank");
  //    newSbaseRank = this.secondRank
  //  }


  // else {
  //    newSbaseRank =  this.thirdRank;

  // } 


 console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )

switch(String(newSbaseRank)) {
case "1":
case "0":  
//  Manager
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}

else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["6","7","9","9","10","10","10"];
}

break;
case "2":
//  SENIOR MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else if (this.secondRank == this.fourthRank) {
  this.RankAdvancementArray = ["10"];

 }

else {
 this.RankAdvancementArray = ["7","9","9","10","10","10"];
}

break; 
case "3":
//  DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}

else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["9","9","10","10","10"]
}

break;  
case "4":
//  SENIOR DIRECTOR 
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["9","10","10","10"]
}  

break;
case "5":
//  EXECUTIVE DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}

else {
 this.RankAdvancementArray = ["10","10","10"]
}

break;
case "6":
//  PRESIDENTIAL DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["10","10"];
}

break;

case "7":
//  PRESIDENTIAL SAPPHIRE
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["10"];
}
break;

case "8":
//  PRESIDENTIAL RUBY
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["4"];
}
else {
 this.RankAdvancementArray = ["10"];
}

break;
default:
this.RankAdvancementArray =  ["0"];
}
console.log(this.thirdRank);
console.log(this.RankAdvancementArray);
           
}


// PRESIDENTIAL DIAMOND
if (this.fourthRank == 9) {


  if (this.firstRank >= this.secondRank && this.firstRank >= this.thirdRank) {
    console.log("base rank is firstRank");
    newSbaseRank =  this.firstRank;

  }

 else if (this.secondRank >= this.firstRank && this.secondRank >= this.thirdRank) {
    console.log("base rank is secondRank");
    newSbaseRank =  this.secondRank;

  }

  else if (this.thirdRank >= this.secondRank && this.thirdRank >= this.firstRank) {
    console.log("base rank is thirdRank");
    newSbaseRank =  this.thirdRank;

  }

   else {
   newSbaseRank =  this.thirdRank;

  } 

  //  if (this.baseRank > this.thirdRank)
  // {
  //    console.log("base rank is higher than 3rd rank");
  //    newSbaseRank =  this.baseRank;
  // }

  // else if (this.firstRank > this.baseRank && this.firstRank > this.secondRank && this.firstRank > this.fourthRank) {
  //  console.log("base rank is firstRank");

  //  newSbaseRank = this.firstRank
  //  }


  // else if (this.secondRank > this.baseRank && this.secondRank > this.fourthRank && this.secondRank > this.firstRank) {
  //  console.log("base rank is secondRank");
  //    newSbaseRank = this.secondRank
  //  }


  // else {
  //    newSbaseRank =  this.thirdRank;

  // } 


 console.log("YOUR NEW BASE RANK IS ======>   ",newSbaseRank )


  
switch(String(newSbaseRank)) {
case "1":
case "0":  
//  MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["6","7","9","9","10","10","10","10"];
}

break;
case "2":
//  SENIOR MANAGER
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["7","9","9","10","10","10","10"];
}

break;
case "3":
//  DIRECTOR 
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}

else {
 this.RankAdvancementArray = ["9","9","10","10","10","10"];
}

break;
case "4":
//  SENIOR DIRECTOR
if (this.baseRank == this.fourthRank)  {
 this.RankAdvancementArray = ["5"];
}

else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}


else {
 this.RankAdvancementArray = ["9","10","10","10","10"];
}

break;
case "5":
//  EXECUTIVE DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10","10","10","10"];
}

break;
case "6":
//  PRESIDENTIAL DIRECTOR
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank ) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10","10","10"];
}

break;
case "7":
//  PRESIDENTIAL SAPPHIRE
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank ) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10","10"]
}
break;
case "8":
//  PRESIDENTIAL RUBY
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10"]
}

break;
case "9":
//  PRESIDENTIAL DIAMOND
if (this.baseRank == this.fourthRank) {
 this.RankAdvancementArray = ["5"];
}
else if (this.firstRank == this.fourthRank || this.secondRank == this.fourthRank) {
 this.RankAdvancementArray = ["10"];

}
else {
 this.RankAdvancementArray = ["10"]
}

break;
default:
this.RankAdvancementArray =  ["0"];
}
console.log(this.thirdRank);
console.log(this.RankAdvancementArray);
}


// RETURN TOTAL POINTS FOR THE MONTH OF DECEMBER
for (var x=0;x<this.RankAdvancementArray.length; x++) {
if(isNaN(parseFloat(this.RankAdvancementArray[x]))){
 continue;
}
 this.fourthTotalPoints += parseFloat(this.RankAdvancementArray[x]);
}
       
console.log(this.fourthTotalPoints);
this.computePoints();
this.computePackage();

return this.fourthTotalPoints;


      
     }




    // COMPUTE POINTS OF THE LAST THREE MONTHS

    computePoints() {
     console.log("OCTOBER  POINTS: ",this.firstTotalPoints);
     console.log("NOVEMBER POINTS: ",this.secondTotalPoints);
     console.log("DECEMBER POINTS: ",this.thirdTotalPoints);
     console.log("JANUARY POINTS: ",this.fourthTotalPoints);
     var point1 = String(this.firstTotalPoints);
     var point2 = String(this.secondTotalPoints);
     var point3 = String(this.thirdTotalPoints);
     var point4 = String(this.fourthTotalPoints);

     if (point1 != null || point2 != null || point3 != null  || point4 != null) {
       this.isResetShow = true;

     }
     this.totalPoints = 0;
     this.Total = [point1,point2,point3,point4]

     for (var i=0;i<this.Total.length; i++) {
      if(isNaN(parseFloat(this.Total[i]))){
       continue;
    }
        
      this.totalPoints +=  parseFloat(this.Total[i]);
    }
      console.log(this.Total);
      console.log(this.totalPoints);
  
      return this.totalPoints;
    }


    computePackage() {

     

      if (this.totalPoints >= 14) {

        this.totalPackage = 1;

      }
      if (this.totalPoints >= 24) {
        this.totalPackage = 2;

      }
     
         return this.totalPackage;
    }


    returnHome(){
      console.log("returnHome");
      this.navCtrl.popToRoot();

    }

 


}

