import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserCommonService} from "../user-common.service";

/**
 * @desc 根据留言id显示留言信息
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-message-info',
  templateUrl: './user-message-info.component.html',
  styleUrls: ['./user-message-info.component.css']
})
export class UserMessageInfoComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  data: any;  // 根据id留言数据
  constructor(
    private router: Router, // 引入Router路由组件
    private route: ActivatedRoute,  // 引入ActivatedRoute组件
    private userCommon : UserCommonService  // 引入UserCommonService组件
  ) { }

  ngOnInit() {
    this.messageIdInfo(); // 根据id初始化留言信息
  }

  /**
   * 根据id显示信息
   */
  messageIdInfo() {
    const messageId = this.route.snapshot.paramMap.get('id'); // 获取url显示的id
    // 访问messageIdInfoService请求方法
    this.userCommon.messageIdInfoService(messageId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.data = response;// 获取的数据赋值给定义变量data
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })
  }
}
