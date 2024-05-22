<template>
  <div class="index-layout">
    <el-container class="index-container1">
      <el-header height="100px" style="font-size: 20px;background-color: lightskyblue;text-align: center;font-size: 70px;font-family: Helvetica;color: ivory ">
        <el-icon class="index-setting">
          <Setting/>
        </el-icon>
        <el-icon class="index-monitor">
          <Monitor/>
        </el-icon>
        维通利软件平台
        <el-icon class="index-camera">
          <Camera/>
        </el-icon>
        <el-icon class="index-officebuilding">
          <OfficeBuilding/>
        </el-icon>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: dimgray ;line-height: 100vh ">
          <el-menu background-color="dimgray" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item>
              <el-icon><Compass/></el-icon>
              系统相关
            </el-menu-item>
            <el-menu-item>
              <el-icon><Location/></el-icon>
              PLM相关</el-menu-item>
            <el-menu-item>
              <el-icon><Location/></el-icon>
              ERP相关</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main >
          <el-button icon="Position" class="index-main-plm-app1" @click="plmorderinqueryHandler  ">
            订单导出
          </el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>
.index-layout{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ivory;
  .index-setting{
    top:20px;
    float: left;
  }
  .index-monitor{
    top:20px;
    float: left;
  }
  .index-camera{
    top:20px;
    float: right;
  }
  .index-officebuilding{
    top:20px;
    float: right;
  }
}

.index-container1{
  height: 100vh;
}
.index-main-plm-app1{
  width:200px;
  height:160px;
  float:left;
  background-color: #24CFEB;
  font-size: 20px;
  text-align: center;
  align-items: end;

}



</style>



<script >

import {Monitor, OfficeBuilding, Setting, Camera, Compass, Location} from "@element-plus/icons-vue";
import router from "@/router/router";



export default {
  name: "LoginPage",
  computed:{},
  setup(){},
  data(){},
  components:{ Monitor, OfficeBuilding, Setting,Camera,Compass,Location},
  methods:{
    plmorderinqueryHandler(){
      router.push( '/plmapp1')
    }
  },
}
</script>