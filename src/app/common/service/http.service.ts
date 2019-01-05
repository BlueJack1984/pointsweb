import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * @desc http 共通请求
 * @author lilong
 * @date 2018-12-10
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient  // 引入http组件
  ) { }


  /**
   * 在storage处存入用户token
   * @param value token的值
   */
  setToken(value) {
    window.localStorage.token = value;
  }
  /**
   * 从storage处取出用户token
   */
  getToken() {
    if (window.localStorage.token == null) {
      window.localStorage.token = '';
    }
    return window.localStorage.token;
  }

  /**
   * 在storage处存入用户id
   * @param value id的值
   */
  setId(value) {
    window.localStorage.id = value;
  }

  /**
   * 从storage处取出用户id
   */
  getId() {
    if (window.localStorage.id == null) {
      window.localStorage.id = '';
    }
    return window.localStorage.id;
  }
  /**
   * psot请求
   * @param url api接口地址
   * @param data 传入JSON数据
   */
  postData(url: string, data: any) {
    //headers请求参数头
    console.log(data);
    return this.http.post(url, data, {headers: {
      'Content-Type': 'application/json','Authorization': this.getToken(), '_current_id': this.getId()}
    })
  }
  /**
   * get请求
   * @param url api接口地址
   */
  getData(url: string) {
    // headers请求参数头
    return this.http.get(url, {headers: {
       'Authorization': this.getToken(), '_current_id': this.getId()}
    });
  }

}
