import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

/**
 * @desc 显示用户个人福利积分
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-point',
  templateUrl: './user-point.component.html',
  styleUrls: ['./user-point.component.css']
})
export class UserPointComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  pointData: any; // 个人福利积分数据
  pointTotal: any;  // 个人福利积分数据总数
  pageNo = 1; // 当前页数
  pageSize = 20;  // 每页显示的数据数量  // 公司报告页面显示数据数量固定为20

  constructor(
    private userCommon : UserCommonService  // 引入UserCommonService服务
  ) { }

  ngOnInit() {
    this.pointInfo(this.pageSize, this.pageNo);  // 初始化个人福利积分
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page; // 把当前页赋值给定义变量数据
    this.pointInfo(this.pageSize, this.pageNo); // 根据当前页和页面显示数量，刷新页面数据
  }

  /**
   * 显示个人福利积分
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  pointInfo(pageSize, pageNo) {
    // 访问pointService请求方法
    this.userCommon.pointService(pageSize, pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.pointData = response;  // 获取的数据赋值给定义变量pointData
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })

  }
}
