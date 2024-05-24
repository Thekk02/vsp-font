

<template >
<div class="plm-orderinquery">
  <div class="plm-orderinquery-layout">
    <el-container class="plm-orderinquery-container1" style="height: 100vh">
      <el-header height="100px" style="font-size: 20px;background-color: lightskyblue;text-align: center;font-size: 70px;font-family: Helvetica;color: ivory ">
        散热器订单导出
      </el-header>
      <el-container>
        <el-main class="">
          <div class="plm-orderinquery-queryparameters">
            <el-row>
              <el-form-item label="订单号">
                <el-col :span="24">
                  <el-input v-model="radiatorinqueryparameters.orderid" placeholder="请输入订单号"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="图号">
                <el-col :span="24">
                  <el-input v-model="radiatorinqueryparameters.drawingid" placeholder="请输入图号"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="开始时间">
                <el-col :span="8">
                  <el-date-picker v-model="radiatorinqueryparameters.startdate" format="YYYY-MM-DD" value-format="YYYY-MM-DD"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="截止时间">
                  <el-col :span="8">
                    <el-date-picker v-model="radiatorinqueryparameters.enddate" format="YYYY-MM-DD" value-format="YYYY-MM-DD"></el-date-picker>
                  </el-col>
                </el-form-item>
              <el-form-item>
                  <el-button color="#599E5E" style="margin-left: 50px;margin-right: 50px" @click="inqueryhandler">
                    搜索订单
                  </el-button>
              </el-form-item >
              <el-form-item>
                  <el-button color="#C94F4F" style="margin-left: 50px;margin-right: 50px" @click="exporthandler">
                    导出报表
                  </el-button>
              </el-form-item>
            </el-row>

          </div>
          <div class="plm-orderinquery-queryresult">
            <el-table :data = "list" border height="770" id="inqueryresults"
                       :cell-style="{padding:'20px 0'}" >
              <el-table-column prop="orderId" label="销售订单号" width="100" >
              </el-table-column>
              <el-table-column prop="lineNumber" label="行号" width="80">
              </el-table-column>
              <el-table-column prop="customerCode" label="客户编码" width="100">
              </el-table-column>
              <el-table-column prop="preShipmentdate" label="预发货日期" width="100">
              </el-table-column>
              <el-table-column prop="drawingNumber" label="图号" width="100">
              </el-table-column>
              <el-table-column prop="matertialCode" label="物料编码" width="100">
              </el-table-column>
              <el-table-column prop="inventoryCode" label="存货代码" width="100">
              </el-table-column>
              <el-table-column prop="specification" label="规格" width="100">
              </el-table-column>
              <el-table-column prop="controllNumber" label="受控号" width="100">
              </el-table-column>
              <el-table-column prop="unit" label="单位" width="100">
              </el-table-column>
              <el-table-column prop="quantity" label="数量" width="100">
              </el-table-column>
              <el-table-column prop="quotationSerialNumber" label="报价流水号" width="100">
              </el-table-column>
              <el-table-column prop="upgradeSerialNumber" label="升级流水号" width="100">
              </el-table-column>
              <el-table-column prop="madeDate" label="制单日期" width="100">
              </el-table-column>
              <el-table-column prop="auditDate" label="审核日期" width="100">
              </el-table-column>
              <el-table-column prop="remark" label="备注" width="100">
              </el-table-column>
              <el-table-column prop="techPerson" label="技术" width="100">
              </el-table-column>
              <el-table-column prop="merchandiser" label="跟单员" width="100">
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</div>
</template>

<style scoped>
.plm-orderinquery-layout{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ivory;
}
</style>


<script >



import * as XLSX from "xlsx";
import * as  FileSaver  from "file-saver";
import {RadiatorOrderInquiry} from "@/api/api";
// import {useStore} from "vuex";


export default {
  name:"RadiatorOrderInquiry",
  computed:{},
  setup() {

  },

  data() {
    return {
      radiatorinqueryparameters: {
        orderid: '',
        drawingid: '',
        startdate:'',
        enddate:""
      },
      list: [],
    }
  },
  components: {},
  methods: {
    inqueryhandler(){
      // let data = this.$data.radiatorinqueryparameters
      RadiatorOrderInquiry(this.radiatorinqueryparameters).then((resp) =>{this.list = resp.data.data})

    },
    exporthandler(){
      // 1.生成Excel工作簿对象
      var wb = XLSX.utils.table_to_book(document.querySelector('#inqueryresults'));
      // 获取二进制字符串作为输出
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        book: true,
        type: 'array',
      })
      try {
        FileSaver.saveAs(
            // Blob: 对象表示一个不可变 原始数据的类文件对象,不一定是JS原生格式的数据。
            // File: 基于Blob，继承了blob的功能并将其扩展使其支持用户系统上的文件。
            new Blob([wbout], { type: 'appliction/octet-stream' }),
            // 设置导出的文件名称可随意
            '订单查询结果.xlsx'
        )
      } catch (e) {
        if (typeof console != 'undefined') console.log(e, wbout);
      }
      // 返回一个新创建的Blob对象，其内容由参数中给定的数组串联组成。
      return wbout;

    },
  }

}
</script>