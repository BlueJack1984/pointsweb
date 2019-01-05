import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  userdata: any;
  constructor(
    private management: ManagementService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userIdShow();
  }

  /**
   * 根据跳转的id查询并显示
   */
  userIdShow() {
    const typeid = 0;
    const userId = this.route.snapshot.paramMap.get('id');
    this.management.conditionService(typeid, userId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.userdata = response;
          console.log(response);
        } else {
          alert(response.message);
        }
      });
  }

}
