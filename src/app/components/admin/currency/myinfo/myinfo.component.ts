import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  data: any;
  constructor(
    private currency: CurrencyService
  ) { }

  ngOnInit() {
    this.myinfo();
  }

  /**
   * 显示个人信息
   */
  myinfo() {
    this.currency.myinfoService()
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.data = response;
        console.log(this.data);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

}
