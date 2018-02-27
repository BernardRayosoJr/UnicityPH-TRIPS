import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MaldiveRanksPage } from '../maldive-ranks/maldive-ranks';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { TokyoRanksPage } from '../tokyo-ranks/tokyo-ranks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage   {


  token: any;
  baID: number;
  fullname: string;
  address: string;

  url_quiz: string;



  // 1wmIJh1HWASMEOzyU0waLpcimJmK4RlOH8VCBYLQqOeI
  // https://script.googleusercontent.com/macros/echo?user_content_key=LVsqcTapK4uH3B_u8OVkq3XIRMdJuYSPuwjfcvjBkbMGSfQHxk-MoWtfOTcTkKihbO55mSBueNycmw2WA2AmE09EquEmMQ1eOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKpwtG5LAiMuMWvcRVwys_oc
  
  
  constructor(public http: Http, public navCtrl: NavController, private navParams: NavParams,) {}
  
  openPage(page) {
   
    var trust_link ="";
    if (page == "maldives") {
      this.navCtrl.push(MaldiveRanksPage);
    }
     if (page == "korea") {
      trust_link = "https://www.youtube.com/watch?v=ISOkzGRvgQE&feature=youtu.be"
      window.open(trust_link,'_system','location=yes');
    }
    if (page == "tokyo") {
      this.navCtrl.push(TokyoRanksPage);
    }
  }
}


