import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

/**
 * @desc 显示用户消费记录
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-money',
  templateUrl: './user-money.component.html',
  styleUrls: ['./user-money.component.css']
})
export class UserMoneyComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  moneyData: any; // 消费数据
  moneyTotal: any;  // 消费数据总数
  pageNo = 1; // 当前页数
  pageSize = 20;  // 每页显示的数据数量  // 公司报告页面显示数据数量固定为20

  constructor(
    private userCommon: UserCommonService  // 引入UserCommonService服务
  ) { }

  ngOnInit() {
    this.moneyInfo(this.pageSize, this.pageNo);  // 初始化消费记录
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page; // 把当前页赋值给定义变量数据
    this.moneyInfo(this.pageSize, this.pageNo); // 根据当前页和页面显示数量，刷新页面数据
  }
  /**
   * 显示消费记录
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  moneyInfo(pageSize, pageNo) {
    // 访问moneyService请求方法
    this.userCommon.moneyService(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.moneyData = response;  // 获取的数据赋值给定义变量moneyData
          this.moneyTotal = response['total'];  // 获取消费总条数
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })
  }
}
