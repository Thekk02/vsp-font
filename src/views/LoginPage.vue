<template>
  <div>
    <div class="bottom">
      <div class="div1">
        <div style="text-align: left;color:ivory;height: 80px;font-size: 42px;line-height: 80px;padding-left: 30px;font-weight: bold">
          维通利电气股份有限公司
        </div>
        <div>
          <div class="div2">
            <div class="div3">
              <el-card>
                <template #header>
                  <div style="font-size: 26px ">
                    请登录
                  </div>
                </template>
                <el-row justify="center">
                  <el-col :span="20">
                    <el-form>
                      <el-form-item>
                        <el-input  :prefix-icon="User" v-model="user.username" placeholder="请输入用户名"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-input  type="password" show-password :prefix-icon="Lock" v-model="user.password" placeholder="请输入密码"></el-input>
                      </el-form-item>
                    </el-form>
                    <div>
                      <el-row >
                        <el-col :span="12">
                          <el-link  type="primary" :underline="false" @click="registerHandler" >注册</el-link>
                        </el-col>
                        <el-col style="text-align: right" :span="12">
                          <!--                          <el-link  type="danger" :underline="false">忘记密码?</el-link>-->
                        </el-col>
                      </el-row>
                    </div>
                    <el-button  @keyup.down.enter="alert('123')" @click="loginHandler" style="background:#247ff2;color:#ffffff; width: 100%;margin-top: 10px">登录</el-button>
                  </el-col>
                </el-row>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {login} from "@/api/api";
// import {useStore} from 'vuex'
import router from "@/router/router.js";
import {User,Lock,View} from "@element-plus/icons-vue";
import md5 from 'js-md5';

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
  },
  setup() {
    // return {
    //   store: useStore()
    // }
  },

  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  components: {},
  methods: {

    registerHandler(){
      router.push({path: '/register'})
    },


    loginHandler() {
      this.user.password = md5(this.user.password)

      login(this.user).then((resp => {
        if (resp.data.code === 200) {
          //this.store.commit('setUser', resp.data.data)
          router.push({path: '/index'})
        }
      }))
    },
  },

}
</script>

<style>




.div2{
  position: relative;
  margin: auto auto;
  width: 400px;
  .div3{
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    opacity: 0.9;
  }
}

.div1 {
  background-image:url("@/pictures/bench.jpg");
  background-size: 1920px;
  height: 100vh;
}

</style>
