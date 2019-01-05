import { Component, OnInit } from '@angular/core';
import {UserCommonService} from "../../currency/user-common.service";
import {HttpService} from "../../../../common/service/http.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  userHeader: any;

  constructor(
    private userCommon: UserCommonService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.userInfo();
  }


  /**
   * 显示会员信息
   */
  userInfo() {
    this.userCommon.userInfoService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.userHeader = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      })
  }
}
