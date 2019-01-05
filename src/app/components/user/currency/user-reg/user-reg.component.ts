import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';
import * as $ from "jquery";

/**
 * @desc 登陆用户居住权证
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  /**
   * 定义接收数据变量
   */

  // 各个省名
  provinces = ['请选择省份','北京市','上海市','天津市','重庆市','河北省','山西省',
    '内蒙古省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省',
    '山东省','河南省','湖北省','湖南省','广东省','广西省','海南省','四川省','贵州省',
    '云南省','西藏省','陕西省','甘肃省','宁夏省','青海省','新疆省','香港','澳门','台湾'];


  constructor(
    private userCommon: UserCommonService  // 引入UserCommonService服务
  ) { }

  ngOnInit() {
  }

  /**
   * 添加居住证信息等数据
   * @param account 账户
   * @param realName 真实姓名
   * @param gender 性别
   * @param rankId 会员等级id
   * @param identityNumber 身份证号
   * @param password 新建密码
   * @param surePassword 确认密码
   * @param phone 手机号码
   * @param province 省
   * @param city 城市
   * @param address 详细地址
   * @param certificationTime 发布时间
   */
  regAdd(
    account, realName, gender, rankId,
    identityNumber, password, surePassword,
    phone, province, city, address, certificationTime
  ) {
    console.log(rankId,gender);
    // 赋值成json数据
    const data = {
      'account': account,
      'realName': realName,
      'gender': gender,
      'rankId': rankId,
      'identityNumber': identityNumber,
      'password': password,
      'surePassword': surePassword,
      'phone': phone,
      'province': province,
      'city': city,
      'address': address,
      'certificationTime': certificationTime,
    };
    // 访问regAddService请求方法
    this.userCommon.regAddService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          alert('登记成功');
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
    $('input[type="text"]').prop('value', '');
  }
}
