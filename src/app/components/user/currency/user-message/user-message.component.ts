import { Component, OnInit } from '@angular/core';
import {UserCommonService} from "../user-common.service";
import * as $ from "jquery";
import {HttpService} from "../../../../common/service/http.service";

/**
 * @desc 用户留言页面
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  pageNo = 1; // 当前页数
  pageSize = 20;  // 每页显示的数据数量 // 公司报告页面显示数据数量固定为20
  messageData: any; // 留言数据
  messageTotal: any;  // 个人留言总数量
  userId: any;  // 个人id

  constructor(
    private userCommon: UserCommonService,  // 引入UserCommonService服务
    private http: HttpService // 引入http组件
  ) { }

  ngOnInit() {
    this.messageInfo(this.pageSize, this.pageNo); // 初始化留言信息
    this.userId = this.http.getId();  // 初始化用户id
  }

  /**
   * 添加留言信息
   * @param id 用户id
   * @param title 留言标题
   * @param content 留言内容
   */
  messageUpdata(id, title, content) {
    // 赋值成json数据
    const data = {
      'ids': id,
      "title": title,
      "content": content,
    };
    // 访问messageUpdateService请求方法
    this.userCommon.messageUpdateService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          // 留言界面刷新数据
          this.messageInfo(this.pageSize, this.pageNo);
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })
  }

  /**
   * 重置事件
   */
  reset() {
    // 标题
    $('input[type="text"]').prop('value', '');
    // 内容
    $('textarea').prop('value', '');
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page; // 把当前页赋值给定义变量数据
    this.messageInfo(this.pageSize, this.pageNo); // 根据当前页和页面显示数量，刷新页面数据
  }


  /**
   * 显示留言信息
   * @param pageSize pageSize 页面显示数量
   * @param pageno pageNo 当前页
   */
  messageInfo(pageSize, pageno) {
    // 访问messageInfoService请求方法
    this.userCommon.messageInfoService(pageSize, pageno)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.messageData = response;  // 获取的数据赋值给定义变量messageData
          this.messageTotal = response['total'];  // 获取留言总条数
          console.log(response);
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })
  }

  /**
   * 根据id跳到查看详情页面
   * @param messageId 留言信息id
   */
  messageInfoSkip(messageId) {
    // 访问messageIdSkip方法
    this.userCommon.messageIdSkip(messageId);
  }
}
