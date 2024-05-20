<template>
  <div>
    <div class="bottom">
      <div class="div1">
        <div style="text-align: left;color:ivory;height: 80px;font-size: 42px;line-height: 80px;padding-left: 30px;font-weight: bold">
          维通利电气集团
        </div>
        <div class="loginbottom">
          <div class="login">
            <el-card>
              <template #header>
                <div style="font-size: 26px;text-align: center" >
                  请登录
                </div>
              </template>
              <el-row justify="center">
                <el-col span="20">
                  <el-form>
                    <el-form-item>
                      <!--                      <el-input :prefix-icon = "User" v-model="User.username" placeholder="请输入用户名"></el-input>-->
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>

            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import {login, systemCaptcha} from "@/api/api";
// import {useStore} from 'vuex'
// import router from "@/router/router.js";
import {User,Lock,View} from "@element-plus/icons-vue";

export default {
  name:"LoginPage",
  computed:{
    User(){
      return User
    },
    Lock() {
      return Lock
    },
    View() {
      return View
    }
  }
}
</script>

<style>




.bottom{
  position : absolute;
  width : 100%;
  height : 100%;
  margin : 0;
  padding : 0;
  background-image: url("@/pictures/bench.jpg");
}
.loginbottom{
  position: relative;
  margin: auto auto;
  width: 400px;
  .login{
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    opacity: 0.9;
  }


}
</style>
