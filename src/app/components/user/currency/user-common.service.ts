import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpService } from '../../../common/service/http.service';
import { Router } from '@angular/router';

/**
 * @desc 用户界面service服务
 * @author lilong
 * @date 2018-12-30
 */

@Injectable({
  providedIn: 'root'
})
export class UserCommonService {

  constructor(
    private router: Router, // 引入Router路有组件
    private httpService: HttpService // 引入http组件
  ) { }


  /**
   * 修改密码
   * @param data 修改密码的参数
   */
  userRepassService(data) {
    const url = environment.apiUserUrl + '/user/personal/password'; // 设定用户修改密码api接口
    return this.httpService.postData(url, data); // 访问http的post请求
  }

  /**
   * 显示个人档案
   */
  userInfoService() {
    const url = environment.apiUserUrl + '/user/personal/info';// 设定用户显示个人档案api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 居住权证登记
   * @param data 居住证信息
   */
  regAddService(data) {
    const url = environment.apiUserUrl + '/user/save'; // 设定居住权证登记api接口
    return this.httpService.postData(url, data); // 访问http的post请求
  }


  /**
   * 显示消费记录
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  moneyService(pageSize, pageNo) {
    const pagesize = 'pageSize=' + pageSize;  // 页面显示数量
    const pageno = 'pageNo=' + pageNo;  // 当前页数
    const url = environment.apiUserUrl + '/consume/record/list/page?' + pagesize + '&' + pageno; // 设定用户修改密码api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 显示个人福利积分
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  pointService(pageSize, pageNo) {
    const pagesize = 'pageSize=' + pageSize;  // 页面显示数量
    const pageno = 'pageNo=' + pageNo;  // 当前页数
    const url = environment.apiUserUrl + '/personal/bonus/list/page?' + pagesize + '&' + pageno; // 设定个人福利积分api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 发送留言信息
   */
  messageUpdateService(data) {
    const url = environment.apiUserUrl + '/message/save'; // 设定用户留言信息api接口
    return this.httpService.postData(url,data); // 访问http的post请求
  }

  /**
   * 显示会员留言信息
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  messageInfoService(pageSize, pageNo) {
    const pagesize = 'pageSize=' + pageSize;  // 页面显示数量
    const pageno = 'pageNo=' + pageNo;  // 当前页数
    const url = environment.apiUserUrl + '/message/list/page?' + pagesize + '&' + pageno; // 设定会员留言信息api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 根据id跳到查看留言详情页面
   * @param id 留言id
   */
  messageIdSkip(id) {
    this.router.navigateByUrl('/messageinfo/' + id);  // 根据id跳转网页
  }
  /**
   * 根据id显示留言信息
   * @param messageId
   */
  messageIdInfoService(messageId) {
    const url = environment.apiUserUrl + '/message/get/' + messageId; // 设定id查询信息api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * k线图
   * @param num 半年的数值
   */
  userTbKlineService(num) {
    const url = environment.apiUserUrl + '/stock/list/' + num; // 设定K线图api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 获取公告首页
   */
  newService() {
    const url = environment.apiUserUrl + '/announcement/list/page?pageSize=10&pageNo=1'; // 设定首页公告api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 客户端验证码
   */
  generateService() {
    const url = environment.apiUserUrl + '/security/captcha/generate'; // 设定验证码api接口
    return this.httpService.getData(url); // 访问http的get请求
  }

  /**
   * 登陆验证
   */
  loginService(data) {
    const url = environment.apiUserUrl + '/security/login'; // 设定登陆api接口
    return this.httpService.postData(url, data); // 访问http的post请求
  }
}
