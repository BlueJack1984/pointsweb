import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tb-index-kline',
  templateUrl: './tb-index-kline.component.html',
  styleUrls: ['./tb-index-kline.component.css'],
  providers: [DatePipe]
})
export class TbIndexKlineComponent implements OnInit {

  // 指数数据
  exponentData: any[] = [];
  // 天宝和上证指数日期数组
  exponentDate: any[] = [];
  // 上证指数数据二维数组
  shExponentData: Array<Array<number>> = new Array<Array<number>>();
  // 上证指数数据一维数组，为了存入到二维数组里
  shdata: Array<number> = new Array<number>();

  // 天宝指数数据二维数组
  tbExponentData: Array<Array<number>> = new Array<Array<number>>();
  // 天宝指数数据一维数组，为了存入到二维数组里
  tbdata: Array<number> = new Array<number>();

  shExponent: any;
  tbExponent: any;

  constructor(
    private currency: CurrencyService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.exponent();

  }

  /**
   * 获取指数数据
   */
  exponent() {
    this.currency.exponentsService(10)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.exponentData = response.data;
          for (let i = 0; i < this.exponentData.length; i++) {
            this.shExponentData[i] = [];
            this.tbExponentData[i] = [];
            this.exponentDate[i] = this.datePipe.transform(this.exponentData[i].createTime, 'yyyy-MM-dd');
            this.shExponentData[i].push(this.shdata[0] = this.exponentData[i].shOpenExponent);
            this.shExponentData[i].push(this.shdata[1] = this.exponentData[i].shCloseExponent);
            this.shExponentData[i].push(this.shdata[2] = this.exponentData[i].shMinExponent);
            this.shExponentData[i].push(this.shdata[3] = this.exponentData[i].shMaxExponent);
            this.tbExponentData[i].push(this.tbdata[0] = this.exponentData[i].tbOpenExponent);
            this.tbExponentData[i].push(this.tbdata[1] = this.exponentData[i].tbCloseExponent);
            this.tbExponentData[i].push(this.tbdata[2] = this.exponentData[i].tbMinExponent);
            this.tbExponentData[i].push(this.tbdata[3] = this.exponentData[i].tbMaxExponent);
          }
          /**
           * 上证指数k线图
           */
          this.shExponent = {
            title : {
              text: '近半年上证指数'
            },
            tooltip : {
              trigger: 'axis',
              formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[1] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[2] + '  最低 : ' + params[0].value[4];
                return res;
              }
            },
            legend: {
              data:['上证指数']
            },
            toolbox: {
              show : true,
              feature : {
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            dataZoom : {
              show : true,
              realtime: true,
              start : 50,
              end : 100
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : this.exponentDate
              }
            ],
            yAxis : [
              {
                type : 'value',
                scale:true,
                boundaryGap: [0.01, 0.01]
              }
            ],
            series : [
              {
                name:'上证指数',
                type:'k',
                data: this.shExponentData
              }
            ]
          };

          /**
           * 天宝指数k线图
           */
          this.tbExponent = {
            title : {
              text: '近半年天宝指数'
            },
            tooltip : {
              trigger: 'axis',
              formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  开盘 : ' + params[0].value[1] + '  最高 : ' + params[0].value[3];
                res += '<br/>  收盘 : ' + params[0].value[2] + '  最低 : ' + params[0].value[4];
                return res;
              }
            },
            legend: {
              data:['天宝指数']
            },
            toolbox: {
              show : true,
              feature : {
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            dataZoom : {
              show : true,
              realtime: true,
              start : 50,
              end : 100
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : this.exponentDate
              }
            ],
            yAxis : [
              {
                type : 'value',
                scale:true,
                boundaryGap: [0.01, 0.01]
              }
            ],
            series : [
              {
                name:'上证指数',
                type:'k',
                data: this.tbExponentData
              }
            ]
          };
        } else {
          alert(response.message);
          return false;
        }
      })
  }



}
